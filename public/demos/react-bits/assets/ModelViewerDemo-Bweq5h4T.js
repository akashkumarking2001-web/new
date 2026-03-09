import{r as E,cx as xn,W as Et,i as We,j as C,B as bn,a as En}from"./index-CKqfvLoB.js";import{u as wn,C as Rn,T as Mn,P as Pn,a as Tn,b as Ln,c as Sn}from"./PropTable-BzD4cJVp.js";import{C as An}from"./Customize-BaUKAf5J.js";import{P as St}from"./PreviewSelect-CM4Sns8B.js";import{P as ze}from"./PreviewSwitch-B0BSuWrO.js";import{P as dt}from"./PreviewSlider-25yjOF_X.js";import{D as In}from"./Dependencies-DmSBXzNX.js";import{u as Dn}from"./useForceRerender-0lK0qxlp.js";import{a as le,u as Ze,f as On,c as rt,C as Cn,i as we}from"./react-three-fiber.esm-DFK4OWio.js";import{m as U,K as jn,V as ce,d as Oe,O as Ce,aZ as Ne,a_ as At,Q as Ie,a$ as Le,b0 as Se,b1 as Hn,b2 as Fn,t as at,b3 as kn,ac as rn,am as _n,ab as an,at as zn,_ as It,c as Dt,T as Ot,b4 as Qe,b5 as Bn,C as he,ag as Xn,I as N,aL as gt,aO as Ct,aF as nt,D as ft,ap as jt,b as pe,ao as Zn,aq as Vn,aG as Yn,M as ot,aD as et,aI as Un,aM as Gn,b6 as Wn,r as De,F as ue,b7 as Nn,b8 as Kn,X as Xe,aN as $n,aS as qn,aU as Jn,aT as Qn,w as Ht,P as eo,b9 as to,a as Ft,aC as kt,aB as Ke,aH as _t,aK as mt,A as no,i as oo,aX as ro,aY as ao}from"./three.module-DbwSNGae.js";import{v as io,d as sn,u as cn}from"./Gltf-CLq2ZOSs.js";import{u as so,E as co}from"./Environment-D_Nd-lQM.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./field-DGUMYGrq.js";import"./switch-CqqRi5Az.js";import"./slider-P7kYMDWb.js";const Ve=new U,wt=new U,lo=new U,zt=new ce;function uo(l,t,n){const e=Ve.setFromMatrixPosition(l.matrixWorld);e.project(t);const o=n.width/2,r=n.height/2;return[e.x*o+o,-(e.y*r)+r]}function po(l,t){const n=Ve.setFromMatrixPosition(l.matrixWorld),e=wt.setFromMatrixPosition(t.matrixWorld),o=n.sub(e),r=t.getWorldDirection(lo);return o.angleTo(r)>Math.PI/2}function fo(l,t,n,e){const o=Ve.setFromMatrixPosition(l.matrixWorld),r=o.clone();r.project(t),zt.set(r.x,r.y),n.setFromCamera(zt,t);const a=n.intersectObjects(e,!0);if(a.length){const i=a[0].distance;return o.distanceTo(n.ray.origin)<i}return!0}function mo(l,t){if(t instanceof Ce)return t.zoom;if(t instanceof Oe){const n=Ve.setFromMatrixPosition(l.matrixWorld),e=wt.setFromMatrixPosition(t.matrixWorld),o=t.fov*Math.PI/180,r=n.distanceTo(e);return 1/(2*Math.tan(o/2)*r)}else return 1}function ho(l,t,n){if(t instanceof Oe||t instanceof Ce){const e=Ve.setFromMatrixPosition(l.matrixWorld),o=wt.setFromMatrixPosition(t.matrixWorld),r=e.distanceTo(o),a=(n[1]-n[0])/(t.far-t.near),i=n[1]-a*t.far;return Math.round(a*r+i)}}const xt=l=>Math.abs(l)<1e-10?0:l;function ln(l,t,n=""){let e="matrix3d(";for(let o=0;o!==16;o++)e+=xt(t[o]*l.elements[o])+(o!==15?",":")");return n+e}const vo=(l=>t=>ln(t,l))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),yo=(l=>(t,n)=>ln(t,l(n),"translate(-50%,-50%)"))(l=>[1/l,1/l,1/l,1,-1/l,-1/l,-1/l,-1,1/l,1/l,1/l,1,1,1,1,1]);function go(l){return l&&typeof l=="object"&&"current"in l}const xo=E.forwardRef(({children:l,eps:t=.001,style:n,className:e,prepend:o,center:r,fullscreen:a,portal:i,distanceFactor:c,sprite:d=!1,transform:u=!1,occlude:s,onOcclude:f,castShadow:m,receiveShadow:v,material:y,geometry:b,zIndexRange:x=[16777271,0],calculatePosition:w=uo,as:M="div",wrapperClass:L,pointerEvents:P="auto",...h},O)=>{const{gl:X,camera:A,scene:R,size:k,raycaster:$,events:_,viewport:I}=le(),[S]=E.useState(()=>document.createElement(M)),j=E.useRef(null),Z=E.useRef(null),z=E.useRef(0),V=E.useRef([0,0]),B=E.useRef(null),W=E.useRef(null),q=(i==null?void 0:i.current)||_.connected||X.domElement.parentNode,Q=E.useRef(null),ne=E.useRef(!1),H=E.useMemo(()=>s&&s!=="blending"||Array.isArray(s)&&s.length&&go(s[0]),[s]);E.useLayoutEffect(()=>{const te=X.domElement;s&&s==="blending"?(te.style.zIndex=`${Math.floor(x[0]/2)}`,te.style.position="absolute",te.style.pointerEvents="none"):(te.style.zIndex=null,te.style.position=null,te.style.pointerEvents=null)},[s]),E.useLayoutEffect(()=>{if(Z.current){const te=j.current=xn.createRoot(S);if(R.updateMatrixWorld(),u)S.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const G=w(Z.current,A,k);S.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${G[0]}px,${G[1]}px,0);transform-origin:0 0;`}return q&&(o?q.prepend(S):q.appendChild(S)),()=>{q&&q.removeChild(S),te.unmount()}}},[q,u]),E.useLayoutEffect(()=>{L&&(S.className=L)},[L]);const re=E.useMemo(()=>u?{position:"absolute",top:0,left:0,width:k.width,height:k.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:r?"translate3d(-50%,-50%,0)":"none",...a&&{top:-k.height/2,left:-k.width/2,width:k.width,height:k.height},...n},[n,r,a,k,u]),oe=E.useMemo(()=>({position:"absolute",pointerEvents:P}),[P]);E.useLayoutEffect(()=>{if(ne.current=!1,u){var te;(te=j.current)==null||te.render(E.createElement("div",{ref:B,style:re},E.createElement("div",{ref:W,style:oe},E.createElement("div",{ref:O,className:e,style:n,children:l}))))}else{var G;(G=j.current)==null||G.render(E.createElement("div",{ref:O,style:re,className:e,children:l}))}});const ee=E.useRef(!0);Ze(te=>{if(Z.current){A.updateMatrixWorld(),Z.current.updateWorldMatrix(!0,!1);const G=u?V.current:w(Z.current,A,k);if(u||Math.abs(z.current-A.zoom)>t||Math.abs(V.current[0]-G[0])>t||Math.abs(V.current[1]-G[1])>t){const de=po(Z.current,A);let ie=!1;H&&(Array.isArray(s)?ie=s.map(fe=>fe.current):s!=="blending"&&(ie=[R]));const xe=ee.current;if(ie){const fe=fo(Z.current,A,$,ie);ee.current=fe&&!de}else ee.current=!de;xe!==ee.current&&(f?f(!ee.current):S.style.display=ee.current?"block":"none");const Pe=Math.floor(x[0]/2),it=s?H?[x[0],Pe]:[Pe-1,0]:x;if(S.style.zIndex=`${ho(Z.current,A,it)}`,u){const[fe,je]=[k.width/2,k.height/2],Te=A.projectionMatrix.elements[5]*je,{isOrthographicCamera:Ye,top:st,left:Ue,bottom:He,right:Re}=A,ct=vo(A.matrixWorldInverse),lt=Ye?`scale(${Te})translate(${xt(-(Re+Ue)/2)}px,${xt((st+He)/2)}px)`:`translateZ(${Te}px)`;let me=Z.current.matrixWorld;d&&(me=A.matrixWorldInverse.clone().transpose().copyPosition(me).scale(Z.current.scale),me.elements[3]=me.elements[7]=me.elements[11]=0,me.elements[15]=1),S.style.width=k.width+"px",S.style.height=k.height+"px",S.style.perspective=Ye?"":`${Te}px`,B.current&&W.current&&(B.current.style.transform=`${lt}${ct}translate(${fe}px,${je}px)`,W.current.style.transform=yo(me,1/((c||10)/400)))}else{const fe=c===void 0?1:mo(Z.current,A)*c;S.style.transform=`translate3d(${G[0]}px,${G[1]}px,0) scale(${fe})`}V.current=G,z.current=A.zoom}}if(!H&&Q.current&&!ne.current)if(u){if(B.current){const G=B.current.children[0];if(G!=null&&G.clientWidth&&G!=null&&G.clientHeight){const{isOrthographicCamera:de}=A;if(de||b)h.scale&&(Array.isArray(h.scale)?h.scale instanceof U?Q.current.scale.copy(h.scale.clone().divideScalar(1)):Q.current.scale.set(1/h.scale[0],1/h.scale[1],1/h.scale[2]):Q.current.scale.setScalar(1/h.scale));else{const ie=(c||10)/400,xe=G.clientWidth*ie,Pe=G.clientHeight*ie;Q.current.scale.set(xe,Pe,1)}ne.current=!0}}}else{const G=S.children[0];if(G!=null&&G.clientWidth&&G!=null&&G.clientHeight){const de=1/I.factor,ie=G.clientWidth*de,xe=G.clientHeight*de;Q.current.scale.set(ie,xe,1),ne.current=!0}Q.current.lookAt(te.camera.position)}});const Me=E.useMemo(()=>({vertexShader:u?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[u]);return E.createElement("group",Et({},h,{ref:Z}),s&&!H&&E.createElement("mesh",{castShadow:m,receiveShadow:v,ref:Q},b||E.createElement("planeGeometry",null),y||E.createElement("shaderMaterial",{side:jn,vertexShader:Me.vertexShader,fragmentShader:Me.fragmentShader})))}),bo=l=>l;function Eo(l,t=bo){const n=We.useSyncExternalStore(l.subscribe,We.useCallback(()=>t(l.getState()),[l,t]),We.useCallback(()=>t(l.getInitialState()),[l,t]));return We.useDebugValue(n),n}const Bt=l=>{const t=On(l),n=e=>Eo(t,e);return Object.assign(n,t),n},wo=l=>l?Bt(l):Bt;let Be=0;const Ro=wo(l=>(Ne.onStart=(t,n,e)=>{l({active:!0,item:t,loaded:n,total:e,progress:(n-Be)/(e-Be)*100})},Ne.onLoad=()=>{l({active:!1})},Ne.onError=t=>l(n=>({errors:[...n.errors,t]})),Ne.onProgress=(t,n,e)=>{n===e&&(Be=e),l({active:!0,item:t,loaded:n,total:e,progress:(n-Be)/(e-Be)*100||100})},{errors:[],active:!1,progress:0,item:"",loaded:0,total:0})),Mo=io>=125?"uv1":"uv2";var Po=Object.defineProperty,To=(l,t,n)=>t in l?Po(l,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[t]=n,Lo=(l,t,n)=>(To(l,t+"",n),n);class So{constructor(){Lo(this,"_listeners")}addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const e=this._listeners;e[t]===void 0&&(e[t]=[]),e[t].indexOf(n)===-1&&e[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const e=this._listeners;return e[t]!==void 0&&e[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const e=this._listeners[t.type];if(e!==void 0){t.target=this;const o=e.slice(0);for(let r=0,a=o.length;r<a;r++)o[r].call(this,t);t.target=null}}}var Ao=Object.defineProperty,Io=(l,t,n)=>t in l?Ao(l,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[t]=n,T=(l,t,n)=>(Io(l,typeof t!="symbol"?t+"":t,n),n);const $e=new Hn,Xt=new Fn,Do=Math.cos(70*(Math.PI/180)),Zt=(l,t)=>(l%t+t)%t;let Oo=class extends So{constructor(t,n){super(),T(this,"object"),T(this,"domElement"),T(this,"enabled",!0),T(this,"target",new U),T(this,"minDistance",0),T(this,"maxDistance",1/0),T(this,"minZoom",0),T(this,"maxZoom",1/0),T(this,"minPolarAngle",0),T(this,"maxPolarAngle",Math.PI),T(this,"minAzimuthAngle",-1/0),T(this,"maxAzimuthAngle",1/0),T(this,"enableDamping",!1),T(this,"dampingFactor",.05),T(this,"enableZoom",!0),T(this,"zoomSpeed",1),T(this,"enableRotate",!0),T(this,"rotateSpeed",1),T(this,"enablePan",!0),T(this,"panSpeed",1),T(this,"screenSpacePanning",!0),T(this,"keyPanSpeed",7),T(this,"zoomToCursor",!1),T(this,"autoRotate",!1),T(this,"autoRotateSpeed",2),T(this,"reverseOrbit",!1),T(this,"reverseHorizontalOrbit",!1),T(this,"reverseVerticalOrbit",!1),T(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),T(this,"mouseButtons",{LEFT:Le.ROTATE,MIDDLE:Le.DOLLY,RIGHT:Le.PAN}),T(this,"touches",{ONE:Se.ROTATE,TWO:Se.DOLLY_PAN}),T(this,"target0"),T(this,"position0"),T(this,"zoom0"),T(this,"_domElementKeyEvents",null),T(this,"getPolarAngle"),T(this,"getAzimuthalAngle"),T(this,"setPolarAngle"),T(this,"setAzimuthalAngle"),T(this,"getDistance"),T(this,"getZoomScale"),T(this,"listenToKeyEvents"),T(this,"stopListenToKeyEvents"),T(this,"saveState"),T(this,"reset"),T(this,"update"),T(this,"connect"),T(this,"dispose"),T(this,"dollyIn"),T(this,"dollyOut"),T(this,"getScale"),T(this,"setScale"),this.object=t,this.domElement=n,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=p=>{let g=Zt(p,2*Math.PI),D=u.phi;D<0&&(D+=2*Math.PI),g<0&&(g+=2*Math.PI);let Y=Math.abs(g-D);2*Math.PI-Y<Y&&(g<D?g+=2*Math.PI:D+=2*Math.PI),s.phi=g-D,e.update()},this.setAzimuthalAngle=p=>{let g=Zt(p,2*Math.PI),D=u.theta;D<0&&(D+=2*Math.PI),g<0&&(g+=2*Math.PI);let Y=Math.abs(g-D);2*Math.PI-Y<Y&&(g<D?g+=2*Math.PI:D+=2*Math.PI),s.theta=g-D,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=p=>{p.addEventListener("keydown",ut),this._domElementKeyEvents=p},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ut),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(o),e.update(),c=i.NONE},this.update=(()=>{const p=new U,g=new U(0,1,0),D=new Ie().setFromUnitVectors(t.up,g),Y=D.clone().invert(),J=new U,ve=new Ie,be=2*Math.PI;return function(){const Lt=e.object.position;D.setFromUnitVectors(t.up,g),Y.copy(D).invert(),p.copy(Lt).sub(e.target),p.applyQuaternion(D),u.setFromVector3(p),e.autoRotate&&c===i.NONE&&I($()),e.enableDamping?(u.theta+=s.theta*e.dampingFactor,u.phi+=s.phi*e.dampingFactor):(u.theta+=s.theta,u.phi+=s.phi);let ye=e.minAzimuthAngle,ge=e.maxAzimuthAngle;isFinite(ye)&&isFinite(ge)&&(ye<-Math.PI?ye+=be:ye>Math.PI&&(ye-=be),ge<-Math.PI?ge+=be:ge>Math.PI&&(ge-=be),ye<=ge?u.theta=Math.max(ye,Math.min(ge,u.theta)):u.theta=u.theta>(ye+ge)/2?Math.max(ye,u.theta):Math.min(ge,u.theta)),u.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,u.phi)),u.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(m,e.dampingFactor):e.target.add(m),e.zoomToCursor&&A||e.object.isOrthographicCamera?u.radius=Q(u.radius):u.radius=Q(u.radius*f),p.setFromSpherical(u),p.applyQuaternion(Y),Lt.copy(e.target).add(p),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(s.theta*=1-e.dampingFactor,s.phi*=1-e.dampingFactor,m.multiplyScalar(1-e.dampingFactor)):(s.set(0,0,0),m.set(0,0,0));let Fe=!1;if(e.zoomToCursor&&A){let ke=null;if(e.object instanceof Oe&&e.object.isPerspectiveCamera){const _e=p.length();ke=Q(_e*f);const Ge=_e-ke;e.object.position.addScaledVector(O,Ge),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const _e=new U(X.x,X.y,0);_e.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/f)),e.object.updateProjectionMatrix(),Fe=!0;const Ge=new U(X.x,X.y,0);Ge.unproject(e.object),e.object.position.sub(Ge).add(_e),e.object.updateMatrixWorld(),ke=p.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;ke!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(ke).add(e.object.position):($e.origin.copy(e.object.position),$e.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot($e.direction))<Do?t.lookAt(e.target):(Xt.setFromNormalAndCoplanarPoint(e.object.up,e.target),$e.intersectPlane(Xt,e.target))))}else e.object instanceof Ce&&e.object.isOrthographicCamera&&(Fe=f!==1,Fe&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/f)),e.object.updateProjectionMatrix()));return f=1,A=!1,Fe||J.distanceToSquared(e.object.position)>d||8*(1-ve.dot(e.object.quaternion))>d?(e.dispatchEvent(o),J.copy(e.object.position),ve.copy(e.object.quaternion),Fe=!1,!0):!1}})(),this.connect=p=>{e.domElement=p,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",Pt),e.domElement.addEventListener("pointerdown",Ue),e.domElement.addEventListener("pointercancel",Re),e.domElement.addEventListener("wheel",me)},this.dispose=()=>{var p,g,D,Y,J,ve;e.domElement&&(e.domElement.style.touchAction="auto"),(p=e.domElement)==null||p.removeEventListener("contextmenu",Pt),(g=e.domElement)==null||g.removeEventListener("pointerdown",Ue),(D=e.domElement)==null||D.removeEventListener("pointercancel",Re),(Y=e.domElement)==null||Y.removeEventListener("wheel",me),(J=e.domElement)==null||J.ownerDocument.removeEventListener("pointermove",He),(ve=e.domElement)==null||ve.ownerDocument.removeEventListener("pointerup",Re),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",ut)};const e=this,o={type:"change"},r={type:"start"},a={type:"end"},i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=i.NONE;const d=1e-6,u=new At,s=new At;let f=1;const m=new U,v=new ce,y=new ce,b=new ce,x=new ce,w=new ce,M=new ce,L=new ce,P=new ce,h=new ce,O=new U,X=new ce;let A=!1;const R=[],k={};function $(){return 2*Math.PI/60/60*e.autoRotateSpeed}function _(){return Math.pow(.95,e.zoomSpeed)}function I(p){e.reverseOrbit||e.reverseHorizontalOrbit?s.theta+=p:s.theta-=p}function S(p){e.reverseOrbit||e.reverseVerticalOrbit?s.phi+=p:s.phi-=p}const j=(()=>{const p=new U;return function(D,Y){p.setFromMatrixColumn(Y,0),p.multiplyScalar(-D),m.add(p)}})(),Z=(()=>{const p=new U;return function(D,Y){e.screenSpacePanning===!0?p.setFromMatrixColumn(Y,1):(p.setFromMatrixColumn(Y,0),p.crossVectors(e.object.up,p)),p.multiplyScalar(D),m.add(p)}})(),z=(()=>{const p=new U;return function(D,Y){const J=e.domElement;if(J&&e.object instanceof Oe&&e.object.isPerspectiveCamera){const ve=e.object.position;p.copy(ve).sub(e.target);let be=p.length();be*=Math.tan(e.object.fov/2*Math.PI/180),j(2*D*be/J.clientHeight,e.object.matrix),Z(2*Y*be/J.clientHeight,e.object.matrix)}else J&&e.object instanceof Ce&&e.object.isOrthographicCamera?(j(D*(e.object.right-e.object.left)/e.object.zoom/J.clientWidth,e.object.matrix),Z(Y*(e.object.top-e.object.bottom)/e.object.zoom/J.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function V(p){e.object instanceof Oe&&e.object.isPerspectiveCamera||e.object instanceof Ce&&e.object.isOrthographicCamera?f=p:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function B(p){V(f/p)}function W(p){V(f*p)}function q(p){if(!e.zoomToCursor||!e.domElement)return;A=!0;const g=e.domElement.getBoundingClientRect(),D=p.clientX-g.left,Y=p.clientY-g.top,J=g.width,ve=g.height;X.x=D/J*2-1,X.y=-(Y/ve)*2+1,O.set(X.x,X.y,1).unproject(e.object).sub(e.object.position).normalize()}function Q(p){return Math.max(e.minDistance,Math.min(e.maxDistance,p))}function ne(p){v.set(p.clientX,p.clientY)}function H(p){q(p),L.set(p.clientX,p.clientY)}function re(p){x.set(p.clientX,p.clientY)}function oe(p){y.set(p.clientX,p.clientY),b.subVectors(y,v).multiplyScalar(e.rotateSpeed);const g=e.domElement;g&&(I(2*Math.PI*b.x/g.clientHeight),S(2*Math.PI*b.y/g.clientHeight)),v.copy(y),e.update()}function ee(p){P.set(p.clientX,p.clientY),h.subVectors(P,L),h.y>0?B(_()):h.y<0&&W(_()),L.copy(P),e.update()}function Me(p){w.set(p.clientX,p.clientY),M.subVectors(w,x).multiplyScalar(e.panSpeed),z(M.x,M.y),x.copy(w),e.update()}function te(p){q(p),p.deltaY<0?W(_()):p.deltaY>0&&B(_()),e.update()}function G(p){let g=!1;switch(p.code){case e.keys.UP:z(0,e.keyPanSpeed),g=!0;break;case e.keys.BOTTOM:z(0,-e.keyPanSpeed),g=!0;break;case e.keys.LEFT:z(e.keyPanSpeed,0),g=!0;break;case e.keys.RIGHT:z(-e.keyPanSpeed,0),g=!0;break}g&&(p.preventDefault(),e.update())}function de(){if(R.length==1)v.set(R[0].pageX,R[0].pageY);else{const p=.5*(R[0].pageX+R[1].pageX),g=.5*(R[0].pageY+R[1].pageY);v.set(p,g)}}function ie(){if(R.length==1)x.set(R[0].pageX,R[0].pageY);else{const p=.5*(R[0].pageX+R[1].pageX),g=.5*(R[0].pageY+R[1].pageY);x.set(p,g)}}function xe(){const p=R[0].pageX-R[1].pageX,g=R[0].pageY-R[1].pageY,D=Math.sqrt(p*p+g*g);L.set(0,D)}function Pe(){e.enableZoom&&xe(),e.enablePan&&ie()}function it(){e.enableZoom&&xe(),e.enableRotate&&de()}function fe(p){if(R.length==1)y.set(p.pageX,p.pageY);else{const D=pt(p),Y=.5*(p.pageX+D.x),J=.5*(p.pageY+D.y);y.set(Y,J)}b.subVectors(y,v).multiplyScalar(e.rotateSpeed);const g=e.domElement;g&&(I(2*Math.PI*b.x/g.clientHeight),S(2*Math.PI*b.y/g.clientHeight)),v.copy(y)}function je(p){if(R.length==1)w.set(p.pageX,p.pageY);else{const g=pt(p),D=.5*(p.pageX+g.x),Y=.5*(p.pageY+g.y);w.set(D,Y)}M.subVectors(w,x).multiplyScalar(e.panSpeed),z(M.x,M.y),x.copy(w)}function Te(p){const g=pt(p),D=p.pageX-g.x,Y=p.pageY-g.y,J=Math.sqrt(D*D+Y*Y);P.set(0,J),h.set(0,Math.pow(P.y/L.y,e.zoomSpeed)),B(h.y),L.copy(P)}function Ye(p){e.enableZoom&&Te(p),e.enablePan&&je(p)}function st(p){e.enableZoom&&Te(p),e.enableRotate&&fe(p)}function Ue(p){var g,D;e.enabled!==!1&&(R.length===0&&((g=e.domElement)==null||g.ownerDocument.addEventListener("pointermove",He),(D=e.domElement)==null||D.ownerDocument.addEventListener("pointerup",Re)),yn(p),p.pointerType==="touch"?hn(p):ct(p))}function He(p){e.enabled!==!1&&(p.pointerType==="touch"?vn(p):lt(p))}function Re(p){var g,D,Y;gn(p),R.length===0&&((g=e.domElement)==null||g.releasePointerCapture(p.pointerId),(D=e.domElement)==null||D.ownerDocument.removeEventListener("pointermove",He),(Y=e.domElement)==null||Y.ownerDocument.removeEventListener("pointerup",Re)),e.dispatchEvent(a),c=i.NONE}function ct(p){let g;switch(p.button){case 0:g=e.mouseButtons.LEFT;break;case 1:g=e.mouseButtons.MIDDLE;break;case 2:g=e.mouseButtons.RIGHT;break;default:g=-1}switch(g){case Le.DOLLY:if(e.enableZoom===!1)return;H(p),c=i.DOLLY;break;case Le.ROTATE:if(p.ctrlKey||p.metaKey||p.shiftKey){if(e.enablePan===!1)return;re(p),c=i.PAN}else{if(e.enableRotate===!1)return;ne(p),c=i.ROTATE}break;case Le.PAN:if(p.ctrlKey||p.metaKey||p.shiftKey){if(e.enableRotate===!1)return;ne(p),c=i.ROTATE}else{if(e.enablePan===!1)return;re(p),c=i.PAN}break;default:c=i.NONE}c!==i.NONE&&e.dispatchEvent(r)}function lt(p){if(e.enabled!==!1)switch(c){case i.ROTATE:if(e.enableRotate===!1)return;oe(p);break;case i.DOLLY:if(e.enableZoom===!1)return;ee(p);break;case i.PAN:if(e.enablePan===!1)return;Me(p);break}}function me(p){e.enabled===!1||e.enableZoom===!1||c!==i.NONE&&c!==i.ROTATE||(p.preventDefault(),e.dispatchEvent(r),te(p),e.dispatchEvent(a))}function ut(p){e.enabled===!1||e.enablePan===!1||G(p)}function hn(p){switch(Tt(p),R.length){case 1:switch(e.touches.ONE){case Se.ROTATE:if(e.enableRotate===!1)return;de(),c=i.TOUCH_ROTATE;break;case Se.PAN:if(e.enablePan===!1)return;ie(),c=i.TOUCH_PAN;break;default:c=i.NONE}break;case 2:switch(e.touches.TWO){case Se.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Pe(),c=i.TOUCH_DOLLY_PAN;break;case Se.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;it(),c=i.TOUCH_DOLLY_ROTATE;break;default:c=i.NONE}break;default:c=i.NONE}c!==i.NONE&&e.dispatchEvent(r)}function vn(p){switch(Tt(p),c){case i.TOUCH_ROTATE:if(e.enableRotate===!1)return;fe(p),e.update();break;case i.TOUCH_PAN:if(e.enablePan===!1)return;je(p),e.update();break;case i.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ye(p),e.update();break;case i.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;st(p),e.update();break;default:c=i.NONE}}function Pt(p){e.enabled!==!1&&p.preventDefault()}function yn(p){R.push(p)}function gn(p){delete k[p.pointerId];for(let g=0;g<R.length;g++)if(R[g].pointerId==p.pointerId){R.splice(g,1);return}}function Tt(p){let g=k[p.pointerId];g===void 0&&(g=new ce,k[p.pointerId]=g),g.set(p.pageX,p.pageY)}function pt(p){const g=p.pointerId===R[0].pointerId?R[1]:R[0];return k[g.pointerId]}this.dollyIn=(p=_())=>{W(p),e.update()},this.dollyOut=(p=_())=>{B(p),e.update()},this.getScale=()=>f,this.setScale=p=>{V(p),e.update()},this.getZoomScale=()=>_(),n!==void 0&&this.connect(n),this.update()}};const Co={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},jo={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `};function un(l,t,n){const e=n.length-l-1;if(t>=n[e])return e-1;if(t<=n[l])return l;let o=l,r=e,a=Math.floor((o+r)/2);for(;t<n[a]||t>=n[a+1];)t<n[a]?r=a:o=a,a=Math.floor((o+r)/2);return a}function Ho(l,t,n,e){const o=[],r=[],a=[];o[0]=1;for(let i=1;i<=n;++i){r[i]=t-e[l+1-i],a[i]=e[l+i]-t;let c=0;for(let d=0;d<i;++d){const u=a[d+1],s=r[i-d],f=o[d]/(u+s);o[d]=c+u*f,c=s*f}o[i]=c}return o}function Fo(l,t,n,e){const o=un(l,e,t),r=Ho(o,e,l,t),a=new at(0,0,0,0);for(let i=0;i<=l;++i){const c=n[o-l+i],d=r[i],u=c.w*d;a.x+=c.x*u,a.y+=c.y*u,a.z+=c.z*u,a.w+=c.w*d}return a}function ko(l,t,n,e,o){const r=[];for(let s=0;s<=n;++s)r[s]=0;const a=[];for(let s=0;s<=e;++s)a[s]=r.slice(0);const i=[];for(let s=0;s<=n;++s)i[s]=r.slice(0);i[0][0]=1;const c=r.slice(0),d=r.slice(0);for(let s=1;s<=n;++s){c[s]=t-o[l+1-s],d[s]=o[l+s]-t;let f=0;for(let m=0;m<s;++m){const v=d[m+1],y=c[s-m];i[s][m]=v+y;const b=i[m][s-1]/i[s][m];i[m][s]=f+v*b,f=y*b}i[s][s]=f}for(let s=0;s<=n;++s)a[0][s]=i[s][n];for(let s=0;s<=n;++s){let f=0,m=1;const v=[];for(let y=0;y<=n;++y)v[y]=r.slice(0);v[0][0]=1;for(let y=1;y<=e;++y){let b=0;const x=s-y,w=n-y;s>=y&&(v[m][0]=v[f][0]/i[w+1][x],b=v[m][0]*i[x][w]);const M=x>=-1?1:-x,L=s-1<=w?y-1:n-s;for(let h=M;h<=L;++h)v[m][h]=(v[f][h]-v[f][h-1])/i[w+1][x+h],b+=v[m][h]*i[x+h][w];s<=w&&(v[m][y]=-v[f][y-1]/i[w+1][s],b+=v[m][y]*i[s][w]),a[y][s]=b;const P=f;f=m,m=P}}let u=n;for(let s=1;s<=e;++s){for(let f=0;f<=n;++f)a[s][f]*=u;u*=n-s}return a}function _o(l,t,n,e,o){const r=o<l?o:l,a=[],i=un(l,e,t),c=ko(i,e,l,r,t),d=[];for(let u=0;u<n.length;++u){const s=n[u].clone(),f=s.w;s.x*=f,s.y*=f,s.z*=f,d[u]=s}for(let u=0;u<=r;++u){const s=d[i-l].clone().multiplyScalar(c[u][0]);for(let f=1;f<=l;++f)s.add(d[i-l+f].clone().multiplyScalar(c[u][f]));a[u]=s}for(let u=r+1;u<=o+1;++u)a[u]=new at(0,0,0);return a}function zo(l,t){let n=1;for(let o=2;o<=l;++o)n*=o;let e=1;for(let o=2;o<=t;++o)e*=o;for(let o=2;o<=l-t;++o)e*=o;return n/e}function Bo(l){const t=l.length,n=[],e=[];for(let r=0;r<t;++r){const a=l[r];n[r]=new U(a.x,a.y,a.z),e[r]=a.w}const o=[];for(let r=0;r<t;++r){const a=n[r].clone();for(let i=1;i<=r;++i)a.sub(o[r-i].clone().multiplyScalar(zo(r,i)*e[i]));o[r]=a.divideScalar(e[0])}return o}function Xo(l,t,n,e,o){const r=_o(l,t,n,e,o);return Bo(r)}class Vt extends kn{constructor(t,n,e,o,r){super(),this.degree=t,this.knots=n,this.controlPoints=[],this.startKnot=o||0,this.endKnot=r||this.knots.length-1;for(let a=0;a<e.length;++a){const i=e[a];this.controlPoints[a]=new at(i.x,i.y,i.z,i.w)}}getPoint(t,n){const e=n||new U,o=this.knots[this.startKnot]+t*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=Fo(this.degree,this.knots,this.controlPoints,o);return r.w!=1&&r.divideScalar(r.w),e.set(r.x,r.y,r.z)}getTangent(t,n){const e=n||new U,o=this.knots[0]+t*(this.knots[this.knots.length-1]-this.knots[0]),r=Xo(this.degree,this.knots,this.controlPoints,o,1);return e.copy(r[1]).normalize(),e}}let F,K,ae;class Rt extends rn{constructor(t){super(t)}load(t,n,e,o){const r=this,a=r.path===""?_n.extractUrlBase(t):r.path,i=new an(this.manager);i.setPath(r.path),i.setResponseType("arraybuffer"),i.setRequestHeader(r.requestHeader),i.setWithCredentials(r.withCredentials),i.load(t,function(c){try{n(r.parse(c,a))}catch(d){o?o(d):console.error(d),r.manager.itemError(t)}},e,o)}parse(t,n){if(Wo(t))F=new Go().parse(t);else{const o=mn(t);if(!No(o))throw new Error("THREE.FBXLoader: Unknown format.");if(Ut(o)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Ut(o));F=new Uo().parse(o)}const e=new zn(this.manager).setPath(this.resourcePath||n).setCrossOrigin(this.crossOrigin);return new Zo(e,this.manager).parse(F)}}class Zo{constructor(t,n){this.textureLoader=t,this.manager=n}parse(){K=this.parseConnections();const t=this.parseImages(),n=this.parseTextures(t),e=this.parseMaterials(n),o=this.parseDeformers(),r=new Vo().parse(o);return this.parseScene(o,r,e),ae}parseConnections(){const t=new Map;return"Connections"in F&&F.Connections.connections.forEach(function(e){const o=e[0],r=e[1],a=e[2];t.has(o)||t.set(o,{parents:[],children:[]});const i={ID:r,relationship:a};t.get(o).parents.push(i),t.has(r)||t.set(r,{parents:[],children:[]});const c={ID:o,relationship:a};t.get(r).children.push(c)}),t}parseImages(){const t={},n={};if("Video"in F.Objects){const e=F.Objects.Video;for(const o in e){const r=e[o],a=parseInt(o);if(t[a]=r.RelativeFilename||r.Filename,"Content"in r){const i=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,c=typeof r.Content=="string"&&r.Content!=="";if(i||c){const d=this.parseImage(e[o]);n[r.RelativeFilename||r.Filename]=d}}}}for(const e in t){const o=t[e];n[o]!==void 0?t[e]=n[o]:t[e]=t[e].split("\\").pop()}return t}parseImage(t){const n=t.Content,e=t.RelativeFilename||t.Filename,o=e.slice(e.lastIndexOf(".")+1).toLowerCase();let r;switch(o){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",e),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+o+'" is not supported.');return}if(typeof n=="string")return"data:"+r+";base64,"+n;{const a=new Uint8Array(n);return window.URL.createObjectURL(new Blob([a],{type:r}))}}parseTextures(t){const n=new Map;if("Texture"in F.Objects){const e=F.Objects.Texture;for(const o in e){const r=this.parseTexture(e[o],t);n.set(parseInt(o),r)}}return n}parseTexture(t,n){const e=this.loadTexture(t,n);e.ID=t.id,e.name=t.attrName;const o=t.WrapModeU,r=t.WrapModeV,a=o!==void 0?o.value:0,i=r!==void 0?r.value:0;if(e.wrapS=a===0?It:Dt,e.wrapT=i===0?It:Dt,"Scaling"in t){const c=t.Scaling.value;e.repeat.x=c[0],e.repeat.y=c[1]}return e}loadTexture(t,n){let e;const o=this.textureLoader.path,r=K.get(t.id).children;r!==void 0&&r.length>0&&n[r[0].ID]!==void 0&&(e=n[r[0].ID],(e.indexOf("blob:")===0||e.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let a;const i=t.FileName.slice(-3).toLowerCase();if(i==="tga"){const c=this.manager.getHandler(".tga");c===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",t.RelativeFilename),a=new Ot):(c.setPath(this.textureLoader.path),a=c.load(e))}else i==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",t.RelativeFilename),a=new Ot):a=this.textureLoader.load(e);return this.textureLoader.setPath(o),a}parseMaterials(t){const n=new Map;if("Material"in F.Objects){const e=F.Objects.Material;for(const o in e){const r=this.parseMaterial(e[o],t);r!==null&&n.set(parseInt(o),r)}}return n}parseMaterial(t,n){const e=t.id,o=t.attrName;let r=t.ShadingModel;if(typeof r=="object"&&(r=r.value),!K.has(e))return null;const a=this.parseParameters(t,n,e);let i;switch(r.toLowerCase()){case"phong":i=new Qe;break;case"lambert":i=new Bn;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),i=new Qe;break}return i.setValues(a),i.name=o,i}parseParameters(t,n,e){const o={};t.BumpFactor&&(o.bumpScale=t.BumpFactor.value),t.Diffuse?o.color=new he().fromArray(t.Diffuse.value):t.DiffuseColor&&(t.DiffuseColor.type==="Color"||t.DiffuseColor.type==="ColorRGB")&&(o.color=new he().fromArray(t.DiffuseColor.value)),t.DisplacementFactor&&(o.displacementScale=t.DisplacementFactor.value),t.Emissive?o.emissive=new he().fromArray(t.Emissive.value):t.EmissiveColor&&(t.EmissiveColor.type==="Color"||t.EmissiveColor.type==="ColorRGB")&&(o.emissive=new he().fromArray(t.EmissiveColor.value)),t.EmissiveFactor&&(o.emissiveIntensity=parseFloat(t.EmissiveFactor.value)),t.Opacity&&(o.opacity=parseFloat(t.Opacity.value)),o.opacity<1&&(o.transparent=!0),t.ReflectionFactor&&(o.reflectivity=t.ReflectionFactor.value),t.Shininess&&(o.shininess=t.Shininess.value),t.Specular?o.specular=new he().fromArray(t.Specular.value):t.SpecularColor&&t.SpecularColor.type==="Color"&&(o.specular=new he().fromArray(t.SpecularColor.value));const r=this;return K.get(e).children.forEach(function(a){const i=a.relationship;switch(i){case"Bump":o.bumpMap=r.getTexture(n,a.ID);break;case"Maya|TEX_ao_map":o.aoMap=r.getTexture(n,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":o.map=r.getTexture(n,a.ID),o.map!==void 0&&("colorSpace"in o.map?o.map.colorSpace="srgb":o.map.encoding=3001);break;case"DisplacementColor":o.displacementMap=r.getTexture(n,a.ID);break;case"EmissiveColor":o.emissiveMap=r.getTexture(n,a.ID),o.emissiveMap!==void 0&&("colorSpace"in o.emissiveMap?o.emissiveMap.colorSpace="srgb":o.emissiveMap.encoding=3001);break;case"NormalMap":case"Maya|TEX_normal_map":o.normalMap=r.getTexture(n,a.ID);break;case"ReflectionColor":o.envMap=r.getTexture(n,a.ID),o.envMap!==void 0&&(o.envMap.mapping=Xn,"colorSpace"in o.envMap?o.envMap.colorSpace="srgb":o.envMap.encoding=3001);break;case"SpecularColor":o.specularMap=r.getTexture(n,a.ID),o.specularMap!==void 0&&("colorSpace"in o.specularMap?o.specularMap.colorSpace="srgb":o.specularMap.encoding=3001);break;case"TransparentColor":case"TransparencyFactor":o.alphaMap=r.getTexture(n,a.ID),o.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",i);break}}),o}getTexture(t,n){return"LayeredTexture"in F.Objects&&n in F.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),n=K.get(n).children[0].ID),t.get(n)}parseDeformers(){const t={},n={};if("Deformer"in F.Objects){const e=F.Objects.Deformer;for(const o in e){const r=e[o],a=K.get(parseInt(o));if(r.attrType==="Skin"){const i=this.parseSkeleton(a,e);i.ID=o,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),i.geometryID=a.parents[0].ID,t[o]=i}else if(r.attrType==="BlendShape"){const i={id:o};i.rawTargets=this.parseMorphTargets(a,e),i.id=o,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),n[o]=i}}}return{skeletons:t,morphTargets:n}}parseSkeleton(t,n){const e=[];return t.children.forEach(function(o){const r=n[o.ID];if(r.attrType!=="Cluster")return;const a={ID:o.ID,indices:[],weights:[],transformLink:new N().fromArray(r.TransformLink.a)};"Indexes"in r&&(a.indices=r.Indexes.a,a.weights=r.Weights.a),e.push(a)}),{rawBones:e,bones:[]}}parseMorphTargets(t,n){const e=[];for(let o=0;o<t.children.length;o++){const r=t.children[o],a=n[r.ID],i={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;i.geoID=K.get(parseInt(r.ID)).children.filter(function(c){return c.relationship===void 0})[0].ID,e.push(i)}return e}parseScene(t,n,e){ae=new gt;const o=this.parseModels(t.skeletons,n,e),r=F.Objects.Model,a=this;o.forEach(function(c){const d=r[c.ID];a.setLookAtProperties(c,d),K.get(c.ID).parents.forEach(function(s){const f=o.get(s.ID);f!==void 0&&f.add(c)}),c.parent===null&&ae.add(c)}),this.bindSkeleton(t.skeletons,n,o),this.createAmbientLight(),ae.traverse(function(c){if(c.userData.transformData){c.parent&&(c.userData.transformData.parentMatrix=c.parent.matrix,c.userData.transformData.parentMatrixWorld=c.parent.matrixWorld);const d=dn(c.userData.transformData);c.applyMatrix4(d),c.updateWorldMatrix()}});const i=new Yo().parse();ae.children.length===1&&ae.children[0].isGroup&&(ae.children[0].animations=i,ae=ae.children[0]),ae.animations=i}parseModels(t,n,e){const o=new Map,r=F.Objects.Model;for(const a in r){const i=parseInt(a),c=r[a],d=K.get(i);let u=this.buildSkeleton(d,t,i,c.attrName);if(!u){switch(c.attrType){case"Camera":u=this.createCamera(d);break;case"Light":u=this.createLight(d);break;case"Mesh":u=this.createMesh(d,n,e);break;case"NurbsCurve":u=this.createCurve(d,n);break;case"LimbNode":case"Root":u=new Ct;break;case"Null":default:u=new gt;break}u.name=c.attrName?nt.sanitizeNodeName(c.attrName):"",u.ID=i}this.getTransformData(u,c),o.set(i,u)}return o}buildSkeleton(t,n,e,o){let r=null;return t.parents.forEach(function(a){for(const i in n){const c=n[i];c.rawBones.forEach(function(d,u){if(d.ID===a.ID){const s=r;r=new Ct,r.matrixWorld.copy(d.transformLink),r.name=o?nt.sanitizeNodeName(o):"",r.ID=e,c.bones[u]=r,s!==null&&r.add(s)}})}}),r}createCamera(t){let n,e;if(t.children.forEach(function(o){const r=F.Objects.NodeAttribute[o.ID];r!==void 0&&(e=r)}),e===void 0)n=new ft;else{let o=0;e.CameraProjectionType!==void 0&&e.CameraProjectionType.value===1&&(o=1);let r=1;e.NearPlane!==void 0&&(r=e.NearPlane.value/1e3);let a=1e3;e.FarPlane!==void 0&&(a=e.FarPlane.value/1e3);let i=window.innerWidth,c=window.innerHeight;e.AspectWidth!==void 0&&e.AspectHeight!==void 0&&(i=e.AspectWidth.value,c=e.AspectHeight.value);const d=i/c;let u=45;e.FieldOfView!==void 0&&(u=e.FieldOfView.value);const s=e.FocalLength?e.FocalLength.value:null;switch(o){case 0:n=new Oe(u,d,r,a),s!==null&&n.setFocalLength(s);break;case 1:n=new Ce(-i/2,i/2,c/2,-c/2,r,a);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+o+"."),n=new ft;break}}return n}createLight(t){let n,e;if(t.children.forEach(function(o){const r=F.Objects.NodeAttribute[o.ID];r!==void 0&&(e=r)}),e===void 0)n=new ft;else{let o;e.LightType===void 0?o=0:o=e.LightType.value;let r=16777215;e.Color!==void 0&&(r=new he().fromArray(e.Color.value));let a=e.Intensity===void 0?1:e.Intensity.value/100;e.CastLightOnObject!==void 0&&e.CastLightOnObject.value===0&&(a=0);let i=0;e.FarAttenuationEnd!==void 0&&(e.EnableFarAttenuation!==void 0&&e.EnableFarAttenuation.value===0?i=0:i=e.FarAttenuationEnd.value);const c=1;switch(o){case 0:n=new jt(r,a,i,c);break;case 1:n=new Vn(r,a);break;case 2:let d=Math.PI/3;e.InnerAngle!==void 0&&(d=pe.degToRad(e.InnerAngle.value));let u=0;e.OuterAngle!==void 0&&(u=pe.degToRad(e.OuterAngle.value),u=Math.max(u,1)),n=new Zn(r,a,i,d,u,c);break;default:console.warn("THREE.FBXLoader: Unknown light type "+e.LightType.value+", defaulting to a PointLight."),n=new jt(r,a);break}e.CastShadows!==void 0&&e.CastShadows.value===1&&(n.castShadow=!0)}return n}createMesh(t,n,e){let o,r=null,a=null;const i=[];return t.children.forEach(function(c){n.has(c.ID)&&(r=n.get(c.ID)),e.has(c.ID)&&i.push(e.get(c.ID))}),i.length>1?a=i:i.length>0?a=i[0]:(a=new Qe({color:13421772}),i.push(a)),"color"in r.attributes&&i.forEach(function(c){c.vertexColors=!0}),r.FBX_Deformer?(o=new Yn(r,a),o.normalizeSkinWeights()):o=new ot(r,a),o}createCurve(t,n){const e=t.children.reduce(function(r,a){return n.has(a.ID)&&(r=n.get(a.ID)),r},null),o=new et({color:3342591,linewidth:1});return new Un(e,o)}getTransformData(t,n){const e={};"InheritType"in n&&(e.inheritType=parseInt(n.InheritType.value)),"RotationOrder"in n?e.eulerOrder=fn(n.RotationOrder.value):e.eulerOrder="ZYX","Lcl_Translation"in n&&(e.translation=n.Lcl_Translation.value),"PreRotation"in n&&(e.preRotation=n.PreRotation.value),"Lcl_Rotation"in n&&(e.rotation=n.Lcl_Rotation.value),"PostRotation"in n&&(e.postRotation=n.PostRotation.value),"Lcl_Scaling"in n&&(e.scale=n.Lcl_Scaling.value),"ScalingOffset"in n&&(e.scalingOffset=n.ScalingOffset.value),"ScalingPivot"in n&&(e.scalingPivot=n.ScalingPivot.value),"RotationOffset"in n&&(e.rotationOffset=n.RotationOffset.value),"RotationPivot"in n&&(e.rotationPivot=n.RotationPivot.value),t.userData.transformData=e}setLookAtProperties(t,n){"LookAtProperty"in n&&K.get(t.ID).children.forEach(function(o){if(o.relationship==="LookAtProperty"){const r=F.Objects.Model[o.ID];if("Lcl_Translation"in r){const a=r.Lcl_Translation.value;t.target!==void 0?(t.target.position.fromArray(a),ae.add(t.target)):t.lookAt(new U().fromArray(a))}}})}bindSkeleton(t,n,e){const o=this.parsePoseNodes();for(const r in t){const a=t[r];K.get(parseInt(a.ID)).parents.forEach(function(c){if(n.has(c.ID)){const d=c.ID;K.get(d).parents.forEach(function(s){e.has(s.ID)&&e.get(s.ID).bind(new Gn(a.bones),o[s.ID])})}})}}parsePoseNodes(){const t={};if("Pose"in F.Objects){const n=F.Objects.Pose;for(const e in n)if(n[e].attrType==="BindPose"&&n[e].NbPoseNodes>0){const o=n[e].PoseNode;Array.isArray(o)?o.forEach(function(r){t[r.Node]=new N().fromArray(r.Matrix.a)}):t[o.Node]=new N().fromArray(o.Matrix.a)}}return t}createAmbientLight(){if("GlobalSettings"in F&&"AmbientColor"in F.GlobalSettings){const t=F.GlobalSettings.AmbientColor.value,n=t[0],e=t[1],o=t[2];if(n!==0||e!==0||o!==0){const r=new he(n,e,o);ae.add(new Wn(r,1))}}}}class Vo{parse(t){const n=new Map;if("Geometry"in F.Objects){const e=F.Objects.Geometry;for(const o in e){const r=K.get(parseInt(o)),a=this.parseGeometry(r,e[o],t);n.set(parseInt(o),a)}}return n}parseGeometry(t,n,e){switch(n.attrType){case"Mesh":return this.parseMeshGeometry(t,n,e);case"NurbsCurve":return this.parseNurbsGeometry(n)}}parseMeshGeometry(t,n,e){const o=e.skeletons,r=[],a=t.parents.map(function(s){return F.Objects.Model[s.ID]});if(a.length===0)return;const i=t.children.reduce(function(s,f){return o[f.ID]!==void 0&&(s=o[f.ID]),s},null);t.children.forEach(function(s){e.morphTargets[s.ID]!==void 0&&r.push(e.morphTargets[s.ID])});const c=a[0],d={};"RotationOrder"in c&&(d.eulerOrder=fn(c.RotationOrder.value)),"InheritType"in c&&(d.inheritType=parseInt(c.InheritType.value)),"GeometricTranslation"in c&&(d.translation=c.GeometricTranslation.value),"GeometricRotation"in c&&(d.rotation=c.GeometricRotation.value),"GeometricScaling"in c&&(d.scale=c.GeometricScaling.value);const u=dn(d);return this.genGeometry(n,i,r,u)}genGeometry(t,n,e,o){const r=new De;t.attrName&&(r.name=t.attrName);const a=this.parseGeoNode(t,n),i=this.genBuffers(a),c=new ue(i.vertex,3);if(c.applyMatrix4(o),r.setAttribute("position",c),i.colors.length>0&&r.setAttribute("color",new ue(i.colors,3)),n&&(r.setAttribute("skinIndex",new Nn(i.weightsIndices,4)),r.setAttribute("skinWeight",new ue(i.vertexWeights,4)),r.FBX_Deformer=n),i.normal.length>0){const d=new Kn().getNormalMatrix(o),u=new ue(i.normal,3);u.applyNormalMatrix(d),r.setAttribute("normal",u)}if(i.uvs.forEach(function(d,u){Mo==="uv2"&&u++;const s=u===0?"uv":`uv${u}`;r.setAttribute(s,new ue(i.uvs[u],2))}),a.material&&a.material.mappingType!=="AllSame"){let d=i.materialIndex[0],u=0;if(i.materialIndex.forEach(function(s,f){s!==d&&(r.addGroup(u,f-u,d),d=s,u=f)}),r.groups.length>0){const s=r.groups[r.groups.length-1],f=s.start+s.count;f!==i.materialIndex.length&&r.addGroup(f,i.materialIndex.length-f,d)}r.groups.length===0&&r.addGroup(0,i.materialIndex.length,i.materialIndex[0])}return this.addMorphTargets(r,t,e,o),r}parseGeoNode(t,n){const e={};if(e.vertexPositions=t.Vertices!==void 0?t.Vertices.a:[],e.vertexIndices=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],t.LayerElementColor&&(e.color=this.parseVertexColors(t.LayerElementColor[0])),t.LayerElementMaterial&&(e.material=this.parseMaterialIndices(t.LayerElementMaterial[0])),t.LayerElementNormal&&(e.normal=this.parseNormals(t.LayerElementNormal[0])),t.LayerElementUV){e.uv=[];let o=0;for(;t.LayerElementUV[o];)t.LayerElementUV[o].UV&&e.uv.push(this.parseUVs(t.LayerElementUV[o])),o++}return e.weightTable={},n!==null&&(e.skeleton=n,n.rawBones.forEach(function(o,r){o.indices.forEach(function(a,i){e.weightTable[a]===void 0&&(e.weightTable[a]=[]),e.weightTable[a].push({id:r,weight:o.weights[i]})})})),e}genBuffers(t){const n={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let e=0,o=0,r=!1,a=[],i=[],c=[],d=[],u=[],s=[];const f=this;return t.vertexIndices.forEach(function(m,v){let y,b=!1;m<0&&(m=m^-1,b=!0);let x=[],w=[];if(a.push(m*3,m*3+1,m*3+2),t.color){const M=qe(v,e,m,t.color);c.push(M[0],M[1],M[2])}if(t.skeleton){if(t.weightTable[m]!==void 0&&t.weightTable[m].forEach(function(M){w.push(M.weight),x.push(M.id)}),w.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const M=[0,0,0,0],L=[0,0,0,0];w.forEach(function(P,h){let O=P,X=x[h];L.forEach(function(A,R,k){if(O>A){k[R]=O,O=A;const $=M[R];M[R]=X,X=$}})}),x=M,w=L}for(;w.length<4;)w.push(0),x.push(0);for(let M=0;M<4;++M)u.push(w[M]),s.push(x[M])}if(t.normal){const M=qe(v,e,m,t.normal);i.push(M[0],M[1],M[2])}t.material&&t.material.mappingType!=="AllSame"&&(y=qe(v,e,m,t.material)[0]),t.uv&&t.uv.forEach(function(M,L){const P=qe(v,e,m,M);d[L]===void 0&&(d[L]=[]),d[L].push(P[0]),d[L].push(P[1])}),o++,b&&(f.genFace(n,t,a,y,i,c,d,u,s,o),e++,o=0,a=[],i=[],c=[],d=[],u=[],s=[])}),n}genFace(t,n,e,o,r,a,i,c,d,u){for(let s=2;s<u;s++)t.vertex.push(n.vertexPositions[e[0]]),t.vertex.push(n.vertexPositions[e[1]]),t.vertex.push(n.vertexPositions[e[2]]),t.vertex.push(n.vertexPositions[e[(s-1)*3]]),t.vertex.push(n.vertexPositions[e[(s-1)*3+1]]),t.vertex.push(n.vertexPositions[e[(s-1)*3+2]]),t.vertex.push(n.vertexPositions[e[s*3]]),t.vertex.push(n.vertexPositions[e[s*3+1]]),t.vertex.push(n.vertexPositions[e[s*3+2]]),n.skeleton&&(t.vertexWeights.push(c[0]),t.vertexWeights.push(c[1]),t.vertexWeights.push(c[2]),t.vertexWeights.push(c[3]),t.vertexWeights.push(c[(s-1)*4]),t.vertexWeights.push(c[(s-1)*4+1]),t.vertexWeights.push(c[(s-1)*4+2]),t.vertexWeights.push(c[(s-1)*4+3]),t.vertexWeights.push(c[s*4]),t.vertexWeights.push(c[s*4+1]),t.vertexWeights.push(c[s*4+2]),t.vertexWeights.push(c[s*4+3]),t.weightsIndices.push(d[0]),t.weightsIndices.push(d[1]),t.weightsIndices.push(d[2]),t.weightsIndices.push(d[3]),t.weightsIndices.push(d[(s-1)*4]),t.weightsIndices.push(d[(s-1)*4+1]),t.weightsIndices.push(d[(s-1)*4+2]),t.weightsIndices.push(d[(s-1)*4+3]),t.weightsIndices.push(d[s*4]),t.weightsIndices.push(d[s*4+1]),t.weightsIndices.push(d[s*4+2]),t.weightsIndices.push(d[s*4+3])),n.color&&(t.colors.push(a[0]),t.colors.push(a[1]),t.colors.push(a[2]),t.colors.push(a[(s-1)*3]),t.colors.push(a[(s-1)*3+1]),t.colors.push(a[(s-1)*3+2]),t.colors.push(a[s*3]),t.colors.push(a[s*3+1]),t.colors.push(a[s*3+2])),n.material&&n.material.mappingType!=="AllSame"&&(t.materialIndex.push(o),t.materialIndex.push(o),t.materialIndex.push(o)),n.normal&&(t.normal.push(r[0]),t.normal.push(r[1]),t.normal.push(r[2]),t.normal.push(r[(s-1)*3]),t.normal.push(r[(s-1)*3+1]),t.normal.push(r[(s-1)*3+2]),t.normal.push(r[s*3]),t.normal.push(r[s*3+1]),t.normal.push(r[s*3+2])),n.uv&&n.uv.forEach(function(f,m){t.uvs[m]===void 0&&(t.uvs[m]=[]),t.uvs[m].push(i[m][0]),t.uvs[m].push(i[m][1]),t.uvs[m].push(i[m][(s-1)*2]),t.uvs[m].push(i[m][(s-1)*2+1]),t.uvs[m].push(i[m][s*2]),t.uvs[m].push(i[m][s*2+1])})}addMorphTargets(t,n,e,o){if(e.length===0)return;t.morphTargetsRelative=!0,t.morphAttributes.position=[];const r=this;e.forEach(function(a){a.rawTargets.forEach(function(i){const c=F.Objects.Geometry[i.geoID];c!==void 0&&r.genMorphGeometry(t,n,c,o,i.name)})})}genMorphGeometry(t,n,e,o,r){const a=n.PolygonVertexIndex!==void 0?n.PolygonVertexIndex.a:[],i=e.Vertices!==void 0?e.Vertices.a:[],c=e.Indexes!==void 0?e.Indexes.a:[],d=t.attributes.position.count*3,u=new Float32Array(d);for(let v=0;v<c.length;v++){const y=c[v]*3;u[y]=i[v*3],u[y+1]=i[v*3+1],u[y+2]=i[v*3+2]}const s={vertexIndices:a,vertexPositions:u},f=this.genBuffers(s),m=new ue(f.vertex,3);m.name=r||e.attrName,m.applyMatrix4(o),t.morphAttributes.position.push(m)}parseNormals(t){const n=t.MappingInformationType,e=t.ReferenceInformationType,o=t.Normals.a;let r=[];return e==="IndexToDirect"&&("NormalIndex"in t?r=t.NormalIndex.a:"NormalsIndex"in t&&(r=t.NormalsIndex.a)),{dataSize:3,buffer:o,indices:r,mappingType:n,referenceType:e}}parseUVs(t){const n=t.MappingInformationType,e=t.ReferenceInformationType,o=t.UV.a;let r=[];return e==="IndexToDirect"&&(r=t.UVIndex.a),{dataSize:2,buffer:o,indices:r,mappingType:n,referenceType:e}}parseVertexColors(t){const n=t.MappingInformationType,e=t.ReferenceInformationType,o=t.Colors.a;let r=[];return e==="IndexToDirect"&&(r=t.ColorIndex.a),{dataSize:4,buffer:o,indices:r,mappingType:n,referenceType:e}}parseMaterialIndices(t){const n=t.MappingInformationType,e=t.ReferenceInformationType;if(n==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:e};const o=t.Materials.a,r=[];for(let a=0;a<o.length;++a)r.push(a);return{dataSize:1,buffer:o,indices:r,mappingType:n,referenceType:e}}parseNurbsGeometry(t){if(Vt===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new De;const n=parseInt(t.Order);if(isNaN(n))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",t.Order,t.id),new De;const e=n-1,o=t.KnotVector.a,r=[],a=t.Points.a;for(let s=0,f=a.length;s<f;s+=4)r.push(new at().fromArray(a,s));let i,c;if(t.Form==="Closed")r.push(r[0]);else if(t.Form==="Periodic"){i=e,c=o.length-1-i;for(let s=0;s<e;++s)r.push(r[s])}const u=new Vt(e,o,r,i,c).getPoints(r.length*12);return new De().setFromPoints(u)}}class Yo{parse(){const t=[],n=this.parseClips();if(n!==void 0)for(const e in n){const o=n[e],r=this.addClip(o);t.push(r)}return t}parseClips(){if(F.Objects.AnimationCurve===void 0)return;const t=this.parseAnimationCurveNodes();this.parseAnimationCurves(t);const n=this.parseAnimationLayers(t);return this.parseAnimStacks(n)}parseAnimationCurveNodes(){const t=F.Objects.AnimationCurveNode,n=new Map;for(const e in t){const o=t[e];if(o.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:o.id,attr:o.attrName,curves:{}};n.set(r.id,r)}}return n}parseAnimationCurves(t){const n=F.Objects.AnimationCurve;for(const e in n){const o={id:n[e].id,times:n[e].KeyTime.a.map(Ko),values:n[e].KeyValueFloat.a},r=K.get(o.id);if(r!==void 0){const a=r.parents[0].ID,i=r.parents[0].relationship;i.match(/X/)?t.get(a).curves.x=o:i.match(/Y/)?t.get(a).curves.y=o:i.match(/Z/)?t.get(a).curves.z=o:i.match(/d|DeformPercent/)&&t.has(a)&&(t.get(a).curves.morph=o)}}}parseAnimationLayers(t){const n=F.Objects.AnimationLayer,e=new Map;for(const o in n){const r=[],a=K.get(parseInt(o));a!==void 0&&(a.children.forEach(function(c,d){if(t.has(c.ID)){const u=t.get(c.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[d]===void 0){const s=K.get(c.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(s!==void 0){const f=F.Objects.Model[s.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",c);return}const m={modelName:f.attrName?nt.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};ae.traverse(function(v){v.ID===f.id&&(m.transform=v.matrix,v.userData.transformData&&(m.eulerOrder=v.userData.transformData.eulerOrder))}),m.transform||(m.transform=new N),"PreRotation"in f&&(m.preRotation=f.PreRotation.value),"PostRotation"in f&&(m.postRotation=f.PostRotation.value),r[d]=m}}r[d]&&(r[d][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[d]===void 0){const s=K.get(c.ID).parents.filter(function(x){return x.relationship!==void 0})[0].ID,f=K.get(s).parents[0].ID,m=K.get(f).parents[0].ID,v=K.get(m).parents[0].ID,y=F.Objects.Model[v],b={modelName:y.attrName?nt.sanitizeNodeName(y.attrName):"",morphName:F.Objects.Deformer[s].attrName};r[d]=b}r[d][u.attr]=u}}}),e.set(parseInt(o),r))}return e}parseAnimStacks(t){const n=F.Objects.AnimationStack,e={};for(const o in n){const r=K.get(parseInt(o)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=t.get(r[0].ID);e[o]={name:n[o].attrName,layer:a}}return e}addClip(t){let n=[];const e=this;return t.layer.forEach(function(o){n=n.concat(e.generateTracks(o))}),new $n(t.name,-1,n)}generateTracks(t){const n=[];let e=new U,o=new Ie,r=new U;if(t.transform&&t.transform.decompose(e,o,r),e=e.toArray(),o=new Xe().setFromQuaternion(o,t.eulerOrder).toArray(),r=r.toArray(),t.T!==void 0&&Object.keys(t.T.curves).length>0){const a=this.generateVectorTrack(t.modelName,t.T.curves,e,"position");a!==void 0&&n.push(a)}if(t.R!==void 0&&Object.keys(t.R.curves).length>0){const a=this.generateRotationTrack(t.modelName,t.R.curves,o,t.preRotation,t.postRotation,t.eulerOrder);a!==void 0&&n.push(a)}if(t.S!==void 0&&Object.keys(t.S.curves).length>0){const a=this.generateVectorTrack(t.modelName,t.S.curves,r,"scale");a!==void 0&&n.push(a)}if(t.DeformPercent!==void 0){const a=this.generateMorphTrack(t);a!==void 0&&n.push(a)}return n}generateVectorTrack(t,n,e,o){const r=this.getTimesForAllAxes(n),a=this.getKeyframeTrackValues(r,n,e);return new qn(t+"."+o,r,a)}generateRotationTrack(t,n,e,o,r,a){n.x!==void 0&&(this.interpolateRotations(n.x),n.x.values=n.x.values.map(pe.degToRad)),n.y!==void 0&&(this.interpolateRotations(n.y),n.y.values=n.y.values.map(pe.degToRad)),n.z!==void 0&&(this.interpolateRotations(n.z),n.z.values=n.z.values.map(pe.degToRad));const i=this.getTimesForAllAxes(n),c=this.getKeyframeTrackValues(i,n,e);o!==void 0&&(o=o.map(pe.degToRad),o.push(a),o=new Xe().fromArray(o),o=new Ie().setFromEuler(o)),r!==void 0&&(r=r.map(pe.degToRad),r.push(a),r=new Xe().fromArray(r),r=new Ie().setFromEuler(r).invert());const d=new Ie,u=new Xe,s=[];for(let f=0;f<c.length;f+=3)u.set(c[f],c[f+1],c[f+2],a),d.setFromEuler(u),o!==void 0&&d.premultiply(o),r!==void 0&&d.multiply(r),d.toArray(s,f/3*4);return new Jn(t+".quaternion",i,s)}generateMorphTrack(t){const n=t.DeformPercent.curves.morph,e=n.values.map(function(r){return r/100}),o=ae.getObjectByName(t.modelName).morphTargetDictionary[t.morphName];return new Qn(t.modelName+".morphTargetInfluences["+o+"]",n.times,e)}getTimesForAllAxes(t){let n=[];if(t.x!==void 0&&(n=n.concat(t.x.times)),t.y!==void 0&&(n=n.concat(t.y.times)),t.z!==void 0&&(n=n.concat(t.z.times)),n=n.sort(function(e,o){return e-o}),n.length>1){let e=1,o=n[0];for(let r=1;r<n.length;r++){const a=n[r];a!==o&&(n[e]=a,o=a,e++)}n=n.slice(0,e)}return n}getKeyframeTrackValues(t,n,e){const o=e,r=[];let a=-1,i=-1,c=-1;return t.forEach(function(d){if(n.x&&(a=n.x.times.indexOf(d)),n.y&&(i=n.y.times.indexOf(d)),n.z&&(c=n.z.times.indexOf(d)),a!==-1){const u=n.x.values[a];r.push(u),o[0]=u}else r.push(o[0]);if(i!==-1){const u=n.y.values[i];r.push(u),o[1]=u}else r.push(o[1]);if(c!==-1){const u=n.z.values[c];r.push(u),o[2]=u}else r.push(o[2])}),r}interpolateRotations(t){for(let n=1;n<t.values.length;n++){const e=t.values[n-1],o=t.values[n]-e,r=Math.abs(o);if(r>=180){const a=r/180,i=o/a;let c=e+i;const d=t.times[n-1],s=(t.times[n]-d)/a;let f=d+s;const m=[],v=[];for(;f<t.times[n];)m.push(f),f+=s,v.push(c),c+=i;t.times=Gt(t.times,n,m),t.values=Gt(t.values,n,v)}}}}class Uo{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(t){this.nodeStack.push(t),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(t,n){this.currentProp=t,this.currentPropName=n}parse(t){this.currentIndent=0,this.allNodes=new pn,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const n=this,e=t.split(/[\r\n]+/);return e.forEach(function(o,r){const a=o.match(/^[\s\t]*;/),i=o.match(/^[\s\t]*$/);if(a||i)return;const c=o.match("^\\t{"+n.currentIndent+"}(\\w+):(.*){",""),d=o.match("^\\t{"+n.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=o.match("^\\t{"+(n.currentIndent-1)+"}}");c?n.parseNodeBegin(o,c):d?n.parseNodeProperty(o,d,e[++r]):u?n.popStack():o.match(/^[^\s\t}]/)&&n.parseNodePropertyContinued(o)}),this.allNodes}parseNodeBegin(t,n){const e=n[1].trim().replace(/^"/,"").replace(/"$/,""),o=n[2].split(",").map(function(c){return c.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:e},a=this.parseNodeAttr(o),i=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(e,r):e in i?(e==="PoseNode"?i.PoseNode.push(r):i[e].id!==void 0&&(i[e]={},i[e][i[e].id]=i[e]),a.id!==""&&(i[e][a.id]=r)):typeof a.id=="number"?(i[e]={},i[e][a.id]=r):e!=="Properties70"&&(e==="PoseNode"?i[e]=[r]:i[e]=r),typeof a.id=="number"&&(r.id=a.id),a.name!==""&&(r.attrName=a.name),a.type!==""&&(r.attrType=a.type),this.pushStack(r)}parseNodeAttr(t){let n=t[0];t[0]!==""&&(n=parseInt(t[0]),isNaN(n)&&(n=t[0]));let e="",o="";return t.length>1&&(e=t[1].replace(/^(\w+)::/,""),o=t[2]),{id:n,name:e,type:o}}parseNodeProperty(t,n,e){let o=n[1].replace(/^"/,"").replace(/"$/,"").trim(),r=n[2].replace(/^"/,"").replace(/"$/,"").trim();o==="Content"&&r===","&&(r=e.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(t,o,r);return}if(o==="C"){const c=r.split(",").slice(1),d=parseInt(c[0]),u=parseInt(c[1]);let s=r.split(",").slice(3);s=s.map(function(f){return f.trim().replace(/^"/,"")}),o="connections",r=[d,u],qo(r,s),a[o]===void 0&&(a[o]=[])}o==="Node"&&(a.id=r),o in a&&Array.isArray(a[o])?a[o].push(r):o!=="a"?a[o]=r:a.a=r,this.setCurrentProp(a,o),o==="a"&&r.slice(-1)!==","&&(a.a=vt(r))}parseNodePropertyContinued(t){const n=this.getCurrentNode();n.a+=t,t.slice(-1)!==","&&(n.a=vt(n.a))}parseNodeSpecialProperty(t,n,e){const o=e.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=o[0],a=o[1],i=o[2],c=o[3];let d=o[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":d=parseFloat(d);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":d=vt(d);break}this.getPrevNode()[r]={type:a,type2:i,flag:c,value:d},this.setCurrentProp(this.getPrevNode(),r)}}class Go{parse(t){const n=new Yt(t);n.skip(23);const e=n.getUint32();if(e<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+e);const o=new pn;for(;!this.endOfContent(n);){const r=this.parseNode(n,e);r!==null&&o.add(r.name,r)}return o}endOfContent(t){return t.size()%16===0?(t.getOffset()+160+16&-16)>=t.size():t.getOffset()+160+16>=t.size()}parseNode(t,n){const e={},o=n>=7500?t.getUint64():t.getUint32(),r=n>=7500?t.getUint64():t.getUint32();n>=7500?t.getUint64():t.getUint32();const a=t.getUint8(),i=t.getString(a);if(o===0)return null;const c=[];for(let f=0;f<r;f++)c.push(this.parseProperty(t));const d=c.length>0?c[0]:"",u=c.length>1?c[1]:"",s=c.length>2?c[2]:"";for(e.singleProperty=r===1&&t.getOffset()===o;o>t.getOffset();){const f=this.parseNode(t,n);f!==null&&this.parseSubNode(i,e,f)}return e.propertyList=c,typeof d=="number"&&(e.id=d),u!==""&&(e.attrName=u),s!==""&&(e.attrType=s),i!==""&&(e.name=i),e}parseSubNode(t,n,e){if(e.singleProperty===!0){const o=e.propertyList[0];Array.isArray(o)?(n[e.name]=e,e.a=o):n[e.name]=o}else if(t==="Connections"&&e.name==="C"){const o=[];e.propertyList.forEach(function(r,a){a!==0&&o.push(r)}),n.connections===void 0&&(n.connections=[]),n.connections.push(o)}else if(e.name==="Properties70")Object.keys(e).forEach(function(r){n[r]=e[r]});else if(t==="Properties70"&&e.name==="P"){let o=e.propertyList[0],r=e.propertyList[1];const a=e.propertyList[2],i=e.propertyList[3];let c;o.indexOf("Lcl ")===0&&(o=o.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?c=[e.propertyList[4],e.propertyList[5],e.propertyList[6]]:c=e.propertyList[4],n[o]={type:r,type2:a,flag:i,value:c}}else n[e.name]===void 0?typeof e.id=="number"?(n[e.name]={},n[e.name][e.id]=e):n[e.name]=e:e.name==="PoseNode"?(Array.isArray(n[e.name])||(n[e.name]=[n[e.name]]),n[e.name].push(e)):n[e.name][e.id]===void 0&&(n[e.name][e.id]=e)}parseProperty(t){const n=t.getString(1);let e;switch(n){case"C":return t.getBoolean();case"D":return t.getFloat64();case"F":return t.getFloat32();case"I":return t.getInt32();case"L":return t.getInt64();case"R":return e=t.getUint32(),t.getArrayBuffer(e);case"S":return e=t.getUint32(),t.getString(e);case"Y":return t.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const o=t.getUint32(),r=t.getUint32(),a=t.getUint32();if(r===0)switch(n){case"b":case"c":return t.getBooleanArray(o);case"d":return t.getFloat64Array(o);case"f":return t.getFloat32Array(o);case"i":return t.getInt32Array(o);case"l":return t.getInt64Array(o)}const i=so(new Uint8Array(t.getArrayBuffer(a))),c=new Yt(i.buffer);switch(n){case"b":case"c":return c.getBooleanArray(o);case"d":return c.getFloat64Array(o);case"f":return c.getFloat32Array(o);case"i":return c.getInt32Array(o);case"l":return c.getInt64Array(o)}default:throw new Error("THREE.FBXLoader: Unknown property type "+n)}}}class Yt{constructor(t,n){this.dv=new DataView(t),this.offset=0,this.littleEndian=n!==void 0?n:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(t){this.offset+=t}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(t){const n=[];for(let e=0;e<t;e++)n.push(this.getBoolean());return n}getUint8(){const t=this.dv.getUint8(this.offset);return this.offset+=1,t}getInt16(){const t=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,t}getInt32(){const t=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,t}getInt32Array(t){const n=[];for(let e=0;e<t;e++)n.push(this.getInt32());return n}getUint32(){const t=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,t}getInt64(){let t,n;return this.littleEndian?(t=this.getUint32(),n=this.getUint32()):(n=this.getUint32(),t=this.getUint32()),n&2147483648?(n=~n&4294967295,t=~t&4294967295,t===4294967295&&(n=n+1&4294967295),t=t+1&4294967295,-(n*4294967296+t)):n*4294967296+t}getInt64Array(t){const n=[];for(let e=0;e<t;e++)n.push(this.getInt64());return n}getUint64(){let t,n;return this.littleEndian?(t=this.getUint32(),n=this.getUint32()):(n=this.getUint32(),t=this.getUint32()),n*4294967296+t}getFloat32(){const t=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,t}getFloat32Array(t){const n=[];for(let e=0;e<t;e++)n.push(this.getFloat32());return n}getFloat64(){const t=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,t}getFloat64Array(t){const n=[];for(let e=0;e<t;e++)n.push(this.getFloat64());return n}getArrayBuffer(t){const n=this.dv.buffer.slice(this.offset,this.offset+t);return this.offset+=t,n}getString(t){let n=[];for(let o=0;o<t;o++)n[o]=this.getUint8();const e=n.indexOf(0);return e>=0&&(n=n.slice(0,e)),sn(new Uint8Array(n))}}class pn{add(t,n){this[t]=n}}function Wo(l){const t="Kaydara FBX Binary  \0";return l.byteLength>=t.length&&t===mn(l,0,t.length)}function No(l){const t=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let n=0;function e(o){const r=l[o-1];return l=l.slice(n+o),n++,r}for(let o=0;o<t.length;++o)if(e(1)===t[o])return!1;return!0}function Ut(l){const t=/FBXVersion: (\d+)/,n=l.match(t);if(n)return parseInt(n[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function Ko(l){return l/46186158e3}const $o=[];function qe(l,t,n,e){let o;switch(e.mappingType){case"ByPolygonVertex":o=l;break;case"ByPolygon":o=t;break;case"ByVertice":o=n;break;case"AllSame":o=e.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+e.mappingType)}e.referenceType==="IndexToDirect"&&(o=e.indices[o]);const r=o*e.dataSize,a=r+e.dataSize;return Jo($o,e.buffer,r,a)}const ht=new Xe,Ae=new U;function dn(l){const t=new N,n=new N,e=new N,o=new N,r=new N,a=new N,i=new N,c=new N,d=new N,u=new N,s=new N,f=new N,m=l.inheritType?l.inheritType:0;if(l.translation&&t.setPosition(Ae.fromArray(l.translation)),l.preRotation){const R=l.preRotation.map(pe.degToRad);R.push(l.eulerOrder),n.makeRotationFromEuler(ht.fromArray(R))}if(l.rotation){const R=l.rotation.map(pe.degToRad);R.push(l.eulerOrder),e.makeRotationFromEuler(ht.fromArray(R))}if(l.postRotation){const R=l.postRotation.map(pe.degToRad);R.push(l.eulerOrder),o.makeRotationFromEuler(ht.fromArray(R)),o.invert()}l.scale&&r.scale(Ae.fromArray(l.scale)),l.scalingOffset&&i.setPosition(Ae.fromArray(l.scalingOffset)),l.scalingPivot&&a.setPosition(Ae.fromArray(l.scalingPivot)),l.rotationOffset&&c.setPosition(Ae.fromArray(l.rotationOffset)),l.rotationPivot&&d.setPosition(Ae.fromArray(l.rotationPivot)),l.parentMatrixWorld&&(s.copy(l.parentMatrix),u.copy(l.parentMatrixWorld));const v=n.clone().multiply(e).multiply(o),y=new N;y.extractRotation(u);const b=new N;b.copyPosition(u);const x=b.clone().invert().multiply(u),w=y.clone().invert().multiply(x),M=r,L=new N;if(m===0)L.copy(y).multiply(v).multiply(w).multiply(M);else if(m===1)L.copy(y).multiply(w).multiply(v).multiply(M);else{const k=new N().scale(new U().setFromMatrixScale(s)).clone().invert(),$=w.clone().multiply(k);L.copy(y).multiply(v).multiply($).multiply(M)}const P=d.clone().invert(),h=a.clone().invert();let O=t.clone().multiply(c).multiply(d).multiply(n).multiply(e).multiply(o).multiply(P).multiply(i).multiply(a).multiply(r).multiply(h);const X=new N().copyPosition(O),A=u.clone().multiply(X);return f.copyPosition(A),O=f.clone().multiply(L),O.premultiply(u.invert()),O}function fn(l){l=l||0;const t=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return l===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),t[0]):t[l]}function vt(l){return l.split(",").map(function(n){return parseFloat(n)})}function mn(l,t,n){return t===void 0&&(t=0),n===void 0&&(n=l.byteLength),sn(new Uint8Array(l,t,n))}function qo(l,t){for(let n=0,e=l.length,o=t.length;n<o;n++,e++)l[e]=t[n]}function Jo(l,t,n,e){for(let o=n,r=0;o<e;o++,r++)l[r]=t[o];return l}function Gt(l,t,n){return l.slice(0,t).concat(n).concat(l.slice(t))}const Qo=E.forwardRef(({makeDefault:l,camera:t,regress:n,domElement:e,enableDamping:o=!0,keyEvents:r=!1,onChange:a,onStart:i,onEnd:c,...d},u)=>{const s=le(h=>h.invalidate),f=le(h=>h.camera),m=le(h=>h.gl),v=le(h=>h.events),y=le(h=>h.setEvents),b=le(h=>h.set),x=le(h=>h.get),w=le(h=>h.performance),M=t||f,L=e||v.connected||m.domElement,P=E.useMemo(()=>new Oo(M),[M]);return Ze(()=>{P.enabled&&P.update()},-1),E.useEffect(()=>(r&&P.connect(r===!0?L:r),P.connect(L),()=>void P.dispose()),[r,L,n,P,s]),E.useEffect(()=>{const h=A=>{s(),n&&w.regress(),a&&a(A)},O=A=>{i&&i(A)},X=A=>{c&&c(A)};return P.addEventListener("change",h),P.addEventListener("start",O),P.addEventListener("end",X),()=>{P.removeEventListener("start",O),P.removeEventListener("end",X),P.removeEventListener("change",h)}},[a,i,c,P,s,y]),E.useEffect(()=>{if(l){const h=x().controls;return b({controls:P}),()=>b({controls:h})}},[l,P]),E.createElement("primitive",Et({ref:u,object:P,enableDamping:o},d))});function Mt(l){return rt(Rt,l)}Mt.preload=l=>rt.preload(Rt,l);Mt.clear=l=>rt.clear(Rt,l);const er=E.forwardRef(({scale:l=10,frames:t=1/0,opacity:n=1,width:e=1,height:o=1,blur:r=1,near:a=0,far:i=10,resolution:c=512,smooth:d=!0,color:u="#000000",depthWrite:s=!1,renderOrder:f,...m},v)=>{const y=E.useRef(null),b=le(I=>I.scene),x=le(I=>I.gl),w=E.useRef(null);e=e*(Array.isArray(l)?l[0]:l||1),o=o*(Array.isArray(l)?l[1]:l||1);const[M,L,P,h,O,X,A]=E.useMemo(()=>{const I=new Ht(c,c),S=new Ht(c,c);S.texture.generateMipmaps=I.texture.generateMipmaps=!1;const j=new eo(e,o).rotateX(Math.PI/2),Z=new ot(j),z=new to;z.depthTest=z.depthWrite=!1,z.onBeforeCompile=W=>{W.uniforms={...W.uniforms,ucolor:{value:new he(u)}},W.fragmentShader=W.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),W.fragmentShader=W.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};const V=new Ft(Co),B=new Ft(jo);return B.depthTest=V.depthTest=!1,[I,j,z,Z,V,B,S]},[c,e,o,l,u]),R=I=>{h.visible=!0,h.material=O,O.uniforms.tDiffuse.value=M.texture,O.uniforms.h.value=I*1/256,x.setRenderTarget(A),x.render(h,w.current),h.material=X,X.uniforms.tDiffuse.value=A.texture,X.uniforms.v.value=I*1/256,x.setRenderTarget(M),x.render(h,w.current),h.visible=!1};let k=0,$,_;return Ze(()=>{w.current&&(t===1/0||k<t)&&(k++,$=b.background,_=b.overrideMaterial,y.current.visible=!1,b.background=null,b.overrideMaterial=P,x.setRenderTarget(M),x.render(b,w.current),R(r),d&&R(r*.4),x.setRenderTarget(null),y.current.visible=!0,b.overrideMaterial=_,b.background=$)}),E.useImperativeHandle(v,()=>y.current,[]),E.createElement("group",Et({"rotation-x":Math.PI/2},m,{ref:y}),E.createElement("mesh",{renderOrder:f,geometry:L,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},E.createElement("meshBasicMaterial",{transparent:!0,map:M.texture,opacity:n,depthWrite:s})),E.createElement("orthographicCamera",{ref:w,args:[-e/2,e/2,o/2,-o/2,a,i]}))}),tr=/^[og]\s*(.+)?/,nr=/^mtllib /,or=/^usemtl /,rr=/^usemap /,Wt=/\s+/,Nt=new U,yt=new U,Kt=new U,$t=new U,se=new U,Je=new he;function ar(){const l={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,n){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=n!==!1;return}const e=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:n!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(o,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const i={index:this.materials.length,name:o||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const d={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return d.clone=this.clone.bind(d),d}};return this.materials.push(i),i},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(o){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),o&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return o&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},e&&e.name&&typeof e.clone=="function"){const o=e.clone(0);o.inherited=!0,this.object.materials.push(o)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,n){const e=parseInt(t,10);return(e>=0?e-1:e+n/3)*3},parseNormalIndex:function(t,n){const e=parseInt(t,10);return(e>=0?e-1:e+n/3)*3},parseUVIndex:function(t,n){const e=parseInt(t,10);return(e>=0?e-1:e+n/2)*2},addVertex:function(t,n,e){const o=this.vertices,r=this.object.geometry.vertices;r.push(o[t+0],o[t+1],o[t+2]),r.push(o[n+0],o[n+1],o[n+2]),r.push(o[e+0],o[e+1],o[e+2])},addVertexPoint:function(t){const n=this.vertices;this.object.geometry.vertices.push(n[t+0],n[t+1],n[t+2])},addVertexLine:function(t){const n=this.vertices;this.object.geometry.vertices.push(n[t+0],n[t+1],n[t+2])},addNormal:function(t,n,e){const o=this.normals,r=this.object.geometry.normals;r.push(o[t+0],o[t+1],o[t+2]),r.push(o[n+0],o[n+1],o[n+2]),r.push(o[e+0],o[e+1],o[e+2])},addFaceNormal:function(t,n,e){const o=this.vertices,r=this.object.geometry.normals;Nt.fromArray(o,t),yt.fromArray(o,n),Kt.fromArray(o,e),se.subVectors(Kt,yt),$t.subVectors(Nt,yt),se.cross($t),se.normalize(),r.push(se.x,se.y,se.z),r.push(se.x,se.y,se.z),r.push(se.x,se.y,se.z)},addColor:function(t,n,e){const o=this.colors,r=this.object.geometry.colors;o[t]!==void 0&&r.push(o[t+0],o[t+1],o[t+2]),o[n]!==void 0&&r.push(o[n+0],o[n+1],o[n+2]),o[e]!==void 0&&r.push(o[e+0],o[e+1],o[e+2])},addUV:function(t,n,e){const o=this.uvs,r=this.object.geometry.uvs;r.push(o[t+0],o[t+1]),r.push(o[n+0],o[n+1]),r.push(o[e+0],o[e+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const n=this.uvs;this.object.geometry.uvs.push(n[t+0],n[t+1])},addFace:function(t,n,e,o,r,a,i,c,d){const u=this.vertices.length;let s=this.parseVertexIndex(t,u),f=this.parseVertexIndex(n,u),m=this.parseVertexIndex(e,u);if(this.addVertex(s,f,m),this.addColor(s,f,m),i!==void 0&&i!==""){const v=this.normals.length;s=this.parseNormalIndex(i,v),f=this.parseNormalIndex(c,v),m=this.parseNormalIndex(d,v),this.addNormal(s,f,m)}else this.addFaceNormal(s,f,m);if(o!==void 0&&o!==""){const v=this.uvs.length;s=this.parseUVIndex(o,v),f=this.parseUVIndex(r,v),m=this.parseUVIndex(a,v),this.addUV(s,f,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const n=this.vertices.length;for(let e=0,o=t.length;e<o;e++){const r=this.parseVertexIndex(t[e],n);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(t,n){this.object.geometry.type="Line";const e=this.vertices.length,o=this.uvs.length;for(let r=0,a=t.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(t[r],e));for(let r=0,a=n.length;r<a;r++)this.addUVLine(this.parseUVIndex(n[r],o))}};return l.startObject("",!1),l}class ir extends rn{constructor(t){super(t),this.materials=null}load(t,n,e,o){const r=this,a=new an(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(i){try{n(r.parse(i))}catch(c){o?o(c):console.error(c),r.manager.itemError(t)}},e,o)}setMaterials(t){return this.materials=t,this}parse(t){const n=new ar;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const e=t.split(`
`);let o=[];for(let i=0,c=e.length;i<c;i++){const d=e[i].trimStart();if(d.length===0)continue;const u=d.charAt(0);if(u!=="#")if(u==="v"){const s=d.split(Wt);switch(s[0]){case"v":n.vertices.push(parseFloat(s[1]),parseFloat(s[2]),parseFloat(s[3])),s.length>=7?(Je.setRGB(parseFloat(s[4]),parseFloat(s[5]),parseFloat(s[6])).convertSRGBToLinear(),n.colors.push(Je.r,Je.g,Je.b)):n.colors.push(void 0,void 0,void 0);break;case"vn":n.normals.push(parseFloat(s[1]),parseFloat(s[2]),parseFloat(s[3]));break;case"vt":n.uvs.push(parseFloat(s[1]),parseFloat(s[2]));break}}else if(u==="f"){const f=d.slice(1).trim().split(Wt),m=[];for(let y=0,b=f.length;y<b;y++){const x=f[y];if(x.length>0){const w=x.split("/");m.push(w)}}const v=m[0];for(let y=1,b=m.length-1;y<b;y++){const x=m[y],w=m[y+1];n.addFace(v[0],x[0],w[0],v[1],x[1],w[1],v[2],x[2],w[2])}}else if(u==="l"){const s=d.substring(1).trim().split(" ");let f=[];const m=[];if(d.indexOf("/")===-1)f=s;else for(let v=0,y=s.length;v<y;v++){const b=s[v].split("/");b[0]!==""&&f.push(b[0]),b[1]!==""&&m.push(b[1])}n.addLineGeometry(f,m)}else if(u==="p"){const f=d.slice(1).trim().split(" ");n.addPointGeometry(f)}else if((o=tr.exec(d))!==null){const s=(" "+o[0].slice(1).trim()).slice(1);n.startObject(s)}else if(or.test(d))n.object.startMaterial(d.substring(7).trim(),n.materialLibraries);else if(nr.test(d))n.materialLibraries.push(d.substring(7).trim());else if(rr.test(d))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(o=d.split(" "),o.length>1){const f=o[1].trim().toLowerCase();n.object.smooth=f!=="0"&&f!=="off"}else n.object.smooth=!0;const s=n.object.currentMaterial();s&&(s.smooth=n.object.smooth)}else{if(d==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+d+'"')}}n.finalize();const r=new gt;if(r.materialLibraries=[].concat(n.materialLibraries),!(n.objects.length===1&&n.objects[0].geometry.vertices.length===0)===!0)for(let i=0,c=n.objects.length;i<c;i++){const d=n.objects[i],u=d.geometry,s=d.materials,f=u.type==="Line",m=u.type==="Points";let v=!1;if(u.vertices.length===0)continue;const y=new De;y.setAttribute("position",new ue(u.vertices,3)),u.normals.length>0&&y.setAttribute("normal",new ue(u.normals,3)),u.colors.length>0&&(v=!0,y.setAttribute("color",new ue(u.colors,3))),u.hasUVIndices===!0&&y.setAttribute("uv",new ue(u.uvs,2));const b=[];for(let w=0,M=s.length;w<M;w++){const L=s[w],P=L.name+"_"+L.smooth+"_"+v;let h=n.materials[P];if(this.materials!==null){if(h=this.materials.create(L.name),f&&h&&!(h instanceof et)){const O=new et;kt.prototype.copy.call(O,h),O.color.copy(h.color),h=O}else if(m&&h&&!(h instanceof Ke)){const O=new Ke({size:10,sizeAttenuation:!1});kt.prototype.copy.call(O,h),O.color.copy(h.color),O.map=h.map,h=O}}h===void 0&&(f?h=new et:m?h=new Ke({size:1,sizeAttenuation:!1}):h=new Qe,h.name=L.name,h.flatShading=!L.smooth,h.vertexColors=v,n.materials[P]=h),b.push(h)}let x;if(b.length>1){for(let w=0,M=s.length;w<M;w++){const L=s[w];y.addGroup(L.groupStart,L.groupCount,w)}f?x=new _t(y,b):m?x=new mt(y,b):x=new ot(y,b)}else f?x=new _t(y,b[0]):m?x=new mt(y,b[0]):x=new ot(y,b[0]);x.name=d.name,r.add(x)}else if(n.vertices.length>0){const i=new Ke({size:1,sizeAttenuation:!1}),c=new De;c.setAttribute("position",new ue(n.vertices,3)),n.colors.length>0&&n.colors[0]!==void 0&&(c.setAttribute("color",new ue(n.colors,3)),i.vertexColors=!0);const d=new mt(c,i);r.add(d)}return r}}const tt=typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0),bt=l=>l*Math.PI/180,qt=8,Ee=.005,Jt=.925,Qt=.05,en=.12,tn=bt(6),nn=.15,sr=({placeholderSrc:l})=>{const{progress:t,active:n}=Ro();return!n&&l?null:C.jsx(xo,{center:!0,children:l?C.jsx("img",{src:l,width:128,height:128,style:{filter:"blur(8px)",borderRadius:8}}):`${Math.round(t)} %`})},cr=({pivot:l,min:t,max:n,zoomEnabled:e})=>{const o=E.useRef(null);return Ze(()=>{var r;return(r=o.current)==null?void 0:r.target.copy(l)}),C.jsx(Qo,{ref:o,makeDefault:!0,enablePan:!1,enableRotate:!1,enableZoom:e,minDistance:t,maxDistance:n})},lr=({url:l,xOff:t,yOff:n,pivot:e,initYaw:o,initPitch:r,minZoom:a,maxZoom:i,enableMouseParallax:c,enableManualRotation:d,enableHoverRotation:u,enableManualZoom:s,autoFrame:f,fadeIn:m,autoRotate:v,autoRotateSpeed:y,onLoaded:b})=>{const x=E.useRef(null),w=E.useRef(null),{camera:M,gl:L}=le(),P=E.useRef({x:0,y:0}),h=E.useRef({x:0,y:0}),O=E.useRef({x:0,y:0}),X=E.useRef({x:0,y:0}),A=E.useRef({x:0,y:0}),R=E.useMemo(()=>l.split(".").pop().toLowerCase(),[l]),k=E.useMemo(()=>R==="glb"||R==="gltf"?cn(l).scene.clone():R==="fbx"?Mt(l).clone():R==="obj"?rt(ir,l).clone():(console.error("Unsupported format:",R),null),[l,R]),$=E.useRef(new U);return E.useLayoutEffect(()=>{if(!k)return;const _=w.current;_.updateWorldMatrix(!0,!0);const I=new ro().setFromObject(_).getBoundingSphere(new ao),S=1/(I.radius*2);if(_.position.set(-I.center.x,-I.center.y,-I.center.z),_.scale.setScalar(S),_.traverse(j=>{j.isMesh&&(j.castShadow=!0,j.receiveShadow=!0,m&&(j.material.transparent=!0,j.material.opacity=0))}),_.getWorldPosition($.current),e.copy($.current),x.current.rotation.set(r,o,0),f&&M.isPerspectiveCamera){const j=M,z=I.radius*S*1.2/Math.sin(j.fov*Math.PI/180/2);j.position.set($.current.x,$.current.y,$.current.z+z),j.near=z/10,j.far=z*10,j.updateProjectionMatrix()}if(m){let j=0;const Z=setInterval(()=>{j+=.05;const z=Math.min(j,1);_.traverse(V=>{V.isMesh&&(V.material.opacity=z)}),we(),z===1&&(clearInterval(Z),b==null||b())},16);return()=>clearInterval(Z)}else b==null||b()},[k]),E.useEffect(()=>{if(!d||tt)return;const _=L.domElement;let I=!1,S=0,j=0;const Z=B=>{B.pointerType!=="mouse"&&B.pointerType!=="pen"||(I=!0,S=B.clientX,j=B.clientY,window.addEventListener("pointerup",V))},z=B=>{if(!I)return;const W=B.clientX-S,q=B.clientY-j;S=B.clientX,j=B.clientY,x.current.rotation.y+=W*Ee,x.current.rotation.x+=q*Ee,P.current={x:W*Ee,y:q*Ee},we()},V=()=>I=!1;return _.addEventListener("pointerdown",Z),_.addEventListener("pointermove",z),()=>{_.removeEventListener("pointerdown",Z),_.removeEventListener("pointermove",z),window.removeEventListener("pointerup",V)}},[L,d]),E.useEffect(()=>{if(!tt)return;const _=L.domElement,I=new Map;let S="idle",j=0,Z=0,z=0,V=0,B=0,W=0;const q=H=>{if(H.pointerType==="touch"){if(I.set(H.pointerId,{x:H.clientX,y:H.clientY}),I.size===1)S="decide",j=z=H.clientX,Z=V=H.clientY;else if(I.size===2&&s){S="pinch";const[re,oe]=[...I.values()];B=Math.hypot(re.x-oe.x,re.y-oe.y),W=M.position.z,H.preventDefault()}we()}},Q=H=>{const re=I.get(H.pointerId);if(re){if(re.x=H.clientX,re.y=H.clientY,S==="decide"){const oe=H.clientX-j,ee=H.clientY-Z;(Math.abs(oe)>qt||Math.abs(ee)>qt)&&(d&&Math.abs(oe)>Math.abs(ee)?(S="rotate",_.setPointerCapture(H.pointerId)):(S="idle",I.clear()))}if(S==="rotate"){H.preventDefault();const oe=H.clientX-z,ee=H.clientY-V;z=H.clientX,V=H.clientY,x.current.rotation.y+=oe*Ee,x.current.rotation.x+=ee*Ee,P.current={x:oe*Ee,y:ee*Ee},we()}else if(S==="pinch"&&I.size===2){H.preventDefault();const[oe,ee]=[...I.values()],Me=Math.hypot(oe.x-ee.x,oe.y-ee.y),te=B/Me;M.position.z=pe.clamp(W*te,a,i),we()}}},ne=H=>{I.delete(H.pointerId),S==="rotate"&&I.size===0&&(S="idle"),S==="pinch"&&I.size<2&&(S="idle")};return _.addEventListener("pointerdown",q,{passive:!0}),window.addEventListener("pointermove",Q,{passive:!1}),window.addEventListener("pointerup",ne,{passive:!0}),window.addEventListener("pointercancel",ne,{passive:!0}),()=>{_.removeEventListener("pointerdown",q),window.removeEventListener("pointermove",Q),window.removeEventListener("pointerup",ne),window.removeEventListener("pointercancel",ne)}},[L,d,s,a,i]),E.useEffect(()=>{if(tt)return;const _=I=>{if(I.pointerType!=="mouse")return;const S=I.clientX/window.innerWidth*2-1,j=I.clientY/window.innerHeight*2-1;c&&(h.current={x:-S*Qt,y:-j*Qt}),u&&(X.current={x:j*tn,y:S*tn}),we()};return window.addEventListener("pointermove",_),()=>window.removeEventListener("pointermove",_)},[c,u]),Ze((_,I)=>{let S=!1;O.current.x+=(h.current.x-O.current.x)*en,O.current.y+=(h.current.y-O.current.y)*en;const j=A.current.x,Z=A.current.y;A.current.x+=(X.current.x-A.current.x)*nn,A.current.y+=(X.current.y-A.current.y)*nn;const z=$.current.clone().project(M);z.x+=t+O.current.x,z.y+=n+O.current.y,x.current.position.copy(z.unproject(M)),x.current.rotation.x+=A.current.x-j,x.current.rotation.y+=A.current.y-Z,v&&(x.current.rotation.y+=y*I,S=!0),x.current.rotation.y+=P.current.x,x.current.rotation.x+=P.current.y,P.current.x*=Jt,P.current.y*=Jt,(Math.abs(P.current.x)>1e-4||Math.abs(P.current.y)>1e-4)&&(S=!0),(Math.abs(O.current.x-h.current.x)>1e-4||Math.abs(O.current.y-h.current.y)>1e-4||Math.abs(A.current.x-X.current.x)>1e-4||Math.abs(A.current.y-X.current.y)>1e-4)&&(S=!0),S&&we()}),k?C.jsx("group",{ref:x,children:C.jsx("group",{ref:w,children:C.jsx("primitive",{object:k})})}):null},ur=({url:l,width:t=400,height:n=400,modelXOffset:e=0,modelYOffset:o=0,defaultRotationX:r=-50,defaultRotationY:a=20,defaultZoom:i=.5,minZoomDistance:c=.5,maxZoomDistance:d=10,enableMouseParallax:u=!0,enableManualRotation:s=!0,enableHoverRotation:f=!0,enableManualZoom:m=!0,ambientIntensity:v=.3,keyLightIntensity:y=1,fillLightIntensity:b=.5,rimLightIntensity:x=.8,environmentPreset:w="forest",autoFrame:M=!1,placeholderSrc:L,showScreenshotButton:P=!0,fadeIn:h=!1,autoRotate:O=!1,autoRotateSpeed:X=.35,onModelLoaded:A})=>{E.useEffect(()=>void cn.preload(l),[l]);const R=E.useRef(new U).current,k=E.useRef(null),$=E.useRef(null),_=E.useRef(null),I=E.useRef(null),S=bt(r),j=bt(a),Z=Math.min(Math.max(i,c),d),z=()=>{const V=$.current,B=_.current,W=I.current;if(!V||!B||!W)return;V.shadowMap.enabled=!1;const q=[];B.traverse(H=>{H.isLight&&"castShadow"in H&&(q.push({l:H,cast:H.castShadow}),H.castShadow=!1)}),k.current&&(k.current.visible=!1),V.render(B,W);const Q=V.domElement.toDataURL("image/png"),ne=document.createElement("a");ne.download="model.png",ne.href=Q,ne.click(),V.shadowMap.enabled=!0,q.forEach(({l:H,cast:re})=>H.castShadow=re),k.current&&(k.current.visible=!0),we()};return C.jsxs("div",{style:{width:t,height:n,touchAction:"pan-y pinch-zoom",position:"relative"},children:[P&&C.jsx("button",{onClick:z,style:{position:"absolute",border:"1px solid #fff",right:16,top:16,zIndex:10,cursor:"pointer",padding:"8px 16px",borderRadius:10},children:"Take Screenshot"}),C.jsxs(Cn,{shadows:!0,frameloop:"demand",gl:{preserveDrawingBuffer:!0},onCreated:({gl:V,scene:B,camera:W})=>{$.current=V,_.current=B,I.current=W,V.toneMapping=no,V.outputColorSpace=oo},camera:{fov:50,position:[0,0,Z],near:.01,far:100},style:{touchAction:"pan-y pinch-zoom"},children:[w!=="none"&&C.jsx(co,{preset:w,background:!1}),C.jsx("ambientLight",{intensity:v}),C.jsx("directionalLight",{position:[5,5,5],intensity:y,castShadow:!0}),C.jsx("directionalLight",{position:[-5,2,5],intensity:b}),C.jsx("directionalLight",{position:[0,4,-5],intensity:x}),C.jsx(er,{ref:k,position:[0,-.5,0],opacity:.35,scale:10,blur:2}),C.jsx(E.Suspense,{fallback:C.jsx(sr,{placeholderSrc:L}),children:C.jsx(lr,{url:l,xOff:e,yOff:o,pivot:R,initYaw:S,initPitch:j,minZoom:c,maxZoom:d,enableMouseParallax:u,enableManualRotation:s,enableHoverRotation:f,enableManualZoom:m,autoFrame:M,fadeIn:h,autoRotate:O,autoRotateSpeed:X,onLoaded:A})}),!tt&&C.jsx(cr,{pivot:R,min:c,max:d,zoomEnabled:m})]})]})},pr=`/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */
import { Suspense, useRef, useLayoutEffect, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useLoader, useThree, invalidate } from '@react-three/fiber';
import { OrbitControls, useGLTF, useFBX, useProgress, Html, Environment, ContactShadows } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';

const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
const deg2rad = d => (d * Math.PI) / 180;
const DECIDE = 8;
const ROTATE_SPEED = 0.005;
const INERTIA = 0.925;
const PARALLAX_MAG = 0.05;
const PARALLAX_EASE = 0.12;
const HOVER_MAG = deg2rad(6);
const HOVER_EASE = 0.15;

const Loader = ({ placeholderSrc }) => {
  const { progress, active } = useProgress();
  if (!active && placeholderSrc) return null;
  return (
    <Html center>
      {placeholderSrc ? (
        <img src={placeholderSrc} width={128} height={128} style={{ filter: 'blur(8px)', borderRadius: 8 }} />
      ) : (
        \`\${Math.round(progress)} %\`
      )}
    </Html>
  );
};

const DesktopControls = ({ pivot, min, max, zoomEnabled }) => {
  const ref = useRef(null);
  useFrame(() => ref.current?.target.copy(pivot));
  return (
    <OrbitControls
      ref={ref}
      makeDefault
      enablePan={false}
      enableRotate={false}
      enableZoom={zoomEnabled}
      minDistance={min}
      maxDistance={max}
    />
  );
};

const ModelInner = ({
  url,
  xOff,
  yOff,
  pivot,
  initYaw,
  initPitch,
  minZoom,
  maxZoom,
  enableMouseParallax,
  enableManualRotation,
  enableHoverRotation,
  enableManualZoom,
  autoFrame,
  fadeIn,
  autoRotate,
  autoRotateSpeed,
  onLoaded
}) => {
  const outer = useRef(null);
  const inner = useRef(null);
  const { camera, gl } = useThree();

  const vel = useRef({ x: 0, y: 0 });
  const tPar = useRef({ x: 0, y: 0 });
  const cPar = useRef({ x: 0, y: 0 });
  const tHov = useRef({ x: 0, y: 0 });
  const cHov = useRef({ x: 0, y: 0 });

  const ext = useMemo(() => url.split('.').pop().toLowerCase(), [url]);
  const content = useMemo(() => {
    if (ext === 'glb' || ext === 'gltf') return useGLTF(url).scene.clone();
    if (ext === 'fbx') return useFBX(url).clone();
    if (ext === 'obj') return useLoader(OBJLoader, url).clone();
    console.error('Unsupported format:', ext);
    return null;
  }, [url, ext]);

  const pivotW = useRef(new THREE.Vector3());
  useLayoutEffect(() => {
    if (!content) return;
    const g = inner.current;
    g.updateWorldMatrix(true, true);

    const sphere = new THREE.Box3().setFromObject(g).getBoundingSphere(new THREE.Sphere());
    const s = 1 / (sphere.radius * 2);
    g.position.set(-sphere.center.x, -sphere.center.y, -sphere.center.z);
    g.scale.setScalar(s);

    g.traverse(o => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        if (fadeIn) {
          o.material.transparent = true;
          o.material.opacity = 0;
        }
      }
    });

    g.getWorldPosition(pivotW.current);
    pivot.copy(pivotW.current);
    outer.current.rotation.set(initPitch, initYaw, 0);

    if (autoFrame && camera.isPerspectiveCamera) {
      const persp = camera;
      const fitR = sphere.radius * s;
      const d = (fitR * 1.2) / Math.sin((persp.fov * Math.PI) / 180 / 2);
      persp.position.set(pivotW.current.x, pivotW.current.y, pivotW.current.z + d);
      persp.near = d / 10;
      persp.far = d * 10;
      persp.updateProjectionMatrix();
    }

    if (fadeIn) {
      let t = 0;
      const id = setInterval(() => {
        t += 0.05;
        const v = Math.min(t, 1);
        g.traverse(o => {
          if (o.isMesh) o.material.opacity = v;
        });
        invalidate();
        if (v === 1) {
          clearInterval(id);
          onLoaded?.();
        }
      }, 16);
      return () => clearInterval(id);
    } else onLoaded?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  useEffect(() => {
    if (!enableManualRotation || isTouch) return;
    const el = gl.domElement;
    let drag = false;
    let lx = 0,
      ly = 0;
    const down = e => {
      if (e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;
      drag = true;
      lx = e.clientX;
      ly = e.clientY;
      window.addEventListener('pointerup', up);
    };
    const move = e => {
      if (!drag) return;
      const dx = e.clientX - lx;
      const dy = e.clientY - ly;
      lx = e.clientX;
      ly = e.clientY;
      outer.current.rotation.y += dx * ROTATE_SPEED;
      outer.current.rotation.x += dy * ROTATE_SPEED;
      vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
      invalidate();
    };
    const up = () => (drag = false);
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointermove', move);
    return () => {
      el.removeEventListener('pointerdown', down);
      el.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
  }, [gl, enableManualRotation]);

  useEffect(() => {
    if (!isTouch) return;
    const el = gl.domElement;
    const pts = new Map();

    let mode = 'idle';
    let sx = 0,
      sy = 0,
      lx = 0,
      ly = 0,
      startDist = 0,
      startZ = 0;

    const down = e => {
      if (e.pointerType !== 'touch') return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 1) {
        mode = 'decide';
        sx = lx = e.clientX;
        sy = ly = e.clientY;
      } else if (pts.size === 2 && enableManualZoom) {
        mode = 'pinch';
        const [p1, p2] = [...pts.values()];
        startDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        startZ = camera.position.z;
        e.preventDefault();
      }
      invalidate();
    };

    const move = e => {
      const p = pts.get(e.pointerId);
      if (!p) return;
      p.x = e.clientX;
      p.y = e.clientY;

      if (mode === 'decide') {
        const dx = e.clientX - sx;
        const dy = e.clientY - sy;
        if (Math.abs(dx) > DECIDE || Math.abs(dy) > DECIDE) {
          if (enableManualRotation && Math.abs(dx) > Math.abs(dy)) {
            mode = 'rotate';
            el.setPointerCapture(e.pointerId);
          } else {
            mode = 'idle';
            pts.clear();
          }
        }
      }

      if (mode === 'rotate') {
        e.preventDefault();
        const dx = e.clientX - lx;
        const dy = e.clientY - ly;
        lx = e.clientX;
        ly = e.clientY;
        outer.current.rotation.y += dx * ROTATE_SPEED;
        outer.current.rotation.x += dy * ROTATE_SPEED;
        vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
        invalidate();
      } else if (mode === 'pinch' && pts.size === 2) {
        e.preventDefault();
        const [p1, p2] = [...pts.values()];
        const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        const ratio = startDist / d;
        camera.position.z = THREE.MathUtils.clamp(startZ * ratio, minZoom, maxZoom);
        invalidate();
      }
    };

    const up = e => {
      pts.delete(e.pointerId);
      if (mode === 'rotate' && pts.size === 0) mode = 'idle';
      if (mode === 'pinch' && pts.size < 2) mode = 'idle';
    };

    el.addEventListener('pointerdown', down, { passive: true });
    window.addEventListener('pointermove', move, { passive: false });
    window.addEventListener('pointerup', up, { passive: true });
    window.addEventListener('pointercancel', up, { passive: true });
    return () => {
      el.removeEventListener('pointerdown', down);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gl, enableManualRotation, enableManualZoom, minZoom, maxZoom]);

  useEffect(() => {
    if (isTouch) return;
    const mm = e => {
      if (e.pointerType !== 'mouse') return;
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      if (enableMouseParallax) tPar.current = { x: -nx * PARALLAX_MAG, y: -ny * PARALLAX_MAG };
      if (enableHoverRotation) tHov.current = { x: ny * HOVER_MAG, y: nx * HOVER_MAG };
      invalidate();
    };
    window.addEventListener('pointermove', mm);
    return () => window.removeEventListener('pointermove', mm);
  }, [enableMouseParallax, enableHoverRotation]);

  useFrame((_, dt) => {
    let need = false;
    cPar.current.x += (tPar.current.x - cPar.current.x) * PARALLAX_EASE;
    cPar.current.y += (tPar.current.y - cPar.current.y) * PARALLAX_EASE;
    const phx = cHov.current.x,
      phy = cHov.current.y;
    cHov.current.x += (tHov.current.x - cHov.current.x) * HOVER_EASE;
    cHov.current.y += (tHov.current.y - cHov.current.y) * HOVER_EASE;

    const ndc = pivotW.current.clone().project(camera);
    ndc.x += xOff + cPar.current.x;
    ndc.y += yOff + cPar.current.y;
    outer.current.position.copy(ndc.unproject(camera));

    outer.current.rotation.x += cHov.current.x - phx;
    outer.current.rotation.y += cHov.current.y - phy;

    if (autoRotate) {
      outer.current.rotation.y += autoRotateSpeed * dt;
      need = true;
    }

    outer.current.rotation.y += vel.current.x;
    outer.current.rotation.x += vel.current.y;
    vel.current.x *= INERTIA;
    vel.current.y *= INERTIA;
    if (Math.abs(vel.current.x) > 1e-4 || Math.abs(vel.current.y) > 1e-4) need = true;

    if (
      Math.abs(cPar.current.x - tPar.current.x) > 1e-4 ||
      Math.abs(cPar.current.y - tPar.current.y) > 1e-4 ||
      Math.abs(cHov.current.x - tHov.current.x) > 1e-4 ||
      Math.abs(cHov.current.y - tHov.current.y) > 1e-4
    )
      need = true;

    if (need) invalidate();
  });

  if (!content) return null;
  return (
    <group ref={outer}>
      <group ref={inner}>
        <primitive object={content} />
      </group>
    </group>
  );
};

const ModelViewer = ({
  url,
  width = 400,
  height = 400,
  modelXOffset = 0,
  modelYOffset = 0,
  defaultRotationX = -50,
  defaultRotationY = 20,
  defaultZoom = 0.5,
  minZoomDistance = 0.5,
  maxZoomDistance = 10,
  enableMouseParallax = true,
  enableManualRotation = true,
  enableHoverRotation = true,
  enableManualZoom = true,
  ambientIntensity = 0.3,
  keyLightIntensity = 1,
  fillLightIntensity = 0.5,
  rimLightIntensity = 0.8,
  environmentPreset = 'forest',
  autoFrame = false,
  placeholderSrc,
  showScreenshotButton = true,
  fadeIn = false,
  autoRotate = false,
  autoRotateSpeed = 0.35,
  onModelLoaded
}) => {
  useEffect(() => void useGLTF.preload(url), [url]);
  const pivot = useRef(new THREE.Vector3()).current;
  const contactRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);

  const initYaw = deg2rad(defaultRotationX);
  const initPitch = deg2rad(defaultRotationY);
  const camZ = Math.min(Math.max(defaultZoom, minZoomDistance), maxZoomDistance);

  const capture = () => {
    const g = rendererRef.current,
      s = sceneRef.current,
      c = cameraRef.current;
    if (!g || !s || !c) return;
    g.shadowMap.enabled = false;
    const tmp = [];
    s.traverse(o => {
      if (o.isLight && 'castShadow' in o) {
        tmp.push({ l: o, cast: o.castShadow });
        o.castShadow = false;
      }
    });
    if (contactRef.current) contactRef.current.visible = false;
    g.render(s, c);
    const urlPNG = g.domElement.toDataURL('image/png');
    const a = document.createElement('a');
    a.download = 'model.png';
    a.href = urlPNG;
    a.click();
    g.shadowMap.enabled = true;
    tmp.forEach(({ l, cast }) => (l.castShadow = cast));
    if (contactRef.current) contactRef.current.visible = true;
    invalidate();
  };

  return (
    <div
      style={{
        width,
        height,
        touchAction: 'pan-y pinch-zoom',
        position: 'relative'
      }}
    >
      {showScreenshotButton && (
        <button
          onClick={capture}
          style={{
            position: 'absolute',
            border: '1px solid #fff',
            right: 16,
            top: 16,
            zIndex: 10,
            cursor: 'pointer',
            padding: '8px 16px',
            borderRadius: 10
          }}
        >
          Take Screenshot
        </button>
      )}

      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl, scene, camera }) => {
          rendererRef.current = gl;
          sceneRef.current = scene;
          cameraRef.current = camera;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
        camera={{ fov: 50, position: [0, 0, camZ], near: 0.01, far: 100 }}
        style={{ touchAction: 'pan-y pinch-zoom' }}
      >
        {environmentPreset !== 'none' && <Environment preset={environmentPreset} background={false} />}

        <ambientLight intensity={ambientIntensity} />
        <directionalLight position={[5, 5, 5]} intensity={keyLightIntensity} castShadow />
        <directionalLight position={[-5, 2, 5]} intensity={fillLightIntensity} />
        <directionalLight position={[0, 4, -5]} intensity={rimLightIntensity} />

        <ContactShadows ref={contactRef} position={[0, -0.5, 0]} opacity={0.35} scale={10} blur={2} />

        <Suspense fallback={<Loader placeholderSrc={placeholderSrc} />}>
          <ModelInner
            url={url}
            xOff={modelXOffset}
            yOff={modelYOffset}
            pivot={pivot}
            initYaw={initYaw}
            initPitch={initPitch}
            minZoom={minZoomDistance}
            maxZoom={maxZoomDistance}
            enableMouseParallax={enableMouseParallax}
            enableManualRotation={enableManualRotation}
            enableHoverRotation={enableHoverRotation}
            enableManualZoom={enableManualZoom}
            autoFrame={autoFrame}
            fadeIn={fadeIn}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
            onLoaded={onModelLoaded}
          />
        </Suspense>

        {!isTouch && (
          <DesktopControls pivot={pivot} min={minZoomDistance} max={maxZoomDistance} zoomEnabled={enableManualZoom} />
        )}
      </Canvas>
    </div>
  );
};

export default ModelViewer;
`,dr=`/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */
import { Suspense, useRef, useLayoutEffect, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useLoader, useThree, invalidate } from '@react-three/fiber';
import { OrbitControls, useGLTF, useFBX, useProgress, Html, Environment, ContactShadows } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';

const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
const deg2rad = d => (d * Math.PI) / 180;
const DECIDE = 8;
const ROTATE_SPEED = 0.005;
const INERTIA = 0.925;
const PARALLAX_MAG = 0.05;
const PARALLAX_EASE = 0.12;
const HOVER_MAG = deg2rad(6);
const HOVER_EASE = 0.15;

const Loader = ({ placeholderSrc }) => {
  const { progress, active } = useProgress();
  if (!active && placeholderSrc) return null;
  return (
    <Html center>
      {placeholderSrc ? (
        <img src={placeholderSrc} width={128} height={128} className="blur-lg rounded-lg" />
      ) : (
        \`\${Math.round(progress)} %\`
      )}
    </Html>
  );
};

const DesktopControls = ({ pivot, min, max, zoomEnabled }) => {
  const ref = useRef(null);
  useFrame(() => ref.current?.target.copy(pivot));
  return (
    <OrbitControls
      ref={ref}
      makeDefault
      enablePan={false}
      enableRotate={false}
      enableZoom={zoomEnabled}
      minDistance={min}
      maxDistance={max}
    />
  );
};

const ModelInner = ({
  url,
  xOff,
  yOff,
  pivot,
  initYaw,
  initPitch,
  minZoom,
  maxZoom,
  enableMouseParallax,
  enableManualRotation,
  enableHoverRotation,
  enableManualZoom,
  autoFrame,
  fadeIn,
  autoRotate,
  autoRotateSpeed,
  onLoaded
}) => {
  const outer = useRef(null);
  const inner = useRef(null);
  const { camera, gl } = useThree();

  const vel = useRef({ x: 0, y: 0 });
  const tPar = useRef({ x: 0, y: 0 });
  const cPar = useRef({ x: 0, y: 0 });
  const tHov = useRef({ x: 0, y: 0 });
  const cHov = useRef({ x: 0, y: 0 });

  const ext = useMemo(() => url.split('.').pop().toLowerCase(), [url]);
  const content = useMemo(() => {
    if (ext === 'glb' || ext === 'gltf') return useGLTF(url).scene.clone();
    if (ext === 'fbx') return useFBX(url).clone();
    if (ext === 'obj') return useLoader(OBJLoader, url).clone();
    console.error('Unsupported format:', ext);
    return null;
  }, [url, ext]);

  const pivotW = useRef(new THREE.Vector3());
  useLayoutEffect(() => {
    if (!content) return;
    const g = inner.current;
    g.updateWorldMatrix(true, true);

    const sphere = new THREE.Box3().setFromObject(g).getBoundingSphere(new THREE.Sphere());
    const s = 1 / (sphere.radius * 2);
    g.position.set(-sphere.center.x, -sphere.center.y, -sphere.center.z);
    g.scale.setScalar(s);

    g.traverse(o => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        if (fadeIn) {
          o.material.transparent = true;
          o.material.opacity = 0;
        }
      }
    });

    g.getWorldPosition(pivotW.current);
    pivot.copy(pivotW.current);
    outer.current.rotation.set(initPitch, initYaw, 0);

    if (autoFrame && camera.isPerspectiveCamera) {
      const persp = camera;
      const fitR = sphere.radius * s;
      const d = (fitR * 1.2) / Math.sin((persp.fov * Math.PI) / 180 / 2);
      persp.position.set(pivotW.current.x, pivotW.current.y, pivotW.current.z + d);
      persp.near = d / 10;
      persp.far = d * 10;
      persp.updateProjectionMatrix();
    }

    if (fadeIn) {
      let t = 0;
      const id = setInterval(() => {
        t += 0.05;
        const v = Math.min(t, 1);
        g.traverse(o => {
          if (o.isMesh) o.material.opacity = v;
        });
        invalidate();
        if (v === 1) {
          clearInterval(id);
          onLoaded?.();
        }
      }, 16);
      return () => clearInterval(id);
    } else onLoaded?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  useEffect(() => {
    if (!enableManualRotation || isTouch) return;
    const el = gl.domElement;
    let drag = false;
    let lx = 0,
      ly = 0;
    const down = e => {
      if (e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;
      drag = true;
      lx = e.clientX;
      ly = e.clientY;
      window.addEventListener('pointerup', up);
    };
    const move = e => {
      if (!drag) return;
      const dx = e.clientX - lx;
      const dy = e.clientY - ly;
      lx = e.clientX;
      ly = e.clientY;
      outer.current.rotation.y += dx * ROTATE_SPEED;
      outer.current.rotation.x += dy * ROTATE_SPEED;
      vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
      invalidate();
    };
    const up = () => (drag = false);
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointermove', move);
    return () => {
      el.removeEventListener('pointerdown', down);
      el.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
  }, [gl, enableManualRotation]);

  useEffect(() => {
    if (!isTouch) return;
    const el = gl.domElement;
    const pts = new Map();

    let mode = 'idle';
    let sx = 0,
      sy = 0,
      lx = 0,
      ly = 0,
      startDist = 0,
      startZ = 0;

    const down = e => {
      if (e.pointerType !== 'touch') return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 1) {
        mode = 'decide';
        sx = lx = e.clientX;
        sy = ly = e.clientY;
      } else if (pts.size === 2 && enableManualZoom) {
        mode = 'pinch';
        const [p1, p2] = [...pts.values()];
        startDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        startZ = camera.position.z;
        e.preventDefault();
      }
      invalidate();
    };

    const move = e => {
      const p = pts.get(e.pointerId);
      if (!p) return;
      p.x = e.clientX;
      p.y = e.clientY;

      if (mode === 'decide') {
        const dx = e.clientX - sx;
        const dy = e.clientY - sy;
        if (Math.abs(dx) > DECIDE || Math.abs(dy) > DECIDE) {
          if (enableManualRotation && Math.abs(dx) > Math.abs(dy)) {
            mode = 'rotate';
            el.setPointerCapture(e.pointerId);
          } else {
            mode = 'idle';
            pts.clear();
          }
        }
      }

      if (mode === 'rotate') {
        e.preventDefault();
        const dx = e.clientX - lx;
        const dy = e.clientY - ly;
        lx = e.clientX;
        ly = e.clientY;
        outer.current.rotation.y += dx * ROTATE_SPEED;
        outer.current.rotation.x += dy * ROTATE_SPEED;
        vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
        invalidate();
      } else if (mode === 'pinch' && pts.size === 2) {
        e.preventDefault();
        const [p1, p2] = [...pts.values()];
        const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        const ratio = startDist / d;
        camera.position.z = THREE.MathUtils.clamp(startZ * ratio, minZoom, maxZoom);
        invalidate();
      }
    };

    const up = e => {
      pts.delete(e.pointerId);
      if (mode === 'rotate' && pts.size === 0) mode = 'idle';
      if (mode === 'pinch' && pts.size < 2) mode = 'idle';
    };

    el.addEventListener('pointerdown', down, { passive: true });
    window.addEventListener('pointermove', move, { passive: false });
    window.addEventListener('pointerup', up, { passive: true });
    window.addEventListener('pointercancel', up, { passive: true });
    return () => {
      el.removeEventListener('pointerdown', down);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gl, enableManualRotation, enableManualZoom, minZoom, maxZoom]);

  useEffect(() => {
    if (isTouch) return;
    const mm = e => {
      if (e.pointerType !== 'mouse') return;
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      if (enableMouseParallax) tPar.current = { x: -nx * PARALLAX_MAG, y: -ny * PARALLAX_MAG };
      if (enableHoverRotation) tHov.current = { x: ny * HOVER_MAG, y: nx * HOVER_MAG };
      invalidate();
    };
    window.addEventListener('pointermove', mm);
    return () => window.removeEventListener('pointermove', mm);
  }, [enableMouseParallax, enableHoverRotation]);

  useFrame((_, dt) => {
    let need = false;
    cPar.current.x += (tPar.current.x - cPar.current.x) * PARALLAX_EASE;
    cPar.current.y += (tPar.current.y - cPar.current.y) * PARALLAX_EASE;
    const phx = cHov.current.x,
      phy = cHov.current.y;
    cHov.current.x += (tHov.current.x - cHov.current.x) * HOVER_EASE;
    cHov.current.y += (tHov.current.y - cHov.current.y) * HOVER_EASE;

    const ndc = pivotW.current.clone().project(camera);
    ndc.x += xOff + cPar.current.x;
    ndc.y += yOff + cPar.current.y;
    outer.current.position.copy(ndc.unproject(camera));

    outer.current.rotation.x += cHov.current.x - phx;
    outer.current.rotation.y += cHov.current.y - phy;

    if (autoRotate) {
      outer.current.rotation.y += autoRotateSpeed * dt;
      need = true;
    }

    outer.current.rotation.y += vel.current.x;
    outer.current.rotation.x += vel.current.y;
    vel.current.x *= INERTIA;
    vel.current.y *= INERTIA;
    if (Math.abs(vel.current.x) > 1e-4 || Math.abs(vel.current.y) > 1e-4) need = true;

    if (
      Math.abs(cPar.current.x - tPar.current.x) > 1e-4 ||
      Math.abs(cPar.current.y - tPar.current.y) > 1e-4 ||
      Math.abs(cHov.current.x - tHov.current.x) > 1e-4 ||
      Math.abs(cHov.current.y - tHov.current.y) > 1e-4
    )
      need = true;

    if (need) invalidate();
  });

  if (!content) return null;
  return (
    <group ref={outer}>
      <group ref={inner}>
        <primitive object={content} />
      </group>
    </group>
  );
};

const ModelViewer = ({
  url,
  width = 400,
  height = 400,
  modelXOffset = 0,
  modelYOffset = 0,
  defaultRotationX = -50,
  defaultRotationY = 20,
  defaultZoom = 0.5,
  minZoomDistance = 0.5,
  maxZoomDistance = 10,
  enableMouseParallax = true,
  enableManualRotation = true,
  enableHoverRotation = true,
  enableManualZoom = true,
  ambientIntensity = 0.3,
  keyLightIntensity = 1,
  fillLightIntensity = 0.5,
  rimLightIntensity = 0.8,
  environmentPreset = 'forest',
  autoFrame = false,
  placeholderSrc,
  showScreenshotButton = true,
  fadeIn = false,
  autoRotate = false,
  autoRotateSpeed = 0.35,
  onModelLoaded
}) => {
  useEffect(() => void useGLTF.preload(url), [url]);
  const pivot = useRef(new THREE.Vector3()).current;
  const contactRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);

  const initYaw = deg2rad(defaultRotationX);
  const initPitch = deg2rad(defaultRotationY);
  const camZ = Math.min(Math.max(defaultZoom, minZoomDistance), maxZoomDistance);

  const capture = () => {
    const g = rendererRef.current,
      s = sceneRef.current,
      c = cameraRef.current;
    if (!g || !s || !c) return;
    g.shadowMap.enabled = false;
    const tmp = [];
    s.traverse(o => {
      if (o.isLight && 'castShadow' in o) {
        tmp.push({ l: o, cast: o.castShadow });
        o.castShadow = false;
      }
    });
    if (contactRef.current) contactRef.current.visible = false;
    g.render(s, c);
    const urlPNG = g.domElement.toDataURL('image/png');
    const a = document.createElement('a');
    a.download = 'model.png';
    a.href = urlPNG;
    a.click();
    g.shadowMap.enabled = true;
    tmp.forEach(({ l, cast }) => (l.castShadow = cast));
    if (contactRef.current) contactRef.current.visible = true;
    invalidate();
  };

  return (
    <div
      style={{
        width,
        height,
        touchAction: 'pan-y pinch-zoom'
      }}
      className="relative"
    >
      {showScreenshotButton && (
        <button
          onClick={capture}
          className="absolute top-4 right-4 z-10 cursor-pointer px-4 py-2 border border-white rounded-xl bg-transparent text-white hover:bg-white hover:text-black transition-colors"
        >
          Take Screenshot
        </button>
      )}

      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl, scene, camera }) => {
          rendererRef.current = gl;
          sceneRef.current = scene;
          cameraRef.current = camera;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
        camera={{ fov: 50, position: [0, 0, camZ], near: 0.01, far: 100 }}
        style={{ touchAction: 'pan-y pinch-zoom' }}
      >
        {environmentPreset !== 'none' && <Environment preset={environmentPreset} background={false} />}

        <ambientLight intensity={ambientIntensity} />
        <directionalLight position={[5, 5, 5]} intensity={keyLightIntensity} castShadow />
        <directionalLight position={[-5, 2, 5]} intensity={fillLightIntensity} />
        <directionalLight position={[0, 4, -5]} intensity={rimLightIntensity} />

        <ContactShadows ref={contactRef} position={[0, -0.5, 0]} opacity={0.35} scale={10} blur={2} />

        <Suspense fallback={<Loader placeholderSrc={placeholderSrc} />}>
          <ModelInner
            url={url}
            xOff={modelXOffset}
            yOff={modelYOffset}
            pivot={pivot}
            initYaw={initYaw}
            initPitch={initPitch}
            minZoom={minZoomDistance}
            maxZoom={maxZoomDistance}
            enableMouseParallax={enableMouseParallax}
            enableManualRotation={enableManualRotation}
            enableHoverRotation={enableHoverRotation}
            enableManualZoom={enableManualZoom}
            autoFrame={autoFrame}
            fadeIn={fadeIn}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
            onLoaded={onModelLoaded}
          />
        </Suspense>

        {!isTouch && (
          <DesktopControls pivot={pivot} min={minZoomDistance} max={maxZoomDistance} zoomEnabled={enableManualZoom} />
        )}
      </Canvas>
    </div>
  );
};

export default ModelViewer;
`,fr=`import { FC, Suspense, useRef, useLayoutEffect, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useLoader, useThree, invalidate } from '@react-three/fiber';
import { OrbitControls, useGLTF, useFBX, useProgress, Html, Environment, ContactShadows } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';

const isMeshObject = (object: THREE.Object3D): object is THREE.Mesh => {
  return 'isMesh' in object && object.isMesh === true;
};

const isLightObject = (object: THREE.Object3D): object is THREE.Light => {
  return 'isLight' in object && object.isLight === true;
};

export interface ViewerProps {
  url: string;
  width?: number | string;
  height?: number | string;
  modelXOffset?: number;
  modelYOffset?: number;
  defaultRotationX?: number;
  defaultRotationY?: number;
  defaultZoom?: number;
  minZoomDistance?: number;
  maxZoomDistance?: number;
  enableMouseParallax?: boolean;
  enableManualRotation?: boolean;
  enableHoverRotation?: boolean;
  enableManualZoom?: boolean;
  ambientIntensity?: number;
  keyLightIntensity?: number;
  fillLightIntensity?: number;
  rimLightIntensity?: number;
  environmentPreset?: 'city' | 'sunset' | 'night' | 'dawn' | 'studio' | 'apartment' | 'forest' | 'park' | 'none';
  autoFrame?: boolean;
  placeholderSrc?: string;
  showScreenshotButton?: boolean;
  fadeIn?: boolean;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  onModelLoaded?: () => void;
}

const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
const deg2rad = (d: number) => (d * Math.PI) / 180;
const DECIDE = 8; // px before we decide horizontal vs vertical
const ROTATE_SPEED = 0.005;
const INERTIA = 0.925;
const PARALLAX_MAG = 0.05;
const PARALLAX_EASE = 0.12;
const HOVER_MAG = deg2rad(6);
const HOVER_EASE = 0.15;

const Loader: FC<{ placeholderSrc?: string }> = ({ placeholderSrc }) => {
  const { progress, active } = useProgress();
  if (!active && placeholderSrc) return null;
  return (
    <Html center>
      {placeholderSrc ? (
        <img src={placeholderSrc} width={128} height={128} style={{ filter: 'blur(8px)', borderRadius: 8 }} />
      ) : (
        \`\${Math.round(progress)} %\`
      )}
    </Html>
  );
};

const DesktopControls: FC<{
  pivot: THREE.Vector3;
  min: number;
  max: number;
  zoomEnabled: boolean;
}> = ({ pivot, min, max, zoomEnabled }) => {
  const ref = useRef<any>(null);
  useFrame(() => ref.current?.target.copy(pivot));
  return (
    <OrbitControls
      ref={ref}
      makeDefault
      enablePan={false}
      enableRotate={false}
      enableZoom={zoomEnabled}
      minDistance={min}
      maxDistance={max}
    />
  );
};

interface ModelInnerProps {
  url: string;
  xOff: number;
  yOff: number;
  pivot: THREE.Vector3;
  initYaw: number;
  initPitch: number;
  minZoom: number;
  maxZoom: number;
  enableMouseParallax: boolean;
  enableManualRotation: boolean;
  enableHoverRotation: boolean;
  enableManualZoom: boolean;
  autoFrame: boolean;
  fadeIn: boolean;
  autoRotate: boolean;
  autoRotateSpeed: number;
  onLoaded?: () => void;
}

const ModelInner: FC<ModelInnerProps> = ({
  url,
  xOff,
  yOff,
  pivot,
  initYaw,
  initPitch,
  minZoom,
  maxZoom,
  enableMouseParallax,
  enableManualRotation,
  enableHoverRotation,
  enableManualZoom,
  autoFrame,
  fadeIn,
  autoRotate,
  autoRotateSpeed,
  onLoaded
}) => {
  const outer = useRef<THREE.Group>(null!);
  const inner = useRef<THREE.Group>(null!);
  const { camera, gl } = useThree();

  const vel = useRef({ x: 0, y: 0 });
  const tPar = useRef({ x: 0, y: 0 });
  const cPar = useRef({ x: 0, y: 0 });
  const tHov = useRef({ x: 0, y: 0 });
  const cHov = useRef({ x: 0, y: 0 });

  const ext = useMemo(() => url.split('.').pop()!.toLowerCase(), [url]);
  const content = useMemo<THREE.Object3D | null>(() => {
    if (ext === 'glb' || ext === 'gltf') return useGLTF(url).scene.clone();
    if (ext === 'fbx') return useFBX(url).clone();
    if (ext === 'obj') return useLoader(OBJLoader, url).clone();
    console.error('Unsupported format:', ext);
    return null;
  }, [url, ext]);

  const pivotW = useRef(new THREE.Vector3());
  useLayoutEffect(() => {
    if (!content) return;
    const g = inner.current;
    g.updateWorldMatrix(true, true);

    const sphere = new THREE.Box3().setFromObject(g).getBoundingSphere(new THREE.Sphere());
    const s = 1 / (sphere.radius * 2);
    g.position.set(-sphere.center.x, -sphere.center.y, -sphere.center.z);
    g.scale.setScalar(s);

    g.traverse((o: THREE.Object3D) => {
      if (isMeshObject(o)) {
        o.castShadow = true;
        o.receiveShadow = true;
        if (fadeIn) {
          const materials = Array.isArray(o.material) ? o.material : [o.material];
          materials.forEach(material => {
            material.transparent = true;
            material.opacity = 0;
          });
        }
      }
    });

    g.getWorldPosition(pivotW.current);
    pivot.copy(pivotW.current);
    outer.current.rotation.set(initPitch, initYaw, 0);

    if (autoFrame && (camera as THREE.PerspectiveCamera).isPerspectiveCamera) {
      const persp = camera as THREE.PerspectiveCamera;
      const fitR = sphere.radius * s;
      const d = (fitR * 1.2) / Math.sin((persp.fov * Math.PI) / 180 / 2);
      persp.position.set(pivotW.current.x, pivotW.current.y, pivotW.current.z + d);
      persp.near = d / 10;
      persp.far = d * 10;
      persp.updateProjectionMatrix();
    }

    /* optional fade-in */
    if (fadeIn) {
      let t = 0;
      const id = setInterval(() => {
        t += 0.05;
        const v = Math.min(t, 1);
        g.traverse((o: THREE.Object3D) => {
          if (isMeshObject(o)) {
            const materials = Array.isArray(o.material) ? o.material : [o.material];
            materials.forEach(material => {
              material.opacity = v;
            });
          }
        });
        invalidate();
        if (v === 1) {
          clearInterval(id);
          onLoaded?.();
        }
      }, 16);
      return () => clearInterval(id);
    } else onLoaded?.();
  }, [content]);

  useEffect(() => {
    if (!enableManualRotation || isTouch) return;
    const el = gl.domElement;
    let drag = false;
    let lx = 0,
      ly = 0;
    const down = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;
      drag = true;
      lx = e.clientX;
      ly = e.clientY;
      window.addEventListener('pointerup', up);
    };
    const move = (e: PointerEvent) => {
      if (!drag) return;
      const dx = e.clientX - lx;
      const dy = e.clientY - ly;
      lx = e.clientX;
      ly = e.clientY;
      outer.current.rotation.y += dx * ROTATE_SPEED;
      outer.current.rotation.x += dy * ROTATE_SPEED;
      vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
      invalidate();
    };
    const up = () => (drag = false);
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointermove', move);
    return () => {
      el.removeEventListener('pointerdown', down);
      el.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
  }, [gl, enableManualRotation]);

  useEffect(() => {
    if (!isTouch) return;
    const el = gl.domElement;
    const pts = new Map<number, { x: number; y: number }>();
    type Mode = 'idle' | 'decide' | 'rotate' | 'pinch';
    let mode: Mode = 'idle';
    let sx = 0,
      sy = 0,
      lx = 0,
      ly = 0,
      startDist = 0,
      startZ = 0;

    const down = (e: PointerEvent) => {
      if (e.pointerType !== 'touch') return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 1) {
        mode = 'decide';
        sx = lx = e.clientX;
        sy = ly = e.clientY;
      } else if (pts.size === 2 && enableManualZoom) {
        mode = 'pinch';
        const [p1, p2] = [...pts.values()];
        startDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        startZ = camera.position.z;
        e.preventDefault();
      }
      invalidate();
    };

    const move = (e: PointerEvent) => {
      const p = pts.get(e.pointerId);
      if (!p) return;
      p.x = e.clientX;
      p.y = e.clientY;

      if (mode === 'decide') {
        const dx = e.clientX - sx;
        const dy = e.clientY - sy;
        if (Math.abs(dx) > DECIDE || Math.abs(dy) > DECIDE) {
          if (enableManualRotation && Math.abs(dx) > Math.abs(dy)) {
            mode = 'rotate';
            el.setPointerCapture(e.pointerId);
          } else {
            mode = 'idle';
            pts.clear();
          }
        }
      }

      if (mode === 'rotate') {
        e.preventDefault();
        const dx = e.clientX - lx;
        const dy = e.clientY - ly;
        lx = e.clientX;
        ly = e.clientY;
        outer.current.rotation.y += dx * ROTATE_SPEED;
        outer.current.rotation.x += dy * ROTATE_SPEED;
        vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
        invalidate();
      } else if (mode === 'pinch' && pts.size === 2) {
        e.preventDefault();
        const [p1, p2] = [...pts.values()];
        const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        const ratio = startDist / d;
        camera.position.z = THREE.MathUtils.clamp(startZ * ratio, minZoom, maxZoom);
        invalidate();
      }
    };

    const up = (e: PointerEvent) => {
      pts.delete(e.pointerId);
      if (mode === 'rotate' && pts.size === 0) mode = 'idle';
      if (mode === 'pinch' && pts.size < 2) mode = 'idle';
    };

    el.addEventListener('pointerdown', down, { passive: true });
    window.addEventListener('pointermove', move, { passive: false });
    window.addEventListener('pointerup', up, { passive: true });
    window.addEventListener('pointercancel', up, { passive: true });
    return () => {
      el.removeEventListener('pointerdown', down);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
    };
  }, [gl, enableManualRotation, enableManualZoom, minZoom, maxZoom]);

  useEffect(() => {
    if (isTouch) return;
    const mm = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      if (enableMouseParallax) tPar.current = { x: -nx * PARALLAX_MAG, y: -ny * PARALLAX_MAG };
      if (enableHoverRotation) tHov.current = { x: ny * HOVER_MAG, y: nx * HOVER_MAG };
      invalidate();
    };
    window.addEventListener('pointermove', mm);
    return () => window.removeEventListener('pointermove', mm);
  }, [enableMouseParallax, enableHoverRotation]);

  useFrame((_, dt) => {
    let need = false;
    cPar.current.x += (tPar.current.x - cPar.current.x) * PARALLAX_EASE;
    cPar.current.y += (tPar.current.y - cPar.current.y) * PARALLAX_EASE;
    const phx = cHov.current.x,
      phy = cHov.current.y;
    cHov.current.x += (tHov.current.x - cHov.current.x) * HOVER_EASE;
    cHov.current.y += (tHov.current.y - cHov.current.y) * HOVER_EASE;

    const ndc = pivotW.current.clone().project(camera);
    ndc.x += xOff + cPar.current.x;
    ndc.y += yOff + cPar.current.y;
    outer.current.position.copy(ndc.unproject(camera));

    outer.current.rotation.x += cHov.current.x - phx;
    outer.current.rotation.y += cHov.current.y - phy;

    if (autoRotate) {
      outer.current.rotation.y += autoRotateSpeed * dt;
      need = true;
    }

    outer.current.rotation.y += vel.current.x;
    outer.current.rotation.x += vel.current.y;
    vel.current.x *= INERTIA;
    vel.current.y *= INERTIA;
    if (Math.abs(vel.current.x) > 1e-4 || Math.abs(vel.current.y) > 1e-4) need = true;

    if (
      Math.abs(cPar.current.x - tPar.current.x) > 1e-4 ||
      Math.abs(cPar.current.y - tPar.current.y) > 1e-4 ||
      Math.abs(cHov.current.x - tHov.current.x) > 1e-4 ||
      Math.abs(cHov.current.y - tHov.current.y) > 1e-4
    )
      need = true;

    if (need) invalidate();
  });

  if (!content) return null;
  return (
    <group ref={outer}>
      <group ref={inner}>
        <primitive object={content} />
      </group>
    </group>
  );
};

const ModelViewer: FC<ViewerProps> = ({
  url,
  width = 400,
  height = 400,
  modelXOffset = 0,
  modelYOffset = 0,
  defaultRotationX = -50,
  defaultRotationY = 20,
  defaultZoom = 0.5,
  minZoomDistance = 0.5,
  maxZoomDistance = 10,
  enableMouseParallax = true,
  enableManualRotation = true,
  enableHoverRotation = true,
  enableManualZoom = true,
  ambientIntensity = 0.3,
  keyLightIntensity = 1,
  fillLightIntensity = 0.5,
  rimLightIntensity = 0.8,
  environmentPreset = 'forest',
  autoFrame = false,
  placeholderSrc,
  showScreenshotButton = true,
  fadeIn = false,
  autoRotate = false,
  autoRotateSpeed = 0.35,
  onModelLoaded
}) => {
  useEffect(() => void useGLTF.preload(url), [url]);
  const pivot = useRef(new THREE.Vector3()).current;
  const contactRef = useRef<THREE.Mesh>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>(null);
  const sceneRef = useRef<THREE.Scene>(null);
  const cameraRef = useRef<THREE.Camera>(null);

  const initYaw = deg2rad(defaultRotationX);
  const initPitch = deg2rad(defaultRotationY);
  const camZ = Math.min(Math.max(defaultZoom, minZoomDistance), maxZoomDistance);

  const capture = () => {
    const g = rendererRef.current,
      s = sceneRef.current,
      c = cameraRef.current;
    if (!g || !s || !c) return;
    g.shadowMap.enabled = false;
    const tmp: { l: THREE.Light; cast: boolean }[] = [];
    s.traverse((o: THREE.Object3D) => {
      if (isLightObject(o)) {
        tmp.push({ l: o, cast: o.castShadow });
        o.castShadow = false;
      }
    });
    if (contactRef.current) contactRef.current.visible = false;
    g.render(s, c);
    const urlPNG = g.domElement.toDataURL('image/png');
    const a = document.createElement('a');
    a.download = 'model.png';
    a.href = urlPNG;
    a.click();
    g.shadowMap.enabled = true;
    tmp.forEach(({ l, cast }) => (l.castShadow = cast));
    if (contactRef.current) contactRef.current.visible = true;
    invalidate();
  };

  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        touchAction: 'pan-y pinch-zoom'
      }}
    >
      {showScreenshotButton && (
        <button
          onClick={capture}
          style={{
            position: 'absolute',
            border: '1px solid #fff',
            right: 16,
            top: 16,
            zIndex: 10,
            cursor: 'pointer',
            padding: '8px 16px',
            borderRadius: 10
          }}
        >
          Take Screenshot
        </button>
      )}

      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl, scene, camera }) => {
          rendererRef.current = gl;
          sceneRef.current = scene;
          cameraRef.current = camera;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
        camera={{ fov: 50, position: [0, 0, camZ], near: 0.01, far: 100 }}
        style={{ touchAction: 'pan-y pinch-zoom' }}
      >
        {environmentPreset !== 'none' && <Environment preset={environmentPreset as any} background={false} />}

        <ambientLight intensity={ambientIntensity} />
        <directionalLight position={[5, 5, 5]} intensity={keyLightIntensity} castShadow />
        <directionalLight position={[-5, 2, 5]} intensity={fillLightIntensity} />
        <directionalLight position={[0, 4, -5]} intensity={rimLightIntensity} />

        <ContactShadows ref={contactRef as any} position={[0, -0.5, 0]} opacity={0.35} scale={10} blur={2} />

        <Suspense fallback={<Loader placeholderSrc={placeholderSrc} />}>
          <ModelInner
            url={url}
            xOff={modelXOffset}
            yOff={modelYOffset}
            pivot={pivot}
            initYaw={initYaw}
            initPitch={initPitch}
            minZoom={minZoomDistance}
            maxZoom={maxZoomDistance}
            enableMouseParallax={enableMouseParallax}
            enableManualRotation={enableManualRotation}
            enableHoverRotation={enableHoverRotation}
            enableManualZoom={enableManualZoom}
            autoFrame={autoFrame}
            fadeIn={fadeIn}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
            onLoaded={onModelLoaded}
          />
        </Suspense>

        {!isTouch && (
          <DesktopControls pivot={pivot} min={minZoomDistance} max={maxZoomDistance} zoomEnabled={enableManualZoom} />
        )}
      </Canvas>
    </div>
  );
};

export default ModelViewer;
`,mr=`import { FC, Suspense, useRef, useLayoutEffect, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useLoader, useThree, invalidate } from '@react-three/fiber';
import { OrbitControls, useGLTF, useFBX, useProgress, Html, Environment, ContactShadows } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';

export interface ViewerProps {
  url: string;
  width?: number | string;
  height?: number | string;
  modelXOffset?: number;
  modelYOffset?: number;
  defaultRotationX?: number;
  defaultRotationY?: number;
  defaultZoom?: number;
  minZoomDistance?: number;
  maxZoomDistance?: number;
  enableMouseParallax?: boolean;
  enableManualRotation?: boolean;
  enableHoverRotation?: boolean;
  enableManualZoom?: boolean;
  ambientIntensity?: number;
  keyLightIntensity?: number;
  fillLightIntensity?: number;
  rimLightIntensity?: number;
  environmentPreset?: 'city' | 'sunset' | 'night' | 'dawn' | 'studio' | 'apartment' | 'forest' | 'park' | 'none';
  autoFrame?: boolean;
  placeholderSrc?: string;
  showScreenshotButton?: boolean;
  fadeIn?: boolean;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  onModelLoaded?: () => void;
}

const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
const deg2rad = (d: number) => (d * Math.PI) / 180;
const DECIDE = 8; // px before we decide horizontal vs vertical
const ROTATE_SPEED = 0.005;
const INERTIA = 0.925;
const PARALLAX_MAG = 0.05;
const PARALLAX_EASE = 0.12;
const HOVER_MAG = deg2rad(6);
const HOVER_EASE = 0.15;

const Loader: FC<{ placeholderSrc?: string }> = ({ placeholderSrc }) => {
  const { progress, active } = useProgress();
  if (!active && placeholderSrc) return null;
  return (
    <Html center>
      {placeholderSrc ? (
        <img src={placeholderSrc} width={128} height={128} className="blur-lg rounded-lg" />
      ) : (
        \`\${Math.round(progress)} %\`
      )}
    </Html>
  );
};

const DesktopControls: FC<{
  pivot: THREE.Vector3;
  min: number;
  max: number;
  zoomEnabled: boolean;
}> = ({ pivot, min, max, zoomEnabled }) => {
  const ref = useRef<any>(null);
  useFrame(() => ref.current?.target.copy(pivot));
  return (
    <OrbitControls
      ref={ref}
      makeDefault
      enablePan={false}
      enableRotate={false}
      enableZoom={zoomEnabled}
      minDistance={min}
      maxDistance={max}
    />
  );
};

interface ModelInnerProps {
  url: string;
  xOff: number;
  yOff: number;
  pivot: THREE.Vector3;
  initYaw: number;
  initPitch: number;
  minZoom: number;
  maxZoom: number;
  enableMouseParallax: boolean;
  enableManualRotation: boolean;
  enableHoverRotation: boolean;
  enableManualZoom: boolean;
  autoFrame: boolean;
  fadeIn: boolean;
  autoRotate: boolean;
  autoRotateSpeed: number;
  onLoaded?: () => void;
}

const ModelInner: FC<ModelInnerProps> = ({
  url,
  xOff,
  yOff,
  pivot,
  initYaw,
  initPitch,
  minZoom,
  maxZoom,
  enableMouseParallax,
  enableManualRotation,
  enableHoverRotation,
  enableManualZoom,
  autoFrame,
  fadeIn,
  autoRotate,
  autoRotateSpeed,
  onLoaded
}) => {
  const outer = useRef<THREE.Group>(null!);
  const inner = useRef<THREE.Group>(null!);
  const { camera, gl } = useThree();

  const vel = useRef({ x: 0, y: 0 });
  const tPar = useRef({ x: 0, y: 0 });
  const cPar = useRef({ x: 0, y: 0 });
  const tHov = useRef({ x: 0, y: 0 });
  const cHov = useRef({ x: 0, y: 0 });

  const ext = useMemo(() => url.split('.').pop()!.toLowerCase(), [url]);
  const content = useMemo<THREE.Object3D | null>(() => {
    if (ext === 'glb' || ext === 'gltf') return useGLTF(url).scene.clone();
    if (ext === 'fbx') return useFBX(url).clone();
    if (ext === 'obj') return useLoader(OBJLoader, url).clone();
    console.error('Unsupported format:', ext);
    return null;
  }, [url, ext]);

  const pivotW = useRef(new THREE.Vector3());
  useLayoutEffect(() => {
    if (!content) return;
    const g = inner.current;
    g.updateWorldMatrix(true, true);

    const sphere = new THREE.Box3().setFromObject(g).getBoundingSphere(new THREE.Sphere());
    const s = 1 / (sphere.radius * 2);
    g.position.set(-sphere.center.x, -sphere.center.y, -sphere.center.z);
    g.scale.setScalar(s);

    g.traverse((o: any) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        if (fadeIn) {
          o.material.transparent = true;
          o.material.opacity = 0;
        }
      }
    });

    g.getWorldPosition(pivotW.current);
    pivot.copy(pivotW.current);
    outer.current.rotation.set(initPitch, initYaw, 0);

    if (autoFrame && (camera as THREE.PerspectiveCamera).isPerspectiveCamera) {
      const persp = camera as THREE.PerspectiveCamera;
      const fitR = sphere.radius * s;
      const d = (fitR * 1.2) / Math.sin((persp.fov * Math.PI) / 180 / 2);
      persp.position.set(pivotW.current.x, pivotW.current.y, pivotW.current.z + d);
      persp.near = d / 10;
      persp.far = d * 10;
      persp.updateProjectionMatrix();
    }

    /* optional fade-in */
    if (fadeIn) {
      let t = 0;
      const id = setInterval(() => {
        t += 0.05;
        const v = Math.min(t, 1);
        g.traverse((o: any) => {
          if (o.isMesh) o.material.opacity = v;
        });
        invalidate();
        if (v === 1) {
          clearInterval(id);
          onLoaded?.();
        }
      }, 16);
      return () => clearInterval(id);
    } else onLoaded?.();
  }, [content]);

  useEffect(() => {
    if (!enableManualRotation || isTouch) return;
    const el = gl.domElement;
    let drag = false;
    let lx = 0,
      ly = 0;
    const down = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;
      drag = true;
      lx = e.clientX;
      ly = e.clientY;
      window.addEventListener('pointerup', up);
    };
    const move = (e: PointerEvent) => {
      if (!drag) return;
      const dx = e.clientX - lx;
      const dy = e.clientY - ly;
      lx = e.clientX;
      ly = e.clientY;
      outer.current.rotation.y += dx * ROTATE_SPEED;
      outer.current.rotation.x += dy * ROTATE_SPEED;
      vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
      invalidate();
    };
    const up = () => (drag = false);
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointermove', move);
    return () => {
      el.removeEventListener('pointerdown', down);
      el.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
  }, [gl, enableManualRotation]);

  useEffect(() => {
    if (!isTouch) return;
    const el = gl.domElement;
    const pts = new Map<number, { x: number; y: number }>();
    type Mode = 'idle' | 'decide' | 'rotate' | 'pinch';
    let mode: Mode = 'idle';
    let sx = 0,
      sy = 0,
      lx = 0,
      ly = 0,
      startDist = 0,
      startZ = 0;

    const down = (e: PointerEvent) => {
      if (e.pointerType !== 'touch') return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 1) {
        mode = 'decide';
        sx = lx = e.clientX;
        sy = ly = e.clientY;
      } else if (pts.size === 2 && enableManualZoom) {
        mode = 'pinch';
        const [p1, p2] = [...pts.values()];
        startDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        startZ = camera.position.z;
        e.preventDefault();
      }
      invalidate();
    };

    const move = (e: PointerEvent) => {
      const p = pts.get(e.pointerId);
      if (!p) return;
      p.x = e.clientX;
      p.y = e.clientY;

      if (mode === 'decide') {
        const dx = e.clientX - sx;
        const dy = e.clientY - sy;
        if (Math.abs(dx) > DECIDE || Math.abs(dy) > DECIDE) {
          if (enableManualRotation && Math.abs(dx) > Math.abs(dy)) {
            mode = 'rotate';
            el.setPointerCapture(e.pointerId);
          } else {
            mode = 'idle';
            pts.clear();
          }
        }
      }

      if (mode === 'rotate') {
        e.preventDefault();
        const dx = e.clientX - lx;
        const dy = e.clientY - ly;
        lx = e.clientX;
        ly = e.clientY;
        outer.current.rotation.y += dx * ROTATE_SPEED;
        outer.current.rotation.x += dy * ROTATE_SPEED;
        vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
        invalidate();
      } else if (mode === 'pinch' && pts.size === 2) {
        e.preventDefault();
        const [p1, p2] = [...pts.values()];
        const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        const ratio = startDist / d;
        camera.position.z = THREE.MathUtils.clamp(startZ * ratio, minZoom, maxZoom);
        invalidate();
      }
    };

    const up = (e: PointerEvent) => {
      pts.delete(e.pointerId);
      if (mode === 'rotate' && pts.size === 0) mode = 'idle';
      if (mode === 'pinch' && pts.size < 2) mode = 'idle';
    };

    el.addEventListener('pointerdown', down, { passive: true });
    window.addEventListener('pointermove', move, { passive: false });
    window.addEventListener('pointerup', up, { passive: true });
    window.addEventListener('pointercancel', up, { passive: true });
    return () => {
      el.removeEventListener('pointerdown', down);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
    };
  }, [gl, enableManualRotation, enableManualZoom, minZoom, maxZoom]);

  useEffect(() => {
    if (isTouch) return;
    const mm = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      if (enableMouseParallax) tPar.current = { x: -nx * PARALLAX_MAG, y: -ny * PARALLAX_MAG };
      if (enableHoverRotation) tHov.current = { x: ny * HOVER_MAG, y: nx * HOVER_MAG };
      invalidate();
    };
    window.addEventListener('pointermove', mm);
    return () => window.removeEventListener('pointermove', mm);
  }, [enableMouseParallax, enableHoverRotation]);

  useFrame((_, dt) => {
    let need = false;
    cPar.current.x += (tPar.current.x - cPar.current.x) * PARALLAX_EASE;
    cPar.current.y += (tPar.current.y - cPar.current.y) * PARALLAX_EASE;
    const phx = cHov.current.x,
      phy = cHov.current.y;
    cHov.current.x += (tHov.current.x - cHov.current.x) * HOVER_EASE;
    cHov.current.y += (tHov.current.y - cHov.current.y) * HOVER_EASE;

    const ndc = pivotW.current.clone().project(camera);
    ndc.x += xOff + cPar.current.x;
    ndc.y += yOff + cPar.current.y;
    outer.current.position.copy(ndc.unproject(camera));

    outer.current.rotation.x += cHov.current.x - phx;
    outer.current.rotation.y += cHov.current.y - phy;

    if (autoRotate) {
      outer.current.rotation.y += autoRotateSpeed * dt;
      need = true;
    }

    outer.current.rotation.y += vel.current.x;
    outer.current.rotation.x += vel.current.y;
    vel.current.x *= INERTIA;
    vel.current.y *= INERTIA;
    if (Math.abs(vel.current.x) > 1e-4 || Math.abs(vel.current.y) > 1e-4) need = true;

    if (
      Math.abs(cPar.current.x - tPar.current.x) > 1e-4 ||
      Math.abs(cPar.current.y - tPar.current.y) > 1e-4 ||
      Math.abs(cHov.current.x - tHov.current.x) > 1e-4 ||
      Math.abs(cHov.current.y - tHov.current.y) > 1e-4
    )
      need = true;

    if (need) invalidate();
  });

  if (!content) return null;
  return (
    <group ref={outer}>
      <group ref={inner}>
        <primitive object={content} />
      </group>
    </group>
  );
};

const ModelViewer: FC<ViewerProps> = ({
  url,
  width = 400,
  height = 400,
  modelXOffset = 0,
  modelYOffset = 0,
  defaultRotationX = -50,
  defaultRotationY = 20,
  defaultZoom = 0.5,
  minZoomDistance = 0.5,
  maxZoomDistance = 10,
  enableMouseParallax = true,
  enableManualRotation = true,
  enableHoverRotation = true,
  enableManualZoom = true,
  ambientIntensity = 0.3,
  keyLightIntensity = 1,
  fillLightIntensity = 0.5,
  rimLightIntensity = 0.8,
  environmentPreset = 'forest',
  autoFrame = false,
  placeholderSrc,
  showScreenshotButton = true,
  fadeIn = false,
  autoRotate = false,
  autoRotateSpeed = 0.35,
  onModelLoaded
}) => {
  useEffect(() => void useGLTF.preload(url), [url]);
  const pivot = useRef(new THREE.Vector3()).current;
  const contactRef = useRef<THREE.Mesh>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>(null);
  const sceneRef = useRef<THREE.Scene>(null);
  const cameraRef = useRef<THREE.Camera>(null);

  const initYaw = deg2rad(defaultRotationX);
  const initPitch = deg2rad(defaultRotationY);
  const camZ = Math.min(Math.max(defaultZoom, minZoomDistance), maxZoomDistance);

  const capture = () => {
    const g = rendererRef.current,
      s = sceneRef.current,
      c = cameraRef.current;
    if (!g || !s || !c) return;
    g.shadowMap.enabled = false;
    const tmp: { l: THREE.Light; cast: boolean }[] = [];
    s.traverse((o: any) => {
      if (o.isLight && 'castShadow' in o) {
        tmp.push({ l: o, cast: o.castShadow });
        o.castShadow = false;
      }
    });
    if (contactRef.current) contactRef.current.visible = false;
    g.render(s, c);
    const urlPNG = g.domElement.toDataURL('image/png');
    const a = document.createElement('a');
    a.download = 'model.png';
    a.href = urlPNG;
    a.click();
    g.shadowMap.enabled = true;
    tmp.forEach(({ l, cast }) => (l.castShadow = cast));
    if (contactRef.current) contactRef.current.visible = true;
    invalidate();
  };

  return (
    <div
      style={{
        width,
        height,
        touchAction: 'pan-y pinch-zoom'
      }}
      className="relative"
    >
      {showScreenshotButton && (
        <button
          onClick={capture}
          className="absolute top-4 right-4 z-10 cursor-pointer px-4 py-2 border border-white rounded-xl bg-transparent text-white hover:bg-white hover:text-black transition-colors"
        >
          Take Screenshot
        </button>
      )}

      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl, scene, camera }) => {
          rendererRef.current = gl;
          sceneRef.current = scene;
          cameraRef.current = camera;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
        camera={{ fov: 50, position: [0, 0, camZ], near: 0.01, far: 100 }}
        style={{ touchAction: 'pan-y pinch-zoom' }}
      >
        {environmentPreset !== 'none' && <Environment preset={environmentPreset as any} background={false} />}

        <ambientLight intensity={ambientIntensity} />
        <directionalLight position={[5, 5, 5]} intensity={keyLightIntensity} castShadow />
        <directionalLight position={[-5, 2, 5]} intensity={fillLightIntensity} />
        <directionalLight position={[0, 4, -5]} intensity={rimLightIntensity} />

        <ContactShadows ref={contactRef as any} position={[0, -0.5, 0]} opacity={0.35} scale={10} blur={2} />

        <Suspense fallback={<Loader placeholderSrc={placeholderSrc} />}>
          <ModelInner
            url={url}
            xOff={modelXOffset}
            yOff={modelYOffset}
            pivot={pivot}
            initYaw={initYaw}
            initPitch={initPitch}
            minZoom={minZoomDistance}
            maxZoom={maxZoomDistance}
            enableMouseParallax={enableMouseParallax}
            enableManualRotation={enableManualRotation}
            enableHoverRotation={enableHoverRotation}
            enableManualZoom={enableManualZoom}
            autoFrame={autoFrame}
            fadeIn={fadeIn}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
            onLoaded={onModelLoaded}
          />
        </Suspense>

        {!isTouch && (
          <DesktopControls pivot={pivot} min={minZoomDistance} max={maxZoomDistance} zoomEnabled={enableManualZoom} />
        )}
      </Canvas>
    </div>
  );
};

export default ModelViewer;
`,hr={dependencies:"three @react-three/fiber @react-three/drei",usage:`import ModelViewer from './ModelViewer';

<ModelViewer
  url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
  width={400}
  height={400}
/>
`,code:pr,tailwind:dr,tsCode:fr,tsTailwind:mr},on={selectedModel:"toyCar",modelXOffset:.5,modelYOffset:0,enableMouseParallax:!0,enableHoverRotation:!0,environmentPreset:"forest",fadeIn:!1,autoRotate:!1,autoRotateSpeed:.35,showScreenshotButton:!0},Hr=()=>{const[l,t]=E.useState(!1),[n,e]=Dn(),{props:o,updateProp:r,resetProps:a,hasChanges:i}=wn(on),{selectedModel:c,modelXOffset:d,modelYOffset:u,enableMouseParallax:s,enableHoverRotation:f,environmentPreset:m,fadeIn:v,autoRotate:y,autoRotateSpeed:b,showScreenshotButton:x}=o,w={toyCar:"https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb",sheenChair:"https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SheenChair/glTF-Binary/SheenChair.glb"},M={toyCar:"Fast as lightning.",sheenChair:"Ultra comfortable."},L=h=>{t(!1),r("selectedModel",h),e()},P=E.useMemo(()=>[{name:"url",type:"string",default:"-",description:"URL of the 3D model file (glb/gltf/fbx/obj)"},{name:"width",type:"number | string",default:"400",description:"Width of the canvas container"},{name:"height",type:"number | string",default:"400",description:"Height of the canvas container"},{name:"modelXOffset",type:"number",default:"0",description:"Horizontal offset of the model"},{name:"modelYOffset",type:"number",default:"0",description:"Vertical offset of the model"},{name:"defaultRotationX",type:"number",default:"-50",description:"Initial rotation on the X axis in degrees"},{name:"defaultRotationY",type:"number",default:"20",description:"Initial rotation on the Y axis in degrees"},{name:"defaultZoom",type:"number",default:"0.5",description:"Initial zoom distance factor"},{name:"minZoomDistance",type:"number",default:"0.5",description:"Minimum zoom distance"},{name:"maxZoomDistance",type:"number",default:"10",description:"Maximum zoom distance"},{name:"enableMouseParallax",type:"boolean",default:"true",description:"Enable mouse-based parallax effect"},{name:"enableManualRotation",type:"boolean",default:"true",description:"Enable manual rotation via drag"},{name:"enableHoverRotation",type:"boolean",default:"true",description:"Enable rotation on hover based on cursor"},{name:"enableManualZoom",type:"boolean",default:"true",description:"Enable manual zoom via mouse wheel or gestures"},{name:"ambientIntensity",type:"number",default:"0.3",description:"Intensity of ambient light"},{name:"keyLightIntensity",type:"number",default:"1",description:"Intensity of key light"},{name:"fillLightIntensity",type:"number",default:"0.5",description:"Intensity of fill light"},{name:"rimLightIntensity",type:"number",default:"0.8",description:"Intensity of rim light"},{name:"environmentPreset",type:"string",default:'"forest"',description:"Environment preset for scene lighting"},{name:"autoFrame",type:"boolean",default:"false",description:"Automatically frame the model in view"},{name:"fadeIn",type:"boolean",default:"false",description:"Enable fade-in transition on load"},{name:"autoRotate",type:"boolean",default:"false",description:"Enable automatic rotation animation"},{name:"autoRotateSpeed",type:"number",default:"0.35",description:"Speed of automatic rotation"},{name:"showScreenshotButton",type:"boolean",default:"true",description:"Show the screenshot button overlay"},{name:"placeholderSrc",type:"string",default:"-",description:"Placeholder image source while loading"},{name:"onModelLoaded",type:"function",default:"-",description:"Callback when model finishes loading"}],[]);return C.jsx(Rn,{props:o,defaultProps:on,resetProps:a,hasChanges:i,demoOnlyProps:["selectedModel"],computedProps:{url:w[c]},children:C.jsxs(Mn,{children:[C.jsxs(Pn,{children:[C.jsxs(bn,{position:"relative",className:"demo-container",h:400,overflow:"hidden",p:0,display:"flex",justifyContent:"center",alignItems:"center",children:[l&&C.jsx(En,{userSelect:"none",position:"absolute",top:"50%",left:"6em",transform:"translate(-50%, -50%)",fontSize:"3rem",whiteSpace:"nowrap",fontWeight:"900",color:"white",textAlign:"center",textShadow:"0 0 10px rgba(255, 255, 255, 0.8)",zIndex:1,display:{base:"none",md:"block"},children:M[c]}),C.jsx(ur,{url:w[c],width:"100%",height:"100%",modelXOffset:d,modelYOffset:u,maxZoomDistance:.7,enableMouseParallax:s,enableHoverRotation:f,environmentPreset:m,fadeIn:v,autoRotate:y,autoRotateSpeed:b,showScreenshotButton:x,onModelLoaded:()=>t(!0)},n)]}),C.jsxs(An,{children:[C.jsx(St,{title:"Model",width:150,options:[{label:"Car",value:"toyCar"},{label:"Chair",value:"sheenChair"}],value:c,onChange:L}),C.jsx(St,{title:"Environment",width:150,options:[{label:"City",value:"city"},{label:"Sunset",value:"sunset"},{label:"Night",value:"night"},{label:"Dawn",value:"dawn"},{label:"Studio",value:"studio"},{label:"Apartment",value:"apartment"},{label:"Forest",value:"forest"},{label:"Park",value:"park"},{label:"None",value:"none"}],value:m,onChange:h=>{r("environmentPreset",h),e()}}),C.jsx(dt,{title:"Horizontal Offset",min:-1,max:1,step:.1,value:d,onChange:h=>{r("modelXOffset",h),e()}}),C.jsx(dt,{title:"Vertical Offset",min:-1,max:1,step:.1,value:u,onChange:h=>{r("modelYOffset",h),e()}}),C.jsx(ze,{title:"Mouse Parallax",isChecked:s,onChange:h=>{r("enableMouseParallax",h),e()}}),C.jsx(ze,{title:"Hover Rotation",isChecked:f,onChange:h=>{r("enableHoverRotation",h),e()}}),C.jsx(ze,{title:"Screenshot Button",isChecked:x,onChange:h=>{r("showScreenshotButton",h),e()}}),C.jsx(ze,{title:"Fade In On Load",isChecked:v,onChange:h=>{r("fadeIn",h),e()}}),C.jsx(ze,{title:"Auto Rotate",isChecked:y,onChange:h=>{r("autoRotate",h),e()}}),C.jsx(dt,{title:"Rotate Speed",min:.1,max:2,step:.1,value:b,isDisabled:!y,onChange:h=>{r("autoRotateSpeed",h),e()}})]}),C.jsx(Tn,{data:P}),C.jsx(In,{dependencyList:["three","@react-three/fiber","@react-three/drei"]})]}),C.jsx(Ln,{children:C.jsx(Sn,{codeObject:hr,componentName:"ModelViewer"})})]})})};export{Hr as default};
