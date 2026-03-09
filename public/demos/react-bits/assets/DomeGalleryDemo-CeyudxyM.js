import{i as Ae,r as m,j as p,B as bt,a as wt,cF as Dt}from"./index-CKqfvLoB.js";import{u as Tt,C as Et,T as At,P as Mt,a as _t,b as It,c as St}from"./PropTable-BzD4cJVp.js";import{C as kt}from"./Customize-BaUKAf5J.js";import{P as se}from"./PreviewSlider-25yjOF_X.js";import{P as Pt}from"./PreviewSwitch-B0BSuWrO.js";import{D as Yt}from"./Dependencies-DmSBXzNX.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";import"./switch-CqqRi5Az.js";function Ct(n,e,t){return Math.max(e,Math.min(n,t))}const x={toVector(n,e){return n===void 0&&(n=e),Array.isArray(n)?n:[n,n]},add(n,e){return[n[0]+e[0],n[1]+e[1]]},sub(n,e){return[n[0]-e[0],n[1]-e[1]]},addTo(n,e){n[0]+=e[0],n[1]+=e[1]},subTo(n,e){n[0]-=e[0],n[1]-=e[1]}};function Fe(n,e,t){return e===0||Math.abs(e)===1/0?Math.pow(n,t*5):n*e*t/(e+t*n)}function Oe(n,e,t,r=.15){return r===0?Ct(n,e,t):n<e?-Fe(e-n,t-e,r)+e:n>t?+Fe(n-t,t-e,r)+t:n}function Xt(n,[e,t],[r,i]){const[[a,o],[f,d]]=n;return[Oe(e,a,o,r),Oe(t,f,d,i)]}function $t(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Bt(n){var e=$t(n,"string");return typeof e=="symbol"?e:String(e)}function A(n,e,t){return e=Bt(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Ne(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function b(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ne(Object(t),!0).forEach(function(r){A(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ne(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}const nt={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function Ge(n){return n?n[0].toUpperCase()+n.slice(1):""}const Lt=["enter","leave"];function zt(n=!1,e){return n&&!Lt.includes(e)}function Ht(n,e="",t=!1){const r=nt[n],i=r&&r[e]||e;return"on"+Ge(n)+Ge(i)+(zt(t,i)?"Capture":"")}const Ft=["gotpointercapture","lostpointercapture"];function Ot(n){let e=n.substring(2).toLowerCase();const t=!!~e.indexOf("passive");t&&(e=e.replace("passive",""));const r=Ft.includes(e)?"capturecapture":"capture",i=!!~e.indexOf(r);return i&&(e=e.replace("capture","")),{device:e,capture:i,passive:t}}function Nt(n,e=""){const t=nt[n],r=t&&t[e]||e;return n+r}function be(n){return"touches"in n}function rt(n){return be(n)?"touch":"pointerType"in n?n.pointerType:"mouse"}function Gt(n){return Array.from(n.touches).filter(e=>{var t,r;return e.target===n.currentTarget||((t=n.currentTarget)===null||t===void 0||(r=t.contains)===null||r===void 0?void 0:r.call(t,e.target))})}function jt(n){return n.type==="touchend"||n.type==="touchcancel"?n.changedTouches:n.targetTouches}function it(n){return be(n)?jt(n)[0]:n}function _e(n,e){try{const t=e.clientX-n.clientX,r=e.clientY-n.clientY,i=(e.clientX+n.clientX)/2,a=(e.clientY+n.clientY)/2,o=Math.hypot(t,r);return{angle:-(Math.atan2(t,r)*180)/Math.PI,distance:o,origin:[i,a]}}catch{}return null}function Vt(n){return Gt(n).map(e=>e.identifier)}function je(n,e){const[t,r]=Array.from(n.touches).filter(i=>e.includes(i.identifier));return _e(t,r)}function Me(n){const e=it(n);return be(n)?e.identifier:e.pointerId}function re(n){const e=it(n);return[e.clientX,e.clientY]}const Ve=40,qe=800;function at(n){let{deltaX:e,deltaY:t,deltaMode:r}=n;return r===1?(e*=Ve,t*=Ve):r===2&&(e*=qe,t*=qe),[e,t]}function qt(n){var e,t;const{scrollX:r,scrollY:i,scrollLeft:a,scrollTop:o}=n.currentTarget;return[(e=r??a)!==null&&e!==void 0?e:0,(t=i??o)!==null&&t!==void 0?t:0]}function Wt(n){const e={};if("buttons"in n&&(e.buttons=n.buttons),"shiftKey"in n){const{shiftKey:t,altKey:r,metaKey:i,ctrlKey:a}=n;Object.assign(e,{shiftKey:t,altKey:r,metaKey:i,ctrlKey:a})}return e}function xe(n,...e){return typeof n=="function"?n(...e):n}function Ut(){}function Kt(...n){return n.length===0?Ut:n.length===1?n[0]:function(){let e;for(const t of n)e=t.apply(this,arguments)||e;return e}}function We(n,e){return Object.assign({},e,n||{})}const Zt=32;class ot{constructor(e,t,r){this.ctrl=e,this.args=t,this.key=r,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(e){this.ctrl.state[this.key]=e}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:e,shared:t,ingKey:r,args:i}=this;t[r]=e._active=e.active=e._blocked=e._force=!1,e._step=[!1,!1],e.intentional=!1,e._movement=[0,0],e._distance=[0,0],e._direction=[0,0],e._delta=[0,0],e._bounds=[[-1/0,1/0],[-1/0,1/0]],e.args=i,e.axis=void 0,e.memo=void 0,e.elapsedTime=e.timeDelta=0,e.direction=[0,0],e.distance=[0,0],e.overflow=[0,0],e._movementBound=[!1,!1],e.velocity=[0,0],e.movement=[0,0],e.delta=[0,0],e.timeStamp=0}start(e){const t=this.state,r=this.config;t._active||(this.reset(),this.computeInitial(),t._active=!0,t.target=e.target,t.currentTarget=e.currentTarget,t.lastOffset=r.from?xe(r.from,t):t.offset,t.offset=t.lastOffset,t.startTime=t.timeStamp=e.timeStamp)}computeValues(e){const t=this.state;t._values=e,t.values=this.config.transform(e)}computeInitial(){const e=this.state;e._initial=e._values,e.initial=e.values}compute(e){const{state:t,config:r,shared:i}=this;t.args=this.args;let a=0;if(e&&(t.event=e,r.preventDefault&&e.cancelable&&t.event.preventDefault(),t.type=e.type,i.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,i.locked=!!document.pointerLockElement,Object.assign(i,Wt(e)),i.down=i.pressed=i.buttons%2===1||i.touches>0,a=e.timeStamp-t.timeStamp,t.timeStamp=e.timeStamp,t.elapsedTime=t.timeStamp-t.startTime),t._active){const H=t._delta.map(Math.abs);x.addTo(t._distance,H)}this.axisIntent&&this.axisIntent(e);const[o,f]=t._movement,[d,s]=r.threshold,{_step:l,values:h}=t;if(r.hasCustomTransform?(l[0]===!1&&(l[0]=Math.abs(o)>=d&&h[0]),l[1]===!1&&(l[1]=Math.abs(f)>=s&&h[1])):(l[0]===!1&&(l[0]=Math.abs(o)>=d&&Math.sign(o)*d),l[1]===!1&&(l[1]=Math.abs(f)>=s&&Math.sign(f)*s)),t.intentional=l[0]!==!1||l[1]!==!1,!t.intentional)return;const w=[0,0];if(r.hasCustomTransform){const[H,F]=h;w[0]=l[0]!==!1?H-l[0]:0,w[1]=l[1]!==!1?F-l[1]:0}else w[0]=l[0]!==!1?o-l[0]:0,w[1]=l[1]!==!1?f-l[1]:0;this.restrictToAxis&&!t._blocked&&this.restrictToAxis(w);const B=t.offset,N=t._active&&!t._blocked||t.active;N&&(t.first=t._active&&!t.active,t.last=!t._active&&t.active,t.active=i[this.ingKey]=t._active,e&&(t.first&&("bounds"in r&&(t._bounds=xe(r.bounds,t)),this.setup&&this.setup()),t.movement=w,this.computeOffset()));const[G,j]=t.offset,[[Y,q],[ue,J]]=t._bounds;t.overflow=[G<Y?-1:G>q?1:0,j<ue?-1:j>J?1:0],t._movementBound[0]=t.overflow[0]?t._movementBound[0]===!1?t._movement[0]:t._movementBound[0]:!1,t._movementBound[1]=t.overflow[1]?t._movementBound[1]===!1?t._movement[1]:t._movementBound[1]:!1;const Q=t._active?r.rubberband||[0,0]:[0,0];if(t.offset=Xt(t._bounds,t.offset,Q),t.delta=x.sub(t.offset,B),this.computeMovement(),N&&(!t.last||a>Zt)){t.delta=x.sub(t.offset,B);const H=t.delta.map(Math.abs);x.addTo(t.distance,H),t.direction=t.delta.map(Math.sign),t._direction=t._delta.map(Math.sign),!t.first&&a>0&&(t.velocity=[H[0]/a,H[1]/a],t.timeDelta=a)}}emit(){const e=this.state,t=this.shared,r=this.config;if(e._active||this.clean(),(e._blocked||!e.intentional)&&!e._force&&!r.triggerAllEvents)return;const i=this.handler(b(b(b({},t),e),{},{[this.aliasKey]:e.values}));i!==void 0&&(e.memo=i)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function Jt([n,e],t){const r=Math.abs(n),i=Math.abs(e);if(r>i&&r>t)return"x";if(i>r&&i>t)return"y"}class le extends ot{constructor(...e){super(...e),A(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=x.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=x.sub(this.state.offset,this.state.lastOffset)}axisIntent(e){const t=this.state,r=this.config;if(!t.axis&&e){const i=typeof r.axisThreshold=="object"?r.axisThreshold[rt(e)]:r.axisThreshold;t.axis=Jt(t._movement,i)}t._blocked=(r.lockDirection||!!r.axis)&&!t.axis||!!r.axis&&r.axis!==t.axis}restrictToAxis(e){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":e[1]=0;break;case"y":e[0]=0;break}}}const Qt=n=>n,Ue=.15,st={enabled(n=!0){return n},eventOptions(n,e,t){return b(b({},t.shared.eventOptions),n)},preventDefault(n=!1){return n},triggerAllEvents(n=!1){return n},rubberband(n=0){switch(n){case!0:return[Ue,Ue];case!1:return[0,0];default:return x.toVector(n)}},from(n){if(typeof n=="function")return n;if(n!=null)return x.toVector(n)},transform(n,e,t){const r=n||t.shared.transform;return this.hasCustomTransform=!!r,r||Qt},threshold(n){return x.toVector(n,0)}},en=0,Z=b(b({},st),{},{axis(n,e,{axis:t}){if(this.lockDirection=t==="lock",!this.lockDirection)return t},axisThreshold(n=en){return n},bounds(n={}){if(typeof n=="function")return a=>Z.bounds(n(a));if("current"in n)return()=>n.current;if(typeof HTMLElement=="function"&&n instanceof HTMLElement)return n;const{left:e=-1/0,right:t=1/0,top:r=-1/0,bottom:i=1/0}=n;return[[e,t],[r,i]]}}),Ke={ArrowRight:(n,e=1)=>[n*e,0],ArrowLeft:(n,e=1)=>[-1*n*e,0],ArrowUp:(n,e=1)=>[0,-1*n*e],ArrowDown:(n,e=1)=>[0,n*e]};class tn extends le{constructor(...e){super(...e),A(this,"ingKey","dragging")}reset(){super.reset();const e=this.state;e._pointerId=void 0,e._pointerActive=!1,e._keyboardActive=!1,e._preventScroll=!1,e._delayed=!1,e.swipe=[0,0],e.tap=!1,e.canceled=!1,e.cancel=this.cancel.bind(this)}setup(){const e=this.state;if(e._bounds instanceof HTMLElement){const t=e._bounds.getBoundingClientRect(),r=e.currentTarget.getBoundingClientRect(),i={left:t.left-r.left+e.offset[0],right:t.right-r.right+e.offset[0],top:t.top-r.top+e.offset[1],bottom:t.bottom-r.bottom+e.offset[1]};e._bounds=Z.bounds(i)}}cancel(){const e=this.state;e.canceled||(e.canceled=!0,e._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(e){const t=this.config,r=this.state;if(e.buttons!=null&&(Array.isArray(t.pointerButtons)?!t.pointerButtons.includes(e.buttons):t.pointerButtons!==-1&&t.pointerButtons!==e.buttons))return;const i=this.ctrl.setEventIds(e);t.pointerCapture&&e.target.setPointerCapture(e.pointerId),!(i&&i.size>1&&r._pointerActive)&&(this.start(e),this.setupPointer(e),r._pointerId=Me(e),r._pointerActive=!0,this.computeValues(re(e)),this.computeInitial(),t.preventScrollAxis&&rt(e)!=="mouse"?(r._active=!1,this.setupScrollPrevention(e)):t.delay>0?(this.setupDelayTrigger(e),t.triggerAllEvents&&(this.compute(e),this.emit())):this.startPointerDrag(e))}startPointerDrag(e){const t=this.state;t._active=!0,t._preventScroll=!0,t._delayed=!1,this.compute(e),this.emit()}pointerMove(e){const t=this.state,r=this.config;if(!t._pointerActive)return;const i=Me(e);if(t._pointerId!==void 0&&i!==t._pointerId)return;const a=re(e);if(document.pointerLockElement===e.target?t._delta=[e.movementX,e.movementY]:(t._delta=x.sub(a,t._values),this.computeValues(a)),x.addTo(t._movement,t._delta),this.compute(e),t._delayed&&t.intentional){this.timeoutStore.remove("dragDelay"),t.active=!1,this.startPointerDrag(e);return}if(r.preventScrollAxis&&!t._preventScroll)if(t.axis)if(t.axis===r.preventScrollAxis||r.preventScrollAxis==="xy"){t._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(e);return}else return;this.emit()}pointerUp(e){this.ctrl.setEventIds(e);try{this.config.pointerCapture&&e.target.hasPointerCapture(e.pointerId)&&e.target.releasePointerCapture(e.pointerId)}catch{}const t=this.state,r=this.config;if(!t._active||!t._pointerActive)return;const i=Me(e);if(t._pointerId!==void 0&&i!==t._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(e);const[a,o]=t._distance;if(t.tap=a<=r.tapsThreshold&&o<=r.tapsThreshold,t.tap&&r.filterTaps)t._force=!0;else{const[f,d]=t._delta,[s,l]=t._movement,[h,w]=r.swipe.velocity,[B,N]=r.swipe.distance,G=r.swipe.duration;if(t.elapsedTime<G){const j=Math.abs(f/t.timeDelta),Y=Math.abs(d/t.timeDelta);j>h&&Math.abs(s)>B&&(t.swipe[0]=Math.sign(f)),Y>w&&Math.abs(l)>N&&(t.swipe[1]=Math.sign(d))}}this.emit()}pointerClick(e){!this.state.tap&&e.detail>0&&(e.preventDefault(),e.stopPropagation())}setupPointer(e){const t=this.config,r=t.device;t.pointerLock&&e.currentTarget.requestPointerLock(),t.pointerCapture||(this.eventStore.add(this.sharedConfig.window,r,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,r,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,r,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(e){this.state._preventScroll&&e.cancelable&&e.preventDefault()}setupScrollPrevention(e){this.state._preventScroll=!1,nn(e);const t=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",t),this.eventStore.add(this.sharedConfig.window,"touch","cancel",t),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,e)}setupDelayTrigger(e){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(e)},this.config.delay)}keyDown(e){const t=Ke[e.key];if(t){const r=this.state,i=e.shiftKey?10:e.altKey?.1:1;this.start(e),r._delta=t(this.config.keyboardDisplacement,i),r._keyboardActive=!0,x.addTo(r._movement,r._delta),this.compute(e),this.emit()}}keyUp(e){e.key in Ke&&(this.state._keyboardActive=!1,this.setActive(),this.compute(e),this.emit())}bind(e){const t=this.config.device;e(t,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(e(t,"change",this.pointerMove.bind(this)),e(t,"end",this.pointerUp.bind(this)),e(t,"cancel",this.pointerUp.bind(this)),e("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(e("key","down",this.keyDown.bind(this)),e("key","up",this.keyUp.bind(this))),this.config.filterTaps&&e("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function nn(n){"persist"in n&&typeof n.persist=="function"&&n.persist()}const ce=typeof window<"u"&&window.document&&window.document.createElement;function lt(){return ce&&"ontouchstart"in window}function rn(){return lt()||ce&&window.navigator.maxTouchPoints>1}function an(){return ce&&"onpointerdown"in window}function on(){return ce&&"exitPointerLock"in window.document}function sn(){try{return"constructor"in GestureEvent}catch{return!1}}const $={isBrowser:ce,gesture:sn(),touch:lt(),touchscreen:rn(),pointer:an(),pointerLock:on()},ln=250,cn=180,un=.5,fn=50,dn=250,mn=10,Ze={mouse:0,touch:0,pen:8},pn=b(b({},Z),{},{device(n,e,{pointer:{touch:t=!1,lock:r=!1,mouse:i=!1}={}}){return this.pointerLock=r&&$.pointerLock,$.touch&&t?"touch":this.pointerLock?"mouse":$.pointer&&!i?"pointer":$.touch?"touch":"mouse"},preventScrollAxis(n,e,{preventScroll:t}){if(this.preventScrollDelay=typeof t=="number"?t:t||t===void 0&&n?ln:void 0,!(!$.touchscreen||t===!1))return n||(t!==void 0?"y":void 0)},pointerCapture(n,e,{pointer:{capture:t=!0,buttons:r=1,keys:i=!0}={}}){return this.pointerButtons=r,this.keys=i,!this.pointerLock&&this.device==="pointer"&&t},threshold(n,e,{filterTaps:t=!1,tapsThreshold:r=3,axis:i=void 0}){const a=x.toVector(n,t?r:i?1:0);return this.filterTaps=t,this.tapsThreshold=r,a},swipe({velocity:n=un,distance:e=fn,duration:t=dn}={}){return{velocity:this.transform(x.toVector(n)),distance:this.transform(x.toVector(e)),duration:t}},delay(n=0){switch(n){case!0:return cn;case!1:return 0;default:return n}},axisThreshold(n){return n?b(b({},Ze),n):Ze},keyboardDisplacement(n=mn){return n}});function ct(n){const[e,t]=n.overflow,[r,i]=n._delta,[a,o]=n._direction;(e<0&&r>0&&a<0||e>0&&r<0&&a>0)&&(n._movement[0]=n._movementBound[0]),(t<0&&i>0&&o<0||t>0&&i<0&&o>0)&&(n._movement[1]=n._movementBound[1])}const gn=30,hn=100;class yn extends ot{constructor(...e){super(...e),A(this,"ingKey","pinching"),A(this,"aliasKey","da")}init(){this.state.offset=[1,0],this.state.lastOffset=[1,0],this.state._pointerEvents=new Map}reset(){super.reset();const e=this.state;e._touchIds=[],e.canceled=!1,e.cancel=this.cancel.bind(this),e.turns=0}computeOffset(){const{type:e,movement:t,lastOffset:r}=this.state;e==="wheel"?this.state.offset=x.add(t,r):this.state.offset=[(1+t[0])*r[0],t[1]+r[1]]}computeMovement(){const{offset:e,lastOffset:t}=this.state;this.state.movement=[e[0]/t[0],e[1]-t[1]]}axisIntent(){const e=this.state,[t,r]=e._movement;if(!e.axis){const i=Math.abs(t)*gn-Math.abs(r);i<0?e.axis="angle":i>0&&(e.axis="scale")}}restrictToAxis(e){this.config.lockDirection&&(this.state.axis==="scale"?e[1]=0:this.state.axis==="angle"&&(e[0]=0))}cancel(){const e=this.state;e.canceled||setTimeout(()=>{e.canceled=!0,e._active=!1,this.compute(),this.emit()},0)}touchStart(e){this.ctrl.setEventIds(e);const t=this.state,r=this.ctrl.touchIds;if(t._active&&t._touchIds.every(a=>r.has(a))||r.size<2)return;this.start(e),t._touchIds=Array.from(r).slice(0,2);const i=je(e,t._touchIds);i&&this.pinchStart(e,i)}pointerStart(e){if(e.buttons!=null&&e.buttons%2!==1)return;this.ctrl.setEventIds(e),e.target.setPointerCapture(e.pointerId);const t=this.state,r=t._pointerEvents,i=this.ctrl.pointerIds;if(t._active&&Array.from(r.keys()).every(o=>i.has(o))||(r.size<2&&r.set(e.pointerId,e),t._pointerEvents.size<2))return;this.start(e);const a=_e(...Array.from(r.values()));a&&this.pinchStart(e,a)}pinchStart(e,t){const r=this.state;r.origin=t.origin,this.computeValues([t.distance,t.angle]),this.computeInitial(),this.compute(e),this.emit()}touchMove(e){if(!this.state._active)return;const t=je(e,this.state._touchIds);t&&this.pinchMove(e,t)}pointerMove(e){const t=this.state._pointerEvents;if(t.has(e.pointerId)&&t.set(e.pointerId,e),!this.state._active)return;const r=_e(...Array.from(t.values()));r&&this.pinchMove(e,r)}pinchMove(e,t){const r=this.state,i=r._values[1],a=t.angle-i;let o=0;Math.abs(a)>270&&(o+=Math.sign(a)),this.computeValues([t.distance,t.angle-360*o]),r.origin=t.origin,r.turns=o,r._movement=[r._values[0]/r._initial[0]-1,r._values[1]-r._initial[1]],this.compute(e),this.emit()}touchEnd(e){this.ctrl.setEventIds(e),this.state._active&&this.state._touchIds.some(t=>!this.ctrl.touchIds.has(t))&&(this.state._active=!1,this.compute(e),this.emit())}pointerEnd(e){const t=this.state;this.ctrl.setEventIds(e);try{e.target.releasePointerCapture(e.pointerId)}catch{}t._pointerEvents.has(e.pointerId)&&t._pointerEvents.delete(e.pointerId),t._active&&t._pointerEvents.size<2&&(t._active=!1,this.compute(e),this.emit())}gestureStart(e){e.cancelable&&e.preventDefault();const t=this.state;t._active||(this.start(e),this.computeValues([e.scale,e.rotation]),t.origin=[e.clientX,e.clientY],this.compute(e),this.emit())}gestureMove(e){if(e.cancelable&&e.preventDefault(),!this.state._active)return;const t=this.state;this.computeValues([e.scale,e.rotation]),t.origin=[e.clientX,e.clientY];const r=t._movement;t._movement=[e.scale-1,e.rotation],t._delta=x.sub(t._movement,r),this.compute(e),this.emit()}gestureEnd(e){this.state._active&&(this.state._active=!1,this.compute(e),this.emit())}wheel(e){const t=this.config.modifierKey;t&&(Array.isArray(t)?!t.find(r=>e[r]):!e[t])||(this.state._active?this.wheelChange(e):this.wheelStart(e),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this)))}wheelStart(e){this.start(e),this.wheelChange(e)}wheelChange(e){"uv"in e||e.cancelable&&e.preventDefault();const r=this.state;r._delta=[-at(e)[1]/hn*r.offset[0],0],x.addTo(r._movement,r._delta),ct(r),this.state.origin=[e.clientX,e.clientY],this.compute(e),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(e){const t=this.config.device;t&&(e(t,"start",this[t+"Start"].bind(this)),e(t,"change",this[t+"Move"].bind(this)),e(t,"end",this[t+"End"].bind(this)),e(t,"cancel",this[t+"End"].bind(this)),e("lostPointerCapture","",this[t+"End"].bind(this))),this.config.pinchOnWheel&&e("wheel","",this.wheel.bind(this),{passive:!1})}}const vn=b(b({},st),{},{device(n,e,{shared:t,pointer:{touch:r=!1}={}}){if(t.target&&!$.touch&&$.gesture)return"gesture";if($.touch&&r)return"touch";if($.touchscreen){if($.pointer)return"pointer";if($.touch)return"touch"}},bounds(n,e,{scaleBounds:t={},angleBounds:r={}}){const i=o=>{const f=We(xe(t,o),{min:-1/0,max:1/0});return[f.min,f.max]},a=o=>{const f=We(xe(r,o),{min:-1/0,max:1/0});return[f.min,f.max]};return typeof t!="function"&&typeof r!="function"?[i(),a()]:o=>[i(o),a(o)]},threshold(n,e,t){return this.lockDirection=t.axis==="lock",x.toVector(n,this.lockDirection?[.1,3]:0)},modifierKey(n){return n===void 0?"ctrlKey":n},pinchOnWheel(n=!0){return n}});class Rn extends le{constructor(...e){super(...e),A(this,"ingKey","moving")}move(e){this.config.mouseOnly&&e.pointerType!=="mouse"||(this.state._active?this.moveChange(e):this.moveStart(e),this.timeoutStore.add("moveEnd",this.moveEnd.bind(this)))}moveStart(e){this.start(e),this.computeValues(re(e)),this.compute(e),this.computeInitial(),this.emit()}moveChange(e){if(!this.state._active)return;const t=re(e),r=this.state;r._delta=x.sub(t,r._values),x.addTo(r._movement,r._delta),this.computeValues(t),this.compute(e),this.emit()}moveEnd(e){this.state._active&&(this.state._active=!1,this.compute(e),this.emit())}bind(e){e("pointer","change",this.move.bind(this)),e("pointer","leave",this.moveEnd.bind(this))}}const xn=b(b({},Z),{},{mouseOnly:(n=!0)=>n});class bn extends le{constructor(...e){super(...e),A(this,"ingKey","scrolling")}scroll(e){this.state._active||this.start(e),this.scrollChange(e),this.timeoutStore.add("scrollEnd",this.scrollEnd.bind(this))}scrollChange(e){e.cancelable&&e.preventDefault();const t=this.state,r=qt(e);t._delta=x.sub(r,t._values),x.addTo(t._movement,t._delta),this.computeValues(r),this.compute(e),this.emit()}scrollEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(e){e("scroll","",this.scroll.bind(this))}}const wn=Z;class Dn extends le{constructor(...e){super(...e),A(this,"ingKey","wheeling")}wheel(e){this.state._active||this.start(e),this.wheelChange(e),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this))}wheelChange(e){const t=this.state;t._delta=at(e),x.addTo(t._movement,t._delta),ct(t),this.compute(e),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(e){e("wheel","",this.wheel.bind(this))}}const Tn=Z;class En extends le{constructor(...e){super(...e),A(this,"ingKey","hovering")}enter(e){this.config.mouseOnly&&e.pointerType!=="mouse"||(this.start(e),this.computeValues(re(e)),this.compute(e),this.emit())}leave(e){if(this.config.mouseOnly&&e.pointerType!=="mouse")return;const t=this.state;if(!t._active)return;t._active=!1;const r=re(e);t._movement=t._delta=x.sub(r,t._values),this.computeValues(r),this.compute(e),t.delta=t.movement,this.emit()}bind(e){e("pointer","enter",this.enter.bind(this)),e("pointer","leave",this.leave.bind(this))}}const An=b(b({},Z),{},{mouseOnly:(n=!0)=>n}),Se=new Map,Ie=new Map;function Mn(n){Se.set(n.key,n.engine),Ie.set(n.key,n.resolver)}const _n={key:"drag",engine:tn,resolver:pn},In={key:"hover",engine:En,resolver:An},Sn={key:"move",engine:Rn,resolver:xn},kn={key:"pinch",engine:yn,resolver:vn},Pn={key:"scroll",engine:bn,resolver:wn},Yn={key:"wheel",engine:Dn,resolver:Tn};function Cn(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,a;for(a=0;a<r.length;a++)i=r[a],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function Xn(n,e){if(n==null)return{};var t=Cn(n,e),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}const $n={target(n){if(n)return()=>"current"in n?n.current:n},enabled(n=!0){return n},window(n=$.isBrowser?window:void 0){return n},eventOptions({passive:n=!0,capture:e=!1}={}){return{passive:n,capture:e}},transform(n){return n}},Bn=["target","eventOptions","window","enabled","transform"];function Re(n={},e){const t={};for(const[r,i]of Object.entries(e))switch(typeof i){case"function":t[r]=i.call(t,n[r],r,n);break;case"object":t[r]=Re(n[r],i);break;case"boolean":i&&(t[r]=n[r]);break}return t}function Ln(n,e,t={}){const r=n,{target:i,eventOptions:a,window:o,enabled:f,transform:d}=r,s=Xn(r,Bn);if(t.shared=Re({target:i,eventOptions:a,window:o,enabled:f,transform:d},$n),e){const l=Ie.get(e);t[e]=Re(b({shared:t.shared},s),l)}else for(const l in s){const h=Ie.get(l);h&&(t[l]=Re(b({shared:t.shared},s[l]),h))}return t}class ut{constructor(e,t){A(this,"_listeners",new Set),this._ctrl=e,this._gestureKey=t}add(e,t,r,i,a){const o=this._listeners,f=Nt(t,r),d=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},s=b(b({},d),a);e.addEventListener(f,i,s);const l=()=>{e.removeEventListener(f,i,s),o.delete(l)};return o.add(l),l}clean(){this._listeners.forEach(e=>e()),this._listeners.clear()}}class zn{constructor(){A(this,"_timeouts",new Map)}add(e,t,r=140,...i){this.remove(e),this._timeouts.set(e,window.setTimeout(t,r,...i))}remove(e){const t=this._timeouts.get(e);t&&window.clearTimeout(t)}clean(){this._timeouts.forEach(e=>void window.clearTimeout(e)),this._timeouts.clear()}}class Hn{constructor(e){A(this,"gestures",new Set),A(this,"_targetEventStore",new ut(this)),A(this,"gestureEventStores",{}),A(this,"gestureTimeoutStores",{}),A(this,"handlers",{}),A(this,"config",{}),A(this,"pointerIds",new Set),A(this,"touchIds",new Set),A(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),Fn(this,e)}setEventIds(e){if(be(e))return this.touchIds=new Set(Vt(e)),this.touchIds;if("pointerId"in e)return e.type==="pointerup"||e.type==="pointercancel"?this.pointerIds.delete(e.pointerId):e.type==="pointerdown"&&this.pointerIds.add(e.pointerId),this.pointerIds}applyHandlers(e,t){this.handlers=e,this.nativeHandlers=t}applyConfig(e,t){this.config=Ln(e,t,this.config)}clean(){this._targetEventStore.clean();for(const e of this.gestures)this.gestureEventStores[e].clean(),this.gestureTimeoutStores[e].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...e){const t=this.config.shared,r={};let i;if(!(t.target&&(i=t.target(),!i))){if(t.enabled){for(const o of this.gestures){const f=this.config[o],d=Je(r,f.eventOptions,!!i);if(f.enabled){const s=Se.get(o);new s(this,e,o).bind(d)}}const a=Je(r,t.eventOptions,!!i);for(const o in this.nativeHandlers)a(o,"",f=>this.nativeHandlers[o](b(b({},this.state.shared),{},{event:f,args:e})),void 0,!0)}for(const a in r)r[a]=Kt(...r[a]);if(!i)return r;for(const a in r){const{device:o,capture:f,passive:d}=Ot(a);this._targetEventStore.add(i,o,"",r[a],{capture:f,passive:d})}}}}function te(n,e){n.gestures.add(e),n.gestureEventStores[e]=new ut(n,e),n.gestureTimeoutStores[e]=new zn}function Fn(n,e){e.drag&&te(n,"drag"),e.wheel&&te(n,"wheel"),e.scroll&&te(n,"scroll"),e.move&&te(n,"move"),e.pinch&&te(n,"pinch"),e.hover&&te(n,"hover")}const Je=(n,e,t)=>(r,i,a,o={},f=!1)=>{var d,s;const l=(d=o.capture)!==null&&d!==void 0?d:e.capture,h=(s=o.passive)!==null&&s!==void 0?s:e.passive;let w=f?r:Ht(r,i,l);t&&h&&(w+="Passive"),n[w]=n[w]||[],n[w].push(a)},On=/^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;function Nn(n){const e={},t={},r=new Set;for(let i in n)On.test(i)?(r.add(RegExp.lastMatch),t[i]=n[i]):e[i]=n[i];return[t,e,r]}function ne(n,e,t,r,i,a){if(!n.has(t)||!Se.has(r))return;const o=t+"Start",f=t+"End",d=s=>{let l;return s.first&&o in e&&e[o](s),t in e&&(l=e[t](s)),s.last&&f in e&&e[f](s),l};i[r]=d,a[r]=a[r]||{}}function Gn(n,e){const[t,r,i]=Nn(n),a={};return ne(i,t,"onDrag","drag",a,e),ne(i,t,"onWheel","wheel",a,e),ne(i,t,"onScroll","scroll",a,e),ne(i,t,"onPinch","pinch",a,e),ne(i,t,"onMove","move",a,e),ne(i,t,"onHover","hover",a,e),{handlers:a,config:e,nativeHandlers:r}}function jn(n,e={},t,r){const i=Ae.useMemo(()=>new Hn(n),[]);if(i.applyHandlers(n,r),i.applyConfig(e,t),Ae.useEffect(i.effect.bind(i)),Ae.useEffect(()=>i.clean.bind(i),[]),e.target===void 0)return i.bind.bind(i)}function Vn(n){return n.forEach(Mn),function(t,r){const{handlers:i,nativeHandlers:a,config:o}=Gn(t,r||{});return jn(i,o,void 0,a)}}function qn(n,e){return Vn([_n,kn,Pn,Yn,Sn,In])(n,e||{})}const Wn=`import { useEffect, useMemo, useRef, useCallback } from 'react';
import { useGesture } from '@use-gesture/react';
import './DomeGallery.css';

const DEFAULT_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1755331039789-7e5680e26e8f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Abstract art'
  },
  {
    src: 'https://images.unsplash.com/photo-1755569309049-98410b94f66d?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Modern sculpture'
  },
  {
    src: 'https://images.unsplash.com/photo-1755497595318-7e5e3523854f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Digital artwork'
  },
  {
    src: 'https://images.unsplash.com/photo-1755353985163-c2a0fe5ac3d8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Contemporary art'
  },
  {
    src: 'https://images.unsplash.com/photo-1745965976680-d00be7dc0377?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Geometric pattern'
  },
  {
    src: 'https://images.unsplash.com/photo-1752588975228-21f44630bb3c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Textured surface'
  },
  { src: 'https://pbs.twimg.com/media/Gyla7NnXMAAXSo_?format=jpg&name=large', alt: 'Social media image' }
];

const DEFAULTS = {
  maxVerticalRotationDeg: 5,
  dragSensitivity: 20,
  enlargeTransitionMs: 300,
  segments: 35
};

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const normalizeAngle = d => ((d % 360) + 360) % 360;
const wrapAngleSigned = deg => {
  const a = (((deg + 180) % 360) + 360) % 360;
  return a - 180;
};
const getDataNumber = (el, name, fallback) => {
  const attr = el.dataset[name] ?? el.getAttribute(\`data-\${name}\`);
  const n = attr == null ? NaN : parseFloat(attr);
  return Number.isFinite(n) ? n : fallback;
};

function buildItems(pool, seg) {
  const xCols = Array.from({ length: seg }, (_, i) => -37 + i * 2);
  const evenYs = [-4, -2, 0, 2, 4];
  const oddYs = [-3, -1, 1, 3, 5];

  const coords = xCols.flatMap((x, c) => {
    const ys = c % 2 === 0 ? evenYs : oddYs;
    return ys.map(y => ({ x, y, sizeX: 2, sizeY: 2 }));
  });

  const totalSlots = coords.length;
  if (pool.length === 0) {
    return coords.map(c => ({ ...c, src: '', alt: '' }));
  }
  if (pool.length > totalSlots) {
    console.warn(
      \`[DomeGallery] Provided image count (\${pool.length}) exceeds available tiles (\${totalSlots}). Some images will not be shown.\`
    );
  }

  const normalizedImages = pool.map(image => {
    if (typeof image === 'string') {
      return { src: image, alt: '' };
    }
    return { src: image.src || '', alt: image.alt || '' };
  });

  const usedImages = Array.from({ length: totalSlots }, (_, i) => normalizedImages[i % normalizedImages.length]);

  for (let i = 1; i < usedImages.length; i++) {
    if (usedImages[i].src === usedImages[i - 1].src) {
      for (let j = i + 1; j < usedImages.length; j++) {
        if (usedImages[j].src !== usedImages[i].src) {
          const tmp = usedImages[i];
          usedImages[i] = usedImages[j];
          usedImages[j] = tmp;
          break;
        }
      }
    }
  }

  return coords.map((c, i) => ({
    ...c,
    src: usedImages[i].src,
    alt: usedImages[i].alt
  }));
}

function computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments) {
  const unit = 360 / segments / 2;
  const rotateY = unit * (offsetX + (sizeX - 1) / 2);
  const rotateX = unit * (offsetY - (sizeY - 1) / 2);
  return { rotateX, rotateY };
}

export default function DomeGallery({
  images = DEFAULT_IMAGES,
  fit = 0.5,
  fitBasis = 'auto',
  minRadius = 600,
  maxRadius = Infinity,
  padFactor = 0.25,
  overlayBlurColor = '#060010',
  maxVerticalRotationDeg = DEFAULTS.maxVerticalRotationDeg,
  dragSensitivity = DEFAULTS.dragSensitivity,
  enlargeTransitionMs = DEFAULTS.enlargeTransitionMs,
  segments = DEFAULTS.segments,
  dragDampening = 2,
  openedImageWidth = '250px',
  openedImageHeight = '350px',
  imageBorderRadius = '30px',
  openedImageBorderRadius = '30px',
  grayscale = true
}) {
  const rootRef = useRef(null);
  const mainRef = useRef(null);
  const sphereRef = useRef(null);
  const frameRef = useRef(null);
  const viewerRef = useRef(null);
  const scrimRef = useRef(null);
  const focusedElRef = useRef(null);
  const originalTilePositionRef = useRef(null);

  const rotationRef = useRef({ x: 0, y: 0 });
  const startRotRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef(null);
  const draggingRef = useRef(false);
  const movedRef = useRef(false);
  const inertiaRAF = useRef(null);
  const openingRef = useRef(false);
  const openStartedAtRef = useRef(0);
  const lastDragEndAt = useRef(0);

  const scrollLockedRef = useRef(false);
  const lockScroll = useCallback(() => {
    if (scrollLockedRef.current) return;
    scrollLockedRef.current = true;
    document.body.classList.add('dg-scroll-lock');
  }, []);
  const unlockScroll = useCallback(() => {
    if (!scrollLockedRef.current) return;
    if (rootRef.current?.getAttribute('data-enlarging') === 'true') return;
    scrollLockedRef.current = false;
    document.body.classList.remove('dg-scroll-lock');
  }, []);

  const items = useMemo(() => buildItems(images, segments), [images, segments]);

  const applyTransform = (xDeg, yDeg) => {
    const el = sphereRef.current;
    if (el) {
      el.style.transform = \`translateZ(calc(var(--radius) * -1)) rotateX(\${xDeg}deg) rotateY(\${yDeg}deg)\`;
    }
  };

  const lockedRadiusRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver(entries => {
      const cr = entries[0].contentRect;
      const w = Math.max(1, cr.width),
        h = Math.max(1, cr.height);
      const minDim = Math.min(w, h),
        maxDim = Math.max(w, h),
        aspect = w / h;
      let basis;
      switch (fitBasis) {
        case 'min':
          basis = minDim;
          break;
        case 'max':
          basis = maxDim;
          break;
        case 'width':
          basis = w;
          break;
        case 'height':
          basis = h;
          break;
        default:
          basis = aspect >= 1.3 ? w : minDim;
      }
      let radius = basis * fit;
      const heightGuard = h * 1.35;
      radius = Math.min(radius, heightGuard);
      radius = clamp(radius, minRadius, maxRadius);
      lockedRadiusRef.current = Math.round(radius);

      const viewerPad = Math.max(8, Math.round(minDim * padFactor));
      root.style.setProperty('--radius', \`\${lockedRadiusRef.current}px\`);
      root.style.setProperty('--viewer-pad', \`\${viewerPad}px\`);
      root.style.setProperty('--overlay-blur-color', overlayBlurColor);
      root.style.setProperty('--tile-radius', imageBorderRadius);
      root.style.setProperty('--enlarge-radius', openedImageBorderRadius);
      root.style.setProperty('--image-filter', grayscale ? 'grayscale(1)' : 'none');
      applyTransform(rotationRef.current.x, rotationRef.current.y);

      const enlargedOverlay = viewerRef.current?.querySelector('.enlarge');
      if (enlargedOverlay && frameRef.current && mainRef.current) {
        const frameR = frameRef.current.getBoundingClientRect();
        const mainR = mainRef.current.getBoundingClientRect();

        const hasCustomSize = openedImageWidth && openedImageHeight;
        if (hasCustomSize) {
          const tempDiv = document.createElement('div');
          tempDiv.style.cssText = \`position: absolute; width: \${openedImageWidth}; height: \${openedImageHeight}; visibility: hidden;\`;
          document.body.appendChild(tempDiv);
          const tempRect = tempDiv.getBoundingClientRect();
          document.body.removeChild(tempDiv);

          const centeredLeft = frameR.left - mainR.left + (frameR.width - tempRect.width) / 2;
          const centeredTop = frameR.top - mainR.top + (frameR.height - tempRect.height) / 2;

          enlargedOverlay.style.left = \`\${centeredLeft}px\`;
          enlargedOverlay.style.top = \`\${centeredTop}px\`;
        } else {
          enlargedOverlay.style.left = \`\${frameR.left - mainR.left}px\`;
          enlargedOverlay.style.top = \`\${frameR.top - mainR.top}px\`;
          enlargedOverlay.style.width = \`\${frameR.width}px\`;
          enlargedOverlay.style.height = \`\${frameR.height}px\`;
        }
      }
    });
    ro.observe(root);
    return () => ro.disconnect();
  }, [
    fit,
    fitBasis,
    minRadius,
    maxRadius,
    padFactor,
    overlayBlurColor,
    grayscale,
    imageBorderRadius,
    openedImageBorderRadius,
    openedImageWidth,
    openedImageHeight
  ]);

  useEffect(() => {
    applyTransform(rotationRef.current.x, rotationRef.current.y);
  }, []);

  const stopInertia = useCallback(() => {
    if (inertiaRAF.current) {
      cancelAnimationFrame(inertiaRAF.current);
      inertiaRAF.current = null;
    }
  }, []);

  const startInertia = useCallback(
    (vx, vy) => {
      const MAX_V = 1.4;
      let vX = clamp(vx, -MAX_V, MAX_V) * 80;
      let vY = clamp(vy, -MAX_V, MAX_V) * 80;
      let frames = 0;
      const d = clamp(dragDampening ?? 0.6, 0, 1);
      const frictionMul = 0.94 + 0.055 * d;
      const stopThreshold = 0.015 - 0.01 * d;
      const maxFrames = Math.round(90 + 270 * d);
      const step = () => {
        vX *= frictionMul;
        vY *= frictionMul;
        if (Math.abs(vX) < stopThreshold && Math.abs(vY) < stopThreshold) {
          inertiaRAF.current = null;
          return;
        }
        if (++frames > maxFrames) {
          inertiaRAF.current = null;
          return;
        }
        const nextX = clamp(rotationRef.current.x - vY / 200, -maxVerticalRotationDeg, maxVerticalRotationDeg);
        const nextY = wrapAngleSigned(rotationRef.current.y + vX / 200);
        rotationRef.current = { x: nextX, y: nextY };
        applyTransform(nextX, nextY);
        inertiaRAF.current = requestAnimationFrame(step);
      };
      stopInertia();
      inertiaRAF.current = requestAnimationFrame(step);
    },
    [dragDampening, maxVerticalRotationDeg, stopInertia]
  );

  useGesture(
    {
      onDragStart: ({ event }) => {
        if (focusedElRef.current) return;
        stopInertia();
        const evt = event;
        draggingRef.current = true;
        movedRef.current = false;
        startRotRef.current = { ...rotationRef.current };
        startPosRef.current = { x: evt.clientX, y: evt.clientY };
      },
      onDrag: ({ event, last, velocity = [0, 0], direction = [0, 0], movement }) => {
        if (focusedElRef.current || !draggingRef.current || !startPosRef.current) return;
        const evt = event;
        const dxTotal = evt.clientX - startPosRef.current.x;
        const dyTotal = evt.clientY - startPosRef.current.y;
        if (!movedRef.current) {
          const dist2 = dxTotal * dxTotal + dyTotal * dyTotal;
          if (dist2 > 16) movedRef.current = true;
        }
        const nextX = clamp(
          startRotRef.current.x - dyTotal / dragSensitivity,
          -maxVerticalRotationDeg,
          maxVerticalRotationDeg
        );
        const nextY = wrapAngleSigned(startRotRef.current.y + dxTotal / dragSensitivity);
        if (rotationRef.current.x !== nextX || rotationRef.current.y !== nextY) {
          rotationRef.current = { x: nextX, y: nextY };
          applyTransform(nextX, nextY);
        }
        if (last) {
          draggingRef.current = false;
          let [vMagX, vMagY] = velocity;
          const [dirX, dirY] = direction;
          let vx = vMagX * dirX;
          let vy = vMagY * dirY;
          if (Math.abs(vx) < 0.001 && Math.abs(vy) < 0.001 && Array.isArray(movement)) {
            const [mx, my] = movement;
            vx = clamp((mx / dragSensitivity) * 0.02, -1.2, 1.2);
            vy = clamp((my / dragSensitivity) * 0.02, -1.2, 1.2);
          }
          if (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005) startInertia(vx, vy);
          if (movedRef.current) lastDragEndAt.current = performance.now();
          movedRef.current = false;
        }
      }
    },
    { target: mainRef, eventOptions: { passive: true } }
  );

  useEffect(() => {
    const scrim = scrimRef.current;
    if (!scrim) return;
    const close = () => {
      if (performance.now() - openStartedAtRef.current < 250) return;
      const el = focusedElRef.current;
      if (!el) return;
      const parent = el.parentElement;
      const overlay = viewerRef.current?.querySelector('.enlarge');
      if (!overlay) return;
      const refDiv = parent.querySelector('.item__image--reference');
      const originalPos = originalTilePositionRef.current;
      if (!originalPos) {
        overlay.remove();
        if (refDiv) refDiv.remove();
        parent.style.setProperty('--rot-y-delta', '0deg');
        parent.style.setProperty('--rot-x-delta', '0deg');
        el.style.visibility = '';
        el.style.zIndex = 0;
        focusedElRef.current = null;
        rootRef.current?.removeAttribute('data-enlarging');
        openingRef.current = false;
        unlockScroll();
        return;
      }
      const currentRect = overlay.getBoundingClientRect();
      const rootRect = rootRef.current.getBoundingClientRect();
      const originalPosRelativeToRoot = {
        left: originalPos.left - rootRect.left,
        top: originalPos.top - rootRect.top,
        width: originalPos.width,
        height: originalPos.height
      };
      const overlayRelativeToRoot = {
        left: currentRect.left - rootRect.left,
        top: currentRect.top - rootRect.top,
        width: currentRect.width,
        height: currentRect.height
      };
      const animatingOverlay = document.createElement('div');
      animatingOverlay.className = 'enlarge-closing';
      animatingOverlay.style.cssText = \`position:absolute;left:\${overlayRelativeToRoot.left}px;top:\${overlayRelativeToRoot.top}px;width:\${overlayRelativeToRoot.width}px;height:\${overlayRelativeToRoot.height}px;z-index:9999;border-radius: var(--enlarge-radius, 32px);overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.35);transition:all \${enlargeTransitionMs}ms ease-out;pointer-events:none;margin:0;transform:none;\`;
      const originalImg = overlay.querySelector('img');
      if (originalImg) {
        const img = originalImg.cloneNode();
        img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
        animatingOverlay.appendChild(img);
      }
      overlay.remove();
      rootRef.current.appendChild(animatingOverlay);
      void animatingOverlay.getBoundingClientRect();
      requestAnimationFrame(() => {
        animatingOverlay.style.left = originalPosRelativeToRoot.left + 'px';
        animatingOverlay.style.top = originalPosRelativeToRoot.top + 'px';
        animatingOverlay.style.width = originalPosRelativeToRoot.width + 'px';
        animatingOverlay.style.height = originalPosRelativeToRoot.height + 'px';
        animatingOverlay.style.opacity = '0';
      });
      const cleanup = () => {
        animatingOverlay.remove();
        originalTilePositionRef.current = null;
        if (refDiv) refDiv.remove();
        parent.style.transition = 'none';
        el.style.transition = 'none';
        parent.style.setProperty('--rot-y-delta', '0deg');
        parent.style.setProperty('--rot-x-delta', '0deg');
        requestAnimationFrame(() => {
          el.style.visibility = '';
          el.style.opacity = '0';
          el.style.zIndex = 0;
          focusedElRef.current = null;
          rootRef.current?.removeAttribute('data-enlarging');
          requestAnimationFrame(() => {
            parent.style.transition = '';
            el.style.transition = 'opacity 300ms ease-out';
            requestAnimationFrame(() => {
              el.style.opacity = '1';
              setTimeout(() => {
                el.style.transition = '';
                el.style.opacity = '';
                openingRef.current = false;
                if (!draggingRef.current && rootRef.current?.getAttribute('data-enlarging') !== 'true')
                  document.body.classList.remove('dg-scroll-lock');
              }, 300);
            });
          });
        });
      };
      animatingOverlay.addEventListener('transitionend', cleanup, { once: true });
    };
    scrim.addEventListener('click', close);
    const onKey = e => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      scrim.removeEventListener('click', close);
      window.removeEventListener('keydown', onKey);
    };
  }, [enlargeTransitionMs, unlockScroll]);

  const openItemFromElement = useCallback(
    el => {
      if (openingRef.current) return;
      openingRef.current = true;
      openStartedAtRef.current = performance.now();
      lockScroll();
      const parent = el.parentElement;
      focusedElRef.current = el;
      el.setAttribute('data-focused', 'true');
      const offsetX = getDataNumber(parent, 'offsetX', 0);
      const offsetY = getDataNumber(parent, 'offsetY', 0);
      const sizeX = getDataNumber(parent, 'sizeX', 2);
      const sizeY = getDataNumber(parent, 'sizeY', 2);
      const parentRot = computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments);
      const parentY = normalizeAngle(parentRot.rotateY);
      const globalY = normalizeAngle(rotationRef.current.y);
      let rotY = -(parentY + globalY) % 360;
      if (rotY < -180) rotY += 360;
      const rotX = -parentRot.rotateX - rotationRef.current.x;
      parent.style.setProperty('--rot-y-delta', \`\${rotY}deg\`);
      parent.style.setProperty('--rot-x-delta', \`\${rotX}deg\`);
      const refDiv = document.createElement('div');
      refDiv.className = 'item__image item__image--reference';
      refDiv.style.opacity = '0';
      refDiv.style.transform = \`rotateX(\${-parentRot.rotateX}deg) rotateY(\${-parentRot.rotateY}deg)\`;
      parent.appendChild(refDiv);

      void refDiv.offsetHeight;

      const tileR = refDiv.getBoundingClientRect();
      const mainR = mainRef.current?.getBoundingClientRect();
      const frameR = frameRef.current?.getBoundingClientRect();

      if (!mainR || !frameR || tileR.width <= 0 || tileR.height <= 0) {
        openingRef.current = false;
        focusedElRef.current = null;
        parent.removeChild(refDiv);
        unlockScroll();
        return;
      }

      originalTilePositionRef.current = { left: tileR.left, top: tileR.top, width: tileR.width, height: tileR.height };
      el.style.visibility = 'hidden';
      el.style.zIndex = 0;
      const overlay = document.createElement('div');
      overlay.className = 'enlarge';
      overlay.style.position = 'absolute';
      overlay.style.left = frameR.left - mainR.left + 'px';
      overlay.style.top = frameR.top - mainR.top + 'px';
      overlay.style.width = frameR.width + 'px';
      overlay.style.height = frameR.height + 'px';
      overlay.style.opacity = '0';
      overlay.style.zIndex = '30';
      overlay.style.willChange = 'transform, opacity';
      overlay.style.transformOrigin = 'top left';
      overlay.style.transition = \`transform \${enlargeTransitionMs}ms ease, opacity \${enlargeTransitionMs}ms ease\`;
      const rawSrc = parent.dataset.src || el.querySelector('img')?.src || '';
      const img = document.createElement('img');
      img.src = rawSrc;
      overlay.appendChild(img);
      viewerRef.current.appendChild(overlay);
      const tx0 = tileR.left - frameR.left;
      const ty0 = tileR.top - frameR.top;
      const sx0 = tileR.width / frameR.width;
      const sy0 = tileR.height / frameR.height;

      const validSx0 = isFinite(sx0) && sx0 > 0 ? sx0 : 1;
      const validSy0 = isFinite(sy0) && sy0 > 0 ? sy0 : 1;

      overlay.style.transform = \`translate(\${tx0}px, \${ty0}px) scale(\${validSx0}, \${validSy0})\`;

      setTimeout(() => {
        if (!overlay.parentElement) return;
        overlay.style.opacity = '1';
        overlay.style.transform = 'translate(0px, 0px) scale(1, 1)';
        rootRef.current?.setAttribute('data-enlarging', 'true');
      }, 16);

      const wantsResize = openedImageWidth || openedImageHeight;
      if (wantsResize) {
        const onFirstEnd = ev => {
          if (ev.propertyName !== 'transform') return;
          overlay.removeEventListener('transitionend', onFirstEnd);
          const prevTransition = overlay.style.transition;
          overlay.style.transition = 'none';
          const tempWidth = openedImageWidth || \`\${frameR.width}px\`;
          const tempHeight = openedImageHeight || \`\${frameR.height}px\`;
          overlay.style.width = tempWidth;
          overlay.style.height = tempHeight;
          const newRect = overlay.getBoundingClientRect();
          overlay.style.width = frameR.width + 'px';
          overlay.style.height = frameR.height + 'px';
          void overlay.offsetWidth;
          overlay.style.transition = \`left \${enlargeTransitionMs}ms ease, top \${enlargeTransitionMs}ms ease, width \${enlargeTransitionMs}ms ease, height \${enlargeTransitionMs}ms ease\`;
          const centeredLeft = frameR.left - mainR.left + (frameR.width - newRect.width) / 2;
          const centeredTop = frameR.top - mainR.top + (frameR.height - newRect.height) / 2;
          requestAnimationFrame(() => {
            overlay.style.left = \`\${centeredLeft}px\`;
            overlay.style.top = \`\${centeredTop}px\`;
            overlay.style.width = tempWidth;
            overlay.style.height = tempHeight;
          });
          const cleanupSecond = () => {
            overlay.removeEventListener('transitionend', cleanupSecond);
            overlay.style.transition = prevTransition;
          };
          overlay.addEventListener('transitionend', cleanupSecond, { once: true });
        };
        overlay.addEventListener('transitionend', onFirstEnd);
      }
    },
    [enlargeTransitionMs, lockScroll, openedImageHeight, openedImageWidth, segments, unlockScroll]
  );

  const onTileClick = useCallback(
    e => {
      if (draggingRef.current) return;
      if (movedRef.current) return;
      if (performance.now() - lastDragEndAt.current < 80) return;
      if (openingRef.current) return;
      openItemFromElement(e.currentTarget);
    },
    [openItemFromElement]
  );

  const onTilePointerUp = useCallback(
    e => {
      if (e.pointerType !== 'touch') return;
      if (draggingRef.current) return;
      if (movedRef.current) return;
      if (performance.now() - lastDragEndAt.current < 80) return;
      if (openingRef.current) return;
      openItemFromElement(e.currentTarget);
    },
    [openItemFromElement]
  );

  useEffect(() => {
    return () => {
      document.body.classList.remove('dg-scroll-lock');
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="sphere-root"
      style={{
        ['--segments-x']: segments,
        ['--segments-y']: segments,
        ['--overlay-blur-color']: overlayBlurColor,
        ['--tile-radius']: imageBorderRadius,
        ['--enlarge-radius']: openedImageBorderRadius,
        ['--image-filter']: grayscale ? 'grayscale(1)' : 'none'
      }}
    >
      <main ref={mainRef} className="sphere-main">
        <div className="stage">
          <div ref={sphereRef} className="sphere">
            {items.map((it, i) => (
              <div
                key={\`\${it.x},\${it.y},\${i}\`}
                className="item"
                data-src={it.src}
                data-offset-x={it.x}
                data-offset-y={it.y}
                data-size-x={it.sizeX}
                data-size-y={it.sizeY}
                style={{
                  ['--offset-x']: it.x,
                  ['--offset-y']: it.y,
                  ['--item-size-x']: it.sizeX,
                  ['--item-size-y']: it.sizeY
                }}
              >
                <div
                  className="item__image"
                  role="button"
                  tabIndex={0}
                  aria-label={it.alt || 'Open image'}
                  onClick={onTileClick}
                  onPointerUp={onTilePointerUp}
                >
                  <img src={it.src} draggable={false} alt={it.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overlay" />
        <div className="overlay overlay--blur" />
        <div className="edge-fade edge-fade--top" />
        <div className="edge-fade edge-fade--bottom" />

        <div className="viewer" ref={viewerRef}>
          <div ref={scrimRef} className="scrim" />
          <div ref={frameRef} className="frame" />
        </div>
      </main>
    </div>
  );
}
`,Un=`.sphere-root {
  position: relative;
  width: 100%;
  height: 100%;
  --radius: 520px;
  --viewer-pad: 72px;
  --circ: calc(var(--radius) * 3.14);
  --rot-y: calc((360deg / var(--segments-x)) / 2);
  --rot-x: calc((360deg / var(--segments-y)) / 2);
  --item-width: calc(var(--circ) / var(--segments-x));
  --item-height: calc(var(--circ) / var(--segments-y));
}

.sphere-root * {
  box-sizing: border-box;
}

.sphere,
.item,
.item__image {
  transform-style: preserve-3d;
}

main.sphere-main {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  overflow: hidden;
  touch-action: none;
  user-select: none;
  -webkit-user-select: none;
  background: transparent;
}

.stage {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  perspective: calc(var(--radius) * 2);
  perspective-origin: 50% 50%;
  contain: layout paint size;
}

.sphere {
  transform: translateZ(calc(var(--radius) * -1));
  will-change: transform;
}

.overlay,
.overlay--blur {
  position: absolute;
  inset: 0;
  margin: auto;
  z-index: 3;
  pointer-events: none;
}

.overlay {
  background-image: radial-gradient(rgba(235, 235, 235, 0) 65%, var(--overlay-blur-color, #060010) 100%);
}

.overlay--blur {
  -webkit-mask-image: radial-gradient(rgba(235, 235, 235, 0) 70%, var(--overlay-blur-color, #060010) 90%);
  mask-image: radial-gradient(rgba(235, 235, 235, 0) 70%, var(--overlay-blur-color, #060010) 90%);
  backdrop-filter: blur(3px);
}

.item {
  width: calc(var(--item-width) * var(--item-size-x));
  height: calc(var(--item-height) * var(--item-size-y));
  position: absolute;
  top: -999px;
  bottom: -999px;
  left: -999px;
  right: -999px;
  margin: auto;
  transform-origin: 50% 50%;
  backface-visibility: hidden;
  transition: transform 300ms;
  transform: rotateY(calc(var(--rot-y) * (var(--offset-x) + ((var(--item-size-x) - 1) / 2)) + var(--rot-y-delta, 0deg)))
    rotateX(calc(var(--rot-x) * (var(--offset-y) - ((var(--item-size-y) - 1) / 2)) + var(--rot-x-delta, 0deg)))
    translateZ(var(--radius));
}

.item__image {
  position: absolute;
  display: block;
  inset: 10px;
  border-radius: var(--tile-radius, 12px);
  background: transparent;
  overflow: hidden;
  backface-visibility: hidden;
  transition: transform 300ms;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  pointer-events: auto;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.item__image:focus {
  outline: none;
}

.item__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  backface-visibility: hidden;
  filter: var(--image-filter, none);
}

.viewer {
  position: absolute;
  inset: 0;
  z-index: 20;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--viewer-pad);
}

.viewer .frame {
  height: 100%;
  aspect-ratio: 1;
  border-radius: var(--enlarge-radius, 32px);
  display: flex;
}

@media (max-aspect-ratio: 1/1) {
  .viewer .frame {
    height: auto;
    width: 100%;
  }
}

.viewer .scrim {
  position: absolute;
  inset: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
  pointer-events: none;
  opacity: 0;
  transition: opacity 500ms ease;
  backdrop-filter: blur(3px);
}

.sphere-root[data-enlarging='true'] .viewer .scrim {
  opacity: 1;
  pointer-events: all;
}

.viewer .enlarge {
  position: absolute;
  z-index: 30;
  border-radius: var(--enlarge-radius, 32px);
  overflow: hidden;
  transition:
    transform 500ms ease,
    opacity 500ms ease;
  transform-origin: top left;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
}

.viewer .enlarge img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: var(--image-filter, none);
}

.sphere-root .enlarge-closing img {
  filter: var(--image-filter, none);
}

.edge-fade {
  position: absolute;
  left: 0;
  right: 0;
  height: 120px;
  z-index: 5;
  pointer-events: none;
  background: linear-gradient(to bottom, transparent, var(--overlay-blur-color, #060010));
}

.edge-fade--top {
  top: 0;
  transform: rotate(180deg);
}

.edge-fade--bottom {
  bottom: 0;
}
`,Kn=`import { useEffect, useMemo, useRef, useCallback } from 'react';
import { useGesture } from '@use-gesture/react';

const DEFAULT_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1755331039789-7e5680e26e8f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Abstract art'
  },
  {
    src: 'https://images.unsplash.com/photo-1755569309049-98410b94f66d?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Modern sculpture'
  },
  {
    src: 'https://images.unsplash.com/photo-1755497595318-7e5e3523854f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Digital artwork'
  },
  {
    src: 'https://images.unsplash.com/photo-1755353985163-c2a0fe5ac3d8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Contemporary art'
  },
  {
    src: 'https://images.unsplash.com/photo-1745965976680-d00be7dc0377?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Geometric pattern'
  },
  {
    src: 'https://images.unsplash.com/photo-1752588975228-21f44630bb3c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Textured surface'
  },
  {
    src: 'https://pbs.twimg.com/media/Gyla7NnXMAAXSo_?format=jpg&name=large',
    alt: 'Social media image'
  }
];

const DEFAULTS = {
  maxVerticalRotationDeg: 5,
  dragSensitivity: 20,
  enlargeTransitionMs: 300,
  segments: 35
};

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const normalizeAngle = d => ((d % 360) + 360) % 360;
const wrapAngleSigned = deg => {
  const a = (((deg + 180) % 360) + 360) % 360;
  return a - 180;
};
const getDataNumber = (el, name, fallback) => {
  const attr = el.dataset[name] ?? el.getAttribute(\`data-\${name}\`);
  const n = attr == null ? NaN : parseFloat(attr);
  return Number.isFinite(n) ? n : fallback;
};

function buildItems(pool, seg) {
  const xCols = Array.from({ length: seg }, (_, i) => -37 + i * 2);
  const evenYs = [-4, -2, 0, 2, 4];
  const oddYs = [-3, -1, 1, 3, 5];

  const coords = xCols.flatMap((x, c) => {
    const ys = c % 2 === 0 ? evenYs : oddYs;
    return ys.map(y => ({ x, y, sizeX: 2, sizeY: 2 }));
  });

  const totalSlots = coords.length;
  if (pool.length === 0) {
    return coords.map(c => ({ ...c, src: '', alt: '' }));
  }
  if (pool.length > totalSlots) {
    console.warn(
      \`[DomeGallery] Provided image count (\${pool.length}) exceeds available tiles (\${totalSlots}). Some images will not be shown.\`
    );
  }

  const normalizedImages = pool.map(image => {
    if (typeof image === 'string') {
      return { src: image, alt: '' };
    }
    return { src: image.src || '', alt: image.alt || '' };
  });

  const usedImages = Array.from({ length: totalSlots }, (_, i) => normalizedImages[i % normalizedImages.length]);

  for (let i = 1; i < usedImages.length; i++) {
    if (usedImages[i].src === usedImages[i - 1].src) {
      for (let j = i + 1; j < usedImages.length; j++) {
        if (usedImages[j].src !== usedImages[i].src) {
          const tmp = usedImages[i];
          usedImages[i] = usedImages[j];
          usedImages[j] = tmp;
          break;
        }
      }
    }
  }

  return coords.map((c, i) => ({
    ...c,
    src: usedImages[i].src,
    alt: usedImages[i].alt
  }));
}

function computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments) {
  const unit = 360 / segments / 2;
  const rotateY = unit * (offsetX + (sizeX - 1) / 2);
  const rotateX = unit * (offsetY - (sizeY - 1) / 2);
  return { rotateX, rotateY };
}

export default function DomeGallery({
  images = DEFAULT_IMAGES,
  fit = 0.5,
  fitBasis = 'auto',
  minRadius = 600,
  maxRadius = Infinity,
  padFactor = 0.25,
  overlayBlurColor = '#060010',
  maxVerticalRotationDeg = DEFAULTS.maxVerticalRotationDeg,
  dragSensitivity = DEFAULTS.dragSensitivity,
  enlargeTransitionMs = DEFAULTS.enlargeTransitionMs,
  segments = DEFAULTS.segments,
  dragDampening = 2,
  openedImageWidth = '400px',
  openedImageHeight = '400px',
  imageBorderRadius = '30px',
  openedImageBorderRadius = '30px',
  grayscale = true
}) {
  const rootRef = useRef(null);
  const mainRef = useRef(null);
  const sphereRef = useRef(null);
  const frameRef = useRef(null);
  const viewerRef = useRef(null);
  const scrimRef = useRef(null);
  const focusedElRef = useRef(null);
  const originalTilePositionRef = useRef(null);

  const rotationRef = useRef({ x: 0, y: 0 });
  const startRotRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef(null);
  const draggingRef = useRef(false);
  const cancelTapRef = useRef(false);
  const movedRef = useRef(false);
  const inertiaRAF = useRef(null);
  const pointerTypeRef = useRef('mouse');
  const tapTargetRef = useRef(null);
  const openingRef = useRef(false);
  const openStartedAtRef = useRef(0);
  const lastDragEndAt = useRef(0);

  const scrollLockedRef = useRef(false);
  const lockScroll = useCallback(() => {
    if (scrollLockedRef.current) return;
    scrollLockedRef.current = true;
    document.body.classList.add('dg-scroll-lock');
  }, []);
  const unlockScroll = useCallback(() => {
    if (!scrollLockedRef.current) return;
    if (rootRef.current?.getAttribute('data-enlarging') === 'true') return;
    scrollLockedRef.current = false;
    document.body.classList.remove('dg-scroll-lock');
  }, []);

  const items = useMemo(() => buildItems(images, segments), [images, segments]);

  const applyTransform = (xDeg, yDeg) => {
    const el = sphereRef.current;
    if (el) {
      el.style.transform = \`translateZ(calc(var(--radius) * -1)) rotateX(\${xDeg}deg) rotateY(\${yDeg}deg)\`;
    }
  };

  const lockedRadiusRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver(entries => {
      const cr = entries[0].contentRect;
      const w = Math.max(1, cr.width),
        h = Math.max(1, cr.height);
      const minDim = Math.min(w, h),
        maxDim = Math.max(w, h),
        aspect = w / h;
      let basis;
      switch (fitBasis) {
        case 'min':
          basis = minDim;
          break;
        case 'max':
          basis = maxDim;
          break;
        case 'width':
          basis = w;
          break;
        case 'height':
          basis = h;
          break;
        default:
          basis = aspect >= 1.3 ? w : minDim;
      }
      let radius = basis * fit;
      const heightGuard = h * 1.35;
      radius = Math.min(radius, heightGuard);
      radius = clamp(radius, minRadius, maxRadius);
      lockedRadiusRef.current = Math.round(radius);

      const viewerPad = Math.max(8, Math.round(minDim * padFactor));
      root.style.setProperty('--radius', \`\${lockedRadiusRef.current}px\`);
      root.style.setProperty('--viewer-pad', \`\${viewerPad}px\`);
      root.style.setProperty('--overlay-blur-color', overlayBlurColor);
      root.style.setProperty('--tile-radius', imageBorderRadius);
      root.style.setProperty('--enlarge-radius', openedImageBorderRadius);
      root.style.setProperty('--image-filter', grayscale ? 'grayscale(1)' : 'none');
      applyTransform(rotationRef.current.x, rotationRef.current.y);

      const enlargedOverlay = viewerRef.current?.querySelector('.enlarge');
      if (enlargedOverlay && frameRef.current && mainRef.current) {
        const frameR = frameRef.current.getBoundingClientRect();
        const mainR = mainRef.current.getBoundingClientRect();

        const hasCustomSize = openedImageWidth && openedImageHeight;
        if (hasCustomSize) {
          const tempDiv = document.createElement('div');
          tempDiv.style.cssText = \`position: absolute; width: \${openedImageWidth}; height: \${openedImageHeight}; visibility: hidden;\`;
          document.body.appendChild(tempDiv);
          const tempRect = tempDiv.getBoundingClientRect();
          document.body.removeChild(tempDiv);

          const centeredLeft = frameR.left - mainR.left + (frameR.width - tempRect.width) / 2;
          const centeredTop = frameR.top - mainR.top + (frameR.height - tempRect.height) / 2;

          enlargedOverlay.style.left = \`\${centeredLeft}px\`;
          enlargedOverlay.style.top = \`\${centeredTop}px\`;
        } else {
          enlargedOverlay.style.left = \`\${frameR.left - mainR.left}px\`;
          enlargedOverlay.style.top = \`\${frameR.top - mainR.top}px\`;
          enlargedOverlay.style.width = \`\${frameR.width}px\`;
          enlargedOverlay.style.height = \`\${frameR.height}px\`;
        }
      }
    });
    ro.observe(root);
    return () => ro.disconnect();
  }, [
    fit,
    fitBasis,
    minRadius,
    maxRadius,
    padFactor,
    overlayBlurColor,
    grayscale,
    imageBorderRadius,
    openedImageBorderRadius,
    openedImageWidth,
    openedImageHeight
  ]);

  useEffect(() => {
    applyTransform(rotationRef.current.x, rotationRef.current.y);
  }, []);

  const stopInertia = useCallback(() => {
    if (inertiaRAF.current) {
      cancelAnimationFrame(inertiaRAF.current);
      inertiaRAF.current = null;
    }
  }, []);

  const startInertia = useCallback(
    (vx, vy) => {
      const MAX_V = 1.4;
      let vX = clamp(vx, -MAX_V, MAX_V) * 80;
      let vY = clamp(vy, -MAX_V, MAX_V) * 80;
      let frames = 0;
      const d = clamp(dragDampening ?? 0.6, 0, 1);
      const frictionMul = 0.94 + 0.055 * d;
      const stopThreshold = 0.015 - 0.01 * d;
      const maxFrames = Math.round(90 + 270 * d);
      const step = () => {
        vX *= frictionMul;
        vY *= frictionMul;
        if (Math.abs(vX) < stopThreshold && Math.abs(vY) < stopThreshold) {
          inertiaRAF.current = null;
          return;
        }
        if (++frames > maxFrames) {
          inertiaRAF.current = null;
          return;
        }
        const nextX = clamp(rotationRef.current.x - vY / 200, -maxVerticalRotationDeg, maxVerticalRotationDeg);
        const nextY = wrapAngleSigned(rotationRef.current.y + vX / 200);
        rotationRef.current = { x: nextX, y: nextY };
        applyTransform(nextX, nextY);
        inertiaRAF.current = requestAnimationFrame(step);
      };
      stopInertia();
      inertiaRAF.current = requestAnimationFrame(step);
    },
    [dragDampening, maxVerticalRotationDeg, stopInertia]
  );

  useGesture(
    {
      onDragStart: ({ event }) => {
        if (focusedElRef.current) return;
        stopInertia();

        pointerTypeRef.current = event.pointerType || 'mouse';
        if (pointerTypeRef.current === 'touch') event.preventDefault();
        if (pointerTypeRef.current === 'touch') lockScroll();
        draggingRef.current = true;
        cancelTapRef.current = false;
        movedRef.current = false;
        startRotRef.current = { ...rotationRef.current };
        startPosRef.current = { x: event.clientX, y: event.clientY };
        const potential = event.target.closest?.('.item__image');
        tapTargetRef.current = potential || null;
      },
      onDrag: ({ event, last, velocity: velArr = [0, 0], direction: dirArr = [0, 0], movement }) => {
        if (focusedElRef.current || !draggingRef.current || !startPosRef.current) return;

        if (pointerTypeRef.current === 'touch') event.preventDefault();

        const dxTotal = event.clientX - startPosRef.current.x;
        const dyTotal = event.clientY - startPosRef.current.y;

        if (!movedRef.current) {
          const dist2 = dxTotal * dxTotal + dyTotal * dyTotal;
          if (dist2 > 16) movedRef.current = true;
        }

        const nextX = clamp(
          startRotRef.current.x - dyTotal / dragSensitivity,
          -maxVerticalRotationDeg,
          maxVerticalRotationDeg
        );
        const nextY = startRotRef.current.y + dxTotal / dragSensitivity;

        const cur = rotationRef.current;
        if (cur.x !== nextX || cur.y !== nextY) {
          rotationRef.current = { x: nextX, y: nextY };
          applyTransform(nextX, nextY);
        }

        if (last) {
          draggingRef.current = false;
          let isTap = false;

          if (startPosRef.current) {
            const dx = event.clientX - startPosRef.current.x;
            const dy = event.clientY - startPosRef.current.y;
            const dist2 = dx * dx + dy * dy;
            const TAP_THRESH_PX = pointerTypeRef.current === 'touch' ? 10 : 6;
            if (dist2 <= TAP_THRESH_PX * TAP_THRESH_PX) {
              isTap = true;
            }
          }

          let [vMagX, vMagY] = velArr;
          const [dirX, dirY] = dirArr;
          let vx = vMagX * dirX;
          let vy = vMagY * dirY;

          if (!isTap && Math.abs(vx) < 0.001 && Math.abs(vy) < 0.001 && Array.isArray(movement)) {
            const [mx, my] = movement;
            vx = (mx / dragSensitivity) * 0.02;
            vy = (my / dragSensitivity) * 0.02;
          }

          if (!isTap && (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005)) {
            startInertia(vx, vy);
          }
          startPosRef.current = null;
          cancelTapRef.current = !isTap;

          if (isTap && tapTargetRef.current && !focusedElRef.current) {
            openItemFromElement(tapTargetRef.current);
          }
          tapTargetRef.current = null;

          if (cancelTapRef.current) setTimeout(() => (cancelTapRef.current = false), 120);
          if (movedRef.current) lastDragEndAt.current = performance.now();
          movedRef.current = false;
          if (pointerTypeRef.current === 'touch') unlockScroll();
        }
      }
    },
    { target: mainRef, eventOptions: { passive: false } }
  );

  useEffect(() => {
    const scrim = scrimRef.current;
    if (!scrim) return;

    const close = () => {
      if (performance.now() - openStartedAtRef.current < 250) return;
      const el = focusedElRef.current;
      if (!el) return;
      const parent = el.parentElement;
      const overlay = viewerRef.current?.querySelector('.enlarge');
      if (!overlay) return;

      const refDiv = parent.querySelector('.item__image--reference');

      const originalPos = originalTilePositionRef.current;
      if (!originalPos) {
        overlay.remove();
        if (refDiv) refDiv.remove();
        parent.style.setProperty('--rot-y-delta', \`0deg\`);
        parent.style.setProperty('--rot-x-delta', \`0deg\`);
        el.style.visibility = '';
        el.style.zIndex = 0;
        focusedElRef.current = null;
        rootRef.current?.removeAttribute('data-enlarging');
        openingRef.current = false;
        return;
      }

      const currentRect = overlay.getBoundingClientRect();
      const rootRect = rootRef.current.getBoundingClientRect();

      const originalPosRelativeToRoot = {
        left: originalPos.left - rootRect.left,
        top: originalPos.top - rootRect.top,
        width: originalPos.width,
        height: originalPos.height
      };

      const overlayRelativeToRoot = {
        left: currentRect.left - rootRect.left,
        top: currentRect.top - rootRect.top,
        width: currentRect.width,
        height: currentRect.height
      };

      const animatingOverlay = document.createElement('div');
      animatingOverlay.className = 'enlarge-closing';
      animatingOverlay.style.cssText = \`
        position: absolute;
        left: \${overlayRelativeToRoot.left}px;
        top: \${overlayRelativeToRoot.top}px;
        width: \${overlayRelativeToRoot.width}px;
        height: \${overlayRelativeToRoot.height}px;
        z-index: 9999;
        border-radius: \${openedImageBorderRadius};
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0,0,0,.35);
        transition: all \${enlargeTransitionMs}ms ease-out;
        pointer-events: none;
        margin: 0;
        transform: none;
        filter: \${grayscale ? 'grayscale(1)' : 'none'};
      \`;

      const originalImg = overlay.querySelector('img');
      if (originalImg) {
        const img = originalImg.cloneNode();
        img.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
        animatingOverlay.appendChild(img);
      }

      overlay.remove();
      rootRef.current.appendChild(animatingOverlay);

      void animatingOverlay.getBoundingClientRect();

      requestAnimationFrame(() => {
        animatingOverlay.style.left = originalPosRelativeToRoot.left + 'px';
        animatingOverlay.style.top = originalPosRelativeToRoot.top + 'px';
        animatingOverlay.style.width = originalPosRelativeToRoot.width + 'px';
        animatingOverlay.style.height = originalPosRelativeToRoot.height + 'px';
        animatingOverlay.style.opacity = '0';
      });

      const cleanup = () => {
        animatingOverlay.remove();
        originalTilePositionRef.current = null;

        if (refDiv) refDiv.remove();
        parent.style.transition = 'none';
        el.style.transition = 'none';

        parent.style.setProperty('--rot-y-delta', \`0deg\`);
        parent.style.setProperty('--rot-x-delta', \`0deg\`);

        requestAnimationFrame(() => {
          el.style.visibility = '';
          el.style.opacity = '0';
          el.style.zIndex = 0;
          focusedElRef.current = null;
          rootRef.current?.removeAttribute('data-enlarging');

          requestAnimationFrame(() => {
            parent.style.transition = '';
            el.style.transition = 'opacity 300ms ease-out';

            requestAnimationFrame(() => {
              el.style.opacity = '1';
              setTimeout(() => {
                el.style.transition = '';
                el.style.opacity = '';
                openingRef.current = false;
                if (!draggingRef.current && rootRef.current?.getAttribute('data-enlarging') !== 'true')
                  document.body.classList.remove('dg-scroll-lock');
              }, 300);
            });
          });
        });
      };

      animatingOverlay.addEventListener('transitionend', cleanup, {
        once: true
      });
    };

    scrim.addEventListener('click', close);
    const onKey = e => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      scrim.removeEventListener('click', close);
      window.removeEventListener('keydown', onKey);
    };
  }, [enlargeTransitionMs, openedImageBorderRadius, grayscale]);

  const openItemFromElement = el => {
    if (openingRef.current) return;
    openingRef.current = true;
    openStartedAtRef.current = performance.now();
    lockScroll();
    const parent = el.parentElement;
    focusedElRef.current = el;
    el.setAttribute('data-focused', 'true');

    const offsetX = getDataNumber(parent, 'offsetX', 0);
    const offsetY = getDataNumber(parent, 'offsetY', 0);
    const sizeX = getDataNumber(parent, 'sizeX', 2);
    const sizeY = getDataNumber(parent, 'sizeY', 2);

    const parentRot = computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments);
    const parentY = normalizeAngle(parentRot.rotateY);
    const globalY = normalizeAngle(rotationRef.current.y);
    let rotY = -(parentY + globalY) % 360;
    if (rotY < -180) rotY += 360;
    const rotX = -parentRot.rotateX - rotationRef.current.x;

    parent.style.setProperty('--rot-y-delta', \`\${rotY}deg\`);
    parent.style.setProperty('--rot-x-delta', \`\${rotX}deg\`);

    const refDiv = document.createElement('div');
    refDiv.className = 'item__image item__image--reference opacity-0';
    refDiv.style.transform = \`rotateX(\${-parentRot.rotateX}deg) rotateY(\${-parentRot.rotateY}deg)\`;
    parent.appendChild(refDiv);

    void refDiv.offsetHeight;

    const tileR = refDiv.getBoundingClientRect();
    const mainR = mainRef.current?.getBoundingClientRect();
    const frameR = frameRef.current?.getBoundingClientRect();

    if (!mainR || !frameR || tileR.width <= 0 || tileR.height <= 0) {
      openingRef.current = false;
      focusedElRef.current = null;
      parent.removeChild(refDiv);
      unlockScroll();
      return;
    }

    originalTilePositionRef.current = {
      left: tileR.left,
      top: tileR.top,
      width: tileR.width,
      height: tileR.height
    };

    el.style.visibility = 'hidden';
    el.style.zIndex = 0;

    const overlay = document.createElement('div');
    overlay.className = 'enlarge';
    overlay.style.position = 'absolute';
    overlay.style.left = frameR.left - mainR.left + 'px';
    overlay.style.top = frameR.top - mainR.top + 'px';
    overlay.style.width = frameR.width + 'px';
    overlay.style.height = frameR.height + 'px';
    overlay.style.opacity = '0';
    overlay.style.zIndex = '30';
    overlay.style.willChange = 'transform, opacity';
    overlay.style.transformOrigin = 'top left';
    overlay.style.transition = \`transform \${enlargeTransitionMs}ms ease, opacity \${enlargeTransitionMs}ms ease\`;
    overlay.style.borderRadius = openedImageBorderRadius;
    overlay.style.overflow = 'hidden';
    overlay.style.boxShadow = '0 10px 30px rgba(0,0,0,.35)';

    const rawSrc = parent.dataset.src || el.querySelector('img')?.src || '';
    const rawAlt = parent.dataset.alt || el.querySelector('img')?.alt || '';
    const img = document.createElement('img');
    img.src = rawSrc;
    img.alt = rawAlt;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.filter = grayscale ? 'grayscale(1)' : 'none';
    overlay.appendChild(img);
    viewerRef.current.appendChild(overlay);

    const tx0 = tileR.left - frameR.left;
    const ty0 = tileR.top - frameR.top;
    const sx0 = tileR.width / frameR.width;
    const sy0 = tileR.height / frameR.height;

    const validSx0 = isFinite(sx0) && sx0 > 0 ? sx0 : 1;
    const validSy0 = isFinite(sy0) && sy0 > 0 ? sy0 : 1;

    overlay.style.transform = \`translate(\${tx0}px, \${ty0}px) scale(\${validSx0}, \${validSy0})\`;

    setTimeout(() => {
      if (!overlay.parentElement) return;
      overlay.style.opacity = '1';
      overlay.style.transform = 'translate(0px, 0px) scale(1, 1)';
      rootRef.current?.setAttribute('data-enlarging', 'true');
    }, 16);

    const wantsResize = openedImageWidth || openedImageHeight;
    if (wantsResize) {
      const onFirstEnd = ev => {
        if (ev.propertyName !== 'transform') return;
        overlay.removeEventListener('transitionend', onFirstEnd);
        const prevTransition = overlay.style.transition;
        overlay.style.transition = 'none';
        const tempWidth = openedImageWidth || \`\${frameR.width}px\`;
        const tempHeight = openedImageHeight || \`\${frameR.height}px\`;
        overlay.style.width = tempWidth;
        overlay.style.height = tempHeight;
        const newRect = overlay.getBoundingClientRect();
        overlay.style.width = frameR.width + 'px';
        overlay.style.height = frameR.height + 'px';
        void overlay.offsetWidth;
        overlay.style.transition = \`left \${enlargeTransitionMs}ms ease, top \${enlargeTransitionMs}ms ease, width \${enlargeTransitionMs}ms ease, height \${enlargeTransitionMs}ms ease\`;
        const centeredLeft = frameR.left - mainR.left + (frameR.width - newRect.width) / 2;
        const centeredTop = frameR.top - mainR.top + (frameR.height - newRect.height) / 2;
        requestAnimationFrame(() => {
          overlay.style.left = \`\${centeredLeft}px\`;
          overlay.style.top = \`\${centeredTop}px\`;
          overlay.style.width = tempWidth;
          overlay.style.height = tempHeight;
        });
        const cleanupSecond = () => {
          overlay.removeEventListener('transitionend', cleanupSecond);
          overlay.style.transition = prevTransition;
        };
        overlay.addEventListener('transitionend', cleanupSecond, {
          once: true
        });
      };
      overlay.addEventListener('transitionend', onFirstEnd);
    }
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('dg-scroll-lock');
    };
  }, []);

  const cssStyles = \`
    .sphere-root {
      --radius: 520px;
      --viewer-pad: 72px;
      --circ: calc(var(--radius) * 3.14);
      --rot-y: calc((360deg / var(--segments-x)) / 2);
      --rot-x: calc((360deg / var(--segments-y)) / 2);
      --item-width: calc(var(--circ) / var(--segments-x));
      --item-height: calc(var(--circ) / var(--segments-y));
    }
    
    .sphere-root * {
      box-sizing: border-box;
    }
    .sphere, .sphere-item, .item__image { transform-style: preserve-3d; }
    
    .stage {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      position: absolute;
      inset: 0;
      margin: auto;
      perspective: calc(var(--radius) * 2);
      perspective-origin: 50% 50%;
    }
    
    .sphere {
      transform: translateZ(calc(var(--radius) * -1));
      will-change: transform;
      position: absolute;
    }
    
    .sphere-item {
      width: calc(var(--item-width) * var(--item-size-x));
      height: calc(var(--item-height) * var(--item-size-y));
      position: absolute;
      top: -999px;
      bottom: -999px;
      left: -999px;
      right: -999px;
      margin: auto;
      transform-origin: 50% 50%;
      backface-visibility: hidden;
      transition: transform 300ms;
      transform: rotateY(calc(var(--rot-y) * (var(--offset-x) + ((var(--item-size-x) - 1) / 2)) + var(--rot-y-delta, 0deg))) 
                 rotateX(calc(var(--rot-x) * (var(--offset-y) - ((var(--item-size-y) - 1) / 2)) + var(--rot-x-delta, 0deg))) 
                 translateZ(var(--radius));
    }
    
    .sphere-root[data-enlarging="true"] .scrim {
      opacity: 1 !important;
      pointer-events: all !important;
    }
    
    @media (max-aspect-ratio: 1/1) {
      .viewer-frame {
        height: auto !important;
        width: 100% !important;
      }
    }
    
    // body.dg-scroll-lock {
    //   position: fixed !important;
    //   top: 0;
    //   left: 0;
    //   width: 100% !important;
    //   height: 100% !important;
    //   overflow: hidden !important;
    //   touch-action: none !important;
    //   overscroll-behavior: contain !important;
    // }
    .item__image {
      position: absolute;
      inset: 10px;
      border-radius: var(--tile-radius, 12px);
      overflow: hidden;
      cursor: pointer;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      transition: transform 300ms;
      pointer-events: auto;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    .item__image--reference {
      position: absolute;
      inset: 10px;
      pointer-events: none;
    }
  \`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <div
        ref={rootRef}
        className="sphere-root relative w-full h-full"
        style={{
          ['--segments-x']: segments,
          ['--segments-y']: segments,
          ['--overlay-blur-color']: overlayBlurColor,
          ['--tile-radius']: imageBorderRadius,
          ['--enlarge-radius']: openedImageBorderRadius,
          ['--image-filter']: grayscale ? 'grayscale(1)' : 'none'
        }}
      >
        <main
          ref={mainRef}
          className="absolute inset-0 grid place-items-center overflow-hidden select-none bg-transparent"
          style={{
            touchAction: 'none',
            WebkitUserSelect: 'none'
          }}
        >
          <div className="stage">
            <div ref={sphereRef} className="sphere">
              {items.map((it, i) => (
                <div
                  key={\`\${it.x},\${it.y},\${i}\`}
                  className="sphere-item absolute m-auto"
                  data-src={it.src}
                  data-alt={it.alt}
                  data-offset-x={it.x}
                  data-offset-y={it.y}
                  data-size-x={it.sizeX}
                  data-size-y={it.sizeY}
                  style={{
                    ['--offset-x']: it.x,
                    ['--offset-y']: it.y,
                    ['--item-size-x']: it.sizeX,
                    ['--item-size-y']: it.sizeY,
                    top: '-999px',
                    bottom: '-999px',
                    left: '-999px',
                    right: '-999px'
                  }}
                >
                  <div
                    className="item__image absolute block overflow-hidden cursor-pointer bg-gray-200 transition-transform duration-300"
                    role="button"
                    tabIndex={0}
                    aria-label={it.alt || 'Open image'}
                    onClick={e => {
                      if (draggingRef.current) return;
                      if (movedRef.current) return;
                      if (performance.now() - lastDragEndAt.current < 80) return;
                      if (openingRef.current) return;
                      openItemFromElement(e.currentTarget);
                    }}
                    onPointerUp={e => {
                      if (e.pointerType !== 'touch') return;
                      if (draggingRef.current) return;
                      if (movedRef.current) return;
                      if (performance.now() - lastDragEndAt.current < 80) return;
                      if (openingRef.current) return;
                      openItemFromElement(e.currentTarget);
                    }}
                    style={{
                      inset: '10px',
                      borderRadius: \`var(--tile-radius, \${imageBorderRadius})\`,
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    <img
                      src={it.src}
                      draggable={false}
                      alt={it.alt}
                      className="w-full h-full object-cover pointer-events-none"
                      style={{
                        backfaceVisibility: 'hidden',
                        filter: \`var(--image-filter, \${grayscale ? 'grayscale(1)' : 'none'})\`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="absolute inset-0 m-auto z-[3] pointer-events-none"
            style={{
              backgroundImage: \`radial-gradient(rgba(235, 235, 235, 0) 65%, var(--overlay-blur-color, \${overlayBlurColor}) 100%)\`
            }}
          />

          <div
            className="absolute inset-0 m-auto z-[3] pointer-events-none"
            style={{
              WebkitMaskImage: \`radial-gradient(rgba(235, 235, 235, 0) 70%, var(--overlay-blur-color, \${overlayBlurColor}) 90%)\`,
              maskImage: \`radial-gradient(rgba(235, 235, 235, 0) 70%, var(--overlay-blur-color, \${overlayBlurColor}) 90%)\`,
              backdropFilter: 'blur(3px)'
            }}
          />

          <div
            className="absolute left-0 right-0 top-0 h-[120px] z-[5] pointer-events-none rotate-180"
            style={{
              background: \`linear-gradient(to bottom, transparent, var(--overlay-blur-color, \${overlayBlurColor}))\`
            }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 h-[120px] z-[5] pointer-events-none"
            style={{
              background: \`linear-gradient(to bottom, transparent, var(--overlay-blur-color, \${overlayBlurColor}))\`
            }}
          />

          <div
            ref={viewerRef}
            className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
            style={{ padding: 'var(--viewer-pad)' }}
          >
            <div
              ref={scrimRef}
              className="scrim absolute inset-0 z-10 pointer-events-none opacity-0 transition-opacity duration-500"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(3px)'
              }}
            />
            <div
              ref={frameRef}
              className="viewer-frame h-full aspect-square flex"
              style={{ borderRadius: \`var(--enlarge-radius, \${openedImageBorderRadius})\` }}
            />
          </div>
        </main>
      </div>
    </>
  );
}
`,Zn=`import { useEffect, useMemo, useRef, useCallback } from 'react';
import { useGesture } from '@use-gesture/react';
import './DomeGallery.css';

type ImageItem = string | { src: string; alt?: string };

type DomeGalleryProps = {
  images?: ImageItem[];
  fit?: number;
  fitBasis?: 'auto' | 'min' | 'max' | 'width' | 'height';
  minRadius?: number;
  maxRadius?: number;
  padFactor?: number;
  overlayBlurColor?: string;
  maxVerticalRotationDeg?: number;
  dragSensitivity?: number;
  enlargeTransitionMs?: number;
  segments?: number;
  dragDampening?: number;
  openedImageWidth?: string;
  openedImageHeight?: string;
  imageBorderRadius?: string;
  openedImageBorderRadius?: string;
  grayscale?: boolean;
};

type ItemDef = {
  src: string;
  alt: string;
  x: number;
  y: number;
  sizeX: number;
  sizeY: number;
};

const DEFAULT_IMAGES: ImageItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1755331039789-7e5680e26e8f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Abstract art'
  },
  {
    src: 'https://images.unsplash.com/photo-1755569309049-98410b94f66d?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Modern sculpture'
  },
  {
    src: 'https://images.unsplash.com/photo-1755497595318-7e5e3523854f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Digital artwork'
  },
  {
    src: 'https://images.unsplash.com/photo-1755353985163-c2a0fe5ac3d8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Contemporary art'
  },
  {
    src: 'https://images.unsplash.com/photo-1745965976680-d00be7dc0377?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Geometric pattern'
  },
  {
    src: 'https://images.unsplash.com/photo-1752588975228-21f44630bb3c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Textured surface'
  },
  {
    src: 'https://pbs.twimg.com/media/Gyla7NnXMAAXSo_?format=jpg&name=large',
    alt: 'Social media image'
  }
];

const DEFAULTS = {
  maxVerticalRotationDeg: 5,
  dragSensitivity: 20,
  enlargeTransitionMs: 300,
  segments: 35
};

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
const normalizeAngle = (d: number) => ((d % 360) + 360) % 360;
const wrapAngleSigned = (deg: number) => {
  const a = (((deg + 180) % 360) + 360) % 360;
  return a - 180;
};
const getDataNumber = (el: HTMLElement, name: string, fallback: number) => {
  const attr = el.dataset[name] ?? el.getAttribute(\`data-\${name}\`);
  const n = attr == null ? NaN : parseFloat(attr);
  return Number.isFinite(n) ? n : fallback;
};

function buildItems(pool: ImageItem[], seg: number): ItemDef[] {
  const xCols = Array.from({ length: seg }, (_, i) => -37 + i * 2);
  const evenYs = [-4, -2, 0, 2, 4];
  const oddYs = [-3, -1, 1, 3, 5];

  const coords = xCols.flatMap((x, c) => {
    const ys = c % 2 === 0 ? evenYs : oddYs;
    return ys.map(y => ({ x, y, sizeX: 2, sizeY: 2 }));
  });

  const totalSlots = coords.length;
  if (pool.length === 0) {
    return coords.map(c => ({ ...c, src: '', alt: '' }));
  }
  if (pool.length > totalSlots) {
    console.warn(
      \`[DomeGallery] Provided image count (\${pool.length}) exceeds available tiles (\${totalSlots}). Some images will not be shown.\`
    );
  }

  const normalizedImages = pool.map(image => {
    if (typeof image === 'string') {
      return { src: image, alt: '' };
    }
    return { src: image.src || '', alt: image.alt || '' };
  });

  const usedImages = Array.from({ length: totalSlots }, (_, i) => normalizedImages[i % normalizedImages.length]);

  for (let i = 1; i < usedImages.length; i++) {
    if (usedImages[i].src === usedImages[i - 1].src) {
      for (let j = i + 1; j < usedImages.length; j++) {
        if (usedImages[j].src !== usedImages[i].src) {
          const tmp = usedImages[i];
          usedImages[i] = usedImages[j];
          usedImages[j] = tmp;
          break;
        }
      }
    }
  }

  return coords.map((c, i) => ({
    ...c,
    src: usedImages[i].src,
    alt: usedImages[i].alt
  }));
}

function computeItemBaseRotation(offsetX: number, offsetY: number, sizeX: number, sizeY: number, segments: number) {
  const unit = 360 / segments / 2;
  const rotateY = unit * (offsetX + (sizeX - 1) / 2);
  const rotateX = unit * (offsetY - (sizeY - 1) / 2);
  return { rotateX, rotateY };
}

export default function DomeGallery({
  images = DEFAULT_IMAGES,
  fit = 0.5,
  fitBasis = 'auto',
  minRadius = 600,
  maxRadius = Infinity,
  padFactor = 0.25,
  overlayBlurColor = '#060010',
  maxVerticalRotationDeg = DEFAULTS.maxVerticalRotationDeg,
  dragSensitivity = DEFAULTS.dragSensitivity,
  enlargeTransitionMs = DEFAULTS.enlargeTransitionMs,
  segments = DEFAULTS.segments,
  dragDampening = 2,
  openedImageWidth = '400px',
  openedImageHeight = '400px',
  imageBorderRadius = '30px',
  openedImageBorderRadius = '30px',
  grayscale = true
}: DomeGalleryProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);
  const focusedElRef = useRef<HTMLElement | null>(null);
  const originalTilePositionRef = useRef<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  const rotationRef = useRef({ x: 0, y: 0 });
  const startRotRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef<{ x: number; y: number } | null>(null);
  const draggingRef = useRef(false);
  const movedRef = useRef(false);
  const inertiaRAF = useRef<number | null>(null);

  const openingRef = useRef(false);
  const openStartedAtRef = useRef(0);
  const lastDragEndAt = useRef(0);

  const scrollLockedRef = useRef(false);
  const lockScroll = useCallback(() => {
    if (scrollLockedRef.current) return;
    scrollLockedRef.current = true;
    document.body.classList.add('dg-scroll-lock');
  }, []);
  const unlockScroll = useCallback(() => {
    if (!scrollLockedRef.current) return;
    if (rootRef.current?.getAttribute('data-enlarging') === 'true') return;
    scrollLockedRef.current = false;
    document.body.classList.remove('dg-scroll-lock');
  }, []);

  const items = useMemo(() => buildItems(images, segments), [images, segments]);

  const applyTransform = (xDeg: number, yDeg: number) => {
    const el = sphereRef.current;
    if (el) {
      el.style.transform = \`translateZ(calc(var(--radius) * -1)) rotateX(\${xDeg}deg) rotateY(\${yDeg}deg)\`;
    }
  };

  const lockedRadiusRef = useRef<number | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver(entries => {
      const cr = entries[0].contentRect;
      const w = Math.max(1, cr.width),
        h = Math.max(1, cr.height);
      const minDim = Math.min(w, h),
        maxDim = Math.max(w, h),
        aspect = w / h;
      let basis: number;
      switch (fitBasis) {
        case 'min':
          basis = minDim;
          break;
        case 'max':
          basis = maxDim;
          break;
        case 'width':
          basis = w;
          break;
        case 'height':
          basis = h;
          break;
        default:
          basis = aspect >= 1.3 ? w : minDim;
      }
      let radius = basis * fit;
      const heightGuard = h * 1.35;
      radius = Math.min(radius, heightGuard);
      radius = clamp(radius, minRadius, maxRadius);
      lockedRadiusRef.current = Math.round(radius);

      const viewerPad = Math.max(8, Math.round(minDim * padFactor));
      root.style.setProperty('--radius', \`\${lockedRadiusRef.current}px\`);
      root.style.setProperty('--viewer-pad', \`\${viewerPad}px\`);
      root.style.setProperty('--overlay-blur-color', overlayBlurColor);
      root.style.setProperty('--tile-radius', imageBorderRadius);
      root.style.setProperty('--enlarge-radius', openedImageBorderRadius);
      root.style.setProperty('--image-filter', grayscale ? 'grayscale(1)' : 'none');
      applyTransform(rotationRef.current.x, rotationRef.current.y);

      const enlargedOverlay = viewerRef.current?.querySelector('.enlarge') as HTMLElement;
      if (enlargedOverlay && frameRef.current && mainRef.current) {
        const frameR = frameRef.current.getBoundingClientRect();
        const mainR = mainRef.current.getBoundingClientRect();

        const hasCustomSize = openedImageWidth && openedImageHeight;
        if (hasCustomSize) {
          const tempDiv = document.createElement('div');
          tempDiv.style.cssText = \`position: absolute; width: \${openedImageWidth}; height: \${openedImageHeight}; visibility: hidden;\`;
          document.body.appendChild(tempDiv);
          const tempRect = tempDiv.getBoundingClientRect();
          document.body.removeChild(tempDiv);

          const centeredLeft = frameR.left - mainR.left + (frameR.width - tempRect.width) / 2;
          const centeredTop = frameR.top - mainR.top + (frameR.height - tempRect.height) / 2;

          enlargedOverlay.style.left = \`\${centeredLeft}px\`;
          enlargedOverlay.style.top = \`\${centeredTop}px\`;
        } else {
          enlargedOverlay.style.left = \`\${frameR.left - mainR.left}px\`;
          enlargedOverlay.style.top = \`\${frameR.top - mainR.top}px\`;
          enlargedOverlay.style.width = \`\${frameR.width}px\`;
          enlargedOverlay.style.height = \`\${frameR.height}px\`;
        }
      }
    });
    ro.observe(root);
    return () => ro.disconnect();
  }, [
    fit,
    fitBasis,
    minRadius,
    maxRadius,
    padFactor,
    overlayBlurColor,
    grayscale,
    imageBorderRadius,
    openedImageBorderRadius,
    openedImageWidth,
    openedImageHeight
  ]);

  useEffect(() => {
    applyTransform(rotationRef.current.x, rotationRef.current.y);
  }, []);

  const stopInertia = useCallback(() => {
    if (inertiaRAF.current) {
      cancelAnimationFrame(inertiaRAF.current);
      inertiaRAF.current = null;
    }
  }, []);

  const startInertia = useCallback(
    (vx: number, vy: number) => {
      const MAX_V = 1.4;
      let vX = clamp(vx, -MAX_V, MAX_V) * 80;
      let vY = clamp(vy, -MAX_V, MAX_V) * 80;

      let frames = 0;
      const d = clamp(dragDampening ?? 0.6, 0, 1);
      const frictionMul = 0.94 + 0.055 * d;
      const stopThreshold = 0.015 - 0.01 * d;
      const maxFrames = Math.round(90 + 270 * d);

      const step = () => {
        vX *= frictionMul;
        vY *= frictionMul;
        if (Math.abs(vX) < stopThreshold && Math.abs(vY) < stopThreshold) {
          inertiaRAF.current = null;
          return;
        }
        if (++frames > maxFrames) {
          inertiaRAF.current = null;
          return;
        }
        const nextX = clamp(rotationRef.current.x - vY / 200, -maxVerticalRotationDeg, maxVerticalRotationDeg);
        const nextY = wrapAngleSigned(rotationRef.current.y + vX / 200);
        rotationRef.current = { x: nextX, y: nextY };
        applyTransform(nextX, nextY);
        inertiaRAF.current = requestAnimationFrame(step);
      };
      stopInertia();
      inertiaRAF.current = requestAnimationFrame(step);
    },
    [dragDampening, maxVerticalRotationDeg, stopInertia]
  );

  useGesture(
    {
      onDragStart: ({ event }) => {
        if (focusedElRef.current) return;
        stopInertia();
        const evt = event as PointerEvent;
        draggingRef.current = true;
        movedRef.current = false;
        startRotRef.current = { ...rotationRef.current };
        startPosRef.current = { x: evt.clientX, y: evt.clientY };
      },
      onDrag: ({ event, last, velocity = [0, 0], direction = [0, 0], movement }) => {
        if (focusedElRef.current || !draggingRef.current || !startPosRef.current) return;

        const evt = event as PointerEvent;
        const dxTotal = evt.clientX - startPosRef.current.x;
        const dyTotal = evt.clientY - startPosRef.current.y;

        if (!movedRef.current) {
          const dist2 = dxTotal * dxTotal + dyTotal * dyTotal;
          if (dist2 > 16) movedRef.current = true;
        }

        const nextX = clamp(
          startRotRef.current.x - dyTotal / dragSensitivity,
          -maxVerticalRotationDeg,
          maxVerticalRotationDeg
        );
        const nextY = wrapAngleSigned(startRotRef.current.y + dxTotal / dragSensitivity);

        if (rotationRef.current.x !== nextX || rotationRef.current.y !== nextY) {
          rotationRef.current = { x: nextX, y: nextY };
          applyTransform(nextX, nextY);
        }

        if (last) {
          draggingRef.current = false;

          let [vMagX, vMagY] = velocity;
          const [dirX, dirY] = direction;
          let vx = vMagX * dirX;
          let vy = vMagY * dirY;

          if (Math.abs(vx) < 0.001 && Math.abs(vy) < 0.001 && Array.isArray(movement)) {
            const [mx, my] = movement;
            vx = clamp((mx / dragSensitivity) * 0.02, -1.2, 1.2);
            vy = clamp((my / dragSensitivity) * 0.02, -1.2, 1.2);
          }

          if (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005) {
            startInertia(vx, vy);
          }

          if (movedRef.current) lastDragEndAt.current = performance.now();

          movedRef.current = false;
        }
      }
    },
    { target: mainRef, eventOptions: { passive: true } }
  );

  const openItemFromElement = (el: HTMLElement) => {
    if (openingRef.current) return;
    openingRef.current = true;
    openStartedAtRef.current = performance.now();
    lockScroll();

    const parent = el.parentElement as HTMLElement;
    focusedElRef.current = el;
    el.setAttribute('data-focused', 'true');

    const offsetX = getDataNumber(parent, 'offsetX', 0);
    const offsetY = getDataNumber(parent, 'offsetY', 0);
    const sizeX = getDataNumber(parent, 'sizeX', 2);
    const sizeY = getDataNumber(parent, 'sizeY', 2);

    const parentRot = computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments);
    const parentY = normalizeAngle(parentRot.rotateY);
    const globalY = normalizeAngle(rotationRef.current.y);
    let rotY = -(parentY + globalY) % 360;
    if (rotY < -180) rotY += 360;
    const rotX = -parentRot.rotateX - rotationRef.current.x;
    parent.style.setProperty('--rot-y-delta', \`\${rotY}deg\`);
    parent.style.setProperty('--rot-x-delta', \`\${rotX}deg\`);

    const refDiv = document.createElement('div');
    refDiv.className = 'item__image item__image--reference';
    refDiv.style.opacity = '0';
    refDiv.style.transform = \`rotateX(\${-parentRot.rotateX}deg) rotateY(\${-parentRot.rotateY}deg)\`;
    parent.appendChild(refDiv);

    void refDiv.offsetHeight;

    const tileR = refDiv.getBoundingClientRect();
    const mainR = mainRef.current?.getBoundingClientRect();
    const frameR = frameRef.current?.getBoundingClientRect();

    if (!mainR || !frameR || tileR.width <= 0 || tileR.height <= 0) {
      openingRef.current = false;
      focusedElRef.current = null;
      parent.removeChild(refDiv);
      unlockScroll();
      return;
    }

    originalTilePositionRef.current = {
      left: tileR.left,
      top: tileR.top,
      width: tileR.width,
      height: tileR.height
    };

    el.style.visibility = 'hidden';
    (el.style as any).zIndex = 0;

    const overlay = document.createElement('div');
    overlay.className = 'enlarge';
    overlay.style.position = 'absolute';
    overlay.style.left = frameR.left - mainR.left + 'px';
    overlay.style.top = frameR.top - mainR.top + 'px';
    overlay.style.width = frameR.width + 'px';
    overlay.style.height = frameR.height + 'px';
    overlay.style.opacity = '0';
    overlay.style.zIndex = '30';
    overlay.style.willChange = 'transform, opacity';
    overlay.style.transformOrigin = 'top left';
    overlay.style.transition = \`transform \${enlargeTransitionMs}ms ease, opacity \${enlargeTransitionMs}ms ease\`;

    const rawSrc = parent.dataset.src || (el.querySelector('img') as HTMLImageElement)?.src || '';
    const img = document.createElement('img');
    img.src = rawSrc;
    overlay.appendChild(img);
    viewerRef.current!.appendChild(overlay);

    const tx0 = tileR.left - frameR.left;
    const ty0 = tileR.top - frameR.top;
    const sx0 = tileR.width / frameR.width;
    const sy0 = tileR.height / frameR.height;

    const validSx0 = isFinite(sx0) && sx0 > 0 ? sx0 : 1;
    const validSy0 = isFinite(sy0) && sy0 > 0 ? sy0 : 1;

    overlay.style.transform = \`translate(\${tx0}px, \${ty0}px) scale(\${validSx0}, \${validSy0})\`;

    setTimeout(() => {
      if (!overlay.parentElement) return;
      overlay.style.opacity = '1';
      overlay.style.transform = 'translate(0px, 0px) scale(1, 1)';
      rootRef.current?.setAttribute('data-enlarging', 'true');
    }, 16);

    const wantsResize = openedImageWidth || openedImageHeight;
    if (wantsResize) {
      const onFirstEnd = (ev: TransitionEvent) => {
        if (ev.propertyName !== 'transform') return;
        overlay.removeEventListener('transitionend', onFirstEnd);
        const prevTransition = overlay.style.transition;
        overlay.style.transition = 'none';
        const tempWidth = openedImageWidth || \`\${frameR.width}px\`;
        const tempHeight = openedImageHeight || \`\${frameR.height}px\`;
        overlay.style.width = tempWidth;
        overlay.style.height = tempHeight;
        const newRect = overlay.getBoundingClientRect();
        overlay.style.width = frameR.width + 'px';
        overlay.style.height = frameR.height + 'px';
        void overlay.offsetWidth;
        overlay.style.transition = \`left \${enlargeTransitionMs}ms ease, top \${enlargeTransitionMs}ms ease, width \${enlargeTransitionMs}ms ease, height \${enlargeTransitionMs}ms ease\`;
        const centeredLeft = frameR.left - mainR.left + (frameR.width - newRect.width) / 2;
        const centeredTop = frameR.top - mainR.top + (frameR.height - newRect.height) / 2;
        requestAnimationFrame(() => {
          overlay.style.left = \`\${centeredLeft}px\`;
          overlay.style.top = \`\${centeredTop}px\`;
          overlay.style.width = tempWidth;
          overlay.style.height = tempHeight;
        });
        const cleanupSecond = () => {
          overlay.removeEventListener('transitionend', cleanupSecond);
          overlay.style.transition = prevTransition;
        };
        overlay.addEventListener('transitionend', cleanupSecond, {
          once: true
        });
      };
      overlay.addEventListener('transitionend', onFirstEnd);
    }
  };

  const onTileClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (draggingRef.current) return;
      if (movedRef.current) return;
      if (performance.now() - lastDragEndAt.current < 80) return;
      if (openingRef.current) return;
      openItemFromElement(e.currentTarget);
    },
    [openItemFromElement]
  );

  const onTilePointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.pointerType !== 'touch') return;
      if (draggingRef.current) return;
      if (movedRef.current) return;
      if (performance.now() - lastDragEndAt.current < 80) return;
      if (openingRef.current) return;
      openItemFromElement(e.currentTarget);
    },
    [openItemFromElement]
  );

  useEffect(() => {
    const scrim = scrimRef.current;
    if (!scrim) return;

    const close = () => {
      if (performance.now() - openStartedAtRef.current < 250) return;

      const el = focusedElRef.current;
      if (!el) return;
      const parent = el.parentElement as HTMLElement;
      const overlay = viewerRef.current?.querySelector('.enlarge') as HTMLElement | null;
      if (!overlay) return;

      const refDiv = parent.querySelector('.item__image--reference') as HTMLElement | null;

      const originalPos = originalTilePositionRef.current;
      if (!originalPos) {
        overlay.remove();
        if (refDiv) refDiv.remove();
        parent.style.setProperty('--rot-y-delta', \`0deg\`);
        parent.style.setProperty('--rot-x-delta', \`0deg\`);
        el.style.visibility = '';
        (el.style as any).zIndex = 0;
        focusedElRef.current = null;
        rootRef.current?.removeAttribute('data-enlarging');
        openingRef.current = false;
        unlockScroll();
        return;
      }

      const currentRect = overlay.getBoundingClientRect();
      const rootRect = rootRef.current!.getBoundingClientRect();

      const originalPosRelativeToRoot = {
        left: originalPos.left - rootRect.left,
        top: originalPos.top - rootRect.top,
        width: originalPos.width,
        height: originalPos.height
      };

      const overlayRelativeToRoot = {
        left: currentRect.left - rootRect.left,
        top: currentRect.top - rootRect.top,
        width: currentRect.width,
        height: currentRect.height
      };

      const animatingOverlay = document.createElement('div');
      animatingOverlay.className = 'enlarge-closing';
      animatingOverlay.style.cssText = \`
        position: absolute;
        left: \${overlayRelativeToRoot.left}px;
        top: \${overlayRelativeToRoot.top}px;
        width: \${overlayRelativeToRoot.width}px;
        height: \${overlayRelativeToRoot.height}px;
        z-index: 9999;
        border-radius: var(--enlarge-radius, 32px);
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0,0,0,.35);
        transition: all \${enlargeTransitionMs}ms ease-out;
        pointer-events: none;
        margin: 0;
        transform: none;
      \`;

      const originalImg = overlay.querySelector('img');
      if (originalImg) {
        const img = originalImg.cloneNode() as HTMLImageElement;
        img.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
        animatingOverlay.appendChild(img);
      }

      overlay.remove();
      rootRef.current!.appendChild(animatingOverlay);

      void animatingOverlay.getBoundingClientRect();

      requestAnimationFrame(() => {
        animatingOverlay.style.left = originalPosRelativeToRoot.left + 'px';
        animatingOverlay.style.top = originalPosRelativeToRoot.top + 'px';
        animatingOverlay.style.width = originalPosRelativeToRoot.width + 'px';
        animatingOverlay.style.height = originalPosRelativeToRoot.height + 'px';
        animatingOverlay.style.opacity = '0';
      });

      const cleanup = () => {
        animatingOverlay.remove();
        originalTilePositionRef.current = null;

        if (refDiv) refDiv.remove();
        parent.style.transition = 'none';
        el.style.transition = 'none';

        parent.style.setProperty('--rot-y-delta', \`0deg\`);
        parent.style.setProperty('--rot-x-delta', \`0deg\`);

        requestAnimationFrame(() => {
          el.style.visibility = '';
          el.style.opacity = '0';
          (el.style as any).zIndex = 0;
          focusedElRef.current = null;
          rootRef.current?.removeAttribute('data-enlarging');

          requestAnimationFrame(() => {
            parent.style.transition = '';
            el.style.transition = 'opacity 300ms ease-out';

            requestAnimationFrame(() => {
              el.style.opacity = '1';
              setTimeout(() => {
                el.style.transition = '';
                el.style.opacity = '';
                openingRef.current = false;
                if (!draggingRef.current && rootRef.current?.getAttribute('data-enlarging') !== 'true') {
                  document.body.classList.remove('dg-scroll-lock');
                }
              }, 300);
            });
          });
        });
      };

      animatingOverlay.addEventListener('transitionend', cleanup, {
        once: true
      });
    };

    scrim.addEventListener('click', close);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      scrim.removeEventListener('click', close);
      window.removeEventListener('keydown', onKey);
    };
  }, [enlargeTransitionMs, unlockScroll]);

  useEffect(() => {
    return () => {
      document.body.classList.remove('dg-scroll-lock');
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="sphere-root"
      style={
        {
          ['--segments-x' as any]: segments,
          ['--segments-y' as any]: segments,
          ['--overlay-blur-color' as any]: overlayBlurColor,
          ['--tile-radius' as any]: imageBorderRadius,
          ['--enlarge-radius' as any]: openedImageBorderRadius,
          ['--image-filter' as any]: grayscale ? 'grayscale(1)' : 'none'
        } as React.CSSProperties
      }
    >
      <main ref={mainRef} className="sphere-main">
        <div className="stage">
          <div ref={sphereRef} className="sphere">
            {items.map((it, i) => (
              <div
                key={\`\${it.x},\${it.y},\${i}\`}
                className="item"
                data-src={it.src}
                data-offset-x={it.x}
                data-offset-y={it.y}
                data-size-x={it.sizeX}
                data-size-y={it.sizeY}
                style={
                  {
                    ['--offset-x' as any]: it.x,
                    ['--offset-y' as any]: it.y,
                    ['--item-size-x' as any]: it.sizeX,
                    ['--item-size-y' as any]: it.sizeY
                  } as React.CSSProperties
                }
              >
                <div
                  className="item__image"
                  role="button"
                  tabIndex={0}
                  aria-label={it.alt || 'Open image'}
                  onClick={onTileClick}
                  onPointerUp={onTilePointerUp}
                >
                  <img src={it.src} draggable={false} alt={it.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overlay" />
        <div className="overlay overlay--blur" />
        <div className="edge-fade edge-fade--top" />
        <div className="edge-fade edge-fade--bottom" />

        <div className="viewer" ref={viewerRef}>
          <div ref={scrimRef} className="scrim" />
          <div ref={frameRef} className="frame" />
        </div>
      </main>
    </div>
  );
}
`,Jn=`import { useEffect, useMemo, useRef, useCallback } from 'react';
import { useGesture } from '@use-gesture/react';

type ImageItem = string | { src: string; alt?: string };

type DomeGalleryProps = {
  images?: ImageItem[];
  fit?: number;
  fitBasis?: 'auto' | 'min' | 'max' | 'width' | 'height';
  minRadius?: number;
  maxRadius?: number;
  padFactor?: number;
  overlayBlurColor?: string;
  maxVerticalRotationDeg?: number;
  dragSensitivity?: number;
  enlargeTransitionMs?: number;
  segments?: number;
  dragDampening?: number;
  openedImageWidth?: string;
  openedImageHeight?: string;
  imageBorderRadius?: string;
  openedImageBorderRadius?: string;
  grayscale?: boolean;
};

type ItemDef = {
  src: string;
  alt: string;
  x: number;
  y: number;
  sizeX: number;
  sizeY: number;
};

const DEFAULT_IMAGES: ImageItem[] = [
  {
    src: 'https://images.unsplash.com/photo-1755331039789-7e5680e26e8f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Abstract art'
  },
  {
    src: 'https://images.unsplash.com/photo-1755569309049-98410b94f66d?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Modern sculpture'
  },
  {
    src: 'https://images.unsplash.com/photo-1755497595318-7e5e3523854f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Digital artwork'
  },
  {
    src: 'https://images.unsplash.com/photo-1755353985163-c2a0fe5ac3d8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Contemporary art'
  },
  {
    src: 'https://images.unsplash.com/photo-1745965976680-d00be7dc0377?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Geometric pattern'
  },
  {
    src: 'https://images.unsplash.com/photo-1752588975228-21f44630bb3c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Textured surface'
  },
  {
    src: 'https://pbs.twimg.com/media/Gyla7NnXMAAXSo_?format=jpg&name=large',
    alt: 'Social media image'
  }
];

const DEFAULTS = {
  maxVerticalRotationDeg: 5,
  dragSensitivity: 20,
  enlargeTransitionMs: 300,
  segments: 35
};

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);
const normalizeAngle = (d: number) => ((d % 360) + 360) % 360;
const wrapAngleSigned = (deg: number) => {
  const a = (((deg + 180) % 360) + 360) % 360;
  return a - 180;
};
const getDataNumber = (el: HTMLElement, name: string, fallback: number) => {
  const attr = el.dataset[name] ?? el.getAttribute(\`data-\${name}\`);
  const n = attr == null ? NaN : parseFloat(attr);
  return Number.isFinite(n) ? n : fallback;
};

function buildItems(pool: ImageItem[], seg: number): ItemDef[] {
  const xCols = Array.from({ length: seg }, (_, i) => -37 + i * 2);
  const evenYs = [-4, -2, 0, 2, 4];
  const oddYs = [-3, -1, 1, 3, 5];

  const coords = xCols.flatMap((x, c) => {
    const ys = c % 2 === 0 ? evenYs : oddYs;
    return ys.map(y => ({ x, y, sizeX: 2, sizeY: 2 }));
  });

  const totalSlots = coords.length;
  if (pool.length === 0) {
    return coords.map(c => ({ ...c, src: '', alt: '' }));
  }
  if (pool.length > totalSlots) {
    console.warn(
      \`[DomeGallery] Provided image count (\${pool.length}) exceeds available tiles (\${totalSlots}). Some images will not be shown.\`
    );
  }

  const normalizedImages = pool.map(image => {
    if (typeof image === 'string') {
      return { src: image, alt: '' };
    }
    return { src: image.src || '', alt: image.alt || '' };
  });

  const usedImages = Array.from({ length: totalSlots }, (_, i) => normalizedImages[i % normalizedImages.length]);

  for (let i = 1; i < usedImages.length; i++) {
    if (usedImages[i].src === usedImages[i - 1].src) {
      for (let j = i + 1; j < usedImages.length; j++) {
        if (usedImages[j].src !== usedImages[i].src) {
          const tmp = usedImages[i];
          usedImages[i] = usedImages[j];
          usedImages[j] = tmp;
          break;
        }
      }
    }
  }

  return coords.map((c, i) => ({
    ...c,
    src: usedImages[i].src,
    alt: usedImages[i].alt
  }));
}

function computeItemBaseRotation(offsetX: number, offsetY: number, sizeX: number, sizeY: number, segments: number) {
  const unit = 360 / segments / 2;
  const rotateY = unit * (offsetX + (sizeX - 1) / 2);
  const rotateX = unit * (offsetY - (sizeY - 1) / 2);
  return { rotateX, rotateY };
}

export default function DomeGallery({
  images = DEFAULT_IMAGES,
  fit = 0.5,
  fitBasis = 'auto',
  minRadius = 600,
  maxRadius = Infinity,
  padFactor = 0.25,
  overlayBlurColor = '#060010',
  maxVerticalRotationDeg = DEFAULTS.maxVerticalRotationDeg,
  dragSensitivity = DEFAULTS.dragSensitivity,
  enlargeTransitionMs = DEFAULTS.enlargeTransitionMs,
  segments = DEFAULTS.segments,
  dragDampening = 2,
  openedImageWidth = '400px',
  openedImageHeight = '400px',
  imageBorderRadius = '30px',
  openedImageBorderRadius = '30px',
  grayscale = true
}: DomeGalleryProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);
  const focusedElRef = useRef<HTMLElement | null>(null);
  const originalTilePositionRef = useRef<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  const rotationRef = useRef({ x: 0, y: 0 });
  const startRotRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef<{ x: number; y: number } | null>(null);
  const draggingRef = useRef(false);
  const cancelTapRef = useRef(false);
  const movedRef = useRef(false);
  const inertiaRAF = useRef<number | null>(null);
  const pointerTypeRef = useRef<'mouse' | 'pen' | 'touch'>('mouse');
  const tapTargetRef = useRef<HTMLElement | null>(null);
  const openingRef = useRef(false);
  const openStartedAtRef = useRef(0);
  const lastDragEndAt = useRef(0);

  const scrollLockedRef = useRef(false);
  const lockScroll = useCallback(() => {
    if (scrollLockedRef.current) return;
    scrollLockedRef.current = true;
    document.body.classList.add('dg-scroll-lock');
  }, []);
  const unlockScroll = useCallback(() => {
    if (!scrollLockedRef.current) return;
    if (rootRef.current?.getAttribute('data-enlarging') === 'true') return;
    scrollLockedRef.current = false;
    document.body.classList.remove('dg-scroll-lock');
  }, []);

  const items = useMemo(() => buildItems(images, segments), [images, segments]);

  const applyTransform = (xDeg: number, yDeg: number) => {
    const el = sphereRef.current;
    if (el) {
      el.style.transform = \`translateZ(calc(var(--radius) * -1)) rotateX(\${xDeg}deg) rotateY(\${yDeg}deg)\`;
    }
  };

  const lockedRadiusRef = useRef<number | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver(entries => {
      const cr = entries[0].contentRect;
      const w = Math.max(1, cr.width),
        h = Math.max(1, cr.height);
      const minDim = Math.min(w, h),
        maxDim = Math.max(w, h),
        aspect = w / h;
      let basis: number;
      switch (fitBasis) {
        case 'min':
          basis = minDim;
          break;
        case 'max':
          basis = maxDim;
          break;
        case 'width':
          basis = w;
          break;
        case 'height':
          basis = h;
          break;
        default:
          basis = aspect >= 1.3 ? w : minDim;
      }
      let radius = basis * fit;
      const heightGuard = h * 1.35;
      radius = Math.min(radius, heightGuard);
      radius = clamp(radius, minRadius, maxRadius);
      lockedRadiusRef.current = Math.round(radius);

      const viewerPad = Math.max(8, Math.round(minDim * padFactor));
      root.style.setProperty('--radius', \`\${lockedRadiusRef.current}px\`);
      root.style.setProperty('--viewer-pad', \`\${viewerPad}px\`);
      root.style.setProperty('--overlay-blur-color', overlayBlurColor);
      root.style.setProperty('--tile-radius', imageBorderRadius);
      root.style.setProperty('--enlarge-radius', openedImageBorderRadius);
      root.style.setProperty('--image-filter', grayscale ? 'grayscale(1)' : 'none');
      applyTransform(rotationRef.current.x, rotationRef.current.y);

      const enlargedOverlay = viewerRef.current?.querySelector('.enlarge') as HTMLElement;
      if (enlargedOverlay && frameRef.current && mainRef.current) {
        const frameR = frameRef.current.getBoundingClientRect();
        const mainR = mainRef.current.getBoundingClientRect();

        const hasCustomSize = openedImageWidth && openedImageHeight;
        if (hasCustomSize) {
          const tempDiv = document.createElement('div');
          tempDiv.style.cssText = \`position: absolute; width: \${openedImageWidth}; height: \${openedImageHeight}; visibility: hidden;\`;
          document.body.appendChild(tempDiv);
          const tempRect = tempDiv.getBoundingClientRect();
          document.body.removeChild(tempDiv);

          const centeredLeft = frameR.left - mainR.left + (frameR.width - tempRect.width) / 2;
          const centeredTop = frameR.top - mainR.top + (frameR.height - tempRect.height) / 2;

          enlargedOverlay.style.left = \`\${centeredLeft}px\`;
          enlargedOverlay.style.top = \`\${centeredTop}px\`;
        } else {
          enlargedOverlay.style.left = \`\${frameR.left - mainR.left}px\`;
          enlargedOverlay.style.top = \`\${frameR.top - mainR.top}px\`;
          enlargedOverlay.style.width = \`\${frameR.width}px\`;
          enlargedOverlay.style.height = \`\${frameR.height}px\`;
        }
      }
    });
    ro.observe(root);
    return () => ro.disconnect();
  }, [
    fit,
    fitBasis,
    minRadius,
    maxRadius,
    padFactor,
    overlayBlurColor,
    grayscale,
    imageBorderRadius,
    openedImageBorderRadius,
    openedImageWidth,
    openedImageHeight
  ]);

  useEffect(() => {
    applyTransform(rotationRef.current.x, rotationRef.current.y);
  }, []);

  const stopInertia = useCallback(() => {
    if (inertiaRAF.current) {
      cancelAnimationFrame(inertiaRAF.current);
      inertiaRAF.current = null;
    }
  }, []);

  const startInertia = useCallback(
    (vx: number, vy: number) => {
      const MAX_V = 1.4;
      let vX = clamp(vx, -MAX_V, MAX_V) * 80;
      let vY = clamp(vy, -MAX_V, MAX_V) * 80;
      let frames = 0;
      const d = clamp(dragDampening ?? 0.6, 0, 1);
      const frictionMul = 0.94 + 0.055 * d;
      const stopThreshold = 0.015 - 0.01 * d;
      const maxFrames = Math.round(90 + 270 * d);
      const step = () => {
        vX *= frictionMul;
        vY *= frictionMul;
        if (Math.abs(vX) < stopThreshold && Math.abs(vY) < stopThreshold) {
          inertiaRAF.current = null;
          return;
        }
        if (++frames > maxFrames) {
          inertiaRAF.current = null;
          return;
        }
        const nextX = clamp(rotationRef.current.x - vY / 200, -maxVerticalRotationDeg, maxVerticalRotationDeg);
        const nextY = wrapAngleSigned(rotationRef.current.y + vX / 200);
        rotationRef.current = { x: nextX, y: nextY };
        applyTransform(nextX, nextY);
        inertiaRAF.current = requestAnimationFrame(step);
      };
      stopInertia();
      inertiaRAF.current = requestAnimationFrame(step);
    },
    [dragDampening, maxVerticalRotationDeg, stopInertia]
  );

  useGesture(
    {
      onDragStart: ({ event }) => {
        if (focusedElRef.current) return;
        stopInertia();

        const evt = event as PointerEvent;
        pointerTypeRef.current = (evt.pointerType as any) || 'mouse';
        if (pointerTypeRef.current === 'touch') evt.preventDefault();
        if (pointerTypeRef.current === 'touch') lockScroll();
        draggingRef.current = true;
        cancelTapRef.current = false;
        movedRef.current = false;
        startRotRef.current = { ...rotationRef.current };
        startPosRef.current = { x: evt.clientX, y: evt.clientY };
        const potential = (evt.target as Element).closest?.('.item__image') as HTMLElement | null;
        tapTargetRef.current = potential || null;
      },
      onDrag: ({ event, last, velocity: velArr = [0, 0], direction: dirArr = [0, 0], movement }) => {
        if (focusedElRef.current || !draggingRef.current || !startPosRef.current) return;

        const evt = event as PointerEvent;
        if (pointerTypeRef.current === 'touch') evt.preventDefault();

        const dxTotal = evt.clientX - startPosRef.current.x;
        const dyTotal = evt.clientY - startPosRef.current.y;

        if (!movedRef.current) {
          const dist2 = dxTotal * dxTotal + dyTotal * dyTotal;
          if (dist2 > 16) movedRef.current = true;
        }

        const nextX = clamp(
          startRotRef.current.x - dyTotal / dragSensitivity,
          -maxVerticalRotationDeg,
          maxVerticalRotationDeg
        );
        const nextY = startRotRef.current.y + dxTotal / dragSensitivity;

        const cur = rotationRef.current;
        if (cur.x !== nextX || cur.y !== nextY) {
          rotationRef.current = { x: nextX, y: nextY };
          applyTransform(nextX, nextY);
        }

        if (last) {
          draggingRef.current = false;
          let isTap = false;

          if (startPosRef.current) {
            const dx = evt.clientX - startPosRef.current.x;
            const dy = evt.clientY - startPosRef.current.y;
            const dist2 = dx * dx + dy * dy;
            const TAP_THRESH_PX = pointerTypeRef.current === 'touch' ? 10 : 6;
            if (dist2 <= TAP_THRESH_PX * TAP_THRESH_PX) {
              isTap = true;
            }
          }

          let [vMagX, vMagY] = velArr;
          const [dirX, dirY] = dirArr;
          let vx = vMagX * dirX;
          let vy = vMagY * dirY;

          if (!isTap && Math.abs(vx) < 0.001 && Math.abs(vy) < 0.001 && Array.isArray(movement)) {
            const [mx, my] = movement;
            vx = (mx / dragSensitivity) * 0.02;
            vy = (my / dragSensitivity) * 0.02;
          }

          if (!isTap && (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005)) {
            startInertia(vx, vy);
          }
          startPosRef.current = null;
          cancelTapRef.current = !isTap;

          if (isTap && tapTargetRef.current && !focusedElRef.current) {
            openItemFromElement(tapTargetRef.current);
          }
          tapTargetRef.current = null;

          if (cancelTapRef.current) setTimeout(() => (cancelTapRef.current = false), 120);
          if (pointerTypeRef.current === 'touch') unlockScroll();
          if (movedRef.current) lastDragEndAt.current = performance.now();
          movedRef.current = false;
        }
      }
    },
    { target: mainRef, eventOptions: { passive: false } }
  );

  useEffect(() => {
    const scrim = scrimRef.current;
    if (!scrim) return;

    const close = () => {
      if (performance.now() - openStartedAtRef.current < 250) return;
      const el = focusedElRef.current;
      if (!el) return;
      const parent = el.parentElement as HTMLElement;
      const overlay = viewerRef.current?.querySelector('.enlarge') as HTMLElement | null;
      if (!overlay) return;

      const refDiv = parent.querySelector('.item__image--reference') as HTMLElement | null;

      const originalPos = originalTilePositionRef.current;
      if (!originalPos) {
        overlay.remove();
        if (refDiv) refDiv.remove();
        parent.style.setProperty('--rot-y-delta', \`0deg\`);
        parent.style.setProperty('--rot-x-delta', \`0deg\`);
        el.style.visibility = '';
        (el.style as any).zIndex = 0;
        focusedElRef.current = null;
        rootRef.current?.removeAttribute('data-enlarging');
        openingRef.current = false;
        return;
      }

      const currentRect = overlay.getBoundingClientRect();
      const rootRect = rootRef.current!.getBoundingClientRect();

      const originalPosRelativeToRoot = {
        left: originalPos.left - rootRect.left,
        top: originalPos.top - rootRect.top,
        width: originalPos.width,
        height: originalPos.height
      };

      const overlayRelativeToRoot = {
        left: currentRect.left - rootRect.left,
        top: currentRect.top - rootRect.top,
        width: currentRect.width,
        height: currentRect.height
      };

      const animatingOverlay = document.createElement('div');
      animatingOverlay.className = 'enlarge-closing';
      animatingOverlay.style.cssText = \`
        position: absolute;
        left: \${overlayRelativeToRoot.left}px;
        top: \${overlayRelativeToRoot.top}px;
        width: \${overlayRelativeToRoot.width}px;
        height: \${overlayRelativeToRoot.height}px;
        z-index: 9999;
        border-radius: \${openedImageBorderRadius};
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0,0,0,.35);
        transition: all \${enlargeTransitionMs}ms ease-out;
        pointer-events: none;
        margin: 0;
        transform: none;
        filter: \${grayscale ? 'grayscale(1)' : 'none'};
      \`;

      const originalImg = overlay.querySelector('img');
      if (originalImg) {
        const img = originalImg.cloneNode() as HTMLImageElement;
        img.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
        animatingOverlay.appendChild(img);
      }

      overlay.remove();
      rootRef.current!.appendChild(animatingOverlay);

      void animatingOverlay.getBoundingClientRect();

      requestAnimationFrame(() => {
        animatingOverlay.style.left = originalPosRelativeToRoot.left + 'px';
        animatingOverlay.style.top = originalPosRelativeToRoot.top + 'px';
        animatingOverlay.style.width = originalPosRelativeToRoot.width + 'px';
        animatingOverlay.style.height = originalPosRelativeToRoot.height + 'px';
        animatingOverlay.style.opacity = '0';
      });

      const cleanup = () => {
        animatingOverlay.remove();
        originalTilePositionRef.current = null;

        if (refDiv) refDiv.remove();
        parent.style.transition = 'none';
        el.style.transition = 'none';

        parent.style.setProperty('--rot-y-delta', \`0deg\`);
        parent.style.setProperty('--rot-x-delta', \`0deg\`);

        requestAnimationFrame(() => {
          el.style.visibility = '';
          el.style.opacity = '0';
          (el.style as any).zIndex = 0;
          focusedElRef.current = null;
          rootRef.current?.removeAttribute('data-enlarging');

          requestAnimationFrame(() => {
            parent.style.transition = '';
            el.style.transition = 'opacity 300ms ease-out';

            requestAnimationFrame(() => {
              el.style.opacity = '1';
              setTimeout(() => {
                el.style.transition = '';
                el.style.opacity = '';
                openingRef.current = false;
                if (!draggingRef.current && rootRef.current?.getAttribute('data-enlarging') !== 'true') {
                  document.body.classList.remove('dg-scroll-lock');
                }
              }, 300);
            });
          });
        });
      };

      animatingOverlay.addEventListener('transitionend', cleanup, {
        once: true
      });
    };

    scrim.addEventListener('click', close);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      scrim.removeEventListener('click', close);
      window.removeEventListener('keydown', onKey);
    };
  }, [enlargeTransitionMs, openedImageBorderRadius, grayscale]);

  const openItemFromElement = (el: HTMLElement) => {
    if (openingRef.current) return;
    openingRef.current = true;
    openStartedAtRef.current = performance.now();
    lockScroll();
    const parent = el.parentElement as HTMLElement;
    focusedElRef.current = el;
    el.setAttribute('data-focused', 'true');
    const offsetX = getDataNumber(parent, 'offsetX', 0);
    const offsetY = getDataNumber(parent, 'offsetY', 0);
    const sizeX = getDataNumber(parent, 'sizeX', 2);
    const sizeY = getDataNumber(parent, 'sizeY', 2);
    const parentRot = computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments);
    const parentY = normalizeAngle(parentRot.rotateY);
    const globalY = normalizeAngle(rotationRef.current.y);
    let rotY = -(parentY + globalY) % 360;
    if (rotY < -180) rotY += 360;
    const rotX = -parentRot.rotateX - rotationRef.current.x;
    parent.style.setProperty('--rot-y-delta', \`\${rotY}deg\`);
    parent.style.setProperty('--rot-x-delta', \`\${rotX}deg\`);
    const refDiv = document.createElement('div');
    refDiv.className = 'item__image item__image--reference opacity-0';
    refDiv.style.transform = \`rotateX(\${-parentRot.rotateX}deg) rotateY(\${-parentRot.rotateY}deg)\`;
    parent.appendChild(refDiv);

    void refDiv.offsetHeight;

    const tileR = refDiv.getBoundingClientRect();
    const mainR = mainRef.current?.getBoundingClientRect();
    const frameR = frameRef.current?.getBoundingClientRect();

    if (!mainR || !frameR || tileR.width <= 0 || tileR.height <= 0) {
      openingRef.current = false;
      focusedElRef.current = null;
      parent.removeChild(refDiv);
      unlockScroll();
      return;
    }

    originalTilePositionRef.current = {
      left: tileR.left,
      top: tileR.top,
      width: tileR.width,
      height: tileR.height
    };
    el.style.visibility = 'hidden';
    (el.style as any).zIndex = 0;
    const overlay = document.createElement('div');
    overlay.className = 'enlarge';
    overlay.style.cssText = \`position:absolute; left:\${frameR.left - mainR.left}px; top:\${frameR.top - mainR.top}px; width:\${frameR.width}px; height:\${frameR.height}px; opacity:0; z-index:30; will-change:transform,opacity; transform-origin:top left; transition:transform \${enlargeTransitionMs}ms ease, opacity \${enlargeTransitionMs}ms ease; border-radius:\${openedImageBorderRadius}; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,.35);\`;
    const rawSrc = parent.dataset.src || (el.querySelector('img') as HTMLImageElement)?.src || '';
    const rawAlt = parent.dataset.alt || (el.querySelector('img') as HTMLImageElement)?.alt || '';
    const img = document.createElement('img');
    img.src = rawSrc;
    img.alt = rawAlt;
    img.style.cssText = \`width:100%; height:100%; object-fit:cover; filter:\${grayscale ? 'grayscale(1)' : 'none'};\`;
    overlay.appendChild(img);
    viewerRef.current!.appendChild(overlay);
    const tx0 = tileR.left - frameR.left;
    const ty0 = tileR.top - frameR.top;
    const sx0 = tileR.width / frameR.width;
    const sy0 = tileR.height / frameR.height;

    const validSx0 = isFinite(sx0) && sx0 > 0 ? sx0 : 1;
    const validSy0 = isFinite(sy0) && sy0 > 0 ? sy0 : 1;

    overlay.style.transform = \`translate(\${tx0}px, \${ty0}px) scale(\${validSx0}, \${validSy0})\`;
    setTimeout(() => {
      if (!overlay.parentElement) return;
      overlay.style.opacity = '1';
      overlay.style.transform = 'translate(0px, 0px) scale(1, 1)';
      rootRef.current?.setAttribute('data-enlarging', 'true');
    }, 16);
    const wantsResize = openedImageWidth || openedImageHeight;
    if (wantsResize) {
      const onFirstEnd = (ev: TransitionEvent) => {
        if (ev.propertyName !== 'transform') return;
        overlay.removeEventListener('transitionend', onFirstEnd);
        const prevTransition = overlay.style.transition;
        overlay.style.transition = 'none';
        const tempWidth = openedImageWidth || \`\${frameR.width}px\`;
        const tempHeight = openedImageHeight || \`\${frameR.height}px\`;
        overlay.style.width = tempWidth;
        overlay.style.height = tempHeight;
        const newRect = overlay.getBoundingClientRect();
        overlay.style.width = frameR.width + 'px';
        overlay.style.height = frameR.height + 'px';
        void overlay.offsetWidth;
        overlay.style.transition = \`left \${enlargeTransitionMs}ms ease, top \${enlargeTransitionMs}ms ease, width \${enlargeTransitionMs}ms ease, height \${enlargeTransitionMs}ms ease\`;
        const centeredLeft = frameR.left - mainR.left + (frameR.width - newRect.width) / 2;
        const centeredTop = frameR.top - mainR.top + (frameR.height - newRect.height) / 2;
        requestAnimationFrame(() => {
          overlay.style.left = \`\${centeredLeft}px\`;
          overlay.style.top = \`\${centeredTop}px\`;
          overlay.style.width = tempWidth;
          overlay.style.height = tempHeight;
        });
        const cleanupSecond = () => {
          overlay.removeEventListener('transitionend', cleanupSecond);
          overlay.style.transition = prevTransition;
        };
        overlay.addEventListener('transitionend', cleanupSecond, {
          once: true
        });
      };
      overlay.addEventListener('transitionend', onFirstEnd);
    }
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('dg-scroll-lock');
    };
  }, []);

  const cssStyles = \`
    .sphere-root {
      --radius: 520px;
      --viewer-pad: 72px;
      --circ: calc(var(--radius) * 3.14);
      --rot-y: calc((360deg / var(--segments-x)) / 2);
      --rot-x: calc((360deg / var(--segments-y)) / 2);
      --item-width: calc(var(--circ) / var(--segments-x));
      --item-height: calc(var(--circ) / var(--segments-y));
    }
    
    .sphere-root * { box-sizing: border-box; }
    .sphere, .sphere-item, .item__image { transform-style: preserve-3d; }
    
    .stage {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      position: absolute;
      inset: 0;
      margin: auto;
      perspective: calc(var(--radius) * 2);
      perspective-origin: 50% 50%;
    }
    
    .sphere {
      transform: translateZ(calc(var(--radius) * -1));
      will-change: transform;
      position: absolute;
    }
    
    .sphere-item {
      width: calc(var(--item-width) * var(--item-size-x));
      height: calc(var(--item-height) * var(--item-size-y));
      position: absolute;
      top: -999px;
      bottom: -999px;
      left: -999px;
      right: -999px;
      margin: auto;
      transform-origin: 50% 50%;
      backface-visibility: hidden;
      transition: transform 300ms;
      transform: rotateY(calc(var(--rot-y) * (var(--offset-x) + ((var(--item-size-x) - 1) / 2)) + var(--rot-y-delta, 0deg))) 
                 rotateX(calc(var(--rot-x) * (var(--offset-y) - ((var(--item-size-y) - 1) / 2)) + var(--rot-x-delta, 0deg))) 
                 translateZ(var(--radius));
    }
    
    .sphere-root[data-enlarging="true"] .scrim {
      opacity: 1 !important;
      pointer-events: all !important;
    }
    
    @media (max-aspect-ratio: 1/1) {
      .viewer-frame {
        height: auto !important;
        width: 100% !important;
      }
    }
    
    // body.dg-scroll-lock {
    //   position: fixed !important;
    //   top: 0;
    //   left: 0;
    //   width: 100% !important;
    //   height: 100% !important;
    //   overflow: hidden !important;
    //   touch-action: none !important;
    //   overscroll-behavior: contain !important;
    // }
    .item__image {
      position: absolute;
      inset: 10px;
      border-radius: var(--tile-radius, 12px);
      overflow: hidden;
      cursor: pointer;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      transition: transform 300ms;
      pointer-events: auto;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    .item__image--reference {
      position: absolute;
      inset: 10px;
      pointer-events: none;
    }
  \`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
      <div
        ref={rootRef}
        className="sphere-root relative w-full h-full"
        style={
          {
            ['--segments-x' as any]: segments,
            ['--segments-y' as any]: segments,
            ['--overlay-blur-color' as any]: overlayBlurColor,
            ['--tile-radius' as any]: imageBorderRadius,
            ['--enlarge-radius' as any]: openedImageBorderRadius,
            ['--image-filter' as any]: grayscale ? 'grayscale(1)' : 'none'
          } as React.CSSProperties
        }
      >
        <main
          ref={mainRef}
          className="absolute inset-0 grid place-items-center overflow-hidden select-none bg-transparent"
          style={{
            touchAction: 'none',
            WebkitUserSelect: 'none'
          }}
        >
          <div className="stage">
            <div ref={sphereRef} className="sphere">
              {items.map((it, i) => (
                <div
                  key={\`\${it.x},\${it.y},\${i}\`}
                  className="sphere-item absolute m-auto"
                  data-src={it.src}
                  data-alt={it.alt}
                  data-offset-x={it.x}
                  data-offset-y={it.y}
                  data-size-x={it.sizeX}
                  data-size-y={it.sizeY}
                  style={
                    {
                      ['--offset-x' as any]: it.x,
                      ['--offset-y' as any]: it.y,
                      ['--item-size-x' as any]: it.sizeX,
                      ['--item-size-y' as any]: it.sizeY,
                      top: '-999px',
                      bottom: '-999px',
                      left: '-999px',
                      right: '-999px'
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="item__image absolute block overflow-hidden cursor-pointer bg-gray-200 transition-transform duration-300"
                    role="button"
                    tabIndex={0}
                    aria-label={it.alt || 'Open image'}
                    onClick={e => {
                      if (draggingRef.current) return;
                      if (movedRef.current) return;
                      if (performance.now() - lastDragEndAt.current < 80) return;
                      if (openingRef.current) return;
                      openItemFromElement(e.currentTarget as HTMLElement);
                    }}
                    onPointerUp={e => {
                      if ((e.nativeEvent as PointerEvent).pointerType !== 'touch') return;
                      if (draggingRef.current) return;
                      if (movedRef.current) return;
                      if (performance.now() - lastDragEndAt.current < 80) return;
                      if (openingRef.current) return;
                      openItemFromElement(e.currentTarget as HTMLElement);
                    }}
                    style={{
                      inset: '10px',
                      borderRadius: \`var(--tile-radius, \${imageBorderRadius})\`,
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    <img
                      src={it.src}
                      draggable={false}
                      alt={it.alt}
                      className="w-full h-full object-cover pointer-events-none"
                      style={{
                        backfaceVisibility: 'hidden',
                        filter: \`var(--image-filter, \${grayscale ? 'grayscale(1)' : 'none'})\`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="absolute inset-0 m-auto z-[3] pointer-events-none"
            style={{
              backgroundImage: \`radial-gradient(rgba(235, 235, 235, 0) 65%, var(--overlay-blur-color, \${overlayBlurColor}) 100%)\`
            }}
          />

          <div
            className="absolute inset-0 m-auto z-[3] pointer-events-none"
            style={{
              WebkitMaskImage: \`radial-gradient(rgba(235, 235, 235, 0) 70%, var(--overlay-blur-color, \${overlayBlurColor}) 90%)\`,
              maskImage: \`radial-gradient(rgba(235, 235, 235, 0) 70%, var(--overlay-blur-color, \${overlayBlurColor}) 90%)\`,
              backdropFilter: 'blur(3px)'
            }}
          />

          <div
            className="absolute left-0 right-0 top-0 h-[120px] z-[5] pointer-events-none rotate-180"
            style={{
              background: \`linear-gradient(to bottom, transparent, var(--overlay-blur-color, \${overlayBlurColor}))\`
            }}
          />
          <div
            className="absolute left-0 right-0 bottom-0 h-[120px] z-[5] pointer-events-none"
            style={{
              background: \`linear-gradient(to bottom, transparent, var(--overlay-blur-color, \${overlayBlurColor}))\`
            }}
          />

          <div
            ref={viewerRef}
            className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
            style={{ padding: 'var(--viewer-pad)' }}
          >
            <div
              ref={scrimRef}
              className="scrim absolute inset-0 z-10 pointer-events-none opacity-0 transition-opacity duration-500"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(3px)'
              }}
            />
            <div
              ref={frameRef}
              className="viewer-frame h-full aspect-square flex"
              style={{
                borderRadius: \`var(--enlarge-radius, \${openedImageBorderRadius})\`
              }}
            />
          </div>
        </main>
      </div>
    </>
  );
}
`,Qn={dependencies:"@use-gesture/react",usage:`import DomeGallery from './DomeGallery';
export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <DomeGallery />
    </div>
  );
}`,code:Wn,css:Un,tailwind:Kn,tsCode:Zn,tsTailwind:Jn},er=[{src:"https://images.unsplash.com/photo-1755331039789-7e5680e26e8f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Abstract art"},{src:"https://images.unsplash.com/photo-1755569309049-98410b94f66d?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Modern sculpture"},{src:"https://images.unsplash.com/photo-1755497595318-7e5e3523854f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Digital artwork"},{src:"https://images.unsplash.com/photo-1755353985163-c2a0fe5ac3d8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Contemporary art"},{src:"https://images.unsplash.com/photo-1745965976680-d00be7dc0377?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Geometric pattern"},{src:"https://images.unsplash.com/photo-1752588975228-21f44630bb3c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Textured surface"},{src:"https://pbs.twimg.com/media/Gyla7NnXMAAXSo_?format=jpg&name=large",alt:"Social media image"}],ye={maxVerticalRotationDeg:5,dragSensitivity:20,enlargeTransitionMs:300,segments:35},V=(n,e,t)=>Math.min(Math.max(n,e),t),Qe=n=>(n%360+360)%360,et=n=>((n+180)%360+360)%360-180,ve=(n,e,t)=>{const r=n.dataset[e]??n.getAttribute(`data-${e}`),i=r==null?NaN:parseFloat(r);return Number.isFinite(i)?i:t};function tr(n,e){const t=Array.from({length:e},(s,l)=>-37+l*2),r=[-4,-2,0,2,4],i=[-3,-1,1,3,5],a=t.flatMap((s,l)=>(l%2===0?r:i).map(w=>({x:s,y:w,sizeX:2,sizeY:2}))),o=a.length;if(n.length===0)return a.map(s=>({...s,src:"",alt:""}));n.length>o&&console.warn(`[DomeGallery] Provided image count (${n.length}) exceeds available tiles (${o}). Some images will not be shown.`);const f=n.map(s=>typeof s=="string"?{src:s,alt:""}:{src:s.src||"",alt:s.alt||""}),d=Array.from({length:o},(s,l)=>f[l%f.length]);for(let s=1;s<d.length;s++)if(d[s].src===d[s-1].src){for(let l=s+1;l<d.length;l++)if(d[l].src!==d[s].src){const h=d[s];d[s]=d[l],d[l]=h;break}}return a.map((s,l)=>({...s,src:d[l].src,alt:d[l].alt}))}function nr(n,e,t,r,i){const a=360/i/2,o=a*(n+(t-1)/2);return{rotateX:a*(e-(r-1)/2),rotateY:o}}function rr({images:n=er,fit:e=.5,fitBasis:t="auto",minRadius:r=600,maxRadius:i=1/0,padFactor:a=.25,overlayBlurColor:o="#060010",maxVerticalRotationDeg:f=ye.maxVerticalRotationDeg,dragSensitivity:d=ye.dragSensitivity,enlargeTransitionMs:s=ye.enlargeTransitionMs,segments:l=ye.segments,dragDampening:h=2,openedImageWidth:w="250px",openedImageHeight:B="350px",imageBorderRadius:N="30px",openedImageBorderRadius:G="30px",grayscale:j=!0}){const Y=m.useRef(null),q=m.useRef(null),ue=m.useRef(null),J=m.useRef(null),Q=m.useRef(null),H=m.useRef(null),F=m.useRef(null),we=m.useRef(null),C=m.useRef({x:0,y:0}),De=m.useRef({x:0,y:0}),fe=m.useRef(null),ee=m.useRef(!1),W=m.useRef(!1),U=m.useRef(null),K=m.useRef(!1),ke=m.useRef(0),Te=m.useRef(0),de=m.useRef(!1),Pe=m.useCallback(()=>{de.current||(de.current=!0,document.body.classList.add("dg-scroll-lock"))},[]),me=m.useCallback(()=>{var u;de.current&&((u=Y.current)==null?void 0:u.getAttribute("data-enlarging"))!=="true"&&(de.current=!1,document.body.classList.remove("dg-scroll-lock"))},[]),ft=m.useMemo(()=>tr(n,l),[n,l]),pe=(u,y)=>{const X=ue.current;X&&(X.style.transform=`translateZ(calc(var(--radius) * -1)) rotateX(${u}deg) rotateY(${y}deg)`)},Ye=m.useRef(null);m.useEffect(()=>{const u=Y.current;if(!u)return;const y=new ResizeObserver(X=>{var v;const R=X[0].contentRect,D=Math.max(1,R.width),_=Math.max(1,R.height),T=Math.min(D,_),k=Math.max(D,_),P=D/_;let E;switch(t){case"min":E=T;break;case"max":E=k;break;case"width":E=D;break;case"height":E=_;break;default:E=P>=1.3?D:T}let I=E*e;const M=_*1.35;I=Math.min(I,M),I=V(I,r,i),Ye.current=Math.round(I);const g=Math.max(8,Math.round(T*a));u.style.setProperty("--radius",`${Ye.current}px`),u.style.setProperty("--viewer-pad",`${g}px`),u.style.setProperty("--overlay-blur-color",o),u.style.setProperty("--tile-radius",N),u.style.setProperty("--enlarge-radius",G),u.style.setProperty("--image-filter",j?"grayscale(1)":"none"),pe(C.current.x,C.current.y);const S=(v=Q.current)==null?void 0:v.querySelector(".enlarge");if(S&&J.current&&q.current){const c=J.current.getBoundingClientRect(),L=q.current.getBoundingClientRect();if(w&&B){const O=document.createElement("div");O.style.cssText=`position: absolute; width: ${w}; height: ${B}; visibility: hidden;`,document.body.appendChild(O);const he=O.getBoundingClientRect();document.body.removeChild(O);const ie=c.left-L.left+(c.width-he.width)/2,ae=c.top-L.top+(c.height-he.height)/2;S.style.left=`${ie}px`,S.style.top=`${ae}px`}else S.style.left=`${c.left-L.left}px`,S.style.top=`${c.top-L.top}px`,S.style.width=`${c.width}px`,S.style.height=`${c.height}px`}});return y.observe(u),()=>y.disconnect()},[e,t,r,i,a,o,j,N,G,w,B]),m.useEffect(()=>{pe(C.current.x,C.current.y)},[]);const Ee=m.useCallback(()=>{U.current&&(cancelAnimationFrame(U.current),U.current=null)},[]),dt=m.useCallback((u,y)=>{let R=V(u,-1.4,1.4)*80,D=V(y,-1.4,1.4)*80,_=0;const T=V(h??.6,0,1),k=.94+.055*T,P=.015-.01*T,E=Math.round(90+270*T),I=()=>{if(R*=k,D*=k,Math.abs(R)<P&&Math.abs(D)<P){U.current=null;return}if(++_>E){U.current=null;return}const M=V(C.current.x-D/200,-f,f),g=et(C.current.y+R/200);C.current={x:M,y:g},pe(M,g),U.current=requestAnimationFrame(I)};Ee(),U.current=requestAnimationFrame(I)},[h,f,Ee]);qn({onDragStart:({event:u})=>{if(F.current)return;Ee();const y=u;ee.current=!0,W.current=!1,De.current={...C.current},fe.current={x:y.clientX,y:y.clientY}},onDrag:({event:u,last:y,velocity:X=[0,0],direction:R=[0,0],movement:D})=>{if(F.current||!ee.current||!fe.current)return;const _=u,T=_.clientX-fe.current.x,k=_.clientY-fe.current.y;W.current||T*T+k*k>16&&(W.current=!0);const P=V(De.current.x-k/d,-f,f),E=et(De.current.y+T/d);if((C.current.x!==P||C.current.y!==E)&&(C.current={x:P,y:E},pe(P,E)),y){ee.current=!1;let[I,M]=X;const[g,S]=R;let v=I*g,c=M*S;if(Math.abs(v)<.001&&Math.abs(c)<.001&&Array.isArray(D)){const[L,z]=D;v=V(L/d*.02,-1.2,1.2),c=V(z/d*.02,-1.2,1.2)}(Math.abs(v)>.005||Math.abs(c)>.005)&&dt(v,c),W.current&&(Te.current=performance.now()),W.current=!1}}},{target:q,eventOptions:{passive:!0}}),m.useEffect(()=>{const u=H.current;if(!u)return;const y=()=>{var c,L;if(performance.now()-ke.current<250)return;const R=F.current;if(!R)return;const D=R.parentElement,_=(c=Q.current)==null?void 0:c.querySelector(".enlarge");if(!_)return;const T=D.querySelector(".item__image--reference"),k=we.current;if(!k){_.remove(),T&&T.remove(),D.style.setProperty("--rot-y-delta","0deg"),D.style.setProperty("--rot-x-delta","0deg"),R.style.visibility="",R.style.zIndex=0,F.current=null,(L=Y.current)==null||L.removeAttribute("data-enlarging"),K.current=!1,me();return}const P=_.getBoundingClientRect(),E=Y.current.getBoundingClientRect(),I={left:k.left-E.left,top:k.top-E.top,width:k.width,height:k.height},M={left:P.left-E.left,top:P.top-E.top,width:P.width,height:P.height},g=document.createElement("div");g.className="enlarge-closing",g.style.cssText=`position:absolute;left:${M.left}px;top:${M.top}px;width:${M.width}px;height:${M.height}px;z-index:9999;border-radius: var(--enlarge-radius, 32px);overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.35);transition:all ${s}ms ease-out;pointer-events:none;margin:0;transform:none;`;const S=_.querySelector("img");if(S){const z=S.cloneNode();z.style.cssText="width:100%;height:100%;object-fit:cover;",g.appendChild(z)}_.remove(),Y.current.appendChild(g),g.getBoundingClientRect(),requestAnimationFrame(()=>{g.style.left=I.left+"px",g.style.top=I.top+"px",g.style.width=I.width+"px",g.style.height=I.height+"px",g.style.opacity="0"});const v=()=>{g.remove(),we.current=null,T&&T.remove(),D.style.transition="none",R.style.transition="none",D.style.setProperty("--rot-y-delta","0deg"),D.style.setProperty("--rot-x-delta","0deg"),requestAnimationFrame(()=>{var z;R.style.visibility="",R.style.opacity="0",R.style.zIndex=0,F.current=null,(z=Y.current)==null||z.removeAttribute("data-enlarging"),requestAnimationFrame(()=>{D.style.transition="",R.style.transition="opacity 300ms ease-out",requestAnimationFrame(()=>{R.style.opacity="1",setTimeout(()=>{var O;R.style.transition="",R.style.opacity="",K.current=!1,!ee.current&&((O=Y.current)==null?void 0:O.getAttribute("data-enlarging"))!=="true"&&document.body.classList.remove("dg-scroll-lock")},300)})})})};g.addEventListener("transitionend",v,{once:!0})};u.addEventListener("click",y);const X=R=>{R.key==="Escape"&&y()};return window.addEventListener("keydown",X),()=>{u.removeEventListener("click",y),window.removeEventListener("keydown",X)}},[s,me]);const ge=m.useCallback(u=>{var Ce,Xe,$e;if(K.current)return;K.current=!0,ke.current=performance.now(),Pe();const y=u.parentElement;F.current=u,u.setAttribute("data-focused","true");const X=ve(y,"offsetX",0),R=ve(y,"offsetY",0),D=ve(y,"sizeX",2),_=ve(y,"sizeY",2),T=nr(X,R,D,_,l),k=Qe(T.rotateY),P=Qe(C.current.y);let E=-(k+P)%360;E<-180&&(E+=360);const I=-T.rotateX-C.current.x;y.style.setProperty("--rot-y-delta",`${E}deg`),y.style.setProperty("--rot-x-delta",`${I}deg`);const M=document.createElement("div");M.className="item__image item__image--reference",M.style.opacity="0",M.style.transform=`rotateX(${-T.rotateX}deg) rotateY(${-T.rotateY}deg)`,y.appendChild(M),M.offsetHeight;const g=M.getBoundingClientRect(),S=(Ce=q.current)==null?void 0:Ce.getBoundingClientRect(),v=(Xe=J.current)==null?void 0:Xe.getBoundingClientRect();if(!S||!v||g.width<=0||g.height<=0){K.current=!1,F.current=null,y.removeChild(M),me();return}we.current={left:g.left,top:g.top,width:g.width,height:g.height},u.style.visibility="hidden",u.style.zIndex=0;const c=document.createElement("div");c.className="enlarge",c.style.position="absolute",c.style.left=v.left-S.left+"px",c.style.top=v.top-S.top+"px",c.style.width=v.width+"px",c.style.height=v.height+"px",c.style.opacity="0",c.style.zIndex="30",c.style.willChange="transform, opacity",c.style.transformOrigin="top left",c.style.transition=`transform ${s}ms ease, opacity ${s}ms ease`;const L=y.dataset.src||(($e=u.querySelector("img"))==null?void 0:$e.src)||"",z=document.createElement("img");z.src=L,c.appendChild(z),Q.current.appendChild(c);const O=g.left-v.left,he=g.top-v.top,ie=g.width/v.width,ae=g.height/v.height,gt=isFinite(ie)&&ie>0?ie:1,ht=isFinite(ae)&&ae>0?ae:1;if(c.style.transform=`translate(${O}px, ${he}px) scale(${gt}, ${ht})`,setTimeout(()=>{var oe;c.parentElement&&(c.style.opacity="1",c.style.transform="translate(0px, 0px) scale(1, 1)",(oe=Y.current)==null||oe.setAttribute("data-enlarging","true"))},16),w||B){const oe=yt=>{if(yt.propertyName!=="transform")return;c.removeEventListener("transitionend",oe);const vt=c.style.transition;c.style.transition="none";const Be=w||`${v.width}px`,Le=B||`${v.height}px`;c.style.width=Be,c.style.height=Le;const ze=c.getBoundingClientRect();c.style.width=v.width+"px",c.style.height=v.height+"px",c.offsetWidth,c.style.transition=`left ${s}ms ease, top ${s}ms ease, width ${s}ms ease, height ${s}ms ease`;const Rt=v.left-S.left+(v.width-ze.width)/2,xt=v.top-S.top+(v.height-ze.height)/2;requestAnimationFrame(()=>{c.style.left=`${Rt}px`,c.style.top=`${xt}px`,c.style.width=Be,c.style.height=Le});const He=()=>{c.removeEventListener("transitionend",He),c.style.transition=vt};c.addEventListener("transitionend",He,{once:!0})};c.addEventListener("transitionend",oe)}},[s,Pe,B,w,l,me]),mt=m.useCallback(u=>{ee.current||W.current||performance.now()-Te.current<80||K.current||ge(u.currentTarget)},[ge]),pt=m.useCallback(u=>{u.pointerType==="touch"&&(ee.current||W.current||performance.now()-Te.current<80||K.current||ge(u.currentTarget))},[ge]);return m.useEffect(()=>()=>{document.body.classList.remove("dg-scroll-lock")},[]),p.jsx("div",{ref:Y,className:"sphere-root",style:{"--segments-x":l,"--segments-y":l,"--overlay-blur-color":o,"--tile-radius":N,"--enlarge-radius":G,"--image-filter":j?"grayscale(1)":"none"},children:p.jsxs("main",{ref:q,className:"sphere-main",children:[p.jsx("div",{className:"stage",children:p.jsx("div",{ref:ue,className:"sphere",children:ft.map((u,y)=>p.jsx("div",{className:"item","data-src":u.src,"data-offset-x":u.x,"data-offset-y":u.y,"data-size-x":u.sizeX,"data-size-y":u.sizeY,style:{"--offset-x":u.x,"--offset-y":u.y,"--item-size-x":u.sizeX,"--item-size-y":u.sizeY},children:p.jsx("div",{className:"item__image",role:"button",tabIndex:0,"aria-label":u.alt||"Open image",onClick:mt,onPointerUp:pt,children:p.jsx("img",{src:u.src,draggable:!1,alt:u.alt})})},`${u.x},${u.y},${y}`))})}),p.jsx("div",{className:"overlay"}),p.jsx("div",{className:"overlay overlay--blur"}),p.jsx("div",{className:"edge-fade edge-fade--top"}),p.jsx("div",{className:"edge-fade edge-fade--bottom"}),p.jsxs("div",{className:"viewer",ref:Q,children:[p.jsx("div",{ref:H,className:"scrim"}),p.jsx("div",{ref:J,className:"frame"})]})]})})}const tt={fit:.8,minRadius:600,maxVerticalRotationDeg:0,segments:34,dragDampening:2,grayscale:!0},gr=()=>{const{props:n,updateProp:e,resetProps:t,hasChanges:r}=Tt(tt),{fit:i,minRadius:a,maxVerticalRotationDeg:o,segments:f,dragDampening:d,grayscale:s}=n,l=m.useMemo(()=>[{name:"images",type:"(string | { src: string; alt?: string })[]",default:"DEFAULT_IMAGES",description:"Array of image URLs (strings) or image objects with src and optional alt text"},{name:"fit",type:"number",default:"0.5",description:"Size factor for the dome radius based on container dimensions"},{name:"fitBasis",type:"'auto' | 'min' | 'max' | 'width' | 'height'",default:"'auto'",description:"Basis for calculating the dome size"},{name:"minRadius",type:"number",default:"600",description:"Minimum radius for the dome in pixels"},{name:"maxRadius",type:"number",default:"Infinity",description:"Maximum radius for the dome in pixels"},{name:"padFactor",type:"number",default:"0.25",description:"Padding factor for the viewer area"},{name:"overlayBlurColor",type:"string",default:"'#060010'",description:"Color for the outer portion of the radial overlay blur"},{name:"maxVerticalRotationDeg",type:"number",default:"5",description:"Maximum vertical rotation angle in degrees"},{name:"dragSensitivity",type:"number",default:"20",description:"Sensitivity of drag interactions"},{name:"enlargeTransitionMs",type:"number",default:"300",description:"Duration of image enlargement transition in milliseconds"},{name:"segments",type:"number",default:"35",description:"Number of segments for both X and Y to keep the dome proportional"},{name:"dragDampening",type:"number",default:"2",description:"Damping factor for drag inertia (0-1, higher = more damping)"},{name:"openedImageWidth",type:"string",default:"'400px'",description:"Width of the enlarged image"},{name:"openedImageHeight",type:"string",default:"'400px'",description:"Height of the enlarged image"},{name:"imageBorderRadius",type:"string",default:"'30px'",description:"Border radius for closed tile images"},{name:"openedImageBorderRadius",type:"string",default:"'30px'",description:"Border radius for opened/enlarged images"},{name:"grayscale",type:"boolean",default:"true",description:"Whether to render all images in grayscale"}],[]);return p.jsx(Et,{props:n,defaultProps:tt,resetProps:t,hasChanges:r,children:p.jsxs(At,{children:[p.jsxs(Mt,{children:[p.jsx(bt,{position:"relative",className:"demo-container",h:600,p:0,overflow:"hidden",children:p.jsx(rr,{fit:i,minRadius:a,maxVerticalRotationDeg:o,segments:f,dragDampening:d,grayscale:s})}),p.jsxs(wt,{display:"flex",gap:"0.4em",mt:"1em",color:"#B19EEF",alignItems:"center",children:[p.jsx(Dt,{}),"Click images to expand"]}),p.jsxs(kt,{children:[p.jsx(se,{title:"Fit",min:.5,max:1,step:.05,value:i,onChange:h=>{e("fit",h)}}),p.jsx(se,{title:"Min Radius",min:300,max:1e3,step:50,value:a,valueUnit:"px",onChange:h=>{e("minRadius",h)}}),p.jsx(se,{title:"Max Vertical Rotation",min:0,max:20,step:1,value:o,valueUnit:"°",onChange:h=>{e("maxVerticalRotationDeg",h)}}),p.jsx(se,{title:"Segments",min:20,max:34,step:2,value:f,onChange:h=>{e("segments",h)}}),p.jsx(se,{title:"Drag Dampening",min:0,max:5,step:.2,value:d,onChange:h=>{e("dragDampening",h)}}),p.jsx(Pt,{title:"Grayscale",isChecked:s,onChange:h=>{e("grayscale",h)}})]}),p.jsx(_t,{data:l}),p.jsx(Yt,{dependencyList:["@use-gesture/react"]})]}),p.jsx(It,{children:p.jsx(St,{codeObject:Qn,componentName:"DomeGallery"})})]})})};export{gr as default};
