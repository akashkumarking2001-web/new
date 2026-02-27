import{r as e,T as ie,G as se,P as ce,M as ue,j as y,R as K}from"./index-CKqfvLoB.js";import{C as le}from"./Camera-HNSge1c7.js";const fe=`
attribute vec2 position;
void main(){
  gl_Position=vec4(position,0.,1.);
}
`,de=`
precision mediump float;
uniform float iTime;
uniform vec2  iResolution;
uniform vec2  uOffset;
uniform float uRotation;
uniform float focalLength;
uniform float speed1;
uniform float speed2;
uniform float dir2;
uniform float bend1;
uniform float bend2;
uniform float bendAdj1;
uniform float bendAdj2;
uniform float uOpacity;

const float lt   = 0.3;
const float pi   = 3.14159;
const float pi2  = 6.28318;
const float pi_2 = 1.5708;
#define MAX_STEPS 14

void mainImage(out vec4 C, in vec2 U) {
  float t = iTime * pi;
  float s = 1.0;
  float d = 0.0;
  vec2  R = iResolution;

  vec3 o = vec3(0.0, 0.0, -7.0);
  vec3 u = normalize(vec3((U - 0.5 * R) / R.y, focalLength));
  vec2 k = vec2(0.0);
  vec3 p;

  float t1 = t * 0.7;
  float t2 = t * 0.9;
  float tSpeed1 = t * speed1;
  float tSpeed2 = t * speed2 * dir2;
  float wob1Base = bend1 + bendAdj1;
  float wob2Base = bend2 + bendAdj2;

  for (int i = 0; i < MAX_STEPS; ++i) {
    p = o + u * d;
    p.x -= 15.0;

    float px = p.x;
    float wob1 = wob1Base + sin(t1 + px * 0.8) * 0.1;
    float wob2 = wob2Base + cos(t2 + px * 1.1) * 0.1;

    float px2 = px + pi_2;
    vec2 sinOffset = sin(vec2(px, px2) + tSpeed1) * wob1;
    vec2 cosOffset = cos(vec2(px, px2) + tSpeed2) * wob2;

    vec2 yz = p.yz;
    float pxLt = px + lt;
    k.x = max(pxLt, length(yz - sinOffset) - lt);
    k.y = max(pxLt, length(yz - cosOffset) - lt);

    float current = min(k.x, k.y);
    s = min(s, current);
    if (s < 0.001 || d > 300.0) break;
    d += s * 0.7;
  }

  float sqrtD = sqrt(d);
  vec3 c = max(cos(d * pi2) - s * sqrtD - vec3(k, 0.0), 0.0);
  c.gb += 0.1;
  float maxC = max(c.r, max(c.g, c.b));
  if (maxC < 0.15) discard;
  c = c * 0.4 + c.brg * 0.6 + c * c;
  C = vec4(c, uOpacity);
}

void main() {
  vec2 coord = gl_FragCoord.xy + uOffset;
  coord -= 0.5 * iResolution;
  float c = cos(uRotation), s = sin(uRotation);
  coord = mat2(c, -s, s, c) * coord;
  coord += 0.5 * iResolution;

  vec4 color;
  mainImage(color, coord);
  gl_FragColor = color;
}
`;function ve({xOffset:M=0,yOffset:S=0,rotationDeg:N=0,focalLength:k=.8,speed1:I=.05,speed2:L=.05,dir2:P=1,bend1:F=1,bend2:B=.5,fadeInDuration:Q=2e3,pauseWhenOffscreen:U=!0,rootMargin:Z="200px",autoPauseOnScroll:D=!0,scrollPauseThreshold:_=null,resumeOnScrollUp:A=!1,dynamicDpr:$=!1}){const[m,ee]=e.useState(!1),[v,te]=e.useState(!1),f=e.useRef(null),C=e.useRef(new Float32Array([M,S])),g=e.useRef(new Float32Array([1,1])),re=e.useRef(null),h=e.useRef(null),E=e.useRef(0),s=e.useRef(null),d=e.useRef(null),w=e.useRef(!1),c=e.useRef(null),b=e.useRef(!1),O=e.useRef({start:()=>{},stop:()=>{}}),z=e.useRef(null),q=e.useRef({});return q.current={xOffset:M,yOffset:S,rotationDeg:N,focalLength:k,speed1:I,speed2:L,dir2:P,bend1:F,bend2:B,fadeInDuration:Q},e.useEffect(()=>{const u=()=>te(window.innerWidth<=768);return u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]),e.useEffect(()=>{if(v||m)return;const t=(()=>{const r={alpha:!0,dpr:.5,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1};try{return new K(r)}catch{try{const a=document.createElement("canvas"),i={alpha:!0,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1},l=a.getContext("webgl2",i)||a.getContext("webgl",i)||a.getContext("experimental-webgl",i);return l?new K({...r,gl:l}):null}catch{return null}}})();if(!t){ee(!0);return}re.current=t;const n=t.gl;n.clearColor(0,0,0,0),f.current.appendChild(n.canvas);const W=new le(n),T=new ie,ne=new se(n,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])}}),p=new ce(n,{vertex:fe,fragment:de,uniforms:{iTime:{value:0},iResolution:{value:g.current},uOffset:{value:C.current},uRotation:{value:0},focalLength:{value:k},speed1:{value:I},speed2:{value:L},dir2:{value:P},bend1:{value:F},bend2:{value:B},bendAdj1:{value:0},bendAdj2:{value:0},uOpacity:{value:0}}});new ue(n,{geometry:ne,program:p}).setParent(T);const G=()=>{const r=f.current;if(!r)return;const{width:o,height:a}=r.getBoundingClientRect(),i=o*t.dpr,l=a*t.dpr;i===g.current[0]&&l===g.current[1]||(t.setSize(o,a),g.current[0]=i,g.current[1]=l,n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight))};G();const oe=()=>{s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{G(),s.current=null},150)},H=new ResizeObserver(oe);H.observe(f.current),E.current=performance.now();const X=r=>{const{xOffset:o,yOffset:a,rotationDeg:i,focalLength:l,fadeInDuration:V}=q.current,J=(r-E.current)*.001;h.current===null&&J>.1&&(h.current=r);let R=0;if(h.current!==null){const ae=r-h.current;R=Math.min(ae/V,1),R=1-Math.pow(1-R,3)}C.current[0]=o,C.current[1]=a,p.uniforms.iTime.value=J,p.uniforms.uRotation.value=i*Math.PI/180,p.uniforms.focalLength.value=l,p.uniforms.uOpacity.value=R,t.render({scene:T,camera:W}),w.current&&(d.current=requestAnimationFrame(X))},j=()=>{if(!(w.current||b.current)){if(w.current=!0,E.current=performance.now()-p.uniforms.iTime.value*1e3,$){const r=Math.min(window.devicePixelRatio,1);t.dpr!==r&&(t.dpr=r)}t.render({scene:T,camera:W}),d.current=requestAnimationFrame(X)}},Y=()=>{w.current=!1,d.current&&cancelAnimationFrame(d.current)};O.current={start:j,stop:Y},j();const x=f.current;return U&&"IntersectionObserver"in window&&(c.current=new IntersectionObserver(r=>{const o=r[0];o&&(o.isIntersecting?j():Y())},{root:null,rootMargin:Z,threshold:0}),x&&c.current.observe(x)),()=>{w.current=!1,d.current&&cancelAnimationFrame(d.current),H.disconnect(),s.current&&(clearTimeout(s.current),s.current=null),c.current&&x&&(typeof c.current.unobserve=="function"&&c.current.unobserve(x),c.current.disconnect(),c.current=null),t.gl.canvas.remove()}},[v,m]),e.useEffect(()=>{if(v||m||!D)return;z.current||(z.current=_??Math.round(window.innerHeight*1.2));const u=z.current,t=()=>{const n=window.scrollY||window.pageYOffset;!b.current&&n>u?(O.current.stop(),A||(b.current=!0)):A&&n<=u&&!b.current&&O.current.start()};return window.addEventListener("scroll",t,{passive:!0}),t(),()=>window.removeEventListener("scroll",t)},[v,m,D,_,A]),v?null:m?y.jsx("div",{ref:f,style:{position:"absolute",inset:0,overflow:"hidden",width:"100vw",height:"100vh",pointerEvents:"none",background:"radial-gradient(1200px 600px at 20% 80%, rgba(123, 31, 162, 0.3), transparent 60%), radial-gradient(1000px 500px at 80% 20%, rgba(33, 150, 243, 0.25), transparent 60%), linear-gradient(180deg, rgba(10, 2, 20, 0.6), rgba(10, 2, 20, 0.8))"},children:y.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:200,background:"linear-gradient(to top, #060010, transparent)",pointerEvents:"none",zIndex:1}})}):y.jsx("div",{ref:f,style:{opacity:.6,position:"absolute",inset:0,overflow:"hidden",width:"100vw",height:"100vh",pointerEvents:"none",willChange:"opacity"},children:y.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:200,background:"linear-gradient(to top, #060010, transparent)",pointerEvents:"none",zIndex:1}})})}export{ve as default};
