import{r as h,Z as X,j as e,B as Y,e as N,a as $,F as O,$ as P}from"./index-CKqfvLoB.js";import{u as G,C as A,T as V,P as _,a as H,b as q,c as Z}from"./PropTable-BzD4cJVp.js";import{D as U}from"./Dependencies-DmSBXzNX.js";import{C as W}from"./Customize-BaUKAf5J.js";import{P as i}from"./PreviewSlider-25yjOF_X.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";const J=`'use client';

import { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import './BlobCursor.css';

export default function BlobCursor({
  blobType = 'circle',
  fillColor = '#5227FF',
  trailCount = 3,
  sizes = [60, 125, 75],
  innerSizes = [20, 35, 25],
  innerColor = 'rgba(255,255,255,0.8)',
  opacities = [0.6, 0.6, 0.6],
  shadowColor = 'rgba(0,0,0,0.75)',
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterId = 'blob',
  filterStdDeviation = 30,
  filterColorMatrixValues = '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10',
  useFilter = true,
  fastDuration = 0.1,
  slowDuration = 0.5,
  fastEase = 'power3.out',
  slowEase = 'power1.out',
  zIndex = 100
}) {
  const containerRef = useRef(null);
  const blobsRef = useRef([]);

  const updateOffset = useCallback(() => {
    if (!containerRef.current) return { left: 0, top: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { left: rect.left, top: rect.top };
  }, []);

  const handleMove = useCallback(
    e => {
      const { left, top } = updateOffset();
      const x = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      const y = 'clientY' in e ? e.clientY : e.touches[0].clientY;

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          x: x - left,
          y: y - top,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase
        });
      });
    },
    [updateOffset, fastDuration, slowDuration, fastEase, slowEase]
  );

  useEffect(() => {
    const onResize = () => updateOffset();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [updateOffset]);

  return (
    <div
      ref={containerRef}
      className="blob-container"
      style={{ zIndex }}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {useFilter && (
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={filterStdDeviation} />
            <feColorMatrix in="blur" values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div className="blob-main" style={{ filter: useFilter ? \`url(#\${filterId})\` : undefined }}>
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={el => (blobsRef.current[i] = el)}
            className="blob"
            style={{
              width: sizes[i],
              height: sizes[i],
              borderRadius: blobType === 'circle' ? '50%' : '0%',
              backgroundColor: fillColor,
              opacity: opacities[i],
              boxShadow: \`\${shadowOffsetX}px \${shadowOffsetY}px \${shadowBlur}px 0 \${shadowColor}\`
            }}
          >
            <div
              className="inner-dot"
              style={{
                width: innerSizes[i],
                height: innerSizes[i],
                top: (sizes[i] - innerSizes[i]) / 2,
                left: (sizes[i] - innerSizes[i]) / 2,
                backgroundColor: innerColor,
                borderRadius: blobType === 'circle' ? '50%' : '0%'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
`,K=`.blob-container {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.blob-main {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;
  user-select: none;
  cursor: default;
}

.blob {
  position: absolute;
  will-change: transform;
  transform: translate(-50%, -50%);
}

.inner-dot {
  position: absolute;
}
`,Q=`'use client';

import { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';

export default function BlobCursor({
  blobType = 'circle',
  fillColor = '#5227FF',
  trailCount = 3,
  sizes = [60, 125, 75],
  innerSizes = [20, 35, 25],
  innerColor = 'rgba(255,255,255,0.8)',
  opacities = [0.6, 0.6, 0.6],
  shadowColor = 'rgba(0,0,0,0.75)',
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterId = 'blob',
  filterStdDeviation = 30,
  filterColorMatrixValues = '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10',
  useFilter = true,
  fastDuration = 0.1,
  slowDuration = 0.5,
  fastEase = 'power3.out',
  slowEase = 'power1.out',
  zIndex = 100
}) {
  const containerRef = useRef(null);
  const blobsRef = useRef([]);

  const updateOffset = useCallback(() => {
    if (!containerRef.current) return { left: 0, top: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { left: rect.left, top: rect.top };
  }, []);

  const handleMove = useCallback(
    e => {
      const { left, top } = updateOffset();
      const x = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      const y = 'clientY' in e ? e.clientY : e.touches[0].clientY;

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          x: x - left,
          y: y - top,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase
        });
      });
    },
    [updateOffset, fastDuration, slowDuration, fastEase, slowEase]
  );

  useEffect(() => {
    const onResize = () => updateOffset();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [updateOffset]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      className="relative top-0 left-0 w-full h-full"
      style={{ zIndex }}
    >
      {useFilter && (
        <svg className="absolute w-0 h-0">
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={filterStdDeviation} />
            <feColorMatrix in="blur" values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none cursor-default"
        style={{ filter: useFilter ? \`url(#\${filterId})\` : undefined }}
      >
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={el => (blobsRef.current[i] = el)}
            className="absolute will-change-transform transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: sizes[i],
              height: sizes[i],
              borderRadius: blobType === 'circle' ? '50%' : '0',
              backgroundColor: fillColor,
              opacity: opacities[i],
              boxShadow: \`\${shadowOffsetX}px \${shadowOffsetY}px \${shadowBlur}px 0 \${shadowColor}\`
            }}
          >
            <div
              className="absolute"
              style={{
                width: innerSizes[i],
                height: innerSizes[i],
                top: (sizes[i] - innerSizes[i]) / 2,
                left: (sizes[i] - innerSizes[i]) / 2,
                backgroundColor: innerColor,
                borderRadius: blobType === 'circle' ? '50%' : '0'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
`,ee=`'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import './BlobCursor.css';

export interface BlobCursorProps {
  blobType?: 'circle' | 'square';
  fillColor?: string;
  trailCount?: number;
  sizes?: number[];
  innerSizes?: number[];
  innerColor?: string;
  opacities?: number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  filterId?: string;
  filterStdDeviation?: number;
  filterColorMatrixValues?: string;
  useFilter?: boolean;
  fastDuration?: number;
  slowDuration?: number;
  fastEase?: string;
  slowEase?: string;
  zIndex?: number;
}

export default function BlobCursor({
  blobType = 'circle',
  fillColor = '#5227FF',
  trailCount = 3,
  sizes = [60, 125, 75],
  innerSizes = [20, 35, 25],
  innerColor = 'rgba(255,255,255,0.8)',
  opacities = [0.6, 0.6, 0.6],
  shadowColor = 'rgba(0,0,0,0.75)',
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterId = 'blob',
  filterStdDeviation = 30,
  filterColorMatrixValues = '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10',
  useFilter = true,
  fastDuration = 0.1,
  slowDuration = 0.5,
  fastEase = 'power3.out',
  slowEase = 'power1.out',
  zIndex = 100
}: BlobCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<(HTMLDivElement | null)[]>([]);

  const updateOffset = useCallback(() => {
    if (!containerRef.current) return { left: 0, top: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { left: rect.left, top: rect.top };
  }, []);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      const { left, top } = updateOffset();
      const x = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      const y = 'clientY' in e ? e.clientY : e.touches[0].clientY;

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          x: x - left,
          y: y - top,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase
        });
      });
    },
    [updateOffset, fastDuration, slowDuration, fastEase, slowEase]
  );

  useEffect(() => {
    const onResize = () => updateOffset();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [updateOffset]);

  return (
    <div
      ref={containerRef}
      className="blob-container"
      style={{ zIndex }}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {useFilter && (
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={filterStdDeviation} />
            <feColorMatrix in="blur" values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div className="blob-main" style={{ filter: useFilter ? \`url(#\${filterId})\` : undefined }}>
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={el => {
              blobsRef.current[i] = el;
            }}
            className="blob"
            style={{
              width: sizes[i],
              height: sizes[i],
              borderRadius: blobType === 'circle' ? '50%' : '0%',
              backgroundColor: fillColor,
              opacity: opacities[i],
              boxShadow: \`\${shadowOffsetX}px \${shadowOffsetY}px \${shadowBlur}px 0 \${shadowColor}\`
            }}
          >
            <div
              className="inner-dot"
              style={{
                width: innerSizes[i],
                height: innerSizes[i],
                top: (sizes[i] - innerSizes[i]) / 2,
                left: (sizes[i] - innerSizes[i]) / 2,
                backgroundColor: innerColor,
                borderRadius: blobType === 'circle' ? '50%' : '0%'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
`,te=`'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';

export interface BlobCursorProps {
  blobType?: 'circle' | 'square';
  fillColor?: string;
  trailCount?: number;
  sizes?: number[];
  innerSizes?: number[];
  innerColor?: string;
  opacities?: number[];
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  filterId?: string;
  filterStdDeviation?: number;
  filterColorMatrixValues?: string;
  useFilter?: boolean;
  fastDuration?: number;
  slowDuration?: number;
  fastEase?: string;
  slowEase?: string;
  zIndex?: number;
}

export default function BlobCursor({
  blobType = 'circle',
  fillColor = '#5227FF',
  trailCount = 3,
  sizes = [60, 125, 75],
  innerSizes = [20, 35, 25],
  innerColor = 'rgba(255,255,255,0.8)',
  opacities = [0.6, 0.6, 0.6],
  shadowColor = 'rgba(0,0,0,0.75)',
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterId = 'blob',
  filterStdDeviation = 30,
  filterColorMatrixValues = '1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10',
  useFilter = true,
  fastDuration = 0.1,
  slowDuration = 0.5,
  fastEase = 'power3.out',
  slowEase = 'power1.out',
  zIndex = 100
}: BlobCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<(HTMLDivElement | null)[]>([]);

  const updateOffset = useCallback(() => {
    if (!containerRef.current) return { left: 0, top: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return { left: rect.left, top: rect.top };
  }, []);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
      const { left, top } = updateOffset();
      const x = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      const y = 'clientY' in e ? e.clientY : e.touches[0].clientY;

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;
        gsap.to(el, {
          x: x - left,
          y: y - top,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase
        });
      });
    },
    [updateOffset, fastDuration, slowDuration, fastEase, slowEase]
  );

  useEffect(() => {
    const onResize = () => updateOffset();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [updateOffset]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      className="relative top-0 left-0 w-full h-full"
      style={{ zIndex }}
    >
      {useFilter && (
        <svg className="absolute w-0 h-0">
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={filterStdDeviation} />
            <feColorMatrix in="blur" values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden select-none cursor-default"
        style={{ filter: useFilter ? \`url(#\${filterId})\` : undefined }}
      >
        {Array.from({ length: trailCount }).map((_, i) => (
          <div
            key={i}
            ref={el => {
              blobsRef.current[i] = el;
            }}
            className="absolute will-change-transform transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: sizes[i],
              height: sizes[i],
              borderRadius: blobType === 'circle' ? '50%' : '0',
              backgroundColor: fillColor,
              opacity: opacities[i],
              boxShadow: \`\${shadowOffsetX}px \${shadowOffsetY}px \${shadowBlur}px 0 \${shadowColor}\`
            }}
          >
            <div
              className="absolute"
              style={{
                width: innerSizes[i],
                height: innerSizes[i],
                top: (sizes[i] - innerSizes[i]) / 2,
                left: (sizes[i] - innerSizes[i]) / 2,
                backgroundColor: innerColor,
                borderRadius: blobType === 'circle' ? '50%' : '0'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
`,oe={dependencies:"gsap",usage:`import BlobCursor from './BlobCursor';

<BlobCursor
  blobType="circle"
  fillColor="#5227FF"
  trailCount={3}
  sizes={[60, 125, 75]}
  innerSizes={[20, 35, 25]}
  innerColor="rgba(255,255,255,0.8)"
  opacities={[0.6, 0.6, 0.6]}
  shadowColor="rgba(0,0,0,0.75)"
  shadowBlur={5}
  shadowOffsetX={10}
  shadowOffsetY={10}
  filterStdDeviation={30}
  useFilter={true}
  fastDuration={0.1}
  slowDuration={0.5}
  zIndex={100}
/>`,code:J,css:K,tailwind:Q,tsCode:ee,tsTailwind:te};function se({blobType:m="circle",fillColor:r="#5227FF",trailCount:M=3,sizes:c=[60,125,75],innerSizes:n=[20,35,25],innerColor:z="rgba(255,255,255,0.8)",opacities:d=[.6,.6,.6],shadowColor:l="rgba(0,0,0,0.75)",shadowBlur:a=5,shadowOffsetX:R=10,shadowOffsetY:u=10,filterId:w="blob",filterStdDeviation:S=30,filterColorMatrixValues:D="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10",useFilter:x=!0,fastDuration:C=.1,slowDuration:g=.5,fastEase:v="power3.out",slowEase:E="power1.out",zIndex:y=100}){const t=h.useRef(null),p=h.useRef([]),f=h.useCallback(()=>{if(!t.current)return{left:0,top:0};const o=t.current.getBoundingClientRect();return{left:o.left,top:o.top}},[]),b=h.useCallback(o=>{const{left:s,top:B}=f(),F="clientX"in o?o.clientX:o.touches[0].clientX,I="clientY"in o?o.clientY:o.touches[0].clientY;p.current.forEach((T,k)=>{if(!T)return;const j=k===0;X.to(T,{x:F-s,y:I-B,duration:j?C:g,ease:j?v:E})})},[f,C,g,v,E]);return h.useEffect(()=>{const o=()=>f();return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[f]),e.jsxs("div",{ref:t,onMouseMove:b,onTouchMove:b,className:"relative top-0 left-0 w-full h-full",style:{zIndex:y},children:[x&&e.jsx("svg",{className:"absolute w-0 h-0",children:e.jsxs("filter",{id:w,children:[e.jsx("feGaussianBlur",{in:"SourceGraphic",result:"blur",stdDeviation:S}),e.jsx("feColorMatrix",{in:"blur",values:D})]})}),e.jsx("div",{className:"pointer-events-none absolute inset-0 overflow-hidden select-none cursor-default",style:{filter:x?`url(#${w})`:void 0},children:Array.from({length:M}).map((o,s)=>e.jsx("div",{ref:B=>{p.current[s]=B},className:"absolute will-change-transform transform -translate-x-1/2 -translate-y-1/2",style:{width:c[s],height:c[s],borderRadius:m==="circle"?"50%":"0",backgroundColor:r,opacity:d[s],boxShadow:`${R}px ${u}px ${a}px 0 ${l}`},children:e.jsx("div",{className:"absolute",style:{width:n[s],height:n[s],top:(c[s]-n[s])/2,left:(c[s]-n[s])/2,backgroundColor:z,borderRadius:m==="circle"?"50%":"0"}})},s))})]})}const L={blobType:"circle",fillColor:"#5227FF",trailCount:3,sizes:[60,125,75],innerSizes:[20,35,25],innerColor:"rgba(255,255,255,0.8)",opacities:[.6,.6,.6],shadowColor:"rgba(0,0,0,0.75)",shadowBlur:5,shadowOffsetX:10,shadowOffsetY:10,fastDuration:.1,slowDuration:.5,zIndex:100},ce=()=>{const{props:m,updateProp:r,resetProps:M,hasChanges:c}=G(L),{blobType:n,fillColor:z,trailCount:d,sizes:l,innerSizes:a,innerColor:R,opacities:u,shadowColor:w,shadowBlur:S,shadowOffsetX:D,shadowOffsetY:x,fastDuration:C,slowDuration:g,zIndex:v}=m,E=h.useMemo(()=>[{name:"blobType",type:"'circle' | 'square'",default:"'circle'",description:"Shape of the blobs."},{name:"fillColor",type:"string",default:"'#5227FF'",description:"Background color of each blob."},{name:"trailCount",type:"number",default:"3",description:"How many trailing blobs."},{name:"sizes",type:"number[]",default:"[60, 125, 75]",description:"Sizes (px) of each blob. Length must be ≥ trailCount."},{name:"innerSizes",type:"number[]",default:"[20, 35, 25]",description:"Sizes (px) of inner dots. Length must be ≥ trailCount."},{name:"innerColor",type:"string",default:"'rgba(255,255,255,0.8)'",description:"Background color of the inner dot."},{name:"opacities",type:"number[]",default:"[0.6, 0.6, 0.6]",description:"Opacity of each blob. Length ≥ trailCount."},{name:"shadowColor",type:"string",default:"'rgba(0,0,0,0.75)'",description:"Box-shadow color."},{name:"shadowBlur",type:"number",default:"5",description:"Box-shadow blur radius (px)."},{name:"shadowOffsetX",type:"number",default:"10",description:"Box-shadow X offset (px)."},{name:"shadowOffsetY",type:"number",default:"10",description:"Box-shadow Y offset (px)."},{name:"filterId",type:"string",default:"'blob'",description:"Optional custom filter ID (for multiple instances)."},{name:"filterStdDeviation",type:"number",default:"30",description:"feGaussianBlur stdDeviation for SVG filter."},{name:"filterColorMatrixValues",type:"string",default:"'1 0 0 ...'",description:"feColorMatrix values for SVG filter."},{name:"useFilter",type:"boolean",default:"true",description:"Enable the SVG filter."},{name:"fastDuration",type:"number",default:"0.1",description:"GSAP duration for the lead blob."},{name:"slowDuration",type:"number",default:"0.5",description:"GSAP duration for the following blobs."},{name:"fastEase",type:"string",default:"'power3.out'",description:"GSAP ease for the lead blob."},{name:"slowEase",type:"string",default:"'power1.out'",description:"GSAP ease for the following blobs."},{name:"zIndex",type:"number",default:"100",description:"CSS z-index of the whole component."}],[]),y=(t,p,f,b)=>{const o=[...b];o[p]=t,r(f,o)};return e.jsx(A,{props:m,defaultProps:L,resetProps:M,hasChanges:c,children:e.jsxs(V,{children:[e.jsxs(_,{children:[e.jsx(Y,{height:600,position:"relative",className:"demo-container",overflow:"hidden",children:e.jsx(se,{blobType:n,fillColor:z,trailCount:d,sizes:l,innerSizes:a,innerColor:R,opacities:u,shadowColor:w,shadowBlur:S,shadowOffsetX:D,shadowOffsetY:x,fastDuration:C,slowDuration:g,zIndex:v})}),e.jsxs(W,{children:[e.jsxs(N,{mb:2,fontSize:"xs",bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:8,onClick:()=>r("blobType",n==="circle"?"square":"circle"),children:["Blob Type: ",e.jsxs($,{color:"#a1a1aa",children:[" ",n]})]}),e.jsxs(O,{direction:"column",mt:2,children:[e.jsxs(O,{alignItems:"center",fontSize:"xs",h:8,children:["Fill Color:  ",e.jsx("input",{type:"color",value:z,style:{height:"22px",outline:"none",border:"1px solid #999",width:"50px",background:"transparent"},onChange:t=>r("fillColor",t.target.value)})]}),e.jsxs(O,{alignItems:"center",fontSize:"xs",h:8,children:["Inner Color:  ",e.jsx("input",{type:"color",value:R,style:{height:"22px",outline:"none",border:"1px solid #999",width:"50px",background:"transparent"},onChange:t=>r("innerColor",t.target.value)})]}),e.jsxs(O,{alignItems:"center",fontSize:"xs",h:8,children:["Shadow Color:  ",e.jsx("input",{type:"color",value:w,style:{height:"22px",outline:"none",border:"1px solid #999",width:"50px",background:"transparent"},onChange:t=>r("shadowColor",t.target.value)})]})]}),e.jsx(i,{title:"Trail Count",min:1,max:5,step:1,value:d,onChange:t=>{r("trailCount",t);const p=Array(t).fill(0).map((o,s)=>l[s]||l[l.length-1]||60),f=Array(t).fill(0).map((o,s)=>a[s]||a[a.length-1]||20),b=Array(t).fill(0).map((o,s)=>u[s]||u[u.length-1]||.6);r("sizes",p),r("innerSizes",f),r("opacities",b)}}),e.jsx(i,{title:"Lead Blob Size",min:10,max:200,step:1,value:l[0],onChange:t=>y(t,0,"sizes",l),isDisabled:d<1}),e.jsx(i,{title:"Lead Inner Dot Size",min:1,max:100,step:1,value:a[0],onChange:t=>y(t,0,"innerSizes",a),isDisabled:d<1}),e.jsx(i,{title:"Lead Blob Opacity",min:.1,max:1,step:.05,value:u[0],onChange:t=>y(t,0,"opacities",u),isDisabled:d<1}),e.jsx(i,{title:"Shadow Blur",min:0,max:50,step:1,value:S,onChange:t=>r("shadowBlur",t)}),e.jsx(i,{title:"Shadow Offset X",min:-50,max:50,step:1,value:D,onChange:t=>r("shadowOffsetX",t)}),e.jsx(i,{title:"Shadow Offset Y",min:-50,max:50,step:1,value:x,onChange:t=>r("shadowOffsetY",t)}),e.jsx(i,{title:"Fast Duration (Lead)",min:.01,max:2,step:.01,value:C,onChange:t=>r("fastDuration",t)}),e.jsx(i,{title:"Slow Duration (Trail)",min:.01,max:3,step:.01,value:g,onChange:t=>r("slowDuration",t)}),e.jsx(i,{title:"Z-Index",min:0,max:1e3,step:10,value:v,onChange:t=>r("zIndex",t)})]}),e.jsxs("p",{className:"demo-extra-info",style:{marginTop:"20px"},children:[e.jsx(P,{position:"relative",top:"-1px",mr:"2"})," SVG filters are not fully supported on Safari. Performance may vary."]}),e.jsx(H,{data:E}),e.jsx(U,{dependencyList:["gsap"]})]}),e.jsx(q,{children:e.jsx(Z,{codeObject:oe,componentName:"BlobCursor"})})]})})};export{ce as default};
