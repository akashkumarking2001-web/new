import{r as y,R as A,a5 as B,P as j,M as Q,j as n,B as L,F as I,a as V,d as q}from"./index-CKqfvLoB.js";import{u as k,C as H,T as _,P as N,a as W,b as X,c as Y}from"./PropTable-BzD4cJVp.js";import{C as $}from"./Customize-BaUKAf5J.js";import{D as Z}from"./Dependencies-DmSBXzNX.js";import{P as b}from"./PreviewSlider-25yjOF_X.js";import{P as G}from"./PreviewSwitch-B0BSuWrO.js";import{P as J}from"./PreviewSelect-CM4Sns8B.js";import{O as K}from"./OpenInStudioButton-skw5opkr.js";import{u as nn}from"./useForceRerender-0lK0qxlp.js";import{B as en}from"./BackgroundContent-D3IuLIX4.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";import"./switch-CqqRi5Az.js";import"./field-DGUMYGrq.js";const on=`import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';
import './Plasma.css';

const hexToRgb = hex => {
  const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
  if (!result) return [1, 0.5, 0.2];
  return [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255];
};

const vertex = \`#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
\`;

const fragment = \`#version 300 es
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
}\`;

export const Plasma = ({
  color = '#ffffff',
  speed = 1,
  direction = 'forward',
  scale = 1,
  opacity = 1,
  mouseInteractive = true
}) => {
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const containerEl = containerRef.current;

    const useCustomColor = color ? 1.0 : 0.0;
    const customColorRgb = color ? hexToRgb(color) : [1, 1, 1];

    const directionMultiplier = direction === 'reverse' ? -1.0 : 1.0;

    const renderer = new Renderer({
      webgl: 2,
      alpha: true,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, 2)
    });
    const gl = renderer.gl;
    const canvas = gl.canvas;
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    containerRef.current.appendChild(canvas);

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: vertex,
      fragment: fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([1, 1]) },
        uCustomColor: { value: new Float32Array(customColorRgb) },
        uUseCustomColor: { value: useCustomColor },
        uSpeed: { value: speed * 0.4 },
        uDirection: { value: directionMultiplier },
        uScale: { value: scale },
        uOpacity: { value: opacity },
        uMouse: { value: new Float32Array([0, 0]) },
        uMouseInteractive: { value: mouseInteractive ? 1.0 : 0.0 }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });

    const handleMouseMove = e => {
      if (!mouseInteractive) return;
      const rect = containerRef.current.getBoundingClientRect();
      mousePos.current.x = e.clientX - rect.left;
      mousePos.current.y = e.clientY - rect.top;
      const mouseUniform = program.uniforms.uMouse.value;
      mouseUniform[0] = mousePos.current.x;
      mouseUniform[1] = mousePos.current.y;
    };

    if (mouseInteractive) {
      containerEl.addEventListener('mousemove', handleMouseMove);
    }

    const setSize = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      renderer.setSize(width, height);
      const res = program.uniforms.iResolution.value;
      res[0] = gl.drawingBufferWidth;
      res[1] = gl.drawingBufferHeight;
    };

    const ro = new ResizeObserver(setSize);
    ro.observe(containerEl);
    setSize();

    let raf = 0;
    const t0 = performance.now();
    const loop = t => {
      let timeValue = (t - t0) * 0.001;
      if (direction === 'pingpong') {
        const pingpongDuration = 10;
        const segmentTime = timeValue % pingpongDuration;
        const isForward = Math.floor(timeValue / pingpongDuration) % 2 === 0;
        const u = segmentTime / pingpongDuration;
        const smooth = u * u * (3 - 2 * u);
        const pingpongTime = isForward ? smooth * pingpongDuration : (1 - smooth) * pingpongDuration;
        program.uniforms.uDirection.value = 1.0;
        program.uniforms.iTime.value = pingpongTime;
      } else {
        program.uniforms.iTime.value = timeValue;
      }
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (mouseInteractive && containerEl) {
        containerEl.removeEventListener('mousemove', handleMouseMove);
      }
      try {
        containerEl?.removeChild(canvas);
      } catch {
        console.warn('Canvas already removed from container');
      }
    };
  }, [color, speed, direction, scale, opacity, mouseInteractive]);

  return <div ref={containerRef} className="plasma-container" />;
};

export default Plasma;
`,tn=`.plasma-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
`,rn=`import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

const hexToRgb = hex => {
  const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
  if (!result) return [1, 0.5, 0.2];
  return [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255];
};

const vertex = \`#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
\`;

const fragment = \`#version 300 es
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
}\`;

export const Plasma = ({
  color = '#ffffff',
  speed = 1,
  direction = 'forward',
  scale = 1,
  opacity = 1,
  mouseInteractive = true
}) => {
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const useCustomColor = color ? 1.0 : 0.0;
    const customColorRgb = color ? hexToRgb(color) : [1, 1, 1];

    const directionMultiplier = direction === 'reverse' ? -1.0 : 1.0;

    const renderer = new Renderer({
      webgl: 2,
      alpha: true,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, 2)
    });
    const gl = renderer.gl;
    const canvas = gl.canvas;
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    containerRef.current.appendChild(canvas);

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: vertex,
      fragment: fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([1, 1]) },
        uCustomColor: { value: new Float32Array(customColorRgb) },
        uUseCustomColor: { value: useCustomColor },
        uSpeed: { value: speed * 0.4 },
        uDirection: { value: directionMultiplier },
        uScale: { value: scale },
        uOpacity: { value: opacity },
        uMouse: { value: new Float32Array([0, 0]) },
        uMouseInteractive: { value: mouseInteractive ? 1.0 : 0.0 }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });

    const handleMouseMove = e => {
      if (!mouseInteractive) return;
      const rect = containerRef.current.getBoundingClientRect();
      mousePos.current.x = e.clientX - rect.left;
      mousePos.current.y = e.clientY - rect.top;
      const mouseUniform = program.uniforms.uMouse.value;
      mouseUniform[0] = mousePos.current.x;
      mouseUniform[1] = mousePos.current.y;
    };

    if (mouseInteractive) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);
    }

    const setSize = () => {
      const rect = containerRef.current.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      renderer.setSize(width, height);
      const res = program.uniforms.iResolution.value;
      res[0] = gl.drawingBufferWidth;
      res[1] = gl.drawingBufferHeight;
    };

    const ro = new ResizeObserver(setSize);
    ro.observe(containerRef.current);
    setSize();

    let raf = 0;
    const t0 = performance.now();
    const loop = t => {
      let timeValue = (t - t0) * 0.001;
      if (direction === 'pingpong') {
        const pingpongDuration = 10;
        const segmentTime = timeValue % pingpongDuration;
        const isForward = Math.floor(timeValue / pingpongDuration) % 2 === 0;
        const u = segmentTime / pingpongDuration;
        const smooth = u * u * (3 - 2 * u);
        const pingpongTime = isForward ? smooth * pingpongDuration : (1 - smooth) * pingpongDuration;
        program.uniforms.uDirection.value = 1.0;
        program.uniforms.iTime.value = pingpongTime;
      } else {
        program.uniforms.iTime.value = timeValue;
      }
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (mouseInteractive && containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
      try {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current?.removeChild(canvas);
      } catch {
        console.warn('Canvas already removed from container');
      }
    };
  }, [color, speed, direction, scale, opacity, mouseInteractive]);

  return <div ref={containerRef} className="w-full h-full overflow-hidden relative" />;
};

export default Plasma;
`,an=`import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';
import './Plasma.css';

interface PlasmaProps {
  color?: string;
  speed?: number;
  direction?: 'forward' | 'reverse' | 'pingpong';
  scale?: number;
  opacity?: number;
  mouseInteractive?: boolean;
}

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
  if (!result) return [1, 0.5, 0.2];
  return [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255];
};

const vertex = \`#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
\`;

const fragment = \`#version 300 es
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
}\`;

export const Plasma: React.FC<PlasmaProps> = ({
  color = '#ffffff',
  speed = 1,
  direction = 'forward',
  scale = 1,
  opacity = 1,
  mouseInteractive = true
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const useCustomColor = color ? 1.0 : 0.0;
    const customColorRgb = color ? hexToRgb(color) : [1, 1, 1];

    const directionMultiplier = direction === 'reverse' ? -1.0 : 1.0;

    const renderer = new Renderer({
      webgl: 2,
      alpha: true,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, 2)
    });
    const gl = renderer.gl;
    const canvas = gl.canvas as HTMLCanvasElement;
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    containerRef.current.appendChild(canvas);

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: vertex,
      fragment: fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([1, 1]) },
        uCustomColor: { value: new Float32Array(customColorRgb) },
        uUseCustomColor: { value: useCustomColor },
        uSpeed: { value: speed * 0.4 },
        uDirection: { value: directionMultiplier },
        uScale: { value: scale },
        uOpacity: { value: opacity },
        uMouse: { value: new Float32Array([0, 0]) },
        uMouseInteractive: { value: mouseInteractive ? 1.0 : 0.0 }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseInteractive) return;
      const rect = containerRef.current!.getBoundingClientRect();
      mousePos.current.x = e.clientX - rect.left;
      mousePos.current.y = e.clientY - rect.top;
      const mouseUniform = program.uniforms.uMouse.value as Float32Array;
      mouseUniform[0] = mousePos.current.x;
      mouseUniform[1] = mousePos.current.y;
    };

    if (mouseInteractive) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);
    }

    const setSize = () => {
      const rect = containerRef.current!.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      renderer.setSize(width, height);
      const res = program.uniforms.iResolution.value as Float32Array;
      res[0] = gl.drawingBufferWidth;
      res[1] = gl.drawingBufferHeight;
    };

    const ro = new ResizeObserver(setSize);
    ro.observe(containerRef.current);
    setSize();

    let raf = 0;
    const t0 = performance.now();
    const loop = (t: number) => {
      let timeValue = (t - t0) * 0.001;
      if (direction === 'pingpong') {
        const pingpongDuration = 10;
        const segmentTime = timeValue % pingpongDuration;
        const isForward = Math.floor(timeValue / pingpongDuration) % 2 === 0;
        const u = segmentTime / pingpongDuration;
        const smooth = u * u * (3 - 2 * u);
        const pingpongTime = isForward ? smooth * pingpongDuration : (1 - smooth) * pingpongDuration;
        (program.uniforms.uDirection as any).value = 1.0;
        (program.uniforms.iTime as any).value = pingpongTime;
      } else {
        (program.uniforms.iTime as any).value = timeValue;
      }
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (mouseInteractive && containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
      try {
        containerRef.current?.removeChild(canvas);
      } catch {}
    };
  }, [color, speed, direction, scale, opacity, mouseInteractive]);

  return <div ref={containerRef} className="plasma-container" />;
};

export default Plasma;
`,sn=`import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

interface PlasmaProps {
  color?: string;
  speed?: number;
  direction?: 'forward' | 'reverse' | 'pingpong';
  scale?: number;
  opacity?: number;
  mouseInteractive?: boolean;
}

const hexToRgb = (hex: string): [number, number, number] => {
  const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
  if (!result) return [1, 0.5, 0.2];
  return [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255];
};

const vertex = \`#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
\`;

const fragment = \`#version 300 es
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
}\`;

export const Plasma: React.FC<PlasmaProps> = ({
  color = '#ffffff',
  speed = 1,
  direction = 'forward',
  scale = 1,
  opacity = 1,
  mouseInteractive = true
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const useCustomColor = color ? 1.0 : 0.0;
    const customColorRgb = color ? hexToRgb(color) : [1, 1, 1];

    const directionMultiplier = direction === 'reverse' ? -1.0 : 1.0;

    const renderer = new Renderer({
      webgl: 2,
      alpha: true,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, 2)
    });
    const gl = renderer.gl;
    const canvas = gl.canvas as HTMLCanvasElement;
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    containerRef.current.appendChild(canvas);

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: vertex,
      fragment: fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Float32Array([1, 1]) },
        uCustomColor: { value: new Float32Array(customColorRgb) },
        uUseCustomColor: { value: useCustomColor },
        uSpeed: { value: speed * 0.4 },
        uDirection: { value: directionMultiplier },
        uScale: { value: scale },
        uOpacity: { value: opacity },
        uMouse: { value: new Float32Array([0, 0]) },
        uMouseInteractive: { value: mouseInteractive ? 1.0 : 0.0 }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseInteractive) return;
      const rect = containerRef.current!.getBoundingClientRect();
      mousePos.current.x = e.clientX - rect.left;
      mousePos.current.y = e.clientY - rect.top;
      const mouseUniform = program.uniforms.uMouse.value as Float32Array;
      mouseUniform[0] = mousePos.current.x;
      mouseUniform[1] = mousePos.current.y;
    };

    if (mouseInteractive) {
      containerRef.current.addEventListener('mousemove', handleMouseMove);
    }

    const setSize = () => {
      const rect = containerRef.current!.getBoundingClientRect();
      const width = Math.max(1, Math.floor(rect.width));
      const height = Math.max(1, Math.floor(rect.height));
      renderer.setSize(width, height);
      const res = program.uniforms.iResolution.value as Float32Array;
      res[0] = gl.drawingBufferWidth;
      res[1] = gl.drawingBufferHeight;
    };

    const ro = new ResizeObserver(setSize);
    ro.observe(containerRef.current);
    setSize();

    let raf = 0;
    const t0 = performance.now();
    const loop = (t: number) => {
      let timeValue = (t - t0) * 0.001;
      if (direction === 'pingpong') {
        const pingpongDuration = 10;
        const segmentTime = timeValue % pingpongDuration;
        const isForward = Math.floor(timeValue / pingpongDuration) % 2 === 0;
        const u = segmentTime / pingpongDuration;
        const smooth = u * u * (3 - 2 * u);
        const pingpongTime = isForward ? smooth * pingpongDuration : (1 - smooth) * pingpongDuration;
        (program.uniforms.uDirection as any).value = 1.0;
        (program.uniforms.iTime as any).value = pingpongTime;
      } else {
        (program.uniforms.iTime as any).value = timeValue;
      }
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (mouseInteractive && containerRef.current) {
        containerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
      try {
        containerRef.current?.removeChild(canvas);
      } catch {}
    };
  }, [color, speed, direction, scale, opacity, mouseInteractive]);

  return <div ref={containerRef} className="w-full h-full relative overflow-hidden" />;
};

export default Plasma;
`,cn={dependencies:"ogl",usage:`import Plasma from './Plasma';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Plasma 
    color="#ff6b35"
    speed={0.6}
    direction="forward"
    scale={1.1}
    opacity={0.8}
    mouseInteractive={true}
  />
</div>`,code:on,css:tn,tailwind:rn,tsCode:an,tsTailwind:sn},un=a=>{const o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return o?[parseInt(o[1],16)/255,parseInt(o[2],16)/255,parseInt(o[3],16)/255]:[1,.5,.2]},ln=`#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,mn=`#version 300 es
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
}`,fn=({color:a="#ffffff",speed:o=1,direction:f="forward",scale:h=1,opacity:l=1,mouseInteractive:i=!0})=>{const t=y.useRef(null),s=y.useRef({x:0,y:0});return y.useEffect(()=>{if(!t.current)return;const p=a?1:0,v=a?un(a):[1,1,1],x=f==="reverse"?-1:1,g=new A({webgl:2,alpha:!0,antialias:!1,dpr:Math.min(window.devicePixelRatio||1,2)}),c=g.gl,e=c.canvas;e.style.display="block",e.style.width="100%",e.style.height="100%",t.current.appendChild(e);const D=new B(c),m=new j(c,{vertex:ln,fragment:mn,uniforms:{iTime:{value:0},iResolution:{value:new Float32Array([1,1])},uCustomColor:{value:new Float32Array(v)},uUseCustomColor:{value:p},uSpeed:{value:o*.4},uDirection:{value:x},uScale:{value:h},uOpacity:{value:l},uMouse:{value:new Float32Array([0,0])},uMouseInteractive:{value:i?1:0}}}),F=new Q(c,{geometry:D,program:m}),M=r=>{if(!i)return;const u=t.current.getBoundingClientRect();s.current.x=r.clientX-u.left,s.current.y=r.clientY-u.top;const d=m.uniforms.uMouse.value;d[0]=s.current.x,d[1]=s.current.y};i&&t.current.addEventListener("mousemove",M);const T=()=>{const r=t.current.getBoundingClientRect(),u=Math.max(1,Math.floor(r.width)),d=Math.max(1,Math.floor(r.height));g.setSize(u,d);const C=m.uniforms.iResolution.value;C[0]=c.drawingBufferWidth,C[1]=c.drawingBufferHeight},z=new ResizeObserver(T);z.observe(t.current),T();let w=0;const O=performance.now(),S=r=>{let u=(r-O)*.001;if(f==="pingpong"){const C=u%10,E=Math.floor(u/10)%2===0,R=C/10,P=R*R*(3-2*R),U=E?P*10:(1-P)*10;m.uniforms.uDirection.value=1,m.uniforms.iTime.value=U}else m.uniforms.iTime.value=u;g.render({scene:F}),w=requestAnimationFrame(S)};return w=requestAnimationFrame(S),()=>{var r;cancelAnimationFrame(w),z.disconnect(),i&&t.current&&t.current.removeEventListener("mousemove",M);try{(r=t.current)==null||r.removeChild(e)}catch{}}},[a,o,f,h,l,i]),n.jsx("div",{ref:t,className:"plasma-container"})},pn={color:"#B19EEF",speed:1,direction:"forward",scale:1,opacity:1,mouseInteractive:!1},In=()=>{const{props:a,updateProp:o,resetProps:f,hasChanges:h}=k(pn),{color:l,speed:i,direction:t,scale:s,opacity:p,mouseInteractive:v}=a,[x,g]=nn(),c=y.useMemo(()=>[{name:"color",type:"string",default:"undefined",description:"Optional hex color to tint the plasma effect. If not provided, uses original colors."},{name:"speed",type:"number",default:"1.0",description:"Animation speed multiplier. Higher values = faster animation."},{name:"direction",type:"'forward' | 'reverse' | 'pingpong'",default:"'forward'",description:"Animation direction. 'pingpong' oscillates back and forth."},{name:"scale",type:"number",default:"1.0",description:"Zoom level of the plasma pattern. Higher values zoom in."},{name:"opacity",type:"number",default:"1.0",description:"Overall opacity of the effect (0-1)."},{name:"mouseInteractive",type:"boolean",default:"false",description:"Whether the plasma responds to mouse movement."}],[]);return n.jsx(H,{resetProps:f,hasChanges:h,forceRerender:g,children:n.jsxs(_,{children:[n.jsxs(N,{children:[n.jsxs(L,{position:"relative",className:"demo-container",h:600,p:0,overflow:"hidden",children:[n.jsx(fn,{color:l,speed:i,direction:t,scale:s,opacity:p,mouseInteractive:v},x),n.jsx(en,{pillText:"New Background",headline:"Minimal plasma waves that soothe the eyes"})]}),n.jsx(I,{justify:"flex-end",mt:2,mb:-2,children:n.jsx(K,{backgroundId:"plasma",currentProps:{color:l,speed:i,scale:s,opacity:p,mouseInteractive:v},defaultProps:{color:"#B19EEF",speed:1,scale:1,opacity:1,mouseInteractive:!1}})}),n.jsxs($,{children:[n.jsxs(I,{alignItems:"center",mb:4,children:[n.jsx(V,{fontSize:"sm",mr:2,children:"Color"}),n.jsx(q,{type:"color",value:l,onChange:e=>{o("color",e.target.value)},width:"50px"})]}),n.jsx(J,{title:"Direction",options:[{value:"forward",label:"Forward"},{value:"reverse",label:"Reverse"},{value:"pingpong",label:"Ping Pong"}],value:t,onChange:e=>o("direction",e),width:120}),n.jsx(b,{title:"Speed",min:.1,max:3,step:.1,value:i,onChange:e=>o("speed",e)}),n.jsx(b,{title:"Scale",min:.5,max:3,step:.1,value:s,onChange:e=>o("scale",e)}),n.jsx(b,{title:"Opacity",min:.1,max:1,step:.1,value:p,onChange:e=>o("opacity",e)}),n.jsx(G,{title:"Mouse Interactive",isChecked:v,onChange:e=>o("mouseInteractive",e)})]}),n.jsx(W,{data:c}),n.jsx(Z,{dependencyList:["ogl"]})]}),n.jsx(X,{children:n.jsx(Y,{codeObject:cn,componentName:"Plasma"})})]})})};export{In as default};
