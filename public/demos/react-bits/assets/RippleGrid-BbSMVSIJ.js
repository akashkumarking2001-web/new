import{r as a,R as z,a5 as W,P as A,M as N,j}from"./index-CKqfvLoB.js";const q=({enableRainbow:v=!1,gridColor:f="#ffffff",rippleIntensity:m=.05,gridSize:d=10,gridThickness:p=15,fadeDistance:g=1.5,vignetteStrength:h=2,glowIntensity:x=.1,opacity:R=1,gridRotation:y=0,mouseInteraction:r=!0,mouseInteractionRadius:I=1})=>{const i=a.useRef(null),l=a.useRef({x:.5,y:.5}),w=a.useRef({x:.5,y:.5}),T=a.useRef(0),n=a.useRef(null);return a.useEffect(()=>{if(!i.current)return;const E=o=>{const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o);return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[1,1,1]},c=new z({dpr:Math.min(window.devicePixelRatio,2),alpha:!0}),e=c.gl;e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.canvas.style.width="100%",e.canvas.style.height="100%",i.current.appendChild(e.canvas);const M=`
attribute vec2 position;
varying vec2 vUv;
void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
}`,F=`precision highp float;
uniform float iTime;
uniform vec2 iResolution;
uniform bool enableRainbow;
uniform vec3 gridColor;
uniform float rippleIntensity;
uniform float gridSize;
uniform float gridThickness;
uniform float fadeDistance;
uniform float vignetteStrength;
uniform float glowIntensity;
uniform float opacity;
uniform float gridRotation;
uniform bool mouseInteraction;
uniform vec2 mousePosition;
uniform float mouseInfluence;
uniform float mouseInteractionRadius;
varying vec2 vUv;

float pi = 3.141592;

mat2 rotate(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat2(c, -s, s, c);
}

void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    uv.x *= iResolution.x / iResolution.y;

    if (gridRotation != 0.0) {
        uv = rotate(gridRotation * pi / 180.0) * uv;
    }

    float dist = length(uv);
    float func = sin(pi * (iTime - dist));
    vec2 rippleUv = uv + uv * func * rippleIntensity;

    if (mouseInteraction && mouseInfluence > 0.0) {
        vec2 mouseUv = (mousePosition * 2.0 - 1.0);
        mouseUv.x *= iResolution.x / iResolution.y;
        float mouseDist = length(uv - mouseUv);
        
        float influence = mouseInfluence * exp(-mouseDist * mouseDist / (mouseInteractionRadius * mouseInteractionRadius));
        
        float mouseWave = sin(pi * (iTime * 2.0 - mouseDist * 3.0)) * influence;
        rippleUv += normalize(uv - mouseUv) * mouseWave * rippleIntensity * 0.3;
    }

    vec2 a = sin(gridSize * 0.5 * pi * rippleUv - pi / 2.0);
    vec2 b = abs(a);

    float aaWidth = 0.5;
    vec2 smoothB = vec2(
        smoothstep(0.0, aaWidth, b.x),
        smoothstep(0.0, aaWidth, b.y)
    );

    vec3 color = vec3(0.0);
    color += exp(-gridThickness * smoothB.x * (0.8 + 0.5 * sin(pi * iTime)));
    color += exp(-gridThickness * smoothB.y);
    color += 0.5 * exp(-(gridThickness / 4.0) * sin(smoothB.x));
    color += 0.5 * exp(-(gridThickness / 3.0) * smoothB.y);

    if (glowIntensity > 0.0) {
        color += glowIntensity * exp(-gridThickness * 0.5 * smoothB.x);
        color += glowIntensity * exp(-gridThickness * 0.5 * smoothB.y);
    }

    float ddd = exp(-2.0 * clamp(pow(dist, fadeDistance), 0.0, 1.0));
    
    vec2 vignetteCoords = vUv - 0.5;
    float vignetteDistance = length(vignetteCoords);
    float vignette = 1.0 - pow(vignetteDistance * 2.0, vignetteStrength);
    vignette = clamp(vignette, 0.0, 1.0);
    
    vec3 t;
    if (enableRainbow) {
        t = vec3(
            uv.x * 0.5 + 0.5 * sin(iTime),
            uv.y * 0.5 + 0.5 * cos(iTime),
            pow(cos(iTime), 4.0)
        ) + 0.5;
    } else {
        t = gridColor;
    }

    float finalFade = ddd * vignette;
    float alpha = length(color) * finalFade * opacity;
    gl_FragColor = vec4(color * t * finalFade * opacity, alpha);
}`,s={iTime:{value:0},iResolution:{value:[1,1]},enableRainbow:{value:v},gridColor:{value:E(f)},rippleIntensity:{value:m},gridSize:{value:d},gridThickness:{value:p},fadeDistance:{value:g},vignetteStrength:{value:h},glowIntensity:{value:x},opacity:{value:R},gridRotation:{value:y},mouseInteraction:{value:r},mousePosition:{value:[.5,.5]},mouseInfluence:{value:0},mouseInteractionRadius:{value:I}};n.current=s;const S=new W(e),_=new A(e,{vertex:M,fragment:F,uniforms:s}),k=new N(e,{geometry:S,program:_}),b=()=>{const{clientWidth:o,clientHeight:t}=i.current;c.setSize(o,t),s.iResolution.value=[o,t]},C=o=>{if(!r||!i.current)return;const t=i.current.getBoundingClientRect(),L=(o.clientX-t.left)/t.width,U=1-(o.clientY-t.top)/t.height;w.current={x:L,y:U}},P=()=>{r&&(T.current=1)},B=()=>{r&&(T.current=0)};window.addEventListener("resize",b),r&&(i.current.addEventListener("mousemove",C),i.current.addEventListener("mouseenter",P),i.current.addEventListener("mouseleave",B)),b();const D=o=>{s.iTime.value=o*.001;const t=.1;l.current.x+=(w.current.x-l.current.x)*t,l.current.y+=(w.current.y-l.current.y)*t;const L=s.mouseInfluence.value,U=T.current;s.mouseInfluence.value+=(U-L)*.05,s.mousePosition.value=[l.current.x,l.current.y],c.render({scene:k}),requestAnimationFrame(D)};requestAnimationFrame(D);const u=i.current;return()=>{var o;window.removeEventListener("resize",b),r&&u&&(u.removeEventListener("mousemove",C),u.removeEventListener("mouseenter",P),u.removeEventListener("mouseleave",B)),(o=c.gl.getExtension("WEBGL_lose_context"))==null||o.loseContext(),u==null||u.removeChild(e.canvas)}},[]),a.useEffect(()=>{if(!n.current)return;const E=c=>{const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:[1,1,1]};n.current.enableRainbow.value=v,n.current.gridColor.value=E(f),n.current.rippleIntensity.value=m,n.current.gridSize.value=d,n.current.gridThickness.value=p,n.current.fadeDistance.value=g,n.current.vignetteStrength.value=h,n.current.glowIntensity.value=x,n.current.opacity.value=R,n.current.gridRotation.value=y,n.current.mouseInteraction.value=r,n.current.mouseInteractionRadius.value=I},[v,f,m,d,p,g,h,x,R,y,r,I]),j.jsx("div",{ref:i,className:"ripple-grid-container"})};export{q as default};
