import{m as kt,w as Dt,n as Ne,o as jt,p as wt,c as I,r as x,j as n,F as p,B as j,l as Mt,X as Pt,d as it,a as k,I as O,C as ze,q as Je,s as Lt,E as at,t as Ot,v as Ut,x as zt,y as Ft,z as Nt,A as Bt,D as Ht,H as Gt,J as Xt,N as Vt}from"./index-CKqfvLoB.js";import{C as st,E as Wt,T as qt}from"./trash-2-DfKQZgOT.js";import{R as Yt}from"./rotate-ccw-BMSfA2a1.js";import{D as $t,C as Pe,u as Kt,S as Zt}from"./settings-Begyc4AN.js";import{P as Qt}from"./plus-Dxz4vEQb.js";import{S as lt,a as ct,b as ut,c as dt,d as ft}from"./slider-P7kYMDWb.js";import{S as Jt,a as eo,b as to}from"./switch-CqqRi5Az.js";var oo=wt("toast").parts("group","root","title","description","actionTrigger","closeTrigger");oo.build();var ro=(r,e)=>({...e,...kt(r)});function no(r={}){const e=ro(r,{placement:"bottom",overlap:!1,max:24,gap:16,offsets:"1rem",hotkey:["altKey","KeyT"],removeDelay:200,pauseOnPageIdle:!0});let t=[],s=[],l=new Set,u=[];const i=b=>(t.push(b),()=>{const y=t.indexOf(b);t.splice(y,1)}),o=b=>(t.forEach(y=>y(b)),b),c=b=>{if(s.length>=e.max){u.push(b);return}o(b),s.unshift(b)},f=()=>{for(;u.length>0&&s.length<e.max;){const b=u.shift();b&&(o(b),s.unshift(b))}},g=b=>{const y=b.id??`toast:${jt()}`,q=s.find(B=>B.id===y);return l.has(y)&&l.delete(y),q?s=s.map(B=>B.id===y?o({...B,...b,id:y}):B):c({id:y,duration:e.duration,removeDelay:e.removeDelay,type:"info",...b,stacked:!e.overlap,gap:e.gap}),y},_=b=>(l.add(b),b?(t.forEach(y=>y({id:b,dismiss:!0})),s=s.filter(y=>y.id!==b),f()):(s.forEach(y=>{t.forEach(q=>q({id:y.id,dismiss:!0}))}),s=[],u=[]),b);return{attrs:e,subscribe:i,create:g,update:(b,y)=>g({id:b,...y}),remove:_,dismiss:b=>{b!=null?s=s.map(y=>y.id===b?o({...y,message:"DISMISS"}):y):s=s.map(y=>o({...y,message:"DISMISS"}))},error:b=>g({...b,type:"error"}),success:b=>g({...b,type:"success"}),info:b=>g({...b,type:"info"}),warning:b=>g({...b,type:"warning"}),loading:b=>g({...b,type:"loading"}),getVisibleToasts:()=>s.filter(b=>!l.has(b.id)),getCount:()=>s.length,promise:(b,y,q={})=>{if(!y||!y.loading){Dt("[zag-js > toast] toaster.promise() requires at least a 'loading' option to be specified");return}const B=g({...q,...y.loading,promise:b,type:"loading"});let ne=!0,le;const Te=Ne(b).then(async H=>{if(le=["resolve",H],io(H)&&!H.ok){ne=!1;const te=Ne(y.error,`HTTP Error! status: ${H.status}`);g({...q,...te,id:B,type:"error"})}else if(y.success!==void 0){ne=!1;const te=Ne(y.success,H);g({...q,...te,id:B,type:"success"})}}).catch(async H=>{if(le=["reject",H],y.error!==void 0){ne=!1;const te=Ne(y.error,H);g({...q,...te,id:B,type:"error"})}}).finally(()=>{var H;ne&&_(B),(H=y.finally)==null||H.call(y)});return{id:B,unwrap:()=>new Promise((H,te)=>Te.then(()=>le[0]==="reject"?te(le[1]):H(le[1])).catch(te))}},pause:b=>{b!=null?s=s.map(y=>y.id===b?o({...y,message:"PAUSE"}):y):s=s.map(y=>o({...y,message:"PAUSE"}))},resume:b=>{b!=null?s=s.map(y=>y.id===b?o({...y,message:"RESUME"}):y):s=s.map(y=>o({...y,message:"RESUME"}))},isVisible:b=>!l.has(b)&&!!s.find(y=>y.id===b),isDismissed:b=>l.has(b),expand:()=>{s=s.map(b=>o({...b,stacked:!0}))},collapse:()=>{s=s.map(b=>o({...b,stacked:!1}))}}}var io=r=>r&&typeof r=="object"&&"ok"in r&&typeof r.ok=="boolean"&&"status"in r&&typeof r.status=="number";const ao=r=>no(r);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]],lo=I("aperture",so);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=[["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["circle",{cx:"15",cy:"15",r:"7",key:"19ennj"}]],uo=I("blend",co);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],et=I("circle-dot",fo);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ho=I("circle",mo);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]],po=I("contrast",go);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]],bo=I("dices",xo);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],_o=I("droplets",vo);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a7 7 0 1 0 10 10",key:"1yuj32"}]],Eo=I("eclipse",yo);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]],Ro=I("file-down",Co);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]],So=I("file-up",To);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],Io=I("focus",Ao);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],Do=I("grid-2x2",ko);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],wo=I("grid-3x3",jo);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],mt=I("grip-vertical",Mo);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]],Lo=I("hexagon",Po);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Uo=I("layers",Oo);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Fo=I("lightbulb",zo);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],Bo=I("link",No);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],ht=I("maximize",Ho);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Xo=I("monitor",Go);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],Wo=I("move",Vo);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]],Yo=I("paintbrush",qo);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],Ko=I("pause",$o);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Qo=I("play",Zo);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]],er=I("scan-line",Jo);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],or=I("shuffle",tr);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],gt=I("sliders-vertical",rr);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}]],ir=I("sparkle",nr);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",key:"lubmu8"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",key:"1ag34g"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]],sr=I("square-split-horizontal",ar);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M20 12h.01",key:"1ykeid"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M4 12h.01",key:"158zrr"}],["path",{d:"M17.657 6.343h.01",key:"31pqzk"}],["path",{d:"M17.657 17.657h.01",key:"jehnf4"}],["path",{d:"M6.343 17.657h.01",key:"gdk6ow"}],["path",{d:"M6.343 6.343h.01",key:"1uurf0"}]],cr=I("sun-dim",lr);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],dr=I("sun",ur);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],mr=I("target",fr);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],gr=I("type",hr);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Ze=I("upload",pr);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],tt=I("wand-sparkles",xr);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]],vr=I("waves",br);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],yr=I("zap",_r);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Cr=I("zoom-in",Er);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Tr=I("zoom-out",Rr),W=ao({placement:"bottom-end",pauseOnPageIdle:!0}),a={NOISE:"noise",DITHER:"dither",HALFTONE:"halftone",ASCII:"ascii",OVERLAY:"overlay",CHROMATIC:"chromatic",VIGNETTE:"vignette",SCANLINES:"scanlines",PIXELATE:"pixelate",BLUR:"blur",DISTORTION:"distortion",POSTERIZE:"posterize",EDGE:"edge",GRAIN:"grain",COLOR_GRADE:"color-grade",GLITCH:"glitch",CRT:"crt",DUOTONE:"duotone",KUWAHARA:"kuwahara",BARREL:"barrel",RIPPLE:"ripple",DISPLACEMENT:"displacement",LIGHT_LEAK:"light-leak",BLOOM:"bloom",RADIAL_BLUR:"radial-blur",MOSAIC:"mosaic",TILT_SHIFT:"tilt-shift",EXPOSURE:"exposure",VIBRANCE:"vibrance",DOT_DITHER:"dot-dither"},z={OVERLAY:"overlay",SOFT_LIGHT:"soft-light",MULTIPLY:"multiply",SCREEN:"screen"},de={BAYER_2X2:"bayer2x2",BAYER_4X4:"bayer4x4",BAYER_8X8:"bayer8x8"},Re={STANDARD:" .:-=+*#%@",BLOCKS:" ░▒▓█",SIMPLE:" .-+*#",DETAILED:" .':;!ilI1%@#"},ue={PAPER:"paper",FILM_GRAIN:"film-grain",CANVAS:"canvas",DUST:"dust",CUSTOM:"custom"},We={intensity:.15,scale:1,monochrome:!0,blendMode:z.OVERLAY},qe={method:de.BAYER_4X4,levels:4,threshold:.5,scale:1},Ee={CIRCLE:"circle",SQUARE:"square",DIAMOND:"diamond",LINE:"line",ELLIPSE:"ellipse",CROSS:"cross",RING:"ring"},je={gridSize:8,dotScale:1,angle:45,shape:Ee.CIRCLE,softness:.5,contrast:0,invert:!1,colorMode:"original",dotColor:"#000000",backgroundColor:"#ffffff",mixOriginal:0},Ye={charset:Re.STANDARD,cellSize:8,color:!0,invert:!1,brightness:1,contrast:1,charBrightness:1,backgroundBlend:0,edgeEnhance:0},$e={texture:ue.PAPER,intensity:.3,scale:1,rotation:0,blendMode:z.OVERLAY,customTextureUrl:null},Oe={intensity:.005,angle:0,radial:!1},Ie={intensity:.5,size:.5,softness:.5,color:"#000000"},He={spacing:4,thickness:1,opacity:.3,horizontal:!0,offset:0},pt={size:8,maintainAspect:!0},Sr={radius:2,type:"gaussian",angle:0},Ar={type:"wave",amplitude:10,frequency:5,centerX:.5,centerY:.5},Ue={levels:4,preserveHue:!1},Ir={strength:1,threshold:.1,invert:!1,colorize:!1},we={intensity:.15,size:1.5,luminanceResponse:.5,colored:!1},Me={brightness:0,contrast:0,saturation:0,temperature:0,tint:0,shadows:"#000000",highlights:"#ffffff",shadowInfluence:0,highlightInfluence:0},xt={intensity:.5,sliceCount:10,rgbShift:.02,angle:0,seed:0,blockSize:.1,colorShift:!0},bt={curvature:.3,scanlineIntensity:.3,scanlineCount:400,vignetteIntensity:.3,brightness:1.1,rgbOffset:.002,flickerIntensity:.03,staticNoise:.05},vt={shadowColor:"#000033",highlightColor:"#ffcc00",contrast:1,intensity:1},_t={radius:4,sharpness:.5},yt={amount:.3,centerX:.5,centerY:.5,zoom:1},kr={amplitude:.02,wavelength:50,speed:1,centerX:.5,centerY:.5,damping:.5},Dr={scaleX:.05,scaleY:.05,useRedGreen:!0,customMapUrl:null},Ke={color1:"#ff6b35",color2:"#f7931e",position:.3,angle:45,size:.5,intensity:.5,softness:.7,blendMode:z.SCREEN},Ge={radius:8,intensity:.8,threshold:.6,softThreshold:.5,blendMode:z.SCREEN},Et={intensity:.3,centerX:.5,centerY:.5,samples:32,zoom:!0},Ct={cellSize:20,irregularity:.5,edgeThickness:.02,edgeColor:"#000000",colorVariation:.1},Rt={focusPosition:.5,focusWidth:.2,blurRadius:8,angle:0,gradientSmooth:.3},ce={exposure:0,highlights:0,shadows:0,blacks:0,whites:0},be={vibrance:.3,saturation:0},jr={scale:1,threshold:.5,animated:!1,animationSpeed:1,invert:!1},Be=r=>{const e=`${r}-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;switch(r){case a.NOISE:return{id:e,type:r,enabled:!0,params:{...We}};case a.DITHER:return{id:e,type:r,enabled:!0,params:{...qe}};case a.HALFTONE:return{id:e,type:r,enabled:!0,params:{...je}};case a.ASCII:return{id:e,type:r,enabled:!0,params:{...Ye}};case a.OVERLAY:return{id:e,type:r,enabled:!0,params:{...$e}};case a.CHROMATIC:return{id:e,type:r,enabled:!0,params:{...Oe}};case a.VIGNETTE:return{id:e,type:r,enabled:!0,params:{...Ie}};case a.SCANLINES:return{id:e,type:r,enabled:!0,params:{...He}};case a.PIXELATE:return{id:e,type:r,enabled:!0,params:{...pt}};case a.BLUR:return{id:e,type:r,enabled:!0,params:{...Sr}};case a.DISTORTION:return{id:e,type:r,enabled:!0,params:{...Ar}};case a.POSTERIZE:return{id:e,type:r,enabled:!0,params:{...Ue}};case a.EDGE:return{id:e,type:r,enabled:!0,params:{...Ir}};case a.GRAIN:return{id:e,type:r,enabled:!0,params:{...we}};case a.COLOR_GRADE:return{id:e,type:r,enabled:!0,params:{...Me}};case a.GLITCH:return{id:e,type:r,enabled:!0,params:{...xt}};case a.CRT:return{id:e,type:r,enabled:!0,params:{...bt}};case a.DUOTONE:return{id:e,type:r,enabled:!0,params:{...vt}};case a.KUWAHARA:return{id:e,type:r,enabled:!0,params:{..._t}};case a.BARREL:return{id:e,type:r,enabled:!0,params:{...yt}};case a.RIPPLE:return{id:e,type:r,enabled:!0,params:{...kr}};case a.DISPLACEMENT:return{id:e,type:r,enabled:!0,params:{...Dr}};case a.LIGHT_LEAK:return{id:e,type:r,enabled:!0,params:{...Ke}};case a.BLOOM:return{id:e,type:r,enabled:!0,params:{...Ge}};case a.RADIAL_BLUR:return{id:e,type:r,enabled:!0,params:{...Et}};case a.MOSAIC:return{id:e,type:r,enabled:!0,params:{...Ct}};case a.TILT_SHIFT:return{id:e,type:r,enabled:!0,params:{...Rt}};case a.EXPOSURE:return{id:e,type:r,enabled:!0,params:{...ce}};case a.VIBRANCE:return{id:e,type:r,enabled:!0,params:{...be}};case a.DOT_DITHER:return{id:e,type:r,enabled:!0,params:{...jr}};default:throw new Error(`Unknown effect type: ${r}`)}},Tt={"film-grain":{name:"35mm Film",effects:[{type:a.EXPOSURE,enabled:!0,params:{...ce,exposure:.05,highlights:-.1,shadows:.1,blacks:.05}},{type:a.COLOR_GRADE,enabled:!0,params:{...Me,saturation:-.1,temperature:.05}},{type:a.GRAIN,enabled:!0,params:{...we,intensity:.12,size:1.4}},{type:a.VIGNETTE,enabled:!0,params:{...Ie,intensity:.25,size:.6,softness:.85}}]},"dither-poster":{name:"Dithered",effects:[{type:a.POSTERIZE,enabled:!0,params:{...Ue,levels:6}},{type:a.DITHER,enabled:!0,params:{...qe,method:de.BAYER_8X8,levels:4,threshold:.7,scale:1}},{type:a.EXPOSURE,enabled:!0,params:{...ce,contrast:.15}}]},newsprint:{name:"Newsprint",effects:[{type:a.COLOR_GRADE,enabled:!0,params:{...Me,saturation:-.8,temperature:.1}},{type:a.HALFTONE,enabled:!0,params:{...je,gridSize:5,colorMode:"monochrome",angle:45,contrast:.15,softness:.3,dotColor:"#1a1a1a",backgroundColor:"#f0ece4"}},{type:a.NOISE,enabled:!0,params:{...We,intensity:.06,monochrome:!0,blendMode:z.OVERLAY}}]},"cmyk-print":{name:"CMYK Print",effects:[{type:a.HALFTONE,enabled:!0,params:{...je,gridSize:4,colorMode:"cmyk",angle:15,softness:.25,dotScale:.95}},{type:a.OVERLAY,enabled:!0,params:{...$e,texture:ue.PAPER,intensity:.1}}]},"retro-ascii":{name:"Retro ASCII",effects:[{type:a.EXPOSURE,enabled:!0,params:{...ce,exposure:.3,shadows:.4,blacks:.2}},{type:a.ASCII,enabled:!0,params:{...Ye,cellSize:12,color:!0,invert:!1,backgroundBlend:.7}},{type:a.SCANLINES,enabled:!0,params:{...He,spacing:3,thickness:1,opacity:.1}},{type:a.BLOOM,enabled:!0,params:{...Ge,radius:5,intensity:.25,threshold:.3,softThreshold:.5}}]},"monochrome-ascii":{name:"Mono ASCII",effects:[{type:a.ASCII,enabled:!0,params:{...Ye,cellSize:6,color:!1,charset:Re.BLOCKS,invert:!1}}]},"lo-fi":{name:"Lo-Fi",effects:[{type:a.BARREL,enabled:!0,params:{...yt,amount:.15,zoom:1.05}},{type:a.VIBRANCE,enabled:!0,params:{...be,vibrance:-.3,saturation:-.2}},{type:a.DITHER,enabled:!0,params:{...qe,method:de.BAYER_4X4,levels:3,threshold:.6,scale:2}},{type:a.NOISE,enabled:!0,params:{...We,intensity:.1,monochrome:!0}},{type:a.VIGNETTE,enabled:!0,params:{...Ie,intensity:.5,size:.4,softness:.6}}]},"retro-crt":{name:"Retro CRT",effects:[{type:a.CRT,enabled:!0,params:{...bt,curvature:.3,scanlineIntensity:.3,scanlineCount:300,vignetteIntensity:.4,rgbOffset:.002}},{type:a.CHROMATIC,enabled:!0,params:{...Oe,intensity:.003,radial:!0}}]},"old-photograph":{name:"Old Photo",effects:[{type:a.EXPOSURE,enabled:!0,params:{...ce,exposure:-.1,highlights:-.2,shadows:-.1,blacks:.1}},{type:a.COLOR_GRADE,enabled:!0,params:{...Me,saturation:-.6,contrast:-.15,temperature:.25}},{type:a.LIGHT_LEAK,enabled:!0,params:{...Ke,color1:"#d4a574",color2:"#f5e6d3",position:.1,angle:120,intensity:.25,softness:.8}},{type:a.VIGNETTE,enabled:!0,params:{...Ie,intensity:.75,size:.25,softness:.7}},{type:a.GRAIN,enabled:!0,params:{...we,intensity:.18,size:1.8}}]},"glitch-art":{name:"Glitch Art",effects:[{type:a.GLITCH,enabled:!0,params:{...xt,intensity:.4,sliceCount:20,rgbShift:.02,colorShift:!0}},{type:a.CHROMATIC,enabled:!0,params:{...Oe,intensity:.012,angle:0}},{type:a.SCANLINES,enabled:!0,params:{...He,spacing:6,thickness:2,opacity:.15}}]},"film-noir":{name:"Film Noir",effects:[{type:a.EXPOSURE,enabled:!0,params:{...ce,exposure:-.1,highlights:-.3,shadows:-.2,blacks:-.15,whites:.1}},{type:a.COLOR_GRADE,enabled:!0,params:{...Me,saturation:-1,contrast:.4}},{type:a.GRAIN,enabled:!0,params:{...we}},{type:a.VIGNETTE,enabled:!0,params:{...Ie,intensity:.7,size:.45,softness:.85}}]},"80s-neon":{name:"80s Neon",effects:[{type:a.VIBRANCE,enabled:!0,params:{...be,vibrance:.6,saturation:.3}},{type:a.BLOOM,enabled:!0,params:{...Ge,radius:10,intensity:.6,threshold:.5,softThreshold:.4}},{type:a.CHROMATIC,enabled:!0,params:{...Oe,intensity:.008,radial:!0}},{type:a.SCANLINES,enabled:!0,params:{...He,spacing:4,opacity:.12}}]},polaroid:{name:"Polaroid",effects:[{type:a.EXPOSURE,enabled:!0,params:{...ce,exposure:.1,highlights:-.15,shadows:.2,blacks:.05}},{type:a.COLOR_GRADE,enabled:!0,params:{...Me,temperature:.12,contrast:-.08,saturation:-.15}},{type:a.LIGHT_LEAK,enabled:!0,params:{...Ke,color1:"#ffe4b5",color2:"#ffefd5",position:.85,angle:45,intensity:.2,softness:.9}},{type:a.VIGNETTE,enabled:!0,params:{...Ie,intensity:.35,size:.55,softness:.95}},{type:a.GRAIN,enabled:!0,params:{...we,intensity:.08,size:1.5}}]},risograph:{name:"Risograph",effects:[{type:a.VIBRANCE,enabled:!0,params:{...be,vibrance:.25,saturation:.1}},{type:a.POSTERIZE,enabled:!0,params:{...Ue,levels:6}},{type:a.HALFTONE,enabled:!0,params:{...je,gridSize:4,colorMode:"original",shape:"circle",softness:.4,dotScale:.9}},{type:a.CHROMATIC,enabled:!0,params:{...Oe,intensity:.003}},{type:a.OVERLAY,enabled:!0,params:{...$e,texture:ue.PAPER,intensity:.12}},{type:a.GRAIN,enabled:!0,params:{...we,intensity:.05,size:1.2}}]},"pixel-art":{name:"Pixel Art",effects:[{type:a.PIXELATE,enabled:!0,params:{...pt,size:10}},{type:a.POSTERIZE,enabled:!0,params:{...Ue,levels:12}},{type:a.VIBRANCE,enabled:!0,params:{...be,vibrance:.35,saturation:.15}},{type:a.EXPOSURE,enabled:!0,params:{...ce,contrast:.1}}]},miniature:{name:"Miniature",effects:[{type:a.TILT_SHIFT,enabled:!0,params:{...Rt,focusPosition:.5,focusWidth:.15,blurRadius:10,gradientSmooth:.25}},{type:a.VIBRANCE,enabled:!0,params:{...be,vibrance:.4,saturation:.2}},{type:a.EXPOSURE,enabled:!0,params:{...ce,exposure:.2,highlights:-.2,shadows:.3}}]},"stained-glass":{name:"Stained Glass",effects:[{type:a.MOSAIC,enabled:!0,params:{...Ct,cellSize:25,irregularity:.8,edgeThickness:.025,edgeColor:"#1a1a1a",colorVariation:.05}},{type:a.VIBRANCE,enabled:!0,params:{...be,vibrance:.3,saturation:.15}}]},dreamy:{name:"Dreamy",effects:[{type:a.BLOOM,enabled:!0,params:{...Ge,radius:12,intensity:1.2,threshold:.4,softThreshold:.6}},{type:a.EXPOSURE,enabled:!0,params:{...ce,exposure:.15,highlights:.2,shadows:.1}},{type:a.VIGNETTE,enabled:!0,params:{...Ie,intensity:.3,size:.5,softness:.9}}]},"motion-zoom":{name:"Motion Zoom",effects:[{type:a.RADIAL_BLUR,enabled:!0,params:{...Et,intensity:.2,centerX:.5,centerY:.5,samples:48,zoom:!0}},{type:a.EXPOSURE,enabled:!0,params:{...ce,exposure:.1,contrast:.1}}]},"duotone-pop":{name:"Duotone Pop",effects:[{type:a.DUOTONE,enabled:!0,params:{...vt,shadowColor:"#1a0a2e",highlightColor:"#ff6b6b",contrast:1.1,intensity:1}},{type:a.HALFTONE,enabled:!0,params:{...je,gridSize:5,colorMode:"original",shape:"circle",softness:.6,mixOriginal:.3}}]},"oil-painting":{name:"Oil Painting",effects:[{type:a.KUWAHARA,enabled:!0,params:{..._t,radius:4}},{type:a.VIBRANCE,enabled:!0,params:{...be,vibrance:.3,saturation:.1}},{type:a.EXPOSURE,enabled:!0,params:{...ce,contrast:.15}}]},"comic-book":{name:"Comic Book",effects:[{type:a.POSTERIZE,enabled:!0,params:{...Ue,levels:5}},{type:a.VIBRANCE,enabled:!0,params:{...be,vibrance:.5,saturation:.2}},{type:a.HALFTONE,enabled:!0,params:{...je,gridSize:3,colorMode:"original",shape:"circle",dotScale:.8,softness:.3,mixOriginal:.5}},{type:a.EXPOSURE,enabled:!0,params:{...ce,contrast:.25}}]}},wr=()=>({image:null,imageUrl:null,video:null,videoUrl:null,mediaType:null,corsError:!1,isPlaying:!1,currentTime:0,duration:0,effects:[],seed:Math.floor(Math.random()*1e5),previewQuality:"draft",viewMode:"preview",exportFormat:"png",exportQuality:.92,exportScale:1,isExporting:!1,exportProgress:0,exportStatus:""}),Mr=[1,2,4],Pr=({children:r,collapsible:e,isOpen:t,onToggle:s})=>n.jsxs(p,{align:"center",justify:"space-between",cursor:e?"pointer":"default",onClick:e?s:void 0,mb:3,children:[n.jsx(k,{fontSize:"11px",color:"#988BC7",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px",children:r}),e&&n.jsx(O,{as:t?Pe:ze,boxSize:4,color:"#988BC7"})]}),h=({label:r,value:e,onChange:t,min:s,max:l,step:u=1,suffix:i=""})=>n.jsxs(p,{direction:"column",gap:2,w:"100%",children:[n.jsxs(p,{justify:"space-between",align:"center",children:[n.jsx(k,{fontSize:"12px",color:"#988BC7",children:r}),n.jsxs(k,{fontSize:"12px",color:"#fff",fontFamily:"mono",children:[e.toFixed(u<1?2:0),i]})]}),n.jsx(lt,{value:[e],onValueChange:({value:o})=>t(o[0]),min:s,max:l,step:u,children:n.jsxs(ct,{children:[n.jsx(ut,{bg:"#271E37",h:"6px",borderRadius:"3px",children:n.jsx(dt,{bg:"#5227FF"})}),n.jsx(ft,{index:0,boxSize:4,bg:"#fff",borderRadius:"full"})]})})]}),Ce=({icon:r,label:e,isActive:t,onClick:s,disabled:l,flex:u})=>n.jsxs(p,{as:"button",type:"button",align:"center",justify:"center",gap:1.5,px:2.5,py:1.5,flex:u,bg:t?"rgba(82, 39, 255, 0.2)":"#170D27",border:t?"1px solid #5227FF":"1px solid #271E37",borderRadius:"6px",cursor:l?"not-allowed":"pointer",opacity:l?.5:1,onClick:l?void 0:s,transition:"all 0.15s",_hover:{borderColor:l?"#271E37":"#5227FF"},children:[n.jsx(O,{as:r,boxSize:3.5,color:t?"#5227FF":"#988BC7",flexShrink:0}),e&&n.jsx(k,{fontSize:"11px",color:t?"#5227FF":"#988BC7",whiteSpace:"nowrap",children:e})]}),ae=({label:r,value:e,onChange:t,options:s})=>{const l=x.useMemo(()=>Ot({items:s.map(i=>i.value)}),[s]),u=x.useMemo(()=>s.reduce((i,o)=>(i[o.value]=o.label,i),{}),[s]);return n.jsxs(p,{direction:"column",gap:2,w:"100%",children:[n.jsx(k,{fontSize:"12px",color:"#988BC7",children:r}),n.jsxs(Ut,{collection:l,value:[e],onValueChange:({value:i})=>t(i[0]),size:"sm",children:[n.jsx(zt,{children:n.jsx(Ft,{bg:"#170D27",border:"1px solid #271E37",borderRadius:"6px",h:"32px",px:3,_focus:{borderColor:"#5227FF",boxShadow:"none"},children:n.jsx(Nt,{fontSize:"12px",color:"#fff",children:u[e]||e})})}),n.jsx(Bt,{children:n.jsx(Ht,{children:n.jsx(Gt,{bg:"#170D27",border:"1px solid #271E37",borderRadius:"6px",zIndex:1500,children:l.items.map(i=>n.jsx(Xt,{item:i,fontSize:"12px",color:"#fff",cursor:"pointer",px:3,py:1.5,_highlighted:{bg:"#271E37"},children:n.jsx(Vt,{children:u[i]})},i))})})})]})]})},oe=({label:r,checked:e,onChange:t})=>n.jsxs(p,{align:"center",justify:"space-between",w:"100%",children:[n.jsx(k,{fontSize:"12px",color:"#988BC7",children:r}),n.jsxs(Jt,{checked:e,onCheckedChange:({checked:s})=>t(s),size:"sm",children:[n.jsx(eo,{}),n.jsx(to,{})]})]}),ge=({label:r,value:e,onChange:t})=>n.jsxs(p,{align:"center",justify:"space-between",w:"100%",children:[n.jsx(k,{fontSize:"12px",color:"#988BC7",children:r}),n.jsxs(p,{align:"center",gap:2,h:"28px",children:[n.jsx(k,{fontSize:"11px",color:"#B19EEF",fontFamily:"mono",textTransform:"uppercase",lineHeight:"28px",children:e}),n.jsxs(j,{position:"relative",w:"28px",h:"28px",children:[n.jsx(j,{w:"28px",h:"28px",borderRadius:"6px",bg:e,border:"2px solid #271E37"}),n.jsx(it,{type:"color",value:e,onChange:s=>t(s.target.value),position:"absolute",top:0,left:0,w:"100%",h:"100%",opacity:0,cursor:"pointer"})]})]})]}),St={[a.NOISE]:Lt,[a.DITHER]:wo,[a.HALFTONE]:ho,[a.ASCII]:gr,[a.OVERLAY]:Uo,[a.CHROMATIC]:lo,[a.VIGNETTE]:Eo,[a.SCANLINES]:er,[a.PIXELATE]:Do,[a.BLUR]:_o,[a.DISTORTION]:vr,[a.POSTERIZE]:Je,[a.EDGE]:Io,[a.GRAIN]:uo,[a.COLOR_GRADE]:gt,[a.GLITCH]:yr,[a.CRT]:Xo,[a.DUOTONE]:po,[a.KUWAHARA]:Yo,[a.BARREL]:ht,[a.RIPPLE]:et,[a.DISPLACEMENT]:Wo,[a.LIGHT_LEAK]:dr,[a.BLOOM]:ir,[a.RADIAL_BLUR]:mr,[a.MOSAIC]:Lo,[a.TILT_SHIFT]:cr,[a.EXPOSURE]:Fo,[a.VIBRANCE]:Je,[a.DOT_DITHER]:et},At={[a.NOISE]:"Grain",[a.DITHER]:"Dithering",[a.HALFTONE]:"Halftone",[a.ASCII]:"ASCII",[a.OVERLAY]:"Texture Overlay",[a.CHROMATIC]:"Chr. Aberration",[a.VIGNETTE]:"Vignette",[a.SCANLINES]:"Scan Lines",[a.PIXELATE]:"Pixelate",[a.BLUR]:"Blur",[a.DISTORTION]:"Distortion",[a.POSTERIZE]:"Posterize",[a.EDGE]:"Edge Detection",[a.GRAIN]:"Film Grain",[a.COLOR_GRADE]:"Color Grading",[a.GLITCH]:"Glitch Split",[a.CRT]:"CRT Monitor",[a.DUOTONE]:"Duotone",[a.KUWAHARA]:"Oil Paint",[a.BARREL]:"Barrel Distortion",[a.RIPPLE]:"Ripple",[a.DISPLACEMENT]:"Displacement",[a.LIGHT_LEAK]:"Light Leak",[a.BLOOM]:"Bloom",[a.RADIAL_BLUR]:"Zoom Blur",[a.MOSAIC]:"Stained Glass",[a.TILT_SHIFT]:"Tilt Shift",[a.EXPOSURE]:"Exposure",[a.VIBRANCE]:"Vibrance",[a.DOT_DITHER]:"Dot Dither"},Lr=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Intensity",value:r.intensity,onChange:t=>e({...r,intensity:t}),min:0,max:1,step:.01}),n.jsx(h,{label:"Scale",value:r.scale,onChange:t=>e({...r,scale:t}),min:.5,max:4,step:.1}),n.jsx(oe,{label:"Monochrome",checked:r.monochrome,onChange:t=>e({...r,monochrome:t})}),n.jsx(ae,{label:"Blend Mode",value:r.blendMode,onChange:t=>e({...r,blendMode:t}),options:[{value:z.OVERLAY,label:"Overlay"},{value:z.SOFT_LIGHT,label:"Soft Light"},{value:z.MULTIPLY,label:"Multiply"},{value:z.SCREEN,label:"Screen"}]})]}),Or=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(ae,{label:"Method",value:r.method,onChange:t=>e({...r,method:t}),options:[{value:de.BAYER_2X2,label:"Bayer 2×2"},{value:de.BAYER_4X4,label:"Bayer 4×4"},{value:de.BAYER_8X8,label:"Bayer 8×8"}]}),n.jsx(h,{label:"Color Levels",value:r.levels,onChange:t=>e({...r,levels:t}),min:2,max:16,step:1}),n.jsx(h,{label:"Threshold",value:r.threshold,onChange:t=>e({...r,threshold:t}),min:0,max:2,step:.05}),n.jsx(h,{label:"Pattern Scale",value:r.scale||1,onChange:t=>e({...r,scale:t}),min:.5,max:4,step:.1,suffix:"×"})]}),Ur=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Grid Size",value:r.gridSize,onChange:t=>e({...r,gridSize:t}),min:3,max:40,step:1,suffix:"px"}),n.jsx(h,{label:"Dot Scale",value:r.dotScale,onChange:t=>e({...r,dotScale:t}),min:.2,max:2,step:.05}),n.jsx(h,{label:"Angle",value:r.angle,onChange:t=>e({...r,angle:t}),min:0,max:90,step:1,suffix:"°"}),n.jsx(ae,{label:"Shape",value:r.shape,onChange:t=>e({...r,shape:t}),options:[{value:Ee.CIRCLE,label:"Circle"},{value:Ee.SQUARE,label:"Square"},{value:Ee.DIAMOND,label:"Diamond"},{value:Ee.ELLIPSE,label:"Ellipse"},{value:Ee.LINE,label:"Line"},{value:Ee.CROSS,label:"Cross"},{value:Ee.RING,label:"Ring"}]}),n.jsx(h,{label:"Softness",value:r.softness,onChange:t=>e({...r,softness:t}),min:0,max:1,step:.05}),n.jsx(h,{label:"Contrast",value:r.contrast,onChange:t=>e({...r,contrast:t}),min:-1,max:1,step:.05}),n.jsx(ae,{label:"Color Mode",value:r.colorMode,onChange:t=>e({...r,colorMode:t}),options:[{value:"original",label:"Original Colors"},{value:"monochrome",label:"Monochrome"},{value:"duotone",label:"Duotone"},{value:"cmyk",label:"CMYK"}]}),(r.colorMode==="monochrome"||r.colorMode==="duotone")&&n.jsxs(n.Fragment,{children:[n.jsx(ge,{label:"Dot Color",value:r.dotColor,onChange:t=>e({...r,dotColor:t})}),n.jsx(ge,{label:"Background",value:r.backgroundColor,onChange:t=>e({...r,backgroundColor:t})})]}),n.jsx(oe,{label:"Invert",checked:r.invert,onChange:t=>e({...r,invert:t})}),n.jsx(h,{label:"Mix Original",value:r.mixOriginal,onChange:t=>e({...r,mixOriginal:t}),min:0,max:1,step:.05})]}),zr=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(ae,{label:"Character Set",value:r.charset,onChange:t=>e({...r,charset:t}),options:[{value:Re.STANDARD,label:"Standard"},{value:Re.BLOCKS,label:"Block Elements"},{value:Re.SIMPLE,label:"Simple"},{value:Re.DETAILED,label:"Detailed"}]}),n.jsx(h,{label:"Cell Size",value:r.cellSize,onChange:t=>e({...r,cellSize:t}),min:4,max:20,step:1,suffix:"px"}),n.jsx(h,{label:"Brightness",value:r.brightness??1,onChange:t=>e({...r,brightness:t}),min:.5,max:2,step:.05}),n.jsx(h,{label:"Contrast",value:r.contrast??1,onChange:t=>e({...r,contrast:t}),min:.5,max:2,step:.05}),n.jsx(h,{label:"Character Brightness",value:r.charBrightness??1,onChange:t=>e({...r,charBrightness:t}),min:.5,max:3,step:.1}),n.jsx(h,{label:"Background Blend",value:r.backgroundBlend??0,onChange:t=>e({...r,backgroundBlend:t}),min:0,max:1,step:.05}),n.jsx(h,{label:"Edge Enhance",value:r.edgeEnhance??0,onChange:t=>e({...r,edgeEnhance:t}),min:0,max:1,step:.05}),n.jsx(oe,{label:"Color Output",checked:r.color,onChange:t=>e({...r,color:t})}),n.jsx(oe,{label:"Invert Brightness",checked:r.invert||!1,onChange:t=>e({...r,invert:t})})]}),Fr=({params:r,onChange:e})=>{const t=x.useRef(null),s=x.useCallback(l=>{var i;const u=(i=l.target.files)==null?void 0:i[0];if(u){const o=URL.createObjectURL(u);e({...r,texture:ue.CUSTOM,customTextureUrl:o})}l.target.value=""},[r,e]);return n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(ae,{label:"Texture",value:r.texture,onChange:l=>e({...r,texture:l}),options:[{value:ue.PAPER,label:"Paper"},{value:ue.FILM_GRAIN,label:"Film Grain"},{value:ue.CANVAS,label:"Canvas"},{value:ue.DUST,label:"Dust & Scratches"},{value:ue.CUSTOM,label:"Custom Upload"}]}),r.texture===ue.CUSTOM&&n.jsxs(n.Fragment,{children:[n.jsx("input",{type:"file",ref:t,onChange:s,accept:"image/png,image/jpeg,image/webp",style:{display:"none"}}),n.jsx(p,{as:"button",type:"button",direction:"column",align:"center",justify:"center",gap:2,p:3,bg:r.customTextureUrl?"transparent":"#170D27",border:"1px dashed #5227FF",borderRadius:"8px",cursor:"pointer",onClick:()=>{var l;return(l=t.current)==null?void 0:l.click()},transition:"all 0.15s",_hover:{bg:"rgba(82, 39, 255, 0.1)"},position:"relative",overflow:"hidden",minH:"60px",children:r.customTextureUrl?n.jsxs(n.Fragment,{children:[n.jsx(j,{as:"img",src:r.customTextureUrl,position:"absolute",top:0,left:0,w:"100%",h:"100%",objectFit:"cover",opacity:.5}),n.jsx(k,{fontSize:"11px",color:"#5227FF",fontWeight:500,zIndex:1,children:"Click to change texture"})]}):n.jsxs(n.Fragment,{children:[n.jsx(O,{as:Ze,boxSize:4,color:"#ffffff"}),n.jsx(k,{fontSize:"11px",color:"#ffffff",fontWeight:500,children:"Upload custom texture"})]})})]}),n.jsx(h,{label:"Intensity",value:r.intensity,onChange:l=>e({...r,intensity:l}),min:0,max:1,step:.01}),n.jsx(h,{label:"Scale",value:r.scale,onChange:l=>e({...r,scale:l}),min:.25,max:4,step:.05}),n.jsx(h,{label:"Rotation",value:r.rotation,onChange:l=>e({...r,rotation:l}),min:0,max:360,step:1,suffix:"°"}),n.jsx(ae,{label:"Blend Mode",value:r.blendMode,onChange:l=>e({...r,blendMode:l}),options:[{value:z.OVERLAY,label:"Overlay"},{value:z.SOFT_LIGHT,label:"Soft Light"},{value:z.MULTIPLY,label:"Multiply"},{value:z.SCREEN,label:"Screen"}]})]})},Nr=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Intensity",value:r.intensity,onChange:t=>e({...r,intensity:t}),min:0,max:.05,step:.001}),n.jsx(h,{label:"Angle",value:r.angle,onChange:t=>e({...r,angle:t}),min:0,max:360,step:1,suffix:"°"}),n.jsx(oe,{label:"Radial",checked:r.radial,onChange:t=>e({...r,radial:t})})]}),Br=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Intensity",value:r.intensity,onChange:t=>e({...r,intensity:t}),min:0,max:1,step:.01}),n.jsx(h,{label:"Size",value:r.size,onChange:t=>e({...r,size:t}),min:.1,max:1,step:.01}),n.jsx(h,{label:"Softness",value:r.softness,onChange:t=>e({...r,softness:t}),min:0,max:1,step:.01}),n.jsx(ge,{label:"Color",value:r.color,onChange:t=>e({...r,color:t})})]}),Hr=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Spacing",value:r.spacing,onChange:t=>e({...r,spacing:t}),min:2,max:20,step:1,suffix:"px"}),n.jsx(h,{label:"Thickness",value:r.thickness,onChange:t=>e({...r,thickness:t}),min:1,max:10,step:.5,suffix:"px"}),n.jsx(h,{label:"Opacity",value:r.opacity,onChange:t=>e({...r,opacity:t}),min:0,max:1,step:.01}),n.jsx(h,{label:"Offset",value:r.offset,onChange:t=>e({...r,offset:t}),min:0,max:20,step:.5,suffix:"px"}),n.jsx(oe,{label:"Horizontal",checked:r.horizontal,onChange:t=>e({...r,horizontal:t})})]}),Gr=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Pixel Size",value:r.size,onChange:t=>e({...r,size:t}),min:2,max:64,step:1,suffix:"px"}),n.jsx(oe,{label:"Maintain Aspect",checked:r.maintainAspect,onChange:t=>e({...r,maintainAspect:t})})]}),Xr=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(ae,{label:"Type",value:r.type,onChange:t=>e({...r,type:t}),options:[{value:"gaussian",label:"Gaussian"},{value:"radial",label:"Radial"},{value:"motion",label:"Motion"}]}),n.jsx(h,{label:"Radius",value:r.radius,onChange:t=>e({...r,radius:t}),min:0,max:10,step:.1}),r.type==="motion"&&n.jsx(h,{label:"Angle",value:r.angle,onChange:t=>e({...r,angle:t}),min:0,max:360,step:1,suffix:"°"})]}),Vr=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(ae,{label:"Type",value:r.type,onChange:t=>e({...r,type:t}),options:[{value:"wave",label:"Wave"},{value:"swirl",label:"Swirl"},{value:"bulge",label:"Bulge"}]}),n.jsx(h,{label:"Amplitude",value:r.amplitude,onChange:t=>e({...r,amplitude:t}),min:0,max:50,step:1}),n.jsx(h,{label:"Frequency",value:r.frequency,onChange:t=>e({...r,frequency:t}),min:1,max:20,step:.5}),(r.type==="swirl"||r.type==="bulge")&&n.jsxs(n.Fragment,{children:[n.jsx(h,{label:"Center X",value:r.centerX,onChange:t=>e({...r,centerX:t}),min:0,max:1,step:.01}),n.jsx(h,{label:"Center Y",value:r.centerY,onChange:t=>e({...r,centerY:t}),min:0,max:1,step:.01})]})]}),Wr=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Levels",value:r.levels,onChange:t=>e({...r,levels:t}),min:2,max:16,step:1}),n.jsx(oe,{label:"Preserve Hue",checked:r.preserveHue,onChange:t=>e({...r,preserveHue:t})})]}),qr=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Strength",value:r.strength,onChange:t=>e({...r,strength:t}),min:0,max:3,step:.1}),n.jsx(h,{label:"Threshold",value:r.threshold,onChange:t=>e({...r,threshold:t}),min:0,max:.5,step:.01}),n.jsx(oe,{label:"Invert",checked:r.invert,onChange:t=>e({...r,invert:t})}),n.jsx(oe,{label:"Colorize",checked:r.colorize,onChange:t=>e({...r,colorize:t})})]}),Yr=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Intensity",value:r.intensity,onChange:t=>e({...r,intensity:t}),min:0,max:.5,step:.01}),n.jsx(h,{label:"Size",value:r.size,onChange:t=>e({...r,size:t}),min:.5,max:5,step:.1}),n.jsx(h,{label:"Luminance Response",value:r.luminanceResponse,onChange:t=>e({...r,luminanceResponse:t}),min:0,max:1,step:.01}),n.jsx(oe,{label:"Colored",checked:r.colored,onChange:t=>e({...r,colored:t})})]}),$r=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Brightness",value:r.brightness,onChange:t=>e({...r,brightness:t}),min:-.5,max:.5,step:.01}),n.jsx(h,{label:"Contrast",value:r.contrast,onChange:t=>e({...r,contrast:t}),min:-.5,max:.5,step:.01}),n.jsx(h,{label:"Saturation",value:r.saturation,onChange:t=>e({...r,saturation:t}),min:-1,max:1,step:.01}),n.jsx(h,{label:"Temperature",value:r.temperature,onChange:t=>e({...r,temperature:t}),min:-1,max:1,step:.01}),n.jsx(h,{label:"Tint",value:r.tint,onChange:t=>e({...r,tint:t}),min:-1,max:1,step:.01}),n.jsx(ge,{label:"Shadows",value:r.shadows,onChange:t=>e({...r,shadows:t})}),n.jsx(h,{label:"Shadow Influence",value:r.shadowInfluence,onChange:t=>e({...r,shadowInfluence:t}),min:0,max:1,step:.01}),n.jsx(ge,{label:"Highlights",value:r.highlights,onChange:t=>e({...r,highlights:t})}),n.jsx(h,{label:"Highlight Influence",value:r.highlightInfluence,onChange:t=>e({...r,highlightInfluence:t}),min:0,max:1,step:.01})]}),Kr=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Intensity",value:r.intensity,onChange:t=>e({...r,intensity:t}),min:0,max:1,step:.01}),n.jsx(h,{label:"Slice Count",value:r.sliceCount,onChange:t=>e({...r,sliceCount:t}),min:2,max:50,step:1}),n.jsx(h,{label:"RGB Shift",value:r.rgbShift,onChange:t=>e({...r,rgbShift:t}),min:0,max:.1,step:.001}),n.jsx(h,{label:"Angle",value:r.angle,onChange:t=>e({...r,angle:t}),min:0,max:360,step:1,suffix:"°"}),n.jsx(h,{label:"Block Size",value:r.blockSize,onChange:t=>e({...r,blockSize:t}),min:.02,max:.3,step:.01}),n.jsx(oe,{label:"Color Shift",checked:r.colorShift,onChange:t=>e({...r,colorShift:t})})]}),Zr=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Curvature",value:r.curvature,onChange:t=>e({...r,curvature:t}),min:0,max:1,step:.01}),n.jsx(h,{label:"Scanline Intensity",value:r.scanlineIntensity,onChange:t=>e({...r,scanlineIntensity:t}),min:0,max:1,step:.01}),n.jsx(h,{label:"Scanline Count",value:r.scanlineCount,onChange:t=>e({...r,scanlineCount:t}),min:100,max:800,step:10}),n.jsx(h,{label:"Vignette",value:r.vignetteIntensity,onChange:t=>e({...r,vignetteIntensity:t}),min:0,max:1,step:.01}),n.jsx(h,{label:"Brightness",value:r.brightness,onChange:t=>e({...r,brightness:t}),min:.5,max:1.5,step:.01}),n.jsx(h,{label:"RGB Offset",value:r.rgbOffset,onChange:t=>e({...r,rgbOffset:t}),min:0,max:.01,step:5e-4}),n.jsx(h,{label:"Flicker",value:r.flickerIntensity,onChange:t=>e({...r,flickerIntensity:t}),min:0,max:.2,step:.01}),n.jsx(h,{label:"Static Noise",value:r.staticNoise,onChange:t=>e({...r,staticNoise:t}),min:0,max:.2,step:.01})]}),Qr=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(ge,{label:"Shadow Color",value:r.shadowColor,onChange:t=>e({...r,shadowColor:t})}),n.jsx(ge,{label:"Highlight Color",value:r.highlightColor,onChange:t=>e({...r,highlightColor:t})}),n.jsx(h,{label:"Contrast",value:r.contrast,onChange:t=>e({...r,contrast:t}),min:.5,max:2,step:.05}),n.jsx(h,{label:"Intensity",value:r.intensity,onChange:t=>e({...r,intensity:t}),min:0,max:1,step:.01})]}),Jr=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Radius",value:r.radius,onChange:t=>e({...r,radius:t}),min:1,max:5,step:1,suffix:"px"}),n.jsx(h,{label:"Sharpness",value:r.sharpness,onChange:t=>e({...r,sharpness:t}),min:0,max:1,step:.05})]}),en=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Amount",value:r.amount,onChange:t=>e({...r,amount:t}),min:-1,max:1,step:.01}),n.jsx(h,{label:"Center X",value:r.centerX,onChange:t=>e({...r,centerX:t}),min:0,max:1,step:.01}),n.jsx(h,{label:"Center Y",value:r.centerY,onChange:t=>e({...r,centerY:t}),min:0,max:1,step:.01}),n.jsx(h,{label:"Zoom",value:r.zoom,onChange:t=>e({...r,zoom:t}),min:.5,max:2,step:.01})]}),tn=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Amplitude",value:r.amplitude,onChange:t=>e({...r,amplitude:t}),min:0,max:.1,step:.001}),n.jsx(h,{label:"Wavelength",value:r.wavelength,onChange:t=>e({...r,wavelength:t}),min:10,max:200,step:5}),n.jsx(h,{label:"Speed",value:r.speed,onChange:t=>e({...r,speed:t}),min:0,max:5,step:.1}),n.jsx(h,{label:"Center X",value:r.centerX,onChange:t=>e({...r,centerX:t}),min:0,max:1,step:.01}),n.jsx(h,{label:"Center Y",value:r.centerY,onChange:t=>e({...r,centerY:t}),min:0,max:1,step:.01}),n.jsx(h,{label:"Damping",value:r.damping,onChange:t=>e({...r,damping:t}),min:0,max:2,step:.05})]}),on=({params:r,onChange:e})=>{const t=x.useRef(null),s=x.useCallback(l=>{var i;const u=(i=l.target.files)==null?void 0:i[0];if(u){const o=URL.createObjectURL(u);e({...r,customMapUrl:o})}l.target.value=""},[r,e]);return n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Scale X",value:r.scaleX,onChange:l=>e({...r,scaleX:l}),min:0,max:.2,step:.005}),n.jsx(h,{label:"Scale Y",value:r.scaleY,onChange:l=>e({...r,scaleY:l}),min:0,max:.2,step:.005}),n.jsx(oe,{label:"Use Red/Green Channels",checked:r.useRedGreen,onChange:l=>e({...r,useRedGreen:l})}),n.jsx("input",{type:"file",ref:t,onChange:s,accept:"image/png,image/jpeg,image/webp",style:{display:"none"}}),n.jsxs(p,{as:"button",type:"button",direction:"column",align:"center",justify:"center",gap:2,p:3,bg:r.customMapUrl?"transparent":"#170D27",border:"1px dashed #5227FF",borderRadius:"8px",cursor:"pointer",onClick:()=>{var l;return(l=t.current)==null?void 0:l.click()},transition:"all 0.15s",_hover:{bg:"rgba(82, 39, 255, 0.1)"},position:"relative",overflow:"hidden",minH:"60px",children:[r.customMapUrl?n.jsx(j,{as:"img",src:r.customMapUrl,alt:"Displacement Map",w:"100%",h:"100%",objectFit:"cover",position:"absolute",top:0,left:0,opacity:.6}):null,n.jsx(k,{fontSize:"11px",color:"#988BC7",zIndex:1,children:r.customMapUrl?"Click to change":"Upload Displacement Map"}),n.jsx(k,{fontSize:"10px",color:"#665c7e",zIndex:1,children:"(Leave empty for procedural noise)"})]})]})},rn=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(ge,{label:"Color 1",value:r.color1,onChange:t=>e({...r,color1:t})}),n.jsx(ge,{label:"Color 2",value:r.color2,onChange:t=>e({...r,color2:t})}),n.jsx(h,{label:"Position",value:r.position,onChange:t=>e({...r,position:t}),min:-1,max:2,step:.01}),n.jsx(h,{label:"Angle",value:r.angle,onChange:t=>e({...r,angle:t}),min:0,max:360,step:1,suffix:"°"}),n.jsx(h,{label:"Size",value:r.size,onChange:t=>e({...r,size:t}),min:.1,max:2,step:.05}),n.jsx(h,{label:"Intensity",value:r.intensity,onChange:t=>e({...r,intensity:t}),min:0,max:1,step:.01}),n.jsx(h,{label:"Softness",value:r.softness,onChange:t=>e({...r,softness:t}),min:0,max:1,step:.01}),n.jsx(ae,{label:"Blend Mode",value:r.blendMode,onChange:t=>e({...r,blendMode:t}),options:[{value:z.SCREEN,label:"Screen"},{value:z.OVERLAY,label:"Overlay"},{value:z.SOFT_LIGHT,label:"Soft Light"},{value:z.MULTIPLY,label:"Multiply"}]})]}),nn=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Radius",value:r.radius,onChange:t=>e({...r,radius:t}),min:1,max:15,step:1,suffix:"px"}),n.jsx(h,{label:"Intensity",value:r.intensity,onChange:t=>e({...r,intensity:t}),min:0,max:3,step:.05}),n.jsx(h,{label:"Threshold",value:r.threshold,onChange:t=>e({...r,threshold:t}),min:0,max:1,step:.01}),n.jsx(h,{label:"Soft Threshold",value:r.softThreshold,onChange:t=>e({...r,softThreshold:t}),min:0,max:1,step:.01}),n.jsx(ae,{label:"Blend Mode",value:r.blendMode,onChange:t=>e({...r,blendMode:t}),options:[{value:z.SCREEN,label:"Screen"},{value:z.OVERLAY,label:"Overlay"},{value:z.SOFT_LIGHT,label:"Soft Light"},{value:z.MULTIPLY,label:"Multiply"}]})]}),an=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Intensity",value:r.intensity,onChange:t=>e({...r,intensity:t}),min:0,max:1,step:.01}),n.jsx(h,{label:"Center X",value:r.centerX,onChange:t=>e({...r,centerX:t}),min:0,max:1,step:.01}),n.jsx(h,{label:"Center Y",value:r.centerY,onChange:t=>e({...r,centerY:t}),min:0,max:1,step:.01}),n.jsx(h,{label:"Samples",value:r.samples,onChange:t=>e({...r,samples:t}),min:8,max:64,step:1}),n.jsx(oe,{label:"Zoom Blur",checked:r.zoom,onChange:t=>e({...r,zoom:t})})]}),sn=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Cell Size",value:r.cellSize,onChange:t=>e({...r,cellSize:t}),min:5,max:100,step:1,suffix:"px"}),n.jsx(h,{label:"Irregularity",value:r.irregularity,onChange:t=>e({...r,irregularity:t}),min:0,max:1,step:.01}),n.jsx(h,{label:"Edge Thickness",value:r.edgeThickness,onChange:t=>e({...r,edgeThickness:t}),min:0,max:.1,step:.005}),n.jsx(ge,{label:"Edge Color",value:r.edgeColor,onChange:t=>e({...r,edgeColor:t})}),n.jsx(h,{label:"Color Variation",value:r.colorVariation,onChange:t=>e({...r,colorVariation:t}),min:0,max:.5,step:.01})]}),ln=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Focus Position",value:r.focusPosition,onChange:t=>e({...r,focusPosition:t}),min:0,max:1,step:.01}),n.jsx(h,{label:"Focus Width",value:r.focusWidth,onChange:t=>e({...r,focusWidth:t}),min:.05,max:.5,step:.01}),n.jsx(h,{label:"Blur Radius",value:r.blurRadius,onChange:t=>e({...r,blurRadius:t}),min:1,max:15,step:1,suffix:"px"}),n.jsx(h,{label:"Angle",value:r.angle,onChange:t=>e({...r,angle:t}),min:-90,max:90,step:1,suffix:"°"}),n.jsx(h,{label:"Gradient Smooth",value:r.gradientSmooth,onChange:t=>e({...r,gradientSmooth:t}),min:.05,max:.5,step:.01})]}),cn=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Exposure",value:r.exposure,onChange:t=>e({...r,exposure:t}),min:-3,max:3,step:.05,suffix:" EV"}),n.jsx(h,{label:"Highlights",value:r.highlights,onChange:t=>e({...r,highlights:t}),min:-1,max:1,step:.01}),n.jsx(h,{label:"Shadows",value:r.shadows,onChange:t=>e({...r,shadows:t}),min:-1,max:1,step:.01}),n.jsx(h,{label:"Blacks",value:r.blacks,onChange:t=>e({...r,blacks:t}),min:-1,max:1,step:.01}),n.jsx(h,{label:"Whites",value:r.whites,onChange:t=>e({...r,whites:t}),min:-1,max:1,step:.01})]}),un=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Vibrance",value:r.vibrance,onChange:t=>e({...r,vibrance:t}),min:-1,max:1,step:.01}),n.jsx(h,{label:"Saturation",value:r.saturation,onChange:t=>e({...r,saturation:t}),min:-1,max:1,step:.01})]}),dn=({params:r,onChange:e})=>n.jsxs(p,{direction:"column",gap:3,children:[n.jsx(h,{label:"Dot Size",value:r.scale,onChange:t=>e({...r,scale:t}),min:1,max:8,step:1,suffix:"px"}),n.jsx(h,{label:"Threshold",value:r.threshold,onChange:t=>e({...r,threshold:t}),min:.1,max:.9,step:.05}),n.jsx(oe,{label:"Invert",checked:r.invert,onChange:t=>e({...r,invert:t})})]}),fn=({effect:r,onUpdate:e,onDelete:t,onToggle:s,onDuplicate:l,isDragging:u,onDragStart:i,onDragEnd:o,onDragOver:c,isExpanded:f,onExpandToggle:g})=>{const _=St[r.type],v={[a.NOISE]:Lr,[a.DITHER]:Or,[a.HALFTONE]:Ur,[a.ASCII]:zr,[a.OVERLAY]:Fr,[a.CHROMATIC]:Nr,[a.VIGNETTE]:Br,[a.SCANLINES]:Hr,[a.PIXELATE]:Gr,[a.BLUR]:Xr,[a.DISTORTION]:Vr,[a.POSTERIZE]:Wr,[a.EDGE]:qr,[a.GRAIN]:Yr,[a.COLOR_GRADE]:$r,[a.GLITCH]:Kr,[a.CRT]:Zr,[a.DUOTONE]:Qr,[a.KUWAHARA]:Jr,[a.BARREL]:en,[a.RIPPLE]:tn,[a.DISPLACEMENT]:on,[a.LIGHT_LEAK]:rn,[a.BLOOM]:nn,[a.RADIAL_BLUR]:an,[a.MOSAIC]:sn,[a.TILT_SHIFT]:ln,[a.EXPOSURE]:cn,[a.VIBRANCE]:un,[a.DOT_DITHER]:dn}[r.type];return n.jsxs(j,{bg:"#170D27",border:u?"1px solid #5227FF":"1px solid #271E37",borderRadius:"8px",overflow:"hidden",opacity:u?.5:1,transition:"all 0.2s ease",transform:u?"scale(0.95)":"scale(1)",onDragOver:c,children:[n.jsxs(p,{align:"center",justify:"space-between",p:3,cursor:"pointer",onClick:g,_hover:{bg:"rgba(82, 39, 255, 0.05)"},children:[n.jsxs(p,{align:"center",gap:1,children:[n.jsx(p,{align:"center",justify:"center",w:5,h:5,cursor:"grab",draggable:!0,onDragStart:i,onDragEnd:o,onClick:S=>S.stopPropagation(),opacity:.4,_hover:{opacity:1},_active:{cursor:"grabbing"},children:n.jsx(O,{as:mt,boxSize:3,color:"#988BC7"})}),n.jsx(O,{as:_,boxSize:3,color:r.enabled?"#5227FF":"#988BC7"}),n.jsx(k,{fontSize:"12px",color:r.enabled?"#fff":"#988BC7",fontWeight:500,children:At[r.type]})]}),n.jsxs(p,{align:"center",gap:1,children:[n.jsx(p,{as:"button",align:"center",justify:"center",w:6,h:6,borderRadius:"4px",cursor:"pointer",onClick:S=>{S.stopPropagation(),s(r.id)},_hover:{bg:"rgba(255,255,255,0.1)"},title:r.enabled?"Disable effect":"Enable effect",children:n.jsx(O,{as:r.enabled?at:Wt,boxSize:3.5,color:"#988BC7"})}),n.jsx(p,{as:"button",align:"center",justify:"center",w:6,h:6,borderRadius:"4px",cursor:"pointer",onClick:S=>{S.stopPropagation(),l(r)},_hover:{bg:"rgba(255,255,255,0.1)"},title:"Duplicate effect",children:n.jsx(O,{as:st,boxSize:3.5,color:"#988BC7"})}),n.jsx(p,{as:"button",align:"center",justify:"center",w:6,h:6,borderRadius:"4px",cursor:"pointer",onClick:S=>{S.stopPropagation(),t(r.id)},_hover:{bg:"rgba(255,100,100,0.1)"},title:"Delete effect",children:n.jsx(O,{as:qt,boxSize:3.5,color:"#988BC7"})}),n.jsx(p,{as:"button",align:"center",justify:"center",w:6,h:6,borderRadius:"4px",cursor:"pointer",onClick:S=>{S.stopPropagation(),g()},_hover:{bg:"rgba(255,255,255,0.1)"},title:f?"Collapse":"Expand",children:n.jsx(O,{as:f?Pe:ze,boxSize:4,color:"#988BC7"})})]})]}),f&&v&&n.jsx(j,{p:3,borderTop:"1px solid #271E37",children:n.jsx(v,{params:r.params,onChange:S=>e(r.id,{params:S})})})]})},mn={texture:{label:"Texture",effects:[a.NOISE,a.GRAIN,a.DITHER,a.HALFTONE,a.DOT_DITHER,a.SCANLINES]},stylize:{label:"Stylize",effects:[a.ASCII,a.PIXELATE,a.POSTERIZE,a.EDGE,a.KUWAHARA,a.GLITCH,a.CRT,a.DUOTONE,a.MOSAIC]},color:{label:"Color & Light",effects:[a.COLOR_GRADE,a.EXPOSURE,a.VIBRANCE,a.CHROMATIC,a.VIGNETTE,a.LIGHT_LEAK,a.BLOOM]},distort:{label:"Distort",effects:[a.BLUR,a.RADIAL_BLUR,a.TILT_SHIFT,a.DISTORTION,a.BARREL,a.RIPPLE,a.DISPLACEMENT]},overlay:{label:"Overlay",effects:[a.OVERLAY]}},hn=({onAddEffect:r})=>{const[e,t]=x.useState(!1);return n.jsxs(j,{bg:"#170D27",border:"1px solid #271E37",borderRadius:"8px",overflow:"hidden",mb:3,children:[n.jsxs(p,{as:"button",type:"button",align:"center",justify:"space-between",w:"100%",p:3,cursor:"pointer",onClick:()=>t(!e),_hover:{bg:"rgba(82, 39, 255, 0.1)"},transition:"all 0.15s",children:[n.jsxs(p,{align:"center",gap:2,children:[n.jsx(O,{as:Qt,boxSize:4,color:"#988BC7"}),n.jsx(k,{fontSize:"12px",color:"#fff",fontWeight:500,children:"Add Effect"})]}),n.jsx(O,{as:e?Pe:ze,boxSize:4,color:"#988BC7"})]}),e&&n.jsx(p,{direction:"column",gap:3,p:3,children:Object.entries(mn).map(([s,l])=>n.jsxs(j,{children:[n.jsx(k,{fontSize:"10px",color:"#988BC7",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px",mb:2,children:l.label}),n.jsx(p,{gap:2,flexWrap:"wrap",children:l.effects.map(u=>n.jsx(Ce,{icon:St[u],label:At[u],onClick:()=>{r(u),t(!1)}},u))})]},s))})]})},gn=({onLoadPreset:r})=>{const[e,t]=x.useState(!1);return n.jsxs(j,{bg:"#170D27",border:"1px solid #271E37",borderRadius:"8px",overflow:"hidden",mb:4,children:[n.jsxs(p,{as:"button",type:"button",align:"center",justify:"space-between",w:"100%",p:3,cursor:"pointer",onClick:()=>t(!e),_hover:{bg:"rgba(82, 39, 255, 0.1)"},transition:"all 0.15s",children:[n.jsxs(p,{align:"center",gap:2,children:[n.jsx(O,{as:tt,boxSize:4,color:"#988BC7"}),n.jsx(k,{fontSize:"12px",color:"#fff",fontWeight:500,children:"Presets"})]}),n.jsx(O,{as:e?Pe:ze,boxSize:4,color:"#988BC7"})]}),e&&n.jsx(p,{gap:2,p:3,flexWrap:"wrap",children:Object.entries(Tt).map(([s,l])=>n.jsx(Ce,{icon:tt,label:l.name,onClick:()=>r(s),flex:"1 1 calc(50% - 4px)"},s))})]})},pn=({mediaType:r,exportFormat:e,exportQuality:t,exportScale:s,previewQuality:l,onExportFormatChange:u,onExportQualityChange:i,onExportScaleChange:o,onPreviewQualityChange:c})=>{const[f,g]=x.useState(!1),_=r==="video";return n.jsxs(j,{bg:"#170D27",border:"1px solid #271E37",borderRadius:"8px",overflow:"hidden",children:[n.jsxs(p,{as:"button",type:"button",align:"center",justify:"space-between",w:"100%",p:3,cursor:"pointer",onClick:()=>g(!f),_hover:{bg:"rgba(82, 39, 255, 0.1)"},transition:"all 0.15s",children:[n.jsxs(p,{align:"center",gap:2,children:[n.jsx(O,{as:gt,boxSize:4,color:"#988BC7"}),n.jsx(k,{fontSize:"12px",color:"#fff",fontWeight:500,children:"Export Settings"})]}),n.jsx(O,{as:f?Pe:ze,boxSize:4,color:"#988BC7"})]}),f&&n.jsxs(p,{direction:"column",gap:3,p:3,children:[_?n.jsx(k,{fontSize:"11px",color:"#988BC7",children:"Videos export as WebM format."}):n.jsxs(n.Fragment,{children:[n.jsx(ae,{label:"Format",value:e,onChange:u,options:[{value:"png",label:"PNG (lossless)"},{value:"jpg",label:"JPG (smaller file)"}]}),e==="jpg"&&n.jsx(h,{label:"Quality",value:t,onChange:i,min:.7,max:1,step:.01}),n.jsx(ae,{label:"Scale",value:s.toString(),onChange:v=>o(parseInt(v)),options:Mr.map(v=>({value:v.toString(),label:`${v}× ${v===1?"(original)":""}`}))})]}),n.jsx(ae,{label:"Preview Quality",value:l,onChange:c,options:[{value:"draft",label:"Draft (fast)"},{value:"high",label:"High (accurate)"}]})]})]})};function ot({image:r,video:e,mediaType:t,corsError:s,effects:l,previewQuality:u,exportFormat:i,exportQuality:o,exportScale:c,isExporting:f,exportProgress:g,exportStatus:_,onMediaLoad:v,onClearMedia:S,onEffectsChange:R,onSeedChange:D,onPreviewQualityChange:P,onExportFormatChange:$,onExportQualityChange:Z,onExportScaleChange:N,onCopyToClipboard:J,onExport:se,onReset:K,toolSelector:ee}){const pe=x.useRef(null),[V,fe]=x.useState(""),[re,b]=x.useState(!1),y=x.useCallback(d=>{var T;const m=(T=d.target.files)==null?void 0:T[0];m&&v(m,"file"),d.target.value=""},[v]),q=x.useCallback(async()=>{if(V.trim()){b(!0);try{await v(V.trim(),"url"),fe("")}catch(d){W.create({title:"Failed to load media",description:d.message,type:"error",duration:3e3})}b(!1)}},[V,v]),[B,ne]=x.useState(null),le=x.useCallback(d=>{const m=Be(d);R([m,...l]),ne(m.id)},[l,R]),Te=x.useCallback((d,m)=>{R(l.map(T=>T.id===d?{...T,...m}:T))},[l,R]),ve=x.useCallback(d=>{R(l.filter(m=>m.id!==d))},[l,R]),H=x.useCallback(d=>{R(l.map(m=>m.id===d?{...m,enabled:!m.enabled}:m))},[l,R]),te=x.useCallback(d=>{const m={...d,id:`${d.type}-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,params:{...d.params}},T=l.findIndex(w=>w.id===d.id),A=[...l];A.splice(T+1,0,m),R(A)},[l,R]),[me,Se]=x.useState(null),ke=x.useCallback(d=>{Se(d)},[]),Ae=x.useCallback(()=>{Se(null)},[]),De=x.useCallback((d,m)=>{if(d.preventDefault(),!me||me===m)return;const T=l.findIndex(Q=>Q.id===me),A=l.findIndex(Q=>Q.id===m);if(T===-1||A===-1||T===A)return;const w=[...l],[Y]=w.splice(T,1);w.splice(A,0,Y),R(w)},[me,l,R]),C=x.useCallback(d=>{const m=Tt[d];if(!m)return;const T=m.effects.map(A=>({...Be(A.type),enabled:A.enabled,params:{...A.params}}));R(T),W.create({title:`Applied "${m.name}" preset`,type:"success",duration:2e3})},[R]),L=x.useCallback(()=>{const d=(X,he)=>Math.random()*(he-X)+X,m=(X,he)=>Math.floor(d(X,he+1)),T=()=>Math.random()>.5,A=X=>X[Math.floor(Math.random()*X.length)],w=()=>"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),Y=[a.NOISE,a.DITHER,a.HALFTONE,a.DOT_DITHER,a.ASCII,a.CHROMATIC,a.VIGNETTE,a.SCANLINES,a.PIXELATE,a.BLUR,a.DISTORTION,a.POSTERIZE,a.EDGE,a.GRAIN,a.COLOR_GRADE,a.GLITCH,a.CRT,a.DUOTONE,a.KUWAHARA,a.RIPPLE,a.LIGHT_LEAK,a.BLOOM,a.RADIAL_BLUR,a.TILT_SHIFT,a.EXPOSURE,a.VIBRANCE],Q=X=>{switch(X){case a.NOISE:return{intensity:d(.05,.2),scale:d(.8,1.5),monochrome:T(),blendMode:A(["overlay","soft-light"])};case a.DITHER:return{method:A(["bayer2x2","bayer4x4","bayer8x8"]),levels:m(3,6),threshold:d(.4,.6),scale:d(.8,1.5)};case a.HALFTONE:return{gridSize:m(4,12),dotScale:d(.7,1.2),angle:m(0,90),shape:A(["circle","square","diamond"]),softness:d(.3,.6),contrast:d(-.1,.2),invert:!1,colorMode:A(["original","monochrome"]),dotColor:"#000000",backgroundColor:"#ffffff",mixOriginal:d(.1,.3)};case a.DOT_DITHER:return{scale:m(1,3),threshold:d(.4,.6),invert:!1};case a.ASCII:return{charset:A([" .:-=+*#%@"," .-+*#"]),cellSize:m(4,8),colorMode:"original",invert:!1,contrast:d(1.1,1.4),brightness:d(1.1,1.3)};case a.CHROMATIC:return{intensity:d(.002,.008),angle:m(0,360),radial:T()};case a.VIGNETTE:return{intensity:d(.2,.5),size:d(.4,.6),softness:d(.4,.7),color:"#000000"};case a.SCANLINES:return{spacing:m(2,5),thickness:m(1,2),opacity:d(.1,.3),horizontal:T(),offset:m(0,5)};case a.PIXELATE:return{size:m(2,8),maintainAspect:!0};case a.BLUR:return{radius:d(.5,2),type:"gaussian",angle:0};case a.DISTORTION:return{type:A(["wave","bulge"]),amplitude:d(3,10),frequency:d(3,8),centerX:.5,centerY:.5};case a.POSTERIZE:return{levels:m(4,8),preserveHue:!0};case a.EDGE:return{strength:d(.5,1.2),threshold:d(.1,.25),invert:!1,colorize:!0};case a.GRAIN:return{intensity:d(.05,.15),size:d(1,2),luminanceResponse:d(.3,.6),colored:!1};case a.COLOR_GRADE:return{brightness:d(-.1,.1),contrast:d(-.15,.15),saturation:d(-.15,.2),temperature:d(-.15,.15),tint:d(-.1,.1),shadowInfluence:d(0,.15),highlightInfluence:d(0,.15)};case a.GLITCH:return{intensity:d(.1,.3),sliceCount:m(3,10),rgbShift:d(.005,.02),angle:m(0,15),seed:m(0,1e3),blockSize:d(.03,.1),colorShift:T()};case a.CRT:return{curvature:d(.05,.2),scanlineIntensity:d(.1,.3),scanlineCount:m(300,500),vignetteIntensity:d(.1,.3),brightness:d(1,1.15),rgbOffset:d(.001,.003),flickerIntensity:d(.01,.03),staticNoise:d(.01,.05)};case a.DUOTONE:{const ye=A([{shadow:"#1a1a2e",highlight:"#eeeeff"},{shadow:"#2d132c",highlight:"#ffeef4"},{shadow:"#1a2639",highlight:"#f0f4ff"},{shadow:"#2c3e50",highlight:"#ecf0f1"},{shadow:"#1e3d59",highlight:"#f5f0e1"},{shadow:"#3d1a1a",highlight:"#fff5f5"}]);return{shadowColor:ye.shadow,highlightColor:ye.highlight,contrast:d(.95,1.05),intensity:d(.6,.8)}}case a.KUWAHARA:return{radius:m(2,4),sharpness:d(.4,.7)};case a.BARREL:return{amount:d(.05,.2),centerX:.5,centerY:.5,zoom:d(.95,1.05)};case a.RIPPLE:return{amplitude:d(.005,.02),wavelength:d(30,60),speed:d(.5,1.5),centerX:.5,centerY:.5,damping:d(.3,.6)};case a.LIGHT_LEAK:return{color1:w(),color2:w(),position:d(.2,.4),angle:m(0,360),size:d(.4,.6),intensity:d(.2,.4),softness:d(.5,.8),blendMode:"screen"};case a.BLOOM:return{radius:m(4,10),intensity:d(.3,.6),threshold:d(.5,.7),softThreshold:d(.4,.6),blendMode:"screen"};case a.RADIAL_BLUR:return{intensity:d(.05,.15),centerX:.5,centerY:.5,samples:m(16,32),zoom:!1};case a.MOSAIC:return{cellSize:m(15,30),irregularity:d(.3,.6),edgeThickness:d(.01,.03),edgeColor:"#000000",colorVariation:d(.05,.1)};case a.TILT_SHIFT:return{focusPosition:.5,focusWidth:d(.2,.4),blurRadius:m(4,10),angle:0,gradientSmooth:d(.3,.5)};case a.EXPOSURE:return{exposure:d(-.25,.25),highlights:d(-.15,.15),shadows:d(-.15,.15),blacks:d(-.1,.1),whites:d(-.1,.1)};case a.VIBRANCE:return{vibrance:d(-.15,.3),saturation:d(-.15,.15)};default:return{}}},xe=(()=>{const X=Math.random();return X<.3?2:X<.55?3:X<.75?4:X<.87?5:X<.94?6:X<.98?7:8})(),Ve=[...Y].sort(()=>Math.random()-.5).slice(0,xe).map(X=>{const he=Be(X);return{...he,params:{...he.params,...Q(X)}}});R(Ve),D(Math.floor(Math.random()*1e5)),W.create({title:`Applied ${xe} random effects`,type:"success",duration:2e3})},[R,D]),F=x.useCallback(()=>{if(l.length===0){W.create({title:"No effects to randomize",type:"info",duration:2e3});return}const d=(G,xe)=>Math.random()*(xe-G)+G,m=(G,xe)=>Math.floor(d(G,xe+1)),T=()=>Math.random()>.5,A=G=>G[Math.floor(Math.random()*G.length)],w=()=>"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"),Y=G=>{switch(G){case a.NOISE:return{intensity:d(.05,.4),scale:d(.5,2),monochrome:T(),blendMode:A(["overlay","soft-light","multiply","screen"])};case a.DITHER:return{method:A(["bayer2x2","bayer4x4","bayer8x8"]),levels:m(2,8),threshold:d(.3,.7),scale:d(.5,2)};case a.HALFTONE:return{gridSize:m(4,16),dotScale:d(.5,1.5),angle:m(0,90),shape:A(["circle","square","diamond","line","ellipse","cross","ring"]),softness:d(.2,.8),contrast:d(-.3,.3),invert:T(),colorMode:A(["original","monochrome","duotone","cmyk"]),mixOriginal:d(0,.3)};case a.DOT_DITHER:return{scale:m(1,4),threshold:d(.3,.7),animated:T(),animationSpeed:d(.5,2),invert:T()};case a.CHROMATIC:return{intensity:d(.002,.02),angle:m(0,360),radial:T()};case a.VIGNETTE:return{intensity:d(.2,.8),size:d(.3,.7),softness:d(.3,.8),color:T()?"#000000":w()};case a.SCANLINES:return{intensity:d(.1,.5),count:m(100,400),speed:d(0,2)};case a.PIXELATE:return{size:m(2,16)};case a.BLUR:return{radius:d(1,8),quality:A(["low","medium","high"])};case a.DISTORTION:return{intensity:d(.01,.1),scale:d(1,10),speed:d(.5,3)};case a.POSTERIZE:return{levels:m(2,8)};case a.EDGE:return{intensity:d(.5,2),threshold:d(.05,.3),invert:T(),colorize:T()};case a.GRAIN:return{intensity:d(.1,.5),size:d(1,3),speed:d(.5,2)};case a.COLOR_GRADE:return{temperature:d(-.5,.5),tint:d(-.3,.3),saturation:d(.5,1.5),contrast:d(.8,1.3),brightness:d(.9,1.1)};case a.GLITCH:return{intensity:d(.02,.15),speed:d(.5,3),blockSize:d(.02,.1)};case a.CRT:return{curvature:d(.5,3),scanlineIntensity:d(.1,.4),vignetteIntensity:d(.2,.5),brightness:d(1,1.3),flickerIntensity:d(0,.05)};case a.DUOTONE:return{shadowColor:w(),highlightColor:w(),contrast:d(.8,1.2)};case a.KUWAHARA:return{radius:m(2,6)};case a.RIPPLE:return{amplitude:d(.005,.03),frequency:d(5,20),speed:d(.5,3),centerX:d(.3,.7),centerY:d(.3,.7)};case a.LIGHT_LEAK:return{intensity:d(.2,.6),color:w(),position:d(0,1),size:d(.3,.8)};case a.BLOOM:return{intensity:d(.3,1),threshold:d(.5,.9),radius:d(2,8)};case a.RADIAL_BLUR:return{intensity:d(.01,.05),centerX:d(.3,.7),centerY:d(.3,.7)};case a.TILT_SHIFT:return{blur:d(2,8),position:d(.3,.7),size:d(.1,.3),angle:m(0,180)};case a.EXPOSURE:return{exposure:d(-1,1),gamma:d(.8,1.2)};case a.VIBRANCE:return{vibrance:d(0,1),saturation:d(.8,1.2)};default:return{}}},Q=l.map(G=>({...G,params:{...G.params,...Y(G.type)}}));R(Q),W.create({title:`Randomized ${l.length} effect parameters`,type:"success",duration:2e3})},[l,R]),ie=x.useRef(null),_e=x.useCallback(()=>{const d={name:"Custom Preset",version:1,effects:l.map(w=>({type:w.type,enabled:w.enabled,params:w.params}))},m=new Blob([JSON.stringify(d,null,2)],{type:"application/json"}),T=URL.createObjectURL(m),A=document.createElement("a");A.href=T,A.download="texture-lab-preset.json",A.click(),URL.revokeObjectURL(T),W.create({title:"Preset saved",type:"success",duration:2e3})},[l]),E=x.useCallback(d=>{var A;const m=(A=d.target.files)==null?void 0:A[0];if(!m)return;const T=new FileReader;T.onload=w=>{try{const Y=JSON.parse(w.target.result);if(!Y.effects||!Array.isArray(Y.effects))throw new Error("Invalid preset format");const Q=Y.effects.map(G=>({...Be(G.type),enabled:G.enabled!==!1,params:{...G.params}}));R(Q),W.create({title:`Loaded "${Y.name||"Custom"}" preset`,type:"success",duration:2e3})}catch{W.create({title:"Failed to load preset",description:"Invalid preset file format",type:"error",duration:3e3})}},T.readAsText(m),d.target.value=""},[R]);return n.jsxs(p,{direction:"column",h:"100%",minH:0,children:[ee&&n.jsx(j,{mb:4,flexShrink:0,children:ee}),n.jsxs(j,{flex:1,overflowY:"auto",minH:0,css:{"&::-webkit-scrollbar":{display:"none"},scrollbarWidth:"none"},children:[n.jsx(Pr,{children:"Media Source"}),n.jsxs(p,{direction:"column",gap:2,mb:4,children:[n.jsx("input",{type:"file",ref:pe,onChange:y,accept:"image/png,image/jpeg,image/webp,video/mp4,video/webm,video/ogg",style:{display:"none"}}),n.jsxs(p,{gap:2,children:[n.jsx(Ce,{icon:Ze,label:"Upload",onClick:()=>{var d;return(d=pe.current)==null?void 0:d.click()},flex:1,disabled:f}),n.jsx(Ce,{icon:Mt,label:"Sample",onClick:()=>v("https://images.unsplash.com/photo-1706097692944-9295f1889b63?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","url"),flex:1,disabled:f}),(r||e)&&!f&&n.jsx(Ce,{icon:Pt,label:"Clear",onClick:S})]}),n.jsxs(p,{gap:2,children:[n.jsx(it,{placeholder:"Paste image or video URL...",value:V,onChange:d=>fe(d.target.value),size:"sm",bg:"#170D27",border:"1px solid #271E37",borderRadius:"6px",color:"#fff",fontSize:"12px",flex:1,_placeholder:{color:"#B19EEF"},_focus:{borderColor:"#5227FF",boxShadow:"none"},onKeyDown:d=>d.key==="Enter"&&!f&&q(),disabled:f}),n.jsx(Ce,{icon:Bo,onClick:q,disabled:!V.trim()||re||f})]}),s&&n.jsx(j,{bg:"rgba(255,100,100,0.1)",p:2,borderRadius:"6px",border:"1px solid rgba(255,100,100,0.3)",children:n.jsx(k,{fontSize:"11px",color:"#ff6b6b",children:"⚠️ CORS blocked. Export/copy disabled. Re-upload the media locally to enable."})})]}),n.jsx(gn,{onLoadPreset:C}),n.jsxs(p,{align:"center",justify:"space-between",mb:3,children:[n.jsxs(k,{fontSize:"11px",color:"#988BC7",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px",children:["Effects (",l.length,")"]}),n.jsxs(p,{gap:1,children:[n.jsx(Ce,{icon:bo,onClick:L,title:"Randomize effects"}),n.jsx(Ce,{icon:or,onClick:F,title:"Randomize parameters"})]})]}),n.jsx(hn,{onAddEffect:le}),n.jsxs(p,{direction:"column",gap:2,mb:4,children:[l.map(d=>n.jsx(fn,{effect:d,onUpdate:Te,onDelete:ve,onToggle:H,onDuplicate:te,isDragging:me===d.id,onDragStart:()=>ke(d.id),onDragEnd:Ae,onDragOver:m=>De(m,d.id),isExpanded:B===d.id,onExpandToggle:()=>ne(B===d.id?null:d.id)},d.id)),l.length===0&&n.jsx(j,{p:4,bg:"#170D27",border:"1px dashed #271E37",borderRadius:"8px",textAlign:"center",children:n.jsx(k,{fontSize:"12px",color:"#988BC7",children:"No effects added. Click “Add Effect” to get started."})})]})]}),n.jsxs(j,{pt:4,children:[n.jsxs(p,{gap:2,mb:3,children:[n.jsxs(p,{as:"button",flex:1,align:"center",justify:"center",gap:2,bg:"#170D27",border:"1px solid #271E37",borderRadius:"8px",py:2,cursor:l.length===0?"not-allowed":"pointer",opacity:l.length===0?.5:1,onClick:l.length===0?void 0:_e,transition:"all 0.15s",_hover:{borderColor:l.length===0?"#271E37":"#5227FF"},children:[n.jsx(O,{as:Ro,boxSize:3.5,color:"#988BC7"}),n.jsx(k,{fontSize:"12px",color:"#988BC7",fontWeight:500,children:"Save Preset"})]}),n.jsxs(p,{as:"button",flex:1,align:"center",justify:"center",gap:2,bg:"#170D27",border:"1px solid #271E37",borderRadius:"8px",py:2,cursor:"pointer",onClick:()=>{var d;return(d=ie.current)==null?void 0:d.click()},transition:"all 0.15s",_hover:{borderColor:"#5227FF"},children:[n.jsx(O,{as:So,boxSize:3.5,color:"#988BC7"}),n.jsx(k,{fontSize:"12px",color:"#988BC7",fontWeight:500,children:"Load Preset"})]}),n.jsx("input",{type:"file",ref:ie,onChange:E,accept:"application/json",style:{display:"none"}})]}),n.jsx(pn,{mediaType:t,exportFormat:i,exportQuality:o,exportScale:c,previewQuality:u,onExportFormatChange:$,onExportQualityChange:Z,onExportScaleChange:N,onPreviewQualityChange:P}),n.jsxs(p,{gap:2,mb:2,mt:3,children:[t!=="video"&&n.jsxs(p,{as:"button",flex:1,align:"center",justify:"center",gap:2,bg:"#170D27",border:"1px solid #271E37",borderRadius:"8px",py:2,cursor:s||!r?"not-allowed":"pointer",opacity:s||!r?.5:1,onClick:s||!r?void 0:J,transition:"all 0.15s",_hover:{borderColor:s||!r?"#271E37":"#5227FF"},children:[n.jsx(O,{as:st,boxSize:4,color:"#988BC7"}),n.jsx(k,{fontSize:"12px",color:"#988BC7",fontWeight:500,children:"Copy"})]}),n.jsxs(p,{as:"button",flex:1,align:"center",justify:"center",gap:2,bg:"#170D27",border:"1px solid #271E37",borderRadius:"8px",py:2,cursor:f?"not-allowed":"pointer",opacity:f?.5:1,onClick:f?void 0:K,transition:"all 0.15s",_hover:{borderColor:f?"#271E37":"#5227FF"},children:[n.jsx(O,{as:Yt,boxSize:4,color:"#988BC7"}),n.jsx(k,{fontSize:"12px",color:"#988BC7",fontWeight:500,children:"Reset"})]})]}),n.jsxs(p,{as:"button",align:"center",justify:"center",bg:"#5227FF",borderRadius:"8px",h:"44px",w:"100%",cursor:s||!r&&!e||f?"not-allowed":"pointer",opacity:s||!r&&!e?.5:1,onClick:s||!r&&!e||f?void 0:se,transition:"all 0.15s",_hover:{bg:s||!r&&!e||f?"#5227FF":"#6B3FFF"},overflow:"hidden",position:"relative",children:[n.jsx(j,{position:"absolute",left:"0",top:"0",bottom:"0",width:f?`${Math.max(0,Math.min(100,g))}%`:"0%",bg:"rgba(255, 255, 255, 0.2)",transition:"width 0.15s linear",pointerEvents:"none",zIndex:0}),n.jsxs(p,{align:"center",justify:f?"space-between":"center",w:"100%",px:4,position:"relative",zIndex:1,children:[n.jsxs(p,{align:"center",gap:2,children:[n.jsx(j,{as:"span",css:f?{animation:"spin 1s linear infinite","@keyframes spin":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}}:void 0,children:n.jsx(O,{as:$t,boxSize:4,color:"#fff"})}),n.jsx(k,{fontSize:"14px",color:"#fff",fontWeight:600,children:f?_||"Exporting...":t==="video"?"Export Video":`Export ${i.toUpperCase()}`})]}),n.jsxs(k,{fontSize:"14px",color:"#fff",fontWeight:600,fontFamily:"mono",opacity:f?1:0,w:f?"auto":0,overflow:"hidden",transition:"opacity 0.15s",children:[Math.round(g),"%"]})]})]})]})]})}const rt=r=>{if(!r||isNaN(r))return"0:00";const e=Math.floor(r/60),t=Math.floor(r%60);return`${e}:${t.toString().padStart(2,"0")}`};function xn({image:r,video:e,mediaType:t,canvasRef:s,viewMode:l,onViewModeChange:u,onMediaDrop:i,isPlaying:o,currentTime:c,duration:f,onPlayPause:g,onSeek:_,isExporting:v}){var Ae,De;const S=x.useRef(null),R=x.useRef(null),[D,P]=x.useState(1),[$,Z]=x.useState({x:0,y:0}),[N,J]=x.useState(!1),[se,K]=x.useState({x:0,y:0}),[ee,pe]=x.useState(.5),[V,fe]=x.useState(!1),[re,b]=x.useState({width:0,height:0}),[y,q]=x.useState(!1),[B,ne]=x.useState(!1);x.useEffect(()=>{if(!S.current)return;const C=new ResizeObserver(L=>{const{width:F,height:ie}=L[0].contentRect;b({width:F,height:ie})});return C.observe(S.current),()=>C.disconnect()},[]),x.useEffect(()=>{const C=t==="video"?e:r;if(!C||!re.width)return;const L=C.width||C.videoWidth,F=C.height||C.videoHeight,ie=(re.width-40)/L,_e=(re.height-40)/F,E=Math.min(ie,_e,1);P(E),Z({x:0,y:0})},[r,e,t,re]);const le=x.useCallback(C=>{C.preventDefault();const L=C.deltaY>0?.9:1.1;P(F=>Math.min(Math.max(F*L,.1),10))},[]),Te=x.useCallback(C=>{(C.button===1||C.button===0&&B)&&(C.preventDefault(),J(!0),K({x:C.clientX,y:C.clientY}))},[B]),ve=x.useCallback(C=>{if(N&&(Z(L=>({x:L.x+(C.clientX-se.x),y:L.y+(C.clientY-se.y)})),K({x:C.clientX,y:C.clientY})),V&&R.current){const L=R.current.getBoundingClientRect(),F=(C.clientX-L.left)/L.width;pe(Math.max(.05,Math.min(.95,F)))}},[N,V,se]),H=x.useCallback(()=>{J(!1),fe(!1)},[]);x.useEffect(()=>{const C=F=>{var ie;F.code==="Space"&&!F.repeat&&((ie=document.activeElement)==null?void 0:ie.tagName)!=="INPUT"&&(F.preventDefault(),ne(!0))},L=F=>{F.code==="Space"&&(ne(!1),J(!1))};return window.addEventListener("keydown",C),window.addEventListener("keyup",L),()=>{window.removeEventListener("keydown",C),window.removeEventListener("keyup",L)}},[]),x.useEffect(()=>(window.addEventListener("mousemove",ve),window.addEventListener("mouseup",H),()=>{window.removeEventListener("mousemove",ve),window.removeEventListener("mouseup",H)}),[ve,H]);const te=x.useCallback(()=>{const C=t==="video"?e:r;if(!C||!re.width)return;const L=C.width||C.videoWidth,F=C.height||C.videoHeight,ie=(re.width-40)/L,_e=(re.height-40)/F;P(Math.min(ie,_e,1)),Z({x:0,y:0})},[r,e,t,re]),me=x.useCallback(C=>{C.preventDefault(),C.stopPropagation(),!v&&C.dataTransfer.types.includes("Files")&&q(!0)},[v]),Se=x.useCallback(C=>{C.preventDefault(),C.stopPropagation(),q(!1)},[]),ke=x.useCallback(C=>{var F;if(C.preventDefault(),C.stopPropagation(),q(!1),v)return;const L=(F=C.dataTransfer.files)==null?void 0:F[0];L&&(L.type.startsWith("image/")||L.type.startsWith("video/"))&&i&&i(L)},[i,v]);return n.jsxs(j,{ref:S,position:"relative",w:"100%",h:"100%",bg:"#060010",overflow:"hidden",cursor:N?"grabbing":B?"grab":"default",onWheel:le,onMouseDown:Te,onDragOver:me,onDragLeave:Se,onDrop:ke,children:[y&&n.jsx(p,{position:"absolute",top:0,left:0,right:0,bottom:0,bg:"rgba(82, 39, 255, 0.15)",zIndex:100,align:"center",justify:"center",pointerEvents:"none",children:n.jsx(k,{fontSize:"lg",fontWeight:600,color:"#5227FF",children:"Drop image or video here"})}),n.jsx(j,{position:"absolute",top:0,left:0,right:0,bottom:0,opacity:.25,pointerEvents:"none",style:{backgroundImage:`
            linear-gradient(to right, #3d3654 1px, transparent 1px),
            linear-gradient(to bottom, #3d3654 1px, transparent 1px)
          `,backgroundSize:"20px 20px",backgroundPosition:"0 0, 0 0",maskImage:`
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,WebkitMaskImage:`
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,maskComposite:"intersect",WebkitMaskComposite:"source-in"}}),n.jsxs(p,{ref:R,position:"absolute",top:"50%",left:"50%",transform:`translate(calc(-50% + ${$.x}px), calc(-50% + ${$.y}px)) scale(${D})`,transformOrigin:"center",transition:N?"none":"transform 0.1s ease-out",style:{background:"none"},display:r||e?"flex":"none",children:[n.jsx("canvas",{ref:s,style:{display:"block",borderRadius:"4px"}}),l==="split"&&r&&n.jsxs(j,{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden",borderRadius:"4px",pointerEvents:"none",style:{background:"none"},children:[n.jsx(j,{position:"absolute",top:0,left:0,h:"100%",w:"100%",style:{background:"none",clipPath:`inset(0 ${(1-ee)*100}% 0 0)`},children:n.jsx("img",{src:r.src,alt:"Original",draggable:!1,onDragStart:C=>C.preventDefault(),style:{width:((Ae=s.current)==null?void 0:Ae.width)||r.width,height:((De=s.current)==null?void 0:De.height)||r.height,display:"block",background:"none",userSelect:"none",pointerEvents:"none"}})}),n.jsx(j,{position:"absolute",top:0,bottom:0,left:`${ee*100}%`,transform:"translateX(-50%)",w:"2px",bg:"white",boxShadow:"0 0 8px rgba(0,0,0,0.5)",pointerEvents:"auto",cursor:"ew-resize",onMouseDown:C=>{C.stopPropagation(),fe(!0)},zIndex:10}),n.jsx(p,{position:"absolute",top:"50%",left:`${ee*100}%`,transform:"translate(-50%, -50%)",w:"32px",h:"32px",bg:"white",borderRadius:"50%",align:"center",justify:"center",cursor:"ew-resize",pointerEvents:"auto",boxShadow:"0 2px 12px rgba(0,0,0,0.5)",zIndex:11,onMouseDown:C=>{C.stopPropagation(),fe(!0)},_hover:{bg:"#f0f0f0"},transition:"background 0.15s",children:n.jsx(O,{as:mt,boxSize:4,color:"#000"})}),n.jsx(j,{position:"absolute",top:2,left:2,bg:"rgba(0,0,0,0.7)",px:2,py:.5,borderRadius:"4px",pointerEvents:"none",children:n.jsx(k,{fontSize:"10px",color:"#fff",fontWeight:600,children:"ORIGINAL"})}),n.jsx(j,{position:"absolute",top:2,right:2,bg:"rgba(82, 39, 255, 0.8)",px:2,py:.5,borderRadius:"4px",pointerEvents:"none",children:n.jsx(k,{fontSize:"10px",color:"#fff",fontWeight:600,children:"EFFECT"})})]}),l==="before-after"&&r&&n.jsx(j,{position:"absolute",top:0,left:0,right:0,bottom:0,pointerEvents:"none",children:n.jsx("img",{src:r.src,alt:"Original",style:{width:"100%",height:"100%",objectFit:"cover",opacity:0,transition:"opacity 0.2s"},className:"before-image"})})]}),!r&&!e&&n.jsxs(p,{position:"absolute",top:0,left:0,right:0,bottom:0,align:"center",justify:"center",direction:"column",gap:1,children:[n.jsx(j,{w:"60px",h:"60px",borderRadius:"16px",display:"flex",alignItems:"center",justifyContent:"center",children:n.jsx(O,{as:Ze,boxSize:8,color:"#392e4e"})}),n.jsxs(k,{fontSize:"14px",color:"#988BC7",textAlign:"center",children:["Upload an image/video",n.jsx("br",{}),"to get started"]})]}),n.jsxs(p,{position:"absolute",bottom:4,left:"50%",transform:"translateX(-50%)",gap:1,bg:"rgba(13, 7, 22, 0.9)",borderRadius:"8px",border:"1px solid #271E37",p:1,align:"center",children:[t==="video"&&e&&n.jsxs(n.Fragment,{children:[n.jsx(p,{as:"button",align:"center",justify:"center",w:7,h:7,borderRadius:"4px",cursor:v?"not-allowed":"pointer",bg:"rgba(82, 39, 255, 0.2)",onClick:v?void 0:g,transition:"all 0.15s",_hover:{bg:v?"rgba(82, 39, 255, 0.2)":"rgba(82, 39, 255, 0.4)"},opacity:v?.5:1,children:n.jsx(O,{as:o?Ko:Qo,boxSize:4,color:"#B19EEF"})}),n.jsxs(p,{align:"center",gap:2,px:2,minW:"180px",opacity:v?.5:1,children:[n.jsx(k,{fontSize:"10px",color:"#988BC7",fontFamily:"mono",minW:"32px",children:rt(c)}),n.jsx(lt,{value:[c],onValueChange:v?void 0:({value:C})=>_(C[0]),min:0,max:f||1,step:.1,flex:1,disabled:v,children:n.jsxs(ct,{css:{cursor:v?"not-allowed":"pointer"},children:[n.jsx(ut,{bg:"#271E37",h:"4px",borderRadius:"2px",children:n.jsx(dt,{bg:"#5227FF"})}),n.jsx(ft,{index:0,boxSize:2.5,bg:"#fff",borderRadius:"full",css:{display:v?"none":"block"}})]})}),n.jsx(k,{fontSize:"10px",color:"#988BC7",fontFamily:"mono",minW:"32px",children:rt(f)})]}),n.jsx(j,{w:"1px",h:5,bg:"#271E37",mx:1})]}),n.jsx(Le,{icon:Tr,onClick:()=>P(C=>Math.max(C*.8,.1))}),n.jsx(p,{align:"center",justify:"center",px:2,minW:"50px",children:n.jsxs(k,{fontSize:"11px",color:"#988BC7",fontFamily:"mono",children:[Math.round(D*100),"%"]})}),n.jsx(Le,{icon:Cr,onClick:()=>P(C=>Math.min(C*1.2,10))}),n.jsx(j,{w:"1px",h:5,bg:"#271E37",mx:1}),n.jsx(Le,{icon:ht,onClick:te}),t!=="video"&&n.jsxs(n.Fragment,{children:[n.jsx(j,{w:"1px",h:5,bg:"#271E37",mx:1}),n.jsx(Le,{icon:at,isActive:l==="preview",onClick:()=>u("preview")}),n.jsx(Le,{icon:sr,isActive:l==="split",onClick:()=>u("split")})]})]}),n.jsx(k,{position:"absolute",bottom:4,right:4,fontSize:"10px",color:"#392e4e",children:"Scroll to zoom • Space + Drag to pan"})]})}const Le=({icon:r,onClick:e,isActive:t})=>n.jsx(p,{as:"button",align:"center",justify:"center",w:7,h:7,borderRadius:"4px",cursor:"pointer",bg:t?"rgba(82, 39, 255, 0.2)":"transparent",onClick:e,transition:"all 0.15s",_hover:{bg:t?"rgba(82, 39, 255, 0.3)":"rgba(255,255,255,0.1)"},children:n.jsx(O,{as:r,boxSize:4,color:t?"#B19EEF":"#988BC7"})}),M=`
  attribute vec2 a_position;
  attribute vec2 a_texCoord;
  uniform float u_flipY;
  varying vec2 v_texCoord;
  
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    // When u_flipY is -1.0, we flip the texture Y coordinate
    // This corrects for the difference between image coordinates (top-left origin)
    // and WebGL coordinates (bottom-left origin)
    v_texCoord = vec2(a_texCoord.x, u_flipY < 0.0 ? 1.0 - a_texCoord.y : a_texCoord.y);
  }
`,bn=`
  precision highp float;
  
  uniform sampler2D u_image;
  varying vec2 v_texCoord;
  
  void main() {
    gl_FragColor = texture2D(u_image, v_texCoord);
  }
`,vn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_intensity;
  uniform float u_scale;
  uniform float u_seed;
  uniform bool u_monochrome;
  uniform int u_blendMode;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  // High-quality hash function for noise generation
  float hash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  
  // 2D noise function with smooth interpolation
  float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    
    // Smoothstep for smoother interpolation
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    // Four corners
    float a = hash12(i);
    float b = hash12(i + vec2(1.0, 0.0));
    float c = hash12(i + vec2(0.0, 1.0));
    float d = hash12(i + vec2(1.0, 1.0));
    
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }
  
  // Multi-octave noise for more natural film grain texture
  float filmGrain(vec2 uv, float seed) {
    float grain = 0.0;
    float amplitude = 1.0;
    float frequency = 1.0;
    
    for (int i = 0; i < 3; i++) {
      grain += amplitude * noise2D(uv * frequency + seed);
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    
    return grain / 1.75; // Normalize to 0-1 range
  }
  
  // Blend modes
  vec3 blendOverlay(vec3 base, vec3 blend) {
    return mix(
      2.0 * base * blend,
      1.0 - 2.0 * (1.0 - base) * (1.0 - blend),
      step(0.5, base)
    );
  }
  
  vec3 blendSoftLight(vec3 base, vec3 blend) {
    return mix(
      base - (1.0 - 2.0 * blend) * base * (1.0 - base),
      base + (2.0 * blend - 1.0) * (sqrt(base) - base),
      step(0.5, blend)
    );
  }
  
  vec3 blendMultiply(vec3 base, vec3 blend) {
    return base * blend;
  }
  
  vec3 blendScreen(vec3 base, vec3 blend) {
    return 1.0 - (1.0 - base) * (1.0 - blend);
  }
  
  vec3 applyBlend(vec3 base, vec3 blend, int mode) {
    if (mode == 0) return blendOverlay(base, blend);
    if (mode == 1) return blendSoftLight(base, blend);
    if (mode == 2) return blendMultiply(base, blend);
    if (mode == 3) return blendScreen(base, blend);
    return base;
  }
  
  void main() {
    vec4 color = texture2D(u_image, v_texCoord);
    
    // Calculate grain coordinates with proper scaling
    vec2 grainCoord = v_texCoord * u_resolution / u_scale;
    
    vec3 grain;
    if (u_monochrome) {
      float g = filmGrain(grainCoord, u_seed);
      grain = vec3(g);
    } else {
      grain = vec3(
        filmGrain(grainCoord, u_seed),
        filmGrain(grainCoord, u_seed + 100.0),
        filmGrain(grainCoord, u_seed + 200.0)
      );
    }
    
    // Apply blend mode
    vec3 blended = applyBlend(color.rgb, grain, u_blendMode);
    
    // Mix based on intensity
    color.rgb = mix(color.rgb, blended, u_intensity);
    
    gl_FragColor = color;
  }
`,_n=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_intensity;
  uniform float u_angle;
  uniform bool u_radial;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  #define PI 3.14159265359
  
  void main() {
    vec2 center = vec2(0.5);
    vec2 dir;
    
    if (u_radial) {
      // Radial chromatic aberration
      dir = normalize(v_texCoord - center) * u_intensity;
    } else {
      // Directional chromatic aberration
      float angle = u_angle * PI / 180.0;
      dir = vec2(cos(angle), sin(angle)) * u_intensity;
    }
    
    float r = texture2D(u_image, v_texCoord + dir).r;
    float g = texture2D(u_image, v_texCoord).g;
    float b = texture2D(u_image, v_texCoord - dir).b;
    float a = texture2D(u_image, v_texCoord).a;
    
    gl_FragColor = vec4(r, g, b, a);
  }
`,yn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_intensity;
  uniform float u_size;
  uniform float u_softness;
  uniform vec3 u_color;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  void main() {
    vec4 color = texture2D(u_image, v_texCoord);
    
    vec2 center = vec2(0.5);
    float dist = distance(v_texCoord, center);
    
    // Calculate vignette
    float radius = u_size;
    float soft = u_softness * 0.5 + 0.001;
    float vignette = smoothstep(radius, radius - soft, dist);
    
    // Apply vignette
    color.rgb = mix(u_color, color.rgb, mix(1.0, vignette, u_intensity));
    
    gl_FragColor = color;
  }
`,En=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_spacing;
  uniform float u_thickness;
  uniform float u_opacity;
  uniform bool u_horizontal;
  uniform float u_offset;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  void main() {
    vec4 color = texture2D(u_image, v_texCoord);
    
    vec2 pos = v_texCoord * u_resolution;
    float coord = u_horizontal ? pos.y : pos.x;
    coord += u_offset;
    
    float line = mod(coord, u_spacing);
    float scanline = step(u_thickness, line);
    
    color.rgb *= mix(1.0 - u_opacity, 1.0, scanline);
    
    gl_FragColor = color;
  }
`,Cn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_size;
  uniform bool u_maintainAspect;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  void main() {
    vec2 pixelSize;
    
    if (u_maintainAspect) {
      float aspect = u_resolution.x / u_resolution.y;
      pixelSize = vec2(u_size / u_resolution.x, u_size / u_resolution.y);
    } else {
      pixelSize = vec2(u_size) / u_resolution;
    }
    
    vec2 coord = floor(v_texCoord / pixelSize + 0.5) * pixelSize;
    
    gl_FragColor = texture2D(u_image, coord);
  }
`,Rn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_radius;
  uniform int u_type; // 0 = gaussian, 1 = radial, 2 = motion
  uniform float u_angle;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  #define PI 3.14159265359
  
  // Simple box blur as approximation for real-time
  vec4 gaussianBlur(vec2 uv, float radius) {
    vec4 color = vec4(0.0);
    vec2 texelSize = 1.0 / u_resolution;
    
    float total = 0.0;
    int r = int(radius);
    
    for (int x = -5; x <= 5; x++) {
      for (int y = -5; y <= 5; y++) {
        if (x*x + y*y > r*r) continue;
        float weight = 1.0 - float(x*x + y*y) / float(r*r + 1);
        vec2 offset = vec2(float(x), float(y)) * texelSize * radius;
        color += texture2D(u_image, uv + offset) * weight;
        total += weight;
      }
    }
    
    return color / total;
  }
  
  vec4 radialBlur(vec2 uv, float radius) {
    vec4 color = vec4(0.0);
    vec2 center = vec2(0.5);
    vec2 dir = uv - center;
    float dist = length(dir);
    
    float samples = 10.0;
    for (float i = 0.0; i < 10.0; i++) {
      float t = i / samples * radius * 0.01;
      color += texture2D(u_image, uv - dir * t);
    }
    
    return color / samples;
  }
  
  vec4 motionBlur(vec2 uv, float radius, float angle) {
    vec4 color = vec4(0.0);
    vec2 dir = vec2(cos(angle * PI / 180.0), sin(angle * PI / 180.0));
    vec2 texelSize = 1.0 / u_resolution;
    
    float samples = 10.0;
    for (float i = -5.0; i <= 5.0; i++) {
      vec2 offset = dir * texelSize * i * radius;
      color += texture2D(u_image, uv + offset);
    }
    
    return color / 11.0;
  }
  
  void main() {
    if (u_type == 0) {
      gl_FragColor = gaussianBlur(v_texCoord, u_radius);
    } else if (u_type == 1) {
      gl_FragColor = radialBlur(v_texCoord, u_radius);
    } else {
      gl_FragColor = motionBlur(v_texCoord, u_radius, u_angle);
    }
  }
`,Tn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform int u_type; // 0 = wave, 1 = swirl, 2 = bulge
  uniform float u_amplitude;
  uniform float u_frequency;
  uniform vec2 u_center;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  #define PI 3.14159265359
  
  vec2 waveDistortion(vec2 uv) {
    vec2 offset;
    offset.x = sin(uv.y * u_frequency * PI * 2.0) * u_amplitude / u_resolution.x;
    offset.y = sin(uv.x * u_frequency * PI * 2.0) * u_amplitude / u_resolution.y;
    return uv + offset;
  }
  
  vec2 swirlDistortion(vec2 uv) {
    vec2 centered = uv - u_center;
    float dist = length(centered);
    float angle = atan(centered.y, centered.x);
    
    float swirl = u_amplitude * 0.1 * (1.0 - dist);
    swirl = max(0.0, swirl);
    angle += swirl;
    
    return u_center + vec2(cos(angle), sin(angle)) * dist;
  }
  
  vec2 bulgeDistortion(vec2 uv) {
    vec2 centered = uv - u_center;
    float dist = length(centered);
    float radius = 0.5;
    
    if (dist < radius) {
      float percent = dist / radius;
      float bulge = sin(percent * PI * 0.5);
      float amount = 1.0 + u_amplitude * 0.01 * (1.0 - bulge);
      centered *= amount;
    }
    
    return u_center + centered;
  }
  
  void main() {
    vec2 distorted;
    
    if (u_type == 0) {
      distorted = waveDistortion(v_texCoord);
    } else if (u_type == 1) {
      distorted = swirlDistortion(v_texCoord);
    } else {
      distorted = bulgeDistortion(v_texCoord);
    }
    
    // Clamp to valid texture coordinates
    distorted = clamp(distorted, 0.0, 1.0);
    
    gl_FragColor = texture2D(u_image, distorted);
  }
`,Sn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform int u_levels;
  uniform bool u_preserveHue;
  
  varying vec2 v_texCoord;
  
  vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
  }
  
  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }
  
  void main() {
    vec4 color = texture2D(u_image, v_texCoord);
    float lvl = float(u_levels);
    
    if (u_preserveHue) {
      vec3 hsv = rgb2hsv(color.rgb);
      hsv.z = floor(hsv.z * lvl + 0.5) / lvl;
      hsv.y = floor(hsv.y * lvl + 0.5) / lvl;
      color.rgb = hsv2rgb(hsv);
    } else {
      color.rgb = floor(color.rgb * lvl + 0.5) / lvl;
    }
    
    gl_FragColor = color;
  }
`,An=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_strength;
  uniform float u_threshold;
  uniform bool u_invert;
  uniform bool u_colorize;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  void main() {
    vec2 texel = 1.0 / u_resolution;
    vec4 color = texture2D(u_image, v_texCoord);
    
    float tl = dot(texture2D(u_image, v_texCoord + vec2(-1.0, -1.0) * texel).rgb, vec3(0.299, 0.587, 0.114));
    float t  = dot(texture2D(u_image, v_texCoord + vec2( 0.0, -1.0) * texel).rgb, vec3(0.299, 0.587, 0.114));
    float tr = dot(texture2D(u_image, v_texCoord + vec2( 1.0, -1.0) * texel).rgb, vec3(0.299, 0.587, 0.114));
    float l  = dot(texture2D(u_image, v_texCoord + vec2(-1.0,  0.0) * texel).rgb, vec3(0.299, 0.587, 0.114));
    float r  = dot(texture2D(u_image, v_texCoord + vec2( 1.0,  0.0) * texel).rgb, vec3(0.299, 0.587, 0.114));
    float bl = dot(texture2D(u_image, v_texCoord + vec2(-1.0,  1.0) * texel).rgb, vec3(0.299, 0.587, 0.114));
    float b  = dot(texture2D(u_image, v_texCoord + vec2( 0.0,  1.0) * texel).rgb, vec3(0.299, 0.587, 0.114));
    float br = dot(texture2D(u_image, v_texCoord + vec2( 1.0,  1.0) * texel).rgb, vec3(0.299, 0.587, 0.114));
    
    float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
    float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
    
    float edge = sqrt(gx*gx + gy*gy) * u_strength;
    edge = smoothstep(u_threshold, u_threshold + 0.1, edge);
    
    if (u_invert) edge = 1.0 - edge;
    
    vec3 result;
    if (u_colorize) {
      result = color.rgb * edge;
    } else {
      result = vec3(edge);
    }
    
    gl_FragColor = vec4(result, color.a);
  }
`,In=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_intensity;
  uniform float u_size;
  uniform float u_luminanceResponse;
  uniform bool u_colored;
  uniform float u_seed;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  
  float grain(vec2 uv, float seed) {
    return hash(uv + seed) * 2.0 - 1.0;
  }
  
  void main() {
    vec4 color = texture2D(u_image, v_texCoord);
    
    float luma = dot(color.rgb, vec3(0.299, 0.587, 0.114));
    
    float response = mix(1.0, 1.0 - luma, u_luminanceResponse);
    
    vec2 grainUV = v_texCoord * u_resolution / u_size;
    
    vec3 grainValue;
    if (u_colored) {
      grainValue = vec3(
        grain(grainUV, u_seed),
        grain(grainUV, u_seed + 100.0),
        grain(grainUV, u_seed + 200.0)
      );
    } else {
      float g = grain(grainUV, u_seed);
      grainValue = vec3(g);
    }
    
    color.rgb += grainValue * u_intensity * response;
    color.rgb = clamp(color.rgb, 0.0, 1.0);
    
    gl_FragColor = color;
  }
`,kn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_brightness;
  uniform float u_contrast;
  uniform float u_saturation;
  uniform float u_temperature;
  uniform float u_tint;
  uniform vec3 u_shadows;
  uniform vec3 u_highlights;
  uniform float u_shadowInfluence;
  uniform float u_highlightInfluence;
  
  varying vec2 v_texCoord;
  
  vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
  }
  
  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }
  
  void main() {
    vec4 color = texture2D(u_image, v_texCoord);
    
    color.rgb += u_brightness;
    
    color.rgb = (color.rgb - 0.5) * (1.0 + u_contrast) + 0.5;
    
    float luma = dot(color.rgb, vec3(0.299, 0.587, 0.114));
    color.rgb = mix(vec3(luma), color.rgb, 1.0 + u_saturation);
    
    color.r += u_temperature * 0.1;
    color.b -= u_temperature * 0.1;
    
    color.g += u_tint * 0.1;
    
    float shadowMask = 1.0 - smoothstep(0.0, 0.5, luma);
    float highlightMask = smoothstep(0.5, 1.0, luma);
    
    color.rgb = mix(color.rgb, color.rgb * u_shadows, shadowMask * u_shadowInfluence);
    color.rgb = mix(color.rgb, color.rgb * u_highlights, highlightMask * u_highlightInfluence);
    
    color.rgb = clamp(color.rgb, 0.0, 1.0);
    
    gl_FragColor = color;
  }
`,Dn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform int u_method;
  uniform int u_levels;
  uniform float u_threshold;
  uniform vec2 u_resolution;
  uniform float u_scale;
  
  varying vec2 v_texCoord;
  
  float bayer2(vec2 pos) {
    pos = floor(pos);
    float x = mod(pos.x, 2.0);
    float y = mod(pos.y, 2.0);
    return mod(x + y * 2.0, 4.0) / 4.0 + 1.0 / 8.0;
  }
  
  float bayer4(vec2 pos) {
    pos = floor(pos);
    return bayer2(pos * 0.5) * 0.25 + bayer2(pos);
  }
  
  float bayer8(vec2 pos) {
    pos = floor(pos);
    return bayer4(pos * 0.5) * 0.25 + bayer2(pos);
  }
  
  float getBayerThreshold(vec2 pos, int method) {
    if (method == 0) return bayer2(pos) - 0.5;
    if (method == 1) return bayer4(pos) - 0.5;
    return bayer8(pos) - 0.5;
  }
  
  vec3 quantize(vec3 color, int levels) {
    float lvl = float(levels - 1);
    return floor(color * lvl + 0.5) / lvl;
  }
  
  void main() {
    vec4 color = texture2D(u_image, v_texCoord);
    
    vec2 pixelPos = v_texCoord * u_resolution / u_scale;
    
    float threshold = getBayerThreshold(pixelPos, u_method);
    
    float spread = u_threshold / float(u_levels);
    vec3 dithered = color.rgb + threshold * spread;
    
    vec3 result = quantize(dithered, u_levels);
    
    gl_FragColor = vec4(clamp(result, 0.0, 1.0), color.a);
  }
`,jn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_gridSize;
  uniform float u_dotScale;
  uniform float u_angle;
  uniform int u_shape;
  uniform float u_softness;
  uniform float u_contrast;
  uniform bool u_invert;
  uniform int u_colorMode;
  uniform vec3 u_dotColor;
  uniform vec3 u_backgroundColor;
  uniform float u_mixOriginal;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  #define PI 3.14159265359
  
  #define SHAPE_CIRCLE 0
  #define SHAPE_SQUARE 1
  #define SHAPE_DIAMOND 2
  #define SHAPE_LINE 3
  #define SHAPE_ELLIPSE 4
  #define SHAPE_CROSS 5
  #define SHAPE_RING 6
  
  vec2 rotate2D(vec2 p, float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
  }
  
  // Shape distance functions (return 0 at center, 1 at edge)
  float sdCircle(vec2 p) {
    return length(p) * 2.0;
  }
  
  float sdSquare(vec2 p) {
    vec2 d = abs(p);
    return max(d.x, d.y) * 2.0;
  }
  
  float sdDiamond(vec2 p) {
    vec2 d = abs(p);
    return (d.x + d.y);
  }
  
  float sdLine(vec2 p) {
    return abs(p.y) * 2.0;
  }
  
  float sdEllipse(vec2 p) {
    return length(p * vec2(1.0, 1.6)) * 2.0;
  }
  
  float sdCross(vec2 p) {
    vec2 d = abs(p);
    return min(d.x, d.y) * 4.0;
  }
  
  float sdRing(vec2 p) {
    float d = length(p) * 2.0;
    return abs(d - 0.7) * 3.0;
  }
  
  float getShape(vec2 p, int shape) {
    if (shape == SHAPE_CIRCLE) return sdCircle(p);
    if (shape == SHAPE_SQUARE) return sdSquare(p);
    if (shape == SHAPE_DIAMOND) return sdDiamond(p);
    if (shape == SHAPE_LINE) return sdLine(p);
    if (shape == SHAPE_ELLIPSE) return sdEllipse(p);
    if (shape == SHAPE_CROSS) return sdCross(p);
    if (shape == SHAPE_RING) return sdRing(p);
    return sdCircle(p);
  }
  
  // CMYK conversion
  vec4 rgb2cmyk(vec3 rgb) {
    float k = 1.0 - max(max(rgb.r, rgb.g), rgb.b);
    float invK = 1.0 / (1.0 - k + 0.0001);
    float c = (1.0 - rgb.r - k) * invK;
    float m = (1.0 - rgb.g - k) * invK;
    float y = (1.0 - rgb.b - k) * invK;
    return vec4(c, m, y, k);
  }
  
  vec3 cmyk2rgb(vec4 cmyk) {
    float invK = 1.0 - cmyk.w;
    return vec3(
      (1.0 - cmyk.x) * invK,
      (1.0 - cmyk.y) * invK,
      (1.0 - cmyk.z) * invK
    );
  }
  
  float halftonePattern(vec2 pos, float intensity, float angle, int shape, float softness, float dotScale) {
    // Rotate the coordinate space
    vec2 rotated = rotate2D(pos, angle);
    
    // Get position within cell (-0.5 to 0.5)
    vec2 cell = fract(rotated) - 0.5;
    
    // Calculate shape distance
    float shapeDist = getShape(cell, shape);
    
    // The dot size is based on intensity - darker areas = bigger dots
    float dotSize = sqrt(intensity) * dotScale;
    
    // Antialiased edge
    float aa = softness * 0.15 + 0.02;
    float pattern = smoothstep(dotSize + aa, dotSize - aa, shapeDist);
    
    return pattern;
  }
  
  void main() {
    vec4 originalColor = texture2D(u_image, v_texCoord);
    
    // Calculate grid coordinates
    float aspectRatio = u_resolution.x / u_resolution.y;
    vec2 gridCoord = v_texCoord * vec2(u_resolution.x / u_gridSize, u_resolution.y / u_gridSize);
    
    // Sample color at cell center for more accurate color representation
    vec2 cellSize = u_gridSize / u_resolution;
    vec2 cellCenter = (floor(v_texCoord / cellSize) + 0.5) * cellSize;
    vec4 sampledColor = texture2D(u_image, cellCenter);
    
    // Apply contrast
    vec3 adjusted = sampledColor.rgb;
    adjusted = (adjusted - 0.5) * (1.0 + u_contrast) + 0.5;
    adjusted = clamp(adjusted, 0.0, 1.0);
    
    float angleRad = u_angle * PI / 180.0;
    
    vec3 result;
    
    if (u_colorMode == 0) {
      // Original colors mode - use image colors
      float r = halftonePattern(gridCoord, adjusted.r, angleRad, u_shape, u_softness, u_dotScale);
      float g = halftonePattern(gridCoord, adjusted.g, angleRad + 0.52, u_shape, u_softness, u_dotScale);
      float b = halftonePattern(gridCoord, adjusted.b, angleRad + 1.05, u_shape, u_softness, u_dotScale);
      
      if (u_invert) {
        result = vec3(1.0 - r, 1.0 - g, 1.0 - b);
      } else {
        result = vec3(r, g, b);
      }
    } else if (u_colorMode == 1) {
      // Monochrome mode
      float luma = dot(adjusted, vec3(0.299, 0.587, 0.114));
      float pattern = halftonePattern(gridCoord, luma, angleRad, u_shape, u_softness, u_dotScale);
      
      if (u_invert) pattern = 1.0 - pattern;
      
      result = mix(u_backgroundColor, u_dotColor, pattern);
    } else if (u_colorMode == 2) {
      // Duotone mode - single pattern with custom colors
      float luma = dot(adjusted, vec3(0.299, 0.587, 0.114));
      float pattern = halftonePattern(gridCoord, luma, angleRad, u_shape, u_softness, u_dotScale);
      
      if (u_invert) pattern = 1.0 - pattern;
      
      result = mix(u_backgroundColor, u_dotColor, pattern);
    } else {
      // CMYK mode
      vec4 cmyk = rgb2cmyk(adjusted);
      
      // Traditional CMYK halftone angles
      float cAngle = angleRad + 0.26;  // ~15°
      float mAngle = angleRad + 1.31;  // ~75°
      float yAngle = angleRad;         // 0°
      float kAngle = angleRad + 0.79;  // ~45°
      
      float c = halftonePattern(gridCoord, cmyk.x, cAngle, u_shape, u_softness, u_dotScale);
      float m = halftonePattern(gridCoord, cmyk.y, mAngle, u_shape, u_softness, u_dotScale);
      float y = halftonePattern(gridCoord, cmyk.z, yAngle, u_shape, u_softness, u_dotScale);
      float k = halftonePattern(gridCoord, cmyk.w, kAngle, u_shape, u_softness, u_dotScale);
      
      if (u_invert) {
        c = 1.0 - c;
        m = 1.0 - m;
        y = 1.0 - y;
        k = 1.0 - k;
      }
      
      result = cmyk2rgb(vec4(c, m, y, k));
    }
    
    // Mix with original color if desired
    result = mix(result, originalColor.rgb, u_mixOriginal);
    
    gl_FragColor = vec4(result, originalColor.a);
  }
`,wn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform sampler2D u_charAtlas;
  uniform float u_cellSize;
  uniform bool u_color;
  uniform bool u_invert;
  uniform int u_charCount;
  uniform vec2 u_resolution;
  uniform float u_brightness;
  uniform float u_contrast;
  uniform float u_charBrightness;
  uniform float u_backgroundBlend;
  uniform float u_edgeEnhance;
  
  varying vec2 v_texCoord;
  
  float getEdge(vec2 uv, vec2 texelSize) {
    float tl = dot(texture2D(u_image, uv + vec2(-1.0, -1.0) * texelSize).rgb, vec3(0.299, 0.587, 0.114));
    float t  = dot(texture2D(u_image, uv + vec2( 0.0, -1.0) * texelSize).rgb, vec3(0.299, 0.587, 0.114));
    float tr = dot(texture2D(u_image, uv + vec2( 1.0, -1.0) * texelSize).rgb, vec3(0.299, 0.587, 0.114));
    float l  = dot(texture2D(u_image, uv + vec2(-1.0,  0.0) * texelSize).rgb, vec3(0.299, 0.587, 0.114));
    float r  = dot(texture2D(u_image, uv + vec2( 1.0,  0.0) * texelSize).rgb, vec3(0.299, 0.587, 0.114));
    float bl = dot(texture2D(u_image, uv + vec2(-1.0,  1.0) * texelSize).rgb, vec3(0.299, 0.587, 0.114));
    float b  = dot(texture2D(u_image, uv + vec2( 0.0,  1.0) * texelSize).rgb, vec3(0.299, 0.587, 0.114));
    float br = dot(texture2D(u_image, uv + vec2( 1.0,  1.0) * texelSize).rgb, vec3(0.299, 0.587, 0.114));
    
    float gx = -tl - 2.0*l - bl + tr + 2.0*r + br;
    float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
    
    return sqrt(gx*gx + gy*gy);
  }
  
  void main() {
    vec2 cellCount = floor(u_resolution / u_cellSize);
    vec2 cellIndex = floor(v_texCoord * cellCount);
    vec2 cellUV = fract(v_texCoord * cellCount);
    
    vec2 sampleUV = (cellIndex + 0.5) / cellCount;
    vec4 sampleColor = texture2D(u_image, sampleUV);
    
    vec3 adjustedColor = sampleColor.rgb;
    adjustedColor = (adjustedColor - 0.5) * u_contrast + 0.5;  // Contrast
    adjustedColor = adjustedColor * u_brightness;              // Brightness
    adjustedColor = clamp(adjustedColor, 0.0, 1.0);
    
    float brightness = dot(adjustedColor, vec3(0.299, 0.587, 0.114));
    
    if (u_edgeEnhance > 0.0) {
      vec2 texelSize = 1.0 / u_resolution;
      float edge = getEdge(sampleUV, texelSize);
      brightness = mix(brightness, brightness + edge * 0.5, u_edgeEnhance);
      brightness = clamp(brightness, 0.0, 1.0);
    }
    
    if (u_invert) brightness = 1.0 - brightness;
    
    float charIndex = floor(brightness * float(u_charCount - 1) + 0.5);
    charIndex = clamp(charIndex, 0.0, float(u_charCount - 1));
    
    vec2 atlasUV = vec2(
      (charIndex + cellUV.x) / float(u_charCount),
      1.0 - cellUV.y  // Flip Y for proper character orientation
    );
    
    vec4 charSample = texture2D(u_charAtlas, atlasUV);
    float charAlpha = charSample.r * u_charBrightness; // Apply character brightness
    charAlpha = clamp(charAlpha, 0.0, 1.0);
    
    vec3 charColor;
    if (u_color) {
      charColor = adjustedColor * charAlpha;
    } else {
      charColor = vec3(charAlpha);
    }
    
    vec3 finalColor;
    if (u_backgroundBlend > 0.0) {
      vec3 bgColor = sampleColor.rgb * 0.5;
      finalColor = mix(charColor, bgColor + charColor * 0.8, u_backgroundBlend);
    } else {
      finalColor = charColor;
    }
    
    // Preserve original alpha for transparency support
    gl_FragColor = vec4(finalColor, sampleColor.a);
  }
`,Mn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform sampler2D u_overlay;
  uniform float u_intensity;
  uniform float u_scale;
  uniform float u_rotation;
  uniform int u_blendMode;
  uniform vec2 u_resolution;
  uniform bool u_hasOverlay;
  
  varying vec2 v_texCoord;
  
  #define PI 3.14159265359
  
  vec2 rotate2D(vec2 p, float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
  }
  
  vec3 blendOverlay(vec3 base, vec3 blend) {
    return mix(
      2.0 * base * blend,
      1.0 - 2.0 * (1.0 - base) * (1.0 - blend),
      step(0.5, base)
    );
  }
  
  vec3 blendSoftLight(vec3 base, vec3 blend) {
    return mix(
      base - (1.0 - 2.0 * blend) * base * (1.0 - base),
      base + (2.0 * blend - 1.0) * (sqrt(base) - base),
      step(0.5, blend)
    );
  }
  
  vec3 blendMultiply(vec3 base, vec3 blend) {
    return base * blend;
  }
  
  vec3 blendScreen(vec3 base, vec3 blend) {
    return 1.0 - (1.0 - base) * (1.0 - blend);
  }
  
  vec3 applyBlend(vec3 base, vec3 blend, int mode) {
    if (mode == 0) return blendOverlay(base, blend);
    if (mode == 1) return blendSoftLight(base, blend);
    if (mode == 2) return blendMultiply(base, blend);
    if (mode == 3) return blendScreen(base, blend);
    return base;
  }
  
  void main() {
    vec4 color = texture2D(u_image, v_texCoord);
    
    if (u_hasOverlay) {
      // Calculate overlay coordinates with rotation and scale
      vec2 center = vec2(0.5);
      vec2 overlayCoord = v_texCoord - center;
      overlayCoord = rotate2D(overlayCoord, u_rotation * PI / 180.0);
      overlayCoord = overlayCoord / u_scale + center;
      overlayCoord = fract(overlayCoord); // Tile the texture
      
      vec4 overlay = texture2D(u_overlay, overlayCoord);
      vec3 blended = applyBlend(color.rgb, overlay.rgb, u_blendMode);
      color.rgb = mix(color.rgb, blended, u_intensity * overlay.a);
    }
    
    gl_FragColor = color;
  }
`,Pn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_intensity;
  uniform float u_sliceCount;
  uniform float u_rgbShift;
  uniform float u_angle;
  uniform float u_seed;
  uniform float u_blockSize;
  uniform bool u_colorShift;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  #define PI 3.14159265359
  
  float hash(float n) {
    return fract(sin(n) * 43758.5453123);
  }
  
  float hash2(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
  
  void main() {
    vec2 uv = v_texCoord;
    
    // Slice-based displacement
    float sliceY = floor(uv.y * u_sliceCount);
    float sliceRand = hash(sliceY + u_seed);
    float sliceActive = step(1.0 - u_intensity, sliceRand);
    
    // Calculate displacement for this slice
    float displacement = (hash(sliceY * 2.0 + u_seed) - 0.5) * 2.0 * u_intensity * 0.1;
    displacement *= sliceActive;
    
    // Block-based glitch
    vec2 blockPos = floor(uv / u_blockSize);
    float blockRand = hash2(blockPos + vec2(u_seed));
    float blockActive = step(1.0 - u_intensity * 0.3, blockRand);
    vec2 blockDisp = vec2(
      (hash2(blockPos + vec2(u_seed, 0.0)) - 0.5) * 0.1,
      (hash2(blockPos + vec2(0.0, u_seed)) - 0.5) * 0.05
    ) * blockActive * u_intensity;
    
    // Apply displacement based on angle
    float angleRad = u_angle * PI / 180.0;
    vec2 dir = vec2(cos(angleRad), sin(angleRad));
    vec2 displaced = uv + dir * displacement + blockDisp;
    
    // RGB channel separation
    vec2 rgbOffset = dir * u_rgbShift * u_intensity;
    
    float r, g, b, a;
    if (u_colorShift) {
      r = texture2D(u_image, displaced + rgbOffset).r;
      g = texture2D(u_image, displaced).g;
      b = texture2D(u_image, displaced - rgbOffset).b;
    } else {
      vec3 col = texture2D(u_image, displaced).rgb;
      r = col.r;
      g = col.g;
      b = col.b;
    }
    a = texture2D(u_image, displaced).a;
    
    // Occasional color corruption
    float corrupt = step(1.0 - u_intensity * 0.1, hash2(blockPos + vec2(u_seed * 2.0)));
    if (corrupt > 0.5) {
      float swap = hash(sliceY + u_seed * 3.0);
      if (swap < 0.33) {
        float temp = r; r = g; g = b; b = temp;
      } else if (swap < 0.66) {
        float temp = r; r = b; b = temp;
      }
    }
    
    gl_FragColor = vec4(r, g, b, a);
  }
`,Ln=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_curvature;
  uniform float u_scanlineIntensity;
  uniform float u_scanlineCount;
  uniform float u_vignetteIntensity;
  uniform float u_brightness;
  uniform float u_rgbOffset;
  uniform float u_flickerIntensity;
  uniform float u_staticNoise;
  uniform float u_seed;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  #define PI 3.14159265359
  
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
  
  vec2 curveUV(vec2 uv, float amount) {
    uv = uv * 2.0 - 1.0;
    vec2 offset = abs(uv.yx) / vec2(6.0, 4.0);
    uv = uv + uv * offset * offset * amount;
    uv = uv * 0.5 + 0.5;
    return uv;
  }
  
  void main() {
    // Apply screen curvature
    vec2 uv = curveUV(v_texCoord, u_curvature);
    
    // Check if we're outside the curved screen - use transparent
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
      return;
    }
    
    // Sample center for alpha
    vec4 centerSample = texture2D(u_image, uv);
    
    // RGB phosphor offset (chromatic aberration)
    vec2 rgbOff = vec2(u_rgbOffset, 0.0);
    float r = texture2D(u_image, uv + rgbOff).r;
    float g = texture2D(u_image, uv).g;
    float b = texture2D(u_image, uv - rgbOff).b;
    vec3 color = vec3(r, g, b);
    
    // Scanlines
    float scanline = sin(uv.y * u_scanlineCount * PI * 2.0) * 0.5 + 0.5;
    scanline = pow(scanline, 1.5);
    color *= 1.0 - u_scanlineIntensity * (1.0 - scanline);
    
    // RGB phosphor pattern (subtle vertical stripes)
    float phosphor = mod(floor(uv.x * u_resolution.x), 3.0);
    vec3 phosphorMask = vec3(
      phosphor == 0.0 ? 1.0 : 0.7,
      phosphor == 1.0 ? 1.0 : 0.7,
      phosphor == 2.0 ? 1.0 : 0.7
    );
    color *= mix(vec3(1.0), phosphorMask, u_scanlineIntensity * 0.3);
    
    // Vignette
    vec2 vigUV = uv * (1.0 - uv.yx);
    float vig = vigUV.x * vigUV.y * 15.0;
    vig = pow(vig, u_vignetteIntensity * 0.5);
    color *= vig;
    
    // Flicker
    float flicker = 1.0 + (hash(vec2(u_seed, 0.0)) - 0.5) * u_flickerIntensity;
    color *= flicker;
    
    // Static noise
    float noise = (hash(uv * u_resolution + u_seed) - 0.5) * u_staticNoise;
    color += noise;
    
    // Brightness adjustment
    color *= u_brightness;
    
    // Preserve original alpha for transparency support
    gl_FragColor = vec4(clamp(color, 0.0, 1.0), centerSample.a);
  }
`,On=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform vec3 u_shadowColor;
  uniform vec3 u_highlightColor;
  uniform float u_contrast;
  uniform float u_intensity;
  
  varying vec2 v_texCoord;
  
  void main() {
    vec4 color = texture2D(u_image, v_texCoord);
    
    // Calculate luminance
    float luma = dot(color.rgb, vec3(0.299, 0.587, 0.114));
    
    // Apply contrast adjustment
    luma = (luma - 0.5) * u_contrast + 0.5;
    luma = clamp(luma, 0.0, 1.0);
    
    // Map to duotone gradient
    vec3 duotone = mix(u_shadowColor, u_highlightColor, luma);
    
    // Blend with original based on intensity
    vec3 result = mix(color.rgb, duotone, u_intensity);
    
    gl_FragColor = vec4(result, color.a);
  }
`,Un=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform int u_radius;
  uniform float u_sharpness;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  void main() {
    vec2 texelSize = 1.0 / u_resolution;
    int r = u_radius;
    
    // We divide the kernel into 4 overlapping quadrants
    // and find the one with minimum variance
    vec3 sum[4];
    vec3 sumSq[4];
    int count[4];
    
    for (int i = 0; i < 4; i++) {
      sum[i] = vec3(0.0);
      sumSq[i] = vec3(0.0);
      count[i] = 0;
    }
    
    // Sample the four quadrants
    for (int dy = -5; dy <= 5; dy++) {
      for (int dx = -5; dx <= 5; dx++) {
        if (abs(float(dx)) > float(r) || abs(float(dy)) > float(r)) continue;
        
        vec2 offset = vec2(float(dx), float(dy)) * texelSize;
        vec3 sample = texture2D(u_image, v_texCoord + offset).rgb;
        
        // Determine which quadrant(s) this sample belongs to
        // Using overlapping regions for smoother results
        if (dx <= 0 && dy <= 0) { sum[0] += sample; sumSq[0] += sample * sample; count[0]++; }
        if (dx >= 0 && dy <= 0) { sum[1] += sample; sumSq[1] += sample * sample; count[1]++; }
        if (dx <= 0 && dy >= 0) { sum[2] += sample; sumSq[2] += sample * sample; count[2]++; }
        if (dx >= 0 && dy >= 0) { sum[3] += sample; sumSq[3] += sample * sample; count[3]++; }
      }
    }
    
    // Find the quadrant with minimum variance
    float minVariance = 1e10;
    vec3 result = vec3(0.0);
    
    for (int i = 0; i < 4; i++) {
      if (count[i] > 0) {
        vec3 mean = sum[i] / float(count[i]);
        vec3 variance = sumSq[i] / float(count[i]) - mean * mean;
        float totalVariance = variance.r + variance.g + variance.b;
        
        if (totalVariance < minVariance) {
          minVariance = totalVariance;
          result = mean;
        }
      }
    }
    
    // Blend with original based on sharpness
    vec4 original = texture2D(u_image, v_texCoord);
    result = mix(original.rgb, result, 1.0 - u_sharpness * 0.5);
    
    gl_FragColor = vec4(result, original.a);
  }
`,zn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_amount;
  uniform vec2 u_center;
  uniform float u_zoom;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  void main() {
    // Center the coordinates
    vec2 uv = v_texCoord - u_center;
    
    // Correct for aspect ratio
    float aspect = u_resolution.x / u_resolution.y;
    uv.x *= aspect;
    
    // Calculate distance from center
    float r = length(uv);
    float r2 = r * r;
    
    // Apply barrel/pincushion distortion
    // Positive amount = barrel (bulge outward)
    // Negative amount = pincushion (pinch inward)
    float distortion = 1.0 + r2 * u_amount;
    
    // Apply distortion and zoom
    vec2 distorted = uv * distortion / u_zoom;
    
    // Restore aspect ratio and center
    distorted.x /= aspect;
    distorted += u_center;
    
    // Sample with boundary check - use transparent for out-of-bounds
    if (distorted.x < 0.0 || distorted.x > 1.0 || distorted.y < 0.0 || distorted.y > 1.0) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    } else {
      gl_FragColor = texture2D(u_image, distorted);
    }
  }
`,Fn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_amplitude;
  uniform float u_wavelength;
  uniform float u_speed;
  uniform vec2 u_center;
  uniform float u_damping;
  uniform float u_time;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  #define PI 3.14159265359
  
  void main() {
    vec2 uv = v_texCoord;
    
    // Calculate distance from center
    vec2 toCenter = uv - u_center;
    float aspect = u_resolution.x / u_resolution.y;
    toCenter.x *= aspect;
    float dist = length(toCenter);
    
    // Calculate ripple phase
    float phase = dist * u_wavelength - u_time * u_speed;
    
    // Calculate displacement with damping
    float damping = exp(-dist * u_damping * 5.0);
    float displacement = sin(phase * PI * 2.0) * u_amplitude * damping;
    
    // Displace perpendicular to the direction from center
    vec2 direction = normalize(toCenter + 0.0001);
    direction.x /= aspect;
    vec2 displaced = uv + direction * displacement;
    
    // Clamp to valid range
    displaced = clamp(displaced, 0.0, 1.0);
    
    gl_FragColor = texture2D(u_image, displaced);
  }
`,Nn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform sampler2D u_displacementMap;
  uniform float u_scaleX;
  uniform float u_scaleY;
  uniform bool u_useRedGreen;
  uniform bool u_hasDisplacementMap;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  // Procedural noise for when no map is provided
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
  
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }
  
  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 4; i++) {
      value += amplitude * noise(p);
      p *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }
  
  void main() {
    vec2 displacement;
    
    if (u_hasDisplacementMap) {
      vec4 dispSample = texture2D(u_displacementMap, v_texCoord);
      if (u_useRedGreen) {
        displacement = (dispSample.rg - 0.5) * 2.0;
      } else {
        float luma = dot(dispSample.rgb, vec3(0.299, 0.587, 0.114));
        displacement = vec2(luma - 0.5) * 2.0;
      }
    } else {
      // Procedural displacement
      vec2 noiseCoord = v_texCoord * 8.0;
      displacement = vec2(
        fbm(noiseCoord) - 0.5,
        fbm(noiseCoord + vec2(100.0)) - 0.5
      );
    }
    
    vec2 displaced = v_texCoord + displacement * vec2(u_scaleX, u_scaleY);
    displaced = clamp(displaced, 0.0, 1.0);
    
    gl_FragColor = texture2D(u_image, displaced);
  }
`,Bn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform vec3 u_color1;
  uniform vec3 u_color2;
  uniform float u_position;
  uniform float u_angle;
  uniform float u_size;
  uniform float u_intensity;
  uniform float u_softness;
  uniform int u_blendMode;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  #define PI 3.14159265359
  
  vec3 blendScreen(vec3 base, vec3 blend) {
    return 1.0 - (1.0 - base) * (1.0 - blend);
  }
  
  vec3 blendAdd(vec3 base, vec3 blend) {
    return min(base + blend, vec3(1.0));
  }
  
  vec3 blendOverlay(vec3 base, vec3 blend) {
    return mix(
      2.0 * base * blend,
      1.0 - 2.0 * (1.0 - base) * (1.0 - blend),
      step(0.5, base)
    );
  }
  
  vec3 blendSoftLight(vec3 base, vec3 blend) {
    return mix(
      base - (1.0 - 2.0 * blend) * base * (1.0 - base),
      base + (2.0 * blend - 1.0) * (sqrt(base) - base),
      step(0.5, blend)
    );
  }
  
  void main() {
    vec4 color = texture2D(u_image, v_texCoord);
    
    // Create directional gradient
    float angleRad = u_angle * PI / 180.0;
    vec2 dir = vec2(cos(angleRad), sin(angleRad));
    
    // Calculate position along the gradient direction
    vec2 uv = v_texCoord - 0.5;
    float aspect = u_resolution.x / u_resolution.y;
    uv.x *= aspect;
    
    float projection = dot(uv, dir);
    float offset = (projection + u_position - 0.5) / u_size;
    
    // Create soft gradient
    float t = 1.0 - smoothstep(0.0, u_softness, abs(offset));
    t = pow(t, 2.0 - u_softness);
    
    // Interpolate between colors
    float colorT = smoothstep(-0.5, 0.5, offset);
    vec3 leakColor = mix(u_color1, u_color2, colorT);
    
    // Apply intensity
    vec3 leak = leakColor * t * u_intensity;
    
    // Blend with original
    vec3 result;
    if (u_blendMode == 0) result = blendOverlay(color.rgb, leak);
    else if (u_blendMode == 1) result = blendSoftLight(color.rgb, leak);
    else if (u_blendMode == 2) result = color.rgb * leak;
    else result = blendScreen(color.rgb, leak);
    
    // Mix based on leak presence
    result = mix(color.rgb, result, t);
    
    gl_FragColor = vec4(result, color.a);
  }
`,Hn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_radius;
  uniform float u_intensity;
  uniform float u_threshold;
  uniform float u_softThreshold;
  uniform int u_blendMode;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  vec3 blendScreen(vec3 base, vec3 blend) {
    return 1.0 - (1.0 - base) * (1.0 - blend);
  }
  
  vec3 blendSoftLight(vec3 base, vec3 blend) {
    return mix(
      base - (1.0 - 2.0 * blend) * base * (1.0 - base),
      base + (2.0 * blend - 1.0) * (sqrt(base) - base),
      step(0.5, blend)
    );
  }
  
  vec3 blendOverlay(vec3 base, vec3 blend) {
    return mix(
      2.0 * base * blend,
      1.0 - 2.0 * (1.0 - base) * (1.0 - blend),
      step(0.5, base)
    );
  }
  
  // Extract bright pixels with soft knee
  vec3 extractBright(vec3 color, float threshold, float softKnee) {
    float brightness = max(max(color.r, color.g), color.b);
    float knee = threshold * softKnee;
    float soft = brightness - threshold + knee;
    soft = clamp(soft, 0.0, 2.0 * knee);
    soft = soft * soft / (4.0 * knee + 0.00001);
    float contribution = max(soft, brightness - threshold);
    contribution /= max(brightness, 0.00001);
    return color * max(contribution, 0.0);
  }
  
  void main() {
    vec4 originalColor = texture2D(u_image, v_texCoord);
    vec2 texelSize = 1.0 / u_resolution;
    
    // Extract and blur bright areas
    vec3 bloom = vec3(0.0);
    float totalWeight = 0.0;
    
    float r = u_radius;
    
    // Two-pass Gaussian approximation in a single pass
    for (int y = -12; y <= 12; y++) {
      for (int x = -12; x <= 12; x++) {
        float fx = float(x);
        float fy = float(y);
        float dist = sqrt(fx * fx + fy * fy);
        
        // Skip samples outside radius
        if (dist > r) continue;
        
        // Gaussian weight with sigma = radius / 2
        float sigma = r * 0.4;
        float weight = exp(-(dist * dist) / (2.0 * sigma * sigma));
        
        vec2 offset = vec2(fx, fy) * texelSize;
        vec3 sampleColor = texture2D(u_image, v_texCoord + offset).rgb;
        
        // Extract only the bright parts of each sample
        vec3 brightSample = extractBright(sampleColor, u_threshold, u_softThreshold);
        
        bloom += brightSample * weight;
        totalWeight += weight;
      }
    }
    
    if (totalWeight > 0.0) {
      bloom /= totalWeight;
    }
    
    // Apply intensity
    bloom *= u_intensity;
    
    // Blend bloom with original image (additive-style blending)
    vec3 result;
    if (u_blendMode == 0) {
      // Screen (default - bright and natural)
      result = blendScreen(originalColor.rgb, bloom);
    } else if (u_blendMode == 1) {
      // Overlay
      result = blendOverlay(originalColor.rgb, bloom);
    } else if (u_blendMode == 2) {
      // Soft Light
      result = blendSoftLight(originalColor.rgb, bloom);
    } else {
      // Add (pure additive)
      result = originalColor.rgb + bloom;
    }
    
    gl_FragColor = vec4(clamp(result, 0.0, 1.0), originalColor.a);
  }
`,Gn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_intensity;
  uniform vec2 u_center;
  uniform int u_samples;
  uniform bool u_zoom;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  #define PI 3.14159265359
  
  void main() {
    vec2 uv = v_texCoord;
    vec2 center = u_center;
    
    vec4 color = vec4(0.0);
    float total = 0.0;
    
    if (u_zoom) {
      // Zoom blur - samples along ray from center
      vec2 dir = uv - center;
      
      for (int i = 0; i < 64; i++) {
        if (i >= u_samples) break;
        
        float t = float(i) / float(u_samples - 1);
        float scale = 1.0 - u_intensity * t;
        
        vec2 sampleUV = center + dir * scale;
        
        if (sampleUV.x >= 0.0 && sampleUV.x <= 1.0 && sampleUV.y >= 0.0 && sampleUV.y <= 1.0) {
          float weight = 1.0 - t * 0.5;
          color += texture2D(u_image, sampleUV) * weight;
          total += weight;
        }
      }
    } else {
      // Spin blur - samples along circular arc
      vec2 dir = uv - center;
      float dist = length(dir);
      float baseAngle = atan(dir.y, dir.x);
      
      for (int i = 0; i < 64; i++) {
        if (i >= u_samples) break;
        
        float t = (float(i) / float(u_samples - 1) - 0.5) * 2.0;
        float angle = baseAngle + t * u_intensity * dist;
        
        vec2 sampleUV = center + vec2(cos(angle), sin(angle)) * dist;
        
        if (sampleUV.x >= 0.0 && sampleUV.x <= 1.0 && sampleUV.y >= 0.0 && sampleUV.y <= 1.0) {
          float weight = 1.0 - abs(t) * 0.3;
          color += texture2D(u_image, sampleUV) * weight;
          total += weight;
        }
      }
    }
    
    if (total > 0.0) {
      color /= total;
    } else {
      color = texture2D(u_image, uv);
    }
    
    gl_FragColor = color;
  }
`,Xn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_cellSize;
  uniform float u_irregularity;
  uniform float u_edgeThickness;
  uniform vec3 u_edgeColor;
  uniform float u_colorVariation;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  // Simple hash functions for Voronoi
  vec2 hash2(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return fract(sin(p) * 43758.5453);
  }
  
  float hash1(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  
  void main() {
    vec2 uv = v_texCoord;
    vec2 pixelCoord = uv * u_resolution;
    
    // Calculate cell coordinates
    float cellPx = u_cellSize;
    vec2 cellCoord = pixelCoord / cellPx;
    vec2 cellBase = floor(cellCoord);
    
    // Find closest Voronoi cell center
    float minDist = 10.0;
    float secondDist = 10.0;
    vec2 closestCell = cellBase;
    
    for (int y = -1; y <= 1; y++) {
      for (int x = -1; x <= 1; x++) {
        vec2 neighbor = cellBase + vec2(float(x), float(y));
        vec2 point = neighbor + mix(vec2(0.5), hash2(neighbor), u_irregularity);
        
        float dist = length(cellCoord - point);
        
        if (dist < minDist) {
          secondDist = minDist;
          minDist = dist;
          closestCell = neighbor;
        } else if (dist < secondDist) {
          secondDist = dist;
        }
      }
    }
    
    // Sample color from cell center
    vec2 cellCenter = (closestCell + 0.5) * cellPx / u_resolution;
    cellCenter = clamp(cellCenter, 0.0, 1.0);
    vec4 cellSample = texture2D(u_image, cellCenter);
    vec3 cellColor = cellSample.rgb;
    
    // Add slight color variation per cell
    float variation = (hash1(closestCell) - 0.5) * u_colorVariation;
    cellColor = clamp(cellColor + variation, 0.0, 1.0);
    
    // Calculate edge
    float edge = secondDist - minDist;
    float edgeMask = smoothstep(0.0, u_edgeThickness, edge);
    
    // Mix cell color with edge color
    vec3 result = mix(u_edgeColor, cellColor, edgeMask);
    
    // Preserve original alpha for transparency support
    gl_FragColor = vec4(result, cellSample.a);
  }
`,Vn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_focusPosition;
  uniform float u_focusWidth;
  uniform float u_blurRadius;
  uniform float u_angle;
  uniform float u_gradientSmooth;
  uniform vec2 u_resolution;
  
  varying vec2 v_texCoord;
  
  #define PI 3.14159265359
  
  void main() {
    vec2 uv = v_texCoord;
    
    // Rotate coordinates for angled tilt shift
    float angleRad = u_angle * PI / 180.0;
    vec2 center = vec2(0.5);
    vec2 rotatedUV = uv - center;
    float cosA = cos(angleRad);
    float sinA = sin(angleRad);
    float rotatedY = -rotatedUV.x * sinA + rotatedUV.y * cosA;
    rotatedY += 0.5;
    
    // Calculate blur amount based on distance from focus band
    float distFromFocus = abs(rotatedY - u_focusPosition);
    float focusHalf = u_focusWidth * 0.5;
    float blurAmount = smoothstep(focusHalf, focusHalf + u_gradientSmooth, distFromFocus);
    
    // Apply Gaussian blur based on blur amount
    vec3 color = vec3(0.0);
    float total = 0.0;
    
    float radius = u_blurRadius * blurAmount;
    
    if (radius < 0.5) {
      // No blur needed
      gl_FragColor = texture2D(u_image, uv);
      return;
    }
    
    vec2 texelSize = 1.0 / u_resolution;
    
    // Optimized blur - sample in a circular pattern
    for (int y = -8; y <= 8; y++) {
      for (int x = -8; x <= 8; x++) {
        float fx = float(x);
        float fy = float(y);
        float dist = sqrt(fx * fx + fy * fy);
        
        if (dist > radius) continue;
        
        float sigma = radius * 0.4;
        float weight = exp(-(dist * dist) / (2.0 * sigma * sigma));
        
        vec2 offset = vec2(fx, fy) * texelSize;
        color += texture2D(u_image, uv + offset).rgb * weight;
        total += weight;
      }
    }
    
    if (total > 0.0) {
      color /= total;
    }
    
    // Preserve original alpha for transparency support
    vec4 centerSample = texture2D(u_image, uv);
    gl_FragColor = vec4(color, centerSample.a);
  }
`,Wn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_exposure;
  uniform float u_highlights;
  uniform float u_shadows;
  uniform float u_blacks;
  uniform float u_whites;
  
  varying vec2 v_texCoord;
  
  // Attempt to recover highlights and shadows
  vec3 adjustTones(vec3 color, float highlights, float shadows, float blacks, float whites) {
    // Calculate luminance
    float luma = dot(color, vec3(0.299, 0.587, 0.114));
    
    // Highlights adjustment (affects bright areas)
    float highlightMask = smoothstep(0.5, 1.0, luma);
    color = mix(color, color * (1.0 + highlights), highlightMask);
    
    // Shadows adjustment (affects dark areas)
    float shadowMask = 1.0 - smoothstep(0.0, 0.5, luma);
    color = mix(color, color * (1.0 + shadows * 2.0), shadowMask);
    
    // Blacks - crush or lift the darkest values
    color = max(color + blacks * 0.1, 0.0);
    
    // Whites - clip or extend the brightest values
    color = min(color + whites * 0.1, 1.0 + whites * 0.1);
    
    return color;
  }
  
  void main() {
    vec4 color = texture2D(u_image, v_texCoord);
    
    // Apply exposure (EV stops)
    vec3 result = color.rgb * pow(2.0, u_exposure);
    
    // Apply tonal adjustments
    result = adjustTones(result, u_highlights, u_shadows, u_blacks, u_whites);
    
    gl_FragColor = vec4(clamp(result, 0.0, 1.0), color.a);
  }
`,qn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform float u_vibrance;
  uniform float u_saturation;
  
  varying vec2 v_texCoord;
  
  void main() {
    vec4 color = texture2D(u_image, v_texCoord);
    
    // Calculate saturation info
    float luma = dot(color.rgb, vec3(0.299, 0.587, 0.114));
    float maxChannel = max(max(color.r, color.g), color.b);
    float minChannel = min(min(color.r, color.g), color.b);
    float saturation = (maxChannel - minChannel) / (maxChannel + 0.001);
    
    // Vibrance: boost saturation more for less-saturated pixels
    // This protects already-saturated colors (like skin tones)
    float vibranceAmount = u_vibrance * (1.0 - saturation);
    vibranceAmount = max(vibranceAmount, -saturation); // Don't oversaturate
    
    vec3 result = mix(vec3(luma), color.rgb, 1.0 + vibranceAmount);
    
    // Standard saturation on top
    result = mix(vec3(luma), result, 1.0 + u_saturation);
    
    gl_FragColor = vec4(clamp(result, 0.0, 1.0), color.a);
  }
`,Yn=`
  precision highp float;
  
  uniform sampler2D u_image;
  uniform vec2 u_resolution;
  uniform float u_threshold;
  uniform float u_scale;
  uniform bool u_animated;
  uniform float u_time;
  uniform float u_animationSpeed;
  uniform bool u_invert;
  
  varying vec2 v_texCoord;
  
  // Checkerboard noise to decorrelate pattern between tiles
  float stepnoise0(vec2 p, float size) {
    vec2 pp = floor(p / size) * size;
    float r = fract(sin(dot(pp, vec2(1.0, -7.131))) * 43758.5453);
    return r;
  }
  
  // Stippling mask - creates the dot pattern
  float mask(vec2 p, float time) {
    const float SEED1 = 1.705;
    const float DMUL = 8.12235325;
    
    // Add per-tile random offset to break up regularity
    float tileNoise = stepnoise0(p, 5.5);
    p += (tileNoise - 0.5) * DMUL;
    
    // Animation: shift the pattern over time
    if (time > 0.0) {
      p += vec2(sin(time * 0.7), cos(time * 0.9)) * 2.0;
    }
    
    // Create stippling pattern
    float f = fract(p.x * SEED1 + p.y / (SEED1 + 0.15555));
    f *= 1.03; // Avoid zero-stipple in plain white
    
    // Tone mapping for proper dot distribution
    return (pow(f, 150.0) + 1.3 * f) / 2.3;
  }
  
  void main() {
    vec2 fragCoord = v_texCoord * u_resolution;
    vec4 originalColor = texture2D(u_image, v_texCoord);
    
    // Get luminance
    float luminance = dot(originalColor.rgb, vec3(0.2126, 0.7152, 0.0722));
    
    // Apply threshold adjustment
    luminance = luminance + (u_threshold - 0.5);
    luminance = clamp(luminance, 0.0, 1.0);
    
    // Scale controls dot density - larger scale = bigger dots / less dense
    // We floor to create pixel-sized dots that scale together
    float dotSize = max(1.0, floor(u_scale));
    vec2 scaledCoord = floor(fragCoord / dotSize);
    
    // Get animation time
    float time = u_animated ? u_time * u_animationSpeed : 0.0;
    
    // Get stippling mask value
    float maskVal = mask(scaledCoord, time);
    
    // Compare luminance against mask to get final bit
    float finalBit = step(maskVal, luminance);
    
    if (u_invert) {
      finalBit = 1.0 - finalBit;
    }
    
    gl_FragColor = vec4(vec3(finalBit), originalColor.a);
  }
`;function $n(r,e=16){const t=document.createElement("canvas"),s=r.length;t.width=e*s,t.height=e;const l=t.getContext("2d");l.fillStyle="#000000",l.fillRect(0,0,t.width,t.height),l.fillStyle="#ffffff",l.font=`${e*.9}px monospace`,l.textAlign="center",l.textBaseline="middle";for(let u=0;u<s;u++){const i=u*e+e/2,o=e/2;l.fillText(r[u],i,o)}return t}class Kn{constructor(e){if(this.canvas=e,this.gl=e.getContext("webgl2")||e.getContext("webgl"),!this.gl)throw new Error("WebGL not supported");this.programs={},this.textures={},this.framebuffers=[],this.quadBuffer=null,this.texCoordBuffer=null,this.currentCharset=null,this._initBuffers(),this._initPrograms()}_initBuffers(){const e=this.gl;this.quadBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quadBuffer),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),this.texCoordBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.texCoordBuffer),e.bufferData(e.ARRAY_BUFFER,new Float32Array([0,0,1,0,0,1,0,1,1,0,1,1]),e.STATIC_DRAW)}_compileShader(e,t){const s=this.gl,l=s.createShader(t);if(s.shaderSource(l,e),s.compileShader(l),!s.getShaderParameter(l,s.COMPILE_STATUS)){const u=s.getShaderInfoLog(l);throw s.deleteShader(l),new Error(`Shader compile error: ${u}`)}return l}_createProgram(e,t){const s=this.gl,l=this._compileShader(e,s.VERTEX_SHADER),u=this._compileShader(t,s.FRAGMENT_SHADER),i=s.createProgram();if(s.attachShader(i,l),s.attachShader(i,u),s.linkProgram(i),!s.getProgramParameter(i,s.LINK_STATUS)){const c=s.getProgramInfoLog(i);throw s.deleteProgram(i),new Error(`Program link error: ${c}`)}i.attributes={position:s.getAttribLocation(i,"a_position"),texCoord:s.getAttribLocation(i,"a_texCoord")},i.uniforms={};const o=s.getProgramParameter(i,s.ACTIVE_UNIFORMS);for(let c=0;c<o;c++){const f=s.getActiveUniform(i,c);i.uniforms[f.name]=s.getUniformLocation(i,f.name)}return i}_initPrograms(){this.programs.passthrough=this._createProgram(M,bn),this.programs.noise=this._createProgram(M,vn),this.programs.dither=this._createProgram(M,Dn),this.programs.halftone=this._createProgram(M,jn),this.programs.ascii=this._createProgram(M,wn),this.programs.overlay=this._createProgram(M,Mn),this.programs.chromatic=this._createProgram(M,_n),this.programs.vignette=this._createProgram(M,yn),this.programs.scanlines=this._createProgram(M,En),this.programs.pixelate=this._createProgram(M,Cn),this.programs.blur=this._createProgram(M,Rn),this.programs.distortion=this._createProgram(M,Tn),this.programs.posterize=this._createProgram(M,Sn),this.programs.edge=this._createProgram(M,An),this.programs.grain=this._createProgram(M,In),this.programs.colorGrade=this._createProgram(M,kn),this.programs.glitch=this._createProgram(M,Pn),this.programs.crt=this._createProgram(M,Ln),this.programs.duotone=this._createProgram(M,On),this.programs.kuwahara=this._createProgram(M,Un),this.programs.barrel=this._createProgram(M,zn),this.programs.ripple=this._createProgram(M,Fn),this.programs.displacement=this._createProgram(M,Nn),this.programs.lightLeak=this._createProgram(M,Bn),this.programs.bloom=this._createProgram(M,Hn),this.programs.radialBlur=this._createProgram(M,Gn),this.programs.mosaic=this._createProgram(M,Xn),this.programs.tiltShift=this._createProgram(M,Vn),this.programs.exposure=this._createProgram(M,Wn),this.programs.vibrance=this._createProgram(M,qn),this.programs.dotDither=this._createProgram(M,Yn)}_createTexture(e){const t=this.gl,s=t.createTexture();return t.bindTexture(t.TEXTURE_2D,s),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),e&&t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),s}_createFramebuffer(e,t){const s=this.gl,l=s.createTexture();s.bindTexture(s.TEXTURE_2D,l),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,e,t,0,s.RGBA,s.UNSIGNED_BYTE,null),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR);const u=s.createFramebuffer();return s.bindFramebuffer(s.FRAMEBUFFER,u),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,l,0),{framebuffer:u,texture:l,width:e,height:t}}_useProgram(e,t=1){const s=this.gl;s.useProgram(e),s.bindBuffer(s.ARRAY_BUFFER,this.quadBuffer),s.enableVertexAttribArray(e.attributes.position),s.vertexAttribPointer(e.attributes.position,2,s.FLOAT,!1,0,0),s.bindBuffer(s.ARRAY_BUFFER,this.texCoordBuffer),s.enableVertexAttribArray(e.attributes.texCoord),s.vertexAttribPointer(e.attributes.texCoord,2,s.FLOAT,!1,0,0),e.uniforms.u_flipY!==void 0&&s.uniform1f(e.uniforms.u_flipY,t)}_blendModeToInt(e){switch(e){case z.OVERLAY:return 0;case z.SOFT_LIGHT:return 1;case z.MULTIPLY:return 2;case z.SCREEN:return 3;default:return 0}}_ditherMethodToInt(e){switch(e){case de.BAYER_2X2:return 0;case de.BAYER_4X4:return 1;case de.BAYER_8X8:return 2;default:return 1}}setImage(e){if(this.textures.source&&(this.gl.deleteTexture(this.textures.source),this.textures.source=null),e)this.textures.source=this._createTexture(e),this.imageWidth=e.width||e.videoWidth,this.imageHeight=e.height||e.videoHeight;else{this.imageWidth=0,this.imageHeight=0;const t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,this.canvas.width,this.canvas.height),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT)}}updateVideoFrame(e){if(!this.textures.source||!e)return;const t=this.gl;t.bindTexture(t.TEXTURE_2D,this.textures.source),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e)}setOverlayTexture(e){this.textures.overlay&&this.gl.deleteTexture(this.textures.overlay),e?this.textures.overlay=this._createTexture(e):this.textures.overlay=null}_updateCharacterAtlas(e){if(this.currentCharset===e)return;this.currentCharset=e;const t=$n(e,32);this.textures.charAtlas&&this.gl.deleteTexture(this.textures.charAtlas),this.textures.charAtlas=this._createTexture(t)}render(e,t,s,l){const u=this.gl;if(!this.textures.source)return;const i=s||this.imageWidth,o=l||this.imageHeight;let c=this.imageWidth;if(this.imageWidth>1e3||this.imageHeight>1e3){const R=Math.min(1e3/this.imageWidth,1e3/this.imageHeight);c=Math.round(this.imageWidth*R)}const f=c>0?i/c:1;(this.canvas.width!==i||this.canvas.height!==o)&&(this.canvas.width=i,this.canvas.height=o),u.viewport(0,0,i,o),(this.framebuffers.length!==2||this.framebuffers[0].width!==i||this.framebuffers[0].height!==o)&&(this.framebuffers.forEach(R=>{u.deleteFramebuffer(R.framebuffer),u.deleteTexture(R.texture)}),this.framebuffers=[this._createFramebuffer(i,o),this._createFramebuffer(i,o)]);let g=this.textures.source,_=0,v=!0;const S=e.filter(R=>R.enabled);if(S.length===0){u.bindFramebuffer(u.FRAMEBUFFER,null),this._useProgram(this.programs.passthrough,-1),u.activeTexture(u.TEXTURE0),u.bindTexture(u.TEXTURE_2D,g),u.uniform1i(this.programs.passthrough.uniforms.u_image,0),u.drawArrays(u.TRIANGLES,0,6);return}for(let R=0;R<S.length;R++){const D=S[R],P=R===S.length-1;P?u.bindFramebuffer(u.FRAMEBUFFER,null):u.bindFramebuffer(u.FRAMEBUFFER,this.framebuffers[_].framebuffer);const $=v?-1:1;this._renderEffect(D,g,i,o,t,$,f),P||(g=this.framebuffers[_].texture,_=1-_,v=!1)}}_renderEffect(e,t,s,l,u,i=1,o=1){switch(e.type){case a.NOISE:this._renderNoise(e.params,t,s,l,u,i);break;case a.DITHER:this._renderDither(e.params,t,s,l,i);break;case a.HALFTONE:this._renderHalftone(e.params,t,s,l,i,o);break;case a.ASCII:this._renderAscii(e.params,t,s,l,i,o);break;case a.OVERLAY:this._renderOverlay(e.params,t,s,l,i);break;case a.CHROMATIC:this._renderChromatic(e.params,t,s,l,i);break;case a.VIGNETTE:this._renderVignette(e.params,t,s,l,i);break;case a.SCANLINES:this._renderScanlines(e.params,t,s,l,i,o);break;case a.PIXELATE:this._renderPixelate(e.params,t,s,l,i,o);break;case a.BLUR:this._renderBlur(e.params,t,s,l,i,o);break;case a.DISTORTION:this._renderDistortion(e.params,t,s,l,i);break;case a.POSTERIZE:this._renderPosterize(e.params,t,s,l,i);break;case a.EDGE:this._renderEdge(e.params,t,s,l,i);break;case a.GRAIN:this._renderGrain(e.params,t,s,l,u,i,o);break;case a.COLOR_GRADE:this._renderColorGrade(e.params,t,s,l,i);break;case a.GLITCH:this._renderGlitch(e.params,t,s,l,u,i);break;case a.CRT:this._renderCRT(e.params,t,s,l,u,i);break;case a.DUOTONE:this._renderDuotone(e.params,t,s,l,i);break;case a.KUWAHARA:this._renderKuwahara(e.params,t,s,l,i,o);break;case a.BARREL:this._renderBarrel(e.params,t,s,l,i);break;case a.RIPPLE:this._renderRipple(e.params,t,s,l,u,i);break;case a.DISPLACEMENT:this._renderDisplacement(e.params,t,s,l,i);break;case a.LIGHT_LEAK:this._renderLightLeak(e.params,t,s,l,i);break;case a.BLOOM:this._renderBloom(e.params,t,s,l,i,o);break;case a.RADIAL_BLUR:this._renderRadialBlur(e.params,t,s,l,i);break;case a.MOSAIC:this._renderMosaic(e.params,t,s,l,i,o);break;case a.TILT_SHIFT:this._renderTiltShift(e.params,t,s,l,i,o);break;case a.EXPOSURE:this._renderExposure(e.params,t,s,l,i);break;case a.VIBRANCE:this._renderVibrance(e.params,t,s,l,i);break;case a.DOT_DITHER:this._renderDotDither(e.params,t,s,l,u,i,o);break;default:this._renderPassthrough(t,i)}}_renderPassthrough(e,t=1){const s=this.gl;this._useProgram(this.programs.passthrough,t),s.activeTexture(s.TEXTURE0),s.bindTexture(s.TEXTURE_2D,e),s.uniform1i(this.programs.passthrough.uniforms.u_image,0),s.drawArrays(s.TRIANGLES,0,6)}_renderNoise(e,t,s,l,u,i=1){const o=this.gl,c=this.programs.noise;this._useProgram(c,i),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,t),o.uniform1i(c.uniforms.u_image,0),o.uniform1f(c.uniforms.u_intensity,e.intensity),o.uniform1f(c.uniforms.u_scale,e.scale),o.uniform1f(c.uniforms.u_seed,u),o.uniform1i(c.uniforms.u_monochrome,e.monochrome?1:0),o.uniform1i(c.uniforms.u_blendMode,this._blendModeToInt(e.blendMode)),o.uniform2f(c.uniforms.u_resolution,s,l),o.drawArrays(o.TRIANGLES,0,6)}_renderDither(e,t,s,l,u=1){const i=this.gl,o=this.programs.dither;this._useProgram(o,u),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,t),i.uniform1i(o.uniforms.u_image,0),i.uniform1i(o.uniforms.u_method,this._ditherMethodToInt(e.method)),i.uniform1i(o.uniforms.u_levels,e.levels),i.uniform1f(o.uniforms.u_threshold,e.threshold),i.uniform2f(o.uniforms.u_resolution,s,l),i.uniform1f(o.uniforms.u_scale,e.scale||1),i.drawArrays(i.TRIANGLES,0,6)}_renderHalftone(e,t,s,l,u=1,i=1){const o=this.gl,c=this.programs.halftone;this._useProgram(c,u),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,t);const f=this._hexToRgb(e.dotColor||"#000000"),g=this._hexToRgb(e.backgroundColor||"#ffffff"),v={circle:0,square:1,diamond:2,line:3,ellipse:4,cross:5,ring:6}[e.shape]||0,R={original:0,monochrome:1,duotone:2,cmyk:3}[e.colorMode]||0,D=(e.gridSize||8)*i;o.uniform1i(c.uniforms.u_image,0),o.uniform1f(c.uniforms.u_gridSize,D),o.uniform1f(c.uniforms.u_dotScale,e.dotScale||1),o.uniform1f(c.uniforms.u_angle,e.angle||45),o.uniform1i(c.uniforms.u_shape,v),o.uniform1f(c.uniforms.u_softness,e.softness||.5),o.uniform1f(c.uniforms.u_contrast,e.contrast||0),o.uniform1i(c.uniforms.u_invert,e.invert?1:0),o.uniform1i(c.uniforms.u_colorMode,R),o.uniform3f(c.uniforms.u_dotColor,f[0],f[1],f[2]),o.uniform3f(c.uniforms.u_backgroundColor,g[0],g[1],g[2]),o.uniform1f(c.uniforms.u_mixOriginal,e.mixOriginal||0),o.uniform2f(c.uniforms.u_resolution,s,l),o.drawArrays(o.TRIANGLES,0,6)}_renderAscii(e,t,s,l,u=1,i=1){const o=this.gl,c=this.programs.ascii,f=e.charset||Re.STANDARD;this._updateCharacterAtlas(f),this._useProgram(c,u),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,t),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,this.textures.charAtlas);const g=e.cellSize*i;o.uniform1i(c.uniforms.u_image,0),o.uniform1i(c.uniforms.u_charAtlas,1),o.uniform1f(c.uniforms.u_cellSize,g),o.uniform1i(c.uniforms.u_color,e.color?1:0),o.uniform1i(c.uniforms.u_invert,e.invert?1:0),o.uniform1i(c.uniforms.u_charCount,f.length),o.uniform2f(c.uniforms.u_resolution,s,l),o.uniform1f(c.uniforms.u_brightness,e.brightness??1),o.uniform1f(c.uniforms.u_contrast,e.contrast??1),o.uniform1f(c.uniforms.u_charBrightness,e.charBrightness??1),o.uniform1f(c.uniforms.u_backgroundBlend,e.backgroundBlend??0),o.uniform1f(c.uniforms.u_edgeEnhance,e.edgeEnhance??0),o.drawArrays(o.TRIANGLES,0,6)}_renderOverlay(e,t,s,l,u=1){const i=this.gl,o=this.programs.overlay;this._useProgram(o,u),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,t),i.activeTexture(i.TEXTURE1),i.bindTexture(i.TEXTURE_2D,this.textures.overlay||t),i.uniform1i(o.uniforms.u_image,0),i.uniform1i(o.uniforms.u_overlay,1),i.uniform1f(o.uniforms.u_intensity,e.intensity),i.uniform1f(o.uniforms.u_scale,e.scale),i.uniform1f(o.uniforms.u_rotation,e.rotation),i.uniform1i(o.uniforms.u_blendMode,this._blendModeToInt(e.blendMode)),i.uniform2f(o.uniforms.u_resolution,s,l),i.uniform1i(o.uniforms.u_hasOverlay,this.textures.overlay?1:0),i.drawArrays(i.TRIANGLES,0,6)}_renderChromatic(e,t,s,l,u=1){const i=this.gl,o=this.programs.chromatic;this._useProgram(o,u),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,t),i.uniform1i(o.uniforms.u_image,0),i.uniform1f(o.uniforms.u_intensity,e.intensity),i.uniform1f(o.uniforms.u_angle,e.angle),i.uniform1i(o.uniforms.u_radial,e.radial?1:0),i.uniform2f(o.uniforms.u_resolution,s,l),i.drawArrays(i.TRIANGLES,0,6)}_renderVignette(e,t,s,l,u=1){const i=this.gl,o=this.programs.vignette;this._useProgram(o,u),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,t);const c=this._hexToRgb(e.color);i.uniform1i(o.uniforms.u_image,0),i.uniform1f(o.uniforms.u_intensity,e.intensity),i.uniform1f(o.uniforms.u_size,e.size),i.uniform1f(o.uniforms.u_softness,e.softness),i.uniform3f(o.uniforms.u_color,c[0],c[1],c[2]),i.uniform2f(o.uniforms.u_resolution,s,l),i.drawArrays(i.TRIANGLES,0,6)}_renderScanlines(e,t,s,l,u=1,i=1){const o=this.gl,c=this.programs.scanlines;this._useProgram(c,u),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,t);const f=e.spacing*i;o.uniform1i(c.uniforms.u_image,0),o.uniform1f(c.uniforms.u_spacing,f),o.uniform1f(c.uniforms.u_thickness,e.thickness),o.uniform1f(c.uniforms.u_opacity,e.opacity),o.uniform1i(c.uniforms.u_horizontal,e.horizontal?1:0),o.uniform1f(c.uniforms.u_offset,e.offset),o.uniform2f(c.uniforms.u_resolution,s,l),o.drawArrays(o.TRIANGLES,0,6)}_renderPixelate(e,t,s,l,u=1,i=1){const o=this.gl,c=this.programs.pixelate;this._useProgram(c,u),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,t);const f=e.size*i;o.uniform1i(c.uniforms.u_image,0),o.uniform1f(c.uniforms.u_size,f),o.uniform1i(c.uniforms.u_maintainAspect,e.maintainAspect?1:0),o.uniform2f(c.uniforms.u_resolution,s,l),o.drawArrays(o.TRIANGLES,0,6)}_renderBlur(e,t,s,l,u=1,i=1){const o=this.gl,c=this.programs.blur;this._useProgram(c,u),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,t);const f={gaussian:0,radial:1,motion:2},g=e.radius*i;o.uniform1i(c.uniforms.u_image,0),o.uniform1f(c.uniforms.u_radius,g),o.uniform1i(c.uniforms.u_type,f[e.type]??0),o.uniform1f(c.uniforms.u_angle,e.angle),o.uniform2f(c.uniforms.u_resolution,s,l),o.drawArrays(o.TRIANGLES,0,6)}_renderDistortion(e,t,s,l,u=1){const i=this.gl,o=this.programs.distortion;this._useProgram(o,u),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,t);const c={wave:0,swirl:1,bulge:2};i.uniform1i(o.uniforms.u_image,0),i.uniform1i(o.uniforms.u_type,c[e.type]??0),i.uniform1f(o.uniforms.u_amplitude,e.amplitude),i.uniform1f(o.uniforms.u_frequency,e.frequency),i.uniform2f(o.uniforms.u_center,e.centerX,e.centerY),i.uniform2f(o.uniforms.u_resolution,s,l),i.drawArrays(i.TRIANGLES,0,6)}_renderPosterize(e,t,s,l,u=1){const i=this.gl,o=this.programs.posterize;this._useProgram(o,u),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,t),i.uniform1i(o.uniforms.u_image,0),i.uniform1i(o.uniforms.u_levels,e.levels),i.uniform1i(o.uniforms.u_preserveHue,e.preserveHue?1:0),i.drawArrays(i.TRIANGLES,0,6)}_renderEdge(e,t,s,l,u=1){const i=this.gl,o=this.programs.edge;this._useProgram(o,u),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,t),i.uniform1i(o.uniforms.u_image,0),i.uniform1f(o.uniforms.u_strength,e.strength),i.uniform1f(o.uniforms.u_threshold,e.threshold),i.uniform1i(o.uniforms.u_invert,e.invert?1:0),i.uniform1i(o.uniforms.u_colorize,e.colorize?1:0),i.uniform2f(o.uniforms.u_resolution,s,l),i.drawArrays(i.TRIANGLES,0,6)}_renderGrain(e,t,s,l,u,i=1,o=1){const c=this.gl,f=this.programs.grain;this._useProgram(f,i),c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,t);const g=e.size*o;c.uniform1i(f.uniforms.u_image,0),c.uniform1f(f.uniforms.u_intensity,e.intensity),c.uniform1f(f.uniforms.u_size,g),c.uniform1f(f.uniforms.u_luminanceResponse,e.luminanceResponse),c.uniform1i(f.uniforms.u_colored,e.colored?1:0),c.uniform1f(f.uniforms.u_seed,u),c.uniform2f(f.uniforms.u_resolution,s,l),c.drawArrays(c.TRIANGLES,0,6)}_renderColorGrade(e,t,s,l,u=1){const i=this.gl,o=this.programs.colorGrade;this._useProgram(o,u),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,t);const c=this._hexToRgb(e.shadows),f=this._hexToRgb(e.highlights);i.uniform1i(o.uniforms.u_image,0),i.uniform1f(o.uniforms.u_brightness,e.brightness),i.uniform1f(o.uniforms.u_contrast,e.contrast),i.uniform1f(o.uniforms.u_saturation,e.saturation),i.uniform1f(o.uniforms.u_temperature,e.temperature),i.uniform1f(o.uniforms.u_tint,e.tint),i.uniform3f(o.uniforms.u_shadows,c[0],c[1],c[2]),i.uniform3f(o.uniforms.u_highlights,f[0],f[1],f[2]),i.uniform1f(o.uniforms.u_shadowInfluence,e.shadowInfluence),i.uniform1f(o.uniforms.u_highlightInfluence,e.highlightInfluence),i.drawArrays(i.TRIANGLES,0,6)}_renderGlitch(e,t,s,l,u,i=1){const o=this.gl,c=this.programs.glitch;this._useProgram(c,i),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,t),o.uniform1i(c.uniforms.u_image,0),o.uniform1f(c.uniforms.u_intensity,e.intensity),o.uniform1f(c.uniforms.u_sliceCount,e.sliceCount),o.uniform1f(c.uniforms.u_rgbShift,e.rgbShift),o.uniform1f(c.uniforms.u_angle,e.angle),o.uniform1f(c.uniforms.u_seed,u+(e.seed||0)),o.uniform1f(c.uniforms.u_blockSize,e.blockSize),o.uniform1i(c.uniforms.u_colorShift,e.colorShift?1:0),o.uniform2f(c.uniforms.u_resolution,s,l),o.drawArrays(o.TRIANGLES,0,6)}_renderCRT(e,t,s,l,u,i=1){const o=this.gl,c=this.programs.crt;this._useProgram(c,i),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,t),o.uniform1i(c.uniforms.u_image,0),o.uniform1f(c.uniforms.u_curvature,e.curvature),o.uniform1f(c.uniforms.u_scanlineIntensity,e.scanlineIntensity),o.uniform1f(c.uniforms.u_scanlineCount,e.scanlineCount),o.uniform1f(c.uniforms.u_vignetteIntensity,e.vignetteIntensity),o.uniform1f(c.uniforms.u_brightness,e.brightness),o.uniform1f(c.uniforms.u_rgbOffset,e.rgbOffset),o.uniform1f(c.uniforms.u_flickerIntensity,e.flickerIntensity),o.uniform1f(c.uniforms.u_staticNoise,e.staticNoise),o.uniform1f(c.uniforms.u_seed,u),o.uniform2f(c.uniforms.u_resolution,s,l),o.drawArrays(o.TRIANGLES,0,6)}_renderDuotone(e,t,s,l,u=1){const i=this.gl,o=this.programs.duotone;this._useProgram(o,u),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,t);const c=this._hexToRgb(e.shadowColor),f=this._hexToRgb(e.highlightColor);i.uniform1i(o.uniforms.u_image,0),i.uniform3f(o.uniforms.u_shadowColor,c[0],c[1],c[2]),i.uniform3f(o.uniforms.u_highlightColor,f[0],f[1],f[2]),i.uniform1f(o.uniforms.u_contrast,e.contrast),i.uniform1f(o.uniforms.u_intensity,e.intensity),i.drawArrays(i.TRIANGLES,0,6)}_renderKuwahara(e,t,s,l,u=1,i=1){const o=this.gl,c=this.programs.kuwahara;this._useProgram(c,u),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,t);const f=Math.min(Math.round(e.radius*i),5);o.uniform1i(c.uniforms.u_image,0),o.uniform1i(c.uniforms.u_radius,f),o.uniform1f(c.uniforms.u_sharpness,e.sharpness),o.uniform2f(c.uniforms.u_resolution,s,l),o.drawArrays(o.TRIANGLES,0,6)}_renderBarrel(e,t,s,l,u=1){const i=this.gl,o=this.programs.barrel;this._useProgram(o,u),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,t),i.uniform1i(o.uniforms.u_image,0),i.uniform1f(o.uniforms.u_amount,e.amount),i.uniform2f(o.uniforms.u_center,e.centerX,e.centerY),i.uniform1f(o.uniforms.u_zoom,e.zoom),i.uniform2f(o.uniforms.u_resolution,s,l),i.drawArrays(i.TRIANGLES,0,6)}_renderRipple(e,t,s,l,u,i=1){const o=this.gl,c=this.programs.ripple;this._useProgram(c,i),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,t);const f=u*.01;o.uniform1i(c.uniforms.u_image,0),o.uniform1f(c.uniforms.u_amplitude,e.amplitude),o.uniform1f(c.uniforms.u_wavelength,e.wavelength),o.uniform1f(c.uniforms.u_speed,e.speed),o.uniform2f(c.uniforms.u_center,e.centerX,e.centerY),o.uniform1f(c.uniforms.u_damping,e.damping),o.uniform1f(c.uniforms.u_time,f),o.uniform2f(c.uniforms.u_resolution,s,l),o.drawArrays(o.TRIANGLES,0,6)}_renderDisplacement(e,t,s,l,u=1){const i=this.gl,o=this.programs.displacement;this._useProgram(o,u),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,t),i.activeTexture(i.TEXTURE1),i.bindTexture(i.TEXTURE_2D,this.textures.displacementMap||t),i.uniform1i(o.uniforms.u_image,0),i.uniform1i(o.uniforms.u_displacementMap,1),i.uniform1f(o.uniforms.u_scaleX,e.scaleX),i.uniform1f(o.uniforms.u_scaleY,e.scaleY),i.uniform1i(o.uniforms.u_useRedGreen,e.useRedGreen?1:0),i.uniform1i(o.uniforms.u_hasDisplacementMap,this.textures.displacementMap?1:0),i.uniform2f(o.uniforms.u_resolution,s,l),i.drawArrays(i.TRIANGLES,0,6)}_renderLightLeak(e,t,s,l,u=1){const i=this.gl,o=this.programs.lightLeak;this._useProgram(o,u),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,t);const c=this._hexToRgb(e.color1),f=this._hexToRgb(e.color2);i.uniform1i(o.uniforms.u_image,0),i.uniform3f(o.uniforms.u_color1,c[0],c[1],c[2]),i.uniform3f(o.uniforms.u_color2,f[0],f[1],f[2]),i.uniform1f(o.uniforms.u_position,e.position),i.uniform1f(o.uniforms.u_angle,e.angle),i.uniform1f(o.uniforms.u_size,e.size),i.uniform1f(o.uniforms.u_intensity,e.intensity),i.uniform1f(o.uniforms.u_softness,e.softness),i.uniform1i(o.uniforms.u_blendMode,this._blendModeToInt(e.blendMode)),i.uniform2f(o.uniforms.u_resolution,s,l),i.drawArrays(i.TRIANGLES,0,6)}_renderBloom(e,t,s,l,u=1,i=1){const o=this.gl,c=this.programs.bloom;this._useProgram(c,u),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,t);const f=e.radius*i;o.uniform1i(c.uniforms.u_image,0),o.uniform1f(c.uniforms.u_radius,f),o.uniform1f(c.uniforms.u_intensity,e.intensity),o.uniform1f(c.uniforms.u_threshold,e.threshold),o.uniform1f(c.uniforms.u_softThreshold,e.softThreshold),o.uniform1i(c.uniforms.u_blendMode,this._blendModeToInt(e.blendMode)),o.uniform2f(c.uniforms.u_resolution,s,l),o.drawArrays(o.TRIANGLES,0,6)}_renderRadialBlur(e,t,s,l,u=1){const i=this.gl,o=this.programs.radialBlur;this._useProgram(o,u),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,t),i.uniform1i(o.uniforms.u_image,0),i.uniform1f(o.uniforms.u_intensity,e.intensity),i.uniform2f(o.uniforms.u_center,e.centerX,e.centerY),i.uniform1i(o.uniforms.u_samples,e.samples),i.uniform1i(o.uniforms.u_zoom,e.zoom?1:0),i.uniform2f(o.uniforms.u_resolution,s,l),i.drawArrays(i.TRIANGLES,0,6)}_renderMosaic(e,t,s,l,u=1,i=1){const o=this.gl,c=this.programs.mosaic;this._useProgram(c,u),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,t);const f=this._hexToRgb(e.edgeColor),g=e.cellSize*i,_=e.edgeThickness*i;o.uniform1i(c.uniforms.u_image,0),o.uniform1f(c.uniforms.u_cellSize,g),o.uniform1f(c.uniforms.u_irregularity,e.irregularity),o.uniform1f(c.uniforms.u_edgeThickness,_),o.uniform3f(c.uniforms.u_edgeColor,f[0],f[1],f[2]),o.uniform1f(c.uniforms.u_colorVariation,e.colorVariation),o.uniform2f(c.uniforms.u_resolution,s,l),o.drawArrays(o.TRIANGLES,0,6)}_renderTiltShift(e,t,s,l,u=1,i=1){const o=this.gl,c=this.programs.tiltShift;this._useProgram(c,u),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,t);const f=e.blurRadius*i;o.uniform1i(c.uniforms.u_image,0),o.uniform1f(c.uniforms.u_focusPosition,e.focusPosition),o.uniform1f(c.uniforms.u_focusWidth,e.focusWidth),o.uniform1f(c.uniforms.u_blurRadius,f),o.uniform1f(c.uniforms.u_angle,e.angle),o.uniform1f(c.uniforms.u_gradientSmooth,e.gradientSmooth),o.uniform2f(c.uniforms.u_resolution,s,l),o.drawArrays(o.TRIANGLES,0,6)}_renderExposure(e,t,s,l,u=1){const i=this.gl,o=this.programs.exposure;this._useProgram(o,u),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,t),i.uniform1i(o.uniforms.u_image,0),i.uniform1f(o.uniforms.u_exposure,e.exposure),i.uniform1f(o.uniforms.u_highlights,e.highlights),i.uniform1f(o.uniforms.u_shadows,e.shadows),i.uniform1f(o.uniforms.u_blacks,e.blacks),i.uniform1f(o.uniforms.u_whites,e.whites),i.drawArrays(i.TRIANGLES,0,6)}_renderVibrance(e,t,s,l,u=1){const i=this.gl,o=this.programs.vibrance;this._useProgram(o,u),i.activeTexture(i.TEXTURE0),i.bindTexture(i.TEXTURE_2D,t),i.uniform1i(o.uniforms.u_image,0),i.uniform1f(o.uniforms.u_vibrance,e.vibrance),i.uniform1f(o.uniforms.u_saturation,e.saturation),i.drawArrays(i.TRIANGLES,0,6)}_renderDotDither(e,t,s,l,u,i=1,o=1){const c=this.gl,f=this.programs.dotDither;this._useProgram(f,i),c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,t),c.uniform1i(f.uniforms.u_image,0),c.uniform2f(f.uniforms.u_resolution,s,l),c.uniform1f(f.uniforms.u_scale,(e.scale||1)*o),c.uniform1f(f.uniforms.u_threshold,e.threshold||.5),c.uniform1i(f.uniforms.u_animated,e.animated?1:0),c.uniform1f(f.uniforms.u_time,u),c.uniform1f(f.uniforms.u_animationSpeed,e.animationSpeed||1),c.uniform1i(f.uniforms.u_invert,e.invert?1:0),c.drawArrays(c.TRIANGLES,0,6)}setDisplacementMap(e){this.textures.displacementMap&&this.gl.deleteTexture(this.textures.displacementMap),e?this.textures.displacementMap=this._createTexture(e):this.textures.displacementMap=null}_hexToRgb(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e||"#000000");return t?[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]:[0,0,0]}destroy(){const e=this.gl;Object.values(this.programs).forEach(t=>e.deleteProgram(t)),Object.values(this.textures).forEach(t=>{t&&e.deleteTexture(t)}),this.framebuffers.forEach(t=>{e.deleteFramebuffer(t.framebuffer),e.deleteTexture(t.texture)}),this.quadBuffer&&e.deleteBuffer(this.quadBuffer),this.texCoordBuffer&&e.deleteBuffer(this.texCoordBuffer)}}class Zn{constructor(e){this.canvas=e,this.ctx=e.getContext("2d"),this.imageData=null}setImage(e){this.image=e,e?(this.imageWidth=e.width,this.imageHeight=e.height):(this.imageWidth=0,this.imageHeight=0)}setOverlayTexture(e){this.overlayImage=e}render(e,t,s,l){if(!this.image)return;const u=s||this.imageWidth,i=l||this.imageHeight;this.canvas.width=u,this.canvas.height=i,this.ctx.drawImage(this.image,0,0,u,i);const o=e.filter(f=>f.enabled);if(o.length===0)return;this.imageData=this.ctx.getImageData(0,0,u,i);const c=this.imageData.data;for(const f of o)switch(f.type){case a.NOISE:this._applyNoise(c,u,i,f.params,t);break;case a.DITHER:this._applyDither(c,u,i,f.params);break;case a.HALFTONE:this._applyHalftone(c,u,i,f.params);break;case a.ASCII:this._applyAscii(u,i,f.params);return}this.ctx.putImageData(this.imageData,0,0)}_hash(e,t,s){const l=Math.sin(e*12.9898+t*78.233+s)*43758.5453;return l-Math.floor(l)}_applyNoise(e,t,s,l,u){const i=l.intensity;for(let o=0;o<e.length;o+=4){const c=o/4%t,f=Math.floor(o/4/t);let g;l.monochrome?(g=this._hash(c/l.scale,f/l.scale,u),g=(g-.5)*2*i*255,e[o]=Math.max(0,Math.min(255,e[o]+g)),e[o+1]=Math.max(0,Math.min(255,e[o+1]+g)),e[o+2]=Math.max(0,Math.min(255,e[o+2]+g))):(e[o]=Math.max(0,Math.min(255,e[o]+(this._hash(c/l.scale,f/l.scale,u)-.5)*2*i*255)),e[o+1]=Math.max(0,Math.min(255,e[o+1]+(this._hash(c/l.scale,f/l.scale,u+100)-.5)*2*i*255)),e[o+2]=Math.max(0,Math.min(255,e[o+2]+(this._hash(c/l.scale,f/l.scale,u+200)-.5)*2*i*255)))}}_getBayerValue(e,t,s){if(s===2)return[[0,2],[3,1]][t%2][e%2]/4;if(s===4)return[[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]][t%4][e%4]/16;{const l=this._getBayerValue(Math.floor(e/2),Math.floor(t/2),4),u=this._getBayerValue(e,t,2);return l*.25+u}}_applyDither(e,t,s,l){const u=l.levels,i=l.threshold,o=l.method===de.BAYER_2X2?2:l.method===de.BAYER_4X4?4:8;for(let c=0;c<e.length;c+=4){const f=c/4%t,g=Math.floor(c/4/t),_=this._getBayerValue(f,g,o)-.5,v=i/u;for(let S=0;S<3;S++){const R=e[c+S]/255+_*v,D=Math.round(R*(u-1))/(u-1);e[c+S]=Math.max(0,Math.min(255,D*255))}}}_applyHalftone(e,t,s,l){const u=l.dotSize,i=l.angle*Math.PI/180,o=Math.cos(i),c=Math.sin(i),f=new Uint8ClampedArray(e.length);f.fill(255);for(let g=0;g<s;g++)for(let _=0;_<t;_++){const v=o*_-c*g,S=c*_+o*g,R=Math.floor(v/u)*u+u/2,D=Math.floor(S/u)*u+u/2,P=Math.sqrt(Math.pow(v-R,2)+Math.pow(S-D,2)),$=Math.round(o*R+c*D),Z=Math.round(-c*R+o*D),N=(Math.max(0,Math.min(s-1,Z))*t+Math.max(0,Math.min(t-1,$)))*4,J=(e[N]*.299+e[N+1]*.587+e[N+2]*.114)/255,se=u*.5*Math.sqrt(J),K=(g*t+_)*4;P<se&&(l.monochrome?f[K]=f[K+1]=f[K+2]=0:(f[K]=e[N],f[K+1]=e[N+1],f[K+2]=e[N+2])),f[K+3]=255}for(let g=0;g<e.length;g++)e[g]=f[g]}_applyAscii(e,t,s){const l=s.cellSize,u=s.charset||Re.STANDARD,i=Math.floor(e/l),o=Math.floor(t/l);this.ctx.fillStyle=s.showBackground?s.backgroundColor:"#000",this.ctx.fillRect(0,0,e,t),this.ctx.font=`${l}px monospace`,this.ctx.textAlign="center",this.ctx.textBaseline="middle";const c=document.createElement("canvas");c.width=e,c.height=t;const f=c.getContext("2d");f.drawImage(this.image,0,0,e,t);for(let g=0;g<o;g++)for(let _=0;_<i;_++){const v=_*l+l/2,S=g*l+l/2,R=f.getImageData(_*l,g*l,l,l).data;let D=0,P=0,$=0,Z=0;for(let V=0;V<R.length;V+=4)D+=R[V],P+=R[V+1],$+=R[V+2],Z++;const N=D/Z,J=P/Z,se=$/Z,K=(N*.299+J*.587+se*.114)/255;let ee=Math.round(K*(u.length-1));s.invert&&(ee=u.length-1-ee),ee=Math.max(0,Math.min(u.length-1,ee));const pe=u[ee];s.color?this.ctx.fillStyle=`rgb(${Math.round(N)}, ${Math.round(J)}, ${Math.round(se)})`:this.ctx.fillStyle="#fff",this.ctx.fillText(pe,v,S)}this.imageData=this.ctx.getImageData(0,0,e,t)}destroy(){this.image=null,this.overlayImage=null,this.imageData=null}}function Qn(r){try{return new Kn(r)}catch(e){return console.warn("WebGL not available, falling back to CPU renderer:",e),new Zn(r)}}const Jn=r=>new Promise((e,t)=>{if(!r.type.match(/^image\/(png|jpeg|webp)$/)){t(new Error("Unsupported file type. Please use PNG, JPG, or WebP."));return}const s=new FileReader;s.onload=l=>{const u=new Image;u.onload=()=>e({image:u,url:l.target.result,corsError:!1}),u.onerror=()=>t(new Error("Failed to load image")),u.src=l.target.result},s.onerror=()=>t(new Error("Failed to read file")),s.readAsDataURL(r)}),ei=r=>new Promise((e,t)=>{if(!r.type.startsWith("video/")){t(new Error("Not a video file. Please upload a video."));return}const s=URL.createObjectURL(r),l=document.createElement("video");l.crossOrigin="anonymous",l.muted=!0,l.playsInline=!0,l.preload="auto",l.loop=!0,l.onloadedmetadata=()=>{l.currentTime=.001},l.onseeked=()=>{e({video:l,url:s,width:l.videoWidth,height:l.videoHeight,duration:l.duration,corsError:!1})},l.onerror=()=>{URL.revokeObjectURL(s),t(new Error("Failed to load video. Format may not be supported by your browser."))},l.src=s}),ti=r=>new Promise((e,t)=>{const s=document.createElement("video");s.crossOrigin="anonymous",s.muted=!0,s.playsInline=!0,s.preload="auto",s.loop=!0,s.onloadedmetadata=()=>{s.currentTime=.001},s.onseeked=()=>{try{const l=document.createElement("canvas");l.width=1,l.height=1;const u=l.getContext("2d");u.drawImage(s,0,0,1,1),u.getImageData(0,0,1,1),e({video:s,url:r,width:s.videoWidth,height:s.videoHeight,duration:s.duration,corsError:!1})}catch{e({video:s,url:r,width:s.videoWidth,height:s.videoHeight,duration:s.duration,corsError:!0})}},s.onerror=()=>{t(new Error("Failed to load video. Check the URL and try again."))},s.src=r}),nt=r=>new Promise((e,t)=>{const s=new Image;s.crossOrigin="anonymous",s.onload=()=>{try{const l=document.createElement("canvas");l.width=1,l.height=1;const u=l.getContext("2d");u.drawImage(s,0,0,1,1),u.getImageData(0,0,1,1),e({image:s,url:r,corsError:!1})}catch{e({image:s,url:r,corsError:!0})}},s.onerror=()=>{t(new Error("Failed to load image. Check the URL and try again."))},s.src=r}),It=()=>navigator.clipboard&&typeof ClipboardItem<"u"&&navigator.clipboard.write,oi=async r=>{if(!It())throw new Error("Clipboard image copy not supported in this browser");return new Promise((e,t)=>{r.toBlob(async s=>{if(!s){t(new Error("Failed to create image blob"));return}try{const l=new ClipboardItem({"image/png":s});await navigator.clipboard.write([l]),e()}catch(l){t(new Error(`Clipboard write failed: ${l.message}`))}},"image/png")})},ri=async r=>{const e=r.toDataURL("image/png");await navigator.clipboard.writeText(e)},ni=(r,e={})=>{const{format:t="png",quality:s=.92,filename:l="texture-lab-export"}=e;return new Promise((u,i)=>{const o=t==="jpg"?"image/jpeg":"image/png",c=t==="jpg"?"jpg":"png";r.toBlob(f=>{if(!f){i(new Error("Failed to create image blob"));return}const g=URL.createObjectURL(f),_=document.createElement("a");_.href=g,_.download=`${l}.${c}`,document.body.appendChild(_),_.click(),document.body.removeChild(_),URL.revokeObjectURL(g),u()},o,t==="jpg"?s:void 0)})},ii=(r,e=256)=>{const t=document.createElement("canvas");t.width=e,t.height=e;const s=t.getContext("2d"),l=s.createImageData(e,e),u=l.data,i=o=>{const c=Math.sin(o)*1e4;return c-Math.floor(c)};switch(r){case"paper":{for(let o=0;o<u.length;o+=4){const c=o/4%e,f=Math.floor(o/4/e),g=i(c*.1+f*.1),_=i(c*.05+f*.2+1e3),v=Math.round((g*.7+_*.3)*60+195);u[o]=u[o+1]=u[o+2]=v,u[o+3]=255}break}case"film-grain":{for(let o=0;o<u.length;o+=4){const c=i(o),f=Math.round(c*255);u[o]=u[o+1]=u[o+2]=f,u[o+3]=Math.round(c*100)}break}case"canvas":{for(let o=0;o<u.length;o+=4){const c=o/4%e,f=Math.floor(o/4/e),g=(Math.sin(c*.5)*.5+.5)*(Math.sin(f*.5)*.5+.5),_=i(o)*.2,v=Math.round((g+_)*60+180);u[o]=u[o+1]=u[o+2]=v,u[o+3]=255}break}case"dust":{for(let o=0;o<u.length;o+=4){const c=i(o);c>.98?(u[o]=u[o+1]=u[o+2]=0,u[o+3]=Math.round(i(o+1)*200)):c>.95?(u[o]=u[o+1]=u[o+2]=255,u[o+3]=Math.round(i(o+2)*50)):(u[o]=u[o+1]=u[o+2]=128,u[o+3]=0)}break}default:for(let o=0;o<u.length;o+=4)u[o]=u[o+1]=u[o+2]=128,u[o+3]=255}return s.putImageData(l,0,0),new Promise(o=>{const c=new Image;c.onload=()=>o(c),c.src=t.toDataURL()})};function mi({toolSelector:r}){const e=Kt({base:!0,lg:!1}),[t,s]=x.useState(!1),l=x.useRef(null),u=x.useRef(null),i=x.useRef(null),o=x.useRef(null),c=x.useRef(null),[f,g]=x.useState(wr),{image:_,video:v,mediaType:S,corsError:R,effects:D,seed:P,previewQuality:$,exportFormat:Z,exportQuality:N,exportScale:J,viewMode:se,isPlaying:K,currentTime:ee,duration:pe,isExporting:V,exportProgress:fe,exportStatus:re}=f;x.useEffect(()=>{if(l.current&&!u.current)try{u.current=Qn(l.current)}catch(E){console.error("Failed to create renderer:",E),W.create({title:"Renderer Error",description:"Failed to initialize graphics renderer.",type:"error",duration:5e3})}return()=>{u.current&&(u.current.destroy(),u.current=null)}},[]);const b=x.useCallback(()=>{if(!u.current)return;if(S==="video"&&v){u.current.updateVideoFrame(v),u.current.render(D,P,v.videoWidth,v.videoHeight);return}if(!_)return;let E=_.width,d=_.height;if($==="draft"&&(_.width>1e3||_.height>1e3)){const m=Math.min(1e3/_.width,1e3/_.height);E=Math.round(_.width*m),d=Math.round(_.height*m)}u.current.render(D,P,E,d)},[_,v,S,D,P,$]),y=x.useRef(null);x.useEffect(()=>{if(S!=="video"||!v||!K){c.current&&(cancelAnimationFrame(c.current),c.current=null);return}const E=()=>{!v.paused&&!v.ended&&(b(),g(d=>({...d,currentTime:v.currentTime})),c.current=requestAnimationFrame(E))};return c.current=requestAnimationFrame(E),()=>{c.current&&cancelAnimationFrame(c.current)}},[S,v,K,b]),x.useEffect(()=>(i.current&&clearTimeout(i.current),y.current&&cancelAnimationFrame(y.current),$==="draft"?y.current=requestAnimationFrame(()=>{b()}):i.current=setTimeout(()=>{y.current=requestAnimationFrame(()=>{b()})},150),()=>{i.current&&clearTimeout(i.current),y.current&&cancelAnimationFrame(y.current)}),[b,$]);const q=x.useRef(null);x.useEffect(()=>{(async()=>{if(!u.current)return;const d=D.find(w=>w.type==="overlay"&&w.enabled);if(!d){q.current!==null&&(u.current.setOverlayTexture(null),q.current=null);return}const{texture:m,customTextureUrl:T}=d.params,A=`${m}:${T||""}`;if(q.current!==A){if(q.current=A,m===ue.CUSTOM&&T)try{const w=await nt(T);u.current.setOverlayTexture(w.image),b()}catch{console.warn("Failed to load custom overlay texture")}else if(m!==ue.CUSTOM){const w=await ii(m);u.current.setOverlayTexture(w),b()}}})()},[D,b]);const B=x.useCallback(async(E,d)=>{o.current&&(o.current.pause(),o.current.src="",o.current=null);try{let m;d==="file"?m=await Jn(E):m=await nt(E),u.current&&u.current.setImage(m.image),g(T=>({...T,image:m.image,imageUrl:m.url,video:null,videoUrl:null,mediaType:"image",corsError:m.corsError,isPlaying:!1,currentTime:0,duration:0})),m.corsError&&W.create({title:"CORS Warning",description:"Image loaded but export/copy disabled. Re-upload locally to enable.",type:"warning",duration:5e3})}catch(m){W.create({title:"Failed to load image",description:m.message,type:"error",duration:3e3})}},[]),ne=x.useCallback(async(E,d)=>{o.current&&(o.current.pause(),o.current.src="");try{let m;d==="file"?m=await ei(E):m=await ti(E),o.current=m.video,u.current&&(u.current.setImage(m.video),u.current.updateVideoFrame(m.video),u.current.render([],0,m.video.videoWidth,m.video.videoHeight)),m.video.play(),g(T=>({...T,image:null,imageUrl:null,video:m.video,videoUrl:m.url,mediaType:"video",corsError:m.corsError,isPlaying:!0,currentTime:0,duration:m.duration})),m.corsError&&W.create({title:"CORS Warning",description:"Video loaded but export disabled. Re-upload locally to enable.",type:"warning",duration:5e3})}catch(m){W.create({title:"Failed to load video",description:m.message,type:"error",duration:3e3})}},[]),le=x.useCallback(async(E,d)=>{var T;if(d==="file")return E.type.startsWith("video/")?ne(E,d):B(E,d);const m=(T=E.split("?")[0].split(".").pop())==null?void 0:T.toLowerCase();return["mp4","webm","ogg","mov"].includes(m)?ne(E,d):B(E,d)},[B,ne]),Te=x.useCallback(()=>{o.current&&(o.current.paused?(o.current.play(),g(E=>({...E,isPlaying:!0}))):(o.current.pause(),g(E=>({...E,isPlaying:!1}))))},[]),ve=x.useCallback(E=>{o.current&&(o.current.currentTime=E,g(d=>({...d,currentTime:E})),b())},[b]),H=x.useCallback(E=>{g(d=>({...d,effects:E}))},[]),te=x.useCallback(E=>{g(d=>({...d,seed:E}))},[]),me=x.useCallback(E=>{g(d=>({...d,previewQuality:E}))},[]),Se=x.useCallback(E=>{g(d=>({...d,exportFormat:E}))},[]),ke=x.useCallback(E=>{g(d=>({...d,exportQuality:E}))},[]),Ae=x.useCallback(E=>{g(d=>({...d,exportScale:E}))},[]),De=x.useCallback(E=>{g(d=>({...d,viewMode:E}))},[]),C=x.useCallback(async()=>{if(!(!l.current||R)){if(S==="video"){W.create({title:"Cannot copy video",description:"Copy to clipboard only works for images. Use export for video.",type:"warning",duration:3e3});return}try{u.current&&_&&u.current.render(D,P,_.width,_.height),It()?(await oi(l.current),W.create({title:"Copied to clipboard",type:"success",duration:2e3})):(await ri(l.current),W.create({title:"Copied as data URL",description:"Image clipboard not supported in this browser.",type:"info",duration:3e3})),b()}catch(E){W.create({title:"Copy failed",description:E.message,type:"error",duration:3e3})}}},[R,S,_,D,P,b]),L=x.useCallback(async()=>{if(!l.current||!v||R||V)return;g(Q=>({...Q,isExporting:!0,exportProgress:0,exportStatus:"Preparing..."}));const E=!v.paused;E&&(v.pause(),g(Q=>({...Q,isPlaying:!1})));const d=v.loop;v.loop=!1;const m=v,T=l.current,A=u.current;let w=null,Y=null;try{const Q=m.duration;m.currentTime=0,await Promise.race([new Promise(U=>{const Fe=()=>{m.removeEventListener("seeked",Fe),U()};m.addEventListener("seeked",Fe)}),new Promise(U=>setTimeout(U,200))]),m.currentTime>.1&&(m.currentTime=0,await new Promise(U=>setTimeout(U,100))),A.updateVideoFrame(m),A.render(D,P,m.videoWidth,m.videoHeight),g(U=>({...U,exportStatus:"Recording..."}));const G=T.captureStream(60);Y=new MediaRecorder(G,{mimeType:"video/webm;codecs=vp9",videoBitsPerSecond:12e6});const xe=[];Y.ondataavailable=U=>{U.data.size>0&&xe.push(U.data)};const Qe=new Promise(U=>{Y.onstop=()=>U(xe)});Y.start(100),await new Promise(U=>setTimeout(U,50));const Xe=()=>{A.updateVideoFrame(m),A.render(D,P,m.videoWidth,m.videoHeight);const U=Math.round(m.currentTime/Q*100);g(Fe=>({...Fe,exportProgress:Math.min(U,100),exportStatus:"Exporting..."})),!m.ended&&!m.paused&&(w=requestAnimationFrame(Xe))};w=requestAnimationFrame(Xe),await m.play(),await new Promise(U=>{if(m.ended){U();return}m.addEventListener("ended",U,{once:!0})}),w&&(cancelAnimationFrame(w),w=null),A.updateVideoFrame(m),A.render(D,P,m.videoWidth,m.videoHeight),await new Promise(U=>setTimeout(U,200)),Y.stop();const Ve=await Qe,X=new Blob(Ve,{type:"video/webm"}),he=URL.createObjectURL(X),ye=document.createElement("a");ye.href=he,ye.download=`texture-lab-${Date.now()}.webm`,document.body.appendChild(ye),ye.click(),document.body.removeChild(ye),URL.revokeObjectURL(he),m.loop=d,m.currentTime=0,E&&(m.play(),g(U=>({...U,isPlaying:!0}))),b(),g(U=>({...U,isExporting:!1,exportProgress:0,exportStatus:""})),W.create({title:"Video exported",description:`Saved as WebM (${(X.size/1024/1024).toFixed(1)} MB)`,type:"success",duration:2e3})}catch(Q){console.error("Video export error:",Q),w&&cancelAnimationFrame(w),Y&&Y.state==="recording"&&Y.stop(),m.loop=d,m.pause(),m.currentTime=0,g(G=>({...G,isExporting:!1,exportProgress:0,exportStatus:""})),W.create({title:"Video export failed",description:Q.message,type:"error",duration:3e3})}},[v,R,V,D,P,b]),F=x.useCallback(async()=>{if(!(!l.current||R)){if(S==="video"&&v)return L();if(_)try{const E=Math.min(_.width*J,8192),d=Math.min(_.height*J,8192);u.current&&u.current.render(D,P,E,d),await ni(l.current,{format:Z,quality:N,filename:`texture-lab-${Date.now()}`}),W.create({title:"Export complete",type:"success",duration:2e3}),b()}catch(E){W.create({title:"Export failed",description:E.message,type:"error",duration:3e3})}}},[_,v,S,R,J,Z,N,D,P,b,L]),ie=x.useCallback(()=>{g(E=>({...E,effects:[],seed:Math.floor(Math.random()*1e5),previewQuality:"draft",viewMode:"preview",exportFormat:"png",exportQuality:.92,exportScale:1})),u.current&&u.current.setOverlayTexture(null)},[]),_e=x.useCallback(()=>{o.current&&(o.current.pause(),o.current.src&&URL.revokeObjectURL(o.current.src),o.current.src="",o.current=null),g(E=>({...E,image:null,imageUrl:null,video:null,videoUrl:null,mediaType:null,corsError:!1,isPlaying:!1,currentTime:0,duration:0})),u.current&&u.current.setImage(null)},[]);return n.jsxs(p,{h:"100%",w:"100%",gap:{base:0,lg:4},direction:{base:"column",lg:"row"},position:"relative",overflow:"hidden",children:[n.jsx(j,{w:"280px",flexShrink:0,h:"100%",overflow:"hidden",display:{base:"none",lg:"flex"},flexDirection:"column",children:n.jsx(ot,{image:_,video:v,mediaType:S,corsError:R,effects:D,seed:P,previewQuality:$,exportFormat:Z,exportQuality:N,exportScale:J,isExporting:V,exportProgress:fe,exportStatus:re,onMediaLoad:le,onClearMedia:_e,onEffectsChange:H,onSeedChange:te,onPreviewQualityChange:me,onExportFormatChange:Se,onExportQualityChange:ke,onExportScaleChange:Ae,onCopyToClipboard:C,onExport:F,onReset:ie,toolSelector:r})}),n.jsxs(j,{flex:1,position:"relative",borderRadius:{base:"12px",lg:"16px"},overflow:"hidden",border:"1px solid #271E37",bg:"#060010",maxWidth:"1920px",margin:"0 auto",width:"100%",minH:{base:"400px",lg:"auto"},children:[n.jsx(xn,{image:_,video:v,mediaType:S,canvasRef:l,viewMode:se,onViewModeChange:De,onMediaDrop:E=>le(E,"file"),isPlaying:K,currentTime:ee,duration:pe,onPlayPause:Te,onSeek:ve,isExporting:V}),n.jsxs(p,{as:"button",display:{base:"flex",lg:"none"},position:"absolute",bottom:6,right:4,align:"center",gap:2,bg:"#5227FF",px:4,py:2.5,borderRadius:"12px",cursor:"pointer",onClick:()=>s(!0),boxShadow:"0 4px 20px rgba(82, 39, 255, 0.4)",_active:{transform:"scale(0.95)"},transition:"transform 0.1s",zIndex:10,children:[n.jsx(O,{as:Zt,boxSize:4,color:"#fff"}),n.jsx(k,{fontSize:"13px",fontWeight:600,color:"#fff",children:"Controls"})]})]}),e&&n.jsxs(n.Fragment,{children:[n.jsx(j,{position:"fixed",top:0,left:0,right:0,bottom:0,bg:"rgba(0, 0, 0, 0.6)",opacity:t?1:0,visibility:t?"visible":"hidden",transition:"all 0.3s",zIndex:999,onClick:()=>s(!1)}),n.jsxs(j,{position:"fixed",bottom:0,left:0,right:0,bg:"#0D0716",borderTop:"1px solid #271E37",borderTopRadius:"24px",transform:t?"translateY(0)":"translateY(100%)",transition:"transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",zIndex:1e3,maxH:"85vh",overflow:"hidden",display:"flex",flexDirection:"column",children:[n.jsx(p,{justify:"center",pt:3,pb:2,cursor:"pointer",onClick:()=>s(!1),children:n.jsx(j,{w:"40px",h:"4px",bg:"#392e4e",borderRadius:"2px"})}),n.jsxs(p,{align:"center",justify:"space-between",px:4,pb:3,borderBottom:"1px solid #271E37",children:[n.jsx(k,{fontSize:"16px",fontWeight:700,color:"#fff",children:"Controls"}),n.jsx(p,{as:"button",align:"center",justify:"center",w:8,h:8,borderRadius:"8px",bg:"#170D27",cursor:"pointer",onClick:()=>s(!1),_hover:{bg:"#271E37"},children:n.jsx(O,{as:Pe,boxSize:5,color:"#988BC7"})})]}),n.jsx(j,{flex:1,overflowY:"auto",px:4,py:4,css:{"&::-webkit-scrollbar":{display:"none"},scrollbarWidth:"none"},children:n.jsx(ot,{image:_,video:v,mediaType:S,corsError:R,effects:D,seed:P,previewQuality:$,exportFormat:Z,exportQuality:N,exportScale:J,isExporting:V,exportProgress:fe,exportStatus:re,onMediaLoad:le,onClearMedia:_e,onEffectsChange:H,onSeedChange:te,onPreviewQualityChange:me,onExportFormatChange:Se,onExportQualityChange:ke,onExportScaleChange:Ae,onCopyToClipboard:C,onExport:F,onReset:ie,toolSelector:r})})]})]})]})}export{mi as default};
