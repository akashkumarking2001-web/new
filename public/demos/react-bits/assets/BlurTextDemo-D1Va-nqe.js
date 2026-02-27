import{r as l,j as n,bL as E,B as F,bh as I,F as N,e as T,a as k}from"./index-CKqfvLoB.js";import{u as P,C as K,T as V,P as O,a as _,b as L,c as z}from"./PropTable-BzD4cJVp.js";import{R as H}from"./RefreshButton-CpmD4Uvc.js";import{D as W}from"./Dependencies-DmSBXzNX.js";import{u as U}from"./useForceRerender-0lK0qxlp.js";import{C as $}from"./Customize-BaUKAf5J.js";import{P as q}from"./PreviewSlider-25yjOF_X.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";const G=(t,o)=>{const p=new Set([...Object.keys(t),...o.flatMap(e=>Object.keys(e))]),i={};return p.forEach(e=>{i[e]=[t[e],...o.map(r=>r[e])]}),i},J=({text:t="",delay:o=200,className:p="",animateBy:i="words",direction:e="top",threshold:r=.1,rootMargin:c="0px",animationFrom:y,animationTo:m,easing:x=u=>u,onAnimationComplete:h,stepDuration:S=.35})=>{const u=i==="words"?t.split(" "):t.split(""),[v,A]=l.useState(!1),f=l.useRef(null);l.useEffect(()=>{if(!f.current)return;const a=new IntersectionObserver(([s])=>{s.isIntersecting&&(A(!0),a.unobserve(f.current))},{threshold:r,rootMargin:c});return a.observe(f.current),()=>a.disconnect()},[r,c]);const B=l.useMemo(()=>e==="top"?{filter:"blur(10px)",opacity:0,y:-50}:{filter:"blur(10px)",opacity:0,y:50},[e]),M=l.useMemo(()=>[{filter:"blur(5px)",opacity:.5,y:e==="top"?5:-5},{filter:"blur(0px)",opacity:1,y:0}],[e]),b=y??B,g=m??M,d=g.length+1,j=S*(d-1),D=Array.from({length:d},(a,s)=>d===1?0:s/(d-1));return n.jsx("p",{ref:f,className:p,style:{display:"flex",flexWrap:"wrap"},children:u.map((a,s)=>{const R=G(b,g),w={duration:j,times:D,delay:s*o/1e3};return w.ease=x,n.jsxs(E.span,{className:"inline-block will-change-[transform,filter,opacity]",initial:b,animate:v?R:b,transition:w,onAnimationComplete:s===u.length-1?h:void 0,children:[a===" "?" ":a,i==="words"&&s<u.length-1&&" "]},s)})})},Q=`import { motion } from 'motion/react';
import { useEffect, useRef, useState, useMemo } from 'react';

const buildKeyframes = (from, steps) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);

  const keyframes = {};
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });
  return keyframes;
};

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = t => t,
  onAnimationComplete,
  stepDuration = 0.35
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === 'top' ? { filter: 'blur(10px)', opacity: 0, y: -50 } : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 }
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

  return (
    <p ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000
        };
        spanTransition.ease = easing;

        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
          >
            {segment === ' ' ? '\\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\\u00A0'}
          </motion.span>
        );
      })}
    </p>
  );
};

export default BlurText;
`,X=`import { motion } from 'motion/react';
import { useEffect, useRef, useState, useMemo } from 'react';

const buildKeyframes = (from, steps) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);

  const keyframes = {};
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });
  return keyframes;
};

const BlurText = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = t => t,
  onAnimationComplete,
  stepDuration = 0.35
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === 'top' ? { filter: 'blur(10px)', opacity: 0, y: -50 } : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 }
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

  return (
    <p ref={ref} className={\`blur-text \${className} flex flex-wrap\`}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000
        };
        spanTransition.ease = easing;

        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
          >
            {segment === ' ' ? '\\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\\u00A0'}
          </motion.span>
        );
      })}
    </p>
  );
};

export default BlurText;
`,Y=`import { motion, Transition } from 'motion/react';
import { useEffect, useRef, useState, useMemo } from 'react';

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  easing?: (t: number) => number;
  onAnimationComplete?: () => void;
  stepDuration?: number;
};

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);

  const keyframes: Record<string, Array<string | number>> = {};
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });
  return keyframes;
};

const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t: number) => t,
  onAnimationComplete,
  stepDuration = 0.35
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === 'top' ? { filter: 'blur(10px)', opacity: 0, y: -50 } : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 }
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

  return (
    <p ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition: Transition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing
        };

        return (
          <motion.span
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
            style={{
              display: 'inline-block',
              willChange: 'transform, filter, opacity'
            }}
          >
            {segment === ' ' ? '\\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\\u00A0'}
          </motion.span>
        );
      })}
    </p>
  );
};

export default BlurText;
`,Z=`import { motion, Transition, Easing } from 'motion/react';
import { useEffect, useRef, useState, useMemo } from 'react';

type BlurTextProps = {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Array<Record<string, string | number>>;
  easing?: Easing | Easing[];
  onAnimationComplete?: () => void;
  stepDuration?: number;
};

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Array<Record<string, string | number>>
): Record<string, Array<string | number>> => {
  const keys = new Set<string>([...Object.keys(from), ...steps.flatMap(s => Object.keys(s))]);

  const keyframes: Record<string, Array<string | number>> = {};
  keys.forEach(k => {
    keyframes[k] = [from[k], ...steps.map(s => s[k])];
  });
  return keyframes;
};

const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t: number) => t,
  onAnimationComplete,
  stepDuration = 0.35
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === 'top' ? { filter: 'blur(10px)', opacity: 0, y: -50 } : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 }
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)));

  return (
    <p ref={ref} className={\`blur-text \${className} flex flex-wrap\`}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition: Transition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing
        };

        return (
          <motion.span
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
            style={{
              display: 'inline-block',
              willChange: 'transform, filter, opacity'
            }}
          >
            {segment === ' ' ? '\\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\\u00A0'}
          </motion.span>
        );
      })}
    </p>
  );
};

export default BlurText;
`,nn={dependencies:"motion",usage:`import BlurText from "./BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

<BlurText
  text="Isn't this so cool?!"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-2xl mb-8"
/>`,code:Q,tailwind:X,tsCode:Y,tsTailwind:Z},C={text:"Isn't this so cool?!",animateBy:"words",direction:"top",delay:200},un=()=>{const{props:t,updateProp:o,resetProps:p,hasChanges:i}=P(C),{animateBy:e,direction:r,delay:c}=t,[y,m]=U(),x=l.useMemo(()=>[{name:"text",type:"string",default:'""',description:"The text content to animate."},{name:"animateBy",type:"string",default:'"words"',description:"Determines whether to animate by 'words' or 'letters'."},{name:"direction",type:"string",default:'"top"',description:"Direction from which the words/letters appear ('top' or 'bottom')."},{name:"delay",type:"number",default:"200",description:"Delay between animations for each word/letter (in ms)."},{name:"stepDuration",type:"number",default:"0.35",description:"The time taken for each letter/word to animate (in seconds)."},{name:"threshold",type:"number",default:"0.1",description:"Intersection threshold for triggering the animation."},{name:"rootMargin",type:"string",default:'"0px"',description:"Root margin for the intersection observer."},{name:"onAnimationComplete",type:"function",default:"undefined",description:"Callback function triggered when all animations complete."}],[]);return n.jsx(K,{props:t,defaultProps:C,resetProps:p,hasChanges:i,children:n.jsxs(V,{children:[n.jsxs(O,{children:[n.jsxs(F,{position:"relative",className:"demo-container",minH:400,overflow:"hidden",children:[n.jsx(H,{onClick:m}),n.jsx(J,{text:t.text,animateBy:e,direction:r,delay:c,onAnimationComplete:()=>I("✅ Animation Finished!"),className:"blur-text-demo"},y)]}),n.jsxs($,{children:[n.jsxs(N,{gap:4,wrap:"wrap",align:"center",children:[n.jsxs(T,{fontSize:"xs",bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:8,onClick:()=>{o("animateBy",e==="words"?"letters":"words"),m()},children:["Animate By: ",n.jsxs(k,{color:"#a1a1aa",children:[" ",e]})]}),n.jsxs(T,{fontSize:"xs",bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:8,onClick:()=>{o("direction",r==="top"?"bottom":"top"),m()},children:["Direction: ",n.jsxs(k,{color:"#a1a1aa",children:[" ",r]})]})]}),n.jsx(q,{title:"Delay",min:50,max:500,step:10,value:c,valueUnit:"ms",onChange:h=>{o("delay",h),m()},width:200})]}),n.jsx(_,{data:x}),n.jsx(W,{dependencyList:["motion"]})]}),n.jsx(L,{children:n.jsx(z,{codeObject:nn,componentName:"BlurText"})})]})})};export{un as default};
