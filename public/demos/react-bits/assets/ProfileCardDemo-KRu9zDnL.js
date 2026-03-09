import{i as pn,r as c,j as e,B as mn,e as fn}from"./index-CKqfvLoB.js";import{u as hn,C as vn,T as gn,P as bn,a as xn,b as yn,c as Tn}from"./PropTable-BzD4cJVp.js";import{C as En}from"./Customize-BaUKAf5J.js";import{u as In}from"./useForceRerender-0lK0qxlp.js";import{P}from"./PreviewSwitch-B0BSuWrO.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./switch-CqqRi5Az.js";const Rn=`import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import './ProfileCard.css';

const DEFAULT_INNER_GRADIENT = 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)';

const ANIMATION_CONFIG = {
  INITIAL_DURATION: 1200,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20,
  ENTER_TRANSITION_MS: 180
};

const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);
const round = (v, precision = 3) => parseFloat(v.toFixed(precision));
const adjust = (v, fMin, fMax, tMin, tMax) => round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

const ProfileCardComponent = ({
  avatarUrl = '<Placeholder for avatar URL>',
  iconUrl = '<Placeholder for icon URL>',
  grainUrl = '<Placeholder for grain URL>',
  innerGradient,
  behindGlowEnabled = true,
  behindGlowColor,
  behindGlowSize,
  className = '',
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  name = 'Javi A. Torres',
  title = 'Software Engineer',
  handle = 'javicodes',
  status = 'Online',
  contactText = 'Contact',
  showUserInfo = true,
  onContactClick
}) => {
  const wrapRef = useRef(null);
  const shellRef = useRef(null);

  const enterTimerRef = useRef(null);
  const leaveRafRef = useRef(null);

  const tiltEngine = useMemo(() => {
    if (!enableTilt) return null;

    let rafId = null;
    let running = false;
    let lastTs = 0;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const DEFAULT_TAU = 0.14;
    const INITIAL_TAU = 0.6;
    let initialUntil = 0;

    const setVarsFromXY = (x, y) => {
      const shell = shellRef.current;
      const wrap = wrapRef.current;
      if (!shell || !wrap) return;

      const width = shell.clientWidth || 1;
      const height = shell.clientHeight || 1;

      const percentX = clamp((100 / width) * x);
      const percentY = clamp((100 / height) * y);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        '--pointer-x': \`\${percentX}%\`,
        '--pointer-y': \`\${percentY}%\`,
        '--background-x': \`\${adjust(percentX, 0, 100, 35, 65)}%\`,
        '--background-y': \`\${adjust(percentY, 0, 100, 35, 65)}%\`,
        '--pointer-from-center': \`\${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}\`,
        '--pointer-from-top': \`\${percentY / 100}\`,
        '--pointer-from-left': \`\${percentX / 100}\`,
        '--rotate-x': \`\${round(-(centerX / 5))}deg\`,
        '--rotate-y': \`\${round(centerY / 4)}deg\`
      };

      for (const [k, v] of Object.entries(properties)) wrap.style.setProperty(k, v);
    };

    const step = ts => {
      if (!running) return;
      if (lastTs === 0) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      const tau = ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU;
      const k = 1 - Math.exp(-dt / tau);

      currentX += (targetX - currentX) * k;
      currentY += (targetY - currentY) * k;

      setVarsFromXY(currentX, currentY);

      const stillFar = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;

      if (stillFar || document.hasFocus()) {
        rafId = requestAnimationFrame(step);
      } else {
        running = false;
        lastTs = 0;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      lastTs = 0;
      rafId = requestAnimationFrame(step);
    };

    return {
      setImmediate(x, y) {
        currentX = x;
        currentY = y;
        setVarsFromXY(currentX, currentY);
      },
      setTarget(x, y) {
        targetX = x;
        targetY = y;
        start();
      },
      toCenter() {
        const shell = shellRef.current;
        if (!shell) return;
        this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
      },
      beginInitial(durationMs) {
        initialUntil = performance.now() + durationMs;
        start();
      },
      getCurrent() {
        return { x: currentX, y: currentY, tx: targetX, ty: targetY };
      },
      cancel() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        running = false;
        lastTs = 0;
      }
    };
  }, [enableTilt]);

  const getOffsets = (evt, el) => {
    const rect = el.getBoundingClientRect();
    return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
  };

  const handlePointerMove = useCallback(
    event => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;
      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine]
  );

  const handlePointerEnter = useCallback(
    event => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;

      shell.classList.add('active');
      shell.classList.add('entering');
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      enterTimerRef.current = window.setTimeout(() => {
        shell.classList.remove('entering');
      }, ANIMATION_CONFIG.ENTER_TRANSITION_MS);

      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine]
  );

  const handlePointerLeave = useCallback(() => {
    const shell = shellRef.current;
    if (!shell || !tiltEngine) return;

    tiltEngine.toCenter();

    const checkSettle = () => {
      const { x, y, tx, ty } = tiltEngine.getCurrent();
      const settled = Math.hypot(tx - x, ty - y) < 0.6;
      if (settled) {
        shell.classList.remove('active');
        leaveRafRef.current = null;
      } else {
        leaveRafRef.current = requestAnimationFrame(checkSettle);
      }
    };
    if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
    leaveRafRef.current = requestAnimationFrame(checkSettle);
  }, [tiltEngine]);

  const handleDeviceOrientation = useCallback(
    event => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;

      const { beta, gamma } = event;
      if (beta == null || gamma == null) return;

      const centerX = shell.clientWidth / 2;
      const centerY = shell.clientHeight / 2;
      const x = clamp(centerX + gamma * mobileTiltSensitivity, 0, shell.clientWidth);
      const y = clamp(
        centerY + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
        0,
        shell.clientHeight
      );

      tiltEngine.setTarget(x, y);
    },
    [tiltEngine, mobileTiltSensitivity]
  );

  useEffect(() => {
    if (!enableTilt || !tiltEngine) return;

    const shell = shellRef.current;
    if (!shell) return;

    const pointerMoveHandler = handlePointerMove;
    const pointerEnterHandler = handlePointerEnter;
    const pointerLeaveHandler = handlePointerLeave;
    const deviceOrientationHandler = handleDeviceOrientation;

    shell.addEventListener('pointerenter', pointerEnterHandler);
    shell.addEventListener('pointermove', pointerMoveHandler);
    shell.addEventListener('pointerleave', pointerLeaveHandler);

    const handleClick = () => {
      if (!enableMobileTilt || location.protocol !== 'https:') return;
      const anyMotion = window.DeviceMotionEvent;
      if (anyMotion && typeof anyMotion.requestPermission === 'function') {
        anyMotion
          .requestPermission()
          .then(state => {
            if (state === 'granted') {
              window.addEventListener('deviceorientation', deviceOrientationHandler);
            }
          })
          .catch(console.error);
      } else {
        window.addEventListener('deviceorientation', deviceOrientationHandler);
      }
    };
    shell.addEventListener('click', handleClick);

    const initialX = (shell.clientWidth || 0) - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
    tiltEngine.setImmediate(initialX, initialY);
    tiltEngine.toCenter();
    tiltEngine.beginInitial(ANIMATION_CONFIG.INITIAL_DURATION);

    return () => {
      shell.removeEventListener('pointerenter', pointerEnterHandler);
      shell.removeEventListener('pointermove', pointerMoveHandler);
      shell.removeEventListener('pointerleave', pointerLeaveHandler);
      shell.removeEventListener('click', handleClick);
      window.removeEventListener('deviceorientation', deviceOrientationHandler);
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
      tiltEngine.cancel();
      shell.classList.remove('entering');
    };
  }, [
    enableTilt,
    enableMobileTilt,
    tiltEngine,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
    handleDeviceOrientation
  ]);

  const cardStyle = useMemo(
    () => ({
      '--icon': iconUrl ? \`url(\${iconUrl})\` : 'none',
      '--grain': grainUrl ? \`url(\${grainUrl})\` : 'none',
      '--inner-gradient': innerGradient ?? DEFAULT_INNER_GRADIENT,
      '--behind-glow-color': behindGlowColor ?? 'rgba(125, 190, 255, 0.67)',
      '--behind-glow-size': behindGlowSize ?? '50%'
    }),
    [iconUrl, grainUrl, innerGradient, behindGlowColor, behindGlowSize]
  );

  const handleContactClick = useCallback(() => {
    onContactClick?.();
  }, [onContactClick]);

  return (
    <div ref={wrapRef} className={\`pc-card-wrapper \${className}\`.trim()} style={cardStyle}>
      {behindGlowEnabled && <div className="pc-behind" />}
      <div ref={shellRef} className="pc-card-shell">
        <section className="pc-card">
          <div className="pc-inside">
            <div className="pc-shine" />
            <div className="pc-glare" />
            <div className="pc-content pc-avatar-content">
              <img
                className="avatar"
                src={avatarUrl}
                alt={\`\${name || 'User'} avatar\`}
                loading="lazy"
                onError={e => {
                  const t = e.target;
                  t.style.display = 'none';
                }}
              />
              {showUserInfo && (
                <div className="pc-user-info">
                  <div className="pc-user-details">
                    <div className="pc-mini-avatar">
                      <img
                        src={miniAvatarUrl || avatarUrl}
                        alt={\`\${name || 'User'} mini avatar\`}
                        loading="lazy"
                        onError={e => {
                          const t = e.target;
                          t.style.opacity = '0.5';
                          t.src = avatarUrl;
                        }}
                      />
                    </div>
                    <div className="pc-user-text">
                      <div className="pc-handle">@{handle}</div>
                      <div className="pc-status">{status}</div>
                    </div>
                  </div>
                  <button
                    className="pc-contact-btn"
                    onClick={handleContactClick}
                    style={{ pointerEvents: 'auto' }}
                    type="button"
                    aria-label={\`Contact \${name || 'user'}\`}
                  >
                    {contactText}
                  </button>
                </div>
              )}
            </div>
            <div className="pc-content">
              <div className="pc-details">
                <h3>{name}</h3>
                <p>{title}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);
export default ProfileCard;
`,wn=`:root {
  --pointer-x: 50%;
  --pointer-y: 50%;
  --pointer-from-center: 0;
  --pointer-from-top: 0.5;
  --pointer-from-left: 0.5;
  --card-opacity: 0;
  --rotate-x: 0deg;
  --rotate-y: 0deg;
  --background-x: 50%;
  --background-y: 50%;
  --grain: none;
  --icon: none;
  --behind-gradient: none;
  --behind-glow-color: rgba(125, 190, 255, 0.67);
  --behind-glow-size: 25%;
  --inner-gradient: none;
  --sunpillar-1: hsl(2, 100%, 73%);
  --sunpillar-2: hsl(53, 100%, 69%);
  --sunpillar-3: hsl(93, 100%, 69%);
  --sunpillar-4: hsl(176, 100%, 76%);
  --sunpillar-5: hsl(228, 100%, 74%);
  --sunpillar-6: hsl(283, 100%, 73%);
  --sunpillar-clr-1: var(--sunpillar-1);
  --sunpillar-clr-2: var(--sunpillar-2);
  --sunpillar-clr-3: var(--sunpillar-3);
  --sunpillar-clr-4: var(--sunpillar-4);
  --sunpillar-clr-5: var(--sunpillar-5);
  --sunpillar-clr-6: var(--sunpillar-6);
  --card-radius: 30px;
}

.pc-card-wrapper {
  perspective: 500px;
  transform: translate3d(0, 0, 0.1px);
  position: relative;
  touch-action: none;
}

.pc-behind {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(
    circle at var(--pointer-x) var(--pointer-y),
    var(--behind-glow-color) 0%,
    transparent var(--behind-glow-size)
  );
  filter: blur(50px) saturate(1.1);
  opacity: calc(0.8 * var(--card-opacity));
  transition: opacity 200ms ease;
}

.pc-card-wrapper:hover,
.pc-card-wrapper.active {
  --card-opacity: 1;
}

.pc-card {
  height: 80svh;
  max-height: 540px;
  display: grid;
  aspect-ratio: 0.718;
  border-radius: var(--card-radius);
  position: relative;
  background-blend-mode: color-dodge, normal, normal, normal;
  animation: glow-bg 12s linear infinite;
  box-shadow: rgba(0, 0, 0, 0.8) calc((var(--pointer-from-left) * 10px) - 3px)
    calc((var(--pointer-from-top) * 20px) - 6px) 20px -5px;
  transition: transform 1s ease;
  transform: translateZ(0) rotateX(0deg) rotateY(0deg);
  background: rgba(0, 0, 0, 0.9);
  backface-visibility: hidden;
  overflow: hidden;
}

.pc-card:hover,
.pc-card.active {
  transition: none;
  transform: translateZ(0) rotateX(var(--rotate-y)) rotateY(var(--rotate-x));
}

.pc-card-shell.entering .pc-card {
  transition: transform 180ms ease-out;
}

.pc-card-shell {
  position: relative;
  z-index: 1;
}

.pc-card * {
  display: grid;
  grid-area: 1/-1;
  border-radius: var(--card-radius);
  pointer-events: none;
}

.pc-inside {
  inset: 0;
  position: absolute;
  background-image: var(--inner-gradient);
  background-color: rgba(0, 0, 0, 0.9);
  transform: none;
}

.pc-shine {
  mask-image: var(--icon);
  mask-mode: luminance;
  mask-repeat: repeat;
  mask-size: 150%;
  mask-position: top calc(200% - (var(--background-y) * 5)) left calc(100% - var(--background-x));
  transition: filter 0.8s ease;
  filter: brightness(0.66) contrast(1.33) saturate(0.33) opacity(0.5);
  animation: holo-bg 18s linear infinite;
  animation-play-state: running;
  mix-blend-mode: color-dodge;
}

.pc-shine,
.pc-shine::after {
  --space: 5%;
  --angle: -45deg;
  transform: translate3d(0, 0, 1px);
  overflow: hidden;
  z-index: 3;
  background: transparent;
  background-size: cover;
  background-position: center;
  background-image:
    repeating-linear-gradient(
      0deg,
      var(--sunpillar-clr-1) calc(var(--space) * 1),
      var(--sunpillar-clr-2) calc(var(--space) * 2),
      var(--sunpillar-clr-3) calc(var(--space) * 3),
      var(--sunpillar-clr-4) calc(var(--space) * 4),
      var(--sunpillar-clr-5) calc(var(--space) * 5),
      var(--sunpillar-clr-6) calc(var(--space) * 6),
      var(--sunpillar-clr-1) calc(var(--space) * 7)
    ),
    repeating-linear-gradient(
      var(--angle),
      #0e152e 0%,
      hsl(180, 10%, 60%) 3.8%,
      hsl(180, 29%, 66%) 4.5%,
      hsl(180, 10%, 60%) 5.2%,
      #0e152e 10%,
      #0e152e 12%
    ),
    radial-gradient(
      farthest-corner circle at var(--pointer-x) var(--pointer-y),
      hsla(0, 0%, 0%, 0.1) 12%,
      hsla(0, 0%, 0%, 0.15) 20%,
      hsla(0, 0%, 0%, 0.25) 120%
    );
  background-position:
    0 var(--background-y),
    var(--background-x) var(--background-y),
    center;
  background-blend-mode: color, hard-light;
  background-size:
    500% 500%,
    300% 300%,
    200% 200%;
  background-repeat: repeat;
}

.pc-shine::before,
.pc-shine::after {
  content: '';
  background-position: center;
  background-size: cover;
  grid-area: 1/1;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.pc-card:hover .pc-shine,
.pc-card.active .pc-shine {
  filter: brightness(0.85) contrast(1.5) saturate(0.5);
  animation-play-state: paused;
}

.pc-card:hover .pc-shine::before,
.pc-card.active .pc-shine::before,
.pc-card:hover .pc-shine::after,
.pc-card.active .pc-shine::after {
  opacity: 1;
}

.pc-shine::before {
  background-image:
    linear-gradient(
      45deg,
      var(--sunpillar-4),
      var(--sunpillar-5),
      var(--sunpillar-6),
      var(--sunpillar-1),
      var(--sunpillar-2),
      var(--sunpillar-3)
    ),
    radial-gradient(circle at var(--pointer-x) var(--pointer-y), hsl(0, 0%, 70%) 0%, hsla(0, 0%, 30%, 0.2) 90%),
    var(--grain);
  background-size:
    250% 250%,
    100% 100%,
    220px 220px;
  background-position:
    var(--pointer-x) var(--pointer-y),
    center,
    calc(var(--pointer-x) * 0.01) calc(var(--pointer-y) * 0.01);
  background-blend-mode: color-dodge;
  filter: brightness(calc(2 - var(--pointer-from-center))) contrast(calc(var(--pointer-from-center) + 2))
    saturate(calc(0.5 + var(--pointer-from-center)));
  mix-blend-mode: luminosity;
}

.pc-shine::after {
  background-position:
    0 var(--background-y),
    calc(var(--background-x) * 0.4) calc(var(--background-y) * 0.5),
    center;
  background-size:
    200% 300%,
    700% 700%,
    100% 100%;
  mix-blend-mode: difference;
  filter: brightness(0.8) contrast(1.5);
}

.pc-glare {
  transform: translate3d(0, 0, 1.1px);
  overflow: hidden;
  background-image: radial-gradient(
    farthest-corner circle at var(--pointer-x) var(--pointer-y),
    hsl(248, 25%, 80%) 12%,
    hsla(207, 40%, 30%, 0.8) 90%
  );
  mix-blend-mode: overlay;
  filter: brightness(0.8) contrast(1.2);
  z-index: 4;
}

.pc-avatar-content {
  mix-blend-mode: luminosity;
  overflow: visible;
  transform: translateZ(2);
  backface-visibility: hidden;
}

.pc-avatar-content .avatar {
  width: 100%;
  position: absolute;
  left: 50%;
  transform-origin: 50% 100%;
  transform: translateX(calc(-50% + (var(--pointer-from-left) - 0.5) * 6px)) translateZ(0)
    scaleY(calc(1 + (var(--pointer-from-top) - 0.5) * 0.02)) scaleX(calc(1 + (var(--pointer-from-left) - 0.5) * 0.01));
  bottom: -1px;
  backface-visibility: hidden;
  will-change: transform;
  transition: transform 120ms ease-out;
}

.pc-avatar-content::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  backdrop-filter: none;
  pointer-events: none;
}

.pc-user-info {
  position: absolute;
  --ui-inset: 20px;
  --ui-radius-bias: 6px;
  bottom: var(--ui-inset);
  left: var(--ui-inset);
  right: var(--ui-inset);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: calc(max(0px, var(--card-radius) - var(--ui-inset) + var(--ui-radius-bias)));
  padding: 12px 14px;
  pointer-events: auto;
}

.pc-user-details {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pc-mini-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}

.pc-mini-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.pc-user-text {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 6px;
}

.pc-handle {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1;
}

.pc-status {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1;
}

.pc-contact-btn {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
}

.pc-contact-btn:hover {
  border-color: rgba(255, 255, 255, 0.4);
  transform: translateY(-1px);
  transition: all 0.2s ease;
}

.pc-content:not(.pc-avatar-content) {
  max-height: 100%;
  overflow: hidden;
  text-align: center;
  position: relative;
  transform: translate3d(
    calc(var(--pointer-from-left) * -6px + 3px),
    calc(var(--pointer-from-top) * -6px + 3px),
    0.1px
  );
  z-index: 5;
  mix-blend-mode: luminosity;
}

.pc-details {
  width: 100%;
  position: absolute;
  top: 3em;
  display: flex;
  flex-direction: column;
}

.pc-details h3 {
  font-weight: 600;
  margin: 0;
  font-size: min(5svh, 3em);
  margin: 0;
  background-image: linear-gradient(to bottom, #fff, #6f6fbe);
  background-size: 1em 1.5em;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

.pc-details p {
  font-weight: 600;
  position: relative;
  top: -12px;
  white-space: nowrap;
  font-size: 16px;
  margin: 0 auto;
  width: min-content;
  background-image: linear-gradient(to bottom, #fff, #4a4ac0);
  background-size: 1em 1.5em;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}

@keyframes glow-bg {
  0% {
    --bgrotate: 0deg;
  }

  100% {
    --bgrotate: 360deg;
  }
}

@keyframes holo-bg {
  0% {
    background-position:
      0 var(--background-y),
      0 0,
      center;
  }

  100% {
    background-position:
      0 var(--background-y),
      90% 90%,
      center;
  }
}

@media (max-width: 768px) {
  .pc-card {
    height: 70svh;
    max-height: 450px;
  }

  .pc-details {
    top: 2em;
  }

  .pc-details h3 {
    font-size: min(4svh, 2.5em);
  }

  .pc-details p {
    font-size: 14px;
  }

  .pc-user-info {
    --ui-inset: 15px;
    padding: 10px 12px;
  }

  .pc-mini-avatar {
    width: 28px;
    height: 28px;
  }

  .pc-user-details {
    gap: 10px;
  }

  .pc-handle {
    font-size: 13px;
  }

  .pc-status {
    font-size: 10px;
  }

  .pc-contact-btn {
    padding: 6px 12px;
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .pc-card {
    height: 60svh;
    max-height: 380px;
  }

  .pc-details {
    top: 1.5em;
  }

  .pc-details h3 {
    font-size: min(3.5svh, 2em);
  }

  .pc-details p {
    font-size: 12px;
    top: -8px;
  }

  .pc-user-info {
    --ui-inset: 12px;
    padding: 8px 10px;
  }

  .pc-mini-avatar {
    width: 24px;
    height: 24px;
  }

  .pc-user-details {
    gap: 8px;
  }

  .pc-handle {
    font-size: 12px;
  }

  .pc-status {
    font-size: 9px;
  }

  .pc-contact-btn {
    padding: 5px 10px;
    font-size: 10px;
    border-radius: 50px;
  }
}

@media (max-width: 320px) {
  .pc-card {
    height: 55svh;
    max-height: 320px;
  }

  .pc-details h3 {
    font-size: min(3svh, 1.5em);
  }

  .pc-details p {
    font-size: 11px;
  }

  .pc-user-info {
    padding: 6px 8px;
  }

  .pc-mini-avatar {
    width: 20px;
    height: 20px;
  }

  .pc-user-details {
    gap: 6px;
  }

  .pc-handle {
    font-size: 11px;
  }

  .pc-status {
    font-size: 8px;
  }

  .pc-contact-btn {
    padding: 4px 8px;
    font-size: 9px;
    border-radius: 50px;
  }
}
`,kn=`import React, { useEffect, useRef, useCallback, useMemo } from 'react';

const DEFAULT_INNER_GRADIENT = 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)';

const ANIMATION_CONFIG = {
  INITIAL_DURATION: 1200,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20,
  ENTER_TRANSITION_MS: 180
};

const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);
const round = (v, precision = 3) => parseFloat(v.toFixed(precision));
const adjust = (v, fMin, fMax, tMin, tMax) => round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

// Inject keyframes once
const KEYFRAMES_ID = 'pc-keyframes';
if (typeof document !== 'undefined' && !document.getElementById(KEYFRAMES_ID)) {
  const style = document.createElement('style');
  style.id = KEYFRAMES_ID;
  style.textContent = \`
    @keyframes pc-holo-bg {
      0% { background-position: 0 var(--background-y), 0 0, center; }
      100% { background-position: 0 var(--background-y), 90% 90%, center; }
    }
  \`;
  document.head.appendChild(style);
}

const ProfileCardComponent = ({
  avatarUrl = '<Placeholder for avatar URL>',
  iconUrl = '<Placeholder for icon URL>',
  grainUrl = '<Placeholder for grain URL>',
  innerGradient,
  behindGlowEnabled = true,
  behindGlowColor,
  behindGlowSize,
  className = '',
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  name = 'Javi A. Torres',
  title = 'Software Engineer',
  handle = 'javicodes',
  status = 'Online',
  contactText = 'Contact',
  showUserInfo = true,
  onContactClick
}) => {
  const wrapRef = useRef(null);
  const shellRef = useRef(null);

  const enterTimerRef = useRef(null);
  const leaveRafRef = useRef(null);

  const tiltEngine = useMemo(() => {
    if (!enableTilt) return null;

    let rafId = null;
    let running = false;
    let lastTs = 0;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const DEFAULT_TAU = 0.14;
    const INITIAL_TAU = 0.6;
    let initialUntil = 0;

    const setVarsFromXY = (x, y) => {
      const shell = shellRef.current;
      const wrap = wrapRef.current;
      if (!shell || !wrap) return;

      const width = shell.clientWidth || 1;
      const height = shell.clientHeight || 1;

      const percentX = clamp((100 / width) * x);
      const percentY = clamp((100 / height) * y);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        '--pointer-x': \`\${percentX}%\`,
        '--pointer-y': \`\${percentY}%\`,
        '--background-x': \`\${adjust(percentX, 0, 100, 35, 65)}%\`,
        '--background-y': \`\${adjust(percentY, 0, 100, 35, 65)}%\`,
        '--pointer-from-center': \`\${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}\`,
        '--pointer-from-top': \`\${percentY / 100}\`,
        '--pointer-from-left': \`\${percentX / 100}\`,
        '--rotate-x': \`\${round(-(centerX / 5))}deg\`,
        '--rotate-y': \`\${round(centerY / 4)}deg\`
      };

      for (const [k, v] of Object.entries(properties)) wrap.style.setProperty(k, v);
    };

    const step = ts => {
      if (!running) return;
      if (lastTs === 0) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      const tau = ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU;
      const k = 1 - Math.exp(-dt / tau);

      currentX += (targetX - currentX) * k;
      currentY += (targetY - currentY) * k;

      setVarsFromXY(currentX, currentY);

      const stillFar = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;

      if (stillFar || document.hasFocus()) {
        rafId = requestAnimationFrame(step);
      } else {
        running = false;
        lastTs = 0;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      lastTs = 0;
      rafId = requestAnimationFrame(step);
    };

    return {
      setImmediate(x, y) {
        currentX = x;
        currentY = y;
        setVarsFromXY(currentX, currentY);
      },
      setTarget(x, y) {
        targetX = x;
        targetY = y;
        start();
      },
      toCenter() {
        const shell = shellRef.current;
        if (!shell) return;
        this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
      },
      beginInitial(durationMs) {
        initialUntil = performance.now() + durationMs;
        start();
      },
      getCurrent() {
        return { x: currentX, y: currentY, tx: targetX, ty: targetY };
      },
      cancel() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        running = false;
        lastTs = 0;
      }
    };
  }, [enableTilt]);

  const getOffsets = (evt, el) => {
    const rect = el.getBoundingClientRect();
    return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
  };

  const handlePointerMove = useCallback(
    event => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;
      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine]
  );

  const handlePointerEnter = useCallback(
    event => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;

      shell.classList.add('active');
      shell.classList.add('entering');
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      enterTimerRef.current = window.setTimeout(() => {
        shell.classList.remove('entering');
      }, ANIMATION_CONFIG.ENTER_TRANSITION_MS);

      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine]
  );

  const handlePointerLeave = useCallback(() => {
    const shell = shellRef.current;
    if (!shell || !tiltEngine) return;

    tiltEngine.toCenter();

    const checkSettle = () => {
      const { x, y, tx, ty } = tiltEngine.getCurrent();
      const settled = Math.hypot(tx - x, ty - y) < 0.6;
      if (settled) {
        shell.classList.remove('active');
        leaveRafRef.current = null;
      } else {
        leaveRafRef.current = requestAnimationFrame(checkSettle);
      }
    };
    if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
    leaveRafRef.current = requestAnimationFrame(checkSettle);
  }, [tiltEngine]);

  const handleDeviceOrientation = useCallback(
    event => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;

      const { beta, gamma } = event;
      if (beta == null || gamma == null) return;

      const centerX = shell.clientWidth / 2;
      const centerY = shell.clientHeight / 2;
      const x = clamp(centerX + gamma * mobileTiltSensitivity, 0, shell.clientWidth);
      const y = clamp(
        centerY + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
        0,
        shell.clientHeight
      );

      tiltEngine.setTarget(x, y);
    },
    [tiltEngine, mobileTiltSensitivity]
  );

  useEffect(() => {
    if (!enableTilt || !tiltEngine) return;

    const shell = shellRef.current;
    if (!shell) return;

    const pointerMoveHandler = handlePointerMove;
    const pointerEnterHandler = handlePointerEnter;
    const pointerLeaveHandler = handlePointerLeave;
    const deviceOrientationHandler = handleDeviceOrientation;

    shell.addEventListener('pointerenter', pointerEnterHandler);
    shell.addEventListener('pointermove', pointerMoveHandler);
    shell.addEventListener('pointerleave', pointerLeaveHandler);

    const handleClick = () => {
      if (!enableMobileTilt || location.protocol !== 'https:') return;
      const anyMotion = window.DeviceMotionEvent;
      if (anyMotion && typeof anyMotion.requestPermission === 'function') {
        anyMotion
          .requestPermission()
          .then(state => {
            if (state === 'granted') {
              window.addEventListener('deviceorientation', deviceOrientationHandler);
            }
          })
          .catch(console.error);
      } else {
        window.addEventListener('deviceorientation', deviceOrientationHandler);
      }
    };
    shell.addEventListener('click', handleClick);

    const initialX = (shell.clientWidth || 0) - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
    tiltEngine.setImmediate(initialX, initialY);
    tiltEngine.toCenter();
    tiltEngine.beginInitial(ANIMATION_CONFIG.INITIAL_DURATION);

    return () => {
      shell.removeEventListener('pointerenter', pointerEnterHandler);
      shell.removeEventListener('pointermove', pointerMoveHandler);
      shell.removeEventListener('pointerleave', pointerLeaveHandler);
      shell.removeEventListener('click', handleClick);
      window.removeEventListener('deviceorientation', deviceOrientationHandler);
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
      tiltEngine.cancel();
      shell.classList.remove('entering');
    };
  }, [
    enableTilt,
    enableMobileTilt,
    tiltEngine,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
    handleDeviceOrientation
  ]);

  const cardRadius = '30px';

  const cardStyle = useMemo(
    () => ({
      '--icon': iconUrl ? \`url(\${iconUrl})\` : 'none',
      '--grain': grainUrl ? \`url(\${grainUrl})\` : 'none',
      '--inner-gradient': innerGradient ?? DEFAULT_INNER_GRADIENT,
      '--behind-glow-color': behindGlowColor ?? 'rgba(125, 190, 255, 0.67)',
      '--behind-glow-size': behindGlowSize ?? '50%',
      '--pointer-x': '50%',
      '--pointer-y': '50%',
      '--pointer-from-center': '0',
      '--pointer-from-top': '0.5',
      '--pointer-from-left': '0.5',
      '--card-opacity': '0',
      '--rotate-x': '0deg',
      '--rotate-y': '0deg',
      '--background-x': '50%',
      '--background-y': '50%',
      '--card-radius': cardRadius,
      '--sunpillar-1': 'hsl(2, 100%, 73%)',
      '--sunpillar-2': 'hsl(53, 100%, 69%)',
      '--sunpillar-3': 'hsl(93, 100%, 69%)',
      '--sunpillar-4': 'hsl(176, 100%, 76%)',
      '--sunpillar-5': 'hsl(228, 100%, 74%)',
      '--sunpillar-6': 'hsl(283, 100%, 73%)',
      '--sunpillar-clr-1': 'var(--sunpillar-1)',
      '--sunpillar-clr-2': 'var(--sunpillar-2)',
      '--sunpillar-clr-3': 'var(--sunpillar-3)',
      '--sunpillar-clr-4': 'var(--sunpillar-4)',
      '--sunpillar-clr-5': 'var(--sunpillar-5)',
      '--sunpillar-clr-6': 'var(--sunpillar-6)'
    }),
    [iconUrl, grainUrl, innerGradient, behindGlowColor, behindGlowSize, cardRadius]
  );

  const handleContactClick = useCallback(() => {
    onContactClick?.();
  }, [onContactClick]);

  // Complex styles that require CSS variables and can't be done with Tailwind
  const shineStyle = {
    maskImage: 'var(--icon)',
    maskMode: 'luminance',
    maskRepeat: 'repeat',
    maskSize: '150%',
    maskPosition: 'top calc(200% - (var(--background-y) * 5)) left calc(100% - var(--background-x))',
    filter: 'brightness(0.66) contrast(1.33) saturate(0.33) opacity(0.5)',
    animation: 'pc-holo-bg 18s linear infinite',
    animationPlayState: 'running',
    mixBlendMode: 'color-dodge',
    '--space': '5%',
    '--angle': '-45deg',
    transform: 'translate3d(0, 0, 1px)',
    overflow: 'hidden',
    zIndex: 3,
    background: 'transparent',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: \`
      repeating-linear-gradient(
        0deg,
        var(--sunpillar-clr-1) calc(var(--space) * 1),
        var(--sunpillar-clr-2) calc(var(--space) * 2),
        var(--sunpillar-clr-3) calc(var(--space) * 3),
        var(--sunpillar-clr-4) calc(var(--space) * 4),
        var(--sunpillar-clr-5) calc(var(--space) * 5),
        var(--sunpillar-clr-6) calc(var(--space) * 6),
        var(--sunpillar-clr-1) calc(var(--space) * 7)
      ),
      repeating-linear-gradient(
        var(--angle),
        #0e152e 0%,
        hsl(180, 10%, 60%) 3.8%,
        hsl(180, 29%, 66%) 4.5%,
        hsl(180, 10%, 60%) 5.2%,
        #0e152e 10%,
        #0e152e 12%
      ),
      radial-gradient(
        farthest-corner circle at var(--pointer-x) var(--pointer-y),
        hsla(0, 0%, 0%, 0.1) 12%,
        hsla(0, 0%, 0%, 0.15) 20%,
        hsla(0, 0%, 0%, 0.25) 120%
      )
    \`.replace(/\\s+/g, ' '),
    gridArea: '1 / -1',
    borderRadius: cardRadius,
    pointerEvents: 'none'
  };

  const glareStyle = {
    transform: 'translate3d(0, 0, 1.1px)',
    overflow: 'hidden',
    backgroundImage: \`radial-gradient(
      farthest-corner circle at var(--pointer-x) var(--pointer-y),
      hsl(248, 25%, 80%) 12%,
      hsla(207, 40%, 30%, 0.8) 90%
    )\`,
    mixBlendMode: 'overlay',
    filter: 'brightness(0.8) contrast(1.2)',
    zIndex: 4,
    gridArea: '1 / -1',
    borderRadius: cardRadius,
    pointerEvents: 'none'
  };

  return (
    <div
      ref={wrapRef}
      className={\`relative touch-none \${className}\`.trim()}
      style={{ perspective: '500px', transform: 'translate3d(0, 0, 0.1px)', ...cardStyle }}
    >
      {behindGlowEnabled && (
        <div
          className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-200 ease-out"
          style={{
            background: \`radial-gradient(circle at var(--pointer-x) var(--pointer-y), var(--behind-glow-color) 0%, transparent var(--behind-glow-size))\`,
            filter: 'blur(50px) saturate(1.1)',
            opacity: 'calc(0.8 * var(--card-opacity))'
          }}
        />
      )}
      <div ref={shellRef} className="relative z-[1] group">
        <section
          className="grid relative overflow-hidden backface-hidden"
          style={{
            height: '80svh',
            maxHeight: '540px',
            aspectRatio: '0.718',
            borderRadius: cardRadius,
            backgroundBlendMode: 'color-dodge, normal, normal, normal',
            boxShadow:
              'rgba(0, 0, 0, 0.8) calc((var(--pointer-from-left) * 10px) - 3px) calc((var(--pointer-from-top) * 20px) - 6px) 20px -5px',
            transition: 'transform 1s ease',
            transform: 'translateZ(0) rotateX(0deg) rotateY(0deg)',
            background: 'rgba(0, 0, 0, 0.9)'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transition = 'none';
            e.currentTarget.style.transform = 'translateZ(0) rotateX(var(--rotate-y)) rotateY(var(--rotate-x))';
          }}
          onMouseLeave={e => {
            const shell = shellRef.current;
            if (shell?.classList.contains('entering')) {
              e.currentTarget.style.transition = 'transform 180ms ease-out';
            } else {
              e.currentTarget.style.transition = 'transform 1s ease';
            }
            e.currentTarget.style.transform = 'translateZ(0) rotateX(0deg) rotateY(0deg)';
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'var(--inner-gradient)',
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              borderRadius: cardRadius,
              display: 'grid',
              gridArea: '1 / -1'
            }}
          >
            {/* Shine layer */}
            <div style={shineStyle} />

            {/* Glare layer */}
            <div style={glareStyle} />

            {/* Avatar content */}
            <div
              className="overflow-visible backface-hidden"
              style={{
                mixBlendMode: 'luminosity',
                transform: 'translateZ(2px)',
                gridArea: '1 / -1',
                borderRadius: cardRadius,
                pointerEvents: 'none'
              }}
            >
              <img
                className="w-full absolute left-1/2 bottom-[-1px] backface-hidden will-change-transform transition-transform duration-[120ms] ease-out"
                src={avatarUrl}
                alt={\`\${name || 'User'} avatar\`}
                loading="lazy"
                style={{
                  transformOrigin: '50% 100%',
                  transform:
                    'translateX(calc(-50% + (var(--pointer-from-left) - 0.5) * 6px)) translateZ(0) scaleY(calc(1 + (var(--pointer-from-top) - 0.5) * 0.02)) scaleX(calc(1 + (var(--pointer-from-left) - 0.5) * 0.01))',
                  borderRadius: cardRadius
                }}
                onError={e => {
                  const t = e.target;
                  t.style.display = 'none';
                }}
              />
              {showUserInfo && (
                <div
                  className="absolute z-[2] flex items-center justify-between backdrop-blur-[30px] border border-white/10 pointer-events-auto"
                  style={{
                    '--ui-inset': '20px',
                    '--ui-radius-bias': '6px',
                    bottom: 'var(--ui-inset)',
                    left: 'var(--ui-inset)',
                    right: 'var(--ui-inset)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 'calc(max(0px, var(--card-radius) - var(--ui-inset) + var(--ui-radius-bias)))',
                    padding: '12px 14px'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="rounded-full overflow-hidden border border-white/10 flex-shrink-0"
                      style={{ width: '48px', height: '48px' }}
                    >
                      <img
                        className="w-full h-full object-cover rounded-full"
                        src={miniAvatarUrl || avatarUrl}
                        alt={\`\${name || 'User'} mini avatar\`}
                        loading="lazy"
                        style={{ display: 'block', gridArea: 'auto', borderRadius: '50%', pointerEvents: 'auto' }}
                        onError={e => {
                          const t = e.target;
                          t.style.opacity = '0.5';
                          t.src = avatarUrl;
                        }}
                      />
                    </div>
                    <div className="flex flex-col items-start gap-1.5">
                      <div className="text-sm font-medium text-white/90 leading-none">@{handle}</div>
                      <div className="text-sm text-white/70 leading-none">{status}</div>
                    </div>
                  </div>
                  <button
                    className="border border-white/10 rounded-lg px-4 py-3 text-xs font-semibold text-white/90 cursor-pointer backdrop-blur-[10px] transition-all duration-200 ease-out hover:border-white/40 hover:-translate-y-px"
                    onClick={handleContactClick}
                    style={{ pointerEvents: 'auto', display: 'block', gridArea: 'auto', borderRadius: '8px' }}
                    type="button"
                    aria-label={\`Contact \${name || 'user'}\`}
                  >
                    {contactText}
                  </button>
                </div>
              )}
            </div>

            {/* Details content */}
            <div
              className="max-h-full overflow-hidden text-center relative z-[5]"
              style={{
                transform:
                  'translate3d(calc(var(--pointer-from-left) * -6px + 3px), calc(var(--pointer-from-top) * -6px + 3px), 0.1px)',
                mixBlendMode: 'luminosity',
                gridArea: '1 / -1',
                borderRadius: cardRadius,
                pointerEvents: 'none'
              }}
            >
              <div className="w-full absolute flex flex-col" style={{ top: '3em', display: 'flex', gridArea: 'auto' }}>
                <h3
                  className="font-semibold m-0"
                  style={{
                    fontSize: 'min(5svh, 3em)',
                    backgroundImage: 'linear-gradient(to bottom, #fff, #6f6fbe)',
                    backgroundSize: '1em 1.5em',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    display: 'block',
                    gridArea: 'auto',
                    borderRadius: '0',
                    pointerEvents: 'auto'
                  }}
                >
                  {name}
                </h3>
                <p
                  className="font-semibold whitespace-nowrap mx-auto w-min"
                  style={{
                    position: 'relative',
                    top: '-12px',
                    fontSize: '16px',
                    margin: '0 auto',
                    backgroundImage: 'linear-gradient(to bottom, #fff, #4a4ac0)',
                    backgroundSize: '1em 1.5em',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    display: 'block',
                    gridArea: 'auto',
                    borderRadius: '0',
                    pointerEvents: 'auto'
                  }}
                >
                  {title}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);
export default ProfileCard;
`,Nn=`import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  avatarUrl: string;
  iconUrl?: string;
  grainUrl?: string;
  innerGradient?: string;
  behindGlowEnabled?: boolean;
  behindGlowColor?: string;
  behindGlowSize?: string;
  className?: string;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  mobileTiltSensitivity?: number;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  onContactClick?: () => void;
}

const DEFAULT_INNER_GRADIENT = 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)';

const ANIMATION_CONFIG = {
  INITIAL_DURATION: 1200,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20,
  ENTER_TRANSITION_MS: 180
} as const;

const clamp = (v: number, min = 0, max = 100): number => Math.min(Math.max(v, min), max);
const round = (v: number, precision = 3): number => parseFloat(v.toFixed(precision));
const adjust = (v: number, fMin: number, fMax: number, tMin: number, tMax: number): number =>
  round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

const ProfileCardComponent: React.FC<ProfileCardProps> = ({
  avatarUrl = '<Placeholder for avatar URL>',
  iconUrl = '<Placeholder for icon URL>',
  grainUrl = '<Placeholder for grain URL>',
  innerGradient,
  behindGlowEnabled = true,
  behindGlowColor,
  behindGlowSize,
  className = '',
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  name = 'Javi A. Torres',
  title = 'Software Engineer',
  handle = 'javicodes',
  status = 'Online',
  contactText = 'Contact',
  showUserInfo = true,
  onContactClick
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  const enterTimerRef = useRef<number | null>(null);
  const leaveRafRef = useRef<number | null>(null);

  const tiltEngine = useMemo(() => {
    if (!enableTilt) return null;

    let rafId: number | null = null;
    let running = false;
    let lastTs = 0;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const DEFAULT_TAU = 0.14;
    const INITIAL_TAU = 0.6;
    let initialUntil = 0;

    const setVarsFromXY = (x: number, y: number) => {
      const shell = shellRef.current;
      const wrap = wrapRef.current;
      if (!shell || !wrap) return;

      const width = shell.clientWidth || 1;
      const height = shell.clientHeight || 1;

      const percentX = clamp((100 / width) * x);
      const percentY = clamp((100 / height) * y);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        '--pointer-x': \`\${percentX}%\`,
        '--pointer-y': \`\${percentY}%\`,
        '--background-x': \`\${adjust(percentX, 0, 100, 35, 65)}%\`,
        '--background-y': \`\${adjust(percentY, 0, 100, 35, 65)}%\`,
        '--pointer-from-center': \`\${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}\`,
        '--pointer-from-top': \`\${percentY / 100}\`,
        '--pointer-from-left': \`\${percentX / 100}\`,
        '--rotate-x': \`\${round(-(centerX / 5))}deg\`,
        '--rotate-y': \`\${round(centerY / 4)}deg\`
      } as Record<string, string>;

      for (const [k, v] of Object.entries(properties)) wrap.style.setProperty(k, v);
    };

    const step = (ts: number) => {
      if (!running) return;
      if (lastTs === 0) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      const tau = ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU;
      const k = 1 - Math.exp(-dt / tau);

      currentX += (targetX - currentX) * k;
      currentY += (targetY - currentY) * k;

      setVarsFromXY(currentX, currentY);

      const stillFar = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;

      if (stillFar || document.hasFocus()) {
        rafId = requestAnimationFrame(step);
      } else {
        running = false;
        lastTs = 0;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      lastTs = 0;
      rafId = requestAnimationFrame(step);
    };

    return {
      setImmediate(x: number, y: number) {
        currentX = x;
        currentY = y;
        setVarsFromXY(currentX, currentY);
      },
      setTarget(x: number, y: number) {
        targetX = x;
        targetY = y;
        start();
      },
      toCenter() {
        const shell = shellRef.current;
        if (!shell) return;
        this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
      },
      beginInitial(durationMs: number) {
        initialUntil = performance.now() + durationMs;
        start();
      },
      getCurrent() {
        return { x: currentX, y: currentY, tx: targetX, ty: targetY };
      },
      cancel() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        running = false;
        lastTs = 0;
      }
    };
  }, [enableTilt]);

  const getOffsets = (evt: PointerEvent, el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
  };

  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;
      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine]
  );

  const handlePointerEnter = useCallback(
    (event: PointerEvent) => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;

      shell.classList.add('active');
      shell.classList.add('entering');
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      enterTimerRef.current = window.setTimeout(() => {
        shell.classList.remove('entering');
      }, ANIMATION_CONFIG.ENTER_TRANSITION_MS);

      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine]
  );

  const handlePointerLeave = useCallback(() => {
    const shell = shellRef.current;
    if (!shell || !tiltEngine) return;

    tiltEngine.toCenter();

    const checkSettle = () => {
      const { x, y, tx, ty } = tiltEngine.getCurrent();
      const settled = Math.hypot(tx - x, ty - y) < 0.6;
      if (settled) {
        shell.classList.remove('active');
        leaveRafRef.current = null;
      } else {
        leaveRafRef.current = requestAnimationFrame(checkSettle);
      }
    };
    if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
    leaveRafRef.current = requestAnimationFrame(checkSettle);
  }, [tiltEngine]);

  const handleDeviceOrientation = useCallback(
    (event: DeviceOrientationEvent) => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;

      const { beta, gamma } = event;
      if (beta == null || gamma == null) return;

      const centerX = shell.clientWidth / 2;
      const centerY = shell.clientHeight / 2;
      const x = clamp(centerX + gamma * mobileTiltSensitivity, 0, shell.clientWidth);
      const y = clamp(
        centerY + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
        0,
        shell.clientHeight
      );

      tiltEngine.setTarget(x, y);
    },
    [tiltEngine, mobileTiltSensitivity]
  );

  useEffect(() => {
    if (!enableTilt || !tiltEngine) return;

    const shell = shellRef.current;
    if (!shell) return;

    const pointerMoveHandler = handlePointerMove as EventListener;
    const pointerEnterHandler = handlePointerEnter as EventListener;
    const pointerLeaveHandler = handlePointerLeave as EventListener;
    const deviceOrientationHandler = handleDeviceOrientation as EventListener;

    shell.addEventListener('pointerenter', pointerEnterHandler);
    shell.addEventListener('pointermove', pointerMoveHandler);
    shell.addEventListener('pointerleave', pointerLeaveHandler);

    const handleClick = () => {
      if (!enableMobileTilt || location.protocol !== 'https:') return;
      const anyMotion = window.DeviceMotionEvent as any;
      if (anyMotion && typeof anyMotion.requestPermission === 'function') {
        anyMotion
          .requestPermission()
          .then((state: string) => {
            if (state === 'granted') {
              window.addEventListener('deviceorientation', deviceOrientationHandler);
            }
          })
          .catch(console.error);
      } else {
        window.addEventListener('deviceorientation', deviceOrientationHandler);
      }
    };
    shell.addEventListener('click', handleClick);

    const initialX = (shell.clientWidth || 0) - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
    tiltEngine.setImmediate(initialX, initialY);
    tiltEngine.toCenter();
    tiltEngine.beginInitial(ANIMATION_CONFIG.INITIAL_DURATION);

    return () => {
      shell.removeEventListener('pointerenter', pointerEnterHandler);
      shell.removeEventListener('pointermove', pointerMoveHandler);
      shell.removeEventListener('pointerleave', pointerLeaveHandler);
      shell.removeEventListener('click', handleClick);
      window.removeEventListener('deviceorientation', deviceOrientationHandler);
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
      tiltEngine.cancel();
      shell.classList.remove('entering');
    };
  }, [
    enableTilt,
    enableMobileTilt,
    tiltEngine,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
    handleDeviceOrientation
  ]);

  const cardStyle = useMemo(
    () =>
      ({
        '--icon': iconUrl ? \`url(\${iconUrl})\` : 'none',
        '--grain': grainUrl ? \`url(\${grainUrl})\` : 'none',
        '--inner-gradient': innerGradient ?? DEFAULT_INNER_GRADIENT,
        '--behind-glow-color': behindGlowColor ?? 'rgba(125, 190, 255, 0.67)',
        '--behind-glow-size': behindGlowSize ?? '50%'
      }) as React.CSSProperties,
    [iconUrl, grainUrl, innerGradient, behindGlowColor, behindGlowSize]
  );

  const handleContactClick = useCallback(() => {
    onContactClick?.();
  }, [onContactClick]);

  return (
    <div ref={wrapRef} className={\`pc-card-wrapper \${className}\`.trim()} style={cardStyle}>
      {behindGlowEnabled && <div className="pc-behind" />}
      <div ref={shellRef} className="pc-card-shell">
        <section className="pc-card">
          <div className="pc-inside">
            <div className="pc-shine" />
            <div className="pc-glare" />
            <div className="pc-content pc-avatar-content">
              <img
                className="avatar"
                src={avatarUrl}
                alt={\`\${name || 'User'} avatar\`}
                loading="lazy"
                onError={e => {
                  const t = e.target as HTMLImageElement;
                  t.style.display = 'none';
                }}
              />
              {showUserInfo && (
                <div className="pc-user-info">
                  <div className="pc-user-details">
                    <div className="pc-mini-avatar">
                      <img
                        src={miniAvatarUrl || avatarUrl}
                        alt={\`\${name || 'User'} mini avatar\`}
                        loading="lazy"
                        onError={e => {
                          const t = e.target as HTMLImageElement;
                          t.style.opacity = '0.5';
                          t.src = avatarUrl;
                        }}
                      />
                    </div>
                    <div className="pc-user-text">
                      <div className="pc-handle">@{handle}</div>
                      <div className="pc-status">{status}</div>
                    </div>
                  </div>
                  <button
                    className="pc-contact-btn"
                    onClick={handleContactClick}
                    style={{ pointerEvents: 'auto' }}
                    type="button"
                    aria-label={\`Contact \${name || 'user'}\`}
                  >
                    {contactText}
                  </button>
                </div>
              )}
            </div>
            <div className="pc-content">
              <div className="pc-details">
                <h3>{name}</h3>
                <p>{title}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);
export default ProfileCard;
`,Cn=`import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';

const DEFAULT_INNER_GRADIENT = 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)';

const ANIMATION_CONFIG = {
  INITIAL_DURATION: 1200,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20,
  ENTER_TRANSITION_MS: 180
} as const;

const clamp = (v: number, min = 0, max = 100): number => Math.min(Math.max(v, min), max);
const round = (v: number, precision = 3): number => parseFloat(v.toFixed(precision));
const adjust = (v: number, fMin: number, fMax: number, tMin: number, tMax: number): number =>
  round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

// Inject keyframes once
const KEYFRAMES_ID = 'pc-keyframes';
if (typeof document !== 'undefined' && !document.getElementById(KEYFRAMES_ID)) {
  const style = document.createElement('style');
  style.id = KEYFRAMES_ID;
  style.textContent = \`
    @keyframes pc-holo-bg {
      0% { background-position: 0 var(--background-y), 0 0, center; }
      100% { background-position: 0 var(--background-y), 90% 90%, center; }
    }
  \`;
  document.head.appendChild(style);
}

interface ProfileCardProps {
  avatarUrl?: string;
  iconUrl?: string;
  grainUrl?: string;
  innerGradient?: string;
  behindGlowEnabled?: boolean;
  behindGlowColor?: string;
  behindGlowSize?: string;
  className?: string;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  mobileTiltSensitivity?: number;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  onContactClick?: () => void;
}

interface TiltEngine {
  setImmediate: (x: number, y: number) => void;
  setTarget: (x: number, y: number) => void;
  toCenter: () => void;
  beginInitial: (durationMs: number) => void;
  getCurrent: () => { x: number; y: number; tx: number; ty: number };
  cancel: () => void;
}

const ProfileCardComponent: React.FC<ProfileCardProps> = ({
  avatarUrl = '<Placeholder for avatar URL>',
  iconUrl = '<Placeholder for icon URL>',
  grainUrl = '<Placeholder for grain URL>',
  innerGradient,
  behindGlowEnabled = true,
  behindGlowColor,
  behindGlowSize,
  className = '',
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  name = 'Javi A. Torres',
  title = 'Software Engineer',
  handle = 'javicodes',
  status = 'Online',
  contactText = 'Contact',
  showUserInfo = true,
  onContactClick
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  const enterTimerRef = useRef<number | null>(null);
  const leaveRafRef = useRef<number | null>(null);

  const tiltEngine = useMemo<TiltEngine | null>(() => {
    if (!enableTilt) return null;

    let rafId: number | null = null;
    let running = false;
    let lastTs = 0;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const DEFAULT_TAU = 0.14;
    const INITIAL_TAU = 0.6;
    let initialUntil = 0;

    const setVarsFromXY = (x: number, y: number): void => {
      const shell = shellRef.current;
      const wrap = wrapRef.current;
      if (!shell || !wrap) return;

      const width = shell.clientWidth || 1;
      const height = shell.clientHeight || 1;

      const percentX = clamp((100 / width) * x);
      const percentY = clamp((100 / height) * y);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties: Record<string, string> = {
        '--pointer-x': \`\${percentX}%\`,
        '--pointer-y': \`\${percentY}%\`,
        '--background-x': \`\${adjust(percentX, 0, 100, 35, 65)}%\`,
        '--background-y': \`\${adjust(percentY, 0, 100, 35, 65)}%\`,
        '--pointer-from-center': \`\${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}\`,
        '--pointer-from-top': \`\${percentY / 100}\`,
        '--pointer-from-left': \`\${percentX / 100}\`,
        '--rotate-x': \`\${round(-(centerX / 5))}deg\`,
        '--rotate-y': \`\${round(centerY / 4)}deg\`
      };

      for (const [k, v] of Object.entries(properties)) wrap.style.setProperty(k, v);
    };

    const step = (ts: number): void => {
      if (!running) return;
      if (lastTs === 0) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      const tau = ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU;
      const k = 1 - Math.exp(-dt / tau);

      currentX += (targetX - currentX) * k;
      currentY += (targetY - currentY) * k;

      setVarsFromXY(currentX, currentY);

      const stillFar = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;

      if (stillFar || document.hasFocus()) {
        rafId = requestAnimationFrame(step);
      } else {
        running = false;
        lastTs = 0;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };

    const start = (): void => {
      if (running) return;
      running = true;
      lastTs = 0;
      rafId = requestAnimationFrame(step);
    };

    return {
      setImmediate(x: number, y: number): void {
        currentX = x;
        currentY = y;
        setVarsFromXY(currentX, currentY);
      },
      setTarget(x: number, y: number): void {
        targetX = x;
        targetY = y;
        start();
      },
      toCenter(): void {
        const shell = shellRef.current;
        if (!shell) return;
        this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
      },
      beginInitial(durationMs: number): void {
        initialUntil = performance.now() + durationMs;
        start();
      },
      getCurrent(): { x: number; y: number; tx: number; ty: number } {
        return { x: currentX, y: currentY, tx: targetX, ty: targetY };
      },
      cancel(): void {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        running = false;
        lastTs = 0;
      }
    };
  }, [enableTilt]);

  const getOffsets = (evt: PointerEvent, el: HTMLElement): { x: number; y: number } => {
    const rect = el.getBoundingClientRect();
    return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
  };

  const handlePointerMove = useCallback(
    (event: PointerEvent): void => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;
      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine]
  );

  const handlePointerEnter = useCallback(
    (event: PointerEvent): void => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;

      shell.classList.add('active');
      shell.classList.add('entering');
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      enterTimerRef.current = window.setTimeout(() => {
        shell.classList.remove('entering');
      }, ANIMATION_CONFIG.ENTER_TRANSITION_MS);

      const { x, y } = getOffsets(event, shell);
      tiltEngine.setTarget(x, y);
    },
    [tiltEngine]
  );

  const handlePointerLeave = useCallback((): void => {
    const shell = shellRef.current;
    if (!shell || !tiltEngine) return;

    tiltEngine.toCenter();

    const checkSettle = (): void => {
      const { x, y, tx, ty } = tiltEngine.getCurrent();
      const settled = Math.hypot(tx - x, ty - y) < 0.6;
      if (settled) {
        shell.classList.remove('active');
        leaveRafRef.current = null;
      } else {
        leaveRafRef.current = requestAnimationFrame(checkSettle);
      }
    };
    if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
    leaveRafRef.current = requestAnimationFrame(checkSettle);
  }, [tiltEngine]);

  const handleDeviceOrientation = useCallback(
    (event: DeviceOrientationEvent): void => {
      const shell = shellRef.current;
      if (!shell || !tiltEngine) return;

      const { beta, gamma } = event;
      if (beta == null || gamma == null) return;

      const centerX = shell.clientWidth / 2;
      const centerY = shell.clientHeight / 2;
      const x = clamp(centerX + gamma * mobileTiltSensitivity, 0, shell.clientWidth);
      const y = clamp(
        centerY + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
        0,
        shell.clientHeight
      );

      tiltEngine.setTarget(x, y);
    },
    [tiltEngine, mobileTiltSensitivity]
  );

  useEffect(() => {
    if (!enableTilt || !tiltEngine) return;

    const shell = shellRef.current;
    if (!shell) return;

    const pointerMoveHandler = handlePointerMove as EventListener;
    const pointerEnterHandler = handlePointerEnter as EventListener;
    const pointerLeaveHandler = handlePointerLeave as EventListener;
    const deviceOrientationHandler = handleDeviceOrientation as EventListener;

    shell.addEventListener('pointerenter', pointerEnterHandler);
    shell.addEventListener('pointermove', pointerMoveHandler);
    shell.addEventListener('pointerleave', pointerLeaveHandler);

    const handleClick = (): void => {
      if (!enableMobileTilt || location.protocol !== 'https:') return;
      const anyMotion = window.DeviceMotionEvent as typeof DeviceMotionEvent & {
        requestPermission?: () => Promise<string>;
      };
      if (anyMotion && typeof anyMotion.requestPermission === 'function') {
        anyMotion
          .requestPermission()
          .then((state: string) => {
            if (state === 'granted') {
              window.addEventListener('deviceorientation', deviceOrientationHandler);
            }
          })
          .catch(console.error);
      } else {
        window.addEventListener('deviceorientation', deviceOrientationHandler);
      }
    };
    shell.addEventListener('click', handleClick);

    const initialX = (shell.clientWidth || 0) - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
    tiltEngine.setImmediate(initialX, initialY);
    tiltEngine.toCenter();
    tiltEngine.beginInitial(ANIMATION_CONFIG.INITIAL_DURATION);

    return () => {
      shell.removeEventListener('pointerenter', pointerEnterHandler);
      shell.removeEventListener('pointermove', pointerMoveHandler);
      shell.removeEventListener('pointerleave', pointerLeaveHandler);
      shell.removeEventListener('click', handleClick);
      window.removeEventListener('deviceorientation', deviceOrientationHandler);
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
      tiltEngine.cancel();
      shell.classList.remove('entering');
    };
  }, [
    enableTilt,
    enableMobileTilt,
    tiltEngine,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
    handleDeviceOrientation
  ]);

  const cardRadius = '30px';

  const cardStyle = useMemo(
    () => ({
      '--icon': iconUrl ? \`url(\${iconUrl})\` : 'none',
      '--grain': grainUrl ? \`url(\${grainUrl})\` : 'none',
      '--inner-gradient': innerGradient ?? DEFAULT_INNER_GRADIENT,
      '--behind-glow-color': behindGlowColor ?? 'rgba(125, 190, 255, 0.67)',
      '--behind-glow-size': behindGlowSize ?? '50%',
      '--pointer-x': '50%',
      '--pointer-y': '50%',
      '--pointer-from-center': '0',
      '--pointer-from-top': '0.5',
      '--pointer-from-left': '0.5',
      '--card-opacity': '0',
      '--rotate-x': '0deg',
      '--rotate-y': '0deg',
      '--background-x': '50%',
      '--background-y': '50%',
      '--card-radius': cardRadius,
      '--sunpillar-1': 'hsl(2, 100%, 73%)',
      '--sunpillar-2': 'hsl(53, 100%, 69%)',
      '--sunpillar-3': 'hsl(93, 100%, 69%)',
      '--sunpillar-4': 'hsl(176, 100%, 76%)',
      '--sunpillar-5': 'hsl(228, 100%, 74%)',
      '--sunpillar-6': 'hsl(283, 100%, 73%)',
      '--sunpillar-clr-1': 'var(--sunpillar-1)',
      '--sunpillar-clr-2': 'var(--sunpillar-2)',
      '--sunpillar-clr-3': 'var(--sunpillar-3)',
      '--sunpillar-clr-4': 'var(--sunpillar-4)',
      '--sunpillar-clr-5': 'var(--sunpillar-5)',
      '--sunpillar-clr-6': 'var(--sunpillar-6)'
    }),
    [iconUrl, grainUrl, innerGradient, behindGlowColor, behindGlowSize, cardRadius]
  );

  const handleContactClick = useCallback((): void => {
    onContactClick?.();
  }, [onContactClick]);

  // Complex styles that require CSS variables and can't be done with Tailwind
  const shineStyle = {
    maskImage: 'var(--icon)',
    maskMode: 'luminance',
    maskRepeat: 'repeat',
    maskSize: '150%',
    maskPosition: 'top calc(200% - (var(--background-y) * 5)) left calc(100% - var(--background-x))',
    filter: 'brightness(0.66) contrast(1.33) saturate(0.33) opacity(0.5)',
    animation: 'pc-holo-bg 18s linear infinite',
    animationPlayState: 'running' as const,
    mixBlendMode: 'color-dodge' as const,
    transform: 'translate3d(0, 0, 1px)',
    overflow: 'hidden' as const,
    zIndex: 3,
    background: 'transparent',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: \`
      repeating-linear-gradient(
        0deg,
        var(--sunpillar-clr-1) 5%,
        var(--sunpillar-clr-2) 10%,
        var(--sunpillar-clr-3) 15%,
        var(--sunpillar-clr-4) 20%,
        var(--sunpillar-clr-5) 25%,
        var(--sunpillar-clr-6) 30%,
        var(--sunpillar-clr-1) 35%
      ),
      repeating-linear-gradient(
        -45deg,
        #0e152e 0%,
        hsl(180, 10%, 60%) 3.8%,
        hsl(180, 29%, 66%) 4.5%,
        hsl(180, 10%, 60%) 5.2%,
        #0e152e 10%,
        #0e152e 12%
      ),
      radial-gradient(
        farthest-corner circle at var(--pointer-x) var(--pointer-y),
        hsla(0, 0%, 0%, 0.1) 12%,
        hsla(0, 0%, 0%, 0.15) 20%,
        hsla(0, 0%, 0%, 0.25) 120%
      )
    \`.replace(/\\s+/g, ' '),
    gridArea: '1 / -1',
    borderRadius: cardRadius,
    pointerEvents: 'none' as const
  };

  const glareStyle: React.CSSProperties = {
    transform: 'translate3d(0, 0, 1.1px)',
    overflow: 'hidden',
    backgroundImage: \`radial-gradient(
      farthest-corner circle at var(--pointer-x) var(--pointer-y),
      hsl(248, 25%, 80%) 12%,
      hsla(207, 40%, 30%, 0.8) 90%
    )\`,
    mixBlendMode: 'overlay',
    filter: 'brightness(0.8) contrast(1.2)',
    zIndex: 4,
    gridArea: '1 / -1',
    borderRadius: cardRadius,
    pointerEvents: 'none'
  };

  return (
    <div
      ref={wrapRef}
      className={\`relative touch-none \${className}\`.trim()}
      style={{ perspective: '500px', transform: 'translate3d(0, 0, 0.1px)', ...cardStyle } as React.CSSProperties}
    >
      {behindGlowEnabled && (
        <div
          className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-200 ease-out"
          style={{
            background: \`radial-gradient(circle at var(--pointer-x) var(--pointer-y), var(--behind-glow-color) 0%, transparent var(--behind-glow-size))\`,
            filter: 'blur(50px) saturate(1.1)',
            opacity: 'calc(0.8 * var(--card-opacity))'
          }}
        />
      )}
      <div ref={shellRef} className="relative z-[1] group">
        <section
          className="grid relative overflow-hidden"
          style={{
            height: '80svh',
            maxHeight: '540px',
            aspectRatio: '0.718',
            borderRadius: cardRadius,
            backgroundBlendMode: 'color-dodge, normal, normal, normal',
            boxShadow:
              'rgba(0, 0, 0, 0.8) calc((var(--pointer-from-left) * 10px) - 3px) calc((var(--pointer-from-top) * 20px) - 6px) 20px -5px',
            transition: 'transform 1s ease',
            transform: 'translateZ(0) rotateX(0deg) rotateY(0deg)',
            background: 'rgba(0, 0, 0, 0.9)',
            backfaceVisibility: 'hidden'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transition = 'none';
            e.currentTarget.style.transform = 'translateZ(0) rotateX(var(--rotate-y)) rotateY(var(--rotate-x))';
          }}
          onMouseLeave={e => {
            const shell = shellRef.current;
            if (shell?.classList.contains('entering')) {
              e.currentTarget.style.transition = 'transform 180ms ease-out';
            } else {
              e.currentTarget.style.transition = 'transform 1s ease';
            }
            e.currentTarget.style.transform = 'translateZ(0) rotateX(0deg) rotateY(0deg)';
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'var(--inner-gradient)',
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              borderRadius: cardRadius,
              display: 'grid',
              gridArea: '1 / -1'
            }}
          >
            {/* Shine layer */}
            <div style={shineStyle} />

            {/* Glare layer */}
            <div style={glareStyle} />

            {/* Avatar content */}
            <div
              className="overflow-visible"
              style={{
                mixBlendMode: 'luminosity',
                transform: 'translateZ(2px)',
                gridArea: '1 / -1',
                borderRadius: cardRadius,
                pointerEvents: 'none',
                backfaceVisibility: 'hidden'
              }}
            >
              <img
                className="w-full absolute left-1/2 bottom-[-1px] will-change-transform transition-transform duration-[120ms] ease-out"
                src={avatarUrl}
                alt={\`\${name || 'User'} avatar\`}
                loading="lazy"
                style={{
                  transformOrigin: '50% 100%',
                  transform:
                    'translateX(calc(-50% + (var(--pointer-from-left) - 0.5) * 6px)) translateZ(0) scaleY(calc(1 + (var(--pointer-from-top) - 0.5) * 0.02)) scaleX(calc(1 + (var(--pointer-from-left) - 0.5) * 0.01))',
                  borderRadius: cardRadius,
                  backfaceVisibility: 'hidden'
                }}
                onError={e => {
                  const t = e.target as HTMLImageElement;
                  t.style.display = 'none';
                }}
              />
              {showUserInfo && (
                <div
                  className="absolute z-[2] flex items-center justify-between backdrop-blur-[30px] border border-white/10 pointer-events-auto"
                  style={
                    {
                      '--ui-inset': '20px',
                      '--ui-radius-bias': '6px',
                      bottom: 'var(--ui-inset)',
                      left: 'var(--ui-inset)',
                      right: 'var(--ui-inset)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 'calc(max(0px, var(--card-radius) - var(--ui-inset) + var(--ui-radius-bias)))',
                      padding: '12px 14px'
                    } as React.CSSProperties
                  }
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="rounded-full overflow-hidden border border-white/10 flex-shrink-0"
                      style={{ width: '48px', height: '48px' }}
                    >
                      <img
                        className="w-full h-full object-cover rounded-full"
                        src={miniAvatarUrl || avatarUrl}
                        alt={\`\${name || 'User'} mini avatar\`}
                        loading="lazy"
                        style={{ display: 'block', gridArea: 'auto', borderRadius: '50%', pointerEvents: 'auto' }}
                        onError={e => {
                          const t = e.target as HTMLImageElement;
                          t.style.opacity = '0.5';
                          t.src = avatarUrl;
                        }}
                      />
                    </div>
                    <div className="flex flex-col items-start gap-1.5">
                      <div className="text-sm font-medium text-white/90 leading-none">@{handle}</div>
                      <div className="text-sm text-white/70 leading-none">{status}</div>
                    </div>
                  </div>
                  <button
                    className="border border-white/10 rounded-lg px-4 py-3 text-xs font-semibold text-white/90 cursor-pointer backdrop-blur-[10px] transition-all duration-200 ease-out hover:border-white/40 hover:-translate-y-px"
                    onClick={handleContactClick}
                    style={{ pointerEvents: 'auto', display: 'block', gridArea: 'auto', borderRadius: '8px' }}
                    type="button"
                    aria-label={\`Contact \${name || 'user'}\`}
                  >
                    {contactText}
                  </button>
                </div>
              )}
            </div>

            {/* Details content */}
            <div
              className="max-h-full overflow-hidden text-center relative z-[5]"
              style={{
                transform:
                  'translate3d(calc(var(--pointer-from-left) * -6px + 3px), calc(var(--pointer-from-top) * -6px + 3px), 0.1px)',
                mixBlendMode: 'luminosity',
                gridArea: '1 / -1',
                borderRadius: cardRadius,
                pointerEvents: 'none'
              }}
            >
              <div className="w-full absolute flex flex-col" style={{ top: '3em', display: 'flex', gridArea: 'auto' }}>
                <h3
                  className="font-semibold m-0"
                  style={{
                    fontSize: 'min(5svh, 3em)',
                    backgroundImage: 'linear-gradient(to bottom, #fff, #6f6fbe)',
                    backgroundSize: '1em 1.5em',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    display: 'block',
                    gridArea: 'auto',
                    borderRadius: '0',
                    pointerEvents: 'auto'
                  }}
                >
                  {name}
                </h3>
                <p
                  className="font-semibold whitespace-nowrap mx-auto w-min"
                  style={{
                    position: 'relative',
                    top: '-12px',
                    fontSize: '16px',
                    margin: '0 auto',
                    backgroundImage: 'linear-gradient(to bottom, #fff, #4a4ac0)',
                    backgroundSize: '1em 1.5em',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    display: 'block',
                    gridArea: 'auto',
                    borderRadius: '0',
                    pointerEvents: 'auto'
                  }}
                >
                  {title}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);
export default ProfileCard;
`,An={usage:`import ProfileCard from './ProfileCard'
  
<ProfileCard
  name="Javi A. Torres"
  title="Software Engineer"
  handle="javicodes"
  status="Online"
  contactText="Contact Me"
  avatarUrl="/path/to/avatar.jpg"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => console.log('Contact clicked')}
/>`,code:Rn,css:wn,tailwind:kn,tsCode:Nn,tsTailwind:Cn},Mn="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)",O={INITIAL_DURATION:1200,INITIAL_X_OFFSET:70,INITIAL_Y_OFFSET:60,DEVICE_BETA_OFFSET:20,ENTER_TRANSITION_MS:180},_=(d,l=0,p=100)=>Math.min(Math.max(d,l),p),$=(d,l=3)=>parseFloat(d.toFixed(l)),en=(d,l,p,v,m)=>$(v+(m-v)*(d-l)/(p-l)),Ln=({avatarUrl:d="<Placeholder for avatar URL>",iconUrl:l="<Placeholder for icon URL>",grainUrl:p="<Placeholder for grain URL>",innerGradient:v,behindGlowEnabled:m=!0,behindGlowColor:T,behindGlowSize:E,className:g="",enableTilt:I=!0,enableMobileTilt:R=!1,mobileTiltSensitivity:N=5,miniAvatarUrl:b,name:w="Javi A. Torres",title:G="Software Engineer",handle:z="javicodes",status:Y="Online",contactText:H="Contact",showUserInfo:D=!0,onContactClick:k})=>{const j=c.useRef(null),h=c.useRef(null),C=c.useRef(null),x=c.useRef(null),a=c.useMemo(()=>{if(!I)return null;let n=null,t=!1,r=0,i=0,s=0,u=0,f=0;const A=.14,M=.6;let X=0;const J=(o,y)=>{const L=h.current,F=j.current;if(!L||!F)return;const nn=L.clientWidth||1,ln=L.clientHeight||1,U=_(100/nn*o),S=_(100/ln*y),on=U-50,sn=S-50,cn={"--pointer-x":`${U}%`,"--pointer-y":`${S}%`,"--background-x":`${en(U,0,100,35,65)}%`,"--background-y":`${en(S,0,100,35,65)}%`,"--pointer-from-center":`${_(Math.hypot(S-50,U-50)/50,0,1)}`,"--pointer-from-top":`${S/100}`,"--pointer-from-left":`${U/100}`,"--rotate-x":`${$(-(on/5))}deg`,"--rotate-y":`${$(sn/4)}deg`};for(const[dn,un]of Object.entries(cn))F.style.setProperty(dn,un)},K=o=>{if(!t)return;r===0&&(r=o);const y=(o-r)/1e3;r=o;const L=o<X?M:A,F=1-Math.exp(-y/L);i+=(u-i)*F,s+=(f-s)*F,J(i,s),Math.abs(u-i)>.05||Math.abs(f-s)>.05||document.hasFocus()?n=requestAnimationFrame(K):(t=!1,r=0,n&&(cancelAnimationFrame(n),n=null))},Q=()=>{t||(t=!0,r=0,n=requestAnimationFrame(K))};return{setImmediate(o,y){i=o,s=y,J(i,s)},setTarget(o,y){u=o,f=y,Q()},toCenter(){const o=h.current;o&&this.setTarget(o.clientWidth/2,o.clientHeight/2)},beginInitial(o){X=performance.now()+o,Q()},getCurrent(){return{x:i,y:s,tx:u,ty:f}},cancel(){n&&cancelAnimationFrame(n),n=null,t=!1,r=0}}},[I]),B=(n,t)=>{const r=t.getBoundingClientRect();return{x:n.clientX-r.left,y:n.clientY-r.top}},W=c.useCallback(n=>{const t=h.current;if(!t||!a)return;const{x:r,y:i}=B(n,t);a.setTarget(r,i)},[a]),q=c.useCallback(n=>{const t=h.current;if(!t||!a)return;t.classList.add("active"),t.classList.add("entering"),C.current&&window.clearTimeout(C.current),C.current=window.setTimeout(()=>{t.classList.remove("entering")},O.ENTER_TRANSITION_MS);const{x:r,y:i}=B(n,t);a.setTarget(r,i)},[a]),V=c.useCallback(()=>{const n=h.current;if(!n||!a)return;a.toCenter();const t=()=>{const{x:r,y:i,tx:s,ty:u}=a.getCurrent();Math.hypot(s-r,u-i)<.6?(n.classList.remove("active"),x.current=null):x.current=requestAnimationFrame(t)};x.current&&cancelAnimationFrame(x.current),x.current=requestAnimationFrame(t)},[a]),Z=c.useCallback(n=>{const t=h.current;if(!t||!a)return;const{beta:r,gamma:i}=n;if(r==null||i==null)return;const s=t.clientWidth/2,u=t.clientHeight/2,f=_(s+i*N,0,t.clientWidth),A=_(u+(r-O.DEVICE_BETA_OFFSET)*N,0,t.clientHeight);a.setTarget(f,A)},[a,N]);c.useEffect(()=>{if(!I||!a)return;const n=h.current;if(!n)return;const t=W,r=q,i=V,s=Z;n.addEventListener("pointerenter",r),n.addEventListener("pointermove",t),n.addEventListener("pointerleave",i);const u=()=>{if(!R||location.protocol!=="https:")return;const M=window.DeviceMotionEvent;M&&typeof M.requestPermission=="function"?M.requestPermission().then(X=>{X==="granted"&&window.addEventListener("deviceorientation",s)}).catch(console.error):window.addEventListener("deviceorientation",s)};n.addEventListener("click",u);const f=(n.clientWidth||0)-O.INITIAL_X_OFFSET,A=O.INITIAL_Y_OFFSET;return a.setImmediate(f,A),a.toCenter(),a.beginInitial(O.INITIAL_DURATION),()=>{n.removeEventListener("pointerenter",r),n.removeEventListener("pointermove",t),n.removeEventListener("pointerleave",i),n.removeEventListener("click",u),window.removeEventListener("deviceorientation",s),C.current&&window.clearTimeout(C.current),x.current&&cancelAnimationFrame(x.current),a.cancel(),n.classList.remove("entering")}},[I,R,a,W,q,V,Z]);const rn=c.useMemo(()=>({"--icon":l?`url(${l})`:"none","--grain":p?`url(${p})`:"none","--inner-gradient":v??Mn,"--behind-glow-color":T??"rgba(125, 190, 255, 0.67)","--behind-glow-size":E??"50%"}),[l,p,v,T,E]),an=c.useCallback(()=>{k==null||k()},[k]);return e.jsxs("div",{ref:j,className:`pc-card-wrapper ${g}`.trim(),style:rn,children:[m&&e.jsx("div",{className:"pc-behind"}),e.jsx("div",{ref:h,className:"pc-card-shell",children:e.jsx("section",{className:"pc-card",children:e.jsxs("div",{className:"pc-inside",children:[e.jsx("div",{className:"pc-shine"}),e.jsx("div",{className:"pc-glare"}),e.jsxs("div",{className:"pc-content pc-avatar-content",children:[e.jsx("img",{className:"avatar",src:d,alt:`${w||"User"} avatar`,loading:"lazy",onError:n=>{const t=n.target;t.style.display="none"}}),D&&e.jsxs("div",{className:"pc-user-info",children:[e.jsxs("div",{className:"pc-user-details",children:[e.jsx("div",{className:"pc-mini-avatar",children:e.jsx("img",{src:b||d,alt:`${w||"User"} mini avatar`,loading:"lazy",onError:n=>{const t=n.target;t.style.opacity="0.5",t.src=d}})}),e.jsxs("div",{className:"pc-user-text",children:[e.jsxs("div",{className:"pc-handle",children:["@",z]}),e.jsx("div",{className:"pc-status",children:Y})]})]}),e.jsx("button",{className:"pc-contact-btn",onClick:an,style:{pointerEvents:"auto"},type:"button","aria-label":`Contact ${w||"user"}`,children:H})]})]}),e.jsx("div",{className:"pc-content",children:e.jsxs("div",{className:"pc-details",children:[e.jsx("h3",{children:w}),e.jsx("p",{children:G})]})})]})})})]})},Fn=pn.memo(Ln),tn={showIcon:!0,showUserInfo:!1,enableMobileTilt:!1,showBehindGlow:!0,behindGlowColor:"rgba(125, 190, 255, 0.67)",customInnerGradient:"linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"},zn=()=>{const{props:d,updateProp:l,resetProps:p,hasChanges:v}=hn(tn),{showIcon:m,showUserInfo:T,enableMobileTilt:E,showBehindGlow:g,behindGlowColor:I,customInnerGradient:R}=d,[N,b]=In(),w=()=>{const Y=Math.floor(Math.random()*360),H=Math.floor(Math.random()*360),D=`hsla(${Y}, 100%, 70%, 0.6)`,k=`linear-gradient(145deg,hsla(${Y}, 40%, 45%, 0.55) 0%,hsla(${H}, 60%, 70%, 0.27) 100%)`;l("behindGlowColor",D),l("customInnerGradient",k),b()},G=c.useMemo(()=>[{name:"avatarUrl",type:"string",default:'"<Placeholder for avatar URL>"',description:"URL for the main avatar image displayed on the card"},{name:"iconUrl",type:"string",default:'"<Placeholder for icon URL>"',description:"Optional URL for an icon pattern overlay on the card background"},{name:"grainUrl",type:"string",default:'"<Placeholder for grain URL>"',description:"Optional URL for a grain texture overlay effect"},{name:"innerGradient",type:"string",default:"undefined",description:"Custom CSS gradient string for the inner card gradient"},{name:"behindGlowEnabled",type:"boolean",default:"true",description:"Toggle the smooth radial glow that follows the cursor behind the card"},{name:"behindGlowColor",type:"string",default:'"rgba(125, 190, 255, 0.67)"',description:"CSS color for the behind-the-card glow (e.g. rgba/hsla/hex)"},{name:"behindGlowSize",type:"string",default:'"50%"',description:"Size of the glow as a length/percentage stop in the radial gradient"},{name:"className",type:"string",default:'""',description:"Additional CSS classes to apply to the card wrapper"},{name:"enableTilt",type:"boolean",default:"true",description:"Enable or disable the 3D tilt effect on mouse hover"},{name:"enableMobileTilt",type:"boolean",default:"false",description:"Enable or disable the 3D tilt effect on mobile devices"},{name:"mobileTiltSensitivity",type:"number",default:"5",description:"Sensitivity of the 3D tilt effect on mobile devices"},{name:"miniAvatarUrl",type:"string",default:"undefined",description:"Optional URL for a smaller avatar in the user info section"},{name:"name",type:"string",default:'"Javi A. Torres"',description:"User's display name"},{name:"title",type:"string",default:'"Software Engineer"',description:"User's job title or role"},{name:"handle",type:"string",default:'"javicodes"',description:"User's handle or username (displayed with @ prefix)"},{name:"status",type:"string",default:'"Online"',description:"User's current status"},{name:"contactText",type:"string",default:'"Contact"',description:"Text displayed on the contact button"},{name:"showUserInfo",type:"boolean",default:"true",description:"Whether to display the user information section"},{name:"onContactClick",type:"function",default:"undefined",description:"Callback function called when the contact button is clicked"}],[]),z=c.useMemo(()=>({iconUrl:m?"/assets/demo/iconpattern.png":void 0,behindGlowEnabled:g,innerGradient:R}),[m,g,R]);return e.jsx(vn,{props:d,defaultProps:tn,resetProps:p,hasChanges:v,demoOnlyProps:["showIcon","showBehindGlow","customInnerGradient"],computedProps:z,children:e.jsxs(gn,{children:[e.jsxs(bn,{children:[e.jsx(mn,{position:"relative",className:"demo-container",h:700,overflow:"hidden",children:e.jsx(Fn,{name:"Javi A. Torres",title:"Software Engineer",handle:"javicodes",status:"Online",contactText:"Contact Me",avatarUrl:"/assets/demo/person.webp",iconUrl:m?"/assets/demo/iconpattern.png":"",showUserInfo:T,grainUrl:"/assets/demo/grain.webp",behindGlowEnabled:g,behindGlowColor:I,innerGradient:R,enableMobileTilt:E},N)})," ",e.jsxs(En,{children:[e.jsx(fn,{onClick:w,fontSize:"xs",bg:"#170D27",borderRadius:"10px",border:"1px solid #271E37",_hover:{bg:"#271E37"},color:"#fff",h:8,children:"Randomize Colors"}),e.jsx(P,{title:"Behind Glow",isChecked:g,onChange:()=>{l("showBehindGlow",!g),b()}}),e.jsx(P,{title:"Show Icon Pattern",isChecked:m,onChange:()=>{l("showIcon",!m),b()}}),e.jsx(P,{title:"Show User Info",isChecked:T,onChange:()=>{l("showUserInfo",!T),b()}}),e.jsx(P,{title:"Enable Mobile Tilt",isChecked:E,onChange:()=>{l("enableMobileTilt",!E),b()}})]}),e.jsx(xn,{data:G})]}),e.jsx(yn,{children:e.jsx(Tn,{codeObject:An,componentName:"ProfileCard"})})]})})};export{zn as default};
