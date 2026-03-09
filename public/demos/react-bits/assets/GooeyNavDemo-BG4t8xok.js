import{r as m,j as r,B as z}from"./index-CKqfvLoB.js";import{u as D,C as j,T as S,P as O,a as G,b as H,c as q}from"./PropTable-BzD4cJVp.js";import{C as V}from"./Customize-BaUKAf5J.js";import{P as C}from"./PreviewSlider-25yjOF_X.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";const K=({items:h,animationTime:d=600,particleCount:f=15,particleDistances:g=[90,10],particleR:R=100,timeVariance:v=300,colors:x=[1,2,3,1,2,3,1,4],initialActiveIndex:P=0})=>{const u=m.useRef(null),o=m.useRef(null),l=m.useRef(null),s=m.useRef(null),[y,A]=m.useState(P),b=(e=1)=>e/2-Math.random()*e,T=(e,t,n)=>{const a=(360+b(8))/n*t*(Math.PI/180);return[e*Math.cos(a),e*Math.sin(a)]},I=(e,t,n,a)=>{let i=b(a/10);return{start:T(n[0],f-e,f),end:T(n[1]+b(7),f-e,f),time:t,scale:1+b(.2),color:x[Math.floor(Math.random()*x.length)],rotate:i>0?(i+a/20)*10:(i-a/20)*10}},M=e=>{const t=g,n=R,a=d*2+v;e.style.setProperty("--time",`${a}ms`);for(let i=0;i<f;i++){const k=d*2+b(v*2),p=I(i,k,t,n);e.classList.remove("active"),setTimeout(()=>{const c=document.createElement("span"),w=document.createElement("span");c.classList.add("particle"),c.style.setProperty("--start-x",`${p.start[0]}px`),c.style.setProperty("--start-y",`${p.start[1]}px`),c.style.setProperty("--end-x",`${p.end[0]}px`),c.style.setProperty("--end-y",`${p.end[1]}px`),c.style.setProperty("--time",`${p.time}ms`),c.style.setProperty("--scale",`${p.scale}`),c.style.setProperty("--color",`var(--color-${p.color}, white)`),c.style.setProperty("--rotate",`${p.rotate}deg`),w.classList.add("point"),c.appendChild(w),e.appendChild(c),requestAnimationFrame(()=>{e.classList.add("active")}),setTimeout(()=>{try{e.removeChild(c)}catch{}},k)},30)}},E=e=>{if(!u.current||!l.current||!s.current)return;const t=u.current.getBoundingClientRect(),n=e.getBoundingClientRect(),a={left:`${n.x-t.x}px`,top:`${n.y-t.y}px`,width:`${n.width}px`,height:`${n.height}px`};Object.assign(l.current.style,a),Object.assign(s.current.style,a),s.current.innerText=e.innerText},L=(e,t)=>{const n=e.currentTarget;y!==t&&(A(t),E(n),l.current&&l.current.querySelectorAll(".particle").forEach(i=>l.current.removeChild(i)),s.current&&(s.current.classList.remove("active"),s.current.offsetWidth,s.current.classList.add("active")),l.current&&M(l.current))},N=(e,t)=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();const n=e.currentTarget.parentElement;n&&L({currentTarget:n},t)}};return m.useEffect(()=>{var n;if(!o.current||!u.current)return;const e=o.current.querySelectorAll("li")[y];e&&(E(e),(n=s.current)==null||n.classList.add("active"));const t=new ResizeObserver(()=>{var i;const a=(i=o.current)==null?void 0:i.querySelectorAll("li")[y];a&&E(a)});return t.observe(u.current),()=>t.disconnect()},[y]),r.jsxs("div",{className:"gooey-nav-container",ref:u,children:[r.jsx("nav",{children:r.jsx("ul",{ref:o,children:h.map((e,t)=>r.jsx("li",{className:y===t?"active":"",children:r.jsx("a",{href:e.href,onClick:n=>L(n,t),onKeyDown:n=>N(n,t),children:e.label})},t))})}),r.jsx("span",{className:"effect filter",ref:l}),r.jsx("span",{className:"effect text",ref:s})]})},X=`import { useRef, useEffect, useState } from 'react';
import './GooeyNav.css';

const GooeyNav = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0
}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);
  const textRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (distance, pointIndex, totalPoints) => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i, t, d, r) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
    };
  };

  const makeParticles = element => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', \`\${bubbleTime}ms\`);

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove('active');

      setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add('particle');
        particle.style.setProperty('--start-x', \`\${p.start[0]}px\`);
        particle.style.setProperty('--start-y', \`\${p.start[1]}px\`);
        particle.style.setProperty('--end-x', \`\${p.end[0]}px\`);
        particle.style.setProperty('--end-y', \`\${p.end[1]}px\`);
        particle.style.setProperty('--time', \`\${p.time}ms\`);
        particle.style.setProperty('--scale', \`\${p.scale}\`);
        particle.style.setProperty('--color', \`var(--color-\${p.color}, white)\`);
        particle.style.setProperty('--rotate', \`\${p.rotate}deg\`);

        point.classList.add('point');
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add('active');
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {
            // Do nothing
          }
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = element => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const styles = {
      left: \`\${pos.x - containerRect.x}px\`,
      top: \`\${pos.y - containerRect.y}px\`,
      width: \`\${pos.width}px\`,
      height: \`\${pos.height}px\`
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };

  const handleClick = (e, index) => {
    const liEl = e.currentTarget;
    if (activeIndex === index) return;

    setActiveIndex(index);
    updateEffectPosition(liEl);

    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll('.particle');
      particles.forEach(p => filterRef.current.removeChild(p));
    }

    if (textRef.current) {
      textRef.current.classList.remove('active');

      void textRef.current.offsetWidth;
      textRef.current.classList.add('active');
    }

    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement;
      if (liEl) {
        handleClick({ currentTarget: liEl }, index);
      }
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll('li')[activeIndex];
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add('active');
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll('li')[activeIndex];
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <div className="gooey-nav-container" ref={containerRef}>
      <nav>
        <ul ref={navRef}>
          {items.map((item, index) => (
            <li key={index} className={activeIndex === index ? 'active' : ''}>
              <a href={item.href} onClick={e => handleClick(e, index)} onKeyDown={e => handleKeyDown(e, index)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <span className="effect filter" ref={filterRef} />
      <span className="effect text" ref={textRef} />
    </div>
  );
};

export default GooeyNav;
`,Y=`:root {
  --linear-ease: linear(
    0,
    0.068,
    0.19 2.7%,
    0.804 8.1%,
    1.037,
    1.199 13.2%,
    1.245,
    1.27 15.8%,
    1.274,
    1.272 17.4%,
    1.249 19.1%,
    0.996 28%,
    0.949,
    0.928 33.3%,
    0.926,
    0.933 36.8%,
    1.001 45.6%,
    1.013,
    1.019 50.8%,
    1.018 54.4%,
    1 63.1%,
    0.995 68%,
    1.001 85%,
    1
  );
}

.gooey-nav-container {
  position: relative;
}

.gooey-nav-container nav {
  display: flex;
  position: relative;
  transform: translate3d(0, 0, 0.01px);
}

.gooey-nav-container nav ul {
  display: flex;
  gap: 2em;
  list-style: none;
  padding: 0 1em;
  margin: 0;
  position: relative;
  z-index: 3;
  color: white;
  text-shadow: 0 1px 1px hsl(205deg 30% 10% / 0.2);
}

.gooey-nav-container nav ul li {
  border-radius: 100vw;
  position: relative;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 0 0.5px 1.5px transparent;
  color: white;
}

.gooey-nav-container nav ul li a {
  display: inline-block;
  padding: 0.6em 1em;
}

.gooey-nav-container nav ul li:focus-within:has(:focus-visible) {
  box-shadow: 0 0 0.5px 1.5px white;
}

.gooey-nav-container nav ul li::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: white;
  opacity: 0;
  transform: scale(0);
  transition: all 0.3s ease;
  z-index: -1;
}

.gooey-nav-container nav ul li.active {
  color: black;
  text-shadow: none;
}

.gooey-nav-container nav ul li.active::after {
  opacity: 1;
  transform: scale(1);
}

.gooey-nav-container .effect {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  opacity: 1;
  pointer-events: none;
  display: grid;
  place-items: center;
  z-index: 1;
}

.gooey-nav-container .effect.text {
  color: white;
  transition: color 0.3s ease;
}

.gooey-nav-container .effect.text.active {
  color: black;
}

.gooey-nav-container .effect.filter {
  filter: blur(7px) contrast(100) blur(0);
  mix-blend-mode: lighten;
}

.gooey-nav-container .effect.filter::before {
  content: '';
  position: absolute;
  inset: -75px;
  z-index: -2;
  background: black;
}

.gooey-nav-container .effect.filter::after {
  content: '';
  position: absolute;
  inset: 0;
  background: white;
  transform: scale(0);
  opacity: 0;
  z-index: -1;
  border-radius: 100vw;
}

.gooey-nav-container .effect.active::after {
  animation: pill 0.3s ease both;
}

@keyframes pill {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.particle,
.point {
  display: block;
  opacity: 0;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  transform-origin: center;
}

.particle {
  --time: 5s;
  position: absolute;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  animation: particle calc(var(--time)) ease 1 -350ms;
}

.point {
  background: var(--color);
  opacity: 1;
  animation: point calc(var(--time)) ease 1 -350ms;
}

@keyframes particle {
  0% {
    transform: rotate(0deg) translate(calc(var(--start-x)), calc(var(--start-y)));
    opacity: 1;
    animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
  }

  70% {
    transform: rotate(calc(var(--rotate) * 0.5)) translate(calc(var(--end-x) * 1.2), calc(var(--end-y) * 1.2));
    opacity: 1;
    animation-timing-function: ease;
  }

  85% {
    transform: rotate(calc(var(--rotate) * 0.66)) translate(calc(var(--end-x)), calc(var(--end-y)));
    opacity: 1;
  }

  100% {
    transform: rotate(calc(var(--rotate) * 1.2)) translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5));
    opacity: 1;
  }
}

@keyframes point {
  0% {
    transform: scale(0);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
  }

  25% {
    transform: scale(calc(var(--scale) * 0.25));
  }

  38% {
    opacity: 1;
  }

  65% {
    transform: scale(var(--scale));
    opacity: 1;
    animation-timing-function: ease;
  }

  85% {
    transform: scale(var(--scale));
    opacity: 1;
  }

  100% {
    transform: scale(0);
    opacity: 0;
  }
}
`,_=`import { useRef, useEffect, useState } from 'react';

const GooeyNav = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0
}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);
  const textRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const noise = (n = 1) => n / 2 - Math.random() * n;
  const getXY = (distance, pointIndex, totalPoints) => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };
  const createParticle = (i, t, d, r) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
    };
  };
  const makeParticles = element => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', \`\${bubbleTime}ms\`);
    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove('active');
      setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add('particle');
        particle.style.setProperty('--start-x', \`\${p.start[0]}px\`);
        particle.style.setProperty('--start-y', \`\${p.start[1]}px\`);
        particle.style.setProperty('--end-x', \`\${p.end[0]}px\`);
        particle.style.setProperty('--end-y', \`\${p.end[1]}px\`);
        particle.style.setProperty('--time', \`\${p.time}ms\`);
        particle.style.setProperty('--scale', \`\${p.scale}\`);
        particle.style.setProperty('--color', \`var(--color-\${p.color}, white)\`);
        particle.style.setProperty('--rotate', \`\${p.rotate}deg\`);
        point.classList.add('point');
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add('active');
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {
            // do nothing
          }
        }, t);
      }, 30);
    }
  };
  const updateEffectPosition = element => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    const styles = {
      left: \`\${pos.x - containerRect.x}px\`,
      top: \`\${pos.y - containerRect.y}px\`,
      width: \`\${pos.width}px\`,
      height: \`\${pos.height}px\`
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };
  const handleClick = (e, index) => {
    const liEl = e.currentTarget;
    if (activeIndex === index) return;
    setActiveIndex(index);
    updateEffectPosition(liEl);
    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll('.particle');
      particles.forEach(p => filterRef.current.removeChild(p));
    }
    if (textRef.current) {
      textRef.current.classList.remove('active');
      void textRef.current.offsetWidth;
      textRef.current.classList.add('active');
    }
    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement;
      if (liEl) {
        handleClick({ currentTarget: liEl }, index);
      }
    }
  };
  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll('li')[activeIndex];
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add('active');
    }
    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll('li')[activeIndex];
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <>
      {/* This effect is quite difficult to recreate faithfully using Tailwind, so a style tag is a necessary workaround */}
      <style>
        {\`
          :root {
            --linear-ease: linear(0, 0.068, 0.19 2.7%, 0.804 8.1%, 1.037, 1.199 13.2%, 1.245, 1.27 15.8%, 1.274, 1.272 17.4%, 1.249 19.1%, 0.996 28%, 0.949, 0.928 33.3%, 0.926, 0.933 36.8%, 1.001 45.6%, 1.013, 1.019 50.8%, 1.018 54.4%, 1 63.1%, 0.995 68%, 1.001 85%, 1);
          }
          .effect {
            position: absolute;
            opacity: 1;
            pointer-events: none;
            display: grid;
            place-items: center;
            z-index: 1;
          }
          .effect.text {
            color: white;
            transition: color 0.3s ease;
          }
          .effect.text.active {
            color: black;
          }
          .effect.filter {
            filter: blur(7px) contrast(100) blur(0);
            mix-blend-mode: lighten;
          }
          .effect.filter::before {
            content: "";
            position: absolute;
            inset: -75px;
            z-index: -2;
            background: black;
          }
          .effect.filter::after {
            content: "";
            position: absolute;
            inset: 0;
            background: white;
            transform: scale(0);
            opacity: 0;
            z-index: -1;
            border-radius: 9999px;
          }
          .effect.active::after {
            animation: pill 0.3s ease both;
          }
          @keyframes pill {
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          .particle,
          .point {
            display: block;
            opacity: 0;
            width: 20px;
            height: 20px;
            border-radius: 9999px;
            transform-origin: center;
          }
          .particle {
            --time: 5s;
            position: absolute;
            top: calc(50% - 8px);
            left: calc(50% - 8px);
            animation: particle calc(var(--time)) ease 1 -350ms;
          }
          .point {
            background: var(--color);
            opacity: 1;
            animation: point calc(var(--time)) ease 1 -350ms;
          }
          @keyframes particle {
            0% {
              transform: rotate(0deg) translate(calc(var(--start-x)), calc(var(--start-y)));
              opacity: 1;
              animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
            }
            70% {
              transform: rotate(calc(var(--rotate) * 0.5)) translate(calc(var(--end-x) * 1.2), calc(var(--end-y) * 1.2));
              opacity: 1;
              animation-timing-function: ease;
            }
            85% {
              transform: rotate(calc(var(--rotate) * 0.66)) translate(calc(var(--end-x)), calc(var(--end-y)));
              opacity: 1;
            }
            100% {
              transform: rotate(calc(var(--rotate) * 1.2)) translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5));
              opacity: 1;
            }
          }
          @keyframes point {
            0% {
              transform: scale(0);
              opacity: 0;
              animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
            }
            25% {
              transform: scale(calc(var(--scale) * 0.25));
            }
            38% {
              opacity: 1;
            }
            65% {
              transform: scale(var(--scale));
              opacity: 1;
              animation-timing-function: ease;
            }
            85% {
              transform: scale(var(--scale));
              opacity: 1;
            }
            100% {
              transform: scale(0);
              opacity: 0;
            }
          }
          li.active {
            color: black;
            text-shadow: none;
          }
          li.active::after {
            opacity: 1;
            transform: scale(1);
          }
          li::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 8px;
            background: white;
            opacity: 0;
            transform: scale(0);
            transition: all 0.3s ease;
            z-index: -1;
          }
        \`}
      </style>
      <div className="relative" ref={containerRef}>
        <nav className="flex relative" style={{ transform: 'translate3d(0,0,0.01px)' }}>
          <ul
            ref={navRef}
            className="flex gap-8 list-none p-0 px-4 m-0 relative z-[3]"
            style={{
              color: 'white',
              textShadow: '0 1px 1px hsl(205deg 30% 10% / 0.2)'
            }}
          >
            {items.map((item, index) => (
              <li
                key={index}
                className={\`rounded-full relative cursor-pointer transition-[background-color_color_box-shadow] duration-300 ease shadow-[0_0_0.5px_1.5px_transparent] text-white \${
                  activeIndex === index ? 'active' : ''
                }\`}
              >
                <a
                  onClick={e => handleClick(e, index)}
                  href={item.href}
                  onKeyDown={e => handleKeyDown(e, index)}
                  className="outline-none py-[0.6em] px-[1em] inline-block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <span className="effect filter" ref={filterRef} />
        <span className="effect text" ref={textRef} />
      </div>
    </>
  );
};

export default GooeyNav;
`,B=`import React, { useRef, useEffect, useState } from 'react';
import './GooeyNav.css';

interface GooeyNavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (distance: number, pointIndex: number, totalPoints: number): [number, number] => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i: number, t: number, d: [number, number], r: number) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
    };
  };

  const makeParticles = (element: HTMLElement) => {
    const d: [number, number] = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', \`\${bubbleTime}ms\`);

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove('active');

      setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add('particle');
        particle.style.setProperty('--start-x', \`\${p.start[0]}px\`);
        particle.style.setProperty('--start-y', \`\${p.start[1]}px\`);
        particle.style.setProperty('--end-x', \`\${p.end[0]}px\`);
        particle.style.setProperty('--end-y', \`\${p.end[1]}px\`);
        particle.style.setProperty('--time', \`\${p.time}ms\`);
        particle.style.setProperty('--scale', \`\${p.scale}\`);
        particle.style.setProperty('--color', \`var(--color-\${p.color}, white)\`);
        particle.style.setProperty('--rotate', \`\${p.rotate}deg\`);

        point.classList.add('point');
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add('active');
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {
            // Do nothing
          }
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = (element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const styles = {
      left: \`\${pos.x - containerRect.x}px\`,
      top: \`\${pos.y - containerRect.y}px\`,
      width: \`\${pos.width}px\`,
      height: \`\${pos.height}px\`
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    const liEl = e.currentTarget;
    if (activeIndex === index) return;

    setActiveIndex(index);
    updateEffectPosition(liEl);

    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll('.particle');
      particles.forEach(p => filterRef.current!.removeChild(p));
    }

    if (textRef.current) {
      textRef.current.classList.remove('active');

      void textRef.current.offsetWidth;
      textRef.current.classList.add('active');
    }

    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement;
      if (liEl) {
        handleClick(
          {
            currentTarget: liEl
          } as React.MouseEvent<HTMLAnchorElement>,
          index
        );
      }
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll('li')[activeIndex] as HTMLElement;
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add('active');
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll('li')[activeIndex] as HTMLElement;
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <div className="gooey-nav-container" ref={containerRef}>
      <nav>
        <ul ref={navRef}>
          {items.map((item, index) => (
            <li key={index} className={activeIndex === index ? 'active' : ''}>
              <a href={item.href} onClick={e => handleClick(e, index)} onKeyDown={e => handleKeyDown(e, index)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <span className="effect filter" ref={filterRef} />
      <span className="effect text" ref={textRef} />
    </div>
  );
};

export default GooeyNav;
`,F=`import React, { useRef, useEffect, useState } from 'react';

interface GooeyNavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);

  const noise = (n = 1) => n / 2 - Math.random() * n;
  const getXY = (distance: number, pointIndex: number, totalPoints: number): [number, number] => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };
  const createParticle = (i: number, t: number, d: [number, number], r: number) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
    };
  };
  const makeParticles = (element: HTMLElement) => {
    const d: [number, number] = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', \`\${bubbleTime}ms\`);
    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove('active');
      setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add('particle');
        particle.style.setProperty('--start-x', \`\${p.start[0]}px\`);
        particle.style.setProperty('--start-y', \`\${p.start[1]}px\`);
        particle.style.setProperty('--end-x', \`\${p.end[0]}px\`);
        particle.style.setProperty('--end-y', \`\${p.end[1]}px\`);
        particle.style.setProperty('--time', \`\${p.time}ms\`);
        particle.style.setProperty('--scale', \`\${p.scale}\`);
        particle.style.setProperty('--color', \`var(--color-\${p.color}, white)\`);
        particle.style.setProperty('--rotate', \`\${p.rotate}deg\`);
        point.classList.add('point');
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add('active');
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {}
        }, t);
      }, 30);
    }
  };
  const updateEffectPosition = (element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    const styles = {
      left: \`\${pos.x - containerRect.x}px\`,
      top: \`\${pos.y - containerRect.y}px\`,
      width: \`\${pos.width}px\`,
      height: \`\${pos.height}px\`
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = element.innerText;
  };
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    const liEl = e.currentTarget;
    if (activeIndex === index) return;
    setActiveIndex(index);
    updateEffectPosition(liEl);
    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll('.particle');
      particles.forEach(p => filterRef.current!.removeChild(p));
    }
    if (textRef.current) {
      textRef.current.classList.remove('active');
      void textRef.current.offsetWidth;
      textRef.current.classList.add('active');
    }
    if (filterRef.current) {
      makeParticles(filterRef.current);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement;
      if (liEl) {
        handleClick(
          {
            currentTarget: liEl
          } as React.MouseEvent<HTMLAnchorElement>,
          index
        );
      }
    }
  };
  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll('li')[activeIndex] as HTMLElement;
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add('active');
    }
    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll('li')[activeIndex] as HTMLElement;
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  return (
    <>
      {/* This effect is quite difficult to recreate faithfully using Tailwind, so a style tag is a necessary workaround */}
      <style>
        {\`
          :root {
            --linear-ease: linear(0, 0.068, 0.19 2.7%, 0.804 8.1%, 1.037, 1.199 13.2%, 1.245, 1.27 15.8%, 1.274, 1.272 17.4%, 1.249 19.1%, 0.996 28%, 0.949, 0.928 33.3%, 0.926, 0.933 36.8%, 1.001 45.6%, 1.013, 1.019 50.8%, 1.018 54.4%, 1 63.1%, 0.995 68%, 1.001 85%, 1);
          }
          .effect {
            position: absolute;
            opacity: 1;
            pointer-events: none;
            display: grid;
            place-items: center;
            z-index: 1;
          }
          .effect.text {
            color: white;
            transition: color 0.3s ease;
          }
          .effect.text.active {
            color: black;
          }
          .effect.filter {
            filter: blur(7px) contrast(100) blur(0);
            mix-blend-mode: lighten;
          }
          .effect.filter::before {
            content: "";
            position: absolute;
            inset: -75px;
            z-index: -2;
            background: black;
          }
          .effect.filter::after {
            content: "";
            position: absolute;
            inset: 0;
            background: white;
            transform: scale(0);
            opacity: 0;
            z-index: -1;
            border-radius: 9999px;
          }
          .effect.active::after {
            animation: pill 0.3s ease both;
          }
          @keyframes pill {
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
          .particle,
          .point {
            display: block;
            opacity: 0;
            width: 20px;
            height: 20px;
            border-radius: 9999px;
            transform-origin: center;
          }
          .particle {
            --time: 5s;
            position: absolute;
            top: calc(50% - 8px);
            left: calc(50% - 8px);
            animation: particle calc(var(--time)) ease 1 -350ms;
          }
          .point {
            background: var(--color);
            opacity: 1;
            animation: point calc(var(--time)) ease 1 -350ms;
          }
          @keyframes particle {
            0% {
              transform: rotate(0deg) translate(calc(var(--start-x)), calc(var(--start-y)));
              opacity: 1;
              animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
            }
            70% {
              transform: rotate(calc(var(--rotate) * 0.5)) translate(calc(var(--end-x) * 1.2), calc(var(--end-y) * 1.2));
              opacity: 1;
              animation-timing-function: ease;
            }
            85% {
              transform: rotate(calc(var(--rotate) * 0.66)) translate(calc(var(--end-x)), calc(var(--end-y)));
              opacity: 1;
            }
            100% {
              transform: rotate(calc(var(--rotate) * 1.2)) translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5));
              opacity: 1;
            }
          }
          @keyframes point {
            0% {
              transform: scale(0);
              opacity: 0;
              animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
            }
            25% {
              transform: scale(calc(var(--scale) * 0.25));
            }
            38% {
              opacity: 1;
            }
            65% {
              transform: scale(var(--scale));
              opacity: 1;
              animation-timing-function: ease;
            }
            85% {
              transform: scale(var(--scale));
              opacity: 1;
            }
            100% {
              transform: scale(0);
              opacity: 0;
            }
          }
          li.active {
            color: black;
            text-shadow: none;
          }
          li.active::after {
            opacity: 1;
            transform: scale(1);
          }
          li::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 8px;
            background: white;
            opacity: 0;
            transform: scale(0);
            transition: all 0.3s ease;
            z-index: -1;
          }
        \`}
      </style>
      <div className="relative" ref={containerRef}>
        <nav className="flex relative" style={{ transform: 'translate3d(0,0,0.01px)' }}>
          <ul
            ref={navRef}
            className="flex gap-8 list-none p-0 px-4 m-0 relative z-[3]"
            style={{
              color: 'white',
              textShadow: '0 1px 1px hsl(205deg 30% 10% / 0.2)'
            }}
          >
            {items.map((item, index) => (
              <li
                key={index}
                className={\`rounded-full relative cursor-pointer transition-[background-color_color_box-shadow] duration-300 ease shadow-[0_0_0.5px_1.5px_transparent] text-white \${
                  activeIndex === index ? 'active' : ''
                }\`}
              >
                <a
                  href={item.href}
                  onClick={e => handleClick(e, index)}
                  onKeyDown={e => handleKeyDown(e, index)}
                  className="outline-none py-[0.6em] px-[1em] inline-block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <span className="effect filter" ref={filterRef} />
        <span className="effect text" ref={textRef} />
      </div>
    </>
  );
};

export default GooeyNav;
`,W={usage:`import GooeyNav from './GooeyNav'

// update with your own items
const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

<div style={{ height: '600px', position: 'relative' }}>
  <GooeyNav
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
</div>`,code:X,css:Y,tailwind:_,tsCode:B,tsTailwind:F},$={particleCount:15,timeVariance:300,particleR:100},re=()=>{const{props:h,updateProp:d,resetProps:f,hasChanges:g}=D($),{particleCount:R,timeVariance:v,particleR:x}=h,P=m.useMemo(()=>[{name:"items",type:"GooeyNavItem[]",default:"[]",description:"Array of navigation items."},{name:"animationTime",type:"number",default:"600",description:"Duration (ms) of the main animation."},{name:"particleCount",type:"number",default:"15",description:"Number of bubble particles per transition."},{name:"particleDistances",type:"[number, number]",default:"[90, 10]",description:"Outer and inner distances of bubble spread."},{name:"particleR",type:"number",default:"100",description:"Radius factor influencing random particle rotation."},{name:"timeVariance",type:"number",default:"300",description:"Random time variance (ms) for particle animations."},{name:"colors",type:"number[]",default:"[1, 2, 3, 1, 2, 3, 1, 4]",description:"Color indices used when creating bubble particles."},{name:"initialActiveIndex",type:"number",default:"0",description:"Which item is selected on mount."}],[]),u=[{label:"Home",href:null},{label:"About",href:null},{label:"Contact",href:null}];return r.jsx(j,{props:h,defaultProps:$,resetProps:f,hasChanges:g,children:r.jsxs(S,{children:[r.jsxs(O,{children:[r.jsx(z,{position:"relative",className:"demo-container",h:400,overflow:"hidden",children:r.jsx(K,{items:u,animationTime:500,particleCount:R,particleDistances:[90,0],particleR:x,timeVariance:v,initialActiveIndex:0})}),r.jsxs(V,{children:[r.jsx(C,{title:"Particle Count",min:1,max:50,step:1,value:R,onChange:o=>{d("particleCount",o)}}),r.jsx(C,{title:"Animation Variance",min:0,max:2e3,step:100,value:v,onChange:o=>{d("timeVariance",o)}}),r.jsx(C,{title:"Radius Factor",min:0,max:1e3,step:100,value:x,onChange:o=>{d("particleR",o)}})]}),r.jsx(G,{data:P})]}),r.jsx(H,{children:r.jsx(q,{codeObject:W,componentName:"GooeyNav"})})]})})};export{re as default};
