class Light {
    constructor(x, y, z,) {
        this.pos = new Vector3([x, y, z]);

        // light colors
       this.ambient = [0.3,0.2,0.2];
        this.diffuse = [1,0,0.1];

        this.specular = [1, 1, 0];

        // Later you will add specular here too.
    }


}
