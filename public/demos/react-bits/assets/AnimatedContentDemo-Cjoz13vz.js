import{r as P,Z as E,a0 as N,j as e,B as M,F as j,e as S,a as w}from"./index-CKqfvLoB.js";import{u as B,C as H,T as $,P as F,a as q,b as W,c as _}from"./PropTable-BzD4cJVp.js";import{R as G}from"./RefreshButton-CpmD4Uvc.js";import{D as U}from"./Dependencies-DmSBXzNX.js";import{u as Z}from"./useForceRerender-0lK0qxlp.js";import{C as J}from"./Customize-BaUKAf5J.js";import{P as r}from"./PreviewSlider-25yjOF_X.js";import{P as R}from"./PreviewSwitch-B0BSuWrO.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";import"./switch-CqqRi5Az.js";E.registerPlugin(N);const K=({children:v,container:t,distance:o=100,direction:x="vertical",reverse:s=!1,duration:u=.8,ease:f="power3.out",initialOpacity:c=0,animateOpacity:p=!0,scale:l=1,threshold:g=.1,delay:y=0,disappearAfter:d=0,disappearDuration:h=.5,disappearEase:C="power3.in",onComplete:m,onDisappearanceComplete:i,className:D="",...a})=>{const b=P.useRef(null);return P.useEffect(()=>{const n=b.current;if(!n)return;let T=t||document.getElementById("snap-main-container")||null;typeof T=="string"&&(T=document.querySelector(T));const A=x==="horizontal"?"x":"y",z=s?-o:o,I=(1-g)*100;E.set(n,{[A]:z,scale:l,opacity:p?c:1,visibility:"visible"});const O=E.timeline({paused:!0,delay:y,onComplete:()=>{m&&m(),d>0&&E.to(n,{[A]:s?o:-o,scale:.8,opacity:p?c:0,delay:d,duration:h,ease:C,onComplete:()=>i==null?void 0:i()})}});O.to(n,{[A]:0,scale:1,opacity:1,duration:u,ease:f});const L=N.create({trigger:n,scroller:T,start:`top ${I}%`,once:!0,onEnter:()=>O.play()});return()=>{L.kill(),O.kill()}},[t,o,x,s,u,f,c,p,l,g,y,d,h,C,m,i]),e.jsx("div",{ref:b,className:D,style:{visibility:"hidden"},...a,children:v})},Q=`import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({
  children,
  container,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = 'power3.in',
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

    const axis = direction === 'horizontal' ? 'x' : 'y';
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
      visibility: 'visible'
    });

    const tl = gsap.timeline({
      paused: true,
      delay,
      onComplete: () => {
        if (onComplete) onComplete();
        if (disappearAfter > 0) {
          gsap.to(el, {
            [axis]: reverse ? distance : -distance,
            scale: 0.8,
            opacity: animateOpacity ? initialOpacity : 0,
            delay: disappearAfter,
            duration: disappearDuration,
            ease: disappearEase,
            onComplete: () => onDisappearanceComplete?.()
          });
        }
      }
    });

    tl.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease
    });

    const st = ScrollTrigger.create({
      trigger: el,
      scroller: scrollerTarget,
      start: \`top \${startPct}%\`,
      once: true,
      onEnter: () => tl.play()
    });

    return () => {
      st.kill();
      tl.kill();
    };
  }, [
    container,
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    disappearAfter,
    disappearDuration,
    disappearEase,
    onComplete,
    onDisappearanceComplete
  ]);

  return (
    <div ref={ref} className={className} style={{ visibility: 'hidden' }} {...props}>
      {children}
    </div>
  );
};

export default AnimatedContent;
`,V=`import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({
  children,
  container,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = 'power3.in',
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

    const axis = direction === 'horizontal' ? 'x' : 'y';
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
      visibility: 'visible'
    });

    const tl = gsap.timeline({
      paused: true,
      delay,
      onComplete: () => {
        if (onComplete) onComplete();
        if (disappearAfter > 0) {
          gsap.to(el, {
            [axis]: reverse ? distance : -distance,
            scale: 0.8,
            opacity: animateOpacity ? initialOpacity : 0,
            delay: disappearAfter,
            duration: disappearDuration,
            ease: disappearEase,
            onComplete: () => onDisappearanceComplete?.()
          });
        }
      }
    });

    tl.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease
    });

    const st = ScrollTrigger.create({
      trigger: el,
      scroller: scrollerTarget,
      start: \`top \${startPct}%\`,
      once: true,
      onEnter: () => tl.play()
    });

    return () => {
      st.kill();
      tl.kill();
    };
  }, [
    container,
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    disappearAfter,
    disappearDuration,
    disappearEase,
    onComplete,
    onDisappearanceComplete
  ]);

  return (
    <div ref={ref} className={\`invisible \${className}\`} {...props}>
      {children}
    </div>
  );
};

export default AnimatedContent;
`,X=`import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  container?: Element | string | null;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  disappearAfter?: number;
  disappearDuration?: number;
  disappearEase?: string;
  onComplete?: () => void;
  onDisappearanceComplete?: () => void;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  container,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = 'power3.in',
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

    const axis = direction === 'horizontal' ? 'x' : 'y';
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
      visibility: 'visible'
    });

    const tl = gsap.timeline({
      paused: true,
      delay,
      onComplete: () => {
        if (onComplete) onComplete();

        if (disappearAfter > 0) {
          gsap.to(el, {
            [axis]: reverse ? distance : -distance,
            scale: 0.8,
            opacity: animateOpacity ? initialOpacity : 0,
            delay: disappearAfter,
            duration: disappearDuration,
            ease: disappearEase,
            onComplete: () => onDisappearanceComplete?.()
          });
        }
      }
    });

    tl.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease
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
    };
  }, [
    container,
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    disappearAfter,
    disappearDuration,
    disappearEase,
    onComplete,
    onDisappearanceComplete
  ]);

  return (
    <div ref={ref} className={className} style={{ visibility: 'hidden', ...style }} {...props}>
      {children}
    </div>
  );
};

export default AnimatedContent;
`,Y=`import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  container?: Element | string | null;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  disappearAfter?: number;
  disappearDuration?: number;
  disappearEase?: string;
  onComplete?: () => void;
  onDisappearanceComplete?: () => void;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  container,
  distance = 100,
  direction = 'vertical',
  reverse = false,
  duration = 0.8,
  ease = 'power3.out',
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = 'power3.in',
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

    const axis = direction === 'horizontal' ? 'x' : 'y';
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
      visibility: 'visible'
    });

    const tl = gsap.timeline({
      paused: true,
      delay,
      onComplete: () => {
        if (onComplete) onComplete();
        if (disappearAfter > 0) {
          gsap.to(el, {
            [axis]: reverse ? distance : -distance,
            scale: 0.8,
            opacity: animateOpacity ? initialOpacity : 0,
            delay: disappearAfter,
            duration: disappearDuration,
            ease: disappearEase,
            onComplete: () => onDisappearanceComplete?.()
          });
        }
      }
    });

    tl.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease
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
    };
  }, [
    container,
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    disappearAfter,
    disappearDuration,
    disappearEase,
    onComplete,
    onDisappearanceComplete
  ]);

  return (
    <div ref={ref} className={\`invisible \${className}\`} {...props}>
      {children}
    </div>
  );
};

export default AnimatedContent;
`,ee={dependencies:"gsap",usage:`import AnimatedContent from './AnimatedContent'

<AnimatedContent
  distance={150}
  direction="horizontal"
  reverse={false}
  duration={1.2}
  ease="bounce.out"
  initialOpacity={0.2}
  animateOpacity
  scale={1.1}
  threshold={0.2}
  delay={0.3}
>
  <div>Content to Animate</div>
</AnimatedContent>`,code:Q,tailwind:V,tsCode:X,tsTailwind:Y},k={direction:"vertical",distance:100,delay:0,reverse:!1,duration:.8,ease:"power3.out",initialOpacity:0,animateOpacity:!0,scale:1,threshold:.1,disappearAfter:0,disappearDuration:.5,disappearEase:"power3.in"},ue=()=>{const{props:v,updateProp:t,resetProps:o,hasChanges:x}=B(k),{direction:s,distance:u,delay:f,reverse:c,duration:p,ease:l,initialOpacity:g,animateOpacity:y,scale:d,threshold:h,disappearAfter:C,disappearDuration:m,disappearEase:i}=v,[D,a]=Z(),b=P.useMemo(()=>[{name:"children",type:"ReactNode",default:"",description:"The content to be animated."},{name:"container",type:"string | HTMLElement",default:"null",description:"The scroll container to use for ScrollTrigger. Can be a selector string or an HTMLElement. Defaults to main container. Uses auto-detection (for snap-main-container id) if not provided."},{name:"distance",type:"number",default:"100",description:"Distance (in pixels) the component moves during animation."},{name:"direction",type:"string",default:'"vertical"',description:'Animation direction. Can be "vertical" or "horizontal".'},{name:"reverse",type:"boolean",default:"false",description:"Whether the animation moves in the reverse direction."},{name:"duration",type:"number",default:"0.8",description:"Duration of the animation in seconds."},{name:"ease",type:"string",default:'"power3.out"',description:"GSAP easing function for the animation."},{name:"initialOpacity",type:"number",default:"0",description:"Initial opacity before animation begins."},{name:"animateOpacity",type:"boolean",default:"true",description:"Whether to animate opacity during transition."},{name:"scale",type:"number",default:"1",description:"Initial scale of the component."},{name:"threshold",type:"number",default:"0.1",description:"Intersection threshold to trigger animation (0-1)."},{name:"delay",type:"number",default:"0",description:"Delay before animation starts (in seconds)."},{name:"onComplete",type:"function",default:"undefined",description:"Callback function called when animation completes."},{name:"dissappearAfter",type:"number",default:"0",description:"Time in seconds after which the content will disappear. Disabled if set to 0."},{name:"disappearDuration",type:"number",default:"0.5",description:"Duration of the disappearance animation in seconds."},{name:"disappearEase",type:"string",default:'"power3.in"',description:"GSAP easing function for the disappearance animation."},{name:"onDisappearanceComplete",type:"function",default:"undefined",description:"Callback function called when disappearance animation completes."},{name:"className",type:"string",default:"''",description:"Additional CSS classes to apply to the animated component."}],[]);return e.jsx(H,{props:v,defaultProps:k,resetProps:o,hasChanges:x,children:e.jsxs($,{children:[e.jsxs(F,{children:[e.jsxs(M,{position:"relative",className:"demo-container",minH:400,overflow:"hidden",children:[e.jsx(G,{onClick:a}),e.jsx(K,{direction:s,delay:f,distance:u,reverse:c,duration:p,ease:l,initialOpacity:g,animateOpacity:y,scale:d,threshold:h,disappearAfter:C,disappearDuration:m,disappearEase:i,children:e.jsx(j,{fontSize:"xl",fontWeight:"bolder",justifyContent:"center",alignItems:"center",color:"#fff",h:100,borderRadius:"25px",border:"1px solid #392e4e",w:200,bg:"#060010",children:"Animate Me"})},D)]}),e.jsxs(J,{children:[e.jsxs(j,{gap:2,wrap:"wrap",children:[e.jsxs(S,{fontSize:"xs",bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:8,onClick:()=>{t("direction",s==="vertical"?"horizontal":"vertical"),a()},children:["Direction: ",e.jsxs(w,{color:"#a1a1aa",children:[" ",String(s)]})]}),e.jsxs(S,{fontSize:"xs",bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:8,onClick:()=>{t("ease",l==="power3.out"?"bounce.out":l==="bounce.out"?"elastic.out(1, 0.3)":"power3.out"),a()},children:["Ease: ",e.jsxs(w,{color:"#a1a1aa",children:[" ",l]})]}),e.jsxs(S,{fontSize:"xs",bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:8,onClick:()=>{t("disappearEase",i==="power3.in"?"bounce.in":i==="bounce.in"?"elastic.in(1, 0.3)":"power3.in"),a()},children:["Disappear Ease: ",e.jsxs(w,{color:"#a1a1aa",children:[" ",i]})]})]}),e.jsx(R,{title:"Reverse Direction",isChecked:c,onChange:n=>{t("reverse",n),a()}}),e.jsx(R,{title:"Animate Opacity",isChecked:y,onChange:n=>{t("animateOpacity",n),a()}}),e.jsx(r,{title:"Distance",min:50,max:300,step:10,value:u,onChange:n=>{t("distance",n),a()}}),e.jsx(r,{title:"Duration",min:.1,max:3,step:.1,value:p,onChange:n=>{t("duration",n),a()}}),e.jsx(r,{title:"Delay",min:0,max:2,step:.1,value:f,onChange:n=>{t("delay",n),a()}}),e.jsx(r,{title:"Initial Opacity",min:0,max:1,step:.1,value:g,onChange:n=>{t("initialOpacity",n),a()}}),e.jsx(r,{title:"Initial Scale",min:.1,max:2,step:.1,value:d,onChange:n=>{t("scale",n),a()}}),e.jsx(r,{title:"Threshold",min:.1,max:1,step:.1,value:h,onChange:n=>{t("threshold",n),a()}}),e.jsx(r,{title:"Disappear After",min:0,max:5,step:.1,value:C,onChange:n=>{t("disappearAfter",n),a()}}),e.jsx(r,{title:"Disappear Duration",min:.5,max:3,step:.1,value:m,onChange:n=>{t("disappearDuration",n),a()}})]}),e.jsx(q,{data:b}),e.jsx(U,{dependencyList:["gsap"]})]}),e.jsx(W,{children:e.jsx(_,{codeObject:ee,componentName:"AnimatedContent"})})]})})};export{ue as default};
