import{r as m,j as n,bJ as U,bL as F,co as Y,cp as B,cq as V,cr as q,bc as z,bK as X,B as K}from"./index-CKqfvLoB.js";import{u as Q,C as Z,T as nn,P as en,a as tn,b as on,c as sn}from"./PropTable-BzD4cJVp.js";import{C as an}from"./Customize-BaUKAf5J.js";import{P as b}from"./PreviewSwitch-B0BSuWrO.js";import{D as rn}from"./Dependencies-DmSBXzNX.js";import{u as cn}from"./useForceRerender-0lK0qxlp.js";import{P as T}from"./PreviewSlider-25yjOF_X.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./switch-CqqRi5Az.js";import"./slider-P7kYMDWb.js";const ln=[{title:"Text Animations",description:"Cool text animations for your projects.",id:1,icon:n.jsx(Y,{className:"carousel-icon"})},{title:"Animations",description:"Smooth animations for your projects.",id:2,icon:n.jsx(B,{className:"carousel-icon"})},{title:"Components",description:"Reusable components for your projects.",id:3,icon:n.jsx(V,{className:"carousel-icon"})},{title:"Backgrounds",description:"Beautiful backgrounds and patterns for your projects.",id:4,icon:n.jsx(q,{className:"carousel-icon"})},{title:"Common UI",description:"Common UI components are coming soon!",id:5,icon:n.jsx(z,{className:"carousel-icon"})}],N=0,L=500,w=16,dn={type:"spring",stiffness:300,damping:30};function mn({item:e,index:a,itemWidth:x,round:u,trackItemOffset:d,x:i,transition:f}){const g=[-(a+1)*d,-a*d,-(a-1)*d],c=X(i,g,[90,0,-90],{clamp:!1});return n.jsxs(F.div,{className:`carousel-item ${u?"round":""}`,style:{width:x,height:u?x:"100%",rotateY:c,...u&&{borderRadius:"50%"}},transition:f,children:[n.jsx("div",{className:`carousel-item-header ${u?"round":""}`,children:n.jsx("span",{className:"carousel-icon-container",children:e.icon})}),n.jsxs("div",{className:"carousel-item-content",children:[n.jsx("div",{className:"carousel-item-title",children:e.title}),n.jsx("p",{className:"carousel-item-description",children:e.description})]})]},`${(e==null?void 0:e.id)??a}-${a}`)}function un({items:e=ln,baseWidth:a=300,autoplay:x=!1,autoplayDelay:u=3e3,pauseOnHover:d=!1,loop:i=!1,round:f=!1}){const h=a-32,c=h+w,l=m.useMemo(()=>i?e.length===0?[]:[e[e.length-1],...e,e[0]]:e,[e,i]),[r,p]=m.useState(i?1:0),o=U(0),[E,C]=m.useState(!1),[M,y]=m.useState(!1),[D,v]=m.useState(!1),R=m.useRef(null);m.useEffect(()=>{if(d&&R.current){const s=R.current,t=()=>C(!0),I=()=>C(!1);return s.addEventListener("mouseenter",t),s.addEventListener("mouseleave",I),()=>{s.removeEventListener("mouseenter",t),s.removeEventListener("mouseleave",I)}}},[d]),m.useEffect(()=>{if(!x||l.length<=1||d&&E)return;const s=setInterval(()=>{p(t=>Math.min(t+1,l.length-1))},u);return()=>clearInterval(s)},[x,u,E,d,l.length]),m.useEffect(()=>{const s=i?1:0;p(s),o.set(-s*c)},[e.length,i,c,o]),m.useEffect(()=>{!i&&r>l.length-1&&p(Math.max(0,l.length-1))},[l.length,i,r]);const O=M?{duration:0}:dn,H=()=>{v(!0)},j=()=>{if(!i||l.length<=1){v(!1);return}const s=l.length-1;if(r===s){y(!0);const t=1;p(t),o.set(-t*c),requestAnimationFrame(()=>{y(!1),v(!1)});return}if(r===0){y(!0);const t=e.length;p(t),o.set(-t*c),requestAnimationFrame(()=>{y(!1),v(!1)});return}v(!1)},$=(s,t)=>{const{offset:I,velocity:A}=t,k=I.x<-N||A.x<-L?1:I.x>N||A.x>L?-1:0;k!==0&&p(_=>{const G=_+k,J=l.length-1;return Math.max(0,Math.min(G,J))})},W=i?{}:{dragConstraints:{left:-c*Math.max(l.length-1,0),right:0}},P=e.length===0?0:i?(r-1+e.length)%e.length:Math.min(r,e.length-1);return n.jsxs("div",{ref:R,className:`carousel-container ${f?"round":""}`,style:{width:`${a}px`,...f&&{height:`${a}px`,borderRadius:"50%"}},children:[n.jsx(F.div,{className:"carousel-track",drag:D?!1:"x",...W,style:{width:h,gap:`${w}px`,perspective:1e3,perspectiveOrigin:`${r*c+h/2}px 50%`,x:o},onDragEnd:$,animate:{x:-(r*c)},transition:O,onAnimationStart:H,onAnimationComplete:j,children:l.map((s,t)=>n.jsx(mn,{item:s,index:t,itemWidth:h,round:f,trackItemOffset:c,x:o,transition:O},`${(s==null?void 0:s.id)??t}-${t}`))}),n.jsx("div",{className:`carousel-indicators-container ${f?"round":""}`,children:n.jsx("div",{className:"carousel-indicators",children:e.map((s,t)=>n.jsx(F.div,{className:`carousel-indicator ${P===t?"active":"inactive"}`,animate:{scale:P===t?1.2:1},onClick:()=>p(i?t+1:t),transition:{duration:.15}},t))})})]})}const fn=`import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
// replace icons with your own if needed
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';

import './Carousel.css';

const DEFAULT_ITEMS = [
  {
    title: 'Text Animations',
    description: 'Cool text animations for your projects.',
    id: 1,
    icon: <FiFileText className="carousel-icon" />
  },
  {
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    id: 2,
    icon: <FiCircle className="carousel-icon" />
  },
  {
    title: 'Components',
    description: 'Reusable components for your projects.',
    id: 3,
    icon: <FiLayers className="carousel-icon" />
  },
  {
    title: 'Backgrounds',
    description: 'Beautiful backgrounds and patterns for your projects.',
    id: 4,
    icon: <FiLayout className="carousel-icon" />
  },
  {
    title: 'Common UI',
    description: 'Common UI components are coming soon!',
    id: 5,
    icon: <FiCode className="carousel-icon" />
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

function CarouselItem({ item, index, itemWidth, round, trackItemOffset, x, transition }) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  return (
    <motion.div
      key={\`\${item?.id ?? index}-\${index}\`}
      className={\`carousel-item \${round ? 'round' : ''}\`}
      style={{
        width: itemWidth,
        height: round ? itemWidth : '100%',
        rotateY: rotateY,
        ...(round && { borderRadius: '50%' })
      }}
      transition={transition}
    >
      <div className={\`carousel-item-header \${round ? 'round' : ''}\`}>
        <span className="carousel-icon-container">{item.icon}</span>
      </div>
      <div className="carousel-item-content">
        <div className="carousel-item-title">{item.title}</div>
        <p className="carousel-item-description">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition(prev => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0
        }
      };

  const activeIndex =
    items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

  return (
    <div
      ref={containerRef}
      className={\`carousel-container \${round ? 'round' : ''}\`}
      style={{
        width: \`\${baseWidth}px\`,
        ...(round && { height: \`\${baseWidth}px\`, borderRadius: '50%' })
      }}
    >
      <motion.div
        className="carousel-track"
        drag={isAnimating ? false : 'x'}
        {...dragProps}
        style={{
          width: itemWidth,
          gap: \`\${GAP}px\`,
          perspective: 1000,
          perspectiveOrigin: \`\${position * trackItemOffset + itemWidth / 2}px 50%\`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselItem
            key={\`\${item?.id ?? index}-\${index}\`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>
      <div className={\`carousel-indicators-container \${round ? 'round' : ''}\`}>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={\`carousel-indicator \${activeIndex === index ? 'active' : 'inactive'}\`}
              animate={{
                scale: activeIndex === index ? 1.2 : 1
              }}
              onClick={() => setPosition(loop ? index + 1 : index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
`,pn=`.carousel-container {
  position: relative;
  overflow: hidden;
  border: 1px solid #555;
  border-radius: 24px;
  padding: 16px;
  --outer-r: 24px;
  --p-distance: 12px;
}

.carousel-track {
  display: flex;
}

.carousel-item {
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border: 1px solid #555;
  border-radius: calc(var(--outer-r) - var(--p-distance));
  background-color: #0d0716;
  overflow: hidden;
  cursor: grab;
}

.carousel-item:active {
  cursor: grabbing;
}

.carousel-container.round {
  border: 1px solid #555;
}

.carousel-item.round {
  background-color: #0d0716;
  position: relative;
  bottom: 0.1em;
  border: 1px solid #555;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.carousel-item-header.round {
  padding: 0;
  margin: 0;
}

.carousel-indicators-container.round {
  position: absolute;
  z-index: 2;
  bottom: 3em;
  left: 50%;
  transform: translateX(-50%);
}

.carousel-indicator.active {
  background-color: #333333;
}

.carousel-indicator.inactive {
  background-color: rgba(51, 51, 51, 0.4);
}

.carousel-item-header {
  margin-bottom: 16px;
  padding: 20px;
  padding-top: 20px;
}

.carousel-icon-container {
  display: flex;
  height: 28px;
  width: 28px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #fff;
}

.carousel-icon {
  height: 16px;
  width: 16px;
  color: #060010;
}

.carousel-item-content {
  padding: 20px;
  padding-bottom: 20px;
}

.carousel-item-title {
  margin-bottom: 4px;
  font-weight: 900;
  font-size: 18px;
  color: #fff;
}

.carousel-item-description {
  font-size: 14px;
  color: #fff;
}

.carousel-indicators-container {
  display: flex;
  width: 100%;
  justify-content: center;
}

.carousel-indicators {
  margin-top: 16px;
  display: flex;
  width: 150px;
  justify-content: space-between;
  padding: 0 32px;
}

.carousel-indicator {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 150ms;
}

.carousel-indicator.active {
  background-color: #fff;
}

.carousel-indicator.inactive {
  background-color: #555;
}
`,hn=`import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
// replace icons with your own if needed
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';

const DEFAULT_ITEMS = [
  {
    title: 'Text Animations',
    description: 'Cool text animations for your projects.',
    id: 1,
    icon: <FiFileText className="h-[16px] w-[16px] text-white" />
  },
  {
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    id: 2,
    icon: <FiCircle className="h-[16px] w-[16px] text-white" />
  },
  {
    title: 'Components',
    description: 'Reusable components for your projects.',
    id: 3,
    icon: <FiLayers className="h-[16px] w-[16px] text-white" />
  },
  {
    title: 'Backgrounds',
    description: 'Beautiful backgrounds and patterns for your projects.',
    id: 4,
    icon: <FiLayout className="h-[16px] w-[16px] text-white" />
  },
  {
    title: 'Common UI',
    description: 'Common UI components are coming soon!',
    id: 5,
    icon: <FiCode className="h-[16px] w-[16px] text-white" />
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

function CarouselItem({ item, index, itemWidth, round, trackItemOffset, x, transition }) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  return (
    <motion.div
      key={\`\${item?.id ?? index}-\${index}\`}
      className={\`relative shrink-0 flex flex-col \${
        round
          ? 'items-center justify-center text-center bg-[#060010] border-0'
          : 'items-start justify-between bg-[#222] border border-[#222] rounded-[12px]'
      } overflow-hidden cursor-grab active:cursor-grabbing\`}
      style={{
        width: itemWidth,
        height: round ? itemWidth : '100%',
        rotateY: rotateY,
        ...(round && { borderRadius: '50%' })
      }}
      transition={transition}
    >
      <div className={\`\${round ? 'p-0 m-0' : 'mb-4 p-5'}\`}>
        <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#060010]">
          {item.icon}
        </span>
      </div>
      <div className="p-5">
        <div className="mb-1 font-black text-lg text-white">{item.title}</div>
        <p className="text-sm text-white">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition(prev => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0
        }
      };

  const activeIndex =
    items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

  return (
    <div
      ref={containerRef}
      className={\`relative overflow-hidden p-4 \${
        round ? 'rounded-full border border-white' : 'rounded-[24px] border border-[#222]'
      }\`}
      style={{
        width: \`\${baseWidth}px\`,
        ...(round && { height: \`\${baseWidth}px\` })
      }}
    >
      <motion.div
        className="flex"
        drag={isAnimating ? false : 'x'}
        {...dragProps}
        style={{
          width: itemWidth,
          gap: \`\${GAP}px\`,
          perspective: 1000,
          perspectiveOrigin: \`\${position * trackItemOffset + itemWidth / 2}px 50%\`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselItem
            key={\`\${item?.id ?? index}-\${index}\`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>
      <div className={\`flex w-full justify-center \${round ? 'absolute z-20 bottom-12 left-1/2 -translate-x-1/2' : ''}\`}>
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={\`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 \${
                activeIndex === index
                  ? round
                    ? 'bg-white'
                    : 'bg-[#333333]'
                  : round
                    ? 'bg-[#555]'
                    : 'bg-[rgba(51,51,51,0.4)]'
              }\`}
              animate={{
                scale: activeIndex === index ? 1.2 : 1
              }}
              onClick={() => setPosition(loop ? index + 1 : index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
`,xn=`import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'motion/react';
// replace icons with your own if needed
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';
import './Carousel.css';

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  icon: React.ReactElement;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    title: 'Text Animations',
    description: 'Cool text animations for your projects.',
    id: 1,
    icon: <FiFileText className="carousel-icon" />
  },
  {
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    id: 2,
    icon: <FiCircle className="carousel-icon" />
  },
  {
    title: 'Components',
    description: 'Reusable components for your projects.',
    id: 3,
    icon: <FiLayers className="carousel-icon" />
  },
  {
    title: 'Backgrounds',
    description: 'Beautiful backgrounds and patterns for your projects.',
    id: 4,
    icon: <FiLayout className="carousel-icon" />
  },
  {
    title: 'Common UI',
    description: 'Common UI components are coming soon!',
    id: 5,
    icon: <FiCode className="carousel-icon" />
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring' as const, stiffness: 300, damping: 30 };

interface CarouselItemProps {
  item: CarouselItem;
  index: number;
  itemWidth: number;
  round: boolean;
  trackItemOffset: number;
  x: any;
  transition: any;
}

function CarouselItem({ item, index, itemWidth, round, trackItemOffset, x, transition }: CarouselItemProps) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  return (
    <motion.div
      key={\`\${item?.id ?? index}-\${index}\`}
      className={\`carousel-item \${round ? 'round' : ''}\`}
      style={{
        width: itemWidth,
        height: round ? itemWidth : '100%',
        rotateY: rotateY,
        ...(round && { borderRadius: '50%' })
      }}
      transition={transition}
    >
      <div className={\`carousel-item-header \${round ? 'round' : ''}\`}>
        <span className="carousel-icon-container">{item.icon}</span>
      </div>
      <div className="carousel-item-content">
        <div className="carousel-item-title">{item.title}</div>
        <p className="carousel-item-description">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}: CarouselProps): React.JSX.Element {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState<number>(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isJumping, setIsJumping] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition(prev => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0
        }
      };

  const activeIndex =
    items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

  return (
    <div
      ref={containerRef}
      className={\`carousel-container \${round ? 'round' : ''}\`}
      style={{
        width: \`\${baseWidth}px\`,
        ...(round && { height: \`\${baseWidth}px\`, borderRadius: '50%' })
      }}
    >
      <motion.div
        className="carousel-track"
        drag={isAnimating ? false : 'x'}
        {...dragProps}
        style={{
          width: itemWidth,
          gap: \`\${GAP}px\`,
          perspective: 1000,
          perspectiveOrigin: \`\${position * trackItemOffset + itemWidth / 2}px 50%\`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselItem
            key={\`\${item?.id ?? index}-\${index}\`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>
      <div className={\`carousel-indicators-container \${round ? 'round' : ''}\`}>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={\`carousel-indicator \${activeIndex === index ? 'active' : 'inactive'}\`}
              animate={{
                scale: activeIndex === index ? 1.2 : 1
              }}
              onClick={() => setPosition(loop ? index + 1 : index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
`,gn=`import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, PanInfo, useMotionValue, useTransform } from 'motion/react';
import React, { JSX } from 'react';

// replace icons with your own if needed
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';
export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  icon: React.ReactNode;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    title: 'Text Animations',
    description: 'Cool text animations for your projects.',
    id: 1,
    icon: <FiFileText className="h-[16px] w-[16px] text-white" />
  },
  {
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    id: 2,
    icon: <FiCircle className="h-[16px] w-[16px] text-white" />
  },
  {
    title: 'Components',
    description: 'Reusable components for your projects.',
    id: 3,
    icon: <FiLayers className="h-[16px] w-[16px] text-white" />
  },
  {
    title: 'Backgrounds',
    description: 'Beautiful backgrounds and patterns for your projects.',
    id: 4,
    icon: <FiLayout className="h-[16px] w-[16px] text-white" />
  },
  {
    title: 'Common UI',
    description: 'Common UI components are coming soon!',
    id: 5,
    icon: <FiCode className="h-[16px] w-[16px] text-white" />
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring' as const, stiffness: 300, damping: 30 };

interface CarouselItemProps {
  item: CarouselItem;
  index: number;
  itemWidth: number;
  round: boolean;
  trackItemOffset: number;
  x: any;
  transition: any;
}

function CarouselItem({ item, index, itemWidth, round, trackItemOffset, x, transition }: CarouselItemProps) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  return (
    <motion.div
      key={\`\${item?.id ?? index}-\${index}\`}
      className={\`relative shrink-0 flex flex-col \${
        round
          ? 'items-center justify-center text-center bg-[#060010] border-0'
          : 'items-start justify-between bg-[#222] border border-[#222] rounded-[12px]'
      } overflow-hidden cursor-grab active:cursor-grabbing\`}
      style={{
        width: itemWidth,
        height: round ? itemWidth : '100%',
        rotateY: rotateY,
        ...(round && { borderRadius: '50%' })
      }}
      transition={transition}
    >
      <div className={\`\${round ? 'p-0 m-0' : 'mb-4 p-5'}\`}>
        <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#060010]">
          {item.icon}
        </span>
      </div>
      <div className="p-5">
        <div className="mb-1 font-black text-lg text-white">{item.title}</div>
        <p className="text-sm text-white">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}: CarouselProps): JSX.Element {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState<number>(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isJumping, setIsJumping] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition(prev => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0
        }
      };

  const activeIndex =
    items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

  return (
    <div
      ref={containerRef}
      className={\`relative overflow-hidden p-4 \${
        round ? 'rounded-full border border-white' : 'rounded-[24px] border border-[#222]'
      }\`}
      style={{
        width: \`\${baseWidth}px\`,
        ...(round && { height: \`\${baseWidth}px\` })
      }}
    >
      <motion.div
        className="flex"
        drag={isAnimating ? false : 'x'}
        {...dragProps}
        style={{
          width: itemWidth,
          gap: \`\${GAP}px\`,
          perspective: 1000,
          perspectiveOrigin: \`\${position * trackItemOffset + itemWidth / 2}px 50%\`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselItem
            key={\`\${item?.id ?? index}-\${index}\`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>
      <div className={\`flex w-full justify-center \${round ? 'absolute z-20 bottom-12 left-1/2 -translate-x-1/2' : ''}\`}>
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={\`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 \${
                activeIndex === index
                  ? round
                    ? 'bg-white'
                    : 'bg-[#333333]'
                  : round
                    ? 'bg-[#555]'
                    : 'bg-[rgba(51,51,51,0.4)]'
              }\`}
              animate={{
                scale: activeIndex === index ? 1.2 : 1
              }}
              onClick={() => setPosition(loop ? index + 1 : index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
`,vn={dependencies:"motion",usage:`import Carousel from './Carousel'

<div style={{ height: '600px', position: 'relative' }}>
  <Carousel
    baseWidth={300}
    autoplay={true}
    autoplayDelay={3000}
    pauseOnHover={true}
    loop={true}
    round={false}
  />
</div>`,code:fn,css:pn,tailwind:hn,tsCode:xn,tsTailwind:gn},S={baseWidth:300,autoplay:!1,autoplayDelay:3e3,pauseOnHover:!1,loop:!1,round:!1},Tn=()=>{const{props:e,updateProp:a,resetProps:x,hasChanges:u}=Q(S),{baseWidth:d,autoplay:i,autoplayDelay:f,pauseOnHover:g,loop:h,round:c}=e,[l,r]=cn(),p=m.useMemo(()=>[{name:"items",type:"CarouselItem[]",default:"DEFAULT_ITEMS",description:"An array of carousel items. Each item must include title, description, id, and icon."},{name:"baseWidth",type:"number",default:"300",description:"Total width (in px) of the carousel container. Effective item width is baseWidth minus padding."},{name:"autoplay",type:"boolean",default:"false",description:"Enables automatic scrolling to the next item at a fixed interval."},{name:"autoplayDelay",type:"number",default:"3000",description:"Delay in milliseconds between automatic scrolls when autoplay is enabled."},{name:"pauseOnHover",type:"boolean",default:"false",description:"Pauses the autoplay functionality when the carousel is hovered."},{name:"loop",type:"boolean",default:"false",description:"When true, the carousel loops seamlessly from the last item back to the first."},{name:"round",type:"boolean",default:"true",description:"When true, the carousel is rendered with a 1:1 aspect ratio and circular container/items."}],[]);return n.jsx(Z,{props:e,defaultProps:S,resetProps:x,hasChanges:u,children:n.jsxs(nn,{children:[n.jsxs(en,{children:[n.jsx(K,{position:"relative",className:"demo-container",h:400,overflow:"hidden",children:n.jsx(un,{baseWidth:d,autoplay:i,autoplayDelay:f,pauseOnHover:g,loop:h,round:c},l)}),n.jsxs(an,{children:[n.jsx(T,{title:"Width",min:250,max:330,step:10,value:d,onChange:o=>{a("baseWidth",o),r()}}),n.jsx(b,{title:"Round Variant",isChecked:c,onChange:o=>{a("round",o),r()}}),n.jsx(b,{title:"Loop",isChecked:h,onChange:o=>{a("loop",o),r()}}),n.jsx(b,{title:"Autoplay",isChecked:i,onChange:o=>{a("autoplay",o),r()}}),n.jsx(T,{title:"Delay",min:1e3,max:4e3,step:1e3,value:f,isDisabled:!i,onChange:o=>{a("autoplayDelay",o),r()}}),n.jsx(b,{title:"Pause On Hover",isChecked:g,isDisabled:!i,onChange:o=>{a("pauseOnHover",o),r()}})]}),n.jsx(tn,{data:p}),n.jsx(rn,{dependencyList:["motion"]})]}),n.jsx(on,{children:n.jsx(sn,{codeObject:vn,componentName:"Carousel"})})]})})};export{Tn as default};
