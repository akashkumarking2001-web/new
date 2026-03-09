import{r as n,W as k,j as d}from"./index-CKqfvLoB.js";import{C as A,aE as B,bu as L,q as H,a as T,r as U,s as P}from"./three.module-DbwSNGae.js";import{a as b,u as N,C as X}from"./react-three-fiber.esm-DFK4OWio.js";import{u as q}from"./Fbo-CsDeL44I.js";const D=e=>typeof e=="function",G=n.forwardRef(({envMap:e,resolution:t=256,frames:o=1/0,makeDefault:r,children:s,...i},m)=>{const f=b(({set:c})=>c),a=b(({camera:c})=>c),g=b(({size:c})=>c),u=n.useRef(null);n.useImperativeHandle(m,()=>u.current,[]);const x=n.useRef(null),y=q(t);n.useLayoutEffect(()=>{i.manual||(u.current.aspect=g.width/g.height)},[g,i]),n.useLayoutEffect(()=>{u.current.updateProjectionMatrix()});let v=0,l=null;const p=D(s);return N(c=>{p&&(o===1/0||v<o)&&(x.current.visible=!1,c.gl.setRenderTarget(y),l=c.scene.background,e&&(c.scene.background=e),c.gl.render(c.scene,u.current),c.scene.background=l,c.gl.setRenderTarget(null),x.current.visible=!0,v++)}),n.useLayoutEffect(()=>{if(r){const c=a;return f(()=>({camera:u.current})),()=>f(()=>({camera:c}))}},[u,r,f]),n.createElement(n.Fragment,null,n.createElement("perspectiveCamera",k({ref:u},i),!p&&s),n.createElement("group",{ref:x},p&&s(y.texture)))}),W=Math.PI/180;function Z(e){return e*W}function V(e,t){var y;const o=L.physical,{vertexShader:r,fragmentShader:s,uniforms:i}=o,m=o.defines??{},f=H.clone(i),a=new e(t.material||{});a.color&&(f.diffuse.value=a.color),"roughness"in a&&(f.roughness.value=a.roughness),"metalness"in a&&(f.metalness.value=a.metalness),"envMap"in a&&(f.envMap.value=a.envMap),"envMapIntensity"in a&&(f.envMapIntensity.value=a.envMapIntensity),Object.entries(t.uniforms??{}).forEach(([v,l])=>{f[v]=l!==null&&typeof l=="object"&&"value"in l?l:{value:l}});let g=`${t.header}
${t.vertexHeader??""}
${r}`,u=`${t.header}
${t.fragmentHeader??""}
${s}`;for(const[v,l]of Object.entries(t.vertex??{}))g=g.replace(v,`${v}
${l}`);for(const[v,l]of Object.entries(t.fragment??{}))u=u.replace(v,`${v}
${l}`);return new T({defines:{...m},uniforms:f,vertexShader:g,fragmentShader:u,lights:!0,fog:!!((y=t.material)!=null&&y.fog)})}const Y=({children:e})=>d.jsx(X,{dpr:[1,2],frameloop:"always",className:"beams-container",children:e}),J=e=>{const t=e.replace("#",""),o=parseInt(t.substring(0,2),16),r=parseInt(t.substring(2,4),16),s=parseInt(t.substring(4,6),16);return[o/255,r/255,s/255]},K=`
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}
float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) +
           (c - a)* u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
}
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}
float cnoise(vec3 P){
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;
  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);
  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);
  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);
  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
  vec4 norm0 = taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));
  g000 *= norm0.x; g010 *= norm0.y; g100 *= norm0.z; g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));
  g001 *= norm1.x; g011 *= norm1.y; g101 *= norm1.z; g111 *= norm1.w;
  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x,Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x,Pf1.y,Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy,Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy,Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x,Pf0.y,Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x,Pf1.yz));
  float n111 = dot(g111, Pf1);
  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);
  vec2 n_yz = mix(n_z.xy,n_z.zw,fade_xyz.y);
  float n_xyz = mix(n_yz.x,n_yz.y,fade_xyz.x);
  return 2.2 * n_xyz;
}
`,se=({beamWidth:e=2,beamHeight:t=15,beamNumber:o=12,lightColor:r="#ffffff",speed:s=2,noiseIntensity:i=1.75,scale:m=.2,rotation:f=0})=>{const a=n.useRef(null),g=n.useMemo(()=>V(B,{header:`
  varying vec3 vEye;
  varying float vNoise;
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform float time;
  uniform float uSpeed;
  uniform float uNoiseIntensity;
  uniform float uScale;
  ${K}`,vertexHeader:`
  float getPos(vec3 pos) {
    vec3 noisePos =
      vec3(pos.x * 0., pos.y - uv.y, pos.z + time * uSpeed * 3.) * uScale;
    return cnoise(noisePos);
  }
  vec3 getCurrentPos(vec3 pos) {
    vec3 newpos = pos;
    newpos.z += getPos(pos);
    return newpos;
  }
  vec3 getNormal(vec3 pos) {
    vec3 curpos = getCurrentPos(pos);
    vec3 nextposX = getCurrentPos(pos + vec3(0.01, 0.0, 0.0));
    vec3 nextposZ = getCurrentPos(pos + vec3(0.0, -0.01, 0.0));
    vec3 tangentX = normalize(nextposX - curpos);
    vec3 tangentZ = normalize(nextposZ - curpos);
    return normalize(cross(tangentZ, tangentX));
  }`,fragmentHeader:"",vertex:{"#include <begin_vertex>":"transformed.z += getPos(transformed.xyz);","#include <beginnormal_vertex>":"objectNormal = getNormal(position.xyz);"},fragment:{"#include <dithering_fragment>":`
    float randomNoise = noise(gl_FragCoord.xy);
    gl_FragColor.rgb -= randomNoise / 15. * uNoiseIntensity;`},material:{fog:!0},uniforms:{diffuse:new A(...J("#000000")),time:{shared:!0,mixed:!0,linked:!0,value:0},roughness:.3,metalness:.3,uSpeed:{shared:!0,mixed:!0,linked:!0,value:s},envMapIntensity:10,uNoiseIntensity:i,uScale:m}}),[s,i,m]);return d.jsxs(Y,{children:[d.jsxs("group",{rotation:[0,0,Z(f)],children:[d.jsx(E,{ref:a,material:g,count:o,width:e,height:t}),d.jsx(ee,{color:r,position:[0,3,10]})]}),d.jsx("ambientLight",{intensity:1}),d.jsx("color",{attach:"background",args:["#000000"]}),d.jsx(G,{makeDefault:!0,position:[0,0,20],fov:30})]})};function Q(e,t,o,r,s){const i=new U,m=e*(s+1)*2,f=e*s*2,a=new Float32Array(m*3),g=new Uint32Array(f*3),u=new Float32Array(m*2);let x=0,y=0,v=0;const p=-(e*t+(e-1)*r)/2;for(let c=0;c<e;c++){const h=p+c*(t+r),w=Math.random()*300,j=Math.random()*300;for(let z=0;z<=s;z++){const M=o*(z/s-.5),S=[h,M,0],O=[h+t,M,0];a.set([...S,...O],x*3);const _=z/s;if(u.set([w,_+j,w+1,_+j],v),z<s){const $=x,I=x+1,R=x+2,F=x+3;g.set([$,I,R,R,I,F],y),y+=6}x+=2,v+=4}}return i.setAttribute("position",new P(a,3)),i.setAttribute("uv",new P(u,2)),i.setIndex(new P(g,1)),i.computeVertexNormals(),i}const C=n.forwardRef(({material:e,width:t,count:o,height:r},s)=>{const i=n.useRef(null);n.useImperativeHandle(s,()=>i.current);const m=n.useMemo(()=>Q(o,t,r,0,100),[o,t,r]);return N((f,a)=>{i.current.material.uniforms.time.value+=.1*a}),d.jsx("mesh",{ref:i,geometry:m,material:e})});C.displayName="MergedPlanes";const E=n.forwardRef((e,t)=>d.jsx(C,{ref:t,material:e.material,width:e.width,count:e.count,height:e.height}));E.displayName="PlaneNoise";const ee=({position:e,color:t})=>{const o=n.useRef(null);return n.useEffect(()=>{if(!o.current)return;const r=o.current.shadow.camera;r&&(r.top=24,r.bottom=-24,r.left=-24,r.right=24,r.far=64,o.current.shadow.bias=-.004)},[]),d.jsx("directionalLight",{ref:o,color:t,intensity:1,position:e})};export{se as default};
