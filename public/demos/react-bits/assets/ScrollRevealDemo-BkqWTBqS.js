import{r as i,j as e,Z as g,a0 as S,B as x,a as y}from"./index-CKqfvLoB.js";import{u as C,C as v,T as N,P as A,a as O,b as j,c as P}from"./PropTable-BzD4cJVp.js";import{u as B}from"./useForceRerender-0lK0qxlp.js";import{D as $}from"./Dependencies-DmSBXzNX.js";import{P as R}from"./PreviewSlider-25yjOF_X.js";import{P as M}from"./PreviewSwitch-B0BSuWrO.js";import{C as k}from"./Customize-BaUKAf5J.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";import"./switch-CqqRi5Az.js";g.registerPlugin(S);const L=({children:t,scrollContainerRef:l,enableBlur:a=!0,baseOpacity:u=.1,baseRotation:d=3,blurStrength:c=4,containerClassName:f="",textClassName:b="",rotationEnd:m="bottom bottom",wordAnimationEnd:p="bottom bottom"})=>{const s=i.useRef(null),h=i.useMemo(()=>(typeof t=="string"?t:"").split(/(\s+)/).map((r,o)=>r.match(/^\s+$/)?r:e.jsx("span",{className:"word",children:r},o)),[t]);return i.useEffect(()=>{const n=s.current;if(!n)return;const r=l&&l.current?l.current:window;g.fromTo(n,{transformOrigin:"0% 50%",rotate:d},{ease:"none",rotate:0,scrollTrigger:{trigger:n,scroller:r,start:"top bottom",end:m,scrub:!0}});const o=n.querySelectorAll(".word");return g.fromTo(o,{opacity:u,willChange:"opacity"},{ease:"none",opacity:1,stagger:.05,scrollTrigger:{trigger:n,scroller:r,start:"top bottom-=20%",end:p,scrub:!0}}),a&&g.fromTo(o,{filter:`blur(${c}px)`},{ease:"none",filter:"blur(0px)",stagger:.05,scrollTrigger:{trigger:n,scroller:r,start:"top bottom-=20%",end:p,scrub:!0}}),()=>{S.getAll().forEach(w=>w.kill())}},[l,a,d,u,m,p,c]),e.jsx("h2",{ref:s,className:`scroll-reveal ${f}`,children:e.jsx("p",{className:`scroll-reveal-text ${b}`,children:h})})},W=`import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\\s+)/).map((word, index) => {
      if (word.match(/^\\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true
        }
      }
    );

    const wordElements = el.querySelectorAll('.word');

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true
        }
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: \`blur(\${blurStrength}px)\` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <h2 ref={containerRef} className={\`scroll-reveal \${containerClassName}\`}>
      <p className={\`scroll-reveal-text \${textClassName}\`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
`,H=`.scroll-reveal {
  margin: 20px 0;
}

.scroll-reveal-text {
  font-size: clamp(1.6rem, 4vw, 3rem);
  line-height: 1.5;
  font-weight: 600;
}

.word {
  display: inline-block;
}
`,D=`import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\\s+)/).map((word, index) => {
      if (word.match(/^\\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true
        }
      }
    );

    const wordElements = el.querySelectorAll('.word');

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true
        }
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: \`blur(\${blurStrength}px)\` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <h2 ref={containerRef} className={\`my-5 \${containerClassName}\`}>
      <p className={\`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold \${textClassName}\`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
`,q=`import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\\s+)/).map((word, index) => {
      if (word.match(/^\\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true
        }
      }
    );

    const wordElements = el.querySelectorAll<HTMLElement>('.word');

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true
        }
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: \`blur(\${blurStrength}px)\` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <h2 ref={containerRef} className={\`scroll-reveal \${containerClassName}\`}>
      <p className={\`scroll-reveal-text \${textClassName}\`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
`,F=`import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\\s+)/).map((word, index) => {
      if (word.match(/^\\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    gsap.fromTo(
      el,
      { transformOrigin: '0% 50%', rotate: baseRotation },
      {
        ease: 'none',
        rotate: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom',
          end: rotationEnd,
          scrub: true
        }
      }
    );

    const wordElements = el.querySelectorAll<HTMLElement>('.word');

    gsap.fromTo(
      wordElements,
      { opacity: baseOpacity, willChange: 'opacity' },
      {
        ease: 'none',
        opacity: 1,
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true
        }
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { filter: \`blur(\${blurStrength}px)\` },
        {
          ease: 'none',
          filter: 'blur(0px)',
          stagger: 0.05,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom-=20%',
            end: wordAnimationEnd,
            scrub: true
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <h2 ref={containerRef} className={\`my-5 \${containerClassName}\`}>
      <p className={\`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold \${textClassName}\`}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
`,z={dependencies:"gsap",usage:`import ScrollReveal from './ScrollReveal';

<ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
>
  When does a man die? When he is hit by a bullet? No! When he suffers a disease?
  No! When he ate a soup made out of a poisonous mushroom?
  No! A man dies when he is forgotten!
</ScrollReveal>`,code:W,css:H,tailwind:D,tsCode:q,tsTailwind:F},T={enableBlur:!0,baseOpacity:.1,baseRotation:3,blurStrength:4},nn=()=>{const t=i.useRef(null),{props:l,updateProp:a,resetProps:u,hasChanges:d}=C(T),{enableBlur:c,baseOpacity:f,baseRotation:b,blurStrength:m}=l,[p,s]=B();i.useEffect(()=>{const n=t.current;if(!n)return;const r=o=>{o.preventDefault();const E=(o.deltaY||o.detail||o.wheelDelta)*2;g.to(n,{scrollTop:n.scrollTop+E,duration:2,ease:"power3.out",overwrite:"auto"})};return n.addEventListener("wheel",r,{passive:!1}),()=>{n.removeEventListener("wheel",r)}},[]);const h=i.useMemo(()=>[{name:"children",type:"ReactNode",default:"—",description:"The text or elements to be animated. If a string is provided, it will be split into words."},{name:"scrollContainerRef",type:"React.RefObject",default:"window",description:"Optional ref for the scroll container. If provided, GSAP will use this container for scroll triggers; otherwise, it defaults to the window."},{name:"enableBlur",type:"boolean",default:"true",description:"Enables the blur animation effect on the words."},{name:"baseOpacity",type:"number",default:"0.1",description:"The initial opacity value for the words before the animation."},{name:"baseRotation",type:"number",default:"3",description:"The starting rotation (in degrees) for the container before it animates to 0."},{name:"blurStrength",type:"number",default:"4",description:"The strength of the blur effect (in pixels) applied at the start of the animation."},{name:"containerClassName",type:"string",default:'""',description:"Additional CSS class(es) to apply to the container element."},{name:"textClassName",type:"string",default:'""',description:"Additional CSS class(es) to apply to the text element."},{name:"rotationEnd",type:"string",default:'"bottom bottom"',description:"The scroll trigger end point for the container rotation animation."},{name:"wordAnimationEnd",type:"string",default:'"bottom bottom"',description:"The scroll trigger end point for the word opacity and blur animations. The animation will complete when the bottom of the text reaches the bottom of the container."}],[]);return e.jsx(v,{props:l,defaultProps:T,resetProps:u,hasChanges:d,children:e.jsxs(N,{children:[e.jsxs(A,{children:[e.jsxs(x,{className:"demo-container",style:{height:"400px",maxHeight:"400px"},overflowY:"scroll",overflowX:"hidden",ref:t,position:"relative",children:[e.jsx(y,{textAlign:"center",color:"#271E37",fontSize:"clamp(4rem, 6vw, 4rem)",fontWeight:900,position:"absolute",top:"50%",transform:"translateY(-50%)",children:"Scroll Down"}),e.jsx(x,{position:"relative",pt:1600,pb:600,px:"3rem",children:e.jsx(L,{scrollContainerRef:t,baseOpacity:f,enableBlur:c,baseRotation:b,blurStrength:m,children:"When does a man die? When he is hit by a bullet? No! When he suffers a disease? No! When he ate a soup made out of a poisonous mushroom? No! A man dies when he is forgotten!"},p)})]}),e.jsxs(k,{children:[e.jsx(M,{title:"Enable Blur",isChecked:c,onChange:n=>{t.current.scrollTo({top:0,behavior:"smooth"}),a("enableBlur",n),s()}}),e.jsx(R,{title:"Blur Strength",min:0,max:15,step:1,value:m,onChange:n=>{t.current.scrollTo({top:0,behavior:"smooth"}),a("blurStrength",n),s()}}),e.jsx(R,{title:"Starting Opacity",min:0,max:1,step:.1,value:f,onChange:n=>{t.current.scrollTo({top:0,behavior:"smooth"}),a("baseOpacity",n),s()}}),e.jsx(R,{title:"Starting Rotation",min:0,max:10,step:1,value:b,onChange:n=>{t.current.scrollTo({top:0,behavior:"smooth"}),a("baseRotation",n),s()},valueUnit:"°"})]}),e.jsx(O,{data:h}),e.jsx($,{dependencyList:["gsap"]})]}),e.jsx(j,{children:e.jsx(P,{codeObject:z,componentName:"ScrollReveal"})})]})})};export{nn as default};
