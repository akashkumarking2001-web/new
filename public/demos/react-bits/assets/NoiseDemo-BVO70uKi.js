import{r as v,j as e,B as h,a as g,F as S}from"./index-CKqfvLoB.js";import{u as x,C as w,T as z,P as R,a as I,b,c as A}from"./PropTable-BzD4cJVp.js";import{R as y}from"./RefreshButton-CpmD4Uvc.js";import{u as N}from"./useForceRerender-0lK0qxlp.js";import{P as r}from"./PreviewSlider-25yjOF_X.js";import{C as D}from"./Customize-BaUKAf5J.js";import{O as E}from"./OpenInStudioButton-skw5opkr.js";import C from"./Noise-Ba9OhcJg.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";const j=`import { useRef, useEffect } from 'react';
import './Noise.css';

const Noise = ({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15
}) => {
  const grainRef = useRef(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId;
    const canvasSize = 1024;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvasSize;
      canvas.height = canvasSize;

      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = patternAlpha;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) {
        drawGrain();
      }
      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resize);
    resize();
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha]);

  return <canvas className="noise-overlay" ref={grainRef} style={{ imageRendering: 'pixelated' }} />;
};

export default Noise;
`,P=`.noise-overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}
`,X=`import { useRef, useEffect } from 'react';

const Noise = ({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15
}) => {
  const grainRef = useRef(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId;
    const canvasSize = 1024;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvasSize;
      canvas.height = canvasSize;

      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = patternAlpha;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) {
        drawGrain();
      }
      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resize);
    resize();
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha]);

  return (
    <canvas
      className="pointer-events-none absolute inset-0 w-full h-full"
      ref={grainRef}
      style={{ imageRendering: 'pixelated' }}
    />
  );
};

export default Noise;
`,Y=`import type React from 'react';
import { useRef, useEffect } from 'react';
import './Noise.css';

interface NoiseProps {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
}

const Noise: React.FC<NoiseProps> = ({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15
}) => {
  const grainRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId: number;
    const canvasSize = 1024;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvasSize;
      canvas.height = canvasSize;

      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = patternAlpha;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) {
        drawGrain();
      }
      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resize);
    resize();
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha]);

  return <canvas className="noise-overlay" ref={grainRef} style={{ imageRendering: 'pixelated' }} />;
};

export default Noise;
`,F=`import React, { useRef, useEffect } from 'react';

interface NoiseProps {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
}

const Noise: React.FC<NoiseProps> = ({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15
}) => {
  const grainRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId: number;

    const canvasSize = 1024;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvasSize;
      canvas.height = canvasSize;

      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = patternAlpha;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) {
        drawGrain();
      }
      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resize);
    resize();
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha]);

  return (
    <canvas
      className="pointer-events-none absolute top-0 left-0 h-screen w-screen"
      ref={grainRef}
      style={{
        imageRendering: 'pixelated'
      }}
    />
  );
};

export default Noise;
`,L={usage:`import Noise from './Noise;'

<div style={{width: '600px', height: '400px', position: 'relative', overflow: 'hidden'}}>
  <Noise
    patternSize={250}
    patternScaleX={1}
    patternScaleY={1}
    patternRefreshInterval={2}
    patternAlpha={15}
  />
</div>`,code:j,css:P,tailwind:X,tsCode:Y,tsTailwind:F},l={patternSize:250,patternScaleX:2,patternScaleY:2,patternAlpha:15},J=()=>{const{props:p,updateProp:n,resetProps:m,hasChanges:d}=x(l),{patternSize:i,patternScaleX:s,patternScaleY:o,patternAlpha:c}=p,[f,t]=N(),u=v.useMemo(()=>[{name:"patternSize",type:"number",default:250,description:"Defines the size of the grain pattern."},{name:"patternScaleX",type:"number",default:1,description:"Scaling factor for the X-axis of the grain pattern."},{name:"patternScaleY",type:"number",default:1,description:"Scaling factor for the Y-axis of the grain pattern."},{name:"patternRefreshInterval",type:"number",default:2,description:"Number of frames before the grain pattern refreshes."},{name:"patternAlpha",type:"number",default:15,description:"Opacity of the grain pattern (0-255)."}],[]);return e.jsx(w,{props:p,defaultProps:l,resetProps:m,hasChanges:d,children:e.jsxs(z,{children:[e.jsxs(R,{children:[e.jsxs(h,{position:"relative",className:"demo-container",background:"#060010",minH:400,overflow:"hidden",children:[e.jsx(g,{color:"#271E37",fontSize:"6rem",fontWeight:900,textAlign:"center",children:"Ooh, edgy!"}),e.jsx(C,{patternSize:i,patternScaleX:s,patternScaleY:o,patternAlpha:c},f),e.jsx(y,{onClick:t})]}),e.jsx(S,{justify:"flex-end",mt:2,mb:-2,children:e.jsx(E,{backgroundId:"noise",currentProps:{patternSize:i,patternScaleX:s,patternScaleY:o,patternAlpha:c},defaultProps:l})}),e.jsxs(D,{children:[e.jsx(r,{title:"Pattern Size",min:50,max:500,step:10,value:i,valueUnit:"px",onChange:a=>{n("patternSize",a),t()}}),e.jsx(r,{title:"Scale X",min:.1,max:5,step:.1,value:s,onChange:a=>{n("patternScaleX",a),t()}}),e.jsx(r,{title:"Scale Y",min:.1,max:5,step:.1,value:o,onChange:a=>{n("patternScaleY",a),t()}}),e.jsx(r,{title:"Pattern Alpha",min:0,max:25,step:5,value:c,onChange:a=>{n("patternAlpha",a),t()}})]}),e.jsx(I,{data:u})]}),e.jsx(b,{children:e.jsx(A,{codeObject:L,componentName:"Noise"})})]})})};export{J as default};
