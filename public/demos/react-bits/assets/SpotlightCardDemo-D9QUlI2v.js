import{r as h,j as e,B as c,F as l,I as d,a as t}from"./index-CKqfvLoB.js";import{d as v}from"./index-BrJXWomz.js";import{b as x}from"./index-pcIC2ubp.js";import{u as y,C as b,T as C,P as M,a as R,b as S,c as P}from"./PropTable-BzD4cJVp.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";const u=({children:o,className:s="",spotlightColor:r="rgba(255, 255, 255, 0.25)"})=>{const n=h.useRef(null),m=a=>{const i=n.current.getBoundingClientRect(),f=a.clientX-i.left,g=a.clientY-i.top;n.current.style.setProperty("--mouse-x",`${f}px`),n.current.style.setProperty("--mouse-y",`${g}px`),n.current.style.setProperty("--spotlight-color",r)};return e.jsx("div",{ref:n,onMouseMove:m,className:`card-spotlight ${s}`,children:o})},j=`import { useRef } from 'react';
import './SpotlightCard.css';

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(255, 255, 255, 0.25)' }) => {
  const divRef = useRef(null);

  const handleMouseMove = e => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', \`\${x}px\`);
    divRef.current.style.setProperty('--mouse-y', \`\${y}px\`);
    divRef.current.style.setProperty('--spotlight-color', spotlightColor);
  };

  return (
    <div ref={divRef} onMouseMove={handleMouseMove} className={\`card-spotlight \${className}\`}>
      {children}
    </div>
  );
};

export default SpotlightCard;
`,N=`.card-spotlight {
  position: relative;
  border-radius: 1.5rem;
  border: 1px solid #222;
  background-color: #111;
  padding: 2rem;
  overflow: hidden;
  --mouse-x: 50%;
  --mouse-y: 50%;
  --spotlight-color: rgba(255, 255, 255, 0.05);
}

.card-spotlight::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 80%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.card-spotlight:hover::before,
.card-spotlight:focus-within::before {
  opacity: 0.6;
}
`,$=`import { useRef, useState } from 'react';

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(255, 255, 255, 0.25)' }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = e => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={\`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-8 \${className}\`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: \`radial-gradient(circle at \${position.x}px \${position.y}px, \${spotlightColor}, transparent 80%)\`
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
`,F=`import React, { useRef } from 'react';
import './SpotlightCard.css';

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: \`rgba(\${number}, \${number}, \${number}, \${number})\`;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(255, 255, 255, 0.25)'
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', \`\${x}px\`);
    divRef.current.style.setProperty('--mouse-y', \`\${y}px\`);
    divRef.current.style.setProperty('--spotlight-color', spotlightColor);
  };

  return (
    <div ref={divRef} onMouseMove={handleMouseMove} className={\`card-spotlight \${className}\`}>
      {children}
    </div>
  );
};

export default SpotlightCard;
`,E=`import React, { useRef, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: \`rgba(\${number}, \${number}, \${number}, \${number})\`;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(255, 255, 255, 0.25)'
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = e => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={\`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-8 \${className}\`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: \`radial-gradient(circle at \${position.x}px \${position.y}px, \${spotlightColor}, transparent 80%)\`
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
`,B={usage:`import SpotlightCard from './SpotlightCard';
  
<SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
  // Content goes here
</SpotlightCard>`,code:j,css:N,tailwind:$,tsCode:F,tsTailwind:E},p={},k=()=>{const{props:o,resetProps:s,hasChanges:r}=y(p),n=h.useMemo(()=>[{name:"spotlightColor",type:"string",default:"rgba(255, 255, 255, 0.25)",description:"Controls the color of the radial gradient used for the spotlight effect."},{name:"className",type:"string",default:"",description:"Allows adding custom classes to the component."}],[]);return e.jsx(b,{props:o,defaultProps:p,resetProps:s,hasChanges:r,children:e.jsxs(C,{children:[e.jsxs(M,{children:[e.jsx(c,{position:"relative",className:"demo-container",py:10,children:e.jsx(u,{className:"custom-spotlight-card",children:e.jsxs(l,{h:"100%",direction:"column",alignItems:"flex-start",justifyContent:"center",children:[e.jsx(d,{mb:3,boxSize:12,as:v}),e.jsx(t,{fontWeight:600,fontSize:"1.4rem",letterSpacing:"-.5px",children:"Boost Your Experience"}),e.jsx(t,{color:"#a1a1aa",fontSize:"14px",mt:1,mb:8,children:"Get exclusive benefits, features & 24/7 support as a permanent club member."})]})})}),e.jsx("h2",{className:"demo-title-extra",children:"Custom Color"}),e.jsx(c,{position:"relative",className:"demo-container",py:10,children:e.jsx(u,{className:"custom-spotlight-card",spotlightColor:"purple",children:e.jsxs(l,{h:"100%",direction:"column",alignItems:"flex-start",justifyContent:"center",children:[e.jsx(d,{mb:3,boxSize:8,as:x}),e.jsx(t,{fontWeight:600,fontSize:"1.4rem",letterSpacing:"-.5px",children:"Enhanced Security"}),e.jsx(t,{color:"#a1a1aa",fontSize:"14px",mt:1,mb:8,children:"Our state of the art software offers peace of mind through strict security measures."})]})})}),e.jsx(R,{data:n})]}),e.jsx(S,{children:e.jsx(P,{codeObject:B,componentName:"SpotlightCard"})})]})})};export{k as default};
