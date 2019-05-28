/**
 * Specifies a square. A subclass of geometry.
 *
 *
 */
class Square extends Geometry {
  /**
   * Constructor for Square.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Square} Square created
   */
  constructor(shader,x,y,z,size,image,color) {
      super(shader);
      this.x = x;
      this.y = y;
      this.z = z;
      this.size = size;
      this.color = color;
      this.image = image;
      this.vertices = this.generateSquareVertices(color);
      this.faces = {0: this.vertices};



      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateSquareVertices(color) {
       var vertices = [];


      var vertex1 = new Vertex(-16,-1,16,color);
      var vertex2 = new Vertex(-16,-1,-16,color);
      var vertex3 = new Vertex(16,-1, -16,color);
      var vertex4 = new Vertex(16,-1, 16,color);
      vertex1.texCoord = [0,0];
      vertex2.texCoord = [0,-1];
      vertex3.texCoord = [1,-1];
      vertex4.texCoord = [1,1];
      
      vertex1.normal.elements[0] = -16;
      vertex1.normal.elements[1] = -1;
      vertex1.normal.elements[2] = 16;

      vertex2.normal.elements[0] = -16;
      vertex2.normal.elements[1] = -1;
      vertex2.normal.elements[2] = -16;

      vertex3.normal.elements[0] = 16;
      vertex3.normal.elements[1] = -1;
      vertex3.normal.elements[2] = -16;

      vertex4.normal.elements[0] = 16;
      vertex4.normal.elements[1] = -1;
      vertex4.normal.elements[2] = 16;  
        
      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);

      vertices.push(vertex1);
      vertices.push(vertex3);
      vertices.push(vertex4);


      return vertices;
  }


}