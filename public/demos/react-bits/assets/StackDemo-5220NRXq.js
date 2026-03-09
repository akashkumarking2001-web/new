import{r as f,j as e,bL as C,bJ as D,bK as M,B as N}from"./index-CKqfvLoB.js";import{u as O,C as j,T as q,P as H,a as L,b as V,c as z}from"./PropTable-BzD4cJVp.js";import{P as x}from"./PreviewSwitch-B0BSuWrO.js";import{C as X}from"./Customize-BaUKAf5J.js";import{P as E}from"./PreviewSlider-25yjOF_X.js";import{D as Y}from"./Dependencies-DmSBXzNX.js";import{u as W}from"./useForceRerender-0lK0qxlp.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./switch-CqqRi5Az.js";import"./slider-P7kYMDWb.js";function _({children:c,onSendToBack:o,sensitivity:n,disableDrag:p=!1}){const r=D(0),i=D(0),d=M(i,[-100,100],[60,-60]),l=M(r,[-100,100],[-60,60]);function h(b,m){Math.abs(m.offset.x)>n||Math.abs(m.offset.y)>n?o():(r.set(0),i.set(0))}return p?e.jsx(C.div,{className:"card-rotate-disabled",style:{x:0,y:0},children:c}):e.jsx(C.div,{className:"card-rotate",style:{x:r,y:i,rotateX:d,rotateY:l},drag:!0,dragConstraints:{top:0,right:0,bottom:0,left:0},dragElastic:.6,whileTap:{cursor:"grabbing"},onDragEnd:h,children:c})}function Z({randomRotation:c=!1,sensitivity:o=200,cards:n=[],animationConfig:p={stiffness:260,damping:20},sendToBackOnClick:r=!1,autoplay:i=!1,autoplayDelay:d=3e3,pauseOnHover:l=!1,mobileClickOnly:h=!1,mobileBreakpoint:b=768}){const[m,y]=f.useState(!1),[v,t]=f.useState(!1);f.useEffect(()=>{const a=()=>{y(window.innerWidth<b)};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[b]);const k=h&&m,R=r||k,[u,S]=f.useState(()=>n.length?n.map((a,s)=>({id:s+1,content:a})):[{id:1,content:e.jsx("img",{src:"https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",alt:"card-1",className:"card-image"})},{id:2,content:e.jsx("img",{src:"https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",alt:"card-2",className:"card-image"})},{id:3,content:e.jsx("img",{src:"https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",alt:"card-3",className:"card-image"})},{id:4,content:e.jsx("img",{src:"https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",alt:"card-4",className:"card-image"})}]);f.useEffect(()=>{n.length&&S(n.map((a,s)=>({id:s+1,content:a})))},[n]);const w=a=>{S(s=>{const g=[...s],B=g.findIndex(I=>I.id===a),[P]=g.splice(B,1);return g.unshift(P),g})};return f.useEffect(()=>{if(i&&u.length>1&&!v){const a=setInterval(()=>{const s=u[u.length-1].id;w(s)},d);return()=>clearInterval(a)}},[i,d,u,v]),e.jsx("div",{className:"stack-container",onMouseEnter:()=>l&&t(!0),onMouseLeave:()=>l&&t(!1),children:u.map((a,s)=>{const g=c?Math.random()*10-5:0;return e.jsx(_,{onSendToBack:()=>w(a.id),sensitivity:o,disableDrag:k,children:e.jsx(C.div,{className:"card",onClick:()=>R&&w(a.id),animate:{rotateZ:(u.length-s-1)*4+g,scale:1+s*.06-u.length*.06,transformOrigin:"90% 90%"},initial:!1,transition:{type:"spring",stiffness:p.stiffness,damping:p.damping},children:a.content})},a.id)})})}const A=`import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import './Stack.css';

function CardRotate({ children, onSendToBack, sensitivity, disableDrag = false }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  if (disableDrag) {
    return (
      <motion.div className="card-rotate-disabled" style={{ x: 0, y: 0 }}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cards = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  mobileClickOnly = false,
  mobileBreakpoint = 768
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  const shouldDisableDrag = mobileClickOnly && isMobile;
  const shouldEnableClick = sendToBackOnClick || shouldDisableDrag;

  const [stack, setStack] = useState(() => {
    if (cards.length) {
      return cards.map((content, index) => ({ id: index + 1, content }));
    } else {
      return [
        {
          id: 1,
          content: (
            <img
              src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format"
              alt="card-1"
              className="card-image"
            />
          )
        },
        {
          id: 2,
          content: (
            <img
              src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format"
              alt="card-2"
              className="card-image"
            />
          )
        },
        {
          id: 3,
          content: (
            <img
              src="https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format"
              alt="card-3"
              className="card-image"
            />
          )
        },
        {
          id: 4,
          content: (
            <img
              src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
              alt="card-4"
              className="card-image"
            />
          )
        }
      ];
    }
  });

  useEffect(() => {
    if (cards.length) {
      setStack(cards.map((content, index) => ({ id: index + 1, content })));
    }
  }, [cards]);

  const sendToBack = id => {
    setStack(prev => {
      const newStack = [...prev];
      const index = newStack.findIndex(card => card.id === id);
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card);
      return newStack;
    });
  };

  useEffect(() => {
    if (autoplay && stack.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        const topCardId = stack[stack.length - 1].id;
        sendToBack(topCardId);
      }, autoplayDelay);

      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, stack, isPaused]);

  return (
    <div
      className="stack-container"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {stack.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;
        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
            disableDrag={shouldDisableDrag}
          >
            <motion.div
              className="card"
              onClick={() => shouldEnableClick && sendToBack(card.id)}
              animate={{
                rotateZ: (stack.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - stack.length * 0.06,
                transformOrigin: '90% 90%'
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping
              }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
`,F=`.stack-container {
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 600px;
}

.card-rotate {
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: grab;
}

.card-rotate-disabled {
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.card {
  border-radius: 1rem;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card img {
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
`,$=`import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';

function CardRotate({ children, onSendToBack, sensitivity, disableDrag = false }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_, info) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  if (disableDrag) {
    return (
      <motion.div className="absolute inset-0 cursor-pointer" style={{ x: 0, y: 0 }}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cards = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  mobileClickOnly = false,
  mobileBreakpoint = 768
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  const shouldDisableDrag = mobileClickOnly && isMobile;
  const shouldEnableClick = sendToBackOnClick || shouldDisableDrag;

  const [stack, setStack] = useState(() => {
    if (cards.length) {
      return cards.map((content, index) => ({ id: index + 1, content }));
    } else {
      return [
        {
          id: 1,
          content: (
            <img
              src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format"
              alt="card-1"
              className="w-full h-full object-cover pointer-events-none"
            />
          )
        },
        {
          id: 2,
          content: (
            <img
              src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format"
              alt="card-2"
              className="w-full h-full object-cover pointer-events-none"
            />
          )
        },
        {
          id: 3,
          content: (
            <img
              src="https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format"
              alt="card-3"
              className="w-full h-full object-cover pointer-events-none"
            />
          )
        },
        {
          id: 4,
          content: (
            <img
              src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
              alt="card-4"
              className="w-full h-full object-cover pointer-events-none"
            />
          )
        }
      ];
    }
  });

  useEffect(() => {
    if (cards.length) {
      setStack(cards.map((content, index) => ({ id: index + 1, content })));
    }
  }, [cards]);

  const sendToBack = id => {
    setStack(prev => {
      const newStack = [...prev];
      const index = newStack.findIndex(card => card.id === id);
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card);
      return newStack;
    });
  };

  useEffect(() => {
    if (autoplay && stack.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        const topCardId = stack[stack.length - 1].id;
        sendToBack(topCardId);
      }, autoplayDelay);

      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, stack, isPaused]);

  return (
    <div
      className="relative w-full h-full"
      style={{
        perspective: 600
      }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {stack.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;
        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
            disableDrag={shouldDisableDrag}
          >
            <motion.div
              className="rounded-2xl overflow-hidden w-full h-full"
              onClick={() => shouldEnableClick && sendToBack(card.id)}
              animate={{
                rotateZ: (stack.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - stack.length * 0.06,
                transformOrigin: '90% 90%'
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping
              }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
`,J=`import { motion, useMotionValue, useTransform, type PanInfo } from 'motion/react';
import { useState, useEffect } from 'react';
import './Stack.css';

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
  disableDrag?: boolean;
}

function CardRotate({ children, onSendToBack, sensitivity, disableDrag = false }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  if (disableDrag) {
    return (
      <motion.div className="card-rotate-disabled" style={{ x: 0, y: 0 }}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  sendToBackOnClick?: boolean;
  cards?: React.ReactNode[];
  animationConfig?: { stiffness: number; damping: number };
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  mobileClickOnly?: boolean;
  mobileBreakpoint?: number;
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cards = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  mobileClickOnly = false,
  mobileBreakpoint = 768
}: StackProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  const shouldDisableDrag = mobileClickOnly && isMobile;
  const shouldEnableClick = sendToBackOnClick || shouldDisableDrag;

  const [stack, setStack] = useState<{ id: number; content: React.ReactNode }[]>(() => {
    if (cards.length) {
      return cards.map((content, index) => ({ id: index + 1, content }));
    } else {
      return [
        {
          id: 1,
          content: (
            <img
              src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format"
              alt="card-1"
              className="card-image"
            />
          )
        },
        {
          id: 2,
          content: (
            <img
              src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format"
              alt="card-2"
              className="card-image"
            />
          )
        },
        {
          id: 3,
          content: (
            <img
              src="https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format"
              alt="card-3"
              className="card-image"
            />
          )
        },
        {
          id: 4,
          content: (
            <img
              src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
              alt="card-4"
              className="card-image"
            />
          )
        }
      ];
    }
  });

  useEffect(() => {
    if (cards.length) {
      setStack(cards.map((content, index) => ({ id: index + 1, content })));
    }
  }, [cards]);

  const sendToBack = (id: number) => {
    setStack(prev => {
      const newStack = [...prev];
      const index = newStack.findIndex(card => card.id === id);
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card);
      return newStack;
    });
  };

  useEffect(() => {
    if (autoplay && stack.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        const topCardId = stack[stack.length - 1].id;
        sendToBack(topCardId);
      }, autoplayDelay);

      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, stack, isPaused]);

  return (
    <div
      className="stack-container"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {stack.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;
        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
            disableDrag={shouldDisableDrag}
          >
            <motion.div
              className="card"
              onClick={() => shouldEnableClick && sendToBack(card.id)}
              animate={{
                rotateZ: (stack.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - stack.length * 0.06,
                transformOrigin: '90% 90%'
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping
              }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
`,K=`import { motion, useMotionValue, useTransform, type PanInfo } from 'motion/react';
import { useState, useEffect } from 'react';

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
  disableDrag?: boolean;
}

function CardRotate({ children, onSendToBack, sensitivity, disableDrag = false }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  if (disableDrag) {
    return (
      <motion.div className="absolute inset-0 cursor-pointer" style={{ x: 0, y: 0 }}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  sendToBackOnClick?: boolean;
  cards?: React.ReactNode[];
  animationConfig?: { stiffness: number; damping: number };
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  mobileClickOnly?: boolean;
  mobileBreakpoint?: number;
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cards = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  mobileClickOnly = false,
  mobileBreakpoint = 768
}: StackProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  const shouldDisableDrag = mobileClickOnly && isMobile;
  const shouldEnableClick = sendToBackOnClick || shouldDisableDrag;

  const [stack, setStack] = useState<{ id: number; content: React.ReactNode }[]>(() => {
    if (cards.length) {
      return cards.map((content, index) => ({ id: index + 1, content }));
    } else {
      return [
        {
          id: 1,
          content: (
            <img
              src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format"
              alt="card-1"
              className="w-full h-full object-cover pointer-events-none"
            />
          )
        },
        {
          id: 2,
          content: (
            <img
              src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format"
              alt="card-2"
              className="w-full h-full object-cover pointer-events-none"
            />
          )
        },
        {
          id: 3,
          content: (
            <img
              src="https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format"
              alt="card-3"
              className="w-full h-full object-cover pointer-events-none"
            />
          )
        },
        {
          id: 4,
          content: (
            <img
              src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
              alt="card-4"
              className="w-full h-full object-cover pointer-events-none"
            />
          )
        }
      ];
    }
  });

  useEffect(() => {
    if (cards.length) {
      setStack(cards.map((content, index) => ({ id: index + 1, content })));
    }
  }, [cards]);

  const sendToBack = (id: number) => {
    setStack(prev => {
      const newStack = [...prev];
      const index = newStack.findIndex(card => card.id === id);
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card);
      return newStack;
    });
  };

  useEffect(() => {
    if (autoplay && stack.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        const topCardId = stack[stack.length - 1].id;
        sendToBack(topCardId);
      }, autoplayDelay);

      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, stack, isPaused]);

  return (
    <div
      className="relative w-full h-full"
      style={{
        perspective: 600
      }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {stack.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;
        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
            disableDrag={shouldDisableDrag}
          >
            <motion.div
              className="rounded-2xl overflow-hidden w-full h-full"
              onClick={() => shouldEnableClick && sendToBack(card.id)}
              animate={{
                rotateZ: (stack.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - stack.length * 0.06,
                transformOrigin: '90% 90%'
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping
              }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
`,U={dependencies:"motion",usage:`import Stack from './Stack'

const images = [
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
];

<div style={{ width: 208, height: 208 }}>
  <Stack
    randomRotation={true}
    sensitivity={180}
    sendToBackOnClick={true}
    cards={images.map((src, i) => (
      <img 
        key={i} 
        src={src} 
        alt={\`card-\${i + 1}\`} 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
    ))}
  />
</div>`,code:A,css:F,tailwind:$,tsCode:J,tsTailwind:K},T={randomRotation:!1,sensitivity:200,autoplay:!1,autoplayDelay:3e3,pauseOnHover:!1},de=()=>{const{props:c,updateProp:o,resetProps:n,hasChanges:p}=O(T),{randomRotation:r,sensitivity:i,autoplay:d,autoplayDelay:l,pauseOnHover:h}=c,[b,m]=W(),y=f.useMemo(()=>[{name:"randomRotation",type:"boolean",default:!1,description:"Applies a random rotation to each card for a 'messy' look."},{name:"sensitivity",type:"number",default:200,description:"Drag sensitivity for sending a card to the back."},{name:"sendToBackOnClick",type:"boolean",default:"false",description:"When enabled, the stack also shifts to the next card on click."},{name:"cards",type:"ReactNode[]",default:"[]",description:"The array of card elements to display in the stack."},{name:"animationConfig",type:"object",default:"{ stiffness: 260, damping: 20 }",description:"Configures the spring animation's stiffness and damping."},{name:"autoplay",type:"boolean",default:"false",description:"When enabled, the stack automatically cycles through cards."},{name:"autoplayDelay",type:"number",default:"3000",description:"Delay in milliseconds between automatic card transitions."},{name:"pauseOnHover",type:"boolean",default:"false",description:"When enabled, autoplay pauses when hovering over the stack."}],[]),v=["https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format","https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format","https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format","https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"];return e.jsx(j,{props:c,defaultProps:T,resetProps:n,hasChanges:p,children:e.jsxs(q,{children:[e.jsxs(H,{children:[e.jsx(N,{position:"relative",className:"demo-container",minH:400,overflow:"hidden",children:e.jsx("div",{style:{width:208,height:208},children:e.jsx(Z,{randomRotation:r,sensitivity:i,autoplay:d,autoplayDelay:l,pauseOnHover:h,cards:v.map((t,k)=>e.jsx("img",{src:t,alt:`card-${k+1}`,style:{width:"100%",height:"100%",objectFit:"cover"}},k))},b)})}),e.jsxs(X,{children:[e.jsx(x,{title:"Random Rotation",isChecked:r,onChange:t=>{o("randomRotation",t),m()}}),e.jsx(x,{title:"Autoplay",isChecked:d,onChange:t=>{o("autoplay",t)}}),e.jsx(x,{title:"Pause On Hover",isChecked:h,onChange:t=>{o("pauseOnHover",t)}}),e.jsx(E,{title:"Sensitivity",min:100,max:300,step:10,value:i,onChange:t=>{o("sensitivity",t),m()}}),e.jsx(E,{title:"Autoplay Delay",min:1e3,max:5e3,step:500,value:l,onChange:t=>{o("autoplayDelay",t)},displayValue:t=>`${t}ms`})]}),e.jsx(L,{data:y}),e.jsx(Y,{dependencyList:["motion"]})]}),e.jsx(V,{children:e.jsx(z,{codeObject:U,componentName:"Stack"})})]})})};export{de as default};
