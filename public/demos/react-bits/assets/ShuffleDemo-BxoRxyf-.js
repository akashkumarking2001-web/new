import{r as p,c5 as de,a0 as pe,i as Se,Z as S,j as i,B as Re}from"./index-CKqfvLoB.js";import{u as Ce,C as Te,T as Me,P as Ee,a as De,b as Ae,c as He}from"./PropTable-BzD4cJVp.js";import{C as Fe}from"./Customize-BaUKAf5J.js";import{P as ce}from"./PreviewSwitch-B0BSuWrO.js";import{P as I}from"./PreviewSlider-25yjOF_X.js";import{P as fe}from"./PreviewSelect-CM4Sns8B.js";import{D as ke}from"./Dependencies-DmSBXzNX.js";import{R as Le}from"./RefreshButton-CpmD4Uvc.js";import{u as Oe}from"./useForceRerender-0lK0qxlp.js";import{S as me}from"./SplitText-n_eiQhs4.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./switch-CqqRi5Az.js";import"./slider-P7kYMDWb.js";import"./field-DGUMYGrq.js";const Pe=`import React, { useRef, useEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import './Shuffle.css';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

const Shuffle = ({
  text,
  className = '',
  style = {},
  shuffleDirection = 'right',
  duration = 0.35,
  maxDelay = 0,
  ease = 'power3.out',
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'p',
  textAlign = 'center',
  onShuffleComplete,
  shuffleTimes = 1,
  animationMode = 'evenodd',
  loop = false,
  loopDelay = 0,
  stagger = 0.03,
  scrambleCharset = '',
  colorFrom,
  colorTo,
  triggerOnce = true,
  respectReducedMotion = true,
  triggerOnHover = true
}) => {
  const ref = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [ready, setReady] = useState(false);

  const splitRef = useRef(null);
  const wrappersRef = useRef([]);
  const tlRef = useRef(null);
  const playingRef = useRef(false);
  const hoverHandlerRef = useRef(null);

  useEffect(() => {
    if ('fonts' in document) {
      if (document.fonts.status === 'loaded') setFontsLoaded(true);
      else document.fonts.ready.then(() => setFontsLoaded(true));
    } else setFontsLoaded(true);
  }, []);

  const scrollTriggerStart = useMemo(() => {
    const startPct = (1 - threshold) * 100;
    const mm = /^(-?\\d+(?:\\.\\d+)?)(px|em|rem|%)?$/.exec(rootMargin || '');
    const mv = mm ? parseFloat(mm[1]) : 0;
    const mu = mm ? mm[2] || 'px' : 'px';
    const sign = mv === 0 ? '' : mv < 0 ? \`-=\${Math.abs(mv)}\${mu}\` : \`+=\${mv}\${mu}\`;
    return \`top \${startPct}%\${sign}\`;
  }, [threshold, rootMargin]);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      if (respectReducedMotion && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setReady(true);
        onShuffleComplete?.();
        return;
      }

      const el = ref.current;

      const start = scrollTriggerStart;

      const removeHover = () => {
        if (hoverHandlerRef.current && ref.current) {
          ref.current.removeEventListener('mouseenter', hoverHandlerRef.current);
          hoverHandlerRef.current = null;
        }
      };

      const teardown = () => {
        if (tlRef.current) {
          tlRef.current.kill();
          tlRef.current = null;
        }
        if (wrappersRef.current.length) {
          wrappersRef.current.forEach(wrap => {
            const inner = wrap.firstElementChild;
            const orig = inner?.querySelector('[data-orig="1"]');
            if (orig && wrap.parentNode) wrap.parentNode.replaceChild(orig, wrap);
          });
          wrappersRef.current = [];
        }
        try {
          splitRef.current?.revert();
        } catch {
          /* noop */
        }
        splitRef.current = null;
        playingRef.current = false;
      };

      const build = () => {
        teardown();

        splitRef.current = new GSAPSplitText(el, {
          type: 'chars',
          charsClass: 'shuffle-char',
          wordsClass: 'shuffle-word',
          linesClass: 'shuffle-line',
          smartWrap: true,
          reduceWhiteSpace: false
        });

        const chars = splitRef.current.chars || [];
        wrappersRef.current = [];

        const rolls = Math.max(1, Math.floor(shuffleTimes));
        const rand = set => set.charAt(Math.floor(Math.random() * set.length)) || '';

        chars.forEach(ch => {
          const parent = ch.parentElement;
          if (!parent) return;

          const w = ch.getBoundingClientRect().width;
          const h = ch.getBoundingClientRect().height;
          if (!w) return;

          const wrap = document.createElement('span');
          Object.assign(wrap.style, {
            display: 'inline-block',
            overflow: 'hidden',
            width: w + 'px',
            height: shuffleDirection === 'up' || shuffleDirection === 'down' ? h + 'px' : 'auto',
            verticalAlign: 'bottom'
          });

          const inner = document.createElement('span');
          Object.assign(inner.style, {
            display: 'inline-block',
            whiteSpace: shuffleDirection === 'up' || shuffleDirection === 'down' ? 'normal' : 'nowrap',
            willChange: 'transform'
          });

          parent.insertBefore(wrap, ch);
          wrap.appendChild(inner);

          const firstOrig = ch.cloneNode(true);
          Object.assign(firstOrig.style, {
            display: shuffleDirection === 'up' || shuffleDirection === 'down' ? 'block' : 'inline-block',
            width: w + 'px',
            textAlign: 'center'
          });

          ch.setAttribute('data-orig', '1');
          Object.assign(ch.style, {
            display: shuffleDirection === 'up' || shuffleDirection === 'down' ? 'block' : 'inline-block',
            width: w + 'px',
            textAlign: 'center'
          });

          inner.appendChild(firstOrig);
          for (let k = 0; k < rolls; k++) {
            const c = ch.cloneNode(true);
            if (scrambleCharset) c.textContent = rand(scrambleCharset);
            Object.assign(c.style, {
              display: shuffleDirection === 'up' || shuffleDirection === 'down' ? 'block' : 'inline-block',
              width: w + 'px',
              textAlign: 'center'
            });
            inner.appendChild(c);
          }
          inner.appendChild(ch);

          const steps = rolls + 1;

          if (shuffleDirection === 'right' || shuffleDirection === 'down') {
            const firstCopy = inner.firstElementChild;
            const real = inner.lastElementChild;
            if (real) inner.insertBefore(real, inner.firstChild);
            if (firstCopy) inner.appendChild(firstCopy);
          }

          let startX = 0;
          let finalX = 0;
          let startY = 0;
          let finalY = 0;

          if (shuffleDirection === 'right') {
            startX = -steps * w;
            finalX = 0;
          } else if (shuffleDirection === 'left') {
            startX = 0;
            finalX = -steps * w;
          } else if (shuffleDirection === 'down') {
            startY = -steps * h;
            finalY = 0;
          } else if (shuffleDirection === 'up') {
            startY = 0;
            finalY = -steps * h;
          }

          if (shuffleDirection === 'left' || shuffleDirection === 'right') {
            gsap.set(inner, { x: startX, y: 0, force3D: true });
            inner.setAttribute('data-start-x', String(startX));
            inner.setAttribute('data-final-x', String(finalX));
          } else {
            gsap.set(inner, { x: 0, y: startY, force3D: true });
            inner.setAttribute('data-start-y', String(startY));
            inner.setAttribute('data-final-y', String(finalY));
          }

          if (colorFrom) inner.style.color = colorFrom;
          wrappersRef.current.push(wrap);
        });
      };

      const inners = () => wrappersRef.current.map(w => w.firstElementChild);

      const randomizeScrambles = () => {
        if (!scrambleCharset) return;
        wrappersRef.current.forEach(w => {
          const strip = w.firstElementChild;
          if (!strip) return;
          const kids = Array.from(strip.children);
          for (let i = 1; i < kids.length - 1; i++) {
            kids[i].textContent = scrambleCharset.charAt(Math.floor(Math.random() * scrambleCharset.length));
          }
        });
      };

      const cleanupToStill = () => {
        wrappersRef.current.forEach(w => {
          const strip = w.firstElementChild;
          if (!strip) return;
          const real = strip.querySelector('[data-orig="1"]');
          if (!real) return;
          strip.replaceChildren(real);
          strip.style.transform = 'none';
          strip.style.willChange = 'auto';
        });
      };

      const play = () => {
        const strips = inners();
        if (!strips.length) return;

        playingRef.current = true;
        const isVertical = shuffleDirection === 'up' || shuffleDirection === 'down';

        const tl = gsap.timeline({
          smoothChildTiming: true,
          repeat: loop ? -1 : 0,
          repeatDelay: loop ? loopDelay : 0,
          onRepeat: () => {
            if (scrambleCharset) randomizeScrambles();
            if (isVertical) {
              gsap.set(strips, { y: (i, t) => parseFloat(t.getAttribute('data-start-y') || '0') });
            } else {
              gsap.set(strips, { x: (i, t) => parseFloat(t.getAttribute('data-start-x') || '0') });
            }
            onShuffleComplete?.();
          },
          onComplete: () => {
            playingRef.current = false;
            if (!loop) {
              cleanupToStill();
              if (colorTo) gsap.set(strips, { color: colorTo });
              onShuffleComplete?.();
              armHover();
            }
          }
        });

        const addTween = (targets, at) => {
          const vars = {
            duration,
            ease,
            force3D: true,
            stagger: animationMode === 'evenodd' ? stagger : 0
          };
          if (isVertical) {
            vars.y = (i, t) => parseFloat(t.getAttribute('data-final-y') || '0');
          } else {
            vars.x = (i, t) => parseFloat(t.getAttribute('data-final-x') || '0');
          }

          tl.to(targets, vars, at);

          if (colorFrom && colorTo) {
            tl.to(targets, { color: colorTo, duration, ease }, at);
          }
        };

        if (animationMode === 'evenodd') {
          const odd = strips.filter((_, i) => i % 2 === 1);
          const even = strips.filter((_, i) => i % 2 === 0);
          const oddTotal = duration + Math.max(0, odd.length - 1) * stagger;
          const evenStart = odd.length ? oddTotal * 0.7 : 0;
          if (odd.length) addTween(odd, 0);
          if (even.length) addTween(even, evenStart);
        } else {
          strips.forEach(strip => {
            const d = Math.random() * maxDelay;
            const vars = {
              duration,
              ease,
              force3D: true
            };
            if (isVertical) {
              vars.y = parseFloat(strip.getAttribute('data-final-y') || '0');
            } else {
              vars.x = parseFloat(strip.getAttribute('data-final-x') || '0');
            }
            tl.to(strip, vars, d);
            if (colorFrom && colorTo) tl.fromTo(strip, { color: colorFrom }, { color: colorTo, duration, ease }, d);
          });
        }

        tlRef.current = tl;
      };

      const armHover = () => {
        if (!triggerOnHover || !ref.current) return;
        removeHover();
        const handler = () => {
          if (playingRef.current) return;
          build();
          if (scrambleCharset) randomizeScrambles();
          play();
        };
        hoverHandlerRef.current = handler;
        ref.current.addEventListener('mouseenter', handler);
      };

      const create = () => {
        build();
        if (scrambleCharset) randomizeScrambles();
        play();
        armHover();
        setReady(true);
      };

      const st = ScrollTrigger.create({
        trigger: el,
        start,
        once: triggerOnce,
        onEnter: create
      });

      return () => {
        st.kill();
        removeHover();
        teardown();
        setReady(false);
      };
    },
    {
      dependencies: [
        text,
        duration,
        maxDelay,
        ease,
        scrollTriggerStart,
        fontsLoaded,
        shuffleDirection,
        shuffleTimes,
        animationMode,
        loop,
        loopDelay,
        stagger,
        scrambleCharset,
        colorFrom,
        colorTo,
        triggerOnce,
        respectReducedMotion,
        triggerOnHover,
        onShuffleComplete
      ],
      scope: ref
    }
  );

  const commonStyle = useMemo(() => ({ textAlign, ...style }), [textAlign, style]);

  const classes = useMemo(() => \`shuffle-parent \${ready ? 'is-ready' : ''} \${className}\`, [ready, className]);

  const Tag = tag || 'p';
  return React.createElement(Tag, { ref, className: classes, style: commonStyle }, text);
};

export default Shuffle;
`,Ne=`.shuffle-parent {
  display: inline-block;
  white-space: normal;
  word-wrap: break-word;
  will-change: transform;
  line-height: 1;
  font-size: 4rem;
  font-family: 'Press Start 2P', sans-serif;
  text-transform: uppercase;
  visibility: hidden;
}

.shuffle-parent.is-ready {
  visibility: visible;
}

.shuffle-char-wrapper {
  display: inline-block;
  overflow: hidden;
  vertical-align: baseline;
  position: relative;
}

.shuffle-char-wrapper > span {
  display: inline-flex;
  will-change: transform;
}

.shuffle-char {
  line-height: 1;
  display: inline-block;
  text-align: center;
}
`,je=`import React, { useRef, useEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

const Shuffle = ({
  text,
  className = '',
  style = {},
  shuffleDirection = 'right',
  duration = 0.35,
  maxDelay = 0,
  ease = 'power3.out',
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'p',
  textAlign = 'center',
  onShuffleComplete,
  shuffleTimes = 1,
  animationMode = 'evenodd',
  loop = false,
  loopDelay = 0,
  stagger = 0.03,
  scrambleCharset = '',
  colorFrom,
  colorTo,
  triggerOnce = true,
  respectReducedMotion = true,
  triggerOnHover = true
}) => {
  const ref = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [ready, setReady] = useState(false);

  const splitRef = useRef(null);
  const wrappersRef = useRef([]);
  const tlRef = useRef(null);
  const playingRef = useRef(false);
  const hoverHandlerRef = useRef(null);

  const userHasFont = useMemo(
    () => (style && style.fontFamily) || (className && /font[-[]/i.test(className)),
    [style, className]
  );

  const scrollTriggerStart = useMemo(() => {
    const startPct = (1 - threshold) * 100;
    const mm = /^(-?\\d+(?:\\.\\d+)?)(px|em|rem|%)?$/.exec(rootMargin || '');
    const mv = mm ? parseFloat(mm[1]) : 0;
    const mu = mm ? mm[2] || 'px' : 'px';
    const sign = mv === 0 ? '' : mv < 0 ? \`-=\${Math.abs(mv)}\${mu}\` : \`+=\${mv}\${mu}\`;
    return \`top \${startPct}%\${sign}\`;
  }, [threshold, rootMargin]);

  useEffect(() => {
    if ('fonts' in document) {
      if (document.fonts.status === 'loaded') setFontsLoaded(true);
      else document.fonts.ready.then(() => setFontsLoaded(true));
    } else setFontsLoaded(true);
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;

      if (respectReducedMotion && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        onShuffleComplete?.();
        return;
      }

      const el = ref.current;

      let computedFont = '';
      if (userHasFont) {
        computedFont = style.fontFamily || getComputedStyle(el).fontFamily || '';
      } else {
        computedFont = \`'Press Start 2P', sans-serif\`;
      }

      const start = scrollTriggerStart;

      const removeHover = () => {
        if (hoverHandlerRef.current && ref.current) {
          ref.current.removeEventListener('mouseenter', hoverHandlerRef.current);
          hoverHandlerRef.current = null;
        }
      };

      const teardown = () => {
        if (tlRef.current) {
          tlRef.current.kill();
          tlRef.current = null;
        }
        if (wrappersRef.current.length) {
          wrappersRef.current.forEach(wrap => {
            const inner = wrap.firstElementChild;
            const orig = inner?.querySelector('[data-orig="1"]');
            if (orig && wrap.parentNode) wrap.parentNode.replaceChild(orig, wrap);
          });
          wrappersRef.current = [];
        }
        try {
          splitRef.current?.revert();
        } catch {
          /* noop */
        }
        splitRef.current = null;
        playingRef.current = false;
      };

      const build = () => {
        teardown();

        splitRef.current = new GSAPSplitText(el, {
          type: 'chars',
          charsClass: 'shuffle-char',
          wordsClass: 'shuffle-word',
          linesClass: 'shuffle-line',
          smartWrap: true,
          reduceWhiteSpace: false
        });

        const chars = splitRef.current.chars || [];
        wrappersRef.current = [];

        const rolls = Math.max(1, Math.floor(shuffleTimes));
        const rand = set => set.charAt(Math.floor(Math.random() * set.length)) || '';

        chars.forEach(ch => {
          const parent = ch.parentElement;
          if (!parent) return;

          const w = ch.getBoundingClientRect().width;
          const h = ch.getBoundingClientRect().height;
          if (!w) return;

          const wrap = document.createElement('span');
          wrap.className = 'inline-block overflow-hidden text-left';
          Object.assign(wrap.style, {
            width: w + 'px',
            height: shuffleDirection === 'up' || shuffleDirection === 'down' ? h + 'px' : 'auto',
            verticalAlign: 'bottom'
          });

          const inner = document.createElement('span');
          inner.className =
            'inline-block will-change-transform origin-left transform-gpu ' +
            (shuffleDirection === 'up' || shuffleDirection === 'down' ? 'whitespace-normal' : 'whitespace-nowrap');

          parent.insertBefore(wrap, ch);
          wrap.appendChild(inner);

          const firstOrig = ch.cloneNode(true);
          firstOrig.className =
            'text-left ' + (shuffleDirection === 'up' || shuffleDirection === 'down' ? 'block' : 'inline-block');
          Object.assign(firstOrig.style, { width: w + 'px', fontFamily: computedFont });

          ch.setAttribute('data-orig', '1');
          ch.className =
            'text-left ' + (shuffleDirection === 'up' || shuffleDirection === 'down' ? 'block' : 'inline-block');
          Object.assign(ch.style, { width: w + 'px', fontFamily: computedFont });

          inner.appendChild(firstOrig);
          for (let k = 0; k < rolls; k++) {
            const c = ch.cloneNode(true);
            if (scrambleCharset) c.textContent = rand(scrambleCharset);
            c.className =
              'text-left ' + (shuffleDirection === 'up' || shuffleDirection === 'down' ? 'block' : 'inline-block');
            Object.assign(c.style, { width: w + 'px', fontFamily: computedFont });
            inner.appendChild(c);
          }
          inner.appendChild(ch);

          const steps = rolls + 1;

          if (shuffleDirection === 'right' || shuffleDirection === 'down') {
            const firstCopy = inner.firstElementChild;
            const real = inner.lastElementChild;
            if (real) inner.insertBefore(real, inner.firstChild);
            if (firstCopy) inner.appendChild(firstCopy);
          }

          let startX = 0;
          let finalX = 0;
          let startY = 0;
          let finalY = 0;

          if (shuffleDirection === 'right') {
            startX = -steps * w;
            finalX = 0;
          } else if (shuffleDirection === 'left') {
            startX = 0;
            finalX = -steps * w;
          } else if (shuffleDirection === 'down') {
            startY = -steps * h;
            finalY = 0;
          } else if (shuffleDirection === 'up') {
            startY = 0;
            finalY = -steps * h;
          }

          if (shuffleDirection === 'left' || shuffleDirection === 'right') {
            gsap.set(inner, { x: startX, y: 0, force3D: true });
            inner.setAttribute('data-start-x', String(startX));
            inner.setAttribute('data-final-x', String(finalX));
          } else {
            gsap.set(inner, { x: 0, y: startY, force3D: true });
            inner.setAttribute('data-start-y', String(startY));
            inner.setAttribute('data-final-y', String(finalY));
          }

          if (colorFrom) inner.style.color = colorFrom;
          wrappersRef.current.push(wrap);
        });
      };

      const inners = () => wrappersRef.current.map(w => w.firstElementChild);

      const randomizeScrambles = () => {
        if (!scrambleCharset) return;
        wrappersRef.current.forEach(w => {
          const strip = w.firstElementChild;
          if (!strip) return;
          const kids = Array.from(strip.children);
          for (let i = 1; i < kids.length - 1; i++) {
            kids[i].textContent = scrambleCharset.charAt(Math.floor(Math.random() * scrambleCharset.length));
          }
        });
      };

      const cleanupToStill = () => {
        wrappersRef.current.forEach(w => {
          const strip = w.firstElementChild;
          if (!strip) return;
          const real = strip.querySelector('[data-orig="1"]');
          if (!real) return;
          strip.replaceChildren(real);
          strip.style.transform = 'none';
          strip.style.willChange = 'auto';
        });
      };

      const play = () => {
        const strips = inners();
        if (!strips.length) return;

        playingRef.current = true;
        const isVertical = shuffleDirection === 'up' || shuffleDirection === 'down';

        const tl = gsap.timeline({
          smoothChildTiming: true,
          repeat: loop ? -1 : 0,
          repeatDelay: loop ? loopDelay : 0,
          onRepeat: () => {
            if (scrambleCharset) randomizeScrambles();
            if (isVertical) {
              gsap.set(strips, { y: (i, t) => parseFloat(t.getAttribute('data-start-y') || '0') });
            } else {
              gsap.set(strips, { x: (i, t) => parseFloat(t.getAttribute('data-start-x') || '0') });
            }
            onShuffleComplete?.();
          },
          onComplete: () => {
            playingRef.current = false;
            if (!loop) {
              cleanupToStill();
              if (colorTo) gsap.set(strips, { color: colorTo });
              onShuffleComplete?.();
              armHover();
            }
          }
        });

        const addTween = (targets, at) => {
          const vars = {
            duration,
            ease,
            force3D: true,
            stagger: animationMode === 'evenodd' ? stagger : 0
          };
          if (isVertical) {
            vars.y = (i, t) => parseFloat(t.getAttribute('data-final-y') || '0');
          } else {
            vars.x = (i, t) => parseFloat(t.getAttribute('data-final-x') || '0');
          }

          tl.to(targets, vars, at);

          if (colorFrom && colorTo) tl.to(targets, { color: colorTo, duration, ease }, at);
        };

        if (animationMode === 'evenodd') {
          const odd = strips.filter((_, i) => i % 2 === 1);
          const even = strips.filter((_, i) => i % 2 === 0);
          const oddTotal = duration + Math.max(0, odd.length - 1) * stagger;
          const evenStart = odd.length ? oddTotal * 0.7 : 0;
          if (odd.length) addTween(odd, 0);
          if (even.length) addTween(even, evenStart);
        } else {
          strips.forEach(strip => {
            const d = Math.random() * maxDelay;
            const vars = {
              duration,
              ease,
              force3D: true
            };
            if (isVertical) {
              vars.y = parseFloat(strip.getAttribute('data-final-y') || '0');
            } else {
              vars.x = parseFloat(strip.getAttribute('data-final-x') || '0');
            }
            tl.to(strip, vars, d);
            if (colorFrom && colorTo) tl.fromTo(strip, { color: colorFrom }, { color: colorTo, duration, ease }, d);
          });
        }

        tlRef.current = tl;
      };

      const armHover = () => {
        if (!triggerOnHover || !ref.current) return;
        removeHover();
        const handler = () => {
          if (playingRef.current) return;
          build();
          if (scrambleCharset) randomizeScrambles();
          play();
        };
        hoverHandlerRef.current = handler;
        ref.current.addEventListener('mouseenter', handler);
      };

      const create = () => {
        build();
        if (scrambleCharset) randomizeScrambles();
        play();
        armHover();
        setReady(true);
      };

      const st = ScrollTrigger.create({ trigger: el, start, once: triggerOnce, onEnter: create });

      return () => {
        st.kill();
        removeHover();
        teardown();
        setReady(false);
      };
    },
    {
      dependencies: [
        text,
        duration,
        maxDelay,
        ease,
        scrollTriggerStart,
        fontsLoaded,
        shuffleDirection,
        shuffleTimes,
        animationMode,
        loop,
        loopDelay,
        stagger,
        scrambleCharset,
        colorFrom,
        colorTo,
        triggerOnce,
        respectReducedMotion,
        triggerOnHover,
        onShuffleComplete,
        userHasFont
      ],
      scope: ref
    }
  );

  const baseTw = 'inline-block whitespace-normal break-words will-change-transform uppercase text-[4rem] leading-none';
  const classes = useMemo(
    () => \`\${baseTw} \${ready ? 'visible' : 'invisible'} \${className}\`.trim(),
    [baseTw, ready, className]
  );
  const Tag = tag || 'p';
  const commonStyle = useMemo(() => ({ textAlign, ...style }), [textAlign, style]);

  return React.createElement(Tag, { ref: ref, className: classes, style: commonStyle }, text);
};

export default Shuffle;
`,$e=`import React, { useRef, useEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import './Shuffle.css';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

export interface ShuffleProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  shuffleDirection?: 'left' | 'right' | 'up' | 'down';
  duration?: number;
  maxDelay?: number;
  ease?: string | ((t: number) => number);
  threshold?: number;
  rootMargin?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textAlign?: React.CSSProperties['textAlign'];
  onShuffleComplete?: () => void;
  shuffleTimes?: number;
  animationMode?: 'random' | 'evenodd';
  loop?: boolean;
  loopDelay?: number;
  stagger?: number;
  scrambleCharset?: string;
  colorFrom?: string;
  colorTo?: string;
  triggerOnce?: boolean;
  respectReducedMotion?: boolean;
  triggerOnHover?: boolean;
}

const Shuffle: React.FC<ShuffleProps> = ({
  text,
  className = '',
  style = {},
  shuffleDirection = 'right',
  duration = 0.35,
  maxDelay = 0,
  ease = 'power3.out',
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'p',
  textAlign = 'center',
  onShuffleComplete,
  shuffleTimes = 1,
  animationMode = 'evenodd',
  loop = false,
  loopDelay = 0,
  stagger = 0.03,
  scrambleCharset = '',
  colorFrom,
  colorTo,
  triggerOnce = true,
  respectReducedMotion = true,
  triggerOnHover = true
}) => {
  const ref = useRef<HTMLElement>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [ready, setReady] = useState(false);

  const splitRef = useRef<GSAPSplitText | null>(null);
  const wrappersRef = useRef<HTMLElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const playingRef = useRef(false);
  const hoverHandlerRef = useRef<((e: Event) => void) | null>(null);

  useEffect(() => {
    if ('fonts' in document) {
      if (document.fonts.status === 'loaded') setFontsLoaded(true);
      else document.fonts.ready.then(() => setFontsLoaded(true));
    } else setFontsLoaded(true);
  }, []);

  const scrollTriggerStart = useMemo(() => {
    const startPct = (1 - threshold) * 100;
    const mm = /^(-?\\d+(?:\\.\\d+)?)(px|em|rem|%)?$/.exec(rootMargin || '');
    const mv = mm ? parseFloat(mm[1]) : 0;
    const mu = mm ? mm[2] || 'px' : 'px';
    const sign = mv === 0 ? '' : mv < 0 ? \`-=\${Math.abs(mv)}\${mu}\` : \`+=\${mv}\${mu}\`;
    return \`top \${startPct}%\${sign}\`;
  }, [threshold, rootMargin]);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      if (respectReducedMotion && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        onShuffleComplete?.();
        return;
      }

      const el = ref.current as HTMLElement;
      const start = scrollTriggerStart;

      const removeHover = () => {
        if (hoverHandlerRef.current && ref.current) {
          ref.current.removeEventListener('mouseenter', hoverHandlerRef.current);
          hoverHandlerRef.current = null;
        }
      };

      const teardown = () => {
        if (tlRef.current) {
          tlRef.current.kill();
          tlRef.current = null;
        }
        if (wrappersRef.current.length) {
          wrappersRef.current.forEach(wrap => {
            const inner = wrap.firstElementChild as HTMLElement | null;
            const orig = inner?.querySelector('[data-orig="1"]') as HTMLElement | null;
            if (orig && wrap.parentNode) wrap.parentNode.replaceChild(orig, wrap);
          });
          wrappersRef.current = [];
        }
        try {
          splitRef.current?.revert();
        } catch {}
        splitRef.current = null;
        playingRef.current = false;
      };

      const build = () => {
        teardown();

        splitRef.current = new GSAPSplitText(el, {
          type: 'chars',
          charsClass: 'shuffle-char',
          wordsClass: 'shuffle-word',
          linesClass: 'shuffle-line',
          smartWrap: true,
          reduceWhiteSpace: false
        });

        const chars = (splitRef.current.chars || []) as HTMLElement[];
        wrappersRef.current = [];

        const rolls = Math.max(1, Math.floor(shuffleTimes));
        const rand = (set: string) => set.charAt(Math.floor(Math.random() * set.length)) || '';

        chars.forEach(ch => {
          const parent = ch.parentElement;
          if (!parent) return;

          const w = ch.getBoundingClientRect().width;
          const h = ch.getBoundingClientRect().height;
          if (!w) return;

          const wrap = document.createElement('span');
          Object.assign(wrap.style, {
            display: 'inline-block',
            overflow: 'hidden',
            width: w + 'px',
            height: shuffleDirection === 'up' || shuffleDirection === 'down' ? h + 'px' : 'auto',
            verticalAlign: 'bottom'
          });

          const inner = document.createElement('span');
          Object.assign(inner.style, {
            display: 'inline-block',
            whiteSpace: shuffleDirection === 'up' || shuffleDirection === 'down' ? 'normal' : 'nowrap',
            willChange: 'transform'
          });

          parent.insertBefore(wrap, ch);
          wrap.appendChild(inner);

          const firstOrig = ch.cloneNode(true) as HTMLElement;
          Object.assign(firstOrig.style, {
            display: shuffleDirection === 'up' || shuffleDirection === 'down' ? 'block' : 'inline-block',
            width: w + 'px',
            textAlign: 'center'
          });

          ch.setAttribute('data-orig', '1');
          Object.assign(ch.style, {
            display: shuffleDirection === 'up' || shuffleDirection === 'down' ? 'block' : 'inline-block',
            width: w + 'px',
            textAlign: 'center'
          });

          inner.appendChild(firstOrig);
          for (let k = 0; k < rolls; k++) {
            const c = ch.cloneNode(true) as HTMLElement;
            if (scrambleCharset) c.textContent = rand(scrambleCharset);
            Object.assign(c.style, {
              display: shuffleDirection === 'up' || shuffleDirection === 'down' ? 'block' : 'inline-block',
              width: w + 'px',
              textAlign: 'center'
            });
            inner.appendChild(c);
          }
          inner.appendChild(ch);

          const steps = rolls + 1;

          if (shuffleDirection === 'right' || shuffleDirection === 'down') {
            const firstCopy = inner.firstElementChild as HTMLElement | null;
            const real = inner.lastElementChild as HTMLElement | null;
            if (real) inner.insertBefore(real, inner.firstChild);
            if (firstCopy) inner.appendChild(firstCopy);
          }

          let startX = 0;
          let finalX = 0;
          let startY = 0;
          let finalY = 0;

          if (shuffleDirection === 'right') {
            startX = -steps * w;
            finalX = 0;
          } else if (shuffleDirection === 'left') {
            startX = 0;
            finalX = -steps * w;
          } else if (shuffleDirection === 'down') {
            startY = -steps * h;
            finalY = 0;
          } else if (shuffleDirection === 'up') {
            startY = 0;
            finalY = -steps * h;
          }

          if (shuffleDirection === 'left' || shuffleDirection === 'right') {
            gsap.set(inner, { x: startX, y: 0, force3D: true });
            inner.setAttribute('data-start-x', String(startX));
            inner.setAttribute('data-final-x', String(finalX));
          } else {
            gsap.set(inner, { x: 0, y: startY, force3D: true });
            inner.setAttribute('data-start-y', String(startY));
            inner.setAttribute('data-final-y', String(finalY));
          }

          if (colorFrom) (inner.style as any).color = colorFrom;
          wrappersRef.current.push(wrap);
        });
      };

      const inners = () => wrappersRef.current.map(w => w.firstElementChild as HTMLElement);

      const randomizeScrambles = () => {
        if (!scrambleCharset) return;
        wrappersRef.current.forEach(w => {
          const strip = w.firstElementChild as HTMLElement;
          if (!strip) return;
          const kids = Array.from(strip.children) as HTMLElement[];
          for (let i = 1; i < kids.length - 1; i++) {
            kids[i].textContent = scrambleCharset.charAt(Math.floor(Math.random() * scrambleCharset.length));
          }
        });
      };

      const cleanupToStill = () => {
        wrappersRef.current.forEach(w => {
          const strip = w.firstElementChild as HTMLElement;
          if (!strip) return;
          const real = strip.querySelector('[data-orig="1"]') as HTMLElement | null;
          if (!real) return;
          strip.replaceChildren(real);
          strip.style.transform = 'none';
          strip.style.willChange = 'auto';
        });
      };

      const play = () => {
        const strips = inners();
        if (!strips.length) return;

        playingRef.current = true;
        const isVertical = shuffleDirection === 'up' || shuffleDirection === 'down';

        const tl = gsap.timeline({
          smoothChildTiming: true,
          repeat: loop ? -1 : 0,
          repeatDelay: loop ? loopDelay : 0,
          onRepeat: () => {
            if (scrambleCharset) randomizeScrambles();
            if (isVertical) {
              gsap.set(strips, { y: (i, t: HTMLElement) => parseFloat(t.getAttribute('data-start-y') || '0') });
            } else {
              gsap.set(strips, { x: (i, t: HTMLElement) => parseFloat(t.getAttribute('data-start-x') || '0') });
            }
            onShuffleComplete?.();
          },
          onComplete: () => {
            playingRef.current = false;
            if (!loop) {
              cleanupToStill();
              if (colorTo) gsap.set(strips, { color: colorTo });
              onShuffleComplete?.();
              armHover();
            }
          }
        });

        const addTween = (targets: HTMLElement[], at: number) => {
          const vars: any = {
            duration,
            ease,
            force3D: true,
            stagger: animationMode === 'evenodd' ? stagger : 0
          };
          if (isVertical) {
            vars.y = (i: number, t: HTMLElement) => parseFloat(t.getAttribute('data-final-y') || '0');
          } else {
            vars.x = (i: number, t: HTMLElement) => parseFloat(t.getAttribute('data-final-x') || '0');
          }

          tl.to(targets, vars, at);

          if (colorFrom && colorTo) {
            tl.to(targets, { color: colorTo, duration, ease }, at);
          }
        };

        if (animationMode === 'evenodd') {
          const odd = strips.filter((_, i) => i % 2 === 1);
          const even = strips.filter((_, i) => i % 2 === 0);
          const oddTotal = duration + Math.max(0, odd.length - 1) * stagger;
          const evenStart = odd.length ? oddTotal * 0.7 : 0;
          if (odd.length) addTween(odd, 0);
          if (even.length) addTween(even, evenStart);
        } else {
          strips.forEach(strip => {
            const d = Math.random() * maxDelay;
            const vars: any = {
              duration,
              ease,
              force3D: true
            };
            if (isVertical) {
              vars.y = parseFloat(strip.getAttribute('data-final-y') || '0');
            } else {
              vars.x = parseFloat(strip.getAttribute('data-final-x') || '0');
            }
            tl.to(strip, vars, d);
            if (colorFrom && colorTo) tl.fromTo(strip, { color: colorFrom }, { color: colorTo, duration, ease }, d);
          });
        }

        tlRef.current = tl;
      };

      const armHover = () => {
        if (!triggerOnHover || !ref.current) return;
        removeHover();
        const handler = () => {
          if (playingRef.current) return;
          build();
          if (scrambleCharset) randomizeScrambles();
          play();
        };
        hoverHandlerRef.current = handler;
        ref.current.addEventListener('mouseenter', handler);
      };

      const create = () => {
        build();
        if (scrambleCharset) randomizeScrambles();
        play();
        armHover();
        setReady(true);
      };

      const st = ScrollTrigger.create({
        trigger: el,
        start,
        once: triggerOnce,
        onEnter: create
      });

      return () => {
        st.kill();
        removeHover();
        teardown();
        setReady(false);
      };
    },
    {
      dependencies: [
        text,
        duration,
        maxDelay,
        ease,
        scrollTriggerStart,
        fontsLoaded,
        shuffleDirection,
        shuffleTimes,
        animationMode,
        loop,
        loopDelay,
        stagger,
        scrambleCharset,
        colorFrom,
        colorTo,
        triggerOnce,
        respectReducedMotion,
        triggerOnHover,
        onShuffleComplete
      ],
      scope: ref
    }
  );

  const commonStyle: React.CSSProperties = useMemo(() => ({ textAlign, ...style }), [textAlign, style]);
  const classes = useMemo(() => \`shuffle-parent \${ready ? 'is-ready' : ''} \${className}\`, [ready, className]);
  const Tag = (tag || 'p') as keyof JSX.IntrinsicElements;
  return React.createElement(Tag, { ref: ref as any, className: classes, style: commonStyle }, text);
};

export default Shuffle;
`,Xe=`import React, { useRef, useEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { JSX } from 'react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

export interface ShuffleProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  shuffleDirection?: 'left' | 'right' | 'up' | 'down';
  duration?: number;
  maxDelay?: number;
  ease?: string | ((t: number) => number);
  threshold?: number;
  rootMargin?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  textAlign?: React.CSSProperties['textAlign'];
  onShuffleComplete?: () => void;
  shuffleTimes?: number;
  animationMode?: 'random' | 'evenodd';
  loop?: boolean;
  loopDelay?: number;
  stagger?: number;
  scrambleCharset?: string;
  colorFrom?: string;
  colorTo?: string;
  triggerOnce?: boolean;
  respectReducedMotion?: boolean;
  triggerOnHover?: boolean;
}

const Shuffle: React.FC<ShuffleProps> = ({
  text,
  className = '',
  style = {},
  shuffleDirection = 'right',
  duration = 0.35,
  maxDelay = 0,
  ease = 'power3.out',
  threshold = 0.1,
  rootMargin = '-100px',
  tag = 'p',
  textAlign = 'center',
  onShuffleComplete,
  shuffleTimes = 1,
  animationMode = 'evenodd',
  loop = false,
  loopDelay = 0,
  stagger = 0.03,
  scrambleCharset = '',
  colorFrom,
  colorTo,
  triggerOnce = true,
  respectReducedMotion = true,
  triggerOnHover = true
}) => {
  const ref = useRef<HTMLElement>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [ready, setReady] = useState(false);

  const splitRef = useRef<GSAPSplitText | null>(null);
  const wrappersRef = useRef<HTMLElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const playingRef = useRef(false);
  const hoverHandlerRef = useRef<((e: Event) => void) | null>(null);

  useEffect(() => {
    if ('fonts' in document) {
      if (document.fonts.status === 'loaded') setFontsLoaded(true);
      else document.fonts.ready.then(() => setFontsLoaded(true));
    } else setFontsLoaded(true);
  }, []);

  const scrollTriggerStart = useMemo(() => {
    const startPct = (1 - threshold) * 100;
    const mm = /^(-?\\d+(?:\\.\\d+)?)(px|em|rem|%)?$/.exec(rootMargin || '');
    const mv = mm ? parseFloat(mm[1]) : 0;
    const mu = mm ? mm[2] || 'px' : 'px';
    const sign = mv === 0 ? '' : mv < 0 ? \`-=\${Math.abs(mv)}\${mu}\` : \`+=\${mv}\${mu}\`;
    return \`top \${startPct}%\${sign}\`;
  }, [threshold, rootMargin]);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      if (respectReducedMotion && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        onShuffleComplete?.();
        return;
      }

      const el = ref.current as HTMLElement;
      const start = scrollTriggerStart;

      const removeHover = () => {
        if (hoverHandlerRef.current && ref.current) {
          ref.current.removeEventListener('mouseenter', hoverHandlerRef.current);
          hoverHandlerRef.current = null;
        }
      };

      const teardown = () => {
        if (tlRef.current) {
          tlRef.current.kill();
          tlRef.current = null;
        }
        if (wrappersRef.current.length) {
          wrappersRef.current.forEach(wrap => {
            const inner = wrap.firstElementChild as HTMLElement | null;
            const orig = inner?.querySelector('[data-orig="1"]') as HTMLElement | null;
            if (orig && wrap.parentNode) wrap.parentNode.replaceChild(orig, wrap);
          });
          wrappersRef.current = [];
        }
        try {
          splitRef.current?.revert();
        } catch {}
        splitRef.current = null;
        playingRef.current = false;
      };

      const build = () => {
        teardown();

        const computedFont = getComputedStyle(el).fontFamily;

        splitRef.current = new GSAPSplitText(el, {
          type: 'chars',
          charsClass: 'shuffle-char',
          wordsClass: 'shuffle-word',
          linesClass: 'shuffle-line',
          smartWrap: true,
          reduceWhiteSpace: false
        });

        const chars = (splitRef.current.chars || []) as HTMLElement[];
        wrappersRef.current = [];

        const rolls = Math.max(1, Math.floor(shuffleTimes));
        const rand = (set: string) => set.charAt(Math.floor(Math.random() * set.length)) || '';

        chars.forEach(ch => {
          const parent = ch.parentElement;
          if (!parent) return;

          const w = ch.getBoundingClientRect().width;
          const h = ch.getBoundingClientRect().height;
          if (!w) return;

          const wrap = document.createElement('span');
          wrap.className = 'inline-block overflow-hidden text-left';
          Object.assign(wrap.style, {
            width: w + 'px',
            height: shuffleDirection === 'up' || shuffleDirection === 'down' ? h + 'px' : 'auto',
            verticalAlign: 'bottom'
          });

          const inner = document.createElement('span');
          inner.className =
            'inline-block will-change-transform origin-left transform-gpu ' +
            (shuffleDirection === 'up' || shuffleDirection === 'down' ? 'whitespace-normal' : 'whitespace-nowrap');

          parent.insertBefore(wrap, ch);
          wrap.appendChild(inner);

          const firstOrig = ch.cloneNode(true) as HTMLElement;
          firstOrig.className =
            'text-left ' + (shuffleDirection === 'up' || shuffleDirection === 'down' ? 'block' : 'inline-block');
          Object.assign(firstOrig.style, { width: w + 'px', fontFamily: computedFont });

          ch.setAttribute('data-orig', '1');
          ch.className =
            'text-left ' + (shuffleDirection === 'up' || shuffleDirection === 'down' ? 'block' : 'inline-block');
          Object.assign(ch.style, { width: w + 'px', fontFamily: computedFont });

          inner.appendChild(firstOrig);
          for (let k = 0; k < rolls; k++) {
            const c = ch.cloneNode(true) as HTMLElement;
            if (scrambleCharset) c.textContent = rand(scrambleCharset);
            c.className =
              'text-left ' + (shuffleDirection === 'up' || shuffleDirection === 'down' ? 'block' : 'inline-block');
            Object.assign(c.style, { width: w + 'px', fontFamily: computedFont });
            inner.appendChild(c);
          }
          inner.appendChild(ch);

          const steps = rolls + 1;

          if (shuffleDirection === 'right' || shuffleDirection === 'down') {
            const firstCopy = inner.firstElementChild as HTMLElement | null;
            const real = inner.lastElementChild as HTMLElement | null;
            if (real) inner.insertBefore(real, inner.firstChild);
            if (firstCopy) inner.appendChild(firstCopy);
          }

          let startX = 0;
          let finalX = 0;
          let startY = 0;
          let finalY = 0;

          if (shuffleDirection === 'right') {
            startX = -steps * w;
            finalX = 0;
          } else if (shuffleDirection === 'left') {
            startX = 0;
            finalX = -steps * w;
          } else if (shuffleDirection === 'down') {
            startY = -steps * h;
            finalY = 0;
          } else if (shuffleDirection === 'up') {
            startY = 0;
            finalY = -steps * h;
          }

          if (shuffleDirection === 'left' || shuffleDirection === 'right') {
            gsap.set(inner, { x: startX, y: 0, force3D: true });
            inner.setAttribute('data-start-x', String(startX));
            inner.setAttribute('data-final-x', String(finalX));
          } else {
            gsap.set(inner, { x: 0, y: startY, force3D: true });
            inner.setAttribute('data-start-y', String(startY));
            inner.setAttribute('data-final-y', String(finalY));
          }

          if (colorFrom) (inner.style as any).color = colorFrom;
          wrappersRef.current.push(wrap);
        });
      };

      const inners = () => wrappersRef.current.map(w => w.firstElementChild as HTMLElement);

      const randomizeScrambles = () => {
        if (!scrambleCharset) return;
        wrappersRef.current.forEach(w => {
          const strip = w.firstElementChild as HTMLElement;
          if (!strip) return;
          const kids = Array.from(strip.children) as HTMLElement[];
          for (let i = 1; i < kids.length - 1; i++) {
            kids[i].textContent = scrambleCharset.charAt(Math.floor(Math.random() * scrambleCharset.length));
          }
        });
      };

      const cleanupToStill = () => {
        wrappersRef.current.forEach(w => {
          const strip = w.firstElementChild as HTMLElement;
          if (!strip) return;
          const real = strip.querySelector('[data-orig="1"]') as HTMLElement | null;
          if (!real) return;
          strip.replaceChildren(real);
          strip.style.transform = 'none';
          strip.style.willChange = 'auto';
        });
      };

      const play = () => {
        const strips = inners();
        if (!strips.length) return;

        playingRef.current = true;
        const isVertical = shuffleDirection === 'up' || shuffleDirection === 'down';

        const tl = gsap.timeline({
          smoothChildTiming: true,
          repeat: loop ? -1 : 0,
          repeatDelay: loop ? loopDelay : 0,
          onRepeat: () => {
            if (scrambleCharset) randomizeScrambles();
            if (isVertical) {
              gsap.set(strips, { y: (i, t: HTMLElement) => parseFloat(t.getAttribute('data-start-y') || '0') });
            } else {
              gsap.set(strips, { x: (i, t: HTMLElement) => parseFloat(t.getAttribute('data-start-x') || '0') });
            }
            onShuffleComplete?.();
          },
          onComplete: () => {
            playingRef.current = false;
            if (!loop) {
              cleanupToStill();
              if (colorTo) gsap.set(strips, { color: colorTo });
              onShuffleComplete?.();
              armHover();
            }
          }
        });

        const addTween = (targets: HTMLElement[], at: number) => {
          const vars: any = {
            duration,
            ease,
            force3D: true,
            stagger: animationMode === 'evenodd' ? stagger : 0
          };
          if (isVertical) {
            vars.y = (i: number, t: HTMLElement) => parseFloat(t.getAttribute('data-final-y') || '0');
          } else {
            vars.x = (i: number, t: HTMLElement) => parseFloat(t.getAttribute('data-final-x') || '0');
          }

          tl.to(targets, vars, at);

          if (colorFrom && colorTo) tl.to(targets, { color: colorTo, duration, ease }, at);
        };

        if (animationMode === 'evenodd') {
          const odd = strips.filter((_, i) => i % 2 === 1);
          const even = strips.filter((_, i) => i % 2 === 0);
          const oddTotal = duration + Math.max(0, odd.length - 1) * stagger;
          const evenStart = odd.length ? oddTotal * 0.7 : 0;
          if (odd.length) addTween(odd, 0);
          if (even.length) addTween(even, evenStart);
        } else {
          strips.forEach(strip => {
            const d = Math.random() * maxDelay;
            const vars: any = {
              duration,
              ease,
              force3D: true
            };
            if (isVertical) {
              vars.y = parseFloat(strip.getAttribute('data-final-y') || '0');
            } else {
              vars.x = parseFloat(strip.getAttribute('data-final-x') || '0');
            }
            tl.to(strip, vars, d);
            if (colorFrom && colorTo) tl.fromTo(strip, { color: colorFrom }, { color: colorTo, duration, ease }, d);
          });
        }

        tlRef.current = tl;
      };

      const armHover = () => {
        if (!triggerOnHover || !ref.current) return;
        removeHover();
        const handler = () => {
          if (playingRef.current) return;
          build();
          if (scrambleCharset) randomizeScrambles();
          play();
        };
        hoverHandlerRef.current = handler;
        ref.current.addEventListener('mouseenter', handler);
      };

      const create = () => {
        build();
        if (scrambleCharset) randomizeScrambles();
        play();
        armHover();
        setReady(true);
      };

      const st = ScrollTrigger.create({
        trigger: el,
        start,
        once: triggerOnce,
        onEnter: create
      });

      return () => {
        st.kill();
        removeHover();
        teardown();
        setReady(false);
      };
    },
    {
      dependencies: [
        text,
        duration,
        maxDelay,
        ease,
        scrollTriggerStart,
        fontsLoaded,
        shuffleDirection,
        shuffleTimes,
        animationMode,
        loop,
        loopDelay,
        stagger,
        scrambleCharset,
        colorFrom,
        colorTo,
        triggerOnce,
        respectReducedMotion,
        triggerOnHover,
        onShuffleComplete
      ],
      scope: ref
    }
  );

  const baseTw = 'inline-block whitespace-normal break-words will-change-transform uppercase text-2xl leading-none';
  const userHasFont = useMemo(() => className && /font[-[]/i.test(className), [className]);

  const fallbackFont = useMemo(
    () => (userHasFont ? {} : { fontFamily: \`'Press Start 2P', sans-serif\` }),
    [userHasFont]
  );

  const commonStyle = useMemo(
    () => ({
      textAlign,
      ...fallbackFont,
      ...style
    }),
    [textAlign, fallbackFont, style]
  );

  const classes = useMemo(
    () => \`\${baseTw} \${ready ? 'visible' : 'invisible'} \${className}\`.trim(),
    [baseTw, ready, className]
  );
  const Tag = (tag || 'p') as keyof JSX.IntrinsicElements;

  return React.createElement(Tag, { ref: ref as any, className: classes, style: commonStyle }, text);
};

export default Shuffle;
`,Ye={dependencies:"gsap @gsap/react",usage:`import Shuffle from './Shuffle';

<Shuffle
  text="Hello World"
  shuffleDirection="right"
  duration={0.35}
  animationMode="evenodd"
  shuffleTimes={1}
  ease="power3.out"
  stagger={0.03}
  threshold={0.1}
  triggerOnce={true}
  triggerOnHover={true}
  respectReducedMotion={true}
/>`,code:Pe,css:Ne,tailwind:je,tsCode:$e,tsTailwind:Xe};S.registerPlugin(pe,me,de);const Ge=({text:A,className:N="",style:m={},shuffleDirection:n="right",duration:f=.35,maxDelay:j=0,ease:w="power3.out",threshold:H=.1,rootMargin:F="-100px",tag:$="p",textAlign:k="center",onShuffleComplete:u,shuffleTimes:R=1,animationMode:C="evenodd",loop:b=!1,loopDelay:X=0,stagger:L=.03,scrambleCharset:e="",colorFrom:T,colorTo:x,triggerOnce:ne=!0,respectReducedMotion:te=!0,triggerOnHover:re=!0})=>{const h=p.useRef(null),[se,J]=p.useState(!1),[oe,Z]=p.useState(!1),Y=p.useRef(null),g=p.useRef([]),G=p.useRef(null),B=p.useRef(!1),z=p.useRef(null);p.useEffect(()=>{"fonts"in document?document.fonts.status==="loaded"?J(!0):document.fonts.ready.then(()=>J(!0)):J(!0)},[]);const ae=p.useMemo(()=>{const V=(1-H)*100,M=/^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(F||""),v=M?parseFloat(M[1]):0,O=M&&M[2]||"px",W=v===0?"":v<0?`-=${Math.abs(v)}${O}`:`+=${v}${O}`;return`top ${V}%${W}`},[H,F]);de(()=>{if(!h.current||!A||!se)return;if(te&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches){Z(!0),u==null||u();return}const V=h.current,M=ae,v=()=>{z.current&&h.current&&(h.current.removeEventListener("mouseenter",z.current),z.current=null)},O=()=>{var s;G.current&&(G.current.kill(),G.current=null),g.current.length&&(g.current.forEach(o=>{const l=o.firstElementChild,r=l==null?void 0:l.querySelector('[data-orig="1"]');r&&o.parentNode&&o.parentNode.replaceChild(r,o)}),g.current=[]);try{(s=Y.current)==null||s.revert()}catch{}Y.current=null,B.current=!1},W=()=>{O(),Y.current=new me(V,{type:"chars",charsClass:"shuffle-char",wordsClass:"shuffle-word",linesClass:"shuffle-line",smartWrap:!0,reduceWhiteSpace:!1});const s=Y.current.chars||[];g.current=[];const o=Math.max(1,Math.floor(R)),l=r=>r.charAt(Math.floor(Math.random()*r.length))||"";s.forEach(r=>{const c=r.parentElement;if(!c)return;const a=r.getBoundingClientRect().width,d=r.getBoundingClientRect().height;if(!a)return;const y=document.createElement("span");Object.assign(y.style,{display:"inline-block",overflow:"hidden",width:a+"px",height:n==="up"||n==="down"?d+"px":"auto",verticalAlign:"bottom"});const t=document.createElement("span");Object.assign(t.style,{display:"inline-block",whiteSpace:n==="up"||n==="down"?"normal":"nowrap",willChange:"transform"}),c.insertBefore(y,r),y.appendChild(t);const E=r.cloneNode(!0);Object.assign(E.style,{display:n==="up"||n==="down"?"block":"inline-block",width:a+"px",textAlign:"center"}),r.setAttribute("data-orig","1"),Object.assign(r.style,{display:n==="up"||n==="down"?"block":"inline-block",width:a+"px",textAlign:"center"}),t.appendChild(E);for(let P=0;P<o;P++){const D=r.cloneNode(!0);e&&(D.textContent=l(e)),Object.assign(D.style,{display:n==="up"||n==="down"?"block":"inline-block",width:a+"px",textAlign:"center"}),t.appendChild(D)}t.appendChild(r);const _=o+1;if(n==="right"||n==="down"){const P=t.firstElementChild,D=t.lastElementChild;D&&t.insertBefore(D,t.firstChild),P&&t.appendChild(P)}let q=0,Q=0,U=0,ee=0;n==="right"?(q=-_*a,Q=0):n==="left"?(q=0,Q=-_*a):n==="down"?(U=-_*d,ee=0):n==="up"&&(U=0,ee=-_*d),n==="left"||n==="right"?(S.set(t,{x:q,y:0,force3D:!0}),t.setAttribute("data-start-x",String(q)),t.setAttribute("data-final-x",String(Q))):(S.set(t,{x:0,y:U,force3D:!0}),t.setAttribute("data-start-y",String(U)),t.setAttribute("data-final-y",String(ee))),T&&(t.style.color=T),g.current.push(y)})},we=()=>g.current.map(s=>s.firstElementChild),K=()=>{e&&g.current.forEach(s=>{const o=s.firstElementChild;if(!o)return;const l=Array.from(o.children);for(let r=1;r<l.length-1;r++)l[r].textContent=e.charAt(Math.floor(Math.random()*e.length))})},be=()=>{g.current.forEach(s=>{const o=s.firstElementChild;if(!o)return;const l=o.querySelector('[data-orig="1"]');l&&(o.replaceChildren(l),o.style.transform="none",o.style.willChange="auto")})},ie=()=>{const s=we();if(!s.length)return;B.current=!0;const o=n==="up"||n==="down",l=S.timeline({smoothChildTiming:!0,repeat:b?-1:0,repeatDelay:b?X:0,onRepeat:()=>{e&&K(),o?S.set(s,{y:(c,a)=>parseFloat(a.getAttribute("data-start-y")||"0")}):S.set(s,{x:(c,a)=>parseFloat(a.getAttribute("data-start-x")||"0")}),u==null||u()},onComplete:()=>{B.current=!1,b||(be(),x&&S.set(s,{color:x}),u==null||u(),le())}}),r=(c,a)=>{const d={duration:f,ease:w,force3D:!0,stagger:C==="evenodd"?L:0};o?d.y=(y,t)=>parseFloat(t.getAttribute("data-final-y")||"0"):d.x=(y,t)=>parseFloat(t.getAttribute("data-final-x")||"0"),l.to(c,d,a),T&&x&&l.to(c,{color:x,duration:f,ease:w},a)};if(C==="evenodd"){const c=s.filter((t,E)=>E%2===1),a=s.filter((t,E)=>E%2===0),d=f+Math.max(0,c.length-1)*L,y=c.length?d*.7:0;c.length&&r(c,0),a.length&&r(a,y)}else s.forEach(c=>{const a=Math.random()*j,d={duration:f,ease:w,force3D:!0};o?d.y=parseFloat(c.getAttribute("data-final-y")||"0"):d.x=parseFloat(c.getAttribute("data-final-x")||"0"),l.to(c,d,a),T&&x&&l.fromTo(c,{color:T},{color:x,duration:f,ease:w},a)});G.current=l},le=()=>{if(!re||!h.current)return;v();const s=()=>{B.current||(W(),e&&K(),ie())};z.current=s,h.current.addEventListener("mouseenter",s)},xe=()=>{W(),e&&K(),ie(),le(),Z(!0)},ve=pe.create({trigger:V,start:M,once:ne,onEnter:xe});return()=>{ve.kill(),v(),O(),Z(!1)}},{dependencies:[A,f,j,w,ae,se,n,R,C,b,X,L,e,T,x,ne,te,re,u],scope:h});const he=p.useMemo(()=>({textAlign:k,...m}),[k,m]),ge=p.useMemo(()=>`shuffle-parent ${oe?"is-ready":""} ${N}`,[oe,N]),ye=$||"p";return Se.createElement(ye,{ref:h,className:ge,style:he},A)},ue={duration:.35,shuffleTimes:1,stagger:.03,shuffleDirection:"right",ease:"power3.out",loop:!1,loopDelay:0,triggerOnHover:!0},rn=()=>{const A=p.useMemo(()=>[{name:"text",type:"string",default:'""',description:"The text content to shuffle."},{name:"className",type:"string",default:'""',description:"Optional CSS class for the wrapper element."},{name:"style",type:"object",default:"{}",description:"Inline styles applied to the wrapper element."},{name:"shuffleDirection",type:'"left" | "right" | "up" | "down"',default:'"right"',description:"Direction the per-letter strip slides to reveal the final character."},{name:"duration",type:"number",default:"0.35",description:"Duration (s) of the strip slide per letter."},{name:"maxDelay",type:"number",default:"0",description:'Max random delay per strip when animationMode = "random".'},{name:"ease",type:"string | Function",default:'"power3.out"',description:"GSAP ease for sliding and color tween."},{name:"threshold",type:"number",default:"0.1",description:"Portion of the element that must enter view before starting."},{name:"rootMargin",type:"string",default:'"-100px"',description:"ScrollTrigger start offset (px, %, etc.)."},{name:"tag",type:'"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"',default:'"p"',description:"HTML tag to render for the text container."},{name:"textAlign",type:"CSS text-align",default:'"center"',description:"Text alignment applied via inline style."},{name:"onShuffleComplete",type:"() => void",default:"undefined",description:"Called after a full run completes (and on each loop repeat)."},{name:"shuffleTimes",type:"number",default:"1",description:"How many interim scrambled glyphs to scroll past before the final char."},{name:"animationMode",type:'"evenodd" | "random"',default:'"evenodd"',description:"Odd/even staggered strips or random per-strip delays."},{name:"loop",type:"boolean",default:"false",description:"Repeat the shuffle indefinitely."},{name:"loopDelay",type:"number",default:"0",description:"Delay (s) between loop repeats."},{name:"stagger",type:"number",default:"0.03",description:'Stagger (s) for strips in "evenodd" mode.'},{name:"scrambleCharset",type:"string",default:'""',description:"Characters to use for interim scrambles; empty keeps original copies."},{name:"colorFrom",type:"string",default:"undefined",description:"Optional starting text color while shuffling."},{name:"colorTo",type:"string",default:"undefined",description:"Optional final text color to tween to."},{name:"triggerOnce",type:"boolean",default:"true",description:"Auto-run only on first scroll into view."},{name:"respectReducedMotion",type:"boolean",default:"true",description:"Skip animation if user prefers reduced motion."},{name:"triggerOnHover",type:"boolean",default:"true",description:"Allow re-playing the animation on hover after it completes."}],[]),[N,m]=Oe(),{props:n,updateProp:f,resetProps:j,hasChanges:w}=Ce(ue),{duration:H,shuffleTimes:F,stagger:$,shuffleDirection:k,ease:u,loop:R,loopDelay:C,triggerOnHover:b}=n,X=[{label:"Right",value:"right"},{label:"Left",value:"left"},{label:"Up",value:"up"},{label:"Down",value:"down"}],L=[{label:"power2.out",value:"power2.out"},{label:"power3.out",value:"power3.out"},{label:"back.out(1.1)",value:"back.out(1.1)"},{label:"expo.out",value:"expo.out"}];return i.jsx(Te,{props:n,defaultProps:ue,resetProps:j,hasChanges:w,children:i.jsxs(Me,{children:[i.jsxs(Ee,{children:[i.jsxs(Re,{position:"relative",className:"flex justify-center items-center demo-container",h:400,overflow:"hidden",children:[i.jsx(Ge,{text:"REACT BITS",ease:u,duration:H,shuffleTimes:F,stagger:$,shuffleDirection:k,loop:R,loopDelay:C,triggerOnHover:b},N),i.jsx(Le,{onClick:m})]}),i.jsxs(Fe,{children:[i.jsx(fe,{title:"Direction",options:X,value:k,name:"shuffleDirection",width:130,onChange:e=>{f("shuffleDirection",e),m()}}),i.jsx(fe,{title:"Ease",options:L,value:u,name:"ease",width:150,onChange:e=>{f("ease",e),m()}}),i.jsx(I,{title:"Duration",min:.1,max:1.5,step:.05,value:H,valueUnit:"s",onChange:e=>{f("duration",Number(e)),m()}}),i.jsx(I,{title:"Shuffle Times",min:1,max:8,step:1,value:F,onChange:e=>{f("shuffleTimes",Number(e)),m()}}),i.jsx(I,{title:"Stagger",min:0,max:.2,step:.01,value:$,valueUnit:"s",onChange:e=>{f("stagger",Number(e)),m()}}),i.jsx(ce,{title:"Hover Replay",isChecked:b,onChange:e=>{f("triggerOnHover",e),m()}}),i.jsx(ce,{title:"Loop",isChecked:R,onChange:e=>{f("loop",e),m()}}),i.jsx(I,{title:"Loop Delay",min:0,max:2,step:.1,value:C,isDisabled:!R,valueUnit:"s",onChange:e=>{f("loopDelay",Number(e)),m()}})]}),i.jsx(De,{data:A}),i.jsx(ke,{dependencyList:["gsap","@gsap/react"]})]}),i.jsx(Ae,{children:i.jsx(He,{codeObject:Ye,componentName:"Shuffle"})})]})})};export{rn as default};
