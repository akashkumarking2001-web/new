import{r as y,j as n,F as S}from"./index-CKqfvLoB.js";import{u as E,C as $,T as A,P as N,a as T,b as H,c as z}from"./PropTable-BzD4cJVp.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";function I({rows:t=9,columns:i=9,containerSize:s="80vmin",lineColor:c="#efefef",lineWidth:l="1vmin",lineHeight:m="6vmin",baseAngle:d=-10,className:g="",style:p={}}){const v=y.useRef(null);y.useEffect(()=>{const h=v.current;if(!h)return;const e=h.querySelectorAll("span"),f=r=>{e.forEach(o=>{const a=o.getBoundingClientRect(),C=a.x+a.width/2,w=a.y+a.height/2,u=r.x-C,M=r.y-w,R=Math.sqrt(M*M+u*u)||1,L=Math.acos(u/R)*180/Math.PI*(r.y>w?1:-1);o.style.setProperty("--rotate",`${L}deg`)})};if(window.addEventListener("pointermove",f),e.length){const r=Math.floor(e.length/2),o=e[r].getBoundingClientRect();f({x:o.x,y:o.y})}return()=>{window.removeEventListener("pointermove",f)}},[]);const x=t*i,P=Array.from({length:x},(h,e)=>n.jsx("span",{style:{"--rotate":`${d}deg`,backgroundColor:c,width:l,height:m}},e));return n.jsx("div",{ref:v,className:`magnetLines-container ${g}`,style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${t}, 1fr)`,width:s,height:s,...p},children:P})}const j=`import { useRef, useEffect } from 'react';
import './MagnetLines.css';

export default function MagnetLines({
  rows = 9,
  columns = 9,
  containerSize = '80vmin',
  lineColor = '#efefef',
  lineWidth = '1vmin',
  lineHeight = '6vmin',
  baseAngle = -10,
  className = '',
  style = {}
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll('span');

    const onPointerMove = pointer => {
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r = ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);

        item.style.setProperty('--rotate', \`\${r}deg\`);
      });
    };

    window.addEventListener('pointermove', onPointerMove);

    if (items.length) {
      const middleIndex = Math.floor(items.length / 2);
      const rect = items[middleIndex].getBoundingClientRect();
      onPointerMove({ x: rect.x, y: rect.y });
    }

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  const total = rows * columns;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      style={{
        '--rotate': \`\${baseAngle}deg\`,
        backgroundColor: lineColor,
        width: lineWidth,
        height: lineHeight
      }}
    />
  ));

  return (
    <div
      ref={containerRef}
      className={\`magnetLines-container \${className}\`}
      style={{
        display: 'grid',
        gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
        gridTemplateRows: \`repeat(\${rows}, 1fr)\`,
        width: containerSize,
        height: containerSize,
        ...style
      }}
    >
      {spans}
    </div>
  );
}
`,W=`.magnetLines-container {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);

  justify-items: center;
  align-items: center;

  width: 80vmin;
  height: 80vmin;
}

.magnetLines-container span {
  display: block;
  transform-origin: center;
  will-change: transform;
  transform: rotate(var(--rotate));
}
`,k=`import { useRef, useEffect } from 'react';

export default function MagnetLines({
  rows = 9,
  columns = 9,
  containerSize = '80vmin',
  lineColor = '#efefef',
  lineWidth = '1vmin',
  lineHeight = '6vmin',
  baseAngle = -10,
  className = '',
  style = {}
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll('span');

    const onPointerMove = pointer => {
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r = ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);

        item.style.setProperty('--rotate', \`\${r}deg\`);
      });
    };

    window.addEventListener('pointermove', onPointerMove);

    if (items.length) {
      const middleIndex = Math.floor(items.length / 2);
      const rect = items[middleIndex].getBoundingClientRect();
      onPointerMove({ x: rect.x, y: rect.y });
    }

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  const total = rows * columns;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      className="block origin-center"
      style={{
        backgroundColor: lineColor,
        width: lineWidth,
        height: lineHeight,
        '--rotate': \`\${baseAngle}deg\`,
        transform: 'rotate(var(--rotate))',
        willChange: 'transform'
      }}
    />
  ));

  return (
    <div
      ref={containerRef}
      className={\`grid place-items-center \${className}\`}
      style={{
        gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
        gridTemplateRows: \`repeat(\${rows}, 1fr)\`,
        width: containerSize,
        height: containerSize,
        ...style
      }}
    >
      {spans}
    </div>
  );
}
`,Y=`import React, { useRef, useEffect, CSSProperties } from 'react';
import './MagnetLines.css';

interface MagnetLinesProps {
  rows?: number;
  columns?: number;
  containerSize?: string;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
  className?: string;
  style?: CSSProperties;
}

const MagnetLines: React.FC<MagnetLinesProps> = ({
  rows = 9,
  columns = 9,
  containerSize = '80vmin',
  lineColor = '#efefef',
  lineWidth = '1vmin',
  lineHeight = '6vmin',
  baseAngle = -10,
  className = '',
  style = {}
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLSpanElement>('span');

    const onPointerMove = (pointer: { x: number; y: number }) => {
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r = ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);

        item.style.setProperty('--rotate', \`\${r}deg\`);
      });
    };

    const handlePointerMove = (e: PointerEvent) => {
      onPointerMove({ x: e.x, y: e.y });
    };

    window.addEventListener('pointermove', handlePointerMove);

    if (items.length) {
      const middleIndex = Math.floor(items.length / 2);
      const rect = items[middleIndex].getBoundingClientRect();
      onPointerMove({ x: rect.x, y: rect.y });
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  const total = rows * columns;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      style={
        {
          '--rotate': \`\${baseAngle}deg\`,
          backgroundColor: lineColor,
          width: lineWidth,
          height: lineHeight
        } as CSSProperties
      }
    />
  ));

  return (
    <div
      ref={containerRef}
      className={\`magnetLines-container \${className}\`}
      style={{
        display: 'grid',
        gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
        gridTemplateRows: \`repeat(\${rows}, 1fr)\`,
        width: containerSize,
        height: containerSize,
        ...style
      }}
    >
      {spans}
    </div>
  );
};

export default MagnetLines;
`,q=`import React, { useRef, useEffect, CSSProperties } from 'react';

interface MagnetLinesProps {
  rows?: number;
  columns?: number;
  containerSize?: string;
  lineColor?: string;
  lineWidth?: string;
  lineHeight?: string;
  baseAngle?: number;
  className?: string;
  style?: CSSProperties;
}

const MagnetLines: React.FC<MagnetLinesProps> = ({
  rows = 9,
  columns = 9,
  containerSize = '80vmin',
  lineColor = '#efefef',
  lineWidth = '1vmin',
  lineHeight = '6vmin',
  baseAngle = -10,
  className = '',
  style = {}
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll<HTMLSpanElement>('span');

    const onPointerMove = (pointer: { x: number; y: number }) => {
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const centerX = rect.x + rect.width / 2;
        const centerY = rect.y + rect.height / 2;

        const b = pointer.x - centerX;
        const a = pointer.y - centerY;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r = ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);

        item.style.setProperty('--rotate', \`\${r}deg\`);
      });
    };

    const handlePointerMove = (e: PointerEvent) => {
      onPointerMove({ x: e.x, y: e.y });
    };

    window.addEventListener('pointermove', handlePointerMove);

    if (items.length) {
      const middleIndex = Math.floor(items.length / 2);
      const rect = items[middleIndex].getBoundingClientRect();
      onPointerMove({ x: rect.x, y: rect.y });
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  const total = rows * columns;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      className="block origin-center"
      style={{
        backgroundColor: lineColor,
        width: lineWidth,
        height: lineHeight,
        //@ts-ignore
        '--rotate': \`\${baseAngle}deg\`,
        transform: 'rotate(var(--rotate))',
        willChange: 'transform'
      }}
    />
  ));

  return (
    <div
      ref={containerRef}
      className={\`grid place-items-center \${className}\`}
      style={{
        gridTemplateColumns: \`repeat(\${columns}, 1fr)\`,
        gridTemplateRows: \`repeat(\${rows}, 1fr)\`,
        width: containerSize,
        height: containerSize,
        ...style
      }}
    >
      {spans}
    </div>
  );
};

export default MagnetLines;
`,B={usage:`import MagnetLines from './MagnetLines';

<MagnetLines
  rows={9}
  columns={9}
  containerSize="60vmin"
  lineColor="tomato"
  lineWidth="0.8vmin"
  lineHeight="5vmin"
  baseAngle={0}
  style={{ margin: "2rem auto" }}
/>`,code:j,css:W,tailwind:k,tsCode:Y,tsTailwind:q},b={rows:10,columns:12,containerSize:"40vmin",lineWidth:"2px",lineHeight:"30px"},O=()=>{const{props:t,resetProps:i,hasChanges:s}=E(b),{rows:c,columns:l,containerSize:m,lineWidth:d,lineHeight:g}=t,p=y.useMemo(()=>[{name:"rows",type:"number",default:"9",description:"Number of grid rows."},{name:"columns",type:"number",default:"9",description:"Number of grid columns."},{name:"containerSize",type:"string",default:"80vmin",description:"Specifies the width and height of the entire grid container."},{name:"lineColor",type:"string",default:"#efefef",description:"Color for each line (the <span> elements)."},{name:"lineWidth",type:"string",default:"1vmin",description:"Specifies each line’s thickness."},{name:"lineHeight",type:"string",default:"6vmin",description:"Specifies each line’s length."},{name:"baseAngle",type:"number",default:"-10",description:"Initial rotation angle (in degrees) before pointer movement."},{name:"className",type:"string",default:"",description:"Additional class name(s) applied to the container."},{name:"style",type:"object",default:"{}",description:"Inline styles for the container."}],[]);return n.jsx($,{props:t,defaultProps:b,resetProps:i,hasChanges:s,children:n.jsxs(A,{children:[n.jsxs(N,{children:[n.jsx(S,{overflow:"hidden",justifyContent:"center",pb:"1em",alignItems:"center",className:"demo-container",children:n.jsx(I,{rows:c,columns:l,containerSize:m,lineWidth:d,lineHeight:g})}),n.jsx(T,{data:p})]}),n.jsx(H,{children:n.jsx(z,{codeObject:B,componentName:"MagnetLines"})})]})})};export{O as default};
