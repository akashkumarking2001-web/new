import{r as s,j as n,Z as h,a0 as C,B as x,a as y}from"./index-CKqfvLoB.js";import{u as T,C as w,T as E,P as N,a as P,b as v,c as D}from"./PropTable-BzD4cJVp.js";import{u as j}from"./useForceRerender-0lK0qxlp.js";import{D as F}from"./Dependencies-DmSBXzNX.js";import{P as R}from"./PreviewSlider-25yjOF_X.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";h.registerPlugin(C);const k=({children:t,scrollContainerRef:o,containerClassName:m="",textClassName:d="",animationDuration:p=1,ease:l="back.inOut(2)",scrollStart:c="center bottom+=50%",scrollEnd:g="bottom bottom-=40%",stagger:i=.03})=>{const u=s.useRef(null),e=s.useMemo(()=>(typeof t=="string"?t:"").split("").map((r,f)=>n.jsx("span",{className:"char",children:r===" "?" ":r},f)),[t]);return s.useEffect(()=>{const a=u.current;if(!a)return;const r=o&&o.current?o.current:window,f=a.querySelectorAll(".char");h.fromTo(f,{willChange:"opacity, transform",opacity:0,yPercent:120,scaleY:2.3,scaleX:.7,transformOrigin:"50% 0%"},{duration:p,ease:l,opacity:1,yPercent:0,scaleY:1,scaleX:1,stagger:i,scrollTrigger:{trigger:a,scroller:r,start:c,end:g,scrub:!0}})},[o,p,l,c,g,i]),n.jsx("h2",{ref:u,className:`scroll-float ${m}`,children:n.jsx("span",{className:`scroll-float-text ${d}`,children:e})})},O=`import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span className="char" key={index}>
        {char === ' ' ? '\\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const charElements = el.querySelectorAll('.char');

    gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        }
      }
    );
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2 ref={containerRef} className={\`scroll-float \${containerClassName}\`}>
      <span className={\`scroll-float-text \${textClassName}\`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
`,M=`.scroll-float {
  overflow: hidden;
}

.scroll-float-text {
  display: inline-block;
  font-size: clamp(1.6rem, 8vw, 10rem);
  font-weight: 900;
  text-align: center;
  line-height: 1.5;
}

.char {
  display: inline-block;
}
`,A=`import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span className="inline-block word" key={index}>
        {char === ' ' ? '\\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const charElements = el.querySelectorAll('.inline-block');

    gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        }
      }
    );
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2 ref={containerRef} className={\`my-5 overflow-hidden \${containerClassName}\`}>
      <span className={\`inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] \${textClassName}\`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
`,Y=`import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span className="char" key={index}>
        {char === ' ' ? '\\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const charElements = el.querySelectorAll('.char');

    gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        }
      }
    );
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2 ref={containerRef} className={\`scroll-float \${containerClassName}\`}>
      <span className={\`scroll-float-text \${textClassName}\`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
`,X=`import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split('').map((char, index) => (
      <span className="inline-block word" key={index}>
        {char === ' ' ? '\\u00A0' : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const charElements = el.querySelectorAll('.inline-block');

    gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        }
      }
    );
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2 ref={containerRef} className={\`my-5 overflow-hidden \${containerClassName}\`}>
      <span className={\`inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] \${textClassName}\`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
`,L={dependencies:"gsap",usage:`import ScrollFloat from './ScrollFloat';

<ScrollFloat
  animationDuration={1}
  ease='back.inOut(2)'
  scrollStart='center bottom+=50%'
  scrollEnd='bottom bottom-=40%'
  stagger={0.03}
>
  React Bits
</ScrollFloat>`,code:O,css:M,tailwind:A,tsCode:Y,tsTailwind:X},b={stagger:.03,duration:1},Z=()=>{const t=s.useRef(null),{props:o,updateProp:m,resetProps:d,hasChanges:p}=T(b),{stagger:l,duration:c}=o,[g,i]=j();s.useEffect(()=>{const e=t.current;if(!e)return;const a=r=>{r.preventDefault();const S=(r.deltaY||r.detail||r.wheelDelta)*2;h.to(e,{scrollTop:e.scrollTop+S,duration:2,ease:"power3.out",overwrite:"auto"})};return e.addEventListener("wheel",a,{passive:!1}),()=>{e.removeEventListener("wheel",a)}},[]);const u=s.useMemo(()=>[{name:"children",type:"ReactNode",default:"—",description:"The content to animate. If a string, it will be split into individual characters."},{name:"scrollContainerRef",type:"RefObject<HTMLElement>",default:"window",description:"Optional ref to the scroll container. Defaults to window if not provided."},{name:"containerClassName",type:"string",default:'""',description:"Additional Tailwind classes for the container element."},{name:"textClassName",type:"string",default:'""',description:"Additional Tailwind classes for the text element."},{name:"animationDuration",type:"number",default:"1",description:"Duration (in seconds) of the animation."},{name:"ease",type:"string",default:'"back.inOut(2)"',description:"Easing function used for the animation."},{name:"scrollStart",type:"string",default:'"center bottom+=50%"',description:"The scroll trigger start position."},{name:"scrollEnd",type:"string",default:'"bottom bottom-=40%"',description:"The scroll trigger end position."},{name:"stagger",type:"number",default:"0.03",description:"Delay between the animation start of each character."}],[]);return n.jsx(w,{props:o,defaultProps:b,resetProps:d,hasChanges:p,children:n.jsxs(E,{children:[n.jsxs(N,{children:[n.jsxs(x,{className:"demo-container",style:{height:"400px",maxHeight:"400px"},overflowY:"scroll",overflowX:"hidden",ref:t,position:"relative",children:[n.jsx(y,{textAlign:"center",color:"#271E37",fontSize:"clamp(4rem, 6vw, 4rem)",fontWeight:900,position:"absolute",top:"50%",transform:"translateY(-50%)",children:"Scroll Down"}),n.jsx(x,{position:"relative",pt:1600,pb:600,px:"3rem",children:n.jsx(k,{stagger:l,animationDuration:c,scrollContainerRef:t,children:"React Bits"},g)})]}),n.jsxs("div",{className:"preview-options",children:[n.jsx("h2",{className:"demo-title-extra",children:"Customize"}),n.jsx(R,{title:"Stagger",min:.01,max:.1,step:.01,value:l,onChange:e=>{t.current.scrollTo({top:0,behavior:"smooth"}),m("stagger",e),i()},width:150}),n.jsx(R,{title:"Duration",min:1,max:10,step:.1,value:c,onChange:e=>{t.current.scrollTo({top:0,behavior:"smooth"}),m("duration",e),i()},width:150})]}),n.jsx(P,{data:u}),n.jsx(F,{dependencyList:["gsap"]})]}),n.jsx(v,{children:n.jsx(D,{codeObject:L,componentName:"ScrollFloat"})})]})})};export{Z as default};
