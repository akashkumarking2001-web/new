import{r as i,j as t,cd as j,bL as L,B as N,a as S}from"./index-CKqfvLoB.js";import{u as k,C as B,T as q,P as H,a as z,b as U,c as W}from"./PropTable-BzD4cJVp.js";import{C as _}from"./Customize-BaUKAf5J.js";import{P as C}from"./PreviewSwitch-B0BSuWrO.js";import{D as G}from"./Dependencies-DmSBXzNX.js";import{u as J}from"./useForceRerender-0lK0qxlp.js";import{P as K}from"./PreviewInput-DCB3qWzS.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./switch-CqqRi5Az.js";import"./field-DGUMYGrq.js";const Q=({text:d="⚛️",spacing:r=100,followMouseDirection:h=!0,randomFloat:o=!0,exitDuration:p=.5,removalInterval:c=30,maxPoints:m=5})=>{const[y,u]=i.useState([]),s=i.useRef(null),a=i.useRef(Date.now()),T=i.useRef(0),M=e=>{if(!s.current)return;const l=s.current.getBoundingClientRect(),R=e.clientX-l.left,I=e.clientY-l.top,D=()=>o?{randomX:Math.random()*10-5,randomY:Math.random()*10-5,randomRotate:Math.random()*10-5}:{};u(X=>{const n=[...X];if(n.length===0)n.push({id:T.current++,x:R,y:I,angle:0,...D()});else{const f=n[n.length-1],x=R-f.x,v=I-f.y,g=Math.sqrt(x*x+v*v);if(g>=r){let Y=Math.atan2(v,x)*180/Math.PI;const A=h?Y:0,E=Math.floor(g/r);for(let w=1;w<=E;w++){const b=r*w/g,F=f.x+x*b,O=f.y+v*b;n.push({id:T.current++,x:F,y:O,angle:A,...D()})}}}return n.length>m?n.slice(n.length-m):n}),a.current=Date.now()};return i.useEffect(()=>{const e=s.current;if(e)return e.addEventListener("mousemove",M),()=>e.removeEventListener("mousemove",M)},[]),i.useEffect(()=>{const e=setInterval(()=>{Date.now()-a.current>100&&u(l=>l.length>0?l.slice(1):l)},c);return()=>clearInterval(e)},[c]),t.jsx("div",{ref:s,className:"text-cursor-container",children:t.jsx("div",{className:"text-cursor-inner",children:t.jsx(j,{children:y.map(e=>t.jsx(L.div,{initial:{opacity:0,scale:1,rotate:e.angle},animate:{opacity:1,scale:1,x:o?[0,e.randomX||0,0]:0,y:o?[0,e.randomY||0,0]:0,rotate:o?[e.angle,e.angle+(e.randomRotate||0),e.angle]:e.angle},exit:{opacity:0,scale:0},transition:{opacity:{duration:p,ease:"easeOut"},...o&&{x:{duration:2,ease:"easeInOut",repeat:1/0,repeatType:"mirror"},y:{duration:2,ease:"easeInOut",repeat:1/0,repeatType:"mirror"},rotate:{duration:2,ease:"easeInOut",repeat:1/0,repeatType:"mirror"}}},className:"text-cursor-item",style:{left:e.x,top:e.y},children:d},e.id))})})})},V=`import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './TextCursor.css';

const TextCursor = ({
  text = '⚛️',
  spacing = 100,
  followMouseDirection = true,
  randomFloat = true,
  exitDuration = 0.5,
  removalInterval = 30,
  maxPoints = 5
}) => {
  const [trail, setTrail] = useState([]);
  const containerRef = useRef(null);
  const lastMoveTimeRef = useRef(Date.now());
  const idCounter = useRef(0);

  const handleMouseMove = e => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const createRandomData = () =>
      randomFloat
        ? {
            randomX: Math.random() * 10 - 5,
            randomY: Math.random() * 10 - 5,
            randomRotate: Math.random() * 10 - 5
          }
        : {};

    setTrail(prev => {
      const newTrail = [...prev];

      if (newTrail.length === 0) {
        newTrail.push({
          id: idCounter.current++,
          x: mouseX,
          y: mouseY,
          angle: 0,
          ...createRandomData()
        });
      } else {
        const last = newTrail[newTrail.length - 1];
        const dx = mouseX - last.x;
        const dy = mouseY - last.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance >= spacing) {
          let rawAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
          const computedAngle = followMouseDirection ? rawAngle : 0;
          const steps = Math.floor(distance / spacing);

          for (let i = 1; i <= steps; i++) {
            const t = (spacing * i) / distance;
            const newX = last.x + dx * t;
            const newY = last.y + dy * t;

            newTrail.push({
              id: idCounter.current++,
              x: newX,
              y: newY,
              angle: computedAngle,
              ...createRandomData()
            });
          }
        }
      }

      return newTrail.length > maxPoints ? newTrail.slice(newTrail.length - maxPoints) : newTrail;
    });

    lastMoveTimeRef.current = Date.now();
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMoveTimeRef.current > 100) {
        setTrail(prev => (prev.length > 0 ? prev.slice(1) : prev));
      }
    }, removalInterval);
    return () => clearInterval(interval);
  }, [removalInterval]);

  return (
    <div ref={containerRef} className="text-cursor-container">
      <div className="text-cursor-inner">
        <AnimatePresence>
          {trail.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 1, rotate: item.angle }}
              animate={{
                opacity: 1,
                scale: 1,
                x: randomFloat ? [0, item.randomX || 0, 0] : 0,
                y: randomFloat ? [0, item.randomY || 0, 0] : 0,
                rotate: randomFloat ? [item.angle, item.angle + (item.randomRotate || 0), item.angle] : item.angle
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                opacity: { duration: exitDuration, ease: 'easeOut' },
                ...(randomFloat && {
                  x: { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
                  y: { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
                  rotate: { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }
                })
              }}
              className="text-cursor-item"
              style={{ left: item.x, top: item.y }}
            >
              {text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextCursor;
`,Z=`.text-cursor-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.text-cursor-inner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.text-cursor-item {
  position: absolute;
  user-select: none;
  white-space: nowrap;
  font-size: 1.875rem;
}
`,$=`import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const TextCursor = ({
  text = '⚛️',
  spacing = 100,
  followMouseDirection = true,
  randomFloat = true,
  exitDuration = 0.5,
  removalInterval = 30,
  maxPoints = 5
}) => {
  const [trail, setTrail] = useState([]);
  const containerRef = useRef(null);
  const lastMoveTimeRef = useRef(Date.now());
  const idCounter = useRef(0);

  const handleMouseMove = e => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const createRandomData = () =>
      randomFloat
        ? {
            randomX: Math.random() * 10 - 5,
            randomY: Math.random() * 10 - 5,
            randomRotate: Math.random() * 10 - 5
          }
        : {};

    setTrail(prev => {
      const newTrail = [...prev];

      if (newTrail.length === 0) {
        newTrail.push({
          id: idCounter.current++,
          x: mouseX,
          y: mouseY,
          angle: 0,
          ...createRandomData()
        });
      } else {
        const last = newTrail[newTrail.length - 1];
        const dx = mouseX - last.x;
        const dy = mouseY - last.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance >= spacing) {
          let rawAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
          const computedAngle = followMouseDirection ? rawAngle : 0;
          const steps = Math.floor(distance / spacing);

          for (let i = 1; i <= steps; i++) {
            const t = (spacing * i) / distance;
            const newX = last.x + dx * t;
            const newY = last.y + dy * t;

            newTrail.push({
              id: idCounter.current++,
              x: newX,
              y: newY,
              angle: computedAngle,
              ...createRandomData()
            });
          }
        }
      }

      return newTrail.length > maxPoints ? newTrail.slice(newTrail.length - maxPoints) : newTrail;
    });

    lastMoveTimeRef.current = Date.now();
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMoveTimeRef.current > 100) {
        setTrail(prev => (prev.length > 0 ? prev.slice(1) : prev));
      }
    }, removalInterval);
    return () => clearInterval(interval);
  }, [removalInterval]);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {trail.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 1, rotate: item.angle }}
              animate={{
                opacity: 1,
                scale: 1,
                x: randomFloat ? [0, item.randomX || 0, 0] : 0,
                y: randomFloat ? [0, item.randomY || 0, 0] : 0,
                rotate: randomFloat ? [item.angle, item.angle + (item.randomRotate || 0), item.angle] : item.angle
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                opacity: { duration: exitDuration, ease: 'easeOut' },
                ...(randomFloat && {
                  x: { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
                  y: { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
                  rotate: { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }
                })
              }}
              className="absolute select-none whitespace-nowrap text-3xl"
              style={{ left: item.x, top: item.y }}
            >
              {text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextCursor;
`,ee=`import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './TextCursor.css';

interface TextCursorProps {
  text: string;
  spacing?: number;
  followMouseDirection?: boolean;
  randomFloat?: boolean;
  exitDuration?: number;
  removalInterval?: number;
  maxPoints?: number;
}

interface TrailItem {
  id: number;
  x: number;
  y: number;
  angle: number;
  randomX?: number;
  randomY?: number;
  randomRotate?: number;
}

const TextCursor: React.FC<TextCursorProps> = ({
  text = '⚛️',
  spacing = 100,
  followMouseDirection = true,
  randomFloat = true,
  exitDuration = 0.5,
  removalInterval = 30,
  maxPoints = 5
}) => {
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastMoveTimeRef = useRef<number>(Date.now());
  const idCounter = useRef<number>(0);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setTrail(prev => {
      const newTrail = [...prev];

      const createRandomData = () =>
        randomFloat
          ? {
              randomX: Math.random() * 10 - 5,
              randomY: Math.random() * 10 - 5,
              randomRotate: Math.random() * 10 - 5
            }
          : {};

      if (newTrail.length === 0) {
        newTrail.push({
          id: idCounter.current++,
          x: mouseX,
          y: mouseY,
          angle: 0,
          ...createRandomData()
        });
      } else {
        const last = newTrail[newTrail.length - 1];
        const dx = mouseX - last.x;
        const dy = mouseY - last.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance >= spacing) {
          let rawAngle = (Math.atan2(dy, dx) * 180) / Math.PI;

          const computedAngle = followMouseDirection ? rawAngle : 0;
          const steps = Math.floor(distance / spacing);

          for (let i = 1; i <= steps; i++) {
            const t = (spacing * i) / distance;
            const newX = last.x + dx * t;
            const newY = last.y + dy * t;

            newTrail.push({
              id: idCounter.current++,
              x: newX,
              y: newY,
              angle: computedAngle,
              ...createRandomData()
            });
          }
        }
      }

      if (newTrail.length > maxPoints) {
        return newTrail.slice(newTrail.length - maxPoints);
      }
      return newTrail;
    });

    lastMoveTimeRef.current = Date.now();
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [containerRef.current]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMoveTimeRef.current > 100) {
        setTrail(prev => (prev.length > 0 ? prev.slice(1) : prev));
      }
    }, removalInterval);
    return () => clearInterval(interval);
  }, [removalInterval]);

  return (
    <div ref={containerRef} className="text-cursor-container">
      <div className="text-cursor-inner">
        <AnimatePresence>
          {trail.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 1, rotate: item.angle }}
              animate={{
                opacity: 1,
                scale: 1,
                x: randomFloat ? [0, item.randomX || 0, 0] : 0,
                y: randomFloat ? [0, item.randomY || 0, 0] : 0,
                rotate: randomFloat ? [item.angle, item.angle + (item.randomRotate || 0), item.angle] : item.angle
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                opacity: { duration: exitDuration, ease: 'easeOut' },
                ...(randomFloat && {
                  x: { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
                  y: { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' },
                  rotate: { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'mirror' }
                })
              }}
              className="text-cursor-item"
              style={{ left: item.x, top: item.y }}
            >
              {text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextCursor;
`,te=`import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TextCursorProps {
  text: string;
  spacing?: number;
  followMouseDirection?: boolean;
  randomFloat?: boolean;
  exitDuration?: number;
  removalInterval?: number;
  maxPoints?: number;
}

interface TrailItem {
  id: number;
  x: number;
  y: number;
  angle: number;
  randomX?: number;
  randomY?: number;
  randomRotate?: number;
}

const TextCursor: React.FC<TextCursorProps> = ({
  text = '⚛️',
  spacing = 100,
  followMouseDirection = true,
  randomFloat = true,
  exitDuration = 0.5,
  removalInterval = 30,
  maxPoints = 5
}) => {
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastMoveTimeRef = useRef<number>(Date.now());
  const idCounter = useRef<number>(0);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setTrail(prev => {
      let newTrail = [...prev];
      if (newTrail.length === 0) {
        newTrail.push({
          id: idCounter.current++,
          x: mouseX,
          y: mouseY,
          angle: 0,
          ...(randomFloat && {
            randomX: Math.random() * 10 - 5,
            randomY: Math.random() * 10 - 5,
            randomRotate: Math.random() * 10 - 5
          })
        });
      } else {
        const last = newTrail[newTrail.length - 1];
        const dx = mouseX - last.x;
        const dy = mouseY - last.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance >= spacing) {
          let rawAngle = (Math.atan2(dy, dx) * 180) / Math.PI;

          rawAngle = ((rawAngle + 180) % 360) - 180;

          const computedAngle = followMouseDirection ? rawAngle : 0;
          const steps = Math.floor(distance / spacing);
          for (let i = 1; i <= steps; i++) {
            const t = (spacing * i) / distance;
            const newX = last.x + dx * t;
            const newY = last.y + dy * t;
            newTrail.push({
              id: idCounter.current++,
              x: newX,
              y: newY,
              angle: computedAngle,
              ...(randomFloat && {
                randomX: Math.random() * 10 - 5,
                randomY: Math.random() * 10 - 5,
                randomRotate: Math.random() * 10 - 5
              })
            });
          }
        }
      }
      if (newTrail.length > maxPoints) {
        newTrail = newTrail.slice(newTrail.length - maxPoints);
      }
      return newTrail;
    });
    lastMoveTimeRef.current = Date.now();
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [containerRef.current]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMoveTimeRef.current > 100) {
        setTrail(prev => (prev.length > 0 ? prev.slice(1) : prev));
      }
    }, removalInterval);
    return () => clearInterval(interval);
  }, [removalInterval]);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {trail.map(item => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 1, rotate: item.angle }}
              animate={{
                opacity: 1,
                scale: 1,
                x: randomFloat ? [0, item.randomX || 0, 0] : 0,
                y: randomFloat ? [0, item.randomY || 0, 0] : 0,
                rotate: randomFloat ? [item.angle, item.angle + (item.randomRotate || 0), item.angle] : item.angle
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                opacity: { duration: exitDuration, ease: 'easeOut' },

                ...(randomFloat && {
                  x: {
                    duration: 2,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'mirror'
                  },
                  y: {
                    duration: 2,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'mirror'
                  },
                  rotate: {
                    duration: 2,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'mirror'
                  }
                })
              }}
              className="absolute select-none whitespace-nowrap text-3xl"
              style={{ left: item.x, top: item.y }}
            >
              {text}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextCursor;
`,ne={dependencies:"motion",usage:`import TextCursor from './TextCursor';

<TextCursor
  text="Hello!"
  spacing={80}
  followMouseDirection={true}
  randomFloat={true}
  exitDuration={0.3}
  removalInterval={20}
  maxPoints={10}
/>`,code:V,css:Z,tailwind:$,tsCode:ee,tsTailwind:te},P={text:"⚛️",followMouseDirection:!0,randomFloat:!0},fe=()=>{const{props:d,updateProp:r,resetProps:h,hasChanges:o}=k(P),{text:p,followMouseDirection:c,randomFloat:m}=d,[y,u]=J(),s=i.useMemo(()=>[{name:"text",type:"string",default:"⚛️",description:"The text string to display as the trail."},{name:"spacing",type:"number",default:"100",description:"The spacing in pixels between each trail point."},{name:"followMouseDirection",type:"boolean",default:"true",description:"If true, each text rotates to follow the mouse direction."},{name:"randomFloat",type:"boolean",default:"true",description:"If true, enables random floating offsets in position and rotation for a dynamic effect."},{name:"exitDuration",type:"number",default:"0.5",description:"The duration in seconds for the exit animation of each trail item."},{name:"removalInterval",type:"number",default:"30",description:"The interval in milliseconds between removing trail items when the mouse stops moving."},{name:"maxPoints",type:"number",default:"5",description:"The maximum number of trail points to display."}],[]);return t.jsx(B,{props:d,defaultProps:P,resetProps:h,hasChanges:o,children:t.jsxs(q,{children:[t.jsxs(H,{children:[t.jsxs(N,{position:"relative",className:"demo-container",h:400,overflow:"hidden",children:[t.jsx(Q,{text:p,followMouseDirection:c,randomFloat:m},y),t.jsx(S,{pointerEvents:"none",position:"absolute",textAlign:"center",fontSize:"4rem",fontWeight:900,userSelect:"none",color:"#271E37",children:"Hover Around!"})]}),t.jsxs(_,{children:[t.jsx(K,{title:"Text",value:p,placeholder:"Enter text...",width:160,maxLength:10,onChange:a=>r("text",a)}),t.jsx(C,{title:"Follow Mouse Direction",isChecked:c,onChange:a=>{r("followMouseDirection",a),u()}}),t.jsx(C,{title:"Enable Random Floating",isChecked:m,onChange:a=>{r("randomFloat",a),u()}})]}),t.jsx(z,{data:s}),t.jsx(G,{dependencyList:["motion"]})]}),t.jsx(U,{children:t.jsx(W,{codeObject:ne,componentName:"TextCursor"})})]})})};export{fe as default};
