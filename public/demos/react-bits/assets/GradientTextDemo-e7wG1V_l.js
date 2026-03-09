import{r as F,j as n,B as a,a as g,F as s,d as w,I as h,X as k}from"./index-CKqfvLoB.js";import{u as P,C as S,T as z,P as D,a as j,b as E,c as M}from"./PropTable-BzD4cJVp.js";import{C as N}from"./Customize-BaUKAf5J.js";import{P as B}from"./PreviewSlider-25yjOF_X.js";import{P as l}from"./PreviewSwitch-B0BSuWrO.js";import{P as H}from"./PreviewSelect-CM4Sns8B.js";import{G as $}from"./GradientText-PH5MF2Rw.js";import{P as O}from"./plus-Dxz4vEQb.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";import"./switch-CqqRi5Az.js";import"./field-DGUMYGrq.js";const A=`import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'motion/react';
import './GradientText.css';

export default function GradientText({
  children,
  className = '',
  colors = ['#5227FF', '#FF9FFC', '#B19EEF'],
  animationSpeed = 8,
  showBorder = false,
  direction = 'horizontal',
  pauseOnHover = false,
  yoyo = true
}) {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);

  const animationDuration = animationSpeed * 1000;

  useAnimationFrame(time => {
    if (isPaused) {
      lastTimeRef.current = null;
      return;
    }

    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }

    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    if (yoyo) {
      const fullCycle = animationDuration * 2;
      const cycleTime = elapsedRef.current % fullCycle;

      if (cycleTime < animationDuration) {
        progress.set((cycleTime / animationDuration) * 100);
      } else {
        progress.set(100 - ((cycleTime - animationDuration) / animationDuration) * 100);
      }
    } else {
      // Continuously increase position for seamless looping
      progress.set((elapsedRef.current / animationDuration) * 100);
    }
  });

  useEffect(() => {
    elapsedRef.current = 0;
    progress.set(0);
  }, [animationSpeed, progress, yoyo]);

  const backgroundPosition = useTransform(progress, p => {
    if (direction === 'horizontal') {
      return \`\${p}% 50%\`;
    } else if (direction === 'vertical') {
      return \`50% \${p}%\`;
    } else {
      // For diagonal, move only horizontally to avoid interference patterns
      return \`\${p}% 50%\`;
    }
  });

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  const gradientAngle =
    direction === 'horizontal' ? 'to right' : direction === 'vertical' ? 'to bottom' : 'to bottom right';
  // Duplicate first color at the end for seamless looping
  const gradientColors = [...colors, colors[0]].join(', ');

  const gradientStyle = {
    backgroundImage: \`linear-gradient(\${gradientAngle}, \${gradientColors})\`,
    backgroundSize: direction === 'horizontal' ? '300% 100%' : direction === 'vertical' ? '100% 300%' : '300% 300%',
    backgroundRepeat: 'repeat'
  };

  return (
    <motion.div
      className={\`animated-gradient-text \${showBorder ? 'with-border' : ''} \${className}\`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showBorder && <motion.div className="gradient-overlay" style={{ ...gradientStyle, backgroundPosition }} />}
      <motion.div className="text-content" style={{ ...gradientStyle, backgroundPosition }}>
        {children}
      </motion.div>
    </motion.div>
  );
}
`,G=`.animated-gradient-text {
  position: relative;
  margin: 0 auto;
  display: flex;
  max-width: fit-content;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 1.25rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  transition: box-shadow 0.5s ease-out;
  overflow: hidden;
  cursor: pointer;
}

.animated-gradient-text.with-border {
  padding: 0.35rem 0.75rem;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  z-index: 0;
  pointer-events: none;
}

.gradient-overlay::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  border-radius: inherit;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #060010;
  z-index: -1;
}

.text-content {
  display: inline-block;
  position: relative;
  z-index: 2;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
`,I=`import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'motion/react';

export default function GradientText({
  children,
  className = '',
  colors = ['#5227FF', '#FF9FFC', '#B19EEF'],
  animationSpeed = 8,
  showBorder = false,
  direction = 'horizontal',
  pauseOnHover = false,
  yoyo = true
}) {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);

  const animationDuration = animationSpeed * 1000;

  useAnimationFrame(time => {
    if (isPaused) {
      lastTimeRef.current = null;
      return;
    }

    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }

    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    if (yoyo) {
      const fullCycle = animationDuration * 2;
      const cycleTime = elapsedRef.current % fullCycle;

      if (cycleTime < animationDuration) {
        progress.set((cycleTime / animationDuration) * 100);
      } else {
        progress.set(100 - ((cycleTime - animationDuration) / animationDuration) * 100);
      }
    } else {
      // Continuously increase position for seamless looping
      progress.set((elapsedRef.current / animationDuration) * 100);
    }
  });

  useEffect(() => {
    elapsedRef.current = 0;
    progress.set(0);
  }, [animationSpeed, progress, yoyo]);

  const backgroundPosition = useTransform(progress, p => {
    if (direction === 'horizontal') {
      return \`\${p}% 50%\`;
    } else if (direction === 'vertical') {
      return \`50% \${p}%\`;
    } else {
      // For diagonal, move only horizontally to avoid interference patterns
      return \`\${p}% 50%\`;
    }
  });

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  const gradientAngle =
    direction === 'horizontal' ? 'to right' : direction === 'vertical' ? 'to bottom' : 'to bottom right';
  // Duplicate first color at the end for seamless looping
  const gradientColors = [...colors, colors[0]].join(', ');

  const gradientStyle = {
    backgroundImage: \`linear-gradient(\${gradientAngle}, \${gradientColors})\`,
    backgroundSize: direction === 'horizontal' ? '300% 100%' : direction === 'vertical' ? '100% 300%' : '300% 300%',
    backgroundRepeat: 'repeat'
  };

  return (
    <motion.div
      className={\`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer \${showBorder ? 'py-1 px-2' : ''} \${className}\`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showBorder && (
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none rounded-[1.25rem]"
          style={{ ...gradientStyle, backgroundPosition }}
        >
          <div
            className="absolute bg-black rounded-[1.25rem] z-[-1]"
            style={{
              width: 'calc(100% - 2px)',
              height: 'calc(100% - 2px)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        </motion.div>
      )}
      <motion.div
        className="inline-block relative z-2 text-transparent bg-clip-text"
        style={{ ...gradientStyle, backgroundPosition, WebkitBackgroundClip: 'text' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
`,L=`import { useState, useCallback, useEffect, useRef, ReactNode } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'motion/react';
import './GradientText.css';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  direction?: 'horizontal' | 'vertical' | 'diagonal';
  pauseOnHover?: boolean;
  yoyo?: boolean;
}

export default function GradientText({
  children,
  className = '',
  colors = ['#5227FF', '#FF9FFC', '#B19EEF'],
  animationSpeed = 8,
  showBorder = false,
  direction = 'horizontal',
  pauseOnHover = false,
  yoyo = true
}: GradientTextProps) {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  const animationDuration = animationSpeed * 1000;

  useAnimationFrame(time => {
    if (isPaused) {
      lastTimeRef.current = null;
      return;
    }

    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }

    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    if (yoyo) {
      const fullCycle = animationDuration * 2;
      const cycleTime = elapsedRef.current % fullCycle;

      if (cycleTime < animationDuration) {
        progress.set((cycleTime / animationDuration) * 100);
      } else {
        progress.set(100 - ((cycleTime - animationDuration) / animationDuration) * 100);
      }
    } else {
      // Continuously increase position for seamless looping
      progress.set((elapsedRef.current / animationDuration) * 100);
    }
  });

  useEffect(() => {
    elapsedRef.current = 0;
    progress.set(0);
  }, [animationSpeed, yoyo]);

  const backgroundPosition = useTransform(progress, p => {
    if (direction === 'horizontal') {
      return \`\${p}% 50%\`;
    } else if (direction === 'vertical') {
      return \`50% \${p}%\`;
    } else {
      // For diagonal, move only horizontally to avoid interference patterns
      return \`\${p}% 50%\`;
    }
  });

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  const gradientAngle =
    direction === 'horizontal' ? 'to right' : direction === 'vertical' ? 'to bottom' : 'to bottom right';
  // Duplicate first color at the end for seamless looping
  const gradientColors = [...colors, colors[0]].join(', ');

  const gradientStyle = {
    backgroundImage: \`linear-gradient(\${gradientAngle}, \${gradientColors})\`,
    backgroundSize: direction === 'horizontal' ? '300% 100%' : direction === 'vertical' ? '100% 300%' : '300% 300%',
    backgroundRepeat: 'repeat'
  };

  return (
    <motion.div
      className={\`animated-gradient-text \${showBorder ? 'with-border' : ''} \${className}\`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showBorder && <motion.div className="gradient-overlay" style={{ ...gradientStyle, backgroundPosition }} />}
      <motion.div className="text-content" style={{ ...gradientStyle, backgroundPosition }}>
        {children}
      </motion.div>
    </motion.div>
  );
}
`,V=`import { useState, useCallback, useEffect, useRef, ReactNode } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'motion/react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  direction?: 'horizontal' | 'vertical' | 'diagonal';
  pauseOnHover?: boolean;
  yoyo?: boolean;
}

export default function GradientText({
  children,
  className = '',
  colors = ['#5227FF', '#FF9FFC', '#B19EEF'],
  animationSpeed = 8,
  showBorder = false,
  direction = 'horizontal',
  pauseOnHover = false,
  yoyo = true
}: GradientTextProps) {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  const animationDuration = animationSpeed * 1000;

  useAnimationFrame(time => {
    if (isPaused) {
      lastTimeRef.current = null;
      return;
    }

    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }

    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    if (yoyo) {
      const fullCycle = animationDuration * 2;
      const cycleTime = elapsedRef.current % fullCycle;

      if (cycleTime < animationDuration) {
        progress.set((cycleTime / animationDuration) * 100);
      } else {
        progress.set(100 - ((cycleTime - animationDuration) / animationDuration) * 100);
      }
    } else {
      // Continuously increase position for seamless looping
      progress.set((elapsedRef.current / animationDuration) * 100);
    }
  });

  useEffect(() => {
    elapsedRef.current = 0;
    progress.set(0);
  }, [animationSpeed, yoyo]);

  const backgroundPosition = useTransform(progress, p => {
    if (direction === 'horizontal') {
      return \`\${p}% 50%\`;
    } else if (direction === 'vertical') {
      return \`50% \${p}%\`;
    } else {
      // For diagonal, move only horizontally to avoid interference patterns
      return \`\${p}% 50%\`;
    }
  });

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  const gradientAngle =
    direction === 'horizontal' ? 'to right' : direction === 'vertical' ? 'to bottom' : 'to bottom right';
  // Duplicate first color at the end for seamless looping
  const gradientColors = [...colors, colors[0]].join(', ');

  const gradientStyle = {
    backgroundImage: \`linear-gradient(\${gradientAngle}, \${gradientColors})\`,
    backgroundSize: direction === 'horizontal' ? '300% 100%' : direction === 'vertical' ? '100% 300%' : '300% 300%',
    backgroundRepeat: 'repeat'
  };

  return (
    <motion.div
      className={\`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer \${showBorder ? 'py-1 px-2' : ''} \${className}\`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showBorder && (
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none rounded-[1.25rem]"
          style={{ ...gradientStyle, backgroundPosition }}
        >
          <div
            className="absolute bg-black rounded-[1.25rem] z-[-1]"
            style={{
              width: 'calc(100% - 2px)',
              height: 'calc(100% - 2px)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        </motion.div>
      )}
      <motion.div
        className="inline-block relative z-2 text-transparent bg-clip-text"
        style={{ ...gradientStyle, backgroundPosition, WebkitBackgroundClip: 'text' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
`,W={usage:`import GradientText from './GradientText'

// For a smoother animation, the gradient should start and end with the same color
  
<GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
  Add a splash of color!
</GradientText>`,code:A,css:G,tailwind:I,tsCode:L,tsTailwind:V},v={colors:["#5227FF","#FF9FFC","#B19EEF"],animationSpeed:8,direction:"horizontal",pauseOnHover:!1,yoyo:!0,showBorder:!1},rn=()=>{const{props:c,updateProp:t,resetProps:b,hasChanges:y}=P(v),{colors:o,animationSpeed:d,direction:u,pauseOnHover:m,yoyo:p,showBorder:f}=c,x=(e,r)=>{const i=[...o];i[e]=r,t("colors",i)},T=()=>{o.length<8&&t("colors",[...o,"#ffffff"])},R=e=>{o.length>2&&t("colors",o.filter((r,i)=>i!==e))},C=F.useMemo(()=>[{name:"children",type:"ReactNode",default:"-",description:"The content to be displayed inside the gradient text."},{name:"className",type:"string",default:"''",description:"Adds custom classes to the root element for additional styling."},{name:"colors",type:"string[]",default:'["#5227FF", "#FF9FFC", "#B19EEF"]',description:"Array of colors for the gradient effect."},{name:"animationSpeed",type:"number",default:"8",description:"Duration of one animation cycle in seconds."},{name:"direction",type:"'horizontal' | 'vertical' | 'diagonal'",default:"'horizontal'",description:"Direction of the gradient animation."},{name:"pauseOnHover",type:"boolean",default:"false",description:"Pauses the animation when hovering over the text."},{name:"yoyo",type:"boolean",default:"true",description:"Reverses animation direction at the end instead of looping."},{name:"showBorder",type:"boolean",default:"false",description:"Displays a gradient border around the text."}],[]);return n.jsx(S,{props:c,defaultProps:v,resetProps:b,hasChanges:y,children:n.jsxs(z,{children:[n.jsxs(D,{children:[n.jsx(a,{position:"relative",className:"demo-container",minH:400,children:n.jsx(g,{fontSize:"3rem",as:"div",children:n.jsx($,{colors:o,animationSpeed:d,direction:u,pauseOnHover:m,yoyo:p,showBorder:f,children:"Gradient Magic"})})}),n.jsxs(N,{children:[n.jsx(B,{title:"Animation Speed",min:1,max:20,step:.5,value:d,onChange:e=>t("animationSpeed",e),valueUnit:"s"}),n.jsx(H,{title:"Direction",options:[{value:"horizontal",label:"Horizontal"},{value:"vertical",label:"Vertical"},{value:"diagonal",label:"Diagonal"}],value:u,onChange:e=>t("direction",e)}),n.jsx(l,{title:"Yoyo",isChecked:p,onChange:e=>t("yoyo",e)}),n.jsx(l,{title:"Pause on Hover",isChecked:m,onChange:e=>t("pauseOnHover",e)}),n.jsx(l,{title:"Show Border",isChecked:f,onChange:e=>t("showBorder",e)}),n.jsxs(a,{mt:4,children:[n.jsx(g,{fontSize:"sm",mb:2,children:"Colors"}),n.jsxs(s,{flexWrap:"wrap",gap:2,px:1,pt:1,children:[o.map((e,r)=>n.jsxs(a,{position:"relative",w:"32px",h:"32px",children:[n.jsx(a,{w:"32px",h:"32px",borderRadius:"6px",bg:e,border:"2px solid #271E37",overflow:"hidden",position:"relative",children:n.jsx(w,{type:"color",value:e,onChange:i=>x(r,i.target.value),position:"absolute",top:0,left:0,w:"32px",h:"32px",opacity:0,cursor:"pointer"})}),o.length>2&&n.jsx(s,{as:"button",onClick:()=>R(r),position:"absolute",top:"-6px",right:"-6px",w:"16px",h:"16px",bg:"#170D27",border:"1px solid #271E37",borderRadius:"50%",align:"center",justify:"center",cursor:"pointer",children:n.jsx(h,{as:k,boxSize:2.5,color:"#988BC7"})})]},r)),o.length<8&&n.jsx(s,{as:"button",onClick:T,w:"32px",h:"32px",borderRadius:"6px",border:"2px dashed #392e4e",align:"center",justify:"center",cursor:"pointer",_hover:{borderColor:"#5227FF"},transition:"border-color 0.2s",children:n.jsx(h,{as:O,boxSize:4,color:"#988BC7"})})]}),n.jsx(a,{bg:`linear-gradient(to right, ${[...o,o[0]].join(", ")})`,w:"100%",maxW:"300px",h:"12px",borderRadius:"md",border:"1px solid #271E37",mt:3})]})]}),n.jsx(j,{data:C})]}),n.jsx(E,{children:n.jsx(M,{codeObject:W,componentName:"GradientText"})})]})})};export{rn as default};
