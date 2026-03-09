import{r as n,j as e,B as u,F as Y,a as x,Y as X,cC as J,cD as K}from"./index-CKqfvLoB.js";import{u as Z,C as ee,T as te,P as re,a as ne,b as se,c as ie}from"./PropTable-BzD4cJVp.js";import{L as ae}from"./lenis-DSWRnSg1.js";import{C as le}from"./Customize-BaUKAf5J.js";import{P as oe}from"./PreviewSelect-CM4Sns8B.js";import{P as l}from"./PreviewSlider-25yjOF_X.js";import{l as ue}from"./react-bits-logo-small-CT1j6F_f.js";import de from"./LiquidEther-YMaErMu5.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./field-DGUMYGrq.js";import"./slider-P7kYMDWb.js";import"./three.module-DbwSNGae.js";const ce=`/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef, useId } from 'react';
import './GlassSurface.css';

const GlassSurface = ({
  children,
  width = 200,
  height = 80,
  borderRadius = 20,
  borderWidth = 0.07,
  brightness = 50,
  opacity = 0.93,
  blur = 11,
  displace = 0,
  backgroundOpacity = 0,
  saturation = 1,
  distortionScale = -180,
  redOffset = 0,
  greenOffset = 10,
  blueOffset = 20,
  xChannel = 'R',
  yChannel = 'G',
  mixBlendMode = 'difference',
  className = '',
  style = {}
}) => {
  const uniqueId = useId().replace(/:/g, '-');
  const filterId = \`glass-filter-\${uniqueId}\`;
  const redGradId = \`red-grad-\${uniqueId}\`;
  const blueGradId = \`blue-grad-\${uniqueId}\`;

  const [svgSupported, setSvgSupported] = useState(false);

  const containerRef = useRef(null);
  const feImageRef = useRef(null);
  const redChannelRef = useRef(null);
  const greenChannelRef = useRef(null);
  const blueChannelRef = useRef(null);
  const gaussianBlurRef = useRef(null);

  const generateDisplacementMap = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    const actualWidth = rect?.width || 400;
    const actualHeight = rect?.height || 200;
    const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

    const svgContent = \`
      <svg viewBox="0 0 \${actualWidth} \${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="\${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="\${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" rx="\${borderRadius}" fill="url(#\${redGradId})" />
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" rx="\${borderRadius}" fill="url(#\${blueGradId})" style="mix-blend-mode: \${mixBlendMode}" />
        <rect x="\${edgeSize}" y="\${edgeSize}" width="\${actualWidth - edgeSize * 2}" height="\${actualHeight - edgeSize * 2}" rx="\${borderRadius}" fill="hsl(0 0% \${brightness}% / \${opacity})" style="filter:blur(\${blur}px)" />
      </svg>
    \`;

    return \`data:image/svg+xml,\${encodeURIComponent(svgContent)}\`;
  };

  const updateDisplacementMap = () => {
    feImageRef.current?.setAttribute('href', generateDisplacementMap());
  };

  useEffect(() => {
    updateDisplacementMap();
    [
      { ref: redChannelRef, offset: redOffset },
      { ref: greenChannelRef, offset: greenOffset },
      { ref: blueChannelRef, offset: blueOffset }
    ].forEach(({ ref, offset }) => {
      if (ref.current) {
        ref.current.setAttribute('scale', (distortionScale + offset).toString());
        ref.current.setAttribute('xChannelSelector', xChannel);
        ref.current.setAttribute('yChannelSelector', yChannel);
      }
    });

    gaussianBlurRef.current?.setAttribute('stdDeviation', displace.toString());
  }, [
    width,
    height,
    borderRadius,
    borderWidth,
    brightness,
    opacity,
    blur,
    displace,
    distortionScale,
    redOffset,
    greenOffset,
    blueOffset,
    xChannel,
    yChannel,
    mixBlendMode
  ]);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    setTimeout(updateDisplacementMap, 0);
  }, [width, height]);

  useEffect(() => {
    setSvgSupported(supportsSVGFilters());
  }, []);

  const supportsSVGFilters = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return false;
    }

    const isWebkit = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    const isFirefox = /Firefox/.test(navigator.userAgent);

    if (isWebkit || isFirefox) {
      return false;
    }

    const div = document.createElement('div');
    div.style.backdropFilter = \`url(#\${filterId})\`;

    return div.style.backdropFilter !== '';
  };

  const containerStyle = {
    ...style,
    width: typeof width === 'number' ? \`\${width}px\` : width,
    height: typeof height === 'number' ? \`\${height}px\` : height,
    borderRadius: \`\${borderRadius}px\`,
    '--glass-frost': backgroundOpacity,
    '--glass-saturation': saturation,
    '--filter-id': \`url(#\${filterId})\`
  };

  return (
    <div
      ref={containerRef}
      className={\`glass-surface \${svgSupported ? 'glass-surface--svg' : 'glass-surface--fallback'} \${className}\`}
      style={containerStyle}
    >
      <svg className="glass-surface__filter" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
            <feImage ref={feImageRef} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />

            <feDisplacementMap ref={redChannelRef} in="SourceGraphic" in2="map" id="redchannel" result="dispRed" />
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="red"
            />

            <feDisplacementMap
              ref={greenChannelRef}
              in="SourceGraphic"
              in2="map"
              id="greenchannel"
              result="dispGreen"
            />
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="green"
            />

            <feDisplacementMap ref={blueChannelRef} in="SourceGraphic" in2="map" id="bluechannel" result="dispBlue" />
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="blue"
            />

            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur ref={gaussianBlurRef} in="output" stdDeviation="0.7" />
          </filter>
        </defs>
      </svg>

      <div className="glass-surface__content">{children}</div>
    </div>
  );
};

export default GlassSurface;
`,fe=`.glass-surface {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: opacity 0.26s ease-out;
}

.glass-surface__filter {
  width: 100%;
  height: 100%;
  pointer-events: none;
  position: absolute;
  inset: 0;
  opacity: 0;
  z-index: -1;
}

.glass-surface__content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: inherit;
  position: relative;
  z-index: 1;
}

.glass-surface--svg {
  background: light-dark(hsl(0 0% 100% / var(--glass-frost, 0)), hsl(0 0% 0% / var(--glass-frost, 0)));
  backdrop-filter: var(--filter-id, url(#glass-filter)) saturate(var(--glass-saturation, 1));
  box-shadow:
    0 0 2px 1px light-dark(color-mix(in oklch, black, transparent 85%), color-mix(in oklch, white, transparent 65%))
      inset,
    0 0 10px 4px light-dark(color-mix(in oklch, black, transparent 90%), color-mix(in oklch, white, transparent 85%))
      inset,
    0px 4px 16px rgba(17, 17, 26, 0.05),
    0px 8px 24px rgba(17, 17, 26, 0.05),
    0px 16px 56px rgba(17, 17, 26, 0.05),
    0px 4px 16px rgba(17, 17, 26, 0.05) inset,
    0px 8px 24px rgba(17, 17, 26, 0.05) inset,
    0px 16px 56px rgba(17, 17, 26, 0.05) inset;
}

.glass-surface--fallback {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(12px) saturate(1.8) brightness(1.1);
  -webkit-backdrop-filter: blur(12px) saturate(1.8) brightness(1.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 8px 32px 0 rgba(31, 38, 135, 0.2),
    0 2px 16px 0 rgba(31, 38, 135, 0.1),
    inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
    inset 0 -1px 0 0 rgba(255, 255, 255, 0.2);
}

@media (prefers-color-scheme: dark) {
  .glass-surface--fallback {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px) saturate(1.8) brightness(1.2);
    -webkit-backdrop-filter: blur(12px) saturate(1.8) brightness(1.2);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow:
      inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
      inset 0 -1px 0 0 rgba(255, 255, 255, 0.1);
  }
}

@supports not (backdrop-filter: blur(10px)) {
  .glass-surface--fallback {
    background: rgba(255, 255, 255, 0.4);
    box-shadow:
      inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
      inset 0 -1px 0 0 rgba(255, 255, 255, 0.3);
  }

  .glass-surface--fallback::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.15);
    border-radius: inherit;
    z-index: -1;
  }
}

@supports not (backdrop-filter: blur(10px)) {
  @media (prefers-color-scheme: dark) {
    .glass-surface--fallback {
      background: rgba(0, 0, 0, 0.4);
    }

    .glass-surface--fallback::before {
      background: rgba(255, 255, 255, 0.05);
    }
  }
}

.glass-surface:focus-visible {
  outline: 2px solid light-dark(#007aff, #0a84ff);
  outline-offset: 2px;
}
`,pe=`/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState, useId } from 'react';

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    const handler = e => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return isDark;
};

const GlassSurface = ({
  children,
  width = 200,
  height = 80,
  borderRadius = 20,
  borderWidth = 0.07,
  brightness = 50,
  opacity = 0.93,
  blur = 11,
  displace = 0,
  backgroundOpacity = 0,
  saturation = 1,
  distortionScale = -180,
  redOffset = 0,
  greenOffset = 10,
  blueOffset = 20,
  xChannel = 'R',
  yChannel = 'G',
  mixBlendMode = 'difference',
  className = '',
  style = {}
}) => {
  const uniqueId = useId().replace(/:/g, '-');
  const filterId = \`glass-filter-\${uniqueId}\`;
  const redGradId = \`red-grad-\${uniqueId}\`;
  const blueGradId = \`blue-grad-\${uniqueId}\`;

  const [svgSupported, setSvgSupported] = useState(false);

  const containerRef = useRef < HTMLDivElement > null;
  const feImageRef = useRef < SVGFEImageElement > null;
  const redChannelRef = useRef < SVGFEDisplacementMapElement > null;
  const greenChannelRef = useRef < SVGFEDisplacementMapElement > null;
  const blueChannelRef = useRef < SVGFEDisplacementMapElement > null;
  const gaussianBlurRef = useRef < SVGFEGaussianBlurElement > null;

  const isDarkMode = useDarkMode();

  const generateDisplacementMap = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    const actualWidth = rect?.width || 400;
    const actualHeight = rect?.height || 200;
    const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

    const svgContent = \`
      <svg viewBox="0 0 \${actualWidth} \${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="\${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="\${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" rx="\${borderRadius}" fill="url(#\${redGradId})" />
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" rx="\${borderRadius}" fill="url(#\${blueGradId})" style="mix-blend-mode: \${mixBlendMode}" />
        <rect x="\${edgeSize}" y="\${edgeSize}" width="\${actualWidth - edgeSize * 2}" height="\${actualHeight - edgeSize * 2}" rx="\${borderRadius}" fill="hsl(0 0% \${brightness}% / \${opacity})" style="filter:blur(\${blur}px)" />
      </svg>
    \`;

    return \`data:image/svg+xml,\${encodeURIComponent(svgContent)}\`;
  };

  const updateDisplacementMap = () => {
    feImageRef.current?.setAttribute('href', generateDisplacementMap());
  };

  useEffect(() => {
    updateDisplacementMap();
    [
      { ref: redChannelRef, offset: redOffset },
      { ref: greenChannelRef, offset: greenOffset },
      { ref: blueChannelRef, offset: blueOffset }
    ].forEach(({ ref, offset }) => {
      if (ref.current) {
        ref.current.setAttribute('scale', (distortionScale + offset).toString());
        ref.current.setAttribute('xChannelSelector', xChannel);
        ref.current.setAttribute('yChannelSelector', yChannel);
      }
    });

    gaussianBlurRef.current?.setAttribute('stdDeviation', displace.toString());
  }, [
    width,
    height,
    borderRadius,
    borderWidth,
    brightness,
    opacity,
    blur,
    displace,
    distortionScale,
    redOffset,
    greenOffset,
    blueOffset,
    xChannel,
    yChannel,
    mixBlendMode
  ]);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    setTimeout(updateDisplacementMap, 0);
  }, [width, height]);

  useEffect(() => {
    setSvgSupported(supportsSVGFilters());
  }, []);

  const supportsSVGFilters = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return false;
    }

    const isWebkit = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    const isFirefox = /Firefox/.test(navigator.userAgent);

    if (isWebkit || isFirefox) {
      return false;
    }

    const div = document.createElement('div');
    div.style.backdropFilter = \`url(#\${filterId})\`;

    return div.style.backdropFilter !== '';
  };

  const supportsBackdropFilter = () => {
    if (typeof window === 'undefined') return false;
    return CSS.supports('backdrop-filter', 'blur(10px)');
  };

  const getContainerStyles = () => {
    const baseStyles = {
      ...style,
      width: typeof width === 'number' ? \`\${width}px\` : width,
      height: typeof height === 'number' ? \`\${height}px\` : height,
      borderRadius: \`\${borderRadius}px\`,
      '--glass-frost': backgroundOpacity,
      '--glass-saturation': saturation
    };

    const backdropFilterSupported = supportsBackdropFilter();

    if (svgSupported) {
      return {
        ...baseStyles,
        background: isDarkMode ? \`hsl(0 0% 0% / \${backgroundOpacity})\` : \`hsl(0 0% 100% / \${backgroundOpacity})\`,
        backdropFilter: \`url(#\${filterId}) saturate(\${saturation})\`,
        boxShadow: isDarkMode
          ? \`0 0 2px 1px color-mix(in oklch, white, transparent 65%) inset,
             0 0 10px 4px color-mix(in oklch, white, transparent 85%) inset,
             0px 4px 16px rgba(17, 17, 26, 0.05),
             0px 8px 24px rgba(17, 17, 26, 0.05),
             0px 16px 56px rgba(17, 17, 26, 0.05),
             0px 4px 16px rgba(17, 17, 26, 0.05) inset,
             0px 8px 24px rgba(17, 17, 26, 0.05) inset,
             0px 16px 56px rgba(17, 17, 26, 0.05) inset\`
          : \`0 0 2px 1px color-mix(in oklch, black, transparent 85%) inset,
             0 0 10px 4px color-mix(in oklch, black, transparent 90%) inset,
             0px 4px 16px rgba(17, 17, 26, 0.05),
             0px 8px 24px rgba(17, 17, 26, 0.05),
             0px 16px 56px rgba(17, 17, 26, 0.05),
             0px 4px 16px rgba(17, 17, 26, 0.05) inset,
             0px 8px 24px rgba(17, 17, 26, 0.05) inset,
             0px 16px 56px rgba(17, 17, 26, 0.05) inset\`
      };
    } else {
      if (isDarkMode) {
        if (!backdropFilterSupported) {
          return {
            ...baseStyles,
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: \`inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)\`
          };
        } else {
          return {
            ...baseStyles,
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px) saturate(1.8) brightness(1.2)',
            WebkitBackdropFilter: 'blur(12px) saturate(1.8) brightness(1.2)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: \`inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)\`
          };
        }
      } else {
        if (!backdropFilterSupported) {
          return {
            ...baseStyles,
            background: 'rgba(255, 255, 255, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: \`inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.3)\`
          };
        } else {
          return {
            ...baseStyles,
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(12px) saturate(1.8) brightness(1.1)',
            WebkitBackdropFilter: 'blur(12px) saturate(1.8) brightness(1.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: \`0 8px 32px 0 rgba(31, 38, 135, 0.2),
                        0 2px 16px 0 rgba(31, 38, 135, 0.1),
                        inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)\`
          };
        }
      }
    }
  };

  const glassSurfaceClasses =
    'relative flex items-center justify-center overflow-hidden transition-opacity duration-[260ms] ease-out';

  const focusVisibleClasses = isDarkMode
    ? 'focus-visible:outline-2 focus-visible:outline-[#0A84FF] focus-visible:outline-offset-2'
    : 'focus-visible:outline-2 focus-visible:outline-[#007AFF] focus-visible:outline-offset-2';

  return (
    <div
      ref={containerRef}
      className={\`\${glassSurfaceClasses} \${focusVisibleClasses} \${className}\`}
      style={getContainerStyles()}
    >
      <svg
        className="w-full h-full pointer-events-none absolute inset-0 opacity-0 -z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
            <feImage ref={feImageRef} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />

            <feDisplacementMap ref={redChannelRef} in="SourceGraphic" in2="map" id="redchannel" result="dispRed" />
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="red"
            />

            <feDisplacementMap
              ref={greenChannelRef}
              in="SourceGraphic"
              in2="map"
              id="greenchannel"
              result="dispGreen"
            />
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="green"
            />

            <feDisplacementMap ref={blueChannelRef} in="SourceGraphic" in2="map" id="bluechannel" result="dispBlue" />
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="blue"
            />

            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur ref={gaussianBlurRef} in="output" stdDeviation="0.7" />
          </filter>
        </defs>
      </svg>

      <div className="w-full h-full flex items-center justify-center p-2 rounded-[inherit] relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassSurface;
`,he=`import React, { useEffect, useRef, useState, useId } from 'react';
import './GlassSurface.css';

export interface GlassSurfaceProps {
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  brightness?: number;
  opacity?: number;
  blur?: number;
  displace?: number;
  backgroundOpacity?: number;
  saturation?: number;
  distortionScale?: number;
  redOffset?: number;
  greenOffset?: number;
  blueOffset?: number;
  xChannel?: 'R' | 'G' | 'B';
  yChannel?: 'R' | 'G' | 'B';
  mixBlendMode?:
    | 'normal'
    | 'multiply'
    | 'screen'
    | 'overlay'
    | 'darken'
    | 'lighten'
    | 'color-dodge'
    | 'color-burn'
    | 'hard-light'
    | 'soft-light'
    | 'difference'
    | 'exclusion'
    | 'hue'
    | 'saturation'
    | 'color'
    | 'luminosity'
    | 'plus-darker'
    | 'plus-lighter';
  className?: string;
  style?: React.CSSProperties;
}

const GlassSurface: React.FC<GlassSurfaceProps> = ({
  children,
  width = 200,
  height = 80,
  borderRadius = 20,
  borderWidth = 0.07,
  brightness = 50,
  opacity = 0.93,
  blur = 11,
  displace = 0,
  backgroundOpacity = 0,
  saturation = 1,
  distortionScale = -180,
  redOffset = 0,
  greenOffset = 10,
  blueOffset = 20,
  xChannel = 'R',
  yChannel = 'G',
  mixBlendMode = 'difference',
  className = '',
  style = {}
}) => {
  const id = useId();
  const filterId = \`glass-filter-\${id}\`;
  const redGradId = \`red-grad-\${id}\`;
  const blueGradId = \`blue-grad-\${id}\`;

  const [svgSupported, setSvgSupported] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const feImageRef = useRef<SVGFEImageElement>(null);
  const redChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const greenChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const blueChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const gaussianBlurRef = useRef<SVGFEGaussianBlurElement>(null);

  const generateDisplacementMap = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    const actualWidth = rect?.width || 400;
    const actualHeight = rect?.height || 200;
    const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

    const svgContent = \`
      <svg viewBox="0 0 \${actualWidth} \${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="\${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="\${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" rx="\${borderRadius}" fill="url(#\${redGradId})" />
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" rx="\${borderRadius}" fill="url(#\${blueGradId})" style="mix-blend-mode: \${mixBlendMode}" />
        <rect x="\${edgeSize}" y="\${edgeSize}" width="\${actualWidth - edgeSize * 2}" height="\${actualHeight - edgeSize * 2}" rx="\${borderRadius}" fill="hsl(0 0% \${brightness}% / \${opacity})" style="filter:blur(\${blur}px)" />
      </svg>
    \`;

    return \`data:image/svg+xml,\${encodeURIComponent(svgContent)}\`;
  };

  const updateDisplacementMap = () => {
    feImageRef.current?.setAttribute('href', generateDisplacementMap());
  };

  useEffect(() => {
    updateDisplacementMap();
    [
      { ref: redChannelRef, offset: redOffset },
      { ref: greenChannelRef, offset: greenOffset },
      { ref: blueChannelRef, offset: blueOffset }
    ].forEach(({ ref, offset }) => {
      if (ref.current) {
        ref.current.setAttribute('scale', (distortionScale + offset).toString());
        ref.current.setAttribute('xChannelSelector', xChannel);
        ref.current.setAttribute('yChannelSelector', yChannel);
      }
    });

    gaussianBlurRef.current?.setAttribute('stdDeviation', displace.toString());
  }, [
    width,
    height,
    borderRadius,
    borderWidth,
    brightness,
    opacity,
    blur,
    displace,
    distortionScale,
    redOffset,
    greenOffset,
    blueOffset,
    xChannel,
    yChannel,
    mixBlendMode
  ]);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    setTimeout(updateDisplacementMap, 0);
  }, [width, height]);

  useEffect(() => {
    setSvgSupported(supportsSVGFilters());
  }, []);

  const supportsSVGFilters = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return false;
    }

    const isWebkit = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    const isFirefox = /Firefox/.test(navigator.userAgent);

    if (isWebkit || isFirefox) {
      return false;
    }

    const div = document.createElement('div');
    div.style.backdropFilter = \`url(#\${filterId})\`;

    return div.style.backdropFilter !== '';
  };

  const containerStyle: React.CSSProperties = {
    ...style,
    width: typeof width === 'number' ? \`\${width}px\` : width,
    height: typeof height === 'number' ? \`\${height}px\` : height,
    borderRadius: \`\${borderRadius}px\`,
    '--glass-frost': backgroundOpacity,
    '--glass-saturation': saturation,
    '--filter-id': \`url(#\${filterId})\`
  } as React.CSSProperties;

  return (
    <div
      ref={containerRef}
      className={\`glass-surface \${svgSupported ? 'glass-surface--svg' : 'glass-surface--fallback'} \${className}\`}
      style={containerStyle}
    >
      <svg className="glass-surface__filter" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
            <feImage ref={feImageRef} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />

            <feDisplacementMap ref={redChannelRef} in="SourceGraphic" in2="map" id="redchannel" result="dispRed" />
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="red"
            />

            <feDisplacementMap
              ref={greenChannelRef}
              in="SourceGraphic"
              in2="map"
              id="greenchannel"
              result="dispGreen"
            />
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="green"
            />

            <feDisplacementMap ref={blueChannelRef} in="SourceGraphic" in2="map" id="bluechannel" result="dispBlue" />
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="blue"
            />

            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur ref={gaussianBlurRef} in="output" stdDeviation="0.7" />
          </filter>
        </defs>
      </svg>

      <div className="glass-surface__content">{children}</div>
    </div>
  );
};

export default GlassSurface;
`,ge=`import React, { useEffect, useRef, useState, useId } from 'react';

export interface GlassSurfaceProps {
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  brightness?: number;
  opacity?: number;
  blur?: number;
  displace?: number;
  backgroundOpacity?: number;
  saturation?: number;
  distortionScale?: number;
  redOffset?: number;
  greenOffset?: number;
  blueOffset?: number;
  xChannel?: 'R' | 'G' | 'B';
  yChannel?: 'R' | 'G' | 'B';
  mixBlendMode?:
    | 'normal'
    | 'multiply'
    | 'screen'
    | 'overlay'
    | 'darken'
    | 'lighten'
    | 'color-dodge'
    | 'color-burn'
    | 'hard-light'
    | 'soft-light'
    | 'difference'
    | 'exclusion'
    | 'hue'
    | 'saturation'
    | 'color'
    | 'luminosity'
    | 'plus-darker'
    | 'plus-lighter';
  className?: string;
  style?: React.CSSProperties;
}

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return isDark;
};

const GlassSurface: React.FC<GlassSurfaceProps> = ({
  children,
  width = 200,
  height = 80,
  borderRadius = 20,
  borderWidth = 0.07,
  brightness = 50,
  opacity = 0.93,
  blur = 11,
  displace = 0,
  backgroundOpacity = 0,
  saturation = 1,
  distortionScale = -180,
  redOffset = 0,
  greenOffset = 10,
  blueOffset = 20,
  xChannel = 'R',
  yChannel = 'G',
  mixBlendMode = 'difference',
  className = '',
  style = {}
}) => {
  const uniqueId = useId().replace(/:/g, '-');
  const filterId = \`glass-filter-\${uniqueId}\`;
  const redGradId = \`red-grad-\${uniqueId}\`;
  const blueGradId = \`blue-grad-\${uniqueId}\`;

  const [svgSupported, setSvgSupported] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const feImageRef = useRef<SVGFEImageElement>(null);
  const redChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const greenChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const blueChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const gaussianBlurRef = useRef<SVGFEGaussianBlurElement>(null);

  const isDarkMode = useDarkMode();

  const generateDisplacementMap = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    const actualWidth = rect?.width || 400;
    const actualHeight = rect?.height || 200;
    const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

    const svgContent = \`
      <svg viewBox="0 0 \${actualWidth} \${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="\${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="\${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" rx="\${borderRadius}" fill="url(#\${redGradId})" />
        <rect x="0" y="0" width="\${actualWidth}" height="\${actualHeight}" rx="\${borderRadius}" fill="url(#\${blueGradId})" style="mix-blend-mode: \${mixBlendMode}" />
        <rect x="\${edgeSize}" y="\${edgeSize}" width="\${actualWidth - edgeSize * 2}" height="\${actualHeight - edgeSize * 2}" rx="\${borderRadius}" fill="hsl(0 0% \${brightness}% / \${opacity})" style="filter:blur(\${blur}px)" />
      </svg>
    \`;

    return \`data:image/svg+xml,\${encodeURIComponent(svgContent)}\`;
  };

  const updateDisplacementMap = () => {
    feImageRef.current?.setAttribute('href', generateDisplacementMap());
  };

  useEffect(() => {
    updateDisplacementMap();
    [
      { ref: redChannelRef, offset: redOffset },
      { ref: greenChannelRef, offset: greenOffset },
      { ref: blueChannelRef, offset: blueOffset }
    ].forEach(({ ref, offset }) => {
      if (ref.current) {
        ref.current.setAttribute('scale', (distortionScale + offset).toString());
        ref.current.setAttribute('xChannelSelector', xChannel);
        ref.current.setAttribute('yChannelSelector', yChannel);
      }
    });

    gaussianBlurRef.current?.setAttribute('stdDeviation', displace.toString());
  }, [
    width,
    height,
    borderRadius,
    borderWidth,
    brightness,
    opacity,
    blur,
    displace,
    distortionScale,
    redOffset,
    greenOffset,
    blueOffset,
    xChannel,
    yChannel,
    mixBlendMode
  ]);

  useEffect(() => {
    setSvgSupported(supportsSVGFilters());
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    setTimeout(updateDisplacementMap, 0);
  }, [width, height]);

  const supportsSVGFilters = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return false;
    }

    const isWebkit = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    const isFirefox = /Firefox/.test(navigator.userAgent);

    if (isWebkit || isFirefox) {
      return false;
    }

    const div = document.createElement('div');
    div.style.backdropFilter = \`url(#\${filterId})\`;

    return div.style.backdropFilter !== '';
  };

  const supportsBackdropFilter = () => {
    if (typeof window === 'undefined') return false;
    return CSS.supports('backdrop-filter', 'blur(10px)');
  };

  const getContainerStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      ...style,
      width: typeof width === 'number' ? \`\${width}px\` : width,
      height: typeof height === 'number' ? \`\${height}px\` : height,
      borderRadius: \`\${borderRadius}px\`,
      '--glass-frost': backgroundOpacity,
      '--glass-saturation': saturation
    } as React.CSSProperties;

    const backdropFilterSupported = supportsBackdropFilter();

    if (svgSupported) {
      return {
        ...baseStyles,
        background: isDarkMode ? \`hsl(0 0% 0% / \${backgroundOpacity})\` : \`hsl(0 0% 100% / \${backgroundOpacity})\`,
        backdropFilter: \`url(#\${filterId}) saturate(\${saturation})\`,
        boxShadow: isDarkMode
          ? \`0 0 2px 1px color-mix(in oklch, white, transparent 65%) inset,
             0 0 10px 4px color-mix(in oklch, white, transparent 85%) inset,
             0px 4px 16px rgba(17, 17, 26, 0.05),
             0px 8px 24px rgba(17, 17, 26, 0.05),
             0px 16px 56px rgba(17, 17, 26, 0.05),
             0px 4px 16px rgba(17, 17, 26, 0.05) inset,
             0px 8px 24px rgba(17, 17, 26, 0.05) inset,
             0px 16px 56px rgba(17, 17, 26, 0.05) inset\`
          : \`0 0 2px 1px color-mix(in oklch, black, transparent 85%) inset,
             0 0 10px 4px color-mix(in oklch, black, transparent 90%) inset,
             0px 4px 16px rgba(17, 17, 26, 0.05),
             0px 8px 24px rgba(17, 17, 26, 0.05),
             0px 16px 56px rgba(17, 17, 26, 0.05),
             0px 4px 16px rgba(17, 17, 26, 0.05) inset,
             0px 8px 24px rgba(17, 17, 26, 0.05) inset,
             0px 16px 56px rgba(17, 17, 26, 0.05) inset\`
      };
    } else {
      if (isDarkMode) {
        if (!backdropFilterSupported) {
          return {
            ...baseStyles,
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: \`inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)\`
          };
        } else {
          return {
            ...baseStyles,
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(12px) saturate(1.8) brightness(1.2)',
            WebkitBackdropFilter: 'blur(12px) saturate(1.8) brightness(1.2)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: \`inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)\`
          };
        }
      } else {
        if (!backdropFilterSupported) {
          return {
            ...baseStyles,
            background: 'rgba(255, 255, 255, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: \`inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.3)\`
          };
        } else {
          return {
            ...baseStyles,
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(12px) saturate(1.8) brightness(1.1)',
            WebkitBackdropFilter: 'blur(12px) saturate(1.8) brightness(1.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: \`0 8px 32px 0 rgba(31, 38, 135, 0.2),
                        0 2px 16px 0 rgba(31, 38, 135, 0.1),
                        inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.2)\`
          };
        }
      }
    }
  };

  const glassSurfaceClasses =
    'relative flex items-center justify-center overflow-hidden transition-opacity duration-[260ms] ease-out';

  const focusVisibleClasses = isDarkMode
    ? 'focus-visible:outline-2 focus-visible:outline-[#0A84FF] focus-visible:outline-offset-2'
    : 'focus-visible:outline-2 focus-visible:outline-[#007AFF] focus-visible:outline-offset-2';

  return (
    <div
      ref={containerRef}
      className={\`\${glassSurfaceClasses} \${focusVisibleClasses} \${className}\`}
      style={getContainerStyles()}
    >
      <svg
        className="w-full h-full pointer-events-none absolute inset-0 opacity-0 -z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
            <feImage ref={feImageRef} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />

            <feDisplacementMap ref={redChannelRef} in="SourceGraphic" in2="map" id="redchannel" result="dispRed" />
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="red"
            />

            <feDisplacementMap
              ref={greenChannelRef}
              in="SourceGraphic"
              in2="map"
              id="greenchannel"
              result="dispGreen"
            />
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="green"
            />

            <feDisplacementMap ref={blueChannelRef} in="SourceGraphic" in2="map" id="bluechannel" result="dispBlue" />
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="blue"
            />

            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur ref={gaussianBlurRef} in="output" stdDeviation="0.7" />
          </filter>
        </defs>
      </svg>

      <div className="w-full h-full flex items-center justify-center p-2 rounded-[inherit] relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassSurface;
`,be={usage:`import GlassSurface from './GlassSurface'

// Basic usage
<GlassSurface 
  width={300} 
  height={200}
  borderRadius={24}
  className="my-custom-class"
>
  <h2>Glass Surface Content</h2>
</GlassSurface>

// Custom displacement effects
<GlassSurface
  displace={15}
  distortionScale={-150}
  redOffset={5}
  greenOffset={15}
  blueOffset={25}
  brightness={60}
  opacity={0.8}
  mixBlendMode="screen"
>
  <span>Advanced Glass Distortion</span>
</GlassSurface>`,code:ce,css:fe,tailwind:pe,tsCode:he,tsTailwind:ge},N=({children:f,width:p=200,height:d=80,borderRadius:i=20,borderWidth:m=.07,brightness:s=50,opacity:D=.93,blur:B=11,displace:y=0,backgroundOpacity:F=0,saturation:E=1,distortionScale:v=-180,redOffset:S=0,greenOffset:R=10,blueOffset:w=20,xChannel:$="R",yChannel:C="G",mixBlendMode:k="difference",className:j="",style:z={}})=>{const G=n.useId().replace(/:/g,"-"),c=`glass-filter-${G}`,W=`red-grad-${G}`,t=`blue-grad-${G}`,[M,T]=n.useState(!1),h=n.useRef(null),g=n.useRef(null),O=n.useRef(null),I=n.useRef(null),b=n.useRef(null),P=n.useRef(null),_=()=>{var V;const r=(V=h.current)==null?void 0:V.getBoundingClientRect(),a=(r==null?void 0:r.width)||400,o=(r==null?void 0:r.height)||200,H=Math.min(a,o)*(m*.5),Q=`
      <svg viewBox="0 0 ${a} ${o}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${W}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${t}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${a}" height="${o}" fill="black"></rect>
        <rect x="0" y="0" width="${a}" height="${o}" rx="${i}" fill="url(#${W})" />
        <rect x="0" y="0" width="${a}" height="${o}" rx="${i}" fill="url(#${t})" style="mix-blend-mode: ${k}" />
        <rect x="${H}" y="${H}" width="${a-H*2}" height="${o-H*2}" rx="${i}" fill="hsl(0 0% ${s}% / ${D})" style="filter:blur(${B}px)" />
      </svg>
    `;return`data:image/svg+xml,${encodeURIComponent(Q)}`},A=()=>{var r;(r=g.current)==null||r.setAttribute("href",_())};n.useEffect(()=>{var r;A(),[{ref:O,offset:S},{ref:I,offset:R},{ref:b,offset:w}].forEach(({ref:a,offset:o})=>{a.current&&(a.current.setAttribute("scale",(v+o).toString()),a.current.setAttribute("xChannelSelector",$),a.current.setAttribute("yChannelSelector",C))}),(r=P.current)==null||r.setAttribute("stdDeviation",y.toString())},[p,d,i,m,s,D,B,y,v,S,R,w,$,C,k]),n.useEffect(()=>{if(!h.current)return;const r=new ResizeObserver(()=>{setTimeout(A,0)});return r.observe(h.current),()=>{r.disconnect()}},[]),n.useEffect(()=>{if(!h.current)return;const r=new ResizeObserver(()=>{setTimeout(A,0)});return r.observe(h.current),()=>{r.disconnect()}},[]),n.useEffect(()=>{setTimeout(A,0)},[p,d]),n.useEffect(()=>{T(L())},[]);const L=()=>{if(typeof window>"u"||typeof document>"u")return!1;const r=/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent),a=/Firefox/.test(navigator.userAgent);if(r||a)return!1;const o=document.createElement("div");return o.style.backdropFilter=`url(#${c})`,o.style.backdropFilter!==""},U={...z,width:typeof p=="number"?`${p}px`:p,height:typeof d=="number"?`${d}px`:d,borderRadius:`${i}px`,"--glass-frost":F,"--glass-saturation":E,"--filter-id":`url(#${c})`};return e.jsxs("div",{ref:h,className:`glass-surface ${M?"glass-surface--svg":"glass-surface--fallback"} ${j}`,style:U,children:[e.jsx("svg",{className:"glass-surface__filter",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("defs",{children:e.jsxs("filter",{id:c,colorInterpolationFilters:"sRGB",x:"0%",y:"0%",width:"100%",height:"100%",children:[e.jsx("feImage",{ref:g,x:"0",y:"0",width:"100%",height:"100%",preserveAspectRatio:"none",result:"map"}),e.jsx("feDisplacementMap",{ref:O,in:"SourceGraphic",in2:"map",id:"redchannel",result:"dispRed"}),e.jsx("feColorMatrix",{in:"dispRed",type:"matrix",values:`1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0`,result:"red"}),e.jsx("feDisplacementMap",{ref:I,in:"SourceGraphic",in2:"map",id:"greenchannel",result:"dispGreen"}),e.jsx("feColorMatrix",{in:"dispGreen",type:"matrix",values:`0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0`,result:"green"}),e.jsx("feDisplacementMap",{ref:b,in:"SourceGraphic",in2:"map",id:"bluechannel",result:"dispBlue"}),e.jsx("feColorMatrix",{in:"dispBlue",type:"matrix",values:`0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0`,result:"blue"}),e.jsx("feBlend",{in:"red",in2:"green",mode:"screen",result:"rg"}),e.jsx("feBlend",{in:"rg",in2:"blue",mode:"screen",result:"output"}),e.jsx("feGaussianBlur",{ref:P,in:"output",stdDeviation:"0.7"})]})})}),e.jsx("div",{className:"glass-surface__content",children:f})]})},q={borderRadius:50,borderWidth:.07,brightness:50,opacity:.93,blur:11,displace:.5,backgroundOpacity:.1,saturation:1,distortionScale:-180,redOffset:0,greenOffset:10,blueOffset:20},Ie=()=>{const[f,p]=n.useState("scroll"),d=n.useRef(null),i=n.useRef(null),{props:m,updateProp:s,resetProps:D,hasChanges:B}=Z(q),{borderRadius:y,borderWidth:F,brightness:E,opacity:v,blur:S,displace:R,backgroundOpacity:w,saturation:$,distortionScale:C,redOffset:k,greenOffset:j,blueOffset:z}=m,G=[{value:"scroll",label:"Scroll"},{value:"landingPage",label:"Landing Page"}],c={borderRadius:y,borderWidth:F,brightness:E,opacity:v,blur:S,backgroundOpacity:w,saturation:$,distortionScale:C,redOffset:k,greenOffset:j,blueOffset:z,displace:R},W=n.useMemo(()=>[{name:"children",type:"React.ReactNode",default:"undefined",description:"Content to display inside the glass surface"},{name:"width",type:"number | string",default:"200",description:"Width of the glass surface (pixels or CSS value like '100%')"},{name:"height",type:"number | string",default:"80",description:"Height of the glass surface (pixels or CSS value like '100vh')"},{name:"borderRadius",type:"number",default:"20",description:"Border radius in pixels"},{name:"borderWidth",type:"number",default:"0.07",description:"Border width factor for displacement map"},{name:"brightness",type:"number",default:"50",description:"Brightness percentage for displacement map"},{name:"opacity",type:"number",default:"0.93",description:"Opacity of displacement map elements"},{name:"blur",type:"number",default:"11",description:"Input blur amount in pixels"},{name:"displace",type:"number",default:"0",description:"Output blur (stdDeviation)"},{name:"backgroundOpacity",type:"number",default:"0",description:"Background frost opacity (0-1)"},{name:"saturation",type:"number",default:"1",description:"Backdrop filter saturation factor"},{name:"distortionScale",type:"number",default:"-180",description:"Main displacement scale"},{name:"redOffset",type:"number",default:"0",description:"Red channel extra displacement offset"},{name:"greenOffset",type:"number",default:"10",description:"Green channel extra displacement offset"},{name:"blueOffset",type:"number",default:"20",description:"Blue channel extra displacement offset"},{name:"xChannel",type:"'R' | 'G' | 'B'",default:"'R'",description:"X displacement channel selector"},{name:"yChannel",type:"'R' | 'G' | 'B'",default:"'G'",description:"Y displacement channel selector"},{name:"mixBlendMode",type:"BlendMode",default:"'difference'",description:"Mix blend mode for displacement map"},{name:"className",type:"string",default:"''",description:"Additional CSS class names"},{name:"style",type:"React.CSSProperties",default:"{}",description:"Inline styles object"}],[]);return n.useEffect(()=>{const t=d.current;if(!t)return;i.current&&(i.current.destroy(),i.current=null);const M=typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0),T=typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(M||T){t.style.overflowY="auto",t.style.webkitOverflowScrolling="touch";return}else t.style.overflowY="hidden";if(f!=="scroll")return;let g;const O=new ae({wrapper:t,content:t.firstElementChild,duration:2,easing:b=>Math.min(1,1.001-Math.pow(2,-10*b)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,smoothTouch:!1,wheelMultiplier:1,touchMultiplier:1.5,infinite:!1,lerp:.1});i.current=O;const I=b=>{O.raf(b),g=requestAnimationFrame(I)};return g=requestAnimationFrame(I),()=>{g&&cancelAnimationFrame(g),i.current&&(i.current.destroy(),i.current=null)}},[f]),e.jsx(ee,{props:m,defaultProps:q,resetProps:D,hasChanges:B,children:e.jsxs(te,{children:[e.jsxs(re,{children:[e.jsxs(u,{ref:d,position:"relative",className:"demo-container",h:600,p:0,css:{overflow:"hidden"},children:[f==="scroll"&&e.jsxs(e.Fragment,{children:[e.jsx(N,{width:360,height:100,...c,style:{position:"sticky",top:"50%",transform:"translateY(-50%)",zIndex:10}}),e.jsxs(Y,{gap:16,alignItems:"center",direction:"column",position:"absolute",top:0,left:0,right:0,children:[e.jsx(x,{position:"absolute",left:"50%",textAlign:"center",whiteSpace:"nowrap",top:"3em",transform:"translate(-50%, -50%)",fontSize:"2.6rem",fontWeight:900,zIndex:0,color:"#271E37",children:"Try scrolling."}),e.jsx(u,{height:"240px",width:"100%"}),[{src:"https://images.unsplash.com/photo-1500673587002-1d2548cfba1b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",text:"The Summer Of Glass"},{src:"https://images.unsplash.com/photo-1594576547505-1be67997401e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",text:"Can Hold Any Content"},{src:"https://images.unsplash.com/photo-1543127172-4b33cb699e35?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",text:"Has Built-In Fallback"}].map((t,M)=>e.jsxs(u,{position:"relative",children:[e.jsx(X,{w:"500px",borderRadius:"20px",objectFit:"cover",src:t.src,filter:"grayscale(100%)"}),e.jsx(x,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"white",fontWeight:900,textAlign:"center",lineHeight:"100%",fontSize:"3rem",minW:"300px",zIndex:5,mixBlendMode:"overlay",children:t.text})]},M)),e.jsx(u,{height:"240px",width:"100%"})]})]}),f==="landingPage"&&e.jsxs(e.Fragment,{children:[e.jsx(u,{w:"100%",h:"100%",position:"absolute",top:0,left:0,zIndex:0,children:e.jsx(de,{isBounce:!0})}),e.jsx(u,{position:"absolute",top:"2em",left:0,width:"100%",height:"60px",zIndex:0,pointerEvents:"none",children:e.jsxs(N,{className:"custom-glass-surface",width:"90%",height:60,...c,children:[e.jsx("img",{src:ue,alt:"React Bits Logo",style:{height:"24px",borderRadius:"50px"}}),e.jsx(u,{display:{base:"flex",md:"none"},alignItems:"center",color:"white",children:e.jsx(J,{size:20})}),e.jsxs(u,{display:{base:"none",md:"flex"},alignItems:"center",gap:6,fontWeight:600,children:[e.jsx(x,{color:"white",fontSize:"14px",display:"flex",alignItems:"center",children:"Home"}),e.jsx(x,{color:"white",fontSize:"14px",display:"flex",alignItems:"center",children:"Docs"})]})]})}),e.jsxs(u,{position:"absolute",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",width:"100%",height:"100%",zIndex:1,pointerEvents:"none",children:[e.jsxs(N,{height:40,width:160,...c,children:[e.jsx(K,{}),e.jsx(x,{ml:1,children:"Super Shiny"})]}),e.jsx(x,{textShadow:"0 0 16px rgba(0, 0, 0, 0.5)",mt:4,color:"white",fontSize:"clamp(2rem, 4vw, 2.6rem)",lineHeight:"1.2",textAlign:"center",letterSpacing:"-2px",maxWidth:"18ch",fontWeight:"bold",children:"The summer of glass, thanks a lot Apple!"}),e.jsxs(u,{display:"flex",gap:4,mt:8,alignItems:"center",children:[e.jsx(u,{as:"button",px:10,py:3,bg:"white",color:"black",borderRadius:"50px",fontSize:"14px",fontWeight:"500",border:"none",cursor:"pointer",_hover:{bg:"gray.100",transform:"translateY(-1px)"},transition:"all 0.2s ease",children:"Get Started"}),e.jsx(N,{height:44.98,width:154.31,borderRadius:100,...c,children:"Learn More"})]})]})]})]}),e.jsxs(le,{children:[e.jsx(oe,{title:"Example",options:G,value:f,onChange:p,width:160}),e.jsx(l,{title:"Border Radius",min:0,max:50,step:1,value:y,valueUnit:"px",onChange:t=>s("borderRadius",t)}),e.jsx(l,{title:"Background Opacity",min:0,max:1,step:.01,value:w,onChange:t=>s("backgroundOpacity",t)}),e.jsx(l,{title:"Saturation",min:0,max:3,step:.1,value:$,onChange:t=>s("saturation",t)}),e.jsx(l,{title:"Border Width",min:0,max:.2,step:.01,value:F,onChange:t=>s("borderWidth",t)}),e.jsx(l,{title:"Brightness",min:0,max:100,step:1,value:E,valueUnit:"%",onChange:t=>s("brightness",t)}),e.jsx(l,{title:"Opacity",min:0,max:1,step:.01,value:v,onChange:t=>s("opacity",t)}),e.jsx(l,{title:"Blur",min:0,max:30,step:1,value:S,valueUnit:"px",onChange:t=>s("blur",t)}),e.jsx(l,{title:"Displace",min:0,max:5,step:.1,value:R,onChange:t=>s("displace",t)}),e.jsx(l,{title:"Distortion Scale",min:-300,max:300,step:10,value:C,onChange:t=>s("distortionScale",t)}),e.jsx(l,{title:"Red Offset",min:-50,max:50,step:1,value:k,onChange:t=>s("redOffset",t)}),e.jsx(l,{title:"Green Offset",min:-50,max:50,step:1,value:j,onChange:t=>s("greenOffset",t)}),e.jsx(l,{title:"Blue Offset",min:-50,max:50,step:1,value:z,onChange:t=>s("blueOffset",t)})]}),e.jsx(ne,{data:W})]}),e.jsx(se,{children:e.jsx(ie,{codeObject:be,componentName:"GlassSurface"})})]})})};export{Ie as default};
