import{r as t,j as n,aJ as x,B as ie}from"./index-CKqfvLoB.js";import{u as ae,C as se,T as le,P as ce,a as de,b as ue,c as fe}from"./PropTable-BzD4cJVp.js";import{C as me}from"./Customize-BaUKAf5J.js";import{P as k}from"./PreviewSlider-25yjOF_X.js";import{P as z}from"./PreviewSwitch-B0BSuWrO.js";import{P as ge}from"./PreviewSelect-CM4Sns8B.js";import{u as pe}from"./useForceRerender-0lK0qxlp.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";import"./switch-CqqRi5Az.js";import"./field-DGUMYGrq.js";const he=`import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';
import './LogoLoop.css';

const ANIMATION_CONFIG = { SMOOTH_TAU: 0.25, MIN_COPIES: 2, COPY_HEADROOM: 2 };

const toCssLength = value => (typeof value === 'number' ? \`\${value}px\` : (value ?? undefined));

const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }
    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });
    callback();
    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [callback, elements, dependencies]);
};

const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];
    if (images.length === 0) {
      onLoad();
      return;
    }
    let remainingImages = images.length;
    const handleImageLoad = () => {
      remainingImages -= 1;
      if (remainingImages === 0) onLoad();
    };
    images.forEach(img => {
      const htmlImg = img;
      if (htmlImg.complete) {
        handleImageLoad();
      } else {
        htmlImg.addEventListener('load', handleImageLoad, { once: true });
        htmlImg.addEventListener('error', handleImageLoad, { once: true });
      }
    });
    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  }, [onLoad, seqRef, dependencies]);
};

const useAnimationLoop = (trackRef, targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical) => {
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const seqSize = isVertical ? seqHeight : seqWidth;

    if (seqSize > 0) {
      offsetRef.current = ((offsetRef.current % seqSize) + seqSize) % seqSize;
      const transformValue = isVertical
        ? \`translate3d(0, \${-offsetRef.current}px, 0)\`
        : \`translate3d(\${-offsetRef.current}px, 0, 0)\`;
      track.style.transform = transformValue;
    }

    const animate = timestamp => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;

      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqSize > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqSize) + seqSize) % seqSize;
        offsetRef.current = nextOffset;

        const transformValue = isVertical
          ? \`translate3d(0, \${-offsetRef.current}px, 0)\`
          : \`translate3d(\${-offsetRef.current}px, 0, 0)\`;
        track.style.transform = transformValue;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical, trackRef]);
};

export const LogoLoop = memo(
  ({
    logos,
    speed = 120,
    direction = 'left',
    width = '100%',
    logoHeight = 28,
    gap = 32,
    pauseOnHover,
    hoverSpeed,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    renderItem,
    ariaLabel = 'Partner logos',
    className,
    style
  }) => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const seqRef = useRef(null);

    const [seqWidth, setSeqWidth] = useState(0);
    const [seqHeight, setSeqHeight] = useState(0);
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState(false);

    const effectiveHoverSpeed = useMemo(() => {
      if (hoverSpeed !== undefined) return hoverSpeed;
      if (pauseOnHover === true) return 0;
      if (pauseOnHover === false) return undefined;
      return 0;
    }, [hoverSpeed, pauseOnHover]);

    const isVertical = direction === 'up' || direction === 'down';

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      let directionMultiplier;
      if (isVertical) {
        directionMultiplier = direction === 'up' ? 1 : -1;
      } else {
        directionMultiplier = direction === 'left' ? 1 : -1;
      }
      const speedMultiplier = speed < 0 ? -1 : 1;
      return magnitude * directionMultiplier * speedMultiplier;
    }, [speed, direction, isVertical]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceRect = seqRef.current?.getBoundingClientRect?.();
      const sequenceWidth = sequenceRect?.width ?? 0;
      const sequenceHeight = sequenceRect?.height ?? 0;
      if (isVertical) {
        const parentHeight = containerRef.current?.parentElement?.clientHeight ?? 0;
        if (containerRef.current && parentHeight > 0) {
          const targetHeight = Math.ceil(parentHeight);
          if (containerRef.current.style.height !== \`\${targetHeight}px\`)
            containerRef.current.style.height = \`\${targetHeight}px\`;
        }
        if (sequenceHeight > 0) {
          setSeqHeight(Math.ceil(sequenceHeight));
          const viewport = containerRef.current?.clientHeight ?? parentHeight ?? sequenceHeight;
          const copiesNeeded = Math.ceil(viewport / sequenceHeight) + ANIMATION_CONFIG.COPY_HEADROOM;
          setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
        }
      } else if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, [isVertical]);

    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight, isVertical]);

    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight, isVertical]);

    useAnimationLoop(trackRef, targetVelocity, seqWidth, seqHeight, isHovered, effectiveHoverSpeed, isVertical);

    const cssVariables = useMemo(
      () => ({
        '--logoloop-gap': \`\${gap}px\`,
        '--logoloop-logoHeight': \`\${logoHeight}px\`,
        ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
      }),
      [gap, logoHeight, fadeOutColor]
    );

    const rootClassName = useMemo(
      () =>
        [
          'logoloop',
          isVertical ? 'logoloop--vertical' : 'logoloop--horizontal',
          fadeOut && 'logoloop--fade',
          scaleOnHover && 'logoloop--scale-hover',
          className
        ]
          .filter(Boolean)
          .join(' '),
      [isVertical, fadeOut, scaleOnHover, className]
    );

    const handleMouseEnter = useCallback(() => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(true);
    }, [effectiveHoverSpeed]);
    const handleMouseLeave = useCallback(() => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(false);
    }, [effectiveHoverSpeed]);

    const renderLogoItem = useCallback(
      (item, key) => {
        if (renderItem) {
          return (
            <li className="logoloop__item" key={key} role="listitem">
              {renderItem(item, key)}
            </li>
          );
        }
        const isNodeItem = 'node' in item;
        const content = isNodeItem ? (
          <span className="logoloop__node" aria-hidden={!!item.href && !item.ariaLabel}>
            {item.node}
          </span>
        ) : (
          <img
            src={item.src}
            srcSet={item.srcSet}
            sizes={item.sizes}
            width={item.width}
            height={item.height}
            alt={item.alt ?? ''}
            title={item.title}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        );
        const itemAriaLabel = isNodeItem ? (item.ariaLabel ?? item.title) : (item.alt ?? item.title);
        const itemContent = item.href ? (
          <a
            className="logoloop__link"
            href={item.href}
            aria-label={itemAriaLabel || 'logo link'}
            target="_blank"
            rel="noreferrer noopener"
          >
            {content}
          </a>
        ) : (
          content
        );
        return (
          <li className="logoloop__item" key={key} role="listitem">
            {itemContent}
          </li>
        );
      },
      [renderItem]
    );

    const logoLists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, copyIndex) => (
          <ul
            className="logoloop__list"
            key={\`copy-\${copyIndex}\`}
            role="list"
            aria-hidden={copyIndex > 0}
            ref={copyIndex === 0 ? seqRef : undefined}
          >
            {logos.map((item, itemIndex) => renderLogoItem(item, \`\${copyIndex}-\${itemIndex}\`))}
          </ul>
        )),
      [copyCount, logos, renderLogoItem]
    );

    const containerStyle = useMemo(
      () => ({
        width: isVertical
          ? toCssLength(width) === '100%'
            ? undefined
            : toCssLength(width)
          : (toCssLength(width) ?? '100%'),
        ...cssVariables,
        ...style
      }),
      [width, cssVariables, style, isVertical]
    );

    return (
      <div ref={containerRef} className={rootClassName} style={containerStyle} role="region" aria-label={ariaLabel}>
        <div className="logoloop__track" ref={trackRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {logoLists}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;
`,ve=`.logoloop {
  position: relative;

  --logoloop-gap: 32px;
  --logoloop-logoHeight: 28px;
  --logoloop-fadeColorAuto: #ffffff;
}

.logoloop--vertical {
  height: 100%;
  display: inline-block;
}

.logoloop--scale-hover {
  padding-top: calc(var(--logoloop-logoHeight) * 0.1);
  padding-bottom: calc(var(--logoloop-logoHeight) * 0.1);
}

@media (prefers-color-scheme: dark) {
  .logoloop {
    --logoloop-fadeColorAuto: #0b0b0b;
  }
}

.logoloop__track {
  display: flex;
  width: max-content;
  will-change: transform;
  user-select: none;
  position: relative;
  z-index: 0;
}

.logoloop--vertical .logoloop__track {
  flex-direction: column;
  height: max-content;
  width: 100%;
}

.logoloop__list {
  display: flex;
  align-items: center;
}

.logoloop--vertical .logoloop__list {
  flex-direction: column;
}

.logoloop__item {
  flex: 0 0 auto;
  margin-right: var(--logoloop-gap);
  font-size: var(--logoloop-logoHeight);
  line-height: 1;
}

.logoloop--vertical .logoloop__item {
  margin-right: 0;
  margin-bottom: var(--logoloop-gap);
}

.logoloop__item:last-child {
  margin-right: var(--logoloop-gap);
}

.logoloop--vertical .logoloop__item:last-child {
  margin-right: 0;
  margin-bottom: var(--logoloop-gap);
}

.logoloop__node {
  display: inline-flex;
  align-items: center;
}

.logoloop__item img {
  height: var(--logoloop-logoHeight);
  width: auto;
  display: block;
  object-fit: contain;
  image-rendering: -webkit-optimize-contrast;
  -webkit-user-drag: none;
  pointer-events: none;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logoloop--scale-hover .logoloop__item {
  overflow: visible;
}

.logoloop--scale-hover .logoloop__item:hover img,
.logoloop--scale-hover .logoloop__item:hover .logoloop__node {
  transform: scale(1.2);
  transform-origin: center center;
}

.logoloop--scale-hover .logoloop__node {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logoloop__link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  border-radius: 4px;
  transition: opacity 0.2s ease;
}

.logoloop__link:hover {
  opacity: 0.8;
}

.logoloop__link:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

.logoloop--fade::before,
.logoloop--fade::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: clamp(24px, 8%, 120px);
  pointer-events: none;
  z-index: 10;
}

.logoloop--fade::before {
  left: 0;
  background: linear-gradient(
    to right,
    var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}

.logoloop--fade::after {
  right: 0;
  background: linear-gradient(
    to left,
    var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}

.logoloop--vertical.logoloop--fade::before,
.logoloop--vertical.logoloop--fade::after {
  left: 0;
  right: 0;
  width: 100%;
  height: clamp(24px, 8%, 120px);
}

.logoloop--vertical.logoloop--fade::before {
  top: 0;
  bottom: auto;
  background: linear-gradient(
    to bottom,
    var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}

.logoloop--vertical.logoloop--fade::after {
  bottom: 0;
  top: auto;
  background: linear-gradient(
    to top,
    var(--logoloop-fadeColor, var(--logoloop-fadeColorAuto)) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}

@media (prefers-reduced-motion: reduce) {
  .logoloop__track {
    transform: translate3d(0, 0, 0) !important;
  }

  .logoloop__item img,
  .logoloop__node {
    transition: none !important;
  }
}
`,be=`import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2
};

const toCssLength = value => (typeof value === 'number' ? \`\${value}px\` : (value ?? undefined));

const cx = (...parts) => parts.filter(Boolean).join(' ');

const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }

    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();
    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [callback, elements, dependencies]);
};

const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];

    if (images.length === 0) {
      onLoad();
      return;
    }

    let remainingImages = images.length;
    const handleImageLoad = () => {
      remainingImages -= 1;
      if (remainingImages === 0) {
        onLoad();
      }
    };

    images.forEach(img => {
      const htmlImg = img;
      if (htmlImg.complete) {
        handleImageLoad();
      } else {
        htmlImg.addEventListener('load', handleImageLoad, { once: true });
        htmlImg.addEventListener('error', handleImageLoad, { once: true });
      }
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  }, [onLoad, seqRef, dependencies]);
};

const useAnimationLoop = (trackRef, targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical) => {
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const seqSize = isVertical ? seqHeight : seqWidth;

    if (seqSize > 0) {
      offsetRef.current = ((offsetRef.current % seqSize) + seqSize) % seqSize;
      const transformValue = isVertical
        ? \`translate3d(0, \${-offsetRef.current}px, 0)\`
        : \`translate3d(\${-offsetRef.current}px, 0, 0)\`;
      track.style.transform = transformValue;
    }

    if (prefersReduced) {
      track.style.transform = isVertical ? 'translate3d(0, 0, 0)' : 'translate3d(0, 0, 0)';
      return () => {
        lastTimestampRef.current = null;
      };
    }

    const animate = timestamp => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;

      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqSize > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqSize) + seqSize) % seqSize;
        offsetRef.current = nextOffset;

        const transformValue = isVertical
          ? \`translate3d(0, \${-offsetRef.current}px, 0)\`
          : \`translate3d(\${-offsetRef.current}px, 0, 0)\`;
        track.style.transform = transformValue;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical, trackRef]);
};

export const LogoLoop = memo(
  ({
    logos,
    speed = 120,
    direction = 'left',
    width = '100%',
    logoHeight = 28,
    gap = 32,
    pauseOnHover,
    hoverSpeed,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    renderItem,
    ariaLabel = 'Partner logos',
    className,
    style
  }) => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const seqRef = useRef(null);

    const [seqWidth, setSeqWidth] = useState(0);
    const [seqHeight, setSeqHeight] = useState(0);
    const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState(false);

    const effectiveHoverSpeed = useMemo(() => {
      if (hoverSpeed !== undefined) return hoverSpeed;
      if (pauseOnHover === true) return 0;
      if (pauseOnHover === false) return undefined;
      return 0;
    }, [hoverSpeed, pauseOnHover]);

    const isVertical = direction === 'up' || direction === 'down';

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      let directionMultiplier;
      if (isVertical) {
        directionMultiplier = direction === 'up' ? 1 : -1;
      } else {
        directionMultiplier = direction === 'left' ? 1 : -1;
      }
      const speedMultiplier = speed < 0 ? -1 : 1;
      return magnitude * directionMultiplier * speedMultiplier;
    }, [speed, direction, isVertical]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceRect = seqRef.current?.getBoundingClientRect?.();
      const sequenceWidth = sequenceRect?.width ?? 0;
      const sequenceHeight = sequenceRect?.height ?? 0;
      if (isVertical) {
        const parentHeight = containerRef.current?.parentElement?.clientHeight ?? 0;
        if (containerRef.current && parentHeight > 0) {
          const targetHeight = Math.ceil(parentHeight);
          if (containerRef.current.style.height !== \`\${targetHeight}px\`)
            containerRef.current.style.height = \`\${targetHeight}px\`;
        }
        if (sequenceHeight > 0) {
          setSeqHeight(Math.ceil(sequenceHeight));
          const viewport = containerRef.current?.clientHeight ?? parentHeight ?? sequenceHeight;
          const copiesNeeded = Math.ceil(viewport / sequenceHeight) + ANIMATION_CONFIG.COPY_HEADROOM;
          setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
        }
      } else if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, [isVertical]);

    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight, isVertical]);

    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight, isVertical]);

    useAnimationLoop(trackRef, targetVelocity, seqWidth, seqHeight, isHovered, effectiveHoverSpeed, isVertical);

    const cssVariables = useMemo(
      () => ({
        '--logoloop-gap': \`\${gap}px\`,
        '--logoloop-logoHeight': \`\${logoHeight}px\`,
        ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
      }),
      [gap, logoHeight, fadeOutColor]
    );

    const rootClasses = useMemo(
      () =>
        cx(
          'relative group',
          isVertical ? 'overflow-hidden h-full inline-block' : 'overflow-x-hidden',
          '[--logoloop-gap:32px]',
          '[--logoloop-logoHeight:28px]',
          '[--logoloop-fadeColorAuto:#ffffff]',
          'dark:[--logoloop-fadeColorAuto:#0b0b0b]',
          scaleOnHover && 'py-[calc(var(--logoloop-logoHeight)*0.1)]',
          className
        ),
      [isVertical, scaleOnHover, className]
    );

    const handleMouseEnter = useCallback(() => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(true);
    }, [effectiveHoverSpeed]);
    const handleMouseLeave = useCallback(() => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(false);
    }, [effectiveHoverSpeed]);

    const renderLogoItem = useCallback(
      (item, key) => {
        if (renderItem) {
          return (
            <li
              className={cx(
                'flex-none text-[length:var(--logoloop-logoHeight)] leading-[1]',
                isVertical ? 'mb-[var(--logoloop-gap)]' : 'mr-[var(--logoloop-gap)]',
                scaleOnHover && 'overflow-visible group/item'
              )}
              key={key}
              role="listitem"
            >
              {renderItem(item, key)}
            </li>
          );
        }

        const isNodeItem = 'node' in item;

        const content = isNodeItem ? (
          <span
            className={cx(
              'inline-flex items-center',
              'motion-reduce:transition-none',
              scaleOnHover &&
                'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
            )}
            aria-hidden={!!item.href && !item.ariaLabel}
          >
            {item.node}
          </span>
        ) : (
          <img
            className={cx(
              'h-[var(--logoloop-logoHeight)] w-auto block object-contain',
              '[-webkit-user-drag:none] pointer-events-none',
              '[image-rendering:-webkit-optimize-contrast]',
              'motion-reduce:transition-none',
              scaleOnHover &&
                'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
            )}
            src={item.src}
            srcSet={item.srcSet}
            sizes={item.sizes}
            width={item.width}
            height={item.height}
            alt={item.alt ?? ''}
            title={item.title}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        );

        const itemAriaLabel = isNodeItem ? (item.ariaLabel ?? item.title) : (item.alt ?? item.title);

        const inner = item.href ? (
          <a
            className={cx(
              'inline-flex items-center no-underline rounded',
              'transition-opacity duration-200 ease-linear',
              'hover:opacity-80',
              'focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2'
            )}
            href={item.href}
            aria-label={itemAriaLabel || 'logo link'}
            target="_blank"
            rel="noreferrer noopener"
          >
            {content}
          </a>
        ) : (
          content
        );

        return (
          <li
            className={cx(
              'flex-none text-[length:var(--logoloop-logoHeight)] leading-[1]',
              isVertical ? 'mb-[var(--logoloop-gap)]' : 'mr-[var(--logoloop-gap)]',
              scaleOnHover && 'overflow-visible group/item'
            )}
            key={key}
            role="listitem"
          >
            {inner}
          </li>
        );
      },
      [isVertical, scaleOnHover, renderItem]
    );

    const logoLists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, copyIndex) => (
          <ul
            className={cx('flex items-center', isVertical && 'flex-col')}
            key={\`copy-\${copyIndex}\`}
            role="list"
            aria-hidden={copyIndex > 0}
            ref={copyIndex === 0 ? seqRef : undefined}
          >
            {logos.map((item, itemIndex) => renderLogoItem(item, \`\${copyIndex}-\${itemIndex}\`))}
          </ul>
        )),
      [copyCount, logos, renderLogoItem, isVertical]
    );

    const containerStyle = useMemo(
      () => ({
        width: isVertical
          ? toCssLength(width) === '100%'
            ? undefined
            : toCssLength(width)
          : (toCssLength(width) ?? '100%'),
        ...cssVariables,
        ...style
      }),
      [width, cssVariables, style, isVertical]
    );

    return (
      <div
        ref={containerRef}
        className={rootClasses}
        style={containerStyle}
        role="region"
        aria-label={ariaLabel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {fadeOut && (
          <>
            {isVertical ? (
              <>
                <div
                  aria-hidden
                  className={cx(
                    'pointer-events-none absolute inset-x-0 top-0 z-10',
                    'h-[clamp(24px,8%,120px)]',
                    'bg-[linear-gradient(to_bottom,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
                  )}
                />
                <div
                  aria-hidden
                  className={cx(
                    'pointer-events-none absolute inset-x-0 bottom-0 z-10',
                    'h-[clamp(24px,8%,120px)]',
                    'bg-[linear-gradient(to_top,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
                  )}
                />
              </>
            ) : (
              <>
                <div
                  aria-hidden
                  className={cx(
                    'pointer-events-none absolute inset-y-0 left-0 z-10',
                    'w-[clamp(24px,8%,120px)]',
                    'bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
                  )}
                />
                <div
                  aria-hidden
                  className={cx(
                    'pointer-events-none absolute inset-y-0 right-0 z-10',
                    'w-[clamp(24px,8%,120px)]',
                    'bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
                  )}
                />
              </>
            )}
          </>
        )}

        <div
          className={cx(
            'flex will-change-transform select-none relative z-0',
            'motion-reduce:transform-none',
            isVertical ? 'flex-col h-max w-full' : 'flex-row w-max'
          )}
          ref={trackRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {logoLists}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;
`,Re=`import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './LogoLoop.css';

export type LogoItem =
  | {
      node: React.ReactNode;
      href?: string;
      title?: string;
      ariaLabel?: string;
    }
  | {
      src: string;
      alt?: string;
      href?: string;
      title?: string;
      srcSet?: string;
      sizes?: string;
      width?: number;
      height?: number;
    };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoItem, key: React.Key) => React.ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2
} as const;

const toCssLength = (value?: number | string): string | undefined =>
  typeof value === 'number' ? \`\${value}px\` : (value ?? undefined);

const useResizeObserver = (
  callback: () => void,
  elements: Array<React.RefObject<Element | null>>,
  dependencies: React.DependencyList
) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }

    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, dependencies);
};

const useImageLoader = (
  seqRef: React.RefObject<HTMLUListElement | null>,
  onLoad: () => void,
  dependencies: React.DependencyList
) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];

    if (images.length === 0) {
      onLoad();
      return;
    }

    let remainingImages = images.length;
    const handleImageLoad = () => {
      remainingImages -= 1;
      if (remainingImages === 0) {
        onLoad();
      }
    };

    images.forEach(img => {
      const htmlImg = img as HTMLImageElement;
      if (htmlImg.complete) {
        handleImageLoad();
      } else {
        htmlImg.addEventListener('load', handleImageLoad, { once: true });
        htmlImg.addEventListener('error', handleImageLoad, { once: true });
      }
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  }, dependencies);
};

const useAnimationLoop = (
  trackRef: React.RefObject<HTMLDivElement | null>,
  targetVelocity: number,
  seqWidth: number,
  seqHeight: number,
  isHovered: boolean,
  hoverSpeed: number | undefined,
  isVertical: boolean
) => {
  const rafRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const seqSize = isVertical ? seqHeight : seqWidth;

    if (seqSize > 0) {
      offsetRef.current = ((offsetRef.current % seqSize) + seqSize) % seqSize;
      const transformValue = isVertical
        ? \`translate3d(0, \${-offsetRef.current}px, 0)\`
        : \`translate3d(\${-offsetRef.current}px, 0, 0)\`;
      track.style.transform = transformValue;
    }

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;

      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqSize > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqSize) + seqSize) % seqSize;
        offsetRef.current = nextOffset;

        const transformValue = isVertical
          ? \`translate3d(0, \${-offsetRef.current}px, 0)\`
          : \`translate3d(\${-offsetRef.current}px, 0, 0)\`;
        track.style.transform = transformValue;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical]);
};

export const LogoLoop = React.memo<LogoLoopProps>(
  ({
    logos,
    speed = 120,
    direction = 'left',
    width = '100%',
    logoHeight = 28,
    gap = 32,
    pauseOnHover,
    hoverSpeed,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    renderItem,
    ariaLabel = 'Partner logos',
    className,
    style
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const seqRef = useRef<HTMLUListElement>(null);

    const [seqWidth, setSeqWidth] = useState<number>(0);
    const [seqHeight, setSeqHeight] = useState<number>(0);
    const [copyCount, setCopyCount] = useState<number>(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const effectiveHoverSpeed = useMemo(() => {
      if (hoverSpeed !== undefined) return hoverSpeed;
      if (pauseOnHover === true) return 0;
      if (pauseOnHover === false) return undefined;
      return 0;
    }, [hoverSpeed, pauseOnHover]);

    const isVertical = direction === 'up' || direction === 'down';

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      let directionMultiplier: number;
      if (isVertical) {
        directionMultiplier = direction === 'up' ? 1 : -1;
      } else {
        directionMultiplier = direction === 'left' ? 1 : -1;
      }
      const speedMultiplier = speed < 0 ? -1 : 1;
      return magnitude * directionMultiplier * speedMultiplier;
    }, [speed, direction, isVertical]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceRect = seqRef.current?.getBoundingClientRect?.();
      const sequenceWidth = sequenceRect?.width ?? 0;
      const sequenceHeight = sequenceRect?.height ?? 0;
      if (isVertical) {
        const parentHeight = containerRef.current?.parentElement?.clientHeight ?? 0;
        if (containerRef.current && parentHeight > 0) {
          const targetHeight = Math.ceil(parentHeight);
          if (containerRef.current.style.height !== \`\${targetHeight}px\`)
            containerRef.current.style.height = \`\${targetHeight}px\`;
        }
        if (sequenceHeight > 0) {
          setSeqHeight(Math.ceil(sequenceHeight));
          const viewport = containerRef.current?.clientHeight ?? parentHeight ?? sequenceHeight;
          const copiesNeeded = Math.ceil(viewport / sequenceHeight) + ANIMATION_CONFIG.COPY_HEADROOM;
          setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
        }
      } else if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, [isVertical]);

    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight, isVertical]);

    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight, isVertical]);

    useAnimationLoop(trackRef, targetVelocity, seqWidth, seqHeight, isHovered, effectiveHoverSpeed, isVertical);

    const cssVariables = useMemo(
      () =>
        ({
          '--logoloop-gap': \`\${gap}px\`,
          '--logoloop-logoHeight': \`\${logoHeight}px\`,
          ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
        }) as React.CSSProperties,
      [gap, logoHeight, fadeOutColor]
    );

    const rootClassName = useMemo(
      () =>
        [
          'logoloop',
          isVertical ? 'logoloop--vertical' : 'logoloop--horizontal',
          fadeOut && 'logoloop--fade',
          scaleOnHover && 'logoloop--scale-hover',
          className
        ]
          .filter(Boolean)
          .join(' '),
      [isVertical, fadeOut, scaleOnHover, className]
    );

    const handleMouseEnter = useCallback(() => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(true);
    }, [effectiveHoverSpeed]);
    const handleMouseLeave = useCallback(() => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(false);
    }, [effectiveHoverSpeed]);

    const renderLogoItem = useCallback(
      (item: LogoItem, key: React.Key) => {
        if (renderItem) {
          return (
            <li className="logoloop__item" key={key} role="listitem">
              {renderItem(item, key)}
            </li>
          );
        }
        const isNodeItem = 'node' in item;
        const content = isNodeItem ? (
          <span className="logoloop__node" aria-hidden={!!item.href && !item.ariaLabel}>
            {(item as any).node}
          </span>
        ) : (
          <img
            src={(item as any).src}
            srcSet={(item as any).srcSet}
            sizes={(item as any).sizes}
            width={(item as any).width}
            height={(item as any).height}
            alt={(item as any).alt ?? ''}
            title={(item as any).title}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        );
        const itemAriaLabel = isNodeItem
          ? ((item as any).ariaLabel ?? (item as any).title)
          : ((item as any).alt ?? (item as any).title);
        const itemContent = (item as any).href ? (
          <a
            className="logoloop__link"
            href={(item as any).href}
            aria-label={itemAriaLabel || 'logo link'}
            target="_blank"
            rel="noreferrer noopener"
          >
            {content}
          </a>
        ) : (
          content
        );
        return (
          <li className="logoloop__item" key={key} role="listitem">
            {itemContent}
          </li>
        );
      },
      [renderItem]
    );

    const logoLists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, copyIndex) => (
          <ul
            className="logoloop__list"
            key={\`copy-\${copyIndex}\`}
            role="list"
            aria-hidden={copyIndex > 0}
            ref={copyIndex === 0 ? seqRef : undefined}
          >
            {logos.map((item, itemIndex) => renderLogoItem(item, \`\${copyIndex}-\${itemIndex}\`))}
          </ul>
        )),
      [copyCount, logos, renderLogoItem]
    );

    const containerStyle = useMemo(
      (): React.CSSProperties => ({
        width: isVertical
          ? toCssLength(width) === '100%'
            ? undefined
            : toCssLength(width)
          : (toCssLength(width) ?? '100%'),
        ...cssVariables,
        ...style
      }),
      [width, cssVariables, style, isVertical]
    );

    return (
      <div ref={containerRef} className={rootClassName} style={containerStyle} role="region" aria-label={ariaLabel}>
        <div className="logoloop__track" ref={trackRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {logoLists}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;
`,ye=`import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export type LogoItem =
  | {
      node: React.ReactNode;
      href?: string;
      title?: string;
      ariaLabel?: string;
    }
  | {
      src: string;
      alt?: string;
      href?: string;
      title?: string;
      srcSet?: string;
      sizes?: string;
      width?: number;
      height?: number;
    };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoItem, key: React.Key) => React.ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2
} as const;

const toCssLength = (value?: number | string): string | undefined =>
  typeof value === 'number' ? \`\${value}px\` : (value ?? undefined);

const cx = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(' ');

const useResizeObserver = (
  callback: () => void,
  elements: Array<React.RefObject<Element | null>>,
  dependencies: React.DependencyList
) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }

    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, dependencies);
};

const useImageLoader = (
  seqRef: React.RefObject<HTMLUListElement | null>,
  onLoad: () => void,
  dependencies: React.DependencyList
) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? [];

    if (images.length === 0) {
      onLoad();
      return;
    }

    let remainingImages = images.length;
    const handleImageLoad = () => {
      remainingImages -= 1;
      if (remainingImages === 0) {
        onLoad();
      }
    };

    images.forEach(img => {
      const htmlImg = img as HTMLImageElement;
      if (htmlImg.complete) {
        handleImageLoad();
      } else {
        htmlImg.addEventListener('load', handleImageLoad, { once: true });
        htmlImg.addEventListener('error', handleImageLoad, { once: true });
      }
    });

    return () => {
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  }, dependencies);
};

const useAnimationLoop = (
  trackRef: React.RefObject<HTMLDivElement | null>,
  targetVelocity: number,
  seqWidth: number,
  seqHeight: number,
  isHovered: boolean,
  hoverSpeed: number | undefined,
  isVertical: boolean
) => {
  const rafRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const seqSize = isVertical ? seqHeight : seqWidth;

    if (seqSize > 0) {
      offsetRef.current = ((offsetRef.current % seqSize) + seqSize) % seqSize;
      const transformValue = isVertical
        ? \`translate3d(0, \${-offsetRef.current}px, 0)\`
        : \`translate3d(\${-offsetRef.current}px, 0, 0)\`;
      track.style.transform = transformValue;
    }

    if (prefersReduced) {
      track.style.transform = isVertical ? 'translate3d(0, 0, 0)' : 'translate3d(0, 0, 0)';
      return () => {
        lastTimestampRef.current = null;
      };
    }

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;

      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqSize > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqSize) + seqSize) % seqSize;
        offsetRef.current = nextOffset;

        const transformValue = isVertical
          ? \`translate3d(0, \${-offsetRef.current}px, 0)\`
          : \`translate3d(\${-offsetRef.current}px, 0, 0)\`;
        track.style.transform = transformValue;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical]);
};

export const LogoLoop = React.memo<LogoLoopProps>(
  ({
    logos,
    speed = 120,
    direction = 'left',
    width = '100%',
    logoHeight = 28,
    gap = 32,
    pauseOnHover,
    hoverSpeed,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    renderItem,
    ariaLabel = 'Partner logos',
    className,
    style
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const seqRef = useRef<HTMLUListElement>(null);

    const [seqWidth, setSeqWidth] = useState<number>(0);
    const [seqHeight, setSeqHeight] = useState<number>(0);
    const [copyCount, setCopyCount] = useState<number>(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const effectiveHoverSpeed = useMemo(() => {
      if (hoverSpeed !== undefined) return hoverSpeed;
      if (pauseOnHover === true) return 0;
      if (pauseOnHover === false) return undefined;
      return 0;
    }, [hoverSpeed, pauseOnHover]);

    const isVertical = direction === 'up' || direction === 'down';

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      let directionMultiplier: number;
      if (isVertical) {
        directionMultiplier = direction === 'up' ? 1 : -1;
      } else {
        directionMultiplier = direction === 'left' ? 1 : -1;
      }
      const speedMultiplier = speed < 0 ? -1 : 1;
      return magnitude * directionMultiplier * speedMultiplier;
    }, [speed, direction, isVertical]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceRect = seqRef.current?.getBoundingClientRect?.();
      const sequenceWidth = sequenceRect?.width ?? 0;
      const sequenceHeight = sequenceRect?.height ?? 0;
      if (isVertical) {
        const parentHeight = containerRef.current?.parentElement?.clientHeight ?? 0;
        if (containerRef.current && parentHeight > 0) {
          const targetHeight = Math.ceil(parentHeight);
          if (containerRef.current.style.height !== \`\${targetHeight}px\`)
            containerRef.current.style.height = \`\${targetHeight}px\`;
        }
        if (sequenceHeight > 0) {
          setSeqHeight(Math.ceil(sequenceHeight));
          const viewport = containerRef.current?.clientHeight ?? parentHeight ?? sequenceHeight;
          const copiesNeeded = Math.ceil(viewport / sequenceHeight) + ANIMATION_CONFIG.COPY_HEADROOM;
          setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
        }
      } else if (sequenceWidth > 0) {
        setSeqWidth(Math.ceil(sequenceWidth));
        const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
        setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
      }
    }, [isVertical]);

    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight, isVertical]);

    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight, isVertical]);

    useAnimationLoop(trackRef, targetVelocity, seqWidth, seqHeight, isHovered, effectiveHoverSpeed, isVertical);

    const cssVariables = useMemo(
      () =>
        ({
          '--logoloop-gap': \`\${gap}px\`,
          '--logoloop-logoHeight': \`\${logoHeight}px\`,
          ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
        }) as React.CSSProperties,
      [gap, logoHeight, fadeOutColor]
    );

    const rootClasses = useMemo(
      () =>
        cx(
          'relative group',
          isVertical ? 'overflow-hidden h-full inline-block' : 'overflow-x-hidden',
          '[--logoloop-gap:32px]',
          '[--logoloop-logoHeight:28px]',
          '[--logoloop-fadeColorAuto:#ffffff]',
          'dark:[--logoloop-fadeColorAuto:#0b0b0b]',
          scaleOnHover && 'py-[calc(var(--logoloop-logoHeight)*0.1)]',
          className
        ),
      [isVertical, scaleOnHover, className]
    );

    const handleMouseEnter = useCallback(() => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(true);
    }, [effectiveHoverSpeed]);
    const handleMouseLeave = useCallback(() => {
      if (effectiveHoverSpeed !== undefined) setIsHovered(false);
    }, [effectiveHoverSpeed]);

    const renderLogoItem = useCallback(
      (item: LogoItem, key: React.Key) => {
        if (renderItem) {
          return (
            <li
              className={cx(
                'flex-none text-[length:var(--logoloop-logoHeight)] leading-[1]',
                isVertical ? 'mb-[var(--logoloop-gap)]' : 'mr-[var(--logoloop-gap)]',
                scaleOnHover && 'overflow-visible group/item'
              )}
              key={key}
              role="listitem"
            >
              {renderItem(item, key)}
            </li>
          );
        }

        const isNodeItem = 'node' in item;

        const content = isNodeItem ? (
          <span
            className={cx(
              'inline-flex items-center',
              'motion-reduce:transition-none',
              scaleOnHover &&
                'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
            )}
            aria-hidden={!!(item as any).href && !(item as any).ariaLabel}
          >
            {(item as any).node}
          </span>
        ) : (
          <img
            className={cx(
              'h-[var(--logoloop-logoHeight)] w-auto block object-contain',
              '[-webkit-user-drag:none] pointer-events-none',
              '[image-rendering:-webkit-optimize-contrast]',
              'motion-reduce:transition-none',
              scaleOnHover &&
                'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
            )}
            src={(item as any).src}
            srcSet={(item as any).srcSet}
            sizes={(item as any).sizes}
            width={(item as any).width}
            height={(item as any).height}
            alt={(item as any).alt ?? ''}
            title={(item as any).title}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        );

        const itemAriaLabel = isNodeItem
          ? ((item as any).ariaLabel ?? (item as any).title)
          : ((item as any).alt ?? (item as any).title);

        const inner = (item as any).href ? (
          <a
            className={cx(
              'inline-flex items-center no-underline rounded',
              'transition-opacity duration-200 ease-linear',
              'hover:opacity-80',
              'focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2'
            )}
            href={(item as any).href}
            aria-label={itemAriaLabel || 'logo link'}
            target="_blank"
            rel="noreferrer noopener"
          >
            {content}
          </a>
        ) : (
          content
        );

        return (
          <li
            className={cx(
              'flex-none text-[length:var(--logoloop-logoHeight)] leading-[1]',
              isVertical ? 'mb-[var(--logoloop-gap)]' : 'mr-[var(--logoloop-gap)]',
              scaleOnHover && 'overflow-visible group/item'
            )}
            key={key}
            role="listitem"
          >
            {inner}
          </li>
        );
      },
      [isVertical, scaleOnHover, renderItem]
    );

    const logoLists = useMemo(
      () =>
        Array.from({ length: copyCount }, (_, copyIndex) => (
          <ul
            className={cx('flex items-center', isVertical && 'flex-col')}
            key={\`copy-\${copyIndex}\`}
            role="list"
            aria-hidden={copyIndex > 0}
            ref={copyIndex === 0 ? seqRef : undefined}
          >
            {logos.map((item, itemIndex) => renderLogoItem(item, \`\${copyIndex}-\${itemIndex}\`))}
          </ul>
        )),
      [copyCount, logos, renderLogoItem, isVertical]
    );

    const containerStyle = useMemo(
      (): React.CSSProperties => ({
        width: isVertical
          ? toCssLength(width) === '100%'
            ? undefined
            : toCssLength(width)
          : (toCssLength(width) ?? '100%'),
        ...cssVariables,
        ...style
      }),
      [width, cssVariables, style, isVertical]
    );

    return (
      <div ref={containerRef} className={rootClasses} style={containerStyle} role="region" aria-label={ariaLabel}>
        {fadeOut && (
          <>
            {isVertical ? (
              <>
                <div
                  aria-hidden
                  className={cx(
                    'pointer-events-none absolute inset-x-0 top-0 z-10',
                    'h-[clamp(24px,8%,120px)]',
                    'bg-[linear-gradient(to_bottom,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
                  )}
                />
                <div
                  aria-hidden
                  className={cx(
                    'pointer-events-none absolute inset-x-0 bottom-0 z-10',
                    'h-[clamp(24px,8%,120px)]',
                    'bg-[linear-gradient(to_top,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
                  )}
                />
              </>
            ) : (
              <>
                <div
                  aria-hidden
                  className={cx(
                    'pointer-events-none absolute inset-y-0 left-0 z-10',
                    'w-[clamp(24px,8%,120px)]',
                    'bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
                  )}
                />
                <div
                  aria-hidden
                  className={cx(
                    'pointer-events-none absolute inset-y-0 right-0 z-10',
                    'w-[clamp(24px,8%,120px)]',
                    'bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]'
                  )}
                />
              </>
            )}
          </>
        )}

        <div
          className={cx(
            'flex will-change-transform select-none relative z-0',
            'motion-reduce:transform-none',
            isVertical ? 'flex-col h-max w-full' : 'flex-row w-max'
          )}
          ref={trackRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {logoLists}
        </div>
      </div>
    );
  }
);

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;
`,xe={usage:`import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

function App() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
      
      {/* Vertical loop with deceleration on hover */}
      <LogoLoop
        logos={techLogos}
        speed={80}
        direction="up"
        logoHeight={48}
        gap={40}
        hoverSpeed={20}
        fadeOut
      />
    </div>
  );
}`,code:he,css:ve,tailwind:be,tsCode:Re,tsTailwind:ye},S={SMOOTH_TAU:.25,MIN_COPIES:2,COPY_HEADROOM:2},V=e=>typeof e=="number"?`${e}px`:e??void 0,He=(e,a,u)=>{t.useEffect(()=>{if(!window.ResizeObserver){const s=()=>e();return window.addEventListener("resize",s),e(),()=>window.removeEventListener("resize",s)}const r=a.map(s=>{if(!s.current)return null;const l=new ResizeObserver(e);return l.observe(s.current),l});return e(),()=>{r.forEach(s=>s==null?void 0:s.disconnect())}},[e,a,u])},Ie=(e,a,u)=>{t.useEffect(()=>{var g;const r=((g=e.current)==null?void 0:g.querySelectorAll("img"))??[];if(r.length===0){a();return}let s=r.length;const l=()=>{s-=1,s===0&&a()};return r.forEach(d=>{const f=d;f.complete?l():(f.addEventListener("load",l,{once:!0}),f.addEventListener("error",l,{once:!0}))}),()=>{r.forEach(d=>{d.removeEventListener("load",l),d.removeEventListener("error",l)})}},[a,e,u])},Le=(e,a,u,r,s,l,g)=>{const d=t.useRef(null),f=t.useRef(null),m=t.useRef(0),H=t.useRef(0);t.useEffect(()=>{const b=e.current;if(!b)return;const p=g?r:u;if(p>0){m.current=(m.current%p+p)%p;const R=g?`translate3d(0, ${-m.current}px, 0)`:`translate3d(${-m.current}px, 0, 0)`;b.style.transform=R}const L=R=>{f.current===null&&(f.current=R);const h=Math.max(0,R-f.current)/1e3;f.current=R;const o=s&&l!==void 0?l:a,O=1-Math.exp(-h/S.SMOOTH_TAU);if(H.current+=(o-H.current)*O,p>0){let M=m.current+H.current*h;M=(M%p+p)%p,m.current=M;const A=g?`translate3d(0, ${-m.current}px, 0)`:`translate3d(${-m.current}px, 0, 0)`;b.style.transform=A}d.current=requestAnimationFrame(L)};return d.current=requestAnimationFrame(L),()=>{d.current!==null&&(cancelAnimationFrame(d.current),d.current=null),f.current=null}},[a,u,r,s,l,g,e])},Y=t.memo(({logos:e,speed:a=120,direction:u="left",width:r="100%",logoHeight:s=28,gap:l=32,pauseOnHover:g,hoverSpeed:d,fadeOut:f=!1,fadeOutColor:m,scaleOnHover:H=!1,renderItem:b,ariaLabel:p="Partner logos",className:L,style:R})=>{const h=t.useRef(null),o=t.useRef(null),O=t.useRef(null),[M,A]=t.useState(0),[K,Z]=t.useState(0),[E,T]=t.useState(S.MIN_COPIES),[J,P]=t.useState(!1),N=t.useMemo(()=>{if(d!==void 0)return d;if(g===!0)return 0;if(g!==!1)return 0},[d,g]),v=u==="up"||u==="down",Q=t.useMemo(()=>{const i=Math.abs(a);let c;v?c=u==="up"?1:-1:c=u==="left"?1:-1;const y=a<0?-1:1;return i*c*y},[a,u,v]),W=t.useCallback(()=>{var q,C,F,D,G,B;const i=((q=h.current)==null?void 0:q.clientWidth)??0,c=(F=(C=O.current)==null?void 0:C.getBoundingClientRect)==null?void 0:F.call(C),y=(c==null?void 0:c.width)??0,I=(c==null?void 0:c.height)??0;if(v){const w=((G=(D=h.current)==null?void 0:D.parentElement)==null?void 0:G.clientHeight)??0;if(h.current&&w>0){const _=Math.ceil(w);h.current.style.height!==`${_}px`&&(h.current.style.height=`${_}px`)}if(I>0){Z(Math.ceil(I));const _=((B=h.current)==null?void 0:B.clientHeight)??w??I,re=Math.ceil(_/I)+S.COPY_HEADROOM;T(Math.max(S.MIN_COPIES,re))}}else if(y>0){A(Math.ceil(y));const w=Math.ceil(i/y)+S.COPY_HEADROOM;T(Math.max(S.MIN_COPIES,w))}},[v]);He(W,[h,O],[e,l,s,v]),Ie(O,W,[e,l,s,v]),Le(o,Q,M,K,J,N,v);const j=t.useMemo(()=>({"--logoloop-gap":`${l}px`,"--logoloop-logoHeight":`${s}px`,...m&&{"--logoloop-fadeColor":m}}),[l,s,m]),X=t.useMemo(()=>["logoloop",v?"logoloop--vertical":"logoloop--horizontal",f&&"logoloop--fade",H&&"logoloop--scale-hover",L].filter(Boolean).join(" "),[v,f,H,L]),ee=t.useCallback(()=>{N!==void 0&&P(!0)},[N]),ne=t.useCallback(()=>{N!==void 0&&P(!1)},[N]),$=t.useCallback((i,c)=>{if(b)return n.jsx("li",{className:"logoloop__item",role:"listitem",children:b(i,c)},c);const y="node"in i,I=y?n.jsx("span",{className:"logoloop__node","aria-hidden":!!i.href&&!i.ariaLabel,children:i.node}):n.jsx("img",{src:i.src,srcSet:i.srcSet,sizes:i.sizes,width:i.width,height:i.height,alt:i.alt??"",title:i.title,loading:"lazy",decoding:"async",draggable:!1}),q=y?i.ariaLabel??i.title:i.alt??i.title,C=i.href?n.jsx("a",{className:"logoloop__link",href:i.href,"aria-label":q||"logo link",target:"_blank",rel:"noreferrer noopener",children:I}):I;return n.jsx("li",{className:"logoloop__item",role:"listitem",children:C},c)},[b]),te=t.useMemo(()=>Array.from({length:E},(i,c)=>n.jsx("ul",{className:"logoloop__list",role:"list","aria-hidden":c>0,ref:c===0?O:void 0,children:e.map((y,I)=>$(y,`${c}-${I}`))},`copy-${c}`)),[E,e,$]),oe=t.useMemo(()=>({width:v?V(r)==="100%"?void 0:V(r):V(r)??"100%",...j,...R}),[r,j,R,v]);return n.jsx("div",{ref:h,className:X,style:oe,role:"region","aria-label":p,children:n.jsx("div",{className:"logoloop__track",ref:o,onMouseEnter:ee,onMouseLeave:ne,children:te})})});Y.displayName="LogoLoop";function Oe(e){return x({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"},child:[]}]})(e)}function Ce(e){return x({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"},child:[]}]})(e)}function Se(e){return x({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"},child:[]}]})(e)}function Me(e){return x({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z"},child:[]}]})(e)}function Ne(e){return x({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},child:[]}]})(e)}function we(e){return x({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z"},child:[]}]})(e)}function qe(e){return x({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z"},child:[]}]})(e)}function _e(e){return x({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(e)}function ke(e){return x({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(e)}function Ae(e){return x({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 22.525H0l12-21.05 12 21.05z"},child:[]}]})(e)}const ze=[{node:n.jsx(Ne,{}),title:"React",href:"https://react.dev"},{node:n.jsx(Se,{}),title:"Next.js",href:"https://nextjs.org"},{node:n.jsx(ke,{}),title:"TypeScript",href:"https://www.typescriptlang.org"},{node:n.jsx(_e,{}),title:"Tailwind CSS",href:"https://tailwindcss.com"},{node:n.jsx(Ae,{}),title:"Vercel",href:"https://vercel.com"},{node:n.jsx(Ce,{}),title:"GitHub",href:"https://github.com"},{node:n.jsx(Oe,{}),title:"Docker",href:"https://www.docker.com"},{node:n.jsx(Me,{}),title:"Prisma",href:"https://www.prisma.io"},{node:n.jsx(qe,{}),title:"Supabase",href:"https://supabase.com"},{node:n.jsx(we,{}),title:"Stripe",href:"https://stripe.com"}],U={speed:100,logoHeight:60,gap:60,hoverSpeed:0,fadeOut:!0,scaleOnHover:!0,direction:"left",useCustomRender:!1},Ye=()=>{const[e,a]=pe(),{props:u,updateProp:r,resetProps:s,hasChanges:l}=ae(U),{speed:g,logoHeight:d,gap:f,hoverSpeed:m,fadeOut:H,scaleOnHover:b,direction:p,useCustomRender:L}=u,R=[{value:"left",label:"Left"},{value:"right",label:"Right"},{value:"up",label:"Up"},{value:"down",label:"Down"}],h=t.useMemo(()=>[{name:"logos",type:"LogoItem[]",default:"required",description:"Array of logo items to display. Each item can be either a React node or an image src."},{name:"speed",type:"number",default:"120",description:"Animation speed in pixels per second. Positive values move based on direction, negative values reverse direction."},{name:"direction",type:"'left' | 'right' | 'up' | 'down'",default:"'left'",description:"Direction of the logo animation loop. Supports horizontal (left/right) and vertical (up/down) scrolling."},{name:"width",type:"number | string",default:"'100%'",description:"Width of the logo loop container."},{name:"logoHeight",type:"number",default:"28",description:"Height of the logos in pixels."},{name:"gap",type:"number",default:"32",description:"Gap between logos in pixels."},{name:"hoverSpeed",type:"number | undefined",default:"0",description:"Speed when hovering over the component. Set to 0 to pause, or a lower value for deceleration effect."},{name:"fadeOut",type:"boolean",default:"false",description:"Whether to apply fade-out effect at the edges of the container."},{name:"fadeOutColor",type:"string",default:"undefined",description:"Color used for the fade-out effect. Only applies when fadeOut is true."},{name:"scaleOnHover",type:"boolean",default:"false",description:"Whether to scale logos on hover."},{name:"renderItem",type:"(item: LogoItem, key: React.Key) => React.ReactNode",default:"undefined",description:"Custom render function for each logo item. Allows full control over item rendering for animations, tooltips, etc."},{name:"ariaLabel",type:"string",default:"'Partner logos'",description:"Accessibility label for the logo loop component."},{name:"className",type:"string",default:"undefined",description:"Additional CSS class names to apply to the root element."},{name:"style",type:"React.CSSProperties",default:"undefined",description:"Inline styles to apply to the root element."}],[]);return n.jsx(se,{props:u,defaultProps:U,resetProps:s,hasChanges:l,children:n.jsxs(le,{children:[n.jsxs(ce,{children:[n.jsx(ie,{position:"relative",className:"demo-container",h:400,p:0,overflow:"hidden",children:n.jsx(Y,{logos:ze,width:"100%",logoHeight:d,gap:f,speed:g,direction:p,scaleOnHover:b,hoverSpeed:m,fadeOut:H,fadeOutColor:"#060010",ariaLabel:"Our tech stack",renderItem:L?o=>n.jsx("div",{style:{padding:"8px",border:"2px solid #8b5cf6",borderRadius:"8px",background:"rgba(139, 92, 246, 0.1)"},children:"node"in o?o.node:n.jsx("img",{src:o.src,alt:o.alt,style:{height:`${d}px`}})}):void 0},e)}),n.jsxs(me,{children:[n.jsx(ge,{title:"Direction",options:R,value:p,onChange:o=>{r("direction",o),a()}}),n.jsx(k,{title:"Speed",min:0,max:300,step:10,value:g,valueUnit:"px/s",onChange:o=>{r("speed",o),a()}}),n.jsx(k,{title:"Hover Speed",min:0,max:200,step:10,value:m,valueUnit:"px/s",onChange:o=>{r("hoverSpeed",o),a()}}),n.jsx(k,{title:"Logo Height",min:20,max:120,step:5,value:d,valueUnit:"px",onChange:o=>{r("logoHeight",o),a()}}),n.jsx(k,{title:"Gap",min:10,max:120,step:5,value:f,valueUnit:"px",onChange:o=>{r("gap",o),a()}}),n.jsx(z,{title:"Fade Out",isChecked:H,onChange:o=>{r("fadeOut",o),a()}}),n.jsx(z,{title:"Scale on Hover",isChecked:b,onChange:o=>{r("scaleOnHover",o),a()}}),n.jsx(z,{title:"Use Custom Render",isChecked:L,onChange:o=>{r("useCustomRender",o),a()}})]}),n.jsx(de,{data:h})]}),n.jsx(ue,{children:n.jsx(fe,{codeObject:xe,componentName:"LogoLoop"})})]})})};export{Ye as default};
