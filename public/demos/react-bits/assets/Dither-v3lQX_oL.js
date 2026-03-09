import{r as l,j as s,i as k}from"./index-CKqfvLoB.js";import{a as q,u as $,e as K,C as Q}from"./react-three-fiber.esm-DFK4OWio.js";import{V as F,H as Z,j as ee,p as h,C as te}from"./three.module-DbwSNGae.js";import{E as oe,R as re,N as ne,D as ae,c as A,a as ie,P as se}from"./index-XT30UhE1.js";function B(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}new F;new F;function X(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var g=function t(e,o,r){var i=this;X(this,t),B(this,"dot2",function(u,d){return i.x*u+i.y*d}),B(this,"dot3",function(u,d,f){return i.x*u+i.y*d+i.z*f}),this.x=e,this.y=o,this.z=r},le=[new g(1,1,0),new g(-1,1,0),new g(1,-1,0),new g(-1,-1,0),new g(1,0,1),new g(-1,0,1),new g(1,0,-1),new g(-1,0,-1),new g(0,1,1),new g(0,-1,1),new g(0,1,-1),new g(0,-1,-1)],U=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],V=new Array(512),_=new Array(512),ce=function(e){e>0&&e<1&&(e*=65536),e=Math.floor(e),e<256&&(e|=e<<8);for(var o=0;o<256;o++){var r;o&1?r=U[o]^e&255:r=U[o]^e>>8&255,V[o]=V[o+256]=r,_[o]=_[o+256]=le[r%12]}};ce(0);function ue(t){if(typeof t=="number")t=Math.abs(t);else if(typeof t=="string"){var e=t;t=0;for(var o=0;o<e.length;o++)t=(t+(o+1)*(e.charCodeAt(o)%96))%2147483647}return t===0&&(t=311),t}function O(t){var e=ue(t);return function(){var o=e*48271%2147483647;return e=o,o/2147483647}}var fe=function t(e){var o=this;X(this,t),B(this,"seed",0),B(this,"init",function(r){o.seed=r,o.value=O(r)}),B(this,"value",O(this.seed)),this.init(e)};new fe(Math.random());const ve=l.createContext(null),H=t=>(t.getAttributes()&2)===2,me=l.memo(l.forwardRef(({children:t,camera:e,scene:o,resolutionScale:r,enabled:i=!0,renderPriority:u=1,autoClear:d=!0,depthBuffer:f,enableNormalPass:p,stencilBuffer:S,multisampling:z=8,frameBufferType:P=Z},R)=>{const{gl:c,scene:M,camera:D,size:E}=q(),v=o||M,n=e||D,[a,m,b]=l.useMemo(()=>{const x=new oe(c,{depthBuffer:f,stencilBuffer:S,multisampling:z,frameBufferType:P});x.addPass(new re(v,n));let y=null,w=null;return p&&(w=new ne(v,n),w.enabled=!1,x.addPass(w),r!==void 0&&(y=new ae({normalBuffer:w.texture,resolutionScale:r}),y.enabled=!1,x.addPass(y))),[x,w,y]},[n,c,f,S,z,P,v,p,r]);l.useEffect(()=>a==null?void 0:a.setSize(E.width,E.height),[a,E]),$((x,y)=>{if(i){const w=c.autoClear;c.autoClear=d,S&&!d&&c.clearStencil(),a.render(y),c.autoClear=w}},i?u:0);const G=l.useRef(null);l.useLayoutEffect(()=>{var w;const x=[],y=G.current.__r3f;if(y&&a){const N=y.children;for(let C=0;C<N.length;C++){const j=N[C].object;if(j instanceof A){const I=[j];if(!H(j)){let T=null;for(;(T=(w=N[C+1])==null?void 0:w.object)instanceof A&&!H(T);)I.push(T),C++}const Y=new ie(n,...I);x.push(Y)}else j instanceof se&&x.push(j)}for(const C of x)a==null||a.addPass(C);m&&(m.enabled=!0),b&&(b.enabled=!0)}return()=>{for(const N of x)a==null||a.removePass(N);m&&(m.enabled=!1),b&&(b.enabled=!1)}},[a,t,n,m,b]),l.useEffect(()=>{const x=c.toneMapping;return c.toneMapping=ee,()=>{c.toneMapping=x}},[c]);const L=l.useMemo(()=>({composer:a,normalPass:m,downSamplingPass:b,resolutionScale:r,camera:n,scene:v}),[a,m,b,r,n,v]);return l.useImperativeHandle(R,()=>a,[a]),s.jsx(ve.Provider,{value:L,children:s.jsx("group",{ref:G,children:t})})}));let de=0;const W=new WeakMap,pe=(t,e)=>function({blendFunction:o=e==null?void 0:e.blendFunction,opacity:r=e==null?void 0:e.opacity,...i}){let u=W.get(t);if(!u){const p=`@react-three/postprocessing/${t.name}-${de++}`;K({[p]:t}),W.set(t,u=p)}const d=q(p=>p.camera),f=k.useMemo(()=>[...(e==null?void 0:e.args)??[],...i.args??[{...e,...i}]],[JSON.stringify(i)]);return s.jsx(u,{camera:d,"blendMode-blendFunction":o,"blendMode-opacity-value":r,...i,args:f})},xe=`
precision highp float;
varying vec2 vUv;
void main() {
  vUv = uv;
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  gl_Position = projectionMatrix * viewPosition;
}
`,ge=`
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform float waveSpeed;
uniform float waveFrequency;
uniform float waveAmplitude;
uniform vec3 waveColor;
uniform vec2 mousePos;
uniform int enableMouseInteraction;
uniform float mouseRadius;

vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 fade(vec2 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

float cnoise(vec2 P) {
  vec4 Pi = floor(P.xyxy) + vec4(0.0,0.0,1.0,1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0,0.0,1.0,1.0);
  Pi = mod289(Pi);
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = fract(i * (1.0/41.0)) * 2.0 - 1.0;
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x, gy.x);
  vec2 g10 = vec2(gx.y, gy.y);
  vec2 g01 = vec2(gx.z, gy.z);
  vec2 g11 = vec2(gx.w, gy.w);
  vec4 norm = taylorInvSqrt(vec4(dot(g00,g00), dot(g01,g01), dot(g10,g10), dot(g11,g11)));
  g00 *= norm.x; g01 *= norm.y; g10 *= norm.z; g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  return 2.3 * mix(n_x.x, n_x.y, fade_xy.y);
}

const int OCTAVES = 4;
float fbm(vec2 p) {
  float value = 0.0;
  float amp = 1.0;
  float freq = waveFrequency;
  for (int i = 0; i < OCTAVES; i++) {
    value += amp * abs(cnoise(p));
    p *= freq;
    amp *= waveAmplitude;
  }
  return value;
}

float pattern(vec2 p) {
  vec2 p2 = p - time * waveSpeed;
  return fbm(p + fbm(p2)); 
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  uv -= 0.5;
  uv.x *= resolution.x / resolution.y;
  float f = pattern(uv);
  if (enableMouseInteraction == 1) {
    vec2 mouseNDC = (mousePos / resolution - 0.5) * vec2(1.0, -1.0);
    mouseNDC.x *= resolution.x / resolution.y;
    float dist = length(uv - mouseNDC);
    float effect = 1.0 - smoothstep(0.0, mouseRadius, dist);
    f -= 0.5 * effect;
  }
  vec3 col = mix(vec3(0.0), waveColor, f);
  gl_FragColor = vec4(col, 1.0);
}
`,he=`
precision highp float;
uniform float colorNum;
uniform float pixelSize;
const float bayerMatrix8x8[64] = float[64](
  0.0/64.0, 48.0/64.0, 12.0/64.0, 60.0/64.0,  3.0/64.0, 51.0/64.0, 15.0/64.0, 63.0/64.0,
  32.0/64.0,16.0/64.0, 44.0/64.0, 28.0/64.0, 35.0/64.0,19.0/64.0, 47.0/64.0, 31.0/64.0,
  8.0/64.0, 56.0/64.0,  4.0/64.0, 52.0/64.0, 11.0/64.0,59.0/64.0,  7.0/64.0, 55.0/64.0,
  40.0/64.0,24.0/64.0, 36.0/64.0, 20.0/64.0, 43.0/64.0,27.0/64.0, 39.0/64.0, 23.0/64.0,
  2.0/64.0, 50.0/64.0, 14.0/64.0, 62.0/64.0,  1.0/64.0,49.0/64.0, 13.0/64.0, 61.0/64.0,
  34.0/64.0,18.0/64.0, 46.0/64.0, 30.0/64.0, 33.0/64.0,17.0/64.0, 45.0/64.0, 29.0/64.0,
  10.0/64.0,58.0/64.0,  6.0/64.0, 54.0/64.0,  9.0/64.0,57.0/64.0,  5.0/64.0, 53.0/64.0,
  42.0/64.0,26.0/64.0, 38.0/64.0, 22.0/64.0, 41.0/64.0,25.0/64.0, 37.0/64.0, 21.0/64.0
);

vec3 dither(vec2 uv, vec3 color) {
  vec2 scaledCoord = floor(uv * resolution / pixelSize);
  int x = int(mod(scaledCoord.x, 8.0));
  int y = int(mod(scaledCoord.y, 8.0));
  float threshold = bayerMatrix8x8[y * 8 + x] - 0.25;
  float step = 1.0 / (colorNum - 1.0);
  color += threshold * step;
  float bias = 0.2;
  color = clamp(color - bias, 0.0, 1.0);
  return floor(color * (colorNum - 1.0) + 0.5) / (colorNum - 1.0);
}

void mainImage(in vec4 inputColor, in vec2 uv, out vec4 outputColor) {
  vec2 normalizedPixelSize = pixelSize / resolution;
  vec2 uvPixel = normalizedPixelSize * floor(uv / normalizedPixelSize);
  vec4 color = texture2D(inputBuffer, uvPixel);
  color.rgb = dither(uv, color.rgb);
  outputColor = color;
}
`;class we extends A{constructor(){const e=new Map([["colorNum",new h(4)],["pixelSize",new h(2)]]);super("RetroEffect",he,{uniforms:e}),this.uniforms=e}set colorNum(e){this.uniforms.get("colorNum").value=e}get colorNum(){return this.uniforms.get("colorNum").value}set pixelSize(e){this.uniforms.get("pixelSize").value=e}get pixelSize(){return this.uniforms.get("pixelSize").value}}const ye=pe(we),J=l.forwardRef((t,e)=>{const{colorNum:o,pixelSize:r}=t;return s.jsx(ye,{ref:e,colorNum:o,pixelSize:r})});J.displayName="RetroEffect";function Pe({waveSpeed:t,waveFrequency:e,waveAmplitude:o,waveColor:r,colorNum:i,pixelSize:u,disableAnimation:d,enableMouseInteraction:f,mouseRadius:p}){const S=l.useRef(null),z=l.useRef(new F),{viewport:P,size:R,gl:c}=q(),M=l.useRef({time:new h(0),resolution:new h(new F(0,0)),waveSpeed:new h(t),waveFrequency:new h(e),waveAmplitude:new h(o),waveColor:new h(new te(...r)),mousePos:new h(new F(0,0)),enableMouseInteraction:new h(f?1:0),mouseRadius:new h(p)});l.useEffect(()=>{const v=c.getPixelRatio(),n=Math.floor(R.width*v),a=Math.floor(R.height*v),m=M.current.resolution.value;(m.x!==n||m.y!==a)&&m.set(n,a)},[R,c]);const D=l.useRef([...r]);$(({clock:v})=>{const n=M.current;d||(n.time.value=v.getElapsedTime()),n.waveSpeed.value!==t&&(n.waveSpeed.value=t),n.waveFrequency.value!==e&&(n.waveFrequency.value=e),n.waveAmplitude.value!==o&&(n.waveAmplitude.value=o),D.current.every((a,m)=>a===r[m])||(n.waveColor.value.set(...r),D.current=[...r]),n.enableMouseInteraction.value=f?1:0,n.mouseRadius.value=p,f&&n.mousePos.value.copy(z.current)});const E=v=>{if(!f)return;const n=c.domElement.getBoundingClientRect(),a=c.getPixelRatio();z.current.set((v.clientX-n.left)*a,(v.clientY-n.top)*a)};return s.jsxs(s.Fragment,{children:[s.jsxs("mesh",{ref:S,scale:[P.width,P.height,1],children:[s.jsx("planeGeometry",{args:[1,1]}),s.jsx("shaderMaterial",{vertexShader:xe,fragmentShader:ge,uniforms:M.current})]}),s.jsx(me,{children:s.jsx(J,{colorNum:i,pixelSize:u})}),s.jsxs("mesh",{onPointerMove:E,position:[0,0,.01],scale:[P.width,P.height,1],visible:!1,children:[s.jsx("planeGeometry",{args:[1,1]}),s.jsx("meshBasicMaterial",{transparent:!0,opacity:0})]})]})}function Re({waveSpeed:t=.05,waveFrequency:e=3,waveAmplitude:o=.3,waveColor:r=[.5,.5,.5],colorNum:i=4,pixelSize:u=2,disableAnimation:d=!1,enableMouseInteraction:f=!0,mouseRadius:p=1}){return s.jsx(Q,{className:"dither-container",camera:{position:[0,0,6]},dpr:1,gl:{antialias:!0,preserveDrawingBuffer:!0},children:s.jsx(Pe,{waveSpeed:t,waveFrequency:e,waveAmplitude:o,waveColor:r,colorNum:i,pixelSize:u,disableAnimation:d,enableMouseInteraction:f,mouseRadius:p})})}export{Re as default};
