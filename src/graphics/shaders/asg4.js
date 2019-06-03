// Vertex shader program (Selector)
var VSHADER_SOURCE =
  `attribute vec4 a_Position;
  attribute vec4 a_Color;
  uniform mat4 u_MvpMatrix;
  uniform bool u_Clicked;  // Mouse is pressed
  varying vec4 v_Color;
  void main() {
    gl_Position = u_MvpMatrix * a_Position; +
    if (u_Clicked) {
      v_Color = vec4(1.0, 0.0, 0.0, 1.0); +
    } else { +
      v_Color = a_Color; +
    }
  }`;

  var FSHADER_SOURCE =
  `precision mediump float;
  varying vec4 v_Color;
  void main() {
    gl_FragColor = v_Color;
  }`;


//rotation Shader
// Vertex Shader

var rotation_VSHADER =
  `precision mediump float;
  attribute vec4 a_Position;
  attribute vec4 a_Color;
  attribute vec2 a_TexCoord;
  varying vec2 v_TexCoord;
  varying vec4 v_Color;
  uniform mat4 u_ModelMatrix;
  uniform mat4 u_ViewMatrix;
  uniform mat4 u_ProjectionMatrix;

  void main() {
    v_Color = a_Color;
    v_TexCoord = a_TexCoord;
   gl_Position = u_ProjectionMatrix * u_ViewMatrix * u_ModelMatrix * a_Position;  
}`;

// Fragment Shader
var rotation_FSHADER =
  `precision mediump float;
  varying vec4 v_Color;
  varying vec2 v_TexCoord;

  uniform sampler2D u_Sampler;

  void main() {
    gl_FragColor = texture2D(u_Sampler, v_TexCoord);
  }`; //

// Vertex Shader
var ASG4_VSHADER =
  `precision mediump float;
  attribute vec4 a_Position;
  varying vec3 v_Position;
  attribute vec4 a_Color;
  varying vec4 v_Color;
  attribute vec2 a_TexCoord;
  varying vec2 v_TexCoord;
  attribute vec4 a_Normal;
  varying vec3 v_Normal;

  uniform mat4 u_NormalMatrix;
  uniform mat4 u_ViewMatrix;
  uniform mat4 u_ProjectionMatrix;

  void main() {
    v_Color = a_Color;
    v_TexCoord = a_TexCoord;

    v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));
    gl_Position = u_ProjectionMatrix * u_ViewMatrix * a_Position;
  }`;

// Fragment Shader
var ASG4_FSHADER =
  `precision mediump float;
  varying vec3 v_Position;
  varying vec4 v_Color;
  varying vec2 v_TexCoord;
  varying vec3 v_Normal;
  uniform vec3 u_LightPos;
  uniform vec3 u_AmbientColor;
  uniform vec3 u_DiffuseColor;
  uniform vec3 u_SpecularColor;
  uniform vec3 u_CamPos;
  uniform sampler2D u_Sampler;

  void main() {
    vec3 L = normalize(u_LightPos - v_Position);
    vec3 V = normalize(u_CamPos - v_Position);
    vec3 H = normalize(L + V);

    float dVal = max(dot(v_Normal, L), 0.0);
    vec3 diffuse = vec3(texture2D(u_Sampler, v_TexCoord)) * dVal * u_DiffuseColor;
    float specularAngle = max(dot(v_Normal, H), 0.0);
    float specularVal = pow(specularAngle, 10.0);

    if(dVal <= 0.0){
      specularVal = 0.0;
    }

    vec3 specular = specularVal * u_SpecularColor * u_DiffuseColor;

    vec4 lite = vec4(u_AmbientColor + diffuse + specular, 1.0);
    vec4 tex = texture2D(u_Sampler, v_TexCoord);

     gl_FragColor = mix(lite, tex, 0.3);

  }`; //
var ASG5_VSHADER =
  `precision mediump float;
  attribute vec4 a_Position;
  varying vec3 v_Position;
  attribute vec4 a_Color;
  varying vec4 v_Color;
  attribute vec4 a_Normal;
  varying vec3 v_Normal;
  attribute vec2 a_TexCoord;
  varying vec2 v_TexCoord;

  uniform mat4 u_ViewMatrix;
  uniform mat4 u_ProjectionMatrix;
  uniform mat4 u_NormalMatrix;
  uniform mat4 u_ModelMatrix;

  void main() {
    v_Color = a_Color;
    v_TexCoord = a_TexCoord;
    v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));
    gl_Position = u_ModelMatrix * u_ProjectionMatrix * u_ViewMatrix * a_Position;
  }`;
var ASG5_FSHADER =
  `precision mediump float;
  varying vec4 v_Color;
  varying vec3 v_Normal;
  varying vec3 v_Position;
  uniform vec3 u_CamPos;
  uniform vec3 u_LightPos;
  uniform vec3 u_AmbientColor;
  uniform vec3 u_DiffuseColor;
  uniform vec3 u_SpecularColor;

  void main() {
    vec3 L = normalize(u_LightPos - v_Position);
    vec3 V = normalize(u_CamPos - v_Position);
    vec3 H = normalize(L + V);

    float diffuseVal = max(dot(v_Normal, L), 0.0);
    vec3 diffuse = vec3(v_Color) * u_DiffuseColor * diffuseVal;

    float specularAngle = max(dot(v_Normal, H), 0.0);
    float specularVal = pow(specularAngle, 10.0);
    if(diffuseVal <= 0.0){
      specularVal = 0.0;
    }
    vec3 specular = u_DiffuseColor * specularVal * u_SpecularColor ;

    gl_FragColor = vec4(u_AmbientColor + diffuse + specular, 1.0);
  }`;
