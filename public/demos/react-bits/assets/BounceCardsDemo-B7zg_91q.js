import{r as S,Z as r,j as e,F as N}from"./index-CKqfvLoB.js";import{u as H,C as E,T as k,P,a as j,b as D,c as q}from"./PropTable-BzD4cJVp.js";import{C as M}from"./Customize-BaUKAf5J.js";import{P as B}from"./PreviewSwitch-B0BSuWrO.js";import{P as R}from"./PreviewSlider-25yjOF_X.js";import{R as I}from"./RefreshButton-CpmD4Uvc.js";import{D as W}from"./Dependencies-DmSBXzNX.js";import{u as O}from"./useForceRerender-0lK0qxlp.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./switch-CqqRi5Az.js";import"./slider-P7kYMDWb.js";function L({className:b="",images:s=[],containerWidth:u=400,containerHeight:m=400,animationDelay:p=.5,animationStagger:h=.06,easeType:d="elastic.out(1, 0.8)",transformStyles:c=["rotate(10deg) translate(-170px)","rotate(5deg) translate(-85px)","rotate(-3deg)","rotate(-10deg) translate(85px)","rotate(2deg) translate(170px)"],enableHover:g=!0}){const o=S.useRef(null);S.useEffect(()=>{const n=r.context(()=>{r.fromTo(".card",{scale:0},{scale:1,stagger:h,ease:d,delay:p})},o);return()=>n.revert()},[h,d,p]);const y=n=>/rotate\([\s\S]*?\)/.test(n)?n.replace(/rotate\([\s\S]*?\)/,"rotate(0deg)"):n==="none"?"rotate(0deg)":`${n} rotate(0deg)`,T=(n,t)=>{const l=/translate\(([-0-9.]+)px\)/,a=n.match(l);if(a){const x=parseFloat(a[1])+t;return n.replace(l,`translate(${x}px)`)}else return n==="none"?`translate(${t}px)`:`${n} translate(${t}px)`},i=n=>{if(!g||!o.current)return;const t=r.utils.selector(o);s.forEach((l,a)=>{const f=t(`.card-${a}`);r.killTweensOf(f);const x=c[a]||"none";if(a===n){const v=y(x);r.to(f,{transform:v,duration:.4,ease:"back.out(1.4)",overwrite:"auto"})}else{const v=a<n?-160:160,C=T(x,v),X=Math.abs(n-a)*.05;r.to(f,{transform:C,duration:.4,ease:"back.out(1.4)",delay:X,overwrite:"auto"})}})},$=()=>{if(!g||!o.current)return;const n=r.utils.selector(o);s.forEach((t,l)=>{const a=n(`.card-${l}`);r.killTweensOf(a);const f=c[l]||"none";r.to(a,{transform:f,duration:.4,ease:"back.out(1.4)",overwrite:"auto"})})};return e.jsx("div",{className:`bounceCardsContainer ${b}`,ref:o,style:{position:"relative",width:u,height:m},children:s.map((n,t)=>e.jsx("div",{className:`card card-${t}`,style:{transform:c[t]??"none"},onMouseEnter:()=>i(t),onMouseLeave:$,children:e.jsx("img",{className:"image",src:n,alt:`card-${t}`})},t))})}const _=`import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './BounceCards.css';

export default function BounceCards({
  className = '',
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [
    'rotate(10deg) translate(-170px)',
    'rotate(5deg) translate(-85px)',
    'rotate(-3deg)',
    'rotate(-10deg) translate(85px)',
    'rotate(2deg) translate(170px)'
  ],
  enableHover = true
}) {
  const containerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.card',
        { scale: 0 },
        {
          scale: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [animationStagger, easeType, animationDelay]);

  const getNoRotationTransform = transformStr => {
    const hasRotate = /rotate\\([\\s\\S]*?\\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\\([\\s\\S]*?\\)/, 'rotate(0deg)');
    } else if (transformStr === 'none') {
      return 'rotate(0deg)';
    } else {
      return \`\${transformStr} rotate(0deg)\`;
    }
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\\(([-0-9.]+)px\\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, \`translate(\${newX}px)\`);
    } else {
      return baseTransform === 'none' ? \`translate(\${offsetX}px)\` : \`\${baseTransform} translate(\${offsetX}px)\`;
    }
  };

  const pushSiblings = hoveredIdx => {
    if (!enableHover || !containerRef.current) return;

    const q = gsap.utils.selector(containerRef);

    images.forEach((_, i) => {
      const target = q(\`.card-\${i}\`);
      gsap.killTweensOf(target);

      const baseTransform = transformStyles[i] || 'none';

      if (i === hoveredIdx) {
        const noRotationTransform = getNoRotationTransform(baseTransform);
        gsap.to(target, {
          transform: noRotationTransform,
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto'
        });
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(target, {
          transform: pushedTransform,
          duration: 0.4,
          ease: 'back.out(1.4)',
          delay,
          overwrite: 'auto'
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return;

    const q = gsap.utils.selector(containerRef);

    images.forEach((_, i) => {
      const target = q(\`.card-\${i}\`);
      gsap.killTweensOf(target);
      const baseTransform = transformStyles[i] || 'none';
      gsap.to(target, {
        transform: baseTransform,
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto'
      });
    });
  };

  return (
    <div
      className={\`bounceCardsContainer \${className}\`}
      ref={containerRef}
      style={{
        position: 'relative',
        width: containerWidth,
        height: containerHeight
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={\`card card-\${idx}\`}
          style={{
            transform: transformStyles[idx] ?? 'none'
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <img className="image" src={src} alt={\`card-\${idx}\`} />
        </div>
      ))}
    </div>
  );
}
`,F=`.bounceCardsContainer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
}

.card {
  position: absolute;
  width: 200px;
  aspect-ratio: 1;
  border: 5px solid #fff;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.card .image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`,A=`import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function BounceCards({
  className = '',
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [
    'rotate(10deg) translate(-170px)',
    'rotate(5deg) translate(-85px)',
    'rotate(-3deg)',
    'rotate(-10deg) translate(85px)',
    'rotate(2deg) translate(170px)'
  ],
  enableHover = false
}) {
  const containerRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.card',
        { scale: 0 },
        {
          scale: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [animationStagger, easeType, animationDelay]);

  const getNoRotationTransform = transformStr => {
    const hasRotate = /rotate\\([\\s\\S]*?\\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\\([\\s\\S]*?\\)/, 'rotate(0deg)');
    } else if (transformStr === 'none') {
      return 'rotate(0deg)';
    } else {
      return \`\${transformStr} rotate(0deg)\`;
    }
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\\(([-0-9.]+)px\\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, \`translate(\${newX}px)\`);
    } else {
      return baseTransform === 'none' ? \`translate(\${offsetX}px)\` : \`\${baseTransform} translate(\${offsetX}px)\`;
    }
  };

  const pushSiblings = hoveredIdx => {
    if (!enableHover || !containerRef.current) return;

    const q = gsap.utils.selector(containerRef);
    images.forEach((_, i) => {
      const selector = q(\`.card-\${i}\`);
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || 'none';

      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform);
        gsap.to(selector, {
          transform: noRotation,
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto'
        });
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(selector, {
          transform: pushedTransform,
          duration: 0.4,
          ease: 'back.out(1.4)',
          delay,
          overwrite: 'auto'
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return;
    const q = gsap.utils.selector(containerRef);
    images.forEach((_, i) => {
      const selector = q(\`.card-\${i}\`);
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || 'none';
      gsap.to(selector, {
        transform: baseTransform,
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto'
      });
    });
  };

  return (
    <div
      className={\`relative flex items-center justify-center \${className}\`}
      style={{
        width: containerWidth,
        height: containerHeight
      }}
      ref={containerRef}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={\`card card-\${idx} absolute w-[200px] aspect-square border-8 border-white rounded-[30px] overflow-hidden\`}
          style={{
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            transform: transformStyles[idx] || 'none'
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <img className="w-full h-full object-cover" src={src} alt={\`card-\${idx}\`} />
        </div>
      ))}
    </div>
  );
}
`,U=`import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './BounceCards.css';

interface BounceCardsProps {
  className?: string;
  images?: string[];
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
}

export default function BounceCards({
  className = '',
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [
    'rotate(10deg) translate(-170px)',
    'rotate(5deg) translate(-85px)',
    'rotate(-3deg)',
    'rotate(-10deg) translate(85px)',
    'rotate(2deg) translate(170px)'
  ],
  enableHover = false
}: BounceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.card',
        { scale: 0 },
        {
          scale: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [animationStagger, easeType, animationDelay]);

  const getNoRotationTransform = (transformStr: string): string => {
    const hasRotate = /rotate\\([\\s\\S]*?\\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\\([\\s\\S]*?\\)/, 'rotate(0deg)');
    } else if (transformStr === 'none') {
      return 'rotate(0deg)';
    } else {
      return \`\${transformStr} rotate(0deg)\`;
    }
  };

  const getPushedTransform = (baseTransform: string, offsetX: number): string => {
    const translateRegex = /translate\\(([-0-9.]+)px\\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, \`translate(\${newX}px)\`);
    } else {
      return baseTransform === 'none' ? \`translate(\${offsetX}px)\` : \`\${baseTransform} translate(\${offsetX}px)\`;
    }
  };

  const pushSiblings = (hoveredIdx: number) => {
    if (!enableHover || !containerRef.current) return;
    const q = gsap.utils.selector(containerRef);
    images.forEach((_, i) => {
      const selector = q(\`.card-\${i}\`);
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || 'none';

      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform);
        gsap.to(selector, {
          transform: noRotation,
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto'
        });
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(selector, {
          transform: pushedTransform,
          duration: 0.4,
          ease: 'back.out(1.4)',
          delay,
          overwrite: 'auto'
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return;
    const q = gsap.utils.selector(containerRef);
    images.forEach((_, i) => {
      const selector = q(\`.card-\${i}\`);
      gsap.killTweensOf(selector);
      const baseTransform = transformStyles[i] || 'none';
      gsap.to(selector, {
        transform: baseTransform,
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto'
      });
    });
  };

  return (
    <div
      className={\`bounceCardsContainer \${className}\`}
      ref={containerRef}
      style={{
        position: 'relative',
        width: containerWidth,
        height: containerHeight
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={\`card card-\${idx}\`}
          style={{ transform: transformStyles[idx] ?? 'none' }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <img className="image" src={src} alt={\`card-\${idx}\`} />
        </div>
      ))}
    </div>
  );
}
`,z=`import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface BounceCardsProps {
  className?: string;
  images?: string[];
  containerWidth?: number;
  containerHeight?: number;
  animationDelay?: number;
  animationStagger?: number;
  easeType?: string;
  transformStyles?: string[];
  enableHover?: boolean;
}

export default function BounceCards({
  className = '',
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [
    'rotate(10deg) translate(-170px)',
    'rotate(5deg) translate(-85px)',
    'rotate(-3deg)',
    'rotate(-10deg) translate(85px)',
    'rotate(2deg) translate(170px)'
  ],
  enableHover = false
}: BounceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.card',
        { scale: 0 },
        {
          scale: 1,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [animationDelay, animationStagger, easeType]);

  const getNoRotationTransform = (transformStr: string): string => {
    const hasRotate = /rotate\\([\\s\\S]*?\\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\\([\\s\\S]*?\\)/, 'rotate(0deg)');
    } else if (transformStr === 'none') {
      return 'rotate(0deg)';
    } else {
      return \`\${transformStr} rotate(0deg)\`;
    }
  };

  const getPushedTransform = (baseTransform: string, offsetX: number): string => {
    const translateRegex = /translate\\(([-0-9.]+)px\\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, \`translate(\${newX}px)\`);
    } else {
      return baseTransform === 'none' ? \`translate(\${offsetX}px)\` : \`\${baseTransform} translate(\${offsetX}px)\`;
    }
  };

  const pushSiblings = (hoveredIdx: number) => {
    const q = gsap.utils.selector(containerRef);
    if (!enableHover || !containerRef.current) return;

    images.forEach((_, i) => {
      const selector = q(\`.card-\${i}\`);
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || 'none';

      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform);
        gsap.to(selector, {
          transform: noRotation,
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto'
        });
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(selector, {
          transform: pushedTransform,
          duration: 0.4,
          ease: 'back.out(1.4)',
          delay,
          overwrite: 'auto'
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return;
    const q = gsap.utils.selector(containerRef);

    images.forEach((_, i) => {
      const selector = q(\`.card-\${i}\`);
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || 'none';
      gsap.to(selector, {
        transform: baseTransform,
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto'
      });
    });
  };

  return (
    <div
      className={\`relative flex items-center justify-center \${className}\`}
      ref={containerRef}
      style={{
        width: containerWidth,
        height: containerHeight
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={\`card card-\${idx} absolute w-[200px] aspect-square border-8 border-white rounded-[30px] overflow-hidden\`}
          style={{
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            transform: transformStyles[idx] || 'none'
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <img className="w-full h-full object-cover" src={src} alt={\`card-\${idx}\`} />
        </div>
      ))}
    </div>
  );
}
`,Z={dependencies:"gsap",usage:`import BounceCards from './BounceCards'

const images = [
  "https://picsum.photos/400/400?grayscale",
  "https://picsum.photos/500/500?grayscale",
  "https://picsum.photos/600/600?grayscale",
  "https://picsum.photos/700/700?grayscale",
  "https://picsum.photos/300/300?grayscale"
];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)"
];

<BounceCards
  className="custom-bounceCards"
  images={images}
  containerWidth={500}
  containerHeight={250}
  animationDelay={1}
  animationStagger={0.08}
  easeType="elastic.out(1, 0.5)"
  transformStyles={transformStyles}
  enableHover={false}
/>`,code:_,css:F,tailwind:A,tsTailwind:z,tsCode:U},w={enableHover:!1,animationDelay:1,animationStagger:.08},cn=()=>{const[b,s]=O(),{props:u,updateProp:m,resetProps:p,hasChanges:h}=H(w),{enableHover:d,animationDelay:c,animationStagger:g}=u,o=["https://picsum.photos/400/400?grayscale","https://picsum.photos/500/500?grayscale","https://picsum.photos/600/600?grayscale","https://picsum.photos/700/700?grayscale","https://picsum.photos/300/300?grayscale"],y=["rotate(5deg) translate(-150px)","rotate(0deg) translate(-70px)","rotate(-5deg)","rotate(5deg) translate(70px)","rotate(-5deg) translate(150px)"],T=S.useMemo(()=>[{name:"className",type:"string",default:"",description:"Additional CSS classes for the container."},{name:"images",type:"string[]",default:"[]",description:"Array of image URLs to display."},{name:"containerWidth",type:"number",default:"400",description:"Width of the container (px)."},{name:"containerHeight",type:"number",default:"400",description:"Height of the container (px)."},{name:"animationDelay",type:"number",default:"0.5",description:"Delay (in seconds) before the animation starts."},{name:"animationStagger",type:"number",default:"0.06",description:"Time (in seconds) between each card's animation."},{name:"easeType",type:"string",default:"elastic.out(1, 0.8)",description:"Easing function for the bounce."},{name:"transformStyles",type:"string[]",default:"various rotations/translations",description:"Custom transforms for each card position."},{name:"enableHover",type:"boolean",default:"false",description:"If true, hovering pushes siblings aside and flattens the hovered card's rotation."}],[]);return e.jsx(E,{props:u,defaultProps:w,resetProps:p,hasChanges:h,children:e.jsxs(k,{children:[e.jsxs(P,{children:[e.jsxs(N,{overflow:"hidden",justifyContent:"center",alignItems:"center",minH:"400px",position:"relative",pb:"4em",className:"demo-container",children:[e.jsx(L,{className:"custom-bounceCards",images:o,containerWidth:400,containerHeight:250,animationDelay:c,animationStagger:g,easeType:"elastic.out(1, 0.5)",transformStyles:y,enableHover:d},b),e.jsx(I,{onClick:s})]}),e.jsxs(M,{children:[e.jsx(B,{title:"Enable Hover Effect",isChecked:d,onChange:i=>{m("enableHover",i),s()}}),e.jsx(R,{title:"Animation Delay",min:.1,max:2,step:.1,value:c,onChange:i=>{m("animationDelay",i),s()}}),e.jsx(R,{title:"Animation Stagger",min:0,max:.3,step:.01,value:g,onChange:i=>{m("animationStagger",i),s()}})]}),e.jsx(j,{data:T}),e.jsx(W,{dependencyList:["gsap"]})]}),e.jsx(D,{children:e.jsx(q,{codeObject:Z,componentName:"BounceCards"})})]})})};export{cn as default};
