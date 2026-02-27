import{r as a,j as e,bL as F,B as T,F as N,a as S}from"./index-CKqfvLoB.js";import{u as E,C as D,T as B,P as j,a as L,b as P,c as $}from"./PropTable-BzD4cJVp.js";import{D as k}from"./Dependencies-DmSBXzNX.js";import{P as g}from"./PreviewSlider-25yjOF_X.js";import{P as H}from"./PreviewSwitch-B0BSuWrO.js";import{C as O}from"./Customize-BaUKAf5J.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";import"./switch-CqqRi5Az.js";const z=({sentence:f="True Focus",separator:i=" ",manualMode:r=!1,blurAmount:x=5,borderColor:c="green",glowColor:d="rgba(0, 255, 0, 0.6)",animationDuration:u=.5,pauseBetweenAnimations:p=1})=>{const l=f.split(i),[o,m]=a.useState(0),[n,C]=a.useState(null),h=a.useRef(null),v=a.useRef([]),[b,I]=a.useState({x:0,y:0,width:0,height:0});a.useEffect(()=>{if(!r){const s=setInterval(()=>{m(t=>(t+1)%l.length)},(u+p)*1e3);return()=>clearInterval(s)}},[r,u,p,l.length]),a.useEffect(()=>{if(o===null||o===-1||!v.current[o]||!h.current)return;const s=h.current.getBoundingClientRect(),t=v.current[o].getBoundingClientRect();I({x:t.left-s.left,y:t.top-s.top,width:t.width,height:t.height})},[o,l.length]);const A=s=>{r&&(C(s),m(s))},y=()=>{r&&m(n)};return e.jsxs("div",{className:"focus-container",ref:h,children:[l.map((s,t)=>{const w=t===o;return e.jsx("span",{ref:M=>v.current[t]=M,className:`focus-word ${r?"manual":""} ${w&&!r?"active":""}`,style:{filter:r?w?"blur(0px)":`blur(${x}px)`:w?"blur(0px)":`blur(${x}px)`,"--border-color":c,"--glow-color":d,transition:`filter ${u}s ease`},onMouseEnter:()=>A(t),onMouseLeave:y,children:s},t)}),e.jsxs(F.div,{className:"focus-frame",animate:{x:b.x,y:b.y,width:b.width,height:b.height,opacity:o>=0?1:0},transition:{duration:u},style:{"--border-color":c,"--glow-color":d},children:[e.jsx("span",{className:"corner top-left"}),e.jsx("span",{className:"corner top-right"}),e.jsx("span",{className:"corner bottom-left"}),e.jsx("span",{className:"corner bottom-right"})]})]})},U=`import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import './TrueFocus.css';

const TrueFocus = ({
  sentence = 'True Focus',
  separator = ' ',
  manualMode = false,
  blurAmount = 5,
  borderColor = 'green',
  glowColor = 'rgba(0, 255, 0, 0.6)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1
}) => {
  const words = sentence.split(separator);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(
        () => {
          setCurrentIndex(prev => (prev + 1) % words.length);
        },
        (animationDuration + pauseBetweenAnimations) * 1000
      );

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;

    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = index => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex);
    }
  };

  return (
    <div className="focus-container" ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={el => (wordRefs.current[index] = el)}
            className={\`focus-word \${manualMode ? 'manual' : ''} \${isActive && !manualMode ? 'active' : ''}\`}
            style={{
              filter: manualMode
                ? isActive
                  ? \`blur(0px)\`
                  : \`blur(\${blurAmount}px)\`
                : isActive
                  ? \`blur(0px)\`
                  : \`blur(\${blurAmount}px)\`,
              '--border-color': borderColor,
              '--glow-color': glowColor,
              transition: \`filter \${animationDuration}s ease\`
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="focus-frame"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0
        }}
        transition={{
          duration: animationDuration
        }}
        style={{
          '--border-color': borderColor,
          '--glow-color': glowColor
        }}
      >
        <span className="corner top-left"></span>
        <span className="corner top-right"></span>
        <span className="corner bottom-left"></span>
        <span className="corner bottom-right"></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;
`,_=`.focus-container {
  position: relative;
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  outline: none;
  user-select: none;
}

.focus-word {
  position: relative;
  font-size: 3rem;
  font-weight: 900;
  cursor: pointer;
  transition:
    filter 0.3s ease,
    color 0.3s ease;
  outline: none;
  user-select: none;
}

.focus-word.active {
  filter: blur(0);
}

.focus-frame {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  box-sizing: content-box;
  border: none;
}

.corner {
  position: absolute;
  width: 1rem;
  height: 1rem;
  border: 3px solid var(--border-color, #fff);
  filter: drop-shadow(0px 0px 4px var(--border-color, #fff));
  border-radius: 3px;
  transition: none;
}

.top-left {
  top: -10px;
  left: -10px;
  border-right: none;
  border-bottom: none;
}

.top-right {
  top: -10px;
  right: -10px;
  border-left: none;
  border-bottom: none;
}

.bottom-left {
  bottom: -10px;
  left: -10px;
  border-right: none;
  border-top: none;
}

.bottom-right {
  bottom: -10px;
  right: -10px;
  border-left: none;
  border-top: none;
}
`,q=`import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const TrueFocus = ({
  sentence = 'True Focus',
  separator = ' ',
  manualMode = false,
  blurAmount = 5,
  borderColor = 'green',
  glowColor = 'rgba(0, 255, 0, 0.6)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1
}) => {
  const words = sentence.split(separator);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(
        () => {
          setCurrentIndex(prev => (prev + 1) % words.length);
        },
        (animationDuration + pauseBetweenAnimations) * 1000
      );

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = index => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex);
    }
  };

  return (
    <div
      className="relative flex gap-4 justify-center items-center flex-wrap"
      ref={containerRef}
      style={{ outline: 'none', userSelect: 'none' }}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={el => (wordRefs.current[index] = el)}
            className="relative text-[3rem] font-black cursor-pointer"
            style={{
              filter: manualMode
                ? isActive
                  ? \`blur(0px)\`
                  : \`blur(\${blurAmount}px)\`
                : isActive
                  ? \`blur(0px)\`
                  : \`blur(\${blurAmount}px)\`,
              '--border-color': borderColor,
              '--glow-color': glowColor,
              transition: \`filter \${animationDuration}s ease\`,
              outline: 'none',
              userSelect: 'none'
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border border-0"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0
        }}
        transition={{
          duration: animationDuration
        }}
        style={{
          '--border-color': borderColor,
          '--glow-color': glowColor
        }}
      >
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        ></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;
`,G=`import { useEffect, useRef, useState, RefObject } from 'react';
import { motion } from 'motion/react';
import './TrueFocus.css';

interface TrueFocusProps {
  sentence?: string;
  separator?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = 'True Focus',
  separator = ' ',
  manualMode = false,
  blurAmount = 5,
  borderColor = 'green',
  glowColor = 'rgba(0, 255, 0, 0.6)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1
}) => {
  const words = sentence.split(separator);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs: React.MutableRefObject<(HTMLSpanElement | null)[]> = useRef([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(
        () => {
          setCurrentIndex(prev => (prev + 1) % words.length);
        },
        (animationDuration + pauseBetweenAnimations) * 1000
      );

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;

    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex ?? 0);
    }
  };

  return (
    <div className="focus-container" ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={el => {
              if (el) {
                wordRefs.current[index] = el;
              }
            }}
            className={\`focus-word \${manualMode ? 'manual' : ''} \${isActive && !manualMode ? 'active' : ''}\`}
            style={
              {
                filter: manualMode
                  ? isActive
                    ? \`blur(0px)\`
                    : \`blur(\${blurAmount}px)\`
                  : isActive
                    ? \`blur(0px)\`
                    : \`blur(\${blurAmount}px)\`,
                transition: \`filter \${animationDuration}s ease\`,
                '--border-color': borderColor,
                '--glow-color': glowColor
              } as React.CSSProperties
            }
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="focus-frame"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0
        }}
        transition={{
          duration: animationDuration
        }}
        style={
          {
            '--border-color': borderColor,
            '--glow-color': glowColor
          } as React.CSSProperties
        }
      >
        <span className="corner top-left"></span>
        <span className="corner top-right"></span>
        <span className="corner bottom-left"></span>
        <span className="corner bottom-right"></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;
`,J=`import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface TrueFocusProps {
  sentence?: string;
  separator?: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

interface FocusRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence = 'True Focus',
  separator = ' ',
  manualMode = false,
  blurAmount = 5,
  borderColor = 'green',
  glowColor = 'rgba(0, 255, 0, 0.6)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1
}) => {
  const words = sentence.split(separator);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(
        () => {
          setCurrentIndex(prev => (prev + 1) % words.length);
        },
        (animationDuration + pauseBetweenAnimations) * 1000
      );

      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(index);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex!);
    }
  };

  return (
    <div
      className="relative flex gap-4 justify-center items-center flex-wrap"
      ref={containerRef}
      style={{ outline: 'none', userSelect: 'none' }}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={el => {
              wordRefs.current[index] = el;
            }}
            className="relative text-[3rem] font-black cursor-pointer"
            style={
              {
                filter: manualMode
                  ? isActive
                    ? \`blur(0px)\`
                    : \`blur(\${blurAmount}px)\`
                  : isActive
                    ? \`blur(0px)\`
                    : \`blur(\${blurAmount}px)\`,
                transition: \`filter \${animationDuration}s ease\`,
                outline: 'none',
                userSelect: 'none'
              } as React.CSSProperties
            }
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border border-0"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0
        }}
        transition={{
          duration: animationDuration
        }}
        style={
          {
            '--border-color': borderColor,
            '--glow-color': glowColor
          } as React.CSSProperties
        }
      >
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
          style={{
            borderColor: 'var(--border-color)',
            filter: 'drop-shadow(0 0 4px var(--border-color))'
          }}
        ></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;
`,K={dependencies:"motion",usage:`import TrueFocus from './TrueFocus';

<TrueFocus 
sentence="True Focus"
manualMode={false}
blurAmount={5}
borderColor="red"
animationDuration={2}
pauseBetweenAnimations={1}
/>`,code:U,css:_,tailwind:q,tsCode:G,tsTailwind:J},R={manualMode:!1,blurAmount:5,animationDuration:.5,pauseBetweenAnimations:1,borderColor:"#5227FF"},oe=()=>{const{props:f,updateProp:i,resetProps:r,hasChanges:x}=E(R),{manualMode:c,blurAmount:d,animationDuration:u,pauseBetweenAnimations:p,borderColor:l}=f,o={sentence:"True Focus",manualMode:c,blurAmount:d,borderColor:l,animationDuration:u,pauseBetweenAnimations:p},m=a.useMemo(()=>[{name:"sentence",type:"string",default:"'True Focus'",description:"The text to display with the focus animation."},{name:"separator",type:"string",default:"' '",description:"Optional string used to separate words in the sentence."},{name:"manualMode",type:"boolean",default:"false",description:"Disables automatic animation when set to true."},{name:"blurAmount",type:"number",default:"5",description:"The amount of blur applied to non-active words."},{name:"borderColor",type:"string",default:"'green'",description:"The color of the focus borders."},{name:"glowColor",type:"string",default:"'rgba(0, 255, 0, 0.6)'",description:"The color of the glowing effect on the borders."},{name:"animationDuration",type:"number",default:"0.5",description:"The duration of the animation for each word."},{name:"pauseBetweenAnimations",type:"number",default:"1",description:"Time to pause between focusing on each word (in auto mode)."}],[]);return e.jsx(D,{props:f,defaultProps:R,resetProps:r,hasChanges:x,children:e.jsxs(B,{children:[e.jsxs(j,{children:[e.jsx(T,{position:"relative",className:"demo-container",minH:400,children:e.jsx(z,{...o})}),e.jsxs(O,{children:[e.jsxs(N,{align:"center",gap:2,mt:4,children:[e.jsx(S,{fontSize:"sm",children:"Border Color"}),e.jsx("input",{type:"color",value:l,onChange:n=>i("borderColor",n.target.value),style:{width:"40px",border:"none",padding:"0",background:"none",cursor:"pointer"}})]}),e.jsx(H,{title:"Hover Mode",isChecked:c,onChange:n=>i("manualMode",n)}),e.jsx(g,{title:"Blur Amount",min:0,max:15,step:.5,value:d,valueUnit:"px",onChange:n=>i("blurAmount",n)}),e.jsx(g,{title:"Animation Duration",min:.1,max:3,step:.1,value:u,valueUnit:"s",isDisabled:!c,onChange:n=>i("animationDuration",n)}),e.jsx(g,{title:"Pause Between Animations",min:0,max:5,step:.5,value:p,valueUnit:"s",isDisabled:c,onChange:n=>i("pauseBetweenAnimations",n)})]}),e.jsx(L,{data:m}),e.jsx(k,{dependencyList:["motion"]})]}),e.jsx(P,{children:e.jsx($,{codeObject:K,componentName:"TrueFocus"})})]})})};export{oe as default};
