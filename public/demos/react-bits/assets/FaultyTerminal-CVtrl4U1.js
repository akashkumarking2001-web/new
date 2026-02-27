import{r as o,R as $,a5 as J,P as K,bI as C,M as Q,j as Z}from"./index-CKqfvLoB.js";const ee=`
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,te=`
precision mediump float;

varying vec2 vUv;

uniform float iTime;
uniform vec3  iResolution;
uniform float uScale;

uniform vec2  uGridMul;
uniform float uDigitSize;
uniform float uScanlineIntensity;
uniform float uGlitchAmount;
uniform float uFlickerAmount;
uniform float uNoiseAmp;
uniform float uChromaticAberration;
uniform float uDither;
uniform float uCurvature;
uniform vec3  uTint;
uniform vec2  uMouse;
uniform float uMouseStrength;
uniform float uUseMouse;
uniform float uPageLoadProgress;
uniform float uUsePageLoadAnimation;
uniform float uBrightness;

float time;

float hash21(vec2 p){
  p = fract(p * 234.56);
  p += dot(p, p + 34.56);
  return fract(p.x * p.y);
}

float noise(vec2 p)
{
  return sin(p.x * 10.0) * sin(p.y * (3.0 + sin(time * 0.090909))) + 0.2; 
}

mat2 rotate(float angle)
{
  float c = cos(angle);
  float s = sin(angle);
  return mat2(c, -s, s, c);
}

float fbm(vec2 p)
{
  p *= 1.1;
  float f = 0.0;
  float amp = 0.5 * uNoiseAmp;
  
  mat2 modify0 = rotate(time * 0.02);
  f += amp * noise(p);
  p = modify0 * p * 2.0;
  amp *= 0.454545;
  
  mat2 modify1 = rotate(time * 0.02);
  f += amp * noise(p);
  p = modify1 * p * 2.0;
  amp *= 0.454545;
  
  mat2 modify2 = rotate(time * 0.08);
  f += amp * noise(p);
  
  return f;
}

float pattern(vec2 p, out vec2 q, out vec2 r) {
  vec2 offset1 = vec2(1.0);
  vec2 offset0 = vec2(0.0);
  mat2 rot01 = rotate(0.1 * time);
  mat2 rot1 = rotate(0.1);
  
  q = vec2(fbm(p + offset1), fbm(rot01 * p + offset1));
  r = vec2(fbm(rot1 * q + offset0), fbm(q + offset0));
  return fbm(p + r);
}

float digit(vec2 p){
    vec2 grid = uGridMul * 15.0;
    vec2 s = floor(p * grid) / grid;
    p = p * grid;
    vec2 q, r;
    float intensity = pattern(s * 0.1, q, r) * 1.3 - 0.03;
    
    if(uUseMouse > 0.5){
        vec2 mouseWorld = uMouse * uScale;
        float distToMouse = distance(s, mouseWorld);
        float mouseInfluence = exp(-distToMouse * 8.0) * uMouseStrength * 10.0;
        intensity += mouseInfluence;
        
        float ripple = sin(distToMouse * 20.0 - iTime * 5.0) * 0.1 * mouseInfluence;
        intensity += ripple;
    }
    
    if(uUsePageLoadAnimation > 0.5){
        float cellRandom = fract(sin(dot(s, vec2(12.9898, 78.233))) * 43758.5453);
        float cellDelay = cellRandom * 0.8;
        float cellProgress = clamp((uPageLoadProgress - cellDelay) / 0.2, 0.0, 1.0);
        
        float fadeAlpha = smoothstep(0.0, 1.0, cellProgress);
        intensity *= fadeAlpha;
    }
    
    p = fract(p);
    p *= uDigitSize;
    
    float px5 = p.x * 5.0;
    float py5 = (1.0 - p.y) * 5.0;
    float x = fract(px5);
    float y = fract(py5);
    
    float i = floor(py5) - 2.0;
    float j = floor(px5) - 2.0;
    float n = i * i + j * j;
    float f = n * 0.0625;
    
    float isOn = step(0.1, intensity - f);
    float brightness = isOn * (0.2 + y * 0.8) * (0.75 + x * 0.25);
    
    return step(0.0, p.x) * step(p.x, 1.0) * step(0.0, p.y) * step(p.y, 1.0) * brightness;
}

float onOff(float a, float b, float c)
{
  return step(c, sin(iTime + a * cos(iTime * b))) * uFlickerAmount;
}

float displace(vec2 look)
{
    float y = look.y - mod(iTime * 0.25, 1.0);
    float window = 1.0 / (1.0 + 50.0 * y * y);
    return sin(look.y * 20.0 + iTime) * 0.0125 * onOff(4.0, 2.0, 0.8) * (1.0 + cos(iTime * 60.0)) * window;
}

vec3 getColor(vec2 p){
    
    float bar = step(mod(p.y + time * 20.0, 1.0), 0.2) * 0.4 + 1.0;
    bar *= uScanlineIntensity;
    
    float displacement = displace(p);
    p.x += displacement;

    if (uGlitchAmount != 1.0) {
      float extra = displacement * (uGlitchAmount - 1.0);
      p.x += extra;
    }

    float middle = digit(p);
    
    const float off = 0.002;
    float sum = digit(p + vec2(-off, -off)) + digit(p + vec2(0.0, -off)) + digit(p + vec2(off, -off)) +
                digit(p + vec2(-off, 0.0)) + digit(p + vec2(0.0, 0.0)) + digit(p + vec2(off, 0.0)) +
                digit(p + vec2(-off, off)) + digit(p + vec2(0.0, off)) + digit(p + vec2(off, off));
    
    vec3 baseColor = vec3(0.9) * middle + sum * 0.1 * vec3(1.0) * bar;
    return baseColor;
}

vec2 barrel(vec2 uv){
  vec2 c = uv * 2.0 - 1.0;
  float r2 = dot(c, c);
  c *= 1.0 + uCurvature * r2;
  return c * 0.5 + 0.5;
}

void main() {
    time = iTime * 0.333333;
    vec2 uv = vUv;

    if(uCurvature != 0.0){
      uv = barrel(uv);
    }
    
    vec2 p = uv * uScale;
    vec3 col = getColor(p);

    if(uChromaticAberration != 0.0){
      vec2 ca = vec2(uChromaticAberration) / iResolution.xy;
      col.r = getColor(p + ca).r;
      col.b = getColor(p - ca).b;
    }

    col *= uTint;
    col *= uBrightness;

    if(uDither > 0.0){
      float rnd = hash21(gl_FragCoord.xy);
      col += (rnd - 0.5) * (uDither * 0.003922);
    }

    gl_FragColor = vec4(col, 1.0);
}
`;function oe(v){let a=v.replace("#","").trim();a.length===3&&(a=a.split("").map(f=>f+f).join(""));const u=parseInt(a,16);return[(u>>16&255)/255,(u>>8&255)/255,(u&255)/255]}function ne({scale:v=1,gridMul:a=[2,1],digitSize:u=1.5,timeScale:f=.3,pause:w=!1,scanlineIntensity:T=.3,glitchAmount:A=1,flickerAmount:P=1,noiseAmp:F=0,chromaticAberration:S=0,dither:p=0,curvature:D=.2,tint:U="#ffffff",mouseReact:l=!0,mouseStrength:E=.2,dpr:q=Math.min(window.devicePixelRatio||1,2),pageLoadAnimation:c=!0,brightness:G=1,className:N,style:W,...V}){const y=o.useRef(null),H=o.useRef(null),X=o.useRef(null),j=o.useRef({x:.5,y:.5}),x=o.useRef({x:.5,y:.5}),z=o.useRef(0),b=o.useRef(0),m=o.useRef(0),I=o.useRef(Math.random()*100),d=o.useMemo(()=>oe(U),[U]),O=o.useMemo(()=>typeof p=="boolean"?p?1:0:p,[p]),M=o.useCallback(t=>{const n=y.current;if(!n)return;const e=n.getBoundingClientRect(),R=(t.clientX-e.left)/e.width,r=1-(t.clientY-e.top)/e.height;j.current={x:R,y:r}},[]);return o.useEffect(()=>{const t=y.current;if(!t)return;const n=new $({dpr:q});X.current=n;const e=n.gl;e.clearColor(0,0,0,1);const R=new J(e),r=new K(e,{vertex:ee,fragment:te,uniforms:{iTime:{value:0},iResolution:{value:new C(e.canvas.width,e.canvas.height,e.canvas.width/e.canvas.height)},uScale:{value:v},uGridMul:{value:new Float32Array(a)},uDigitSize:{value:u},uScanlineIntensity:{value:T},uGlitchAmount:{value:A},uFlickerAmount:{value:P},uNoiseAmp:{value:F},uChromaticAberration:{value:S},uDither:{value:O},uCurvature:{value:D},uTint:{value:new C(d[0],d[1],d[2])},uMouse:{value:new Float32Array([x.current.x,x.current.y])},uMouseStrength:{value:E},uUseMouse:{value:l?1:0},uPageLoadProgress:{value:c?0:1},uUsePageLoadAnimation:{value:c?1:0},uBrightness:{value:G}}});H.current=r;const Y=new Q(e,{geometry:R,program:r});function k(){!t||!n||(n.setSize(t.offsetWidth,t.offsetHeight),r.uniforms.iResolution.value=new C(e.canvas.width,e.canvas.height,e.canvas.width/e.canvas.height))}const L=new ResizeObserver(()=>k());L.observe(t),k();const B=s=>{if(b.current=requestAnimationFrame(B),c&&m.current===0&&(m.current=s),w)r.uniforms.iTime.value=z.current;else{const g=(s*.001+I.current)*f;r.uniforms.iTime.value=g,z.current=g}if(c&&m.current>0){const i=s-m.current,h=Math.min(i/2e3,1);r.uniforms.uPageLoadProgress.value=h}if(l){const i=x.current,h=j.current;i.x+=(h.x-i.x)*.08,i.y+=(h.y-i.y)*.08;const _=r.uniforms.uMouse.value;_[0]=i.x,_[1]=i.y}n.render({scene:Y})};return b.current=requestAnimationFrame(B),t.appendChild(e.canvas),l&&t.addEventListener("mousemove",M),()=>{var s;cancelAnimationFrame(b.current),L.disconnect(),l&&t.removeEventListener("mousemove",M),e.canvas.parentElement===t&&t.removeChild(e.canvas),(s=e.getExtension("WEBGL_lose_context"))==null||s.loseContext(),m.current=0,I.current=Math.random()*100}},[q,w,f,v,a,u,T,A,P,F,S,O,D,d,l,E,c,G,M]),Z.jsx("div",{ref:y,className:`faulty-terminal-container ${N}`,style:W,...V})}export{ne as default};
