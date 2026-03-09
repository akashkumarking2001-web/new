import{r as E,j as e,B as S,a1 as w,F as g,e as h,a as b}from"./index-CKqfvLoB.js";import{u as D,C as A,T as P,P as R,a as j,b as O,c as F}from"./PropTable-BzD4cJVp.js";import{R as k}from"./RefreshButton-CpmD4Uvc.js";import{u as N}from"./useForceRerender-0lK0qxlp.js";import{P as a}from"./PreviewSlider-25yjOF_X.js";import{P as B}from"./PreviewSwitch-B0BSuWrO.js";import{C as L}from"./Customize-BaUKAf5J.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";import"./switch-CqqRi5Az.js";const I=`import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeContent = ({
  children,
  container,
  blur = false,
  duration = 1000,
  ease = 'power2.out',
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = 'power2.in',
  onComplete,
  onDisappearanceComplete,
  className = '',
  style,
  ...props
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let scrollerTarget = container || document.getElementById('snap-main-container') || null;
    if (typeof scrollerTarget === 'string') {
      scrollerTarget = document.querySelector(scrollerTarget);
    }

    const startPct = (1 - threshold) * 100;

    const getSeconds = val => (typeof val === 'number' && val > 10 ? val / 1000 : val);

    gsap.set(el, {
      autoAlpha: initialOpacity,
      filter: blur ? 'blur(10px)' : 'blur(0px)',
      willChange: 'opacity, filter, transform'
    });

    const tl = gsap.timeline({
      paused: true,
      delay: getSeconds(delay),
      onComplete: () => {
        if (onComplete) onComplete();
        if (disappearAfter > 0) {
          gsap.to(el, {
            autoAlpha: initialOpacity,
            filter: blur ? 'blur(10px)' : 'blur(0px)',
            delay: getSeconds(disappearAfter),
            duration: getSeconds(disappearDuration),
            ease: disappearEase,
            onComplete: () => onDisappearanceComplete?.()
          });
        }
      }
    });

    tl.to(el, {
      autoAlpha: 1,
      filter: 'blur(0px)',
      duration: getSeconds(duration),
      ease: ease
    });

    const st = ScrollTrigger.create({
      trigger: el,
      scroller: scrollerTarget || window,
      start: \`top \${startPct}%\`,
      once: true,
      onEnter: () => tl.play()
    });

    return () => {
      st.kill();
      tl.kill();
      gsap.killTweensOf(el);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className={className} style={style} {...props}>
      {children}
    </div>
  );
};

export default FadeContent;
`,M=`import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeContent = ({
  children,
  container,
  blur = false,
  duration = 1000,
  ease = 'power2.out',
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = 'power2.in',
  onComplete,
  onDisappearanceComplete,
  className = '',
  ...props
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let scrollerTarget = container || document.getElementById('snap-main-container') || null;
    if (typeof scrollerTarget === 'string') {
      scrollerTarget = document.querySelector(scrollerTarget);
    }

    const startPct = (1 - threshold) * 100;
    const getSeconds = val => (val > 10 ? val / 1000 : val);

    gsap.set(el, {
      autoAlpha: initialOpacity,
      filter: blur ? 'blur(10px)' : 'blur(0px)',
      willChange: 'opacity, filter, transform'
    });

    const tl = gsap.timeline({
      paused: true,
      delay: getSeconds(delay),
      onComplete: () => {
        if (onComplete) onComplete();
        if (disappearAfter > 0) {
          gsap.to(el, {
            autoAlpha: initialOpacity,
            filter: blur ? 'blur(10px)' : 'blur(0px)',
            delay: getSeconds(disappearAfter),
            duration: getSeconds(disappearDuration),
            ease: disappearEase,
            onComplete: () => onDisappearanceComplete?.()
          });
        }
      }
    });

    tl.to(el, {
      autoAlpha: 1,
      filter: 'blur(0px)',
      duration: getSeconds(duration),
      ease: ease
    });

    const st = ScrollTrigger.create({
      trigger: el,
      scroller: scrollerTarget || window,
      start: \`top \${startPct}%\`,
      once: true,
      onEnter: () => tl.play()
    });

    return () => {
      st.kill();
      tl.kill();
      gsap.killTweensOf(el);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};

export default FadeContent;
`,H=`import * as React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FadeContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  container?: Element | string | null;
  blur?: boolean;
  duration?: number;
  ease?: string;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  disappearAfter?: number;
  disappearDuration?: number;
  disappearEase?: string;
  onComplete?: () => void;
  onDisappearanceComplete?: () => void;
}

const FadeContent: React.FC<FadeContentProps> = ({
  children,
  container,
  blur = false,
  duration = 1000,
  ease = 'power2.out',
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = 'power2.in',
  onComplete,
  onDisappearanceComplete,
  className = '',
  style,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let scrollerTarget: Element | string | null = container || document.getElementById('snap-main-container') || null;

    if (typeof scrollerTarget === 'string') {
      scrollerTarget = document.querySelector(scrollerTarget);
    }

    const startPct = (1 - threshold) * 100;
    const getSeconds = (val: number) => (val > 10 ? val / 1000 : val);

    gsap.set(el, {
      autoAlpha: initialOpacity,
      filter: blur ? 'blur(10px)' : 'blur(0px)',
      willChange: 'opacity, filter, transform'
    });

    const tl = gsap.timeline({
      paused: true,
      delay: getSeconds(delay),
      onComplete: () => {
        if (onComplete) onComplete();
        if (disappearAfter > 0) {
          gsap.to(el, {
            autoAlpha: initialOpacity,
            filter: blur ? 'blur(10px)' : 'blur(0px)',
            delay: getSeconds(disappearAfter),
            duration: getSeconds(disappearDuration),
            ease: disappearEase,
            onComplete: () => onDisappearanceComplete?.()
          });
        }
      }
    });

    tl.to(el, {
      autoAlpha: 1,
      filter: 'blur(0px)',
      duration: getSeconds(duration),
      ease: ease
    });

    const st = ScrollTrigger.create({
      trigger: el,
      scroller: scrollerTarget || window,
      start: \`top \${startPct}%\`,
      once: true,
      onEnter: () => tl.play()
    });

    return () => {
      st.kill();
      tl.kill();
      gsap.killTweensOf(el);
    };
  }, []);

  return (
    <div ref={ref} className={className} style={{ visibility: 'hidden', ...style }} {...props}>
      {children}
    </div>
  );
};

export default FadeContent;
`,q=`import * as React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FadeContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  container?: Element | string | null;
  blur?: boolean;
  duration?: number;
  ease?: string;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  disappearAfter?: number;
  disappearDuration?: number;
  disappearEase?: string;
  onComplete?: () => void;
  onDisappearanceComplete?: () => void;
}

const FadeContent: React.FC<FadeContentProps> = ({
  children,
  container,
  blur = false,
  duration = 1000,
  ease = 'power2.out',
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = 'power2.in',
  onComplete,
  onDisappearanceComplete,
  className = '',
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let scrollerTarget: Element | string | null = container || document.getElementById('snap-main-container') || null;

    if (typeof scrollerTarget === 'string') {
      scrollerTarget = document.querySelector(scrollerTarget);
    }

    const startPct = (1 - threshold) * 100;
    const getSeconds = (val: number) => (val > 10 ? val / 1000 : val);

    gsap.set(el, {
      autoAlpha: initialOpacity,
      filter: blur ? 'blur(10px)' : 'blur(0px)',
      willChange: 'opacity, filter, transform'
    });

    const tl = gsap.timeline({
      paused: true,
      delay: getSeconds(delay),
      onComplete: () => {
        if (onComplete) onComplete();
        if (disappearAfter > 0) {
          gsap.to(el, {
            autoAlpha: initialOpacity,
            filter: blur ? 'blur(10px)' : 'blur(0px)',
            delay: getSeconds(disappearAfter),
            duration: getSeconds(disappearDuration),
            ease: disappearEase,
            onComplete: () => onDisappearanceComplete?.()
          });
        }
      }
    });

    tl.to(el, {
      autoAlpha: 1,
      filter: 'blur(0px)',
      duration: getSeconds(duration),
      ease: ease
    });

    const st = ScrollTrigger.create({
      trigger: el,
      scroller: scrollerTarget || window,
      start: \`top \${startPct}%\`,
      once: true,
      onEnter: () => tl.play()
    });

    return () => {
      st.kill();
      tl.kill();
      gsap.killTweensOf(el);
    };
  }, []);

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
};

export default FadeContent;
`,z={usage:`import FadeContent from './FadeContent'
  
<FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
  {/* Anything placed inside this container will be fade into view */}
</FadeContent>`,code:I,tailwind:M,tsCode:H,tsTailwind:q},y={ease:"power2.out",blur:!1,delay:0,duration:1,threshold:.1,initialOpacity:0,disappearEase:"power2.in",disappearAfter:0,disappearDuration:.5},Z=()=>{const{props:l,updateProp:r,resetProps:C,hasChanges:x}=D(y),{ease:o,blur:s,delay:p,duration:c,threshold:d,initialOpacity:u,disappearEase:i,disappearAfter:m,disappearDuration:f}=l,[T,t]=N(),v=E.useMemo(()=>[{name:"children",type:"ReactNode",default:"",description:"The content to be animated."},{name:"blur",type:"boolean",default:"false",description:"Enables a blur effect during the animation."},{name:"duration",type:"number",default:1e3,description:"Specifies the duration of the fade animation in seconds."},{name:"delay",type:"number",default:"0",description:"Adds a delay in seconds before triggering the animation."},{name:"ease",type:"string",default:"power2.out",description:"GSAP easing function for the fade animation."},{name:"threshold",type:"number",default:.1,description:"IntersectionObserver threshold for triggering the fade animation."},{name:"initialOpacity",type:"number",default:0,description:"The starting opacity of the component before it enters the viewport."},{name:"className",type:"string",default:"",description:"Custom class(es) to be added to the container."},{name:"disappearAfter",type:"number",default:0,description:"Time in seconds after which the content will start to disappear. Disables if set to 0."},{name:"disappearDuration",type:"number",default:.5,description:"Duration of the disappearance animation in seconds."},{name:"disappearEase",type:"string",default:"power2.in",description:"GSAP easing function for the disappearance animation."}],[]);return e.jsx(A,{props:l,defaultProps:y,resetProps:C,hasChanges:x,children:e.jsxs(P,{children:[e.jsxs(R,{children:[e.jsxs(S,{position:"relative",className:"demo-container",h:400,children:[e.jsx(w,{blur:s,duration:c,delay:p,threshold:d,initialOpacity:u,disappearAfter:m,disappearDuration:f,disappearEase:i,ease:o,children:e.jsx(g,{fontSize:"xl",fontWeight:"bolder",justifyContent:"center",alignItems:"center",color:"#fff",h:100,borderRadius:"25px",border:"1px solid #392e4e",w:200,bg:"#060010",children:"Fade"})},T),e.jsx(k,{onClick:t})]}),e.jsxs(L,{children:[e.jsxs(g,{gap:2,wrap:"wrap",children:[e.jsxs(h,{fontSize:"xs",bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:8,onClick:()=>{r("ease",o==="power2.out"?"bounce.out":o==="bounce.out"?"elastic.out(1, 0.3)":"power2.out"),t()},children:["Ease: ",e.jsxs(b,{color:"#a1a1aa",children:[" ",o]})]}),e.jsxs(h,{fontSize:"xs",bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:8,onClick:()=>{r("disappearEase",i==="power2.in"?"bounce.in":i==="bounce.in"?"elastic.in(1, 0.3)":"power2.in"),t()},children:["Disappear Ease: ",e.jsxs(b,{color:"#a1a1aa",children:[" ",i]})]})]}),e.jsx(B,{title:"Enable Blur",isChecked:s,onChange:n=>{r("blur",n),t()}}),e.jsx(a,{title:"Duration",min:.5,max:3,step:.1,value:c,valueUnit:"s",onChange:n=>{r("duration",n),t()}}),e.jsx(a,{title:"Delay",min:0,max:2,step:.1,value:p,valueUnit:"s",onChange:n=>{r("delay",n),t()}}),e.jsx(a,{title:"Threshold",min:.1,max:1,step:.1,value:d,onChange:n=>{r("threshold",n),t()}}),e.jsx(a,{title:"Initial Opacity",min:0,max:1,step:.1,value:u,onChange:n=>{r("initialOpacity",n),t()}}),e.jsx(a,{title:"Disappear After",min:0,max:5,step:.1,value:m,onChange:n=>{r("disappearAfter",n),t()}}),e.jsx(a,{title:"Disappear Duration",min:.5,max:3,step:.1,value:f,onChange:n=>{r("disappearDuration",n),t()}})]}),e.jsx(j,{data:v})]}),e.jsx(O,{children:e.jsx(F,{codeObject:z,componentName:"FadeContent"})})]})})};export{Z as default};
