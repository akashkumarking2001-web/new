import{c as x,r as b,j as e,B as N}from"./index-CKqfvLoB.js";import{u as E,C as w,T as M,P as A,a as R,b as D,c as j}from"./PropTable-BzD4cJVp.js";import{C as k}from"./Customize-BaUKAf5J.js";import{D as F}from"./Dependencies-DmSBXzNX.js";import{P as s}from"./PreviewSlider-25yjOF_X.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],z=x("activity",_);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],L=x("fingerprint",T);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],O=x("lock",P),B=`import { useEffect, useRef } from 'react';
import './ReflectiveCard.css';
import { Fingerprint, Activity, Lock } from 'lucide-react';

const ReflectiveCard = ({
  blurStrength = 12,
  color = 'white',
  metalness = 1,
  roughness = 0.4,
  overlayColor = 'rgba(255, 255, 255, 0.1)',
  displacementStrength = 20,
  noiseScale = 1,
  specularConstant = 1.2,
  grayscale = 1,
  glassDistortion = 0,
  className = '',
  style = {}
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    let stream = null;

    const startWebcam = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 640 },
            height: { ideal: 480 },
            facingMode: 'user'
          }
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing webcam:', err);
      }
    };

    startWebcam();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const baseFrequency = 0.03 / Math.max(0.1, noiseScale);
  const saturation = 1 - Math.max(0, Math.min(1, grayscale));

  const cssVariables = {
    '--blur-strength': \`\${blurStrength}px\`,
    '--metalness': metalness,
    '--roughness': roughness,
    '--overlay-color': overlayColor,
    '--text-color': color,
    '--saturation': saturation
  };

  return (
    <div className={\`reflective-card-container \${className}\`} style={{ ...style, ...cssVariables }}>
      <svg className="reflective-svg-filters" aria-hidden="true">
        <defs>
          <filter id="metallic-displacement" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency={baseFrequency} numOctaves="2" result="noise" />
            <feColorMatrix in="noise" type="luminanceToAlpha" result="noiseAlpha" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={displacementStrength}
              xChannelSelector="R"
              yChannelSelector="G"
              result="rippled"
            />
            <feSpecularLighting
              in="noiseAlpha"
              surfaceScale={displacementStrength}
              specularConstant={specularConstant}
              specularExponent="20"
              lightingColor="#ffffff"
              result="light"
            >
              <fePointLight x="0" y="0" z="300" />
            </feSpecularLighting>
            <feComposite in="light" in2="rippled" operator="in" result="light-effect" />
            <feBlend in="light-effect" in2="rippled" mode="screen" result="metallic-result" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="solidAlpha"
            />
            <feMorphology in="solidAlpha" operator="erode" radius="45" result="erodedAlpha" />
            <feGaussianBlur in="erodedAlpha" stdDeviation="10" result="blurredMap" />
            <feComponentTransfer in="blurredMap" result="glassMap">
              <feFuncA type="linear" slope="0.5" intercept="0" />
            </feComponentTransfer>
            <feDisplacementMap
              in="metallic-result"
              in2="glassMap"
              scale={glassDistortion}
              xChannelSelector="A"
              yChannelSelector="A"
              result="final"
            />
          </filter>
        </defs>
      </svg>

      <video ref={videoRef} autoPlay playsInline muted className="reflective-video" />

      <div className="reflective-noise" />
      <div className="reflective-sheen" />
      <div className="reflective-border" />

      <div className="reflective-content">
        <div className="card-header">
          <div className="security-badge">
            <Lock size={14} className="security-icon" />
            <span>SECURE ACCESS</span>
          </div>
          <Activity className="status-icon" size={20} />
        </div>

        <div className="card-body">
          <div className="user-info">
            <h2 className="user-name">ALEXANDER DOE</h2>
            <p className="user-role">SENIOR DEVELOPER</p>
          </div>
        </div>

        <div className="card-footer">
          <div className="id-section">
            <span className="label">ID NUMBER</span>
            <span className="value">8901-2345-6789</span>
          </div>
          <div className="fingerprint-section">
            <Fingerprint size={32} className="fingerprint-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReflectiveCard;
`,U=`.reflective-card-container {
  position: relative;
  width: 320px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  background: #1a1a1a;
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  isolation: isolate;
  font-family: 'Inter', sans-serif;
}

.reflective-svg-filters {
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  opacity: 0;
}

.reflective-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.2) scaleX(-1);

  filter: saturate(var(--saturation, 0)) contrast(120%) brightness(110%) blur(var(--blur-strength, 12px))
    url(#metallic-displacement);

  z-index: 0;
  opacity: 0.9;
  transition: filter 0.3s ease;
}

.reflective-noise {
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: var(--roughness, 0.4);
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  mix-blend-mode: overlay;
}

.reflective-sheen {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 40%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0.1) 60%,
    rgba(255, 255, 255, 0.3) 100%
  );
  pointer-events: none;
  mix-blend-mode: overlay;
  opacity: var(--metalness, 1);
}

.reflective-border {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.6) 100%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  z-index: 20;
  pointer-events: none;
}

.reflective-content {
  position: relative;
  z-index: 10;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  color: var(--text-color, white);
  background: var(--overlay-color, rgba(255, 255, 255, 0.05));
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 16px;
}

.security-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.status-icon {
  opacity: 0.8;
}

.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  text-align: center;
  gap: 24px;
  margin-bottom: 2em;
}

.user-name {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 0 0 8px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.user-role {
  font-size: 12px;
  letter-spacing: 0.2em;
  opacity: 0.7;
  margin: 0;
  text-transform: uppercase;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 24px;
}

.id-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.label {
  font-size: 9px;
  letter-spacing: 0.1em;
  opacity: 0.6;
}

.value {
  font-family: monospace;
  font-size: 14px;
  letter-spacing: 0.05em;
}

.fingerprint-icon {
  opacity: 0.4;
}
`,G=`import { useEffect, useRef } from 'react';
import { Fingerprint, Activity, Lock } from 'lucide-react';

const ReflectiveCard = ({
  blurStrength = 12,
  color = 'white',
  metalness = 1,
  roughness = 0.4,
  overlayColor = 'rgba(255, 255, 255, 0.1)',
  displacementStrength = 20,
  noiseScale = 1,
  specularConstant = 1.2,
  grayscale = 1,
  glassDistortion = 0,
  className = '',
  style = {}
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    let stream = null;

    const startWebcam = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 640 },
            height: { ideal: 480 },
            facingMode: 'user'
          }
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing webcam:', err);
      }
    };

    startWebcam();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const baseFrequency = 0.03 / Math.max(0.1, noiseScale);
  const saturation = 1 - Math.max(0, Math.min(1, grayscale));

  const cssVariables = {
    '--blur-strength': \`\${blurStrength}px\`,
    '--metalness': metalness,
    '--roughness': roughness,
    '--overlay-color': overlayColor,
    '--text-color': color,
    '--saturation': saturation
  };

  return (
    <div
      className={\`relative w-[320px] h-[500px] rounded-[20px] overflow-hidden bg-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)_inset] isolate font-sans \${className}\`}
      style={{ ...style, ...cssVariables }}
    >
      <svg className="absolute w-0 h-0 pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          <filter id="metallic-displacement" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency={baseFrequency} numOctaves="2" result="noise" />
            <feColorMatrix in="noise" type="luminanceToAlpha" result="noiseAlpha" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={displacementStrength}
              xChannelSelector="R"
              yChannelSelector="G"
              result="rippled"
            />
            <feSpecularLighting
              in="noiseAlpha"
              surfaceScale={displacementStrength}
              specularConstant={specularConstant}
              specularExponent="20"
              lightingColor="#ffffff"
              result="light"
            >
              <fePointLight x="0" y="0" z="300" />
            </feSpecularLighting>
            <feComposite in="light" in2="rippled" operator="in" result="light-effect" />
            <feBlend in="light-effect" in2="rippled" mode="screen" result="metallic-result" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="solidAlpha"
            />
            <feMorphology in="solidAlpha" operator="erode" radius="45" result="erodedAlpha" />
            <feGaussianBlur in="erodedAlpha" stdDeviation="10" result="blurredMap" />
            <feComponentTransfer in="blurredMap" result="glassMap">
              <feFuncA type="linear" slope="0.5" intercept="0" />
            </feComponentTransfer>
            <feDisplacementMap
              in="metallic-result"
              in2="glassMap"
              scale={glassDistortion}
              xChannelSelector="A"
              yChannelSelector="A"
              result="final"
            />
          </filter>
        </defs>
      </svg>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="absolute top-0 left-0 w-full h-full object-cover scale-[1.2] -scale-x-100 z-0 opacity-90 transition-[filter] duration-300"
        style={{
          filter:
            'saturate(var(--saturation, 0)) contrast(120%) brightness(110%) blur(var(--blur-strength, 12px)) url(#metallic-displacement)'
        }}
      />

      <div className="absolute inset-0 z-10 opacity-[var(--roughness,0.4)] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20200%20200%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cfilter%20id%3D%27noiseFilter%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.8%27%20numOctaves%3D%273%27%20stitchTiles%3D%27stitch%27%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url(%23noiseFilter)%27%2F%3E%3C%2Fsvg%3E')] mix-blend-overlay" />

      <div className="absolute inset-0 z-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.1)_40%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.1)_60%,rgba(255,255,255,0.3)_100%)] pointer-events-none mix-blend-overlay opacity-[var(--metalness,1)]" />

      <div className="absolute inset-0 rounded-[20px] p-[1px] bg-[linear-gradient(135deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.6)_100%)] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] z-20 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col justify-between p-8 text-[var(--text-color,white)] bg-[var(--overlay-color,rgba(255,255,255,0.05))]">
        <div className="flex justify-between items-center border-b border-white/20 pb-4">
          <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.1em] px-2 py-1 bg-white/10 rounded border border-white/20">
            <Lock size={14} className="opacity-80" />
            <span>SECURE ACCESS</span>
          </div>
          <Activity className="opacity-80" size={20} />
        </div>

        <div className="flex-1 flex flex-col justify-end items-center text-center gap-6 mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-[0.05em] m-0 mb-2 drop-shadow-md">ALEXANDER DOE</h2>
            <p className="text-xs tracking-[0.2em] opacity-70 m-0 uppercase">SENIOR DEVELOPER</p>
          </div>
        </div>

        <div className="flex justify-between items-end border-t border-white/20 pt-6">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] tracking-[0.1em] opacity-60">ID NUMBER</span>
            <span className="font-mono text-sm tracking-[0.05em]">8901-2345-6789</span>
          </div>
          <div className="opacity-40">
            <Fingerprint size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReflectiveCard;
`,q=`import React, { useEffect, useRef, useState } from 'react';
import './ReflectiveCard.css';
import { Fingerprint, User, Activity, Lock } from 'lucide-react';

interface ReflectiveCardProps {
  blurStrength?: number;
  color?: string;
  metalness?: number;
  roughness?: number;
  overlayColor?: string;
  displacementStrength?: number;
  noiseScale?: number;
  specularConstant?: number;
  grayscale?: number;
  glassDistortion?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ReflectiveCard: React.FC<ReflectiveCardProps> = ({
  blurStrength = 12,
  color = 'white',
  metalness = 1,
  roughness = 0.4,
  overlayColor = 'rgba(255, 255, 255, 0.1)',
  displacementStrength = 20,
  noiseScale = 1,
  specularConstant = 1.2,
  grayscale = 1,
  glassDistortion = 0,
  className = '',
  style = {}
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [streamActive, setStreamActive] = useState(false);

  useEffect(() => {
    let stream: MediaStream | null = null;

    const startWebcam = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 640 },
            height: { ideal: 480 },
            facingMode: 'user'
          }
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStreamActive(true);
        }
      } catch (err) {
        console.error('Error accessing webcam:', err);
      }
    };

    startWebcam();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const baseFrequency = 0.03 / Math.max(0.1, noiseScale);
  const saturation = 1 - Math.max(0, Math.min(1, grayscale));

  const cssVariables = {
    '--blur-strength': \`\${blurStrength}px\`,
    '--metalness': metalness,
    '--roughness': roughness,
    '--overlay-color': overlayColor,
    '--text-color': color,
    '--saturation': saturation
  } as React.CSSProperties;

  return (
    <div className={\`reflective-card-container \${className}\`} style={{ ...style, ...cssVariables }}>
      <svg className="reflective-svg-filters" aria-hidden="true">
        <defs>
          <filter id="metallic-displacement" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency={baseFrequency} numOctaves="2" result="noise" />
            <feColorMatrix in="noise" type="luminanceToAlpha" result="noiseAlpha" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={displacementStrength}
              xChannelSelector="R"
              yChannelSelector="G"
              result="rippled"
            />
            <feSpecularLighting
              in="noiseAlpha"
              surfaceScale={displacementStrength}
              specularConstant={specularConstant}
              specularExponent="20"
              lightingColor="#ffffff"
              result="light"
            >
              <fePointLight x="0" y="0" z="300" />
            </feSpecularLighting>
            <feComposite in="light" in2="rippled" operator="in" result="light-effect" />
            <feBlend in="light-effect" in2="rippled" mode="screen" result="metallic-result" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="solidAlpha"
            />
            <feMorphology in="solidAlpha" operator="erode" radius="45" result="erodedAlpha" />
            <feGaussianBlur in="erodedAlpha" stdDeviation="10" result="blurredMap" />
            <feComponentTransfer in="blurredMap" result="glassMap">
              <feFuncA type="linear" slope="0.5" intercept="0" />
            </feComponentTransfer>
            <feDisplacementMap
              in="metallic-result"
              in2="glassMap"
              scale={glassDistortion}
              xChannelSelector="A"
              yChannelSelector="A"
              result="final"
            />
          </filter>
        </defs>
      </svg>

      <video ref={videoRef} autoPlay playsInline muted className="reflective-video" />

      <div className="reflective-noise" />
      <div className="reflective-sheen" />
      <div className="reflective-border" />

      <div className="reflective-content">
        <div className="card-header">
          <div className="security-badge">
            <Lock size={14} className="security-icon" />
            <span>SECURE ACCESS</span>
          </div>
          <Activity className="status-icon" size={20} />
        </div>

        <div className="card-body">
          <div className="user-info">
            <h2 className="user-name">ALEXANDER DOE</h2>
            <p className="user-role">SENIOR DEVELOPER</p>
          </div>
        </div>

        <div className="card-footer">
          <div className="id-section">
            <span className="label">ID NUMBER</span>
            <span className="value">8901-2345-6789</span>
          </div>
          <div className="fingerprint-section">
            <Fingerprint size={32} className="fingerprint-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReflectiveCard;
`,I=`import React, { useEffect, useRef, useState } from 'react';
import { Fingerprint, User, Activity, Lock } from 'lucide-react';

interface ReflectiveCardProps {
  blurStrength?: number;
  color?: string;
  metalness?: number;
  roughness?: number;
  overlayColor?: string;
  displacementStrength?: number;
  noiseScale?: number;
  specularConstant?: number;
  grayscale?: number;
  glassDistortion?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ReflectiveCard: React.FC<ReflectiveCardProps> = ({
  blurStrength = 12,
  color = 'white',
  metalness = 1,
  roughness = 0.4,
  overlayColor = 'rgba(255, 255, 255, 0.1)',
  displacementStrength = 20,
  noiseScale = 1,
  specularConstant = 1.2,
  grayscale = 1,
  glassDistortion = 0,
  className = '',
  style = {}
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [streamActive, setStreamActive] = useState(false);

  useEffect(() => {
    let stream: MediaStream | null = null;

    const startWebcam = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 640 },
            height: { ideal: 480 },
            facingMode: 'user'
          }
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStreamActive(true);
        }
      } catch (err) {
        console.error('Error accessing webcam:', err);
      }
    };

    startWebcam();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const baseFrequency = 0.03 / Math.max(0.1, noiseScale);
  const saturation = 1 - Math.max(0, Math.min(1, grayscale));

  const cssVariables = {
    '--blur-strength': \`\${blurStrength}px\`,
    '--metalness': metalness,
    '--roughness': roughness,
    '--overlay-color': overlayColor,
    '--text-color': color,
    '--saturation': saturation
  } as React.CSSProperties;

  return (
    <div
      className={\`relative w-[320px] h-[500px] rounded-[20px] overflow-hidden bg-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)_inset] isolate font-sans \${className}\`}
      style={{ ...style, ...cssVariables }}
    >
      <svg className="absolute w-0 h-0 pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          <filter id="metallic-displacement" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency={baseFrequency} numOctaves="2" result="noise" />
            <feColorMatrix in="noise" type="luminanceToAlpha" result="noiseAlpha" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={displacementStrength}
              xChannelSelector="R"
              yChannelSelector="G"
              result="rippled"
            />
            <feSpecularLighting
              in="noiseAlpha"
              surfaceScale={displacementStrength}
              specularConstant={specularConstant}
              specularExponent="20"
              lightingColor="#ffffff"
              result="light"
            >
              <fePointLight x="0" y="0" z="300" />
            </feSpecularLighting>
            <feComposite in="light" in2="rippled" operator="in" result="light-effect" />
            <feBlend in="light-effect" in2="rippled" mode="screen" result="metallic-result" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="solidAlpha"
            />
            <feMorphology in="solidAlpha" operator="erode" radius="45" result="erodedAlpha" />
            <feGaussianBlur in="erodedAlpha" stdDeviation="10" result="blurredMap" />
            <feComponentTransfer in="blurredMap" result="glassMap">
              <feFuncA type="linear" slope="0.5" intercept="0" />
            </feComponentTransfer>
            <feDisplacementMap
              in="metallic-result"
              in2="glassMap"
              scale={glassDistortion}
              xChannelSelector="A"
              yChannelSelector="A"
              result="final"
            />
          </filter>
        </defs>
      </svg>

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="absolute top-0 left-0 w-full h-full object-cover scale-[1.2] -scale-x-100 z-0 opacity-90 transition-[filter] duration-300"
        style={{
          filter:
            'saturate(var(--saturation, 0)) contrast(120%) brightness(110%) blur(var(--blur-strength, 12px)) url(#metallic-displacement)'
        }}
      />

      <div className="absolute inset-0 z-10 opacity-[var(--roughness,0.4)] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20200%20200%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cfilter%20id%3D%27noiseFilter%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.8%27%20numOctaves%3D%273%27%20stitchTiles%3D%27stitch%27%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url(%23noiseFilter)%27%2F%3E%3C%2Fsvg%3E')] mix-blend-overlay" />

      <div className="absolute inset-0 z-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.1)_40%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.1)_60%,rgba(255,255,255,0.3)_100%)] pointer-events-none mix-blend-overlay opacity-[var(--metalness,1)]" />

      <div className="absolute inset-0 rounded-[20px] p-[1px] bg-[linear-gradient(135deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.6)_100%)] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] z-20 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col justify-between p-8 text-[var(--text-color,white)] bg-[var(--overlay-color,rgba(255,255,255,0.05))]">
        <div className="flex justify-between items-center border-b border-white/20 pb-4">
          <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.1em] px-2 py-1 bg-white/10 rounded border border-white/20">
            <Lock size={14} className="opacity-80" />
            <span>SECURE ACCESS</span>
          </div>
          <Activity className="opacity-80" size={20} />
        </div>

        <div className="flex-1 flex flex-col justify-end items-center text-center gap-6 mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-[0.05em] m-0 mb-2 drop-shadow-md">ALEXANDER DOE</h2>
            <p className="text-xs tracking-[0.2em] opacity-70 m-0 uppercase">SENIOR DEVELOPER</p>
          </div>
        </div>

        <div className="flex justify-between items-end border-t border-white/20 pt-6">
          <div className="flex flex-col gap-1">
            <span className="text-[9px] tracking-[0.1em] opacity-60">ID NUMBER</span>
            <span className="font-mono text-sm tracking-[0.05em]">8901-2345-6789</span>
          </div>
          <div className="opacity-40">
            <Fingerprint size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReflectiveCard;
`,V={dependencies:"lucide-react",usage:`import ReflectiveCard from './ReflectiveCard';

<div style={{ height: '600px', position: 'relative' }}>
  <ReflectiveCard
    overlayColor="rgba(0, 0, 0, 0.2)"
    blurStrength={10}
    glassDistortion={15}
    metalness={0.8}
    roughness={0.5}
    displacementStrength={25}
    noiseScale={1.5}
    specularConstant={2.0}
    grayscale={0.5}
    color="#ffffff"
  />
</div>
`,code:B,css:U,tailwind:G,tsCode:q,tsTailwind:I},W=({blurStrength:i=12,color:a="white",metalness:g=1,roughness:h=.4,overlayColor:l="rgba(255, 255, 255, 0.1)",displacementStrength:r=20,noiseScale:o=1,specularConstant:c=1.2,grayscale:d=1,glassDistortion:p=0,className:u="",style:m={}})=>{const n=b.useRef(null);b.useEffect(()=>{let f=null;return(async()=>{try{f=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480},facingMode:"user"}}),n.current&&(n.current.srcObject=f)}catch(v){console.error("Error accessing webcam:",v)}})(),()=>{f&&f.getTracks().forEach(v=>v.stop())}},[]);const t=.03/Math.max(.1,o),C=1-Math.max(0,Math.min(1,d)),S={"--blur-strength":`${i}px`,"--metalness":g,"--roughness":h,"--overlay-color":l,"--text-color":a,"--saturation":C};return e.jsxs("div",{className:`reflective-card-container ${u}`,style:{...m,...S},children:[e.jsx("svg",{className:"reflective-svg-filters","aria-hidden":"true",children:e.jsx("defs",{children:e.jsxs("filter",{id:"metallic-displacement",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[e.jsx("feTurbulence",{type:"turbulence",baseFrequency:t,numOctaves:"2",result:"noise"}),e.jsx("feColorMatrix",{in:"noise",type:"luminanceToAlpha",result:"noiseAlpha"}),e.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:r,xChannelSelector:"R",yChannelSelector:"G",result:"rippled"}),e.jsx("feSpecularLighting",{in:"noiseAlpha",surfaceScale:r,specularConstant:c,specularExponent:"20",lightingColor:"#ffffff",result:"light",children:e.jsx("fePointLight",{x:"0",y:"0",z:"300"})}),e.jsx("feComposite",{in:"light",in2:"rippled",operator:"in",result:"light-effect"}),e.jsx("feBlend",{in:"light-effect",in2:"rippled",mode:"screen",result:"metallic-result"}),e.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0",result:"solidAlpha"}),e.jsx("feMorphology",{in:"solidAlpha",operator:"erode",radius:"45",result:"erodedAlpha"}),e.jsx("feGaussianBlur",{in:"erodedAlpha",stdDeviation:"10",result:"blurredMap"}),e.jsx("feComponentTransfer",{in:"blurredMap",result:"glassMap",children:e.jsx("feFuncA",{type:"linear",slope:"0.5",intercept:"0"})}),e.jsx("feDisplacementMap",{in:"metallic-result",in2:"glassMap",scale:p,xChannelSelector:"A",yChannelSelector:"A",result:"final"})]})})}),e.jsx("video",{ref:n,autoPlay:!0,playsInline:!0,muted:!0,className:"reflective-video"}),e.jsx("div",{className:"reflective-noise"}),e.jsx("div",{className:"reflective-sheen"}),e.jsx("div",{className:"reflective-border"}),e.jsxs("div",{className:"reflective-content",children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("div",{className:"security-badge",children:[e.jsx(O,{size:14,className:"security-icon"}),e.jsx("span",{children:"SECURE ACCESS"})]}),e.jsx(z,{className:"status-icon",size:20})]}),e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"user-info",children:[e.jsx("h2",{className:"user-name",children:"ALEXANDER DOE"}),e.jsx("p",{className:"user-role",children:"SENIOR DEVELOPER"})]})}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("div",{className:"id-section",children:[e.jsx("span",{className:"label",children:"ID NUMBER"}),e.jsx("span",{className:"value",children:"8901-2345-6789"})]}),e.jsx("div",{className:"fingerprint-section",children:e.jsx(L,{size:32,className:"fingerprint-icon"})})]})]})]})},y={blurStrength:12,metalness:1,roughness:.75,displacementStrength:20,noiseScale:1,specularConstant:5,grayscale:.15,glassDistortion:30},te=()=>{const{props:i,updateProp:a,resetProps:g,hasChanges:h}=E(y),{blurStrength:l,metalness:r,roughness:o,displacementStrength:c,noiseScale:d,specularConstant:p,grayscale:u,glassDistortion:m}=i,n=b.useMemo(()=>[{name:"blurStrength",type:"number",default:"12",description:"The intensity of the blur effect (0-20px)"},{name:"metalness",type:"number",default:"1",description:"The opacity of the metallic sheen (0-1)"},{name:"roughness",type:"number",default:"0.4",description:"The opacity of the noise texture (0-1)"},{name:"displacementStrength",type:"number",default:"20",description:"Strength of the displacement (how much it warps)"},{name:"noiseScale",type:"number",default:"1",description:"Scale of the noise texture (size of the ripples)"},{name:"specularConstant",type:"number",default:"1.2",description:"Specular constant for the lighting (shininess)"},{name:"grayscale",type:"number",default:"1",description:"Grayscale intensity (0-1)"},{name:"glassDistortion",type:"number",default:"0",description:"Strength of the glass edge distortion"},{name:"color",type:"string",default:"white",description:"The base text color"},{name:"overlayColor",type:"string",default:"rgba(255, 255, 255, 0.1)",description:"The color of the overlay tint"}],[]);return e.jsx(w,{props:i,defaultProps:y,resetProps:g,hasChanges:h,children:e.jsxs(M,{children:[e.jsxs(A,{children:[e.jsx(N,{position:"relative",className:"demo-container",h:700,overflow:"hidden",children:e.jsx(W,{blurStrength:l,metalness:r,roughness:o,displacementStrength:c,noiseScale:d,specularConstant:p,grayscale:u,glassDistortion:m})}),e.jsxs(k,{children:[e.jsx(s,{title:"Blur Strength",min:0,max:20,step:.5,value:l,valueUnit:"px",onChange:t=>a("blurStrength",t)}),e.jsx(s,{title:"Metalness",min:0,max:1,step:.05,value:r,onChange:t=>a("metalness",t)}),e.jsx(s,{title:"Roughness",min:0,max:1,step:.05,value:o,onChange:t=>a("roughness",t)}),e.jsx(s,{title:"Warp Strength",min:0,max:50,step:1,value:c,onChange:t=>a("displacementStrength",t)}),e.jsx(s,{title:"Warp Scale",min:.1,max:5,step:.1,value:d,onChange:t=>a("noiseScale",t)}),e.jsx(s,{title:"Glass Distortion",min:0,max:50,step:1,value:m,onChange:t=>a("glassDistortion",t)}),e.jsx(s,{title:"Shininess",min:0,max:5,step:.1,value:p,onChange:t=>a("specularConstant",t)}),e.jsx(s,{title:"Grayscale",min:0,max:1,step:.05,value:u,onChange:t=>a("grayscale",t)})]}),e.jsx(R,{data:n}),e.jsx(F,{dependencyList:["lucide-react"]})]}),e.jsx(D,{children:e.jsx(j,{codeObject:V,componentName:"ReflectiveCard"})})]})})};export{te as default};
