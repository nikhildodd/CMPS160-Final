var _renderer = null;
var isGameOver = false;
/**
 * Specifies a WebGL render. Used alongside Spring 2019 CMPS 160's Scene,
 * Camera, Geometry, and other subclasses.
 *
 * @author Lucas N. Ferreira
 * @this {Renderer}
 */
class Renderer {
   /**
    * Constructor for Renderer.
    *
    * @constructor
    * @returns {Renderer} Renderer object created
    */
    constructor(gl, ctx,end,start,goal,scene, camera) {
        this.gl = gl;
        this.ctx = ctx;
        this.end = end;
        this.startMSG = start;
        this.goalMSG = goal;
        this.scene = scene;
        this.camera = camera;

        this.textures = {};

        this.lightRotationMatrix = new Matrix4();
        this.lightRotationMatrix.setRotate(0.1, -2,-2, 2);

        this.originMatrix = new Matrix4();
        this.originMatrix.setTranslate(-16, 0, -16);

        this.translationMatrix = new Matrix4();
        this.translationMatrix.setTranslate(16, 0, 16);

        this.initGLSLBuffers();

        // Setting canvas' clear color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        // Use the z-buffer when drawing
        this.gl.enable(gl.DEPTH_TEST);

        _renderer = this;
    }

    /**
     * Starts an animation loop
     */
    start() {
        _renderer.render();
        requestAnimationFrame(_renderer.start);
    }

    /**
     * Renders all the geometry within the scene.
     */
    render() {
        // Clear the geometry onscreen
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

        for (var i = 0; i < this.scene.geometries.length; i++) {
            var geometry = this.scene.geometries[i];

            // Switch to shader attached to geometry
            this.gl.useProgram(geometry.shader.program)
            this.gl.program = geometry.shader.program

            if(this.scene.light != null) {
                this.scene.light.pos = this.translationMatrix.multiplyVector3(this.scene.light.pos);
                this.scene.light.pos = this.lightRotationMatrix.multiplyVector3(this.scene.light.pos);
                this.scene.light.pos = this.originMatrix.multiplyVector3(this.scene.light.pos);
                geometry.shader.setUniform("u_LightPos", this.scene.light.pos.elements);
                geometry.shader.setUniform("u_AmbientColor", this.scene.light.ambient);
                geometry.shader.setUniform("u_DiffuseColor", this.scene.light.diffuse);
            }

            geometry.shader.setUniform("u_ViewMatrix", this.camera.viewMatrix.elements);
            geometry.shader.setUniform("u_ProjectionMatrix", this.camera.projectionMatrix.elements);
            geometry.shader.setUniform("u_CamPos", this.camera.eye.elements);

            if(geometry.image != null) {
                if(!(geometry.image.src in this.textures)) {
                    // Create a texture object and store id using its path as key
                    this.textures[geometry.image.src] = this.gl.createTexture();
                    this.loadTexture(this.textures[geometry.image.src], geometry.image);
                }
                else {
                 // Enable texture unit0
                  this.gl.activeTexture(this.gl.TEXTURE0);
                  // Bind the texture object to the target
                    this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures[geometry.image.src]);
                }
            }

            this.drawHUD(this.ctx);
            if(moveCount == 300){
              if(!GOAL)
              this.drawGameOver(this.end);
            }
            if(lavaDeath==true){
              if(!GOAL)
              this.drawGameOver(this.end);
            }
            if(resetIt){
              this.end.clearRect(0, 0, 400, 400); // Clear <hud>

              resetIt = false;
            }
            if(moveCount < 13){
              this.drawStartMessage(this.startMSG);
            }else{
              this.startMSG.clearRect(0,0,400,400);
            }
            if(!isGameOver){
            if(GOAL){
              this.drawGoalMessage(this.goalMSG);
            }
          }

            // Callback function in the case user wants to change the
            // geometry before the draw call
            geometry.render();

            // Set attribute buffer with the geometry data
            this.sendVertexDataToGLSL(geometry.data, geometry.dataCounts, geometry.shader);

            // Passes the indices of a geometry to the index buffer a
            this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, geometry.indices, this.gl.STATIC_DRAW);

            // Draw geometries using current buffer data
            this.gl.drawElements(this.gl.TRIANGLES, geometry.indices.length, this.gl.UNSIGNED_SHORT, 0);
        }
    }

    /**
     * Initializes a single index and single attribute buffer for future use
     */
    initGLSLBuffers() {
        var attributeBuffer = this.gl.createBuffer();
        var indexBuffer = this.gl.createBuffer();

        if (!attributeBuffer || !indexBuffer) {
            console.log("Failed to create buffers!");
            return;
        }

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attributeBuffer);
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    }

    /**
     * Sends an array of interleaved vertex information the shader.
     *
     * @private
     * @param {Float32Array} data Data being sent to attribute variable
     * @param {Number} dataCount The amount of data to pass per vertex
     * @param {String} attribName The name of the attribute variable
     */
    sendVertexDataToGLSL(data, dataCounts, shader) {
      var FSIZE = data.BYTES_PER_ELEMENT;

      this.gl.bufferData(this.gl.ARRAY_BUFFER, data, this.gl.STATIC_DRAW);

      var dataEnd = 0;
      for (var i = 0; i < dataCounts.length; i++) {
        dataEnd += dataCounts[i];
      }
      dataEnd *= FSIZE;

      var i = 0;
      var currentDataStart = 0;

      // Send attributes
      for (const attributeName in shader.attributes) {
          var attribute = shader.attributes[attributeName].location;

          this.gl.vertexAttribPointer(attribute, dataCounts[i], this.gl.FLOAT, false, dataEnd, currentDataStart);
          this.gl.enableVertexAttribArray(attribute);

          currentDataStart += FSIZE * dataCounts[i];

          i += 1;
       }

       // Send uniforms
       for (const uniformName in shader.uniforms) {
           this.sendUniformToGLSL(shader.uniforms[uniformName]);
        }
    }

    /**
     * Passes a uniform's value to it's saved location
     * @private
     * @param uniform An associative array with the location and value of a uniform
     */
    sendUniformToGLSL(uniform) {
        switch (uniform.type) {
            case "float":
              this.gl.uniform1f(uniform.location, uniform.value);
              break;
            case "vec2":
              this.gl.uniform2fv(uniform.location, uniform.value);
              break;
            case "vec3":
              this.gl.uniform3fv(uniform.location, uniform.value);
              break;
            case "vec4":
              this.gl.uniform4fv(uniform.location, uniform.value);
              break;
            case "mat2":
              this.gl.uniformMatrix2fv(uniform.location, false, uniform.value);
              break;
            case "mat3":
              this.gl.uniformMatrix3fv(uniform.location, false, uniform.value);
              break;
            case "mat4":
              this.gl.uniformMatrix4fv(uniform.location, false, uniform.value);
              break;
            case "sampler2D":
              this.gl.uniform1i(uniform.location, uniform.value);
              break;
        }
    }
    drawHUD(ctx) {
      ctx.clearRect(0, 0, 130, 70); // Clear <hud>
  // Draw triangle with white lines
  ctx.beginPath();                      // Start drawing
  ctx.moveTo(5, 5); ctx.lineTo(5, 60); ctx.lineTo(120,60); ctx.lineTo(120, 5);
  ctx.closePath();

  ctx.strokeStyle = 'rgba(255, 255, 255, 1)'; // Set white to color of lines
  ctx.stroke();
      ctx.strokeStyle = 'rgba(255, 255, 255, 1)'; // Set white to color of lines
      ctx.stroke();                           // Draw Triangle with white lines
      // Draw white letters
      ctx.font = '25px "Chalkboard"';
      ctx.fillStyle = 'rgba(255, 255, 255, 1)'; // Set white to the color of letters
      ctx.fillText('MAZE', 28, 30);
      ctx.font = '14px "Chalkboard"';
      ctx.fillText('moves: ' + moveCount,30,50);

  }
  drawGameOver(end){
  document.getElementById('bgm').pause();
document.getElementById('gameoverSound').play();

          end.clearRect(0, 0, 400, 400); // Clear <hud>
  // Draw triangle with white lines
  end.beginPath();                      // Start drawing
  end.moveTo(5, 5); end.lineTo(5, 60); end.lineTo(120,60); end.lineTo(120, 5);
  end.closePath();

  end.strokeStyle = 'rgba(255, 255, 255, 1)'; // Set white to color of lines
  end.stroke();
      end.strokeStyle = 'rgba(255, 255, 255, 1)'; // Set white to color of lines
      end.stroke();                           // Draw Triangle with white lines
      // Draw white letters
      end.font = '50px "Chalkboard"';
      end.fillStyle = 'rgba(255, 0, 0, 1)'; // Set white to the color of letters
      if(lavaDeath==false){
      end.fillText('GAME OVER', 65, 200);
      }else if (lavaDeath==true){
        end.fillText('lava killed u', 70, 200);
        lavaDeath = false;
      }
      end.font = '25px "Chalkboard"';
      end.fillText('press b to restart', 115, 250);

      isGameOver = true;

  }
    drawStartMessage(start){

document.getElementById('bgm').play();

      start.clearRect(0, 0, 400, 400); // Clear <hud>
      start.strokeStyle = 'rgba(255, 255, 255, 1)'; // Set white to color of lines
      start.stroke();
      start.strokeStyle = 'rgba(255, 255, 255, 1)'; // Set white to color of lines
      start.stroke();                           // Draw Triangle with white lines
      // Draw white letters
      start.font = '20px "Chalkboard"';
      start.fillStyle = 'rgba(255, 255, 255, 1)'; // Set white to the color of letters
      
      start.fillText('walk through the door to start', 60, 200);

  }
    drawGoalMessage(goal){

  document.getElementById('bgm').pause();
document.getElementById('endingSong').play();

      goal.clearRect(0, 0, 400, 400); // Clear <hud>
      goal.strokeStyle = 'rgba(255, 255, 255, 1)'; // Set white to color of lines
      goal.stroke();
      goal.strokeStyle = 'rgba(255, 255, 255, 1)'; // Set white to color of lines
      goal.stroke();                           // Draw Triangle with white lines
      // Draw white letters
      goal.font = '33px "Chalkboard"';
      goal.fillStyle = 'rgba(255, 0, 255, 1)'; // Set white to the color of letters
      
      goal.fillText('YOURE WINNRER!', 50, 175);
      goal.fillText('IN ' + moveCount + ' MOVES', 90, 220);
      goal.fillText(':-)', 175, 250);



  }
    loadTexture(texture, image) {
        // Flip the image's y axis
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, 1);

        // Enable texture unit0
        this.gl.activeTexture(this.gl.TEXTURE0);

        // Bind the texture object to the target
        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);

        // Set the texture parameters
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);

        // Set the texture image
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, image);
    }
}
