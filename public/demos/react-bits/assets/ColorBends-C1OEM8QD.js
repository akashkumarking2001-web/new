import{r as t,j as D}from"./index-CKqfvLoB.js";import{V as f,S as $,O as H,P as Y,m as I,a as J,M as K,W as Q,i as Z,n as ee}from"./three.module-DbwSNGae.js";const y=8,re=`
#define MAX_COLORS ${y}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer; // in NDC [-1,1]
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

    vec3 col = vec3(0.0);
    float a = 1.0;

    if (uColorCount > 0) {
      vec2 s = q;
      vec3 sumCol = vec3(0.0);
      float cover = 0.0;
      for (int i = 0; i < MAX_COLORS; ++i) {
            if (i >= uColorCount) break;
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3); // strong response across 0..1
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0); // allow >1 to amplify displacement
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float m = mix(m0, m1, kMix);
            float w = 1.0 - exp(-6.0 / exp(6.0 * m));
            sumCol += uColors[i] * w;
            cover = max(cover, w);
      }
      col = clamp(sumCol, 0.0, 1.0);
      a = uTransparent > 0 ? cover : 1.0;
    } else {
        vec2 s = q;
        for (int k = 0; k < 3; ++k) {
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float m = mix(m0, m1, kMix);
            col[k] = 1.0 - exp(-6.0 / exp(6.0 * m));
        }
        a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
    }

    if (uNoise > 0.0001) {
      float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
      col += (n - 0.5) * uNoise;
      col = clamp(col, 0.0, 1.0);
    }

    vec3 rgb = (uTransparent > 0) ? col * a : col;
    gl_FragColor = vec4(rgb, a);
}
`,ne=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function ae({className:z,style:N,rotation:S=45,speed:v=.2,colors:P=[],transparent:c=!0,autoRotate:M=0,scale:p=1,frequency:d=1,warpStrength:w=1,mouseInfluence:h=1,parallax:C=.5,noise:g=.1}){const k=t.useRef(null),F=t.useRef(null),R=t.useRef(null),q=t.useRef(null),E=t.useRef(null),O=t.useRef(S),T=t.useRef(M),b=t.useRef(new f(0,0)),_=t.useRef(new f(0,0)),X=t.useRef(8);return t.useEffect(()=>{const r=k.current,u=new $,i=new H(-1,1,1,-1,0,1),a=new Y(2,2),n=Array.from({length:y},()=>new I(0,0,0)),e=new J({vertexShader:ne,fragmentShader:re,uniforms:{uCanvas:{value:new f(1,1)},uTime:{value:0},uSpeed:{value:v},uRot:{value:new f(1,0)},uColorCount:{value:0},uColors:{value:n},uTransparent:{value:c?1:0},uScale:{value:p},uFrequency:{value:d},uWarpStrength:{value:w},uPointer:{value:new f(0,0)},uMouseInfluence:{value:h},uParallax:{value:C},uNoise:{value:g}},premultipliedAlpha:!0,transparent:!0});q.current=e;const s=new K(a,e);u.add(s);const o=new Q({antialias:!1,powerPreference:"high-performance",alpha:!0});F.current=o,o.outputColorSpace=Z,o.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),o.setClearColor(0,c?0:1),o.domElement.style.width="100%",o.domElement.style.height="100%",o.domElement.style.display="block",r.appendChild(o.domElement);const A=new ee,x=()=>{const l=r.clientWidth||1,m=r.clientHeight||1;o.setSize(l,m,!1),e.uniforms.uCanvas.value.set(l,m)};if(x(),"ResizeObserver"in window){const l=new ResizeObserver(x);l.observe(r),E.current=l}else window.addEventListener("resize",x);const B=()=>{const l=A.getDelta(),m=A.elapsedTime;e.uniforms.uTime.value=m;const W=(O.current%360+T.current*m)*Math.PI/180,U=Math.cos(W),V=Math.sin(W);e.uniforms.uRot.value.set(U,V);const L=_.current,j=b.current,G=Math.min(1,l*X.current);L.lerp(j,G),e.uniforms.uPointer.value.copy(L),o.render(u,i),R.current=requestAnimationFrame(B)};return R.current=requestAnimationFrame(B),()=>{R.current!==null&&cancelAnimationFrame(R.current),E.current?E.current.disconnect():window.removeEventListener("resize",x),a.dispose(),e.dispose(),o.dispose(),o.domElement&&o.domElement.parentElement===r&&r.removeChild(o.domElement)}},[d,h,g,C,p,v,c,w]),t.useEffect(()=>{const r=q.current,u=F.current;if(!r)return;O.current=S,T.current=M,r.uniforms.uSpeed.value=v,r.uniforms.uScale.value=p,r.uniforms.uFrequency.value=d,r.uniforms.uWarpStrength.value=w,r.uniforms.uMouseInfluence.value=h,r.uniforms.uParallax.value=C,r.uniforms.uNoise.value=g;const i=n=>{const e=n.replace("#","").trim(),s=e.length===3?[parseInt(e[0]+e[0],16),parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16)]:[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)];return new I(s[0]/255,s[1]/255,s[2]/255)},a=(P||[]).filter(Boolean).slice(0,y).map(i);for(let n=0;n<y;n++){const e=r.uniforms.uColors.value[n];n<a.length?e.copy(a[n]):e.set(0,0,0)}r.uniforms.uColorCount.value=a.length,r.uniforms.uTransparent.value=c?1:0,u&&u.setClearColor(0,c?0:1)},[S,M,v,p,d,w,h,C,g,P,c]),t.useEffect(()=>{const r=q.current,u=k.current;if(!r||!u)return;const i=a=>{const n=u.getBoundingClientRect(),e=(a.clientX-n.left)/(n.width||1)*2-1,s=-((a.clientY-n.top)/(n.height||1)*2-1);b.current.set(e,s)};return u.addEventListener("pointermove",i),()=>{u.removeEventListener("pointermove",i)}},[]),D.jsx("div",{ref:k,className:`color-bends-container ${z}`,style:N})}export{ae as default};
