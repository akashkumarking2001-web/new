import{r as c,bJ as P,c7 as k,c8 as F,j as n,B as U,F as V,e as R,L as M}from"./index-CKqfvLoB.js";import{u as W,C as v,T as G,P as L,a as H,b as B,c as O}from"./PropTable-BzD4cJVp.js";import{G as A}from"./GradientText-PH5MF2Rw.js";import{R as D}from"./RefreshButton-CpmD4Uvc.js";import{D as J}from"./Dependencies-DmSBXzNX.js";import{u as w}from"./useForceRerender-0lK0qxlp.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";function I({to:t,from:o=0,direction:a="up",delay:m=0,duration:s=2,className:b="",startWhen:p=!0,separator:u="",onStart:l,onEnd:f}){const r=c.useRef(null),d=P(a==="down"?t:o),T=20+40*(1/s),j=100*(1/s),y=k(d,{damping:T,stiffness:j}),C=F(r,{once:!0,margin:"0px"}),N=i=>{const e=i.toString();if(e.includes(".")){const x=e.split(".")[1];if(parseInt(x)!==0)return x.length}return 0},g=Math.max(N(o),N(t)),h=c.useCallback(i=>{const e=g>0,x={useGrouping:!!u,minimumFractionDigits:e?g:0,maximumFractionDigits:e?g:0},E=Intl.NumberFormat("en-US",x).format(i);return u?E.replace(/,/g,u):E},[g,u]);return c.useEffect(()=>{r.current&&(r.current.textContent=h(a==="down"?t:o))},[o,t,a,h]),c.useEffect(()=>{if(C&&p){typeof l=="function"&&l();const i=setTimeout(()=>{d.set(a==="down"?o:t)},m*1e3),e=setTimeout(()=>{typeof f=="function"&&f()},m*1e3+s*1e3);return()=>{clearTimeout(i),clearTimeout(e)}}},[C,p,d,a,o,t,m,l,f,s]),c.useEffect(()=>{const i=y.on("change",e=>{r.current&&(r.current.textContent=h(e))});return()=>i()},[y,h]),n.jsx("span",{className:b,ref:r})}const Y=`import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = num => {
    const str = num.toString();

    if (str.includes('.')) {
      const decimals = str.split('.')[1];

      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }

    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    latest => {
      const hasDecimals = maxDecimals > 0;

      const options = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };

      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from);
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === 'function') onStart();

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === 'function') onEnd();
        },
        delay * 1000 + duration * 1000
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', latest => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span className={className} ref={ref} />;
}
`,_=`import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = num => {
    const str = num.toString();

    if (str.includes('.')) {
      const decimals = str.split('.')[1];

      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }

    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    latest => {
      const hasDecimals = maxDecimals > 0;

      const options = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };

      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from);
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === 'function') onStart();

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === 'function') onEnd();
        },
        delay * 1000 + duration * 1000
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', latest => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span className={className} ref={ref} />;
}
`,q=`import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;

      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };

      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from);
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === 'function') {
        onStart();
      }

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === 'function') {
            onEnd();
          }
        },
        delay * 1000 + duration * 1000
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest: number) => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span className={className} ref={ref} />;
}
`,z=`import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness
  });

  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;

      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };

      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from);
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === 'function') {
        onStart();
      }

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === 'down' ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(
        () => {
          if (typeof onEnd === 'function') {
            onEnd();
          }
        },
        delay * 1000 + duration * 1000
      );

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest: number) => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });

    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span className={className} ref={ref} />;
}
`,K={dependencies:"motion",usage:`import CountUp from './CountUp'

<CountUp
  from={0}
  to={100}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>`,code:Y,tailwind:_,tsCode:q,tsTailwind:z},S={startCounting:!1},rn=()=>{const{props:t,updateProp:o,resetProps:a,hasChanges:m}=W(S),{startCounting:s}=t,[b,p]=w(),[u,l]=w(),[f,r]=w(),d=c.useMemo(()=>[{name:"to",type:"number",default:"—",description:"The target number to count up to."},{name:"from",type:"number",default:"0",description:"The initial number from which the count starts."},{name:"direction",type:"string",default:'"up"',description:'Direction of the count; can be "up" or "down". When this is set to "down", "from" and "to" become reversed, in order to count down.'},{name:"delay",type:"number",default:"0",description:"Delay in seconds before the counting starts."},{name:"duration",type:"number",default:"2",description:"Duration of the count animation - based on the damping and stiffness configured inside the component."},{name:"className",type:"string",default:'""',description:"CSS class to apply to the component for additional styling."},{name:"startWhen",type:"boolean",default:"true",description:"A boolean to control whether the animation should start when the component is in view. It basically works like an if statement, if this is true, the count will start."},{name:"separator",type:"string",default:'""',description:"Character to use as a thousands separator in the displayed number."},{name:"onStart",type:"function",default:"—",description:"Callback function that is called when the count animation starts."},{name:"onEnd",type:"function",default:"—",description:"Callback function that is called when the count animation ends."}],[]);return n.jsx(v,{props:t,defaultProps:S,resetProps:a,hasChanges:m,children:n.jsxs(G,{children:[n.jsxs(L,{children:[n.jsx("h2",{className:"demo-title-extra",children:"Default"}),n.jsxs(U,{position:"relative",className:"demo-container",minH:200,children:[n.jsx(I,{from:0,to:100,separator:",",direction:"up",duration:1,className:"count-up-text"},b),n.jsx(D,{onClick:p})]}),n.jsx("h2",{className:"demo-title-extra",children:"Start Programatically"}),n.jsxs(V,{direction:"column",justifyContent:"center",alignItems:"center",position:"relative",className:"demo-container",minH:200,children:[n.jsx(R,{bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",color:"#fff",onClick:()=>o("startCounting",!0),children:"Count to 500!"}),n.jsx(I,{from:100,to:500,startWhen:s,duration:5,className:"count-up-text"},u),s&&n.jsx(D,{onClick:l})]}),n.jsx("h2",{className:"demo-title-extra",children:"With Gradient"}),n.jsx("p",{className:"demo-extra-info",children:n.jsx(V,{children:n.jsxs("span",{children:["You can wrap the counter with other components such as ",n.jsx(M,{style:{display:"inline",whiteSpace:"nowrap"},to:"/text-animations/gradient-text/",children:"<GradientText />"})]})})}),n.jsxs(V,{direction:"column",justifyContent:"center",alignItems:"center",position:"relative",className:"demo-container",minH:200,children:[n.jsx(A,{children:n.jsx(I,{from:0,to:100,separator:",",duration:1,className:"count-up-text"},f)}),n.jsx(D,{onClick:r})]}),n.jsx(H,{data:d}),n.jsx(J,{dependencyList:["motion"]})]}),n.jsx(B,{children:n.jsx(O,{codeObject:K,componentName:"CountUp"})})]})})};export{rn as default};
