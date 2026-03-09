import{r as p,j as e,Z as m,F as D,a as b,d as A}from"./index-CKqfvLoB.js";import{u as L,C as N,T as j,P as M,a as $,b as I,c as H}from"./PropTable-BzD4cJVp.js";import{D as F}from"./Dependencies-DmSBXzNX.js";import{C as O}from"./Customize-BaUKAf5J.js";import{P as z}from"./PreviewSlider-25yjOF_X.js";import{u as q}from"./useForceRerender-0lK0qxlp.js";import{P as B}from"./PreviewSwitch-B0BSuWrO.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";import"./switch-CqqRi5Az.js";function W({firstContent:v,secondContent:l,gridSize:s=7,pixelColor:g="currentColor",animationStepDuration:o=.3,once:u=!1,aspectRatio:h="100%",className:y="",style:R={}}){const f=p.useRef(null),i=p.useRef(null),w=p.useRef(null),E=p.useRef(null),[r,k]=p.useState(!1),x="ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches;p.useEffect(()=>{const t=i.current;if(t){t.innerHTML="";for(let c=0;c<s;c++)for(let a=0;a<s;a++){const n=document.createElement("div");n.classList.add("pixelated-image-card__pixel"),n.style.backgroundColor=g;const d=100/s;n.style.width=`${d}%`,n.style.height=`${d}%`,n.style.left=`${a*d}%`,n.style.top=`${c*d}%`,t.appendChild(n)}}},[s,g]);const C=t=>{k(t);const c=i.current,a=w.current;if(!c||!a)return;const n=c.querySelectorAll(".pixelated-image-card__pixel");if(!n.length)return;m.killTweensOf(n),E.current&&E.current.kill(),m.set(n,{display:"none"});const d=n.length,S=o/d;m.to(n,{display:"block",duration:0,stagger:{each:S,from:"random"}}),E.current=m.delayedCall(o,()=>{a.style.display=t?"block":"none",a.style.pointerEvents=t?"none":""}),m.to(n,{display:"none",duration:0,delay:o,stagger:{each:S,from:"random"}})},T=()=>{r||C(!0)},P=()=>{r&&!u&&C(!1)},G=()=>{r?r&&!u&&C(!1):C(!0)};return e.jsxs("div",{ref:f,className:`pixelated-image-card ${y}`,style:R,onMouseEnter:x?void 0:T,onMouseLeave:x?void 0:P,onClick:x?G:void 0,onFocus:x?void 0:T,onBlur:x?void 0:P,tabIndex:0,children:[e.jsx("div",{style:{paddingTop:h}}),e.jsx("div",{className:"pixelated-image-card__default","aria-hidden":r,children:v}),e.jsx("div",{className:"pixelated-image-card__active",ref:w,"aria-hidden":!r,children:l}),e.jsx("div",{className:"pixelated-image-card__pixels",ref:i})]})}const U=`import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import './PixelTransition.css';

function PixelTransition({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = 'currentColor',
  animationStepDuration = 0.3,
  once = false,
  aspectRatio = '100%',
  className = '',
  style = {}
}) {
  const containerRef = useRef(null);
  const pixelGridRef = useRef(null);
  const activeRef = useRef(null);
  const delayedCallRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const isTouchDevice =
    'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = '';

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixelated-image-card__pixel');
        pixel.style.backgroundColor = pixelColor;

        const size = 100 / gridSize;
        pixel.style.width = \`\${size}%\`;
        pixel.style.height = \`\${size}%\`;
        pixel.style.left = \`\${col * size}%\`;
        pixel.style.top = \`\${row * size}%\`;
        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  const animatePixels = activate => {
    setIsActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;
    if (!pixelGridEl || !activeEl) return;

    const pixels = pixelGridEl.querySelectorAll('.pixelated-image-card__pixel');
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    if (delayedCallRef.current) {
      delayedCallRef.current.kill();
    }

    gsap.set(pixels, { display: 'none' });

    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    gsap.to(pixels, {
      display: 'block',
      duration: 0,
      stagger: {
        each: staggerDuration,
        from: 'random'
      }
    });

    delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
      activeEl.style.display = activate ? 'block' : 'none';
      activeEl.style.pointerEvents = activate ? 'none' : '';
    });

    gsap.to(pixels, {
      display: 'none',
      duration: 0,
      delay: animationStepDuration,
      stagger: {
        each: staggerDuration,
        from: 'random'
      }
    });
  };

  const handleEnter = () => {
    if (!isActive) animatePixels(true);
  };
  const handleLeave = () => {
    if (isActive && !once) animatePixels(false);
  };
  const handleClick = () => {
    if (!isActive) animatePixels(true);
    else if (isActive && !once) animatePixels(false);
  };

  return (
    <div
      ref={containerRef}
      className={\`pixelated-image-card \${className}\`}
      style={style}
      onMouseEnter={!isTouchDevice ? handleEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleLeave : undefined}
      onClick={isTouchDevice ? handleClick : undefined}
      onFocus={!isTouchDevice ? handleEnter : undefined}
      onBlur={!isTouchDevice ? handleLeave : undefined}
      tabIndex={0}
    >
      <div style={{ paddingTop: aspectRatio }} />
      <div className="pixelated-image-card__default" aria-hidden={isActive}>
        {firstContent}
      </div>
      <div className="pixelated-image-card__active" ref={activeRef} aria-hidden={!isActive}>
        {secondContent}
      </div>
      <div className="pixelated-image-card__pixels" ref={pixelGridRef} />
    </div>
  );
}

export default PixelTransition;
`,Z=`.pixelated-image-card {
  background-color: #222;
  color: var(--color-primary, #fff);
  border-radius: 15px;
  border: 2px solid #fff;
  width: 300px;
  max-width: 100%;
  position: relative;
  overflow: hidden;
}

.pixelated-image-card__default,
.pixelated-image-card__active,
.pixelated-image-card__pixels {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.pixelated-image-card__active {
  z-index: 2;
}

.pixelated-image-card__active {
  display: none;
}

.pixelated-image-card__pixels {
  pointer-events: none;
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.pixelated-image-card__pixel {
  display: none;
  position: absolute;
}
`,J=`import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

function PixelTransition({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = 'currentColor',
  animationStepDuration = 0.3,
  aspectRatio = '100%',
  className = '',
  once = false,
  style = {}
}) {
  const containerRef = useRef(null);
  const pixelGridRef = useRef(null);
  const activeRef = useRef(null);
  const delayedCallRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const isTouchDevice =
    'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = '';

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixelated-image-card__pixel');
        pixel.classList.add('absolute', 'hidden');
        pixel.style.backgroundColor = pixelColor;

        const size = 100 / gridSize;
        pixel.style.width = \`\${size}%\`;
        pixel.style.height = \`\${size}%\`;
        pixel.style.left = \`\${col * size}%\`;
        pixel.style.top = \`\${row * size}%\`;

        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  const animatePixels = activate => {
    setIsActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;
    if (!pixelGridEl || !activeEl) return;

    const pixels = pixelGridEl.querySelectorAll('.pixelated-image-card__pixel');
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    if (delayedCallRef.current) {
      delayedCallRef.current.kill();
    }

    gsap.set(pixels, { display: 'none' });

    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    gsap.to(pixels, {
      display: 'block',
      duration: 0,
      stagger: {
        each: staggerDuration,
        from: 'random'
      }
    });

    delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
      activeEl.style.display = activate ? 'block' : 'none';
      activeEl.style.pointerEvents = activate ? 'none' : '';
    });

    gsap.to(pixels, {
      display: 'none',
      duration: 0,
      delay: animationStepDuration,
      stagger: {
        each: staggerDuration,
        from: 'random'
      }
    });
  };

  const handleEnter = () => {
    if (!isActive) animatePixels(true);
  };
  const handleLeave = () => {
    if (isActive && !once) animatePixels(false);
  };
  const handleClick = () => {
    if (!isActive) animatePixels(true);
    else if (isActive && !once) animatePixels(false);
  };

  return (
    <div
      ref={containerRef}
      className={\`
        \${className}
        bg-[#271E37]
        text-white
        rounded-[15px]
        border-2
        border-white
        w-[300px]
        max-w-full
        relative
        overflow-hidden
      \`}
      style={style}
      onMouseEnter={!isTouchDevice ? handleEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleLeave : undefined}
      onClick={isTouchDevice ? handleClick : undefined}
      onFocus={!isTouchDevice ? handleEnter : undefined}
      onBlur={!isTouchDevice ? handleLeave : undefined}
      tabIndex={0}
    >
      <div style={{ paddingTop: aspectRatio }} />

      <div className="absolute inset-0 w-full h-full" aria-hidden={isActive}>
        {firstContent}
      </div>

      <div
        ref={activeRef}
        className="absolute inset-0 w-full h-full z-[2]"
        style={{ display: 'none' }}
        aria-hidden={!isActive}
      >
        {secondContent}
      </div>

      <div ref={pixelGridRef} className="absolute inset-0 w-full h-full pointer-events-none z-[3]" />
    </div>
  );
}

export default PixelTransition;
`,K=`import React, { useRef, useEffect, useState, CSSProperties } from 'react';
import { gsap } from 'gsap';
import './PixelTransition.css';

interface PixelTransitionProps {
  firstContent: React.ReactNode | string;
  secondContent: React.ReactNode | string;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  once?: boolean;
  className?: string;
  style?: CSSProperties;
  aspectRatio?: string;
}

const PixelTransition: React.FC<PixelTransitionProps> = ({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = 'currentColor',
  animationStepDuration = 0.3,
  once = false,
  aspectRatio = '100%',
  className = '',
  style = {}
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pixelGridRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const delayedCallRef = useRef<gsap.core.Tween | null>(null);

  const [isActive, setIsActive] = useState<boolean>(false);

  const isTouchDevice =
    'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = '';

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixelated-image-card__pixel');
        pixel.style.backgroundColor = pixelColor;

        const size = 100 / gridSize;
        pixel.style.width = \`\${size}%\`;
        pixel.style.height = \`\${size}%\`;
        pixel.style.left = \`\${col * size}%\`;
        pixel.style.top = \`\${row * size}%\`;
        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  const animatePixels = (activate: boolean): void => {
    setIsActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;
    if (!pixelGridEl || !activeEl) return;

    const pixels = pixelGridEl.querySelectorAll<HTMLDivElement>('.pixelated-image-card__pixel');
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    if (delayedCallRef.current) {
      delayedCallRef.current.kill();
    }

    gsap.set(pixels, { display: 'none' });

    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    gsap.to(pixels, {
      display: 'block',
      duration: 0,
      stagger: {
        each: staggerDuration,
        from: 'random'
      }
    });

    delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
      activeEl.style.display = activate ? 'block' : 'none';
      activeEl.style.pointerEvents = activate ? 'none' : '';
    });

    gsap.to(pixels, {
      display: 'none',
      duration: 0,
      delay: animationStepDuration,
      stagger: {
        each: staggerDuration,
        from: 'random'
      }
    });
  };

  const handleEnter = (): void => {
    if (!isActive) animatePixels(true);
  };
  const handleLeave = (): void => {
    if (isActive && !once) animatePixels(false);
  };
  const handleClick = (): void => {
    if (!isActive) animatePixels(true);
    else if (isActive && !once) animatePixels(false);
  };
  return (
    <div
      ref={containerRef}
      className={\`pixelated-image-card \${className}\`}
      style={style}
      onMouseEnter={!isTouchDevice ? handleEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleLeave : undefined}
      onClick={isTouchDevice ? handleClick : undefined}
      onFocus={!isTouchDevice ? handleEnter : undefined}
      onBlur={!isTouchDevice ? handleLeave : undefined}
      tabIndex={0}
    >
      <div style={{ paddingTop: aspectRatio }} />
      <div className="pixelated-image-card__default" aria-hidden={isActive}>
        {firstContent}
      </div>
      <div className="pixelated-image-card__active" ref={activeRef} aria-hidden={!isActive}>
        {secondContent}
      </div>
      <div className="pixelated-image-card__pixels" ref={pixelGridRef} />
    </div>
  );
};

export default PixelTransition;
`,Q=`import React, { useRef, useEffect, useState, CSSProperties } from 'react';
import { gsap } from 'gsap';

interface PixelTransitionProps {
  firstContent: React.ReactNode | string;
  secondContent: React.ReactNode | string;
  gridSize?: number;
  pixelColor?: string;
  animationStepDuration?: number;
  once?: boolean;
  className?: string;
  style?: CSSProperties;
  aspectRatio?: string;
}

const PixelTransition: React.FC<PixelTransitionProps> = ({
  firstContent,
  secondContent,
  gridSize = 7,
  pixelColor = 'currentColor',
  animationStepDuration = 0.3,
  once = false,
  aspectRatio = '100%',
  className = '',
  style = {}
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pixelGridRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<HTMLDivElement | null>(null);
  const delayedCallRef = useRef<gsap.core.Tween | null>(null);

  const [isActive, setIsActive] = useState<boolean>(false);

  const isTouchDevice =
    'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;

  useEffect(() => {
    const pixelGridEl = pixelGridRef.current;
    if (!pixelGridEl) return;

    pixelGridEl.innerHTML = '';

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixelated-image-card__pixel');
        pixel.classList.add('absolute', 'hidden');
        pixel.style.backgroundColor = pixelColor;

        const size = 100 / gridSize;
        pixel.style.width = \`\${size}%\`;
        pixel.style.height = \`\${size}%\`;
        pixel.style.left = \`\${col * size}%\`;
        pixel.style.top = \`\${row * size}%\`;

        pixelGridEl.appendChild(pixel);
      }
    }
  }, [gridSize, pixelColor]);

  const animatePixels = (activate: boolean): void => {
    setIsActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;
    if (!pixelGridEl || !activeEl) return;

    const pixels = pixelGridEl.querySelectorAll<HTMLDivElement>('.pixelated-image-card__pixel');
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    if (delayedCallRef.current) {
      delayedCallRef.current.kill();
    }

    gsap.set(pixels, { display: 'none' });

    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    gsap.to(pixels, {
      display: 'block',
      duration: 0,
      stagger: {
        each: staggerDuration,
        from: 'random'
      }
    });

    delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
      activeEl.style.display = activate ? 'block' : 'none';
      activeEl.style.pointerEvents = activate ? 'none' : '';
    });

    gsap.to(pixels, {
      display: 'none',
      duration: 0,
      delay: animationStepDuration,
      stagger: {
        each: staggerDuration,
        from: 'random'
      }
    });
  };

  const handleEnter = (): void => {
    if (!isActive) animatePixels(true);
  };
  const handleLeave = (): void => {
    if (isActive && !once) animatePixels(false);
  };
  const handleClick = (): void => {
    if (!isActive) animatePixels(true);
    else if (isActive && !once) animatePixels(false);
  };
  return (
    <div
      ref={containerRef}
      className={\`
        \${className}
        bg-[#222]
        text-white
        rounded-[15px]
        border-2
        border-white
        w-[300px]
        max-w-full
        relative
        overflow-hidden
      \`}
      style={style}
      onMouseEnter={!isTouchDevice ? handleEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleLeave : undefined}
      onClick={isTouchDevice ? handleClick : undefined}
      onFocus={!isTouchDevice ? handleEnter : undefined}
      onBlur={!isTouchDevice ? handleLeave : undefined}
      tabIndex={0}
    >
      <div style={{ paddingTop: aspectRatio }} />

      <div className="absolute inset-0 w-full h-full" aria-hidden={isActive}>
        {firstContent}
      </div>

      <div
        ref={activeRef}
        className="absolute inset-0 w-full h-full z-[2]"
        style={{ display: 'none' }}
        aria-hidden={!isActive}
      >
        {secondContent}
      </div>

      <div ref={pixelGridRef} className="absolute inset-0 w-full h-full pointer-events-none z-[3]" />
    </div>
  );
};

export default PixelTransition;
`,V={dependencies:"gsap",usage:`import PixelTransition from './PixelTransition';

<PixelTransition
  firstContent={
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
      alt="default pixel transition content, a cat!"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  }
  secondContent={
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#111"
      }}
    >
      <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Meow!</p>
    </div>
  }
  gridSize={12}
  pixelColor='#ffffff'
  once={false}
  animationStepDuration={0.4}
  className="custom-pixel-card"
/>`,code:U,css:Z,tailwind:J,tsCode:K,tsTailwind:Q},X=[{name:"firstContent",type:"ReactNode | string",default:"—",description:"Content to show by default (e.g., an <img> or text)."},{name:"secondContent",type:"ReactNode | string",default:"—",description:"Content revealed upon hover or click."},{name:"gridSize",type:"number",default:"7",description:"Number of rows/columns in the pixel grid."},{name:"pixelColor",type:"string",default:"currentColor",description:"Background color used for each pixel block."},{name:"animationStepDuration",type:"number",default:"0.3",description:"Length of the pixel reveal/hide in seconds."},{name:"aspectRatio",type:"string",default:'"100%"',description:"Sets the 'padding-top' (or aspect-ratio) for the container."},{name:"once",type:"boolean",default:"false",description:"If true, the transition will not revert on mouse leave or subsequent clicks."},{name:"className",type:"string",default:"—",description:"Optional additional class names for styling."},{name:"style",type:"object",default:"{}",description:"Optional inline styles for the container."}],_={gridSize:8,pixelColor:"#ffffff",animationStepDuration:.4,once:!1},de=()=>{const{props:v,updateProp:l,resetProps:s,hasChanges:g}=L(_),{gridSize:o,pixelColor:u,animationStepDuration:h,once:y}=v,[R,f]=q();return e.jsx(N,{props:v,defaultProps:_,resetProps:s,hasChanges:g,children:e.jsxs(j,{children:[e.jsxs(M,{children:[e.jsxs(D,{direction:"column",position:"relative",className:"demo-container",minH:400,maxH:400,overflow:"hidden",children:[e.jsx(W,{firstContent:e.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg",alt:"Default",style:{width:"100%",height:"100%",objectFit:"cover"}}),secondContent:e.jsx("div",{style:{width:"100%",height:"100%",display:"grid",placeItems:"center",backgroundColor:"#111"},children:e.jsx("p",{style:{fontWeight:900,fontSize:"3rem",color:"#ffffff"},children:"Meow!"})}),gridSize:o,pixelColor:u,animationStepDuration:h,once:y,className:"custom-pixel-card"},R),e.jsx(b,{mt:2,color:"#a6a6a6",children:"Psst, hover the card!"})]}),e.jsxs(O,{children:[e.jsx(z,{title:"Grid Size",min:2,max:50,step:1,value:o,onChange:i=>{l("gridSize",i),f()},width:200}),e.jsx(z,{title:"Animation Duration",min:.1,max:2,step:.1,value:h,valueUnit:"s",onChange:i=>{l("animationStepDuration",i),f()},width:200}),e.jsxs(D,{gap:4,align:"center",mt:4,children:[e.jsx(b,{fontSize:"sm",children:"Pixel Color"}),e.jsx(A,{type:"color",value:u,onChange:i=>{l("pixelColor",i.target.value),f()},width:"60px",p:0})]}),e.jsx(B,{title:"Once",isChecked:y,onChange:i=>l("once",i)})]}),e.jsx($,{data:X}),e.jsx(F,{dependencyList:["gsap"]})]}),e.jsx(I,{children:e.jsx(H,{codeObject:V,componentName:"PixelTransition"})})]})})};export{de as default};
