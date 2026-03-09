import{r as h,R as U,a5 as B,P as E,M as I,j as Q}from"./index-CKqfvLoB.js";const j=r=>{const o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return o?[parseInt(o[1],16)/255,parseInt(o[2],16)/255,parseInt(o[3],16)/255]:[1,.5,.2]},q=`#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,L=`#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;
  
  vec2 mouseOffset = (uMouse - center) * 0.0002;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);
  
  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;

  for (vec2 r = iResolution.xy, Q; ++i < 60.; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y)); 
    p.z -= 4.; 
    S = p;
    d = p.y-T;
    
    p.x += .4*(1.+p.y)*sin(d + p.x*0.1)*cos(.34*d + p.x*0.05); 
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T)); 
    z+= d = abs(sqrt(length(Q*Q)) - .25*(5.+S.y))/3.+8e-4; 
    o = 1.+sin(S.y+p.z*.5+S.z-length(S-p)+vec4(2,1,0,8));
  }
  
  o.xyz = tanh(O/1e4);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){
  return vec3(
    finite1(c.r) ? c.r : 0.0,
    finite1(c.g) ? c.g : 0.0,
    finite1(c.b) ? c.b : 0.0
  );
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = sanitize(o.rgb);
  
  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  vec3 customColor = intensity * uCustomColor;
  vec3 finalColor = mix(rgb, customColor, step(0.5, uUseCustomColor));
  
  float alpha = length(rgb) * uOpacity;
  fragColor = vec4(finalColor, alpha);
}`,k=({color:r="#ffffff",speed:o=1,direction:v="forward",scale:C=1,opacity:y=1,mouseInteractive:u=!0})=>{const i=h.useRef(null),f=h.useRef({x:0,y:0});return h.useEffect(()=>{if(!i.current)return;const n=i.current,z=r?1:0,S=r?j(r):[1,1,1],T=v==="reverse"?-1:1,p=new U({webgl:2,alpha:!0,antialias:!1,dpr:Math.min(window.devicePixelRatio||1,2)}),s=p.gl,c=s.canvas;c.style.display="block",c.style.width="100%",c.style.height="100%",i.current.appendChild(c);const D=new B(s),a=new E(s,{vertex:q,fragment:L,uniforms:{iTime:{value:0},iResolution:{value:new Float32Array([1,1])},uCustomColor:{value:new Float32Array(S)},uUseCustomColor:{value:z},uSpeed:{value:o*.4},uDirection:{value:T},uScale:{value:C},uOpacity:{value:y},uMouse:{value:new Float32Array([0,0])},uMouseInteractive:{value:u?1:0}}}),O=new I(s,{geometry:D,program:a}),x=t=>{if(!u)return;const e=i.current.getBoundingClientRect();f.current.x=t.clientX-e.left,f.current.y=t.clientY-e.top;const l=a.uniforms.uMouse.value;l[0]=f.current.x,l[1]=f.current.y};u&&n.addEventListener("mousemove",x);const w=()=>{const t=i.current.getBoundingClientRect(),e=Math.max(1,Math.floor(t.width)),l=Math.max(1,Math.floor(t.height));p.setSize(e,l);const m=a.uniforms.iResolution.value;m[0]=s.drawingBufferWidth,m[1]=s.drawingBufferHeight},b=new ResizeObserver(w);b.observe(n),w();let g=0;const F=performance.now(),M=t=>{let e=(t-F)*.001;if(v==="pingpong"){const m=e%10,A=Math.floor(e/10)%2===0,d=m/10,R=d*d*(3-2*d),P=A?R*10:(1-R)*10;a.uniforms.uDirection.value=1,a.uniforms.iTime.value=P}else a.uniforms.iTime.value=e;p.render({scene:O}),g=requestAnimationFrame(M)};return g=requestAnimationFrame(M),()=>{cancelAnimationFrame(g),b.disconnect(),u&&n&&n.removeEventListener("mousemove",x);try{n==null||n.removeChild(c)}catch{console.warn("Canvas already removed from container")}}},[r,o,v,C,y,u]),Q.jsx("div",{ref:i,className:"plasma-container"})};export{k as Plasma,k as default};
