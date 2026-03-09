import{r as se,R as Te,a5 as Ue,P as qe,M as We,j as Ne}from"./index-CKqfvLoB.js";const Ge=({height:T=3.5,baseWidth:U=5.5,animationType:d="rotate",glow:q=1,offset:s={x:0,y:0},noise:W=.5,transparent:H=!0,scale:N=3.6,hueShift:Y=0,colorFrequency:j=1,hoverStrength:G=2,inertia:X=.05,bloom:V=1,suspendWhenOffscreen:P=!1,timeScale:Z=.5})=>{const D=se.useRef(null);return se.useEffect(()=>{const c=D.current;if(!c)return;const g=Math.max(.001,T),I=Math.max(.001,U)*.5,ie=Math.max(0,q),k=Math.max(0,W),ce=(s==null?void 0:s.x)??0,re=(s==null?void 0:s.y)??0,le=H?1.5:1,y=Math.max(.001,N),ue=Y||0,me=Math.max(0,j||1),fe=Math.max(0,V||1),ve=1,he=1,de=1,R=Math.max(0,Z||1),Q=Math.max(0,G||1),J=Math.max(0,Math.min(1,X||.12)),A=Math.min(2,window.devicePixelRatio||1),F=new Te({dpr:A,alpha:H,antialias:!1}),o=F.gl;o.disable(o.DEPTH_TEST),o.disable(o.CULL_FACE),o.disable(o.BLEND),Object.assign(o.canvas.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block"}),c.appendChild(o.canvas);const xe=`
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `,we=`
      precision highp float;

      uniform vec2  iResolution;
      uniform float iTime;

      uniform float uHeight;
      uniform float uBaseHalf;
      uniform mat3  uRot;
      uniform int   uUseBaseWobble;
      uniform float uGlow;
      uniform vec2  uOffsetPx;
      uniform float uNoise;
      uniform float uSaturation;
      uniform float uScale;
      uniform float uHueShift;
      uniform float uColorFreq;
      uniform float uBloom;
      uniform float uCenterShift;
      uniform float uInvBaseHalf;
      uniform float uInvHeight;
      uniform float uMinAxis;
      uniform float uPxScale;
      uniform float uTimeScale;

      vec4 tanh4(vec4 x){
        vec4 e2x = exp(2.0*x);
        return (e2x - 1.0) / (e2x + 1.0);
      }

      float rand(vec2 co){
        return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      float sdOctaAnisoInv(vec3 p){
        vec3 q = vec3(abs(p.x) * uInvBaseHalf, abs(p.y) * uInvHeight, abs(p.z) * uInvBaseHalf);
        float m = q.x + q.y + q.z - 1.0;
        return m * uMinAxis * 0.5773502691896258;
      }

      float sdPyramidUpInv(vec3 p){
        float oct = sdOctaAnisoInv(p);
        float halfSpace = -p.y;
        return max(oct, halfSpace);
      }

      mat3 hueRotation(float a){
        float c = cos(a), s = sin(a);
        mat3 W = mat3(
          0.299, 0.587, 0.114,
          0.299, 0.587, 0.114,
          0.299, 0.587, 0.114
        );
        mat3 U = mat3(
           0.701, -0.587, -0.114,
          -0.299,  0.413, -0.114,
          -0.300, -0.588,  0.886
        );
        mat3 V = mat3(
           0.168, -0.331,  0.500,
           0.328,  0.035, -0.500,
          -0.497,  0.296,  0.201
        );
        return W + U * c + V * s;
      }

      void main(){
        vec2 f = (gl_FragCoord.xy - 0.5 * iResolution.xy - uOffsetPx) * uPxScale;

        float z = 5.0;
        float d = 0.0;

        vec3 p;
        vec4 o = vec4(0.0);

        float centerShift = uCenterShift;
        float cf = uColorFreq;

        mat2 wob = mat2(1.0);
        if (uUseBaseWobble == 1) {
          float t = iTime * uTimeScale;
          float c0 = cos(t + 0.0);
          float c1 = cos(t + 33.0);
          float c2 = cos(t + 11.0);
          wob = mat2(c0, c1, c2, c0);
        }

        const int STEPS = 100;
        for (int i = 0; i < STEPS; i++) {
          p = vec3(f, z);
          p.xz = p.xz * wob;
          p = uRot * p;
          vec3 q = p;
          q.y += centerShift;
          d = 0.1 + 0.2 * abs(sdPyramidUpInv(q));
          z -= d;
          o += (sin((p.y + z) * cf + vec4(0.0, 1.0, 2.0, 3.0)) + 1.0) / d;
        }

        o = tanh4(o * o * (uGlow * uBloom) / 1e5);

        vec3 col = o.rgb;
        float n = rand(gl_FragCoord.xy + vec2(iTime));
        col += (n - 0.5) * uNoise;
        col = clamp(col, 0.0, 1.0);

        float L = dot(col, vec3(0.2126, 0.7152, 0.0722));
        col = clamp(mix(vec3(L), col, uSaturation), 0.0, 1.0);

        if(abs(uHueShift) > 0.0001){
          col = clamp(hueRotation(uHueShift) * col, 0.0, 1.0);
        }

        gl_FragColor = vec4(col, o.a);
      }
    `,pe=new Ue(o),L=new Float32Array(2),O=new Float32Array(2),r=new qe(o,{vertex:xe,fragment:we,uniforms:{iResolution:{value:L},iTime:{value:0},uHeight:{value:g},uBaseHalf:{value:I},uUseBaseWobble:{value:1},uRot:{value:new Float32Array([1,0,0,0,1,0,0,0,1])},uGlow:{value:ie},uOffsetPx:{value:O},uNoise:{value:k},uSaturation:{value:le},uScale:{value:y},uHueShift:{value:ue},uColorFreq:{value:me},uBloom:{value:fe},uCenterShift:{value:g*.25},uInvBaseHalf:{value:1/I},uInvHeight:{value:1/g},uMinAxis:{value:Math.min(I,g)},uPxScale:{value:1/((o.drawingBufferHeight||1)*.1*y)},uTimeScale:{value:R}}}),Me=new We(o,{geometry:pe,program:r}),K=()=>{const e=c.clientWidth||1,n=c.clientHeight||1;F.setSize(e,n),L[0]=o.drawingBufferWidth,L[1]=o.drawingBufferHeight,O[0]=ce*A,O[1]=re*A,r.uniforms.uPxScale.value=1/((o.drawingBufferHeight||1)*.1*y)},$=new ResizeObserver(K);$.observe(c),K();const i=new Float32Array(9),ee=(e,n,a,t)=>{const u=Math.cos(e),m=Math.sin(e),f=Math.cos(n),h=Math.sin(n),M=Math.cos(a),b=Math.sin(a),Ie=u*M+m*h*b,ye=-u*b+m*h*M,Ae=m*f,Fe=f*b,Le=f*M,Oe=-h,Ce=-m*M+u*h*b,_e=m*b+u*h*M,ze=u*f;return t[0]=Ie,t[1]=Fe,t[2]=Ce,t[3]=ye,t[4]=Le,t[5]=_e,t[6]=Ae,t[7]=Oe,t[8]=ze,t},Se=k<1e-6;let v=0;const be=performance.now(),B=()=>{v||(v=requestAnimationFrame(ae))},te=()=>{v&&(cancelAnimationFrame(v),v=0)},S=()=>Math.random(),ge=(.3+S()*.6)*ve,Re=(.2+S()*.7)*he,Be=(.1+S()*.5)*de,Ee=S()*Math.PI*2,He=S()*Math.PI*2;let x=0,w=0,p=0,C=0,_=0;const z=(e,n,a)=>e+(n-e)*a,l={x:0,y:0,inside:!0},Pe=e=>{const n=Math.max(1,window.innerWidth),a=Math.max(1,window.innerHeight),t=n*.5,u=a*.5,m=(e.clientX-t)/(n*.5),f=(e.clientY-u)/(a*.5);l.x=Math.max(-1,Math.min(1,m)),l.y=Math.max(-1,Math.min(1,f)),l.inside=!0},oe=()=>{l.inside=!1},ne=()=>{l.inside=!1};let E=null;d==="hover"?(E=e=>{Pe(e),B()},window.addEventListener("pointermove",E,{passive:!0}),window.addEventListener("mouseleave",oe),window.addEventListener("blur",ne),r.uniforms.uUseBaseWobble.value=0):d==="3drotate"?r.uniforms.uUseBaseWobble.value=0:r.uniforms.uUseBaseWobble.value=1;const ae=e=>{const n=(e-be)*.001;r.uniforms.iTime.value=n;let a=!0;if(d==="hover"){const t=.6*Q,u=.6*Q;C=(l.inside?-l.x:0)*u,_=(l.inside?l.y:0)*t;const m=x,f=w,h=p;x=z(m,C,J),w=z(f,_,J),p=z(h,0,.1),r.uniforms.uRot.value=ee(x,w,p,i),Se&&Math.abs(x-C)<1e-4&&Math.abs(w-_)<1e-4&&Math.abs(p)<1e-4&&(a=!1)}else if(d==="3drotate"){const t=n*R;x=t*Re,w=Math.sin(t*ge+Ee)*.6,p=Math.sin(t*Be+He)*.5,r.uniforms.uRot.value=ee(x,w,p,i),R<1e-6&&(a=!1)}else i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=1,i[5]=0,i[6]=0,i[7]=0,i[8]=1,r.uniforms.uRot.value=i,R<1e-6&&(a=!1);F.render({scene:Me}),a?v=requestAnimationFrame(ae):v=0};if(P){const e=new IntersectionObserver(n=>{n.some(t=>t.isIntersecting)?B():te()});e.observe(c),B(),c.__prismIO=e}else B();return()=>{if(te(),$.disconnect(),d==="hover"&&(E&&window.removeEventListener("pointermove",E),window.removeEventListener("mouseleave",oe),window.removeEventListener("blur",ne)),P){const e=c.__prismIO;e&&e.disconnect(),delete c.__prismIO}o.canvas.parentElement===c&&c.removeChild(o.canvas)}},[T,U,d,q,W,s==null?void 0:s.x,s==null?void 0:s.y,N,H,Y,j,Z,G,X,V,P]),Ne.jsx("div",{className:"prism-container",ref:D})};export{Ge as default};
