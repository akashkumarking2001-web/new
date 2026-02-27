import{r as i,i as F,Z as j,j as e,B as p,a as g,I as M,e as $}from"./index-CKqfvLoB.js";import{u as Y,C as X,T as V,P as B,a as _,b as W,c as U}from"./PropTable-BzD4cJVp.js";import{c as q,d as J,e as Q}from"./index-pcIC2ubp.js";import{C as Z}from"./Customize-BaUKAf5J.js";import{D as G}from"./Dependencies-DmSBXzNX.js";import{P as S}from"./PreviewSlider-25yjOF_X.js";import{P as K}from"./PreviewSwitch-B0BSuWrO.js";import{u as ee}from"./useForceRerender-0lK0qxlp.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";import"./switch-CqqRi5Az.js";const ne="/demos/react-bits/assets/cs1-Chee3isR.webp",te="/demos/react-bits/assets/cs2-D7NMRsmg.webp",re="/demos/react-bits/assets/cs3-BURQntE8.webp",se=`import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import './CardSwap.css';

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div ref={ref} {...rest} className={\`card \${customClass ?? ''} \${rest.className ?? ''}\`.trim()} />
));
Card.displayName = 'Card';

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});
const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children
}) => {
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));

  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease
      });

      tl.addLabel('promote', \`-=\${config.durDrop * config.promoteOverlap}\`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease
          },
          \`promote+=\${i * 0.15}\`
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel('return', \`promote+=\${config.durMove * config.returnDelay}\`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        'return'
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease
        },
        'return'
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
      return () => {
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: e => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          }
        })
      : child
  );

  return (
    <div ref={container} className="card-swap-container" style={{ width, height }}>
      {rendered}
    </div>
  );
};

export default CardSwap;
`,ae=`.card-swap-container {
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(5%, 20%);
  transform-origin: bottom right;

  perspective: 900px;
  overflow: visible;
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 12px;
  border: 1px solid #fff;
  background: #000;

  transform-style: preserve-3d;
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

@media (max-width: 768px) {
  .card-swap-container {
    transform: scale(0.75) translate(25%, 25%);
  }
}

@media (max-width: 480px) {
  .card-swap-container {
    transform: scale(0.55) translate(25%, 25%);
  }
}
`,oe=`import React, { Children, cloneElement, forwardRef, isValidElement, useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';

export const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={\`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] \${customClass ?? ''} \${rest.className ?? ''}\`.trim()}
  />
));
Card.displayName = 'Card';

const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children
}) => {
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));

  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease
      });

      tl.addLabel('promote', \`-=\${config.durDrop * config.promoteOverlap}\`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease
          },
          \`promote+=\${i * 0.15}\`
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel('return', \`promote+=\${config.durMove * config.returnDelay}\`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        'return'
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease
        },
        'return'
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
      return () => {
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: e => {
            child.props.onClick?.(e);
            onCardClick?.(i);
          }
        })
      : child
  );

  return (
    <div
      ref={container}
      className="absolute bottom-0 right-0 transform translate-x-[5%] translate-y-[20%] origin-bottom-right perspective-[900px] overflow-visible max-[768px]:translate-x-[25%] max-[768px]:translate-y-[25%] max-[768px]:scale-[0.75] max-[480px]:translate-x-[25%] max-[480px]:translate-y-[25%] max-[480px]:scale-[0.55]"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
`,le=`import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef
} from 'react';
import gsap from 'gsap';
import './CardSwap.css';

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: 'linear' | 'elastic';
  children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ customClass, ...rest }, ref) => (
  <div ref={ref} {...rest} className={\`card \${customClass ?? ''} \${rest.className ?? ''}\`.trim()} />
));
Card.displayName = 'Card';

type CardRef = RefObject<HTMLDivElement | null>;
interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (i: number, distX: number, distY: number, total: number): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children
}) => {
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2
        };

  const childArr = useMemo(() => Children.toArray(children) as ReactElement<CardProps>[], [children]);
  const refs = useMemo<CardRef[]>(() => childArr.map(() => React.createRef<HTMLDivElement>()), [childArr.length]);

  const order = useRef<number[]>(Array.from({ length: childArr.length }, (_, i) => i));

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number>(0);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => placeNow(r.current!, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current!;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease
      });

      tl.addLabel('promote', \`-=\${config.durDrop * config.promoteOverlap}\`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current!;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease
          },
          \`promote+=\${i * 0.15}\`
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel('return', \`promote+=\${config.durMove * config.returnDelay}\`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        'return'
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease
        },
        'return'
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current!;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
      return () => {
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) =>
    isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: e => {
            child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
            onCardClick?.(i);
          }
        } as CardProps & React.RefAttributes<HTMLDivElement>)
      : child
  );

  return (
    <div ref={container} className="card-swap-container" style={{ width, height }}>
      {rendered}
    </div>
  );
};

export default CardSwap;
`,ie=`import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef
} from 'react';
import gsap from 'gsap';

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: 'linear' | 'elastic';
  children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ customClass, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
    className={\`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] \${customClass ?? ''} \${rest.className ?? ''}\`.trim()}
  />
));
Card.displayName = 'Card';

type CardRef = RefObject<HTMLDivElement | null>;
interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (i: number, distX: number, distY: number, total: number): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true
  });

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children
}) => {
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2
        };

  const childArr = useMemo(() => Children.toArray(children) as ReactElement<CardProps>[], [children]);
  const refs = useMemo<CardRef[]>(() => childArr.map(() => React.createRef<HTMLDivElement>()), [childArr.length]);

  const order = useRef<number[]>(Array.from({ length: childArr.length }, (_, i) => i));

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number>(0);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => placeNow(r.current!, makeSlot(i, cardDistance, verticalDistance, total), skewAmount));

    const swap = () => {
      if (order.current.length < 2) return;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current!;
      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease
      });

      tl.addLabel('promote', \`-=\${config.durDrop * config.promoteOverlap}\`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current!;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, 'promote');
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease
          },
          \`promote+=\${i * 0.15}\`
        );
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel('return', \`promote+=\${config.durMove * config.returnDelay}\`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        'return'
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease
        },
        'return'
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current!;
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener('mouseenter', pause);
      node.addEventListener('mouseleave', resume);
      return () => {
        node.removeEventListener('mouseenter', pause);
        node.removeEventListener('mouseleave', resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) =>
    isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: e => {
            child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
            onCardClick?.(i);
          }
        } as CardProps & React.RefAttributes<HTMLDivElement>)
      : child
  );

  return (
    <div
      ref={container}
      className="absolute bottom-0 right-0 transform translate-x-[5%] translate-y-[20%] origin-bottom-right perspective-[900px] overflow-visible max-[768px]:translate-x-[25%] max-[768px]:translate-y-[25%] max-[768px]:scale-[0.75] max-[480px]:translate-x-[25%] max-[480px]:translate-y-[25%] max-[480px]:scale-[0.55]"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
`,ce={dependencies:"gsap",usage:`import CardSwap, { Card } from './CardSwap'

<div style={{ height: '600px', position: 'relative' }}>
  <CardSwap
    cardDistance={60}
    verticalDistance={70}
    delay={5000}
    pauseOnHover={false}
  >
    <Card>
      <h3>Card 1</h3>
      <p>Your content here</p>
    </Card>
    <Card>
      <h3>Card 2</h3>
      <p>Your content here</p>
    </Card>
    <Card>
      <h3>Card 3</h3>
      <p>Your content here</p>
    </Card>
  </CardSwap>
</div>`,code:se,css:ae,tailwind:oe,tsCode:le,tsTailwind:ie},z=i.forwardRef(({customClass:s,...n},a)=>e.jsx("div",{ref:a,...n,className:`card ${s??""} ${n.className??""}`.trim()}));z.displayName="Card";const A=(s,n,a,o)=>({x:s*n,y:-s*a,z:-s*n*1.5,zIndex:o-s}),de=(s,n,a)=>j.set(s,{x:n.x,y:n.y,z:n.z,xPercent:-50,yPercent:-50,skewY:a,transformOrigin:"center center",zIndex:n.zIndex,force3D:!0}),ue=({width:s=500,height:n=400,cardDistance:a=60,verticalDistance:o=70,delay:b=5e3,pauseOnHover:D=!1,onCardClick:x,skewAmount:w=6,easing:y="elastic",children:R})=>{const r=y==="elastic"?{ease:"elastic.out(0.6,0.9)",durDrop:2,durMove:2,durReturn:2,promoteOverlap:.9,returnDelay:.05}:{ease:"power1.inOut",durDrop:.8,durMove:.8,durReturn:.8,promoteOverlap:.45,returnDelay:.2},v=i.useMemo(()=>i.Children.toArray(R),[R]),d=i.useMemo(()=>v.map(()=>F.createRef()),[v.length]),l=i.useRef(Array.from({length:v.length},(h,m)=>m)),I=i.useRef(null),C=i.useRef(),L=i.useRef(null);i.useEffect(()=>{const h=d.length;d.forEach((c,u)=>de(c.current,A(u,a,o,h),w));const m=()=>{if(l.current.length<2)return;const[c,...u]=l.current,f=d[c].current,t=j.timeline();I.current=t,t.to(f,{y:"+=500",duration:r.durDrop,ease:r.ease}),t.addLabel("promote",`-=${r.durDrop*r.promoteOverlap}`),u.forEach((T,O)=>{const H=d[T].current,E=A(O,a,o,d.length);t.set(H,{zIndex:E.zIndex},"promote"),t.to(H,{x:E.x,y:E.y,z:E.z,duration:r.durMove,ease:r.ease},`promote+=${O*.15}`)});const k=A(d.length-1,a,o,d.length);t.addLabel("return",`promote+=${r.durMove*r.returnDelay}`),t.call(()=>{j.set(f,{zIndex:k.zIndex})},void 0,"return"),t.to(f,{x:k.x,y:k.y,z:k.z,duration:r.durReturn,ease:r.ease},"return"),t.call(()=>{l.current=[...u,c]})};if(m(),C.current=window.setInterval(m,b),D){const c=L.current,u=()=>{var t;(t=I.current)==null||t.pause(),clearInterval(C.current)},f=()=>{var t;(t=I.current)==null||t.play(),C.current=window.setInterval(m,b)};return c.addEventListener("mouseenter",u),c.addEventListener("mouseleave",f),()=>{c.removeEventListener("mouseenter",u),c.removeEventListener("mouseleave",f),clearInterval(C.current)}}return()=>clearInterval(C.current)},[a,o,b,D,w,y]);const N=v.map((h,m)=>i.isValidElement(h)?i.cloneElement(h,{key:m,ref:d[m],style:{width:s,height:n,...h.props.style??{}},onClick:c=>{var u,f;(f=(u=h.props).onClick)==null||f.call(u,c),x==null||x(m)}}):h);return e.jsx("div",{ref:L,className:"card-swap-container",style:{width:s,height:n},children:N})},P={cardDistance:60,verticalDistance:70,delay:5e3,skewAmount:6,easing:"elastic",pauseOnHover:!1},De=()=>{const[s,n]=ee(),{props:a,updateProp:o,resetProps:b,hasChanges:D}=Y(P),{cardDistance:x,verticalDistance:w,delay:y,skewAmount:R,easing:r,pauseOnHover:v}=a,d=i.useMemo(()=>[{name:"width",type:"number | string",default:"500",description:"Width of the card container"},{name:"height",type:"number | string",default:"400",description:"Height of the card container"},{name:"cardDistance",type:"number",default:"60",description:"X-axis spacing between cards"},{name:"verticalDistance",type:"number",default:"70",description:"Y-axis spacing between cards"},{name:"delay",type:"number",default:"5000",description:"Milliseconds between card swaps"},{name:"pauseOnHover",type:"boolean",default:"false",description:"Whether to pause animation on hover"},{name:"onCardClick",type:"(idx: number) => void",default:"undefined",description:"Callback function when a card is clicked"},{name:"skewAmount",type:"number",default:"6",description:"Degree of slope for top/bottom edges"},{name:"easing",type:"'linear' | 'elastic'",default:"'elastic'",description:"Animation easing type"},{name:"children",type:"ReactNode",default:"required",description:"Card components to display in the stack"}],[]);return e.jsx(X,{props:a,defaultProps:P,resetProps:b,hasChanges:D,children:e.jsxs(V,{children:[e.jsxs(B,{children:[e.jsxs(p,{className:"demo-container",h:500,overflow:"hidden",display:"flex",flexDirection:{base:"column",lg:"row"},position:"relative",children:[e.jsxs(p,{pl:{base:0,lg:0},w:{base:"100%",lg:"50%"},h:{base:"auto",lg:"100%"},display:"flex",flexDirection:"column",justifyContent:{base:"flex-start",lg:"center"},alignItems:{base:"center",lg:"flex-start"},textAlign:{base:"center",lg:"left"},pt:{base:8,lg:0},pb:{base:4,lg:0},px:{base:0,lg:0},children:[e.jsxs(g,{fontSize:{base:"2xl",md:"3xl",lg:"3xl"},mb:4,fontWeight:500,lineHeight:1.1,pl:{base:0,lg:"6rem"},children:["Card stacks have never"," ",e.jsx(p,{as:"span",display:{base:"inline",lg:"block"},children:"looked so good"})]}),e.jsx(g,{fontSize:{base:"lg",lg:"xl"},mb:4,fontWeight:400,lineHeight:1.1,color:"#999",pl:{base:0,lg:"6rem"},children:"Just look at it go!"})]}),e.jsx(p,{w:{base:"100%",lg:"50%"},h:{base:"400px",lg:"100%"},position:"relative",children:e.jsxs(ue,{cardDistance:x,verticalDistance:w,delay:y,skewAmount:R,easing:r,pauseOnHover:v,children:[e.jsxs(z,{customClass:"one",style:{display:"flex",flexDirection:"column",overflow:"hidden"},children:[e.jsx(p,{borderBottom:"1px solid #fff",bg:"linear-gradient(to top, #0D0716, #060606)",flexShrink:0,children:e.jsxs(g,{m:2,children:[e.jsx(M,{as:q,mr:2}),"Smooth"]})}),e.jsx(p,{position:"relative",flex:1,children:e.jsx("img",{src:ne,alt:"Card Swap Demo 1",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",display:"block"}})})]}),e.jsxs(z,{customClass:"two",style:{display:"flex",flexDirection:"column",overflow:"hidden"},children:[e.jsx(p,{borderBottom:"1px solid #fff",bg:"linear-gradient(to top, #0D0716, #060606)",flexShrink:0,children:e.jsxs(g,{m:2,children:[e.jsx(M,{as:J,mr:2}),"Reliable"]})}),e.jsx(p,{position:"relative",flex:1,children:e.jsx("img",{src:te,alt:"Card Swap Demo 2",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",display:"block"}})})]}),e.jsxs(z,{customClass:"three",style:{display:"flex",flexDirection:"column",overflow:"hidden"},children:[e.jsx(p,{borderBottom:"1px solid #fff",bg:"linear-gradient(to top, #0D0716, #060606)",flexShrink:0,children:e.jsxs(g,{m:2,children:[e.jsx(M,{as:Q,mr:2}),"Customizable"]})}),e.jsx(p,{position:"relative",flex:1,children:e.jsx("img",{src:re,alt:"Card Swap Demo 3",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",display:"block"}})})]})]},s)})]}),e.jsxs(Z,{children:[e.jsx(K,{title:"Pause On Hover",isChecked:v,onChange:l=>{o("pauseOnHover",l),n()}}),e.jsx(S,{title:"Card Distance",min:30,max:100,step:5,value:x,onChange:l=>{o("cardDistance",l),n()}}),e.jsx(S,{title:"Vertical Distance",min:40,max:120,step:5,value:w,onChange:l=>{o("verticalDistance",l),n()}}),e.jsx(S,{title:"Delay (ms)",min:3e3,max:8e3,step:500,value:y,onChange:l=>{o("delay",l),n()}}),e.jsx(S,{title:"Skew Amount",min:0,max:12,step:1,value:R,onChange:l=>{o("skewAmount",l),n()}}),e.jsxs($,{fontSize:"xs",bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:8,onClick:()=>{o("easing",r==="elastic"?"linear":"elastic"),n()},children:["Easing: ",e.jsxs(g,{color:"#a1a1aa",children:[" ",r]})]})]}),e.jsx(_,{data:d}),e.jsx(G,{dependencyList:["gsap"]})]}),e.jsx(W,{children:e.jsx(U,{codeObject:ce,componentName:"CardSwap"})})]})})};export{De as default};
