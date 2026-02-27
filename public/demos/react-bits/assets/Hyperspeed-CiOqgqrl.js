import{r as q,j as ce}from"./index-CKqfvLoB.js";import{m as h,V as f,W as de,d as me,S as fe,bi as ge,n as pe,ad as ve,P as j,C as v,a as U,K as $,bc as m,M as W,bj as we,bk as Pe,bd as G,as as y,t as V}from"./three.module-DbwSNGae.js";import{E as xe,R as ye,a as H,B as Le,S as A,b as Fe}from"./index-XT30UhE1.js";const E={onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:4,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.03,400*.2],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:16777215,brokenLines:16777215,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}},Ie=({effectOptions:T=E})=>{const J=q.useRef(null),L=q.useRef(null);return q.useEffect(()=>{if(L.current){L.current.dispose();const i=document.getElementById("lights");if(i)for(;i.firstChild;)i.removeChild(i.firstChild)}const b={uFreq:{value:new h(3,6,10)},uAmp:{value:new h(30,30,20)}},I={uFreq:{value:new f(5,2)},uAmp:{value:new f(25,15)}},k={uFreq:{value:new f(2,3)},uAmp:{value:new f(35,10)}},S={uFreq:{value:new V(4,8,8,1)},uAmp:{value:new V(25,5,10,10)}},F={uFreq:{value:new f(4,8)},uAmp:{value:new f(10,20)},uPowY:{value:new f(20,2)}};let w=i=>Math.sin(i)*.5+.5;const N={mountainDistortion:{uniforms:b,getDistortion:`
          uniform vec3 uAmp;
          uniform vec3 uFreq;
          #define PI 3.14159265358979
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              nsin(progress * PI * uFreq.y + uTime) * uAmp.y - nsin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
              nsin(progress * PI * uFreq.z + uTime) * uAmp.z - nsin(movementProgressFix * PI * uFreq.z + uTime) * uAmp.z
            );
          }
        `,getJS:(i,e)=>{let t=.02,s=b.uFreq.value,o=b.uAmp.value,r=new h(Math.cos(i*Math.PI*s.x+e)*o.x-Math.cos(t*Math.PI*s.x+e)*o.x,w(i*Math.PI*s.y+e)*o.y-w(t*Math.PI*s.y+e)*o.y,w(i*Math.PI*s.z+e)*o.z-w(t*Math.PI*s.z+e)*o.z),n=new h(2,2,2),u=new h(0,0,-5);return r.multiply(n).add(u)}},xyDistortion:{uniforms:I,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + PI/2. + uTime) * uAmp.y - sin(movementProgressFix * PI * uFreq.y + PI/2. + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(i,e)=>{let t=.02,s=I.uFreq.value,o=I.uAmp.value,r=new h(Math.cos(i*Math.PI*s.x+e)*o.x-Math.cos(t*Math.PI*s.x+e)*o.x,Math.sin(i*Math.PI*s.y+e+Math.PI/2)*o.y-Math.sin(t*Math.PI*s.y+e+Math.PI/2)*o.y,0),n=new h(2,.4,1),u=new h(0,0,-3);return r.multiply(n).add(u)}},LongRaceDistortion:{uniforms:k,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float camProgress = 0.0125;
            return vec3( 
              sin(progress * PI * uFreq.x + uTime) * uAmp.x - sin(camProgress * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + uTime) * uAmp.y - sin(camProgress * PI * uFreq.y + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(i,e)=>{let t=.0125,s=k.uFreq.value,o=k.uAmp.value,r=new h(Math.sin(i*Math.PI*s.x+e)*o.x-Math.sin(t*Math.PI*s.x+e)*o.x,Math.sin(i*Math.PI*s.y+e)*o.y-Math.sin(t*Math.PI*s.y+e)*o.y,0),n=new h(1,1,0),u=new h(0,0,-5);return r.multiply(n).add(u)}},turbulentDistortion:{uniforms:S,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r + uTime) * uAmp.r +
              pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.0125),
              getDistortionY(progress) - getDistortionY(0.0125),
              0.
            );
          }
        `,getJS:(i,e)=>{const t=S.uFreq.value,s=S.uAmp.value,o=a=>Math.cos(Math.PI*a*t.x+e)*s.x+Math.pow(Math.cos(Math.PI*a*t.y+e*(t.y/t.x)),2)*s.y,r=a=>-w(Math.PI*a*t.z+e)*s.z-Math.pow(w(Math.PI*a*t.w+e/(t.z/t.w)),5)*s.w;let n=new h(o(i)-o(i+.007),r(i)-r(i+.007),0),u=new h(-2,-5,0),l=new h(0,0,-10);return n.multiply(u).add(l)}},turbulentDistortionStill:{uniforms:S,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r) * uAmp.r +
              pow(cos(PI * progress * uFreq.g * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `},deepDistortionStill:{uniforms:F,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x) * uAmp.x * 2.
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.05),
              0.
            );
          }
        `},deepDistortion:{uniforms:F,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x + uTime) * uAmp.x
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y + uTime) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `,getJS:(i,e)=>{const t=F.uFreq.value,s=F.uAmp.value,o=F.uPowY.value,r=d=>Math.sin(d*Math.PI*t.x+e)*s.x,n=d=>Math.pow(d*o.x,o.y)+Math.sin(d*Math.PI*t.y+e)*s.y;let u=new h(r(i)-r(i+.01),n(i)-n(i+.01),0),l=new h(-2,-4,0),a=new h(0,0,-10);return u.multiply(l).add(a)}}};class K{constructor(e,t={}){this.options=t,this.options.distortion==null&&(this.options.distortion={uniforms:Z,getDistortion:Q}),this.container=e,this.renderer=new de({antialias:!1,alpha:!0}),this.renderer.setSize(e.offsetWidth,e.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new xe(this.renderer),e.append(this.renderer.domElement),this.camera=new me(t.fov,e.offsetWidth/e.offsetHeight,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new fe,this.scene.background=null;let s=new ge(t.colors.background,t.length*.2,t.length*500);this.scene.fog=s,this.fogUniforms={fogColor:{value:s.color},fogNear:{value:s.near},fogFar:{value:s.far}},this.clock=new pe,this.assets={},this.disposed=!1,this.road=new re(this,t),this.leftCarLights=new R(this,t,t.colors.leftCars,t.movingAwaySpeed,new f(0,1-t.carLightsFade)),this.rightCarLights=new R(this,t,t.colors.rightCars,t.movingCloserSpeed,new f(1,0+t.carLightsFade)),this.leftSticks=new oe(this,t),this.fovTarget=t.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),window.addEventListener("resize",this.onWindowResize.bind(this))}onWindowResize(){const e=this.container.offsetWidth,t=this.container.offsetHeight;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t)}initPasses(){this.renderPass=new ye(this.scene,this.camera),this.bloomPass=new H(this.camera,new Le({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1}));const e=new H(this.camera,new A({preset:Fe.MEDIUM,searchImage:A.searchImageDataURL,areaImage:A.areaImageDataURL}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,e.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(e)}loadAssets(){const e=this.assets;return new Promise(t=>{const s=new ve(t),o=new Image,r=new Image;e.smaa={},o.addEventListener("load",function(){e.smaa.search=this,s.itemEnd("smaa-search")}),r.addEventListener("load",function(){e.smaa.area=this,s.itemEnd("smaa-area")}),s.itemStart("smaa-search"),s.itemStart("smaa-area"),o.src=A.searchImageDataURL,r.src=A.areaImageDataURL})}init(){this.initPasses();const e=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh.position.setX(-e.roadWidth/2-e.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh.position.setX(e.roadWidth/2+e.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh.position.setX(-(e.roadWidth+e.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.tick()}onMouseDown(e){this.options.onSpeedUp&&this.options.onSpeedUp(e),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(e){this.options.onSlowDown&&this.options.onSlowDown(e),this.fovTarget=this.options.fov,this.speedUpTarget=0}onTouchStart(e){this.options.onSpeedUp&&this.options.onSpeedUp(e),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onTouchEnd(e){this.options.onSlowDown&&this.options.onSlowDown(e),this.fovTarget=this.options.fov,this.speedUpTarget=0}onContextMenu(e){e.preventDefault()}update(e){let t=Math.exp(-(-60*Math.log2(.9))*e);this.speedUp+=z(this.speedUp,this.speedUpTarget,t,1e-5),this.timeOffset+=this.speedUp*e;let s=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(s),this.leftCarLights.update(s),this.leftSticks.update(s),this.road.update(s);let o=!1,r=z(this.camera.fov,this.fovTarget,t);if(r!==0&&(this.camera.fov+=r*e*6,o=!0),this.options.distortion.getJS){const n=this.options.distortion.getJS(.025,s);this.camera.lookAt(new h(this.camera.position.x+n.x,this.camera.position.y+n.y,this.camera.position.z+n.z)),o=!0}o&&this.camera.updateProjectionMatrix()}render(e){this.composer.render(e)}dispose(){this.disposed=!0,this.renderer&&this.renderer.dispose(),this.composer&&this.composer.dispose(),this.scene&&this.scene.clear(),window.removeEventListener("resize",this.onWindowResize.bind(this)),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu))}setSize(e,t,s){this.composer.setSize(e,t,s)}tick(){if(this.disposed||!this)return;if(he(this.renderer,this.setSize)){const t=this.renderer.domElement;this.camera.aspect=t.clientWidth/t.clientHeight,this.camera.updateProjectionMatrix()}const e=this.clock.getDelta();this.render(e),this.update(e),requestAnimationFrame(this.tick)}}const Z={uDistortionX:{value:new f(80,3)},uDistortionY:{value:new f(-40,2.5)}},Q=`
      #define PI 3.14159265358979
      uniform vec2 uDistortionX;
      uniform vec2 uDistortionY;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      vec3 getDistortion(float progress){
        progress = clamp(progress, 0., 1.);
        float xAmp = uDistortionX.r;
        float xFreq = uDistortionX.g;
        float yAmp = uDistortionY.r;
        float yFreq = uDistortionY.g;
        return vec3( 
          xAmp * nsin(progress * PI * xFreq - PI / 2.),
          yAmp * nsin(progress * PI * yFreq - PI / 2.),
          0.
        );
      }
    `,g=i=>Array.isArray(i)?Math.random()*(i[1]-i[0])+i[0]:Math.random()*i,_=i=>Array.isArray(i)?i[Math.floor(Math.random()*i.length)]:i;function z(i,e,t=.1,s=.001){let o=(e-i)*t;return Math.abs(o)<s&&(o=e-i),o}class R{constructor(e,t,s,o,r){this.webgl=e,this.options=t,this.colors=s,this.speed=o,this.fade=r}init(){const e=this.options;let t=new we(new h(0,0,0),new h(0,0,-1)),s=new Pe(t,40,1,8,!1),o=new G().copy(s);o.instanceCount=e.lightPairsPerRoadWay*2;let r=e.roadWidth/e.lanesPerRoad,n=[],u=[],l=[],a=this.colors;Array.isArray(a)?a=a.map(c=>new v(c)):a=new v(a);for(let c=0;c<e.lightPairsPerRoadWay;c++){let M=g(e.carLightsRadius),D=g(e.carLightsLength),P=g(this.speed),C=c%e.lanesPerRoad*r-e.roadWidth/2+r/2,O=g(e.carWidthPercentage)*r,le=g(e.carShiftX)*r;C+=le;let X=g(e.carFloorSeparation)+M*1.3,B=-g(e.length);n.push(C-O/2),n.push(X),n.push(B),n.push(C+O/2),n.push(X),n.push(B),u.push(M),u.push(D),u.push(P),u.push(M),u.push(D),u.push(P);let x=_(a);l.push(x.r),l.push(x.g),l.push(x.b),l.push(x.r),l.push(x.g),l.push(x.b)}o.setAttribute("aOffset",new y(new Float32Array(n),3,!1)),o.setAttribute("aMetrics",new y(new Float32Array(u),3,!1)),o.setAttribute("aColor",new y(new Float32Array(l),3,!1));let d=new U({fragmentShader:ee,vertexShader:te,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:e.length},uFade:{value:this.fade}},this.webgl.fogUniforms,e.distortion.uniforms)});d.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <getDistortion_vertex>",e.distortion.getDistortion)};let p=new W(o,d);p.frustumCulled=!1,this.webgl.scene.add(p),this.mesh=p}update(e){this.mesh.material.uniforms.uTime.value=e}}const ee=`
      #define USE_FOG;
      ${m.fog_pars_fragment}
      varying vec3 vColor;
      varying vec2 vUv; 
      uniform vec2 uFade;
      void main() {
        vec3 color = vec3(vColor);
        float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
        gl_FragColor = vec4(color, alpha);
        if (gl_FragColor.a < 0.0001) discard;
        ${m.fog_fragment}
      }
    `,te=`
      #define USE_FOG;
      ${m.fog_pars_vertex}
      attribute vec3 aOffset;
      attribute vec3 aMetrics;
      attribute vec3 aColor;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec2 vUv; 
      varying vec3 vColor; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        float radius = aMetrics.r;
        float myLength = aMetrics.g;
        float speed = aMetrics.b;

        transformed.xy *= radius;
        transformed.z *= myLength;

        transformed.z += myLength - mod(uTime * speed + aOffset.z, uTravelLength);
        transformed.xy += aOffset.xy;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        vColor = aColor;
        ${m.fog_vertex}
      }
    `;class oe{constructor(e,t){this.webgl=e,this.options=t}init(){const e=this.options,t=new j(1,1);let s=new G().copy(t),o=e.totalSideLightSticks;s.instanceCount=o;let r=e.length/(o-1);const n=[],u=[],l=[];let a=e.colors.sticks;Array.isArray(a)?a=a.map(c=>new v(c)):a=new v(a);for(let c=0;c<o;c++){let M=g(e.lightStickWidth),D=g(e.lightStickHeight);n.push((c-1)*r*2+r*Math.random());let P=_(a);u.push(P.r),u.push(P.g),u.push(P.b),l.push(M),l.push(D)}s.setAttribute("aOffset",new y(new Float32Array(n),1,!1)),s.setAttribute("aColor",new y(new Float32Array(u),3,!1)),s.setAttribute("aMetrics",new y(new Float32Array(l),2,!1));const d=new U({fragmentShader:ie,vertexShader:se,side:$,uniforms:Object.assign({uTravelLength:{value:e.length},uTime:{value:0}},this.webgl.fogUniforms,e.distortion.uniforms)});d.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <getDistortion_vertex>",e.distortion.getDistortion)};const p=new W(s,d);p.frustumCulled=!1,this.webgl.scene.add(p),this.mesh=p}update(e){this.mesh.material.uniforms.uTime.value=e}}const se=`
      #define USE_FOG;
      ${m.fog_pars_vertex}
      attribute float aOffset;
      attribute vec3 aColor;
      attribute vec2 aMetrics;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec3 vColor;
      mat4 rotationY( in float angle ) {
        return mat4(	cos(angle),		0,		sin(angle),	0,
                     0,		1.0,			 0,	0,
                -sin(angle),	0,		cos(angle),	0,
                0, 		0,				0,	1);
      }
      #include <getDistortion_vertex>
      void main(){
        vec3 transformed = position.xyz;
        float width = aMetrics.x;
        float height = aMetrics.y;

        transformed.xy *= vec2(width, height);
        float time = mod(uTime * 60. * 2. + aOffset, uTravelLength);

        transformed = (rotationY(3.14/2.) * vec4(transformed,1.)).xyz;

        transformed.z += - uTravelLength + time;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        transformed.y += height / 2.;
        transformed.x += -width / 2.;
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vColor = aColor;
        ${m.fog_vertex}
      }
    `,ie=`
      #define USE_FOG;
      ${m.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${m.fog_fragment}
      }
    `;class re{constructor(e,t){this.webgl=e,this.options=t,this.uTime={value:0}}createPlane(e,t,s){const o=this.options;let r=100;const n=new j(s?o.roadWidth:o.islandWidth,o.length,20,r);let u={uTravelLength:{value:o.length},uColor:{value:new v(s?o.colors.roadColor:o.colors.islandColor)},uTime:this.uTime};s&&(u=Object.assign(u,{uLanes:{value:o.lanesPerRoad},uBrokenLinesColor:{value:new v(o.colors.brokenLines)},uShoulderLinesColor:{value:new v(o.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:o.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:o.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:o.brokenLinesWidthPercentage}}));const l=new U({fragmentShader:s?ae:ne,vertexShader:ue,side:$,uniforms:Object.assign(u,this.webgl.fogUniforms,o.distortion.uniforms)});l.onBeforeCompile=d=>{d.vertexShader=d.vertexShader.replace("#include <getDistortion_vertex>",o.distortion.getDistortion)};const a=new W(n,l);return a.rotation.x=-Math.PI/2,a.position.z=-o.length/2,a.position.x+=(this.options.islandWidth/2+o.roadWidth/2)*e,this.webgl.scene.add(a),a}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(e){this.uTime.value=e}}const Y=`
      #define USE_FOG;
      varying vec2 vUv; 
      uniform vec3 uColor;
      uniform float uTime;
      #include <roadMarkings_vars>
      ${m.fog_pars_fragment}
      void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);
        #include <roadMarkings_fragment>
        gl_FragColor = vec4(color, 1.);
        ${m.fog_fragment}
      }
    `,ne=Y.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),ae=Y.replace("#include <roadMarkings_fragment>",`
      uv.y = mod(uv.y + uTime * 0.05, 1.);
      float laneWidth = 1.0 / uLanes;
      float brokenLineWidth = laneWidth * uBrokenLinesWidthPercentage;
      float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

      float brokenLines = step(1.0 - brokenLineWidth, fract(uv.x * 2.0)) * step(laneEmptySpace, fract(uv.y * 10.0));
      float sideLines = step(1.0 - brokenLineWidth, fract((uv.x - laneWidth * (uLanes - 1.0)) * 2.0)) + step(brokenLineWidth, uv.x);

      brokenLines = mix(brokenLines, sideLines, uv.x);
    `).replace("#include <roadMarkings_vars>",`
      uniform float uLanes;
      uniform vec3 uBrokenLinesColor;
      uniform vec3 uShoulderLinesColor;
      uniform float uShoulderLinesWidthPercentage;
      uniform float uBrokenLinesWidthPercentage;
      uniform float uBrokenLinesLengthPercentage;
      highp float random(vec2 co) {
        highp float a = 12.9898;
        highp float b = 78.233;
        highp float c = 43758.5453;
        highp float dt = dot(co.xy, vec2(a, b));
        highp float sn = mod(dt, 3.14);
        return fract(sin(sn) * c);
      }
    `),ue=`
      #define USE_FOG;
      uniform float uTime;
      ${m.fog_pars_vertex}
      uniform float uTravelLength;
      varying vec2 vUv; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        vec3 distortion = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
        transformed.x += distortion.x;
        transformed.z += distortion.y;
        transformed.y += -1. * distortion.z;  
        
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        ${m.fog_vertex}
      }
    `;function he(i,e){const t=i.domElement,s=t.clientWidth,o=t.clientHeight,r=t.width!==s||t.height!==o;return r&&e(s,o,!1),r}return function(){const i=document.getElementById("lights"),e={...E,...T,colors:{...E.colors,...T.colors}};e.distortion=N[e.distortion];const t=new K(i,e);L.current=t,t.loadAssets().then(t.init)}(),()=>{L.current&&L.current.dispose()}},[T]),ce.jsx("div",{id:"lights",ref:J})};export{Ie as default};
