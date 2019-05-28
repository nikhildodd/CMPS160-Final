var shader = null;


function main() {  
var map =     [[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0.6,1.2,1.8,2.4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],
               [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]];
  
  // Retrieve the canvas from the HTML document
  canvas = document.getElementById("webgl");

  // Retrieve WebGL rendering context
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get WebGL rendering context.");
    return;
  }

  var light = new Light(5, 35 ,5);

  // Initialize the scene
  var scene = new Scene();
  scene.setLight(light);
  var camera = new Camera();

  var inputHandler = new InputHandler(canvas, scene, camera);

  // Initialize shader
  shader = new Shader(gl, ASG4_VSHADER, ASG4_FSHADER);

  // Add attibutes
  shader.addAttribute("a_Position");
  shader.addAttribute("a_Color");
  shader.addAttribute("a_TexCoord");
  shader.addAttribute("a_Normal");

  shader.addUniform("u_Sampler", "sampler2D", new Matrix4().elements);
  shader.addUniform("u_NormalMatrix", "mat4", new Matrix4().elements);
  shader.addUniform("u_ViewMatrix", "mat4", new Matrix4().elements);
  shader.addUniform("u_ProjectionMatrix", "mat4", new Matrix4().elements);


  shader.addUniform("u_LightPos", "vec3", new Vector3().elements);
  shader.addUniform("u_AmbientColor", "vec3", new Vector3().elements);
  shader.addUniform("u_DiffuseColor", "vec3", new Vector3().elements);
  shader.addUniform("u_SpecularColor", "vec3", new Vector3().elements);
  var idMatrix = new Matrix4();




  // Initialize shader
  newShader = new Shader(gl, ASG5_VSHADER, ASG5_FSHADER);

  // Add attibutes
  newShader.addAttribute("a_Position");
  newShader.addAttribute("a_Color");
  newShader.addAttribute("a_TexCoord");
  newShader.addAttribute("a_Normal");

  newShader.addUniform("u_ModelMatrix", "mat4", new Matrix4().elements);
  newShader.addUniform("u_NormalMatrix", "mat4", new Matrix4().elements);

  newShader.addUniform("u_ViewMatrix", "mat4", idMatrix.elements);
  newShader.addUniform("u_ProjectionMatrix", "mat4", idMatrix.elements);

  newShader.addUniform("u_LightPos", "vec3", new Vector3().elements);
  newShader.addUniform("u_AmbientColor", "vec3", new Vector3().elements);
  newShader.addUniform("u_DiffuseColor", "vec3", new Vector3().elements);
  newShader.addUniform("u_SpecularColor", "vec3", new Vector3().elements);
 //  load sky
  inputHandler.readTexture("objs/random.jpg", function(image) {
     var sky = new skyCube(shader,0,0,0,64,image,[1,0,0,1]);
     scene.addGeometry(sky);
  })
  // Load ground
  inputHandler.readTexture("objs/cat_.jpg", function(image) {
    var ground = new Square(shader,0,-1,0,32,image,[1,0,0,1]);
    scene.addGeometry(ground);
})

// load walls
  inputHandler.readTexture("objs/wooden5.jpg", function(image) {
    for(var i = 0; i < map.length; i++){
      for(var j = 0; j < map[i].length; j++){
        if(map[i][j] != 0) { // && (i!=16)&&(j!=5)
          var wallCube = new Walls(shader, -16 + i, -0.5, -16 + j, 0.5, map[i][j], image,[1,0,0,1]); 
          scene.addGeometry(wallCube);
        }
    }
  }
})
  // inputHandler.readTexture("objs/door.jpg", function(image) {
  //   for(var i = 0; i < map.length; i++){
  //     for(var j = 0; j < map[i].length; j++){
  //       if((i==16)&&(j==5)) {
  //         var wallCube = new Door(shader, -16 + i, -0.5, -16 + j, 0.5, map[i][j], image,[1,0,0,1]); 
  //         scene.addGeometry(Door);
  //       }
  //     }
  //   }
  // })
  var sphere1 = new Sphere(newShader, 20,0,30,0); // (shader,segment,x,y,z);
  scene.addGeometry(sphere1);


  // Initialize renderer with scene and camera
  renderer = new Renderer(gl, scene, camera);
  renderer.start();
}

