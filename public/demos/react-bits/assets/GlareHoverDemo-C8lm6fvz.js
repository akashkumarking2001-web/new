import{j as e,r as S,B as O,a as y,F as k}from"./index-CKqfvLoB.js";import{u as P,C as I,T as z,P as w,a as A,b as H,c as G}from"./PropTable-BzD4cJVp.js";import{C as D}from"./Customize-BaUKAf5J.js";import{P as m}from"./PreviewSlider-25yjOF_X.js";import{P as j}from"./PreviewSwitch-B0BSuWrO.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";import"./switch-CqqRi5Az.js";const N=`import './GlareHover.css';

const GlareHover = ({
  width = '500px',
  height = '500px',
  background = '#000',
  borderRadius = '10px',
  borderColor = '#333',
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = '',
  style = {}
}) => {
  const hex = glareColor.replace('#', '');
  let rgba = glareColor;
  if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = \`rgba(\${r}, \${g}, \${b}, \${glareOpacity})\`;
  } else if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = \`rgba(\${r}, \${g}, \${b}, \${glareOpacity})\`;
  }

  const vars = {
    '--gh-width': width,
    '--gh-height': height,
    '--gh-bg': background,
    '--gh-br': borderRadius,
    '--gh-angle': \`\${glareAngle}deg\`,
    '--gh-duration': \`\${transitionDuration}ms\`,
    '--gh-size': \`\${glareSize}%\`,
    '--gh-rgba': rgba,
    '--gh-border': borderColor
  };

  return (
    <div
      className={\`glare-hover \${playOnce ? 'glare-hover--play-once' : ''} \${className}\`}
      style={{ ...vars, ...style }}
    >
      {children}
    </div>
  );
};

export default GlareHover;
`,T=`.glare-hover {
  width: var(--gh-width);
  height: var(--gh-height);
  background: var(--gh-bg);
  border-radius: var(--gh-br);
  border: 1px solid var(--gh-border);
  overflow: hidden;
  position: relative;
  display: grid;
  place-items: center;
}

.glare-hover::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    var(--gh-angle),
    hsla(0, 0%, 0%, 0) 60%,
    var(--gh-rgba) 70%,
    hsla(0, 0%, 0%, 0),
    hsla(0, 0%, 0%, 0) 100%
  );
  transition: var(--gh-duration) ease;
  background-size:
    var(--gh-size) var(--gh-size),
    100% 100%;
  background-repeat: no-repeat;
  background-position:
    -100% -100%,
    0 0;
}

.glare-hover:hover {
  cursor: pointer;
}

.glare-hover:hover::before {
  background-position:
    100% 100%,
    0 0;
}

.glare-hover--play-once::before {
  transition: none;
}

.glare-hover--play-once:hover::before {
  transition: var(--gh-duration) ease;
  background-position:
    100% 100%,
    0 0;
}
`,F=`import { useRef } from 'react';

const GlareHover = ({
  width = '500px',
  height = '500px',
  background = '#000',
  borderRadius = '10px',
  borderColor = '#333',
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = '',
  style = {}
}) => {
  const hex = glareColor.replace('#', '');
  let rgba = glareColor;
  if (/^[\\dA-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = \`rgba(\${r}, \${g}, \${b}, \${glareOpacity})\`;
  } else if (/^[\\dA-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = \`rgba(\${r}, \${g}, \${b}, \${glareOpacity})\`;
  }

  const overlayRef = useRef(null);

  const animateIn = () => {
    const el = overlayRef.current;
    if (!el) return;

    el.style.transition = 'none';
    el.style.backgroundPosition = '-100% -100%, 0 0';
    el.style.transition = \`\${transitionDuration}ms ease\`;
    el.style.backgroundPosition = '100% 100%, 0 0';
  };

  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;

    if (playOnce) {
      el.style.transition = 'none';
      el.style.backgroundPosition = '-100% -100%, 0 0';
    } else {
      el.style.transition = \`\${transitionDuration}ms ease\`;
      el.style.backgroundPosition = '-100% -100%, 0 0';
    }
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    background: \`linear-gradient(\${glareAngle}deg,
        hsla(0,0%,0%,0) 60%,
        \${rgba} 70%,
        hsla(0,0%,0%,0) 100%)\`,
    backgroundSize: \`\${glareSize}% \${glareSize}%, 100% 100%\`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-100% -100%, 0 0',
    pointerEvents: 'none'
  };

  return (
    <div
      className={\`relative grid place-items-center overflow-hidden border cursor-pointer \${className}\`}
      style={{
        width,
        height,
        background,
        borderRadius,
        borderColor,
        ...style
      }}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      <div ref={overlayRef} style={overlayStyle} />
      {children}
    </div>
  );
};

export default GlareHover;
`,E=`import React from 'react';
import './GlareHover.css';

interface GlareHoverProps {
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  borderColor?: string;
  children?: React.ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const GlareHover: React.FC<GlareHoverProps> = ({
  width = '500px',
  height = '500px',
  background = '#000',
  borderRadius = '10px',
  borderColor = '#333',
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = '',
  style = {}
}) => {
  const hex = glareColor.replace('#', '');
  let rgba = glareColor;
  if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = \`rgba(\${r}, \${g}, \${b}, \${glareOpacity})\`;
  } else if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = \`rgba(\${r}, \${g}, \${b}, \${glareOpacity})\`;
  }

  const vars: React.CSSProperties & { [k: string]: string } = {
    '--gh-width': width,
    '--gh-height': height,
    '--gh-bg': background,
    '--gh-br': borderRadius,
    '--gh-angle': \`\${glareAngle}deg\`,
    '--gh-duration': \`\${transitionDuration}ms\`,
    '--gh-size': \`\${glareSize}%\`,
    '--gh-rgba': rgba,
    '--gh-border': borderColor
  };

  return (
    <div
      className={\`glare-hover \${playOnce ? 'glare-hover--play-once' : ''} \${className}\`}
      style={{ ...vars, ...style } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default GlareHover;
`,M=`import React, { useRef } from 'react';

interface GlareHoverProps {
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  borderColor?: string;
  children?: React.ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const GlareHover: React.FC<GlareHoverProps> = ({
  width = '500px',
  height = '500px',
  background = '#000',
  borderRadius = '10px',
  borderColor = '#333',
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = '',
  style = {}
}) => {
  const hex = glareColor.replace('#', '');
  let rgba = glareColor;
  if (/^[\\dA-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = \`rgba(\${r}, \${g}, \${b}, \${glareOpacity})\`;
  } else if (/^[\\dA-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = \`rgba(\${r}, \${g}, \${b}, \${glareOpacity})\`;
  }

  const overlayRef = useRef<HTMLDivElement | null>(null);

  const animateIn = () => {
    const el = overlayRef.current;
    if (!el) return;

    el.style.transition = 'none';
    el.style.backgroundPosition = '-100% -100%, 0 0';
    el.style.transition = \`\${transitionDuration}ms ease\`;
    el.style.backgroundPosition = '100% 100%, 0 0';
  };

  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;

    if (playOnce) {
      el.style.transition = 'none';
      el.style.backgroundPosition = '-100% -100%, 0 0';
    } else {
      el.style.transition = \`\${transitionDuration}ms ease\`;
      el.style.backgroundPosition = '-100% -100%, 0 0';
    }
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    background: \`linear-gradient(\${glareAngle}deg,
        hsla(0,0%,0%,0) 60%,
        \${rgba} 70%,
        hsla(0,0%,0%,0) 100%)\`,
    backgroundSize: \`\${glareSize}% \${glareSize}%, 100% 100%\`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-100% -100%, 0 0',
    pointerEvents: 'none'
  };

  return (
    <div
      className={\`relative grid place-items-center overflow-hidden border cursor-pointer \${className}\`}
      style={{
        width,
        height,
        background,
        borderRadius,
        borderColor,
        ...style
      }}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      <div ref={overlayRef} style={overlayStyle} />
      {children}
    </div>
  );
};

export default GlareHover;
`,L={usage:`import GlareHover from './GlareHover'

<div style={{ height: '600px', position: 'relative' }}>
  <GlareHover
    glareColor="#ffffff"
    glareOpacity={0.3}
    glareAngle={-30}
    glareSize={300}
    transitionDuration={800}
    playOnce={false}
  >
    <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#333', margin: 0 }}>
      Hover Me
    </h2>
  </GlareHover>
</div>`,code:N,css:T,tailwind:F,tsCode:E,tsTailwind:M},U=({width:s="500px",height:t="500px",background:c="#000",borderRadius:h="10px",borderColor:i="#333",children:l,glareColor:a="#ffffff",glareOpacity:o=.5,glareAngle:g=-45,glareSize:d=250,transitionDuration:n=650,playOnce:x=!1,className:$="",style:C={}})=>{const r=a.replace("#","");let p=a;if(/^[0-9A-Fa-f]{6}$/.test(r)){const u=parseInt(r.slice(0,2),16),f=parseInt(r.slice(2,4),16),b=parseInt(r.slice(4,6),16);p=`rgba(${u}, ${f}, ${b}, ${o})`}else if(/^[0-9A-Fa-f]{3}$/.test(r)){const u=parseInt(r[0]+r[0],16),f=parseInt(r[1]+r[1],16),b=parseInt(r[2]+r[2],16);p=`rgba(${u}, ${f}, ${b}, ${o})`}const R={"--gh-width":s,"--gh-height":t,"--gh-bg":c,"--gh-br":h,"--gh-angle":`${g}deg`,"--gh-duration":`${n}ms`,"--gh-size":`${d}%`,"--gh-rgba":p,"--gh-border":i};return e.jsx("div",{className:`glare-hover ${x?"glare-hover--play-once":""} ${$}`,style:{...R,...C},children:l})},v={glareColor:"#ffffff",glareOpacity:.3,glareSize:300,transitionDuration:800,playOnce:!1},Y=()=>{const{props:s,updateProp:t,resetProps:c,hasChanges:h}=P(v),{glareColor:i,glareOpacity:l,glareSize:a,transitionDuration:o,playOnce:g}=s,d=S.useMemo(()=>[{name:"width",type:"string",default:"500px",description:"The width of the hover element."},{name:"height",type:"string",default:"500px",description:"The height of the hover element."},{name:"background",type:"string",default:"#000",description:"The background color of the element."},{name:"borderRadius",type:"string",default:"10px",description:"The border radius of the element."},{name:"borderColor",type:"string",default:"#333",description:"The border color of the element."},{name:"children",type:"React.ReactNode",default:"undefined",description:"The content to display inside the glare hover element."},{name:"glareColor",type:"string",default:"#ffffff",description:"The color of the glare effect (hex format)."},{name:"glareOpacity",type:"number",default:"0.5",description:"The opacity of the glare effect (0-1)."},{name:"glareAngle",type:"number",default:"-45",description:"The angle of the glare effect in degrees."},{name:"glareSize",type:"number",default:"250",description:"The size of the glare effect as a percentage (e.g. 250 = 250%)."},{name:"transitionDuration",type:"number",default:"650",description:"The duration of the transition in milliseconds."},{name:"playOnce",type:"boolean",default:"false",description:"If true, the glare only animates on hover and doesn't return on mouse leave."},{name:"className",type:"string",default:'""',description:"Additional CSS class names."},{name:"style",type:"React.CSSProperties",default:"{}",description:"Additional inline styles."}],[]);return e.jsx(I,{props:s,defaultProps:v,resetProps:c,hasChanges:h,children:e.jsxs(z,{children:[e.jsxs(w,{children:[e.jsx(O,{position:"relative",className:"demo-container",h:400,overflow:"hidden",children:e.jsx(U,{background:"#060010",borderColor:"#271E37",borderRadius:"20px",width:"400px",height:"300px",glareColor:i,glareOpacity:l,glareSize:a,transitionDuration:o,playOnce:g,children:e.jsx(y,{textAlign:"center",fontSize:"3rem",fontWeight:"900",color:"#271E37",m:0,children:"Hover Me"})})}),e.jsxs(D,{children:[e.jsxs(k,{gap:4,align:"center",mt:4,children:[e.jsx(y,{fontSize:"sm",children:"Glare Color"}),e.jsx("input",{type:"color",value:i,onChange:n=>t("glareColor",n.target.value),style:{height:"22px",outline:"none",border:"none",width:"50px"}})]}),e.jsx(m,{title:"Glare Opacity",min:0,max:1,step:.1,value:l,onChange:n=>t("glareOpacity",n)}),e.jsx(m,{title:"Glare Size",min:100,max:500,step:25,value:a,onChange:n=>t("glareSize",n),valueUnit:"%"}),e.jsx(m,{title:"Transition Duration",min:200,max:2e3,step:50,value:o,onChange:n=>t("transitionDuration",n),valueUnit:"ms"}),e.jsx(j,{title:"Play Once",isChecked:g,onChange:n=>t("playOnce",n)})]}),e.jsx(A,{data:d})]}),e.jsx(H,{children:e.jsx(G,{codeObject:L,componentName:"GlareHover"})})]})})};export{Y as default};
