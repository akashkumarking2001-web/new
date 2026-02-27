import{G as H,bI as j,P as I,M as N,a6 as d,r as D,R as X,T as Y,j as q}from"./index-CKqfvLoB.js";import{V as B}from"./Vec2-Cf1C3GIc.js";const m=new d;class J{constructor(n,{points:t,vertex:R=K,fragment:E=Q,uniforms:i={},attributes:P={}}){this.gl=n,this.points=t,this.count=t.length,this.position=new Float32Array(this.count*3*2),this.prev=new Float32Array(this.count*3*2),this.next=new Float32Array(this.count*3*2);const f=new Float32Array(this.count*1*2),y=new Float32Array(this.count*2*2),h=new Uint16Array((this.count-1)*3*2);for(let u=0;u<this.count;u++){f.set([-1,1],u*2);const o=u/(this.count-1);if(y.set([0,o,1,o],u*4),u===this.count-1)continue;const a=u*2;h.set([a+0,a+1,a+2],(a+0)*3),h.set([a+2,a+1,a+3],(a+1)*3)}const b=this.geometry=new H(n,Object.assign(P,{position:{size:3,data:this.position},prev:{size:3,data:this.prev},next:{size:3,data:this.next},side:{size:1,data:f},uv:{size:2,data:y},index:{size:1,data:h}}));this.updateGeometry(),i.uResolution||(this.resolution=i.uResolution={value:new B}),i.uDPR||(this.dpr=i.uDPR={value:1}),i.uThickness||(this.thickness=i.uThickness={value:1}),i.uColor||(this.color=i.uColor={value:new j("#000")}),i.uMiter||(this.miter=i.uMiter={value:1}),this.resize();const l=this.program=new I(n,{vertex:R,fragment:E,uniforms:i});this.mesh=new N(n,{geometry:b,program:l})}updateGeometry(){this.points.forEach((n,t)=>{n.toArray(this.position,t*3*2),n.toArray(this.position,t*3*2+3),t?(n.toArray(this.next,(t-1)*3*2),n.toArray(this.next,(t-1)*3*2+3)):(m.copy(n).sub(this.points[t+1]).add(n),m.toArray(this.prev,t*3*2),m.toArray(this.prev,t*3*2+3)),t===this.points.length-1?(m.copy(n).sub(this.points[t-1]).add(n),m.toArray(this.next,t*3*2),m.toArray(this.next,t*3*2+3)):(n.toArray(this.prev,(t+1)*3*2),n.toArray(this.prev,(t+1)*3*2+3))}),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.prev.needsUpdate=!0,this.geometry.attributes.next.needsUpdate=!0}resize(){this.resolution&&this.resolution.value.set(this.gl.canvas.width,this.gl.canvas.height),this.dpr&&(this.dpr.value=this.gl.renderer.dpr)}}const K=`
    precision highp float;

    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;
    uniform float uMiter;

    varying vec2 vUv;

    vec4 getPosition() {
        mat4 mvp = projectionMatrix * modelViewMatrix;
        vec4 current = mvp * vec4(position, 1);
        vec4 nextPos = mvp * vec4(next, 1);
        vec4 prevPos = mvp * vec4(prev, 1);

        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    
        vec2 currentScreen = current.xy / current.w * aspect;
        vec2 nextScreen = nextPos.xy / nextPos.w * aspect;
        vec2 prevScreen = prevPos.xy / prevPos.w * aspect;
    
        vec2 dir1 = normalize(currentScreen - prevScreen);
        vec2 dir2 = normalize(nextScreen - currentScreen);
        vec2 dir = normalize(dir1 + dir2);
    
        vec2 normal = vec2(-dir.y, dir.x);
        normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);
        normal /= aspect;

        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;
    
        return current;
    }

    void main() {
        vUv = uv;
        gl_Position = getPosition();
    }
`,Q=`
    precision highp float;

    uniform vec3 uColor;
    
    varying vec2 vUv;

    void main() {
        gl_FragColor.rgb = uColor;
        gl_FragColor.a = 1.0;
    }
`,ee=({colors:w=["#FC8EAC"],baseSpring:n=.03,baseFriction:t=.9,baseThickness:R=30,offsetFactor:E=.05,maxAge:i=500,pointCount:P=50,speedMultiplier:f=.6,enableFade:y=!1,enableShaderEffect:h=!1,effectAmplitude:b=2,backgroundColor:l=[0,0,0,0]})=>{const u=D.useRef(null);return D.useEffect(()=>{const o=u.current;if(!o)return;const a=new X({dpr:window.devicePixelRatio||2,alpha:!0}),c=a.gl;Array.isArray(l)&&l.length===4?c.clearColor(l[0],l[1],l[2],l[3]):c.clearColor(0,0,0,0),c.canvas.style.position="absolute",c.canvas.style.top="0",c.canvas.style.left="0",c.canvas.style.width="100%",c.canvas.style.height="100%",o.appendChild(c.canvas);const M=new Y,T=[],O=`
      precision highp float;
      
      attribute vec3 position;
      attribute vec3 next;
      attribute vec3 prev;
      attribute vec2 uv;
      attribute float side;
      
      uniform vec2 uResolution;
      uniform float uDPR;
      uniform float uThickness;
      uniform float uTime;
      uniform float uEnableShaderEffect;
      uniform float uEffectAmplitude;
      
      varying vec2 vUV;
      
      vec4 getPosition() {
          vec4 current = vec4(position, 1.0);
          vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
          vec2 nextScreen = next.xy * aspect;
          vec2 prevScreen = prev.xy * aspect;
          vec2 tangent = normalize(nextScreen - prevScreen);
          vec2 normal = vec2(-tangent.y, tangent.x);
          normal /= aspect;
          normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
          float dist = length(nextScreen - prevScreen);
          normal *= smoothstep(0.0, 0.02, dist);
          float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
          float pixelWidth = current.w * pixelWidthRatio;
          normal *= pixelWidth * uThickness;
          current.xy -= normal * side;
          if(uEnableShaderEffect > 0.5) {
            current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;
          }
          return current;
      }
      
      void main() {
          vUV = uv;
          gl_Position = getPosition();
      }
    `,G=`
      precision highp float;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uEnableFade;
      varying vec2 vUV;
      void main() {
          float fadeFactor = 1.0;
          if(uEnableFade > 0.5) {
              fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);
          }
          gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
      }
    `;function z(){const r=o.clientWidth,v=o.clientHeight;a.setSize(r,v),T.forEach(e=>e.polyline.resize())}window.addEventListener("resize",z);const _=(w.length-1)/2;w.forEach((r,v)=>{const e=n+(Math.random()-.5)*.05,s=t+(Math.random()-.5)*.05,x=R+(Math.random()-.5)*3,g=new d((v-_)*E+(Math.random()-.5)*.01,(Math.random()-.5)*.1,0),A={spring:e,friction:s,mouseVelocity:new d,mouseOffset:g},k=P,F=[];for(let L=0;L<k;L++)F.push(new d);A.points=F,A.polyline=new J(c,{points:F,vertex:O,fragment:G,uniforms:{uColor:{value:new j(r)},uThickness:{value:x},uOpacity:{value:1},uTime:{value:0},uEnableShaderEffect:{value:h?1:0},uEffectAmplitude:{value:b},uEnableFade:{value:y?1:0}}}),A.polyline.mesh.setParent(M),T.push(A)}),z();const S=new d;function p(r){let v,e;const s=o.getBoundingClientRect();r.changedTouches&&r.changedTouches.length?(v=r.changedTouches[0].clientX-s.left,e=r.changedTouches[0].clientY-s.top):(v=r.clientX-s.left,e=r.clientY-s.top);const x=o.clientWidth,g=o.clientHeight;S.set(v/x*2-1,e/g*-2+1,0)}o.addEventListener("mousemove",p),o.addEventListener("touchstart",p),o.addEventListener("touchmove",p);const V=new d;let C,U=performance.now();function W(){C=requestAnimationFrame(W);const r=performance.now(),v=r-U;U=r,T.forEach(e=>{V.copy(S).add(e.mouseOffset).sub(e.points[0]).multiply(e.spring),e.mouseVelocity.add(V).multiply(e.friction),e.points[0].add(e.mouseVelocity);for(let s=1;s<e.points.length;s++)if(isFinite(i)&&i>0){const x=i/(e.points.length-1),g=Math.min(1,v*f/x);e.points[s].lerp(e.points[s-1],g)}else e.points[s].lerp(e.points[s-1],.9);e.polyline.mesh.program.uniforms.uTime&&(e.polyline.mesh.program.uniforms.uTime.value=r*.001),e.polyline.updateGeometry()}),a.render({scene:M})}return W(),()=>{window.removeEventListener("resize",z),o.removeEventListener("mousemove",p),o.removeEventListener("touchstart",p),o.removeEventListener("touchmove",p),cancelAnimationFrame(C),c.canvas&&c.canvas.parentNode===o&&o.removeChild(c.canvas)}},[w,n,t,R,E,i,P,f,y,h,b,l]),q.jsx("div",{ref:u,className:"ribbons-container"})};export{ee as default};
