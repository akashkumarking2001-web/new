import{j as n,r as p,B as u,a as b}from"./index-CKqfvLoB.js";import{u as h,C as x,T as g,P as y,a as v,b as f,c as N}from"./PropTable-BzD4cJVp.js";import{P as l}from"./PreviewSlider-25yjOF_X.js";import{P as k}from"./PreviewSelect-CM4Sns8B.js";import{C}from"./Customize-BaUKAf5J.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";import"./field-DGUMYGrq.js";const w=({as:o="button",className:e="",color:s="white",speed:i="6s",thickness:d=1,children:t,...a})=>n.jsxs(o,{className:`star-border-container ${e}`,style:{padding:`${d}px 0`,...a.style},...a,children:[n.jsx("div",{className:"border-gradient-bottom",style:{background:`radial-gradient(circle, ${s}, transparent 10%)`,animationDuration:i}}),n.jsx("div",{className:"border-gradient-top",style:{background:`radial-gradient(circle, ${s}, transparent 10%)`,animationDuration:i}}),n.jsx("div",{className:"inner-content",children:t})]}),S=`import './StarBorder.css';

const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}) => {
  return (
    <Component
      className={\`star-border-container \${className}\`}
      style={{
        padding: \`\${thickness}px 0\`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: \`radial-gradient(circle, \${color}, transparent 10%)\`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: \`radial-gradient(circle, \${color}, transparent 10%)\`,
          animationDuration: speed
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
`,B=`.star-border-container {
  display: inline-block;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}

.border-gradient-bottom {
  position: absolute;
  width: 300%;
  height: 50%;
  opacity: 0.7;
  bottom: -12px;
  right: -250%;
  border-radius: 50%;
  animation: star-movement-bottom linear infinite alternate;
  z-index: 0;
}

.border-gradient-top {
  position: absolute;
  opacity: 0.7;
  width: 300%;
  height: 50%;
  top: -12px;
  left: -250%;
  border-radius: 50%;
  animation: star-movement-top linear infinite alternate;
  z-index: 0;
}

.inner-content {
  position: relative;
  border: 1px solid #222;
  background: #000;
  color: white;
  font-size: 16px;
  text-align: center;
  padding: 16px 26px;
  border-radius: 20px;
  z-index: 1;
}

@keyframes star-movement-bottom {
  0% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
  100% {
    transform: translate(-100%, 0%);
    opacity: 0;
  }
}

@keyframes star-movement-top {
  0% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
  100% {
    transform: translate(100%, 0%);
    opacity: 0;
  }
}
`,P=`const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}) => {
  return (
    <Component
      className={\`relative inline-block overflow-hidden rounded-[20px] \${className}\`}
      style={{
        padding: \`\${thickness}px 0\`,
        ...rest.style
      }}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: \`radial-gradient(circle, \${color}, transparent 10%)\`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: \`radial-gradient(circle, \${color}, transparent 10%)\`,
          animationDuration: speed
        }}
      ></div>
      <div className="relative z-1 bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-center text-[16px] py-[16px] px-[26px] rounded-[20px]">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
//         'star-movement-top': 'star-movement-top linear infinite alternate',
//       },
//       keyframes: {
//         'star-movement-bottom': {
//           '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
//           '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
//         },
//         'star-movement-top': {
//           '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
//           '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
//         },
//       },
//     },
//   }
// }
`,T=`import React from 'react';
import './StarBorder.css';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
};

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';

  return (
    <Component
      className={\`star-border-container \${className}\`}
      {...(rest as any)}
      style={{
        padding: \`\${thickness}px 0\`,
        ...(rest as any).style
      }}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: \`radial-gradient(circle, \${color}, transparent 10%)\`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: \`radial-gradient(circle, \${color}, transparent 10%)\`,
          animationDuration: speed
        }}
      ></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
`,j=`import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
};

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';

  return (
    <Component
      className={\`relative inline-block overflow-hidden rounded-[20px] \${className}\`}
      {...(rest as any)}
      style={{
        padding: \`\${thickness}px 0\`,
        ...(rest as any).style
      }}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: \`radial-gradient(circle, \${color}, transparent 10%)\`,
          animationDuration: speed
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: \`radial-gradient(circle, \${color}, transparent 10%)\`,
          animationDuration: speed
        }}
      ></div>
      <div className="relative z-1 bg-gradient-to-b from-black to-gray-900 border border-gray-800 text-white text-center text-[16px] py-[16px] px-[26px] rounded-[20px]">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
//         'star-movement-top': 'star-movement-top linear infinite alternate',
//       },
//       keyframes: {
//         'star-movement-bottom': {
//           '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
//           '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
//         },
//         'star-movement-top': {
//           '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
//           '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
//         },
//       },
//     },
//   }
// }
`,$={usage:`import StarBorder from './StarBorder'
  
<StarBorder
  as="button"
  className="custom-class"
  color="cyan"
  speed="5s"
>
  // content
</StarBorder>`,code:S,css:B,tailwind:P,tsCode:T,tsTailwind:j},c={thickness:1,speed:5,color:"magenta"},R=[{value:"magenta",label:"Magenta"},{value:"cyan",label:"Cyan"},{value:"white",label:"White"}],F=()=>{const{props:o,updateProp:e,resetProps:s,hasChanges:i}=h(c),{thickness:d,speed:t,color:a}=o,m=p.useMemo(()=>[{name:"as",type:"string",default:"button",description:"Allows specifying the type of the parent component to be rendered."},{name:"className",type:"string",default:"-",description:"Allows adding custom classes to the component."},{name:"color",type:"string",default:"white",description:"Changes the main color of the border (fades to transparent)"},{name:"speed",type:"string",default:"6s",description:"Changes the speed of the animation."},{name:"thickness",type:"number",default:"3",description:"Controls the thickness of the star border effect."}],[]);return n.jsx(x,{props:o,defaultProps:c,resetProps:s,hasChanges:i,demoOnlyProps:["speed"],computedProps:{speed:`${t}s`},children:n.jsxs(g,{children:[n.jsxs(y,{children:[n.jsx(u,{position:"relative",className:"demo-container",h:400,children:n.jsx(w,{className:"star-border-demo",color:a,thickness:d,speed:`${t}s`,children:n.jsx(b,{mx:0,fontSize:"1em",children:"Star Border"})})}),n.jsxs(C,{children:[n.jsx(k,{title:"Color",options:R,value:a,width:120,onChange:r=>e("color",r)}),n.jsx(l,{title:"Thickness",min:.5,max:8,step:.5,value:d,valueUnit:"px",width:200,onChange:r=>e("thickness",r)}),n.jsx(l,{title:"Speed",min:1,max:10,step:.5,value:t,valueUnit:"s",width:200,onChange:r=>e("speed",r)})]}),n.jsx(v,{data:m})]}),n.jsx(f,{children:n.jsx(N,{codeObject:$,componentName:"StarBorder"})})]})})};export{F as default};
