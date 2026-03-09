import{r as t,j as D}from"./index-CKqfvLoB.js";import{V as Q,S as ne,O as ie,W as ue,a as ae,P as le,M as se,C as ce,m as fe}from"./three.module-DbwSNGae.js";const pe=({topColor:C="#5227FF",bottomColor:S="#FF9FFC",intensity:P=1,rotationSpeed:M=.3,interactive:l=!1,className:y="",glowAmount:T=.005,pillarWidth:E=3,pillarHeight:W=.4,noiseIntensity:I=.5,mixBlendMode:b="screen",pillarRotation:z=0,quality:v="high"})=>{const u=t.useRef(null),s=t.useRef(null),r=t.useRef(null),i=t.useRef(null),d=t.useRef(null),p=t.useRef(null),h=t.useRef(null),F=t.useRef(new Q(0,0)),q=t.useRef(0),[R,L]=t.useState(!0);return t.useEffect(()=>{const o=document.createElement("canvas");o.getContext("webgl")||o.getContext("experimental-webgl")||L(!1)},[]),t.useEffect(()=>{if(!u.current||!R)return;const o=u.current,w=o.clientWidth,A=o.clientHeight,_=new ne;d.current=_;const Y=new ie(-1,1,1,-1,0,1);p.current=Y;const j=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),J=j||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4;let c=v;J&&v==="high"&&(c="medium"),j&&v!=="low"&&(c="low");const G={low:{iterations:24,waveIterations:1,pixelRatio:.5,precision:"mediump",stepMultiplier:1.5},medium:{iterations:40,waveIterations:2,pixelRatio:.65,precision:"mediump",stepMultiplier:1.2},high:{iterations:80,waveIterations:4,pixelRatio:Math.min(window.devicePixelRatio,2),precision:"highp",stepMultiplier:1}},a=G[c]||G.medium;let f;try{f=new ue({antialias:!1,alpha:!0,powerPreference:c==="high"?"high-performance":"low-power",precision:a.precision,stencil:!1,depth:!1})}catch{L(!1);return}f.setSize(w,A),f.setPixelRatio(a.pixelRatio),o.appendChild(f.domElement),r.current=f;const k=n=>{const e=new ce(n);return new fe(e.r,e.g,e.b)},K=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,Z=`
      precision ${a.precision} float;

      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform vec3 uTopColor;
      uniform vec3 uBottomColor;
      uniform float uIntensity;
      uniform bool uInteractive;
      uniform float uGlowAmount;
      uniform float uPillarWidth;
      uniform float uPillarHeight;
      uniform float uNoiseIntensity;
      uniform float uRotCos;
      uniform float uRotSin;
      uniform float uPillarRotCos;
      uniform float uPillarRotSin;
      uniform float uWaveSin;
      uniform float uWaveCos;
      varying vec2 vUv;

      const float STEP_MULT = ${a.stepMultiplier.toFixed(1)};
      const int MAX_ITER = ${a.iterations};
      const int WAVE_ITER = ${a.waveIterations};

      void main() {
        vec2 uv = (vUv * 2.0 - 1.0) * vec2(uResolution.x / uResolution.y, 1.0);
        uv = vec2(uPillarRotCos * uv.x - uPillarRotSin * uv.y, uPillarRotSin * uv.x + uPillarRotCos * uv.y);

        vec3 ro = vec3(0.0, 0.0, -10.0);
        vec3 rd = normalize(vec3(uv, 1.0));

        float rotC = uRotCos;
        float rotS = uRotSin;
        if(uInteractive && (uMouse.x != 0.0 || uMouse.y != 0.0)) {
          float a = uMouse.x * 6.283185;
          rotC = cos(a);
          rotS = sin(a);
        }

        vec3 col = vec3(0.0);
        float t = 0.1;
        
        for(int i = 0; i < MAX_ITER; i++) {
          vec3 p = ro + rd * t;
          p.xz = vec2(rotC * p.x - rotS * p.z, rotS * p.x + rotC * p.z);

          vec3 q = p;
          q.y = p.y * uPillarHeight + uTime;
          
          float freq = 1.0;
          float amp = 1.0;
          for(int j = 0; j < WAVE_ITER; j++) {
            q.xz = vec2(uWaveCos * q.x - uWaveSin * q.z, uWaveSin * q.x + uWaveCos * q.z);
            q += cos(q.zxy * freq - uTime * float(j) * 2.0) * amp;
            freq *= 2.0;
            amp *= 0.5;
          }
          
          float d = length(cos(q.xz)) - 0.2;
          float bound = length(p.xz) - uPillarWidth;
          float k = 4.0;
          float h = max(k - abs(d - bound), 0.0);
          d = max(d, bound) + h * h * 0.0625 / k;
          d = abs(d) * 0.15 + 0.01;

          float grad = clamp((15.0 - p.y) / 30.0, 0.0, 1.0);
          col += mix(uBottomColor, uTopColor, grad) / d;

          t += d * STEP_MULT;
          if(t > 50.0) break;
        }

        float widthNorm = uPillarWidth / 3.0;
        col = tanh(col * uGlowAmount / widthNorm);
        
        col -= fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) / 15.0 * uNoiseIntensity;
        
        gl_FragColor = vec4(col * uIntensity, 1.0);
      }
    `,N=z*Math.PI/180,ee=Math.sin(.4),te=Math.cos(.4),U=new ae({vertexShader:K,fragmentShader:Z,uniforms:{uTime:{value:0},uResolution:{value:new Q(w,A)},uMouse:{value:F.current},uTopColor:{value:k(C)},uBottomColor:{value:k(S)},uIntensity:{value:P},uInteractive:{value:l},uGlowAmount:{value:T},uPillarWidth:{value:E},uPillarHeight:{value:W},uNoiseIntensity:{value:I},uRotCos:{value:1},uRotSin:{value:0},uPillarRotCos:{value:Math.cos(N)},uPillarRotSin:{value:Math.sin(N)},uWaveSin:{value:ee},uWaveCos:{value:te}},transparent:!0,depthWrite:!1,depthTest:!1});i.current=U;const $=new le(2,2);h.current=$;const re=new se($,U);_.add(re);let g=null;const B=n=>{if(!l||g)return;g=window.setTimeout(()=>{g=null},16);const e=o.getBoundingClientRect(),m=(n.clientX-e.left)/e.width*2-1,oe=-((n.clientY-e.top)/e.height)*2+1;F.current.set(m,oe)};l&&o.addEventListener("mousemove",B,{passive:!0});let H=performance.now();const V=1e3/(c==="low"?30:60),O=n=>{if(!i.current||!r.current||!d.current||!p.current)return;const e=n-H;if(e>=V){q.current+=.016*M;const m=q.current;i.current.uniforms.uTime.value=m,i.current.uniforms.uRotCos.value=Math.cos(m*.3),i.current.uniforms.uRotSin.value=Math.sin(m*.3),r.current.render(d.current,p.current),H=n-e%V}s.current=requestAnimationFrame(O)};s.current=requestAnimationFrame(O);let x=null;const X=()=>{x&&clearTimeout(x),x=window.setTimeout(()=>{if(!r.current||!i.current||!u.current)return;const n=u.current.clientWidth,e=u.current.clientHeight;r.current.setSize(n,e),i.current.uniforms.uResolution.value.set(n,e)},150)};return window.addEventListener("resize",X,{passive:!0}),()=>{window.removeEventListener("resize",X),l&&o.removeEventListener("mousemove",B),s.current&&cancelAnimationFrame(s.current),r.current&&(r.current.dispose(),r.current.forceContextLoss(),o.contains(r.current.domElement)&&o.removeChild(r.current.domElement)),i.current&&i.current.dispose(),h.current&&h.current.dispose(),r.current=null,i.current=null,d.current=null,p.current=null,h.current=null,s.current=null}},[C,S,P,M,l,T,E,W,I,z,R,v]),R?D.jsx("div",{ref:u,className:`light-pillar-container ${y}`,style:{mixBlendMode:b}}):D.jsx("div",{className:`light-pillar-fallback ${y}`,style:{mixBlendMode:b},children:"WebGL not supported"})};export{pe as default};
