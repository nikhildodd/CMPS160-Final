/**
 * Specifies a square. A subclass of geometry.
 *
 *
 */
class skyCube extends Geometry {
  /**
   * Constructor for Square.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Square} Cube created
   */
  constructor(shader,x,y,z,size,image,color) {
      super(shader);
      this.x = x;
      this.y = y;
      this.z = z;
      this.size = size;
      this.color = color;
      this.image = image;
      this.vertices = this.generateCubeVertices(x,y,size,color);
      this.faces = {0: this.vertices};
      this.rot = 0;


      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateCubeVertices(x,y,size,color) {
      var vertices = [];
     

      var x1 = x - this.size/2;
      var x2 = x + this.size/2;

      var y1 = y - this.size/2;
      var y2 = y + this.size/2;

      var z1 = x1;
      var z2 = x2;

      var vertexA = new Vertex(x1,y1, z2,color);

      var vertexB = new Vertex(x1, y2, z2,color);

      var vertexC = new Vertex(x2, y1, z2,color);

      var vertexD = new Vertex(x2, y2, z2,color);

      var vertexE = new Vertex(x1, y1,  z1,color);
      
      var vertexF = new Vertex(x2, y1, z1,color);
     
      var vertexG = new Vertex(x1, y2 ,x1,color);
      
      var vertexH = new Vertex(x2, y2, x1,color);

    //side with entire image
      vertexA.texCoord = [0.0, 0.0];
      vertexA.normal.elements[0] = x1;
      vertexA.normal.elements[1] = y1;
      vertexA.normal.elements[2] = z2;
      vertices.push(vertexA);
      vertexB.texCoord = [0, 1.0];
      vertexB.normal.elements[0] = x1;
      vertexB.normal.elements[1] = y2;
      vertexB.normal.elements[2] = z2;
      vertices.push(vertexB);
      vertexC.texCoord = [1.0, 0];
      vertexC.normal.elements[0] = x2;
      vertexC.normal.elements[1] = y1;
      vertexC.normal.elements[2] = z2;
      vertices.push(vertexC);
      vertexD.texCoord = [1.0, 1.0];
      vertexD.normal.elements[0] = x2;
      vertexD.normal.elements[1] = y2;
      vertexD.normal.elements[2] = z2;
      vertices.push(vertexB);
      vertices.push(vertexC);
      vertices.push(vertexD);

    //side with texture twice
      vertexE.texCoord = [0.0, 0.0];
      vertexE.normal.elements[0] = x1;
      vertexE.normal.elements[1] = y1;
      vertexE.normal.elements[2] = z1;
      vertices.push(vertexE);
      
      vertexF.texCoord = [0, 1.0];
      vertexF.normal.elements[0] = x2;
      vertexF.normal.elements[1] = y1;
      vertexF.normal.elements[2] = z1;
      vertices.push(vertexF);

      vertexG.texCoord = [1.0, 0.0];
      vertexG.normal.elements[0] = x1;
      vertexG.normal.elements[1] = y2;
      vertexG.normal.elements[2] = z1;
      vertices.push(vertexG);

      vertexH.texCoord = [1.0, 1.0];
      vertexH.normal.elements[0] = x2;
      vertexH.normal.elements[1] = y2;
      vertexH.normal.elements[2] = z1;
      vertices.push(vertexF);
      vertices.push(vertexG);
      vertices.push(vertexH);
    //side with bottom half

      var vertexAA = new Vertex(x1,y1, z2,color);
      vertexAA.normal.elements[0] = x1;
      vertexAA.normal.elements[1] = y1;
      vertexAA.normal.elements[2] = z2;
      var vertexEE = new Vertex(x1, y1,  z1,color);
      vertexEE.normal.elements[0] = x1;
      vertexEE.normal.elements[1] = y1;
      vertexEE.normal.elements[2] = z1;
      var vertexCC = new Vertex(x2, y1, z2,color);
      vertexCC.normal.elements[0] = x2;
      vertexCC.normal.elements[1] = y1;
      vertexCC.normal.elements[2] = z2;
      var vertexFF = new Vertex(x2, y1, z1,color);

      vertexAA.texCoord = [0.0, 0.0];
      vertices.push(vertexAA);
      vertexEE.texCoord = [0.0, 1.0];
      vertices.push(vertexEE);
      vertexCC.texCoord = [1.0, 0.0];
      vertices.push(vertexCC);
      vertexFF.texCoord = [1.0, 1.0];
      vertexFF.normal.elements[0] = x2;
      vertexFF.normal.elements[1] = y1;
      vertexFF.normal.elements[2] = z1;
      vertices.push(vertexEE);
      vertices.push(vertexCC);
      vertices.push(vertexFF);
    //side with  top half
      var vertexBBB = new Vertex(x1, y2, z2,color);
      var vertexGGG = new Vertex(x1, y2 ,x1,color);
      var vertexDDD = new Vertex(x2, y2, z2,color);
      var vertexHHH = new Vertex(x2, y2, x1,color);

      vertexBBB.texCoord = [0.0, 0];
      vertexBBB.normal.elements[0] = x1;
      vertexBBB.normal.elements[1] = y2;
      vertexBBB.normal.elements[2] = z2;
      vertices.push(vertexBBB);
      vertexGGG.texCoord = [0 , 1 ];
      vertexGGG.normal.elements[0] = x1;
      vertexGGG.normal.elements[1] = y2;
      vertexGGG.normal.elements[2] = z1;
      vertices.push(vertexGGG);
      vertexDDD.texCoord = [1.0, 0];
      vertexDDD.normal.elements[0] = x2;
      vertexDDD.normal.elements[1] = y2;
      vertexDDD.normal.elements[2] = z2;
      vertices.push(vertexDDD);
      vertexHHH.texCoord = [1.0, 1.0];
      vertexHHH.normal.elements[0] = x2;
      vertexHHH.normal.elements[1] = y2;
      vertexHHH.normal.elements[2] = z1;
      vertices.push(vertexDDD);
      vertices.push(vertexGGG);
      vertices.push(vertexHHH);
    //1 has the texture 9 times in a 3x3 grid
      var vertexCCCC = new Vertex(x2, y1, z2,color);
      var vertexDDDD = new Vertex(x2, y2, z2,color);
      var vertexFFFF = new Vertex(x2, y1, z1,color);
      var vertexHHHH = new Vertex(x2, y2, x1,color);

      vertexCCCC.texCoord = [0.0, 0.0];
      vertexCCCC.normal.elements[0] = x2;
      vertexCCCC.normal.elements[1] = y1;
      vertexCCCC.normal.elements[2] = z2;
      vertices.push(vertexCCCC);
      vertexDDDD.texCoord = [0, 1.0];
      vertexDDDD.normal.elements[0] = x2;
      vertexDDDD.normal.elements[1] = y2;
      vertexDDDD.normal.elements[2] = z2;
      vertices.push(vertexDDDD);
      vertexFFFF.texCoord = [1.0, 0];
      vertexFFFF.normal.elements[0] = x2;
      vertexFFFF.normal.elements[1] = y1;
      vertexFFFF.normal.elements[2] = z1;
      vertices.push(vertexFFFF);
      vertexHHHH.texCoord = [1.0, 1.0];
      vertexHHHH.normal.elements[0] = x2;
      vertexHHHH.normal.elements[1] = y2;
      vertexHHHH.normal.elements[2] = z1;
      vertices.push(vertexFFFF);

      vertices.push(vertexDDDD);
      vertices.push(vertexHHHH);
    
      var vertexAAAAA = new Vertex(x1,y1, z2,color);
      var vertexBBBBB = new Vertex(x1, y2, z2,color);
      var vertexEEEEE = new Vertex(x1, y1,  z1,color);
      var vertexGGGGG = new Vertex(x1, y2 ,x1,color);


      vertexAAAAA.texCoord = [0.0,0.0];
      vertexAAAAA.normal.elements[0] = x1;
      vertexAAAAA.normal.elements[1] = y1;
      vertexAAAAA.normal.elements[2] = z2;
      vertices.push(vertexAAAAA);
      vertexBBBBB.texCoord = [0,1.0];
      vertexBBBBB.normal.elements[0] = x1;
      vertexBBBBB.normal.elements[1] = y2;
      vertexBBBBB.normal.elements[2] = z2;
      vertices.push(vertexBBBBB);
      vertexEEEEE.texCoord = [1.0,0];
      vertexEEEEE.normal.elements[0] = x1;
      vertexEEEEE.normal.elements[1] = y1;
      vertexEEEEE.normal.elements[2] = z1;
      vertices.push(vertexEEEEE);
      vertexGGGGG.texCoord = [1.0,1.0];
      vertexGGGGG.normal.elements[0] = x1;
      vertexGGGGG.normal.elements[1] = y2;
      vertexGGGGG.normal.elements[2] = z1;
      vertices.push(vertexBBBBB);
      vertices.push(vertexEEEEE);
      vertices.push(vertexGGGGG);

      
      return vertices;
  }

}