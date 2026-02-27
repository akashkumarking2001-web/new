import{r as m,j as oe}from"./index-CKqfvLoB.js";import{V as h,S as re,O as ie,W as le,m as x,a as ce,P as ae,M as ue,n as fe}from"./three.module-DbwSNGae.js";const se=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,me=`
precision highp float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const vec3 BLACK = vec3(0.0);
const vec3 PINK  = vec3(233.0, 71.0, 245.0) / 255.0;
const vec3 BLUE  = vec3(47.0,  75.0, 162.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  vec3 col = vec3(0.0);

  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;

  col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) {
    return baseColor;
  }

  vec3 gradientColor;
  
  if (lineGradientCount == 1) {
    gradientColor = lineGradient[0];
  } else {
    float clampedT = clamp(t, 0.0, 0.9999);
    float scaled = clampedT * float(lineGradientCount - 1);
    int idx = int(floor(scaled));
    float f = fract(scaled);
    int idx2 = min(idx + 1, lineGradientCount - 1);

    vec3 c1 = lineGradient[idx];
    vec3 c2 = lineGradient[idx2];
    
    gradientColor = mix(c1, c2, f);
  }
  
  return gradientColor * 0.5;
}

  float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float time = iTime * animationSpeed;

  float x_offset   = offset;
  float x_movement = time * 0.1;
  float amp        = sin(offset + time * 0.2) * 0.3;
  float y          = sin(uv.x + x_offset + x_movement) * amp;

  if (shouldBend) {
    vec2 d = screenUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius); // radial falloff around cursor
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }

  float m = uv.y - y;
  return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;
  
  if (parallax) {
    baseUv += parallaxOffset;
  }

  vec3 col = vec3(0.0);

  vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);

  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }
  
  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.2;
    }
  }

  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi,
        baseUv,
        mouseUv,
        interactive
      );
    }
  }

  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);
      
      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      col += lineCol * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.1;
    }
  }

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`,N=8;function de(v){let e=v.trim();e.startsWith("#")&&(e=e.slice(1));let l=255,c=255,n=255;return e.length===3?(l=parseInt(e[0]+e[0],16),c=parseInt(e[1]+e[1],16),n=parseInt(e[2]+e[2],16)):e.length===6&&(l=parseInt(e.slice(0,2),16),c=parseInt(e.slice(2,4),16),n=parseInt(e.slice(4,6),16)),new x(l/255,c/255,n/255)}function pe({linesGradient:v,enabledWaves:e=["top","middle","bottom"],lineCount:l=[6],lineDistance:c=[5],topWavePosition:n,middleWavePosition:r,bottomWavePosition:i={x:2,y:-.7,rotate:-1},animationSpeed:G=1,interactive:C=!0,bendRadius:O=5,bendStrength:S=-.5,mouseDamping:b=.05,parallax:L=!0,parallaxStrength:y=.2,mixBlendMode:X="screen"}){const d=m.useRef(null),B=m.useRef(new h(-1e3,-1e3)),T=m.useRef(new h(-1e3,-1e3)),E=m.useRef(0),U=m.useRef(0),_=m.useRef(new h(0,0)),z=m.useRef(new h(0,0)),I=a=>{if(typeof l=="number")return l;if(!e.includes(a))return 0;const g=e.indexOf(a);return l[g]??6},M=a=>{if(typeof c=="number")return c;if(!e.includes(a))return .1;const g=e.indexOf(a);return c[g]??.1},Y=e.includes("top")?I("top"):0,H=e.includes("middle")?I("middle"):0,q=e.includes("bottom")?I("bottom"):0,J=e.includes("top")?M("top")*.01:.01,Q=e.includes("middle")?M("middle")*.01:.01,Z=e.includes("bottom")?M("bottom")*.01:.01;return m.useEffect(()=>{if(!d.current)return;const a=new re,g=new ie(-1,1,1,-1,0,1);g.position.z=1;const t=new le({antialias:!0,alpha:!1});t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.domElement.style.width="100%",t.domElement.style.height="100%",d.current.appendChild(t.domElement);const u={iTime:{value:0},iResolution:{value:new x(1,1,1)},animationSpeed:{value:G},enableTop:{value:e.includes("top")},enableMiddle:{value:e.includes("middle")},enableBottom:{value:e.includes("bottom")},topLineCount:{value:Y},middleLineCount:{value:H},bottomLineCount:{value:q},topLineDistance:{value:J},middleLineDistance:{value:Q},bottomLineDistance:{value:Z},topWavePosition:{value:new x((n==null?void 0:n.x)??10,(n==null?void 0:n.y)??.5,(n==null?void 0:n.rotate)??-.4)},middleWavePosition:{value:new x((r==null?void 0:r.x)??5,(r==null?void 0:r.y)??0,(r==null?void 0:r.rotate)??.2)},bottomWavePosition:{value:new x((i==null?void 0:i.x)??2,(i==null?void 0:i.y)??-.7,(i==null?void 0:i.rotate)??.4)},iMouse:{value:new h(-1e3,-1e3)},interactive:{value:C},bendRadius:{value:O},bendStrength:{value:S},bendInfluence:{value:0},parallax:{value:L},parallaxStrength:{value:y},parallaxOffset:{value:new h(0,0)},lineGradient:{value:Array.from({length:N},()=>new x(1,1,1))},lineGradientCount:{value:0}};if(v&&v.length>0){const f=v.slice(0,N);u.lineGradientCount.value=f.length,f.forEach((o,p)=>{const s=de(o);u.lineGradient.value[p].set(s.x,s.y,s.z)})}const A=new ce({uniforms:u,vertexShader:se,fragmentShader:me}),D=new ae(2,2),$=new ue(D,A);a.add($);const P=new fe,F=()=>{const f=d.current,o=f.clientWidth||1,p=f.clientHeight||1;t.setSize(o,p,!1);const s=t.domElement.width,w=t.domElement.height;u.iResolution.value.set(s,w,1)};F();const R=typeof ResizeObserver<"u"?new ResizeObserver(F):null;R&&d.current&&R.observe(d.current);const K=f=>{const o=t.domElement.getBoundingClientRect(),p=f.clientX-o.left,s=f.clientY-o.top,w=t.getPixelRatio();if(B.current.set(p*w,(o.height-s)*w),E.current=1,L){const W=o.width/2,ee=o.height/2,te=(p-W)/o.width,ne=-(s-ee)/o.height;_.current.set(te*y,ne*y)}},V=()=>{E.current=0};C&&(t.domElement.addEventListener("pointermove",K),t.domElement.addEventListener("pointerleave",V));let j=0;const k=()=>{u.iTime.value=P.getElapsedTime(),C&&(T.current.lerp(B.current,b),u.iMouse.value.copy(T.current),U.current+=(E.current-U.current)*b,u.bendInfluence.value=U.current),L&&(z.current.lerp(_.current,b),u.parallaxOffset.value.copy(z.current)),t.render(a,g),j=requestAnimationFrame(k)};return k(),()=>{cancelAnimationFrame(j),R&&d.current&&R.disconnect(),C&&(t.domElement.removeEventListener("pointermove",K),t.domElement.removeEventListener("pointerleave",V)),D.dispose(),A.dispose(),t.dispose(),t.domElement.parentElement&&t.domElement.parentElement.removeChild(t.domElement)}},[v,e,l,c,n,r,i,G,C,O,S,b,L,y]),oe.jsx("div",{ref:d,className:"floating-lines-container",style:{mixBlendMode:X}})}export{pe as default};
