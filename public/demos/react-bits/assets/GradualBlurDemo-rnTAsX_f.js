import{W as Fr,i as Wi,r as Ge,j as De,B as Zi,F as ji,a as $t,Y as Yi}from"./index-CKqfvLoB.js";import{L as Ji}from"./lenis-DSWRnSg1.js";import{u as Xi,C as Ki,T as Qi,P as eu,a as nu,b as tu,c as ru}from"./PropTable-BzD4cJVp.js";import{C as iu}from"./Customize-BaUKAf5J.js";import{P as Ut}from"./PreviewSelect-CM4Sns8B.js";import{P as uu}from"./PreviewSwitch-B0BSuWrO.js";import{D as ou}from"./Dependencies-DmSBXzNX.js";import{P as dt}from"./PreviewSlider-25yjOF_X.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./field-DGUMYGrq.js";import"./switch-CqqRi5Az.js";import"./slider-P7kYMDWb.js";const su=`import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as math from 'mathjs';

import './GradualBlur.css';

const DEFAULT_CONFIG = {
  position: 'bottom',
  strength: 2,
  height: '6rem',
  divCount: 5,
  exponential: false,
  zIndex: 1000,
  animated: false,
  duration: '0.3s',
  easing: 'ease-out',
  opacity: 1,
  curve: 'linear',
  responsive: false,
  target: 'parent',
  className: '',
  style: {}
};

const PRESETS = {
  top: { position: 'top', height: '6rem' },
  bottom: { position: 'bottom', height: '6rem' },
  left: { position: 'left', height: '6rem' },
  right: { position: 'right', height: '6rem' },
  subtle: { height: '4rem', strength: 1, opacity: 0.8, divCount: 3 },
  intense: { height: '10rem', strength: 4, divCount: 8, exponential: true },
  smooth: { height: '8rem', curve: 'bezier', divCount: 10 },
  sharp: { height: '5rem', curve: 'linear', divCount: 4 },
  header: { position: 'top', height: '8rem', curve: 'ease-out' },
  footer: { position: 'bottom', height: '8rem', curve: 'ease-out' },
  sidebar: { position: 'left', height: '6rem', strength: 2.5 },
  'page-header': { position: 'top', height: '10rem', target: 'page', strength: 3 },
  'page-footer': { position: 'bottom', height: '10rem', target: 'page', strength: 3 }
};

const CURVE_FUNCTIONS = {
  linear: p => p,
  bezier: p => p * p * (3 - 2 * p),
  'ease-in': p => p * p,
  'ease-out': p => 1 - Math.pow(1 - p, 2),
  'ease-in-out': p => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2)
};

const mergeConfigs = (...configs) => configs.reduce((acc, c) => ({ ...acc, ...c }), {});
const getGradientDirection = position =>
  ({
    top: 'to top',
    bottom: 'to bottom',
    left: 'to left',
    right: 'to right'
  })[position] || 'to bottom';

const debounce = (fn, wait) => {
  let t;
  return (...a) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...a), wait);
  };
};

const useResponsiveDimension = (responsive, config, key) => {
  const [value, setValue] = useState(config[key]);
  useEffect(() => {
    if (!responsive) return;
    const calc = () => {
      const w = window.innerWidth;
      let v = config[key];
      if (w <= 480 && config[\`mobile\${key[0].toUpperCase() + key.slice(1)}\`])
        v = config[\`mobile\${key[0].toUpperCase() + key.slice(1)}\`];
      else if (w <= 768 && config[\`tablet\${key[0].toUpperCase() + key.slice(1)}\`])
        v = config[\`tablet\${key[0].toUpperCase() + key.slice(1)}\`];
      else if (w <= 1024 && config[\`desktop\${key[0].toUpperCase() + key.slice(1)}\`])
        v = config[\`desktop\${key[0].toUpperCase() + key.slice(1)}\`];
      setValue(v);
    };
    const debounced = debounce(calc, 100);
    calc();
    window.addEventListener('resize', debounced);
    return () => window.removeEventListener('resize', debounced);
  }, [responsive, config, key]);
  return responsive ? value : config[key];
};

const useIntersectionObserver = (ref, shouldObserve = false) => {
  const [isVisible, setIsVisible] = useState(!shouldObserve);

  useEffect(() => {
    if (!shouldObserve || !ref.current) return;

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, shouldObserve]);

  return isVisible;
};

function GradualBlur(props) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const config = useMemo(() => {
    const presetConfig = props.preset && PRESETS[props.preset] ? PRESETS[props.preset] : {};
    return mergeConfigs(DEFAULT_CONFIG, presetConfig, props);
  }, [props]);

  const responsiveHeight = useResponsiveDimension(config.responsive, config, 'height');
  const responsiveWidth = useResponsiveDimension(config.responsive, config, 'width');

  const isVisible = useIntersectionObserver(containerRef, config.animated === 'scroll');

  const blurDivs = useMemo(() => {
    const divs = [];
    const increment = 100 / config.divCount;
    const currentStrength =
      isHovered && config.hoverIntensity ? config.strength * config.hoverIntensity : config.strength;

    const curveFunc = CURVE_FUNCTIONS[config.curve] || CURVE_FUNCTIONS.linear;

    for (let i = 1; i <= config.divCount; i++) {
      let progress = i / config.divCount;
      progress = curveFunc(progress);

      let blurValue;
      if (config.exponential) {
        blurValue = math.pow(2, progress * 4) * 0.0625 * currentStrength;
      } else {
        blurValue = 0.0625 * (progress * config.divCount + 1) * currentStrength;
      }

      const p1 = math.round((increment * i - increment) * 10) / 10;
      const p2 = math.round(increment * i * 10) / 10;
      const p3 = math.round((increment * i + increment) * 10) / 10;
      const p4 = math.round((increment * i + increment * 2) * 10) / 10;

      let gradient = \`transparent \${p1}%, black \${p2}%\`;
      if (p3 <= 100) gradient += \`, black \${p3}%\`;
      if (p4 <= 100) gradient += \`, transparent \${p4}%\`;

      const direction = getGradientDirection(config.position);

      const divStyle = {
        position: 'absolute',
        inset: '0',
        maskImage: \`linear-gradient(\${direction}, \${gradient})\`,
        WebkitMaskImage: \`linear-gradient(\${direction}, \${gradient})\`,
        backdropFilter: \`blur(\${blurValue.toFixed(3)}rem)\`,
        WebkitBackdropFilter: \`blur(\${blurValue.toFixed(3)}rem)\`,
        opacity: config.opacity,
        transition:
          config.animated && config.animated !== 'scroll'
            ? \`backdrop-filter \${config.duration} \${config.easing}\`
            : undefined
      };

      divs.push(<div key={i} style={divStyle} />);
    }

    return divs;
  }, [config, isHovered]);

  const containerStyle = useMemo(() => {
    const isVertical = ['top', 'bottom'].includes(config.position);
    const isHorizontal = ['left', 'right'].includes(config.position);
    const isPageTarget = config.target === 'page';

    const baseStyle = {
      position: isPageTarget ? 'fixed' : 'absolute',
      pointerEvents: config.hoverIntensity ? 'auto' : 'none',
      opacity: isVisible ? 1 : 0,
      transition: config.animated ? \`opacity \${config.duration} \${config.easing}\` : undefined,
      zIndex: isPageTarget ? config.zIndex + 100 : config.zIndex,
      ...config.style
    };

    if (isVertical) {
      baseStyle.height = responsiveHeight;
      baseStyle.width = responsiveWidth || '100%';
      baseStyle[config.position] = 0;
      baseStyle.left = 0;
      baseStyle.right = 0;
    } else if (isHorizontal) {
      baseStyle.width = responsiveWidth || responsiveHeight;
      baseStyle.height = '100%';
      baseStyle[config.position] = 0;
      baseStyle.top = 0;
      baseStyle.bottom = 0;
    }

    return baseStyle;
  }, [config, responsiveHeight, responsiveWidth, isVisible]);

  const { hoverIntensity, animated, onAnimationComplete, duration } = config;

  useEffect(() => {
    if (isVisible && animated === 'scroll' && onAnimationComplete) {
      const ms = parseFloat(duration) * 1000;
      const t = setTimeout(() => onAnimationComplete(), ms);
      return () => clearTimeout(t);
    }
  }, [isVisible, animated, onAnimationComplete, duration]);

  return (
    <div
      ref={containerRef}
      className={\`gradual-blur \${config.target === 'page' ? 'gradual-blur-page' : 'gradual-blur-parent'} \${config.className}\`}
      style={containerStyle}
      onMouseEnter={hoverIntensity ? () => setIsHovered(true) : undefined}
      onMouseLeave={hoverIntensity ? () => setIsHovered(false) : undefined}
    >
      <div
        className="gradual-blur-inner"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%'
        }}
      >
        {blurDivs}
      </div>
    </div>
  );
}

const GradualBlurMemo = React.memo(GradualBlur);
GradualBlurMemo.displayName = 'GradualBlur';
GradualBlurMemo.PRESETS = PRESETS;
GradualBlurMemo.CURVE_FUNCTIONS = CURVE_FUNCTIONS;
export default GradualBlurMemo;

const injectStyles = () => {
  if (typeof document === 'undefined') return;

  const styleId = 'gradual-blur-styles';
  if (document.getElementById(styleId)) return;

  const styleElement = document.createElement('style');
  styleElement.id = styleId;
  styleElement.textContent = \`
  .gradual-blur { pointer-events: none; transition: opacity 0.3s ease-out; }
  .gradual-blur-parent { overflow: hidden; }
  .gradual-blur-inner { pointer-events: none; }\`;

  document.head.appendChild(styleElement);
};

if (typeof document !== 'undefined') {
  injectStyles();
}
`,au=`import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as math from 'mathjs';

const DEFAULT_CONFIG = {
  position: 'bottom',
  strength: 2,
  height: '6rem',
  divCount: 5,
  exponential: false,
  zIndex: 1000,
  animated: false,
  duration: '0.3s',
  easing: 'ease-out',
  opacity: 1,
  curve: 'linear',
  responsive: false,
  target: 'parent',
  className: '',
  style: {}
};

const PRESETS = {
  top: { position: 'top', height: '6rem' },
  bottom: { position: 'bottom', height: '6rem' },
  left: { position: 'left', height: '6rem' },
  right: { position: 'right', height: '6rem' },
  subtle: { height: '4rem', strength: 1, opacity: 0.8, divCount: 3 },
  intense: { height: '10rem', strength: 4, divCount: 8, exponential: true },
  smooth: { height: '8rem', curve: 'bezier', divCount: 10 },
  sharp: { height: '5rem', curve: 'linear', divCount: 4 },
  header: { position: 'top', height: '8rem', curve: 'ease-out' },
  footer: { position: 'bottom', height: '8rem', curve: 'ease-out' },
  sidebar: { position: 'left', height: '6rem', strength: 2.5 },
  'page-header': { position: 'top', height: '10rem', target: 'page', strength: 3 },
  'page-footer': { position: 'bottom', height: '10rem', target: 'page', strength: 3 }
};

const CURVE_FUNCTIONS = {
  linear: p => p,
  bezier: p => p * p * (3 - 2 * p),
  'ease-in': p => p * p,
  'ease-out': p => 1 - Math.pow(1 - p, 2),
  'ease-in-out': p => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2)
};

const mergeConfigs = (...configs) => configs.reduce((acc, c) => ({ ...acc, ...c }), {});

const getGradientDirection = position => {
  const directions = {
    top: 'to top',
    bottom: 'to bottom',
    left: 'to left',
    right: 'to right'
  };
  return directions[position] || 'to bottom';
};

const debounce = (fn, wait) => {
  let t;
  return (...a) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...a), wait);
  };
};

const useResponsiveDimension = (responsive, config, key) => {
  const [val, setVal] = useState(config[key]);
  useEffect(() => {
    if (!responsive) return;
    const calc = () => {
      const w = window.innerWidth;
      let v = config[key];
      if (w <= 480 && config['mobile' + key[0].toUpperCase() + key.slice(1)])
        v = config['mobile' + key[0].toUpperCase() + key.slice(1)];
      else if (w <= 768 && config['tablet' + key[0].toUpperCase() + key.slice(1)])
        v = config['tablet' + key[0].toUpperCase() + key.slice(1)];
      else if (w <= 1024 && config['desktop' + key[0].toUpperCase() + key.slice(1)])
        v = config['desktop' + key[0].toUpperCase() + key.slice(1)];
      setVal(v);
    };
    const deb = debounce(calc, 100);
    calc();
    window.addEventListener('resize', deb);
    return () => window.removeEventListener('resize', deb);
  }, [responsive, config, key]);
  return responsive ? val : config[key];
};

const useIntersectionObserver = (ref, shouldObserve = false) => {
  const [isVisible, setIsVisible] = useState(!shouldObserve);

  useEffect(() => {
    if (!shouldObserve || !ref.current) return;

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, shouldObserve]);

  return isVisible;
};

const GradualBlur = props => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const config = useMemo(() => {
    const presetConfig = props.preset && PRESETS[props.preset] ? PRESETS[props.preset] : {};
    return mergeConfigs(DEFAULT_CONFIG, presetConfig, props);
  }, [props]);

  const responsiveHeight = useResponsiveDimension(config.responsive, config, 'height');
  const responsiveWidth = useResponsiveDimension(config.responsive, config, 'width');
  const isVisible = useIntersectionObserver(containerRef, config.animated === 'scroll');

  const blurDivs = useMemo(() => {
    const divs = [];
    const increment = 100 / config.divCount;
    const currentStrength =
      isHovered && config.hoverIntensity ? config.strength * config.hoverIntensity : config.strength;

    const curveFunc = CURVE_FUNCTIONS[config.curve] || CURVE_FUNCTIONS.linear;

    for (let i = 1; i <= config.divCount; i++) {
      let progress = i / config.divCount;
      progress = curveFunc(progress);

      let blurValue;
      if (config.exponential) {
        blurValue = math.pow(2, progress * 4) * 0.0625 * currentStrength;
      } else {
        blurValue = 0.0625 * (progress * config.divCount + 1) * currentStrength;
      }
      const p1 = math.round((increment * i - increment) * 10) / 10;
      const p2 = math.round(increment * i * 10) / 10;
      const p3 = math.round((increment * i + increment) * 10) / 10;
      const p4 = math.round((increment * i + increment * 2) * 10) / 10;
      let gradient = \`transparent \${p1}%, black \${p2}%\`;
      if (p3 <= 100) gradient += \`, black \${p3}%\`;
      if (p4 <= 100) gradient += \`, transparent \${p4}%\`;

      const direction = getGradientDirection(config.position);

      const divStyle = {
        position: 'absolute',
        inset: '0',
        maskImage: \`linear-gradient(\${direction}, \${gradient})\`,
        WebkitMaskImage: \`linear-gradient(\${direction}, \${gradient})\`,
        backdropFilter: \`blur(\${blurValue.toFixed(3)}rem)\`,
        WebkitBackdropFilter: \`blur(\${blurValue.toFixed(3)}rem)\`,
        opacity: config.opacity,
        transition:
          config.animated && config.animated !== 'scroll'
            ? \`backdrop-filter \${config.duration} \${config.easing}\`
            : undefined
      };

      divs.push(<div key={i} style={divStyle} />);
    }

    return divs;
  }, [config, isHovered]);

  const containerStyle = useMemo(() => {
    const isVertical = ['top', 'bottom'].includes(config.position);
    const isHorizontal = ['left', 'right'].includes(config.position);
    const isPageTarget = config.target === 'page';

    const baseStyle = {
      position: isPageTarget ? 'fixed' : 'absolute',
      pointerEvents: config.hoverIntensity ? 'auto' : 'none',
      opacity: isVisible ? 1 : 0,
      transition: config.animated ? \`opacity \${config.duration} \${config.easing}\` : undefined,
      zIndex: isPageTarget ? config.zIndex + 100 : config.zIndex,
      ...config.style
    };

    if (isVertical) {
      baseStyle.height = responsiveHeight;
      baseStyle.width = responsiveWidth || '100%';
      baseStyle[config.position] = 0;
      baseStyle.left = 0;
      baseStyle.right = 0;
    } else if (isHorizontal) {
      baseStyle.width = responsiveWidth || responsiveHeight;
      baseStyle.height = '100%';
      baseStyle[config.position] = 0;
      baseStyle.top = 0;
      baseStyle.bottom = 0;
    }

    return baseStyle;
  }, [config, responsiveHeight, responsiveWidth, isVisible]);

  const { hoverIntensity, animated, onAnimationComplete, duration } = config;
  useEffect(() => {
    if (isVisible && animated === 'scroll' && onAnimationComplete) {
      const t = setTimeout(() => onAnimationComplete(), parseFloat(duration) * 1000);
      return () => clearTimeout(t);
    }
  }, [isVisible, animated, onAnimationComplete, duration]);

  return (
    <div
      ref={containerRef}
      className={\`gradual-blur \${config.target === 'page' ? 'gradual-blur-page' : 'gradual-blur-parent'} \${config.className}\`}
      style={containerStyle}
      onMouseEnter={hoverIntensity ? () => setIsHovered(true) : undefined}
      onMouseLeave={hoverIntensity ? () => setIsHovered(false) : undefined}
    >
      <div className="gradual-blur-inner relative w-full h-full">{blurDivs}</div>
    </div>
  );
};
const GradualBlurMemo = React.memo(GradualBlur);
GradualBlurMemo.displayName = 'GradualBlur';
GradualBlurMemo.PRESETS = PRESETS;
GradualBlurMemo.CURVE_FUNCTIONS = CURVE_FUNCTIONS;
export default GradualBlurMemo;
`,cu=`.gradual-blur-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.gradual-blur-inner > div {
  -webkit-backdrop-filter: inherit;
  backdrop-filter: inherit;
}

.gradual-blur {
  isolation: isolate;
}

@supports not (backdrop-filter: blur(1px)) {
  .gradual-blur-inner > div {
    background: rgba(0, 0, 0, 0.3);
    opacity: 0.5;
  }
}

.gradual-blur-fixed {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1000;
}
`,fu=`import React, { CSSProperties, useEffect, useRef, useState, useMemo, PropsWithChildren } from 'react';
import * as math from 'mathjs';

import './GradualBlur.css';

type GradualBlurProps = {
  position?: 'top' | 'bottom' | 'left' | 'right';
  strength?: number;
  height?: string;
  width?: string;
  divCount?: number;
  exponential?: boolean;
  zIndex?: number;
  animated?: boolean | 'scroll';
  duration?: string;
  easing?: string;
  opacity?: number;
  curve?: 'linear' | 'bezier' | 'ease-in' | 'ease-out' | 'ease-in-out';
  responsive?: boolean;
  mobileHeight?: string;
  tabletHeight?: string;
  desktopHeight?: string;
  mobileWidth?: string;
  tabletWidth?: string;
  desktopWidth?: string;
  preset?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'subtle'
    | 'intense'
    | 'smooth'
    | 'sharp'
    | 'header'
    | 'footer'
    | 'sidebar'
    | 'page-header'
    | 'page-footer';
  gpuOptimized?: boolean;
  hoverIntensity?: number;
  target?: 'parent' | 'page';
  onAnimationComplete?: () => void;
  className?: string;
  style?: CSSProperties;
};

const DEFAULT_CONFIG: Partial<GradualBlurProps> = {
  position: 'bottom',
  strength: 2,
  height: '6rem',
  divCount: 5,
  exponential: false,
  zIndex: 1000,
  animated: false,
  duration: '0.3s',
  easing: 'ease-out',
  opacity: 1,
  curve: 'linear',
  responsive: false,
  target: 'parent',
  className: '',
  style: {}
};

const PRESETS: Record<string, Partial<GradualBlurProps>> = {
  top: { position: 'top', height: '6rem' },
  bottom: { position: 'bottom', height: '6rem' },
  left: { position: 'left', height: '6rem' },
  right: { position: 'right', height: '6rem' },
  subtle: { height: '4rem', strength: 1, opacity: 0.8, divCount: 3 },
  intense: { height: '10rem', strength: 4, divCount: 8, exponential: true },
  smooth: { height: '8rem', curve: 'bezier', divCount: 10 },
  sharp: { height: '5rem', curve: 'linear', divCount: 4 },
  header: { position: 'top', height: '8rem', curve: 'ease-out' },
  footer: { position: 'bottom', height: '8rem', curve: 'ease-out' },
  sidebar: { position: 'left', height: '6rem', strength: 2.5 },
  'page-header': {
    position: 'top',
    height: '10rem',
    target: 'page',
    strength: 3
  },
  'page-footer': {
    position: 'bottom',
    height: '10rem',
    target: 'page',
    strength: 3
  }
};

const CURVE_FUNCTIONS: Record<string, (p: number) => number> = {
  linear: p => p,
  bezier: p => p * p * (3 - 2 * p),
  'ease-in': p => p * p,
  'ease-out': p => 1 - Math.pow(1 - p, 2),
  'ease-in-out': p => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2)
};

const mergeConfigs = (...configs: Partial<GradualBlurProps>[]): Partial<GradualBlurProps> => {
  return configs.reduce((acc, config) => ({ ...acc, ...config }), {});
};

const getGradientDirection = (position: string): string => {
  const directions: Record<string, string> = {
    top: 'to top',
    bottom: 'to bottom',
    left: 'to left',
    right: 'to right'
  };
  return directions[position] || 'to bottom';
};

const debounce = <T extends (...a: any[]) => void>(fn: T, wait: number) => {
  let t: ReturnType<typeof setTimeout>;
  return (...a: Parameters<T>) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...a), wait);
  };
};

const useResponsiveDimension = (
  responsive: boolean | undefined,
  config: Partial<GradualBlurProps>,
  key: keyof GradualBlurProps
) => {
  const [val, setVal] = useState<any>(config[key]);
  useEffect(() => {
    if (!responsive) return;
    const calc = () => {
      const w = window.innerWidth;
      let v: any = config[key];
      const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
      const k = cap(key as string);
      if (w <= 480 && (config as any)['mobile' + k]) v = (config as any)['mobile' + k];
      else if (w <= 768 && (config as any)['tablet' + k]) v = (config as any)['tablet' + k];
      else if (w <= 1024 && (config as any)['desktop' + k]) v = (config as any)['desktop' + k];
      setVal(v);
    };
    const deb = debounce(calc, 100);
    calc();
    window.addEventListener('resize', deb);
    return () => window.removeEventListener('resize', deb);
  }, [responsive, config, key]);
  return responsive ? val : (config as any)[key];
};

const useIntersectionObserver = (ref: React.RefObject<HTMLDivElement | null>, shouldObserve: boolean = false) => {
  const [isVisible, setIsVisible] = useState(!shouldObserve);

  useEffect(() => {
    if (!shouldObserve || !ref.current) return;

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, shouldObserve]);

  return isVisible;
};

const GradualBlur: React.FC<PropsWithChildren<GradualBlurProps>> = props => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const config = useMemo(() => {
    const presetConfig = props.preset && PRESETS[props.preset] ? PRESETS[props.preset] : {};
    return mergeConfigs(DEFAULT_CONFIG, presetConfig, props) as Required<GradualBlurProps>;
  }, [props]);

  const responsiveHeight = useResponsiveDimension(config.responsive, config, 'height');
  const responsiveWidth = useResponsiveDimension(config.responsive, config, 'width');

  const isVisible = useIntersectionObserver(containerRef, config.animated === 'scroll');

  const blurDivs = useMemo(() => {
    const divs: React.ReactNode[] = [];
    const increment = 100 / config.divCount;
    const currentStrength =
      isHovered && config.hoverIntensity ? config.strength * config.hoverIntensity : config.strength;

    const curveFunc = CURVE_FUNCTIONS[config.curve] || CURVE_FUNCTIONS.linear;

    for (let i = 1; i <= config.divCount; i++) {
      let progress = i / config.divCount;
      progress = curveFunc(progress);

      let blurValue: number;
      if (config.exponential) {
        blurValue = Number(math.pow(2, progress * 4)) * 0.0625 * currentStrength;
      } else {
        blurValue = 0.0625 * (progress * config.divCount + 1) * currentStrength;
      }

      const p1 = math.round((increment * i - increment) * 10) / 10;
      const p2 = math.round(increment * i * 10) / 10;
      const p3 = math.round((increment * i + increment) * 10) / 10;
      const p4 = math.round((increment * i + increment * 2) * 10) / 10;

      let gradient = \`transparent \${p1}%, black \${p2}%\`;
      if (p3 <= 100) gradient += \`, black \${p3}%\`;
      if (p4 <= 100) gradient += \`, transparent \${p4}%\`;

      const direction = getGradientDirection(config.position);

      const divStyle: CSSProperties = {
        position: 'absolute',
        inset: '0',
        maskImage: \`linear-gradient(\${direction}, \${gradient})\`,
        WebkitMaskImage: \`linear-gradient(\${direction}, \${gradient})\`,
        backdropFilter: \`blur(\${blurValue.toFixed(3)}rem)\`,
        WebkitBackdropFilter: \`blur(\${blurValue.toFixed(3)}rem)\`,
        opacity: config.opacity,
        transition:
          config.animated && config.animated !== 'scroll'
            ? \`backdrop-filter \${config.duration} \${config.easing}\`
            : undefined
      };

      divs.push(<div key={i} style={divStyle} />);
    }

    return divs;
  }, [config, isHovered]);

  const containerStyle: CSSProperties = useMemo(() => {
    const isVertical = ['top', 'bottom'].includes(config.position);
    const isHorizontal = ['left', 'right'].includes(config.position);
    const isPageTarget = config.target === 'page';

    const baseStyle: CSSProperties = {
      position: isPageTarget ? 'fixed' : 'absolute',
      pointerEvents: config.hoverIntensity ? 'auto' : 'none',
      opacity: isVisible ? 1 : 0,
      transition: config.animated ? \`opacity \${config.duration} \${config.easing}\` : undefined,
      zIndex: isPageTarget ? config.zIndex + 100 : config.zIndex,
      ...config.style
    };

    if (isVertical) {
      baseStyle.height = responsiveHeight;
      baseStyle.width = responsiveWidth || '100%';
      baseStyle[config.position] = 0;
      baseStyle.left = 0;
      baseStyle.right = 0;
    } else if (isHorizontal) {
      baseStyle.width = responsiveWidth || responsiveHeight;
      baseStyle.height = '100%';
      baseStyle[config.position] = 0;
      baseStyle.top = 0;
      baseStyle.bottom = 0;
    }

    return baseStyle;
  }, [config, responsiveHeight, responsiveWidth, isVisible]);

  const { hoverIntensity, animated, onAnimationComplete, duration } = config as any;
  useEffect(() => {
    if (isVisible && animated === 'scroll' && onAnimationComplete) {
      const t = setTimeout(() => onAnimationComplete(), parseFloat(duration) * 1000);
      return () => clearTimeout(t);
    }
  }, [isVisible, animated, onAnimationComplete, duration]);

  return (
    <div
      ref={containerRef}
      className={\`gradual-blur \${config.target === 'page' ? 'gradual-blur-page' : 'gradual-blur-parent'} \${config.className}\`}
      style={containerStyle}
      onMouseEnter={hoverIntensity ? () => setIsHovered(true) : undefined}
      onMouseLeave={hoverIntensity ? () => setIsHovered(false) : undefined}
    >
      <div
        className="gradual-blur-inner"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%'
        }}
      >
        {blurDivs}
      </div>
    </div>
  );
};

const GradualBlurMemo = React.memo(GradualBlur);
GradualBlurMemo.displayName = 'GradualBlur';
(GradualBlurMemo as any).PRESETS = PRESETS;
(GradualBlurMemo as any).CURVE_FUNCTIONS = CURVE_FUNCTIONS;
export default GradualBlurMemo;

const injectStyles = () => {
  if (typeof document === 'undefined') return;
  const styleId = 'gradual-blur-styles';
  if (document.getElementById(styleId)) return;
  const styleElement = document.createElement('style');
  styleElement.id = styleId;
  styleElement.textContent = \`.gradual-blur{pointer-events:none;transition:opacity 0.3s ease-out}.gradual-blur-inner{pointer-events:none}\`;
  document.head.appendChild(styleElement);
};

if (typeof document !== 'undefined') {
  injectStyles();
}
`,lu=`import React, { CSSProperties, useEffect, useRef, useState, useMemo, PropsWithChildren } from 'react';
import * as math from 'mathjs';

type GradualBlurProps = PropsWithChildren<{
  position?: 'top' | 'bottom' | 'left' | 'right';
  strength?: number;
  height?: string;
  width?: string;
  divCount?: number;
  exponential?: boolean;
  zIndex?: number;
  animated?: boolean | 'scroll';
  duration?: string;
  easing?: string;
  opacity?: number;
  curve?: 'linear' | 'bezier' | 'ease-in' | 'ease-out' | 'ease-in-out';
  responsive?: boolean;
  mobileHeight?: string;
  tabletHeight?: string;
  desktopHeight?: string;
  mobileWidth?: string;
  tabletWidth?: string;
  desktopWidth?: string;

  preset?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'subtle'
    | 'intense'
    | 'smooth'
    | 'sharp'
    | 'header'
    | 'footer'
    | 'sidebar'
    | 'page-header'
    | 'page-footer';
  gpuOptimized?: boolean;
  hoverIntensity?: number;
  target?: 'parent' | 'page';

  onAnimationComplete?: () => void;
  className?: string;
  style?: CSSProperties;
}>;

const DEFAULT_CONFIG: Partial<GradualBlurProps> = {
  position: 'bottom',
  strength: 2,
  height: '6rem',
  divCount: 5,
  exponential: false,
  zIndex: 1000,
  animated: false,
  duration: '0.3s',
  easing: 'ease-out',
  opacity: 1,
  curve: 'linear',
  responsive: false,
  target: 'parent',
  className: '',
  style: {}
};

const PRESETS: Record<string, Partial<GradualBlurProps>> = {
  top: { position: 'top', height: '6rem' },
  bottom: { position: 'bottom', height: '6rem' },
  left: { position: 'left', height: '6rem' },
  right: { position: 'right', height: '6rem' },

  subtle: { height: '4rem', strength: 1, opacity: 0.8, divCount: 3 },
  intense: { height: '10rem', strength: 4, divCount: 8, exponential: true },

  smooth: { height: '8rem', curve: 'bezier', divCount: 10 },
  sharp: { height: '5rem', curve: 'linear', divCount: 4 },

  header: { position: 'top', height: '8rem', curve: 'ease-out' },
  footer: { position: 'bottom', height: '8rem', curve: 'ease-out' },
  sidebar: { position: 'left', height: '6rem', strength: 2.5 },

  'page-header': {
    position: 'top',
    height: '10rem',
    target: 'page',
    strength: 3
  },
  'page-footer': {
    position: 'bottom',
    height: '10rem',
    target: 'page',
    strength: 3
  }
};

const CURVE_FUNCTIONS: Record<string, (p: number) => number> = {
  linear: p => p,
  bezier: p => p * p * (3 - 2 * p),
  'ease-in': p => p * p,
  'ease-out': p => 1 - Math.pow(1 - p, 2),
  'ease-in-out': p => (p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2)
};

const mergeConfigs = (...configs: Partial<GradualBlurProps>[]): Partial<GradualBlurProps> => {
  return configs.reduce((acc, config) => ({ ...acc, ...config }), {});
};

const getGradientDirection = (position: string): string => {
  const directions: Record<string, string> = {
    top: 'to top',
    bottom: 'to bottom',
    left: 'to left',
    right: 'to right'
  };
  return directions[position] || 'to bottom';
};

const debounce = <T extends (...a: any[]) => void>(fn: T, wait: number) => {
  let t: ReturnType<typeof setTimeout>;
  return (...a: Parameters<T>) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...a), wait);
  };
};
const useResponsiveDimension = (
  responsive: boolean | undefined,
  config: Partial<GradualBlurProps>,
  key: keyof GradualBlurProps
) => {
  const [val, setVal] = useState<any>(config[key]);
  useEffect(() => {
    if (!responsive) return;
    const calc = () => {
      const w = window.innerWidth;
      let v: any = config[key];
      const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
      const k = cap(key as string);
      if (w <= 480 && (config as any)['mobile' + k]) v = (config as any)['mobile' + k];
      else if (w <= 768 && (config as any)['tablet' + k]) v = (config as any)['tablet' + k];
      else if (w <= 1024 && (config as any)['desktop' + k]) v = (config as any)['desktop' + k];
      setVal(v);
    };
    const deb = debounce(calc, 100);
    calc();
    window.addEventListener('resize', deb);
    return () => window.removeEventListener('resize', deb);
  }, [responsive, config, key]);
  return responsive ? val : (config as any)[key];
};

const useIntersectionObserver = (ref: React.RefObject<HTMLDivElement>, shouldObserve: boolean = false) => {
  const [isVisible, setIsVisible] = useState(!shouldObserve);

  useEffect(() => {
    if (!shouldObserve || !ref.current) return;

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, shouldObserve]);

  return isVisible;
};

const GradualBlur: React.FC<GradualBlurProps> = props => {
  const containerRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const [isHovered, setIsHovered] = useState(false);

  const config = useMemo(() => {
    const presetConfig = props.preset && PRESETS[props.preset] ? PRESETS[props.preset] : {};
    return mergeConfigs(DEFAULT_CONFIG, presetConfig, props) as Required<GradualBlurProps>;
  }, [props]);

  const responsiveHeight = useResponsiveDimension(config.responsive, config, 'height');
  const responsiveWidth = useResponsiveDimension(config.responsive, config, 'width');

  const isVisible = useIntersectionObserver(containerRef, config.animated === 'scroll');

  const blurDivs = useMemo(() => {
    const divs: React.ReactNode[] = [];
    const increment = 100 / config.divCount;
    const currentStrength =
      isHovered && config.hoverIntensity ? config.strength * config.hoverIntensity : config.strength;

    const curveFunc = CURVE_FUNCTIONS[config.curve] || CURVE_FUNCTIONS.linear;

    for (let i = 1; i <= config.divCount; i++) {
      let progress = i / config.divCount;
      progress = curveFunc(progress);

      let blurValue: number;
      if (config.exponential) {
        blurValue = Number(math.pow(2, progress * 4)) * 0.0625 * currentStrength;
      } else {
        blurValue = 0.0625 * (progress * config.divCount + 1) * currentStrength;
      }

      const p1 = math.round((increment * i - increment) * 10) / 10;
      const p2 = math.round(increment * i * 10) / 10;
      const p3 = math.round((increment * i + increment) * 10) / 10;
      const p4 = math.round((increment * i + increment * 2) * 10) / 10;

      let gradient = \`transparent \${p1}%, black \${p2}%\`;
      if (p3 <= 100) gradient += \`, black \${p3}%\`;
      if (p4 <= 100) gradient += \`, transparent \${p4}%\`;

      const direction = getGradientDirection(config.position);

      const divStyle: CSSProperties = {
        maskImage: \`linear-gradient(\${direction}, \${gradient})\`,
        WebkitMaskImage: \`linear-gradient(\${direction}, \${gradient})\`,
        backdropFilter: \`blur(\${blurValue.toFixed(3)}rem)\`,
        opacity: config.opacity,
        transition:
          config.animated && config.animated !== 'scroll'
            ? \`backdrop-filter \${config.duration} \${config.easing}\`
            : undefined
      };

      divs.push(<div key={i} className="absolute inset-0" style={divStyle} />);
    }

    return divs;
  }, [config, isHovered]);

  const containerStyle: CSSProperties = useMemo(() => {
    const isVertical = ['top', 'bottom'].includes(config.position);
    const isHorizontal = ['left', 'right'].includes(config.position);
    const isPageTarget = config.target === 'page';

    const baseStyle: CSSProperties = {
      position: isPageTarget ? 'fixed' : 'absolute',
      pointerEvents: config.hoverIntensity ? 'auto' : 'none',
      opacity: isVisible ? 1 : 0,
      transition: config.animated ? \`opacity \${config.duration} \${config.easing}\` : undefined,
      zIndex: isPageTarget ? config.zIndex + 100 : config.zIndex,
      ...config.style
    };

    if (isVertical) {
      baseStyle.height = responsiveHeight;
      baseStyle.width = responsiveWidth || '100%';
      baseStyle[config.position] = 0;
      baseStyle.left = 0;
      baseStyle.right = 0;
    } else if (isHorizontal) {
      baseStyle.width = responsiveWidth || responsiveHeight;
      baseStyle.height = '100%';
      baseStyle[config.position] = 0;
      baseStyle.top = 0;
      baseStyle.bottom = 0;
    }

    return baseStyle;
  }, [config, responsiveHeight, responsiveWidth, isVisible]);

  const { hoverIntensity, animated, onAnimationComplete, duration } = config as any;
  useEffect(() => {
    if (isVisible && animated === 'scroll' && onAnimationComplete) {
      const t = setTimeout(() => onAnimationComplete(), parseFloat(duration) * 1000);
      return () => clearTimeout(t);
    }
  }, [isVisible, animated, onAnimationComplete, duration]);

  return (
    <div
      ref={containerRef}
      className={\`gradual-blur relative isolate \${config.target === 'page' ? 'gradual-blur-page' : 'gradual-blur-parent'} \${config.className}\`}
      style={containerStyle}
      onMouseEnter={hoverIntensity ? () => setIsHovered(true) : undefined}
      onMouseLeave={hoverIntensity ? () => setIsHovered(false) : undefined}
    >
      <div className="relative w-full h-full">{blurDivs}</div>
      {props.children && <div className="relative">{props.children}</div>}
    </div>
  );
};

const GradualBlurMemo = React.memo(GradualBlur);
GradualBlurMemo.displayName = 'GradualBlur';
(GradualBlurMemo as any).PRESETS = PRESETS;
(GradualBlurMemo as any).CURVE_FUNCTIONS = CURVE_FUNCTIONS;
export default GradualBlurMemo;

const injectStyles = () => {
  if (typeof document === 'undefined') return;
  const id = 'gradual-blur-styles';
  if (document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id;
  el.textContent = \`.gradual-blur{pointer-events:none;transition:opacity .3s ease-out}.gradual-blur-inner{pointer-events:none}\`;
  document.head.appendChild(el);
};
if (typeof document !== 'undefined') {
  injectStyles();
}
`,hu={dependencies:"mathjs",usage:`// Component added by Ansh - github.com/ansh-dhanani

import GradualBlur from './GradualBlur';

<section style={{position: 'relative',height: 500,overflow: 'hidden'}}>
  <div style={{ height: '100%',overflowY: 'auto',padding: '6rem 2rem' }}>
    <!-- Content Here - such as an image or text -->
  </div>

  <GradualBlur
    target="parent"
    position="bottom"
    height="6rem"
    strength={2}
    divCount={5}
    curve="bezier"
    exponential={true}
    opacity={1}
  />
</section>`,code:su,css:cu,tailwind:au,tsCode:fu,tsTailwind:lu};var Er={relTol:1e-12,absTol:1e-15,matrix:"Matrix",number:"number",numberFallback:"number",precision:64,predictable:!1,randomSeed:null};function pu(e,n){if(Yn(e,n))return e[n];throw typeof e[n]=="function"&&gu(e,n)?new Error('Cannot access method "'+n+'" as a property'):new Error('No access to property "'+n+'"')}function du(e,n,t){if(Yn(e,n))return e[n]=t,t;throw new Error('No access to property "'+n+'"')}function Yn(e,n){return!mu(e)&&!Array.isArray(e)?!1:Xn(Du,n)?!0:!(n in Object.prototype||n in Function.prototype)}function gu(e,n){return e==null||typeof e[n]!="function"||Xn(e,n)&&Object.getPrototypeOf&&n in Object.getPrototypeOf(e)?!1:Xn(vu,n)?!0:!(n in Object.prototype||n in Function.prototype)}function mu(e){return typeof e=="object"&&e&&e.constructor===Object}var Du={length:!0,name:!0},vu={toString:!0,valueOf:!0,toLocaleString:!0};class yu{constructor(n){this.wrappedObject=n,this[Symbol.iterator]=this.entries}keys(){return Object.keys(this.wrappedObject).filter(n=>this.has(n)).values()}get(n){return pu(this.wrappedObject,n)}set(n,t){return du(this.wrappedObject,n,t),this}has(n){return Yn(this.wrappedObject,n)&&n in this.wrappedObject}entries(){return wu(this.keys(),n=>[n,this.get(n)])}forEach(n){for(var t of this.keys())n(this.get(t),t,this)}delete(n){Yn(this.wrappedObject,n)&&delete this.wrappedObject[n]}clear(){for(var n of this.keys())this.delete(n)}get size(){return Object.keys(this.wrappedObject).length}}function wu(e,n){return{next:()=>{var t=e.next();return t.done?t:{value:n(t.value),done:!1}}}}function pe(e){return typeof e=="number"}function be(e){return!e||typeof e!="object"||typeof e.constructor!="function"?!1:e.isBigNumber===!0&&typeof e.constructor.prototype=="object"&&e.constructor.prototype.isBigNumber===!0||typeof e.constructor.isDecimal=="function"&&e.constructor.isDecimal(e)===!0}function Fu(e){return typeof e=="bigint"}function Cr(e){return e&&typeof e=="object"&&Object.getPrototypeOf(e).isComplex===!0||!1}function br(e){return e&&typeof e=="object"&&Object.getPrototypeOf(e).isFraction===!0||!1}function Ar(e){return e&&e.constructor.prototype.isUnit===!0||!1}function en(e){return typeof e=="string"}var _e=Array.isArray;function Ce(e){return e&&e.constructor.prototype.isMatrix===!0||!1}function Jn(e){return Array.isArray(e)||Ce(e)}function Eu(e){return e&&e.isDenseMatrix&&e.constructor.prototype.isMatrix===!0||!1}function Cu(e){return e&&e.isSparseMatrix&&e.constructor.prototype.isMatrix===!0||!1}function bu(e){return e&&e.constructor.prototype.isRange===!0||!1}function _t(e){return e&&e.constructor.prototype.isIndex===!0||!1}function Au(e){return typeof e=="boolean"}function Bu(e){return e&&e.constructor.prototype.isResultSet===!0||!1}function Nu(e){return e&&e.constructor.prototype.isHelp===!0||!1}function _u(e){return typeof e=="function"}function Su(e){return e instanceof Date}function Mu(e){return e instanceof RegExp}function St(e){return!!(e&&typeof e=="object"&&e.constructor===Object&&!Cr(e)&&!br(e))}function Tu(e){return e?e instanceof Map||e instanceof yu||typeof e.set=="function"&&typeof e.get=="function"&&typeof e.keys=="function"&&typeof e.has=="function":!1}function xu(e){return e===null}function Iu(e){return e===void 0}function Ou(e){return e&&e.isAccessorNode===!0&&e.constructor.prototype.isNode===!0||!1}function Pu(e){return e&&e.isArrayNode===!0&&e.constructor.prototype.isNode===!0||!1}function zu(e){return e&&e.isAssignmentNode===!0&&e.constructor.prototype.isNode===!0||!1}function Ru(e){return e&&e.isBlockNode===!0&&e.constructor.prototype.isNode===!0||!1}function $u(e){return e&&e.isConditionalNode===!0&&e.constructor.prototype.isNode===!0||!1}function Uu(e){return e&&e.isConstantNode===!0&&e.constructor.prototype.isNode===!0||!1}function Vu(e){return e&&e.isFunctionAssignmentNode===!0&&e.constructor.prototype.isNode===!0||!1}function ku(e){return e&&e.isFunctionNode===!0&&e.constructor.prototype.isNode===!0||!1}function Lu(e){return e&&e.isIndexNode===!0&&e.constructor.prototype.isNode===!0||!1}function qu(e){return e&&e.isNode===!0&&e.constructor.prototype.isNode===!0||!1}function Gu(e){return e&&e.isObjectNode===!0&&e.constructor.prototype.isNode===!0||!1}function Hu(e){return e&&e.isOperatorNode===!0&&e.constructor.prototype.isNode===!0||!1}function Wu(e){return e&&e.isParenthesisNode===!0&&e.constructor.prototype.isNode===!0||!1}function Zu(e){return e&&e.isRangeNode===!0&&e.constructor.prototype.isNode===!0||!1}function ju(e){return e&&e.isRelationalNode===!0&&e.constructor.prototype.isNode===!0||!1}function Yu(e){return e&&e.isSymbolNode===!0&&e.constructor.prototype.isNode===!0||!1}function Ju(e){return e&&e.constructor.prototype.isChain===!0||!1}function hn(e){var n=typeof e;return n==="object"?e===null?"null":be(e)?"BigNumber":e.constructor&&e.constructor.name?e.constructor.name:"Object":n}function Ee(e){var n=typeof e;if(n==="number"||n==="bigint"||n==="string"||n==="boolean"||e===null||e===void 0)return e;if(typeof e.clone=="function")return e.clone();if(Array.isArray(e))return e.map(function(t){return Ee(t)});if(e instanceof Date)return new Date(e.valueOf());if(be(e))return e;if(St(e))return Xu(e,Ee);if(n==="function")return e;throw new TypeError("Cannot clone: unknown type of value (value: ".concat(e,")"))}function Xu(e,n){var t={};for(var i in e)Xn(e,i)&&(t[i]=n(e[i]));return t}function Sn(e,n){var t,i,r;if(Array.isArray(e)){if(!Array.isArray(n)||e.length!==n.length)return!1;for(i=0,r=e.length;i<r;i++)if(!Sn(e[i],n[i]))return!1;return!0}else{if(typeof e=="function")return e===n;if(e instanceof Object){if(Array.isArray(n)||!(n instanceof Object))return!1;for(t in e)if(!(t in n)||!Sn(e[t],n[t]))return!1;for(t in n)if(!(t in e))return!1;return!0}else return e===n}}function Xn(e,n){return e&&Object.hasOwnProperty.call(e,n)}function Ku(e,n){for(var t={},i=0;i<n.length;i++){var r=n[i],u=e[r];u!==void 0&&(t[r]=u)}return t}var Qu=["Matrix","Array"],eo=["number","BigNumber","Fraction"],dn=function(n){if(n)throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);return Object.freeze(Er)};Fr(dn,Er,{MATRIX_OPTIONS:Qu,NUMBER_OPTIONS:eo});function Vt(){return!0}function Ze(){return!1}function En(){}const kt="Argument is not a typed-function.";function Br(){function e(v){return typeof v=="object"&&v!==null&&v.constructor===Object}const n=[{name:"number",test:function(v){return typeof v=="number"}},{name:"string",test:function(v){return typeof v=="string"}},{name:"boolean",test:function(v){return typeof v=="boolean"}},{name:"Function",test:function(v){return typeof v=="function"}},{name:"Array",test:Array.isArray},{name:"Date",test:function(v){return v instanceof Date}},{name:"RegExp",test:function(v){return v instanceof RegExp}},{name:"Object",test:e},{name:"null",test:function(v){return v===null}},{name:"undefined",test:function(v){return v===void 0}}],t={name:"any",test:Vt,isAny:!0};let i,r,u=0,o={createCount:0};function s(v){const E=i.get(v);if(E)return E;let _='Unknown type "'+v+'"';const T=v.toLowerCase();let P;for(P of r)if(P.toLowerCase()===T){_+='. Did you mean "'+P+'" ?';break}throw new TypeError(_)}function l(v){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"any";const _=E?s(E).index:r.length,T=[];for(let I=0;I<v.length;++I){if(!v[I]||typeof v[I].name!="string"||typeof v[I].test!="function")throw new TypeError("Object with properties {name: string, test: function} expected");const V=v[I].name;if(i.has(V))throw new TypeError('Duplicate type name "'+V+'"');T.push(V),i.set(V,{name:V,test:v[I].test,isAny:v[I].isAny,index:_+I,conversionsTo:[]})}const P=r.slice(_);r=r.slice(0,_).concat(T).concat(P);for(let I=_+T.length;I<r.length;++I)i.get(r[I]).index=I}function f(){i=new Map,r=[],u=0,l([t],!1)}f(),l(n);function a(){let v;for(v of r)i.get(v).conversionsTo=[];u=0}function h(v){const E=r.filter(_=>{const T=i.get(_);return!T.isAny&&T.test(v)});return E.length?E:["any"]}function p(v){return v&&typeof v=="function"&&"_typedFunctionData"in v}function g(v,E,_){if(!p(v))throw new TypeError(kt);const T=_&&_.exact,P=Array.isArray(E)?E.join(","):E,I=A(P),V=m(I);if(!T||V in v.signatures){const oe=v._typedFunctionData.signatureMap.get(V);if(oe)return oe}const R=I.length;let k;if(T){k=[];let oe;for(oe in v.signatures)k.push(v._typedFunctionData.signatureMap.get(oe))}else k=v._typedFunctionData.signatures;for(let oe=0;oe<R;++oe){const le=I[oe],Be=[];let Ve;for(Ve of k){const $e=B(Ve.params,oe);if(!(!$e||le.restParam&&!$e.restParam)){if(!$e.hasAny){const Je=F($e);if(le.types.some(Xe=>!Je.has(Xe.name)))continue}Be.push(Ve)}}if(k=Be,k.length===0)break}let z;for(z of k)if(z.params.length<=R)return z;throw new TypeError("Signature not found (signature: "+(v.name||"unnamed")+"("+m(I,", ")+"))")}function d(v,E,_){return g(v,E,_).implementation}function c(v,E){const _=s(E);if(_.test(v))return v;const T=_.conversionsTo;if(T.length===0)throw new Error("There are no conversions to "+E+" defined.");for(let P=0;P<T.length;P++)if(s(T[P].from).test(v))return T[P].convert(v);throw new Error("Cannot convert "+v+" to "+E)}function m(v){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:",";return v.map(_=>_.name).join(E)}function w(v){const E=v.indexOf("...")===0,T=(E?v.length>3?v.slice(3):"any":v).split("|").map(R=>s(R.trim()));let P=!1,I=E?"...":"";return{types:T.map(function(R){return P=R.isAny||P,I+=R.name+"|",{name:R.name,typeIndex:R.index,test:R.test,isAny:R.isAny,conversion:null,conversionIndex:-1}}),name:I.slice(0,-1),hasAny:P,hasConversion:!1,restParam:E}}function C(v){const E=v.types.map(V=>V.name),_=X(E);let T=v.hasAny,P=v.name;const I=_.map(function(V){const R=s(V.from);return T=R.isAny||T,P+="|"+V.from,{name:V.from,typeIndex:R.index,test:R.test,isAny:R.isAny,conversion:V,conversionIndex:V.index}});return{types:v.types.concat(I),name:P,hasAny:T,hasConversion:I.length>0,restParam:v.restParam}}function F(v){return v.typeSet||(v.typeSet=new Set,v.types.forEach(E=>v.typeSet.add(E.name))),v.typeSet}function A(v){const E=[];if(typeof v!="string")throw new TypeError("Signatures must be strings");const _=v.trim();if(_==="")return E;const T=_.split(",");for(let P=0;P<T.length;++P){const I=w(T[P].trim());if(I.restParam&&P!==T.length-1)throw new SyntaxError('Unexpected rest parameter "'+T[P]+'": only allowed for the last parameter');if(I.types.length===0)return null;E.push(I)}return E}function y(v){const E=ae(v);return E?E.restParam:!1}function D(v){if(!v||v.types.length===0)return Vt;if(v.types.length===1)return s(v.types[0].name).test;if(v.types.length===2){const E=s(v.types[0].name).test,_=s(v.types[1].name).test;return function(P){return E(P)||_(P)}}else{const E=v.types.map(function(_){return s(_.name).test});return function(T){for(let P=0;P<E.length;P++)if(E[P](T))return!0;return!1}}}function b(v){let E,_,T;if(y(v)){E=Re(v).map(D);const P=E.length,I=D(ae(v)),V=function(R){for(let k=P;k<R.length;k++)if(!I(R[k]))return!1;return!0};return function(k){for(let z=0;z<E.length;z++)if(!E[z](k[z]))return!1;return V(k)&&k.length>=P+1}}else return v.length===0?function(I){return I.length===0}:v.length===1?(_=D(v[0]),function(I){return _(I[0])&&I.length===1}):v.length===2?(_=D(v[0]),T=D(v[1]),function(I){return _(I[0])&&T(I[1])&&I.length===2}):(E=v.map(D),function(I){for(let V=0;V<E.length;V++)if(!E[V](I[V]))return!1;return I.length===E.length})}function B(v,E){return E<v.length?v[E]:y(v)?ae(v):null}function N(v,E){const _=B(v,E);return _?F(_):new Set}function M(v){return v.conversion===null||v.conversion===void 0}function x(v,E){const _=new Set;return v.forEach(T=>{const P=N(T.params,E);let I;for(I of P)_.add(I)}),_.has("any")?["any"]:Array.from(_)}function L(v,E,_){let T,P;const I=v||"unnamed";let V=_,R;for(R=0;R<E.length;R++){const le=[];if(V.forEach(Be=>{const Ve=B(Be.params,R),$e=D(Ve);(R<Be.params.length||y(Be.params))&&$e(E[R])&&le.push(Be)}),le.length===0){if(P=x(V,R),P.length>0){const Be=h(E[R]);return T=new TypeError("Unexpected type of argument in function "+I+" (expected: "+P.join(" or ")+", actual: "+Be.join(" | ")+", index: "+R+")"),T.data={category:"wrongType",fn:I,index:R,actual:Be,expected:P},T}}else V=le}const k=V.map(function(le){return y(le.params)?1/0:le.params.length});if(E.length<Math.min.apply(null,k))return P=x(V,R),T=new TypeError("Too few arguments in function "+I+" (expected: "+P.join(" or ")+", index: "+E.length+")"),T.data={category:"tooFewArgs",fn:I,index:E.length,expected:P},T;const z=Math.max.apply(null,k);if(E.length>z)return T=new TypeError("Too many arguments in function "+I+" (expected: "+z+", actual: "+E.length+")"),T.data={category:"tooManyArgs",fn:I,index:E.length,expectedLength:z},T;const oe=[];for(let le=0;le<E.length;++le)oe.push(h(E[le]).join("|"));return T=new TypeError('Arguments of type "'+oe.join(", ")+'" do not match any of the defined signatures of function '+I+"."),T.data={category:"mismatch",actual:oe},T}function W(v){let E=r.length+1;for(let _=0;_<v.types.length;_++)M(v.types[_])&&(E=Math.min(E,v.types[_].typeIndex));return E}function Z(v){let E=u+1;for(let _=0;_<v.types.length;_++)M(v.types[_])||(E=Math.min(E,v.types[_].conversionIndex));return E}function q(v,E){if(v.hasAny){if(!E.hasAny)return 1}else if(E.hasAny)return-1;if(v.restParam){if(!E.restParam)return 1}else if(E.restParam)return-1;if(v.hasConversion){if(!E.hasConversion)return 1}else if(E.hasConversion)return-1;const _=W(v)-W(E);if(_<0)return-1;if(_>0)return 1;const T=Z(v)-Z(E);return T<0?-1:T>0?1:0}function $(v,E){const _=v.params,T=E.params,P=ae(_),I=ae(T),V=y(_),R=y(T);if(V&&P.hasAny){if(!R||!I.hasAny)return 1}else if(R&&I.hasAny)return-1;let k=0,z=0,oe;for(oe of _)oe.hasAny&&++k,oe.hasConversion&&++z;let le=0,Be=0;for(oe of T)oe.hasAny&&++le,oe.hasConversion&&++Be;if(k!==le)return k-le;if(V&&P.hasConversion){if(!R||!I.hasConversion)return 1}else if(R&&I.hasConversion)return-1;if(z!==Be)return z-Be;if(V){if(!R)return 1}else if(R)return-1;const Ve=(_.length-T.length)*(V?-1:1);if(Ve!==0)return Ve;const $e=[];let Je=0;for(let Fn=0;Fn<_.length;++Fn){const kn=q(_[Fn],T[Fn]);$e.push(kn),Je+=kn}if(Je!==0)return Je;let Xe;for(Xe of $e)if(Xe!==0)return Xe;return 0}function X(v){if(v.length===0)return[];const E=v.map(s);v.length>1&&E.sort((P,I)=>P.index-I.index);let _=E[0].conversionsTo;if(v.length===1)return _;_=_.concat([]);const T=new Set(v);for(let P=1;P<E.length;++P){let I;for(I of E[P].conversionsTo)T.has(I.from)||(_.push(I),T.add(I.from))}return _}function j(v,E){let _=E;if(v.some(P=>P.hasConversion)){const P=y(v),I=v.map(Y);_=function(){const R=[],k=P?arguments.length-1:arguments.length;for(let z=0;z<k;z++)R[z]=I[z](arguments[z]);return P&&(R[k]=arguments[k].map(I[k])),E.apply(this,R)}}let T=_;if(y(v)){const P=v.length-1;T=function(){return _.apply(this,ue(arguments,0,P).concat([ue(arguments,P)]))}}return T}function Y(v){let E,_,T,P;const I=[],V=[];switch(v.types.forEach(function(R){R.conversion&&(I.push(s(R.conversion.from).test),V.push(R.conversion.convert))}),V.length){case 0:return function(k){return k};case 1:return E=I[0],T=V[0],function(k){return E(k)?T(k):k};case 2:return E=I[0],_=I[1],T=V[0],P=V[1],function(k){return E(k)?T(k):_(k)?P(k):k};default:return function(k){for(let z=0;z<V.length;z++)if(I[z](k))return V[z](k);return k}}}function Q(v){function E(_,T,P){if(T<_.length){const I=_[T];let V=[];if(I.restParam){const R=I.types.filter(M);R.length<I.types.length&&V.push({types:R,name:"..."+R.map(k=>k.name).join("|"),hasAny:R.some(k=>k.isAny),hasConversion:!1,restParam:!0}),V.push(I)}else V=I.types.map(function(R){return{types:[R],name:R.name,hasAny:R.isAny,hasConversion:R.conversion,restParam:!1}});return Ie(V,function(R){return E(_,T+1,P.concat([R]))})}else return[P]}return E(v,0,[])}function ie(v,E){const _=Math.max(v.length,E.length);for(let R=0;R<_;R++){const k=N(v,R),z=N(E,R);let oe=!1,le;for(le of z)if(k.has(le)){oe=!0;break}if(!oe)return!1}const T=v.length,P=E.length,I=y(v),V=y(E);return I?V?T===P:P>=T:V?T>=P:T===P}function te(v){return v.map(E=>un(E)?We(E.referToSelf.callback):rn(E)?Me(E.referTo.references,E.referTo.callback):E)}function se(v,E,_){const T=[];let P;for(P of v){let I=_[P];if(typeof I!="number")throw new TypeError('No definition for referenced signature "'+P+'"');if(I=E[I],typeof I!="function")return!1;T.push(I)}return T}function Ae(v,E,_){const T=te(v),P=new Array(T.length).fill(!1);let I=!0;for(;I;){I=!1;let V=!0;for(let R=0;R<T.length;++R){if(P[R])continue;const k=T[R];if(un(k))T[R]=k.referToSelf.callback(_),T[R].referToSelf=k.referToSelf,P[R]=!0,V=!1;else if(rn(k)){const z=se(k.referTo.references,T,E);z?(T[R]=k.referTo.callback.apply(this,z),T[R].referTo=k.referTo,P[R]=!0,V=!1):I=!0}}if(V&&I)throw new SyntaxError("Circular reference detected in resolving typed.referTo")}return T}function Fe(v){const E=/\bthis(\(|\.signatures\b)/;Object.keys(v).forEach(_=>{const T=v[_];if(E.test(T.toString()))throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.")})}function ye(v,E){if(o.createCount++,Object.keys(E).length===0)throw new SyntaxError("No signatures provided");o.warnAgainstDeprecatedThis&&Fe(E);const _=[],T=[],P={},I=[];let V;for(V in E){if(!Object.prototype.hasOwnProperty.call(E,V))continue;const re=A(V);if(!re)continue;_.forEach(function(Pn){if(ie(Pn,re))throw new TypeError('Conflicting signatures "'+m(Pn)+'" and "'+m(re)+'".')}),_.push(re);const ke=T.length;T.push(E[V]);const Gi=re.map(C);let Ln;for(Ln of Q(Gi)){const Pn=m(Ln);I.push({params:Ln,name:Pn,fn:ke}),Ln.every(Hi=>!Hi.hasConversion)&&(P[Pn]=ke)}}I.sort($);const R=Ae(T,P,On);let k;for(k in P)Object.prototype.hasOwnProperty.call(P,k)&&(P[k]=R[P[k]]);const z=[],oe=new Map;for(k of I)oe.has(k.name)||(k.fn=R[k.fn],z.push(k),oe.set(k.name,k));const le=z[0]&&z[0].params.length<=2&&!y(z[0].params),Be=z[1]&&z[1].params.length<=2&&!y(z[1].params),Ve=z[2]&&z[2].params.length<=2&&!y(z[2].params),$e=z[3]&&z[3].params.length<=2&&!y(z[3].params),Je=z[4]&&z[4].params.length<=2&&!y(z[4].params),Xe=z[5]&&z[5].params.length<=2&&!y(z[5].params),Fn=le&&Be&&Ve&&$e&&Je&&Xe;for(let re=0;re<z.length;++re)z[re].test=b(z[re].params);const kn=le?D(z[0].params[0]):Ze,mi=Be?D(z[1].params[0]):Ze,Di=Ve?D(z[2].params[0]):Ze,vi=$e?D(z[3].params[0]):Ze,yi=Je?D(z[4].params[0]):Ze,wi=Xe?D(z[5].params[0]):Ze,Fi=le?D(z[0].params[1]):Ze,Ei=Be?D(z[1].params[1]):Ze,Ci=Ve?D(z[2].params[1]):Ze,bi=$e?D(z[3].params[1]):Ze,Ai=Je?D(z[4].params[1]):Ze,Bi=Xe?D(z[5].params[1]):Ze;for(let re=0;re<z.length;++re)z[re].implementation=j(z[re].params,z[re].fn);const Ni=le?z[0].implementation:En,_i=Be?z[1].implementation:En,Si=Ve?z[2].implementation:En,Mi=$e?z[3].implementation:En,Ti=Je?z[4].implementation:En,xi=Xe?z[5].implementation:En,Ii=le?z[0].params.length:-1,Oi=Be?z[1].params.length:-1,Pi=Ve?z[2].params.length:-1,zi=$e?z[3].params.length:-1,Ri=Je?z[4].params.length:-1,$i=Xe?z[5].params.length:-1,Ui=Fn?6:0,Vi=z.length,ki=z.map(re=>re.test),Li=z.map(re=>re.implementation),qi=function(){for(let ke=Ui;ke<Vi;ke++)if(ki[ke](arguments))return Li[ke].apply(this,arguments);return o.onMismatch(v,arguments,z)};function On(re,ke){return arguments.length===Ii&&kn(re)&&Fi(ke)?Ni.apply(this,arguments):arguments.length===Oi&&mi(re)&&Ei(ke)?_i.apply(this,arguments):arguments.length===Pi&&Di(re)&&Ci(ke)?Si.apply(this,arguments):arguments.length===zi&&vi(re)&&bi(ke)?Mi.apply(this,arguments):arguments.length===Ri&&yi(re)&&Ai(ke)?Ti.apply(this,arguments):arguments.length===$i&&wi(re)&&Bi(ke)?xi.apply(this,arguments):qi.apply(this,arguments)}try{Object.defineProperty(On,"name",{value:v})}catch{}return On.signatures=P,On._typedFunctionData={signatures:z,signatureMap:oe},On}function he(v,E,_){throw L(v,E,_)}function Re(v){return ue(v,0,v.length-1)}function ae(v){return v[v.length-1]}function ue(v,E,_){return Array.prototype.slice.call(v,E,_)}function He(v,E){for(let _=0;_<v.length;_++)if(E(v[_]))return v[_]}function Ie(v,E){return Array.prototype.concat.apply([],v.map(E))}function ce(){const v=Re(arguments).map(_=>m(A(_))),E=ae(arguments);if(typeof E!="function")throw new TypeError("Callback function expected as last argument");return Me(v,E)}function Me(v,E){return{referTo:{references:v,callback:E}}}function We(v){if(typeof v!="function")throw new TypeError("Callback function expected as first argument");return{referToSelf:{callback:v}}}function rn(v){return v&&typeof v.referTo=="object"&&Array.isArray(v.referTo.references)&&typeof v.referTo.callback=="function"}function un(v){return v&&typeof v.referToSelf=="object"&&typeof v.referToSelf.callback=="function"}function yn(v,E){if(!v)return E;if(E&&E!==v){const _=new Error("Function names do not match (expected: "+v+", actual: "+E+")");throw _.data={actual:E,expected:v},_}return v}function wn(v){let E;for(const _ in v)Object.prototype.hasOwnProperty.call(v,_)&&(p(v[_])||typeof v[_].signature=="string")&&(E=yn(E,v[_].name));return E}function pt(v,E){let _;for(_ in E)if(Object.prototype.hasOwnProperty.call(E,_)){if(_ in v&&E[_]!==v[_]){const T=new Error('Signature "'+_+'" is defined twice');throw T.data={signature:_,sourceFunction:E[_],destFunction:v[_]},T}v[_]=E[_]}}const gi=o;o=function(v){const E=typeof v=="string",_=E?1:0;let T=E?v:"";const P={};for(let I=_;I<arguments.length;++I){const V=arguments[I];let R={},k;if(typeof V=="function"?(k=V.name,typeof V.signature=="string"?R[V.signature]=V:p(V)&&(R=V.signatures)):e(V)&&(R=V,E||(k=wn(V))),Object.keys(R).length===0){const z=new TypeError("Argument to 'typed' at index "+I+" is not a (typed) function, nor an object with signatures as keys and functions as values.");throw z.data={index:I,argument:V},z}E||(T=yn(T,k)),pt(P,R)}return ye(T||"",P)},o.create=Br,o.createCount=gi.createCount,o.onMismatch=he,o.throwMismatchError=he,o.createError=L,o.clear=f,o.clearConversions=a,o.addTypes=l,o._findType=s,o.referTo=ce,o.referToSelf=We,o.convert=c,o.findSignature=g,o.find=d,o.isTypedFunction=p,o.warnAgainstDeprecatedThis=!0,o.addType=function(v,E){let _="any";E!==!1&&i.has("Object")&&(_="Object"),o.addTypes([v],_)};function Rt(v){if(!v||typeof v.from!="string"||typeof v.to!="string"||typeof v.convert!="function")throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");if(v.to===v.from)throw new SyntaxError('Illegal to define conversion from "'+v.from+'" to itself.')}return o.addConversion=function(v){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{override:!1};Rt(v);const _=s(v.to),T=_.conversionsTo.find(P=>P.from===v.from);if(T)if(E&&E.override)o.removeConversion({from:T.from,to:v.to,convert:T.convert});else throw new Error('There is already a conversion from "'+v.from+'" to "'+_.name+'"');_.conversionsTo.push({from:v.from,convert:v.convert,index:u++})},o.addConversions=function(v,E){v.forEach(_=>o.addConversion(_,E))},o.removeConversion=function(v){Rt(v);const E=s(v.to),_=He(E.conversionsTo,P=>P.from===v.from);if(!_)throw new Error("Attempt to remove nonexistent conversion from "+v.from+" to "+v.to);if(_.convert!==v.convert)throw new Error("Conversion to remove does not match existing conversion");const T=E.conversionsTo.indexOf(_);E.conversionsTo.splice(T,1)},o.resolve=function(v,E){if(!p(v))throw new TypeError(kt);const _=v._typedFunctionData.signatures;for(let T=0;T<_.length;++T)if(_[T].test(E))return _[T];return null},o}const Kn=Br();function ne(e,n,t,i){function r(u){var o=Ku(u,n.map(ro));return no(e,n,u),t(o)}return r.isFactory=!0,r.fn=e,r.dependencies=n.slice().sort(),i&&(r.meta=i),r}function no(e,n,t){var i=n.filter(u=>!to(u)).every(u=>t[u]!==void 0);if(!i){var r=n.filter(u=>t[u]===void 0);throw new Error('Cannot create function "'.concat(e,'", ')+"some dependencies are missing: ".concat(r.map(u=>'"'.concat(u,'"')).join(", "),"."))}}function to(e){return e&&e[0]==="?"}function ro(e){return e&&e[0]==="?"?e.slice(1):e}function ge(e){return typeof e=="boolean"?!0:isFinite(e)?e===Math.round(e):!1}function gt(e,n,t){var i={2:"0b",8:"0o",16:"0x"},r=i[n],u="";if(t){if(t<1)throw new Error("size must be in greater than 0");if(!ge(t))throw new Error("size must be an integer");if(e>2**(t-1)-1||e<-(2**(t-1)))throw new Error("Value must be in range [-2^".concat(t-1,", 2^").concat(t-1,"-1]"));if(!ge(e))throw new Error("Value must be an integer");e<0&&(e=e+2**t),u="i".concat(t)}var o="";return e<0&&(e=-e,o="-"),"".concat(o).concat(r).concat(e.toString(n)).concat(u)}function yt(e,n){if(typeof n=="function")return n(e);if(e===1/0)return"Infinity";if(e===-1/0)return"-Infinity";if(isNaN(e))return"NaN";var{notation:t,precision:i,wordSize:r}=Nr(n);switch(t){case"fixed":return _r(e,i);case"exponential":return Sr(e,i);case"engineering":return io(e,i);case"bin":return gt(e,2,r);case"oct":return gt(e,8,r);case"hex":return gt(e,16,r);case"auto":return uo(e,i,n).replace(/((\.\d*?)(0+))($|e)/,function(){var u=arguments[2],o=arguments[4];return u!=="."?u+o:o});default:throw new Error('Unknown notation "'+t+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function Nr(e){var n="auto",t,i;if(e!==void 0)if(pe(e))t=e;else if(be(e))t=e.toNumber();else if(St(e))e.precision!==void 0&&(t=Lt(e.precision,()=>{throw new Error('Option "precision" must be a number or BigNumber')})),e.wordSize!==void 0&&(i=Lt(e.wordSize,()=>{throw new Error('Option "wordSize" must be a number or BigNumber')})),e.notation&&(n=e.notation);else throw new Error("Unsupported type of options, number, BigNumber, or object expected");return{notation:n,precision:t,wordSize:i}}function Un(e){var n=String(e).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);if(!n)throw new SyntaxError("Invalid number "+e);var t=n[1],i=n[2],r=parseFloat(n[4]||"0"),u=i.indexOf(".");r+=u!==-1?u-1:i.length-1;var o=i.replace(".","").replace(/^0*/,function(s){return r-=s.length,""}).replace(/0*$/,"").split("").map(function(s){return parseInt(s)});return o.length===0&&(o.push(0),r++),{sign:t,coefficients:o,exponent:r}}function io(e,n){if(isNaN(e)||!isFinite(e))return String(e);var t=Un(e),i=ut(t,n),r=i.exponent,u=i.coefficients,o=r%3===0?r:r<0?r-3-r%3:r-r%3;if(pe(n))for(;n>u.length||r-o+1>u.length;)u.push(0);else for(var s=Math.abs(r-o)-(u.length-1),l=0;l<s;l++)u.push(0);for(var f=Math.abs(r-o),a=1;f>0;)a++,f--;var h=u.slice(a).join(""),p=pe(n)&&h.length||h.match(/[1-9]/)?"."+h:"",g=u.slice(0,a).join("")+p+"e"+(r>=0?"+":"")+o.toString();return i.sign+g}function _r(e,n){if(isNaN(e)||!isFinite(e))return String(e);var t=Un(e),i=typeof n=="number"?ut(t,t.exponent+1+n):t,r=i.coefficients,u=i.exponent+1,o=u+(n||0);return r.length<o&&(r=r.concat(_n(o-r.length))),u<0&&(r=_n(-u+1).concat(r),u=1),u<r.length&&r.splice(u,0,u===0?"0.":"."),i.sign+r.join("")}function Sr(e,n){if(isNaN(e)||!isFinite(e))return String(e);var t=Un(e),i=n?ut(t,n):t,r=i.coefficients,u=i.exponent;r.length<n&&(r=r.concat(_n(n-r.length)));var o=r.shift();return i.sign+o+(r.length>0?"."+r.join(""):"")+"e"+(u>=0?"+":"")+u}function uo(e,n,t){if(isNaN(e)||!isFinite(e))return String(e);var i=qt(t==null?void 0:t.lowerExp,-3),r=qt(t==null?void 0:t.upperExp,5),u=Un(e),o=n?ut(u,n):u;if(o.exponent<i||o.exponent>=r)return Sr(e,n);var s=o.coefficients,l=o.exponent;s.length<n&&(s=s.concat(_n(n-s.length))),s=s.concat(_n(l-s.length+1+(s.length<n?n-s.length:0))),s=_n(-l).concat(s);var f=l>0?l:0;return f<s.length-1&&s.splice(f+1,0,"."),o.sign+s.join("")}function ut(e,n){for(var t={sign:e.sign,coefficients:e.coefficients,exponent:e.exponent},i=t.coefficients;n<=0;)i.unshift(0),t.exponent++,n++;if(i.length>n){var r=i.splice(n,i.length-n);if(r[0]>=5){var u=n-1;for(i[u]++;i[u]===10;)i.pop(),u===0&&(i.unshift(0),t.exponent++,u++),u--,i[u]++}}return t}function _n(e){for(var n=[],t=0;t<e;t++)n.push(0);return n}function oo(e){return e.toExponential().replace(/e.*$/,"").replace(/^0\.?0*|\./,"").length}function Mn(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1e-8,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;if(t<=0)throw new Error("Relative tolerance must be greater than 0");if(i<0)throw new Error("Absolute tolerance must be at least 0");return isNaN(e)||isNaN(n)?!1:!isFinite(e)||!isFinite(n)?e===n:e===n?!0:Math.abs(e-n)<=Math.max(t*Math.max(Math.abs(e),Math.abs(n)),i)}function Lt(e,n){if(pe(e))return e;if(be(e))return e.toNumber();n()}function qt(e,n){return pe(e)?e:be(e)?e.toNumber():n}var Mr=function(){return Mr=Kn.create,Kn},so=["?BigNumber","?Complex","?DenseMatrix","?Fraction"],ao=ne("typed",so,function(n){var{BigNumber:t,Complex:i,DenseMatrix:r,Fraction:u}=n,o=Mr();return o.clear(),o.addTypes([{name:"number",test:pe},{name:"Complex",test:Cr},{name:"BigNumber",test:be},{name:"bigint",test:Fu},{name:"Fraction",test:br},{name:"Unit",test:Ar},{name:"identifier",test:s=>en&&/^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(s)},{name:"string",test:en},{name:"Chain",test:Ju},{name:"Array",test:_e},{name:"Matrix",test:Ce},{name:"DenseMatrix",test:Eu},{name:"SparseMatrix",test:Cu},{name:"Range",test:bu},{name:"Index",test:_t},{name:"boolean",test:Au},{name:"ResultSet",test:Bu},{name:"Help",test:Nu},{name:"function",test:_u},{name:"Date",test:Su},{name:"RegExp",test:Mu},{name:"null",test:xu},{name:"undefined",test:Iu},{name:"AccessorNode",test:Ou},{name:"ArrayNode",test:Pu},{name:"AssignmentNode",test:zu},{name:"BlockNode",test:Ru},{name:"ConditionalNode",test:$u},{name:"ConstantNode",test:Uu},{name:"FunctionNode",test:ku},{name:"FunctionAssignmentNode",test:Vu},{name:"IndexNode",test:Lu},{name:"Node",test:qu},{name:"ObjectNode",test:Gu},{name:"OperatorNode",test:Hu},{name:"ParenthesisNode",test:Wu},{name:"RangeNode",test:Zu},{name:"RelationalNode",test:ju},{name:"SymbolNode",test:Yu},{name:"Map",test:Tu},{name:"Object",test:St}]),o.addConversions([{from:"number",to:"BigNumber",convert:function(l){if(t||qn(l),oo(l)>15)throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: "+l+"). Use function bignumber(x) to convert to BigNumber.");return new t(l)}},{from:"number",to:"Complex",convert:function(l){return i||Gn(l),new i(l,0)}},{from:"BigNumber",to:"Complex",convert:function(l){return i||Gn(l),new i(l.toNumber(),0)}},{from:"bigint",to:"number",convert:function(l){if(l>Number.MAX_SAFE_INTEGER)throw new TypeError("Cannot implicitly convert bigint to number: value exceeds the max safe integer value (value: "+l+")");return Number(l)}},{from:"bigint",to:"BigNumber",convert:function(l){return t||qn(l),new t(l.toString())}},{from:"bigint",to:"Fraction",convert:function(l){return u||Hn(l),new u(l)}},{from:"Fraction",to:"BigNumber",convert:function(l){throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.")}},{from:"Fraction",to:"Complex",convert:function(l){return i||Gn(l),new i(l.valueOf(),0)}},{from:"number",to:"Fraction",convert:function(l){u||Hn(l);var f=new u(l);if(f.valueOf()!==l)throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: "+l+"). Use function fraction(x) to convert to Fraction.");return f}},{from:"string",to:"number",convert:function(l){var f=Number(l);if(isNaN(f))throw new Error('Cannot convert "'+l+'" to a number');return f}},{from:"string",to:"BigNumber",convert:function(l){t||qn(l);try{return new t(l)}catch{throw new Error('Cannot convert "'+l+'" to BigNumber')}}},{from:"string",to:"bigint",convert:function(l){try{return BigInt(l)}catch{throw new Error('Cannot convert "'+l+'" to BigInt')}}},{from:"string",to:"Fraction",convert:function(l){u||Hn(l);try{return new u(l)}catch{throw new Error('Cannot convert "'+l+'" to Fraction')}}},{from:"string",to:"Complex",convert:function(l){i||Gn(l);try{return new i(l)}catch{throw new Error('Cannot convert "'+l+'" to Complex')}}},{from:"boolean",to:"number",convert:function(l){return+l}},{from:"boolean",to:"BigNumber",convert:function(l){return t||qn(l),new t(+l)}},{from:"boolean",to:"bigint",convert:function(l){return BigInt(+l)}},{from:"boolean",to:"Fraction",convert:function(l){return u||Hn(l),new u(+l)}},{from:"boolean",to:"string",convert:function(l){return String(l)}},{from:"Array",to:"Matrix",convert:function(l){return r||co(),new r(l)}},{from:"Matrix",to:"Array",convert:function(l){return l.valueOf()}}]),o.onMismatch=(s,l,f)=>{var a=o.createError(s,l,f);if(["wrongType","mismatch"].includes(a.data.category)&&l.length===1&&Jn(l[0])&&f.some(p=>!p.params.includes(","))){var h=new TypeError("Function '".concat(s,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(s,")'."));throw h.data=a.data,h}throw a},o.onMismatch=(s,l,f)=>{var a=o.createError(s,l,f);if(["wrongType","mismatch"].includes(a.data.category)&&l.length===1&&Jn(l[0])&&f.some(p=>!p.params.includes(","))){var h=new TypeError("Function '".concat(s,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(s,")'."));throw h.data=a.data,h}throw a},o});function qn(e){throw new Error("Cannot convert value ".concat(e," into a BigNumber: no class 'BigNumber' provided"))}function Gn(e){throw new Error("Cannot convert value ".concat(e," into a Complex number: no class 'Complex' provided"))}function co(){throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided")}function Hn(e){throw new Error("Cannot convert value ".concat(e," into a Fraction, no class 'Fraction' provided."))}/*!
 *  decimal.js v10.6.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var Bn=9e15,gn=1e9,wt="0123456789abcdef",Qn="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",et="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",Ft={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-Bn,maxE:Bn,crypto:!1},Tr,sn,K=!0,ot="[DecimalError] ",pn=ot+"Invalid argument: ",xr=ot+"Precision limit exceeded",Ir=ot+"crypto unavailable",Or="[object Decimal]",ze=Math.floor,Se=Math.pow,fo=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,lo=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,ho=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,Pr=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Qe=1e7,J=7,po=9007199254740991,go=Qn.length-1,Et=et.length-1,O={toStringTag:Or};O.absoluteValue=O.abs=function(){var e=new this.constructor(this);return e.s<0&&(e.s=1),H(e)};O.ceil=function(){return H(new this.constructor(this),this.e+1,2)};O.clampedTo=O.clamp=function(e,n){var t,i=this,r=i.constructor;if(e=new r(e),n=new r(n),!e.s||!n.s)return new r(NaN);if(e.gt(n))throw Error(pn+n);return t=i.cmp(e),t<0?e:i.cmp(n)>0?n:new r(i)};O.comparedTo=O.cmp=function(e){var n,t,i,r,u=this,o=u.d,s=(e=new u.constructor(e)).d,l=u.s,f=e.s;if(!o||!s)return!l||!f?NaN:l!==f?l:o===s?0:!o^l<0?1:-1;if(!o[0]||!s[0])return o[0]?l:s[0]?-f:0;if(l!==f)return l;if(u.e!==e.e)return u.e>e.e^l<0?1:-1;for(i=o.length,r=s.length,n=0,t=i<r?i:r;n<t;++n)if(o[n]!==s[n])return o[n]>s[n]^l<0?1:-1;return i===r?0:i>r^l<0?1:-1};O.cosine=O.cos=function(){var e,n,t=this,i=t.constructor;return t.d?t.d[0]?(e=i.precision,n=i.rounding,i.precision=e+Math.max(t.e,t.sd())+J,i.rounding=1,t=mo(i,Vr(i,t)),i.precision=e,i.rounding=n,H(sn==2||sn==3?t.neg():t,e,n,!0)):new i(1):new i(NaN)};O.cubeRoot=O.cbrt=function(){var e,n,t,i,r,u,o,s,l,f,a=this,h=a.constructor;if(!a.isFinite()||a.isZero())return new h(a);for(K=!1,u=a.s*Se(a.s*a,1/3),!u||Math.abs(u)==1/0?(t=Oe(a.d),e=a.e,(u=(e-t.length+1)%3)&&(t+=u==1||u==-2?"0":"00"),u=Se(t,1/3),e=ze((e+1)/3)-(e%3==(e<0?-1:2)),u==1/0?t="5e"+e:(t=u.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),i=new h(t),i.s=a.s):i=new h(u.toString()),o=(e=h.precision)+3;;)if(s=i,l=s.times(s).times(s),f=l.plus(a),i=fe(f.plus(a).times(s),f.plus(l),o+2,1),Oe(s.d).slice(0,o)===(t=Oe(i.d)).slice(0,o))if(t=t.slice(o-3,o+1),t=="9999"||!r&&t=="4999"){if(!r&&(H(s,e+1,0),s.times(s).times(s).eq(a))){i=s;break}o+=4,r=1}else{(!+t||!+t.slice(1)&&t.charAt(0)=="5")&&(H(i,e+1,1),n=!i.times(i).times(i).eq(a));break}return K=!0,H(i,e,h.rounding,n)};O.decimalPlaces=O.dp=function(){var e,n=this.d,t=NaN;if(n){if(e=n.length-1,t=(e-ze(this.e/J))*J,e=n[e],e)for(;e%10==0;e/=10)t--;t<0&&(t=0)}return t};O.dividedBy=O.div=function(e){return fe(this,new this.constructor(e))};O.dividedToIntegerBy=O.divToInt=function(e){var n=this,t=n.constructor;return H(fe(n,new t(e),0,1,1),t.precision,t.rounding)};O.equals=O.eq=function(e){return this.cmp(e)===0};O.floor=function(){return H(new this.constructor(this),this.e+1,3)};O.greaterThan=O.gt=function(e){return this.cmp(e)>0};O.greaterThanOrEqualTo=O.gte=function(e){var n=this.cmp(e);return n==1||n===0};O.hyperbolicCosine=O.cosh=function(){var e,n,t,i,r,u=this,o=u.constructor,s=new o(1);if(!u.isFinite())return new o(u.s?1/0:NaN);if(u.isZero())return s;t=o.precision,i=o.rounding,o.precision=t+Math.max(u.e,u.sd())+4,o.rounding=1,r=u.d.length,r<32?(e=Math.ceil(r/3),n=(1/at(4,e)).toString()):(e=16,n="2.3283064365386962890625e-10"),u=Tn(o,1,u.times(n),new o(1),!0);for(var l,f=e,a=new o(8);f--;)l=u.times(u),u=s.minus(l.times(a.minus(l.times(a))));return H(u,o.precision=t,o.rounding=i,!0)};O.hyperbolicSine=O.sinh=function(){var e,n,t,i,r=this,u=r.constructor;if(!r.isFinite()||r.isZero())return new u(r);if(n=u.precision,t=u.rounding,u.precision=n+Math.max(r.e,r.sd())+4,u.rounding=1,i=r.d.length,i<3)r=Tn(u,2,r,r,!0);else{e=1.4*Math.sqrt(i),e=e>16?16:e|0,r=r.times(1/at(5,e)),r=Tn(u,2,r,r,!0);for(var o,s=new u(5),l=new u(16),f=new u(20);e--;)o=r.times(r),r=r.times(s.plus(o.times(l.times(o).plus(f))))}return u.precision=n,u.rounding=t,H(r,n,t,!0)};O.hyperbolicTangent=O.tanh=function(){var e,n,t=this,i=t.constructor;return t.isFinite()?t.isZero()?new i(t):(e=i.precision,n=i.rounding,i.precision=e+7,i.rounding=1,fe(t.sinh(),t.cosh(),i.precision=e,i.rounding=n)):new i(t.s)};O.inverseCosine=O.acos=function(){var e=this,n=e.constructor,t=e.abs().cmp(1),i=n.precision,r=n.rounding;return t!==-1?t===0?e.isNeg()?nn(n,i,r):new n(0):new n(NaN):e.isZero()?nn(n,i+4,r).times(.5):(n.precision=i+6,n.rounding=1,e=new n(1).minus(e).div(e.plus(1)).sqrt().atan(),n.precision=i,n.rounding=r,e.times(2))};O.inverseHyperbolicCosine=O.acosh=function(){var e,n,t=this,i=t.constructor;return t.lte(1)?new i(t.eq(1)?0:NaN):t.isFinite()?(e=i.precision,n=i.rounding,i.precision=e+Math.max(Math.abs(t.e),t.sd())+4,i.rounding=1,K=!1,t=t.times(t).minus(1).sqrt().plus(t),K=!0,i.precision=e,i.rounding=n,t.ln()):new i(t)};O.inverseHyperbolicSine=O.asinh=function(){var e,n,t=this,i=t.constructor;return!t.isFinite()||t.isZero()?new i(t):(e=i.precision,n=i.rounding,i.precision=e+2*Math.max(Math.abs(t.e),t.sd())+6,i.rounding=1,K=!1,t=t.times(t).plus(1).sqrt().plus(t),K=!0,i.precision=e,i.rounding=n,t.ln())};O.inverseHyperbolicTangent=O.atanh=function(){var e,n,t,i,r=this,u=r.constructor;return r.isFinite()?r.e>=0?new u(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(e=u.precision,n=u.rounding,i=r.sd(),Math.max(i,e)<2*-r.e-1?H(new u(r),e,n,!0):(u.precision=t=i-r.e,r=fe(r.plus(1),new u(1).minus(r),t+e,1),u.precision=e+4,u.rounding=1,r=r.ln(),u.precision=e,u.rounding=n,r.times(.5))):new u(NaN)};O.inverseSine=O.asin=function(){var e,n,t,i,r=this,u=r.constructor;return r.isZero()?new u(r):(n=r.abs().cmp(1),t=u.precision,i=u.rounding,n!==-1?n===0?(e=nn(u,t+4,i).times(.5),e.s=r.s,e):new u(NaN):(u.precision=t+6,u.rounding=1,r=r.div(new u(1).minus(r.times(r)).sqrt().plus(1)).atan(),u.precision=t,u.rounding=i,r.times(2)))};O.inverseTangent=O.atan=function(){var e,n,t,i,r,u,o,s,l,f=this,a=f.constructor,h=a.precision,p=a.rounding;if(f.isFinite()){if(f.isZero())return new a(f);if(f.abs().eq(1)&&h+4<=Et)return o=nn(a,h+4,p).times(.25),o.s=f.s,o}else{if(!f.s)return new a(NaN);if(h+4<=Et)return o=nn(a,h+4,p).times(.5),o.s=f.s,o}for(a.precision=s=h+10,a.rounding=1,t=Math.min(28,s/J+2|0),e=t;e;--e)f=f.div(f.times(f).plus(1).sqrt().plus(1));for(K=!1,n=Math.ceil(s/J),i=1,l=f.times(f),o=new a(f),r=f;e!==-1;)if(r=r.times(l),u=o.minus(r.div(i+=2)),r=r.times(l),o=u.plus(r.div(i+=2)),o.d[n]!==void 0)for(e=n;o.d[e]===u.d[e]&&e--;);return t&&(o=o.times(2<<t-1)),K=!0,H(o,a.precision=h,a.rounding=p,!0)};O.isFinite=function(){return!!this.d};O.isInteger=O.isInt=function(){return!!this.d&&ze(this.e/J)>this.d.length-2};O.isNaN=function(){return!this.s};O.isNegative=O.isNeg=function(){return this.s<0};O.isPositive=O.isPos=function(){return this.s>0};O.isZero=function(){return!!this.d&&this.d[0]===0};O.lessThan=O.lt=function(e){return this.cmp(e)<0};O.lessThanOrEqualTo=O.lte=function(e){return this.cmp(e)<1};O.logarithm=O.log=function(e){var n,t,i,r,u,o,s,l,f=this,a=f.constructor,h=a.precision,p=a.rounding,g=5;if(e==null)e=new a(10),n=!0;else{if(e=new a(e),t=e.d,e.s<0||!t||!t[0]||e.eq(1))return new a(NaN);n=e.eq(10)}if(t=f.d,f.s<0||!t||!t[0]||f.eq(1))return new a(t&&!t[0]?-1/0:f.s!=1?NaN:t?0:1/0);if(n)if(t.length>1)u=!0;else{for(r=t[0];r%10===0;)r/=10;u=r!==1}if(K=!1,s=h+g,o=ln(f,s),i=n?nt(a,s+10):ln(e,s),l=fe(o,i,s,1),$n(l.d,r=h,p))do if(s+=10,o=ln(f,s),i=n?nt(a,s+10):ln(e,s),l=fe(o,i,s,1),!u){+Oe(l.d).slice(r+1,r+15)+1==1e14&&(l=H(l,h+1,0));break}while($n(l.d,r+=10,p));return K=!0,H(l,h,p)};O.minus=O.sub=function(e){var n,t,i,r,u,o,s,l,f,a,h,p,g=this,d=g.constructor;if(e=new d(e),!g.d||!e.d)return!g.s||!e.s?e=new d(NaN):g.d?e.s=-e.s:e=new d(e.d||g.s!==e.s?g:NaN),e;if(g.s!=e.s)return e.s=-e.s,g.plus(e);if(f=g.d,p=e.d,s=d.precision,l=d.rounding,!f[0]||!p[0]){if(p[0])e.s=-e.s;else if(f[0])e=new d(g);else return new d(l===3?-0:0);return K?H(e,s,l):e}if(t=ze(e.e/J),a=ze(g.e/J),f=f.slice(),u=a-t,u){for(h=u<0,h?(n=f,u=-u,o=p.length):(n=p,t=a,o=f.length),i=Math.max(Math.ceil(s/J),o)+2,u>i&&(u=i,n.length=1),n.reverse(),i=u;i--;)n.push(0);n.reverse()}else{for(i=f.length,o=p.length,h=i<o,h&&(o=i),i=0;i<o;i++)if(f[i]!=p[i]){h=f[i]<p[i];break}u=0}for(h&&(n=f,f=p,p=n,e.s=-e.s),o=f.length,i=p.length-o;i>0;--i)f[o++]=0;for(i=p.length;i>u;){if(f[--i]<p[i]){for(r=i;r&&f[--r]===0;)f[r]=Qe-1;--f[r],f[i]+=Qe}f[i]-=p[i]}for(;f[--o]===0;)f.pop();for(;f[0]===0;f.shift())--t;return f[0]?(e.d=f,e.e=st(f,t),K?H(e,s,l):e):new d(l===3?-0:0)};O.modulo=O.mod=function(e){var n,t=this,i=t.constructor;return e=new i(e),!t.d||!e.s||e.d&&!e.d[0]?new i(NaN):!e.d||t.d&&!t.d[0]?H(new i(t),i.precision,i.rounding):(K=!1,i.modulo==9?(n=fe(t,e.abs(),0,3,1),n.s*=e.s):n=fe(t,e,0,i.modulo,1),n=n.times(e),K=!0,t.minus(n))};O.naturalExponential=O.exp=function(){return Ct(this)};O.naturalLogarithm=O.ln=function(){return ln(this)};O.negated=O.neg=function(){var e=new this.constructor(this);return e.s=-e.s,H(e)};O.plus=O.add=function(e){var n,t,i,r,u,o,s,l,f,a,h=this,p=h.constructor;if(e=new p(e),!h.d||!e.d)return!h.s||!e.s?e=new p(NaN):h.d||(e=new p(e.d||h.s===e.s?h:NaN)),e;if(h.s!=e.s)return e.s=-e.s,h.minus(e);if(f=h.d,a=e.d,s=p.precision,l=p.rounding,!f[0]||!a[0])return a[0]||(e=new p(h)),K?H(e,s,l):e;if(u=ze(h.e/J),i=ze(e.e/J),f=f.slice(),r=u-i,r){for(r<0?(t=f,r=-r,o=a.length):(t=a,i=u,o=f.length),u=Math.ceil(s/J),o=u>o?u+1:o+1,r>o&&(r=o,t.length=1),t.reverse();r--;)t.push(0);t.reverse()}for(o=f.length,r=a.length,o-r<0&&(r=o,t=a,a=f,f=t),n=0;r;)n=(f[--r]=f[r]+a[r]+n)/Qe|0,f[r]%=Qe;for(n&&(f.unshift(n),++i),o=f.length;f[--o]==0;)f.pop();return e.d=f,e.e=st(f,i),K?H(e,s,l):e};O.precision=O.sd=function(e){var n,t=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(pn+e);return t.d?(n=zr(t.d),e&&t.e+1>n&&(n=t.e+1)):n=NaN,n};O.round=function(){var e=this,n=e.constructor;return H(new n(e),e.e+1,n.rounding)};O.sine=O.sin=function(){var e,n,t=this,i=t.constructor;return t.isFinite()?t.isZero()?new i(t):(e=i.precision,n=i.rounding,i.precision=e+Math.max(t.e,t.sd())+J,i.rounding=1,t=vo(i,Vr(i,t)),i.precision=e,i.rounding=n,H(sn>2?t.neg():t,e,n,!0)):new i(NaN)};O.squareRoot=O.sqrt=function(){var e,n,t,i,r,u,o=this,s=o.d,l=o.e,f=o.s,a=o.constructor;if(f!==1||!s||!s[0])return new a(!f||f<0&&(!s||s[0])?NaN:s?o:1/0);for(K=!1,f=Math.sqrt(+o),f==0||f==1/0?(n=Oe(s),(n.length+l)%2==0&&(n+="0"),f=Math.sqrt(n),l=ze((l+1)/2)-(l<0||l%2),f==1/0?n="5e"+l:(n=f.toExponential(),n=n.slice(0,n.indexOf("e")+1)+l),i=new a(n)):i=new a(f.toString()),t=(l=a.precision)+3;;)if(u=i,i=u.plus(fe(o,u,t+2,1)).times(.5),Oe(u.d).slice(0,t)===(n=Oe(i.d)).slice(0,t))if(n=n.slice(t-3,t+1),n=="9999"||!r&&n=="4999"){if(!r&&(H(u,l+1,0),u.times(u).eq(o))){i=u;break}t+=4,r=1}else{(!+n||!+n.slice(1)&&n.charAt(0)=="5")&&(H(i,l+1,1),e=!i.times(i).eq(o));break}return K=!0,H(i,l,a.rounding,e)};O.tangent=O.tan=function(){var e,n,t=this,i=t.constructor;return t.isFinite()?t.isZero()?new i(t):(e=i.precision,n=i.rounding,i.precision=e+10,i.rounding=1,t=t.sin(),t.s=1,t=fe(t,new i(1).minus(t.times(t)).sqrt(),e+10,0),i.precision=e,i.rounding=n,H(sn==2||sn==4?t.neg():t,e,n,!0)):new i(NaN)};O.times=O.mul=function(e){var n,t,i,r,u,o,s,l,f,a=this,h=a.constructor,p=a.d,g=(e=new h(e)).d;if(e.s*=a.s,!p||!p[0]||!g||!g[0])return new h(!e.s||p&&!p[0]&&!g||g&&!g[0]&&!p?NaN:!p||!g?e.s/0:e.s*0);for(t=ze(a.e/J)+ze(e.e/J),l=p.length,f=g.length,l<f&&(u=p,p=g,g=u,o=l,l=f,f=o),u=[],o=l+f,i=o;i--;)u.push(0);for(i=f;--i>=0;){for(n=0,r=l+i;r>i;)s=u[r]+g[i]*p[r-i-1]+n,u[r--]=s%Qe|0,n=s/Qe|0;u[r]=(u[r]+n)%Qe|0}for(;!u[--o];)u.pop();return n?++t:u.shift(),e.d=u,e.e=st(u,t),K?H(e,h.precision,h.rounding):e};O.toBinary=function(e,n){return Mt(this,2,e,n)};O.toDecimalPlaces=O.toDP=function(e,n){var t=this,i=t.constructor;return t=new i(t),e===void 0?t:(qe(e,0,gn),n===void 0?n=i.rounding:qe(n,0,8),H(t,e+t.e+1,n))};O.toExponential=function(e,n){var t,i=this,r=i.constructor;return e===void 0?t=tn(i,!0):(qe(e,0,gn),n===void 0?n=r.rounding:qe(n,0,8),i=H(new r(i),e+1,n),t=tn(i,!0,e+1)),i.isNeg()&&!i.isZero()?"-"+t:t};O.toFixed=function(e,n){var t,i,r=this,u=r.constructor;return e===void 0?t=tn(r):(qe(e,0,gn),n===void 0?n=u.rounding:qe(n,0,8),i=H(new u(r),e+r.e+1,n),t=tn(i,!1,e+i.e+1)),r.isNeg()&&!r.isZero()?"-"+t:t};O.toFraction=function(e){var n,t,i,r,u,o,s,l,f,a,h,p,g=this,d=g.d,c=g.constructor;if(!d)return new c(g);if(f=t=new c(1),i=l=new c(0),n=new c(i),u=n.e=zr(d)-g.e-1,o=u%J,n.d[0]=Se(10,o<0?J+o:o),e==null)e=u>0?n:f;else{if(s=new c(e),!s.isInt()||s.lt(f))throw Error(pn+s);e=s.gt(n)?u>0?n:f:s}for(K=!1,s=new c(Oe(d)),a=c.precision,c.precision=u=d.length*J*2;h=fe(s,n,0,1,1),r=t.plus(h.times(i)),r.cmp(e)!=1;)t=i,i=r,r=f,f=l.plus(h.times(r)),l=r,r=n,n=s.minus(h.times(r)),s=r;return r=fe(e.minus(t),i,0,1,1),l=l.plus(r.times(f)),t=t.plus(r.times(i)),l.s=f.s=g.s,p=fe(f,i,u,1).minus(g).abs().cmp(fe(l,t,u,1).minus(g).abs())<1?[f,i]:[l,t],c.precision=a,K=!0,p};O.toHexadecimal=O.toHex=function(e,n){return Mt(this,16,e,n)};O.toNearest=function(e,n){var t=this,i=t.constructor;if(t=new i(t),e==null){if(!t.d)return t;e=new i(1),n=i.rounding}else{if(e=new i(e),n===void 0?n=i.rounding:qe(n,0,8),!t.d)return e.s?t:e;if(!e.d)return e.s&&(e.s=t.s),e}return e.d[0]?(K=!1,t=fe(t,e,0,n,1).times(e),K=!0,H(t)):(e.s=t.s,t=e),t};O.toNumber=function(){return+this};O.toOctal=function(e,n){return Mt(this,8,e,n)};O.toPower=O.pow=function(e){var n,t,i,r,u,o,s=this,l=s.constructor,f=+(e=new l(e));if(!s.d||!e.d||!s.d[0]||!e.d[0])return new l(Se(+s,f));if(s=new l(s),s.eq(1))return s;if(i=l.precision,u=l.rounding,e.eq(1))return H(s,i,u);if(n=ze(e.e/J),n>=e.d.length-1&&(t=f<0?-f:f)<=po)return r=Rr(l,s,t,i),e.s<0?new l(1).div(r):H(r,i,u);if(o=s.s,o<0){if(n<e.d.length-1)return new l(NaN);if(e.d[n]&1||(o=1),s.e==0&&s.d[0]==1&&s.d.length==1)return s.s=o,s}return t=Se(+s,f),n=t==0||!isFinite(t)?ze(f*(Math.log("0."+Oe(s.d))/Math.LN10+s.e+1)):new l(t+"").e,n>l.maxE+1||n<l.minE-1?new l(n>0?o/0:0):(K=!1,l.rounding=s.s=1,t=Math.min(12,(n+"").length),r=Ct(e.times(ln(s,i+t)),i),r.d&&(r=H(r,i+5,1),$n(r.d,i,u)&&(n=i+10,r=H(Ct(e.times(ln(s,n+t)),n),n+5,1),+Oe(r.d).slice(i+1,i+15)+1==1e14&&(r=H(r,i+1,0)))),r.s=o,K=!0,l.rounding=u,H(r,i,u))};O.toPrecision=function(e,n){var t,i=this,r=i.constructor;return e===void 0?t=tn(i,i.e<=r.toExpNeg||i.e>=r.toExpPos):(qe(e,1,gn),n===void 0?n=r.rounding:qe(n,0,8),i=H(new r(i),e,n),t=tn(i,e<=i.e||i.e<=r.toExpNeg,e)),i.isNeg()&&!i.isZero()?"-"+t:t};O.toSignificantDigits=O.toSD=function(e,n){var t=this,i=t.constructor;return e===void 0?(e=i.precision,n=i.rounding):(qe(e,1,gn),n===void 0?n=i.rounding:qe(n,0,8)),H(new i(t),e,n)};O.toString=function(){var e=this,n=e.constructor,t=tn(e,e.e<=n.toExpNeg||e.e>=n.toExpPos);return e.isNeg()&&!e.isZero()?"-"+t:t};O.truncated=O.trunc=function(){return H(new this.constructor(this),this.e+1,1)};O.valueOf=O.toJSON=function(){var e=this,n=e.constructor,t=tn(e,e.e<=n.toExpNeg||e.e>=n.toExpPos);return e.isNeg()?"-"+t:t};function Oe(e){var n,t,i,r=e.length-1,u="",o=e[0];if(r>0){for(u+=o,n=1;n<r;n++)i=e[n]+"",t=J-i.length,t&&(u+=fn(t)),u+=i;o=e[n],i=o+"",t=J-i.length,t&&(u+=fn(t))}else if(o===0)return"0";for(;o%10===0;)o/=10;return u+o}function qe(e,n,t){if(e!==~~e||e<n||e>t)throw Error(pn+e)}function $n(e,n,t,i){var r,u,o,s;for(u=e[0];u>=10;u/=10)--n;return--n<0?(n+=J,r=0):(r=Math.ceil((n+1)/J),n%=J),u=Se(10,J-n),s=e[r]%u|0,i==null?n<3?(n==0?s=s/100|0:n==1&&(s=s/10|0),o=t<4&&s==99999||t>3&&s==49999||s==5e4||s==0):o=(t<4&&s+1==u||t>3&&s+1==u/2)&&(e[r+1]/u/100|0)==Se(10,n-2)-1||(s==u/2||s==0)&&(e[r+1]/u/100|0)==0:n<4?(n==0?s=s/1e3|0:n==1?s=s/100|0:n==2&&(s=s/10|0),o=(i||t<4)&&s==9999||!i&&t>3&&s==4999):o=((i||t<4)&&s+1==u||!i&&t>3&&s+1==u/2)&&(e[r+1]/u/1e3|0)==Se(10,n-3)-1,o}function Zn(e,n,t){for(var i,r=[0],u,o=0,s=e.length;o<s;){for(u=r.length;u--;)r[u]*=n;for(r[0]+=wt.indexOf(e.charAt(o++)),i=0;i<r.length;i++)r[i]>t-1&&(r[i+1]===void 0&&(r[i+1]=0),r[i+1]+=r[i]/t|0,r[i]%=t)}return r.reverse()}function mo(e,n){var t,i,r;if(n.isZero())return n;i=n.d.length,i<32?(t=Math.ceil(i/3),r=(1/at(4,t)).toString()):(t=16,r="2.3283064365386962890625e-10"),e.precision+=t,n=Tn(e,1,n.times(r),new e(1));for(var u=t;u--;){var o=n.times(n);n=o.times(o).minus(o).times(8).plus(1)}return e.precision-=t,n}var fe=function(){function e(i,r,u){var o,s=0,l=i.length;for(i=i.slice();l--;)o=i[l]*r+s,i[l]=o%u|0,s=o/u|0;return s&&i.unshift(s),i}function n(i,r,u,o){var s,l;if(u!=o)l=u>o?1:-1;else for(s=l=0;s<u;s++)if(i[s]!=r[s]){l=i[s]>r[s]?1:-1;break}return l}function t(i,r,u,o){for(var s=0;u--;)i[u]-=s,s=i[u]<r[u]?1:0,i[u]=s*o+i[u]-r[u];for(;!i[0]&&i.length>1;)i.shift()}return function(i,r,u,o,s,l){var f,a,h,p,g,d,c,m,w,C,F,A,y,D,b,B,N,M,x,L,W=i.constructor,Z=i.s==r.s?1:-1,q=i.d,$=r.d;if(!q||!q[0]||!$||!$[0])return new W(!i.s||!r.s||(q?$&&q[0]==$[0]:!$)?NaN:q&&q[0]==0||!$?Z*0:Z/0);for(l?(g=1,a=i.e-r.e):(l=Qe,g=J,a=ze(i.e/g)-ze(r.e/g)),x=$.length,N=q.length,w=new W(Z),C=w.d=[],h=0;$[h]==(q[h]||0);h++);if($[h]>(q[h]||0)&&a--,u==null?(D=u=W.precision,o=W.rounding):s?D=u+(i.e-r.e)+1:D=u,D<0)C.push(1),d=!0;else{if(D=D/g+2|0,h=0,x==1){for(p=0,$=$[0],D++;(h<N||p)&&D--;h++)b=p*l+(q[h]||0),C[h]=b/$|0,p=b%$|0;d=p||h<N}else{for(p=l/($[0]+1)|0,p>1&&($=e($,p,l),q=e(q,p,l),x=$.length,N=q.length),B=x,F=q.slice(0,x),A=F.length;A<x;)F[A++]=0;L=$.slice(),L.unshift(0),M=$[0],$[1]>=l/2&&++M;do p=0,f=n($,F,x,A),f<0?(y=F[0],x!=A&&(y=y*l+(F[1]||0)),p=y/M|0,p>1?(p>=l&&(p=l-1),c=e($,p,l),m=c.length,A=F.length,f=n(c,F,m,A),f==1&&(p--,t(c,x<m?L:$,m,l))):(p==0&&(f=p=1),c=$.slice()),m=c.length,m<A&&c.unshift(0),t(F,c,A,l),f==-1&&(A=F.length,f=n($,F,x,A),f<1&&(p++,t(F,x<A?L:$,A,l))),A=F.length):f===0&&(p++,F=[0]),C[h++]=p,f&&F[0]?F[A++]=q[B]||0:(F=[q[B]],A=1);while((B++<N||F[0]!==void 0)&&D--);d=F[0]!==void 0}C[0]||C.shift()}if(g==1)w.e=a,Tr=d;else{for(h=1,p=C[0];p>=10;p/=10)h++;w.e=h+a*g-1,H(w,s?u+w.e+1:u,o,d)}return w}}();function H(e,n,t,i){var r,u,o,s,l,f,a,h,p,g=e.constructor;e:if(n!=null){if(h=e.d,!h)return e;for(r=1,s=h[0];s>=10;s/=10)r++;if(u=n-r,u<0)u+=J,o=n,a=h[p=0],l=a/Se(10,r-o-1)%10|0;else if(p=Math.ceil((u+1)/J),s=h.length,p>=s)if(i){for(;s++<=p;)h.push(0);a=l=0,r=1,u%=J,o=u-J+1}else break e;else{for(a=s=h[p],r=1;s>=10;s/=10)r++;u%=J,o=u-J+r,l=o<0?0:a/Se(10,r-o-1)%10|0}if(i=i||n<0||h[p+1]!==void 0||(o<0?a:a%Se(10,r-o-1)),f=t<4?(l||i)&&(t==0||t==(e.s<0?3:2)):l>5||l==5&&(t==4||i||t==6&&(u>0?o>0?a/Se(10,r-o):0:h[p-1])%10&1||t==(e.s<0?8:7)),n<1||!h[0])return h.length=0,f?(n-=e.e+1,h[0]=Se(10,(J-n%J)%J),e.e=-n||0):h[0]=e.e=0,e;if(u==0?(h.length=p,s=1,p--):(h.length=p+1,s=Se(10,J-u),h[p]=o>0?(a/Se(10,r-o)%Se(10,o)|0)*s:0),f)for(;;)if(p==0){for(u=1,o=h[0];o>=10;o/=10)u++;for(o=h[0]+=s,s=1;o>=10;o/=10)s++;u!=s&&(e.e++,h[0]==Qe&&(h[0]=1));break}else{if(h[p]+=s,h[p]!=Qe)break;h[p--]=0,s=1}for(u=h.length;h[--u]===0;)h.pop()}return K&&(e.e>g.maxE?(e.d=null,e.e=NaN):e.e<g.minE&&(e.e=0,e.d=[0])),e}function tn(e,n,t){if(!e.isFinite())return Ur(e);var i,r=e.e,u=Oe(e.d),o=u.length;return n?(t&&(i=t-o)>0?u=u.charAt(0)+"."+u.slice(1)+fn(i):o>1&&(u=u.charAt(0)+"."+u.slice(1)),u=u+(e.e<0?"e":"e+")+e.e):r<0?(u="0."+fn(-r-1)+u,t&&(i=t-o)>0&&(u+=fn(i))):r>=o?(u+=fn(r+1-o),t&&(i=t-r-1)>0&&(u=u+"."+fn(i))):((i=r+1)<o&&(u=u.slice(0,i)+"."+u.slice(i)),t&&(i=t-o)>0&&(r+1===o&&(u+="."),u+=fn(i))),u}function st(e,n){var t=e[0];for(n*=J;t>=10;t/=10)n++;return n}function nt(e,n,t){if(n>go)throw K=!0,t&&(e.precision=t),Error(xr);return H(new e(Qn),n,1,!0)}function nn(e,n,t){if(n>Et)throw Error(xr);return H(new e(et),n,t,!0)}function zr(e){var n=e.length-1,t=n*J+1;if(n=e[n],n){for(;n%10==0;n/=10)t--;for(n=e[0];n>=10;n/=10)t++}return t}function fn(e){for(var n="";e--;)n+="0";return n}function Rr(e,n,t,i){var r,u=new e(1),o=Math.ceil(i/J+4);for(K=!1;;){if(t%2&&(u=u.times(n),Ht(u.d,o)&&(r=!0)),t=ze(t/2),t===0){t=u.d.length-1,r&&u.d[t]===0&&++u.d[t];break}n=n.times(n),Ht(n.d,o)}return K=!0,u}function Gt(e){return e.d[e.d.length-1]&1}function $r(e,n,t){for(var i,r,u=new e(n[0]),o=0;++o<n.length;){if(r=new e(n[o]),!r.s){u=r;break}i=u.cmp(r),(i===t||i===0&&u.s===t)&&(u=r)}return u}function Ct(e,n){var t,i,r,u,o,s,l,f=0,a=0,h=0,p=e.constructor,g=p.rounding,d=p.precision;if(!e.d||!e.d[0]||e.e>17)return new p(e.d?e.d[0]?e.s<0?0:1/0:1:e.s?e.s<0?0:e:NaN);for(n==null?(K=!1,l=d):l=n,s=new p(.03125);e.e>-2;)e=e.times(s),h+=5;for(i=Math.log(Se(2,h))/Math.LN10*2+5|0,l+=i,t=u=o=new p(1),p.precision=l;;){if(u=H(u.times(e),l,1),t=t.times(++a),s=o.plus(fe(u,t,l,1)),Oe(s.d).slice(0,l)===Oe(o.d).slice(0,l)){for(r=h;r--;)o=H(o.times(o),l,1);if(n==null)if(f<3&&$n(o.d,l-i,g,f))p.precision=l+=10,t=u=s=new p(1),a=0,f++;else return H(o,p.precision=d,g,K=!0);else return p.precision=d,o}o=s}}function ln(e,n){var t,i,r,u,o,s,l,f,a,h,p,g=1,d=10,c=e,m=c.d,w=c.constructor,C=w.rounding,F=w.precision;if(c.s<0||!m||!m[0]||!c.e&&m[0]==1&&m.length==1)return new w(m&&!m[0]?-1/0:c.s!=1?NaN:m?0:c);if(n==null?(K=!1,a=F):a=n,w.precision=a+=d,t=Oe(m),i=t.charAt(0),Math.abs(u=c.e)<15e14){for(;i<7&&i!=1||i==1&&t.charAt(1)>3;)c=c.times(e),t=Oe(c.d),i=t.charAt(0),g++;u=c.e,i>1?(c=new w("0."+t),u++):c=new w(i+"."+t.slice(1))}else return f=nt(w,a+2,F).times(u+""),c=ln(new w(i+"."+t.slice(1)),a-d).plus(f),w.precision=F,n==null?H(c,F,C,K=!0):c;for(h=c,l=o=c=fe(c.minus(1),c.plus(1),a,1),p=H(c.times(c),a,1),r=3;;){if(o=H(o.times(p),a,1),f=l.plus(fe(o,new w(r),a,1)),Oe(f.d).slice(0,a)===Oe(l.d).slice(0,a))if(l=l.times(2),u!==0&&(l=l.plus(nt(w,a+2,F).times(u+""))),l=fe(l,new w(g),a,1),n==null)if($n(l.d,a-d,C,s))w.precision=a+=d,f=o=c=fe(h.minus(1),h.plus(1),a,1),p=H(c.times(c),a,1),r=s=1;else return H(l,w.precision=F,C,K=!0);else return w.precision=F,l;l=f,r+=2}}function Ur(e){return String(e.s*e.s/0)}function jn(e,n){var t,i,r;for((t=n.indexOf("."))>-1&&(n=n.replace(".","")),(i=n.search(/e/i))>0?(t<0&&(t=i),t+=+n.slice(i+1),n=n.substring(0,i)):t<0&&(t=n.length),i=0;n.charCodeAt(i)===48;i++);for(r=n.length;n.charCodeAt(r-1)===48;--r);if(n=n.slice(i,r),n){if(r-=i,e.e=t=t-i-1,e.d=[],i=(t+1)%J,t<0&&(i+=J),i<r){for(i&&e.d.push(+n.slice(0,i)),r-=J;i<r;)e.d.push(+n.slice(i,i+=J));n=n.slice(i),i=J-n.length}else i-=r;for(;i--;)n+="0";e.d.push(+n),K&&(e.e>e.constructor.maxE?(e.d=null,e.e=NaN):e.e<e.constructor.minE&&(e.e=0,e.d=[0]))}else e.e=0,e.d=[0];return e}function Do(e,n){var t,i,r,u,o,s,l,f,a;if(n.indexOf("_")>-1){if(n=n.replace(/(\d)_(?=\d)/g,"$1"),Pr.test(n))return jn(e,n)}else if(n==="Infinity"||n==="NaN")return+n||(e.s=NaN),e.e=NaN,e.d=null,e;if(lo.test(n))t=16,n=n.toLowerCase();else if(fo.test(n))t=2;else if(ho.test(n))t=8;else throw Error(pn+n);for(u=n.search(/p/i),u>0?(l=+n.slice(u+1),n=n.substring(2,u)):n=n.slice(2),u=n.indexOf("."),o=u>=0,i=e.constructor,o&&(n=n.replace(".",""),s=n.length,u=s-u,r=Rr(i,new i(t),u,u*2)),f=Zn(n,t,Qe),a=f.length-1,u=a;f[u]===0;--u)f.pop();return u<0?new i(e.s*0):(e.e=st(f,a),e.d=f,K=!1,o&&(e=fe(e,r,s*4)),l&&(e=e.times(Math.abs(l)<54?Se(2,l):xn.pow(2,l))),K=!0,e)}function vo(e,n){var t,i=n.d.length;if(i<3)return n.isZero()?n:Tn(e,2,n,n);t=1.4*Math.sqrt(i),t=t>16?16:t|0,n=n.times(1/at(5,t)),n=Tn(e,2,n,n);for(var r,u=new e(5),o=new e(16),s=new e(20);t--;)r=n.times(n),n=n.times(u.plus(r.times(o.times(r).minus(s))));return n}function Tn(e,n,t,i,r){var u,o,s,l,f=e.precision,a=Math.ceil(f/J);for(K=!1,l=t.times(t),s=new e(i);;){if(o=fe(s.times(l),new e(n++*n++),f,1),s=r?i.plus(o):i.minus(o),i=fe(o.times(l),new e(n++*n++),f,1),o=s.plus(i),o.d[a]!==void 0){for(u=a;o.d[u]===s.d[u]&&u--;);if(u==-1)break}u=s,s=i,i=o,o=u}return K=!0,o.d.length=a+1,o}function at(e,n){for(var t=e;--n;)t*=e;return t}function Vr(e,n){var t,i=n.s<0,r=nn(e,e.precision,1),u=r.times(.5);if(n=n.abs(),n.lte(u))return sn=i?4:1,n;if(t=n.divToInt(r),t.isZero())sn=i?3:2;else{if(n=n.minus(t.times(r)),n.lte(u))return sn=Gt(t)?i?2:3:i?4:1,n;sn=Gt(t)?i?1:4:i?3:2}return n.minus(r).abs()}function Mt(e,n,t,i){var r,u,o,s,l,f,a,h,p,g=e.constructor,d=t!==void 0;if(d?(qe(t,1,gn),i===void 0?i=g.rounding:qe(i,0,8)):(t=g.precision,i=g.rounding),!e.isFinite())a=Ur(e);else{for(a=tn(e),o=a.indexOf("."),d?(r=2,n==16?t=t*4-3:n==8&&(t=t*3-2)):r=n,o>=0&&(a=a.replace(".",""),p=new g(1),p.e=a.length-o,p.d=Zn(tn(p),10,r),p.e=p.d.length),h=Zn(a,10,r),u=l=h.length;h[--l]==0;)h.pop();if(!h[0])a=d?"0p+0":"0";else{if(o<0?u--:(e=new g(e),e.d=h,e.e=u,e=fe(e,p,t,i,0,r),h=e.d,u=e.e,f=Tr),o=h[t],s=r/2,f=f||h[t+1]!==void 0,f=i<4?(o!==void 0||f)&&(i===0||i===(e.s<0?3:2)):o>s||o===s&&(i===4||f||i===6&&h[t-1]&1||i===(e.s<0?8:7)),h.length=t,f)for(;++h[--t]>r-1;)h[t]=0,t||(++u,h.unshift(1));for(l=h.length;!h[l-1];--l);for(o=0,a="";o<l;o++)a+=wt.charAt(h[o]);if(d){if(l>1)if(n==16||n==8){for(o=n==16?4:3,--l;l%o;l++)a+="0";for(h=Zn(a,r,n),l=h.length;!h[l-1];--l);for(o=1,a="1.";o<l;o++)a+=wt.charAt(h[o])}else a=a.charAt(0)+"."+a.slice(1);a=a+(u<0?"p":"p+")+u}else if(u<0){for(;++u;)a="0"+a;a="0."+a}else if(++u>l)for(u-=l;u--;)a+="0";else u<l&&(a=a.slice(0,u)+"."+a.slice(u))}a=(n==16?"0x":n==2?"0b":n==8?"0o":"")+a}return e.s<0?"-"+a:a}function Ht(e,n){if(e.length>n)return e.length=n,!0}function yo(e){return new this(e).abs()}function wo(e){return new this(e).acos()}function Fo(e){return new this(e).acosh()}function Eo(e,n){return new this(e).plus(n)}function Co(e){return new this(e).asin()}function bo(e){return new this(e).asinh()}function Ao(e){return new this(e).atan()}function Bo(e){return new this(e).atanh()}function No(e,n){e=new this(e),n=new this(n);var t,i=this.precision,r=this.rounding,u=i+4;return!e.s||!n.s?t=new this(NaN):!e.d&&!n.d?(t=nn(this,u,1).times(n.s>0?.25:.75),t.s=e.s):!n.d||e.isZero()?(t=n.s<0?nn(this,i,r):new this(0),t.s=e.s):!e.d||n.isZero()?(t=nn(this,u,1).times(.5),t.s=e.s):n.s<0?(this.precision=u,this.rounding=1,t=this.atan(fe(e,n,u,1)),n=nn(this,u,1),this.precision=i,this.rounding=r,t=e.s<0?t.minus(n):t.plus(n)):t=this.atan(fe(e,n,u,1)),t}function _o(e){return new this(e).cbrt()}function So(e){return H(e=new this(e),e.e+1,2)}function Mo(e,n,t){return new this(e).clamp(n,t)}function To(e){if(!e||typeof e!="object")throw Error(ot+"Object expected");var n,t,i,r=e.defaults===!0,u=["precision",1,gn,"rounding",0,8,"toExpNeg",-Bn,0,"toExpPos",0,Bn,"maxE",0,Bn,"minE",-Bn,0,"modulo",0,9];for(n=0;n<u.length;n+=3)if(t=u[n],r&&(this[t]=Ft[t]),(i=e[t])!==void 0)if(ze(i)===i&&i>=u[n+1]&&i<=u[n+2])this[t]=i;else throw Error(pn+t+": "+i);if(t="crypto",r&&(this[t]=Ft[t]),(i=e[t])!==void 0)if(i===!0||i===!1||i===0||i===1)if(i)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[t]=!0;else throw Error(Ir);else this[t]=!1;else throw Error(pn+t+": "+i);return this}function xo(e){return new this(e).cos()}function Io(e){return new this(e).cosh()}function kr(e){var n,t,i;function r(u){var o,s,l,f=this;if(!(f instanceof r))return new r(u);if(f.constructor=r,Wt(u)){f.s=u.s,K?!u.d||u.e>r.maxE?(f.e=NaN,f.d=null):u.e<r.minE?(f.e=0,f.d=[0]):(f.e=u.e,f.d=u.d.slice()):(f.e=u.e,f.d=u.d?u.d.slice():u.d);return}if(l=typeof u,l==="number"){if(u===0){f.s=1/u<0?-1:1,f.e=0,f.d=[0];return}if(u<0?(u=-u,f.s=-1):f.s=1,u===~~u&&u<1e7){for(o=0,s=u;s>=10;s/=10)o++;K?o>r.maxE?(f.e=NaN,f.d=null):o<r.minE?(f.e=0,f.d=[0]):(f.e=o,f.d=[u]):(f.e=o,f.d=[u]);return}if(u*0!==0){u||(f.s=NaN),f.e=NaN,f.d=null;return}return jn(f,u.toString())}if(l==="string")return(s=u.charCodeAt(0))===45?(u=u.slice(1),f.s=-1):(s===43&&(u=u.slice(1)),f.s=1),Pr.test(u)?jn(f,u):Do(f,u);if(l==="bigint")return u<0?(u=-u,f.s=-1):f.s=1,jn(f,u.toString());throw Error(pn+u)}if(r.prototype=O,r.ROUND_UP=0,r.ROUND_DOWN=1,r.ROUND_CEIL=2,r.ROUND_FLOOR=3,r.ROUND_HALF_UP=4,r.ROUND_HALF_DOWN=5,r.ROUND_HALF_EVEN=6,r.ROUND_HALF_CEIL=7,r.ROUND_HALF_FLOOR=8,r.EUCLID=9,r.config=r.set=To,r.clone=kr,r.isDecimal=Wt,r.abs=yo,r.acos=wo,r.acosh=Fo,r.add=Eo,r.asin=Co,r.asinh=bo,r.atan=Ao,r.atanh=Bo,r.atan2=No,r.cbrt=_o,r.ceil=So,r.clamp=Mo,r.cos=xo,r.cosh=Io,r.div=Oo,r.exp=Po,r.floor=zo,r.hypot=Ro,r.ln=$o,r.log=Uo,r.log10=ko,r.log2=Vo,r.max=Lo,r.min=qo,r.mod=Go,r.mul=Ho,r.pow=Wo,r.random=Zo,r.round=jo,r.sign=Yo,r.sin=Jo,r.sinh=Xo,r.sqrt=Ko,r.sub=Qo,r.sum=es,r.tan=ns,r.tanh=ts,r.trunc=rs,e===void 0&&(e={}),e&&e.defaults!==!0)for(i=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],n=0;n<i.length;)e.hasOwnProperty(t=i[n++])||(e[t]=this[t]);return r.config(e),r}function Oo(e,n){return new this(e).div(n)}function Po(e){return new this(e).exp()}function zo(e){return H(e=new this(e),e.e+1,3)}function Ro(){var e,n,t=new this(0);for(K=!1,e=0;e<arguments.length;)if(n=new this(arguments[e++]),n.d)t.d&&(t=t.plus(n.times(n)));else{if(n.s)return K=!0,new this(1/0);t=n}return K=!0,t.sqrt()}function Wt(e){return e instanceof xn||e&&e.toStringTag===Or||!1}function $o(e){return new this(e).ln()}function Uo(e,n){return new this(e).log(n)}function Vo(e){return new this(e).log(2)}function ko(e){return new this(e).log(10)}function Lo(){return $r(this,arguments,-1)}function qo(){return $r(this,arguments,1)}function Go(e,n){return new this(e).mod(n)}function Ho(e,n){return new this(e).mul(n)}function Wo(e,n){return new this(e).pow(n)}function Zo(e){var n,t,i,r,u=0,o=new this(1),s=[];if(e===void 0?e=this.precision:qe(e,1,gn),i=Math.ceil(e/J),this.crypto)if(crypto.getRandomValues)for(n=crypto.getRandomValues(new Uint32Array(i));u<i;)r=n[u],r>=429e7?n[u]=crypto.getRandomValues(new Uint32Array(1))[0]:s[u++]=r%1e7;else if(crypto.randomBytes){for(n=crypto.randomBytes(i*=4);u<i;)r=n[u]+(n[u+1]<<8)+(n[u+2]<<16)+((n[u+3]&127)<<24),r>=214e7?crypto.randomBytes(4).copy(n,u):(s.push(r%1e7),u+=4);u=i/4}else throw Error(Ir);else for(;u<i;)s[u++]=Math.random()*1e7|0;for(i=s[--u],e%=J,i&&e&&(r=Se(10,J-e),s[u]=(i/r|0)*r);s[u]===0;u--)s.pop();if(u<0)t=0,s=[0];else{for(t=-1;s[0]===0;t-=J)s.shift();for(i=1,r=s[0];r>=10;r/=10)i++;i<J&&(t-=J-i)}return o.e=t,o.d=s,o}function jo(e){return H(e=new this(e),e.e+1,this.rounding)}function Yo(e){return e=new this(e),e.d?e.d[0]?e.s:0*e.s:e.s||NaN}function Jo(e){return new this(e).sin()}function Xo(e){return new this(e).sinh()}function Ko(e){return new this(e).sqrt()}function Qo(e,n){return new this(e).sub(n)}function es(){var e=0,n=arguments,t=new this(n[e]);for(K=!1;t.s&&++e<n.length;)t=t.plus(n[e]);return K=!0,H(t,this.precision,this.rounding)}function ns(e){return new this(e).tan()}function ts(e){return new this(e).tanh()}function rs(e){return H(e=new this(e),e.e+1,1)}O[Symbol.for("nodejs.util.inspect.custom")]=O.toString;O[Symbol.toStringTag]="Decimal";var xn=O.constructor=kr(Ft);Qn=new xn(Qn);et=new xn(et);var is="BigNumber",us=["?on","config"],os=ne(is,us,e=>{var{on:n,config:t}=e,i=xn.clone({precision:t.precision,modulo:xn.EUCLID});return i.prototype=Object.create(i.prototype),i.prototype.type="BigNumber",i.prototype.isBigNumber=!0,i.prototype.toJSON=function(){return{mathjs:"BigNumber",value:this.toString()}},i.fromJSON=function(r){return new i(r.value)},n&&n("config",function(r,u){r.precision!==u.precision&&i.config({precision:r.precision})}),i},{isClass:!0});const Pe=Math.cosh||function(e){return Math.abs(e)<1e-9?1-e:(Math.exp(e)+Math.exp(-e))*.5},je=Math.sinh||function(e){return Math.abs(e)<1e-9?e:(Math.exp(e)-Math.exp(-e))*.5},ss=function(e){const n=Math.PI/4;if(-n>e||e>n)return Math.cos(e)-1;const t=e*e;return t*(t*(t*(t*(t*(t*(t*(t/20922789888e3-1/87178291200)+1/479001600)-1/3628800)+1/40320)-1/720)+1/24)-1/2)},mt=function(e,n){return e=Math.abs(e),n=Math.abs(n),e<n&&([e,n]=[n,e]),e<1e8?Math.sqrt(e*e+n*n):(n/=e,e*Math.sqrt(1+n*n))},Cn=function(){throw SyntaxError("Invalid Param")};function Dt(e,n){const t=Math.abs(e),i=Math.abs(n);return e===0?Math.log(i):n===0?Math.log(t):t<3e3&&i<3e3?Math.log(e*e+n*n)*.5:(e=e*.5,n=n*.5,.5*Math.log(e*e+n*n)+Math.LN2)}const as={re:0,im:0},Dn=function(e,n){const t=as;if(e==null)t.re=t.im=0;else if(n!==void 0)t.re=e,t.im=n;else switch(typeof e){case"object":if("im"in e&&"re"in e)t.re=e.re,t.im=e.im;else if("abs"in e&&"arg"in e){if(!isFinite(e.abs)&&isFinite(e.arg))return S.INFINITY;t.re=e.abs*Math.cos(e.arg),t.im=e.abs*Math.sin(e.arg)}else if("r"in e&&"phi"in e){if(!isFinite(e.r)&&isFinite(e.phi))return S.INFINITY;t.re=e.r*Math.cos(e.phi),t.im=e.r*Math.sin(e.phi)}else e.length===2?(t.re=e[0],t.im=e[1]):Cn();break;case"string":t.im=t.re=0;const i=e.replace(/_/g,"").match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g);let r=1,u=0;i===null&&Cn();for(let o=0;o<i.length;o++){const s=i[o];s===" "||s==="	"||s===`
`||(s==="+"?r++:s==="-"?u++:s==="i"||s==="I"?(r+u===0&&Cn(),i[o+1]!==" "&&!isNaN(i[o+1])?(t.im+=parseFloat((u%2?"-":"")+i[o+1]),o++):t.im+=parseFloat((u%2?"-":"")+"1"),r=u=0):((r+u===0||isNaN(s))&&Cn(),i[o+1]==="i"||i[o+1]==="I"?(t.im+=parseFloat((u%2?"-":"")+s),o++):t.re+=parseFloat((u%2?"-":"")+s),r=u=0))}r+u>0&&Cn();break;case"number":t.im=0,t.re=e;break;default:Cn()}return isNaN(t.re)||isNaN(t.im),t};function S(e,n){if(!(this instanceof S))return new S(e,n);const t=Dn(e,n);this.re=t.re,this.im=t.im}S.prototype={re:0,im:0,sign:function(){const e=mt(this.re,this.im);return new S(this.re/e,this.im/e)},add:function(e,n){const t=Dn(e,n),i=this.isInfinite(),r=!(isFinite(t.re)&&isFinite(t.im));return i||r?i&&r?S.NAN:S.INFINITY:new S(this.re+t.re,this.im+t.im)},sub:function(e,n){const t=Dn(e,n),i=this.isInfinite(),r=!(isFinite(t.re)&&isFinite(t.im));return i||r?i&&r?S.NAN:S.INFINITY:new S(this.re-t.re,this.im-t.im)},mul:function(e,n){const t=Dn(e,n),i=this.isInfinite(),r=!(isFinite(t.re)&&isFinite(t.im)),u=this.re===0&&this.im===0,o=t.re===0&&t.im===0;return i&&o||r&&u?S.NAN:i||r?S.INFINITY:t.im===0&&this.im===0?new S(this.re*t.re,0):new S(this.re*t.re-this.im*t.im,this.re*t.im+this.im*t.re)},div:function(e,n){const t=Dn(e,n),i=this.isInfinite(),r=!(isFinite(t.re)&&isFinite(t.im)),u=this.re===0&&this.im===0,o=t.re===0&&t.im===0;if(u&&o||i&&r)return S.NAN;if(o||i)return S.INFINITY;if(u||r)return S.ZERO;if(t.im===0)return new S(this.re/t.re,this.im/t.re);if(Math.abs(t.re)<Math.abs(t.im)){const s=t.re/t.im,l=t.re*s+t.im;return new S((this.re*s+this.im)/l,(this.im*s-this.re)/l)}else{const s=t.im/t.re,l=t.im*s+t.re;return new S((this.re+this.im*s)/l,(this.im-this.re*s)/l)}},pow:function(e,n){const t=Dn(e,n),i=this.re===0&&this.im===0;if(t.re===0&&t.im===0)return S.ONE;if(t.im===0){if(this.im===0&&this.re>0)return new S(Math.pow(this.re,t.re),0);if(this.re===0)switch((t.re%4+4)%4){case 0:return new S(Math.pow(this.im,t.re),0);case 1:return new S(0,Math.pow(this.im,t.re));case 2:return new S(-Math.pow(this.im,t.re),0);case 3:return new S(0,-Math.pow(this.im,t.re))}}if(i&&t.re>0)return S.ZERO;const u=Math.atan2(this.im,this.re),o=Dt(this.re,this.im);let s=Math.exp(t.re*o-t.im*u),l=t.im*o+t.re*u;return new S(s*Math.cos(l),s*Math.sin(l))},sqrt:function(){const e=this.re,n=this.im;if(n===0)return e>=0?new S(Math.sqrt(e),0):new S(0,Math.sqrt(-e));const t=mt(e,n);let i=Math.sqrt(.5*(t+Math.abs(e))),r=Math.abs(n)/(2*i);return e>=0?new S(i,n<0?-r:r):new S(r,n<0?-i:i)},exp:function(){const e=Math.exp(this.re);return this.im===0?new S(e,0):new S(e*Math.cos(this.im),e*Math.sin(this.im))},expm1:function(){const e=this.re,n=this.im;return new S(Math.expm1(e)*Math.cos(n)+ss(n),Math.exp(e)*Math.sin(n))},log:function(){const e=this.re,n=this.im;return n===0&&e>0?new S(Math.log(e),0):new S(Dt(e,n),Math.atan2(n,e))},abs:function(){return mt(this.re,this.im)},arg:function(){return Math.atan2(this.im,this.re)},sin:function(){const e=this.re,n=this.im;return new S(Math.sin(e)*Pe(n),Math.cos(e)*je(n))},cos:function(){const e=this.re,n=this.im;return new S(Math.cos(e)*Pe(n),-Math.sin(e)*je(n))},tan:function(){const e=2*this.re,n=2*this.im,t=Math.cos(e)+Pe(n);return new S(Math.sin(e)/t,je(n)/t)},cot:function(){const e=2*this.re,n=2*this.im,t=Math.cos(e)-Pe(n);return new S(-Math.sin(e)/t,je(n)/t)},sec:function(){const e=this.re,n=this.im,t=.5*Pe(2*n)+.5*Math.cos(2*e);return new S(Math.cos(e)*Pe(n)/t,Math.sin(e)*je(n)/t)},csc:function(){const e=this.re,n=this.im,t=.5*Pe(2*n)-.5*Math.cos(2*e);return new S(Math.sin(e)*Pe(n)/t,-Math.cos(e)*je(n)/t)},asin:function(){const e=this.re,n=this.im,t=new S(n*n-e*e+1,-2*e*n).sqrt(),i=new S(t.re-n,t.im+e).log();return new S(i.im,-i.re)},acos:function(){const e=this.re,n=this.im,t=new S(n*n-e*e+1,-2*e*n).sqrt(),i=new S(t.re-n,t.im+e).log();return new S(Math.PI/2-i.im,i.re)},atan:function(){const e=this.re,n=this.im;if(e===0){if(n===1)return new S(0,1/0);if(n===-1)return new S(0,-1/0)}const t=e*e+(1-n)*(1-n),i=new S((1-n*n-e*e)/t,-2*e/t).log();return new S(-.5*i.im,.5*i.re)},acot:function(){const e=this.re,n=this.im;if(n===0)return new S(Math.atan2(1,e),0);const t=e*e+n*n;return t!==0?new S(e/t,-n/t).atan():new S(e!==0?e/0:0,n!==0?-n/0:0).atan()},asec:function(){const e=this.re,n=this.im;if(e===0&&n===0)return new S(0,1/0);const t=e*e+n*n;return t!==0?new S(e/t,-n/t).acos():new S(e!==0?e/0:0,n!==0?-n/0:0).acos()},acsc:function(){const e=this.re,n=this.im;if(e===0&&n===0)return new S(Math.PI/2,1/0);const t=e*e+n*n;return t!==0?new S(e/t,-n/t).asin():new S(e!==0?e/0:0,n!==0?-n/0:0).asin()},sinh:function(){const e=this.re,n=this.im;return new S(je(e)*Math.cos(n),Pe(e)*Math.sin(n))},cosh:function(){const e=this.re,n=this.im;return new S(Pe(e)*Math.cos(n),je(e)*Math.sin(n))},tanh:function(){const e=2*this.re,n=2*this.im,t=Pe(e)+Math.cos(n);return new S(je(e)/t,Math.sin(n)/t)},coth:function(){const e=2*this.re,n=2*this.im,t=Pe(e)-Math.cos(n);return new S(je(e)/t,-Math.sin(n)/t)},csch:function(){const e=this.re,n=this.im,t=Math.cos(2*n)-Pe(2*e);return new S(-2*je(e)*Math.cos(n)/t,2*Pe(e)*Math.sin(n)/t)},sech:function(){const e=this.re,n=this.im,t=Math.cos(2*n)+Pe(2*e);return new S(2*Pe(e)*Math.cos(n)/t,-2*je(e)*Math.sin(n)/t)},asinh:function(){let e=this.im;this.im=-this.re,this.re=e;const n=this.asin();return this.re=-this.im,this.im=e,e=n.re,n.re=-n.im,n.im=e,n},acosh:function(){const e=this.acos();if(e.im<=0){const n=e.re;e.re=-e.im,e.im=n}else{const n=e.im;e.im=-e.re,e.re=n}return e},atanh:function(){const e=this.re,n=this.im,t=e>1&&n===0,i=1-e,r=1+e,u=i*i+n*n,o=u!==0?new S((r*i-n*n)/u,(n*i+r*n)/u):new S(e!==-1?e/0:0,n!==0?n/0:0),s=o.re;return o.re=Dt(o.re,o.im)/2,o.im=Math.atan2(o.im,s)/2,t&&(o.im=-o.im),o},acoth:function(){const e=this.re,n=this.im;if(e===0&&n===0)return new S(0,Math.PI/2);const t=e*e+n*n;return t!==0?new S(e/t,-n/t).atanh():new S(e!==0?e/0:0,n!==0?-n/0:0).atanh()},acsch:function(){const e=this.re,n=this.im;if(n===0)return new S(e!==0?Math.log(e+Math.sqrt(e*e+1)):1/0,0);const t=e*e+n*n;return t!==0?new S(e/t,-n/t).asinh():new S(e!==0?e/0:0,n!==0?-n/0:0).asinh()},asech:function(){const e=this.re,n=this.im;if(this.isZero())return S.INFINITY;const t=e*e+n*n;return t!==0?new S(e/t,-n/t).acosh():new S(e!==0?e/0:0,n!==0?-n/0:0).acosh()},inverse:function(){if(this.isZero())return S.INFINITY;if(this.isInfinite())return S.ZERO;const e=this.re,n=this.im,t=e*e+n*n;return new S(e/t,-n/t)},conjugate:function(){return new S(this.re,-this.im)},neg:function(){return new S(-this.re,-this.im)},ceil:function(e){return e=Math.pow(10,e||0),new S(Math.ceil(this.re*e)/e,Math.ceil(this.im*e)/e)},floor:function(e){return e=Math.pow(10,e||0),new S(Math.floor(this.re*e)/e,Math.floor(this.im*e)/e)},round:function(e){return e=Math.pow(10,e||0),new S(Math.round(this.re*e)/e,Math.round(this.im*e)/e)},equals:function(e,n){const t=Dn(e,n);return Math.abs(t.re-this.re)<=S.EPSILON&&Math.abs(t.im-this.im)<=S.EPSILON},clone:function(){return new S(this.re,this.im)},toString:function(){let e=this.re,n=this.im,t="";return this.isNaN()?"NaN":this.isInfinite()?"Infinity":(Math.abs(e)<S.EPSILON&&(e=0),Math.abs(n)<S.EPSILON&&(n=0),n===0?t+e:(e!==0?(t+=e,t+=" ",n<0?(n=-n,t+="-"):t+="+",t+=" "):n<0&&(n=-n,t+="-"),n!==1&&(t+=n),t+"i"))},toVector:function(){return[this.re,this.im]},valueOf:function(){return this.im===0?this.re:null},isNaN:function(){return isNaN(this.re)||isNaN(this.im)},isZero:function(){return this.im===0&&this.re===0},isFinite:function(){return isFinite(this.re)&&isFinite(this.im)},isInfinite:function(){return!this.isFinite()}};S.ZERO=new S(0,0);S.ONE=new S(1,0);S.I=new S(0,1);S.PI=new S(Math.PI,0);S.E=new S(Math.E,0);S.INFINITY=new S(1/0,1/0);S.NAN=new S(NaN,NaN);S.EPSILON=1e-15;var cs="Complex",fs=[],ls=ne(cs,fs,()=>(Object.defineProperty(S,"name",{value:"Complex"}),S.prototype.constructor=S,S.prototype.type="Complex",S.prototype.isComplex=!0,S.prototype.toJSON=function(){return{mathjs:"Complex",re:this.re,im:this.im}},S.prototype.toPolar=function(){return{r:this.abs(),phi:this.arg()}},S.prototype.format=function(e){var n="",t=this.im,i=this.re,r=yt(this.re,e),u=yt(this.im,e),o=pe(e)?e:e?e.precision:null;if(o!==null){var s=Math.pow(10,-o);Math.abs(i/t)<s&&(i=0),Math.abs(t/i)<s&&(t=0)}return t===0?n=r:i===0?t===1?n="i":t===-1?n="-i":n=u+"i":t<0?t===-1?n=r+" - i":n=r+" - "+u.substring(1)+"i":t===1?n=r+" + i":n=r+" + "+u+"i",n},S.fromPolar=function(e){switch(arguments.length){case 1:{var n=arguments[0];if(typeof n=="object")return S(n);throw new TypeError("Input has to be an object with r and phi keys.")}case 2:{var t=arguments[0],i=arguments[1];if(pe(t)){if(Ar(i)&&i.hasBase("ANGLE")&&(i=i.toNumber("rad")),pe(i))return new S({r:t,phi:i});throw new TypeError("Phi is not a number nor an angle unit.")}else throw new TypeError("Radius r is not a number.")}default:throw new SyntaxError("Wrong number of arguments in function fromPolar")}},S.prototype.valueOf=S.prototype.toString,S.fromJSON=function(e){return new S(e)},S.compare=function(e,n){return e.re>n.re?1:e.re<n.re?-1:e.im>n.im?1:e.im<n.im?-1:0},S),{isClass:!0});typeof BigInt>"u"&&(BigInt=function(e){if(isNaN(e))throw new Error("");return e});const G=BigInt(0),ee=BigInt(1),xe=BigInt(2),Rn=BigInt(3),Nn=BigInt(5),Le=BigInt(10);BigInt(Number.MAX_SAFE_INTEGER);const hs=2e3,U={s:ee,n:G,d:ee};function on(e,n){try{e=BigInt(e)}catch{throw cn()}return e*n}function Ke(e){return typeof e=="bigint"?e:Math.floor(e)}function de(e,n){if(n===G)throw Tt();const t=Object.create(Ye.prototype);t.s=e<G?-ee:ee,e=e<G?-e:e;const i=vn(e,n);return t.n=e/i,t.d=n/i,t}const ps=[xe*xe,xe,xe*xe,xe,xe*xe,xe*Rn,xe,xe*Rn];function bn(e){const n=Object.create(null);if(e<=ee)return n[e]=ee,n;const t=i=>{n[i]=(n[i]||G)+ee};for(;e%xe===G;)t(xe),e/=xe;for(;e%Rn===G;)t(Rn),e/=Rn;for(;e%Nn===G;)t(Nn),e/=Nn;for(let i=0,r=xe+Nn;r*r<=e;){for(;e%r===G;)t(r),e/=r;r+=ps[i],i=i+1&7}return e>ee&&t(e),n}const Te=function(e,n){let t=G,i=ee,r=ee;if(e!=null)if(n!==void 0){if(typeof e=="bigint")t=e;else{if(isNaN(e))throw cn();if(e%1!==0)throw Zt();t=BigInt(e)}if(typeof n=="bigint")i=n;else{if(isNaN(n))throw cn();if(n%1!==0)throw Zt();i=BigInt(n)}r=t*i}else if(typeof e=="object"){if("d"in e&&"n"in e)t=BigInt(e.n),i=BigInt(e.d),"s"in e&&(t*=BigInt(e.s));else if(0 in e)t=BigInt(e[0]),1 in e&&(i=BigInt(e[1]));else if(typeof e=="bigint")t=e;else throw cn();r=t*i}else if(typeof e=="number"){if(isNaN(e))throw cn();if(e<0&&(r=-ee,e=-e),e%1===0)t=BigInt(e);else{let u=1,o=0,s=1,l=1,f=1,a=1e7;for(e>=1&&(u=10**Math.floor(1+Math.log10(e)),e/=u);s<=a&&f<=a;){let h=(o+l)/(s+f);if(e===h){s+f<=a?(t=o+l,i=s+f):f>s?(t=l,i=f):(t=o,i=s);break}else e>h?(o+=l,s+=f):(l+=o,f+=s),s>a?(t=l,i=f):(t=o,i=s)}t=BigInt(t)*BigInt(u),i=BigInt(i)}}else if(typeof e=="string"){let u=0,o=G,s=G,l=G,f=ee,a=ee,h=e.replace(/_/g,"").match(/\d+|./g);if(h===null)throw cn();if(h[u]==="-"?(r=-ee,u++):h[u]==="+"&&u++,h.length===u+1?s=on(h[u++],r):h[u+1]==="."||h[u]==="."?(h[u]!=="."&&(o=on(h[u++],r)),u++,(u+1===h.length||h[u+1]==="("&&h[u+3]===")"||h[u+1]==="'"&&h[u+3]==="'")&&(s=on(h[u],r),f=Le**BigInt(h[u].length),u++),(h[u]==="("&&h[u+2]===")"||h[u]==="'"&&h[u+2]==="'")&&(l=on(h[u+1],r),a=Le**BigInt(h[u+1].length)-ee,u+=3)):h[u+1]==="/"||h[u+1]===":"?(s=on(h[u],r),f=on(h[u+2],ee),u+=3):h[u+3]==="/"&&h[u+1]===" "&&(o=on(h[u],r),s=on(h[u+2],r),f=on(h[u+4],ee),u+=5),h.length<=u)i=f*a,r=t=l+i*o+a*s;else throw cn()}else if(typeof e=="bigint")t=e,r=e,i=ee;else throw cn();if(i===G)throw Tt();U.s=r<G?-ee:ee,U.n=t<G?-t:t,U.d=i<G?-i:i};function ds(e,n,t){let i=ee;for(;n>G;e=e*e%t,n>>=ee)n&ee&&(i=i*e%t);return i}function gs(e,n){for(;n%xe===G;n/=xe);for(;n%Nn===G;n/=Nn);if(n===ee)return G;let t=Le%n,i=1;for(;t!==ee;i++)if(t=t*Le%n,i>hs)return G;return BigInt(i)}function ms(e,n,t){let i=ee,r=ds(Le,t,n);for(let u=0;u<300;u++){if(i===r)return BigInt(u);i=i*Le%n,r=r*Le%n}return 0}function vn(e,n){if(!e)return n;if(!n)return e;for(;;){if(e%=n,!e)return n;if(n%=e,!n)return e}}function Ye(e,n){if(Te(e,n),this instanceof Ye)e=vn(U.d,U.n),this.s=U.s,this.n=U.n/e,this.d=U.d/e;else return de(U.s*U.n,U.d)}const Tt=function(){return new Error("Division by Zero")},cn=function(){return new Error("Invalid argument")},Zt=function(){return new Error("Parameters must be integer")};Ye.prototype={s:ee,n:G,d:ee,abs:function(){return de(this.n,this.d)},neg:function(){return de(-this.s*this.n,this.d)},add:function(e,n){return Te(e,n),de(this.s*this.n*U.d+U.s*this.d*U.n,this.d*U.d)},sub:function(e,n){return Te(e,n),de(this.s*this.n*U.d-U.s*this.d*U.n,this.d*U.d)},mul:function(e,n){return Te(e,n),de(this.s*U.s*this.n*U.n,this.d*U.d)},div:function(e,n){return Te(e,n),de(this.s*U.s*this.n*U.d,this.d*U.n)},clone:function(){return de(this.s*this.n,this.d)},mod:function(e,n){if(e===void 0)return de(this.s*this.n%this.d,ee);if(Te(e,n),G===U.n*this.d)throw Tt();return de(this.s*(U.d*this.n)%(U.n*this.d),U.d*this.d)},gcd:function(e,n){return Te(e,n),de(vn(U.n,this.n)*vn(U.d,this.d),U.d*this.d)},lcm:function(e,n){return Te(e,n),U.n===G&&this.n===G?de(G,ee):de(U.n*this.n,vn(U.n,this.n)*vn(U.d,this.d))},inverse:function(){return de(this.s*this.d,this.n)},pow:function(e,n){if(Te(e,n),U.d===ee)return U.s<G?de((this.s*this.d)**U.n,this.n**U.n):de((this.s*this.n)**U.n,this.d**U.n);if(this.s<G)return null;let t=bn(this.n),i=bn(this.d),r=ee,u=ee;for(let o in t)if(o!=="1"){if(o==="0"){r=G;break}if(t[o]*=U.n,t[o]%U.d===G)t[o]/=U.d;else return null;r*=BigInt(o)**t[o]}for(let o in i)if(o!=="1"){if(i[o]*=U.n,i[o]%U.d===G)i[o]/=U.d;else return null;u*=BigInt(o)**i[o]}return U.s<G?de(u,r):de(r,u)},log:function(e,n){if(Te(e,n),this.s<=G||U.s<=G)return null;const t=Object.create(null),i=bn(U.n),r=bn(U.d),u=bn(this.n),o=bn(this.d);for(const f in r)i[f]=(i[f]||G)-r[f];for(const f in o)u[f]=(u[f]||G)-o[f];for(const f in i)f!=="1"&&(t[f]=!0);for(const f in u)f!=="1"&&(t[f]=!0);let s=null,l=null;for(const f in t){const a=i[f]||G,h=u[f]||G;if(a===G){if(h!==G)return null;continue}let p=h,g=a;const d=vn(p,g);if(p/=d,g/=d,s===null&&l===null)s=p,l=g;else if(p*l!==s*g)return null}return s!==null&&l!==null?de(s,l):null},equals:function(e,n){return Te(e,n),this.s*this.n*U.d===U.s*U.n*this.d},lt:function(e,n){return Te(e,n),this.s*this.n*U.d<U.s*U.n*this.d},lte:function(e,n){return Te(e,n),this.s*this.n*U.d<=U.s*U.n*this.d},gt:function(e,n){return Te(e,n),this.s*this.n*U.d>U.s*U.n*this.d},gte:function(e,n){return Te(e,n),this.s*this.n*U.d>=U.s*U.n*this.d},compare:function(e,n){Te(e,n);let t=this.s*this.n*U.d-U.s*U.n*this.d;return(G<t)-(t<G)},ceil:function(e){return e=Le**BigInt(e||0),de(Ke(this.s*e*this.n/this.d)+(e*this.n%this.d>G&&this.s>=G?ee:G),e)},floor:function(e){return e=Le**BigInt(e||0),de(Ke(this.s*e*this.n/this.d)-(e*this.n%this.d>G&&this.s<G?ee:G),e)},round:function(e){return e=Le**BigInt(e||0),de(Ke(this.s*e*this.n/this.d)+this.s*((this.s>=G?ee:G)+xe*(e*this.n%this.d)>this.d?ee:G),e)},roundTo:function(e,n){Te(e,n);const t=this.n*U.d,i=this.d*U.n,r=t%i;let u=Ke(t/i);return r+r>=i&&u++,de(this.s*u*U.n,U.d)},divisible:function(e,n){return Te(e,n),U.n===G?!1:this.n*U.d%(U.n*this.d)===G},valueOf:function(){return Number(this.s*this.n)/Number(this.d)},toString:function(e=15){let n=this.n,t=this.d,i=gs(n,t),r=ms(n,t,i),u=this.s<G?"-":"";if(u+=Ke(n/t),n%=t,n*=Le,n&&(u+="."),i){for(let o=r;o--;)u+=Ke(n/t),n%=t,n*=Le;u+="(";for(let o=i;o--;)u+=Ke(n/t),n%=t,n*=Le;u+=")"}else for(let o=e;n&&o--;)u+=Ke(n/t),n%=t,n*=Le;return u},toFraction:function(e=!1){let n=this.n,t=this.d,i=this.s<G?"-":"";if(t===ee)i+=n;else{const r=Ke(n/t);e&&r>G&&(i+=r,i+=" ",n%=t),i+=n,i+="/",i+=t}return i},toLatex:function(e=!1){let n=this.n,t=this.d,i=this.s<G?"-":"";if(t===ee)i+=n;else{const r=Ke(n/t);e&&r>G&&(i+=r,n%=t),i+="\\frac{",i+=n,i+="}{",i+=t,i+="}"}return i},toContinued:function(){let e=this.n,n=this.d;const t=[];for(;n;){t.push(Ke(e/n));const i=e%n;e=n,n=i}return t},simplify:function(e=.001){const n=BigInt(Math.ceil(1/e)),t=this.abs(),i=t.toContinued();for(let r=1;r<i.length;r++){let u=de(i[r-1],ee);for(let s=r-2;s>=0;s--)u=u.inverse().add(i[s]);let o=u.sub(t);if(o.n*n<o.d)return u.mul(this.s)}return this}};var Ds="Fraction",vs=[],ys=ne(Ds,vs,()=>(Object.defineProperty(Ye,"name",{value:"Fraction"}),Ye.prototype.constructor=Ye,Ye.prototype.type="Fraction",Ye.prototype.isFraction=!0,Ye.prototype.toJSON=function(){return{mathjs:"Fraction",n:String(this.s*this.n),d:String(this.d)}},Ye.fromJSON=function(e){return new Ye(e)},Ye),{isClass:!0}),ws="Matrix",Fs=[],Es=ne(ws,Fs,()=>{function e(){if(!(this instanceof e))throw new SyntaxError("Constructor must be called with the new operator")}return e.prototype.type="Matrix",e.prototype.isMatrix=!0,e.prototype.storage=function(){throw new Error("Cannot invoke storage on a Matrix interface")},e.prototype.datatype=function(){throw new Error("Cannot invoke datatype on a Matrix interface")},e.prototype.create=function(n,t){throw new Error("Cannot invoke create on a Matrix interface")},e.prototype.subset=function(n,t,i){throw new Error("Cannot invoke subset on a Matrix interface")},e.prototype.get=function(n){throw new Error("Cannot invoke get on a Matrix interface")},e.prototype.set=function(n,t,i){throw new Error("Cannot invoke set on a Matrix interface")},e.prototype.resize=function(n,t){throw new Error("Cannot invoke resize on a Matrix interface")},e.prototype.reshape=function(n,t){throw new Error("Cannot invoke reshape on a Matrix interface")},e.prototype.clone=function(){throw new Error("Cannot invoke clone on a Matrix interface")},e.prototype.size=function(){throw new Error("Cannot invoke size on a Matrix interface")},e.prototype.map=function(n,t){throw new Error("Cannot invoke map on a Matrix interface")},e.prototype.forEach=function(n){throw new Error("Cannot invoke forEach on a Matrix interface")},e.prototype[Symbol.iterator]=function(){throw new Error("Cannot iterate a Matrix interface")},e.prototype.toArray=function(){throw new Error("Cannot invoke toArray on a Matrix interface")},e.prototype.valueOf=function(){throw new Error("Cannot invoke valueOf on a Matrix interface")},e.prototype.format=function(n){throw new Error("Cannot invoke format on a Matrix interface")},e.prototype.toString=function(){throw new Error("Cannot invoke toString on a Matrix interface")},e},{isClass:!0});function vt(e,n,t){var i=e.constructor,r=new i(2),u="";if(t){if(t<1)throw new Error("size must be in greater than 0");if(!ge(t))throw new Error("size must be an integer");if(e.greaterThan(r.pow(t-1).sub(1))||e.lessThan(r.pow(t-1).mul(-1)))throw new Error("Value must be in range [-2^".concat(t-1,", 2^").concat(t-1,"-1]"));if(!e.isInteger())throw new Error("Value must be an integer");e.lessThan(0)&&(e=e.add(r.pow(t))),u="i".concat(t)}switch(n){case 2:return"".concat(e.toBinary()).concat(u);case 8:return"".concat(e.toOctal()).concat(u);case 16:return"".concat(e.toHexadecimal()).concat(u);default:throw new Error("Base ".concat(n," not supported "))}}function Cs(e,n){if(typeof n=="function")return n(e);if(!e.isFinite())return e.isNaN()?"NaN":e.gt(0)?"Infinity":"-Infinity";var{notation:t,precision:i,wordSize:r}=Nr(n);switch(t){case"fixed":return As(e,i);case"exponential":return jt(e,i);case"engineering":return bs(e,i);case"bin":return vt(e,2,r);case"oct":return vt(e,8,r);case"hex":return vt(e,16,r);case"auto":{var u=Yt(n==null?void 0:n.lowerExp,-3),o=Yt(n==null?void 0:n.upperExp,5);if(e.isZero())return"0";var s,l=e.toSignificantDigits(i),f=l.e;return f>=u&&f<o?s=l.toFixed():s=jt(e,i),s.replace(/((\.\d*?)(0+))($|e)/,function(){var a=arguments[2],h=arguments[4];return a!=="."?a+h:h})}default:throw new Error('Unknown notation "'+t+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function bs(e,n){var t=e.e,i=t%3===0?t:t<0?t-3-t%3:t-t%3,r=e.mul(Math.pow(10,-i)),u=r.toPrecision(n);if(u.includes("e")){var o=e.constructor;u=new o(u).toFixed()}return u+"e"+(t>=0?"+":"")+i.toString()}function jt(e,n){return n!==void 0?e.toExponential(n-1):e.toExponential()}function As(e,n){return e.toFixed(n)}function Yt(e,n){return pe(e)?e:be(e)?e.toNumber():n}function Ne(e,n){var t=Bs(e,n);return n&&typeof n=="object"&&"truncate"in n&&t.length>n.truncate?t.substring(0,n.truncate-3)+"...":t}function Bs(e,n){if(typeof e=="number")return yt(e,n);if(be(e))return Cs(e,n);if(Ns(e))return!n||n.fraction!=="decimal"?"".concat(e.s*e.n,"/").concat(e.d):e.toString();if(Array.isArray(e))return Lr(e,n);if(en(e))return Jt(e);if(typeof e=="function")return e.syntax?String(e.syntax):"function";if(e&&typeof e=="object"){if(typeof e.format=="function")return e.format(n);if(e&&e.toString(n)!=={}.toString())return e.toString(n);var t=Object.keys(e).map(i=>Jt(i)+": "+Ne(e[i],n));return"{"+t.join(", ")+"}"}return String(e)}function Jt(e){for(var n=String(e),t="",i=0;i<n.length;){var r=n.charAt(i);t+=r in Xt?Xt[r]:r,i++}return'"'+t+'"'}var Xt={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"};function Lr(e,n){if(Array.isArray(e)){for(var t="[",i=e.length,r=0;r<i;r++)r!==0&&(t+=", "),t+=Lr(e[r],n);return t+="]",t}else return Ne(e,n)}function Ns(e){return e&&typeof e=="object"&&typeof e.s=="bigint"&&typeof e.n=="bigint"&&typeof e.d=="bigint"||!1}function me(e,n,t){if(!(this instanceof me))throw new SyntaxError("Constructor must be called with the new operator");this.actual=e,this.expected=n,this.relation=t,this.message="Dimension mismatch ("+(Array.isArray(e)?"["+e.join(", ")+"]":e)+" "+(this.relation||"!=")+" "+(Array.isArray(n)?"["+n.join(", ")+"]":n)+")",this.stack=new Error().stack}me.prototype=new RangeError;me.prototype.constructor=RangeError;me.prototype.name="DimensionError";me.prototype.isDimensionError=!0;function In(e,n,t){if(!(this instanceof In))throw new SyntaxError("Constructor must be called with the new operator");this.index=e,arguments.length<3?(this.min=0,this.max=n):(this.min=n,this.max=t),this.min!==void 0&&this.index<this.min?this.message="Index out of range ("+this.index+" < "+this.min+")":this.max!==void 0&&this.index>=this.max?this.message="Index out of range ("+this.index+" > "+(this.max-1)+")":this.message="Index out of range ("+this.index+")",this.stack=new Error().stack}In.prototype=new RangeError;In.prototype.constructor=RangeError;In.prototype.name="IndexError";In.prototype.isIndexError=!0;function Ue(e){for(var n=[];Array.isArray(e);)n.push(e.length),e=e[0];return n}function qr(e,n,t){var i,r=e.length;if(r!==n[t])throw new me(r,n[t]);if(t<n.length-1){var u=t+1;for(i=0;i<r;i++){var o=e[i];if(!Array.isArray(o))throw new me(n.length-1,n.length,"<");qr(e[i],n,u)}}else for(i=0;i<r;i++)if(Array.isArray(e[i]))throw new me(n.length+1,n.length,">")}function Kt(e,n){var t=n.length===0;if(t){if(Array.isArray(e))throw new me(e.length,0)}else qr(e,n,0)}function we(e,n){if(e!==void 0){if(!pe(e)||!ge(e))throw new TypeError("Index must be an integer (value: "+e+")");if(e<0||typeof n=="number"&&e>=n)throw new In(e,n)}}function tt(e,n,t){if(!Array.isArray(n))throw new TypeError("Array expected");if(n.length===0)throw new Error("Resizing to scalar is not supported");n.forEach(function(r){if(!pe(r)||!ge(r)||r<0)throw new TypeError("Invalid size, must contain positive integers (size: "+Ne(n)+")")}),(pe(e)||be(e))&&(e=[e]);var i=t!==void 0?t:0;return bt(e,n,0,i),e}function bt(e,n,t,i){var r,u,o=e.length,s=n[t],l=Math.min(o,s);if(e.length=s,t<n.length-1){var f=t+1;for(r=0;r<l;r++)u=e[r],Array.isArray(u)||(u=[u],e[r]=u),bt(u,n,f,i);for(r=l;r<s;r++)u=[],e[r]=u,bt(u,n,f,i)}else{for(r=0;r<l;r++)for(;Array.isArray(e[r]);)e[r]=e[r][0];for(r=l;r<s;r++)e[r]=i}}function Gr(e,n){var t=Ss(e,!0),i=t.length;if(!Array.isArray(e)||!Array.isArray(n))throw new TypeError("Array expected");if(n.length===0)throw new me(0,i,"!=");n=xt(n,i);var r=Hr(n);if(i!==r)throw new me(r,i,"!=");try{return _s(t,n)}catch(u){throw u instanceof me?new me(r,i,"!="):u}}function xt(e,n){var t=Hr(e),i=e.slice(),r=-1,u=e.indexOf(r),o=e.indexOf(r,u+1)>=0;if(o)throw new Error("More than one wildcard in sizes");var s=u>=0,l=n%t===0;if(s)if(l)i[u]=-n/t;else throw new Error("Could not replace wildcard, since "+n+" is no multiple of "+-t);return i}function Hr(e){return e.reduce((n,t)=>n*t,1)}function _s(e,n){for(var t=e,i,r=n.length-1;r>0;r--){var u=n[r];i=[];for(var o=t.length/u,s=0;s<o;s++)i.push(t.slice(s*u,(s+1)*u));t=i}return t}function Wr(e,n,t,i){var r=i||Ue(e);if(t)for(var u=0;u<t;u++)e=[e],r.unshift(1);for(e=Zr(e,n,0);r.length<n;)r.push(1);return e}function Zr(e,n,t){var i,r;if(Array.isArray(e)){var u=t+1;for(i=0,r=e.length;i<r;i++)e[i]=Zr(e[i],n,u)}else for(var o=t;o<n;o++)e=[e];return e}function Ss(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(!Array.isArray(e))return e;if(typeof n!="boolean")throw new TypeError("Boolean expected for second argument of flatten");var t=[];return n?r(e):i(e),t;function i(u){for(var o=0;o<u.length;o++){var s=u[o];Array.isArray(s)?i(s):t.push(s)}}function r(u){if(Array.isArray(u[0]))for(var o=0;o<u.length;o++)r(u[o]);else for(var s=0;s<u.length;s++)t.push(u[s])}}function It(e,n){for(var t,i=0,r=0;r<e.length;r++){var u=e[r],o=Array.isArray(u);if(r===0&&o&&(i=u.length),o&&u.length!==i)return;var s=o?It(u,n):n(u);if(t===void 0)t=s;else if(t!==s)return"mixed"}return t}function jr(e,n,t,i){if(i<t){if(e.length!==n.length)throw new me(e.length,n.length);for(var r=[],u=0;u<e.length;u++)r[u]=jr(e[u],n[u],t,i+1);return r}else return e.concat(n)}function Ms(){var e=Array.prototype.slice.call(arguments,0,-1),n=Array.prototype.slice.call(arguments,-1);if(e.length===1)return e[0];if(e.length>1)return e.slice(1).reduce(function(t,i){return jr(t,i,n,0)},e[0]);throw new Error("Wrong number of arguments in function concat")}function Ts(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];for(var i=n.map(p=>p.length),r=Math.max(...i),u=new Array(r).fill(null),o=0;o<n.length;o++)for(var s=n[o],l=i[o],f=0;f<l;f++){var a=r-l+f;s[f]>u[a]&&(u[a]=s[f])}for(var h=0;h<n.length;h++)Yr(n[h],u);return u}function Yr(e,n){for(var t=n.length,i=e.length,r=0;r<i;r++){var u=t-i+r;if(e[r]<n[u]&&e[r]>1||e[r]>n[u])throw new Error("shape mismatch: mismatch is found in arg with shape (".concat(e,") not possible to broadcast dimension ").concat(i," with size ").concat(e[r]," to size ").concat(n[u]))}}function Qt(e,n){var t=Ue(e);if(Sn(t,n))return e;Yr(t,n);var i=Ts(t,n),r=i.length,u=[...Array(r-t.length).fill(1),...t],o=Is(e);t.length<r&&(o=Gr(o,u),t=Ue(o));for(var s=0;s<r;s++)t[s]<i[s]&&(o=xs(o,i[s],s),t=Ue(o));return o}function xs(e,n,t){return Ms(...Array(n).fill(e),t)}function Jr(e,n){if(!Array.isArray(e))throw new Error("Array expected");var t=Ue(e);if(n.length!==t.length)throw new me(n.length,t.length);for(var i=0;i<n.length;i++)we(n[i],t[i]);return n.reduce((r,u)=>r[u],e)}function er(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(e.length===0)return[];if(t)return u(e);var i=[];return r(e,0);function r(o,s){if(Array.isArray(o)){for(var l=o.length,f=Array(l),a=0;a<l;a++)i[s]=a,f[a]=r(o[a],s+1);return f}else return n(o,i.slice(0,s),e)}function u(o){if(Array.isArray(o)){for(var s=o.length,l=Array(s),f=0;f<s;f++)l[f]=u(o[f]);return l}else return n(o)}}function Is(e){return Fr([],e)}function rt(e,n,t){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(Kn.isTypedFunction(e)){var r;if(i)r=1;else{var u=(n.isMatrix?n.size():Ue(n)).map(()=>0),o=n.isMatrix?n.get(u):Jr(n,u);r=zs(e,o,u,n)}var s;if(n.isMatrix&&n.dataType!=="mixed"&&n.dataType!==void 0){var l=Os(e,r);s=l!==void 0?l:e}else s=e;return r>=1&&r<=3?{isUnary:r===1,fn:function(){for(var a=arguments.length,h=new Array(a),p=0;p<a;p++)h[p]=arguments[p];return nr(s,h.slice(0,r),t,e.name)}}:{isUnary:!1,fn:function(){for(var a=arguments.length,h=new Array(a),p=0;p<a;p++)h[p]=arguments[p];return nr(s,h,t,e.name)}}}return i===void 0?{isUnary:Ps(e),fn:e}:{isUnary:i,fn:e}}function Os(e,n){var t=[];if(Object.entries(e.signatures).forEach(i=>{var[r,u]=i;r.split(",").length===n&&t.push(u)}),t.length===1)return t[0]}function Ps(e){if(e.length!==1)return!1;var n=e.toString();if(/arguments/.test(n))return!1;var t=n.match(/\(.*?\)/);return!/\.\.\./.test(t)}function zs(e,n,t,i){for(var r=[n,t,i],u=3;u>0;u--){var o=r.slice(0,u);if(Kn.resolve(e,o)!==null)return u}}function nr(e,n,t,i){try{return e(...n)}catch(r){Rs(r,n,t,i)}}function Rs(e,n,t,i){var r;if(e instanceof TypeError&&((r=e.data)===null||r===void 0?void 0:r.category)==="wrongType"){var u=[];throw u.push("value: ".concat(hn(n[0]))),n.length>=2&&u.push("index: ".concat(hn(n[1]))),n.length>=3&&u.push("array: ".concat(hn(n[2]))),new TypeError("Function ".concat(t," cannot apply callback arguments ")+"".concat(i,"(").concat(u.join(", "),") at index ").concat(JSON.stringify(n[1])))}else throw new TypeError("Function ".concat(t," cannot apply callback arguments ")+"to function ".concat(i,": ").concat(e.message))}var $s="DenseMatrix",Us=["Matrix"],Vs=ne($s,Us,e=>{var{Matrix:n}=e;function t(a,h){if(!(this instanceof t))throw new SyntaxError("Constructor must be called with the new operator");if(h&&!en(h))throw new Error("Invalid datatype: "+h);if(Ce(a))a.type==="DenseMatrix"?(this._data=Ee(a._data),this._size=Ee(a._size),this._datatype=h||a._datatype):(this._data=a.toArray(),this._size=a.size(),this._datatype=h||a._datatype);else if(a&&_e(a.data)&&_e(a.size))this._data=a.data,this._size=a.size,Kt(this._data,this._size),this._datatype=h||a.datatype;else if(_e(a))this._data=f(a),this._size=Ue(this._data),Kt(this._data,this._size),this._datatype=h;else{if(a)throw new TypeError("Unsupported type of data ("+hn(a)+")");this._data=[],this._size=[0],this._datatype=h}}t.prototype=new n,t.prototype.createDenseMatrix=function(a,h){return new t(a,h)},Object.defineProperty(t,"name",{value:"DenseMatrix"}),t.prototype.constructor=t,t.prototype.type="DenseMatrix",t.prototype.isDenseMatrix=!0,t.prototype.getDataType=function(){return It(this._data,hn)},t.prototype.storage=function(){return"dense"},t.prototype.datatype=function(){return this._datatype},t.prototype.create=function(a,h){return new t(a,h)},t.prototype.subset=function(a,h,p){switch(arguments.length){case 1:return i(this,a);case 2:case 3:return u(this,a,h,p);default:throw new SyntaxError("Wrong number of arguments")}},t.prototype.get=function(a){return Jr(this._data,a)},t.prototype.set=function(a,h,p){if(!_e(a))throw new TypeError("Array expected");if(a.length<this._size.length)throw new me(a.length,this._size.length,"<");var g,d,c,m=a.map(function(C){return C+1});l(this,m,p);var w=this._data;for(g=0,d=a.length-1;g<d;g++)c=a[g],we(c,w.length),w=w[c];return c=a[a.length-1],we(c,w.length),w[c]=h,this};function i(a,h){if(!_t(h))throw new TypeError("Invalid index");var p=h.isScalar();if(p)return a.get(h.min());var g=h.size();if(g.length!==a._size.length)throw new me(g.length,a._size.length);for(var d=h.min(),c=h.max(),m=0,w=a._size.length;m<w;m++)we(d[m],a._size[m]),we(c[m],a._size[m]);var C=new t([]),F=r(a._data,h);return C._size=F.size,C._datatype=a._datatype,C._data=F.data,C}function r(a,h){var p=h.size().length-1,g=Array(p);return{data:d(a),size:g};function d(c){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,w=h.dimension(m);return g[m]=w.size()[0],m<p?w.map(C=>(we(C,c.length),d(c[C],m+1))).valueOf():w.map(C=>(we(C,c.length),c[C])).valueOf()}}function u(a,h,p,g){if(!h||h.isIndex!==!0)throw new TypeError("Invalid index");var d=h.size(),c=h.isScalar(),m;if(Ce(p)?(m=p.size(),p=p.valueOf()):m=Ue(p),c){if(m.length!==0)throw new TypeError("Scalar expected");a.set(h.min(),p,g)}else{if(!Sn(m,d))try{m.length===0?p=Qt([p],d):p=Qt(p,d),m=Ue(p)}catch{}if(d.length<a._size.length)throw new me(d.length,a._size.length,"<");if(m.length<d.length){for(var w=0,C=0;d[w]===1&&m[w]===1;)w++;for(;d[w]===1;)C++,w++;p=Wr(p,d.length,C,m)}if(!Sn(d,m))throw new me(d,m,">");var F=h.max().map(function(A){return A+1});l(a,F,g),o(a._data,h,p)}return a}function o(a,h,p){var g=h.size().length-1;d(a,p);function d(c,m){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,C=h.dimension(w);w<g?C.forEach((F,A)=>{we(F,c.length),d(c[F],m[A[0]],w+1)}):C.forEach((F,A)=>{we(F,c.length),c[F]=m[A[0]]})}}t.prototype.resize=function(a,h,p){if(!Jn(a))throw new TypeError("Array or Matrix expected");var g=a.valueOf().map(c=>Array.isArray(c)&&c.length===1?c[0]:c),d=p?this.clone():this;return s(d,g,h)};function s(a,h,p){if(h.length===0){for(var g=a._data;_e(g);)g=g[0];return g}return a._size=h.slice(0),a._data=tt(a._data,a._size,p),a}t.prototype.reshape=function(a,h){var p=h?this.clone():this;p._data=Gr(p._data,a);var g=p._size.reduce((d,c)=>d*c);return p._size=xt(a,g),p};function l(a,h,p){for(var g=a._size.slice(0),d=!1;g.length<h.length;)g.push(0),d=!0;for(var c=0,m=h.length;c<m;c++)h[c]>g[c]&&(g[c]=h[c],d=!0);d&&s(a,g,p)}t.prototype.clone=function(){var a=new t({data:Ee(this._data),size:Ee(this._size),datatype:this._datatype});return a},t.prototype.size=function(){return this._size.slice(0)},t.prototype.map=function(a){var h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,p=this,g=p._size.length-1;if(g<0)return p.clone();var d=rt(a,p,"map",h),c=d.fn,m=p.create(void 0,p._datatype);if(m._size=p._size,h||d.isUnary)return m._data=D(p._data),m;if(g===0){for(var w=p.valueOf(),C=Array(w.length),F=0;F<w.length;F++)C[F]=c(w[F],[F],p);return m._data=C,m}var A=[];return m._data=y(p._data),m;function y(b){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,N=Array(b.length);if(B<g)for(var M=0;M<b.length;M++)A[B]=M,N[M]=y(b[M],B+1);else for(var x=0;x<b.length;x++)A[B]=x,N[x]=c(b[x],A.slice(),p);return N}function D(b){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,N=Array(b.length);if(B<g)for(var M=0;M<b.length;M++)N[M]=D(b[M],B+1);else for(var x=0;x<b.length;x++)N[x]=c(b[x]);return N}},t.prototype.forEach=function(a){var h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,p=this,g=p._size.length-1;if(g<0)return;var d=rt(a,p,"map",h),c=d.fn;if(h||d.isUnary){F(p._data);return}if(g===0){for(var m=0;m<p._data.length;m++)c(p._data[m],[m],p);return}var w=[];C(p._data);function C(A){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(y<g)for(var D=0;D<A.length;D++)w[y]=D,C(A[D],y+1);else for(var b=0;b<A.length;b++)w[y]=b,c(A[b],w.slice(),p)}function F(A){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(y<g)for(var D=0;D<A.length;D++)F(A[D],y+1);else for(var b=0;b<A.length;b++)c(A[b])}},t.prototype[Symbol.iterator]=function*(){var a=this._size.length-1;if(!(a<0)){if(a===0){for(var h=0;h<this._data.length;h++)yield{value:this._data[h],index:[h]};return}for(var p=Array(a+1).fill(0),g=this._size.reduce((C,F)=>C*F,1),d=0;d<g;d++){for(var c=this._data,m=0;m<a;m++)c=c[p[m]];yield{value:c[p[a]],index:p.slice()};for(var w=a;w>=0&&(p[w]++,!(p[w]<this._size[w]));w--)p[w]=0}}},t.prototype.rows=function(){var a=[],h=this.size();if(h.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");var p=this._data;for(var g of p)a.push(new t([g],this._datatype));return a},t.prototype.columns=function(){var a=this,h=[],p=this.size();if(p.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");for(var g=this._data,d=function(w){var C=g.map(F=>[F[w]]);h.push(new t(C,a._datatype))},c=0;c<p[1];c++)d(c);return h},t.prototype.toArray=function(){return Ee(this._data)},t.prototype.valueOf=function(){return this._data},t.prototype.format=function(a){return Ne(this._data,a)},t.prototype.toString=function(){return Ne(this._data)},t.prototype.toJSON=function(){return{mathjs:"DenseMatrix",data:this._data,size:this._size,datatype:this._datatype}},t.prototype.diagonal=function(a){if(a){if(be(a)&&(a=a.toNumber()),!pe(a)||!ge(a))throw new TypeError("The parameter k must be an integer number")}else a=0;for(var h=a>0?a:0,p=a<0?-a:0,g=this._size[0],d=this._size[1],c=Math.min(g-p,d-h),m=[],w=0;w<c;w++)m[w]=this._data[w+p][w+h];return new t({data:m,size:[c],datatype:this._datatype})},t.diagonal=function(a,h,p,g){if(!_e(a))throw new TypeError("Array expected, size parameter");if(a.length!==2)throw new Error("Only two dimensions matrix are supported");if(a=a.map(function(b){if(be(b)&&(b=b.toNumber()),!pe(b)||!ge(b)||b<1)throw new Error("Size values must be positive integers");return b}),p){if(be(p)&&(p=p.toNumber()),!pe(p)||!ge(p))throw new TypeError("The parameter k must be an integer number")}else p=0;var d=p>0?p:0,c=p<0?-p:0,m=a[0],w=a[1],C=Math.min(m-c,w-d),F;if(_e(h)){if(h.length!==C)throw new Error("Invalid value array length");F=function(B){return h[B]}}else if(Ce(h)){var A=h.size();if(A.length!==1||A[0]!==C)throw new Error("Invalid matrix length");F=function(B){return h.get([B])}}else F=function(){return h};g||(g=be(F(0))?F(0).mul(0):0);var y=[];if(a.length>0){y=tt(y,a,g);for(var D=0;D<C;D++)y[D+c][D+d]=F(D)}return new t({data:y,size:[m,w]})},t.fromJSON=function(a){return new t(a)},t.prototype.swapRows=function(a,h){if(!pe(a)||!ge(a)||!pe(h)||!ge(h))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return we(a,this._size[0]),we(h,this._size[0]),t._swapRows(a,h,this._data),this},t._swapRows=function(a,h,p){var g=p[a];p[a]=p[h],p[h]=g};function f(a){return Ce(a)?f(a.valueOf()):_e(a)?a.map(f):a}return t},{isClass:!0});function an(e,n,t){if(!t)return Ce(e)?e.map(r=>n(r),!1,!0):er(e,n,!0);var i=r=>r===0?r:n(r);return Ce(e)?e.map(r=>i(r),!1,!0):er(e,i,!0)}var Xr="number",ct="number, number";function Kr(e){return Math.abs(e)}Kr.signature=Xr;function Qr(e,n){return e+n}Qr.signature=ct;function ei(e,n){return e-n}ei.signature=ct;function ni(e,n){return e*n}ni.signature=ct;function ti(e){return-e}ti.signature=Xr;function ri(e,n){return e*e<1&&n===1/0||e*e>1&&n===-1/0?0:Math.pow(e,n)}ri.signature=ct;function zn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!ge(n)||n<0||n>15)throw new Error("Number of decimals in function round must be an integer from 0 to 15 inclusive");return parseFloat(_r(e,n))}function At(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1e-9,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;if(t<=0)throw new Error("Relative tolerance must be greater than 0");if(i<0)throw new Error("Absolute tolerance must be at least 0");return e.isNaN()||n.isNaN()?!1:!e.isFinite()||!n.isFinite()?e.eq(n):e.eq(n)?!0:e.minus(n).abs().lte(e.constructor.max(e.constructor.max(e.abs(),n.abs()).mul(t),i))}var tr="isZero",ks=["typed","equalScalar"],Ls=ne(tr,ks,e=>{var{typed:n,equalScalar:t}=e;return n(tr,{"number | BigNumber | Complex | Fraction":i=>t(i,0),bigint:i=>i===0n,Unit:n.referToSelf(i=>r=>n.find(i,r.valueType())(r.value)),"Array | Matrix":n.referToSelf(i=>r=>an(r,i))})});function qs(e,n,t,i){return Mn(e.re,n.re,t,i)&&Mn(e.im,n.im,t,i)}var Gs=ne("compareUnits",["typed"],e=>{var{typed:n}=e;return{"Unit, Unit":n.referToSelf(t=>(i,r)=>{if(!i.equalBase(r))throw new Error("Cannot compare units with different base");return n.find(t,[i.valueType(),r.valueType()])(i.value,r.value)})}}),it="equalScalar",Hs=["typed","config"],Ws=ne(it,Hs,e=>{var{typed:n,config:t}=e,i=Gs({typed:n});return n(it,{"boolean, boolean":function(u,o){return u===o},"number, number":function(u,o){return Mn(u,o,t.relTol,t.absTol)},"BigNumber, BigNumber":function(u,o){return u.eq(o)||At(u,o,t.relTol,t.absTol)},"bigint, bigint":function(u,o){return u===o},"Fraction, Fraction":function(u,o){return u.equals(o)},"Complex, Complex":function(u,o){return qs(u,o,t.relTol,t.absTol)}},i)});ne(it,["typed","config"],e=>{var{typed:n,config:t}=e;return n(it,{"number, number":function(r,u){return Mn(r,u,t.relTol,t.absTol)}})});var Zs="SparseMatrix",js=["typed","equalScalar","Matrix"],Ys=ne(Zs,js,e=>{var{typed:n,equalScalar:t,Matrix:i}=e;function r(c,m){if(!(this instanceof r))throw new SyntaxError("Constructor must be called with the new operator");if(m&&!en(m))throw new Error("Invalid datatype: "+m);if(Ce(c))u(this,c,m);else if(c&&_e(c.index)&&_e(c.ptr)&&_e(c.size))this._values=c.values,this._index=c.index,this._ptr=c.ptr,this._size=c.size,this._datatype=m||c.datatype;else if(_e(c))o(this,c,m);else{if(c)throw new TypeError("Unsupported type of data ("+hn(c)+")");this._values=[],this._index=[],this._ptr=[0],this._size=[0,0],this._datatype=m}}function u(c,m,w){m.type==="SparseMatrix"?(c._values=m._values?Ee(m._values):void 0,c._index=Ee(m._index),c._ptr=Ee(m._ptr),c._size=Ee(m._size),c._datatype=w||m._datatype):o(c,m.valueOf(),w||m._datatype)}function o(c,m,w){c._values=[],c._index=[],c._ptr=[],c._datatype=w;var C=m.length,F=0,A=t,y=0;if(en(w)&&(A=n.find(t,[w,w])||t,y=n.convert(0,w)),C>0){var D=0;do{c._ptr.push(c._index.length);for(var b=0;b<C;b++){var B=m[b];if(_e(B)){if(D===0&&F<B.length&&(F=B.length),D<B.length){var N=B[D];A(N,y)||(c._values.push(N),c._index.push(b))}}else D===0&&F<1&&(F=1),A(B,y)||(c._values.push(B),c._index.push(b))}D++}while(D<F)}c._ptr.push(c._index.length),c._size=[C,F]}r.prototype=new i,r.prototype.createSparseMatrix=function(c,m){return new r(c,m)},Object.defineProperty(r,"name",{value:"SparseMatrix"}),r.prototype.constructor=r,r.prototype.type="SparseMatrix",r.prototype.isSparseMatrix=!0,r.prototype.getDataType=function(){return It(this._values,hn)},r.prototype.storage=function(){return"sparse"},r.prototype.datatype=function(){return this._datatype},r.prototype.create=function(c,m){return new r(c,m)},r.prototype.density=function(){var c=this._size[0],m=this._size[1];return c!==0&&m!==0?this._index.length/(c*m):0},r.prototype.subset=function(c,m,w){if(!this._values)throw new Error("Cannot invoke subset on a Pattern only matrix");switch(arguments.length){case 1:return s(this,c);case 2:case 3:return l(this,c,m,w);default:throw new SyntaxError("Wrong number of arguments")}};function s(c,m){if(!_t(m))throw new TypeError("Invalid index");var w=m.isScalar();if(w)return c.get(m.min());var C=m.size();if(C.length!==c._size.length)throw new me(C.length,c._size.length);var F,A,y,D,b=m.min(),B=m.max();for(F=0,A=c._size.length;F<A;F++)we(b[F],c._size[F]),we(B[F],c._size[F]);var N=c._values,M=c._index,x=c._ptr,L=m.dimension(0),W=m.dimension(1),Z=[],q=[];L.forEach(function(Y,Q){q[Y]=Q[0],Z[Y]=!0});var $=N?[]:void 0,X=[],j=[];return W.forEach(function(Y){for(j.push(X.length),y=x[Y],D=x[Y+1];y<D;y++)F=M[y],Z[F]===!0&&(X.push(q[F]),$&&$.push(N[y]))}),j.push(X.length),new r({values:$,index:X,ptr:j,size:C,datatype:c._datatype})}function l(c,m,w,C){if(!m||m.isIndex!==!0)throw new TypeError("Invalid index");var F=m.size(),A=m.isScalar(),y;if(Ce(w)?(y=w.size(),w=w.toArray()):y=Ue(w),A){if(y.length!==0)throw new TypeError("Scalar expected");c.set(m.min(),w,C)}else{if(F.length!==1&&F.length!==2)throw new me(F.length,c._size.length,"<");if(y.length<F.length){for(var D=0,b=0;F[D]===1&&y[D]===1;)D++;for(;F[D]===1;)b++,D++;w=Wr(w,F.length,b,y)}if(!Sn(F,y))throw new me(F,y,">");if(F.length===1){var B=m.dimension(0);B.forEach(function(x,L){we(x),c.set([x,0],w[L[0]],C)})}else{var N=m.dimension(0),M=m.dimension(1);N.forEach(function(x,L){we(x),M.forEach(function(W,Z){we(W),c.set([x,W],w[L[0]][Z[0]],C)})})}}return c}r.prototype.get=function(c){if(!_e(c))throw new TypeError("Array expected");if(c.length!==this._size.length)throw new me(c.length,this._size.length);if(!this._values)throw new Error("Cannot invoke get on a Pattern only matrix");var m=c[0],w=c[1];we(m,this._size[0]),we(w,this._size[1]);var C=f(m,this._ptr[w],this._ptr[w+1],this._index);return C<this._ptr[w+1]&&this._index[C]===m?this._values[C]:0},r.prototype.set=function(c,m,w){if(!_e(c))throw new TypeError("Array expected");if(c.length!==this._size.length)throw new me(c.length,this._size.length);if(!this._values)throw new Error("Cannot invoke set on a Pattern only matrix");var C=c[0],F=c[1],A=this._size[0],y=this._size[1],D=t,b=0;en(this._datatype)&&(D=n.find(t,[this._datatype,this._datatype])||t,b=n.convert(0,this._datatype)),(C>A-1||F>y-1)&&(p(this,Math.max(C+1,A),Math.max(F+1,y),w),A=this._size[0],y=this._size[1]),we(C,A),we(F,y);var B=f(C,this._ptr[F],this._ptr[F+1],this._index);return B<this._ptr[F+1]&&this._index[B]===C?D(m,b)?a(B,F,this._values,this._index,this._ptr):this._values[B]=m:D(m,b)||h(B,C,F,m,this._values,this._index,this._ptr),this};function f(c,m,w,C){if(w-m===0)return w;for(var F=m;F<w;F++)if(C[F]===c)return F;return m}function a(c,m,w,C,F){w.splice(c,1),C.splice(c,1);for(var A=m+1;A<F.length;A++)F[A]--}function h(c,m,w,C,F,A,y){F.splice(c,0,C),A.splice(c,0,m);for(var D=w+1;D<y.length;D++)y[D]++}r.prototype.resize=function(c,m,w){if(!Jn(c))throw new TypeError("Array or Matrix expected");var C=c.valueOf().map(A=>Array.isArray(A)&&A.length===1?A[0]:A);if(C.length!==2)throw new Error("Only two dimensions matrix are supported");C.forEach(function(A){if(!pe(A)||!ge(A)||A<0)throw new TypeError("Invalid size, must contain positive integers (size: "+Ne(C)+")")});var F=w?this.clone():this;return p(F,C[0],C[1],m)};function p(c,m,w,C){var F=C||0,A=t,y=0;en(c._datatype)&&(A=n.find(t,[c._datatype,c._datatype])||t,y=n.convert(0,c._datatype),F=n.convert(F,c._datatype));var D=!A(F,y),b=c._size[0],B=c._size[1],N,M,x;if(w>B){for(M=B;M<w;M++)if(c._ptr[M]=c._values.length,D)for(N=0;N<b;N++)c._values.push(F),c._index.push(N);c._ptr[w]=c._values.length}else w<B&&(c._ptr.splice(w+1,B-w),c._values.splice(c._ptr[w],c._values.length),c._index.splice(c._ptr[w],c._index.length));if(B=w,m>b){if(D){var L=0;for(M=0;M<B;M++){c._ptr[M]=c._ptr[M]+L,x=c._ptr[M+1]+L;var W=0;for(N=b;N<m;N++,W++)c._values.splice(x+W,0,F),c._index.splice(x+W,0,N),L++}c._ptr[B]=c._values.length}}else if(m<b){var Z=0;for(M=0;M<B;M++){c._ptr[M]=c._ptr[M]-Z;var q=c._ptr[M],$=c._ptr[M+1]-Z;for(x=q;x<$;x++)N=c._index[x],N>m-1&&(c._values.splice(x,1),c._index.splice(x,1),Z++)}c._ptr[M]=c._values.length}return c._size[0]=m,c._size[1]=w,c}r.prototype.reshape=function(c,m){if(!_e(c))throw new TypeError("Array expected");if(c.length!==2)throw new Error("Sparse matrices can only be reshaped in two dimensions");c.forEach(function(Y){if(!pe(Y)||!ge(Y)||Y<=-2||Y===0)throw new TypeError("Invalid size, must contain positive integers or -1 (size: "+Ne(c)+")")});var w=this._size[0]*this._size[1];c=xt(c,w);var C=c[0]*c[1];if(w!==C)throw new Error("Reshaping sparse matrix will result in the wrong number of elements");var F=m?this.clone():this;if(this._size[0]===c[0]&&this._size[1]===c[1])return F;for(var A=[],y=0;y<F._ptr.length;y++)for(var D=0;D<F._ptr[y+1]-F._ptr[y];D++)A.push(y);for(var b=F._values.slice(),B=F._index.slice(),N=0;N<F._index.length;N++){var M=B[N],x=A[N],L=M*F._size[1]+x;A[N]=L%c[1],B[N]=Math.floor(L/c[1])}F._values.length=0,F._index.length=0,F._ptr.length=c[1]+1,F._size=c.slice();for(var W=0;W<F._ptr.length;W++)F._ptr[W]=0;for(var Z=0;Z<b.length;Z++){var q=B[Z],$=A[Z],X=b[Z],j=f(q,F._ptr[$],F._ptr[$+1],F._index);h(j,q,$,X,F._values,F._index,F._ptr)}return F},r.prototype.clone=function(){var c=new r({values:this._values?Ee(this._values):void 0,index:Ee(this._index),ptr:Ee(this._ptr),size:Ee(this._size),datatype:this._datatype});return c},r.prototype.size=function(){return this._size.slice(0)},r.prototype.map=function(c,m){if(!this._values)throw new Error("Cannot invoke map on a Pattern only matrix");var w=this,C=this._size[0],F=this._size[1],A=rt(c,w,"map"),y=function(b,B,N){return A.fn(b,[B,N],w)};return g(this,0,C-1,0,F-1,y,m)};function g(c,m,w,C,F,A,y){var D=[],b=[],B=[],N=t,M=0;en(c._datatype)&&(N=n.find(t,[c._datatype,c._datatype])||t,M=n.convert(0,c._datatype));for(var x=function(se,Ae,Fe){var ye=A(se,Ae,Fe);N(ye,M)||(D.push(ye),b.push(Ae))},L=C;L<=F;L++){B.push(D.length);var W=c._ptr[L],Z=c._ptr[L+1];if(y)for(var q=W;q<Z;q++){var $=c._index[q];$>=m&&$<=w&&x(c._values[q],$-m,L-C)}else{for(var X={},j=W;j<Z;j++){var Y=c._index[j];X[Y]=c._values[j]}for(var Q=m;Q<=w;Q++){var ie=Q in X?X[Q]:0;x(ie,Q-m,L-C)}}}return B.push(D.length),new r({values:D,index:b,ptr:B,size:[w-m+1,F-C+1]})}r.prototype.forEach=function(c,m){if(!this._values)throw new Error("Cannot invoke forEach on a Pattern only matrix");for(var w=this,C=this._size[0],F=this._size[1],A=rt(c,w,"forEach"),y=0;y<F;y++){var D=this._ptr[y],b=this._ptr[y+1];if(m)for(var B=D;B<b;B++){var N=this._index[B];A.fn(this._values[B],[N,y],w)}else{for(var M={},x=D;x<b;x++){var L=this._index[x];M[L]=this._values[x]}for(var W=0;W<C;W++){var Z=W in M?M[W]:0;A.fn(Z,[W,y],w)}}}},r.prototype[Symbol.iterator]=function*(){if(!this._values)throw new Error("Cannot iterate a Pattern only matrix");for(var c=this._size[1],m=0;m<c;m++)for(var w=this._ptr[m],C=this._ptr[m+1],F=w;F<C;F++){var A=this._index[F];yield{value:this._values[F],index:[A,m]}}},r.prototype.toArray=function(){return d(this._values,this._index,this._ptr,this._size,!0)},r.prototype.valueOf=function(){return d(this._values,this._index,this._ptr,this._size,!1)};function d(c,m,w,C,F){var A=C[0],y=C[1],D=[],b,B;for(b=0;b<A;b++)for(D[b]=[],B=0;B<y;B++)D[b][B]=0;for(B=0;B<y;B++)for(var N=w[B],M=w[B+1],x=N;x<M;x++)b=m[x],D[b][B]=c?F?Ee(c[x]):c[x]:1;return D}return r.prototype.format=function(c){for(var m=this._size[0],w=this._size[1],C=this.density(),F="Sparse Matrix ["+Ne(m,c)+" x "+Ne(w,c)+"] density: "+Ne(C,c)+`
`,A=0;A<w;A++)for(var y=this._ptr[A],D=this._ptr[A+1],b=y;b<D;b++){var B=this._index[b];F+=`
    (`+Ne(B,c)+", "+Ne(A,c)+") ==> "+(this._values?Ne(this._values[b],c):"X")}return F},r.prototype.toString=function(){return Ne(this.toArray())},r.prototype.toJSON=function(){return{mathjs:"SparseMatrix",values:this._values,index:this._index,ptr:this._ptr,size:this._size,datatype:this._datatype}},r.prototype.diagonal=function(c){if(c){if(be(c)&&(c=c.toNumber()),!pe(c)||!ge(c))throw new TypeError("The parameter k must be an integer number")}else c=0;var m=c>0?c:0,w=c<0?-c:0,C=this._size[0],F=this._size[1],A=Math.min(C-w,F-m),y=[],D=[],b=[];b[0]=0;for(var B=m;B<F&&y.length<A;B++)for(var N=this._ptr[B],M=this._ptr[B+1],x=N;x<M;x++){var L=this._index[x];if(L===B-m+w){y.push(this._values[x]),D[y.length-1]=L-w;break}}return b.push(y.length),new r({values:y,index:D,ptr:b,size:[A,1]})},r.fromJSON=function(c){return new r(c)},r.diagonal=function(c,m,w,C,F){if(!_e(c))throw new TypeError("Array expected, size parameter");if(c.length!==2)throw new Error("Only two dimensions matrix are supported");if(c=c.map(function(Y){if(be(Y)&&(Y=Y.toNumber()),!pe(Y)||!ge(Y)||Y<1)throw new Error("Size values must be positive integers");return Y}),w){if(be(w)&&(w=w.toNumber()),!pe(w)||!ge(w))throw new TypeError("The parameter k must be an integer number")}else w=0;var A=t,y=0;en(F)&&(A=n.find(t,[F,F])||t,y=n.convert(0,F));var D=w>0?w:0,b=w<0?-w:0,B=c[0],N=c[1],M=Math.min(B-b,N-D),x;if(_e(m)){if(m.length!==M)throw new Error("Invalid value array length");x=function(Q){return m[Q]}}else if(Ce(m)){var L=m.size();if(L.length!==1||L[0]!==M)throw new Error("Invalid matrix length");x=function(Q){return m.get([Q])}}else x=function(){return m};for(var W=[],Z=[],q=[],$=0;$<N;$++){q.push(W.length);var X=$-D;if(X>=0&&X<M){var j=x(X);A(j,y)||(Z.push(X+b),W.push(j))}}return q.push(W.length),new r({values:W,index:Z,ptr:q,size:[B,N]})},r.prototype.swapRows=function(c,m){if(!pe(c)||!ge(c)||!pe(m)||!ge(m))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return we(c,this._size[0]),we(m,this._size[0]),r._swapRows(c,m,this._size[1],this._values,this._index,this._ptr),this},r._forEachRow=function(c,m,w,C,F){for(var A=C[c],y=C[c+1],D=A;D<y;D++)F(w[D],m[D])},r._swapRows=function(c,m,w,C,F,A){for(var y=0;y<w;y++){var D=A[y],b=A[y+1],B=f(c,D,b,F),N=f(m,D,b,F);if(B<b&&N<b&&F[B]===c&&F[N]===m){if(C){var M=C[B];C[B]=C[N],C[N]=M}continue}if(B<b&&F[B]===c&&(N>=b||F[N]!==m)){var x=C?C[B]:void 0;F.splice(N,0,m),C&&C.splice(N,0,x),F.splice(N<=B?B+1:B,1),C&&C.splice(N<=B?B+1:B,1);continue}if(N<b&&F[N]===m&&(B>=b||F[B]!==c)){var L=C?C[N]:void 0;F.splice(B,0,c),C&&C.splice(B,0,L),F.splice(B<=N?N+1:N,1),C&&C.splice(B<=N?N+1:N,1)}}},r},{isClass:!0}),Js="number",Xs=["typed"];function Ks(e){var n=e.match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/);if(n){var t={"0b":2,"0o":8,"0x":16}[n[1]],i=n[2],r=n[3];return{input:e,radix:t,integerPart:i,fractionalPart:r}}else return null}function Qs(e){for(var n=parseInt(e.integerPart,e.radix),t=0,i=0;i<e.fractionalPart.length;i++){var r=parseInt(e.fractionalPart[i],e.radix);t+=r/Math.pow(e.radix,i+1)}var u=n+t;if(isNaN(u))throw new SyntaxError('String "'+e.input+'" is not a valid number');return u}var ea=ne(Js,Xs,e=>{var{typed:n}=e,t=n("number",{"":function(){return 0},number:function(r){return r},string:function(r){if(r==="NaN")return NaN;var u=Ks(r);if(u)return Qs(u);var o=0,s=r.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);s&&(o=Number(s[2]),r=s[1]);var l=Number(r);if(isNaN(l))throw new SyntaxError('String "'+r+'" is not a valid number');if(s){if(l>2**o-1)throw new SyntaxError('String "'.concat(r,'" is out of range'));l>=2**(o-1)&&(l=l-2**o)}return l},BigNumber:function(r){return r.toNumber()},bigint:function(r){return Number(r)},Fraction:function(r){return r.valueOf()},Unit:n.referToSelf(i=>r=>{var u=r.clone();return u.value=i(r.value),u}),null:function(r){return 0},"Unit, string | Unit":function(r,u){return r.toNumber(u)},"Array | Matrix":n.referToSelf(i=>r=>an(r,i))});return t.fromJSON=function(i){return parseFloat(i.value)},t}),na="bignumber",ta=["typed","BigNumber"],ra=ne(na,ta,e=>{var{typed:n,BigNumber:t}=e;return n("bignumber",{"":function(){return new t(0)},number:function(r){return new t(r+"")},string:function(r){var u=r.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);if(u){var o=u[2],s=t(u[1]),l=new t(2).pow(Number(o));if(s.gt(l.sub(1)))throw new SyntaxError('String "'.concat(r,'" is out of range'));var f=new t(2).pow(Number(o)-1);return s.gte(f)?s.sub(l):s}return new t(r)},BigNumber:function(r){return r},bigint:function(r){return new t(r.toString())},Unit:n.referToSelf(i=>r=>{var u=r.clone();return u.value=i(r.value),u}),Fraction:function(r){return new t(String(r.n)).div(String(r.d)).times(String(r.s))},null:function(r){return new t(0)},"Array | Matrix":n.referToSelf(i=>r=>an(r,i))})}),ia="fraction",ua=["typed","Fraction"],oa=ne(ia,ua,e=>{var{typed:n,Fraction:t}=e;return n("fraction",{number:function(r){if(!isFinite(r)||isNaN(r))throw new Error(r+" cannot be represented as a fraction");return new t(r)},string:function(r){return new t(r)},"number, number":function(r,u){return new t(r,u)},"bigint, bigint":function(r,u){return new t(r,u)},null:function(r){return new t(0)},BigNumber:function(r){return new t(r.toString())},bigint:function(r){return new t(r.toString())},Fraction:function(r){return r},Unit:n.referToSelf(i=>r=>{var u=r.clone();return u.value=i(r.value),u}),Object:function(r){return new t(r)},"Array | Matrix":n.referToSelf(i=>r=>an(r,i))})}),rr="matrix",sa=["typed","Matrix","DenseMatrix","SparseMatrix"],aa=ne(rr,sa,e=>{var{typed:n,Matrix:t,DenseMatrix:i,SparseMatrix:r}=e;return n(rr,{"":function(){return u([])},string:function(s){return u([],s)},"string, string":function(s,l){return u([],s,l)},Array:function(s){return u(s)},Matrix:function(s){return u(s,s.storage())},"Array | Matrix, string":u,"Array | Matrix, string, string":u});function u(o,s,l){if(s==="dense"||s==="default"||s===void 0)return new i(o,l);if(s==="sparse")return new r(o,l);throw new TypeError("Unknown matrix type "+JSON.stringify(s)+".")}}),ir="unaryMinus",ca=["typed"],fa=ne(ir,ca,e=>{var{typed:n}=e;return n(ir,{number:ti,"Complex | BigNumber | Fraction":t=>t.neg(),bigint:t=>-t,Unit:n.referToSelf(t=>i=>{var r=i.clone();return r.value=n.find(t,r.valueType())(i.value),r}),"Array | Matrix":n.referToSelf(t=>i=>an(i,t,!0))})}),ur="abs",la=["typed"],ha=ne(ur,la,e=>{var{typed:n}=e;return n(ur,{number:Kr,"Complex | BigNumber | Fraction | Unit":t=>t.abs(),bigint:t=>t<0n?-t:t,"Array | Matrix":n.referToSelf(t=>i=>an(i,t,!0))})}),or="addScalar",pa=["typed"],da=ne(or,pa,e=>{var{typed:n}=e;return n(or,{"number, number":Qr,"Complex, Complex":function(i,r){return i.add(r)},"BigNumber, BigNumber":function(i,r){return i.plus(r)},"bigint, bigint":function(i,r){return i+r},"Fraction, Fraction":function(i,r){return i.add(r)},"Unit, Unit":n.referToSelf(t=>(i,r)=>{if(i.value===null||i.value===void 0)throw new Error("Parameter x contains a unit with undefined value");if(r.value===null||r.value===void 0)throw new Error("Parameter y contains a unit with undefined value");if(!i.equalBase(r))throw new Error("Units do not match");var u=i.clone();return u.value=n.find(t,[u.valueType(),r.valueType()])(u.value,r.value),u.fixPrefix=!1,u})})}),sr="subtractScalar",ga=["typed"],ma=ne(sr,ga,e=>{var{typed:n}=e;return n(sr,{"number, number":ei,"Complex, Complex":function(i,r){return i.sub(r)},"BigNumber, BigNumber":function(i,r){return i.minus(r)},"bigint, bigint":function(i,r){return i-r},"Fraction, Fraction":function(i,r){return i.sub(r)},"Unit, Unit":n.referToSelf(t=>(i,r)=>{if(i.value===null||i.value===void 0)throw new Error("Parameter x contains a unit with undefined value");if(r.value===null||r.value===void 0)throw new Error("Parameter y contains a unit with undefined value");if(!i.equalBase(r))throw new Error("Units do not match");var u=i.clone();return u.value=n.find(t,[u.valueType(),r.valueType()])(u.value,r.value),u.fixPrefix=!1,u})})}),Da="matAlgo11xS0s",va=["typed","equalScalar"],ii=ne(Da,va,e=>{var{typed:n,equalScalar:t}=e;return function(r,u,o,s){var l=r._values,f=r._index,a=r._ptr,h=r._size,p=r._datatype;if(!l)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var g=h[0],d=h[1],c,m=t,w=0,C=o;typeof p=="string"&&(c=p,m=n.find(t,[c,c]),w=n.convert(0,c),u=n.convert(u,c),C=n.find(o,[c,c]));for(var F=[],A=[],y=[],D=0;D<d;D++){y[D]=A.length;for(var b=a[D],B=a[D+1],N=b;N<B;N++){var M=f[N],x=s?C(u,l[N]):C(l[N],u);m(x,w)||(A.push(M),F.push(x))}}return y[d]=A.length,r.createSparseMatrix({values:F,index:A,ptr:y,size:[g,d],datatype:c})}}),ya="matAlgo12xSfs",wa=["typed","DenseMatrix"],Fa=ne(ya,wa,e=>{var{typed:n,DenseMatrix:t}=e;return function(r,u,o,s){var l=r._values,f=r._index,a=r._ptr,h=r._size,p=r._datatype;if(!l)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var g=h[0],d=h[1],c,m=o;typeof p=="string"&&(c=p,u=n.convert(u,c),m=n.find(o,[c,c]));for(var w=[],C=[],F=[],A=0;A<d;A++){for(var y=A+1,D=a[A],b=a[A+1],B=D;B<b;B++){var N=f[B];C[N]=l[B],F[N]=y}for(var M=0;M<g;M++)A===0&&(w[M]=[]),F[M]===y?w[M][A]=s?m(u,C[M]):m(C[M],u):w[M][A]=s?m(u,0):m(0,u)}return new t({data:w,size:[g,d],datatype:c})}}),Ea="matAlgo14xDs",Ca=["typed"],ui=ne(Ea,Ca,e=>{var{typed:n}=e;return function(r,u,o,s){var l=r._data,f=r._size,a=r._datatype,h,p=o;typeof a=="string"&&(h=a,u=n.convert(u,h),p=n.find(o,[h,h]));var g=f.length>0?t(p,0,f,f[0],l,u,s):[];return r.createDenseMatrix({data:g,size:Ee(f),datatype:h})};function t(i,r,u,o,s,l,f){var a=[];if(r===u.length-1)for(var h=0;h<o;h++)a[h]=f?i(l,s[h]):i(s[h],l);else for(var p=0;p<o;p++)a[p]=t(i,r+1,u,u[r+1],s[p],l,f);return a}}),ba="multiplyScalar",Aa=["typed"],Ba=ne(ba,Aa,e=>{var{typed:n}=e;return n("multiplyScalar",{"number, number":ni,"Complex, Complex":function(i,r){return i.mul(r)},"BigNumber, BigNumber":function(i,r){return i.times(r)},"bigint, bigint":function(i,r){return i*r},"Fraction, Fraction":function(i,r){return i.mul(r)},"number | Fraction | BigNumber | Complex, Unit":(t,i)=>i.multiply(t),"Unit, number | Fraction | BigNumber | Complex | Unit":(t,i)=>t.multiply(i)})}),ar="multiply",Na=["typed","matrix","addScalar","multiplyScalar","equalScalar","dot"],_a=ne(ar,Na,e=>{var{typed:n,matrix:t,addScalar:i,multiplyScalar:r,equalScalar:u,dot:o}=e,s=ii({typed:n,equalScalar:u}),l=ui({typed:n});function f(y,D){switch(y.length){case 1:switch(D.length){case 1:if(y[0]!==D[0])throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");break;case 2:if(y[0]!==D[0])throw new RangeError("Dimension mismatch in multiplication. Vector length ("+y[0]+") must match Matrix rows ("+D[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+D.length+" dimensions)")}break;case 2:switch(D.length){case 1:if(y[1]!==D[0])throw new RangeError("Dimension mismatch in multiplication. Matrix columns ("+y[1]+") must match Vector length ("+D[0]+")");break;case 2:if(y[1]!==D[0])throw new RangeError("Dimension mismatch in multiplication. Matrix A columns ("+y[1]+") must match Matrix B rows ("+D[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+D.length+" dimensions)")}break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has "+y.length+" dimensions)")}}function a(y,D,b){if(b===0)throw new Error("Cannot multiply two empty vectors");return o(y,D)}function h(y,D){if(D.storage()!=="dense")throw new Error("Support for SparseMatrix not implemented");return p(y,D)}function p(y,D){var b=y._data,B=y._size,N=y._datatype||y.getDataType(),M=D._data,x=D._size,L=D._datatype||D.getDataType(),W=B[0],Z=x[1],q,$=i,X=r;N&&L&&N===L&&typeof N=="string"&&N!=="mixed"&&(q=N,$=n.find(i,[q,q]),X=n.find(r,[q,q]));for(var j=[],Y=0;Y<Z;Y++){for(var Q=X(b[0],M[0][Y]),ie=1;ie<W;ie++)Q=$(Q,X(b[ie],M[ie][Y]));j[Y]=Q}return y.createDenseMatrix({data:j,size:[Z],datatype:N===y._datatype&&L===D._datatype?q:void 0})}var g=n("_multiplyMatrixVector",{"DenseMatrix, any":c,"SparseMatrix, any":C}),d=n("_multiplyMatrixMatrix",{"DenseMatrix, DenseMatrix":m,"DenseMatrix, SparseMatrix":w,"SparseMatrix, DenseMatrix":F,"SparseMatrix, SparseMatrix":A});function c(y,D){var b=y._data,B=y._size,N=y._datatype||y.getDataType(),M=D._data,x=D._datatype||D.getDataType(),L=B[0],W=B[1],Z,q=i,$=r;N&&x&&N===x&&typeof N=="string"&&N!=="mixed"&&(Z=N,q=n.find(i,[Z,Z]),$=n.find(r,[Z,Z]));for(var X=[],j=0;j<L;j++){for(var Y=b[j],Q=$(Y[0],M[0]),ie=1;ie<W;ie++)Q=q(Q,$(Y[ie],M[ie]));X[j]=Q}return y.createDenseMatrix({data:X,size:[L],datatype:N===y._datatype&&x===D._datatype?Z:void 0})}function m(y,D){var b=y._data,B=y._size,N=y._datatype||y.getDataType(),M=D._data,x=D._size,L=D._datatype||D.getDataType(),W=B[0],Z=B[1],q=x[1],$,X=i,j=r;N&&L&&N===L&&typeof N=="string"&&N!=="mixed"&&N!=="mixed"&&($=N,X=n.find(i,[$,$]),j=n.find(r,[$,$]));for(var Y=[],Q=0;Q<W;Q++){var ie=b[Q];Y[Q]=[];for(var te=0;te<q;te++){for(var se=j(ie[0],M[0][te]),Ae=1;Ae<Z;Ae++)se=X(se,j(ie[Ae],M[Ae][te]));Y[Q][te]=se}}return y.createDenseMatrix({data:Y,size:[W,q],datatype:N===y._datatype&&L===D._datatype?$:void 0})}function w(y,D){var b=y._data,B=y._size,N=y._datatype||y.getDataType(),M=D._values,x=D._index,L=D._ptr,W=D._size,Z=D._datatype||D._data===void 0?D._datatype:D.getDataType();if(!M)throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");var q=B[0],$=W[1],X,j=i,Y=r,Q=u,ie=0;N&&Z&&N===Z&&typeof N=="string"&&N!=="mixed"&&(X=N,j=n.find(i,[X,X]),Y=n.find(r,[X,X]),Q=n.find(u,[X,X]),ie=n.convert(0,X));for(var te=[],se=[],Ae=[],Fe=D.createSparseMatrix({values:te,index:se,ptr:Ae,size:[q,$],datatype:N===y._datatype&&Z===D._datatype?X:void 0}),ye=0;ye<$;ye++){Ae[ye]=se.length;var he=L[ye],Re=L[ye+1];if(Re>he)for(var ae=0,ue=0;ue<q;ue++){for(var He=ue+1,Ie=void 0,ce=he;ce<Re;ce++){var Me=x[ce];ae!==He?(Ie=Y(b[ue][Me],M[ce]),ae=He):Ie=j(Ie,Y(b[ue][Me],M[ce]))}ae===He&&!Q(Ie,ie)&&(se.push(ue),te.push(Ie))}}return Ae[$]=se.length,Fe}function C(y,D){var b=y._values,B=y._index,N=y._ptr,M=y._datatype||y._data===void 0?y._datatype:y.getDataType();if(!b)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var x=D._data,L=D._datatype||D.getDataType(),W=y._size[0],Z=D._size[0],q=[],$=[],X=[],j,Y=i,Q=r,ie=u,te=0;M&&L&&M===L&&typeof M=="string"&&M!=="mixed"&&(j=M,Y=n.find(i,[j,j]),Q=n.find(r,[j,j]),ie=n.find(u,[j,j]),te=n.convert(0,j));var se=[],Ae=[];X[0]=0;for(var Fe=0;Fe<Z;Fe++){var ye=x[Fe];if(!ie(ye,te))for(var he=N[Fe],Re=N[Fe+1],ae=he;ae<Re;ae++){var ue=B[ae];Ae[ue]?se[ue]=Y(se[ue],Q(ye,b[ae])):(Ae[ue]=!0,$.push(ue),se[ue]=Q(ye,b[ae]))}}for(var He=$.length,Ie=0;Ie<He;Ie++){var ce=$[Ie];q[Ie]=se[ce]}return X[1]=$.length,y.createSparseMatrix({values:q,index:$,ptr:X,size:[W,1],datatype:M===y._datatype&&L===D._datatype?j:void 0})}function F(y,D){var b=y._values,B=y._index,N=y._ptr,M=y._datatype||y._data===void 0?y._datatype:y.getDataType();if(!b)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var x=D._data,L=D._datatype||D.getDataType(),W=y._size[0],Z=D._size[0],q=D._size[1],$,X=i,j=r,Y=u,Q=0;M&&L&&M===L&&typeof M=="string"&&M!=="mixed"&&($=M,X=n.find(i,[$,$]),j=n.find(r,[$,$]),Y=n.find(u,[$,$]),Q=n.convert(0,$));for(var ie=[],te=[],se=[],Ae=y.createSparseMatrix({values:ie,index:te,ptr:se,size:[W,q],datatype:M===y._datatype&&L===D._datatype?$:void 0}),Fe=[],ye=[],he=0;he<q;he++){se[he]=te.length;for(var Re=he+1,ae=0;ae<Z;ae++){var ue=x[ae][he];if(!Y(ue,Q))for(var He=N[ae],Ie=N[ae+1],ce=He;ce<Ie;ce++){var Me=B[ce];ye[Me]!==Re?(ye[Me]=Re,te.push(Me),Fe[Me]=j(ue,b[ce])):Fe[Me]=X(Fe[Me],j(ue,b[ce]))}}for(var We=se[he],rn=te.length,un=We;un<rn;un++){var yn=te[un];ie[un]=Fe[yn]}}return se[q]=te.length,Ae}function A(y,D){var b=y._values,B=y._index,N=y._ptr,M=y._datatype||y._data===void 0?y._datatype:y.getDataType(),x=D._values,L=D._index,W=D._ptr,Z=D._datatype||D._data===void 0?D._datatype:D.getDataType(),q=y._size[0],$=D._size[1],X=b&&x,j,Y=i,Q=r;M&&Z&&M===Z&&typeof M=="string"&&M!=="mixed"&&(j=M,Y=n.find(i,[j,j]),Q=n.find(r,[j,j]));for(var ie=X?[]:void 0,te=[],se=[],Ae=y.createSparseMatrix({values:ie,index:te,ptr:se,size:[q,$],datatype:M===y._datatype&&Z===D._datatype?j:void 0}),Fe=X?[]:void 0,ye=[],he,Re,ae,ue,He,Ie,ce,Me,We=0;We<$;We++){se[We]=te.length;var rn=We+1;for(He=W[We],Ie=W[We+1],ue=He;ue<Ie;ue++)if(Me=L[ue],X)for(Re=N[Me],ae=N[Me+1],he=Re;he<ae;he++)ce=B[he],ye[ce]!==rn?(ye[ce]=rn,te.push(ce),Fe[ce]=Q(x[ue],b[he])):Fe[ce]=Y(Fe[ce],Q(x[ue],b[he]));else for(Re=N[Me],ae=N[Me+1],he=Re;he<ae;he++)ce=B[he],ye[ce]!==rn&&(ye[ce]=rn,te.push(ce));if(X)for(var un=se[We],yn=te.length,wn=un;wn<yn;wn++){var pt=te[wn];ie[wn]=Fe[pt]}}return se[$]=te.length,Ae}return n(ar,r,{"Array, Array":n.referTo("Matrix, Matrix",y=>(D,b)=>{f(Ue(D),Ue(b));var B=y(t(D),t(b));return Ce(B)?B.valueOf():B}),"Matrix, Matrix":function(D,b){var B=D.size(),N=b.size();return f(B,N),B.length===1?N.length===1?a(D,b,B[0]):h(D,b):N.length===1?g(D,b):d(D,b)},"Matrix, Array":n.referTo("Matrix,Matrix",y=>(D,b)=>y(D,t(b))),"Array, Matrix":n.referToSelf(y=>(D,b)=>y(t(D,b.storage()),b)),"SparseMatrix, any":function(D,b){return s(D,b,r,!1)},"DenseMatrix, any":function(D,b){return l(D,b,r,!1)},"any, SparseMatrix":function(D,b){return s(b,D,r,!0)},"any, DenseMatrix":function(D,b){return l(b,D,r,!0)},"Array, any":function(D,b){return l(t(D),b,r,!1).valueOf()},"any, Array":function(D,b){return l(t(b),D,r,!0).valueOf()},"any, any":r,"any, any, ...any":n.referToSelf(y=>(D,b,B)=>{for(var N=y(D,b),M=0;M<B.length;M++)N=y(N,B[M]);return N})})}),cr="conj",Sa=["typed"],Ma=ne(cr,Sa,e=>{var{typed:n}=e;return n(cr,{"number | BigNumber | Fraction":t=>t,Complex:t=>t.conjugate(),Unit:n.referToSelf(t=>i=>new i.constructor(t(i.toNumeric()),i.formatUnits())),"Array | Matrix":n.referToSelf(t=>i=>an(i,t))})}),fr="identity",Ta=["typed","config","matrix","BigNumber","DenseMatrix","SparseMatrix"],xa=ne(fr,Ta,e=>{var{typed:n,config:t,matrix:i,BigNumber:r,DenseMatrix:u,SparseMatrix:o}=e;return n(fr,{"":function(){return t.matrix==="Matrix"?i([]):[]},string:function(a){return i(a)},"number | BigNumber":function(a){return l(a,a,t.matrix==="Matrix"?"dense":void 0)},"number | BigNumber, string":function(a,h){return l(a,a,h)},"number | BigNumber, number | BigNumber":function(a,h){return l(a,h,t.matrix==="Matrix"?"dense":void 0)},"number | BigNumber, number | BigNumber, string":function(a,h,p){return l(a,h,p)},Array:function(a){return s(a)},"Array, string":function(a,h){return s(a,h)},Matrix:function(a){return s(a.valueOf(),a.storage())},"Matrix, string":function(a,h){return s(a.valueOf(),h)}});function s(f,a){switch(f.length){case 0:return a?i(a):[];case 1:return l(f[0],f[0],a);case 2:return l(f[0],f[1],a);default:throw new Error("Vector containing two values expected")}}function l(f,a,h){var p=be(f)||be(a)?r:null;if(be(f)&&(f=f.toNumber()),be(a)&&(a=a.toNumber()),!ge(f)||f<1)throw new Error("Parameters in function identity must be positive integers");if(!ge(a)||a<1)throw new Error("Parameters in function identity must be positive integers");var g=p?new r(1):1,d=p?new p(0):0,c=[f,a];if(h){if(h==="sparse")return o.diagonal(c,g,0,d);if(h==="dense")return u.diagonal(c,g,0,d);throw new TypeError('Unknown matrix type "'.concat(h,'"'))}for(var m=tt([],c,d),w=f<a?f:a,C=0;C<w;C++)m[C][C]=g;return m}});function Ia(){throw new Error('No "bignumber" implementation available')}function Oa(){throw new Error('No "fraction" implementation available')}function Pa(){throw new Error('No "matrix" implementation available')}var lr="size",za=["typed","config","?matrix"],Ra=ne(lr,za,e=>{var{typed:n,config:t,matrix:i}=e;return n(lr,{Matrix:function(u){return u.create(u.size(),"number")},Array:Ue,string:function(u){return t.matrix==="Array"?[u.length]:i([u.length],"dense","number")},"number | Complex | BigNumber | Unit | boolean | null":function(u){return t.matrix==="Array"?[]:i?i([],"dense","number"):Pa()}})}),hr="zeros",$a=["typed","config","matrix","BigNumber"],Ua=ne(hr,$a,e=>{var{typed:n,config:t,matrix:i,BigNumber:r}=e;return n(hr,{"":function(){return t.matrix==="Array"?u([]):u([],"default")},"...number | BigNumber | string":function(f){var a=f[f.length-1];if(typeof a=="string"){var h=f.pop();return u(f,h)}else return t.matrix==="Array"?u(f):u(f,"default")},Array:u,Matrix:function(f){var a=f.storage();return u(f.valueOf(),a)},"Array | Matrix, string":function(f,a){return u(f.valueOf(),a)}});function u(l,f){var a=o(l),h=a?new r(0):0;if(s(l),f){var p=i(f);return l.length>0?p.resize(l,h):p}else{var g=[];return l.length>0?tt(g,l,h):g}}function o(l){var f=!1;return l.forEach(function(a,h,p){be(a)&&(f=!0,p[h]=a.toNumber())}),f}function s(l){l.forEach(function(f){if(typeof f!="number"||!ge(f)||f<0)throw new Error("Parameters in function zeros must be positive integers")})}}),Va="numeric",ka=["number","?bignumber","?fraction"],La=ne(Va,ka,e=>{var{number:n,bignumber:t,fraction:i}=e,r={string:!0,number:!0,BigNumber:!0,Fraction:!0},u={number:o=>n(o),BigNumber:t?o=>t(o):Ia,bigint:o=>BigInt(o),Fraction:i?o=>i(o):Oa};return function(s){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"number",f=arguments.length>2?arguments[2]:void 0;if(f!==void 0)throw new SyntaxError("numeric() takes one or two arguments");var a=hn(s);if(!(a in r))throw new TypeError("Cannot convert "+s+' of type "'+a+'"; valid input types are '+Object.keys(r).join(", "));if(!(l in u))throw new TypeError("Cannot convert "+s+' to type "'+l+'"; valid output types are '+Object.keys(u).join(", "));return l===a?s:u[l](s)}}),pr="divideScalar",qa=["typed","numeric"],Ga=ne(pr,qa,e=>{var{typed:n,numeric:t}=e;return n(pr,{"number, number":function(r,u){return r/u},"Complex, Complex":function(r,u){return r.div(u)},"BigNumber, BigNumber":function(r,u){return r.div(u)},"bigint, bigint":function(r,u){return r/u},"Fraction, Fraction":function(r,u){return r.div(u)},"Unit, number | Complex | Fraction | BigNumber | Unit":(i,r)=>i.divide(r),"number | Fraction | Complex | BigNumber, Unit":(i,r)=>r.divideInto(i)})}),dr="pow",Ha=["typed","config","identity","multiply","matrix","inv","fraction","number","Complex"],Wa=ne(dr,Ha,e=>{var{typed:n,config:t,identity:i,multiply:r,matrix:u,inv:o,number:s,fraction:l,Complex:f}=e;return n(dr,{"number, number":a,"Complex, Complex":function(d,c){return d.pow(c)},"BigNumber, BigNumber":function(d,c){return c.isInteger()||d>=0||t.predictable?d.pow(c):new f(d.toNumber(),0).pow(c.toNumber(),0)},"bigint, bigint":(g,d)=>g**d,"Fraction, Fraction":function(d,c){var m=d.pow(c);if(m!=null)return m;if(t.predictable)throw new Error("Result of pow is non-rational and cannot be expressed as a fraction");return a(d.valueOf(),c.valueOf())},"Array, number":h,"Array, BigNumber":function(d,c){return h(d,c.toNumber())},"Matrix, number":p,"Matrix, BigNumber":function(d,c){return p(d,c.toNumber())},"Unit, number | BigNumber":function(d,c){return d.pow(c)}});function a(g,d){if(t.predictable&&!ge(d)&&g<0)try{var c=l(d),m=s(c);if((d===m||Math.abs((d-m)/d)<1e-14)&&c.d%2n===1n)return(c.n%2n===0n?1:-1)*Math.pow(-g,d)}catch{}return t.predictable&&(g<-1&&d===1/0||g>-1&&g<0&&d===-1/0)?NaN:ge(d)||g>=0||t.predictable?ri(g,d):g*g<1&&d===1/0||g*g>1&&d===-1/0?0:new f(g,0).pow(d,0)}function h(g,d){if(!ge(d))throw new TypeError("For A^b, b must be an integer (value is "+d+")");var c=Ue(g);if(c.length!==2)throw new Error("For A^b, A must be 2 dimensional (A has "+c.length+" dimensions)");if(c[0]!==c[1])throw new Error("For A^b, A must be square (size is "+c[0]+"x"+c[1]+")");if(d<0)try{return h(o(g),-d)}catch(C){throw C.message==="Cannot calculate inverse, determinant is zero"?new TypeError("For A^b, when A is not invertible, b must be a positive integer (value is "+d+")"):C}for(var m=i(c[0]).valueOf(),w=g;d>=1;)(d&1)===1&&(m=r(w,m)),d>>=1,w=r(w,w);return m}function p(g,d){return u(h(g.valueOf(),d))}}),An="Number of decimals in function round must be an integer",gr="round",Za=["typed","config","matrix","equalScalar","zeros","BigNumber","DenseMatrix"],ja=ne(gr,Za,e=>{var{typed:n,config:t,matrix:i,equalScalar:r,zeros:u,BigNumber:o,DenseMatrix:s}=e,l=ii({typed:n,equalScalar:r}),f=Fa({typed:n,DenseMatrix:s}),a=ui({typed:n});function h(p){return Math.abs(Un(p).exponent)}return n(gr,{number:function(g){var d=zn(g,h(t.relTol)),c=Mn(g,d,t.relTol,t.absTol)?d:g;return zn(c)},"number, number":function(g,d){var c=h(t.relTol);if(d>=c)return zn(g,d);var m=zn(g,c),w=Mn(g,m,t.relTol,t.absTol)?m:g;return zn(w,d)},"number, BigNumber":function(g,d){if(!d.isInteger())throw new TypeError(An);return new o(g).toDecimalPlaces(d.toNumber())},Complex:function(g){return g.round()},"Complex, number":function(g,d){if(d%1)throw new TypeError(An);return g.round(d)},"Complex, BigNumber":function(g,d){if(!d.isInteger())throw new TypeError(An);var c=d.toNumber();return g.round(c)},BigNumber:function(g){var d=new o(g).toDecimalPlaces(h(t.relTol)),c=At(g,d,t.relTol,t.absTol)?d:g;return c.toDecimalPlaces(0)},"BigNumber, BigNumber":function(g,d){if(!d.isInteger())throw new TypeError(An);var c=h(t.relTol);if(d>=c)return g.toDecimalPlaces(d.toNumber());var m=g.toDecimalPlaces(c),w=At(g,m,t.relTol,t.absTol)?m:g;return w.toDecimalPlaces(d.toNumber())},bigint:p=>p,"bigint, number":(p,g)=>p,"bigint, BigNumber":(p,g)=>p,Fraction:function(g){return g.round()},"Fraction, number":function(g,d){if(d%1)throw new TypeError(An);return g.round(d)},"Fraction, BigNumber":function(g,d){if(!d.isInteger())throw new TypeError(An);return g.round(d.toNumber())},"Unit, number, Unit":n.referToSelf(p=>function(g,d,c){var m=g.toNumeric(c);return c.multiply(p(m,d))}),"Unit, BigNumber, Unit":n.referToSelf(p=>(g,d,c)=>p(g,d.toNumber(),c)),"Array | Matrix, number | BigNumber, Unit":n.referToSelf(p=>(g,d,c)=>an(g,m=>p(m,d,c),!0)),"Array | Matrix | Unit, Unit":n.referToSelf(p=>(g,d)=>p(g,0,d)),"Array | Matrix":n.referToSelf(p=>g=>an(g,p,!0)),"SparseMatrix, number | BigNumber":n.referToSelf(p=>(g,d)=>l(g,d,p,!1)),"DenseMatrix, number | BigNumber":n.referToSelf(p=>(g,d)=>a(g,d,p,!1)),"Array, number | BigNumber":n.referToSelf(p=>(g,d)=>a(i(g),d,p,!1).valueOf()),"number | Complex | BigNumber | Fraction, SparseMatrix":n.referToSelf(p=>(g,d)=>r(g,0)?u(d.size(),d.storage()):f(d,g,p,!0)),"number | Complex | BigNumber | Fraction, DenseMatrix":n.referToSelf(p=>(g,d)=>r(g,0)?u(d.size(),d.storage()):a(d,g,p,!0)),"number | Complex | BigNumber | Fraction, Array":n.referToSelf(p=>(g,d)=>a(i(d),g,p,!0).valueOf())})}),mr="dot",Ya=["typed","addScalar","multiplyScalar","conj","size"],Ja=ne(mr,Ya,e=>{var{typed:n,addScalar:t,multiplyScalar:i,conj:r,size:u}=e;return n(mr,{"Array | DenseMatrix, Array | DenseMatrix":s,"SparseMatrix, SparseMatrix":l});function o(a,h){var p=f(a),g=f(h),d,c;if(p.length===1)d=p[0];else if(p.length===2&&p[1]===1)d=p[0];else throw new RangeError("Expected a column vector, instead got a matrix of size ("+p.join(", ")+")");if(g.length===1)c=g[0];else if(g.length===2&&g[1]===1)c=g[0];else throw new RangeError("Expected a column vector, instead got a matrix of size ("+g.join(", ")+")");if(d!==c)throw new RangeError("Vectors must have equal length ("+d+" != "+c+")");if(d===0)throw new RangeError("Cannot calculate the dot product of empty vectors");return d}function s(a,h){var p=o(a,h),g=Ce(a)?a._data:a,d=Ce(a)?a._datatype||a.getDataType():void 0,c=Ce(h)?h._data:h,m=Ce(h)?h._datatype||h.getDataType():void 0,w=f(a).length===2,C=f(h).length===2,F=t,A=i;if(d&&m&&d===m&&typeof d=="string"&&d!=="mixed"){var y=d;F=n.find(t,[y,y]),A=n.find(i,[y,y])}if(!w&&!C){for(var D=A(r(g[0]),c[0]),b=1;b<p;b++)D=F(D,A(r(g[b]),c[b]));return D}if(!w&&C){for(var B=A(r(g[0]),c[0][0]),N=1;N<p;N++)B=F(B,A(r(g[N]),c[N][0]));return B}if(w&&!C){for(var M=A(r(g[0][0]),c[0]),x=1;x<p;x++)M=F(M,A(r(g[x][0]),c[x]));return M}if(w&&C){for(var L=A(r(g[0][0]),c[0][0]),W=1;W<p;W++)L=F(L,A(r(g[W][0]),c[W][0]));return L}}function l(a,h){o(a,h);for(var p=a._index,g=a._values,d=h._index,c=h._values,m=0,w=t,C=i,F=0,A=0;F<p.length&&A<d.length;){var y=p[F],D=d[A];if(y<D){F++;continue}if(y>D){A++;continue}y===D&&(m=w(m,C(g[F],c[A])),F++,A++)}return m}function f(a){return Ce(a)?a.size():u(a)}}),Dr="det",Xa=["typed","matrix","subtractScalar","multiply","divideScalar","isZero","unaryMinus"],Ka=ne(Dr,Xa,e=>{var{typed:n,matrix:t,subtractScalar:i,multiply:r,divideScalar:u,isZero:o,unaryMinus:s}=e;return n(Dr,{any:function(a){return Ee(a)},"Array | Matrix":function(a){var h;switch(Ce(a)?h=a.size():Array.isArray(a)?(a=t(a),h=a.size()):h=[],h.length){case 0:return Ee(a);case 1:if(h[0]===1)return Ee(a.valueOf()[0]);if(h[0]===0)return 1;throw new RangeError("Matrix must be square (size: "+Ne(h)+")");case 2:{var p=h[0],g=h[1];if(p===g)return l(a.clone().valueOf(),p);if(g===0)return 1;throw new RangeError("Matrix must be square (size: "+Ne(h)+")")}default:throw new RangeError("Matrix must be two dimensional (size: "+Ne(h)+")")}}});function l(f,a,h){if(a===1)return Ee(f[0][0]);if(a===2)return i(r(f[0][0],f[1][1]),r(f[1][0],f[0][1]));for(var p=!1,g=new Array(a).fill(0).map((b,B)=>B),d=0;d<a;d++){var c=g[d];if(o(f[c][d])){var m=void 0;for(m=d+1;m<a;m++)if(!o(f[g[m]][d])){c=g[m],g[m]=g[d],g[d]=c,p=!p;break}if(m===a)return f[c][d]}for(var w=f[c][d],C=d===0?1:f[g[d-1]][d-1],F=d+1;F<a;F++)for(var A=g[F],y=d+1;y<a;y++)f[A][y]=u(i(r(f[A][y],w),r(f[A][d],f[c][y])),C)}var D=f[g[a-1]][a-1];return p?s(D):D}}),vr="inv",Qa=["typed","matrix","divideScalar","addScalar","multiply","unaryMinus","det","identity","abs"],ec=ne(vr,Qa,e=>{var{typed:n,matrix:t,divideScalar:i,addScalar:r,multiply:u,unaryMinus:o,det:s,identity:l,abs:f}=e;return n(vr,{"Array | Matrix":function(p){var g=Ce(p)?p.size():Ue(p);switch(g.length){case 1:if(g[0]===1)return Ce(p)?t([i(1,p.valueOf()[0])]):[i(1,p[0])];throw new RangeError("Matrix must be square (size: "+Ne(g)+")");case 2:{var d=g[0],c=g[1];if(d===c)return Ce(p)?t(a(p.valueOf(),d,c),p.storage()):a(p,d,c);throw new RangeError("Matrix must be square (size: "+Ne(g)+")")}default:throw new RangeError("Matrix must be two dimensional (size: "+Ne(g)+")")}},any:function(p){return i(1,p)}});function a(h,p,g){var d,c,m,w,C;if(p===1){if(w=h[0][0],w===0)throw Error("Cannot calculate inverse, determinant is zero");return[[i(1,w)]]}else if(p===2){var F=s(h);if(F===0)throw Error("Cannot calculate inverse, determinant is zero");return[[i(h[1][1],F),i(o(h[0][1]),F)],[i(o(h[1][0]),F),i(h[0][0],F)]]}else{var A=h.concat();for(d=0;d<p;d++)A[d]=A[d].concat();for(var y=l(p).valueOf(),D=0;D<g;D++){var b=f(A[D][D]),B=D;for(d=D+1;d<p;)f(A[d][D])>b&&(b=f(A[d][D]),B=d),d++;if(b===0)throw Error("Cannot calculate inverse, determinant is zero");d=B,d!==D&&(C=A[D],A[D]=A[d],A[d]=C,C=y[D],y[D]=y[d],y[d]=C);var N=A[D],M=y[D];for(d=0;d<p;d++){var x=A[d],L=y[d];if(d!==D){if(x[D]!==0){for(m=i(o(x[D]),N[D]),c=D;c<g;c++)x[c]=r(x[c],u(m,N[c]));for(c=0;c<g;c++)L[c]=r(L[c],u(m,M[c]))}}else{for(m=N[D],c=D;c<g;c++)x[c]=i(x[c],m);for(c=0;c<g;c++)L[c]=i(L[c],m)}}}return y}}}),Vn=os({config:dn}),oi=ls({}),si=ys({}),Ot=Es({}),ft=Vs({Matrix:Ot}),ve=ao({BigNumber:Vn,Complex:oi,DenseMatrix:ft,Fraction:si}),nc=ha({typed:ve}),Pt=da({typed:ve}),tc=Ma({typed:ve}),lt=Ws({config:dn,typed:ve}),rc=Ls({equalScalar:lt,typed:ve}),ai=Ba({typed:ve}),ci=ea({typed:ve}),fi=Ys({Matrix:Ot,equalScalar:lt,typed:ve}),ic=ma({typed:ve}),uc=ra({BigNumber:Vn,typed:ve}),mn=aa({DenseMatrix:ft,Matrix:Ot,SparseMatrix:fi,typed:ve}),oc=Ua({BigNumber:Vn,config:dn,matrix:mn,typed:ve}),li=oa({Fraction:si,typed:ve}),hi=xa({BigNumber:Vn,DenseMatrix:ft,SparseMatrix:fi,config:dn,matrix:mn,typed:ve}),sc=La({bignumber:uc,fraction:li,number:ci}),Wn=ja({BigNumber:Vn,DenseMatrix:ft,config:dn,equalScalar:lt,matrix:mn,typed:ve,zeros:oc}),ac=Ra({matrix:mn,config:dn,typed:ve}),pi=fa({typed:ve}),di=Ga({numeric:sc,typed:ve}),cc=Ja({addScalar:Pt,conj:tc,multiplyScalar:ai,size:ac,typed:ve}),zt=_a({addScalar:Pt,dot:cc,equalScalar:lt,matrix:mn,multiplyScalar:ai,typed:ve}),fc=Ka({divideScalar:di,isZero:rc,matrix:mn,multiply:zt,subtractScalar:ic,typed:ve,unaryMinus:pi}),lc=ec({abs:nc,addScalar:Pt,det:fc,divideScalar:di,identity:hi,matrix:mn,multiply:zt,typed:ve,unaryMinus:pi}),hc=Wa({Complex:oi,config:dn,fraction:li,identity:hi,inv:lc,matrix:mn,multiply:zt,number:ci,typed:ve});const pc={position:"bottom",strength:2,height:"6rem",divCount:5,exponential:!1,zIndex:1e3,animated:!1,duration:"0.3s",easing:"ease-out",opacity:1,curve:"linear",responsive:!1,target:"parent",className:"",style:{}},Bt={top:{position:"top",height:"6rem"},bottom:{position:"bottom",height:"6rem"},left:{position:"left",height:"6rem"},right:{position:"right",height:"6rem"},subtle:{height:"4rem",strength:1,opacity:.8,divCount:3},intense:{height:"10rem",strength:4,divCount:8,exponential:!0},smooth:{height:"8rem",curve:"bezier",divCount:10},sharp:{height:"5rem",curve:"linear",divCount:4},header:{position:"top",height:"8rem",curve:"ease-out"},footer:{position:"bottom",height:"8rem",curve:"ease-out"},sidebar:{position:"left",height:"6rem",strength:2.5},"page-header":{position:"top",height:"10rem",target:"page",strength:3},"page-footer":{position:"bottom",height:"10rem",target:"page",strength:3}},Nt={linear:e=>e,bezier:e=>e*e*(3-2*e),"ease-in":e=>e*e,"ease-out":e=>1-Math.pow(1-e,2),"ease-in-out":e=>e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2},dc=(...e)=>e.reduce((n,t)=>({...n,...t}),{}),gc=e=>({top:"to top",bottom:"to bottom",left:"to left",right:"to right"})[e]||"to bottom",mc=(e,n)=>{let t;return(...i)=>{clearTimeout(t),t=setTimeout(()=>e(...i),n)}},yr=(e,n,t)=>{const[i,r]=Ge.useState(n[t]);return Ge.useEffect(()=>{if(!e)return;const u=()=>{const s=window.innerWidth;let l=n[t];s<=480&&n[`mobile${t[0].toUpperCase()+t.slice(1)}`]?l=n[`mobile${t[0].toUpperCase()+t.slice(1)}`]:s<=768&&n[`tablet${t[0].toUpperCase()+t.slice(1)}`]?l=n[`tablet${t[0].toUpperCase()+t.slice(1)}`]:s<=1024&&n[`desktop${t[0].toUpperCase()+t.slice(1)}`]&&(l=n[`desktop${t[0].toUpperCase()+t.slice(1)}`]),r(l)},o=mc(u,100);return u(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[e,n,t]),e?i:n[t]},Dc=(e,n=!1)=>{const[t,i]=Ge.useState(!n);return Ge.useEffect(()=>{if(!n||!e.current)return;const r=new IntersectionObserver(([u])=>i(u.isIntersecting),{threshold:.1});return r.observe(e.current),()=>r.disconnect()},[e,n]),t};function vc(e){const n=Ge.useRef(null),[t,i]=Ge.useState(!1),r=Ge.useMemo(()=>{const d=e.preset&&Bt[e.preset]?Bt[e.preset]:{};return dc(pc,d,e)},[e]),u=yr(r.responsive,r,"height"),o=yr(r.responsive,r,"width"),s=Dc(n,r.animated==="scroll"),l=Ge.useMemo(()=>{const d=[],c=100/r.divCount,m=t&&r.hoverIntensity?r.strength*r.hoverIntensity:r.strength,w=Nt[r.curve]||Nt.linear;for(let C=1;C<=r.divCount;C++){let F=C/r.divCount;F=w(F);let A;r.exponential?A=hc(2,F*4)*.0625*m:A=.0625*(F*r.divCount+1)*m;const y=Wn((c*C-c)*10)/10,D=Wn(c*C*10)/10,b=Wn((c*C+c)*10)/10,B=Wn((c*C+c*2)*10)/10;let N=`transparent ${y}%, black ${D}%`;b<=100&&(N+=`, black ${b}%`),B<=100&&(N+=`, transparent ${B}%`);const M=gc(r.position),x={position:"absolute",inset:"0",maskImage:`linear-gradient(${M}, ${N})`,WebkitMaskImage:`linear-gradient(${M}, ${N})`,backdropFilter:`blur(${A.toFixed(3)}rem)`,WebkitBackdropFilter:`blur(${A.toFixed(3)}rem)`,opacity:r.opacity,transition:r.animated&&r.animated!=="scroll"?`backdrop-filter ${r.duration} ${r.easing}`:void 0};d.push(De.jsx("div",{style:x},C))}return d},[r,t]),f=Ge.useMemo(()=>{const d=["top","bottom"].includes(r.position),c=["left","right"].includes(r.position),m=r.target==="page",w={position:m?"fixed":"absolute",pointerEvents:r.hoverIntensity?"auto":"none",opacity:s?1:0,transition:r.animated?`opacity ${r.duration} ${r.easing}`:void 0,zIndex:m?r.zIndex+100:r.zIndex,...r.style};return d?(w.height=u,w.width=o||"100%",w[r.position]=0,w.left=0,w.right=0):c&&(w.width=o||u,w.height="100%",w[r.position]=0,w.top=0,w.bottom=0),w},[r,u,o,s]),{hoverIntensity:a,animated:h,onAnimationComplete:p,duration:g}=r;return Ge.useEffect(()=>{if(s&&h==="scroll"&&p){const d=parseFloat(g)*1e3,c=setTimeout(()=>p(),d);return()=>clearTimeout(c)}},[s,h,p,g]),De.jsx("div",{ref:n,className:`gradual-blur ${r.target==="page"?"gradual-blur-page":"gradual-blur-parent"} ${r.className}`,style:f,onMouseEnter:a?()=>i(!0):void 0,onMouseLeave:a?()=>i(!1):void 0,children:De.jsx("div",{className:"gradual-blur-inner",style:{position:"relative",width:"100%",height:"100%"},children:l})})}const ht=Wi.memo(vc);ht.displayName="GradualBlur";ht.PRESETS=Bt;ht.CURVE_FUNCTIONS=Nt;const yc=()=>{if(typeof document>"u")return;const e="gradual-blur-styles";if(document.getElementById(e))return;const n=document.createElement("style");n.id=e,n.textContent=`
  .gradual-blur { pointer-events: none; transition: opacity 0.3s ease-out; }
  .gradual-blur-parent { overflow: hidden; }
  .gradual-blur-inner { pointer-events: none; }`,document.head.appendChild(n)};typeof document<"u"&&yc();const wr={position:"bottom",strength:2,height:"7rem",divCount:5,curve:"bezier",target:"parent",exponential:!0,opacity:1},Ic=()=>{const{props:e,updateProp:n,resetProps:t,hasChanges:i}=Xi(wr),{position:r,strength:u,height:o,divCount:s,curve:l,target:f,exponential:a,opacity:h}=e,p=Ge.useMemo(()=>[{name:"position",type:'"top" | "bottom" | "left" | "right"',default:'"bottom"',description:"Edge to attach the blur overlay."},{name:"strength",type:"number",default:"2",description:"Base blur strength multiplier (affects each layer)."},{name:"height",type:"string",default:'"6rem"',description:"Overlay height (for top / bottom positions)."},{name:"width",type:"string",default:"—",description:"Custom width (optional). Defaults to 100% for vertical positions or matches height for horizontal positions."},{name:"divCount",type:"number",default:"5",description:"Number of stacked blur layers (higher = smoother gradient)."},{name:"exponential",type:"boolean",default:"false",description:"Use exponential progression for stronger end blur."},{name:"curve",type:'"linear" | "bezier" | "ease-in"',default:'"linear"',description:"Distribution curve applied to layer progression."},{name:"opacity",type:"number",default:"1",description:"Opacity applied to each blur layer."},{name:"animated",type:'"boolean" | "scroll"',default:"false",description:'Fade in (true) or reveal on scroll ("scroll").'},{name:"duration",type:"string",default:'"0.3s"',description:"Animation duration (when animated)."},{name:"easing",type:"string",default:'"ease-out"',description:"Animation easing (opacity / backdrop-filter)."},{name:"hoverIntensity",type:"number",default:"—",description:"Multiplier applied to strength while hovered."},{name:"target",type:'"parent" | "page"',default:'"parent"',description:"Position relative to parent container or the entire page (fixed)."},{name:"preset",type:'"top" | "bottom" | "left" | "right"',default:"—",description:"Apply a predefined configuration bundle."},{name:"responsive",type:"boolean",default:"false",description:"Enable internal responsive recalculation (experimental)."},{name:"zIndex",type:"number",default:"1000",description:"Base z-index (page target adds +100)."},{name:"onAnimationComplete",type:"() => void",default:"—",description:"Callback fired after animated reveal completes."},{name:"className",type:"string",default:"—",description:"Additional class names appended to root element."},{name:"style",type:"React.CSSProperties",default:"—",description:"Inline style overrides merged into container style."}],[]),g=Ge.useRef(null);return Ge.useEffect(()=>{const d=g.current;if(!d)return;const c=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if("ontouchstart"in window||navigator.maxTouchPoints>0||c)return;const w=new Ji({wrapper:d,content:d.firstElementChild,duration:2,smoothWheel:!0,smoothTouch:!1,touchMultiplier:1.2,wheelMultiplier:1,lerp:.1});let C;const F=A=>{w.raf(A),C=requestAnimationFrame(F)};return C=requestAnimationFrame(F),()=>{C&&cancelAnimationFrame(C),w.destroy()}},[]),De.jsx(Ki,{props:e,defaultProps:wr,resetProps:t,hasChanges:i,children:De.jsxs(Qi,{children:[De.jsxs(eu,{children:[De.jsxs(Zi,{position:"relative",className:"demo-container demo-container-dots",h:400,p:0,overflow:"hidden",children:[De.jsxs(ji,{ref:g,flexDirection:"column",alignItems:"center",h:"100%",overflowY:"auto",overflowX:"hidden",px:6,py:"100px",position:"relative",w:"100%",css:{"&::-webkit-scrollbar":{display:"none"},scrollbarWidth:"none",msOverflowStyle:"none"},children:[De.jsx($t,{fontSize:"clamp(2rem, 4vw, 5rem)",fontWeight:900,zIndex:0,color:"#B19EEF",children:"Scroll Down."}),De.jsx(Yi,{borderRadius:"50px",my:"100px",src:"https://images.unsplash.com/photo-1656536665219-da2b7deb314b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Lighthouse in the distance with purple colors.",w:"100%",maxW:"600px",border:"1px solid #271E37",filter:"grayscale(0) brightness(2)"}),De.jsx($t,{fontSize:"clamp(2rem, 4vw, 5rem)",fontWeight:900,zIndex:0,color:"#B19EEF",children:"Gradual Blur"})]}),De.jsx(ht,{position:r,strength:u,height:r==="top"||r==="bottom"?o:"100%",divCount:s,curve:l,target:f,exponential:a,opacity:h,zIndex:10,width:r==="left"||r==="right"?"8rem":"100%"})]}),De.jsxs(iu,{children:[De.jsx(Ut,{title:"Position",name:"gradual-blur-position",value:r,options:[{label:"Top",value:"top"},{label:"Bottom",value:"bottom"}],onChange:d=>n("position",d)}),De.jsx(Ut,{title:"Target",name:"gradual-blur-target",value:f,options:[{label:"Page",value:"page"},{label:"Parent",value:"parent"}],onChange:d=>n("target",d)}),De.jsx(uu,{title:"Exponential",isChecked:a,onChange:d=>n("exponential",d)}),De.jsx(dt,{title:"Strength",min:1,max:5,step:.5,value:u,onChange:d=>n("strength",d)}),De.jsx(dt,{title:"Div Count",min:1,max:10,step:1,value:s,onChange:d=>n("divCount",d)}),De.jsx(dt,{title:"Opacity",min:.1,max:1,step:.1,value:h,onChange:d=>n("opacity",d)})]}),De.jsx(nu,{data:p}),De.jsx(ou,{dependencyList:["mathjs"]})]}),De.jsx(tu,{children:De.jsx(ru,{codeObject:hu,componentName:"GradualBlur"})})]})})};export{Ic as default};
