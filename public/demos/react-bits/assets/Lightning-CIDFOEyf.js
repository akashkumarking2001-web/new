import{r as h,j as I}from"./index-CKqfvLoB.js";const F=({hue:n=230,xOffset:c=0,speed:f=1,intensity:s=1,size:u=1})=>{const m=h.useRef(null);return h.useEffect(()=>{const o=m.current;if(!o)return;const i=()=>{o.width=o.clientWidth,o.height=o.clientHeight};i(),window.addEventListener("resize",i);const e=o.getContext("webgl");if(!e){console.error("WebGL not supported");return}const S=`
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `,x=`
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform float uHue;
      uniform float uXOffset;
      uniform float uSpeed;
      uniform float uIntensity;
      uniform float uSize;
      
      #define OCTAVE_COUNT 10

      vec3 hsv2rgb(vec3 c) {
          vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0,4.0,2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
          return c.z * mix(vec3(1.0), rgb, c.y);
      }

      float hash11(float p) {
          p = fract(p * .1031);
          p *= p + 33.33;
          p *= p + p;
          return fract(p);
      }

      float hash12(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * .1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
      }

      mat2 rotate2d(float theta) {
          float c = cos(theta);
          float s = sin(theta);
          return mat2(c, -s, s, c);
      }

      float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 fp = fract(p);
          float a = hash12(ip);
          float b = hash12(ip + vec2(1.0, 0.0));
          float c = hash12(ip + vec2(0.0, 1.0));
          float d = hash12(ip + vec2(1.0, 1.0));
          
          vec2 t = smoothstep(0.0, 1.0, fp);
          return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
      }

      float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          for (int i = 0; i < OCTAVE_COUNT; ++i) {
              value += amplitude * noise(p);
              p *= rotate2d(0.45);
              p *= 2.0;
              amplitude *= 0.5;
          }
          return value;
      }

      void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
          vec2 uv = fragCoord / iResolution.xy;
          uv = 2.0 * uv - 1.0;
          uv.x *= iResolution.x / iResolution.y;
          uv.x += uXOffset;
          
          uv += 2.0 * fbm(uv * uSize + 0.8 * iTime * uSpeed) - 1.0;
          
          float dist = abs(uv.x);
          vec3 baseColor = hsv2rgb(vec3(uHue / 360.0, 0.7, 0.8));
          vec3 col = baseColor * pow(mix(0.0, 0.07, hash11(iTime * uSpeed)) / dist, 1.0) * uIntensity;
          col = pow(col, vec3(1.0));
          fragColor = vec4(col, 1.0);
      }

      void main() {
          mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    `,l=(a,U)=>{const r=e.createShader(U);return r?(e.shaderSource(r,a),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.error("Shader compile error:",e.getShaderInfoLog(r)),e.deleteShader(r),null)):null},p=l(S,e.VERTEX_SHADER),v=l(x,e.FRAGMENT_SHADER);if(!p||!v)return;const t=e.createProgram();if(!t)return;if(e.attachShader(t,p),e.attachShader(t,v),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS)){console.error("Program linking error:",e.getProgramInfoLog(t));return}e.useProgram(t);const L=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),A=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,A),e.bufferData(e.ARRAY_BUFFER,L,e.STATIC_DRAW);const d=e.getAttribLocation(t,"aPosition");e.enableVertexAttribArray(d),e.vertexAttribPointer(d,2,e.FLOAT,!1,0,0);const b=e.getUniformLocation(t,"iResolution"),R=e.getUniformLocation(t,"iTime"),T=e.getUniformLocation(t,"uHue"),C=e.getUniformLocation(t,"uXOffset"),E=e.getUniformLocation(t,"uSpeed"),w=e.getUniformLocation(t,"uIntensity"),P=e.getUniformLocation(t,"uSize"),y=performance.now(),g=()=>{i(),e.viewport(0,0,o.width,o.height),e.uniform2f(b,o.width,o.height);const a=performance.now();e.uniform1f(R,(a-y)/1e3),e.uniform1f(T,n),e.uniform1f(C,c),e.uniform1f(E,f),e.uniform1f(w,s),e.uniform1f(P,u),e.drawArrays(e.TRIANGLES,0,6),requestAnimationFrame(g)};return requestAnimationFrame(g),()=>{window.removeEventListener("resize",i)}},[n,c,f,s,u]),I.jsx("canvas",{ref:m,className:"lightning-container"})};export{F as default};
