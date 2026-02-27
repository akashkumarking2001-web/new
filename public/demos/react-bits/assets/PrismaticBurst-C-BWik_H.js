import{r as a,R as J,P as K,a5 as Q,M as $,j as ee}from"./index-CKqfvLoB.js";import{T as te}from"./Texture-BkQWYNP2.js";const re=`#version 300 es
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
}
`,ne=`#version 300 es
precision highp float;
precision highp int;

out vec4 fragColor;

uniform vec2  uResolution;
uniform float uTime;

uniform float uIntensity;
uniform float uSpeed;
uniform int   uAnimType;
uniform vec2  uMouse;
uniform int   uColorCount;
uniform float uDistort;
uniform vec2  uOffset;
uniform sampler2D uGradient;
uniform float uNoiseAmount;
uniform int   uRayCount;

float hash21(vec2 p){
    p = floor(p);
    float f = 52.9829189 * fract(dot(p, vec2(0.065, 0.005)));
    return fract(f);
}

mat2 rot30(){ return mat2(0.8, -0.5, 0.5, 0.8); }

float layeredNoise(vec2 fragPx){
    vec2 p = mod(fragPx + vec2(uTime * 30.0, -uTime * 21.0), 1024.0);
    vec2 q = rot30() * p;
    float n = 0.0;
    n += 0.40 * hash21(q);
    n += 0.25 * hash21(q * 2.0 + 17.0);
    n += 0.20 * hash21(q * 4.0 + 47.0);
    n += 0.10 * hash21(q * 8.0 + 113.0);
    n += 0.05 * hash21(q * 16.0 + 191.0);
    return n;
}

vec3 rayDir(vec2 frag, vec2 res, vec2 offset, float dist){
    float focal = res.y * max(dist, 1e-3);
    return normalize(vec3(2.0 * (frag - offset) - res, focal));
}

float edgeFade(vec2 frag, vec2 res, vec2 offset){
    vec2 toC = frag - 0.5 * res - offset;
    float r = length(toC) / (0.5 * min(res.x, res.y));
    float x = clamp(r, 0.0, 1.0);
    float q = x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
    float s = q * 0.5;
    s = pow(s, 1.5);
    float tail = 1.0 - pow(1.0 - s, 2.0);
    s = mix(s, tail, 0.2);
    float dn = (layeredNoise(frag * 0.15) - 0.5) * 0.0015 * s;
    return clamp(s + dn, 0.0, 1.0);
}

mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1.0,0.0,0.0, 0.0,c,-s, 0.0,s,c); }
mat3 rotY(float a){ float c = cos(a), s = sin(a); return mat3(c,0.0,s, 0.0,1.0,0.0, -s,0.0,c); }
mat3 rotZ(float a){ float c = cos(a), s = sin(a); return mat3(c,-s,0.0, s,c,0.0, 0.0,0.0,1.0); }

vec3 sampleGradient(float t){
    t = clamp(t, 0.0, 1.0);
    return texture(uGradient, vec2(t, 0.5)).rgb;
}

vec2 rot2(vec2 v, float a){
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c) * v;
}

float bendAngle(vec3 q, float t){
    float a = 0.8 * sin(q.x * 0.55 + t * 0.6)
            + 0.7 * sin(q.y * 0.50 - t * 0.5)
            + 0.6 * sin(q.z * 0.60 + t * 0.7);
    return a;
}

void main(){
    vec2 frag = gl_FragCoord.xy;
    float t = uTime * uSpeed;
    float jitterAmp = 0.1 * clamp(uNoiseAmount, 0.0, 1.0);
    vec3 dir = rayDir(frag, uResolution, uOffset, 1.0);
    float marchT = 0.0;
    vec3 col = vec3(0.0);
    float n = layeredNoise(frag);
    vec4 c = cos(t * 0.2 + vec4(0.0, 33.0, 11.0, 0.0));
    mat2 M2 = mat2(c.x, c.y, c.z, c.w);
    float amp = clamp(uDistort, 0.0, 50.0) * 0.15;

    mat3 rot3dMat = mat3(1.0);
    if(uAnimType == 1){
      vec3 ang = vec3(t * 0.31, t * 0.21, t * 0.17);
      rot3dMat = rotZ(ang.z) * rotY(ang.y) * rotX(ang.x);
    }
    mat3 hoverMat = mat3(1.0);
    if(uAnimType == 2){
      vec2 m = uMouse * 2.0 - 1.0;
      vec3 ang = vec3(m.y * 0.6, m.x * 0.6, 0.0);
      hoverMat = rotY(ang.y) * rotX(ang.x);
    }

    for (int i = 0; i < 44; ++i) {
        vec3 P = marchT * dir;
        P.z -= 2.0;
        float rad = length(P);
        vec3 Pl = P * (10.0 / max(rad, 1e-6));

        if(uAnimType == 0){
            Pl.xz *= M2;
        } else if(uAnimType == 1){
      Pl = rot3dMat * Pl;
        } else {
      Pl = hoverMat * Pl;
        }

        float stepLen = min(rad - 0.3, n * jitterAmp) + 0.1;

        float grow = smoothstep(0.35, 3.0, marchT);
        float a1 = amp * grow * bendAngle(Pl * 0.6, t);
        float a2 = 0.5 * amp * grow * bendAngle(Pl.zyx * 0.5 + 3.1, t * 0.9);
        vec3 Pb = Pl;
        Pb.xz = rot2(Pb.xz, a1);
        Pb.xy = rot2(Pb.xy, a2);

        float rayPattern = smoothstep(
            0.5, 0.7,
            sin(Pb.x + cos(Pb.y) * cos(Pb.z)) *
            sin(Pb.z + sin(Pb.y) * cos(Pb.x + t))
        );

        if (uRayCount > 0) {
            float ang = atan(Pb.y, Pb.x);
            float comb = 0.5 + 0.5 * cos(float(uRayCount) * ang);
            comb = pow(comb, 3.0);
            rayPattern *= smoothstep(0.15, 0.95, comb);
        }

        vec3 spectralDefault = 1.0 + vec3(
            cos(marchT * 3.0 + 0.0),
            cos(marchT * 3.0 + 1.0),
            cos(marchT * 3.0 + 2.0)
        );

        float saw = fract(marchT * 0.25);
        float tRay = saw * saw * (3.0 - 2.0 * saw);
        vec3 userGradient = 2.0 * sampleGradient(tRay);
        vec3 spectral = (uColorCount > 0) ? userGradient : spectralDefault;
        vec3 base = (0.05 / (0.4 + stepLen))
                  * smoothstep(5.0, 0.0, rad)
                  * spectral;

        col += base * rayPattern;
        marchT += stepLen;
    }

    col *= edgeFade(frag, uResolution, uOffset);
    col *= uIntensity;

    fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`,ae=m=>{let n=m.trim();if(n.startsWith("#")&&(n=n.slice(1)),n.length===3){const l=n[0],P=n[1],E=n[2];n=l+l+P+P+E+E}const u=parseInt(n,16);if(isNaN(u)||n.length!==6&&n.length!==8)return[1,1,1];const w=(u>>16&255)/255,M=(u>>8&255)/255,A=(u&255)/255;return[w,M,A]},Z=m=>{if(m==null)return 0;if(typeof m=="number")return m;const n=String(m).trim(),u=parseFloat(n.replace("px",""));return isNaN(u)?0:u},ce=({intensity:m=2,speed:n=.5,animationType:u="rotate3d",colors:w,distort:M=0,paused:A=!1,offset:l={x:0,y:0},hoverDampness:P=0,rayCount:E,mixBlendMode:d="lighten"})=>{const Y=a.useRef(null),N=a.useRef(null),C=a.useRef(null),U=a.useRef([.5,.5]),k=a.useRef([.5,.5]),j=a.useRef(A),z=a.useRef(null),X=a.useRef(P),V=a.useRef(!0),q=a.useRef(null),F=a.useRef(null);return a.useEffect(()=>{j.current=A},[A]),a.useEffect(()=>{X.current=P},[P]),a.useEffect(()=>{const e=Y.current;if(!e)return;const y=Math.min(window.devicePixelRatio||1,2),t=new J({dpr:y,alpha:!1,antialias:!1});C.current=t;const r=t.gl;r.canvas.style.position="absolute",r.canvas.style.inset="0",r.canvas.style.width="100%",r.canvas.style.height="100%",r.canvas.style.mixBlendMode=d&&d!=="none"?d:"",e.appendChild(r.canvas);const S=new Uint8Array([255,255,255,255]),h=new te(r,{image:S,width:1,height:1,generateMipmaps:!1,flipY:!1});h.minFilter=r.LINEAR,h.magFilter=r.LINEAR,h.wrapS=r.CLAMP_TO_EDGE,h.wrapT=r.CLAMP_TO_EDGE,z.current=h;const c=new K(r,{vertex:re,fragment:ne,uniforms:{uResolution:{value:[1,1]},uTime:{value:0},uIntensity:{value:1},uSpeed:{value:1},uAnimType:{value:0},uMouse:{value:[.5,.5]},uColorCount:{value:0},uDistort:{value:0},uOffset:{value:[0,0]},uGradient:{value:h},uNoiseAmount:{value:.8},uRayCount:{value:0}}});N.current=c;const v=new Q(r),D=new $(r,{geometry:v,program:c});F.current=v,q.current=D;const f=()=>{const o=e.clientWidth||1,i=e.clientHeight||1;t.setSize(o,i),c.uniforms.uResolution.value=[r.drawingBufferWidth,r.drawingBufferHeight]};let s=null;"ResizeObserver"in window?(s=new ResizeObserver(f),s.observe(e)):window.addEventListener("resize",f),f();const G=o=>{const i=e.getBoundingClientRect(),p=(o.clientX-i.left)/Math.max(i.width,1),b=(o.clientY-i.top)/Math.max(i.height,1);U.current=[Math.min(Math.max(p,0),1),Math.min(Math.max(b,0),1)]};e.addEventListener("pointermove",G,{passive:!0});let x=null;"IntersectionObserver"in window&&(x=new IntersectionObserver(o=>{o[0]&&(V.current=o[0].isIntersecting)},{root:null,threshold:.01}),x.observe(e));const I=()=>{};document.addEventListener("visibilitychange",I);let O=0,W=performance.now(),B=0;const _=o=>{const i=Math.max(0,o-W)*.001;W=o;const p=V.current&&!document.hidden;if(j.current||(B+=i),!p){O=requestAnimationFrame(_);return}const b=.02+Math.max(0,Math.min(1,X.current))*.5,R=1-Math.exp(-i/b),L=U.current,g=k.current;g[0]+=(L[0]-g[0])*R,g[1]+=(L[1]-g[1])*R,c.uniforms.uMouse.value=g,c.uniforms.uTime.value=B,t.render({scene:q.current}),O=requestAnimationFrame(_)};return O=requestAnimationFrame(_),()=>{var o,i,p,b,R,L,g,H;cancelAnimationFrame(O),e.removeEventListener("pointermove",G),s==null||s.disconnect(),s||window.removeEventListener("resize",f),x==null||x.disconnect(),document.removeEventListener("visibilitychange",I);try{e.removeChild(r.canvas)}catch{console.warn("Canvas already removed")}try{(i=(o=q.current)==null?void 0:o.remove)==null||i.call(o)}catch{}try{(b=(p=F.current)==null?void 0:p.remove)==null||b.call(p)}catch{}try{(L=(R=N.current)==null?void 0:R.remove)==null||L.call(R)}catch{}try{const T=(g=C.current)==null?void 0:g.gl;T&&((H=z.current)!=null&&H.texture)&&T.deleteTexture(z.current.texture)}catch{}N.current=null,C.current=null,z.current=null,q.current=null,F.current=null}},[]),a.useEffect(()=>{var y,t;const e=(t=(y=C.current)==null?void 0:y.gl)==null?void 0:t.canvas;e&&(e.style.mixBlendMode=d&&d!=="none"?d:"")},[d]),a.useEffect(()=>{const e=N.current,y=C.current,t=z.current;if(!e||!y||!t)return;e.uniforms.uIntensity.value=m??1,e.uniforms.uSpeed.value=n??1;const r={rotate:0,rotate3d:1,hover:2};e.uniforms.uAnimType.value=r[u??"rotate"],e.uniforms.uDistort.value=typeof M=="number"?M:0;const S=Z(l==null?void 0:l.x),h=Z(l==null?void 0:l.y);e.uniforms.uOffset.value=[S,h],e.uniforms.uRayCount.value=Math.max(0,Math.floor(E??0));let c=0;if(Array.isArray(w)&&w.length>0){const v=y.gl,D=w.slice(0,64);c=D.length;const f=new Uint8Array(c*4);for(let s=0;s<c;s++){const[G,x,I]=ae(D[s]);f[s*4+0]=Math.round(G*255),f[s*4+1]=Math.round(x*255),f[s*4+2]=Math.round(I*255),f[s*4+3]=255}t.image=f,t.width=c,t.height=1,t.minFilter=v.LINEAR,t.magFilter=v.LINEAR,t.wrapS=v.CLAMP_TO_EDGE,t.wrapT=v.CLAMP_TO_EDGE,t.flipY=!1,t.generateMipmaps=!1,t.format=v.RGBA,t.type=v.UNSIGNED_BYTE,t.needsUpdate=!0}else c=0;e.uniforms.uColorCount.value=c},[m,n,u,w,M,l,E]),ee.jsx("div",{className:"prismatic-burst-container",ref:Y})};export{ce as default};
