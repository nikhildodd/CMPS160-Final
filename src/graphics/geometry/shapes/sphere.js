
class Sphere extends Geometry {
  /**
   * Constructor for Sphere.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Sphere} Sphere created
   */
  constructor(shader, segments,x,y,z) {
      super(shader);
      this.x = x;
      this.y = y;
      this.z = z;
      this.vertices = this.generateSphereVertices(segments,x,y,z);
      

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateSphereVertices(segments,x,y,z) {
      var outerVerts = [];


      // Generate coordinates
      for (var j = 0; j <= segments; j++) {
          var aj = j * Math.PI / segments;
          var sj = Math.sin(aj) * 10;
          var cj = Math.cos(aj) * 10;
          for (var i = 0; i <= segments; i++) {
              var ai = i * 2 * Math.PI / segments;
              var si = Math.sin(ai);
              var ci = Math.cos(ai);

              outerVerts.push({"x": (si * sj) + x, "y": cj + y, "z": (ci * sj) + z});
          }
      }

      var vertices = [];

      // Generate vertices
      for (var j = 0; j < segments; j++) {
        for (var i = 0; i < segments; i++) {
          var p1 = j * (segments+1) + i;
          var p2 = p1 + (segments+1);

          var vertex0 = new Vertex(outerVerts[p1].x/4, outerVerts[p1].y/4, outerVerts[p1].z/4);
          vertex0.normal.elements[0] = outerVerts[p1].x - x;
          vertex0.normal.elements[1] = outerVerts[p1].y - y;
          vertex0.normal.elements[2] = outerVerts[p1].z - z;

          var vertex1 = new Vertex(outerVerts[p2].x/4, outerVerts[p2].y/4, outerVerts[p2].z/4);
          vertex1.normal.elements[0] = outerVerts[p2].x - x;
          vertex1.normal.elements[1] = outerVerts[p2].y - y;
          vertex1.normal.elements[2] = outerVerts[p2].z - z;

          var vertex2 = new Vertex(outerVerts[p1 + 1].x/4, outerVerts[p1 + 1].y/4, outerVerts[p1 + 1].z/4);
          vertex2.normal.elements[0] = outerVerts[p1 + 1].x - x;
          vertex2.normal.elements[1] = outerVerts[p1 + 1].y - y;
          vertex2.normal.elements[2] = outerVerts[p1 + 1].z -z;

          vertices.push(vertex0, vertex1, vertex2);

          var vertex3 = new Vertex(outerVerts[p1 + 1].x/4, outerVerts[p1 + 1].y/4, outerVerts[p1 + 1].z/4);
          vertex3.normal.elements[0] = outerVerts[p1 + 1].x - x;
          vertex3.normal.elements[1] = outerVerts[p1 + 1].y - y;
          vertex3.normal.elements[2] = outerVerts[p1 + 1].z - z;

          var vertex4 = new Vertex(outerVerts[p2].x/4, outerVerts[p2].y/4, outerVerts[p2].z/4);
          vertex4.normal.elements[0] = outerVerts[p2].x - x;
          vertex4.normal.elements[1] = outerVerts[p2].y - y;
          vertex4.normal.elements[2] = outerVerts[p2].z - z;

          var vertex5 = new Vertex(outerVerts[p2 + 1].x/4, outerVerts[p2 + 1].y/4, outerVerts[p2 + 1].z/4);
          vertex5.normal.elements[0] = outerVerts[p2 + 1].x - x;
          vertex5.normal.elements[1] = outerVerts[p2 + 1].y - y;
          vertex5.normal.elements[2] = outerVerts[p2 + 1].z - z;

          vertices.push(vertex3, vertex4, vertex5);
        }
      }

      return vertices;
   }

   render() {
       // Transform geometry here!
       // Rotations!

       super.render();
   }
}
