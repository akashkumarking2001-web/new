import{r as i,j as n,B as E,F as A}from"./index-CKqfvLoB.js";import{u as L,C as j,T as I,P as H,a as D,b as $,c as B}from"./PropTable-BzD4cJVp.js";import{P as y}from"./PreviewSlider-25yjOF_X.js";import{P as k}from"./PreviewSwitch-B0BSuWrO.js";import{C as F}from"./Customize-BaUKAf5J.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";import"./switch-CqqRi5Az.js";const O=({children:a,padding:e=100,disabled:o=!1,magnetStrength:s=2,activeTransition:r="transform 0.3s ease-out",inactiveTransition:c="transform 0.5s ease-in-out",wrapperClassName:l="",innerClassName:m="",...t})=>{const[S,u]=i.useState(!1),[g,f]=i.useState({x:0,y:0}),p=i.useRef(null);i.useEffect(()=>{if(o){f({x:0,y:0});return}const h=d=>{if(!p.current)return;const{left:R,top:X,width:v,height:x}=p.current.getBoundingClientRect(),b=R+v/2,M=X+x/2,Y=Math.abs(b-d.clientX),N=Math.abs(M-d.clientY);if(Y<v/2+e&&N<x/2+e){u(!0);const T=(d.clientX-b)/s,P=(d.clientY-M)/s;f({x:T,y:P})}else u(!1),f({x:0,y:0})};return window.addEventListener("mousemove",h),()=>{window.removeEventListener("mousemove",h)}},[e,o,s]);const C=S?r:c;return n.jsx("div",{ref:p,className:l,style:{position:"relative",display:"inline-block"},...t,children:n.jsx("div",{className:m,style:{transform:`translate3d(${g.x}px, ${g.y}px, 0)`,transition:C,willChange:"transform"},children:a})})},z=`import { useState, useEffect, useRef } from 'react';

const Magnet = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.5s ease-in-out',
  wrapperClassName = '',
  innerClassName = '',
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef(null);

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = e => {
      if (!magnetRef.current) return;

      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);

        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, disabled, magnetStrength]);

  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: 'relative', display: 'inline-block' }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: \`translate3d(\${position.x}px, \${position.y}px, 0)\`,
          transition: transitionStyle,
          willChange: 'transform'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
`,U=`import { useState, useEffect, useRef } from 'react';

const Magnet = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.5s ease-in-out',
  wrapperClassName = '',
  innerClassName = '',
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef(null);

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = e => {
      if (!magnetRef.current) return;

      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);

        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, disabled, magnetStrength]);

  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: 'relative', display: 'inline-block' }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: \`translate3d(\${position.x}px, \${position.y}px, 0)\`,
          transition: transitionStyle,
          willChange: 'transform'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
`,_=`import React, { useState, useEffect, useRef, ReactNode, HTMLAttributes } from 'react';

interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.5s ease-in-out',
  wrapperClassName = '',
  innerClassName = '',
  ...props
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);
        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, disabled, magnetStrength]);

  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: 'relative', display: 'inline-block' }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: \`translate3d(\${position.x}px, \${position.y}px, 0)\`,
          transition: transitionStyle,
          willChange: 'transform'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
`,G=`import React, { useState, useEffect, useRef, ReactNode, HTMLAttributes } from 'react';

interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.5s ease-in-out',
  wrapperClassName = '',
  innerClassName = '',
  ...props
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);
        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, disabled, magnetStrength]);

  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: 'relative', display: 'inline-block' }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: \`translate3d(\${position.x}px, \${position.y}px, 0)\`,
          transition: transitionStyle,
          willChange: 'transform'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
`,J={usage:`import Magnet from './Magnet'

<Magnet padding={50} disabled={false} magnetStrength={50}>
  <p>Star React Bits on GitHub!</p>
</Magnet>`,code:z,tailwind:U,tsCode:_,tsTailwind:G},w={disabled:!1,padding:100,magnetStrength:2},sn=()=>{const{props:a,updateProp:e,resetProps:o,hasChanges:s}=L(w),{disabled:r,padding:c,magnetStrength:l}=a,m=i.useMemo(()=>[{name:"padding",type:"number",default:100,description:"Specifies the distance (in pixels) around the element that activates the magnet pull."},{name:"disabled",type:"boolean",default:!1,description:"Disables the magnet effect when set to true."},{name:"magnetStrength",type:"number",default:2,description:"Controls the strength of the pull; higher values reduce movement, lower values increase it."},{name:"activeTransition",type:"string",default:'"transform 0.3s ease-out"',description:"CSS transition applied to the element when the magnet is active."},{name:"inactiveTransition",type:"string",default:'"transform 0.5s ease-in-out"',description:"CSS transition applied when the magnet is inactive (mouse out of range)."},{name:"wrapperClassName",type:"string",default:'""',description:"Optional CSS class name for the outermost wrapper element."},{name:"innerClassName",type:"string",default:'""',description:"Optional CSS class name for the moving (inner) element."},{name:"children",type:"ReactNode",default:"",description:"The content (JSX) to be displayed inside the magnetized element."}],[]);return n.jsx(j,{props:a,defaultProps:w,resetProps:o,hasChanges:s,children:n.jsxs(I,{children:[n.jsxs(H,{children:[n.jsx(E,{position:"relative",className:"demo-container",minH:400,children:n.jsx(O,{padding:Math.floor(c/2),disabled:r,magnetStrength:l,children:n.jsx("a",{href:"https://github.com/DavidHDev/react-bits",target:"_blank",rel:"noreferrer",children:n.jsx(A,{fontSize:"lg",color:"#fff",border:"1px solid #5227FF",borderRadius:"15px",p:4,align:"center",gap:2,children:"Hover This"})})})}),n.jsxs(F,{children:[n.jsx(k,{title:"Disabled",isChecked:r,onChange:t=>e("disabled",t)}),n.jsx(y,{title:"Padding",min:0,max:300,step:10,value:c,valueUnit:"px",onChange:t=>e("padding",t)}),n.jsx(y,{title:"Strength",min:1,max:10,step:1,value:l,onChange:t=>e("magnetStrength",t)})]}),n.jsx(D,{data:m})]}),n.jsx($,{children:n.jsx(B,{codeObject:J,componentName:"Magnet"})})]})})};export{sn as default};
