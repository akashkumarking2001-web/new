import{r as i,bJ as N,c6 as A,bK as L,j as n,bL as w,B as W}from"./index-CKqfvLoB.js";import{u as V,C as z,T as B,P as U,a as _,b as J,c as K}from"./PropTable-BzD4cJVp.js";import{P as k}from"./PreviewSlider-25yjOF_X.js";import{P}from"./PreviewSwitch-B0BSuWrO.js";import{P as M}from"./PreviewColorPicker-CzrUogGC.js";import{P as Y}from"./PreviewSelect-CM4Sns8B.js";import{C as q}from"./Customize-BaUKAf5J.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";import"./switch-CqqRi5Az.js";import"./field-DGUMYGrq.js";const G=({text:y,disabled:t=!1,speed:D=2,className:C="",color:a="#b5b5b5",shineColor:h="#ffffff",spread:T=120,yoyo:g=!1,pauseOnHover:c=!1,direction:u="left",delay:b=0})=>{const[R,d]=i.useState(!1),s=N(0),e=i.useRef(0),m=i.useRef(null),l=i.useRef(u==="left"?1:-1),o=D*1e3,S=b*1e3;A(p=>{if(t||R){m.current=null;return}if(m.current===null){m.current=p;return}const F=p-m.current;if(m.current=p,e.current+=F,g){const f=o+S,x=f*2,r=e.current%x;if(r<o){const v=r/o*100;s.set(l.current===1?v:100-v)}else if(r<f)s.set(l.current===1?100:0);else if(r<f+o){const $=100-(r-f)/o*100;s.set(l.current===1?$:100-$)}else s.set(l.current===1?0:100)}else{const f=o+S,x=e.current%f;if(x<o){const r=x/o*100;s.set(l.current===1?r:100-r)}else s.set(l.current===1?100:0)}}),i.useEffect(()=>{l.current=u==="left"?1:-1,e.current=0,s.set(0)},[u]);const O=L(s,p=>`${150-p*2}% center`),H=i.useCallback(()=>{c&&d(!0)},[c]),j=i.useCallback(()=>{c&&d(!1)},[c]),I={backgroundImage:`linear-gradient(${T}deg, ${a} 0%, ${a} 35%, ${h} 50%, ${a} 65%, ${a} 100%)`,backgroundSize:"200% auto",WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent"};return n.jsx(w.span,{className:`shiny-text ${C}`,style:{...I,backgroundPosition:O},onMouseEnter:H,onMouseLeave:j,children:y})},Q=`import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'motion/react';
import './ShinyText.css';

const ShinyText = ({
  text,
  disabled = false,
  speed = 2,
  className = '',
  color = '#b5b5b5',
  shineColor = '#ffffff',
  spread = 120,
  yoyo = false,
  pauseOnHover = false,
  direction = 'left',
  delay = 0
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);
  const directionRef = useRef(direction === 'left' ? 1 : -1);

  const animationDuration = speed * 1000;
  const delayDuration = delay * 1000;

  useAnimationFrame(time => {
    if (disabled || isPaused) {
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
      const cycleDuration = animationDuration + delayDuration;
      const fullCycle = cycleDuration * 2;
      const cycleTime = elapsedRef.current % fullCycle;

      if (cycleTime < animationDuration) {
        // Forward animation: 0 -> 100
        const p = (cycleTime / animationDuration) * 100;
        progress.set(directionRef.current === 1 ? p : 100 - p);
      } else if (cycleTime < cycleDuration) {
        // Delay at end
        progress.set(directionRef.current === 1 ? 100 : 0);
      } else if (cycleTime < cycleDuration + animationDuration) {
        // Reverse animation: 100 -> 0
        const reverseTime = cycleTime - cycleDuration;
        const p = 100 - (reverseTime / animationDuration) * 100;
        progress.set(directionRef.current === 1 ? p : 100 - p);
      } else {
        // Delay at start
        progress.set(directionRef.current === 1 ? 0 : 100);
      }
    } else {
      const cycleDuration = animationDuration + delayDuration;
      const cycleTime = elapsedRef.current % cycleDuration;

      if (cycleTime < animationDuration) {
        // Animation phase: 0 -> 100
        const p = (cycleTime / animationDuration) * 100;
        progress.set(directionRef.current === 1 ? p : 100 - p);
      } else {
        // Delay phase - hold at end (shine off-screen)
        progress.set(directionRef.current === 1 ? 100 : 0);
      }
    }
  });

  useEffect(() => {
    directionRef.current = direction === 'left' ? 1 : -1;
    elapsedRef.current = 0;
    progress.set(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  // Transform: p=0 -> 150% (shine off right), p=100 -> -50% (shine off left)
  const backgroundPosition = useTransform(progress, p => \`\${150 - p * 2}% center\`);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  const gradientStyle = {
    backgroundImage: \`linear-gradient(\${spread}deg, \${color} 0%, \${color} 35%, \${shineColor} 50%, \${color} 65%, \${color} 100%)\`,
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  return (
    <motion.span
      className={\`shiny-text \${className}\`}
      style={{ ...gradientStyle, backgroundPosition }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </motion.span>
  );
};

export default ShinyText;
`,X=`.shiny-text {
  display: inline-block;
}
`,Z=`import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'motion/react';

const ShinyText = ({
  text,
  disabled = false,
  speed = 2,
  className = '',
  color = '#b5b5b5',
  shineColor = '#ffffff',
  spread = 120,
  yoyo = false,
  pauseOnHover = false,
  direction = 'left',
  delay = 0
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);
  const directionRef = useRef(direction === 'left' ? 1 : -1);

  const animationDuration = speed * 1000;
  const delayDuration = delay * 1000;

  useAnimationFrame(time => {
    if (disabled || isPaused) {
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

    // Animation goes from 0 to 100
    if (yoyo) {
      const cycleDuration = animationDuration + delayDuration;
      const fullCycle = cycleDuration * 2;
      const cycleTime = elapsedRef.current % fullCycle;

      if (cycleTime < animationDuration) {
        // Forward animation: 0 -> 100
        const p = (cycleTime / animationDuration) * 100;
        progress.set(directionRef.current === 1 ? p : 100 - p);
      } else if (cycleTime < cycleDuration) {
        // Delay at end
        progress.set(directionRef.current === 1 ? 100 : 0);
      } else if (cycleTime < cycleDuration + animationDuration) {
        // Reverse animation: 100 -> 0
        const reverseTime = cycleTime - cycleDuration;
        const p = 100 - (reverseTime / animationDuration) * 100;
        progress.set(directionRef.current === 1 ? p : 100 - p);
      } else {
        // Delay at start
        progress.set(directionRef.current === 1 ? 0 : 100);
      }
    } else {
      const cycleDuration = animationDuration + delayDuration;
      const cycleTime = elapsedRef.current % cycleDuration;

      if (cycleTime < animationDuration) {
        // Animation phase: 0 -> 100
        const p = (cycleTime / animationDuration) * 100;
        progress.set(directionRef.current === 1 ? p : 100 - p);
      } else {
        // Delay phase - hold at end (shine off-screen)
        progress.set(directionRef.current === 1 ? 100 : 0);
      }
    }
  });

  useEffect(() => {
    directionRef.current = direction === 'left' ? 1 : -1;
    elapsedRef.current = 0;
    progress.set(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  // Transform: p=0 -> 150% (shine off right), p=100 -> -50% (shine off left)
  const backgroundPosition = useTransform(progress, p => \`\${150 - p * 2}% center\`);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  const gradientStyle = {
    backgroundImage: \`linear-gradient(\${spread}deg, \${color} 0%, \${color} 35%, \${shineColor} 50%, \${color} 65%, \${color} 100%)\`,
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  return (
    <motion.span
      className={\`inline-block \${className}\`}
      style={{ ...gradientStyle, backgroundPosition }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </motion.span>
  );
};

export default ShinyText;
`,ee=`import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'motion/react';
import './ShinyText.css';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  spread?: number;
  yoyo?: boolean;
  pauseOnHover?: boolean;
  direction?: 'left' | 'right';
  delay?: number;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 2,
  className = '',
  color = '#b5b5b5',
  shineColor = '#ffffff',
  spread = 120,
  yoyo = false,
  pauseOnHover = false,
  direction = 'left',
  delay = 0
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const directionRef = useRef(direction === 'left' ? 1 : -1);

  const animationDuration = speed * 1000;
  const delayDuration = delay * 1000;

  useAnimationFrame(time => {
    if (disabled || isPaused) {
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

    // Animation goes from 0 to 100
    if (yoyo) {
      const cycleDuration = animationDuration + delayDuration;
      const fullCycle = cycleDuration * 2;
      const cycleTime = elapsedRef.current % fullCycle;

      if (cycleTime < animationDuration) {
        // Forward animation: 0 -> 100
        const p = (cycleTime / animationDuration) * 100;
        progress.set(directionRef.current === 1 ? p : 100 - p);
      } else if (cycleTime < cycleDuration) {
        // Delay at end
        progress.set(directionRef.current === 1 ? 100 : 0);
      } else if (cycleTime < cycleDuration + animationDuration) {
        // Reverse animation: 100 -> 0
        const reverseTime = cycleTime - cycleDuration;
        const p = 100 - (reverseTime / animationDuration) * 100;
        progress.set(directionRef.current === 1 ? p : 100 - p);
      } else {
        // Delay at start
        progress.set(directionRef.current === 1 ? 0 : 100);
      }
    } else {
      const cycleDuration = animationDuration + delayDuration;
      const cycleTime = elapsedRef.current % cycleDuration;

      if (cycleTime < animationDuration) {
        // Animation phase: 0 -> 100
        const p = (cycleTime / animationDuration) * 100;
        progress.set(directionRef.current === 1 ? p : 100 - p);
      } else {
        // Delay phase - hold at end (shine off-screen)
        progress.set(directionRef.current === 1 ? 100 : 0);
      }
    }
  });

  useEffect(() => {
    directionRef.current = direction === 'left' ? 1 : -1;
    elapsedRef.current = 0;
    progress.set(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  // Transform: p=0 -> 150% (shine off right), p=100 -> -50% (shine off left)
  const backgroundPosition = useTransform(progress, p => \`\${150 - p * 2}% center\`);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  const gradientStyle: React.CSSProperties = {
    backgroundImage: \`linear-gradient(\${spread}deg, \${color} 0%, \${color} 35%, \${shineColor} 50%, \${color} 65%, \${color} 100%)\`,
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  return (
    <motion.span
      className={\`shiny-text \${className}\`}
      style={{ ...gradientStyle, backgroundPosition }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </motion.span>
  );
};

export default ShinyText;
`,ne=`import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useTransform } from 'motion/react';

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  spread?: number;
  yoyo?: boolean;
  pauseOnHover?: boolean;
  direction?: 'left' | 'right';
  delay?: number;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 2,
  className = '',
  color = '#b5b5b5',
  shineColor = '#ffffff',
  spread = 120,
  yoyo = false,
  pauseOnHover = false,
  direction = 'left',
  delay = 0
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const directionRef = useRef(direction === 'left' ? 1 : -1);

  const animationDuration = speed * 1000;
  const delayDuration = delay * 1000;

  useAnimationFrame(time => {
    if (disabled || isPaused) {
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

    // Animation goes from 0 to 100
    if (yoyo) {
      const cycleDuration = animationDuration + delayDuration;
      const fullCycle = cycleDuration * 2;
      const cycleTime = elapsedRef.current % fullCycle;

      if (cycleTime < animationDuration) {
        // Forward animation: 0 -> 100
        const p = (cycleTime / animationDuration) * 100;
        progress.set(directionRef.current === 1 ? p : 100 - p);
      } else if (cycleTime < cycleDuration) {
        // Delay at end
        progress.set(directionRef.current === 1 ? 100 : 0);
      } else if (cycleTime < cycleDuration + animationDuration) {
        // Reverse animation: 100 -> 0
        const reverseTime = cycleTime - cycleDuration;
        const p = 100 - (reverseTime / animationDuration) * 100;
        progress.set(directionRef.current === 1 ? p : 100 - p);
      } else {
        // Delay at start
        progress.set(directionRef.current === 1 ? 0 : 100);
      }
    } else {
      const cycleDuration = animationDuration + delayDuration;
      const cycleTime = elapsedRef.current % cycleDuration;

      if (cycleTime < animationDuration) {
        // Animation phase: 0 -> 100
        const p = (cycleTime / animationDuration) * 100;
        progress.set(directionRef.current === 1 ? p : 100 - p);
      } else {
        // Delay phase - hold at end (shine off-screen)
        progress.set(directionRef.current === 1 ? 100 : 0);
      }
    }
  });

  useEffect(() => {
    directionRef.current = direction === 'left' ? 1 : -1;
    elapsedRef.current = 0;
    progress.set(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  // Transform: p=0 -> 150% (shine off right), p=100 -> -50% (shine off left)
  const backgroundPosition = useTransform(progress, p => \`\${150 - p * 2}% center\`);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  const gradientStyle: React.CSSProperties = {
    backgroundImage: \`linear-gradient(\${spread}deg, \${color} 0%, \${color} 35%, \${shineColor} 50%, \${color} 65%, \${color} 100%)\`,
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  return (
    <motion.span
      className={\`inline-block \${className}\`}
      style={{ ...gradientStyle, backgroundPosition }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </motion.span>
  );
};

export default ShinyText;
//   plugins: [],
// };
`,te={dependencies:"motion",usage:`import ShinyText from './ShinyText';

<ShinyText
  text="✨ Shiny Text Effect"
  speed={2}
  delay={0}
  color="#b5b5b5"
  shineColor="#ffffff"
  spread={120}
  direction="left"
  yoyo={false}
  pauseOnHover={false}
/>`,code:Q,css:X,tailwind:Z,tsCode:ee,tsTailwind:ne},E={speed:2,delay:0,color:"#b5b5b5",shineColor:"#ffffff",spread:120,direction:"left",yoyo:!1,pauseOnHover:!1,disabled:!1},se=[{value:"left",label:"Left"},{value:"right",label:"Right"}],he=()=>{const{props:y,updateProp:t,resetProps:D,hasChanges:C}=V(E),{speed:a,delay:h,color:T,shineColor:g,spread:c,direction:u,yoyo:b,pauseOnHover:R,disabled:d}=y,s=i.useMemo(()=>[{name:"text",type:"string",default:"-",description:"The text to be displayed with the shiny effect."},{name:"color",type:"string",default:'"#b5b5b5"',description:"The base color of the text."},{name:"shineColor",type:"string",default:'"#ffffff"',description:"The color of the shine/highlight effect."},{name:"speed",type:"number",default:"2",description:"Duration of one animation cycle in seconds."},{name:"delay",type:"number",default:"0",description:"Pause duration (in seconds) between animation cycles."},{name:"spread",type:"number",default:"120",description:"The angle (in degrees) of the gradient spread."},{name:"yoyo",type:"boolean",default:"false",description:"If true, the animation reverses direction instead of looping."},{name:"pauseOnHover",type:"boolean",default:"false",description:"Pauses the animation when the user hovers over the text."},{name:"direction",type:"'left' | 'right'",default:'"left"',description:"The direction the shine moves across the text."},{name:"disabled",type:"boolean",default:"false",description:"Disables the shiny effect when set to true."},{name:"className",type:"string",default:"''",description:"Adds custom classes to the root element."}],[]);return n.jsx(z,{props:y,defaultProps:E,resetProps:D,hasChanges:C,children:n.jsxs(B,{children:[n.jsxs(U,{children:[n.jsx(W,{position:"relative",className:"demo-container",minH:400,fontSize:"32px",fontWeight:"600",children:n.jsx(G,{text:"✨ Shiny Text Effect",speed:a,delay:h,color:T,shineColor:g,spread:c,direction:u,yoyo:b,pauseOnHover:R,disabled:d})}),n.jsxs(q,{children:[n.jsx(k,{title:"Speed",min:.5,max:5,step:.1,value:a,valueUnit:"s",onChange:e=>t("speed",e)}),n.jsx(k,{title:"Delay",min:0,max:3,step:.1,value:h,valueUnit:"s",onChange:e=>t("delay",e)}),n.jsx(k,{title:"Spread",min:0,max:180,step:5,value:c,valueUnit:"°",onChange:e=>t("spread",e)}),n.jsx(M,{title:"Text Color",color:T,setColor:e=>t("color",e)}),n.jsx(M,{title:"Shine Color",color:g,setColor:e=>t("shineColor",e)}),n.jsx(Y,{title:"Direction",options:se,value:u,onChange:e=>t("direction",e)}),n.jsx(P,{title:"Yoyo Mode",isChecked:b,onChange:e=>t("yoyo",e)}),n.jsx(P,{title:"Pause on Hover",isChecked:R,onChange:e=>t("pauseOnHover",e)}),n.jsx(P,{title:"Disabled",isChecked:d,onChange:e=>t("disabled",e)})]}),n.jsx(_,{data:s})]}),n.jsx(J,{children:n.jsx(K,{codeObject:te,componentName:"ShinyText"})})]})})};export{he as default};
