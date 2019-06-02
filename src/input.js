var _inputHandler = null;
var perspectiveMode = true;
var orthoMode = false;
var viewBool = false;
var mouseClicked = false;
var countUps = 0; //When countUps = certain number make door texture disappear
var crazyView = false;
var moveCount = 0;
/**
 * Specifies a Input Handler. Used to parse input events from a HTML page.
 *
 * @author Lucas N. Ferreira
 * @this {Scene}
 */
class InputHandler {
    /**
     * Initializes the event handeling functions within the program.
     */

    constructor(canvas,hud,gameover, scene, camera) {
      this.canvas = canvas;
      this.hud = hud;
      this.gameover =gameover;
      this.scene  = scene;
      this.camera = camera;
      this.zoom = 1;
      var mouseDown = false;
      _inputHandler = this;
      this.deltaX = 0;
      this.deltaY = 0;
      // Mouse Events
      this.canvas.onmousedown = function(ev) {
        _inputHandler.mouseClick(ev);
        mouseDown = true;
      }
      this.canvas.onmouseup = function(ev){
        mouseDown = false;
      }

      this.canvas.onmousemove = function(ev) {
        if(mouseDown){
          _inputHandler.mouseMove(ev);
          }

      }
      this.canvas.onwheel = function(ev) {
        console.log("mouse scrolled");
       _inputHandler.mouseWheel(ev);
     };

      this.hud.onmousedown = function(ev) {
        _inputHandler.mouseClick(ev);
        mouseDown = true;
      }
      this.hud.onmouseup = function(ev){
        mouseDown = false;
      }

      this.hud.onmousemove = function(ev) {
        if(mouseDown){
          _inputHandler.mouseMove(ev);
          }

      }
      this.hud.onwheel = function(ev) {
        console.log("mouse scrolled");
       _inputHandler.mouseWheel(ev);
     };
      this.gameover.onmousedown = function(ev) {
        _inputHandler.mouseClick(ev);
        mouseDown = true;
      }
      this.gameover.onmouseup = function(ev){
        mouseDown = false;
      }

      this.gameover.onmousemove = function(ev) {
        if(mouseDown){
          _inputHandler.mouseMove(ev);
          }

      }
      this.gameover.onwheel = function(ev) {
        console.log("mouse scrolled");
       _inputHandler.mouseWheel(ev);
     };

      // Keyboard Events
      document.addEventListener('keydown', function(ev) { _inputHandler.keyDown(ev); }, false);
      document.addEventListener('keyup',   function(ev) { _inputHandler.keyUp(ev);   }, false);


    }
    //function called upon mouse scroll;
    mouseWheel(ev) {
      this.zoom +=0.1;
      console.log("ZOOM" + this.zoom);
    //  this.camera.zoom(this.zoom);


    }
    /**
     * Function called upon mouse click.
     */
    mouseClick(ev) {
        // Print x,y coordinates.

        console.log(ev.clientX, ev.clientY);


    }

    mouseMove(ev) {
        var movementX = ev.movementX;
        console.log("movementX", movementX);

        var movementY = ev.movementY;
        console.log("movementY", movementY);

        this.camera.pan(-movementY/1.5);
        this.camera.tilt(movementX/1.5);


    }

    keyUp(ev) {
        var keyName = event.key;
        console.log("key up", keyName);
    }

    keyDown(ev) {
        var keyName = event.key;
        console.log("key down", keyName);

          if(keyName == "a") {
            moveCount++;
            this.camera.truck(-1);
          }
          else if(keyName == "d") {

              moveCount++;
              this.camera.truck(1);
          }
          else if(keyName == "w"){

              countUps++;
              moveCount++;
              console.log(countUps);
              this.camera.dolly(-1);
          }
          else if(keyName == "s"){

            moveCount++;
              this.camera.dolly(1);
          }
          else if(keyName == "z"){
              if(perspectiveMode){
                  perspectiveMode = false;
                  orthoMode = true;
                  this.camera.changeMode(perspectiveMode);
              }
              else if(orthoMode){
                  orthoMode = false;
                  perspectiveMode = true;
                  this.camera.changeMode(perspectiveMode);
              }
          }
          else if(keyName == "p"){
              this.camera.crazyAngle();
          }
          else if(keyName == "j"){
              this.camera.jumpUpCommand();
          }
          else if (keyName == "n"){
              this.camera.jumpDownCommand();
          }
    }

    /*
    scrollZoom(ev){
      var keyName = event.deltaY;
        console.log("mouse scrolling down", keyName);
        if(keyName != 0){
          //_inputHandler.camera.zoom(keyName);
          //this.camera.dolly(keyName);
          this.camera.zoomCam(keyName);
        }
    }
*/
        /**
     * Function called to read a selected file.
     */
    readSelectedFile() {
        var fileReader = new FileReader();
        var objFile = document.getElementById("fileInput").files[0];

        if (!objFile) {
            alert("OBJ file not set!");
            return;
        }

        fileReader.readAsText(objFile);
        fileReader.onloadend = function() {
            alert(fileReader.result);
        }
    }

    readTexture(src, onTexLoad) {
        // Create the image object
        var image = new Image();
        if (!image) {
          console.log('Failed to create the image object');
          return false;
        }

        // Register the event handler to be called on loading an image
        image.onload = function() {
            _inputHandler.image = image;
            onTexLoad(image);
        };

        // Tell the browser to load an image
        image.src = src
        return true;
    }

}
