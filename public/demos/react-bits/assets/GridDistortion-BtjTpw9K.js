import{r as l,j as B}from"./index-CKqfvLoB.js";import{S as H,W as V,O as _,at as I,a3 as A,c as W,a6 as K,l as N,a1 as $,a as k,t as J,K as Q,P as Z,M as ee}from"./three.module-DbwSNGae.js";const te=`
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,ne=`
uniform sampler2D uDataTexture;
uniform sampler2D uTexture;
uniform vec4 resolution;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  vec4 offset = texture2D(uDataTexture, vUv);
  gl_FragColor = texture2D(uTexture, uv - 0.02 * offset.rg);
}`,ie=({grid:y=15,mouse:D=.1,strength:w=.15,relaxation:g=.9,imageSrc:b,className:G=""})=>{const x=l.useRef(null),z=l.useRef(null),X=l.useRef(null),Y=l.useRef(null),C=l.useRef(null),q=l.useRef(1),R=l.useRef(null),M=l.useRef(null);return l.useEffect(()=>{if(!x.current)return;const r=x.current,p=new H;z.current=p;const o=new V({antialias:!0,alpha:!0,powerPreference:"high-performance"});o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setClearColor(0,0),X.current=o,r.innerHTML="",r.appendChild(o.domElement);const i=new _(0,0,0,0,-1e3,1e3);i.position.z=2,Y.current=i;const d={time:{value:0},resolution:{value:new J},uTexture:{value:null},uDataTexture:{value:null}};new I().load(b,e=>{e.minFilter=A,e.magFilter=A,e.wrapS=W,e.wrapT=W,q.current=e.image.width/e.image.height,d.uTexture.value=e,f()});const t=y,T=new Float32Array(4*t*t);for(let e=0;e<t*t;e++)T[e*4]=Math.random()*255-125,T[e*4+1]=Math.random()*255-125;const v=new K(T,t,t,N,$);v.needsUpdate=!0,d.uDataTexture.value=v;const E=new k({side:Q,uniforms:d,vertexShader:te,fragmentShader:ne,transparent:!0}),L=new Z(1,1,t-1,t-1),h=new ee(L,E);C.current=h,p.add(h);const f=()=>{if(!r||!o||!i)return;const e=r.getBoundingClientRect(),s=e.width,u=e.height;if(s===0||u===0)return;const c=s/u;o.setSize(s,u),h&&h.scale.set(c,1,1);const n=1,m=n*c;i.left=-m/2,i.right=m/2,i.top=n/2,i.bottom=-n/2,i.updateProjectionMatrix(),d.resolution.value.set(s,u,1,1)};if(window.ResizeObserver){const e=new ResizeObserver(()=>{f()});e.observe(r),M.current=e}else window.addEventListener("resize",f);const a={x:0,y:0,prevX:0,prevY:0,vX:0,vY:0},F=e=>{const s=r.getBoundingClientRect(),u=(e.clientX-s.left)/s.width,c=1-(e.clientY-s.top)/s.height;a.vX=u-a.prevX,a.vY=c-a.prevY,Object.assign(a,{x:u,y:c,prevX:u,prevY:c})},P=()=>{v&&(v.needsUpdate=!0),Object.assign(a,{x:0,y:0,prevX:0,prevY:0,vX:0,vY:0})};r.addEventListener("mousemove",F),r.addEventListener("mouseleave",P),f();const S=()=>{if(R.current=requestAnimationFrame(S),!o||!p||!i)return;d.time.value+=.05;const e=v.image.data;for(let n=0;n<t*t;n++)e[n*4]*=g,e[n*4+1]*=g;const s=t*a.x,u=t*a.y,c=t*D;for(let n=0;n<t;n++)for(let m=0;m<t;m++){const j=Math.pow(s-n,2)+Math.pow(u-m,2);if(j<c*c){const O=4*(n+t*m),U=Math.min(c/Math.sqrt(j),10);e[O]+=w*100*a.vX*U,e[O+1]-=w*100*a.vY*U}}v.needsUpdate=!0,o.render(p,i)};return S(),()=>{R.current&&cancelAnimationFrame(R.current),M.current?M.current.disconnect():window.removeEventListener("resize",f),r.removeEventListener("mousemove",F),r.removeEventListener("mouseleave",P),o&&(o.dispose(),r.contains(o.domElement)&&r.removeChild(o.domElement)),L&&L.dispose(),E&&E.dispose(),v&&v.dispose(),d.uTexture.value&&d.uTexture.value.dispose(),z.current=null,X.current=null,Y.current=null,C.current=null}},[y,D,w,g,b]),B.jsx("div",{ref:x,className:`distortion-container ${G}`,style:{width:"100%",height:"100%",minWidth:"0",minHeight:"0"}})};export{ie as default};
