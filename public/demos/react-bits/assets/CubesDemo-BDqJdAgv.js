import{r as c,Z as T,j as t,B as se}from"./index-CKqfvLoB.js";import{u as ie,C as le,T as ue,P as fe,a as de,b as pe,c as me}from"./PropTable-BzD4cJVp.js";import{C as be}from"./Customize-BaUKAf5J.js";import{P as ge}from"./PreviewSelect-CM4Sns8B.js";import{P as _}from"./PreviewSlider-25yjOF_X.js";import{P as J}from"./PreviewSwitch-B0BSuWrO.js";import{D as he}from"./Dependencies-DmSBXzNX.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./field-DGUMYGrq.js";import"./slider-P7kYMDWb.js";import"./switch-CqqRi5Az.js";const ve=`import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Cubes.css';

const Cubes = ({
  gridSize = 10,
  cubeSize,
  maxAngle = 45,
  radius = 3,
  easing = 'power3.out',
  duration = { enter: 0.3, leave: 0.6 },
  cellGap,
  borderStyle = '1px solid #fff',
  faceColor = '#060010',
  shadow = false,
  autoAnimate = true,
  rippleOnClick = true,
  rippleColor = '#fff',
  rippleSpeed = 2
}) => {
  const sceneRef = useRef(null);
  const rafRef = useRef(null);
  const idleTimerRef = useRef(null);
  const userActiveRef = useRef(false);
  const simPosRef = useRef({ x: 0, y: 0 });
  const simTargetRef = useRef({ x: 0, y: 0 });
  const simRAFRef = useRef(null);

  const colGap = typeof cellGap === 'number' ? \`\${cellGap}px\` : cellGap?.col !== undefined ? \`\${cellGap.col}px\` : '5%';
  const rowGap = typeof cellGap === 'number' ? \`\${cellGap}px\` : cellGap?.row !== undefined ? \`\${cellGap.row}px\` : '5%';

  const enterDur = duration.enter;
  const leaveDur = duration.leave;

  const tiltAt = useCallback(
    (rowCenter, colCenter) => {
      if (!sceneRef.current) return;
      sceneRef.current.querySelectorAll('.cube').forEach(cube => {
        const r = +cube.dataset.row;
        const c = +cube.dataset.col;
        const dist = Math.hypot(r - rowCenter, c - colCenter);
        if (dist <= radius) {
          const pct = 1 - dist / radius;
          const angle = pct * maxAngle;
          gsap.to(cube, {
            duration: enterDur,
            ease: easing,
            overwrite: true,
            rotateX: -angle,
            rotateY: angle
          });
        } else {
          gsap.to(cube, {
            duration: leaveDur,
            ease: 'power3.out',
            overwrite: true,
            rotateX: 0,
            rotateY: 0
          });
        }
      });
    },
    [radius, maxAngle, enterDur, leaveDur, easing]
  );

  const onPointerMove = useCallback(
    e => {
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      const colCenter = (e.clientX - rect.left) / cellW;
      const rowCenter = (e.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => tiltAt(rowCenter, colCenter));

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt]
  );

  const resetAll = useCallback(() => {
    if (!sceneRef.current) return;
    sceneRef.current.querySelectorAll('.cube').forEach(cube =>
      gsap.to(cube, {
        duration: leaveDur,
        rotateX: 0,
        rotateY: 0,
        ease: 'power3.out'
      })
    );
  }, [leaveDur]);

  const onTouchMove = useCallback(
    e => {
      e.preventDefault();
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;

      const touch = e.touches[0];
      const colCenter = (touch.clientX - rect.left) / cellW;
      const rowCenter = (touch.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => tiltAt(rowCenter, colCenter));

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt]
  );

  const onTouchStart = useCallback(() => {
    userActiveRef.current = true;
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!sceneRef.current) return;
    resetAll();
  }, [resetAll]);

  const onClick = useCallback(
    e => {
      if (!rippleOnClick || !sceneRef.current) return;
      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;

      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);

      const colHit = Math.floor((clientX - rect.left) / cellW);
      const rowHit = Math.floor((clientY - rect.top) / cellH);

      const baseRingDelay = 0.15;
      const baseAnimDur = 0.3;
      const baseHold = 0.6;

      const spreadDelay = baseRingDelay / rippleSpeed;
      const animDuration = baseAnimDur / rippleSpeed;
      const holdTime = baseHold / rippleSpeed;

      const rings = {};
      sceneRef.current.querySelectorAll('.cube').forEach(cube => {
        const r = +cube.dataset.row;
        const c = +cube.dataset.col;
        const dist = Math.hypot(r - rowHit, c - colHit);
        const ring = Math.round(dist);
        if (!rings[ring]) rings[ring] = [];
        rings[ring].push(cube);
      });

      Object.keys(rings)
        .map(Number)
        .sort((a, b) => a - b)
        .forEach(ring => {
          const delay = ring * spreadDelay;
          const faces = rings[ring].flatMap(cube => Array.from(cube.querySelectorAll('.cube-face')));

          gsap.to(faces, {
            backgroundColor: rippleColor,
            duration: animDuration,
            delay,
            ease: 'power3.out'
          });
          gsap.to(faces, {
            backgroundColor: faceColor,
            duration: animDuration,
            delay: delay + animDuration + holdTime,
            ease: 'power3.out'
          });
        });
    },
    [rippleOnClick, gridSize, faceColor, rippleColor, rippleSpeed]
  );

  useEffect(() => {
    if (!autoAnimate || !sceneRef.current) return;
    simPosRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize
    };
    simTargetRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize
    };
    const speed = 0.02;
    const loop = () => {
      if (!userActiveRef.current) {
        const pos = simPosRef.current;
        const tgt = simTargetRef.current;
        pos.x += (tgt.x - pos.x) * speed;
        pos.y += (tgt.y - pos.y) * speed;
        tiltAt(pos.y, pos.x);
        if (Math.hypot(pos.x - tgt.x, pos.y - tgt.y) < 0.1) {
          simTargetRef.current = {
            x: Math.random() * gridSize,
            y: Math.random() * gridSize
          };
        }
      }
      simRAFRef.current = requestAnimationFrame(loop);
    };
    simRAFRef.current = requestAnimationFrame(loop);
    return () => {
      if (simRAFRef.current != null) {
        cancelAnimationFrame(simRAFRef.current);
      }
    };
  }, [autoAnimate, gridSize, tiltAt]);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;

    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerleave', resetAll);
    el.addEventListener('click', onClick);

    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerleave', resetAll);
      el.removeEventListener('click', onClick);

      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);

      rafRef.current != null && cancelAnimationFrame(rafRef.current);
      idleTimerRef.current && clearTimeout(idleTimerRef.current);
    };
  }, [onPointerMove, resetAll, onClick, onTouchMove, onTouchStart, onTouchEnd]);

  const cells = Array.from({ length: gridSize });
  const sceneStyle = {
    gridTemplateColumns: cubeSize ? \`repeat(\${gridSize}, \${cubeSize}px)\` : \`repeat(\${gridSize}, 1fr)\`,
    gridTemplateRows: cubeSize ? \`repeat(\${gridSize}, \${cubeSize}px)\` : \`repeat(\${gridSize}, 1fr)\`,
    columnGap: colGap,
    rowGap: rowGap
  };
  const wrapperStyle = {
    '--cube-face-border': borderStyle,
    '--cube-face-bg': faceColor,
    '--cube-face-shadow': shadow === true ? '0 0 6px rgba(0,0,0,.5)' : shadow || 'none',
    ...(cubeSize
      ? {
          width: \`\${gridSize * cubeSize}px\`,
          height: \`\${gridSize * cubeSize}px\`
        }
      : {})
  };

  return (
    <div className="default-animation" style={wrapperStyle}>
      <div ref={sceneRef} className="default-animation--scene" style={sceneStyle}>
        {cells.map((_, r) =>
          cells.map((__, c) => (
            <div key={\`\${r}-\${c}\`} className="cube" data-row={r} data-col={c}>
              <div className="cube-face cube-face--top" />
              <div className="cube-face cube-face--bottom" />
              <div className="cube-face cube-face--left" />
              <div className="cube-face cube-face--right" />
              <div className="cube-face cube-face--front" />
              <div className="cube-face cube-face--back" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cubes;
`,Re=`:root {
  --col-gap: 5%;
  --row-gap: 5%;
  --cube-perspective: 99999999px;
  --cube-face-border: 1px solid #fff;
  --cube-face-bg: #060010;
}

.default-animation {
  position: relative;
  width: 50%;
  aspect-ratio: 1 / 1;
  height: auto;
}

.default-animation--scene {
  display: grid;
  width: 100%;
  height: 100%;
  column-gap: var(--col-gap);
  row-gap: var(--row-gap);
  perspective: var(--cube-perspective);
  grid-auto-rows: 1fr;
}

.cube {
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  transform-style: preserve-3d;
}

.cube::before {
  content: '';
  position: absolute;
  top: -36px;
  right: -36px;
  bottom: -36px;
  left: -36px;
}

.default-animation .cube-face {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--cube-face-bg);
  border: var(--cube-face-border);
  opacity: 1;
}

.default-animation .cube-face--top {
  transform: translateY(-50%) rotateX(90deg);
}

.default-animation .cube-face--bottom {
  transform: translateY(50%) rotateX(-90deg);
}

.default-animation .cube-face--left {
  transform: translateX(-50%) rotateY(-90deg);
}

.default-animation .cube-face--right {
  transform: translateX(50%) rotateY(90deg);
}

.default-animation .cube-face--back,
.default-animation .cube-face--front {
  transform: rotateY(-90deg) translateX(50%) rotateY(90deg);
}

@media (max-width: 768px) {
  .default-animation {
    width: 90%;
  }
}
`,ye=`import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cubes = ({
  gridSize = 10,
  cubeSize,
  maxAngle = 45,
  radius = 3,
  easing = 'power3.out',
  duration = { enter: 0.3, leave: 0.6 },
  cellGap,
  borderStyle = '1px solid #fff',
  faceColor = '#060010',
  shadow = false,
  autoAnimate = true,
  rippleOnClick = true,
  rippleColor = '#fff',
  rippleSpeed = 2
}) => {
  const sceneRef = useRef(null);
  const rafRef = useRef(null);
  const idleTimerRef = useRef(null);
  const userActiveRef = useRef(false);
  const simPosRef = useRef({ x: 0, y: 0 });
  const simTargetRef = useRef({ x: 0, y: 0 });
  const simRAFRef = useRef(null);

  const colGap = typeof cellGap === 'number' ? \`\${cellGap}px\` : cellGap?.col !== undefined ? \`\${cellGap.col}px\` : '5%';
  const rowGap = typeof cellGap === 'number' ? \`\${cellGap}px\` : cellGap?.row !== undefined ? \`\${cellGap.row}px\` : '5%';

  const enterDur = duration.enter;
  const leaveDur = duration.leave;

  const tiltAt = useCallback(
    (rowCenter, colCenter) => {
      if (!sceneRef.current) return;
      sceneRef.current.querySelectorAll('.cube').forEach(cube => {
        const r = +cube.dataset.row;
        const c = +cube.dataset.col;
        const dist = Math.hypot(r - rowCenter, c - colCenter);
        if (dist <= radius) {
          const pct = 1 - dist / radius;
          const angle = pct * maxAngle;
          gsap.to(cube, {
            duration: enterDur,
            ease: easing,
            overwrite: true,
            rotateX: -angle,
            rotateY: angle
          });
        } else {
          gsap.to(cube, {
            duration: leaveDur,
            ease: 'power3.out',
            overwrite: true,
            rotateX: 0,
            rotateY: 0
          });
        }
      });
    },
    [radius, maxAngle, enterDur, leaveDur, easing]
  );

  const onPointerMove = useCallback(
    e => {
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      const colCenter = (e.clientX - rect.left) / cellW;
      const rowCenter = (e.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => tiltAt(rowCenter, colCenter));

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt]
  );

  const resetAll = useCallback(() => {
    if (!sceneRef.current) return;
    sceneRef.current.querySelectorAll('.cube').forEach(cube =>
      gsap.to(cube, {
        duration: leaveDur,
        rotateX: 0,
        rotateY: 0,
        ease: 'power3.out'
      })
    );
  }, [leaveDur]);

  const onTouchMove = useCallback(
    e => {
      e.preventDefault();
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;

      const touch = e.touches[0];
      const colCenter = (touch.clientX - rect.left) / cellW;
      const rowCenter = (touch.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => tiltAt(rowCenter, colCenter));

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt]
  );

  const onTouchStart = useCallback(() => {
    userActiveRef.current = true;
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!sceneRef.current) return;
    resetAll();
  }, [resetAll]);

  const onClick = useCallback(
    e => {
      if (!rippleOnClick || !sceneRef.current) return;
      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;

      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);

      const colHit = Math.floor((clientX - rect.left) / cellW);
      const rowHit = Math.floor((clientY - rect.top) / cellH);

      const baseRingDelay = 0.15;
      const baseAnimDur = 0.3;
      const baseHold = 0.6;

      const spreadDelay = baseRingDelay / rippleSpeed;
      const animDuration = baseAnimDur / rippleSpeed;
      const holdTime = baseHold / rippleSpeed;

      const rings = {};
      sceneRef.current.querySelectorAll('.cube').forEach(cube => {
        const r = +cube.dataset.row;
        const c = +cube.dataset.col;
        const dist = Math.hypot(r - rowHit, c - colHit);
        const ring = Math.round(dist);
        if (!rings[ring]) rings[ring] = [];
        rings[ring].push(cube);
      });

      Object.keys(rings)
        .map(Number)
        .sort((a, b) => a - b)
        .forEach(ring => {
          const delay = ring * spreadDelay;
          const faces = rings[ring].flatMap(cube => Array.from(cube.querySelectorAll('.cube-face')));

          gsap.to(faces, {
            backgroundColor: rippleColor,
            duration: animDuration,
            delay,
            ease: 'power3.out'
          });
          gsap.to(faces, {
            backgroundColor: faceColor,
            duration: animDuration,
            delay: delay + animDuration + holdTime,
            ease: 'power3.out'
          });
        });
    },
    [rippleOnClick, gridSize, faceColor, rippleColor, rippleSpeed]
  );

  useEffect(() => {
    if (!autoAnimate || !sceneRef.current) return;
    simPosRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize
    };
    simTargetRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize
    };
    const speed = 0.02;
    const loop = () => {
      if (!userActiveRef.current) {
        const pos = simPosRef.current;
        const tgt = simTargetRef.current;
        pos.x += (tgt.x - pos.x) * speed;
        pos.y += (tgt.y - pos.y) * speed;
        tiltAt(pos.y, pos.x);
        if (Math.hypot(pos.x - tgt.x, pos.y - tgt.y) < 0.1) {
          simTargetRef.current = {
            x: Math.random() * gridSize,
            y: Math.random() * gridSize
          };
        }
      }
      simRAFRef.current = requestAnimationFrame(loop);
    };
    simRAFRef.current = requestAnimationFrame(loop);
    return () => {
      if (simRAFRef.current != null) cancelAnimationFrame(simRAFRef.current);
    };
  }, [autoAnimate, gridSize, tiltAt]);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;

    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerleave', resetAll);
    el.addEventListener('click', onClick);

    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerleave', resetAll);
      el.removeEventListener('click', onClick);

      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);

      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [onPointerMove, resetAll, onClick, onTouchMove, onTouchStart, onTouchEnd]);

  const cells = Array.from({ length: gridSize });
  const sceneStyle = {
    gridTemplateColumns: cubeSize ? \`repeat(\${gridSize}, \${cubeSize}px)\` : \`repeat(\${gridSize}, 1fr)\`,
    gridTemplateRows: cubeSize ? \`repeat(\${gridSize}, \${cubeSize}px)\` : \`repeat(\${gridSize}, 1fr)\`,
    columnGap: colGap,
    rowGap: rowGap,
    perspective: '99999999px',
    gridAutoRows: '1fr'
  };
  const wrapperStyle = {
    '--cube-face-border': borderStyle,
    '--cube-face-bg': faceColor,
    '--cube-face-shadow': shadow === true ? '0 0 6px rgba(0,0,0,.5)' : shadow || 'none',
    ...(cubeSize
      ? {
          width: \`\${gridSize * cubeSize}px\`,
          height: \`\${gridSize * cubeSize}px\`
        }
      : {})
  };

  return (
    <div className="relative w-1/2 max-md:w-11/12 aspect-square" style={wrapperStyle}>
      <div ref={sceneRef} className="grid w-full h-full" style={sceneStyle}>
        {cells.map((_, r) =>
          cells.map((__, c) => (
            <div
              key={\`\${r}-\${c}\`}
              className="cube relative w-full h-full aspect-square [transform-style:preserve-3d]"
              data-row={r}
              data-col={c}
            >
              <span className="absolute pointer-events-none -inset-9" />

              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: 'var(--cube-face-bg)',
                  border: 'var(--cube-face-border)',
                  boxShadow: 'var(--cube-face-shadow)',
                  transform: 'translateY(-50%) rotateX(90deg)'
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: 'var(--cube-face-bg)',
                  border: 'var(--cube-face-border)',
                  boxShadow: 'var(--cube-face-shadow)',
                  transform: 'translateY(50%) rotateX(-90deg)'
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: 'var(--cube-face-bg)',
                  border: 'var(--cube-face-border)',
                  boxShadow: 'var(--cube-face-shadow)',
                  transform: 'translateX(-50%) rotateY(-90deg)'
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: 'var(--cube-face-bg)',
                  border: 'var(--cube-face-border)',
                  boxShadow: 'var(--cube-face-shadow)',
                  transform: 'translateX(50%) rotateY(90deg)'
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: 'var(--cube-face-bg)',
                  border: 'var(--cube-face-border)',
                  boxShadow: 'var(--cube-face-shadow)',
                  transform: 'rotateY(-90deg) translateX(50%) rotateY(90deg)'
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: 'var(--cube-face-bg)',
                  border: 'var(--cube-face-border)',
                  boxShadow: 'var(--cube-face-shadow)',
                  transform: 'rotateY(90deg) translateX(-50%) rotateY(-90deg)'
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cubes;
`,Ce=`import React, { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Cubes.css';

interface Gap {
  row: number;
  col: number;
}
interface Duration {
  enter: number;
  leave: number;
}

export interface CubesProps {
  gridSize?: number;
  cubeSize?: number;
  maxAngle?: number;
  radius?: number;
  easing?: gsap.EaseString;
  duration?: Duration;
  cellGap?: number | Gap;
  borderStyle?: string;
  faceColor?: string;
  shadow?: boolean | string;
  autoAnimate?: boolean;
  rippleOnClick?: boolean;
  rippleColor?: string;
  rippleSpeed?: number;
}

const Cubes: React.FC<CubesProps> = ({
  gridSize = 10,
  cubeSize,
  maxAngle = 45,
  radius = 3,
  easing = 'power3.out',
  duration = { enter: 0.3, leave: 0.6 },
  cellGap,
  borderStyle = '1px solid #fff',
  faceColor = '#060010',
  shadow = false,
  autoAnimate = true,
  rippleOnClick = true,
  rippleColor = '#fff',
  rippleSpeed = 2
}) => {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const userActiveRef = useRef(false);
  const simPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const simTargetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const simRAFRef = useRef<number | null>(null);

  const colGap =
    typeof cellGap === 'number'
      ? \`\${cellGap}px\`
      : (cellGap as Gap)?.col !== undefined
        ? \`\${(cellGap as Gap).col}px\`
        : '5%';
  const rowGap =
    typeof cellGap === 'number'
      ? \`\${cellGap}px\`
      : (cellGap as Gap)?.row !== undefined
        ? \`\${(cellGap as Gap).row}px\`
        : '5%';

  const enterDur = duration.enter;
  const leaveDur = duration.leave;

  const tiltAt = useCallback(
    (rowCenter: number, colCenter: number) => {
      if (!sceneRef.current) return;
      sceneRef.current.querySelectorAll<HTMLDivElement>('.cube').forEach(cube => {
        const r = +cube.dataset.row!;
        const c = +cube.dataset.col!;
        const dist = Math.hypot(r - rowCenter, c - colCenter);
        if (dist <= radius) {
          const pct = 1 - dist / radius;
          const angle = pct * maxAngle;
          gsap.to(cube, {
            duration: enterDur,
            ease: easing,
            overwrite: true,
            rotateX: -angle,
            rotateY: angle
          });
        } else {
          gsap.to(cube, {
            duration: leaveDur,
            ease: 'power3.out',
            overwrite: true,
            rotateX: 0,
            rotateY: 0
          });
        }
      });
    },
    [radius, maxAngle, enterDur, leaveDur, easing]
  );

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current!.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      const colCenter = (e.clientX - rect.left) / cellW;
      const rowCenter = (e.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => tiltAt(rowCenter, colCenter));

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt]
  );

  const resetAll = useCallback(() => {
    if (!sceneRef.current) return;
    sceneRef.current.querySelectorAll<HTMLDivElement>('.cube').forEach(cube =>
      gsap.to(cube, {
        duration: leaveDur,
        rotateX: 0,
        rotateY: 0,
        ease: 'power3.out'
      })
    );
  }, [leaveDur]);

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      e.preventDefault();
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current!.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;

      const touch = e.touches[0];
      const colCenter = (touch.clientX - rect.left) / cellW;
      const rowCenter = (touch.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => tiltAt(rowCenter, colCenter));

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt]
  );

  const onTouchStart = useCallback(() => {
    userActiveRef.current = true;
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!sceneRef.current) return;
    resetAll();
  }, [resetAll]);

  const onClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!rippleOnClick || !sceneRef.current) return;
      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;

      const clientX = (e as MouseEvent).clientX || ((e as TouchEvent).touches && (e as TouchEvent).touches[0].clientX);
      const clientY = (e as MouseEvent).clientY || ((e as TouchEvent).touches && (e as TouchEvent).touches[0].clientY);

      const colHit = Math.floor((clientX - rect.left) / cellW);
      const rowHit = Math.floor((clientY - rect.top) / cellH);

      const baseRingDelay = 0.15;
      const baseAnimDur = 0.3;
      const baseHold = 0.6;

      const spreadDelay = baseRingDelay / rippleSpeed;
      const animDuration = baseAnimDur / rippleSpeed;
      const holdTime = baseHold / rippleSpeed;

      const rings: Record<number, HTMLDivElement[]> = {};
      sceneRef.current.querySelectorAll<HTMLDivElement>('.cube').forEach(cube => {
        const r = +cube.dataset.row!;
        const c = +cube.dataset.col!;
        const dist = Math.hypot(r - rowHit, c - colHit);
        const ring = Math.round(dist);
        if (!rings[ring]) rings[ring] = [];
        rings[ring].push(cube);
      });

      Object.keys(rings)
        .map(Number)
        .sort((a, b) => a - b)
        .forEach(ring => {
          const delay = ring * spreadDelay;
          const faces = rings[ring].flatMap(cube => Array.from(cube.querySelectorAll<HTMLElement>('.cube-face')));

          gsap.to(faces, {
            backgroundColor: rippleColor,
            duration: animDuration,
            delay,
            ease: 'power3.out'
          });
          gsap.to(faces, {
            backgroundColor: faceColor,
            duration: animDuration,
            delay: delay + animDuration + holdTime,
            ease: 'power3.out'
          });
        });
    },
    [rippleOnClick, gridSize, faceColor, rippleColor, rippleSpeed]
  );

  useEffect(() => {
    if (!autoAnimate || !sceneRef.current) return;
    simPosRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize
    };
    simTargetRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize
    };
    const speed = 0.02;
    const loop = () => {
      if (!userActiveRef.current) {
        const pos = simPosRef.current;
        const tgt = simTargetRef.current;
        pos.x += (tgt.x - pos.x) * speed;
        pos.y += (tgt.y - pos.y) * speed;
        tiltAt(pos.y, pos.x);
        if (Math.hypot(pos.x - tgt.x, pos.y - tgt.y) < 0.1) {
          simTargetRef.current = {
            x: Math.random() * gridSize,
            y: Math.random() * gridSize
          };
        }
      }
      simRAFRef.current = requestAnimationFrame(loop);
    };
    simRAFRef.current = requestAnimationFrame(loop);
    return () => {
      if (simRAFRef.current != null) {
        cancelAnimationFrame(simRAFRef.current);
      }
    };
  }, [autoAnimate, gridSize, tiltAt]);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerleave', resetAll);
    el.addEventListener('click', onClick);

    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerleave', resetAll);
      el.removeEventListener('click', onClick);

      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);

      rafRef.current != null && cancelAnimationFrame(rafRef.current);
      idleTimerRef.current && clearTimeout(idleTimerRef.current);
    };
  }, [onPointerMove, resetAll, onClick, onTouchMove, onTouchStart, onTouchEnd]);

  const cells = Array.from({ length: gridSize });
  const sceneStyle: React.CSSProperties = {
    gridTemplateColumns: cubeSize ? \`repeat(\${gridSize}, \${cubeSize}px)\` : \`repeat(\${gridSize}, 1fr)\`,
    gridTemplateRows: cubeSize ? \`repeat(\${gridSize}, \${cubeSize}px)\` : \`repeat(\${gridSize}, 1fr)\`,
    columnGap: colGap,
    rowGap: rowGap
  };
  const wrapperStyle = {
    '--cube-face-border': borderStyle,
    '--cube-face-bg': faceColor,
    '--cube-face-shadow': shadow === true ? '0 0 6px rgba(0,0,0,.5)' : shadow || 'none',
    ...(cubeSize
      ? {
          width: \`\${gridSize * cubeSize}px\`,
          height: \`\${gridSize * cubeSize}px\`
        }
      : {})
  } as React.CSSProperties;

  return (
    <div className="default-animation" style={wrapperStyle}>
      <div ref={sceneRef} className="default-animation--scene" style={sceneStyle}>
        {cells.map((_, r) =>
          cells.map((__, c) => (
            <div key={\`\${r}-\${c}\`} className="cube" data-row={r} data-col={c}>
              <div className="cube-face cube-face--top" />
              <div className="cube-face cube-face--bottom" />
              <div className="cube-face cube-face--left" />
              <div className="cube-face cube-face--right" />
              <div className="cube-face cube-face--front" />
              <div className="cube-face cube-face--back" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cubes;
`,Se=`import React, { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Gap {
  row: number;
  col: number;
}
interface Duration {
  enter: number;
  leave: number;
}

export interface CubesProps {
  gridSize?: number;
  cubeSize?: number;
  maxAngle?: number;
  radius?: number;
  easing?: gsap.EaseString;
  duration?: Duration;
  cellGap?: number | Gap;
  borderStyle?: string;
  faceColor?: string;
  shadow?: boolean | string;
  autoAnimate?: boolean;
  rippleOnClick?: boolean;
  rippleColor?: string;
  rippleSpeed?: number;
}

const Cubes: React.FC<CubesProps> = ({
  gridSize = 10,
  cubeSize,
  maxAngle = 45,
  radius = 3,
  easing = 'power3.out',
  duration = { enter: 0.3, leave: 0.6 },
  cellGap,
  borderStyle = '1px solid #fff',
  faceColor = '#060010',
  shadow = false,
  autoAnimate = true,
  rippleOnClick = true,
  rippleColor = '#fff',
  rippleSpeed = 2
}) => {
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const userActiveRef = useRef(false);
  const simPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const simTargetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const simRAFRef = useRef<number | null>(null);

  const colGap =
    typeof cellGap === 'number'
      ? \`\${cellGap}px\`
      : (cellGap as Gap)?.col !== undefined
        ? \`\${(cellGap as Gap).col}px\`
        : '5%';
  const rowGap =
    typeof cellGap === 'number'
      ? \`\${cellGap}px\`
      : (cellGap as Gap)?.row !== undefined
        ? \`\${(cellGap as Gap).row}px\`
        : '5%';

  const enterDur = duration.enter;
  const leaveDur = duration.leave;

  const tiltAt = useCallback(
    (rowCenter: number, colCenter: number) => {
      if (!sceneRef.current) return;
      sceneRef.current.querySelectorAll<HTMLDivElement>('.cube').forEach(cube => {
        const r = +cube.dataset.row!;
        const c = +cube.dataset.col!;
        const dist = Math.hypot(r - rowCenter, c - colCenter);
        if (dist <= radius) {
          const pct = 1 - dist / radius;
          const angle = pct * maxAngle;
          gsap.to(cube, {
            duration: enterDur,
            ease: easing,
            overwrite: true,
            rotateX: -angle,
            rotateY: angle
          });
        } else {
          gsap.to(cube, {
            duration: leaveDur,
            ease: 'power3.out',
            overwrite: true,
            rotateX: 0,
            rotateY: 0
          });
        }
      });
    },
    [radius, maxAngle, enterDur, leaveDur, easing]
  );

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current!.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;
      const colCenter = (e.clientX - rect.left) / cellW;
      const rowCenter = (e.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => tiltAt(rowCenter, colCenter));

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt]
  );

  const resetAll = useCallback(() => {
    if (!sceneRef.current) return;
    sceneRef.current.querySelectorAll<HTMLDivElement>('.cube').forEach(cube =>
      gsap.to(cube, {
        duration: leaveDur,
        rotateX: 0,
        rotateY: 0,
        ease: 'power3.out'
      })
    );
  }, [leaveDur]);

  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      e.preventDefault();
      userActiveRef.current = true;
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);

      const rect = sceneRef.current!.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;

      const touch = e.touches[0];
      const colCenter = (touch.clientX - rect.left) / cellW;
      const rowCenter = (touch.clientY - rect.top) / cellH;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => tiltAt(rowCenter, colCenter));

      idleTimerRef.current = setTimeout(() => {
        userActiveRef.current = false;
      }, 3000);
    },
    [gridSize, tiltAt]
  );

  const onTouchStart = useCallback(() => {
    userActiveRef.current = true;
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!sceneRef.current) return;
    resetAll();
  }, [resetAll]);

  const onClick = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!rippleOnClick || !sceneRef.current) return;
      const rect = sceneRef.current.getBoundingClientRect();
      const cellW = rect.width / gridSize;
      const cellH = rect.height / gridSize;

      const clientX = (e as MouseEvent).clientX || ((e as TouchEvent).touches && (e as TouchEvent).touches[0].clientX);
      const clientY = (e as MouseEvent).clientY || ((e as TouchEvent).touches && (e as TouchEvent).touches[0].clientY);

      const colHit = Math.floor((clientX - rect.left) / cellW);
      const rowHit = Math.floor((clientY - rect.top) / cellH);

      const baseRingDelay = 0.15;
      const baseAnimDur = 0.3;
      const baseHold = 0.6;

      const spreadDelay = baseRingDelay / rippleSpeed;
      const animDuration = baseAnimDur / rippleSpeed;
      const holdTime = baseHold / rippleSpeed;

      const rings: Record<number, HTMLDivElement[]> = {};
      sceneRef.current.querySelectorAll<HTMLDivElement>('.cube').forEach(cube => {
        const r = +cube.dataset.row!;
        const c = +cube.dataset.col!;
        const dist = Math.hypot(r - rowHit, c - colHit);
        const ring = Math.round(dist);
        if (!rings[ring]) rings[ring] = [];
        rings[ring].push(cube);
      });

      Object.keys(rings)
        .map(Number)
        .sort((a, b) => a - b)
        .forEach(ring => {
          const delay = ring * spreadDelay;
          const faces = rings[ring].flatMap(cube => Array.from(cube.querySelectorAll<HTMLElement>('.cube-face')));

          gsap.to(faces, {
            backgroundColor: rippleColor,
            duration: animDuration,
            delay,
            ease: 'power3.out'
          });
          gsap.to(faces, {
            backgroundColor: faceColor,
            duration: animDuration,
            delay: delay + animDuration + holdTime,
            ease: 'power3.out'
          });
        });
    },
    [rippleOnClick, gridSize, faceColor, rippleColor, rippleSpeed]
  );

  useEffect(() => {
    if (!autoAnimate || !sceneRef.current) return;
    simPosRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize
    };
    simTargetRef.current = {
      x: Math.random() * gridSize,
      y: Math.random() * gridSize
    };
    const speed = 0.02;
    const loop = () => {
      if (!userActiveRef.current) {
        const pos = simPosRef.current;
        const tgt = simTargetRef.current;
        pos.x += (tgt.x - pos.x) * speed;
        pos.y += (tgt.y - pos.y) * speed;
        tiltAt(pos.y, pos.x);
        if (Math.hypot(pos.x - tgt.x, pos.y - tgt.y) < 0.1) {
          simTargetRef.current = {
            x: Math.random() * gridSize,
            y: Math.random() * gridSize
          };
        }
      }
      simRAFRef.current = requestAnimationFrame(loop);
    };
    simRAFRef.current = requestAnimationFrame(loop);
    return () => {
      if (simRAFRef.current != null) cancelAnimationFrame(simRAFRef.current);
    };
  }, [autoAnimate, gridSize, tiltAt]);

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    el.addEventListener('pointermove', onPointerMove);
    el.addEventListener('pointerleave', resetAll);
    el.addEventListener('click', onClick);

    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerleave', resetAll);
      el.removeEventListener('click', onClick);

      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);

      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [onPointerMove, resetAll, onClick, onTouchMove, onTouchStart, onTouchEnd]);

  const cells = Array.from({ length: gridSize });
  const sceneStyle: React.CSSProperties = {
    gridTemplateColumns: cubeSize ? \`repeat(\${gridSize}, \${cubeSize}px)\` : \`repeat(\${gridSize}, 1fr)\`,
    gridTemplateRows: cubeSize ? \`repeat(\${gridSize}, \${cubeSize}px)\` : \`repeat(\${gridSize}, 1fr)\`,
    columnGap: colGap,
    rowGap: rowGap,
    perspective: '99999999px',
    gridAutoRows: '1fr'
  };
  const wrapperStyle = {
    '--cube-face-border': borderStyle,
    '--cube-face-bg': faceColor,
    '--cube-face-shadow': shadow === true ? '0 0 6px rgba(0,0,0,.5)' : shadow || 'none',
    ...(cubeSize
      ? {
          width: \`\${gridSize * cubeSize}px\`,
          height: \`\${gridSize * cubeSize}px\`
        }
      : {})
  } as React.CSSProperties;

  return (
    <div className="relative w-1/2 max-md:w-11/12 aspect-square" style={wrapperStyle}>
      <div ref={sceneRef} className="grid w-full h-full" style={sceneStyle}>
        {cells.map((_, r) =>
          cells.map((__, c) => (
            <div
              key={\`\${r}-\${c}\`}
              className="cube relative w-full h-full aspect-square [transform-style:preserve-3d]"
              data-row={r}
              data-col={c}
            >
              <span className="absolute pointer-events-none -inset-9" />

              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: 'var(--cube-face-bg)',
                  border: 'var(--cube-face-border)',
                  boxShadow: 'var(--cube-face-shadow)',
                  transform: 'translateY(-50%) rotateX(90deg)'
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: 'var(--cube-face-bg)',
                  border: 'var(--cube-face-border)',
                  boxShadow: 'var(--cube-face-shadow)',
                  transform: 'translateY(50%) rotateX(-90deg)'
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: 'var(--cube-face-bg)',
                  border: 'var(--cube-face-border)',
                  boxShadow: 'var(--cube-face-shadow)',
                  transform: 'translateX(-50%) rotateY(-90deg)'
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: 'var(--cube-face-bg)',
                  border: 'var(--cube-face-border)',
                  boxShadow: 'var(--cube-face-shadow)',
                  transform: 'translateX(50%) rotateY(90deg)'
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: 'var(--cube-face-bg)',
                  border: 'var(--cube-face-border)',
                  boxShadow: 'var(--cube-face-shadow)',
                  transform: 'rotateY(-90deg) translateX(50%) rotateY(90deg)'
                }}
              />
              <div
                className="cube-face absolute inset-0 flex items-center justify-center"
                style={{
                  background: 'var(--cube-face-bg)',
                  border: 'var(--cube-face-border)',
                  boxShadow: 'var(--cube-face-shadow)',
                  transform: 'rotateY(90deg) translateX(-50%) rotateY(-90deg)'
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cubes;
`,we={dependencies:"gsap",usage:`// CREDIT
// Component inspired from Can Tastemel's original work for the lambda.ai landing page
// https://cantastemel.com
  
import Cubes from './Cubes'

<div style={{ height: '600px', position: 'relative' }}>
  <Cubes 
    gridSize={8}
    maxAngle={60}
    radius={4}
    borderStyle="2px dashed #5227FF"
    faceColor="#1a1a2e"
    rippleColor="#ff6b6b"
    rippleSpeed={1.5}
    autoAnimate={true}
    rippleOnClick={true}
  />
</div>`,code:ve,css:Re,tailwind:ye,tsCode:Ce,tsTailwind:Se},Ae=({gridSize:n=10,cubeSize:i,maxAngle:E=45,radius:y=3,easing:C="power3.out",duration:S={enter:.3,leave:.6},cellGap:a,borderStyle:k="1px solid #fff",faceColor:g="#060010",shadow:w=!1,autoAnimate:M=!0,rippleOnClick:z=!0,rippleColor:l="#fff",rippleSpeed:D=2})=>{const u=c.useRef(null),f=c.useRef(null),d=c.useRef(null),h=c.useRef(!1),I=c.useRef({x:0,y:0}),Y=c.useRef({x:0,y:0}),L=c.useRef(null),Q=typeof a=="number"?`${a}px`:(a==null?void 0:a.col)!==void 0?`${a.col}px`:"5%",V=typeof a=="number"?`${a}px`:(a==null?void 0:a.row)!==void 0?`${a.row}px`:"5%",U=S.enter,$=S.leave,v=c.useCallback((e,r)=>{u.current&&u.current.querySelectorAll(".cube").forEach(o=>{const s=+o.dataset.row,p=+o.dataset.col,m=Math.hypot(s-e,p-r);if(m<=y){const G=(1-m/y)*E;T.to(o,{duration:U,ease:C,overwrite:!0,rotateX:-G,rotateY:G})}else T.to(o,{duration:$,ease:"power3.out",overwrite:!0,rotateX:0,rotateY:0})})},[y,E,U,$,C]),X=c.useCallback(e=>{h.current=!0,d.current&&clearTimeout(d.current);const r=u.current.getBoundingClientRect(),o=r.width/n,s=r.height/n,p=(e.clientX-r.left)/o,m=(e.clientY-r.top)/s;f.current&&cancelAnimationFrame(f.current),f.current=requestAnimationFrame(()=>v(m,p)),d.current=setTimeout(()=>{h.current=!1},3e3)},[n,v]),A=c.useCallback(()=>{u.current&&u.current.querySelectorAll(".cube").forEach(e=>T.to(e,{duration:$,rotateX:0,rotateY:0,ease:"power3.out"}))},[$]),P=c.useCallback(e=>{e.preventDefault(),h.current=!0,d.current&&clearTimeout(d.current);const r=u.current.getBoundingClientRect(),o=r.width/n,s=r.height/n,p=e.touches[0],m=(p.clientX-r.left)/o,F=(p.clientY-r.top)/s;f.current&&cancelAnimationFrame(f.current),f.current=requestAnimationFrame(()=>v(F,m)),d.current=setTimeout(()=>{h.current=!1},3e3)},[n,v]),N=c.useCallback(()=>{h.current=!0},[]),j=c.useCallback(()=>{u.current&&A()},[A]),q=c.useCallback(e=>{if(!z||!u.current)return;const r=u.current.getBoundingClientRect(),o=r.width/n,s=r.height/n,p=e.clientX||e.touches&&e.touches[0].clientX,m=e.clientY||e.touches&&e.touches[0].clientY,F=Math.floor((p-r.left)/o),G=Math.floor((m-r.top)/s),te=.15,re=.3,oe=.6,ce=te/D,W=re/D,ae=oe/D,x={};u.current.querySelectorAll(".cube").forEach(b=>{const R=+b.dataset.row,H=+b.dataset.col,O=Math.hypot(R-G,H-F),B=Math.round(O);x[B]||(x[B]=[]),x[B].push(b)}),Object.keys(x).map(Number).sort((b,R)=>b-R).forEach(b=>{const R=b*ce,H=x[b].flatMap(O=>Array.from(O.querySelectorAll(".cube-face")));T.to(H,{backgroundColor:l,duration:W,delay:R,ease:"power3.out"}),T.to(H,{backgroundColor:g,duration:W,delay:R+W+ae,ease:"power3.out"})})},[z,n,g,l,D]);c.useEffect(()=>{if(!M||!u.current)return;I.current={x:Math.random()*n,y:Math.random()*n},Y.current={x:Math.random()*n,y:Math.random()*n};const e=.02,r=()=>{if(!h.current){const o=I.current,s=Y.current;o.x+=(s.x-o.x)*e,o.y+=(s.y-o.y)*e,v(o.y,o.x),Math.hypot(o.x-s.x,o.y-s.y)<.1&&(Y.current={x:Math.random()*n,y:Math.random()*n})}L.current=requestAnimationFrame(r)};return L.current=requestAnimationFrame(r),()=>{L.current!=null&&cancelAnimationFrame(L.current)}},[M,n,v]),c.useEffect(()=>{const e=u.current;if(e)return e.addEventListener("pointermove",X),e.addEventListener("pointerleave",A),e.addEventListener("click",q),e.addEventListener("touchmove",P,{passive:!1}),e.addEventListener("touchstart",N,{passive:!0}),e.addEventListener("touchend",j,{passive:!0}),()=>{e.removeEventListener("pointermove",X),e.removeEventListener("pointerleave",A),e.removeEventListener("click",q),e.removeEventListener("touchmove",P),e.removeEventListener("touchstart",N),e.removeEventListener("touchend",j),f.current!=null&&cancelAnimationFrame(f.current),d.current&&clearTimeout(d.current)}},[X,A,q,P,N,j]);const Z=Array.from({length:n}),ee={gridTemplateColumns:i?`repeat(${n}, ${i}px)`:`repeat(${n}, 1fr)`,gridTemplateRows:i?`repeat(${n}, ${i}px)`:`repeat(${n}, 1fr)`,columnGap:Q,rowGap:V},ne={"--cube-face-border":k,"--cube-face-bg":g,"--cube-face-shadow":w===!0?"0 0 6px rgba(0,0,0,.5)":w||"none",...i?{width:`${n*i}px`,height:`${n*i}px`}:{}};return t.jsx("div",{className:"default-animation",style:ne,children:t.jsx("div",{ref:u,className:"default-animation--scene",style:ee,children:Z.map((e,r)=>Z.map((o,s)=>t.jsxs("div",{className:"cube","data-row":r,"data-col":s,children:[t.jsx("div",{className:"cube-face cube-face--top"}),t.jsx("div",{className:"cube-face cube-face--bottom"}),t.jsx("div",{className:"cube-face cube-face--left"}),t.jsx("div",{className:"cube-face cube-face--right"}),t.jsx("div",{className:"cube-face cube-face--front"}),t.jsx("div",{className:"cube-face cube-face--back"})]},`${r}-${s}`)))})})},K={borderStyle:"2px dashed #B19EEF",gridSize:8,maxAngle:45,radius:3,autoAnimate:!0,rippleOnClick:!0},Ye=()=>{const{props:n,updateProp:i,resetProps:E,hasChanges:y}=ie(K),{borderStyle:C,gridSize:S,maxAngle:a,radius:k,autoAnimate:g,rippleOnClick:w}=n,M=[{value:"2px dotted #fff",label:"Dotted White"},{value:"2px dashed #B19EEF",label:"Dashed Purple"},{value:"3px solid #fff",label:"Solid White"}],z=c.useMemo(()=>[{name:"gridSize",type:"number",default:"10",description:"The size of the grid (number of cubes per row/column)"},{name:"cubeSize",type:"number",default:"undefined",description:"Fixed size of each cube in pixels. If not provided, cubes will be responsive"},{name:"maxAngle",type:"number",default:"45",description:"Maximum rotation angle for the tilt effect in degrees"},{name:"radius",type:"number",default:"3",description:"Radius of the tilt effect (how many cubes around the cursor are affected)"},{name:"easing",type:"string",default:"'power3.out'",description:"GSAP easing function for the tilt animation"},{name:"duration",type:"object",default:"{ enter: 0.3, leave: 0.6 }",description:"Animation duration for enter and leave effects"},{name:"cellGap",type:"number | object",default:"undefined",description:"Gap between cubes. Can be a number or object with row/col properties"},{name:"borderStyle",type:"string",default:"'1px solid #fff'",description:"CSS border style for cube faces"},{name:"faceColor",type:"string",default:"'#060010'",description:"Background color for cube faces"},{name:"shadow",type:"boolean | string",default:"false",description:"Shadow effect for cubes. Can be boolean or custom CSS shadow"},{name:"autoAnimate",type:"boolean",default:"true",description:"Whether to automatically animate when user is idle"},{name:"rippleOnClick",type:"boolean",default:"true",description:"Whether to show ripple effect on click"},{name:"rippleColor",type:"string",default:"'#fff'",description:"Color of the ripple effect"},{name:"rippleSpeed",type:"number",default:"2",description:"Speed multiplier for the ripple animation"}],[]);return t.jsx(le,{props:n,defaultProps:K,resetProps:E,hasChanges:y,children:t.jsxs(ue,{children:[t.jsxs(fe,{children:[t.jsx(se,{position:"relative",className:"demo-container",h:650,overflow:"hidden",children:t.jsx(Ae,{borderStyle:C,gridSize:S,maxAngle:a,radius:k,autoAnimate:g,rippleOnClick:w})}),t.jsxs(be,{children:[t.jsx(ge,{title:"Border Style",options:M,value:C,onChange:l=>i("borderStyle",l),width:150}),t.jsx(_,{title:"Grid Size",min:6,max:12,step:1,value:S,onChange:l=>i("gridSize",l),width:150}),t.jsx(_,{title:"Max Angle",min:15,max:180,step:5,value:a,valueUnit:"°",onChange:l=>i("maxAngle",l),width:150}),t.jsx(_,{title:"Radius",min:1,max:5,step:1,value:k,onChange:l=>i("radius",l),width:150}),t.jsx(J,{title:"Auto Animate",isChecked:g,onChange:l=>i("autoAnimate",l)}),t.jsx(J,{title:"Ripple On Click",isChecked:w,onChange:l=>i("rippleOnClick",l)})]}),t.jsx(de,{data:z}),t.jsx(he,{dependencyList:["gsap"]})]}),t.jsx(pe,{children:t.jsx(me,{codeObject:we,componentName:"Cubes"})})]})})};export{Ye as default};
