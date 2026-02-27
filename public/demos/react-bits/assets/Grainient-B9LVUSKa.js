import{r as I,R as z,a5 as D,P as L,M as X,j as _}from"./index-CKqfvLoB.js";const f=t=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:[1,1,1]},$=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,H=`#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uTimeSpeed;
uniform float uColorBalance;
uniform float uWarpStrength;
uniform float uWarpFrequency;
uniform float uWarpSpeed;
uniform float uWarpAmplitude;
uniform float uBlendAngle;
uniform float uBlendSoftness;
uniform float uRotationAmount;
uniform float uNoiseScale;
uniform float uGrainAmount;
uniform float uGrainScale;
uniform float uGrainAnimated;
uniform float uContrast;
uniform float uGamma;
uniform float uSaturation;
uniform vec2 uCenterOffset;
uniform float uZoom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
out vec4 fragColor;
#define S(a,b,t) smoothstep(a,b,t)
mat2 Rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);} 
vec2 hash(vec2 p){p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));return fract(sin(p)*43758.5453);} 
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);float n=mix(mix(dot(-1.0+2.0*hash(i+vec2(0.0,0.0)),f-vec2(0.0,0.0)),dot(-1.0+2.0*hash(i+vec2(1.0,0.0)),f-vec2(1.0,0.0)),u.x),mix(dot(-1.0+2.0*hash(i+vec2(0.0,1.0)),f-vec2(0.0,1.0)),dot(-1.0+2.0*hash(i+vec2(1.0,1.0)),f-vec2(1.0,1.0)),u.x),u.y);return 0.5+0.5*n;}
void mainImage(out vec4 o, vec2 C){
  float t=iTime*uTimeSpeed;
  vec2 uv=C/iResolution.xy;
  float ratio=iResolution.x/iResolution.y;
  vec2 tuv=uv-0.5+uCenterOffset;
  tuv/=max(uZoom,0.001);

  float degree=noise(vec2(t*0.1,tuv.x*tuv.y)*uNoiseScale);
  tuv.y*=1.0/ratio;
  tuv*=Rot(radians((degree-0.5)*uRotationAmount+180.0));
  tuv.y*=ratio;

  float frequency=uWarpFrequency;
  float ws=max(uWarpStrength,0.001);
  float amplitude=uWarpAmplitude/ws;
  float warpTime=t*uWarpSpeed;
  tuv.x+=sin(tuv.y*frequency+warpTime)/amplitude;
  tuv.y+=sin(tuv.x*(frequency*1.5)+warpTime)/(amplitude*0.5);

  vec3 colLav=uColor1;
  vec3 colOrg=uColor2;
  vec3 colDark=uColor3;
  float b=uColorBalance;
  float s=max(uBlendSoftness,0.0);
  mat2 blendRot=Rot(radians(uBlendAngle));
  float blendX=(tuv*blendRot).x;
  float edge0=-0.3-b-s;
  float edge1=0.2-b+s;
  float v0=0.5-b+s;
  float v1=-0.3-b-s;
  vec3 layer1=mix(colDark,colOrg,S(edge0,edge1,blendX));
  vec3 layer2=mix(colOrg,colLav,S(edge0,edge1,blendX));
  vec3 col=mix(layer1,layer2,S(v0,v1,tuv.y));

  vec2 grainUv=uv*max(uGrainScale,0.001);
  if(uGrainAnimated>0.5){grainUv+=vec2(iTime*0.05);} 
  float grain=fract(sin(dot(grainUv,vec2(12.9898,78.233)))*43758.5453);
  col+=(grain-0.5)*uGrainAmount;

  col=(col-0.5)*uContrast+0.5;
  float luma=dot(col,vec3(0.2126,0.7152,0.0722));
  col=mix(vec3(luma),col,uSaturation);
  col=pow(max(col,0.0),vec3(1.0/max(uGamma,0.001)));
  col=clamp(col,0.0,1.0);

  o=vec4(col,1.0);
}
void main(){
  vec4 o=vec4(0.0);
  mainImage(o,gl_FragCoord.xy);
  fragColor=o;
}
`,K=({timeSpeed:t=.25,colorBalance:e=0,warpStrength:s=1,warpFrequency:v=5,warpSpeed:m=2,warpAmplitude:d=50,blendAngle:p=0,blendSoftness:g=.05,rotationAmount:h=500,noiseScale:x=2,grainAmount:y=.1,grainScale:C=2,grainAnimated:R=!1,contrast:w=1.5,gamma:S=1,saturation:A=1,centerX:F=0,centerY:b=0,zoom:G=.9,color1:T="#FF9FFC",color2:W="#5227FF",color3:B="#B19EEF",className:N=""})=>{const u=I.useRef(null);return I.useEffect(()=>{if(!u.current)return;const i=new z({webgl:2,alpha:!0,antialias:!1,dpr:Math.min(window.devicePixelRatio||1,2)}),o=i.gl,a=o.canvas;a.style.width="100%",a.style.height="100%",a.style.display="block";const n=u.current;n.appendChild(a);const P=new D(o),l=new L(o,{vertex:$,fragment:H,uniforms:{iTime:{value:0},iResolution:{value:new Float32Array([1,1])},uTimeSpeed:{value:t},uColorBalance:{value:e},uWarpStrength:{value:s},uWarpFrequency:{value:v},uWarpSpeed:{value:m},uWarpAmplitude:{value:d},uBlendAngle:{value:p},uBlendSoftness:{value:g},uRotationAmount:{value:h},uNoiseScale:{value:x},uGrainAmount:{value:y},uGrainScale:{value:C},uGrainAnimated:{value:R?1:0},uContrast:{value:w},uGamma:{value:S},uSaturation:{value:A},uCenterOffset:{value:new Float32Array([F,b])},uZoom:{value:G},uColor1:{value:new Float32Array(f(T))},uColor2:{value:new Float32Array(f(W))},uColor3:{value:new Float32Array(f(B))}}}),j=new X(o,{geometry:P,program:l}),q=()=>{const r=n.getBoundingClientRect(),U=Math.max(1,Math.floor(r.width)),Z=Math.max(1,Math.floor(r.height));i.setSize(U,Z);const E=l.uniforms.iResolution.value;E[0]=o.drawingBufferWidth,E[1]=o.drawingBufferHeight},M=new ResizeObserver(q);M.observe(n),q();let c=0;const k=performance.now(),O=r=>{l.uniforms.iTime.value=(r-k)*.001,i.render({scene:j}),c=requestAnimationFrame(O)};return c=requestAnimationFrame(O),()=>{cancelAnimationFrame(c),M.disconnect();try{n.removeChild(a)}catch{}}},[t,e,s,v,m,d,p,g,h,x,y,C,R,w,S,A,F,b,G,T,W,B]),_.jsx("div",{ref:u,className:`grainient-container ${N}`.trim()})};export{K as default};
