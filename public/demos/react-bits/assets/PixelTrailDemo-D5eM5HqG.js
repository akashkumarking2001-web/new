import{r as f,j as r,B as w,a as x,F as E,d as F}from"./index-CKqfvLoB.js";import{u as b,C as P,T as M,P as U,a as R,b as A,c as j}from"./PropTable-BzD4cJVp.js";import{R as H}from"./RefreshButton-CpmD4Uvc.js";import{D as G}from"./Dependencies-DmSBXzNX.js";import{u as D}from"./useForceRerender-0lK0qxlp.js";import{P as v}from"./PreviewSlider-25yjOF_X.js";import{P as N}from"./PreviewSwitch-B0BSuWrO.js";import{C as _}from"./Customize-BaUKAf5J.js";import{u as W,C as $,a as T}from"./react-three-fiber.esm-DFK4OWio.js";import{T as k,C as y,N as C,c as S,V as B}from"./three.module-DbwSNGae.js";import{s as V}from"./shaderMaterial-BAAu0J8y.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";import"./switch-CqqRi5Az.js";function I(c,e,i=.9){return e*i+c*(1-i)}const L=c=>Math.sqrt(1-Math.pow(c-1,2));class O{constructor({size:e=256,maxAge:i=750,radius:o=.3,intensity:a=.2,interpolate:s=0,smoothing:g=0,minForce:t=.3,blend:l="screen",ease:u=L}={}){this.size=e,this.maxAge=i,this.radius=o,this.intensity=a,this.ease=u,this.interpolate=s,this.smoothing=g,this.minForce=t,this.blend=l,this.trail=[],this.force=0,this.initTexture()}initTexture(){this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=this.size;const e=this.canvas.getContext("2d");if(e===null)throw new Error("2D not available");this.ctx=e,this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.texture=new k(this.canvas),this.canvas.id="touchTexture",this.canvas.style.width=this.canvas.style.height=`${this.canvas.width}px`}update(e){this.clear(),this.trail.forEach((i,o)=>{i.age+=e*1e3,i.age>this.maxAge&&this.trail.splice(o,1)}),this.trail.length||(this.force=0),this.trail.forEach(i=>{this.drawTouch(i)}),this.texture.needsUpdate=!0}clear(){this.ctx.globalCompositeOperation="source-over",this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}addTouch(e){const i=this.trail[this.trail.length-1];if(i){const o=i.x-e.x,a=i.y-e.y,s=o*o+a*a,g=Math.max(this.minForce,Math.min(s*1e4,1));if(this.force=I(g,this.force,this.smoothing),this.interpolate){const t=Math.ceil(s/Math.pow(this.radius*.5/this.interpolate,2));if(t>1)for(let l=1;l<t;l++)this.trail.push({x:i.x-o/t*l,y:i.y-a/t*l,age:0,force:g})}}this.trail.push({x:e.x,y:e.y,age:0,force:this.force})}drawTouch(e){const i={x:e.x*this.size,y:(1-e.y)*this.size};let o=1;e.age<this.maxAge*.3?o=this.ease(e.age/(this.maxAge*.3)):o=this.ease(1-(e.age-this.maxAge*.3)/(this.maxAge*.7)),o*=e.force,this.ctx.globalCompositeOperation=this.blend;const a=this.size*this.radius*o,s=this.ctx.createRadialGradient(i.x,i.y,Math.max(0,a*.25),i.x,i.y,Math.max(0,a));s.addColorStop(0,`rgba(255, 255, 255, ${this.intensity})`),s.addColorStop(1,"rgba(0, 0, 0, 0.0)"),this.ctx.beginPath(),this.ctx.fillStyle=s,this.ctx.arc(i.x,i.y,Math.max(0,a),0,Math.PI*2),this.ctx.fill()}}function q(c={}){const{size:e,maxAge:i,radius:o,intensity:a,interpolate:s,smoothing:g,minForce:t,blend:l,ease:u}=c,m=f.useMemo(()=>new O(c),[e,i,o,a,s,g,t,l,u]);W((n,h)=>void m.update(h));const d=f.useCallback(n=>m.addTouch(n.uv),[m]);return[m.texture,d]}const J=({id:c="goo-filter",strength:e=10})=>r.jsx("svg",{className:"goo-filter-container",children:r.jsx("defs",{children:r.jsxs("filter",{id:c,children:[r.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:e,result:"blur"}),r.jsx("feColorMatrix",{in:"blur",type:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}),r.jsx("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop"})]})})}),K=V({resolution:new B,mouseTrail:null,gridSize:100,pixelColor:new y("#ffffff")},`
    varying vec2 vUv;
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,`
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    float sdfCircle(vec2 p, float r) {
        return length(p - 0.5) - r;
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      vec2 gridUv = fract(uv * gridSize);
      vec2 gridUvCenter = (floor(uv * gridSize) + 0.5) / gridSize;

      float trail = texture2D(mouseTrail, gridUvCenter).r;

      gl_FragColor = vec4(pixelColor, trail);
    }
  `);function Q({gridSize:c,trailSize:e,maxAge:i,interpolate:o,easingFunction:a,pixelColor:s}){const g=T(n=>n.size),t=T(n=>n.viewport),l=f.useMemo(()=>new K,[]);l.uniforms.pixelColor.value=new y(s);const[u,m]=q({size:512,radius:e,maxAge:i,interpolate:o||.1,ease:a||(n=>n)});u&&(u.minFilter=C,u.magFilter=C,u.wrapS=S,u.wrapT=S);const d=Math.max(t.width,t.height)/2;return r.jsxs("mesh",{scale:[d,d,1],onPointerMove:m,children:[r.jsx("planeGeometry",{args:[2,2]}),r.jsx("primitive",{object:l,gridSize:c,resolution:[g.width*t.dpr,g.height*t.dpr],mouseTrail:u})]})}function X({gridSize:c=40,trailSize:e=.1,maxAge:i=250,interpolate:o=5,easingFunction:a=m=>m,canvasProps:s={},glProps:g={antialias:!1,powerPreference:"high-performance",alpha:!0},gooeyFilter:t,color:l="#ffffff",className:u=""}){return r.jsxs(r.Fragment,{children:[t&&r.jsx(J,{id:t.id,strength:t.strength}),r.jsx($,{...s,gl:g,className:`pixel-canvas ${u}`,style:t&&{filter:`url(#${t.id})`},children:r.jsx(Q,{gridSize:c,trailSize:e,maxAge:i,interpolate:o,easingFunction:a,pixelColor:l})})]})}const Y=`/* eslint-disable react/no-unknown-property */
import { useMemo } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { shaderMaterial, useTrailTexture } from '@react-three/drei';
import * as THREE from 'three';

import './PixelTrail.css';

const GooeyFilter = ({ id = 'goo-filter', strength = 10 }) => {
  return (
    <svg className="goo-filter-container">
      <defs>
        <filter id={id}>
          <feGaussianBlur in="SourceGraphic" stdDeviation={strength} result="blur" />
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

const DotMaterial = shaderMaterial(
  {
    resolution: new THREE.Vector2(),
    mouseTrail: null,
    gridSize: 100,
    pixelColor: new THREE.Color('#ffffff')
  },
  \`
    varying vec2 vUv;
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  \`,
  \`
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    float sdfCircle(vec2 p, float r) {
        return length(p - 0.5) - r;
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      vec2 gridUv = fract(uv * gridSize);
      vec2 gridUvCenter = (floor(uv * gridSize) + 0.5) / gridSize;

      float trail = texture2D(mouseTrail, gridUvCenter).r;

      gl_FragColor = vec4(pixelColor, trail);
    }
  \`
);

function Scene({ gridSize, trailSize, maxAge, interpolate, easingFunction, pixelColor }) {
  const size = useThree(s => s.size);
  const viewport = useThree(s => s.viewport);

  const dotMaterial = useMemo(() => new DotMaterial(), []);
  dotMaterial.uniforms.pixelColor.value = new THREE.Color(pixelColor);

  const [trail, onMove] = useTrailTexture({
    size: 512,
    radius: trailSize,
    maxAge: maxAge,
    interpolate: interpolate || 0.1,
    ease: easingFunction || (x => x)
  });

  if (trail) {
    trail.minFilter = THREE.NearestFilter;
    trail.magFilter = THREE.NearestFilter;
    trail.wrapS = THREE.ClampToEdgeWrapping;
    trail.wrapT = THREE.ClampToEdgeWrapping;
  }

  const scale = Math.max(viewport.width, viewport.height) / 2;

  return (
    <mesh scale={[scale, scale, 1]} onPointerMove={onMove}>
      <planeGeometry args={[2, 2]} />
      <primitive
        object={dotMaterial}
        gridSize={gridSize}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        mouseTrail={trail}
      />
    </mesh>
  );
}

export default function PixelTrail({
  gridSize = 40,
  trailSize = 0.1,
  maxAge = 250,
  interpolate = 5,
  easingFunction = x => x,
  canvasProps = {},
  glProps = {
    antialias: false,
    powerPreference: 'high-performance',
    alpha: true
  },
  gooeyFilter,
  color = '#ffffff',
  className = ''
}) {
  return (
    <>
      {gooeyFilter && <GooeyFilter id={gooeyFilter.id} strength={gooeyFilter.strength} />}
      <Canvas
        {...canvasProps}
        gl={glProps}
        className={\`pixel-canvas \${className}\`}
        style={gooeyFilter && { filter: \`url(#\${gooeyFilter.id})\` }}
      >
        <Scene
          gridSize={gridSize}
          trailSize={trailSize}
          maxAge={maxAge}
          interpolate={interpolate}
          easingFunction={easingFunction}
          pixelColor={color}
        />
      </Canvas>
    </>
  );
}
`,Z=`.goo-filter-container {
  position: absolute;
  overflow: hidden;
  z-index: 1;
}

.pixel-canvas {
  position: absolute;
  z-index: 1;
}
`,ee=`/* eslint-disable react/no-unknown-property */
import { useMemo } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { shaderMaterial, useTrailTexture } from '@react-three/drei';
import * as THREE from 'three';

const GooeyFilter = ({ id = 'goo-filter', strength = 10 }) => {
  return (
    <svg className="absolute overflow-hidden z-1">
      <defs>
        <filter id={id}>
          <feGaussianBlur in="SourceGraphic" stdDeviation={strength} result="blur" />
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

const DotMaterial = shaderMaterial(
  {
    resolution: new THREE.Vector2(),
    mouseTrail: null,
    gridSize: 100,
    pixelColor: new THREE.Color('#ffffff')
  },
  \`
    varying vec2 vUv;
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  \`,
  \`
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    float sdfCircle(vec2 p, float r) {
        return length(p - 0.5) - r;
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      vec2 gridUv = fract(uv * gridSize);
      vec2 gridUvCenter = (floor(uv * gridSize) + 0.5) / gridSize;

      float trail = texture2D(mouseTrail, gridUvCenter).r;

      gl_FragColor = vec4(pixelColor, trail);
    }
  \`
);

function Scene({ gridSize, trailSize, maxAge, interpolate, easingFunction, pixelColor }) {
  const size = useThree(s => s.size);
  const viewport = useThree(s => s.viewport);

  const dotMaterial = useMemo(() => new DotMaterial(), []);
  dotMaterial.uniforms.pixelColor.value = new THREE.Color(pixelColor);

  const [trail, onMove] = useTrailTexture({
    size: 512,
    radius: trailSize,
    maxAge: maxAge,
    interpolate: interpolate || 0.1,
    ease: easingFunction || (x => x)
  });

  if (trail) {
    trail.minFilter = THREE.NearestFilter;
    trail.magFilter = THREE.NearestFilter;
    trail.wrapS = THREE.ClampToEdgeWrapping;
    trail.wrapT = THREE.ClampToEdgeWrapping;
  }

  const scale = Math.max(viewport.width, viewport.height) / 2;

  return (
    <mesh scale={[scale, scale, 1]} onPointerMove={onMove}>
      <planeGeometry args={[2, 2]} />
      <primitive
        object={dotMaterial}
        gridSize={gridSize}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        mouseTrail={trail}
      />
    </mesh>
  );
}

export default function PixelTrail({
  gridSize = 40,
  trailSize = 0.1,
  maxAge = 250,
  interpolate = 5,
  easingFunction = x => x,
  canvasProps = {},
  glProps = {
    antialias: false,
    powerPreference: 'high-performance',
    alpha: true
  },
  gooeyFilter,
  color = '#ffffff',
  className = ''
}) {
  return (
    <>
      {gooeyFilter && <GooeyFilter id={gooeyFilter.id} strength={gooeyFilter.strength} />}
      <Canvas
        {...canvasProps}
        gl={glProps}
        className={\`absolute z-1 \${className}\`}
        style={gooeyFilter && { filter: \`url(#\${gooeyFilter.id})\` }}
      >
        <Scene
          gridSize={gridSize}
          trailSize={trailSize}
          maxAge={maxAge}
          interpolate={interpolate}
          easingFunction={easingFunction}
          pixelColor={color}
        />
      </Canvas>
    </>
  );
}
`,re=`/* eslint-disable react/no-unknown-property */
import React, { useMemo } from 'react';
import { Canvas, useThree, CanvasProps, ThreeEvent } from '@react-three/fiber';
import { shaderMaterial, useTrailTexture } from '@react-three/drei';
import * as THREE from 'three';

import './PixelTrail.css';

interface GooeyFilterProps {
  id?: string;
  strength?: number;
}

interface DotMaterialUniforms {
  resolution: THREE.Vector2;
  mouseTrail: THREE.Texture | null;
  gridSize: number;
  pixelColor: THREE.Color;
}

interface SceneProps {
  gridSize: number;
  trailSize: number;
  maxAge: number;
  interpolate: number;
  easingFunction: (x: number) => number;
  pixelColor: string;
}

interface PixelTrailProps {
  gridSize?: number;
  trailSize?: number;
  maxAge?: number;
  interpolate?: number;
  easingFunction?: (x: number) => number;
  canvasProps?: Partial<CanvasProps>;
  glProps?: WebGLContextAttributes & { powerPreference?: string };
  gooeyFilter?: { id: string; strength: number };
  color?: string;
  className?: string;
}

const GooeyFilter: React.FC<GooeyFilterProps> = ({ id = 'goo-filter', strength = 10 }) => {
  return (
    <svg className="goo-filter-container">
      <defs>
        <filter id={id}>
          <feGaussianBlur in="SourceGraphic" stdDeviation={strength} result="blur" />
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

const DotMaterial = shaderMaterial(
  {
    resolution: new THREE.Vector2(),
    mouseTrail: null,
    gridSize: 100,
    pixelColor: new THREE.Color('#ffffff')
  },
  /* glsl vertex shader */ \`
    varying vec2 vUv;
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  \`,
  /* glsl fragment shader */ \`
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    float sdfCircle(vec2 p, float r) {
        return length(p - 0.5) - r;
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      vec2 gridUv = fract(uv * gridSize);
      vec2 gridUvCenter = (floor(uv * gridSize) + 0.5) / gridSize;

      float trail = texture2D(mouseTrail, gridUvCenter).r;

      gl_FragColor = vec4(pixelColor, trail);
    }
  \`
);

function Scene({ gridSize, trailSize, maxAge, interpolate, easingFunction, pixelColor }: SceneProps) {
  const size = useThree(s => s.size);
  const viewport = useThree(s => s.viewport);

  const dotMaterial = useMemo(() => new DotMaterial(), []);
  dotMaterial.uniforms.pixelColor.value = new THREE.Color(pixelColor);

  const [trail, onMove] = useTrailTexture({
    size: 512,
    radius: trailSize,
    maxAge: maxAge,
    interpolate: interpolate || 0.1,
    ease: easingFunction || ((x: number) => x)
  }) as [THREE.Texture | null, (e: ThreeEvent<PointerEvent>) => void];

  if (trail) {
    trail.minFilter = THREE.NearestFilter;
    trail.magFilter = THREE.NearestFilter;
    trail.wrapS = THREE.ClampToEdgeWrapping;
    trail.wrapT = THREE.ClampToEdgeWrapping;
  }

  const scale = Math.max(viewport.width, viewport.height) / 2;

  return (
    <mesh scale={[scale, scale, 1]} onPointerMove={onMove}>
      <planeGeometry args={[2, 2]} />
      <primitive
        object={dotMaterial}
        gridSize={gridSize}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        mouseTrail={trail}
      />
    </mesh>
  );
}

export default function PixelTrail({
  gridSize = 40,
  trailSize = 0.1,
  maxAge = 250,
  interpolate = 5,
  easingFunction = (x: number) => x,
  canvasProps = {},
  glProps = {
    antialias: false,
    powerPreference: 'high-performance',
    alpha: true
  },
  gooeyFilter,
  color = '#ffffff',
  className = ''
}: PixelTrailProps) {
  return (
    <>
      {gooeyFilter && <GooeyFilter id={gooeyFilter.id} strength={gooeyFilter.strength} />}
      <Canvas
        {...canvasProps}
        gl={glProps}
        className={\`pixel-canvas \${className}\`}
        style={gooeyFilter ? { filter: \`url(#\${gooeyFilter.id})\` } : undefined}
      >
        <Scene
          gridSize={gridSize}
          trailSize={trailSize}
          maxAge={maxAge}
          interpolate={interpolate}
          easingFunction={easingFunction}
          pixelColor={color}
        />
      </Canvas>
    </>
  );
}
`,ie=`/* eslint-disable react/no-unknown-property */
import React, { useMemo } from 'react';
import { Canvas, useThree, CanvasProps, ThreeEvent } from '@react-three/fiber';
import { shaderMaterial, useTrailTexture } from '@react-three/drei';
import * as THREE from 'three';

interface GooeyFilterProps {
  id?: string;
  strength?: number;
}

interface DotMaterialUniforms {
  resolution: THREE.Vector2;
  mouseTrail: THREE.Texture | null;
  gridSize: number;
  pixelColor: THREE.Color;
}

interface SceneProps {
  gridSize: number;
  trailSize: number;
  maxAge: number;
  interpolate: number;
  easingFunction: (x: number) => number;
  pixelColor: string;
}

interface PixelTrailProps {
  gridSize?: number;
  trailSize?: number;
  maxAge?: number;
  interpolate?: number;
  easingFunction?: (x: number) => number;
  canvasProps?: Partial<CanvasProps>;
  glProps?: WebGLContextAttributes & { powerPreference?: string };
  gooeyFilter?: { id: string; strength: number };
  color?: string;
  className?: string;
}

const GooeyFilter: React.FC<GooeyFilterProps> = ({ id = 'goo-filter', strength = 10 }) => {
  return (
    <svg className="absolute overflow-hidden z-1">
      <defs>
        <filter id={id}>
          <feGaussianBlur in="SourceGraphic" stdDeviation={strength} result="blur" />
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

const DotMaterial = shaderMaterial(
  {
    resolution: new THREE.Vector2(),
    mouseTrail: null,
    gridSize: 100,
    pixelColor: new THREE.Color('#ffffff')
  },
  /* glsl vertex shader */ \`
    varying vec2 vUv;
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  \`,
  /* glsl fragment shader */ \`
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    float sdfCircle(vec2 p, float r) {
        return length(p - 0.5) - r;
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      vec2 gridUv = fract(uv * gridSize);
      vec2 gridUvCenter = (floor(uv * gridSize) + 0.5) / gridSize;

      float trail = texture2D(mouseTrail, gridUvCenter).r;

      gl_FragColor = vec4(pixelColor, trail);
    }
  \`
);

function Scene({ gridSize, trailSize, maxAge, interpolate, easingFunction, pixelColor }: SceneProps) {
  const size = useThree(s => s.size);
  const viewport = useThree(s => s.viewport);

  const dotMaterial = useMemo(() => new DotMaterial(), []);
  dotMaterial.uniforms.pixelColor.value = new THREE.Color(pixelColor);

  const [trail, onMove] = useTrailTexture({
    size: 512,
    radius: trailSize,
    maxAge: maxAge,
    interpolate: interpolate || 0.1,
    ease: easingFunction || ((x: number) => x)
  }) as [THREE.Texture | null, (e: ThreeEvent<PointerEvent>) => void];

  if (trail) {
    trail.minFilter = THREE.NearestFilter;
    trail.magFilter = THREE.NearestFilter;
    trail.wrapS = THREE.ClampToEdgeWrapping;
    trail.wrapT = THREE.ClampToEdgeWrapping;
  }

  const scale = Math.max(viewport.width, viewport.height) / 2;

  return (
    <mesh scale={[scale, scale, 1]} onPointerMove={onMove}>
      <planeGeometry args={[2, 2]} />
      <primitive
        object={dotMaterial}
        gridSize={gridSize}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        mouseTrail={trail}
      />
    </mesh>
  );
}

export default function PixelTrail({
  gridSize = 40,
  trailSize = 0.1,
  maxAge = 250,
  interpolate = 5,
  easingFunction = (x: number) => x,
  canvasProps = {},
  glProps = {
    antialias: false,
    powerPreference: 'high-performance',
    alpha: true
  },
  gooeyFilter,
  color = '#ffffff',
  className = ''
}: PixelTrailProps) {
  return (
    <>
      {gooeyFilter && <GooeyFilter id={gooeyFilter.id} strength={gooeyFilter.strength} />}
      <Canvas
        {...canvasProps}
        gl={glProps}
        className={\`absolute z-1 \${className}\`}
        style={gooeyFilter ? { filter: \`url(#\${gooeyFilter.id})\` } : undefined}
      >
        <Scene
          gridSize={gridSize}
          trailSize={trailSize}
          maxAge={maxAge}
          interpolate={interpolate}
          easingFunction={easingFunction}
          pixelColor={color}
        />
      </Canvas>
    </>
  );
}
`,te={dependencies:"three @react-three/fiber @react-three/drei",usage:`import PixelTrail from './PixelTrail';

<div style={{ height: '500px', position: 'relative', overflow: 'hidden'}}>
  <PixelTrail
    gridSize={50}
    trailSize={0.1}
    maxAge={250}
    interpolate={5}
    color="#fff"
    gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
  />
</div>`,code:Y,css:Z,tailwind:ee,tsCode:re,tsTailwind:ie},z={gridSize:50,trailSize:.1,maxAge:250,interpolate:5,color:"#5227FF",gooeyEnabled:!0,gooStrength:2},Te=()=>{const{props:c,updateProp:e,resetProps:i,hasChanges:o}=b(z),{gridSize:a,trailSize:s,maxAge:g,interpolate:t,color:l,gooeyEnabled:u,gooStrength:m}=c,[d,n]=D(),h=f.useMemo(()=>[{name:"gridSize",type:"number",default:"40",description:"Number of pixels in grid."},{name:"trailSize",type:"number",default:"0.1",description:"Size of each trail dot."},{name:"maxAge",type:"number",default:"500",description:"Duration of the trail effect."},{name:"interpolate",type:"number",default:"5",description:"Interpolation factor for pointer movement."},{name:"color",type:"string",default:"#ffffff",description:"Pixel color."},{name:"gooeyFilter",type:"object",default:"{ id: 'custom-goo-filter', strength: 5 }",description:"Configuration for gooey filter."}],[]);return r.jsx(P,{props:c,defaultProps:z,resetProps:i,hasChanges:o,children:r.jsxs(M,{children:[r.jsxs(U,{children:[r.jsxs(w,{position:"relative",className:"demo-container",h:400,p:0,overflow:"hidden",children:[r.jsx(H,{onClick:n}),r.jsx(X,{gridSize:a,trailSize:s,maxAge:g,interpolate:t,color:l,gooeyFilter:u?{id:"custom-goo-filter",strength:m}:void 0},d),r.jsx(x,{position:"absolute",zIndex:0,fontSize:"clamp(2rem, 6vw, 6rem)",color:"#271E37",fontWeight:900,children:"Move Cursor."})]}),r.jsxs(_,{children:[r.jsx(v,{title:"Grid Size",min:10,max:100,step:1,value:a,onChange:p=>{e("gridSize",p),n()}}),r.jsx(v,{title:"Trail Size",min:.05,max:.5,step:.01,value:s,onChange:p=>{e("trailSize",p),n()}}),r.jsx(v,{title:"Max Age",min:100,max:1e3,step:50,value:g,onChange:p=>{e("maxAge",p),n()}}),r.jsx(v,{title:"Interpolate",min:0,max:10,step:.1,value:t,onChange:p=>{e("interpolate",p),n()}}),r.jsxs(E,{gap:4,align:"center",mt:4,children:[r.jsx(x,{fontSize:"sm",children:"Color"}),r.jsx(F,{type:"color",value:l,onChange:p=>{e("color",p.target.value),n()},width:"50px"}),r.jsx(x,{fontSize:"sm",children:l})]}),r.jsx(N,{title:"Gooey Filter",isChecked:u,onChange:p=>{e("gooeyEnabled",p),n()}}),u&&r.jsx(v,{title:"Gooey Strength",min:1,max:20,step:1,value:m,onChange:p=>{e("gooStrength",p),n()}})]}),r.jsx(R,{data:h}),r.jsx(G,{dependencyList:["@react-three/fiber","@react-three/drei","three"]})]}),r.jsx(A,{children:r.jsx(j,{codeObject:te,componentName:"PixelTrail"})})]})})};export{Te as default};
