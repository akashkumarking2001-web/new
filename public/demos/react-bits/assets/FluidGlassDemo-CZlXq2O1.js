import{r as Z,W as $e,cx as Yn,j as de,B as Kn}from"./index-CKqfvLoB.js";import{u as Jn,C as Qn,T as Zn,P as qn,a as $n,b as ea,c as ta}from"./PropTable-BzD4cJVp.js";import{C as ra}from"./Customize-BaUKAf5J.js";import{D as oa}from"./Dependencies-DmSBXzNX.js";import{u as na}from"./useForceRerender-0lK0qxlp.js";import{P as aa}from"./PreviewSelect-CM4Sns8B.js";import{P as ct}from"./PreviewSlider-25yjOF_X.js";import{V as et,m as Je,Q as Xt,I as Hr,a_ as ia,t as St,C as it,X as sa,ba as la,b9 as ca,bb as ua,q as fa,bc as da,M as Xr,z as ha,bd as pa,aY as ma,aX as Sn,as as va,T as ga,a3 as xo,b8 as ya,K as ba,P as Yr,J as wa,j as xa,be as Sa,aV as ka,an as Ta,ai as Ca,bf as _a,S as Ma}from"./three.module-DbwSNGae.js";import{a as Ye,u as ht,g as So,s as Ea,e as kn,C as Ua,d as Pa}from"./react-three-fiber.esm-DFK4OWio.js";import{s as Tn}from"./shaderMaterial-BAAu0J8y.js";import{u as Da}from"./Texture-C7Zx9zuD.js";import{u as Fa}from"./Gltf-CLq2ZOSs.js";import{u as Or}from"./Fbo-CsDeL44I.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./field-DGUMYGrq.js";import"./slider-P7kYMDWb.js";function jt(l,r,u){return r in l?Object.defineProperty(l,r,{value:u,enumerable:!0,configurable:!0,writable:!0}):l[r]=u,l}function Lr(l,r){(r==null||r>l.length)&&(r=l.length);for(var u=0,c=new Array(r);u<r;u++)c[u]=l[u];return c}function Aa(l,r){if(l){if(typeof l=="string")return Lr(l,r);var u=Object.prototype.toString.call(l).slice(8,-1);if(u==="Object"&&l.constructor&&(u=l.constructor.name),u==="Map"||u==="Set")return Array.from(l);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return Lr(l,r)}}function Ra(l){if(Array.isArray(l))return Lr(l)}function Ia(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}function Ba(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oa(l){return Ra(l)||Ia(l)||Aa(l)||Ba()}new et;new et;function La(l,r,u){return Math.max(r,Math.min(u,l))}function Ga(l,r){return La(l-Math.floor(l/r)*r,0,r)}function za(l,r){var u=Ga(r-l,Math.PI*2);return u>Math.PI&&(u-=Math.PI*2),u}function Cn(l,r){if(!(l instanceof r))throw new TypeError("Cannot call a class as a function")}var Ne=function l(r,u,c){var t=this;Cn(this,l),jt(this,"dot2",function(e,o){return t.x*e+t.y*o}),jt(this,"dot3",function(e,o,a){return t.x*e+t.y*o+t.z*a}),this.x=r,this.y=u,this.z=c},Wa=[new Ne(1,1,0),new Ne(-1,1,0),new Ne(1,-1,0),new Ne(-1,-1,0),new Ne(1,0,1),new Ne(-1,0,1),new Ne(1,0,-1),new Ne(-1,0,-1),new Ne(0,1,1),new Ne(0,-1,1),new Ne(0,1,-1),new Ne(0,-1,-1)],ko=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],To=new Array(512),Co=new Array(512),Na=function(r){r>0&&r<1&&(r*=65536),r=Math.floor(r),r<256&&(r|=r<<8);for(var u=0;u<256;u++){var c;u&1?c=ko[u]^r&255:c=ko[u]^r>>8&255,To[u]=To[u+256]=c,Co[u]=Co[u+256]=Wa[c%12]}};Na(0);function ja(l){if(typeof l=="number")l=Math.abs(l);else if(typeof l=="string"){var r=l;l=0;for(var u=0;u<r.length;u++)l=(l+(u+1)*(r.charCodeAt(u)%96))%2147483647}return l===0&&(l=311),l}function _o(l){var r=ja(l);return function(){var u=r*48271%2147483647;return r=u,u/2147483647}}var Va=function l(r){var u=this;Cn(this,l),jt(this,"seed",0),jt(this,"init",function(c){u.seed=c,u.value=_o(c)}),jt(this,"value",_o(this.seed)),this.init(r)};new Va(Math.random());var Ha=function(r){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.01,c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1/(2*Math.PI);return c/Math.atan(1/u)*Math.atan(Math.sin(2*Math.PI*r*t)/u)},_n=function(r){return 1/(1+r+.48*r*r+.235*r*r*r)},Xa=function(r){return r},Ya={in:function(r){return 1-Math.cos(r*Math.PI/2)},out:function(r){return Math.sin(r*Math.PI/2)},inOut:function(r){return-(Math.cos(Math.PI*r)-1)/2}},Ka={in:function(r){return r*r*r},out:function(r){return 1-Math.pow(1-r,3)},inOut:function(r){return r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2}},Ja={in:function(r){return r*r*r*r*r},out:function(r){return 1-Math.pow(1-r,5)},inOut:function(r){return r<.5?16*r*r*r*r*r:1-Math.pow(-2*r+2,5)/2}},Qa={in:function(r){return 1-Math.sqrt(1-Math.pow(r,2))},out:function(r){return Math.sqrt(1-Math.pow(r-1,2))},inOut:function(r){return r<.5?(1-Math.sqrt(1-Math.pow(2*r,2)))/2:(Math.sqrt(1-Math.pow(-2*r+2,2))+1)/2}},Za={in:function(r){return r*r*r*r},out:function(r){return 1- --r*r*r*r},inOut:function(r){return r<.5?8*r*r*r*r:1-8*--r*r*r*r}},qa={in:function(r){return r===0?0:Math.pow(2,10*r-10)},out:function(r){return r===1?1:1-Math.pow(2,-10*r)},inOut:function(r){return r===0?0:r===1?1:r<.5?Math.pow(2,20*r-10)/2:(2-Math.pow(2,-20*r+10))/2}};function Ae(l,r,u){var c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.25,t=arguments.length>4&&arguments[4]!==void 0?arguments[4]:.01,e=arguments.length>5&&arguments[5]!==void 0?arguments[5]:1/0,o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:_n,a=arguments.length>7&&arguments[7]!==void 0?arguments[7]:.001,n="velocity_"+r;if(l.__damp===void 0&&(l.__damp={}),l.__damp[n]===void 0&&(l.__damp[n]=0),Math.abs(l[r]-u)<=a)return l[r]=u,!1;c=Math.max(1e-4,c);var i=2/c,s=o(i*t),f=l[r]-u,d=u,h=e*c;f=Math.min(Math.max(f,-h),h),u=l[r]-f;var p=(l.__damp[n]+i*f)*t;l.__damp[n]=(l.__damp[n]-i*p)*s;var g=u+(f+p)*s;return d-l[r]>0==g>d&&(g=d,l.__damp[n]=(g-d)/t),l[r]=g,!0}var $a=function(r){return r&&r.isCamera},ei=function(r){return r&&r.isLight},Rt=new Je,Mo=new Xt,Eo=new Xt,It=new Hr,Ar=new Je;function ti(l,r,u,c,t,e,o){typeof r=="number"?Rt.setScalar(r):Array.isArray(r)?Rt.set(r[0],r[1],r[2]):Rt.copy(r);var a=l.parent;l.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(l.matrixWorld),$a(l)||ei(l)?It.lookAt(Ar,Rt,l.up):It.lookAt(Rt,Ar,l.up),fr(l.quaternion,Eo.setFromRotationMatrix(It),u,c,t,e,o),a&&(It.extractRotation(a.matrixWorld),Mo.setFromRotationMatrix(It),fr(l.quaternion,Eo.copy(l.quaternion).premultiply(Mo.invert()),u,c,t,e,o))}function xt(l,r,u,c,t,e,o,a){return Ae(l,r,l[r]+za(l[r],u),c,t,e,o,a)}var Bt=new et,Uo,Po;function ri(l,r,u,c,t,e,o){return typeof r=="number"?Bt.setScalar(r):Array.isArray(r)?Bt.set(r[0],r[1]):Bt.copy(r),Uo=Ae(l,"x",Bt.x,u,c,t,e,o),Po=Ae(l,"y",Bt.y,u,c,t,e,o),Uo||Po}var yt=new Je,Do,Fo,Ao;function Gr(l,r,u,c,t,e,o){return typeof r=="number"?yt.setScalar(r):Array.isArray(r)?yt.set(r[0],r[1],r[2]):yt.copy(r),Do=Ae(l,"x",yt.x,u,c,t,e,o),Fo=Ae(l,"y",yt.y,u,c,t,e,o),Ao=Ae(l,"z",yt.z,u,c,t,e,o),Do||Fo||Ao}var ut=new St,Ro,Io,Bo,Oo;function oi(l,r,u,c,t,e,o){return typeof r=="number"?ut.setScalar(r):Array.isArray(r)?ut.set(r[0],r[1],r[2],r[3]):ut.copy(r),Ro=Ae(l,"x",ut.x,u,c,t,e,o),Io=Ae(l,"y",ut.y,u,c,t,e,o),Bo=Ae(l,"z",ut.z,u,c,t,e,o),Oo=Ae(l,"w",ut.w,u,c,t,e,o),Ro||Io||Bo||Oo}var Ot=new sa,Lo,Go,zo;function ni(l,r,u,c,t,e,o){return Array.isArray(r)?Ot.set(r[0],r[1],r[2],r[3]):Ot.copy(r),Lo=xt(l,"x",Ot.x,u,c,t,e,o),Go=xt(l,"y",Ot.y,u,c,t,e,o),zo=xt(l,"z",Ot.z,u,c,t,e,o),Lo||Go||zo}var bt=new it,Wo,No,jo;function ai(l,r,u,c,t,e,o){return r instanceof it?bt.copy(r):Array.isArray(r)?bt.setRGB(r[0],r[1],r[2]):bt.set(r),Wo=Ae(l,"r",bt.r,u,c,t,e,o),No=Ae(l,"g",bt.g,u,c,t,e,o),jo=Ae(l,"b",bt.b,u,c,t,e,o),Wo||No||jo}var Xe=new Xt,qe=new St,Vo=new St,Lt=new St,Ho,Xo,Yo,Ko;function fr(l,r,u,c,t,e,o){var a=l;Array.isArray(r)?Xe.set(r[0],r[1],r[2],r[3]):Xe.copy(r);var n=l.dot(Xe)>0?1:-1;return Xe.x*=n,Xe.y*=n,Xe.z*=n,Xe.w*=n,Ho=Ae(l,"x",Xe.x,u,c,t,e,o),Xo=Ae(l,"y",Xe.y,u,c,t,e,o),Yo=Ae(l,"z",Xe.z,u,c,t,e,o),Ko=Ae(l,"w",Xe.w,u,c,t,e,o),qe.set(l.x,l.y,l.z,l.w).normalize(),Vo.set(a.__damp.velocity_x,a.__damp.velocity_y,a.__damp.velocity_z,a.__damp.velocity_w),Lt.copy(qe).multiplyScalar(Vo.dot(qe)/qe.dot(qe)),a.__damp.velocity_x-=Lt.x,a.__damp.velocity_y-=Lt.y,a.__damp.velocity_z-=Lt.z,a.__damp.velocity_w-=Lt.w,l.set(qe.x,qe.y,qe.z,qe.w),Ho||Xo||Yo||Ko}var Gt=new ia,Jo,Qo,Zo;function ii(l,r,u,c,t,e,o){return Array.isArray(r)?Gt.set(r[0],r[1],r[2]):Gt.copy(r),Jo=Ae(l,"radius",Gt.radius,u,c,t,e,o),Qo=xt(l,"phi",Gt.phi,u,c,t,e,o),Zo=xt(l,"theta",Gt.theta,u,c,t,e,o),Jo||Qo||Zo}var ir=new Hr,qo=new Je,$o=new Xt,en=new Je,tn,rn,on;function si(l,r,u,c,t,e,o){var a=l;return a.__damp===void 0&&(a.__damp={position:new Je,rotation:new Xt,scale:new Je},l.decompose(a.__damp.position,a.__damp.rotation,a.__damp.scale)),Array.isArray(r)?ir.set.apply(ir,Oa(r)):ir.copy(r),ir.decompose(qo,$o,en),tn=Gr(a.__damp.position,qo,u,c,t,e,o),rn=fr(a.__damp.rotation,$o,u,c,t,e,o),on=Gr(a.__damp.scale,en,u,c,t,e,o),l.compose(a.__damp.position,a.__damp.rotation,a.__damp.scale),tn||rn||on}var zr=Object.freeze({__proto__:null,rsqw:Ha,exp:_n,linear:Xa,sine:Ya,cubic:Ka,quint:Ja,circ:Qa,quart:Za,expo:qa,damp:Ae,dampLookAt:ti,dampAngle:xt,damp2:ri,damp3:Gr,damp4:oi,dampE:ni,dampC:ai,dampQ:fr,dampS:ii,dampM:si});const Kr=Z.createContext(null);function Jr(){return Z.useContext(Kr)}function li({eps:l=1e-5,enabled:r=!0,infinite:u,horizontal:c,pages:t=1,distance:e=1,damping:o=.25,maxSpeed:a=1/0,prepend:n=!1,style:i={},children:s}){const{get:f,setEvents:d,gl:h,size:p,invalidate:g,events:m}=Ye(),[_]=Z.useState(()=>document.createElement("div")),[b]=Z.useState(()=>document.createElement("div")),[T]=Z.useState(()=>document.createElement("div")),x=h.domElement.parentNode,C=Z.useRef(0),F=Z.useMemo(()=>({el:_,eps:l,fill:b,fixed:T,horizontal:c,damping:o,offset:0,delta:0,scroll:C,pages:t,range(R,U,j=0){const y=R-j,D=y+U+j*2;return this.offset<y?0:this.offset>D?1:(this.offset-y)/(D-y)},curve(R,U,j=0){return Math.sin(this.range(R,U,j)*Math.PI)},visible(R,U,j=0){const y=R-j,D=y+U+j*2;return this.offset>=y&&this.offset<=D}}),[l,o,c,t]);Z.useEffect(()=>{_.style.position="absolute",_.style.width="100%",_.style.height="100%",_.style[c?"overflowX":"overflowY"]="auto",_.style[c?"overflowY":"overflowX"]="hidden",_.style.top="0px",_.style.left="0px";for(const U in i)_.style[U]=i[U];T.style.position="sticky",T.style.top="0px",T.style.left="0px",T.style.width="100%",T.style.height="100%",T.style.overflow="hidden",_.appendChild(T),b.style.height=c?"100%":`${t*e*100}%`,b.style.width=c?`${t*e*100}%`:"100%",b.style.pointerEvents="none",_.appendChild(b),n?x.prepend(_):x.appendChild(_),_[c?"scrollLeft":"scrollTop"]=1;const S=m.connected||h.domElement;requestAnimationFrame(()=>m.connect==null?void 0:m.connect(_));const R=f().events.compute;return d({compute(U,j){const{left:y,top:D}=x.getBoundingClientRect(),M=U.clientX-y,V=U.clientY-D;j.pointer.set(M/j.size.width*2-1,-(V/j.size.height)*2+1),j.raycaster.setFromCamera(j.pointer,j.camera)}}),()=>{x.removeChild(_),d({compute:R}),m.connect==null||m.connect(S)}},[t,e,c,_,b,T,x]),Z.useEffect(()=>{if(m.connected===_){const S=p[c?"width":"height"],R=_[c?"scrollWidth":"scrollHeight"],U=R-S;let j=0,y=!0,D=!0;const M=()=>{if(!(!r||D)&&(g(),j=_[c?"scrollLeft":"scrollTop"],C.current=j/U,u)){if(!y){if(j>=U){const z=1-F.offset;_[c?"scrollLeft":"scrollTop"]=1,C.current=F.offset=-z,y=!0}else if(j<=0){const z=1+F.offset;_[c?"scrollLeft":"scrollTop"]=R,C.current=F.offset=z,y=!0}}y&&setTimeout(()=>y=!1,40)}};_.addEventListener("scroll",M,{passive:!0}),requestAnimationFrame(()=>D=!1);const V=z=>_.scrollLeft+=z.deltaY/2;return c&&_.addEventListener("wheel",V,{passive:!0}),()=>{_.removeEventListener("scroll",M),c&&_.removeEventListener("wheel",V)}}},[_,m,p,u,F,g,c,r]);let w=0;return ht((S,R)=>{w=F.offset,zr.damp(F,"offset",C.current,o,R,a,void 0,l),zr.damp(F,"delta",Math.abs(w-F.offset),o,R,a,void 0,l),F.delta>l&&g()}),Z.createElement(Kr.Provider,{value:F},s)}const ci=Z.forwardRef(({children:l},r)=>{const u=Z.useRef(null);Z.useImperativeHandle(r,()=>u.current,[]);const c=Jr(),{width:t,height:e}=Ye(o=>o.viewport);return ht(()=>{u.current.position.x=c.horizontal?-t*(c.pages-1)*c.offset:0,u.current.position.y=c.horizontal?0:e*(c.pages-1)*c.offset}),Z.createElement("group",{ref:u},l)}),ui=Z.forwardRef(({children:l,style:r,...u},c)=>{const t=Jr(),e=Z.useRef(null);Z.useImperativeHandle(c,()=>e.current,[]);const{width:o,height:a}=Ye(s=>s.size),n=Z.useContext(So),i=Z.useMemo(()=>Yn.createRoot(t.fixed),[t.fixed]);return ht(()=>{t.delta>t.eps&&(e.current.style.transform=`translate3d(${t.horizontal?-o*(t.pages-1)*t.offset:0}px,${t.horizontal?0:a*(t.pages-1)*-t.offset}px,0)`)}),i.render(Z.createElement("div",$e({ref:e,style:{...r,position:"absolute",top:0,left:0,willChange:"transform"}},u),Z.createElement(Kr.Provider,{value:t},Z.createElement(So.Provider,{value:n},l)))),null}),nn=Z.forwardRef(({html:l,...r},u)=>{const c=l?ui:ci;return Z.createElement(c,$e({ref:u},r))});function fi(){var l=Object.create(null);function r(t,e){var o=t.id,a=t.name,n=t.dependencies;n===void 0&&(n=[]);var i=t.init;i===void 0&&(i=function(){});var s=t.getTransferables;if(s===void 0&&(s=null),!l[o])try{n=n.map(function(d){return d&&d.isWorkerModule&&(r(d,function(h){if(h instanceof Error)throw h}),d=l[d.id].value),d}),i=c("<"+a+">.init",i),s&&(s=c("<"+a+">.getTransferables",s));var f=null;typeof i=="function"?f=i.apply(void 0,n):console.error("worker module init function failed to rehydrate"),l[o]={id:o,value:f,getTransferables:s},e(f)}catch(d){d&&d.noLog||console.error(d),e(d)}}function u(t,e){var o,a=t.id,n=t.args;(!l[a]||typeof l[a].value!="function")&&e(new Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var i=(o=l[a]).value.apply(o,n);i&&typeof i.then=="function"?i.then(s,function(f){return e(f instanceof Error?f:new Error(""+f))}):s(i)}catch(f){e(f)}function s(f){try{var d=l[a].getTransferables&&l[a].getTransferables(f);(!d||!Array.isArray(d)||!d.length)&&(d=void 0),e(f,d)}catch(h){console.error(h),e(h)}}}function c(t,e){var o=void 0;self.troikaDefine=function(n){return o=n};var a=URL.createObjectURL(new Blob(["/** "+t.replace(/\*/g,"")+` **/

troikaDefine(
`+e+`
)`],{type:"application/javascript"}));try{importScripts(a)}catch(n){console.error(n)}return URL.revokeObjectURL(a),delete self.troikaDefine,o}self.addEventListener("message",function(t){var e=t.data,o=e.messageId,a=e.action,n=e.data;try{a==="registerModule"&&r(n,function(i){i instanceof Error?postMessage({messageId:o,success:!1,error:i.message}):postMessage({messageId:o,success:!0,result:{isCallable:typeof i=="function"}})}),a==="callModule"&&u(n,function(i,s){i instanceof Error?postMessage({messageId:o,success:!1,error:i.message}):postMessage({messageId:o,success:!0,result:i},s||void 0)})}catch(i){postMessage({messageId:o,success:!1,error:i.stack})}})}function di(l){var r=function(){for(var u=[],c=arguments.length;c--;)u[c]=arguments[c];return r._getInitResult().then(function(t){if(typeof t=="function")return t.apply(void 0,u);throw new Error("Worker module function was called but `init` did not return a callable function")})};return r._getInitResult=function(){var u=l.dependencies,c=l.init;u=Array.isArray(u)?u.map(function(e){return e&&(e=e.onMainThread||e,e._getInitResult&&(e=e._getInitResult())),e}):[];var t=Promise.all(u).then(function(e){return c.apply(null,e)});return r._getInitResult=function(){return t},t},r}var Mn=function(){var l=!1;if(typeof window<"u"&&typeof window.document<"u")try{var r=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));r.terminate(),l=!0}catch(u){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+u.message+"]")}return Mn=function(){return l},l},hi=0,pi=0,Rr=!1,Vt=Object.create(null),Ht=Object.create(null),Wr=Object.create(null);function kt(l){if((!l||typeof l.init!="function")&&!Rr)throw new Error("requires `options.init` function");var r=l.dependencies,u=l.init,c=l.getTransferables,t=l.workerId,e=di(l);t==null&&(t="#default");var o="workerModule"+ ++hi,a=l.name||o,n=null;r=r&&r.map(function(s){return typeof s=="function"&&!s.workerModuleData&&(Rr=!0,s=kt({workerId:t,name:"<"+a+"> function dependency: "+s.name,init:`function(){return (
`+cr(s)+`
)}`}),Rr=!1),s&&s.workerModuleData&&(s=s.workerModuleData),s});function i(){for(var s=[],f=arguments.length;f--;)s[f]=arguments[f];if(!Mn())return e.apply(void 0,s);if(!n){n=an(t,"registerModule",i.workerModuleData);var d=function(){n=null,Ht[t].delete(d)};(Ht[t]||(Ht[t]=new Set)).add(d)}return n.then(function(h){var p=h.isCallable;if(p)return an(t,"callModule",{id:o,args:s});throw new Error("Worker module function was called but `init` did not return a callable function")})}return i.workerModuleData={isWorkerModule:!0,id:o,name:a,dependencies:r,init:cr(u),getTransferables:c&&cr(c)},i.onMainThread=e,i}function mi(l){Ht[l]&&Ht[l].forEach(function(r){r()}),Vt[l]&&(Vt[l].terminate(),delete Vt[l])}function cr(l){var r=l.toString();return!/^function/.test(r)&&/^\w+\s*\(/.test(r)&&(r="function "+r),r}function vi(l){var r=Vt[l];if(!r){var u=cr(fi);r=Vt[l]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+l.replace(/\*/g,"")+` **/

;(`+u+")()"],{type:"application/javascript"}))),r.onmessage=function(c){var t=c.data,e=t.messageId,o=Wr[e];if(!o)throw new Error("WorkerModule response with empty or unknown messageId");delete Wr[e],o(t)}}return r}function an(l,r,u){return new Promise(function(c,t){var e=++pi;Wr[e]=function(o){o.success?c(o.result):t(new Error("Error in worker "+r+" call: "+o.error))},vi(l).postMessage({messageId:e,action:r,data:u})})}function En(){var l=function(r){function u(L,B,v,k,P,A,E,W){var I=1-E;W.x=I*I*L+2*I*E*v+E*E*P,W.y=I*I*B+2*I*E*k+E*E*A}function c(L,B,v,k,P,A,E,W,I,G){var Y=1-I;G.x=Y*Y*Y*L+3*Y*Y*I*v+3*Y*I*I*P+I*I*I*E,G.y=Y*Y*Y*B+3*Y*Y*I*k+3*Y*I*I*A+I*I*I*W}function t(L,B){for(var v=/([MLQCZ])([^MLQCZ]*)/g,k,P,A,E,W;k=v.exec(L);){var I=k[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(G){return parseFloat(G)});switch(k[1]){case"M":E=P=I[0],W=A=I[1];break;case"L":(I[0]!==E||I[1]!==W)&&B("L",E,W,E=I[0],W=I[1]);break;case"Q":{B("Q",E,W,E=I[2],W=I[3],I[0],I[1]);break}case"C":{B("C",E,W,E=I[4],W=I[5],I[0],I[1],I[2],I[3]);break}case"Z":(E!==P||W!==A)&&B("L",E,W,P,A);break}}}function e(L,B,v){v===void 0&&(v=16);var k={x:0,y:0};t(L,function(P,A,E,W,I,G,Y,ee,X){switch(P){case"L":B(A,E,W,I);break;case"Q":{for(var N=A,ge=E,fe=1;fe<v;fe++)u(A,E,G,Y,W,I,fe/(v-1),k),B(N,ge,k.x,k.y),N=k.x,ge=k.y;break}case"C":{for(var Q=A,te=E,le=1;le<v;le++)c(A,E,G,Y,ee,X,W,I,le/(v-1),k),B(Q,te,k.x,k.y),Q=k.x,te=k.y;break}}})}var o="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",n=new WeakMap,i={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function s(L,B){var v=L.getContext?L.getContext("webgl",i):L,k=n.get(v);if(!k){let Y=function(Q){var te=A[Q];if(!te&&(te=A[Q]=v.getExtension(Q),!te))throw new Error(Q+" not supported");return te},ee=function(Q,te){var le=v.createShader(te);return v.shaderSource(le,Q),v.compileShader(le),le},X=function(Q,te,le,H){if(!E[Q]){var re={},$={},O=v.createProgram();v.attachShader(O,ee(te,v.VERTEX_SHADER)),v.attachShader(O,ee(le,v.FRAGMENT_SHADER)),v.linkProgram(O),E[Q]={program:O,transaction:function(J){v.useProgram(O),J({setUniform:function(K,xe){for(var ne=[],ie=arguments.length-2;ie-- >0;)ne[ie]=arguments[ie+2];var ue=$[xe]||($[xe]=v.getUniformLocation(O,xe));v["uniform"+K].apply(v,[ue].concat(ne))},setAttribute:function(K,xe,ne,ie,ue){var me=re[K];me||(me=re[K]={buf:v.createBuffer(),loc:v.getAttribLocation(O,K),data:null}),v.bindBuffer(v.ARRAY_BUFFER,me.buf),v.vertexAttribPointer(me.loc,xe,v.FLOAT,!1,0,0),v.enableVertexAttribArray(me.loc),P?v.vertexAttribDivisor(me.loc,ie):Y("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(me.loc,ie),ue!==me.data&&(v.bufferData(v.ARRAY_BUFFER,ue,ne),me.data=ue)}})}}}E[Q].transaction(H)},N=function(Q,te){I++;try{v.activeTexture(v.TEXTURE0+I);var le=W[Q];le||(le=W[Q]=v.createTexture(),v.bindTexture(v.TEXTURE_2D,le),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MIN_FILTER,v.NEAREST),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MAG_FILTER,v.NEAREST)),v.bindTexture(v.TEXTURE_2D,le),te(le,I)}finally{I--}},ge=function(Q,te,le){var H=v.createFramebuffer();G.push(H),v.bindFramebuffer(v.FRAMEBUFFER,H),v.activeTexture(v.TEXTURE0+te),v.bindTexture(v.TEXTURE_2D,Q),v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Q,0);try{le(H)}finally{v.deleteFramebuffer(H),v.bindFramebuffer(v.FRAMEBUFFER,G[--G.length-1]||null)}},fe=function(){A={},E={},W={},I=-1,G.length=0};var P=typeof WebGL2RenderingContext<"u"&&v instanceof WebGL2RenderingContext,A={},E={},W={},I=-1,G=[];v.canvas.addEventListener("webglcontextlost",function(Q){fe(),Q.preventDefault()},!1),n.set(v,k={gl:v,isWebGL2:P,getExtension:Y,withProgram:X,withTexture:N,withTextureFramebuffer:ge,handleContextLoss:fe})}B(k)}function f(L,B,v,k,P,A,E,W){E===void 0&&(E=15),W===void 0&&(W=null),s(L,function(I){var G=I.gl,Y=I.withProgram,ee=I.withTexture;ee("copy",function(X,N){G.texImage2D(G.TEXTURE_2D,0,G.RGBA,P,A,0,G.RGBA,G.UNSIGNED_BYTE,B),Y("copy",o,a,function(ge){var fe=ge.setUniform,Q=ge.setAttribute;Q("aUV",2,G.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),fe("1i","image",N),G.bindFramebuffer(G.FRAMEBUFFER,W||null),G.disable(G.BLEND),G.colorMask(E&8,E&4,E&2,E&1),G.viewport(v,k,P,A),G.scissor(v,k,P,A),G.drawArrays(G.TRIANGLES,0,3)})})})}function d(L,B,v){var k=L.width,P=L.height;s(L,function(A){var E=A.gl,W=new Uint8Array(k*P*4);E.readPixels(0,0,k,P,E.RGBA,E.UNSIGNED_BYTE,W),L.width=B,L.height=v,f(E,W,0,0,k,P)})}var h=Object.freeze({__proto__:null,withWebGLContext:s,renderImageData:f,resizeWebGLCanvasWithoutClearing:d});function p(L,B,v,k,P,A){A===void 0&&(A=1);var E=new Uint8Array(L*B),W=k[2]-k[0],I=k[3]-k[1],G=[];e(v,function(Q,te,le,H){G.push({x1:Q,y1:te,x2:le,y2:H,minX:Math.min(Q,le),minY:Math.min(te,H),maxX:Math.max(Q,le),maxY:Math.max(te,H)})}),G.sort(function(Q,te){return Q.maxX-te.maxX});for(var Y=0;Y<L;Y++)for(var ee=0;ee<B;ee++){var X=ge(k[0]+W*(Y+.5)/L,k[1]+I*(ee+.5)/B),N=Math.pow(1-Math.abs(X)/P,A)/2;X<0&&(N=1-N),N=Math.max(0,Math.min(255,Math.round(N*255))),E[ee*L+Y]=N}return E;function ge(Q,te){for(var le=1/0,H=1/0,re=G.length;re--;){var $=G[re];if($.maxX+H<=Q)break;if(Q+H>$.minX&&te-H<$.maxY&&te+H>$.minY){var O=_(Q,te,$.x1,$.y1,$.x2,$.y2);O<le&&(le=O,H=Math.sqrt(le))}}return fe(Q,te)&&(H=-H),H}function fe(Q,te){for(var le=0,H=G.length;H--;){var re=G[H];if(re.maxX<=Q)break;var $=re.y1>te!=re.y2>te&&Q<(re.x2-re.x1)*(te-re.y1)/(re.y2-re.y1)+re.x1;$&&(le+=re.y1<re.y2?1:-1)}return le!==0}}function g(L,B,v,k,P,A,E,W,I,G){A===void 0&&(A=1),W===void 0&&(W=0),I===void 0&&(I=0),G===void 0&&(G=0),m(L,B,v,k,P,A,E,null,W,I,G)}function m(L,B,v,k,P,A,E,W,I,G,Y){A===void 0&&(A=1),I===void 0&&(I=0),G===void 0&&(G=0),Y===void 0&&(Y=0);for(var ee=p(L,B,v,k,P,A),X=new Uint8Array(ee.length*4),N=0;N<ee.length;N++)X[N*4+Y]=ee[N];f(E,X,I,G,L,B,1<<3-Y,W)}function _(L,B,v,k,P,A){var E=P-v,W=A-k,I=E*E+W*W,G=I?Math.max(0,Math.min(1,((L-v)*E+(B-k)*W)/I)):0,Y=L-(v+G*E),ee=B-(k+G*W);return Y*Y+ee*ee}var b=Object.freeze({__proto__:null,generate:p,generateIntoCanvas:g,generateIntoFramebuffer:m}),T="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",x="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",C="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",F=new Float32Array([0,0,2,0,0,2]),w=null,S=!1,R={},U=new WeakMap;function j(L){if(!S&&!V(L))throw new Error("WebGL generation not supported")}function y(L,B,v,k,P,A,E){if(A===void 0&&(A=1),E===void 0&&(E=null),!E&&(E=w,!E)){var W=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!W)throw new Error("OffscreenCanvas or DOM canvas not supported");E=w=W.getContext("webgl",{depth:!1})}j(E);var I=new Uint8Array(L*B*4);s(E,function(X){var N=X.gl,ge=X.withTexture,fe=X.withTextureFramebuffer;ge("readable",function(Q,te){N.texImage2D(N.TEXTURE_2D,0,N.RGBA,L,B,0,N.RGBA,N.UNSIGNED_BYTE,null),fe(Q,te,function(le){M(L,B,v,k,P,A,N,le,0,0,0),N.readPixels(0,0,L,B,N.RGBA,N.UNSIGNED_BYTE,I)})})});for(var G=new Uint8Array(L*B),Y=0,ee=0;Y<I.length;Y+=4)G[ee++]=I[Y];return G}function D(L,B,v,k,P,A,E,W,I,G){A===void 0&&(A=1),W===void 0&&(W=0),I===void 0&&(I=0),G===void 0&&(G=0),M(L,B,v,k,P,A,E,null,W,I,G)}function M(L,B,v,k,P,A,E,W,I,G,Y){A===void 0&&(A=1),I===void 0&&(I=0),G===void 0&&(G=0),Y===void 0&&(Y=0),j(E);var ee=[];e(v,function(X,N,ge,fe){ee.push(X,N,ge,fe)}),ee=new Float32Array(ee),s(E,function(X){var N=X.gl,ge=X.isWebGL2,fe=X.getExtension,Q=X.withProgram,te=X.withTexture,le=X.withTextureFramebuffer,H=X.handleContextLoss;if(te("rawDistances",function(re,$){(L!==re._lastWidth||B!==re._lastHeight)&&N.texImage2D(N.TEXTURE_2D,0,N.RGBA,re._lastWidth=L,re._lastHeight=B,0,N.RGBA,N.UNSIGNED_BYTE,null),Q("main",T,x,function(O){var pe=O.setAttribute,J=O.setUniform,ae=!ge&&fe("ANGLE_instanced_arrays"),K=!ge&&fe("EXT_blend_minmax");pe("aUV",2,N.STATIC_DRAW,0,F),pe("aLineSegment",4,N.DYNAMIC_DRAW,1,ee),J.apply(void 0,["4f","uGlyphBounds"].concat(k)),J("1f","uMaxDistance",P),J("1f","uExponent",A),le(re,$,function(xe){N.enable(N.BLEND),N.colorMask(!0,!0,!0,!0),N.viewport(0,0,L,B),N.scissor(0,0,L,B),N.blendFunc(N.ONE,N.ONE),N.blendEquationSeparate(N.FUNC_ADD,ge?N.MAX:K.MAX_EXT),N.clear(N.COLOR_BUFFER_BIT),ge?N.drawArraysInstanced(N.TRIANGLES,0,3,ee.length/4):ae.drawArraysInstancedANGLE(N.TRIANGLES,0,3,ee.length/4)})}),Q("post",o,C,function(O){O.setAttribute("aUV",2,N.STATIC_DRAW,0,F),O.setUniform("1i","tex",$),N.bindFramebuffer(N.FRAMEBUFFER,W),N.disable(N.BLEND),N.colorMask(Y===0,Y===1,Y===2,Y===3),N.viewport(I,G,L,B),N.scissor(I,G,L,B),N.drawArrays(N.TRIANGLES,0,3)})}),N.isContextLost())throw H(),new Error("webgl context lost")})}function V(L){var B=!L||L===w?R:L.canvas||L,v=U.get(B);if(v===void 0){S=!0;var k=null;try{var P=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],A=y(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,L);v=A&&P.length===A.length&&A.every(function(E,W){return E===P[W]}),v||(k="bad trial run results",console.info(P,A))}catch(E){v=!1,k=E.message}k&&console.warn("WebGL SDF generation not supported:",k),S=!1,U.set(B,v)}return v}var z=Object.freeze({__proto__:null,generate:y,generateIntoCanvas:D,generateIntoFramebuffer:M,isSupported:V});function q(L,B,v,k,P,A){P===void 0&&(P=Math.max(k[2]-k[0],k[3]-k[1])/2),A===void 0&&(A=1);try{return y.apply(z,arguments)}catch(E){return console.info("WebGL SDF generation failed, falling back to JS",E),p.apply(b,arguments)}}function oe(L,B,v,k,P,A,E,W,I,G){P===void 0&&(P=Math.max(k[2]-k[0],k[3]-k[1])/2),A===void 0&&(A=1),W===void 0&&(W=0),I===void 0&&(I=0),G===void 0&&(G=0);try{return D.apply(z,arguments)}catch(Y){return console.info("WebGL SDF generation failed, falling back to JS",Y),g.apply(b,arguments)}}return r.forEachPathCommand=t,r.generate=q,r.generateIntoCanvas=oe,r.javascript=b,r.pathToLineSegments=e,r.webgl=z,r.webglUtils=h,Object.defineProperty(r,"__esModule",{value:!0}),r}({});return l}function gi(){var l=function(r){var u={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},c={},t={};c.L=1,t[1]="L",Object.keys(u).forEach(function(H,re){c[H]=1<<re+1,t[c[H]]=H}),Object.freeze(c);var e=c.LRI|c.RLI|c.FSI,o=c.L|c.R|c.AL,a=c.B|c.S|c.WS|c.ON|c.FSI|c.LRI|c.RLI|c.PDI,n=c.BN|c.RLE|c.LRE|c.RLO|c.LRO|c.PDF,i=c.S|c.WS|c.B|e|c.PDI|n,s=null;function f(){if(!s){s=new Map;var H=function($){if(u.hasOwnProperty($)){var O=0;u[$].split(",").forEach(function(pe){var J=pe.split("+"),ae=J[0],K=J[1];ae=parseInt(ae,36),K=K?parseInt(K,36):0,s.set(O+=ae,c[$]);for(var xe=0;xe<K;xe++)s.set(++O,c[$])})}};for(var re in u)H(re)}}function d(H){return f(),s.get(H.codePointAt(0))||c.L}function h(H){return t[d(H)]}var p={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function g(H,re){var $=36,O=0,pe=new Map,J=re&&new Map,ae;return H.split(",").forEach(function K(xe){if(xe.indexOf("+")!==-1)for(var ne=+xe;ne--;)K(ae);else{ae=xe;var ie=xe.split(">"),ue=ie[0],me=ie[1];ue=String.fromCodePoint(O+=parseInt(ue,$)),me=String.fromCodePoint(O+=parseInt(me,$)),pe.set(ue,me),re&&J.set(me,ue)}}),{map:pe,reverseMap:J}}var m,_,b;function T(){if(!m){var H=g(p.pairs,!0),re=H.map,$=H.reverseMap;m=re,_=$,b=g(p.canonical,!1).map}}function x(H){return T(),m.get(H)||null}function C(H){return T(),_.get(H)||null}function F(H){return T(),b.get(H)||null}var w=c.L,S=c.R,R=c.EN,U=c.ES,j=c.ET,y=c.AN,D=c.CS,M=c.B,V=c.S,z=c.ON,q=c.BN,oe=c.NSM,L=c.AL,B=c.LRO,v=c.RLO,k=c.LRE,P=c.RLE,A=c.PDF,E=c.LRI,W=c.RLI,I=c.FSI,G=c.PDI;function Y(H,re){for(var $=125,O=new Uint32Array(H.length),pe=0;pe<H.length;pe++)O[pe]=d(H[pe]);var J=new Map;function ae(Ge,He){var ze=O[Ge];O[Ge]=He,J.set(ze,J.get(ze)-1),ze&a&&J.set(a,J.get(a)-1),J.set(He,(J.get(He)||0)+1),He&a&&J.set(a,(J.get(a)||0)+1)}for(var K=new Uint8Array(H.length),xe=new Map,ne=[],ie=null,ue=0;ue<H.length;ue++)ie||ne.push(ie={start:ue,end:H.length-1,level:re==="rtl"?1:re==="ltr"?0:bo(ue,!1)}),O[ue]&M&&(ie.end=ue,ie=null);for(var me=P|k|v|B|e|G|A|M,Te=function(Ge){return Ge+(Ge&1?1:2)},Ue=function(Ge){return Ge+(Ge&1?2:1)},ye=0;ye<ne.length;ye++){ie=ne[ye];var be=[{_level:ie.level,_override:0,_isolate:0}],ce=void 0,Pe=0,_e=0,Le=0;J.clear();for(var Ce=ie.start;Ce<=ie.end;Ce++){var he=O[Ce];if(ce=be[be.length-1],J.set(he,(J.get(he)||0)+1),he&a&&J.set(a,(J.get(a)||0)+1),he&me)if(he&(P|k)){K[Ce]=ce._level;var Se=(he===P?Ue:Te)(ce._level);Se<=$&&!Pe&&!_e?be.push({_level:Se,_override:0,_isolate:0}):Pe||_e++}else if(he&(v|B)){K[Ce]=ce._level;var tt=(he===v?Ue:Te)(ce._level);tt<=$&&!Pe&&!_e?be.push({_level:tt,_override:he&v?S:w,_isolate:0}):Pe||_e++}else if(he&e){he&I&&(he=bo(Ce+1,!0)===1?W:E),K[Ce]=ce._level,ce._override&&ae(Ce,ce._override);var ke=(he===W?Ue:Te)(ce._level);ke<=$&&Pe===0&&_e===0?(Le++,be.push({_level:ke,_override:0,_isolate:1,_isolInitIndex:Ce})):Pe++}else if(he&G){if(Pe>0)Pe--;else if(Le>0){for(_e=0;!be[be.length-1]._isolate;)be.pop();var we=be[be.length-1]._isolInitIndex;we!=null&&(xe.set(we,Ce),xe.set(Ce,we)),be.pop(),Le--}ce=be[be.length-1],K[Ce]=ce._level,ce._override&&ae(Ce,ce._override)}else he&A?(Pe===0&&(_e>0?_e--:!ce._isolate&&be.length>1&&(be.pop(),ce=be[be.length-1])),K[Ce]=ce._level):he&M&&(K[Ce]=ie.level);else K[Ce]=ce._level,ce._override&&he!==q&&ae(Ce,ce._override)}for(var De=[],Me=null,ve=ie.start;ve<=ie.end;ve++){var Ee=O[ve];if(!(Ee&n)){var Be=K[ve],Ie=Ee&e,Fe=Ee===G;Me&&Be===Me._level?(Me._end=ve,Me._endsWithIsolInit=Ie):De.push(Me={_start:ve,_end:ve,_level:Be,_startsWithPDI:Fe,_endsWithIsolInit:Ie})}}for(var je=[],rt=0;rt<De.length;rt++){var Qe=De[rt];if(!Qe._startsWithPDI||Qe._startsWithPDI&&!xe.has(Qe._start)){for(var ot=[Me=Qe],st=void 0;Me&&Me._endsWithIsolInit&&(st=xe.get(Me._end))!=null;)for(var Ze=rt+1;Ze<De.length;Ze++)if(De[Ze]._start===st){ot.push(Me=De[Ze]);break}for(var Oe=[],lt=0;lt<ot.length;lt++)for(var qr=ot[lt],hr=qr._start;hr<=qr._end;hr++)Oe.push(hr);for(var Wn=K[Oe[0]],$r=ie.level,Yt=Oe[0]-1;Yt>=0;Yt--)if(!(O[Yt]&n)){$r=K[Yt];break}var pr=Oe[Oe.length-1],Nn=K[pr],eo=ie.level;if(!(O[pr]&e)){for(var Kt=pr+1;Kt<=ie.end;Kt++)if(!(O[Kt]&n)){eo=K[Kt];break}}je.push({_seqIndices:Oe,_sosType:Math.max($r,Wn)%2?S:w,_eosType:Math.max(eo,Nn)%2?S:w})}}for(var mr=0;mr<je.length;mr++){var vr=je[mr],se=vr._seqIndices,Tt=vr._sosType,jn=vr._eosType,pt=K[se[0]]&1?S:w;if(J.get(oe))for(var Jt=0;Jt<se.length;Jt++){var to=se[Jt];if(O[to]&oe){for(var gr=Tt,Qt=Jt-1;Qt>=0;Qt--)if(!(O[se[Qt]]&n)){gr=O[se[Qt]];break}ae(to,gr&(e|G)?z:gr)}}if(J.get(R))for(var Zt=0;Zt<se.length;Zt++){var ro=se[Zt];if(O[ro]&R)for(var qt=Zt-1;qt>=-1;qt--){var oo=qt===-1?Tt:O[se[qt]];if(oo&o){oo===L&&ae(ro,y);break}}}if(J.get(L))for(var yr=0;yr<se.length;yr++){var no=se[yr];O[no]&L&&ae(no,S)}if(J.get(U)||J.get(D))for(var Ct=1;Ct<se.length-1;Ct++){var br=se[Ct];if(O[br]&(U|D)){for(var mt=0,wr=0,xr=Ct-1;xr>=0&&(mt=O[se[xr]],!!(mt&n));xr--);for(var Sr=Ct+1;Sr<se.length&&(wr=O[se[Sr]],!!(wr&n));Sr++);mt===wr&&(O[br]===U?mt===R:mt&(R|y))&&ae(br,mt)}}if(J.get(R))for(var Ke=0;Ke<se.length;Ke++){var Vn=se[Ke];if(O[Vn]&R){for(var $t=Ke-1;$t>=0&&O[se[$t]]&(j|n);$t--)ae(se[$t],R);for(Ke++;Ke<se.length&&O[se[Ke]]&(j|n|R);Ke++)O[se[Ke]]!==R&&ae(se[Ke],R)}}if(J.get(j)||J.get(U)||J.get(D))for(var _t=0;_t<se.length;_t++){var ao=se[_t];if(O[ao]&(j|U|D)){ae(ao,z);for(var er=_t-1;er>=0&&O[se[er]]&n;er--)ae(se[er],z);for(var tr=_t+1;tr<se.length&&O[se[tr]]&n;tr++)ae(se[tr],z)}}if(J.get(R))for(var kr=0,io=Tt;kr<se.length;kr++){var so=se[kr],Tr=O[so];Tr&R?io===w&&ae(so,w):Tr&o&&(io=Tr)}if(J.get(a)){var Mt=S|R|y,lo=Mt|w,rr=[];{for(var vt=[],gt=0;gt<se.length;gt++)if(O[se[gt]]&a){var Et=H[se[gt]],co=void 0;if(x(Et)!==null)if(vt.length<63)vt.push({char:Et,seqIndex:gt});else break;else if((co=C(Et))!==null)for(var Ut=vt.length-1;Ut>=0;Ut--){var Cr=vt[Ut].char;if(Cr===co||Cr===C(F(Et))||x(F(Cr))===Et){rr.push([vt[Ut].seqIndex,gt]),vt.length=Ut;break}}}rr.sort(function(Ge,He){return Ge[0]-He[0]})}for(var _r=0;_r<rr.length;_r++){for(var uo=rr[_r],or=uo[0],Mr=uo[1],fo=!1,Ve=0,Er=or+1;Er<Mr;Er++){var ho=se[Er];if(O[ho]&lo){fo=!0;var po=O[ho]&Mt?S:w;if(po===pt){Ve=po;break}}}if(fo&&!Ve){Ve=Tt;for(var Ur=or-1;Ur>=0;Ur--){var mo=se[Ur];if(O[mo]&lo){var vo=O[mo]&Mt?S:w;vo!==pt?Ve=vo:Ve=pt;break}}}if(Ve){if(O[se[or]]=O[se[Mr]]=Ve,Ve!==pt){for(var Pt=or+1;Pt<se.length;Pt++)if(!(O[se[Pt]]&n)){d(H[se[Pt]])&oe&&(O[se[Pt]]=Ve);break}}if(Ve!==pt){for(var Dt=Mr+1;Dt<se.length;Dt++)if(!(O[se[Dt]]&n)){d(H[se[Dt]])&oe&&(O[se[Dt]]=Ve);break}}}}for(var nt=0;nt<se.length;nt++)if(O[se[nt]]&a){for(var go=nt,Pr=nt,Dr=Tt,Ft=nt-1;Ft>=0;Ft--)if(O[se[Ft]]&n)go=Ft;else{Dr=O[se[Ft]]&Mt?S:w;break}for(var yo=jn,At=nt+1;At<se.length;At++)if(O[se[At]]&(a|n))Pr=At;else{yo=O[se[At]]&Mt?S:w;break}for(var Fr=go;Fr<=Pr;Fr++)O[se[Fr]]=Dr===yo?Dr:pt;nt=Pr}}}for(var We=ie.start;We<=ie.end;We++){var Hn=K[We],nr=O[We];if(Hn&1?nr&(w|R|y)&&K[We]++:nr&S?K[We]++:nr&(y|R)&&(K[We]+=2),nr&n&&(K[We]=We===0?ie.level:K[We-1]),We===ie.end||d(H[We])&(V|M))for(var ar=We;ar>=0&&d(H[ar])&i;ar--)K[ar]=ie.level}}return{levels:K,paragraphs:ne};function bo(Ge,He){for(var ze=Ge;ze<H.length;ze++){var at=O[ze];if(at&(S|L))return 1;if(at&(M|w)||He&&at===G)return 0;if(at&e){var wo=Xn(ze);ze=wo===-1?H.length:wo}}return 0}function Xn(Ge){for(var He=1,ze=Ge+1;ze<H.length;ze++){var at=O[ze];if(at&M)break;if(at&G){if(--He===0)return ze}else at&e&&He++}return-1}}var ee="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",X;function N(){if(!X){var H=g(ee,!0),re=H.map,$=H.reverseMap;$.forEach(function(O,pe){re.set(pe,O)}),X=re}}function ge(H){return N(),X.get(H)||null}function fe(H,re,$,O){var pe=H.length;$=Math.max(0,$==null?0:+$),O=Math.min(pe-1,O==null?pe-1:+O);for(var J=new Map,ae=$;ae<=O;ae++)if(re[ae]&1){var K=ge(H[ae]);K!==null&&J.set(ae,K)}return J}function Q(H,re,$,O){var pe=H.length;$=Math.max(0,$==null?0:+$),O=Math.min(pe-1,O==null?pe-1:+O);var J=[];return re.paragraphs.forEach(function(ae){var K=Math.max($,ae.start),xe=Math.min(O,ae.end);if(K<xe){for(var ne=re.levels.slice(K,xe+1),ie=xe;ie>=K&&d(H[ie])&i;ie--)ne[ie]=ae.level;for(var ue=ae.level,me=1/0,Te=0;Te<ne.length;Te++){var Ue=ne[Te];Ue>ue&&(ue=Ue),Ue<me&&(me=Ue|1)}for(var ye=ue;ye>=me;ye--)for(var be=0;be<ne.length;be++)if(ne[be]>=ye){for(var ce=be;be+1<ne.length&&ne[be+1]>=ye;)be++;be>ce&&J.push([ce+K,be+K])}}}),J}function te(H,re,$,O){var pe=le(H,re,$,O),J=[].concat(H);return pe.forEach(function(ae,K){J[K]=(re.levels[ae]&1?ge(H[ae]):null)||H[ae]}),J.join("")}function le(H,re,$,O){for(var pe=Q(H,re,$,O),J=[],ae=0;ae<H.length;ae++)J[ae]=ae;return pe.forEach(function(K){for(var xe=K[0],ne=K[1],ie=J.slice(xe,ne+1),ue=ie.length;ue--;)J[ne-ue]=ie[ue]}),J}return r.closingToOpeningBracket=C,r.getBidiCharType=d,r.getBidiCharTypeName=h,r.getCanonicalBracket=F,r.getEmbeddingLevels=Y,r.getMirroredCharacter=ge,r.getMirroredCharactersMap=fe,r.getReorderSegments=Q,r.getReorderedIndices=le,r.getReorderedString=te,r.openingToClosingBracket=x,Object.defineProperty(r,"__esModule",{value:!0}),r}({});return l}const Un=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Nr(l){const r=/^[ \t]*#include +<([\w\d./]+)>/gm;function u(c,t){let e=da[t];return e?Nr(e):c}return l.replace(r,u)}const Re=[];for(let l=0;l<256;l++)Re[l]=(l<16?"0":"")+l.toString(16);function yi(){const l=Math.random()*4294967295|0,r=Math.random()*4294967295|0,u=Math.random()*4294967295|0,c=Math.random()*4294967295|0;return(Re[l&255]+Re[l>>8&255]+Re[l>>16&255]+Re[l>>24&255]+"-"+Re[r&255]+Re[r>>8&255]+"-"+Re[r>>16&15|64]+Re[r>>24&255]+"-"+Re[u&63|128]+Re[u>>8&255]+"-"+Re[u>>16&255]+Re[u>>24&255]+Re[c&255]+Re[c>>8&255]+Re[c>>16&255]+Re[c>>24&255]).toUpperCase()}const ft=Object.assign||function(){let l=arguments[0];for(let r=1,u=arguments.length;r<u;r++){let c=arguments[r];if(c)for(let t in c)Object.prototype.hasOwnProperty.call(c,t)&&(l[t]=c[t])}return l},bi=Date.now(),sn=new WeakMap,ln=new Map;let wi=1e10;function jr(l,r){const u=Ti(r);let c=sn.get(l);if(c||sn.set(l,c=Object.create(null)),c[u])return new c[u];const t=`_onBeforeCompile${u}`,e=function(i,s){l.onBeforeCompile.call(this,i,s);const f=this.customProgramCacheKey()+"|"+i.vertexShader+"|"+i.fragmentShader;let d=ln[f];if(!d){const h=xi(this,i,r,u);d=ln[f]=h}i.vertexShader=d.vertexShader,i.fragmentShader=d.fragmentShader,ft(i.uniforms,this.uniforms),r.timeUniform&&(i.uniforms[r.timeUniform]={get value(){return Date.now()-bi}}),this[t]&&this[t](i)},o=function(){return a(r.chained?l:l.clone())},a=function(i){const s=Object.create(i,n);return Object.defineProperty(s,"baseMaterial",{value:l}),Object.defineProperty(s,"id",{value:wi++}),s.uuid=yi(),s.uniforms=ft({},i.uniforms,r.uniforms),s.defines=ft({},i.defines,r.defines),s.defines[`TROIKA_DERIVED_MATERIAL_${u}`]="",s.extensions=ft({},i.extensions,r.extensions),s._listeners=void 0,s},n={constructor:{value:o},isDerivedMaterial:{value:!0},type:{get:()=>l.type,set:i=>{l.type=i}},isDerivedFrom:{writable:!0,configurable:!0,value:function(i){const s=this.baseMaterial;return i===s||s.isDerivedMaterial&&s.isDerivedFrom(i)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return l.customProgramCacheKey()+"|"+u}},onBeforeCompile:{get(){return e},set(i){this[t]=i}},copy:{writable:!0,configurable:!0,value:function(i){return l.copy.call(this,i),!l.isShaderMaterial&&!l.isDerivedMaterial&&(ft(this.extensions,i.extensions),ft(this.defines,i.defines),ft(this.uniforms,fa.clone(i.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const i=new l.constructor;return a(i).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let i=this._depthMaterial;return i||(i=this._depthMaterial=jr(l.isDerivedMaterial?l.getDepthMaterial():new ca({depthPacking:ua}),r),i.defines.IS_DEPTH_MATERIAL="",i.uniforms=this.uniforms),i}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let i=this._distanceMaterial;return i||(i=this._distanceMaterial=jr(l.isDerivedMaterial?l.getDistanceMaterial():new la,r),i.defines.IS_DISTANCE_MATERIAL="",i.uniforms=this.uniforms),i}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:i,_distanceMaterial:s}=this;i&&i.dispose(),s&&s.dispose(),l.dispose.call(this)}}};return c[u]=o,new o}function xi(l,{vertexShader:r,fragmentShader:u},c,t){let{vertexDefs:e,vertexMainIntro:o,vertexMainOutro:a,vertexTransform:n,fragmentDefs:i,fragmentMainIntro:s,fragmentMainOutro:f,fragmentColorTransform:d,customRewriter:h,timeUniform:p}=c;if(e=e||"",o=o||"",a=a||"",i=i||"",s=s||"",f=f||"",(n||h)&&(r=Nr(r)),(d||h)&&(u=u.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),u=Nr(u)),h){let g=h({vertexShader:r,fragmentShader:u});r=g.vertexShader,u=g.fragmentShader}if(d){let g=[];u=u.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(g.push(m),"")),f=`${d}
${g.join(`
`)}
${f}`}if(p){const g=`
uniform float ${p};
`;e=g+e,i=g+i}return n&&(r=`vec3 troika_position_${t};
vec3 troika_normal_${t};
vec2 troika_uv_${t};
${r}
`,e=`${e}
void troikaVertexTransform${t}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${n}
}
`,o=`
troika_position_${t} = vec3(position);
troika_normal_${t} = vec3(normal);
troika_uv_${t} = vec2(uv);
troikaVertexTransform${t}(troika_position_${t}, troika_normal_${t}, troika_uv_${t});
${o}
`,r=r.replace(/\b(position|normal|uv)\b/g,(g,m,_,b)=>/\battribute\s+vec[23]\s+$/.test(b.substr(0,_))?m:`troika_${m}_${t}`),l.map&&l.map.channel>0||(r=r.replace(/\bMAP_UV\b/g,`troika_uv_${t}`))),r=cn(r,t,e,o,a),u=cn(u,t,i,s,f),{vertexShader:r,fragmentShader:u}}function cn(l,r,u,c,t){return(c||t||u)&&(l=l.replace(Un,`
${u}
void troikaOrigMain${r}() {`),l+=`
void main() {
  ${c}
  troikaOrigMain${r}();
  ${t}
}`),l}function Si(l,r){return l==="uniforms"?void 0:typeof r=="function"?r.toString():r}let ki=0;const un=new Map;function Ti(l){const r=JSON.stringify(l,Si);let u=un.get(r);return u==null&&un.set(r,u=++ki),u}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function Ci(){return typeof window>"u"&&(self.window=self),function(l){var r={parse:function(t){var e=r._bin,o=new Uint8Array(t);if(e.readASCII(o,0,4)=="ttcf"){var a=4;e.readUshort(o,a),a+=2,e.readUshort(o,a),a+=2;var n=e.readUint(o,a);a+=4;for(var i=[],s=0;s<n;s++){var f=e.readUint(o,a);a+=4,i.push(r._readFont(o,f))}return i}return[r._readFont(o,0)]},_readFont:function(t,e){var o=r._bin,a=e;o.readFixed(t,e),e+=4;var n=o.readUshort(t,e);e+=2,o.readUshort(t,e),e+=2,o.readUshort(t,e),e+=2,o.readUshort(t,e),e+=2;for(var i=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],s={_data:t,_offset:a},f={},d=0;d<n;d++){var h=o.readASCII(t,e,4);e+=4,o.readUint(t,e),e+=4;var p=o.readUint(t,e);e+=4;var g=o.readUint(t,e);e+=4,f[h]={offset:p,length:g}}for(d=0;d<i.length;d++){var m=i[d];f[m]&&(s[m.trim()]=r[m.trim()].parse(t,f[m].offset,f[m].length,s))}return s},_tabOffset:function(t,e,o){for(var a=r._bin,n=a.readUshort(t,o+4),i=o+12,s=0;s<n;s++){var f=a.readASCII(t,i,4);i+=4,a.readUint(t,i),i+=4;var d=a.readUint(t,i);if(i+=4,a.readUint(t,i),i+=4,f==e)return d}return 0}};r._bin={readFixed:function(t,e){return(t[e]<<8|t[e+1])+(t[e+2]<<8|t[e+3])/65540},readF2dot14:function(t,e){return r._bin.readShort(t,e)/16384},readInt:function(t,e){return r._bin._view(t).getInt32(e)},readInt8:function(t,e){return r._bin._view(t).getInt8(e)},readShort:function(t,e){return r._bin._view(t).getInt16(e)},readUshort:function(t,e){return r._bin._view(t).getUint16(e)},readUshorts:function(t,e,o){for(var a=[],n=0;n<o;n++)a.push(r._bin.readUshort(t,e+2*n));return a},readUint:function(t,e){return r._bin._view(t).getUint32(e)},readUint64:function(t,e){return 4294967296*r._bin.readUint(t,e)+r._bin.readUint(t,e+4)},readASCII:function(t,e,o){for(var a="",n=0;n<o;n++)a+=String.fromCharCode(t[e+n]);return a},readUnicode:function(t,e,o){for(var a="",n=0;n<o;n++){var i=t[e++]<<8|t[e++];a+=String.fromCharCode(i)}return a},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(t,e,o){var a=r._bin._tdec;return a&&e==0&&o==t.length?a.decode(t):r._bin.readASCII(t,e,o)},readBytes:function(t,e,o){for(var a=[],n=0;n<o;n++)a.push(t[e+n]);return a},readASCIIArray:function(t,e,o){for(var a=[],n=0;n<o;n++)a.push(String.fromCharCode(t[e+n]));return a},_view:function(t){return t._dataView||(t._dataView=t.buffer?new DataView(t.buffer,t.byteOffset,t.byteLength):new DataView(new Uint8Array(t).buffer))}},r._lctf={},r._lctf.parse=function(t,e,o,a,n){var i=r._bin,s={},f=e;i.readFixed(t,e),e+=4;var d=i.readUshort(t,e);e+=2;var h=i.readUshort(t,e);e+=2;var p=i.readUshort(t,e);return e+=2,s.scriptList=r._lctf.readScriptList(t,f+d),s.featureList=r._lctf.readFeatureList(t,f+h),s.lookupList=r._lctf.readLookupList(t,f+p,n),s},r._lctf.readLookupList=function(t,e,o){var a=r._bin,n=e,i=[],s=a.readUshort(t,e);e+=2;for(var f=0;f<s;f++){var d=a.readUshort(t,e);e+=2;var h=r._lctf.readLookupTable(t,n+d,o);i.push(h)}return i},r._lctf.readLookupTable=function(t,e,o){var a=r._bin,n=e,i={tabs:[]};i.ltype=a.readUshort(t,e),e+=2,i.flag=a.readUshort(t,e),e+=2;var s=a.readUshort(t,e);e+=2;for(var f=i.ltype,d=0;d<s;d++){var h=a.readUshort(t,e);e+=2;var p=o(t,f,n+h,i);i.tabs.push(p)}return i},r._lctf.numOfOnes=function(t){for(var e=0,o=0;o<32;o++)t>>>o&1&&e++;return e},r._lctf.readClassDef=function(t,e){var o=r._bin,a=[],n=o.readUshort(t,e);if(e+=2,n==1){var i=o.readUshort(t,e);e+=2;var s=o.readUshort(t,e);e+=2;for(var f=0;f<s;f++)a.push(i+f),a.push(i+f),a.push(o.readUshort(t,e)),e+=2}if(n==2){var d=o.readUshort(t,e);for(e+=2,f=0;f<d;f++)a.push(o.readUshort(t,e)),e+=2,a.push(o.readUshort(t,e)),e+=2,a.push(o.readUshort(t,e)),e+=2}return a},r._lctf.getInterval=function(t,e){for(var o=0;o<t.length;o+=3){var a=t[o],n=t[o+1];if(t[o+2],a<=e&&e<=n)return o}return-1},r._lctf.readCoverage=function(t,e){var o=r._bin,a={};a.fmt=o.readUshort(t,e),e+=2;var n=o.readUshort(t,e);return e+=2,a.fmt==1&&(a.tab=o.readUshorts(t,e,n)),a.fmt==2&&(a.tab=o.readUshorts(t,e,3*n)),a},r._lctf.coverageIndex=function(t,e){var o=t.tab;if(t.fmt==1)return o.indexOf(e);if(t.fmt==2){var a=r._lctf.getInterval(o,e);if(a!=-1)return o[a+2]+(e-o[a])}return-1},r._lctf.readFeatureList=function(t,e){var o=r._bin,a=e,n=[],i=o.readUshort(t,e);e+=2;for(var s=0;s<i;s++){var f=o.readASCII(t,e,4);e+=4;var d=o.readUshort(t,e);e+=2;var h=r._lctf.readFeatureTable(t,a+d);h.tag=f.trim(),n.push(h)}return n},r._lctf.readFeatureTable=function(t,e){var o=r._bin,a=e,n={},i=o.readUshort(t,e);e+=2,i>0&&(n.featureParams=a+i);var s=o.readUshort(t,e);e+=2,n.tab=[];for(var f=0;f<s;f++)n.tab.push(o.readUshort(t,e+2*f));return n},r._lctf.readScriptList=function(t,e){var o=r._bin,a=e,n={},i=o.readUshort(t,e);e+=2;for(var s=0;s<i;s++){var f=o.readASCII(t,e,4);e+=4;var d=o.readUshort(t,e);e+=2,n[f.trim()]=r._lctf.readScriptTable(t,a+d)}return n},r._lctf.readScriptTable=function(t,e){var o=r._bin,a=e,n={},i=o.readUshort(t,e);e+=2,i>0&&(n.default=r._lctf.readLangSysTable(t,a+i));var s=o.readUshort(t,e);e+=2;for(var f=0;f<s;f++){var d=o.readASCII(t,e,4);e+=4;var h=o.readUshort(t,e);e+=2,n[d.trim()]=r._lctf.readLangSysTable(t,a+h)}return n},r._lctf.readLangSysTable=function(t,e){var o=r._bin,a={};o.readUshort(t,e),e+=2,a.reqFeature=o.readUshort(t,e),e+=2;var n=o.readUshort(t,e);return e+=2,a.features=o.readUshorts(t,e,n),a},r.CFF={},r.CFF.parse=function(t,e,o){var a=r._bin;(t=new Uint8Array(t.buffer,e,o))[e=0],t[++e],t[++e],t[++e],e++;var n=[];e=r.CFF.readIndex(t,e,n);for(var i=[],s=0;s<n.length-1;s++)i.push(a.readASCII(t,e+n[s],n[s+1]-n[s]));e+=n[n.length-1];var f=[];e=r.CFF.readIndex(t,e,f);var d=[];for(s=0;s<f.length-1;s++)d.push(r.CFF.readDict(t,e+f[s],e+f[s+1]));e+=f[f.length-1];var h=d[0],p=[];e=r.CFF.readIndex(t,e,p);var g=[];for(s=0;s<p.length-1;s++)g.push(a.readASCII(t,e+p[s],p[s+1]-p[s]));if(e+=p[p.length-1],r.CFF.readSubrs(t,e,h),h.CharStrings){e=h.CharStrings,p=[],e=r.CFF.readIndex(t,e,p);var m=[];for(s=0;s<p.length-1;s++)m.push(a.readBytes(t,e+p[s],p[s+1]-p[s]));h.CharStrings=m}if(h.ROS){e=h.FDArray;var _=[];for(e=r.CFF.readIndex(t,e,_),h.FDArray=[],s=0;s<_.length-1;s++){var b=r.CFF.readDict(t,e+_[s],e+_[s+1]);r.CFF._readFDict(t,b,g),h.FDArray.push(b)}e+=_[_.length-1],e=h.FDSelect,h.FDSelect=[];var T=t[e];if(e++,T!=3)throw T;var x=a.readUshort(t,e);for(e+=2,s=0;s<x+1;s++)h.FDSelect.push(a.readUshort(t,e),t[e+2]),e+=3}return h.Encoding&&(h.Encoding=r.CFF.readEncoding(t,h.Encoding,h.CharStrings.length)),h.charset&&(h.charset=r.CFF.readCharset(t,h.charset,h.CharStrings.length)),r.CFF._readFDict(t,h,g),h},r.CFF._readFDict=function(t,e,o){var a;for(var n in e.Private&&(a=e.Private[1],e.Private=r.CFF.readDict(t,a,a+e.Private[0]),e.Private.Subrs&&r.CFF.readSubrs(t,a+e.Private.Subrs,e.Private)),e)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(n)!=-1&&(e[n]=o[e[n]-426+35])},r.CFF.readSubrs=function(t,e,o){var a=r._bin,n=[];e=r.CFF.readIndex(t,e,n);var i,s=n.length;i=s<1240?107:s<33900?1131:32768,o.Bias=i,o.Subrs=[];for(var f=0;f<n.length-1;f++)o.Subrs.push(a.readBytes(t,e+n[f],n[f+1]-n[f]))},r.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],r.CFF.glyphByUnicode=function(t,e){for(var o=0;o<t.charset.length;o++)if(t.charset[o]==e)return o;return-1},r.CFF.glyphBySE=function(t,e){return e<0||e>255?-1:r.CFF.glyphByUnicode(t,r.CFF.tableSE[e])},r.CFF.readEncoding=function(t,e,o){r._bin;var a=[".notdef"],n=t[e];if(e++,n!=0)throw"error: unknown encoding format: "+n;var i=t[e];e++;for(var s=0;s<i;s++)a.push(t[e+s]);return a},r.CFF.readCharset=function(t,e,o){var a=r._bin,n=[".notdef"],i=t[e];if(e++,i==0)for(var s=0;s<o;s++){var f=a.readUshort(t,e);e+=2,n.push(f)}else{if(i!=1&&i!=2)throw"error: format: "+i;for(;n.length<o;){f=a.readUshort(t,e),e+=2;var d=0;for(i==1?(d=t[e],e++):(d=a.readUshort(t,e),e+=2),s=0;s<=d;s++)n.push(f),f++}}return n},r.CFF.readIndex=function(t,e,o){var a=r._bin,n=a.readUshort(t,e)+1,i=t[e+=2];if(e++,i==1)for(var s=0;s<n;s++)o.push(t[e+s]);else if(i==2)for(s=0;s<n;s++)o.push(a.readUshort(t,e+2*s));else if(i==3)for(s=0;s<n;s++)o.push(16777215&a.readUint(t,e+3*s-1));else if(n!=1)throw"unsupported offset size: "+i+", count: "+n;return(e+=n*i)-1},r.CFF.getCharString=function(t,e,o){var a=r._bin,n=t[e],i=t[e+1];t[e+2],t[e+3],t[e+4];var s=1,f=null,d=null;n<=20&&(f=n,s=1),n==12&&(f=100*n+i,s=2),21<=n&&n<=27&&(f=n,s=1),n==28&&(d=a.readShort(t,e+1),s=3),29<=n&&n<=31&&(f=n,s=1),32<=n&&n<=246&&(d=n-139,s=1),247<=n&&n<=250&&(d=256*(n-247)+i+108,s=2),251<=n&&n<=254&&(d=256*-(n-251)-i-108,s=2),n==255&&(d=a.readInt(t,e+1)/65535,s=5),o.val=d??"o"+f,o.size=s},r.CFF.readCharString=function(t,e,o){for(var a=e+o,n=r._bin,i=[];e<a;){var s=t[e],f=t[e+1];t[e+2],t[e+3],t[e+4];var d=1,h=null,p=null;s<=20&&(h=s,d=1),s==12&&(h=100*s+f,d=2),s!=19&&s!=20||(h=s,d=2),21<=s&&s<=27&&(h=s,d=1),s==28&&(p=n.readShort(t,e+1),d=3),29<=s&&s<=31&&(h=s,d=1),32<=s&&s<=246&&(p=s-139,d=1),247<=s&&s<=250&&(p=256*(s-247)+f+108,d=2),251<=s&&s<=254&&(p=256*-(s-251)-f-108,d=2),s==255&&(p=n.readInt(t,e+1)/65535,d=5),i.push(p??"o"+h),e+=d}return i},r.CFF.readDict=function(t,e,o){for(var a=r._bin,n={},i=[];e<o;){var s=t[e],f=t[e+1];t[e+2],t[e+3],t[e+4];var d=1,h=null,p=null;if(s==28&&(p=a.readShort(t,e+1),d=3),s==29&&(p=a.readInt(t,e+1),d=5),32<=s&&s<=246&&(p=s-139,d=1),247<=s&&s<=250&&(p=256*(s-247)+f+108,d=2),251<=s&&s<=254&&(p=256*-(s-251)-f-108,d=2),s==255)throw p=a.readInt(t,e+1)/65535,d=5,"unknown number";if(s==30){var g=[];for(d=1;;){var m=t[e+d];d++;var _=m>>4,b=15&m;if(_!=15&&g.push(_),b!=15&&g.push(b),b==15)break}for(var T="",x=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],C=0;C<g.length;C++)T+=x[g[C]];p=parseFloat(T)}s<=21&&(h=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][s],d=1,s==12&&(h=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][f],d=2)),h!=null?(n[h]=i.length==1?i[0]:i,i=[]):i.push(p),e+=d}return n},r.cmap={},r.cmap.parse=function(t,e,o){t=new Uint8Array(t.buffer,e,o),e=0;var a=r._bin,n={};a.readUshort(t,e),e+=2;var i=a.readUshort(t,e);e+=2;var s=[];n.tables=[];for(var f=0;f<i;f++){var d=a.readUshort(t,e);e+=2;var h=a.readUshort(t,e);e+=2;var p=a.readUint(t,e);e+=4;var g="p"+d+"e"+h,m=s.indexOf(p);if(m==-1){var _;m=n.tables.length,s.push(p);var b=a.readUshort(t,p);b==0?_=r.cmap.parse0(t,p):b==4?_=r.cmap.parse4(t,p):b==6?_=r.cmap.parse6(t,p):b==12?_=r.cmap.parse12(t,p):console.debug("unknown format: "+b,d,h,p),n.tables.push(_)}if(n[g]!=null)throw"multiple tables for one platform+encoding";n[g]=m}return n},r.cmap.parse0=function(t,e){var o=r._bin,a={};a.format=o.readUshort(t,e),e+=2;var n=o.readUshort(t,e);e+=2,o.readUshort(t,e),e+=2,a.map=[];for(var i=0;i<n-6;i++)a.map.push(t[e+i]);return a},r.cmap.parse4=function(t,e){var o=r._bin,a=e,n={};n.format=o.readUshort(t,e),e+=2;var i=o.readUshort(t,e);e+=2,o.readUshort(t,e),e+=2;var s=o.readUshort(t,e);e+=2;var f=s/2;n.searchRange=o.readUshort(t,e),e+=2,n.entrySelector=o.readUshort(t,e),e+=2,n.rangeShift=o.readUshort(t,e),e+=2,n.endCount=o.readUshorts(t,e,f),e+=2*f,e+=2,n.startCount=o.readUshorts(t,e,f),e+=2*f,n.idDelta=[];for(var d=0;d<f;d++)n.idDelta.push(o.readShort(t,e)),e+=2;for(n.idRangeOffset=o.readUshorts(t,e,f),e+=2*f,n.glyphIdArray=[];e<a+i;)n.glyphIdArray.push(o.readUshort(t,e)),e+=2;return n},r.cmap.parse6=function(t,e){var o=r._bin,a={};a.format=o.readUshort(t,e),e+=2,o.readUshort(t,e),e+=2,o.readUshort(t,e),e+=2,a.firstCode=o.readUshort(t,e),e+=2;var n=o.readUshort(t,e);e+=2,a.glyphIdArray=[];for(var i=0;i<n;i++)a.glyphIdArray.push(o.readUshort(t,e)),e+=2;return a},r.cmap.parse12=function(t,e){var o=r._bin,a={};a.format=o.readUshort(t,e),e+=2,e+=2,o.readUint(t,e),e+=4,o.readUint(t,e),e+=4;var n=o.readUint(t,e);e+=4,a.groups=[];for(var i=0;i<n;i++){var s=e+12*i,f=o.readUint(t,s+0),d=o.readUint(t,s+4),h=o.readUint(t,s+8);a.groups.push([f,d,h])}return a},r.glyf={},r.glyf.parse=function(t,e,o,a){for(var n=[],i=0;i<a.maxp.numGlyphs;i++)n.push(null);return n},r.glyf._parseGlyf=function(t,e){var o=r._bin,a=t._data,n=r._tabOffset(a,"glyf",t._offset)+t.loca[e];if(t.loca[e]==t.loca[e+1])return null;var i={};if(i.noc=o.readShort(a,n),n+=2,i.xMin=o.readShort(a,n),n+=2,i.yMin=o.readShort(a,n),n+=2,i.xMax=o.readShort(a,n),n+=2,i.yMax=o.readShort(a,n),n+=2,i.xMin>=i.xMax||i.yMin>=i.yMax)return null;if(i.noc>0){i.endPts=[];for(var s=0;s<i.noc;s++)i.endPts.push(o.readUshort(a,n)),n+=2;var f=o.readUshort(a,n);if(n+=2,a.length-n<f)return null;i.instructions=o.readBytes(a,n,f),n+=f;var d=i.endPts[i.noc-1]+1;for(i.flags=[],s=0;s<d;s++){var h=a[n];if(n++,i.flags.push(h),(8&h)!=0){var p=a[n];n++;for(var g=0;g<p;g++)i.flags.push(h),s++}}for(i.xs=[],s=0;s<d;s++){var m=(2&i.flags[s])!=0,_=(16&i.flags[s])!=0;m?(i.xs.push(_?a[n]:-a[n]),n++):_?i.xs.push(0):(i.xs.push(o.readShort(a,n)),n+=2)}for(i.ys=[],s=0;s<d;s++)m=(4&i.flags[s])!=0,_=(32&i.flags[s])!=0,m?(i.ys.push(_?a[n]:-a[n]),n++):_?i.ys.push(0):(i.ys.push(o.readShort(a,n)),n+=2);var b=0,T=0;for(s=0;s<d;s++)b+=i.xs[s],T+=i.ys[s],i.xs[s]=b,i.ys[s]=T}else{var x;i.parts=[];do{x=o.readUshort(a,n),n+=2;var C={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(i.parts.push(C),C.glyphIndex=o.readUshort(a,n),n+=2,1&x){var F=o.readShort(a,n);n+=2;var w=o.readShort(a,n);n+=2}else F=o.readInt8(a,n),n++,w=o.readInt8(a,n),n++;2&x?(C.m.tx=F,C.m.ty=w):(C.p1=F,C.p2=w),8&x?(C.m.a=C.m.d=o.readF2dot14(a,n),n+=2):64&x?(C.m.a=o.readF2dot14(a,n),n+=2,C.m.d=o.readF2dot14(a,n),n+=2):128&x&&(C.m.a=o.readF2dot14(a,n),n+=2,C.m.b=o.readF2dot14(a,n),n+=2,C.m.c=o.readF2dot14(a,n),n+=2,C.m.d=o.readF2dot14(a,n),n+=2)}while(32&x);if(256&x){var S=o.readUshort(a,n);for(n+=2,i.instr=[],s=0;s<S;s++)i.instr.push(a[n]),n++}}return i},r.GDEF={},r.GDEF.parse=function(t,e,o,a){var n=e;e+=4;var i=r._bin.readUshort(t,e);return{glyphClassDef:i===0?null:r._lctf.readClassDef(t,n+i)}},r.GPOS={},r.GPOS.parse=function(t,e,o,a){return r._lctf.parse(t,e,o,a,r.GPOS.subt)},r.GPOS.subt=function(t,e,o,a){var n=r._bin,i=o,s={};if(s.fmt=n.readUshort(t,o),o+=2,e==1||e==2||e==3||e==7||e==8&&s.fmt<=2){var f=n.readUshort(t,o);o+=2,s.coverage=r._lctf.readCoverage(t,f+i)}if(e==1&&s.fmt==1){var d=n.readUshort(t,o);o+=2,d!=0&&(s.pos=r.GPOS.readValueRecord(t,o,d))}else if(e==2&&s.fmt>=1&&s.fmt<=2){d=n.readUshort(t,o),o+=2;var h=n.readUshort(t,o);o+=2;var p=r._lctf.numOfOnes(d),g=r._lctf.numOfOnes(h);if(s.fmt==1){s.pairsets=[];var m=n.readUshort(t,o);o+=2;for(var _=0;_<m;_++){var b=i+n.readUshort(t,o);o+=2;var T=n.readUshort(t,b);b+=2;for(var x=[],C=0;C<T;C++){var F=n.readUshort(t,b);b+=2,d!=0&&(y=r.GPOS.readValueRecord(t,b,d),b+=2*p),h!=0&&(D=r.GPOS.readValueRecord(t,b,h),b+=2*g),x.push({gid2:F,val1:y,val2:D})}s.pairsets.push(x)}}if(s.fmt==2){var w=n.readUshort(t,o);o+=2;var S=n.readUshort(t,o);o+=2;var R=n.readUshort(t,o);o+=2;var U=n.readUshort(t,o);for(o+=2,s.classDef1=r._lctf.readClassDef(t,i+w),s.classDef2=r._lctf.readClassDef(t,i+S),s.matrix=[],_=0;_<R;_++){var j=[];for(C=0;C<U;C++){var y=null,D=null;d!=0&&(y=r.GPOS.readValueRecord(t,o,d),o+=2*p),h!=0&&(D=r.GPOS.readValueRecord(t,o,h),o+=2*g),j.push({val1:y,val2:D})}s.matrix.push(j)}}}else if(e==4&&s.fmt==1)s.markCoverage=r._lctf.readCoverage(t,n.readUshort(t,o)+i),s.baseCoverage=r._lctf.readCoverage(t,n.readUshort(t,o+2)+i),s.markClassCount=n.readUshort(t,o+4),s.markArray=r.GPOS.readMarkArray(t,n.readUshort(t,o+6)+i),s.baseArray=r.GPOS.readBaseArray(t,n.readUshort(t,o+8)+i,s.markClassCount);else if(e==6&&s.fmt==1)s.mark1Coverage=r._lctf.readCoverage(t,n.readUshort(t,o)+i),s.mark2Coverage=r._lctf.readCoverage(t,n.readUshort(t,o+2)+i),s.markClassCount=n.readUshort(t,o+4),s.mark1Array=r.GPOS.readMarkArray(t,n.readUshort(t,o+6)+i),s.mark2Array=r.GPOS.readBaseArray(t,n.readUshort(t,o+8)+i,s.markClassCount);else{if(e==9&&s.fmt==1){var M=n.readUshort(t,o);o+=2;var V=n.readUint(t,o);if(o+=4,a.ltype==9)a.ltype=M;else if(a.ltype!=M)throw"invalid extension substitution";return r.GPOS.subt(t,a.ltype,i+V)}console.debug("unsupported GPOS table LookupType",e,"format",s.fmt)}return s},r.GPOS.readValueRecord=function(t,e,o){var a=r._bin,n=[];return n.push(1&o?a.readShort(t,e):0),e+=1&o?2:0,n.push(2&o?a.readShort(t,e):0),e+=2&o?2:0,n.push(4&o?a.readShort(t,e):0),e+=4&o?2:0,n.push(8&o?a.readShort(t,e):0),e+=8&o?2:0,n},r.GPOS.readBaseArray=function(t,e,o){var a=r._bin,n=[],i=e,s=a.readUshort(t,e);e+=2;for(var f=0;f<s;f++){for(var d=[],h=0;h<o;h++)d.push(r.GPOS.readAnchorRecord(t,i+a.readUshort(t,e))),e+=2;n.push(d)}return n},r.GPOS.readMarkArray=function(t,e){var o=r._bin,a=[],n=e,i=o.readUshort(t,e);e+=2;for(var s=0;s<i;s++){var f=r.GPOS.readAnchorRecord(t,o.readUshort(t,e+2)+n);f.markClass=o.readUshort(t,e),a.push(f),e+=4}return a},r.GPOS.readAnchorRecord=function(t,e){var o=r._bin,a={};return a.fmt=o.readUshort(t,e),a.x=o.readShort(t,e+2),a.y=o.readShort(t,e+4),a},r.GSUB={},r.GSUB.parse=function(t,e,o,a){return r._lctf.parse(t,e,o,a,r.GSUB.subt)},r.GSUB.subt=function(t,e,o,a){var n=r._bin,i=o,s={};if(s.fmt=n.readUshort(t,o),o+=2,e!=1&&e!=2&&e!=4&&e!=5&&e!=6)return null;if(e==1||e==2||e==4||e==5&&s.fmt<=2||e==6&&s.fmt<=2){var f=n.readUshort(t,o);o+=2,s.coverage=r._lctf.readCoverage(t,i+f)}if(e==1&&s.fmt>=1&&s.fmt<=2){if(s.fmt==1)s.delta=n.readShort(t,o),o+=2;else if(s.fmt==2){var d=n.readUshort(t,o);o+=2,s.newg=n.readUshorts(t,o,d),o+=2*s.newg.length}}else if(e==2&&s.fmt==1){d=n.readUshort(t,o),o+=2,s.seqs=[];for(var h=0;h<d;h++){var p=n.readUshort(t,o)+i;o+=2;var g=n.readUshort(t,p);s.seqs.push(n.readUshorts(t,p+2,g))}}else if(e==4)for(s.vals=[],d=n.readUshort(t,o),o+=2,h=0;h<d;h++){var m=n.readUshort(t,o);o+=2,s.vals.push(r.GSUB.readLigatureSet(t,i+m))}else if(e==5&&s.fmt==2){if(s.fmt==2){var _=n.readUshort(t,o);o+=2,s.cDef=r._lctf.readClassDef(t,i+_),s.scset=[];var b=n.readUshort(t,o);for(o+=2,h=0;h<b;h++){var T=n.readUshort(t,o);o+=2,s.scset.push(T==0?null:r.GSUB.readSubClassSet(t,i+T))}}}else if(e==6&&s.fmt==3){if(s.fmt==3){for(h=0;h<3;h++){d=n.readUshort(t,o),o+=2;for(var x=[],C=0;C<d;C++)x.push(r._lctf.readCoverage(t,i+n.readUshort(t,o+2*C)));o+=2*d,h==0&&(s.backCvg=x),h==1&&(s.inptCvg=x),h==2&&(s.ahedCvg=x)}d=n.readUshort(t,o),o+=2,s.lookupRec=r.GSUB.readSubstLookupRecords(t,o,d)}}else{if(e==7&&s.fmt==1){var F=n.readUshort(t,o);o+=2;var w=n.readUint(t,o);if(o+=4,a.ltype==9)a.ltype=F;else if(a.ltype!=F)throw"invalid extension substitution";return r.GSUB.subt(t,a.ltype,i+w)}console.debug("unsupported GSUB table LookupType",e,"format",s.fmt)}return s},r.GSUB.readSubClassSet=function(t,e){var o=r._bin.readUshort,a=e,n=[],i=o(t,e);e+=2;for(var s=0;s<i;s++){var f=o(t,e);e+=2,n.push(r.GSUB.readSubClassRule(t,a+f))}return n},r.GSUB.readSubClassRule=function(t,e){var o=r._bin.readUshort,a={},n=o(t,e),i=o(t,e+=2);e+=2,a.input=[];for(var s=0;s<n-1;s++)a.input.push(o(t,e)),e+=2;return a.substLookupRecords=r.GSUB.readSubstLookupRecords(t,e,i),a},r.GSUB.readSubstLookupRecords=function(t,e,o){for(var a=r._bin.readUshort,n=[],i=0;i<o;i++)n.push(a(t,e),a(t,e+2)),e+=4;return n},r.GSUB.readChainSubClassSet=function(t,e){var o=r._bin,a=e,n=[],i=o.readUshort(t,e);e+=2;for(var s=0;s<i;s++){var f=o.readUshort(t,e);e+=2,n.push(r.GSUB.readChainSubClassRule(t,a+f))}return n},r.GSUB.readChainSubClassRule=function(t,e){for(var o=r._bin,a={},n=["backtrack","input","lookahead"],i=0;i<n.length;i++){var s=o.readUshort(t,e);e+=2,i==1&&s--,a[n[i]]=o.readUshorts(t,e,s),e+=2*a[n[i]].length}return s=o.readUshort(t,e),e+=2,a.subst=o.readUshorts(t,e,2*s),e+=2*a.subst.length,a},r.GSUB.readLigatureSet=function(t,e){var o=r._bin,a=e,n=[],i=o.readUshort(t,e);e+=2;for(var s=0;s<i;s++){var f=o.readUshort(t,e);e+=2,n.push(r.GSUB.readLigature(t,a+f))}return n},r.GSUB.readLigature=function(t,e){var o=r._bin,a={chain:[]};a.nglyph=o.readUshort(t,e),e+=2;var n=o.readUshort(t,e);e+=2;for(var i=0;i<n-1;i++)a.chain.push(o.readUshort(t,e)),e+=2;return a},r.head={},r.head.parse=function(t,e,o){var a=r._bin,n={};return a.readFixed(t,e),e+=4,n.fontRevision=a.readFixed(t,e),e+=4,a.readUint(t,e),e+=4,a.readUint(t,e),e+=4,n.flags=a.readUshort(t,e),e+=2,n.unitsPerEm=a.readUshort(t,e),e+=2,n.created=a.readUint64(t,e),e+=8,n.modified=a.readUint64(t,e),e+=8,n.xMin=a.readShort(t,e),e+=2,n.yMin=a.readShort(t,e),e+=2,n.xMax=a.readShort(t,e),e+=2,n.yMax=a.readShort(t,e),e+=2,n.macStyle=a.readUshort(t,e),e+=2,n.lowestRecPPEM=a.readUshort(t,e),e+=2,n.fontDirectionHint=a.readShort(t,e),e+=2,n.indexToLocFormat=a.readShort(t,e),e+=2,n.glyphDataFormat=a.readShort(t,e),e+=2,n},r.hhea={},r.hhea.parse=function(t,e,o){var a=r._bin,n={};return a.readFixed(t,e),e+=4,n.ascender=a.readShort(t,e),e+=2,n.descender=a.readShort(t,e),e+=2,n.lineGap=a.readShort(t,e),e+=2,n.advanceWidthMax=a.readUshort(t,e),e+=2,n.minLeftSideBearing=a.readShort(t,e),e+=2,n.minRightSideBearing=a.readShort(t,e),e+=2,n.xMaxExtent=a.readShort(t,e),e+=2,n.caretSlopeRise=a.readShort(t,e),e+=2,n.caretSlopeRun=a.readShort(t,e),e+=2,n.caretOffset=a.readShort(t,e),e+=2,e+=8,n.metricDataFormat=a.readShort(t,e),e+=2,n.numberOfHMetrics=a.readUshort(t,e),e+=2,n},r.hmtx={},r.hmtx.parse=function(t,e,o,a){for(var n=r._bin,i={aWidth:[],lsBearing:[]},s=0,f=0,d=0;d<a.maxp.numGlyphs;d++)d<a.hhea.numberOfHMetrics&&(s=n.readUshort(t,e),e+=2,f=n.readShort(t,e),e+=2),i.aWidth.push(s),i.lsBearing.push(f);return i},r.kern={},r.kern.parse=function(t,e,o,a){var n=r._bin,i=n.readUshort(t,e);if(e+=2,i==1)return r.kern.parseV1(t,e-2,o,a);var s=n.readUshort(t,e);e+=2;for(var f={glyph1:[],rval:[]},d=0;d<s;d++){e+=2,o=n.readUshort(t,e),e+=2;var h=n.readUshort(t,e);e+=2;var p=h>>>8;if((p&=15)!=0)throw"unknown kern table format: "+p;e=r.kern.readFormat0(t,e,f)}return f},r.kern.parseV1=function(t,e,o,a){var n=r._bin;n.readFixed(t,e),e+=4;var i=n.readUint(t,e);e+=4;for(var s={glyph1:[],rval:[]},f=0;f<i;f++){n.readUint(t,e),e+=4;var d=n.readUshort(t,e);e+=2,n.readUshort(t,e),e+=2;var h=d>>>8;if((h&=15)!=0)throw"unknown kern table format: "+h;e=r.kern.readFormat0(t,e,s)}return s},r.kern.readFormat0=function(t,e,o){var a=r._bin,n=-1,i=a.readUshort(t,e);e+=2,a.readUshort(t,e),e+=2,a.readUshort(t,e),e+=2,a.readUshort(t,e),e+=2;for(var s=0;s<i;s++){var f=a.readUshort(t,e);e+=2;var d=a.readUshort(t,e);e+=2;var h=a.readShort(t,e);e+=2,f!=n&&(o.glyph1.push(f),o.rval.push({glyph2:[],vals:[]}));var p=o.rval[o.rval.length-1];p.glyph2.push(d),p.vals.push(h),n=f}return e},r.loca={},r.loca.parse=function(t,e,o,a){var n=r._bin,i=[],s=a.head.indexToLocFormat,f=a.maxp.numGlyphs+1;if(s==0)for(var d=0;d<f;d++)i.push(n.readUshort(t,e+(d<<1))<<1);if(s==1)for(d=0;d<f;d++)i.push(n.readUint(t,e+(d<<2)));return i},r.maxp={},r.maxp.parse=function(t,e,o){var a=r._bin,n={},i=a.readUint(t,e);return e+=4,n.numGlyphs=a.readUshort(t,e),e+=2,i==65536&&(n.maxPoints=a.readUshort(t,e),e+=2,n.maxContours=a.readUshort(t,e),e+=2,n.maxCompositePoints=a.readUshort(t,e),e+=2,n.maxCompositeContours=a.readUshort(t,e),e+=2,n.maxZones=a.readUshort(t,e),e+=2,n.maxTwilightPoints=a.readUshort(t,e),e+=2,n.maxStorage=a.readUshort(t,e),e+=2,n.maxFunctionDefs=a.readUshort(t,e),e+=2,n.maxInstructionDefs=a.readUshort(t,e),e+=2,n.maxStackElements=a.readUshort(t,e),e+=2,n.maxSizeOfInstructions=a.readUshort(t,e),e+=2,n.maxComponentElements=a.readUshort(t,e),e+=2,n.maxComponentDepth=a.readUshort(t,e),e+=2),n},r.name={},r.name.parse=function(t,e,o){var a=r._bin,n={};a.readUshort(t,e),e+=2;var i=a.readUshort(t,e);e+=2,a.readUshort(t,e);for(var s,f=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],d=e+=2,h=0;h<i;h++){var p=a.readUshort(t,e);e+=2;var g=a.readUshort(t,e);e+=2;var m=a.readUshort(t,e);e+=2;var _=a.readUshort(t,e);e+=2;var b=a.readUshort(t,e);e+=2;var T=a.readUshort(t,e);e+=2;var x,C=f[_],F=d+12*i+T;if(p==0)x=a.readUnicode(t,F,b/2);else if(p==3&&g==0)x=a.readUnicode(t,F,b/2);else if(g==0)x=a.readASCII(t,F,b);else if(g==1)x=a.readUnicode(t,F,b/2);else if(g==3)x=a.readUnicode(t,F,b/2);else{if(p!=1)throw"unknown encoding "+g+", platformID: "+p;x=a.readASCII(t,F,b),console.debug("reading unknown MAC encoding "+g+" as ASCII")}var w="p"+p+","+m.toString(16);n[w]==null&&(n[w]={}),n[w][C!==void 0?C:_]=x,n[w]._lang=m}for(var S in n)if(n[S].postScriptName!=null&&n[S]._lang==1033)return n[S];for(var S in n)if(n[S].postScriptName!=null&&n[S]._lang==0)return n[S];for(var S in n)if(n[S].postScriptName!=null&&n[S]._lang==3084)return n[S];for(var S in n)if(n[S].postScriptName!=null)return n[S];for(var S in n){s=S;break}return console.debug("returning name table with languageID "+n[s]._lang),n[s]},r["OS/2"]={},r["OS/2"].parse=function(t,e,o){var a=r._bin.readUshort(t,e);e+=2;var n={};if(a==0)r["OS/2"].version0(t,e,n);else if(a==1)r["OS/2"].version1(t,e,n);else if(a==2||a==3||a==4)r["OS/2"].version2(t,e,n);else{if(a!=5)throw"unknown OS/2 table version: "+a;r["OS/2"].version5(t,e,n)}return n},r["OS/2"].version0=function(t,e,o){var a=r._bin;return o.xAvgCharWidth=a.readShort(t,e),e+=2,o.usWeightClass=a.readUshort(t,e),e+=2,o.usWidthClass=a.readUshort(t,e),e+=2,o.fsType=a.readUshort(t,e),e+=2,o.ySubscriptXSize=a.readShort(t,e),e+=2,o.ySubscriptYSize=a.readShort(t,e),e+=2,o.ySubscriptXOffset=a.readShort(t,e),e+=2,o.ySubscriptYOffset=a.readShort(t,e),e+=2,o.ySuperscriptXSize=a.readShort(t,e),e+=2,o.ySuperscriptYSize=a.readShort(t,e),e+=2,o.ySuperscriptXOffset=a.readShort(t,e),e+=2,o.ySuperscriptYOffset=a.readShort(t,e),e+=2,o.yStrikeoutSize=a.readShort(t,e),e+=2,o.yStrikeoutPosition=a.readShort(t,e),e+=2,o.sFamilyClass=a.readShort(t,e),e+=2,o.panose=a.readBytes(t,e,10),e+=10,o.ulUnicodeRange1=a.readUint(t,e),e+=4,o.ulUnicodeRange2=a.readUint(t,e),e+=4,o.ulUnicodeRange3=a.readUint(t,e),e+=4,o.ulUnicodeRange4=a.readUint(t,e),e+=4,o.achVendID=[a.readInt8(t,e),a.readInt8(t,e+1),a.readInt8(t,e+2),a.readInt8(t,e+3)],e+=4,o.fsSelection=a.readUshort(t,e),e+=2,o.usFirstCharIndex=a.readUshort(t,e),e+=2,o.usLastCharIndex=a.readUshort(t,e),e+=2,o.sTypoAscender=a.readShort(t,e),e+=2,o.sTypoDescender=a.readShort(t,e),e+=2,o.sTypoLineGap=a.readShort(t,e),e+=2,o.usWinAscent=a.readUshort(t,e),e+=2,o.usWinDescent=a.readUshort(t,e),e+=2},r["OS/2"].version1=function(t,e,o){var a=r._bin;return e=r["OS/2"].version0(t,e,o),o.ulCodePageRange1=a.readUint(t,e),e+=4,o.ulCodePageRange2=a.readUint(t,e),e+=4},r["OS/2"].version2=function(t,e,o){var a=r._bin;return e=r["OS/2"].version1(t,e,o),o.sxHeight=a.readShort(t,e),e+=2,o.sCapHeight=a.readShort(t,e),e+=2,o.usDefault=a.readUshort(t,e),e+=2,o.usBreak=a.readUshort(t,e),e+=2,o.usMaxContext=a.readUshort(t,e),e+=2},r["OS/2"].version5=function(t,e,o){var a=r._bin;return e=r["OS/2"].version2(t,e,o),o.usLowerOpticalPointSize=a.readUshort(t,e),e+=2,o.usUpperOpticalPointSize=a.readUshort(t,e),e+=2},r.post={},r.post.parse=function(t,e,o){var a=r._bin,n={};return n.version=a.readFixed(t,e),e+=4,n.italicAngle=a.readFixed(t,e),e+=4,n.underlinePosition=a.readShort(t,e),e+=2,n.underlineThickness=a.readShort(t,e),e+=2,n},r==null&&(r={}),r.U==null&&(r.U={}),r.U.codeToGlyph=function(t,e){var o=t.cmap,a=-1;if(o.p0e4!=null?a=o.p0e4:o.p3e1!=null?a=o.p3e1:o.p1e0!=null?a=o.p1e0:o.p0e3!=null&&(a=o.p0e3),a==-1)throw"no familiar platform and encoding!";var n=o.tables[a];if(n.format==0)return e>=n.map.length?0:n.map[e];if(n.format==4){for(var i=-1,s=0;s<n.endCount.length;s++)if(e<=n.endCount[s]){i=s;break}return i==-1||n.startCount[i]>e?0:65535&(n.idRangeOffset[i]!=0?n.glyphIdArray[e-n.startCount[i]+(n.idRangeOffset[i]>>1)-(n.idRangeOffset.length-i)]:e+n.idDelta[i])}if(n.format==12){if(e>n.groups[n.groups.length-1][1])return 0;for(s=0;s<n.groups.length;s++){var f=n.groups[s];if(f[0]<=e&&e<=f[1])return f[2]+(e-f[0])}return 0}throw"unknown cmap table format "+n.format},r.U.glyphToPath=function(t,e){var o={cmds:[],crds:[]};if(t.SVG&&t.SVG.entries[e]){var a=t.SVG.entries[e];return a==null?o:(typeof a=="string"&&(a=r.SVG.toPath(a),t.SVG.entries[e]=a),a)}if(t.CFF){var n={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:t.CFF.Private?t.CFF.Private.defaultWidthX:0,open:!1},i=t.CFF,s=t.CFF.Private;if(i.ROS){for(var f=0;i.FDSelect[f+2]<=e;)f+=2;s=i.FDArray[i.FDSelect[f+1]].Private}r.U._drawCFF(t.CFF.CharStrings[e],n,i,s,o)}else t.glyf&&r.U._drawGlyf(e,t,o);return o},r.U._drawGlyf=function(t,e,o){var a=e.glyf[t];a==null&&(a=e.glyf[t]=r.glyf._parseGlyf(e,t)),a!=null&&(a.noc>-1?r.U._simpleGlyph(a,o):r.U._compoGlyph(a,e,o))},r.U._simpleGlyph=function(t,e){for(var o=0;o<t.noc;o++){for(var a=o==0?0:t.endPts[o-1]+1,n=t.endPts[o],i=a;i<=n;i++){var s=i==a?n:i-1,f=i==n?a:i+1,d=1&t.flags[i],h=1&t.flags[s],p=1&t.flags[f],g=t.xs[i],m=t.ys[i];if(i==a)if(d){if(!h){r.U.P.moveTo(e,g,m);continue}r.U.P.moveTo(e,t.xs[s],t.ys[s])}else h?r.U.P.moveTo(e,t.xs[s],t.ys[s]):r.U.P.moveTo(e,(t.xs[s]+g)/2,(t.ys[s]+m)/2);d?h&&r.U.P.lineTo(e,g,m):p?r.U.P.qcurveTo(e,g,m,t.xs[f],t.ys[f]):r.U.P.qcurveTo(e,g,m,(g+t.xs[f])/2,(m+t.ys[f])/2)}r.U.P.closePath(e)}},r.U._compoGlyph=function(t,e,o){for(var a=0;a<t.parts.length;a++){var n={cmds:[],crds:[]},i=t.parts[a];r.U._drawGlyf(i.glyphIndex,e,n);for(var s=i.m,f=0;f<n.crds.length;f+=2){var d=n.crds[f],h=n.crds[f+1];o.crds.push(d*s.a+h*s.b+s.tx),o.crds.push(d*s.c+h*s.d+s.ty)}for(f=0;f<n.cmds.length;f++)o.cmds.push(n.cmds[f])}},r.U._getGlyphClass=function(t,e){var o=r._lctf.getInterval(e,t);return o==-1?0:e[o+2]},r.U._applySubs=function(t,e,o,a){for(var n=t.length-e-1,i=0;i<o.tabs.length;i++)if(o.tabs[i]!=null){var s,f=o.tabs[i];if(!f.coverage||(s=r._lctf.coverageIndex(f.coverage,t[e]))!=-1){if(o.ltype==1)t[e],f.fmt==1?t[e]=t[e]+f.delta:t[e]=f.newg[s];else if(o.ltype==4)for(var d=f.vals[s],h=0;h<d.length;h++){var p=d[h],g=p.chain.length;if(!(g>n)){for(var m=!0,_=0,b=0;b<g;b++){for(;t[e+_+(1+b)]==-1;)_++;p.chain[b]!=t[e+_+(1+b)]&&(m=!1)}if(m){for(t[e]=p.nglyph,b=0;b<g+_;b++)t[e+b+1]=-1;break}}}else if(o.ltype==5&&f.fmt==2)for(var T=r._lctf.getInterval(f.cDef,t[e]),x=f.cDef[T+2],C=f.scset[x],F=0;F<C.length;F++){var w=C[F],S=w.input;if(!(S.length>n)){for(m=!0,b=0;b<S.length;b++){var R=r._lctf.getInterval(f.cDef,t[e+1+b]);if(T==-1&&f.cDef[R+2]!=S[b]){m=!1;break}}if(m){var U=w.substLookupRecords;for(h=0;h<U.length;h+=2)U[h],U[h+1]}}}else if(o.ltype==6&&f.fmt==3){if(!r.U._glsCovered(t,f.backCvg,e-f.backCvg.length)||!r.U._glsCovered(t,f.inptCvg,e)||!r.U._glsCovered(t,f.ahedCvg,e+f.inptCvg.length))continue;var j=f.lookupRec;for(F=0;F<j.length;F+=2){T=j[F];var y=a[j[F+1]];r.U._applySubs(t,e+T,y,a)}}}}},r.U._glsCovered=function(t,e,o){for(var a=0;a<e.length;a++)if(r._lctf.coverageIndex(e[a],t[o+a])==-1)return!1;return!0},r.U.glyphsToPath=function(t,e,o){for(var a={cmds:[],crds:[]},n=0,i=0;i<e.length;i++){var s=e[i];if(s!=-1){for(var f=i<e.length-1&&e[i+1]!=-1?e[i+1]:0,d=r.U.glyphToPath(t,s),h=0;h<d.crds.length;h+=2)a.crds.push(d.crds[h]+n),a.crds.push(d.crds[h+1]);for(o&&a.cmds.push(o),h=0;h<d.cmds.length;h++)a.cmds.push(d.cmds[h]);o&&a.cmds.push("X"),n+=t.hmtx.aWidth[s],i<e.length-1&&(n+=r.U.getPairAdjustment(t,s,f))}}return a},r.U.P={},r.U.P.moveTo=function(t,e,o){t.cmds.push("M"),t.crds.push(e,o)},r.U.P.lineTo=function(t,e,o){t.cmds.push("L"),t.crds.push(e,o)},r.U.P.curveTo=function(t,e,o,a,n,i,s){t.cmds.push("C"),t.crds.push(e,o,a,n,i,s)},r.U.P.qcurveTo=function(t,e,o,a,n){t.cmds.push("Q"),t.crds.push(e,o,a,n)},r.U.P.closePath=function(t){t.cmds.push("Z")},r.U._drawCFF=function(t,e,o,a,n){for(var i=e.stack,s=e.nStems,f=e.haveWidth,d=e.width,h=e.open,p=0,g=e.x,m=e.y,_=0,b=0,T=0,x=0,C=0,F=0,w=0,S=0,R=0,U=0,j={val:0,size:0};p<t.length;){r.CFF.getCharString(t,p,j);var y=j.val;if(p+=j.size,y=="o1"||y=="o18")i.length%2!=0&&!f&&(d=i.shift()+a.nominalWidthX),s+=i.length>>1,i.length=0,f=!0;else if(y=="o3"||y=="o23")i.length%2!=0&&!f&&(d=i.shift()+a.nominalWidthX),s+=i.length>>1,i.length=0,f=!0;else if(y=="o4")i.length>1&&!f&&(d=i.shift()+a.nominalWidthX,f=!0),h&&r.U.P.closePath(n),m+=i.pop(),r.U.P.moveTo(n,g,m),h=!0;else if(y=="o5")for(;i.length>0;)g+=i.shift(),m+=i.shift(),r.U.P.lineTo(n,g,m);else if(y=="o6"||y=="o7")for(var D=i.length,M=y=="o6",V=0;V<D;V++){var z=i.shift();M?g+=z:m+=z,M=!M,r.U.P.lineTo(n,g,m)}else if(y=="o8"||y=="o24"){D=i.length;for(var q=0;q+6<=D;)_=g+i.shift(),b=m+i.shift(),T=_+i.shift(),x=b+i.shift(),g=T+i.shift(),m=x+i.shift(),r.U.P.curveTo(n,_,b,T,x,g,m),q+=6;y=="o24"&&(g+=i.shift(),m+=i.shift(),r.U.P.lineTo(n,g,m))}else{if(y=="o11")break;if(y=="o1234"||y=="o1235"||y=="o1236"||y=="o1237")y=="o1234"&&(b=m,T=(_=g+i.shift())+i.shift(),U=x=b+i.shift(),F=x,S=m,g=(w=(C=(R=T+i.shift())+i.shift())+i.shift())+i.shift(),r.U.P.curveTo(n,_,b,T,x,R,U),r.U.P.curveTo(n,C,F,w,S,g,m)),y=="o1235"&&(_=g+i.shift(),b=m+i.shift(),T=_+i.shift(),x=b+i.shift(),R=T+i.shift(),U=x+i.shift(),C=R+i.shift(),F=U+i.shift(),w=C+i.shift(),S=F+i.shift(),g=w+i.shift(),m=S+i.shift(),i.shift(),r.U.P.curveTo(n,_,b,T,x,R,U),r.U.P.curveTo(n,C,F,w,S,g,m)),y=="o1236"&&(_=g+i.shift(),b=m+i.shift(),T=_+i.shift(),U=x=b+i.shift(),F=x,w=(C=(R=T+i.shift())+i.shift())+i.shift(),S=F+i.shift(),g=w+i.shift(),r.U.P.curveTo(n,_,b,T,x,R,U),r.U.P.curveTo(n,C,F,w,S,g,m)),y=="o1237"&&(_=g+i.shift(),b=m+i.shift(),T=_+i.shift(),x=b+i.shift(),R=T+i.shift(),U=x+i.shift(),C=R+i.shift(),F=U+i.shift(),w=C+i.shift(),S=F+i.shift(),Math.abs(w-g)>Math.abs(S-m)?g=w+i.shift():m=S+i.shift(),r.U.P.curveTo(n,_,b,T,x,R,U),r.U.P.curveTo(n,C,F,w,S,g,m));else if(y=="o14"){if(i.length>0&&!f&&(d=i.shift()+o.nominalWidthX,f=!0),i.length==4){var oe=i.shift(),L=i.shift(),B=i.shift(),v=i.shift(),k=r.CFF.glyphBySE(o,B),P=r.CFF.glyphBySE(o,v);r.U._drawCFF(o.CharStrings[k],e,o,a,n),e.x=oe,e.y=L,r.U._drawCFF(o.CharStrings[P],e,o,a,n)}h&&(r.U.P.closePath(n),h=!1)}else if(y=="o19"||y=="o20")i.length%2!=0&&!f&&(d=i.shift()+a.nominalWidthX),s+=i.length>>1,i.length=0,f=!0,p+=s+7>>3;else if(y=="o21")i.length>2&&!f&&(d=i.shift()+a.nominalWidthX,f=!0),m+=i.pop(),g+=i.pop(),h&&r.U.P.closePath(n),r.U.P.moveTo(n,g,m),h=!0;else if(y=="o22")i.length>1&&!f&&(d=i.shift()+a.nominalWidthX,f=!0),g+=i.pop(),h&&r.U.P.closePath(n),r.U.P.moveTo(n,g,m),h=!0;else if(y=="o25"){for(;i.length>6;)g+=i.shift(),m+=i.shift(),r.U.P.lineTo(n,g,m);_=g+i.shift(),b=m+i.shift(),T=_+i.shift(),x=b+i.shift(),g=T+i.shift(),m=x+i.shift(),r.U.P.curveTo(n,_,b,T,x,g,m)}else if(y=="o26")for(i.length%2&&(g+=i.shift());i.length>0;)_=g,b=m+i.shift(),g=T=_+i.shift(),m=(x=b+i.shift())+i.shift(),r.U.P.curveTo(n,_,b,T,x,g,m);else if(y=="o27")for(i.length%2&&(m+=i.shift());i.length>0;)b=m,T=(_=g+i.shift())+i.shift(),x=b+i.shift(),g=T+i.shift(),m=x,r.U.P.curveTo(n,_,b,T,x,g,m);else if(y=="o10"||y=="o29"){var A=y=="o10"?a:o;if(i.length==0)console.debug("error: empty stack");else{var E=i.pop(),W=A.Subrs[E+A.Bias];e.x=g,e.y=m,e.nStems=s,e.haveWidth=f,e.width=d,e.open=h,r.U._drawCFF(W,e,o,a,n),g=e.x,m=e.y,s=e.nStems,f=e.haveWidth,d=e.width,h=e.open}}else if(y=="o30"||y=="o31"){var I=i.length,G=(q=0,y=="o31");for(q+=I-(D=-3&I);q<D;)G?(b=m,T=(_=g+i.shift())+i.shift(),m=(x=b+i.shift())+i.shift(),D-q==5?(g=T+i.shift(),q++):g=T,G=!1):(_=g,b=m+i.shift(),T=_+i.shift(),x=b+i.shift(),g=T+i.shift(),D-q==5?(m=x+i.shift(),q++):m=x,G=!0),r.U.P.curveTo(n,_,b,T,x,g,m),q+=4}else{if((y+"").charAt(0)=="o")throw console.debug("Unknown operation: "+y,t),y;i.push(y)}}}e.x=g,e.y=m,e.nStems=s,e.haveWidth=f,e.width=d,e.open=h};var u=r,c={Typr:u};return l.Typr=u,l.default=c,Object.defineProperty(l,"__esModule",{value:!0}),l}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function _i(){return function(l){var r=Uint8Array,u=Uint16Array,c=Uint32Array,t=new r([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),e=new r([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o=new r([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(y,D){for(var M=new u(31),V=0;V<31;++V)M[V]=D+=1<<y[V-1];var z=new c(M[30]);for(V=1;V<30;++V)for(var q=M[V];q<M[V+1];++q)z[q]=q-M[V]<<5|V;return[M,z]},n=a(t,2),i=n[0],s=n[1];i[28]=258,s[258]=28;for(var f=a(e,0)[0],d=new u(32768),h=0;h<32768;++h){var p=(43690&h)>>>1|(21845&h)<<1;p=(61680&(p=(52428&p)>>>2|(13107&p)<<2))>>>4|(3855&p)<<4,d[h]=((65280&p)>>>8|(255&p)<<8)>>>1}var g=function(y,D,M){for(var V=y.length,z=0,q=new u(D);z<V;++z)++q[y[z]-1];var oe,L=new u(D);for(z=0;z<D;++z)L[z]=L[z-1]+q[z-1]<<1;{oe=new u(1<<D);var B=15-D;for(z=0;z<V;++z)if(y[z])for(var v=z<<4|y[z],k=D-y[z],P=L[y[z]-1]++<<k,A=P|(1<<k)-1;P<=A;++P)oe[d[P]>>>B]=v}return oe},m=new r(288);for(h=0;h<144;++h)m[h]=8;for(h=144;h<256;++h)m[h]=9;for(h=256;h<280;++h)m[h]=7;for(h=280;h<288;++h)m[h]=8;var _=new r(32);for(h=0;h<32;++h)_[h]=5;var b=g(m,9),T=g(_,5),x=function(y){for(var D=y[0],M=1;M<y.length;++M)y[M]>D&&(D=y[M]);return D},C=function(y,D,M){var V=D/8|0;return(y[V]|y[V+1]<<8)>>(7&D)&M},F=function(y,D){var M=D/8|0;return(y[M]|y[M+1]<<8|y[M+2]<<16)>>(7&D)},w=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],S=function(y,D,M){var V=new Error(D||w[y]);if(V.code=y,Error.captureStackTrace&&Error.captureStackTrace(V,S),!M)throw V;return V},R=function(y,D,M){var V=y.length;if(!V||M&&!M.l&&V<5)return D||new r(0);var z=!D||M,q=!M||M.i;M||(M={}),D||(D=new r(3*V));var oe,L=function(ce){var Pe=D.length;if(ce>Pe){var _e=new r(Math.max(2*Pe,ce));_e.set(D),D=_e}},B=M.f||0,v=M.p||0,k=M.b||0,P=M.l,A=M.d,E=M.m,W=M.n,I=8*V;do{if(!P){M.f=B=C(y,v,1);var G=C(y,v+1,3);if(v+=3,!G){var Y=y[($=((oe=v)/8|0)+(7&oe&&1)+4)-4]|y[$-3]<<8,ee=$+Y;if(ee>V){q&&S(0);break}z&&L(k+Y),D.set(y.subarray($,ee),k),M.b=k+=Y,M.p=v=8*ee;continue}if(G==1)P=b,A=T,E=9,W=5;else if(G==2){var X=C(y,v,31)+257,N=C(y,v+10,15)+4,ge=X+C(y,v+5,31)+1;v+=14;for(var fe=new r(ge),Q=new r(19),te=0;te<N;++te)Q[o[te]]=C(y,v+3*te,7);v+=3*N;var le=x(Q),H=(1<<le)-1,re=g(Q,le);for(te=0;te<ge;){var $,O=re[C(y,v,H)];if(v+=15&O,($=O>>>4)<16)fe[te++]=$;else{var pe=0,J=0;for($==16?(J=3+C(y,v,3),v+=2,pe=fe[te-1]):$==17?(J=3+C(y,v,7),v+=3):$==18&&(J=11+C(y,v,127),v+=7);J--;)fe[te++]=pe}}var ae=fe.subarray(0,X),K=fe.subarray(X);E=x(ae),W=x(K),P=g(ae,E),A=g(K,W)}else S(1);if(v>I){q&&S(0);break}}z&&L(k+131072);for(var xe=(1<<E)-1,ne=(1<<W)-1,ie=v;;ie=v){var ue=(pe=P[F(y,v)&xe])>>>4;if((v+=15&pe)>I){q&&S(0);break}if(pe||S(2),ue<256)D[k++]=ue;else{if(ue==256){ie=v,P=null;break}var me=ue-254;if(ue>264){var Te=t[te=ue-257];me=C(y,v,(1<<Te)-1)+i[te],v+=Te}var Ue=A[F(y,v)&ne],ye=Ue>>>4;if(Ue||S(3),v+=15&Ue,K=f[ye],ye>3&&(Te=e[ye],K+=F(y,v)&(1<<Te)-1,v+=Te),v>I){q&&S(0);break}z&&L(k+131072);for(var be=k+me;k<be;k+=4)D[k]=D[k-K],D[k+1]=D[k+1-K],D[k+2]=D[k+2-K],D[k+3]=D[k+3-K];k=be}}M.l=P,M.p=ie,M.b=k,P&&(B=1,M.m=E,M.d=A,M.n=W)}while(!B);return k==D.length?D:function(ce,Pe,_e){(_e==null||_e>ce.length)&&(_e=ce.length);var Le=new(ce instanceof u?u:ce instanceof c?c:r)(_e-Pe);return Le.set(ce.subarray(Pe,_e)),Le}(D,0,k)},U=new r(0),j=typeof TextDecoder<"u"&&new TextDecoder;try{j.decode(U,{stream:!0})}catch{}return l.convert_streams=function(y){var D=new DataView(y),M=0;function V(){var X=D.getUint16(M);return M+=2,X}function z(){var X=D.getUint32(M);return M+=4,X}function q(X){Y.setUint16(ee,X),ee+=2}function oe(X){Y.setUint32(ee,X),ee+=4}for(var L={signature:z(),flavor:z(),length:z(),numTables:V(),reserved:V(),totalSfntSize:z(),majorVersion:V(),minorVersion:V(),metaOffset:z(),metaLength:z(),metaOrigLength:z(),privOffset:z(),privLength:z()},B=0;Math.pow(2,B)<=L.numTables;)B++;B--;for(var v=16*Math.pow(2,B),k=16*L.numTables-v,P=12,A=[],E=0;E<L.numTables;E++)A.push({tag:z(),offset:z(),compLength:z(),origLength:z(),origChecksum:z()}),P+=16;var W,I=new Uint8Array(12+16*A.length+A.reduce(function(X,N){return X+N.origLength+4},0)),G=I.buffer,Y=new DataView(G),ee=0;return oe(L.flavor),q(L.numTables),q(v),q(B),q(k),A.forEach(function(X){oe(X.tag),oe(X.origChecksum),oe(P),oe(X.origLength),X.outOffset=P,(P+=X.origLength)%4!=0&&(P+=4-P%4)}),A.forEach(function(X){var N,ge=y.slice(X.offset,X.offset+X.compLength);if(X.compLength!=X.origLength){var fe=new Uint8Array(X.origLength);N=new Uint8Array(ge,2),R(N,fe)}else fe=new Uint8Array(ge);I.set(fe,X.outOffset);var Q=0;(P=X.outOffset+X.origLength)%4!=0&&(Q=4-P%4),I.set(new Uint8Array(Q).buffer,X.outOffset+X.origLength),W=P+Q}),G.slice(0,W)},Object.defineProperty(l,"__esModule",{value:!0}),l}({}).convert_streams}function Mi(l,r){const u={M:2,L:2,Q:4,C:6,Z:0},c={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},t=1,e=2,o=4,a=8,n=16,i=32;let s;function f(w){if(!s){const S={R:e,L:t,D:o,C:n,U:i,T:a};s=new Map;for(let R in c){let U=0;c[R].split(",").forEach(j=>{let[y,D]=j.split("+");y=parseInt(y,36),D=D?parseInt(D,36):0,s.set(U+=y,S[R]);for(let M=D;M--;)s.set(++U,S[R])})}}return s.get(w)||i}const d=1,h=2,p=3,g=4,m=[null,"isol","init","fina","medi"];function _(w){const S=new Uint8Array(w.length);let R=i,U=d,j=-1;for(let y=0;y<w.length;y++){const D=w.codePointAt(y);let M=f(D)|0,V=d;M&a||(R&(t|o|n)?M&(e|o|n)?(V=p,(U===d||U===p)&&S[j]++):M&(t|i)&&(U===h||U===g)&&S[j]--:R&(e|i)&&(U===h||U===g)&&S[j]--,U=S[y]=V,R=M,j=y,D>65535&&y++)}return S}function b(w,S){const R=[];for(let j=0;j<S.length;j++){const y=S.codePointAt(j);y>65535&&j++,R.push(l.U.codeToGlyph(w,y))}const U=w.GSUB;if(U){const{lookupList:j,featureList:y}=U;let D;const M=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,V=[];y.forEach(z=>{if(M.test(z.tag))for(let q=0;q<z.tab.length;q++){if(V[z.tab[q]])continue;V[z.tab[q]]=!0;const oe=j[z.tab[q]],L=/^(isol|init|fina|medi)$/.test(z.tag);L&&!D&&(D=_(S));for(let B=0;B<R.length;B++)(!D||!L||m[D[B]]===z.tag)&&l.U._applySubs(R,B,oe,j)}})}return R}function T(w,S){const R=new Int16Array(S.length*3);let U=0;for(;U<S.length;U++){const M=S[U];if(M===-1)continue;R[U*3+2]=w.hmtx.aWidth[M];const V=w.GPOS;if(V){const z=V.lookupList;for(let q=0;q<z.length;q++){const oe=z[q];for(let L=0;L<oe.tabs.length;L++){const B=oe.tabs[L];if(oe.ltype===1){if(l._lctf.coverageIndex(B.coverage,M)!==-1&&B.pos){D(B.pos,U);break}}else if(oe.ltype===2){let v=null,k=j();if(k!==-1){const P=l._lctf.coverageIndex(B.coverage,S[k]);if(P!==-1){if(B.fmt===1){const A=B.pairsets[P];for(let E=0;E<A.length;E++)A[E].gid2===M&&(v=A[E])}else if(B.fmt===2){const A=l.U._getGlyphClass(S[k],B.classDef1),E=l.U._getGlyphClass(M,B.classDef2);v=B.matrix[A][E]}if(v){v.val1&&D(v.val1,k),v.val2&&D(v.val2,U);break}}}}else if(oe.ltype===4){const v=l._lctf.coverageIndex(B.markCoverage,M);if(v!==-1){const k=j(y),P=k===-1?-1:l._lctf.coverageIndex(B.baseCoverage,S[k]);if(P!==-1){const A=B.markArray[v],E=B.baseArray[P][A.markClass];R[U*3]=E.x-A.x+R[k*3]-R[k*3+2],R[U*3+1]=E.y-A.y+R[k*3+1];break}}}else if(oe.ltype===6){const v=l._lctf.coverageIndex(B.mark1Coverage,M);if(v!==-1){const k=j();if(k!==-1){const P=S[k];if(x(w,P)===3){const A=l._lctf.coverageIndex(B.mark2Coverage,P);if(A!==-1){const E=B.mark1Array[v],W=B.mark2Array[A][E.markClass];R[U*3]=W.x-E.x+R[k*3]-R[k*3+2],R[U*3+1]=W.y-E.y+R[k*3+1];break}}}}}}}}else if(w.kern&&!w.cff){const z=j();if(z!==-1){const q=w.kern.glyph1.indexOf(S[z]);if(q!==-1){const oe=w.kern.rval[q].glyph2.indexOf(M);oe!==-1&&(R[z*3+2]+=w.kern.rval[q].vals[oe])}}}}return R;function j(M){for(let V=U-1;V>=0;V--)if(S[V]!==-1&&(!M||M(S[V])))return V;return-1}function y(M){return x(w,M)===1}function D(M,V){for(let z=0;z<3;z++)R[V*3+z]+=M[z]||0}}function x(w,S){const R=w.GDEF&&w.GDEF.glyphClassDef;return R?l.U._getGlyphClass(S,R):0}function C(...w){for(let S=0;S<w.length;S++)if(typeof w[S]=="number")return w[S]}function F(w){const S=Object.create(null),R=w["OS/2"],U=w.hhea,j=w.head.unitsPerEm,y=C(R&&R.sTypoAscender,U&&U.ascender,j),D={unitsPerEm:j,ascender:y,descender:C(R&&R.sTypoDescender,U&&U.descender,0),capHeight:C(R&&R.sCapHeight,y),xHeight:C(R&&R.sxHeight,y),lineGap:C(R&&R.sTypoLineGap,U&&U.lineGap),supportsCodePoint(M){return l.U.codeToGlyph(w,M)>0},forEachGlyph(M,V,z,q){let oe=0;const L=1/D.unitsPerEm*V,B=b(w,M);let v=0;const k=T(w,B);return B.forEach((P,A)=>{if(P!==-1){let E=S[P];if(!E){const{cmds:W,crds:I}=l.U.glyphToPath(w,P);let G="",Y=0;for(let fe=0,Q=W.length;fe<Q;fe++){const te=u[W[fe]];G+=W[fe];for(let le=1;le<=te;le++)G+=(le>1?",":"")+I[Y++]}let ee,X,N,ge;if(I.length){ee=X=1/0,N=ge=-1/0;for(let fe=0,Q=I.length;fe<Q;fe+=2){let te=I[fe],le=I[fe+1];te<ee&&(ee=te),le<X&&(X=le),te>N&&(N=te),le>ge&&(ge=le)}}else ee=N=X=ge=0;E=S[P]={index:P,advanceWidth:w.hmtx.aWidth[P],xMin:ee,yMin:X,xMax:N,yMax:ge,path:G}}q.call(null,E,oe+k[A*3]*L,k[A*3+1]*L,v),oe+=k[A*3+2]*L,z&&(oe+=z*V)}v+=M.codePointAt(v)>65535?2:1}),oe}};return D}return function(S){const R=new Uint8Array(S,0,4),U=l._bin.readASCII(R,0,4);if(U==="wOFF")S=r(S);else if(U==="wOF2")throw new Error("woff2 fonts not supported");return F(l.parse(S)[0])}}const Ei=kt({name:"Typr Font Parser",dependencies:[Ci,_i,Mi],init(l,r,u){const c=l(),t=r();return u(c,t)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function Ui(){return function(l){var r=function(){this.buckets=new Map};r.prototype.add=function(T){var x=T>>5;this.buckets.set(x,(this.buckets.get(x)||0)|1<<(31&T))},r.prototype.has=function(T){var x=this.buckets.get(T>>5);return x!==void 0&&(x&1<<(31&T))!=0},r.prototype.serialize=function(){var T=[];return this.buckets.forEach(function(x,C){T.push((+C).toString(36)+":"+x.toString(36))}),T.join(",")},r.prototype.deserialize=function(T){var x=this;this.buckets.clear(),T.split(",").forEach(function(C){var F=C.split(":");x.buckets.set(parseInt(F[0],36),parseInt(F[1],36))})};var u=Math.pow(2,8),c=u-1,t=~c;function e(T){var x=function(F){return F&t}(T).toString(16),C=function(F){return(F&t)+u-1}(T).toString(16);return"codepoint-index/plane"+(T>>16)+"/"+x+"-"+C+".json"}function o(T,x){var C=T&c,F=x.codePointAt(C/6|0);return((F=(F||48)-48)&1<<C%6)!=0}function a(T,x){var C;(C=T,C.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(F){return F.split("-").map(function(w){return parseInt(w.trim(),16)})})).forEach(function(F){var w=F[0],S=F[1];S===void 0&&(S=w),x(w,S)})}function n(T,x){a(T,function(C,F){for(var w=C;w<=F;w++)x(w)})}var i={},s={},f=new WeakMap,d="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function h(T){var x=f.get(T);return x||(x=new r,n(T.ranges,function(C){return x.add(C)}),f.set(T,x)),x}var p,g=new Map;function m(T,x,C){return T[x]?x:T[C]?C:function(F){for(var w in F)return w}(T)}function _(T,x){var C=x;if(!T.includes(C)){C=1/0;for(var F=0;F<T.length;F++)Math.abs(T[F]-x)<Math.abs(C-x)&&(C=T[F])}return C}function b(T){return p||(p=new Set,n("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(x){p.add(x)})),p.has(T)}return l.CodePointSet=r,l.clearCache=function(){i={},s={}},l.getFontsForString=function(T,x){x===void 0&&(x={});var C,F=x.lang;F===void 0&&(F=new RegExp("\\p{Script=Hangul}","u").test(C=T)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(C)?"ja":"en");var w=x.category;w===void 0&&(w="sans-serif");var S=x.style;S===void 0&&(S="normal");var R=x.weight;R===void 0&&(R=400);var U=(x.dataUrl||d).replace(/\/$/g,""),j=new Map,y=new Uint8Array(T.length),D={},M={},V=new Array(T.length),z=new Map,q=!1;function oe(v){var k=g.get(v);return k||(k=fetch(U+"/"+v).then(function(P){if(!P.ok)throw new Error(P.statusText);return P.json().then(function(A){if(!Array.isArray(A)||A[0]!==1)throw new Error("Incorrect schema version; need 1, got "+A[0]);return A[1]})}).catch(function(P){if(U!==d)return q||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+U+'", trying default CDN. '+P.message),q=!0),U=d,g.delete(v),oe(v);throw P}),g.set(v,k)),k}for(var L=function(v){var k=T.codePointAt(v),P=e(k);V[v]=P,i[P]||z.has(P)||z.set(P,oe(P).then(function(A){i[P]=A})),k>65535&&(v++,B=v)},B=0;B<T.length;B++)L(B);return Promise.all(z.values()).then(function(){z.clear();for(var v=function(P){var A=T.codePointAt(P),E=null,W=i[V[P]],I=void 0;for(var G in W){var Y=M[G];if(Y===void 0&&(Y=M[G]=new RegExp(G).test(F||"en")),Y){for(var ee in I=G,W[G])if(o(A,W[G][ee])){E=ee;break}break}}if(!E){e:for(var X in W)if(X!==I){for(var N in W[X])if(o(A,W[X][N])){E=N;break e}}}E||(console.debug("No font coverage for U+"+A.toString(16)),E="latin"),V[P]=E,s[E]||z.has(E)||z.set(E,oe("font-meta/"+E+".json").then(function(ge){s[E]=ge})),A>65535&&(P++,k=P)},k=0;k<T.length;k++)v(k);return Promise.all(z.values())}).then(function(){for(var v,k=null,P=0;P<T.length;P++){var A=T.codePointAt(P);if(k&&(b(A)||h(k).has(A)))y[P]=y[P-1];else{k=s[V[P]];var E=D[k.id];if(!E){var W=k.typeforms,I=m(W,w,"sans-serif"),G=m(W[I],S,"normal"),Y=_((v=W[I])===null||v===void 0?void 0:v[G],R);E=D[k.id]=U+"/font-files/"+k.id+"/"+I+"."+G+"."+Y+".woff"}var ee=j.get(E);ee==null&&(ee=j.size,j.set(E,ee)),y[P]=ee}A>65535&&(P++,y[P]=y[P-1])}return{fontUrls:Array.from(j.keys()),chars:y}})},Object.defineProperty(l,"__esModule",{value:!0}),l}({})}function Pi(l,r){const u=Object.create(null),c=Object.create(null);function t(o,a){const n=i=>{console.error(`Failure loading font ${o}`,i)};try{const i=new XMLHttpRequest;i.open("get",o,!0),i.responseType="arraybuffer",i.onload=function(){if(i.status>=400)n(new Error(i.statusText));else if(i.status>0)try{const s=l(i.response);s.src=o,a(s)}catch(s){n(s)}},i.onerror=n,i.send()}catch(i){n(i)}}function e(o,a){let n=u[o];n?a(n):c[o]?c[o].push(a):(c[o]=[a],t(o,i=>{i.src=o,u[o]=i,c[o].forEach(s=>s(i)),delete c[o]}))}return function(o,a,{lang:n,fonts:i=[],style:s="normal",weight:f="normal",unicodeFontsURL:d}={}){const h=new Uint8Array(o.length),p=[];o.length||b();const g=new Map,m=[];if(s!=="italic"&&(s="normal"),typeof f!="number"&&(f=f==="bold"?700:400),i&&!Array.isArray(i)&&(i=[i]),i=i.slice().filter(x=>!x.lang||x.lang.test(n)).reverse(),i.length){let w=0;(function S(R=0){for(let U=R,j=o.length;U<j;U++){const y=o.codePointAt(U);if(w===1&&p[h[U-1]].supportsCodePoint(y)||U>0&&/\s/.test(o[U]))h[U]=h[U-1],w===2&&(m[m.length-1][1]=U);else for(let D=h[U],M=i.length;D<=M;D++)if(D===M){const V=w===2?m[m.length-1]:m[m.length]=[U,U];V[1]=U,w=2}else{h[U]=D;const{src:V,unicodeRange:z}=i[D];if(!z||T(y,z)){const q=u[V];if(!q){e(V,()=>{S(U)});return}if(q.supportsCodePoint(y)){let oe=g.get(q);typeof oe!="number"&&(oe=p.length,p.push(q),g.set(q,oe)),h[U]=oe,w=1;break}}}y>65535&&U+1<j&&(h[U+1]=h[U],U++,w===2&&(m[m.length-1][1]=U))}_()})()}else m.push([0,o.length-1]),_();function _(){if(m.length){const x=m.map(C=>o.substring(C[0],C[1]+1)).join(`
`);r.getFontsForString(x,{lang:n||void 0,style:s,weight:f,dataUrl:d}).then(({fontUrls:C,chars:F})=>{const w=p.length;let S=0;m.forEach(U=>{for(let j=0,y=U[1]-U[0];j<=y;j++)h[U[0]+j]=F[S++]+w;S++});let R=0;C.forEach((U,j)=>{e(U,y=>{p[j+w]=y,++R===C.length&&b()})})})}else b()}function b(){a({chars:h,fonts:p})}function T(x,C){for(let F=0;F<C.length;F++){const[w,S=w]=C[F];if(w<=x&&x<=S)return!0}return!1}}}const Di=kt({name:"FontResolver",dependencies:[Pi,Ei,Ui],init(l,r,u){return l(r,u())}});function Fi(l,r){const c=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,t="[^\\S\\u00A0]",e=new RegExp(`${t}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function o({text:p,lang:g,fonts:m,style:_,weight:b,preResolvedFonts:T,unicodeFontsURL:x},C){const F=({chars:w,fonts:S})=>{let R,U;const j=[];for(let y=0;y<w.length;y++)w[y]!==U?(U=w[y],j.push(R={start:y,end:y,fontObj:S[w[y]]})):R.end=y;C(j)};T?F(T):l(p,F,{lang:g,fonts:m,style:_,weight:b,unicodeFontsURL:x})}function a({text:p="",font:g,lang:m,sdfGlyphSize:_=64,fontSize:b=400,fontWeight:T=1,fontStyle:x="normal",letterSpacing:C=0,lineHeight:F="normal",maxWidth:w=1/0,direction:S,textAlign:R="left",textIndent:U=0,whiteSpace:j="normal",overflowWrap:y="normal",anchorX:D=0,anchorY:M=0,metricsOnly:V=!1,unicodeFontsURL:z,preResolvedFonts:q=null,includeCaretPositions:oe=!1,chunkedBoundsSize:L=8192,colorRanges:B=null},v){const k=f(),P={fontLoad:0,typesetting:0};p.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),p=p.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),b=+b,C=+C,w=+w,F=F||"normal",U=+U,o({text:p,lang:m,style:x,weight:T,fonts:typeof g=="string"?[{src:g}]:g,unicodeFontsURL:z,preResolvedFonts:q},A=>{P.fontLoad=f()-k;const E=isFinite(w);let W=null,I=null,G=null,Y=null,ee=null,X=null,N=null,ge=null,fe=0,Q=0,te=j!=="nowrap";const le=new Map,H=f();let re=U,$=0,O=new d;const pe=[O];A.forEach(ne=>{const{fontObj:ie}=ne,{ascender:ue,descender:me,unitsPerEm:Te,lineGap:Ue,capHeight:ye,xHeight:be}=ie;let ce=le.get(ie);if(!ce){const he=b/Te,Se=F==="normal"?(ue-me+Ue)*he:F*b,tt=(Se-(ue-me)*he)/2,ke=Math.min(Se,(ue-me)*he),we=(ue+me)/2*he+ke/2;ce={index:le.size,src:ie.src,fontObj:ie,fontSizeMult:he,unitsPerEm:Te,ascender:ue*he,descender:me*he,capHeight:ye*he,xHeight:be*he,lineHeight:Se,baseline:-tt-ue*he,caretTop:we,caretBottom:we-ke},le.set(ie,ce)}const{fontSizeMult:Pe}=ce,_e=p.slice(ne.start,ne.end+1);let Le,Ce;ie.forEachGlyph(_e,b,C,(he,Se,tt,ke)=>{Se+=$,ke+=ne.start,Le=Se,Ce=he;const we=p.charAt(ke),De=he.advanceWidth*Pe,Me=O.count;let ve;if("isEmpty"in he||(he.isWhitespace=!!we&&new RegExp(t).test(we),he.canBreakAfter=!!we&&e.test(we),he.isEmpty=he.xMin===he.xMax||he.yMin===he.yMax||c.test(we)),!he.isWhitespace&&!he.isEmpty&&Q++,te&&E&&!he.isWhitespace&&Se+De+re>w&&Me){if(O.glyphAt(Me-1).glyphObj.canBreakAfter)ve=new d,re=-Se;else for(let Be=Me;Be--;)if(Be===0&&y==="break-word"){ve=new d,re=-Se;break}else if(O.glyphAt(Be).glyphObj.canBreakAfter){ve=O.splitAt(Be+1);const Ie=ve.glyphAt(0).x;re-=Ie;for(let Fe=ve.count;Fe--;)ve.glyphAt(Fe).x-=Ie;break}ve&&(O.isSoftWrapped=!0,O=ve,pe.push(O),fe=w)}let Ee=O.glyphAt(O.count);Ee.glyphObj=he,Ee.x=Se+re,Ee.y=tt,Ee.width=De,Ee.charIndex=ke,Ee.fontData=ce,we===`
`&&(O=new d,pe.push(O),re=-(Se+De+C*b)+U)}),$=Le+Ce.advanceWidth*Pe+C*b});let J=0;pe.forEach(ne=>{let ie=!0;for(let ue=ne.count;ue--;){const me=ne.glyphAt(ue);ie&&!me.glyphObj.isWhitespace&&(ne.width=me.x+me.width,ne.width>fe&&(fe=ne.width),ie=!1);let{lineHeight:Te,capHeight:Ue,xHeight:ye,baseline:be}=me.fontData;Te>ne.lineHeight&&(ne.lineHeight=Te);const ce=be-ne.baseline;ce<0&&(ne.baseline+=ce,ne.cap+=ce,ne.ex+=ce),ne.cap=Math.max(ne.cap,ne.baseline+Ue),ne.ex=Math.max(ne.ex,ne.baseline+ye)}ne.baseline-=J,ne.cap-=J,ne.ex-=J,J+=ne.lineHeight});let ae=0,K=0;if(D&&(typeof D=="number"?ae=-D:typeof D=="string"&&(ae=-fe*(D==="left"?0:D==="center"?.5:D==="right"?1:i(D)))),M&&(typeof M=="number"?K=-M:typeof M=="string"&&(K=M==="top"?0:M==="top-baseline"?-pe[0].baseline:M==="top-cap"?-pe[0].cap:M==="top-ex"?-pe[0].ex:M==="middle"?J/2:M==="bottom"?J:M==="bottom-baseline"?-pe[pe.length-1].baseline:i(M)*J)),!V){const ne=r.getEmbeddingLevels(p,S);W=new Uint16Array(Q),I=new Uint8Array(Q),G=new Float32Array(Q*2),Y={},N=[1/0,1/0,-1/0,-1/0],ge=[],oe&&(X=new Float32Array(p.length*4)),B&&(ee=new Uint8Array(Q*3));let ie=0,ue=-1,me=-1,Te,Ue;if(pe.forEach((ye,be)=>{let{count:ce,width:Pe}=ye;if(ce>0){let _e=0;for(let ke=ce;ke--&&ye.glyphAt(ke).glyphObj.isWhitespace;)_e++;let Le=0,Ce=0;if(R==="center")Le=(fe-Pe)/2;else if(R==="right")Le=fe-Pe;else if(R==="justify"&&ye.isSoftWrapped){let ke=0;for(let we=ce-_e;we--;)ye.glyphAt(we).glyphObj.isWhitespace&&ke++;Ce=(fe-Pe)/ke}if(Ce||Le){let ke=0;for(let we=0;we<ce;we++){let De=ye.glyphAt(we);const Me=De.glyphObj;De.x+=Le+ke,Ce!==0&&Me.isWhitespace&&we<ce-_e&&(ke+=Ce,De.width+=Ce)}}const he=r.getReorderSegments(p,ne,ye.glyphAt(0).charIndex,ye.glyphAt(ye.count-1).charIndex);for(let ke=0;ke<he.length;ke++){const[we,De]=he[ke];let Me=1/0,ve=-1/0;for(let Ee=0;Ee<ce;Ee++)if(ye.glyphAt(Ee).charIndex>=we){let Be=Ee,Ie=Ee;for(;Ie<ce;Ie++){let Fe=ye.glyphAt(Ie);if(Fe.charIndex>De)break;Ie<ce-_e&&(Me=Math.min(Me,Fe.x),ve=Math.max(ve,Fe.x+Fe.width))}for(let Fe=Be;Fe<Ie;Fe++){const je=ye.glyphAt(Fe);je.x=ve-(je.x+je.width-Me)}break}}let Se;const tt=ke=>Se=ke;for(let ke=0;ke<ce;ke++){const we=ye.glyphAt(ke);Se=we.glyphObj;const De=Se.index,Me=ne.levels[we.charIndex]&1;if(Me){const ve=r.getMirroredCharacter(p[we.charIndex]);ve&&we.fontData.fontObj.forEachGlyph(ve,0,0,tt)}if(oe){const{charIndex:ve,fontData:Ee}=we,Be=we.x+ae,Ie=we.x+we.width+ae;X[ve*4]=Me?Ie:Be,X[ve*4+1]=Me?Be:Ie,X[ve*4+2]=ye.baseline+Ee.caretBottom+K,X[ve*4+3]=ye.baseline+Ee.caretTop+K;const Fe=ve-ue;Fe>1&&s(X,ue,Fe),ue=ve}if(B){const{charIndex:ve}=we;for(;ve>me;)me++,B.hasOwnProperty(me)&&(Ue=B[me])}if(!Se.isWhitespace&&!Se.isEmpty){const ve=ie++,{fontSizeMult:Ee,src:Be,index:Ie}=we.fontData,Fe=Y[Be]||(Y[Be]={});Fe[De]||(Fe[De]={path:Se.path,pathBounds:[Se.xMin,Se.yMin,Se.xMax,Se.yMax]});const je=we.x+ae,rt=we.y+ye.baseline+K;G[ve*2]=je,G[ve*2+1]=rt;const Qe=je+Se.xMin*Ee,ot=rt+Se.yMin*Ee,st=je+Se.xMax*Ee,Ze=rt+Se.yMax*Ee;Qe<N[0]&&(N[0]=Qe),ot<N[1]&&(N[1]=ot),st>N[2]&&(N[2]=st),Ze>N[3]&&(N[3]=Ze),ve%L===0&&(Te={start:ve,end:ve,rect:[1/0,1/0,-1/0,-1/0]},ge.push(Te)),Te.end++;const Oe=Te.rect;if(Qe<Oe[0]&&(Oe[0]=Qe),ot<Oe[1]&&(Oe[1]=ot),st>Oe[2]&&(Oe[2]=st),Ze>Oe[3]&&(Oe[3]=Ze),W[ve]=De,I[ve]=Ie,B){const lt=ve*3;ee[lt]=Ue>>16&255,ee[lt+1]=Ue>>8&255,ee[lt+2]=Ue&255}}}}}),X){const ye=p.length-ue;ye>1&&s(X,ue,ye)}}const xe=[];le.forEach(({index:ne,src:ie,unitsPerEm:ue,ascender:me,descender:Te,lineHeight:Ue,capHeight:ye,xHeight:be})=>{xe[ne]={src:ie,unitsPerEm:ue,ascender:me,descender:Te,lineHeight:Ue,capHeight:ye,xHeight:be}}),P.typesetting=f()-H,v({glyphIds:W,glyphFontIndices:I,glyphPositions:G,glyphData:Y,fontData:xe,caretPositions:X,glyphColors:ee,chunkedBounds:ge,fontSize:b,topBaseline:K+pe[0].baseline,blockBounds:[ae,K-J,ae+fe,K],visibleBounds:N,timings:P})})}function n(p,g){a({...p,metricsOnly:!0},m=>{const[_,b,T,x]=m.blockBounds;g({width:T-_,height:x-b})})}function i(p){let g=p.match(/^([\d.]+)%$/),m=g?parseFloat(g[1]):NaN;return isNaN(m)?0:m/100}function s(p,g,m){const _=p[g*4],b=p[g*4+1],T=p[g*4+2],x=p[g*4+3],C=(b-_)/m;for(let F=0;F<m;F++){const w=(g+F)*4;p[w]=_+C*F,p[w+1]=_+C*(F+1),p[w+2]=T,p[w+3]=x}}function f(){return(self.performance||Date).now()}function d(){this.data=[]}const h=["glyphObj","x","y","width","charIndex","fontData"];return d.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/h.length)},glyphAt(p){let g=d.flyweight;return g.data=this.data,g.index=p,g},splitAt(p){let g=new d;return g.data=this.data.splice(p*h.length),g}},d.flyweight=h.reduce((p,g,m,_)=>(Object.defineProperty(p,g,{get(){return this.data[this.index*h.length+m]},set(b){this.data[this.index*h.length+m]=b}}),p),{data:null,index:0}),{typeset:a,measure:n}}const dt=()=>(self.performance||Date).now(),dr=En();let fn;function Ai(l,r,u,c,t,e,o,a,n,i,s=!0){return s?Ii(l,r,u,c,t,e,o,a,n,i).then(null,f=>(fn||(console.warn("WebGL SDF generation failed, falling back to JS",f),fn=!0),hn(l,r,u,c,t,e,o,a,n,i))):hn(l,r,u,c,t,e,o,a,n,i)}const ur=[],Ri=5;let Vr=0;function Pn(){const l=dt();for(;ur.length&&dt()-l<Ri;)ur.shift()();Vr=ur.length?setTimeout(Pn,0):0}const Ii=(...l)=>new Promise((r,u)=>{ur.push(()=>{const c=dt();try{dr.webgl.generateIntoCanvas(...l),r({timing:dt()-c})}catch(t){u(t)}}),Vr||(Vr=setTimeout(Pn,0))}),Bi=4,Oi=2e3,dn={};let Li=0;function hn(l,r,u,c,t,e,o,a,n,i){const s="TroikaTextSDFGenerator_JS_"+Li++%Bi;let f=dn[s];return f||(f=dn[s]={workerModule:kt({name:s,workerId:s,dependencies:[En,dt],init(d,h){const p=d().javascript.generate;return function(...g){const m=h();return{textureData:p(...g),timing:h()-m}}},getTransferables(d){return[d.textureData.buffer]}}),requests:0,idleTimer:null}),f.requests++,clearTimeout(f.idleTimer),f.workerModule(l,r,u,c,t,e).then(({textureData:d,timing:h})=>{const p=dt(),g=new Uint8Array(d.length*4);for(let m=0;m<d.length;m++)g[m*4+i]=d[m];return dr.webglUtils.renderImageData(o,g,a,n,l,r,1<<3-i),h+=dt()-p,--f.requests===0&&(f.idleTimer=setTimeout(()=>{mi(s)},Oi)),{timing:h}})}function Gi(l){l._warm||(dr.webgl.isSupported(l),l._warm=!0)}const zi=dr.webglUtils.resizeWebGLCanvasWithoutClearing,Nt={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},Wi=new it;function wt(){return(self.performance||Date).now()}const pn=Object.create(null);function Dn(l,r){l=Vi({},l);const u=wt(),c=[];if(l.font&&c.push({label:"user",src:Hi(l.font)}),l.font=c,l.text=""+l.text,l.sdfGlyphSize=l.sdfGlyphSize||Nt.sdfGlyphSize,l.unicodeFontsURL=l.unicodeFontsURL||Nt.unicodeFontsURL,l.colorRanges!=null){let d={};for(let h in l.colorRanges)if(l.colorRanges.hasOwnProperty(h)){let p=l.colorRanges[h];typeof p!="number"&&(p=Wi.set(p).getHex()),d[h]=p}l.colorRanges=d}Object.freeze(l);const{textureWidth:t,sdfExponent:e}=Nt,{sdfGlyphSize:o}=l,a=t/o*4;let n=pn[o];if(!n){const d=document.createElement("canvas");d.width=t,d.height=o*256/a,n=pn[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:d,sdfTexture:new ga(d,void 0,void 0,void 0,xo,xo),contextLost:!1,glyphsByFont:new Map},n.sdfTexture.generateMipmaps=!1,Ni(n)}const{sdfTexture:i,sdfCanvas:s}=n;Rn(l).then(d=>{const{glyphIds:h,glyphFontIndices:p,fontData:g,glyphPositions:m,fontSize:_,timings:b}=d,T=[],x=new Float32Array(h.length*4);let C=0,F=0;const w=wt(),S=g.map(D=>{let M=n.glyphsByFont.get(D.src);return M||n.glyphsByFont.set(D.src,M=new Map),M});h.forEach((D,M)=>{const V=p[M],{src:z,unitsPerEm:q}=g[V];let oe=S[V].get(D);if(!oe){const{path:P,pathBounds:A}=d.glyphData[z][D],E=Math.max(A[2]-A[0],A[3]-A[1])/o*(Nt.sdfMargin*o+.5),W=n.glyphCount++,I=[A[0]-E,A[1]-E,A[2]+E,A[3]+E];S[V].set(D,oe={path:P,atlasIndex:W,sdfViewBox:I}),T.push(oe)}const{sdfViewBox:L}=oe,B=m[F++],v=m[F++],k=_/q;x[C++]=B+L[0]*k,x[C++]=v+L[1]*k,x[C++]=B+L[2]*k,x[C++]=v+L[3]*k,h[M]=oe.atlasIndex}),b.quads=(b.quads||0)+(wt()-w);const R=wt();b.sdf={};const U=s.height,j=Math.ceil(n.glyphCount/a),y=Math.pow(2,Math.ceil(Math.log2(j*o)));y>U&&(console.info(`Increasing SDF texture size ${U}->${y}`),zi(s,t,y),i.dispose()),Promise.all(T.map(D=>Fn(D,n,l.gpuAccelerateSDF).then(({timing:M})=>{b.sdf[D.atlasIndex]=M}))).then(()=>{T.length&&!n.contextLost&&(An(n),i.needsUpdate=!0),b.sdfTotal=wt()-R,b.total=wt()-u,r(Object.freeze({parameters:l,sdfTexture:i,sdfGlyphSize:o,sdfExponent:e,glyphBounds:x,glyphAtlasIndices:h,glyphColors:d.glyphColors,caretPositions:d.caretPositions,chunkedBounds:d.chunkedBounds,ascender:d.ascender,descender:d.descender,lineHeight:d.lineHeight,capHeight:d.capHeight,xHeight:d.xHeight,topBaseline:d.topBaseline,blockBounds:d.blockBounds,visibleBounds:d.visibleBounds,timings:d.timings}))})}),Promise.resolve().then(()=>{n.contextLost||Gi(s)})}function Fn({path:l,atlasIndex:r,sdfViewBox:u},{sdfGlyphSize:c,sdfCanvas:t,contextLost:e},o){if(e)return Promise.resolve({timing:-1});const{textureWidth:a,sdfExponent:n}=Nt,i=Math.max(u[2]-u[0],u[3]-u[1]),s=Math.floor(r/4),f=s%(a/c)*c,d=Math.floor(s/(a/c))*c,h=r%4;return Ai(c,c,l,u,i,n,t,f,d,h,o)}function Ni(l){const r=l.sdfCanvas;r.addEventListener("webglcontextlost",u=>{console.log("Context Lost",u),u.preventDefault(),l.contextLost=!0}),r.addEventListener("webglcontextrestored",u=>{console.log("Context Restored",u),l.contextLost=!1;const c=[];l.glyphsByFont.forEach(t=>{t.forEach(e=>{c.push(Fn(e,l,!0))})}),Promise.all(c).then(()=>{An(l),l.sdfTexture.needsUpdate=!0})})}function ji({font:l,characters:r,sdfGlyphSize:u},c){let t=Array.isArray(r)?r.join(`
`):""+r;Dn({font:l,sdfGlyphSize:u,text:t},c)}function Vi(l,r){for(let u in r)r.hasOwnProperty(u)&&(l[u]=r[u]);return l}let sr;function Hi(l){return sr||(sr=typeof document>"u"?{}:document.createElement("a")),sr.href=l,sr.href}function An(l){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:r,sdfTexture:u}=l,{width:c,height:t}=r,e=l.sdfCanvas.getContext("webgl");let o=u.image.data;(!o||o.length!==c*t*4)&&(o=new Uint8Array(c*t*4),u.image={width:c,height:t,data:o},u.flipY=!1,u.isDataTexture=!0),e.readPixels(0,0,c,t,e.RGBA,e.UNSIGNED_BYTE,o)}}const Xi=kt({name:"Typesetter",dependencies:[Fi,Di,gi],init(l,r,u){return l(r,u())}}),Rn=kt({name:"Typesetter",dependencies:[Xi],init(l){return function(r){return new Promise(u=>{l.typeset(r,u)})}},getTransferables(l){const r=[];for(let u in l)l[u]&&l[u].buffer&&r.push(l[u].buffer);return r}});Rn.onMainThread;const mn={};function Yi(l){let r=mn[l];return r||(r=mn[l]=new Yr(1,1,l,l).translate(.5,.5,0)),r}const Ki="aTroikaGlyphBounds",vn="aTroikaGlyphIndex",Ji="aTroikaGlyphColor";class Qi extends pa{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new ma,this.boundingBox=new Sn}computeBoundingSphere(){}computeBoundingBox(){}set detail(r){if(r!==this._detail){this._detail=r,(typeof r!="number"||r<1)&&(r=1);let u=Yi(r);["position","normal","uv"].forEach(c=>{this.attributes[c]=u.attributes[c].clone()}),this.setIndex(u.getIndex().clone())}}get detail(){return this._detail}set curveRadius(r){r!==this._curveRadius&&(this._curveRadius=r,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(r,u,c,t,e){this.updateAttributeData(Ki,r,4),this.updateAttributeData(vn,u,1),this.updateAttributeData(Ji,e,3),this._blockBounds=c,this._chunkedBounds=t,this.instanceCount=u.length,this._updateBounds()}_updateBounds(){const r=this._blockBounds;if(r){const{curveRadius:u,boundingBox:c}=this;if(u){const{PI:t,floor:e,min:o,max:a,sin:n,cos:i}=Math,s=t/2,f=t*2,d=Math.abs(u),h=r[0]/d,p=r[2]/d,g=e((h+s)/f)!==e((p+s)/f)?-d:o(n(h)*d,n(p)*d),m=e((h-s)/f)!==e((p-s)/f)?d:a(n(h)*d,n(p)*d),_=e((h+t)/f)!==e((p+t)/f)?d*2:a(d-i(h)*d,d-i(p)*d);c.min.set(g,r[1],u<0?-_:0),c.max.set(m,r[3],u<0?0:_)}else c.min.set(r[0],r[1],0),c.max.set(r[2],r[3],0);c.getBoundingSphere(this.boundingSphere)}}applyClipRect(r){let u=this.getAttribute(vn).count,c=this._chunkedBounds;if(c)for(let t=c.length;t--;){u=c[t].end;let e=c[t].rect;if(e[1]<r.w&&e[3]>r.y&&e[0]<r.z&&e[2]>r.x)break}this.instanceCount=u}updateAttributeData(r,u,c){const t=this.getAttribute(r);u?t&&t.array.length===u.length?(t.array.set(u),t.needsUpdate=!0):(this.setAttribute(r,new va(u,c)),delete this._maxInstanceCount,this.dispose()):t&&this.deleteAttribute(r)}}const Zi=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,qi=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,$i=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,es=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function ts(l){const r=jr(l,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new et},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new St(0,0,0,0)},uTroikaClipRect:{value:new St(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new et},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new it},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new ya},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Zi,vertexTransform:qi,fragmentDefs:$i,fragmentColorTransform:es,customRewriter({vertexShader:u,fragmentShader:c}){let t=/\buniform\s+vec3\s+diffuse\b/;return t.test(c)&&(c=c.replace(t,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),t.test(u)||(u=u.replace(Un,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:u,fragmentShader:c}}});return r.transparent=!0,r.forceSinglePass=!0,Object.defineProperties(r,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),r}const Qr=new ha({color:16777215,side:ba,transparent:!0}),gn=8421504,yn=new Hr,lr=new Je,Ir=new Je,zt=[],rs=new Je,Br="+x+y";function bn(l){return Array.isArray(l)?l[0]:l}let In=()=>{const l=new Xr(new Yr(1,1),Qr);return In=()=>l,l},Bn=()=>{const l=new Xr(new Yr(1,1,32,1),Qr);return Bn=()=>l,l};const os={type:"syncstart"},ns={type:"synccomplete"},On=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],as=On.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");let Ln=class extends Xr{constructor(){const r=new Qi;super(r,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=gn,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Br,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(r){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(r):(this._isSyncing=!0,this.dispatchEvent(os),Dn({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},u=>{this._isSyncing=!1,this._textRenderInfo=u,this.geometry.updateGlyphs(u.glyphBounds,u.glyphAtlasIndices,u.blockBounds,u.chunkedBounds,u.glyphColors);const c=this._queuedSyncs;c&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{c.forEach(t=>t&&t())})),this.dispatchEvent(ns),r&&r()})))}onBeforeRender(r,u,c,t,e,o){this.sync(),e.isTroikaTextMaterial&&this._prepareForRender(e)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(r){return ts(r)}get material(){let r=this._derivedMaterial;const u=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Qr.clone());if((!r||!r.isDerivedFrom(u))&&(r=this._derivedMaterial=this.createDerivedMaterial(u),u.addEventListener("dispose",function c(){u.removeEventListener("dispose",c),r.dispose()})),this.hasOutline()){let c=r._outlineMtl;return c||(c=r._outlineMtl=Object.create(r,{id:{value:r.id+.1}}),c.isTextOutlineMaterial=!0,c.depthWrite=!1,c.map=null,r.addEventListener("dispose",function t(){r.removeEventListener("dispose",t),c.dispose()})),[c,r]}else return r}set material(r){r&&r.isTroikaTextMaterial?(this._derivedMaterial=r,this._baseMaterial=r.baseMaterial):this._baseMaterial=r}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(r){this.geometry.detail=r}get curveRadius(){return this.geometry.curveRadius}set curveRadius(r){this.geometry.curveRadius=r}get customDepthMaterial(){return bn(this.material).getDepthMaterial()}set customDepthMaterial(r){}get customDistanceMaterial(){return bn(this.material).getDistanceMaterial()}set customDistanceMaterial(r){}_prepareForRender(r){const u=r.isTextOutlineMaterial,c=r.uniforms,t=this.textRenderInfo;if(t){const{sdfTexture:a,blockBounds:n}=t;c.uTroikaSDFTexture.value=a,c.uTroikaSDFTextureSize.value.set(a.image.width,a.image.height),c.uTroikaSDFGlyphSize.value=t.sdfGlyphSize,c.uTroikaSDFExponent.value=t.sdfExponent,c.uTroikaTotalBounds.value.fromArray(n),c.uTroikaUseGlyphColors.value=!u&&!!t.glyphColors;let i=0,s=0,f=0,d,h,p,g=0,m=0;if(u){let{outlineWidth:b,outlineOffsetX:T,outlineOffsetY:x,outlineBlur:C,outlineOpacity:F}=this;i=this._parsePercent(b)||0,s=Math.max(0,this._parsePercent(C)||0),d=F,g=this._parsePercent(T)||0,m=this._parsePercent(x)||0}else f=Math.max(0,this._parsePercent(this.strokeWidth)||0),f&&(p=this.strokeColor,c.uTroikaStrokeColor.value.set(p??gn),h=this.strokeOpacity,h==null&&(h=1)),d=this.fillOpacity;c.uTroikaEdgeOffset.value=i,c.uTroikaPositionOffset.value.set(g,m),c.uTroikaBlurRadius.value=s,c.uTroikaStrokeWidth.value=f,c.uTroikaStrokeOpacity.value=h,c.uTroikaFillOpacity.value=d??1,c.uTroikaCurveRadius.value=this.curveRadius||0;let _=this.clipRect;if(_&&Array.isArray(_)&&_.length===4)c.uTroikaClipRect.value.fromArray(_);else{const b=(this.fontSize||.1)*100;c.uTroikaClipRect.value.set(n[0]-b,n[1]-b,n[2]+b,n[3]+b)}this.geometry.applyClipRect(c.uTroikaClipRect.value)}c.uTroikaSDFDebug.value=!!this.debugSDF,r.polygonOffset=!!this.depthOffset,r.polygonOffsetFactor=r.polygonOffsetUnits=this.depthOffset||0;const e=u?this.outlineColor||0:this.color;if(e==null)delete r.color;else{const a=r.hasOwnProperty("color")?r.color:r.color=new it;(e!==a._input||typeof e=="object")&&a.set(a._input=e)}let o=this.orientation||Br;if(o!==r._orientation){let a=c.uTroikaOrient.value;o=o.replace(/[^-+xyz]/g,"");let n=o!==Br&&o.match(/^([-+])([xyz])([-+])([xyz])$/);if(n){let[,i,s,f,d]=n;lr.set(0,0,0)[s]=i==="-"?1:-1,Ir.set(0,0,0)[d]=f==="-"?-1:1,yn.lookAt(rs,lr.cross(Ir),Ir),a.setFromMatrix4(yn)}else a.identity();r._orientation=o}}_parsePercent(r){if(typeof r=="string"){let u=r.match(/^(-?[\d.]+)%$/),c=u?parseFloat(u[1]):NaN;r=(isNaN(c)?0:c/100)*this.fontSize}return r}localPositionToTextCoords(r,u=new et){u.copy(r);const c=this.curveRadius;return c&&(u.x=Math.atan2(r.x,Math.abs(c)-Math.abs(r.z))*Math.abs(c)),u}worldPositionToTextCoords(r,u=new et){return lr.copy(r),this.localPositionToTextCoords(this.worldToLocal(lr),u)}raycast(r,u){const{textRenderInfo:c,curveRadius:t}=this;if(c){const e=c.blockBounds,o=t?Bn():In(),a=o.geometry,{position:n,uv:i}=a.attributes;for(let s=0;s<i.count;s++){let f=e[0]+i.getX(s)*(e[2]-e[0]);const d=e[1]+i.getY(s)*(e[3]-e[1]);let h=0;t&&(h=t-Math.cos(f/t)*t,f=Math.sin(f/t)*t),n.setXYZ(s,f,d,h)}a.boundingSphere=this.geometry.boundingSphere,a.boundingBox=this.geometry.boundingBox,o.matrixWorld=this.matrixWorld,o.material.side=this.material.side,zt.length=0,o.raycast(r,zt);for(let s=0;s<zt.length;s++)zt[s].object=this,u.push(zt[s])}}copy(r){const u=this.geometry;return super.copy(r),this.geometry=u,as.forEach(c=>{this[c]=r[c]}),this}clone(){return new this.constructor().copy(this)}};On.forEach(l=>{const r="_private_"+l;Object.defineProperty(Ln.prototype,l,{get(){return this[r]},set(u){u!==this[r]&&(this[r]=u,this._needsSync=!0)}})});new Sn;new it;const Gn=Z.forwardRef(({sdfGlyphSize:l=64,anchorX:r="center",anchorY:u="middle",font:c,fontSize:t=1,children:e,characters:o,onSync:a,...n},i)=>{const s=Ye(({invalidate:p})=>p),[f]=Z.useState(()=>new Ln),[d,h]=Z.useMemo(()=>{const p=[];let g="";return Z.Children.forEach(e,m=>{typeof m=="string"||typeof m=="number"?g+=m:p.push(m)}),[p,g]},[e]);return Ea(()=>new Promise(p=>ji({font:c,characters:o},p)),["troika-text",c,o]),Z.useLayoutEffect(()=>void f.sync(()=>{s(),a&&a(f)})),Z.useEffect(()=>()=>f.dispose(),[f]),Z.createElement("primitive",$e({object:f,ref:i,font:c,text:h,anchorX:r,anchorY:u,fontSize:t,sdfGlyphSize:l},n),d)}),is=()=>parseInt(wa.replace(/\D+/g,"")),ss=is(),wn=Tn({color:new it("white"),scale:new et(1,1),imageBounds:new et(1,1),resolution:1024,map:null,zoom:1,radius:0,grayscale:0,opacity:1},`
  varying vec2 vUv;
  varying vec2 vPos;
  void main() {
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);
    vUv = uv;
    vPos = position.xy;
  }
`,`
  // mostly from https://gist.github.com/statico/df64c5d167362ecf7b34fca0b1459a44
  varying vec2 vUv;
  varying vec2 vPos;
  uniform vec2 scale;
  uniform vec2 imageBounds;
  uniform float resolution;
  uniform vec3 color;
  uniform sampler2D map;
  uniform float radius;
  uniform float zoom;
  uniform float grayscale;
  uniform float opacity;
  const vec3 luma = vec3(.299, 0.587, 0.114);
  vec4 toGrayscale(vec4 color, float intensity) {
    return vec4(mix(color.rgb, vec3(dot(color.rgb, luma)), intensity), color.a);
  }
  vec2 aspect(vec2 size) {
    return size / min(size.x, size.y);
  }
  
  const float PI = 3.14159265;
    
  // from https://iquilezles.org/articles/distfunctions
  float udRoundBox( vec2 p, vec2 b, float r ) {
    return length(max(abs(p)-b+r,0.0))-r;
  }

  void main() {
    vec2 s = aspect(scale);
    vec2 i = aspect(imageBounds);
    float rs = s.x / s.y;
    float ri = i.x / i.y;
    vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
    vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;
    vec2 uv = vUv * s / new + offset;
    vec2 zUv = (uv - vec2(0.5, 0.5)) / zoom + vec2(0.5, 0.5);

    vec2 res = vec2(scale * resolution);
    vec2 halfRes = 0.5 * res;
    float b = udRoundBox(vUv.xy * res - halfRes, halfRes, resolution * radius);    
	  vec3 a = mix(vec3(1.0,0.0,0.0), vec3(0.0,0.0,0.0), smoothstep(0.0, 1.0, b));
    gl_FragColor = toGrayscale(texture2D(map, zUv) * vec4(color, opacity * a), grayscale);
    
    #include <tonemapping_fragment>
    #include <${ss>=154?"colorspace_fragment":"encodings_fragment"}>
  }
`),zn=Z.forwardRef(({children:l,color:r,segments:u=1,scale:c=1,zoom:t=1,grayscale:e=0,opacity:o=1,radius:a=0,texture:n,toneMapped:i,transparent:s,side:f,...d},h)=>{kn({ImageMaterial:wn});const p=Z.useRef(null),g=Ye(T=>T.size),m=Array.isArray(c)?[c[0],c[1]]:[c,c],_=[n.image.width,n.image.height],b=Math.max(g.width,g.height);return Z.useImperativeHandle(h,()=>p.current,[]),Z.useLayoutEffect(()=>{p.current.geometry.parameters&&p.current.material.scale.set(m[0]*p.current.geometry.parameters.width,m[1]*p.current.geometry.parameters.height)},[m[0],m[1]]),Z.createElement("mesh",$e({ref:p,scale:Array.isArray(c)?[...c,1]:c},d),Z.createElement("planeGeometry",{args:[1,1,u,u]}),Z.createElement("imageMaterial",{color:r,map:n,zoom:t,grayscale:e,opacity:o,scale:m,imageBounds:_,resolution:b,radius:a,toneMapped:i,transparent:s,side:f,key:wn.key}),l)}),ls=Z.forwardRef(({url:l,...r},u)=>{const c=Da(l);return Z.createElement(zn,$e({},r,{texture:c,ref:u}))}),cs=Z.forwardRef(({url:l,...r},u)=>Z.createElement(zn,$e({},r,{ref:u}))),Wt=Z.forwardRef((l,r)=>{if(l.url)return Z.createElement(ls,$e({},l,{ref:r}));if(l.texture)return Z.createElement(cs,$e({},l,{ref:r}));throw new Error("<Image /> requires a url or texture")}),us=Tn({},"void main() { }","void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }");class fs extends Ta{constructor(r=6,u=!1){super(),this.uniforms={chromaticAberration:{value:.05},transmission:{value:0},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new it("white")},anisotropicBlur:{value:.1},time:{value:0},distortion:{value:0},distortionScale:{value:.5},temporalDistortion:{value:0},buffer:{value:null}},this.onBeforeCompile=c=>{c.uniforms={...c.uniforms,...this.uniforms},this.anisotropy>0&&(c.defines.USE_ANISOTROPY=""),u?c.defines.USE_SAMPLER="":c.defines.USE_TRANSMISSION="",c.fragmentShader=`
      uniform float chromaticAberration;         
      uniform float anisotropicBlur;      
      uniform float time;
      uniform float distortion;
      uniform float distortionScale;
      uniform float temporalDistortion;
      uniform sampler2D buffer;

      vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
      }

      uint hash( uint x ) {
        x += ( x << 10u );
        x ^= ( x >>  6u );
        x += ( x <<  3u );
        x ^= ( x >> 11u );
        x += ( x << 15u );
        return x;
      }

      // Compound versions of the hashing algorithm I whipped together.
      uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
      uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
      uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

      // Construct a float with half-open range [0:1] using low 23 bits.
      // All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
      float floatConstruct( uint m ) {
        const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
        const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
        m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
        m |= ieeeOne;                          // Add fractional part to 1.0
        float  f = uintBitsToFloat( m );       // Range [1:2]
        return f - 1.0;                        // Range [0:1]
      }

      // Pseudo-random value in half-open range [0:1].
      float randomBase( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
      float randomBase( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float rand(float seed) {
        float result = randomBase(vec3(gl_FragCoord.xy, seed));
        return result;
      }

      const float F3 =  0.3333333;
      const float G3 =  0.1666667;

      float snoise(vec3 p) {
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        vec4 w, d;
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        w = max(0.6 - w, 0.0);
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        w *= w;
        w *= w;
        d *= w;
        return dot(d, vec4(52.0));
      }

      float snoiseFractal(vec3 m) {
        return 0.5333333* snoise(m)
              +0.2666667* snoise(2.0*m)
              +0.1333333* snoise(4.0*m)
              +0.0666667* snoise(8.0*m);
      }
`+c.fragmentShader,c.fragmentShader=c.fragmentShader.replace("#include <transmission_pars_fragment>",`
        #ifdef USE_TRANSMISSION
          // Transmission code is based on glTF-Sampler-Viewer
          // https://github.com/KhronosGroup/glTF-Sample-Viewer
          uniform float _transmission;
          uniform float thickness;
          uniform float attenuationDistance;
          uniform vec3 attenuationColor;
          #ifdef USE_TRANSMISSIONMAP
            uniform sampler2D transmissionMap;
          #endif
          #ifdef USE_THICKNESSMAP
            uniform sampler2D thicknessMap;
          #endif
          uniform vec2 transmissionSamplerSize;
          uniform sampler2D transmissionSamplerMap;
          uniform mat4 modelMatrix;
          uniform mat4 projectionMatrix;
          varying vec3 vWorldPosition;
          vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
            // Direction of refracted light.
            vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
            // Compute rotation-independant scaling of the model matrix.
            vec3 modelScale;
            modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
            modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
            modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
            // The thickness is specified in local space.
            return normalize( refractionVector ) * thickness * modelScale;
          }
          float applyIorToRoughness( const in float roughness, const in float ior ) {
            // Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
            // an IOR of 1.5 results in the default amount of microfacet refraction.
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
          }
          vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
            float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );            
            #ifdef USE_SAMPLER
              #ifdef texture2DLodEXT
                return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #else
                return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #endif
            #else
              return texture2D(buffer, fragCoord.xy);
            #endif
          }
          vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
            if ( isinf( attenuationDistance ) ) {
              // Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
              return radiance;
            } else {
              // Compute light attenuation using Beer's law.
              vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
              vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
              return transmittance * radiance;
            }
          }
          vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
            const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
            const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
            const in vec3 attenuationColor, const in float attenuationDistance ) {
            vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
            vec3 refractedRayExit = position + transmissionRay;
            // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
            vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            vec2 refractionCoords = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            // Sample framebuffer to get pixel the refracted ray hits.
            vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
            vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
            // Get the specular component.
            vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
            return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
          }
        #endif
`),c.fragmentShader=c.fragmentShader.replace("#include <transmission_fragment>",`  
        // Improve the refraction to use the world pos
        material.transmission = _transmission;
        material.transmissionAlpha = 1.0;
        material.thickness = thickness;
        material.attenuationDistance = attenuationDistance;
        material.attenuationColor = attenuationColor;
        #ifdef USE_TRANSMISSIONMAP
          material.transmission *= texture2D( transmissionMap, vUv ).r;
        #endif
        #ifdef USE_THICKNESSMAP
          material.thickness *= texture2D( thicknessMap, vUv ).g;
        #endif
        
        vec3 pos = vWorldPosition;
        float runningSeed = 0.0;
        vec3 v = normalize( cameraPosition - pos );
        vec3 n = inverseTransformDirection( normal, viewMatrix );
        vec3 transmission = vec3(0.0);
        float transmissionR, transmissionB, transmissionG;
        float randomCoords = rand(runningSeed++);
        float thickness_smear = thickness * max(pow(roughnessFactor, 0.33), anisotropicBlur);
        vec3 distortionNormal = vec3(0.0);
        vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;
        if (distortion > 0.0) {
          distortionNormal = distortion * vec3(snoiseFractal(vec3((pos * distortionScale + temporalOffset))), snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)), snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset)));
        }
        for (float i = 0.0; i < ${r}.0; i ++) {
          vec3 sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
          transmissionR = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness  + thickness_smear * (i + randomCoords) / float(${r}),
            material.attenuationColor, material.attenuationDistance
          ).r;
          transmissionG = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior  * (1.0 + chromaticAberration * (i + randomCoords) / float(${r})) , material.thickness + thickness_smear * (i + randomCoords) / float(${r}),
            material.attenuationColor, material.attenuationDistance
          ).g;
          transmissionB = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * chromaticAberration * (i + randomCoords) / float(${r})), material.thickness + thickness_smear * (i + randomCoords) / float(${r}),
            material.attenuationColor, material.attenuationDistance
          ).b;
          transmission.r += transmissionR;
          transmission.g += transmissionG;
          transmission.b += transmissionB;
        }
        transmission /= ${r}.0;
        totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
`)},Object.keys(this.uniforms).forEach(c=>Object.defineProperty(this,c,{get:()=>this.uniforms[c].value,set:t=>this.uniforms[c].value=t}))}}const ds=Z.forwardRef(({buffer:l,transmissionSampler:r=!1,backside:u=!1,side:c=ka,transmission:t=1,thickness:e=0,backsideThickness:o=0,backsideEnvMapIntensity:a=1,samples:n=10,resolution:i,backsideResolution:s,background:f,anisotropy:d,anisotropicBlur:h,...p},g)=>{kn({MeshTransmissionMaterial:fs});const m=Z.useRef(null),[_]=Z.useState(()=>new us),b=Or(s||i),T=Or(i);let x,C,F,w;return ht(S=>{if(m.current.time=S.clock.elapsedTime,m.current.buffer===T.texture&&!r){var R;w=(R=m.current.__r3f.parent)==null?void 0:R.object,w&&(F=S.gl.toneMapping,x=S.scene.background,C=m.current.envMapIntensity,S.gl.toneMapping=xa,f&&(S.scene.background=f),w.material=_,u&&(S.gl.setRenderTarget(b),S.gl.render(S.scene,S.camera),w.material=m.current,w.material.buffer=b.texture,w.material.thickness=o,w.material.side=Sa,w.material.envMapIntensity=a),S.gl.setRenderTarget(T),S.gl.render(S.scene,S.camera),w.material=m.current,w.material.thickness=e,w.material.side=c,w.material.buffer=T.texture,w.material.envMapIntensity=C,S.scene.background=x,S.gl.setRenderTarget(null),S.gl.toneMapping=F)}}),Z.useImperativeHandle(g,()=>m.current,[]),Z.createElement("meshTransmissionMaterial",$e({args:[n,r],ref:m},p,{buffer:l||T.texture,_transmission:t,anisotropicBlur:h??d,transmission:r?t:0,thickness:e,side:c}))});function hs({all:l,scene:r,camera:u}){const c=Ye(({gl:o})=>o),t=Ye(({camera:o})=>o),e=Ye(({scene:o})=>o);return Z.useLayoutEffect(()=>{const o=[];l&&(r||e).traverse(i=>{i.visible===!1&&(o.push(i),i.visible=!0)}),c.compile(r||e,u||t);const a=new Ca(128);new _a(.01,1e5,a).update(c,r||e),a.dispose(),o.forEach(i=>i.visible=!1)},[]),null}const ps=`/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useRef, useState, useEffect, memo } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import {
  useFBO,
  useGLTF,
  useScroll,
  Image,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
  Text
} from '@react-three/drei';
import { easing } from 'maath';

export default function FluidGlass({ mode = 'lens', lensProps = {}, barProps = {}, cubeProps = {} }) {
  const Wrapper = mode === 'bar' ? Bar : mode === 'cube' ? Cube : Lens;
  const rawOverrides = mode === 'bar' ? barProps : mode === 'cube' ? cubeProps : lensProps;

  const {
    navItems = [
      { label: 'Home', link: '' },
      { label: 'About', link: '' },
      { label: 'Contact', link: '' }
    ],
    ...modeProps
  } = rawOverrides;

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true }}>
      <ScrollControls damping={0.2} pages={3} distance={0.4}>
        {mode === 'bar' && <NavItems items={navItems} />}
        <Wrapper modeProps={modeProps}>
          <Scroll>
            <Typography />
            <Images />
          </Scroll>
          <Scroll html />
          <Preload />
        </Wrapper>
      </ScrollControls>
    </Canvas>
  );
}

const ModeWrapper = memo(function ModeWrapper({
  children,
  glb,
  geometryKey,
  lockToBottom = false,
  followPointer = true,
  modeProps = {},
  ...props
}) {
  const ref = useRef();
  const { nodes } = useGLTF(glb);
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState(() => new THREE.Scene());
  const geoWidthRef = useRef(1);

  useEffect(() => {
    const geo = nodes[geometryKey]?.geometry;
    geo.computeBoundingBox();
    geoWidthRef.current = geo.boundingBox.max.x - geo.boundingBox.min.x || 1;
  }, [nodes, geometryKey]);

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    const destX = followPointer ? (pointer.x * v.width) / 2 : 0;
    const destY = lockToBottom ? -v.height / 2 + 0.2 : followPointer ? (pointer.y * v.height) / 2 : 0;
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);

    if (modeProps.scale == null) {
      const maxWorld = v.width * 0.9;
      const desired = maxWorld / geoWidthRef.current;
      ref.current.scale.setScalar(Math.min(0.15, desired));
    }

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    // Background Color
    gl.setClearColor(0x5227ff, 1);
  });

  const { scale, ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps;

  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      <mesh ref={ref} scale={scale ?? 0.15} rotation-x={Math.PI / 2} geometry={nodes[geometryKey]?.geometry} {...props}>
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.15}
          thickness={thickness ?? 5}
          anisotropy={anisotropy ?? 0.01}
          chromaticAberration={chromaticAberration ?? 0.1}
          {...extraMat}
        />
      </mesh>
    </>
  );
});

function Lens({ modeProps, ...p }) {
  return <ModeWrapper glb="/assets/3d/lens.glb" geometryKey="Cylinder" followPointer modeProps={modeProps} {...p} />;
}

function Cube({ modeProps, ...p }) {
  return <ModeWrapper glb="/assets/3d/cube.glb" geometryKey="Cube" followPointer modeProps={modeProps} {...p} />;
}

function Bar({ modeProps = {}, ...p }) {
  const defaultMat = {
    transmission: 1,
    roughness: 0,
    thickness: 10,
    ior: 1.15,
    color: '#ffffff',
    attenuationColor: '#ffffff',
    attenuationDistance: 0.25
  };

  return (
    <ModeWrapper
      glb="/assets/3d/bar.glb"
      geometryKey="Cube"
      lockToBottom
      followPointer={false}
      modeProps={{ ...defaultMat, ...modeProps }}
      {...p}
    />
  );
}

function NavItems({ items }) {
  const group = useRef();
  const { viewport, camera } = useThree();

  const DEVICE = {
    mobile: { max: 639, spacing: 0.2, fontSize: 0.035 },
    tablet: { max: 1023, spacing: 0.24, fontSize: 0.035 },
    desktop: { max: Infinity, spacing: 0.3, fontSize: 0.035 }
  };
  const getDevice = () => {
    const w = window.innerWidth;
    return w <= DEVICE.mobile.max ? 'mobile' : w <= DEVICE.tablet.max ? 'tablet' : 'desktop';
  };

  const [device, setDevice] = useState(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { spacing, fontSize } = DEVICE[device];

  useFrame(() => {
    if (!group.current) return;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
    group.current.position.set(0, -v.height / 2 + 0.2, 15.1);

    group.current.children.forEach((child, i) => {
      child.position.x = (i - (items.length - 1) / 2) * spacing;
    });
  });

  const handleNavigate = link => {
    if (!link) return;
    link.startsWith('#') ? (window.location.hash = link) : (window.location.href = link);
  };

  return (
    <group ref={group} renderOrder={10}>
      {items.map(({ label, link }) => (
        <Text
          key={label}
          fontSize={fontSize}
          color="white"
          anchorX="center"
          anchorY="middle"
          depthWrite={false}
          outlineWidth={0}
          outlineBlur="20%"
          outlineColor="#000"
          outlineOpacity={0.5}
          depthTest={false}
          renderOrder={10}
          onClick={e => {
            e.stopPropagation();
            handleNavigate(link);
          }}
          onPointerOver={() => (document.body.style.cursor = 'pointer')}
          onPointerOut={() => (document.body.style.cursor = 'auto')}
        >
          {label}
        </Text>
      ))}
    </group>
  );
}

function Images() {
  const group = useRef();
  const data = useScroll();
  const { height } = useThree(s => s.viewport);

  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[4].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
  });

  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[3, height / 1.1, 1]} url="/assets/demo/cs1.webp" />
      <Image position={[2, 0, 3]} scale={3} url="/assets/demo/cs2.webp" />
      <Image position={[-2.05, -height, 6]} scale={[1, 3, 1]} url="/assets/demo/cs3.webp" />
      <Image position={[-0.6, -height, 9]} scale={[1, 2, 1]} url="/assets/demo/cs1.webp" />
      <Image position={[0.75, -height, 10.5]} scale={1.5} url="/assets/demo/cs2.webp" />
    </group>
  );
}

function Typography() {
  const DEVICE = {
    mobile: { fontSize: 0.2 },
    tablet: { fontSize: 0.4 },
    desktop: { fontSize: 0.6 }
  };
  const getDevice = () => {
    const w = window.innerWidth;
    return w <= 639 ? 'mobile' : w <= 1023 ? 'tablet' : 'desktop';
  };

  const [device, setDevice] = useState(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { fontSize } = DEVICE[device];

  return (
    <Text
      position={[0, 0, 12]}
      fontSize={fontSize}
      letterSpacing={-0.05}
      outlineWidth={0}
      outlineBlur="20%"
      outlineColor="#000"
      outlineOpacity={0.5}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      React Bits
    </Text>
  );
}
`,ms=`/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useRef, useState, useEffect, memo } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import {
  useFBO,
  useGLTF,
  useScroll,
  Image,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
  Text
} from '@react-three/drei';
import { easing } from 'maath';

export default function FluidGlass({ mode = 'lens', lensProps = {}, barProps = {}, cubeProps = {} }) {
  const Wrapper = mode === 'bar' ? Bar : mode === 'cube' ? Cube : Lens;
  const rawOverrides = mode === 'bar' ? barProps : mode === 'cube' ? cubeProps : lensProps;

  const {
    navItems = [
      { label: 'Home', link: '' },
      { label: 'About', link: '' },
      { label: 'Contact', link: '' }
    ],
    ...modeProps
  } = rawOverrides;

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true }}>
      <ScrollControls damping={0.2} pages={3} distance={0.4}>
        {mode === 'bar' && <NavItems items={navItems} />}
        <Wrapper modeProps={modeProps}>
          <Scroll>
            <Typography />
            <Images />
          </Scroll>
          <Scroll html />
          <Preload />
        </Wrapper>
      </ScrollControls>
    </Canvas>
  );
}

const ModeWrapper = memo(function ModeWrapper({
  children,
  glb,
  geometryKey,
  lockToBottom = false,
  followPointer = true,
  modeProps = {},
  ...props
}) {
  const ref = useRef();
  const { nodes } = useGLTF(glb);
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState(() => new THREE.Scene());
  const geoWidthRef = useRef(1);

  useEffect(() => {
    const geo = nodes[geometryKey]?.geometry;
    geo.computeBoundingBox();
    geoWidthRef.current = geo.boundingBox.max.x - geo.boundingBox.min.x || 1;
  }, [nodes, geometryKey]);

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    const destX = followPointer ? (pointer.x * v.width) / 2 : 0;
    const destY = lockToBottom ? -v.height / 2 + 0.2 : followPointer ? (pointer.y * v.height) / 2 : 0;
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);

    if (modeProps.scale == null) {
      const maxWorld = v.width * 0.9;
      const desired = maxWorld / geoWidthRef.current;
      ref.current.scale.setScalar(Math.min(0.15, desired));
    }

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    // Background Color
    gl.setClearColor(0x5227ff, 1);
  });

  const { scale, ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps;

  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      <mesh ref={ref} scale={scale ?? 0.15} rotation-x={Math.PI / 2} geometry={nodes[geometryKey]?.geometry} {...props}>
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.15}
          thickness={thickness ?? 5}
          anisotropy={anisotropy ?? 0.01}
          chromaticAberration={chromaticAberration ?? 0.1}
          {...extraMat}
        />
      </mesh>
    </>
  );
});

function Lens({ modeProps, ...p }) {
  return <ModeWrapper glb="/assets/3d/lens.glb" geometryKey="Cylinder" followPointer modeProps={modeProps} {...p} />;
}

function Cube({ modeProps, ...p }) {
  return <ModeWrapper glb="/assets/3d/cube.glb" geometryKey="Cube" followPointer modeProps={modeProps} {...p} />;
}

function Bar({ modeProps = {}, ...p }) {
  const defaultMat = {
    transmission: 1,
    roughness: 0,
    thickness: 10,
    ior: 1.15,
    color: '#ffffff',
    attenuationColor: '#ffffff',
    attenuationDistance: 0.25
  };

  return (
    <ModeWrapper
      glb="/assets/3d/bar.glb"
      geometryKey="Cube"
      lockToBottom
      followPointer={false}
      modeProps={{ ...defaultMat, ...modeProps }}
      {...p}
    />
  );
}

function NavItems({ items }) {
  const group = useRef();
  const { viewport, camera } = useThree();

  const DEVICE = {
    mobile: { max: 639, spacing: 0.2, fontSize: 0.035 },
    tablet: { max: 1023, spacing: 0.24, fontSize: 0.045 },
    desktop: { max: Infinity, spacing: 0.3, fontSize: 0.045 }
  };
  const getDevice = () => {
    const w = window.innerWidth;
    return w <= DEVICE.mobile.max ? 'mobile' : w <= DEVICE.tablet.max ? 'tablet' : 'desktop';
  };

  const [device, setDevice] = useState(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { spacing, fontSize } = DEVICE[device];

  useFrame(() => {
    if (!group.current) return;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
    group.current.position.set(0, -v.height / 2 + 0.2, 15.1);

    group.current.children.forEach((child, i) => {
      child.position.x = (i - (items.length - 1) / 2) * spacing;
    });
  });

  const handleNavigate = link => {
    if (!link) return;
    link.startsWith('#') ? (window.location.hash = link) : (window.location.href = link);
  };

  return (
    <group ref={group} renderOrder={10}>
      {items.map(({ label, link }) => (
        <Text
          key={label}
          fontSize={fontSize}
          color="white"
          anchorX="center"
          anchorY="middle"
          depthWrite={false}
          outlineWidth={0}
          outlineBlur="20%"
          outlineColor="#000"
          outlineOpacity={0.5}
          depthTest={false}
          renderOrder={10}
          onClick={e => {
            e.stopPropagation();
            handleNavigate(link);
          }}
          onPointerOver={() => (document.body.style.cursor = 'pointer')}
          onPointerOut={() => (document.body.style.cursor = 'auto')}
        >
          {label}
        </Text>
      ))}
    </group>
  );
}

function Images() {
  const group = useRef();
  const data = useScroll();
  const { height } = useThree(s => s.viewport);

  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[4].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
  });

  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[3, height / 1.1, 1]} url="/assets/demo/cs1.webp" />
      <Image position={[2, 0, 3]} scale={3} url="/assets/demo/cs2.webp" />
      <Image position={[-2.05, -height, 6]} scale={[1, 3, 1]} url="/assets/demo/cs3.webp" />
      <Image position={[-0.6, -height, 9]} scale={[1, 2, 1]} url="/assets/demo/cs1.webp" />
      <Image position={[0.75, -height, 10.5]} scale={1.5} url="/assets/demo/cs2.webp" />
    </group>
  );
}

function Typography() {
  const DEVICE = {
    mobile: { fontSize: 0.2 },
    tablet: { fontSize: 0.4 },
    desktop: { fontSize: 0.6 }
  };
  const getDevice = () => {
    const w = window.innerWidth;
    return w <= 639 ? 'mobile' : w <= 1023 ? 'tablet' : 'desktop';
  };

  const [device, setDevice] = useState(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { fontSize } = DEVICE[device];

  return (
    <Text
      position={[0, 0, 12]}
      fontSize={fontSize}
      letterSpacing={-0.05}
      outlineWidth={0}
      outlineBlur="20%"
      outlineColor="#000"
      outlineOpacity={0.5}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      React Bits
    </Text>
  );
}
`,vs=`/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useRef, useState, useEffect, memo, ReactNode } from 'react';
import { Canvas, createPortal, useFrame, useThree, ThreeElements } from '@react-three/fiber';
import {
  useFBO,
  useGLTF,
  useScroll,
  Image,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
  Text
} from '@react-three/drei';
import { easing } from 'maath';

type Mode = 'lens' | 'bar' | 'cube';

interface NavItem {
  label: string;
  link: string;
}

type ModeProps = Record<string, unknown>;

interface FluidGlassProps {
  mode?: Mode;
  lensProps?: ModeProps;
  barProps?: ModeProps;
  cubeProps?: ModeProps;
}

export default function FluidGlass({ mode = 'lens', lensProps = {}, barProps = {}, cubeProps = {} }: FluidGlassProps) {
  const Wrapper = mode === 'bar' ? Bar : mode === 'cube' ? Cube : Lens;
  const rawOverrides = mode === 'bar' ? barProps : mode === 'cube' ? cubeProps : lensProps;

  const {
    navItems = [
      { label: 'Home', link: '' },
      { label: 'About', link: '' },
      { label: 'Contact', link: '' }
    ],
    ...modeProps
  } = rawOverrides;

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true }}>
      <ScrollControls damping={0.2} pages={3} distance={0.4}>
        {mode === 'bar' && <NavItems items={navItems as NavItem[]} />}
        <Wrapper modeProps={modeProps}>
          <Scroll>
            <Typography />
            <Images />
          </Scroll>
          <Scroll html />
          <Preload />
        </Wrapper>
      </ScrollControls>
    </Canvas>
  );
}

type MeshProps = ThreeElements['mesh'];

interface ModeWrapperProps extends MeshProps {
  children?: ReactNode;
  glb: string;
  geometryKey: string;
  lockToBottom?: boolean;
  followPointer?: boolean;
  modeProps?: ModeProps;
}

interface ZoomMaterial extends THREE.Material {
  zoom: number;
}

interface ZoomMesh extends THREE.Mesh<THREE.BufferGeometry, ZoomMaterial> {}

type ZoomGroup = THREE.Group & { children: ZoomMesh[] };

const ModeWrapper = memo(function ModeWrapper({
  children,
  glb,
  geometryKey,
  lockToBottom = false,
  followPointer = true,
  modeProps = {},
  ...props
}: ModeWrapperProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const { nodes } = useGLTF(glb);
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState<THREE.Scene>(() => new THREE.Scene());
  const geoWidthRef = useRef<number>(1);

  useEffect(() => {
    const geo = (nodes[geometryKey] as THREE.Mesh)?.geometry;
    geo.computeBoundingBox();
    geoWidthRef.current = geo.boundingBox!.max.x - geo.boundingBox!.min.x || 1;
  }, [nodes, geometryKey]);

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    const destX = followPointer ? (pointer.x * v.width) / 2 : 0;
    const destY = lockToBottom ? -v.height / 2 + 0.2 : followPointer ? (pointer.y * v.height) / 2 : 0;
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);

    if ((modeProps as { scale?: number }).scale == null) {
      const maxWorld = v.width * 0.9;
      const desired = maxWorld / geoWidthRef.current;
      ref.current.scale.setScalar(Math.min(0.15, desired));
    }

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
    gl.setClearColor(0x5227ff, 1);
  });

  const { scale, ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps as {
    scale?: number;
    ior?: number;
    thickness?: number;
    anisotropy?: number;
    chromaticAberration?: number;
    [key: string]: unknown;
  };

  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      <mesh
        ref={ref}
        scale={scale ?? 0.15}
        rotation-x={Math.PI / 2}
        geometry={(nodes[geometryKey] as THREE.Mesh)?.geometry}
        {...props}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.15}
          thickness={thickness ?? 5}
          anisotropy={anisotropy ?? 0.01}
          chromaticAberration={chromaticAberration ?? 0.1}
          {...(typeof extraMat === 'object' && extraMat !== null ? extraMat : {})}
        />
      </mesh>
    </>
  );
});

function Lens({ modeProps, ...p }: { modeProps?: ModeProps } & MeshProps) {
  return <ModeWrapper glb="/assets/3d/lens.glb" geometryKey="Cylinder" followPointer modeProps={modeProps} {...p} />;
}

function Cube({ modeProps, ...p }: { modeProps?: ModeProps } & MeshProps) {
  return <ModeWrapper glb="/assets/3d/cube.glb" geometryKey="Cube" followPointer modeProps={modeProps} {...p} />;
}

function Bar({ modeProps = {}, ...p }: { modeProps?: ModeProps } & MeshProps) {
  const defaultMat = {
    transmission: 1,
    roughness: 0,
    thickness: 10,
    ior: 1.15,
    color: '#ffffff',
    attenuationColor: '#ffffff',
    attenuationDistance: 0.25
  };

  return (
    <ModeWrapper
      glb="/assets/3d/bar.glb"
      geometryKey="Cube"
      lockToBottom
      followPointer={false}
      modeProps={{ ...defaultMat, ...modeProps }}
      {...p}
    />
  );
}

function NavItems({ items }: { items: NavItem[] }) {
  const group = useRef<THREE.Group>(null!);
  const { viewport, camera } = useThree();

  const DEVICE = {
    mobile: { max: 639, spacing: 0.2, fontSize: 0.035 },
    tablet: { max: 1023, spacing: 0.24, fontSize: 0.045 },
    desktop: { max: Infinity, spacing: 0.3, fontSize: 0.045 }
  };
  const getDevice = () => {
    const w = window.innerWidth;
    return w <= DEVICE.mobile.max ? 'mobile' : w <= DEVICE.tablet.max ? 'tablet' : 'desktop';
  };

  const [device, setDevice] = useState<keyof typeof DEVICE>(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { spacing, fontSize } = DEVICE[device];

  useFrame(() => {
    if (!group.current) return;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
    group.current.position.set(0, -v.height / 2 + 0.2, 15.1);

    group.current.children.forEach((child, i) => {
      child.position.x = (i - (items.length - 1) / 2) * spacing;
    });
  });

  const handleNavigate = (link: string) => {
    if (!link) return;
    link.startsWith('#') ? (window.location.hash = link) : (window.location.href = link);
  };

  return (
    <group ref={group} renderOrder={10}>
      {items.map(({ label, link }) => (
        <Text
          key={label}
          fontSize={fontSize}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0}
          outlineBlur="20%"
          outlineColor="#000"
          outlineOpacity={0.5}
          renderOrder={10}
          onClick={e => {
            e.stopPropagation();
            handleNavigate(link);
          }}
          onPointerOver={() => (document.body.style.cursor = 'pointer')}
          onPointerOut={() => (document.body.style.cursor = 'auto')}
        >
          {label}
        </Text>
      ))}
    </group>
  );
}

function Images() {
  const group = useRef<ZoomGroup>(null!);
  const data = useScroll();
  const { height } = useThree(s => s.viewport);

  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[4].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
  });

  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[3, height / 1.1]} url="/assets/demo/cs1.webp" />
      <Image position={[2, 0, 3]} scale={3} url="/assets/demo/cs2.webp" />
      <Image position={[-2.05, -height, 6]} scale={[1, 3]} url="/assets/demo/cs3.webp" />
      <Image position={[-0.6, -height, 9]} scale={[1, 2]} url="/assets/demo/cs1.webp" />
      <Image position={[0.75, -height, 10.5]} scale={1.5} url="/assets/demo/cs2.webp" />
    </group>
  );
}

function Typography() {
  const DEVICE = {
    mobile: { fontSize: 0.2 },
    tablet: { fontSize: 0.4 },
    desktop: { fontSize: 0.6 }
  };
  const getDevice = () => {
    const w = window.innerWidth;
    return w <= 639 ? 'mobile' : w <= 1023 ? 'tablet' : 'desktop';
  };

  const [device, setDevice] = useState<keyof typeof DEVICE>(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { fontSize } = DEVICE[device];

  return (
    <Text
      position={[0, 0, 12]}
      fontSize={fontSize}
      letterSpacing={-0.05}
      outlineWidth={0}
      outlineBlur="20%"
      outlineColor="#000"
      outlineOpacity={0.5}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      React Bits
    </Text>
  );
}
`,gs=`/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useRef, useState, useEffect, memo, ReactNode } from 'react';
import { Canvas, createPortal, useFrame, useThree, ThreeElements } from '@react-three/fiber';
import {
  useFBO,
  useGLTF,
  useScroll,
  Image,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
  Text
} from '@react-three/drei';
import { easing } from 'maath';

type Mode = 'lens' | 'bar' | 'cube';

interface NavItem {
  label: string;
  link: string;
}

type ModeProps = Record<string, unknown>;

interface FluidGlassProps {
  mode?: Mode;
  lensProps?: ModeProps;
  barProps?: ModeProps;
  cubeProps?: ModeProps;
}

export default function FluidGlass({ mode = 'lens', lensProps = {}, barProps = {}, cubeProps = {} }: FluidGlassProps) {
  const Wrapper = mode === 'bar' ? Bar : mode === 'cube' ? Cube : Lens;
  const rawOverrides = mode === 'bar' ? barProps : mode === 'cube' ? cubeProps : lensProps;

  const {
    navItems = [
      { label: 'Home', link: '' },
      { label: 'About', link: '' },
      { label: 'Contact', link: '' }
    ],
    ...modeProps
  } = rawOverrides;

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true }}>
      <ScrollControls damping={0.2} pages={3} distance={0.4}>
        {mode === 'bar' && <NavItems items={navItems as NavItem[]} />}
        <Wrapper modeProps={modeProps}>
          <Scroll>
            <Typography />
            <Images />
          </Scroll>
          <Scroll html />
          <Preload />
        </Wrapper>
      </ScrollControls>
    </Canvas>
  );
}

type MeshProps = ThreeElements['mesh'];

interface ModeWrapperProps extends MeshProps {
  children?: ReactNode;
  glb: string;
  geometryKey: string;
  lockToBottom?: boolean;
  followPointer?: boolean;
  modeProps?: ModeProps;
}

interface ZoomMaterial extends THREE.Material {
  zoom: number;
}

interface ZoomMesh extends THREE.Mesh<THREE.BufferGeometry, ZoomMaterial> {}

type ZoomGroup = THREE.Group & { children: ZoomMesh[] };

const ModeWrapper = memo(function ModeWrapper({
  children,
  glb,
  geometryKey,
  lockToBottom = false,
  followPointer = true,
  modeProps = {},
  ...props
}: ModeWrapperProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const { nodes } = useGLTF(glb);
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState<THREE.Scene>(() => new THREE.Scene());
  const geoWidthRef = useRef<number>(1);

  useEffect(() => {
    const geo = (nodes[geometryKey] as THREE.Mesh)?.geometry;
    geo.computeBoundingBox();
    geoWidthRef.current = geo.boundingBox!.max.x - geo.boundingBox!.min.x || 1;
  }, [nodes, geometryKey]);

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    const destX = followPointer ? (pointer.x * v.width) / 2 : 0;
    const destY = lockToBottom ? -v.height / 2 + 0.2 : followPointer ? (pointer.y * v.height) / 2 : 0;
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);

    if ((modeProps as { scale?: number }).scale == null) {
      const maxWorld = v.width * 0.9;
      const desired = maxWorld / geoWidthRef.current;
      ref.current.scale.setScalar(Math.min(0.15, desired));
    }

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
    gl.setClearColor(0x5227ff, 1);
  });

  const { scale, ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps as {
    scale?: number;
    ior?: number;
    thickness?: number;
    anisotropy?: number;
    chromaticAberration?: number;
    [key: string]: unknown;
  };

  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      <mesh
        ref={ref}
        scale={scale ?? 0.15}
        rotation-x={Math.PI / 2}
        geometry={(nodes[geometryKey] as THREE.Mesh)?.geometry}
        {...props}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.15}
          thickness={thickness ?? 5}
          anisotropy={anisotropy ?? 0.01}
          chromaticAberration={chromaticAberration ?? 0.1}
          {...(typeof extraMat === 'object' && extraMat !== null ? extraMat : {})}
        />
      </mesh>
    </>
  );
});

function Lens({ modeProps, ...p }: { modeProps?: ModeProps } & MeshProps) {
  return <ModeWrapper glb="/assets/3d/lens.glb" geometryKey="Cylinder" followPointer modeProps={modeProps} {...p} />;
}

function Cube({ modeProps, ...p }: { modeProps?: ModeProps } & MeshProps) {
  return <ModeWrapper glb="/assets/3d/cube.glb" geometryKey="Cube" followPointer modeProps={modeProps} {...p} />;
}

function Bar({ modeProps = {}, ...p }: { modeProps?: ModeProps } & MeshProps) {
  const defaultMat = {
    transmission: 1,
    roughness: 0,
    thickness: 10,
    ior: 1.15,
    color: '#ffffff',
    attenuationColor: '#ffffff',
    attenuationDistance: 0.25
  };

  return (
    <ModeWrapper
      glb="/assets/3d/bar.glb"
      geometryKey="Cube"
      lockToBottom
      followPointer={false}
      modeProps={{ ...defaultMat, ...modeProps }}
      {...p}
    />
  );
}

function NavItems({ items }: { items: NavItem[] }) {
  const group = useRef<THREE.Group>(null!);
  const { viewport, camera } = useThree();

  const DEVICE = {
    mobile: { max: 639, spacing: 0.2, fontSize: 0.035 },
    tablet: { max: 1023, spacing: 0.24, fontSize: 0.045 },
    desktop: { max: Infinity, spacing: 0.3, fontSize: 0.045 }
  };
  const getDevice = () => {
    const w = window.innerWidth;
    return w <= DEVICE.mobile.max ? 'mobile' : w <= DEVICE.tablet.max ? 'tablet' : 'desktop';
  };

  const [device, setDevice] = useState<keyof typeof DEVICE>(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { spacing, fontSize } = DEVICE[device];

  useFrame(() => {
    if (!group.current) return;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
    group.current.position.set(0, -v.height / 2 + 0.2, 15.1);

    group.current.children.forEach((child, i) => {
      child.position.x = (i - (items.length - 1) / 2) * spacing;
    });
  });

  const handleNavigate = (link: string) => {
    if (!link) return;
    link.startsWith('#') ? (window.location.hash = link) : (window.location.href = link);
  };

  return (
    <group ref={group} renderOrder={10}>
      {items.map(({ label, link }) => (
        <Text
          key={label}
          fontSize={fontSize}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0}
          outlineBlur="20%"
          outlineColor="#000"
          outlineOpacity={0.5}
          renderOrder={10}
          onClick={e => {
            e.stopPropagation();
            handleNavigate(link);
          }}
          onPointerOver={() => (document.body.style.cursor = 'pointer')}
          onPointerOut={() => (document.body.style.cursor = 'auto')}
        >
          {label}
        </Text>
      ))}
    </group>
  );
}

function Images() {
  const group = useRef<ZoomGroup>(null!);
  const data = useScroll();
  const { height } = useThree(s => s.viewport);

  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[4].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
  });

  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[3, height / 1.1]} url="/assets/demo/cs1.webp" />
      <Image position={[2, 0, 3]} scale={3} url="/assets/demo/cs2.webp" />
      <Image position={[-2.05, -height, 6]} scale={[1, 3]} url="/assets/demo/cs3.webp" />
      <Image position={[-0.6, -height, 9]} scale={[1, 2]} url="/assets/demo/cs1.webp" />
      <Image position={[0.75, -height, 10.5]} scale={1.5} url="/assets/demo/cs2.webp" />
    </group>
  );
}

function Typography() {
  const DEVICE = {
    mobile: { fontSize: 0.2 },
    tablet: { fontSize: 0.4 },
    desktop: { fontSize: 0.6 }
  };
  const getDevice = () => {
    const w = window.innerWidth;
    return w <= 639 ? 'mobile' : w <= 1023 ? 'tablet' : 'desktop';
  };

  const [device, setDevice] = useState<keyof typeof DEVICE>(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { fontSize } = DEVICE[device];

  return (
    <Text
      position={[0, 0, 12]}
      fontSize={fontSize}
      letterSpacing={-0.05}
      outlineWidth={0}
      outlineBlur="20%"
      outlineColor="#000"
      outlineOpacity={0.5}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      React Bits
    </Text>
  );
}
`,ys={dependencies:"three @react-three/fiber @react-three/drei maath",usage:`// IMPORTANT INFO BELOW
// This component requires a 3D model to function correctly.
// You can find three example models in the 'public/assets/3d' directory of the repository:
// - 'lens.glb'
// - 'bar.glb'
// - 'cube.glb'
// Make sure to place these models in the correct directory or update the paths accordingly.

import FluidGlass from './FluidGlass'

<div style={{ height: '600px', position: 'relative' }}>
  <FluidGlass 
    mode="lens" // or "bar", "cube"
    lensProps={{
      scale: 0.25,
      ior: 1.15,
      thickness: 5,
      chromaticAberration: 0.1,
      anisotropy: 0.01  
    }}
    barProps={} // add specific props if using bar mode
    cubeProps={} // add specific props if using cube mode
  />
</div>`,code:ps,tailwind:ms,tsCode:vs,tsTailwind:gs};function bs({mode:l="lens",lensProps:r={},barProps:u={},cubeProps:c={}}){const t=l==="bar"?Ss:l==="cube"?xs:ws,e=l==="bar"?u:l==="cube"?c:r,{navItems:o=[{label:"Home",link:""},{label:"About",link:""},{label:"Contact",link:""}],...a}=e;return de.jsx(Ua,{camera:{position:[0,0,20],fov:15},gl:{alpha:!0},children:de.jsxs(li,{damping:.2,pages:3,distance:.4,children:[l==="bar"&&de.jsx(ks,{items:o}),de.jsxs(t,{modeProps:a,children:[de.jsxs(nn,{children:[de.jsx(Cs,{}),de.jsx(Ts,{})]}),de.jsx(nn,{html:!0}),de.jsx(hs,{})]})]})})}const Zr=Z.memo(function({children:r,glb:u,geometryKey:c,lockToBottom:t=!1,followPointer:e=!0,modeProps:o={},...a}){var x;const n=Z.useRef(),{nodes:i}=Fa(u),s=Or(),{viewport:f}=Ye(),[d]=Z.useState(()=>new Ma),h=Z.useRef(1);Z.useEffect(()=>{var F;const C=(F=i[c])==null?void 0:F.geometry;C.computeBoundingBox(),h.current=C.boundingBox.max.x-C.boundingBox.min.x||1},[i,c]),ht((C,F)=>{const{gl:w,viewport:S,pointer:R,camera:U}=C,j=S.getCurrentViewport(U,[0,0,15]),y=e?R.x*j.width/2:0,D=t?-j.height/2+.2:e?R.y*j.height/2:0;if(zr.damp3(n.current.position,[y,D,15],.15,F),o.scale==null){const V=j.width*.9/h.current;n.current.scale.setScalar(Math.min(.15,V))}w.setRenderTarget(s),w.render(d,U),w.setRenderTarget(null),w.setClearColor(5384191,1)});const{scale:p,ior:g,thickness:m,anisotropy:_,chromaticAberration:b,...T}=o;return de.jsxs(de.Fragment,{children:[Pa(r,d),de.jsxs("mesh",{scale:[f.width,f.height,1],children:[de.jsx("planeGeometry",{}),de.jsx("meshBasicMaterial",{map:s.texture,transparent:!0})]}),de.jsx("mesh",{ref:n,scale:p??.15,"rotation-x":Math.PI/2,geometry:(x=i[c])==null?void 0:x.geometry,...a,children:de.jsx(ds,{buffer:s.texture,ior:g??1.15,thickness:m??5,anisotropy:_??.01,chromaticAberration:b??.1,...T})})]})});function ws({modeProps:l,...r}){return de.jsx(Zr,{glb:"/assets/3d/lens.glb",geometryKey:"Cylinder",followPointer:!0,modeProps:l,...r})}function xs({modeProps:l,...r}){return de.jsx(Zr,{glb:"/assets/3d/cube.glb",geometryKey:"Cube",followPointer:!0,modeProps:l,...r})}function Ss({modeProps:l={},...r}){const u={transmission:1,roughness:0,thickness:10,ior:1.15,color:"#ffffff",attenuationColor:"#ffffff",attenuationDistance:.25};return de.jsx(Zr,{glb:"/assets/3d/bar.glb",geometryKey:"Cube",lockToBottom:!0,followPointer:!1,modeProps:{...u,...l},...r})}function ks({items:l}){const r=Z.useRef(),{viewport:u,camera:c}=Ye(),t={mobile:{max:639,spacing:.2,fontSize:.035},tablet:{max:1023,spacing:.24,fontSize:.035},desktop:{max:1/0,spacing:.3,fontSize:.035}},e=()=>{const f=window.innerWidth;return f<=t.mobile.max?"mobile":f<=t.tablet.max?"tablet":"desktop"},[o,a]=Z.useState(e());Z.useEffect(()=>{const f=()=>a(e());return window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]);const{spacing:n,fontSize:i}=t[o];ht(()=>{if(!r.current)return;const f=u.getCurrentViewport(c,[0,0,15]);r.current.position.set(0,-f.height/2+.2,15.1),r.current.children.forEach((d,h)=>{d.position.x=(h-(l.length-1)/2)*n})});const s=f=>{f&&(f.startsWith("#")?window.location.hash=f:window.location.href=f)};return de.jsx("group",{ref:r,renderOrder:10,children:l.map(({label:f,link:d})=>de.jsx(Gn,{fontSize:i,color:"white",anchorX:"center",anchorY:"middle",depthWrite:!1,outlineWidth:0,outlineBlur:"20%",outlineColor:"#000",outlineOpacity:.5,depthTest:!1,renderOrder:10,onClick:h=>{h.stopPropagation(),s(d)},onPointerOver:()=>document.body.style.cursor="pointer",onPointerOut:()=>document.body.style.cursor="auto",children:f},f))})}function Ts(){const l=Z.useRef(),r=Jr(),{height:u}=Ye(c=>c.viewport);return ht(()=>{l.current.children[0].material.zoom=1+r.range(0,1/3)/3,l.current.children[1].material.zoom=1+r.range(0,1/3)/3,l.current.children[2].material.zoom=1+r.range(1.15/3,1/3)/2,l.current.children[3].material.zoom=1+r.range(1.15/3,1/3)/2,l.current.children[4].material.zoom=1+r.range(1.15/3,1/3)/2}),de.jsxs("group",{ref:l,children:[de.jsx(Wt,{position:[-2,0,0],scale:[3,u/1.1,1],url:"/assets/demo/cs1.webp"}),de.jsx(Wt,{position:[2,0,3],scale:3,url:"/assets/demo/cs2.webp"}),de.jsx(Wt,{position:[-2.05,-u,6],scale:[1,3,1],url:"/assets/demo/cs3.webp"}),de.jsx(Wt,{position:[-.6,-u,9],scale:[1,2,1],url:"/assets/demo/cs1.webp"}),de.jsx(Wt,{position:[.75,-u,10.5],scale:1.5,url:"/assets/demo/cs2.webp"})]})}function Cs(){const l={mobile:{fontSize:.2},tablet:{fontSize:.4},desktop:{fontSize:.6}},r=()=>{const e=window.innerWidth;return e<=639?"mobile":e<=1023?"tablet":"desktop"},[u,c]=Z.useState(r());Z.useEffect(()=>{const e=()=>c(r());return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const{fontSize:t}=l[u];return de.jsx(Gn,{position:[0,0,12],fontSize:t,letterSpacing:-.05,outlineWidth:0,outlineBlur:"20%",outlineColor:"#000",outlineOpacity:.5,color:"white",anchorX:"center",anchorY:"middle",children:"React Bits"})}const xn={mode:"lens",scale:.25,ior:1.15,thickness:2,transmission:1,roughness:0,chromaticAberration:.05,anisotropy:.01},Vs=()=>{const[l,r]=na(),{props:u,updateProp:c,resetProps:t,hasChanges:e}=Jn(xn),{mode:o,scale:a,ior:n,thickness:i,transmission:s,roughness:f,chromaticAberration:d,anisotropy:h}=u,p=[{value:"lens",label:"Lens"},{value:"bar",label:"Bar"},{value:"cube",label:"Cube"}],g=b=>{c("mode",b),b==="bar"?(c("scale",.15),c("transmission",1),c("roughness",0),c("thickness",10),c("ior",1.15)):(b==="lens"||b==="cube")&&(c("scale",.25),c("ior",1.15),c("thickness",5),c("chromaticAberration",.1),c("anisotropy",.01)),r()},m=()=>{const b={scale:a,ior:n,thickness:i,chromaticAberration:d,anisotropy:h};return o==="bar"?{...b,transmission:s,roughness:f,color:"#ffffff",attenuationColor:"#ffffff",attenuationDistance:.25}:b},_=Z.useMemo(()=>[{name:"mode",type:"string",default:"'lens'",description:"Display mode of the fluid glass effect. Options: 'lens', 'bar', 'cube'"},{name:"lensProps",type:"object",default:"{}",description:"Props specific to lens mode including material properties like ior, thickness, transmission"},{name:"barProps",type:"object",default:"{}",description:"Props specific to bar mode including navItems array and material properties"},{name:"cubeProps",type:"object",default:"{}",description:"Props specific to cube mode including material properties and interaction settings"}],[]);return de.jsx(Qn,{props:u,defaultProps:xn,resetProps:t,hasChanges:e,children:de.jsxs(Zn,{children:[de.jsxs(qn,{children:[de.jsx(Kn,{position:"relative",className:"demo-container",h:600,p:0,overflow:"hidden",children:de.jsx(bs,{mode:o,lensProps:o==="lens"?m():{},barProps:o==="bar"?m():{},cubeProps:o==="cube"?m():{}},l)}),de.jsxs(ra,{children:[de.jsx(aa,{title:"Mode:",options:p,value:o,onChange:g,width:120}),de.jsx(ct,{title:"Scale:",min:.05,max:.5,step:.05,value:a,onChange:b=>c("scale",b),width:150}),de.jsx(ct,{title:"IOR:",min:1,max:2,step:.05,value:n,onChange:b=>c("ior",b),width:150}),de.jsx(ct,{title:"Thickness:",min:1,max:20,step:1,value:i,onChange:b=>c("thickness",b),width:150}),de.jsx(ct,{title:"Chromatic Aberration:",min:0,max:.5,step:.01,value:d,onChange:b=>c("chromaticAberration",b),width:150}),de.jsx(ct,{title:"Anisotropy:",min:0,max:.1,step:.01,value:h,onChange:b=>c("anisotropy",b),width:150}),o==="bar"&&de.jsxs(de.Fragment,{children:[de.jsx(ct,{title:"Transmission:",min:0,max:1,step:.1,value:s,onChange:b=>c("transmission",b),width:150}),de.jsx(ct,{title:"Roughness:",min:0,max:1,step:.1,value:f,onChange:b=>c("roughness",b),width:150})]})]}),de.jsx($n,{data:_}),de.jsx(oa,{dependencyList:["three","@react-three/fiber","@react-three/drei","maath"]})]}),de.jsx(ea,{children:de.jsx(ta,{codeObject:ys,componentName:"FluidGlass"})})]})})};export{Vs as default};
