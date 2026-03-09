import{j as e,c7 as j,r as T,bK as G,bL as w,B as D,F as k,e as m}from"./index-CKqfvLoB.js";import{u as M,C as I,T as F,P as E,a as H,b as $,c as W}from"./PropTable-BzD4cJVp.js";import{C as O}from"./Customize-BaUKAf5J.js";import{P as h}from"./PreviewSlider-25yjOF_X.js";import{D as B}from"./Dependencies-DmSBXzNX.js";import{P as L}from"./PreviewSwitch-B0BSuWrO.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";import"./switch-CqqRi5Az.js";function A({mv:t,number:n,height:i}){let d=G(t,r=>{let a=r%10,o=(10+n-a)%10,l=o*i;return o>5&&(l-=10*i),l});return e.jsx(w.span,{className:"counter-number",style:{y:d},children:n})}function _(t){const n=Math.round(t),i=1e-9*Math.max(1,Math.abs(t));return Math.abs(t-n)<i?n:t}function q(t,n){const i=t/n;return Math.floor(_(i))}function K({place:t,value:n,height:i,digitStyle:d}){const r=t===".",a=r?0:q(n,t),o=j(a);return T.useEffect(()=>{r||o.set(a)},[o,a,r]),r?e.jsx("span",{className:"counter-digit",style:{height:i,...d,width:"fit-content"},children:"."}):e.jsx("span",{className:"counter-digit",style:{height:i,...d},children:Array.from({length:10},(l,c)=>e.jsx(A,{mv:o,number:c,height:i},c))})}function P({value:t,fontSize:n=100,padding:i=0,places:d=[...t.toString()].map((g,p,u)=>g==="."?".":10**(u.indexOf(".")===-1?u.length-p-1:p<u.indexOf(".")?u.indexOf(".")-p-1:-(p-u.indexOf(".")))),gap:r=8,borderRadius:a=4,horizontalPadding:o=8,textColor:l="inherit",fontWeight:c="inherit",containerStyle:s,counterStyle:N,digitStyle:V,gradientHeight:f=16,gradientFrom:y="black",gradientTo:S="transparent",topGradientStyle:b,bottomGradientStyle:v}){const g=n+i,p={fontSize:n,gap:r,borderRadius:a,paddingLeft:o,paddingRight:o,color:l,fontWeight:c},u={height:f,background:`linear-gradient(to bottom, ${y}, ${S})`},z={height:f,background:`linear-gradient(to top, ${y}, ${S})`};return e.jsxs("span",{className:"counter-container",style:s,children:[e.jsx("span",{className:"counter-counter",style:{...p,...N},children:d.map(x=>e.jsx(K,{place:x,value:t,height:g,digitStyle:V},x))}),e.jsxs("span",{className:"gradient-container",children:[e.jsx("span",{className:"top-gradient",style:b||u}),e.jsx("span",{className:"bottom-gradient",style:v||z})]})]})}const U=`import { motion, useSpring, useTransform } from 'motion/react';
import { useEffect } from 'react';

import './Counter.css';

function Number({ mv, number, height }) {
  let y = useTransform(mv, latest => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });
  return (
    <motion.span className="counter-number" style={{ y }}>
      {number}
    </motion.span>
  );
}

function normalizeNearInteger(num) {
  const nearest = Math.round(num);
  const tolerance = 1e-9 * Math.max(1, Math.abs(num));
  return Math.abs(num - nearest) < tolerance ? nearest : num;
}

function getValueRoundedToPlace(value, place) {
  const scaled = value / place;
  return Math.floor(normalizeNearInteger(scaled));
}

function Digit({ place, value, height, digitStyle }) {
  const isDecimal = place === '.';
  const valueRoundedToPlace = isDecimal ? 0 : getValueRoundedToPlace(value, place);
  const animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    if (!isDecimal) {
      animatedValue.set(valueRoundedToPlace);
    }
  }, [animatedValue, valueRoundedToPlace, isDecimal]);

  if (isDecimal) {
    return (
      <span className="counter-digit" style={{ height, ...digitStyle, width: 'fit-content' }}>
        .
      </span>
    );
  }

  return (
    <span className="counter-digit" style={{ height, ...digitStyle }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </span>
  );
}

export default function Counter({
  value,
  fontSize = 100,
  padding = 0,
  places = [...value.toString()].map((ch, i, a) => {
    ch == '.';
    if (ch === '.') {
      return '.';
    } else {
      return (
        10 **
        (a.indexOf('.') === -1 ? a.length - i - 1 : i < a.indexOf('.') ? a.indexOf('.') - i - 1 : -(i - a.indexOf('.')))
      );
    }
  }),
  gap = 8,
  borderRadius = 4,
  horizontalPadding = 8,
  textColor = 'inherit',
  fontWeight = 'inherit',
  containerStyle,
  counterStyle,
  digitStyle,
  gradientHeight = 16,
  gradientFrom = 'black',
  gradientTo = 'transparent',
  topGradientStyle,
  bottomGradientStyle
}) {
  const height = fontSize + padding;
  const defaultCounterStyle = {
    fontSize,
    gap: gap,
    borderRadius: borderRadius,
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    color: textColor,
    fontWeight: fontWeight
  };
  const defaultTopGradientStyle = {
    height: gradientHeight,
    background: \`linear-gradient(to bottom, \${gradientFrom}, \${gradientTo})\`
  };
  const defaultBottomGradientStyle = {
    height: gradientHeight,
    background: \`linear-gradient(to top, \${gradientFrom}, \${gradientTo})\`
  };
  return (
    <span className="counter-container" style={containerStyle}>
      <span className="counter-counter" style={{ ...defaultCounterStyle, ...counterStyle }}>
        {places.map(place => (
          <Digit key={place} place={place} value={value} height={height} digitStyle={digitStyle} />
        ))}
      </span>
      <span className="gradient-container">
        <span className="top-gradient" style={topGradientStyle ? topGradientStyle : defaultTopGradientStyle}></span>
        <span
          className="bottom-gradient"
          style={bottomGradientStyle ? bottomGradientStyle : defaultBottomGradientStyle}
        ></span>
      </span>
    </span>
  );
}
`,J=`.counter-container {
  position: relative;
  display: inline-block;
}

.counter-counter {
  display: flex;
  overflow: hidden;
  line-height: 1;
}

.counter-digit {
  position: relative;
  width: 1ch;
  font-variant-numeric: tabular-nums;
}

.counter-number {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gradient-container {
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.bottom-gradient {
  position: absolute;
  bottom: 0;
  width: 100%;
}
`,Q=`import { motion, useSpring, useTransform } from 'motion/react';
import { useEffect } from 'react';

function Number({ mv, number, height }) {
  const y = useTransform(mv, latest => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });

  const baseStyle = {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return <motion.span style={{ ...baseStyle, y }}>{number}</motion.span>;
}

function normalizeNearInteger(num) {
  const nearest = Math.round(num);
  const tolerance = 1e-9 * Math.max(1, Math.abs(num));
  return Math.abs(num - nearest) < tolerance ? nearest : num;
}

function getValueRoundedToPlace(value, place) {
  const scaled = value / place;
  return Math.floor(normalizeNearInteger(scaled));
}

function Digit({ place, value, height, digitStyle }) {
  const isDecimal = place === '.';
  const valueRoundedToPlace = isDecimal ? 0 : getValueRoundedToPlace(value, place);
  const animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    if (!isDecimal) {
      animatedValue.set(valueRoundedToPlace);
    }
  }, [animatedValue, valueRoundedToPlace, isDecimal]);

  if (isDecimal) {
    return (
      <span
        className="relative inline-flex items-center justify-center"
        style={{ height, width: 'fit-content', ...digitStyle }}
      >
        .
      </span>
    );
  }

  const defaultStyle = {
    height,
    position: 'relative',
    width: '1ch',
    fontVariantNumeric: 'tabular-nums'
  };

  return (
    <span className="relative inline-flex overflow-hidden" style={{ ...defaultStyle, ...digitStyle }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </span>
  );
}

export default function Counter({
  value,
  fontSize = 100,
  padding = 0,
  // same refactored default as your CSS version
  places = [...value.toString()].map((ch, i, a) => {
    if (ch === '.') return '.';
    return (
      10 **
      (a.indexOf('.') === -1 ? a.length - i - 1 : i < a.indexOf('.') ? a.indexOf('.') - i - 1 : -(i - a.indexOf('.')))
    );
  }),
  gap = 8,
  borderRadius = 4,
  horizontalPadding = 8,
  textColor = 'white',
  fontWeight = 'bold',
  containerStyle,
  counterStyle,
  digitStyle,
  gradientHeight = 16,
  gradientFrom = 'black',
  gradientTo = 'transparent',
  topGradientStyle,
  bottomGradientStyle
}) {
  const height = fontSize + padding;

  const defaultContainerStyle = {
    position: 'relative',
    display: 'inline-block'
  };

  const defaultCounterStyle = {
    fontSize,
    display: 'flex',
    gap,
    overflow: 'hidden',
    borderRadius,
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    lineHeight: 1,
    color: textColor,
    fontWeight
  };

  const gradientContainerStyle = {
    pointerEvents: 'none',
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const defaultTopGradientStyle = {
    height: gradientHeight,
    background: \`linear-gradient(to bottom, \${gradientFrom}, \${gradientTo})\`
  };

  const defaultBottomGradientStyle = {
    height: gradientHeight,
    background: \`linear-gradient(to top, \${gradientFrom}, \${gradientTo})\`
  };

  return (
    <span style={{ ...defaultContainerStyle, ...containerStyle }}>
      <span style={{ ...defaultCounterStyle, ...counterStyle }}>
        {places.map(place => (
          <Digit key={place} place={place} value={value} height={height} digitStyle={digitStyle} />
        ))}
      </span>
      <span style={gradientContainerStyle}>
        <span style={topGradientStyle ?? defaultTopGradientStyle} />
        <span style={bottomGradientStyle ?? defaultBottomGradientStyle} />
      </span>
    </span>
  );
}
`,X=`import { MotionValue, motion, useSpring, useTransform } from 'motion/react';
import type React from 'react';
import { useEffect } from 'react';

import './Counter.css';

type PlaceValue = number | '.';

interface NumberProps {
  mv: MotionValue<number>;
  number: number;
  height: number;
}

function Number({ mv, number, height }: NumberProps) {
  const y = useTransform(mv, latest => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });

  return (
    <motion.span className="counter-number" style={{ y }}>
      {number}
    </motion.span>
  );
}

function normalizeNearInteger(num: number): number {
  const nearest = Math.round(num);
  const tolerance = 1e-9 * Math.max(1, Math.abs(num));
  return Math.abs(num - nearest) < tolerance ? nearest : num;
}

function getValueRoundedToPlace(value: number, place: number): number {
  const scaled = value / place;
  return Math.floor(normalizeNearInteger(scaled));
}

interface DigitProps {
  place: PlaceValue;
  value: number;
  height: number;
  digitStyle?: React.CSSProperties;
}

function Digit({ place, value, height, digitStyle }: DigitProps) {
  if (place === '.') {
    return (
      <span className="counter-digit" style={{ height, ...digitStyle, width: 'fit-content' }}>
        .
      </span>
    );
  }

  const valueRoundedToPlace = getValueRoundedToPlace(value, place);
  const animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <span className="counter-digit" style={{ height, ...digitStyle }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </span>
  );
}

interface CounterProps {
  value: number;
  fontSize?: number;
  padding?: number;
  /**
   * An array of place values that determines which digit positions
   * should be displayed. For decimal places, use "." to represent
   * the decimal point. Leave this prop empty to enable automatic
   * detection based on the current value.
   */
  places?: PlaceValue[];
  gap?: number;
  borderRadius?: number;
  horizontalPadding?: number;
  textColor?: string;
  fontWeight?: React.CSSProperties['fontWeight'];
  containerStyle?: React.CSSProperties;
  counterStyle?: React.CSSProperties;
  digitStyle?: React.CSSProperties;
  gradientHeight?: number;
  gradientFrom?: string;
  gradientTo?: string;
  topGradientStyle?: React.CSSProperties;
  bottomGradientStyle?: React.CSSProperties;
}

export default function Counter({
  value,
  fontSize = 100,
  padding = 0,
  places = [...value.toString()].map((ch, i, a) => {
    if (ch === '.') {
      return '.';
    }
    const dotIndex = a.indexOf('.');
    const isInteger = dotIndex === -1;

    const exponent = isInteger ? a.length - i - 1 : i < dotIndex ? dotIndex - i - 1 : -(i - dotIndex);

    return 10 ** exponent;
  }),
  gap = 8,
  borderRadius = 4,
  horizontalPadding = 8,
  textColor = 'inherit',
  fontWeight = 'inherit',
  containerStyle,
  counterStyle,
  digitStyle,
  gradientHeight = 16,
  gradientFrom = 'black',
  gradientTo = 'transparent',
  topGradientStyle,
  bottomGradientStyle
}: CounterProps) {
  const height = fontSize + padding;

  const defaultCounterStyle: React.CSSProperties = {
    fontSize,
    gap,
    borderRadius,
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    color: textColor,
    fontWeight
  };

  const defaultTopGradientStyle: React.CSSProperties = {
    height: gradientHeight,
    background: \`linear-gradient(to bottom, \${gradientFrom}, \${gradientTo})\`
  };

  const defaultBottomGradientStyle: React.CSSProperties = {
    height: gradientHeight,
    background: \`linear-gradient(to top, \${gradientFrom}, \${gradientTo})\`
  };

  return (
    <span className="counter-container" style={containerStyle}>
      <span className="counter-counter" style={{ ...defaultCounterStyle, ...counterStyle }}>
        {places.map(place => (
          <Digit key={place} place={place} value={value} height={height} digitStyle={digitStyle} />
        ))}
      </span>
      <span className="gradient-container">
        <span className="top-gradient" style={topGradientStyle ?? defaultTopGradientStyle} />
        <span className="bottom-gradient" style={bottomGradientStyle ?? defaultBottomGradientStyle} />
      </span>
    </span>
  );
}
`,Y=`import { MotionValue, motion, useSpring, useTransform } from 'motion/react';
import type React from 'react';
import { useEffect } from 'react';

type PlaceValue = number | '.';

interface NumberProps {
  mv: MotionValue<number>;
  number: number;
  height: number;
}

function Number({ mv, number, height }: NumberProps) {
  const y = useTransform(mv, latest => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) {
      memo -= 10 * height;
    }
    return memo;
  });

  const baseStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return <motion.span style={{ ...baseStyle, y }}>{number}</motion.span>;
}

function normalizeNearInteger(num: number): number {
  const nearest = Math.round(num);
  const tolerance = 1e-9 * Math.max(1, Math.abs(num));
  return Math.abs(num - nearest) < tolerance ? nearest : num;
}

function getValueRoundedToPlace(value: number, place: number): number {
  const scaled = value / place;
  return Math.floor(normalizeNearInteger(scaled));
}

interface DigitProps {
  place: PlaceValue;
  value: number;
  height: number;
  digitStyle?: React.CSSProperties;
}

function Digit({ place, value, height, digitStyle }: DigitProps) {
  // Decimal point digit
  if (place === '.') {
    return (
      <span
        className="relative inline-flex items-center justify-center"
        style={{ height, width: 'fit-content', ...digitStyle }}
      >
        .
      </span>
    );
  }

  // Numeric digit
  const valueRoundedToPlace = getValueRoundedToPlace(value, place);
  const animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  const defaultStyle: React.CSSProperties = {
    height,
    position: 'relative',
    width: '1ch',
    fontVariantNumeric: 'tabular-nums'
  };

  return (
    <span className="relative inline-flex overflow-hidden" style={{ ...defaultStyle, ...digitStyle }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </span>
  );
}

interface CounterProps {
  value: number;
  fontSize?: number;
  padding?: number;
  /**
   * An array of place values that determines which digit positions
   * should be displayed. For decimal places, use "." to represent
   * the decimal point. Leave this prop empty to enable automatic
   * detection based on the current value.
   */
  places?: PlaceValue[];
  gap?: number;
  borderRadius?: number;
  horizontalPadding?: number;
  textColor?: string;
  fontWeight?: React.CSSProperties['fontWeight'];
  containerStyle?: React.CSSProperties;
  counterStyle?: React.CSSProperties;
  digitStyle?: React.CSSProperties;
  gradientHeight?: number;
  gradientFrom?: string;
  gradientTo?: string;
  topGradientStyle?: React.CSSProperties;
  bottomGradientStyle?: React.CSSProperties;
}

export default function Counter({
  value,
  fontSize = 100,
  padding = 0,
  places = [...value.toString()].map((ch, i, a) => {
    if (ch === '.') {
      return '.';
    }

    const dotIndex = a.indexOf('.');
    const isInteger = dotIndex === -1;

    const exponent = isInteger ? a.length - i - 1 : i < dotIndex ? dotIndex - i - 1 : -(i - dotIndex);

    return 10 ** exponent;
  }),
  gap = 8,
  borderRadius = 4,
  horizontalPadding = 8,
  textColor = 'inherit',
  fontWeight = 'inherit',
  containerStyle,
  counterStyle,
  digitStyle,
  gradientHeight = 16,
  gradientFrom = 'black',
  gradientTo = 'transparent',
  topGradientStyle,
  bottomGradientStyle
}: CounterProps) {
  const height = fontSize + padding;

  const defaultContainerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block'
  };

  const defaultCounterStyle: React.CSSProperties = {
    fontSize,
    display: 'flex',
    gap,
    overflow: 'hidden',
    borderRadius,
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    lineHeight: 1,
    color: textColor,
    fontWeight
  };

  const gradientContainerStyle: React.CSSProperties = {
    pointerEvents: 'none',
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const defaultTopGradientStyle: React.CSSProperties = {
    height: gradientHeight,
    background: \`linear-gradient(to bottom, \${gradientFrom}, \${gradientTo})\`
  };

  const defaultBottomGradientStyle: React.CSSProperties = {
    height: gradientHeight,
    background: \`linear-gradient(to top, \${gradientFrom}, \${gradientTo})\`
  };

  return (
    <span style={{ ...defaultContainerStyle, ...containerStyle }}>
      <span style={{ ...defaultCounterStyle, ...counterStyle }}>
        {places.map(place => (
          <Digit key={place} place={place} value={value} height={height} digitStyle={digitStyle} />
        ))}
      </span>
      <span style={gradientContainerStyle}>
        <span style={topGradientStyle ?? defaultTopGradientStyle} />
        <span style={bottomGradientStyle ?? defaultBottomGradientStyle} />
      </span>
    </span>
  );
}
`,Z={dependencies:"motion",usage:`import Counter from './Counter';

<Counter
  value={1}
  places={[100, 10, 1]}
  fontSize={80}
  padding={5}
  gap={10}
  textColor="white"
  fontWeight={900}
/>`,code:U,css:J,tailwind:Q,tsCode:X,tsTailwind:Y},C={digitPlaceHolders:!0,value:1,fontSize:80,gap:10},R=t=>Math.round(t*10)/10,ue=()=>{const{props:t,updateProp:n,resetProps:i,hasChanges:d}=M(C),{digitPlaceHolders:r,value:a,fontSize:o,gap:l}=t,c=T.useMemo(()=>[{name:"value",type:"number",default:"N/A (required)",description:"The numeric value to display in the counter."},{name:"fontSize",type:"number",default:"100",description:"The base font size used for the counter digits."},{name:"padding",type:"number",default:"0",description:"Additional padding added to the digit height."},{name:"places",type:"number[]",default:'[100, 10, 1 , "." , 0.1]',description:'Defines which digit positions to display. Include whole number and decimal place values (use "." for the decimal point). If omitted, place values will be detected automatically.'},{name:"gap",type:"number",default:"8",description:"The gap (in pixels) between each digit."},{name:"borderRadius",type:"number",default:"4",description:"The border radius (in pixels) for the counter container."},{name:"horizontalPadding",type:"number",default:"8",description:"The horizontal padding (in pixels) for the counter container."},{name:"textColor",type:"string",default:"'white'",description:"The text color for the counter digits."},{name:"fontWeight",type:"string | number",default:"'bold'",description:"The font weight of the counter digits."},{name:"containerStyle",type:"React.CSSProperties",default:"{}",description:"Custom inline styles for the outer container."},{name:"counterStyle",type:"React.CSSProperties",default:"{}",description:"Custom inline styles for the counter element."},{name:"digitStyle",type:"React.CSSProperties",default:"{}",description:"Custom inline styles for each digit container."},{name:"gradientHeight",type:"number",default:"16",description:"The height (in pixels) of the gradient overlays."},{name:"gradientFrom",type:"string",default:"'black'",description:"The starting color for the gradient overlays."},{name:"gradientTo",type:"string",default:"'transparent'",description:"The ending color for the gradient overlays."},{name:"topGradientStyle",type:"React.CSSProperties",default:"undefined",description:"Custom inline styles for the top gradient overlay."},{name:"bottomGradientStyle",type:"React.CSSProperties",default:"undefined",description:"Custom inline styles for the bottom gradient overlay."}],[]);return e.jsx(I,{props:t,defaultProps:C,resetProps:i,hasChanges:d,children:e.jsxs(F,{children:[e.jsxs(E,{children:[e.jsxs(D,{position:"relative",className:"demo-container",h:400,overflow:"hidden",children:[r?e.jsx(P,{value:parseFloat(a.toFixed(1)),places:[100,10,1,".",.1],gradientFrom:"#060010",fontSize:o,padding:5,gap:l,borderRadius:10,horizontalPadding:15,textColor:"white",fontWeight:900}):e.jsx(P,{value:a,gradientFrom:"#060010",fontSize:o,padding:5,gap:l,borderRadius:10,horizontalPadding:15,textColor:"white",fontWeight:900}),e.jsxs(k,{gap:4,bottom:"1em",direction:"row",justify:"center",mt:4,position:"absolute",children:[e.jsx(m,{bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:10,w:16,onClick:()=>n("value",R(a-.4)),children:"- 0.4"}),e.jsx(m,{bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:10,w:10,onClick:()=>n("value",a-1),children:"-"}),e.jsx(m,{bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:10,w:10,onClick:()=>a<999&&n("value",a+1),children:"+"}),e.jsx(m,{bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:10,w:16,onClick:()=>a<999&&n("value",R(a+.4)),children:"+ 0.4"})]})]}),e.jsxs(O,{children:[e.jsx(L,{title:"digit Place Holders",isChecked:r,onChange:s=>n("digitPlaceHolders",s)}),e.jsx(h,{title:"Value",min:0,max:999,step:1,value:a,onChange:s=>n("value",s)}),e.jsx(h,{title:"Gap",min:0,max:50,step:10,value:l,onChange:s=>n("gap",s)}),e.jsx(h,{title:"Font Size",min:40,max:200,step:10,value:o,onChange:s=>n("fontSize",s)})]}),e.jsx(H,{data:c}),e.jsx(B,{dependencyList:["motion"]})]}),e.jsx($,{children:e.jsx(W,{codeObject:Z,componentName:"Counter"})})]})})};export{ue as default};
