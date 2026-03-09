import{r as c,j as e,Z as R,B as C,a as V}from"./index-CKqfvLoB.js";import{u as Y,C as D,T as E,P as S,a as X,b as F,c as L}from"./PropTable-BzD4cJVp.js";import{D as j}from"./Dependencies-DmSBXzNX.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";const N=({width:m=300,height:g=400,image:h="https://picsum.photos/300/400?grayscale",children:p})=>{const f=c.useRef(null),w=c.useRef(null),i=c.useRef({x:window.innerWidth/2,y:window.innerHeight/2}),x=c.useRef({...i.current}),u=c.useRef({width:window.innerWidth,height:window.innerHeight});return c.useEffect(()=>{const d=(t,n,a)=>(1-a)*t+a*n,l=(t,n,a,r,o)=>(t-n)*(o-r)/(a-n)+r,T=(t,n,a,r)=>{const o=t-n,z=a-r;return Math.hypot(o,z)},b=()=>{u.current={width:window.innerWidth,height:window.innerHeight}},v=t=>{i.current={x:t.clientX,y:t.clientY}};window.addEventListener("resize",b),window.addEventListener("mousemove",v);const s={imgTransforms:{x:0,y:0,rz:0},displacementScale:0},y=()=>{let t=d(s.imgTransforms.x,l(i.current.x,0,u.current.width,-120,120),.1),n=d(s.imgTransforms.y,l(i.current.y,0,u.current.height,-120,120),.1),a=d(s.imgTransforms.rz,l(i.current.x,0,u.current.width,-10,10),.1);const r=50;t>r&&(t=r+(t-r)*.2),t<-r&&(t=-r+(t+r)*.2),n>r&&(n=r+(n-r)*.2),n<-r&&(n=-r+(n+r)*.2),s.imgTransforms.x=t,s.imgTransforms.y=n,s.imgTransforms.rz=a,f.current&&R.set(f.current,{x:s.imgTransforms.x,y:s.imgTransforms.y,rotateZ:s.imgTransforms.rz});const o=T(x.current.x,i.current.x,x.current.y,i.current.y);s.displacementScale=d(s.displacementScale,l(o,0,200,0,400),.06),w.current&&R.set(w.current,{attr:{scale:s.displacementScale}}),x.current={...i.current},requestAnimationFrame(y)};return y(),()=>{window.removeEventListener("resize",b),window.removeEventListener("mousemove",v)}},[]),e.jsxs("div",{className:"content",style:{width:`${m}px`,height:`${g}px`},ref:f,children:[e.jsxs("svg",{viewBox:"-60 -75 720 900",preserveAspectRatio:"xMidYMid slice",className:"svg",children:[e.jsxs("filter",{id:"imgFilter",children:[e.jsx("feTurbulence",{type:"turbulence",baseFrequency:"0.015",numOctaves:"5",seed:"4",stitchTiles:"stitch",x:"0%",y:"0%",width:"100%",height:"100%",result:"turbulence1"}),e.jsx("feDisplacementMap",{ref:w,in:"SourceGraphic",in2:"turbulence1",scale:"0",xChannelSelector:"R",yChannelSelector:"B",x:"0%",y:"0%",width:"100%",height:"100%",result:"displacementMap3"})]}),e.jsx("g",{children:e.jsx("image",{href:h,x:"0",y:"0",width:"600",height:"750",filter:"url(#imgFilter)",preserveAspectRatio:"xMidYMid slice"})})]}),e.jsx("div",{className:"card-text",children:p})]})},A=`import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import './DecayCard.css';

const DecayCard = ({ width = 300, height = 400, image = 'https://picsum.photos/300/400?grayscale', children }) => {
  const svgRef = useRef(null);
  const displacementMapRef = useRef(null);
  const cursor = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const cachedCursor = useRef({ ...cursor.current });
  const winsize = useRef({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

    const distance = (x1, x2, y1, y2) => {
      const a = x1 - x2;
      const b = y1 - y2;
      return Math.hypot(a, b);
    };

    const handleResize = () => {
      winsize.current = { width: window.innerWidth, height: window.innerHeight };
    };

    const handleMouseMove = ev => {
      cursor.current = { x: ev.clientX, y: ev.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const imgValues = {
      imgTransforms: { x: 0, y: 0, rz: 0 },
      displacementScale: 0
    };

    const render = () => {
      let targetX = lerp(imgValues.imgTransforms.x, map(cursor.current.x, 0, winsize.current.width, -120, 120), 0.1);
      let targetY = lerp(imgValues.imgTransforms.y, map(cursor.current.y, 0, winsize.current.height, -120, 120), 0.1);
      let targetRz = lerp(imgValues.imgTransforms.rz, map(cursor.current.x, 0, winsize.current.width, -10, 10), 0.1);

      const bound = 50;

      if (targetX > bound) targetX = bound + (targetX - bound) * 0.2;
      if (targetX < -bound) targetX = -bound + (targetX + bound) * 0.2;
      if (targetY > bound) targetY = bound + (targetY - bound) * 0.2;
      if (targetY < -bound) targetY = -bound + (targetY + bound) * 0.2;

      imgValues.imgTransforms.x = targetX;
      imgValues.imgTransforms.y = targetY;
      imgValues.imgTransforms.rz = targetRz;

      if (svgRef.current) {
        gsap.set(svgRef.current, {
          x: imgValues.imgTransforms.x,
          y: imgValues.imgTransforms.y,
          rotateZ: imgValues.imgTransforms.rz
        });
      }

      const cursorTravelledDistance = distance(
        cachedCursor.current.x,
        cursor.current.x,
        cachedCursor.current.y,
        cursor.current.y
      );
      imgValues.displacementScale = lerp(
        imgValues.displacementScale,
        map(cursorTravelledDistance, 0, 200, 0, 400),
        0.06
      );

      if (displacementMapRef.current) {
        gsap.set(displacementMapRef.current, { attr: { scale: imgValues.displacementScale } });
      }

      cachedCursor.current = { ...cursor.current };

      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="content" style={{ width: \`\${width}px\`, height: \`\${height}px\` }} ref={svgRef}>
      <svg viewBox="-60 -75 720 900" preserveAspectRatio="xMidYMid slice" className="svg">
        <filter id="imgFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.015"
            numOctaves="5"
            seed="4"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence1"
          />
          <feDisplacementMap
            ref={displacementMapRef}
            in="SourceGraphic"
            in2="turbulence1"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="B"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="displacementMap3"
          />
        </filter>
        <g>
          <image
            href={image}
            x="0"
            y="0"
            width="600"
            height="750"
            filter="url(#imgFilter)"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
      </svg>
      <div className="card-text">{children}</div>
    </div>
  );
};

export default DecayCard;
`,H=`.content {
  position: relative;
}

.svg {
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  will-change: transform;
}

.card-text {
  position: absolute;
  bottom: 1.2em;
  letter-spacing: -0.5px;
  font-weight: 900;
  left: 1em;
  font-size: 2.5rem;
  line-height: 1.5em;
}

.card-text::first-line {
  font-size: 4rem;
}
`,W=`import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const DecayCard = ({ width = 300, height = 400, image = 'https://picsum.photos/300/400?grayscale', children }) => {
  const svgRef = useRef(null);
  const displacementMapRef = useRef(null);
  const cursor = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const cachedCursor = useRef({ ...cursor.current });
  const winsize = useRef({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const lerp = (a, b, n) => (1 - n) * a + n * b;
    const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;
    const distance = (x1, x2, y1, y2) => Math.hypot(x1 - x2, y1 - y2);

    const handleResize = () => {
      winsize.current = { width: window.innerWidth, height: window.innerHeight };
    };

    const handleMouseMove = ev => {
      cursor.current = { x: ev.clientX, y: ev.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const imgValues = {
      imgTransforms: { x: 0, y: 0, rz: 0 },
      displacementScale: 0
    };

    const render = () => {
      let targetX = lerp(imgValues.imgTransforms.x, map(cursor.current.x, 0, winsize.current.width, -120, 120), 0.1);
      let targetY = lerp(imgValues.imgTransforms.y, map(cursor.current.y, 0, winsize.current.height, -120, 120), 0.1);
      let targetRz = lerp(imgValues.imgTransforms.rz, map(cursor.current.x, 0, winsize.current.width, -10, 10), 0.1);

      const bound = 50;
      if (targetX > bound) targetX = bound + (targetX - bound) * 0.2;
      if (targetX < -bound) targetX = -bound + (targetX + bound) * 0.2;
      if (targetY > bound) targetY = bound + (targetY - bound) * 0.2;
      if (targetY < -bound) targetY = -bound + (targetY + bound) * 0.2;

      imgValues.imgTransforms.x = targetX;
      imgValues.imgTransforms.y = targetY;
      imgValues.imgTransforms.rz = targetRz;

      if (svgRef.current) {
        gsap.set(svgRef.current, {
          x: imgValues.imgTransforms.x,
          y: imgValues.imgTransforms.y,
          rotateZ: imgValues.imgTransforms.rz
        });
      }

      const cursorTravelledDistance = distance(
        cachedCursor.current.x,
        cursor.current.x,
        cachedCursor.current.y,
        cursor.current.y
      );
      imgValues.displacementScale = lerp(
        imgValues.displacementScale,
        map(cursorTravelledDistance, 0, 200, 0, 400),
        0.06
      );

      if (displacementMapRef.current) {
        gsap.set(displacementMapRef.current, { attr: { scale: imgValues.displacementScale } });
      }

      cachedCursor.current = { ...cursor.current };

      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={svgRef} className="relative" style={{ width: \`\${width}px\`, height: \`\${height}px\` }}>
      <svg
        viewBox="-60 -75 720 900"
        preserveAspectRatio="xMidYMid slice"
        className="relative w-full h-full block [will-change:transform]"
      >
        <filter id="imgFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.015"
            numOctaves="5"
            seed="4"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence1"
          />
          <feDisplacementMap
            ref={displacementMapRef}
            in="SourceGraphic"
            in2="turbulence1"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="B"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="displacementMap3"
          />
        </filter>
        <g>
          <image
            href={image}
            x="0"
            y="0"
            width="600"
            height="750"
            filter="url(#imgFilter)"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
      </svg>
      <div className="absolute bottom-[1.2em] left-[1em] tracking-[-0.5px] font-black text-[2.5rem] leading-[1.5em] first-line:text-[6rem]">
        {children}
      </div>
    </div>
  );
};

export default DecayCard;
`,P=`import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import './DecayCard.css';

interface DecayCardProps {
  width?: number;
  height?: number;
  image?: string;
  children?: ReactNode;
}

const DecayCard: React.FC<DecayCardProps> = ({
  width = 300,
  height = 400,
  image = 'https://picsum.photos/300/400?grayscale',
  children
}) => {
  const svgRef = useRef<HTMLDivElement>(null);
  const displacementMapRef = useRef<SVGFEDisplacementMapElement>(null);
  const cursor = useRef<{ x: number; y: number }>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  });
  const cachedCursor = useRef<{ x: number; y: number }>({ ...cursor.current });
  const winsize = useRef<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const lerp = (a: number, b: number, n: number): number => (1 - n) * a + n * b;

    const map = (x: number, a: number, b: number, c: number, d: number): number => ((x - a) * (d - c)) / (b - a) + c;

    const distance = (x1: number, x2: number, y1: number, y2: number): number => {
      const a = x1 - x2;
      const b = y1 - y2;
      return Math.hypot(a, b);
    };

    const handleResize = (): void => {
      winsize.current = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    };

    const handleMouseMove = (ev: MouseEvent): void => {
      cursor.current = { x: ev.clientX, y: ev.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const imgValues = {
      imgTransforms: { x: 0, y: 0, rz: 0 },
      displacementScale: 0
    };

    const render = () => {
      let targetX = lerp(imgValues.imgTransforms.x, map(cursor.current.x, 0, winsize.current.width, -120, 120), 0.1);
      let targetY = lerp(imgValues.imgTransforms.y, map(cursor.current.y, 0, winsize.current.height, -120, 120), 0.1);
      let targetRz = lerp(imgValues.imgTransforms.rz, map(cursor.current.x, 0, winsize.current.width, -10, 10), 0.1);

      const bound = 50;
      if (targetX > bound) targetX = bound + (targetX - bound) * 0.2;
      if (targetX < -bound) targetX = -bound + (targetX + bound) * 0.2;
      if (targetY > bound) targetY = bound + (targetY - bound) * 0.2;
      if (targetY < -bound) targetY = -bound + (targetY + bound) * 0.2;

      imgValues.imgTransforms.x = targetX;
      imgValues.imgTransforms.y = targetY;
      imgValues.imgTransforms.rz = targetRz;

      if (svgRef.current) {
        gsap.set(svgRef.current, {
          x: imgValues.imgTransforms.x,
          y: imgValues.imgTransforms.y,
          rotateZ: imgValues.imgTransforms.rz
        });
      }

      const cursorTravelledDistance = distance(
        cachedCursor.current.x,
        cursor.current.x,
        cachedCursor.current.y,
        cursor.current.y
      );
      imgValues.displacementScale = lerp(
        imgValues.displacementScale,
        map(cursorTravelledDistance, 0, 200, 0, 400),
        0.06
      );

      if (displacementMapRef.current) {
        gsap.set(displacementMapRef.current, {
          attr: { scale: imgValues.displacementScale }
        });
      }

      cachedCursor.current = { ...cursor.current };

      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="content" style={{ width: \`\${width}px\`, height: \`\${height}px\` }} ref={svgRef}>
      <svg viewBox="-60 -75 720 900" preserveAspectRatio="xMidYMid slice" className="svg">
        <filter id="imgFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.015"
            numOctaves="5"
            seed="4"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence1"
          />
          <feDisplacementMap
            ref={displacementMapRef}
            in="SourceGraphic"
            in2="turbulence1"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="B"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="displacementMap3"
          />
        </filter>
        <g>
          <image
            href={image}
            x="0"
            y="0"
            width="600"
            height="750"
            filter="url(#imgFilter)"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
      </svg>
      <div className="card-text">{children}</div>
    </div>
  );
};

export default DecayCard;
`,B=`import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';

interface DecayCardProps {
  width?: number;
  height?: number;
  image?: string;
  children?: ReactNode;
}

const DecayCard: React.FC<DecayCardProps> = ({
  width = 300,
  height = 400,
  image = 'https://picsum.photos/300/400?grayscale',
  children
}) => {
  const svgRef = useRef<HTMLDivElement | null>(null);
  const displacementMapRef = useRef<SVGFEDisplacementMapElement | null>(null);
  const cursor = useRef<{ x: number; y: number }>({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  });
  const cachedCursor = useRef<{ x: number; y: number }>({ ...cursor.current });
  const winsize = useRef<{ width: number; height: number }>({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const lerp = (a: number, b: number, n: number): number => (1 - n) * a + n * b;
    const map = (x: number, a: number, b: number, c: number, d: number): number => ((x - a) * (d - c)) / (b - a) + c;
    const distance = (x1: number, x2: number, y1: number, y2: number): number => Math.hypot(x1 - x2, y1 - y2);

    const handleResize = (): void => {
      winsize.current = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    };

    const handleMouseMove = (ev: MouseEvent): void => {
      cursor.current = { x: ev.clientX, y: ev.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const imgValues = {
      imgTransforms: { x: 0, y: 0, rz: 0 },
      displacementScale: 0
    };

    const render = () => {
      let targetX = lerp(imgValues.imgTransforms.x, map(cursor.current.x, 0, winsize.current.width, -120, 120), 0.1);
      let targetY = lerp(imgValues.imgTransforms.y, map(cursor.current.y, 0, winsize.current.height, -120, 120), 0.1);
      let targetRz = lerp(imgValues.imgTransforms.rz, map(cursor.current.x, 0, winsize.current.width, -10, 10), 0.1);

      const bound = 50;
      if (targetX > bound) targetX = bound + (targetX - bound) * 0.2;
      if (targetX < -bound) targetX = -bound + (targetX + bound) * 0.2;
      if (targetY > bound) targetY = bound + (targetY - bound) * 0.2;
      if (targetY < -bound) targetY = -bound + (targetY + bound) * 0.2;

      imgValues.imgTransforms.x = targetX;
      imgValues.imgTransforms.y = targetY;
      imgValues.imgTransforms.rz = targetRz;

      if (svgRef.current) {
        gsap.set(svgRef.current, {
          x: imgValues.imgTransforms.x,
          y: imgValues.imgTransforms.y,
          rotateZ: imgValues.imgTransforms.rz
        });
      }

      const cursorTravelledDistance = distance(
        cachedCursor.current.x,
        cursor.current.x,
        cachedCursor.current.y,
        cursor.current.y
      );
      imgValues.displacementScale = lerp(
        imgValues.displacementScale,
        map(cursorTravelledDistance, 0, 200, 0, 400),
        0.06
      );

      if (displacementMapRef.current) {
        gsap.set(displacementMapRef.current, {
          attr: { scale: imgValues.displacementScale }
        });
      }

      cachedCursor.current = { ...cursor.current };

      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={svgRef} className="relative" style={{ width: \`\${width}px\`, height: \`\${height}px\` }}>
      <svg
        viewBox="-60 -75 720 900"
        preserveAspectRatio="xMidYMid slice"
        className="relative w-full h-full block [will-change:transform]"
      >
        <filter id="imgFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.015"
            numOctaves="5"
            seed="4"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence1"
          />
          <feDisplacementMap
            ref={displacementMapRef}
            in="SourceGraphic"
            in2="turbulence1"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="B"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="displacementMap3"
          />
        </filter>
        <g>
          <image
            href={image}
            x="0"
            y="0"
            width="600"
            height="750"
            filter="url(#imgFilter)"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
      </svg>
      <div className="absolute bottom-[1.2em] left-[1em] tracking-[-0.5px] font-black text-[2.5rem] leading-[1.5em] first-line:text-[6rem]">
        {children}
      </div>
    </div>
  );
};

export default DecayCard;
`,q={dependencies:"gsap",usage:`import DecayCard from './DecayCard';

<DecayCard width={200} height={300} image="https://picsum.photos/300/400?grayscale">
  <h2>Decay<br/>Card</h2>
</DecayCard>`,code:A,css:H,tailwind:W,tsCode:P,tsTailwind:B},M={},J=()=>{const{props:m,resetProps:g,hasChanges:h}=Y(M),p=c.useMemo(()=>[{name:"children",type:"ReactNode",default:"",description:"The content (JSX) to be rendered inside the card."},{name:"width",type:"number",default:"200",description:"The width of the card in pixels."},{name:"height",type:"number",default:"300",description:"The height of the card in pixels."},{name:"image",type:"string",default:"",description:"Allows setting the background image of the card."}],[]);return e.jsx(D,{props:m,defaultProps:M,resetProps:g,hasChanges:h,children:e.jsxs(E,{children:[e.jsxs(S,{children:[e.jsx(C,{position:"relative",className:"demo-container",overflow:"hidden",children:e.jsx(N,{children:e.jsxs(V,{mixBlendMode:"overlay",children:["Decay",e.jsx("br",{}),"Card"]})})}),e.jsx(X,{data:p}),e.jsx(j,{dependencyList:["gsap"]})]}),e.jsx(F,{children:e.jsx(L,{codeObject:q,componentName:"DecayCard"})})]})})};export{J as default};
