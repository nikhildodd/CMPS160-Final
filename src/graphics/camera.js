/**
 * Specifies a Camera that can Dolly/Truck and Tilt/Pan.
 *
 * @author Lucas N. Fer
 * @this {Renderer}
 */
 var huh = 0; //0 is perspective, 1 is ortho
 var pop = 0;
class Camera {
   /**
    * Constructor for Camera.
    *
    * @constructor
    * @returns {Camera} Camera object created
    */
    constructor(shader,reset) {
        this.speed = 0.4;

        // Camera view attributes
        this.eye     = new Vector3([0, 0, -15.5]);
        this.center  = new Vector3([0, 0,-1]);
        this.up      = new Vector3([0, 1, 0]);

        this.viewMatrix = new Matrix4();
        this.projectionMatrix = new Matrix4();

        this.projectionMatrix.setPerspective(70,1.0,0.2,100);

        this.updateView();

    }
    changeMode(whichMode){
        if(whichMode == true){ //perspective mode
            huh = 0;
            this.projectionMatrix.setPerspective(70,1.0,0.2,100);

            console.log("perspective mode" + huh);

        }else{
            huh = 1;    //ortho mode
            this.projectionMatrix.setOrtho(-1,1,-1,1, 0.2, 10);

            console.log("orthographic mode" + huh);
        }
        this.updateView();
    }


//Truck moves a camera’s location laterally (left or right)
//while the camera’s direction of view is unchanged. You can truck left or truck right.
//This is a translation along a camera’s u axis.
    truck(dir) {
        // Calculate the n camera axis
        var n = this.eye.sub(this.center); //subtract
        n = n.normalize()

        // Calculate the u camera axis
        var u = this.up.cross(n); //cross product
        u = u.normalize();

        // Scale the u axis to the desired distance to move
        u = u.mul(dir * this.speed);

        // Add the direction vector to both the eye and center positions
        this.eye = this.eye.add(u);
        this.center = this.center.add(u);

        this.updateView();
    }
//Pan rotates the camera’s view horizontally about the camera’s eye location.
//You can pan left or pan right. This rotates about a camera’s v axis.
    pan(dir) {
        // Calculate the n camera axis
        var n = this.eye.sub(this.center); //subtract
        n = n.normalize()

        // Calculate the v camera axis
        var v = this.up;
        v = v.normalize();

        // Scale the v axis to the desired distance to move
        v = v.mul(dir * (this.speed));

        // Add the direction vector to the center positions

        this.center = this.center.add(v);

        this.updateView();
    }


//Tilt rotates a camera’s view up or down. You can tilt up or tilt down. This rotates about a camera’s u axis.
    tilt(dir) {
        // Calculate the n camera axis
        var n = this.eye.sub(this.center); //subtract
        n = n.normalize()

        // Calculate the u camera axis
        var u = this.up.cross(n); //cross product
        u = u.normalize();

        // Scale the u axis to the desired distance to move
        u = u.mul(dir * (this.speed));

        // Add the direction vector to the center positions
        this.center = this.center.add(u);

        this.updateView();
    }
//Dolly moves a camera closer to, or further from,
//the location it is looking at. You can dolly in and dolly out. This is a translation along a camera’s n axis.
    dolly(dir){
        // Calculate the n camera axis
        var n = this.eye.sub(this.center);
        n = n.normalize();

        // Scale the n axis to the desired distance to move
        n = n.mul(dir * this.speed);

        // Add the direction vector to the eye
        this.eye = this.eye.add(n);
        this.center = this.center.add(n);

        this.updateView();
    }

    collisionDetection(){
      //use array from main and based off the arr[i][j], cannot progress forward, backward left or right
    }

    crazyAngle(val){
      console.log("crazyAngle function");
        if(crazyView == false){
            console.log("crazyAngle");
            console.log(crazyView);
            this.eye = new Vector3([0, 15, -15.5]);
            crazyView = true;

        }else{
            console.log("normalAngle");
            console.log(crazyView);
            this.eye = new Vector3([0, 0, -15.5]);
            crazyView = false;
        }
        this.updateView();
    }


    jumpUpCommand(){
      //space bar goes up vertically (v axis)
      // Calculate the n camera axis

      var dir = this.speed;
      var v = this.eye.sub(this.center); //subtract
      v = v.normalize();

      // Calculate the u camera axis
      var u = this.up; //cross product
      u = u.normalize();

      // Scale the u axis to the desired distance to move
      //v = v.mul(dir * this.speed);

      // Add the direction vector to both the eye and center positions
      this.eye = this.eye.add(u);
      this.center = this.center.add(u);


        if(this.eye.elements[1] == 2){
          this.eye.elements[1] = 0;
          this.updateView();
        }
        u = u.normalize();
        v = v.normalize();
        this.center = this.center.add(u);
        console.log(this.center);
    //  }

      this.updateView();

    }
    jumpDownCommand(){
      //space bar goes up vertically (v axis)
      // Calculate the n camera axis
      var dir = this.speed;
      var v = this.eye.sub(this.center); //subtract
      v = v.normalize()

      // Calculate the u camera axis
      var u = this.up; //cross product
      u = u.normalize();

      // Scale the u axis to the desired distance to move
      v = v.mul(dir * this.speed);

      // Add the direction vector to both the eye and center positions
      this.eye = this.eye.sub(u);
      this.center = this.center.sub(u);

      this.updateView();

    }

    updateView() {

      console.log(this.eye);

      if(((this.eye.elements[2] > -11.75 && this.eye.elements[2] < -10.785) && (this.eye.elements[0] > 7.503 && this.eye.elements[0] < 9.23))
        || ((this.eye.elements[2] < -13.334 && this.eye.elements[2] > -15.5) && (this.eye.elements[0] > -13.429 && this.eye.elements[0] < -12))
        || (this.eye.elements[0] == -10.021 && this.eye.elements[2] == -10.561)
        || ((this.eye.elements[2] > 4.116 && this.eye.elements[2] < 4.5) && (this.eye.elements[0] > 3.920) && (this.eye.elements[0] < 6)))
      {
            lavaDeath = true;
      }

       console.log(this.eye.elements[0]);
       console.log(this.eye.elements[2]);

      if(((this.eye.elements[2] > 1.306 && this.eye.elements[2] < 2.2) && (this.eye.elements[0] > 0.6) && (this.eye.elements[0] < 1.545))){
        GOAL = true;
      }



        this.viewMatrix.setLookAt(this.eye.elements[0], this.eye.elements[1], this.eye.elements[2],
                                  this.center.elements[0], this.center.elements[1], this.center.elements[2],
                                  this.up.elements[0], this.up.elements[1], this.up.elements[2]);


    }
}
