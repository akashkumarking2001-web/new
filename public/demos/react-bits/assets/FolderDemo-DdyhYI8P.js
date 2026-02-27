import{r as v,j as e,B as _,F as $,a as I}from"./index-CKqfvLoB.js";import{u as j,C as X,T,P as B,a as L,b as E,c as A}from"./PropTable-BzD4cJVp.js";import{C as D}from"./Customize-BaUKAf5J.js";import{P as U}from"./PreviewSlider-25yjOF_X.js";import{u as Z}from"./useForceRerender-0lK0qxlp.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";const x=(o,a)=>{let l=o.startsWith("#")?o.slice(1):o;l.length===3&&(l=l.split("").map(m=>m+m).join(""));const f=parseInt(l,16);let c=f>>16&255,n=f>>8&255,t=f&255;return c=Math.max(0,Math.min(255,Math.floor(c*(1-a)))),n=Math.max(0,Math.min(255,Math.floor(n*(1-a)))),t=Math.max(0,Math.min(255,Math.floor(t*(1-a)))),"#"+((1<<24)+(c<<16)+(n<<8)+t).toString(16).slice(1).toUpperCase()},W=({color:o="#5227FF",size:a=1,items:l=[],className:f=""})=>{const n=l.slice(0,3);for(;n.length<3;)n.push(null);const[t,m]=v.useState(!1),[u,i]=v.useState(Array.from({length:3},()=>({x:0,y:0}))),y=x(o,.08),M=x("#ffffff",.1),C=x("#ffffff",.05),k="#ffffff",w=()=>{m(p=>!p),t&&i(Array.from({length:3},()=>({x:0,y:0})))},O=(p,r)=>{if(!t)return;const s=p.currentTarget.getBoundingClientRect(),d=s.left+s.width/2,h=s.top+s.height/2,z=(p.clientX-d)*.15,Y=(p.clientY-h)*.15;i(R=>{const g=[...R];return g[r]={x:z,y:Y},g})},S=(p,r)=>{i(s=>{const d=[...s];return d[r]={x:0,y:0},d})},P={"--folder-color":o,"--folder-back-color":y,"--paper-1":M,"--paper-2":C,"--paper-3":k},N=`folder ${t?"open":""}`.trim(),F={transform:`scale(${a})`};return e.jsx("div",{style:F,className:f,children:e.jsx("div",{className:N,style:P,onClick:w,children:e.jsxs("div",{className:"folder__back",children:[n.map((p,r)=>{var s,d;return e.jsx("div",{className:`paper paper-${r+1}`,onMouseMove:h=>O(h,r),onMouseLeave:h=>S(h,r),style:t?{"--magnet-x":`${((s=u[r])==null?void 0:s.x)||0}px`,"--magnet-y":`${((d=u[r])==null?void 0:d.y)||0}px`}:{},children:p},r)}),e.jsx("div",{className:"folder__front"}),e.jsx("div",{className:"folder__front right"})]})})})},H=`import { useState } from 'react';
import './Folder.css';

const darkenColor = (hex, percent) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder = ({ color = '#5227FF', size = 1, items = [], className = '' }) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor('#ffffff', 0.1);
  const paper2 = darkenColor('#ffffff', 0.05);
  const paper3 = '#ffffff';

  const handleClick = () => {
    setOpen(prev => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e, index) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (e, index) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  };

  const folderClassName = \`folder \${open ? 'open' : ''}\`.trim();
  const scaleStyle = { transform: \`scale(\${size})\` };

  return (
    <div style={scaleStyle} className={className}>
      <div className={folderClassName} style={folderStyle} onClick={handleClick}>
        <div className="folder__back">
          {papers.map((item, i) => (
            <div
              key={i}
              className={\`paper paper-\${i + 1}\`}
              onMouseMove={e => handlePaperMouseMove(e, i)}
              onMouseLeave={e => handlePaperMouseLeave(e, i)}
              style={
                open
                  ? {
                      '--magnet-x': \`\${paperOffsets[i]?.x || 0}px\`,
                      '--magnet-y': \`\${paperOffsets[i]?.y || 0}px\`
                    }
                  : {}
              }
            >
              {item}
            </div>
          ))}
          <div className="folder__front"></div>
          <div className="folder__front right"></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
`,q=`:root {
  --folder-color: #70a1ff;
  --folder-back-color: #4785ff;
  --paper-1: #e6e6e6;
  --paper-2: #f2f2f2;
  --paper-3: #ffffff;
}

.folder {
  transition: all 0.2s ease-in;
  cursor: pointer;
}

.folder:not(.folder--click):hover {
  transform: translateY(-8px);
}

.folder:not(.folder--click):hover .paper {
  transform: translate(-50%, 0%);
}

.folder:not(.folder--click):hover .folder__front {
  transform: skew(15deg) scaleY(0.6);
}

.folder:not(.folder--click):hover .right {
  transform: skew(-15deg) scaleY(0.6);
}

.folder.open {
  transform: translateY(-8px);
}

.folder.open .paper:nth-child(1) {
  transform: translate(-120%, -70%) rotateZ(-15deg);
}

.folder.open .paper:nth-child(1):hover {
  transform: translate(-120%, -70%) rotateZ(-15deg) scale(1.1);
}

.folder.open .paper:nth-child(2) {
  transform: translate(10%, -70%) rotateZ(15deg);
  height: 80%;
}

.folder.open .paper:nth-child(2):hover {
  transform: translate(10%, -70%) rotateZ(15deg) scale(1.1);
}

.folder.open .paper:nth-child(3) {
  transform: translate(-50%, -100%) rotateZ(5deg);
  height: 80%;
}

.folder.open .paper:nth-child(3):hover {
  transform: translate(-50%, -100%) rotateZ(5deg) scale(1.1);
}

.folder.open .folder__front {
  transform: skew(15deg) scaleY(0.6);
}

.folder.open .right {
  transform: skew(-15deg) scaleY(0.6);
}

.folder__back {
  position: relative;
  width: 100px;
  height: 80px;
  background: var(--folder-back-color);
  border-radius: 0px 10px 10px 10px;
}

.folder__back::after {
  position: absolute;
  z-index: 0;
  bottom: 98%;
  left: 0;
  content: '';
  width: 30px;
  height: 10px;
  background: var(--folder-back-color);
  border-radius: 5px 5px 0 0;
}

.paper {
  position: absolute;
  z-index: 2;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 10%);
  width: 70%;
  height: 80%;
  background: var(--paper-1);
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
}

.paper:nth-child(2) {
  background: var(--paper-2);
  width: 80%;
  height: 70%;
}

.paper:nth-child(3) {
  background: var(--paper-3);
  width: 90%;
  height: 60%;
}

.folder__front {
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: var(--folder-color);
  border-radius: 5px 10px 10px 10px;
  transform-origin: bottom;
  transition: all 0.3s ease-in-out;
}
`,G=`import { useState } from 'react';

const darkenColor = (hex, percent) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder = ({ color = '#5227FF', size = 1, items = [], className = '' }) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor('#ffffff', 0.1);
  const paper2 = darkenColor('#ffffff', 0.05);
  const paper3 = '#ffffff';

  const handleClick = () => {
    setOpen(prev => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e, index) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (e, index) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  };

  const scaleStyle = { transform: \`scale(\${size})\` };

  const getOpenTransform = index => {
    if (index === 0) return 'translate(-120%, -70%) rotate(-15deg)';
    if (index === 1) return 'translate(10%, -70%) rotate(15deg)';
    if (index === 2) return 'translate(-50%, -100%) rotate(5deg)';
    return '';
  };

  return (
    <div style={scaleStyle} className={className}>
      <div
        className={\`group relative transition-all duration-200 ease-in cursor-pointer \${
          !open ? 'hover:-translate-y-2' : ''
        }\`}
        style={{
          ...folderStyle,
          transform: open ? 'translateY(-8px)' : undefined
        }}
        onClick={handleClick}
      >
        <div
          className="relative w-[100px] h-[80px] rounded-tl-0 rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]"
          style={{ backgroundColor: folderBackColor }}
        >
          <span
            className="absolute z-0 bottom-[98%] left-0 w-[30px] h-[10px] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-0 rounded-br-0"
            style={{ backgroundColor: folderBackColor }}
          ></span>
          {papers.map((item, i) => {
            let sizeClasses = '';
            if (i === 0) sizeClasses = open ? 'w-[70%] h-[80%]' : 'w-[70%] h-[80%]';
            if (i === 1) sizeClasses = open ? 'w-[80%] h-[80%]' : 'w-[80%] h-[70%]';
            if (i === 2) sizeClasses = open ? 'w-[90%] h-[80%]' : 'w-[90%] h-[60%]';

            const transformStyle = open
              ? \`\${getOpenTransform(i)} translate(\${paperOffsets[i].x}px, \${paperOffsets[i].y}px)\`
              : undefined;

            return (
              <div
                key={i}
                onMouseMove={e => handlePaperMouseMove(e, i)}
                onMouseLeave={e => handlePaperMouseLeave(e, i)}
                className={\`absolute z-20 bottom-[10%] left-1/2 transition-all duration-300 ease-in-out \${
                  !open ? 'transform -translate-x-1/2 translate-y-[10%] group-hover:translate-y-0' : 'hover:scale-110'
                } \${sizeClasses}\`}
                style={{
                  ...(!open ? {} : { transform: transformStyle }),
                  backgroundColor: i === 0 ? paper1 : i === 1 ? paper2 : paper3,
                  borderRadius: '10px'
                }}
              >
                {item}
              </div>
            );
          })}
          <div
            className={\`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out \${
              !open ? 'group-hover:[transform:skew(15deg)_scaleY(0.6)]' : ''
            }\`}
            style={{
              backgroundColor: color,
              borderRadius: '5px 10px 10px 10px',
              ...(open && { transform: 'skew(15deg) scaleY(0.6)' })
            }}
          ></div>
          <div
            className={\`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out \${
              !open ? 'group-hover:[transform:skew(-15deg)_scaleY(0.6)]' : ''
            }\`}
            style={{
              backgroundColor: color,
              borderRadius: '5px 10px 10px 10px',
              ...(open && { transform: 'skew(-15deg) scaleY(0.6)' })
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
`,J=`import React, { useState } from 'react';
import './Folder.css';

interface FolderProps {
  color?: string;
  size?: number;
  items?: React.ReactNode[];
  className?: string;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder: React.FC<FolderProps> = ({ color = '#5227FF', size = 1, items = [], className = '' }) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState<{ x: number; y: number }[]>(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor('#ffffff', 0.1);
  const paper2 = darkenColor('#ffffff', 0.05);
  const paper3 = '#ffffff';

  const handleClick = () => {
    setOpen(prev => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle: React.CSSProperties = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  } as React.CSSProperties;

  const folderClassName = \`folder \${open ? 'open' : ''}\`.trim();
  const scaleStyle = { transform: \`scale(\${size})\` };

  return (
    <div style={scaleStyle} className={className}>
      <div className={folderClassName} style={folderStyle} onClick={handleClick}>
        <div className="folder__back">
          {papers.map((item, i) => (
            <div
              key={i}
              className={\`paper paper-\${i + 1}\`}
              onMouseMove={e => handlePaperMouseMove(e, i)}
              onMouseLeave={e => handlePaperMouseLeave(e, i)}
              style={
                open
                  ? ({
                      '--magnet-x': \`\${paperOffsets[i]?.x || 0}px\`,
                      '--magnet-y': \`\${paperOffsets[i]?.y || 0}px\`
                    } as React.CSSProperties)
                  : {}
              }
            >
              {item}
            </div>
          ))}
          <div className="folder__front"></div>
          <div className="folder__front right"></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
`,K=`import React, { useState } from 'react';

interface FolderProps {
  color?: string;
  size?: number;
  items?: React.ReactNode[];
  className?: string;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder: React.FC<FolderProps> = ({ color = '#5227FF', size = 1, items = [], className = '' }) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState<{ x: number; y: number }[]>(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor('#ffffff', 0.1);
  const paper2 = darkenColor('#ffffff', 0.05);
  const paper3 = '#ffffff';

  const handleClick = () => {
    setOpen(prev => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle: React.CSSProperties = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  } as React.CSSProperties;

  const scaleStyle = { transform: \`scale(\${size})\` };

  const getOpenTransform = (index: number) => {
    if (index === 0) return 'translate(-120%, -70%) rotate(-15deg)';
    if (index === 1) return 'translate(10%, -70%) rotate(15deg)';
    if (index === 2) return 'translate(-50%, -100%) rotate(5deg)';
    return '';
  };

  return (
    <div style={scaleStyle} className={className}>
      <div
        className={\`group relative transition-all duration-200 ease-in cursor-pointer \${
          !open ? 'hover:-translate-y-2' : ''
        }\`}
        style={{
          ...folderStyle,
          transform: open ? 'translateY(-8px)' : undefined
        }}
        onClick={handleClick}
      >
        <div
          className="relative w-[100px] h-[80px] rounded-tl-0 rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]"
          style={{ backgroundColor: folderBackColor }}
        >
          <span
            className="absolute z-0 bottom-[98%] left-0 w-[30px] h-[10px] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-0 rounded-br-0"
            style={{ backgroundColor: folderBackColor }}
          ></span>
          {papers.map((item, i) => {
            let sizeClasses = '';
            if (i === 0) sizeClasses = open ? 'w-[70%] h-[80%]' : 'w-[70%] h-[80%]';
            if (i === 1) sizeClasses = open ? 'w-[80%] h-[80%]' : 'w-[80%] h-[70%]';
            if (i === 2) sizeClasses = open ? 'w-[90%] h-[80%]' : 'w-[90%] h-[60%]';

            const transformStyle = open
              ? \`\${getOpenTransform(i)} translate(\${paperOffsets[i].x}px, \${paperOffsets[i].y}px)\`
              : undefined;

            return (
              <div
                key={i}
                onMouseMove={e => handlePaperMouseMove(e, i)}
                onMouseLeave={e => handlePaperMouseLeave(e, i)}
                className={\`absolute z-20 bottom-[10%] left-1/2 transition-all duration-300 ease-in-out \${
                  !open ? 'transform -translate-x-1/2 translate-y-[10%] group-hover:translate-y-0' : 'hover:scale-110'
                } \${sizeClasses}\`}
                style={{
                  ...(!open ? {} : { transform: transformStyle }),
                  backgroundColor: i === 0 ? paper1 : i === 1 ? paper2 : paper3,
                  borderRadius: '10px'
                }}
              >
                {item}
              </div>
            );
          })}
          <div
            className={\`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out \${
              !open ? 'group-hover:[transform:skew(15deg)_scaleY(0.6)]' : ''
            }\`}
            style={{
              backgroundColor: color,
              borderRadius: '5px 10px 10px 10px',
              ...(open && { transform: 'skew(15deg) scaleY(0.6)' })
            }}
          ></div>
          <div
            className={\`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out \${
              !open ? 'group-hover:[transform:skew(-15deg)_scaleY(0.6)]' : ''
            }\`}
            style={{
              backgroundColor: color,
              borderRadius: '5px 10px 10px 10px',
              ...(open && { transform: 'skew(-15deg) scaleY(0.6)' })
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
`,Q={usage:`import Folder from './Folder'

<div style={{ height: '600px', position: 'relative' }}>
  <Folder size={2} color="#5227FF" className="custom-folder" />
</div>`,code:H,css:q,tailwind:G,tsCode:J,tsTailwind:K},b={color:"#5227FF",size:2},le=()=>{const{props:o,updateProp:a,resetProps:l,hasChanges:f}=j(b),{color:c,size:n}=o,t=v.useMemo(()=>[{name:"color",type:"string",default:"#5227FF",description:"The primary color of the folder."},{name:"size",type:"number",default:"1",description:"Scale factor for the folder size."},{name:"items",type:"React.ReactNode[]",default:"[]",description:"An array of up to 3 items rendered as papers in the folder."},{name:"className",type:"string",default:"",description:"Additional CSS classes for the folder container."}],[]),[m,u]=Z();return e.jsx(X,{props:o,defaultProps:b,resetProps:l,hasChanges:f,children:e.jsxs(T,{children:[e.jsxs(B,{children:[e.jsx(_,{position:"relative",className:"demo-container",h:400,overflow:"hidden",children:e.jsx(W,{size:n,color:c,className:"custom-folder"},m)}),e.jsxs(D,{children:[e.jsxs($,{gap:4,align:"center",mt:4,children:[e.jsx(I,{fontSize:"sm",children:"Color"}),e.jsx("input",{type:"color",value:c,onChange:i=>{a("color",i.target.value),u()}})]}),e.jsx(U,{title:"Size",min:.1,max:3,step:.1,value:n,onChange:i=>{a("size",i),u()}})]}),e.jsx(L,{data:t})]}),e.jsx(E,{children:e.jsx(A,{codeObject:Q,componentName:"Folder"})})]})})};export{le as default};
