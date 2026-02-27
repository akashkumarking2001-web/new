import{r as t,Z as P,j as e,B as G}from"./index-CKqfvLoB.js";import{u as Z,C as q,T as J,P as K,a as Q,b as X,c as Y}from"./PropTable-BzD4cJVp.js";import{C as ee}from"./Customize-BaUKAf5J.js";import{P as H}from"./PreviewSwitch-B0BSuWrO.js";import{P as ne}from"./PreviewSelect-CM4Sns8B.js";import{P as h}from"./PreviewSlider-25yjOF_X.js";import{D as te}from"./Dependencies-DmSBXzNX.js";import{u as re}from"./useForceRerender-0lK0qxlp.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./switch-CqqRi5Az.js";import"./field-DGUMYGrq.js";import"./slider-P7kYMDWb.js";const se=({text:d,as:i="div",typingSpeed:l=50,initialDelay:r=0,pauseDuration:T=2e3,deletingSpeed:v=30,loop:g=!0,className:S="",showCursor:x=!0,hideCursorWhileTyping:I=!1,cursorCharacter:D="|",cursorClassName:R="",cursorBlinkDuration:c=.5,textColors:m=[],variableSpeed:o,onSentenceComplete:f,startOnVisible:C=!1,reverseMode:A=!1,...n})=>{const[w,V]=t.useState(""),[b,O]=t.useState(0),[E,j]=t.useState(!1),[a,$]=t.useState(0),[_,L]=t.useState(!C),k=t.useRef(null),N=t.useRef(null),u=t.useMemo(()=>Array.isArray(d)?d:[d],[d]),U=t.useCallback(()=>{if(!o)return l;const{min:s,max:y}=o;return Math.random()*(y-s)+s},[o,l]),F=()=>m.length===0?"inherit":m[a%m.length];t.useEffect(()=>{if(!C||!N.current)return;const s=new IntersectionObserver(y=>{y.forEach(M=>{M.isIntersecting&&L(!0)})},{threshold:.1});return s.observe(N.current),()=>s.disconnect()},[C]),t.useEffect(()=>{x&&k.current&&(P.set(k.current,{opacity:1}),P.to(k.current,{opacity:0,duration:c,repeat:-1,yoyo:!0,ease:"power2.inOut"}))},[x,c]),t.useEffect(()=>{if(!_)return;let s;const y=u[a],M=A?y.split("").reverse().join(""):y,B=()=>{if(E)if(w===""){if(j(!1),a===u.length-1&&!g)return;f&&f(u[a],a),$(p=>(p+1)%u.length),O(0),s=setTimeout(()=>{},T)}else s=setTimeout(()=>{V(p=>p.slice(0,-1))},v);else if(b<M.length)s=setTimeout(()=>{V(p=>p+M[b]),O(p=>p+1)},o?U():l);else if(u.length>=1){if(!g&&a===u.length-1)return;s=setTimeout(()=>{j(!0)},T)}};return b===0&&!E&&w===""?s=setTimeout(B,r):B(),()=>clearTimeout(s)},[b,w,E,l,v,T,u,a,g,r,_,A,o,f]);const z=I&&(b<u[a].length||E);return t.createElement(i,{ref:N,className:`text-type ${S}`,...n},e.jsx("span",{className:"text-type__content",style:{color:F()||"inherit"},children:w}),x&&e.jsx("span",{ref:k,className:`text-type__cursor ${R} ${z?"text-type__cursor--hidden":""}`,children:D}))},ie=`'use client';

import { useEffect, useRef, useState, createElement, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import './TextType.css';

const TextType = ({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return 'inherit';
    return textColors[currentTextIndex % textColors.length];
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout;
    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === '') {
          setIsDeleting(false);
          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }

          setCurrentTextIndex(prev => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText(prev => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText(prev => prev + processedText[currentCharIndex]);
              setCurrentCharIndex(prev => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else if (textArray.length >= 1) {
          if (!loop && currentTextIndex === textArray.length - 1) return;
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping && (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: \`text-type \${className}\`,
      ...props
    },
    <span className="text-type__content" style={{ color: getCurrentTextColor() || 'inherit' }}>
      {displayedText}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={\`text-type__cursor \${cursorClassName} \${shouldHideCursor ? 'text-type__cursor--hidden' : ''}\`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;
`,oe=`.text-type {
  display: inline-block;
  white-space: pre-wrap;
}

.text-type__cursor {
  margin-left: 0.25rem;
  display: inline-block;
  opacity: 1;
}

.text-type__cursor--hidden {
  display: none;
}
`,ae=`'use client';

import { useEffect, useRef, useState, createElement, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';

const TextType = ({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return 'inherit';
    return textColors[currentTextIndex % textColors.length];
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout;

    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === '') {
          setIsDeleting(false);
          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }

          setCurrentTextIndex(prev => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText(prev => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText(prev => prev + processedText[currentCharIndex]);
              setCurrentCharIndex(prev => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else if (textArray.length >= 1) {
          if (!loop && currentTextIndex === textArray.length - 1) return;
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping && (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: \`inline-block whitespace-pre-wrap tracking-tight \${className}\`,
      ...props
    },
    <span className="inline" style={{ color: getCurrentTextColor() || 'inherit' }}>
      {displayedText}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={\`ml-1 inline-block opacity-100 \${shouldHideCursor ? 'hidden' : ''} \${cursorClassName}\`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;
`,ue=`'use client';

import { ElementType, useEffect, useRef, useState, createElement, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import './TextType.css';

interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
}

const TextType = ({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return 'inherit';
    return textColors[currentTextIndex % textColors.length];
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout: ReturnType<typeof setTimeout>;

    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === '') {
          setIsDeleting(false);
          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }

          setCurrentTextIndex(prev => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText(prev => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText(prev => prev + processedText[currentCharIndex]);
              setCurrentCharIndex(prev => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else if (textArray.length >= 1) {
          if (!loop && currentTextIndex === textArray.length - 1) return;
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping && (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: \`text-type \${className}\`,
      ...props
    },
    <span className="text-type__content" style={{ color: getCurrentTextColor() || 'inherit' }}>
      {displayedText}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={\`text-type__cursor \${cursorClassName} \${shouldHideCursor ? 'text-type__cursor--hidden' : ''}\`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;
`,le=`'use client';

import { ElementType, useEffect, useRef, useState, createElement, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';

interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
}

const TextType = ({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return 'inherit';
    return textColors[currentTextIndex % textColors.length];
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout: ReturnType<typeof setTimeout>;

    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === '') {
          setIsDeleting(false);
          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }

          setCurrentTextIndex(prev => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText(prev => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText(prev => prev + processedText[currentCharIndex]);
              setCurrentCharIndex(prev => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else if (textArray.length >= 1) {
          if (!loop && currentTextIndex === textArray.length - 1) return;
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping && (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: \`inline-block whitespace-pre-wrap tracking-tight \${className}\`,
      ...props
    },
    <span className="inline" style={{ color: getCurrentTextColor() || 'inherit' }}>
      {displayedText}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={\`ml-1 inline-block opacity-100 \${shouldHideCursor ? 'hidden' : ''} \${cursorClassName}\`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;
`,ce={dependencies:"gsap",usage:`import TextType from './TextType';

<TextType 
  text={["Text typing effect", "for your websites", "Happy coding!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>`,code:ie,css:oe,tailwind:ae,tsCode:ue,tsTailwind:le},W={texts:["Welcome to React Bits! Good to see you!","Build some amazing experiences!"],typingSpeed:75,pauseDuration:1500,deletingSpeed:50,showCursor:!0,cursorCharacter:"_",variableSpeedEnabled:!1,variableSpeedMin:60,variableSpeedMax:120,cursorBlinkDuration:.5},Ie=()=>{const[d,i]=re(),{props:l,updateProp:r,resetProps:T,hasChanges:v}=Z(W),{texts:g,typingSpeed:S,pauseDuration:x,deletingSpeed:I,showCursor:D,cursorCharacter:R,variableSpeedEnabled:c,variableSpeedMin:m,variableSpeedMax:o,cursorBlinkDuration:f}=l,C=[{value:"_",label:"Underscore (_)"},{value:"|",label:"Pipe (|)"},{value:"▎",label:"Block (▎)"},{value:"●",label:"Dot (●)"},{value:"█",label:"Full Block (█)"}],A=t.useMemo(()=>[{name:"text",type:"string | string[]",default:"-",description:"Text or array of texts to type out"},{name:"as",type:"ElementType",default:"div",description:"HTML tag to render the component as"},{name:"typingSpeed",type:"number",default:"50",description:"Speed of typing in milliseconds"},{name:"initialDelay",type:"number",default:"0",description:"Initial delay before typing starts"},{name:"pauseDuration",type:"number",default:"2000",description:"Time to wait between typing and deleting"},{name:"deletingSpeed",type:"number",default:"30",description:"Speed of deleting characters"},{name:"loop",type:"boolean",default:"true",description:"Whether to loop through texts array"},{name:"className",type:"string",default:"''",description:"Optional class name for styling"},{name:"showCursor",type:"boolean",default:"true",description:"Whether to show the cursor"},{name:"hideCursorWhileTyping",type:"boolean",default:"false",description:"Hide cursor while typing"},{name:"cursorCharacter",type:"string | React.ReactNode",default:"|",description:"Character or React node to use as cursor"},{name:"cursorBlinkDuration",type:"number",default:"0.5",description:"Animation duration for cursor blinking"},{name:"cursorClassName",type:"string",default:"''",description:"Optional class name for cursor styling"},{name:"textColors",type:"string[]",default:"[]",description:"Array of colors for each sentence"},{name:"variableSpeed",type:"{min: number, max: number}",default:"undefined",description:"Random typing speed within range for human-like feel"},{name:"onSentenceComplete",type:"(sentence: string, index: number) => void",default:"undefined",description:"Callback fired after each sentence is finished"},{name:"startOnVisible",type:"boolean",default:"false",description:"Start typing when component is visible in viewport"},{name:"reverseMode",type:"boolean",default:"false",description:"Type backwards (right to left)"}],[]);return e.jsx(q,{props:l,defaultProps:W,resetProps:T,hasChanges:v,children:e.jsxs(J,{children:[e.jsxs(K,{children:[e.jsx(G,{position:"relative",className:"demo-container",h:350,p:16,overflow:"hidden",alignItems:"flex-start",justifyContent:"flex-start",children:e.jsx(se,{text:g,typingSpeed:S,pauseDuration:x,deletingSpeed:I,showCursor:D,cursorCharacter:R,cursorBlinkDuration:f,variableSpeed:c?{min:m,max:o}:void 0,className:"custom-text-type"},d)}),e.jsxs(ee,{children:[e.jsx(ne,{title:"Cursor Character",options:C,value:R,width:150,onChange:n=>{r("cursorCharacter",n),i()}}),e.jsx(h,{title:"Typing Speed",min:10,max:200,step:5,value:S,valueUnit:"ms",width:200,onChange:n=>{r("typingSpeed",n),i()}}),e.jsx(h,{title:"Pause Duration",min:500,max:5e3,step:100,value:x,valueUnit:"ms",width:200,onChange:n=>{r("pauseDuration",n),i()}}),e.jsx(h,{title:"Deleting Speed",min:10,max:100,step:5,value:I,valueUnit:"ms",width:200,onChange:n=>{r("deletingSpeed",n),i()}}),e.jsx(h,{title:"Cursor Blink Duration",min:.1,max:2,step:.1,value:f,valueUnit:"s",width:200,onChange:n=>{r("cursorBlinkDuration",n),i()}}),e.jsx(H,{title:"Show Cursor",isChecked:D,onChange:n=>{r("showCursor",n),i()}}),e.jsx(H,{title:"Variable Speed",isChecked:c,onChange:n=>{r("variableSpeedEnabled",n),i()}}),e.jsx(h,{title:"Variable Speed Min",isDisabled:!c,min:10,max:150,step:5,value:m,valueUnit:"ms",width:200,onChange:n=>{r("variableSpeedMin",n),i()}}),e.jsx(h,{title:"Variable Speed Max",isDisabled:!c,min:50,max:300,step:5,value:o,valueUnit:"ms",width:200,onChange:n=>{r("variableSpeedMax",n),i()}})]}),e.jsx(Q,{data:A}),e.jsx(te,{dependencyList:["gsap"]})]}),e.jsx(X,{children:e.jsx(Y,{codeObject:ce,componentName:"TextType"})})]})})};export{Ie as default};
