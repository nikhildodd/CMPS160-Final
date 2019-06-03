/**
 * Specifies a square. A subclass of geometry.
 *
 *
 */
class Cube extends Geometry {
  /**
   * Constructor for Square.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Square} Cube created
   */
  constructor(shader,x,y,z,size,height,image,color) {
      super(shader);
      this.x = x;
      this.y = y;
      this.z = z;
      this.size = size;
      this.image = image;
      this.height = height;
      this.color = color;
      this.vertices = this.generateCubeVertices(x,y,z,this.size,this.height,color);
      this.faces = {0: this.vertices};

      this.translateToOrigin = new Matrix4();
      this.translateToOrigin.setTranslate(x,y,z);

      this.translateToPosition = new Matrix4();
      this.translateToPosition.setTranslate(-x,-y,-z);

      this.rotationMatrix = new Matrix4();
      this.rotationMatrix.setRotate(15,0,1,0);

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateCubeVertices(x,y,z,size,height,color) {
      var vertices = [];
      var x1 = x - (1.0 * this.size);
        var x2 = x + (1.0 * this.size);
        var y1 = y - (1.0 * this.size);
        var y2 = y + (1.0 * this.size) + (this.height -1);
        var z1 = z + (1.0 * this.size);
        var z2 = z - (1.0 * this.size);
        //Front
        var vertex1 = new Vertex(x1, y1, z1,color);
        var vertex2 = new Vertex(x2, y2, z1,color);
        var vertex3 = new Vertex(x1, y2, z1,color);
        var vertex4 = new Vertex(x1, y1, z1,color);
        var vertex5 = new Vertex(x2, y1, z1,color);
        var vertex6 = new Vertex(x2, y2, z1,color);
        vertex1.texCoord = [0.0, 0.0];
        vertex2.texCoord = [1.0, 1.0 + (this.height - 1)];
        vertex3.texCoord = [0.0, 1.0 + (this.height - 1)];
        vertex4.texCoord = [0.0, 0.0];
        vertex5.texCoord = [1.0, 0.0];
        vertex6.texCoord = [1.0, 1.0 + (this.height - 1)];

        vertex1.normal.elements[0] = x1;
        vertex1.normal.elements[1] = y1;
        vertex1.normal.elements[2] = z1;
        vertex2.normal.elements[0] = x2;
        vertex2.normal.elements[1] = y2;
        vertex2.normal.elements[2] = z1;
        vertex3.normal.elements[0] = x1;
        vertex3.normal.elements[1] = y2;
        vertex3.normal.elements[2] = z1;
        vertex4.normal.elements[0] = x1;
        vertex4.normal.elements[1] = y1;
        vertex4.normal.elements[2] = z1;
        vertex5.normal.elements[0] = x2;
        vertex5.normal.elements[1] = y1;
        vertex5.normal.elements[2] = z1;
        vertex6.normal.elements[0] = x2;
        vertex6.normal.elements[1] = y2;
        vertex6.normal.elements[2] = z1;

        //Top
        var vertex7  = new Vertex(x1, y2, z1,color);
        var vertex8  = new Vertex(x2, y2, z2,color);
        var vertex9  = new Vertex(x1, y2, z2,color);
        var vertex10 = new Vertex(x1, y2, z1,color);
        var vertex11 = new Vertex(x2, y2, z1,color);
        var vertex12 = new Vertex(x2, y2, z2,color);
        vertex7.texCoord = [0.0, 1.0];
        vertex8.texCoord = [1.0, 0.0];
        vertex9.texCoord = [0.0, 0.0];
        vertex10.texCoord = [0.0, 1.0];
        vertex11.texCoord = [1.0, 1.0];
        vertex12.texCoord = [1.0, 0.0];

        vertex7.normal.elements[0] = x1;
        vertex7.normal.elements[1] = y2;
        vertex7.normal.elements[2] = z1;
        vertex8.normal.elements[0] = x2;
        vertex8.normal.elements[1] = y2;
        vertex8.normal.elements[2] = z2;
        vertex9.normal.elements[0] = x1;
        vertex9.normal.elements[1] = y2;
        vertex9.normal.elements[2] = z2;
        vertex10.normal.elements[0] = x1;
        vertex10.normal.elements[1] = y2;
        vertex10.normal.elements[2] = z1;
        vertex11.normal.elements[0] = x2;
        vertex11.normal.elements[1] = y2;
        vertex11.normal.elements[2] = z1;
        vertex12.normal.elements[0] = x2;
        vertex12.normal.elements[1] = y2;
        vertex12.normal.elements[2] = z2;

        //Back
        var vertex13 = new Vertex(x1, y1, z2,color);
        var vertex14 = new Vertex(x2, y2, z2,color);
        var vertex15 = new Vertex(x1, y2, z2,color);
        var vertex16 = new Vertex(x1, y1, z2,color);
        var vertex17 = new Vertex(x2, y1, z2,color);
        var vertex18 = new Vertex(x2, y2, z2,color);
        vertex13.texCoord = [0.0, 0.0];
        vertex14.texCoord = [1.0, 1.0 + (this.height - 1)];
        vertex15.texCoord = [0.0, 1.0 + (this.height - 1)];
        vertex16.texCoord = [0.0, 0.0];
        vertex17.texCoord = [1.0, 0.0];
        vertex18.texCoord = [1.0, 1.0 + (this.height - 1)];

        vertex13.normal.elements[0] = x1;
        vertex13.normal.elements[1] = y1;
        vertex13.normal.elements[2] = z2;
        vertex14.normal.elements[0] = x2;
        vertex14.normal.elements[1] = y2;
        vertex14.normal.elements[2] = z2;
        vertex15.normal.elements[0] = x1;
        vertex15.normal.elements[1] = y2;
        vertex15.normal.elements[2] = z2;
        vertex16.normal.elements[0] = x1;
        vertex16.normal.elements[1] = y1;
        vertex16.normal.elements[2] = z2;
        vertex17.normal.elements[0] = x2;
        vertex17.normal.elements[1] = y1;
        vertex17.normal.elements[2] = z2;
        vertex18.normal.elements[0] = x2;
        vertex18.normal.elements[1] = y2;
        vertex18.normal.elements[2] = z2;

        //Bottom
        var vertex19 = new Vertex(x1, y1, z1,color);
        var vertex20 = new Vertex(x1, y2, z2,color);
        var vertex21 = new Vertex(x1, y2, z1,color);
        var vertex22 = new Vertex(x1, y1, z1,color);
        var vertex23 = new Vertex(x1, y1, z2,color);
        var vertex24 = new Vertex(x1, y2, z2,color);

        vertex19.texCoord = [0.0, 0.0];
        vertex20.texCoord = [1.0, 1.0 + (this.height - 1)];
        vertex21.texCoord = [0.0, 1.0 + (this.height - 1)];
        vertex22.texCoord = [0.0, 0.0];
        vertex23.texCoord = [1.0, 0.0];
        vertex24.texCoord = [1.0, 1.0 + (this.height - 1)];

        vertex19.normal.elements[0] = x1;
        vertex19.normal.elements[1] = y1;
        vertex19.normal.elements[2] = z1;
        vertex20.normal.elements[0] = x1;
        vertex20.normal.elements[1] = y2;
        vertex20.normal.elements[2] = z2;
        vertex21.normal.elements[0] = x1;
        vertex21.normal.elements[1] = y2;
        vertex21.normal.elements[2] = z1;
        vertex22.normal.elements[0] = x1;
        vertex22.normal.elements[1] = y1;
        vertex22.normal.elements[2] = z1;
        vertex23.normal.elements[0] = x1;
        vertex23.normal.elements[1] = y1;
        vertex23.normal.elements[2] = z2;
        vertex24.normal.elements[0] = x1;
        vertex24.normal.elements[1] = y2;
        vertex24.normal.elements[2] = z2;


        //Left
        var vertex25 = new Vertex(x1, y1, z1,color);
        var vertex26 = new Vertex(x1, y2, z2,color);
        var vertex27 = new Vertex(x1, y2, z1,color);
        var vertex28 = new Vertex(x1, y1, z1,color);
        var vertex29 = new Vertex(x1, y1, z2,color);
        var vertex30 = new Vertex(x1, y2, z2,color);
        vertex25.texCoord = [1.0, 0.0];
        vertex26.texCoord = [0.0, 1.0 + (this.height - 1)];
        vertex27.texCoord = [1.0, 1.0 + (this.height - 1)];
        vertex28.texCoord = [1.0, 0.0];
        vertex29.texCoord = [0.0, 0.0];
        vertex30.texCoord = [0.0, 1.0 + (this.height - 1)];

        vertex25.normal.elements[0] = x1;
        vertex25.normal.elements[1] = y1;
        vertex25.normal.elements[2] = z1;
        vertex26.normal.elements[0] = x1;
        vertex26.normal.elements[1] = y2;
        vertex26.normal.elements[2] = z2;
        vertex27.normal.elements[0] = x1;
        vertex27.normal.elements[1] = y2;
        vertex27.normal.elements[2] = z1;
        vertex28.normal.elements[0] = x1;
        vertex28.normal.elements[1] = y1;
        vertex28.normal.elements[2] = z1;
        vertex29.normal.elements[0] = x1;
        vertex29.normal.elements[1] = y1;
        vertex29.normal.elements[2] = z2;
        vertex30.normal.elements[0] = x1;
        vertex30.normal.elements[1] = y2;
        vertex30.normal.elements[2] = z2;

        //Right
        var vertex31 = new Vertex(x2, y1, z1,color);
        var vertex32 = new Vertex(x2, y2, z2,color);
        var vertex33 = new Vertex(x2, y2, z1,color);
        var vertex34 = new Vertex(x2, y1, z1,color);
        var vertex35 = new Vertex(x2, y1, z2,color);
        var vertex36 = new Vertex(x2, y2, z2,color);
        vertex31.texCoord = [0.0, 0.0];
        vertex32.texCoord = [1.0, 1.0 + (this.height - 1)];
        vertex33.texCoord = [0.0, 1.0 + (this.height - 1)];
        vertex34.texCoord = [0.0, 0.0];
        vertex35.texCoord = [1.0, 0.0];
        vertex36.texCoord = [1.0, 1.0 + (this.height - 1)];

        vertex31.normal.elements[0] = x2;
        vertex31.normal.elements[1] = y1;
        vertex31.normal.elements[2] = z1;
        vertex32.normal.elements[0] = x2;
        vertex32.normal.elements[1] = y2;
        vertex32.normal.elements[2] = z2;
        vertex33.normal.elements[0] = x2;
        vertex33.normal.elements[1] = y2;
        vertex33.normal.elements[2] = z1;
        vertex34.normal.elements[0] = x2;
        vertex34.normal.elements[1] = y1;
        vertex34.normal.elements[2] = z1;
        vertex35.normal.elements[0] = x2;
        vertex35.normal.elements[1] = y1;
        vertex35.normal.elements[2] = z2;
        vertex36.normal.elements[0] = x2;
        vertex36.normal.elements[1] = y2;
        vertex36.normal.elements[2] = z2;

        vertices.push(vertex1);
        vertices.push(vertex2);
        vertices.push(vertex3);
        vertices.push(vertex4);
        vertices.push(vertex5);
        vertices.push(vertex6);
        vertices.push(vertex7);
        vertices.push(vertex8);
        vertices.push(vertex9);
        vertices.push(vertex10);
        vertices.push(vertex11);
        vertices.push(vertex12);
        vertices.push(vertex13);
        vertices.push(vertex14);
        vertices.push(vertex15);
        vertices.push(vertex16);
        vertices.push(vertex17);
        vertices.push(vertex18);


        vertices.push(vertex25);
        vertices.push(vertex26);
        vertices.push(vertex27);
        vertices.push(vertex28);
        vertices.push(vertex29);
        vertices.push(vertex30);
        vertices.push(vertex31);
        vertices.push(vertex32);
        vertices.push(vertex33);
        vertices.push(vertex34);
        vertices.push(vertex35);
        vertices.push(vertex36);

        return vertices;
  }

  render(){
    //console.log("Rotation begin.");
    this.modelMatrix = this.modelMatrix.multiply(this.translateToOrigin);
    this.modelMatrix = this.modelMatrix.multiply(this.rotationMatrix);
    this.modelMatrix = this.modelMatrix.multiply(this.translateToPosition);
    //this.modelMatrix = this.modelMatrix.multiply(this.scalingMatrix);
    this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
  }
}
