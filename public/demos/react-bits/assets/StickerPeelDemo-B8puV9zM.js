import{r as ve,Z as me,j as E,B as Ni,a as Xi}from"./index-CKqfvLoB.js";import{u as Yi,C as Bi,T as Ai,P as Fi,a as Hi,b as Oi,c as zi}from"./PropTable-BzD4cJVp.js";import{C as $i}from"./Customize-BaUKAf5J.js";import{P as ze}from"./PreviewSlider-25yjOF_X.js";import{D as ji}from"./Dependencies-DmSBXzNX.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";const Gi="/demos/react-bits/assets/react-bits-sticker-DuQtTs-F.png";/*!
 * matrix 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var De,We,Qt,Tt,lt,Et,Lt,ft,ye="transform",$t=ye+"Origin",ki,yi=function(t){var n=t.ownerDocument||t;for(!(ye in t.style)&&("msTransform"in t.style)&&(ye="msTransform",$t=ye+"Origin");n.parentNode&&(n=n.parentNode););if(We=window,Lt=new Ue,n){De=n,Qt=n.documentElement,Tt=n.body,ft=De.createElementNS("http://www.w3.org/2000/svg","g"),ft.style.transform="none";var i=n.createElement("div"),o=n.createElement("div"),s=n&&(n.body||n.firstElementChild);s&&s.appendChild&&(s.appendChild(i),i.appendChild(o),i.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),ki=o.offsetParent!==i,s.removeChild(i))}return n},Wi=function(t){for(var n,i;t&&t!==Tt;)i=t._gsap,i&&i.uncache&&i.get(t,"x"),i&&!i.scaleX&&!i.scaleY&&i.renderTransform&&(i.scaleX=i.scaleY=1e-4,i.renderTransform(1,i),n?n.push(i):n=[i]),t=t.parentNode;return n},wi=[],bi=[],Vi=function(){return We.pageYOffset||De.scrollTop||Qt.scrollTop||Tt.scrollTop||0},Ui=function(){return We.pageXOffset||De.scrollLeft||Qt.scrollLeft||Tt.scrollLeft||0},Kt=function(t){return t.ownerSVGElement||((t.tagName+"").toLowerCase()==="svg"?t:null)},Qi=function f(t){if(We.getComputedStyle(t).position==="fixed")return!0;if(t=t.parentNode,t&&t.nodeType===1)return f(t)},Yt=function f(t,n){if(t.parentNode&&(De||yi(t))){var i=Kt(t),o=i?i.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=i?n?"rect":"g":"div",u=n!==2?0:100,l=n===3?100:0,m="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",d=De.createElementNS?De.createElementNS(o.replace(/^https/,"http"),s):De.createElement(s);return n&&(i?(Et||(Et=f(t)),d.setAttribute("width",.01),d.setAttribute("height",.01),d.setAttribute("transform","translate("+u+","+l+")"),Et.appendChild(d)):(lt||(lt=f(t),lt.style.cssText=m),d.style.cssText=m+"width:0.1px;height:0.1px;top:"+l+"px;left:"+u+"px",lt.appendChild(d))),d}throw"Need document and parent."},Ki=function(t){for(var n=new Ue,i=0;i<t.numberOfItems;i++)n.multiply(t.getItem(i).matrix);return n},Zi=function(t){var n=t.getCTM(),i;return n||(i=t.style[ye],t.style[ye]="none",t.appendChild(ft),n=ft.getCTM(),t.removeChild(ft),i?t.style[ye]=i:t.style.removeProperty(ye.replace(/([A-Z])/g,"-$1").toLowerCase())),n||Lt.clone()},qi=function(t,n){var i=Kt(t),o=t===i,s=i?wi:bi,u=t.parentNode,l=u&&!i&&u.shadowRoot&&u.shadowRoot.appendChild?u.shadowRoot:u,m,d,g,w,x,e;if(t===We)return t;if(s.length||s.push(Yt(t,1),Yt(t,2),Yt(t,3)),m=i?Et:lt,i)o?(g=Zi(t),w=-g.e/g.a,x=-g.f/g.d,d=Lt):t.getBBox?(g=t.getBBox(),d=t.transform?t.transform.baseVal:{},d=d.numberOfItems?d.numberOfItems>1?Ki(d):d.getItem(0).matrix:Lt,w=d.a*g.x+d.c*g.y,x=d.b*g.x+d.d*g.y):(d=new Ue,w=x=0),(o?i:u).appendChild(m),m.setAttribute("transform","matrix("+d.a+","+d.b+","+d.c+","+d.d+","+(d.e+w)+","+(d.f+x)+")");else{if(w=x=0,ki)for(d=t.offsetParent,g=t;g&&(g=g.parentNode)&&g!==d&&g.parentNode;)(We.getComputedStyle(g)[ye]+"").length>4&&(w=g.offsetLeft,x=g.offsetTop,g=0);if(e=We.getComputedStyle(t),e.position!=="absolute"&&e.position!=="fixed")for(d=t.offsetParent;u&&u!==d;)w+=u.scrollLeft||0,x+=u.scrollTop||0,u=u.parentNode;g=m.style,g.top=t.offsetTop-x+"px",g.left=t.offsetLeft-w+"px",g[ye]=e[ye],g[$t]=e[$t],g.position=e.position==="fixed"?"fixed":"absolute",l.appendChild(m)}return m},Bt=function(t,n,i,o,s,u,l){return t.a=n,t.b=i,t.c=o,t.d=s,t.e=u,t.f=l,t},Ue=function(){function f(n,i,o,s,u,l){n===void 0&&(n=1),i===void 0&&(i=0),o===void 0&&(o=0),s===void 0&&(s=1),u===void 0&&(u=0),l===void 0&&(l=0),Bt(this,n,i,o,s,u,l)}var t=f.prototype;return t.inverse=function(){var i=this.a,o=this.b,s=this.c,u=this.d,l=this.e,m=this.f,d=i*u-o*s||1e-10;return Bt(this,u/d,-o/d,-s/d,i/d,(s*m-u*l)/d,-(i*m-o*l)/d)},t.multiply=function(i){var o=this.a,s=this.b,u=this.c,l=this.d,m=this.e,d=this.f,g=i.a,w=i.c,x=i.b,e=i.d,b=i.e,_=i.f;return Bt(this,g*o+x*u,g*s+x*l,w*o+e*u,w*s+e*l,m+b*o+_*u,d+b*s+_*l)},t.clone=function(){return new f(this.a,this.b,this.c,this.d,this.e,this.f)},t.equals=function(i){var o=this.a,s=this.b,u=this.c,l=this.d,m=this.e,d=this.f;return o===i.a&&s===i.b&&u===i.c&&l===i.d&&m===i.e&&d===i.f},t.apply=function(i,o){o===void 0&&(o={});var s=i.x,u=i.y,l=this.a,m=this.b,d=this.c,g=this.d,w=this.e,x=this.f;return o.x=s*l+u*d+w||0,o.y=s*m+u*g+x||0,o},f}();function Ge(f,t,n,i){if(!f||!f.parentNode||(De||yi(f)).documentElement===f)return new Ue;var o=Wi(f),s=Kt(f),u=s?wi:bi,l=qi(f),m=u[0].getBoundingClientRect(),d=u[1].getBoundingClientRect(),g=u[2].getBoundingClientRect(),w=l.parentNode,x=Qi(f),e=new Ue((d.left-m.left)/100,(d.top-m.top)/100,(g.left-m.left)/100,(g.top-m.top)/100,m.left+(x?0:Ui()),m.top+(x?0:Vi()));if(w.removeChild(l),o)for(m=o.length;m--;)d=o[m],d.scaleX=d.scaleY=0,d.renderTransform(1,d);return t?e.inverse():e}function si(f){if(f===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f}function Ji(f,t){f.prototype=Object.create(t.prototype),f.prototype.constructor=f,f.__proto__=t}var D,B,oe,we,Ce,At,Te,jt,ct,Be,Ei,Gt,ht,Zt,dt,xe,ut,St,Si,Wt,Rt=0,Pi=function(){return typeof window<"u"},Li=function(){return D||Pi()&&(D=window.gsap)&&D.registerPlugin&&D},Ye=function(t){return typeof t=="function"},pt=function(t){return typeof t=="object"},ke=function(t){return typeof t>"u"},Pt=function(){return!1},gt="transform",Vt="transformOrigin",Ne=function(t){return Math.round(t*1e4)/1e4},st=Array.isArray,wt=function(t,n){var i=oe.createElementNS?oe.createElementNS("http://www.w3.org/1999/xhtml".replace(/^https/,"http"),t):oe.createElement(t);return i.style?i:oe.createElement(t)},li=180/Math.PI,$e=1e20,en=new Ue,Xe=Date.now||function(){return new Date().getTime()},Ve=[],Ze={},tn=0,nn=/^(?:a|input|textarea|button|select)$/i,ci=0,Qe={},Re={},Ri=function(t,n){var i={},o;for(o in t)i[o]=n?t[o]*n:t[o];return i},rn=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},di=function f(t,n){for(var i=t.length,o;i--;)n?t[i].style.touchAction=n:t[i].style.removeProperty("touch-action"),o=t[i].children,o&&o.length&&f(o,n)},Ti=function(){return Ve.forEach(function(t){return t()})},on=function(t){Ve.push(t),Ve.length===1&&D.ticker.add(Ti)},ui=function(){return!Ve.length&&D.ticker.remove(Ti)},fi=function(t){for(var n=Ve.length;n--;)Ve[n]===t&&Ve.splice(n,1);D.to(ui,{overwrite:!0,delay:15,duration:0,onComplete:ui,data:"_draggable"})},an=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},Z=function(t,n,i,o){if(t.addEventListener){var s=ht[n];o=o||(Ei?{passive:!1}:null),t.addEventListener(s||n,i,o),s&&n!==s&&t.addEventListener(n,i,o)}},U=function(t,n,i,o){if(t.removeEventListener){var s=ht[n];t.removeEventListener(s||n,i,o),s&&n!==s&&t.removeEventListener(n,i,o)}},de=function(t){t.preventDefault&&t.preventDefault(),t.preventManipulation&&t.preventManipulation()},sn=function(t,n){for(var i=t.length;i--;)if(t[i].identifier===n)return!0},ln=function f(t){Zt=t.touches&&Rt<t.touches.length,U(t.target,"touchend",f)},pi=function(t){Zt=t.touches&&Rt<t.touches.length,Z(t.target,"touchend",ln)},qe=function(t){return B.pageYOffset||t.scrollTop||t.documentElement.scrollTop||t.body.scrollTop||0},Je=function(t){return B.pageXOffset||t.scrollLeft||t.documentElement.scrollLeft||t.body.scrollLeft||0},gi=function f(t,n){Z(t,"scroll",n),et(t.parentNode)||f(t.parentNode,n)},hi=function f(t,n){U(t,"scroll",n),et(t.parentNode)||f(t.parentNode,n)},et=function(t){return!t||t===we||t.nodeType===9||t===oe.body||t===B||!t.nodeType||!t.parentNode},vi=function(t,n){var i=n==="x"?"Width":"Height",o="scroll"+i,s="client"+i;return Math.max(0,et(t)?Math.max(we[o],Ce[o])-(B["inner"+i]||we[s]||Ce[s]):t[o]-t[s])},Ft=function f(t,n){var i=vi(t,"x"),o=vi(t,"y");et(t)?t=Re:f(t.parentNode,n),t._gsMaxScrollX=i,t._gsMaxScrollY=o,n||(t._gsScrollX=t.scrollLeft||0,t._gsScrollY=t.scrollTop||0)},Ht=function(t,n,i){var o=t.style;o&&(ke(o[n])&&(n=ct(n,t)||n),i==null?o.removeProperty&&o.removeProperty(n.replace(/([A-Z])/g,"-$1").toLowerCase()):o[n]=i)},vt=function(t){return B.getComputedStyle(t instanceof Element?t:t.host||(t.parentNode||{}).host||t)},je={},Ke=function(t){if(t===B)return je.left=je.top=0,je.width=je.right=we.clientWidth||t.innerWidth||Ce.clientWidth||0,je.height=je.bottom=(t.innerHeight||0)-20<we.clientHeight?we.clientHeight:t.innerHeight||Ce.clientHeight||0,je;var n=t.ownerDocument||oe,i=ke(t.pageX)?!t.nodeType&&!ke(t.left)&&!ke(t.top)?t:Be(t)[0].getBoundingClientRect():{left:t.pageX-Je(n),top:t.pageY-qe(n),right:t.pageX-Je(n)+1,bottom:t.pageY-qe(n)+1};return ke(i.right)&&!ke(i.width)?(i.right=i.left+i.width,i.bottom=i.top+i.height):ke(i.width)&&(i={width:i.right-i.left,height:i.bottom-i.top,right:i.right,left:i.left,bottom:i.bottom,top:i.top}),i},j=function(t,n,i){var o=t.vars,s=o[i],u=t._listeners[n],l;return Ye(s)&&(l=s.apply(o.callbackScope||t,o[i+"Params"]||[t.pointerEvent])),u&&t.dispatchEvent(n)===!1&&(l=!1),l},mi=function(t,n){var i=Be(t)[0],o,s,u;return!i.nodeType&&i!==B?ke(t.left)?(s=t.min||t.minX||t.minRotation||0,o=t.min||t.minY||0,{left:s,top:o,width:(t.max||t.maxX||t.maxRotation||0)-s,height:(t.max||t.maxY||0)-o}):(u={x:0,y:0},{left:t.left-u.x,top:t.top-u.y,width:t.width,height:t.height}):cn(i,n)},ue={},cn=function(t,n){n=Be(n)[0];var i=t.getBBox&&t.ownerSVGElement,o=t.ownerDocument||oe,s,u,l,m,d,g,w,x,e,b,_,O,A;if(t===B)l=qe(o),s=Je(o),u=s+(o.documentElement.clientWidth||t.innerWidth||o.body.clientWidth||0),m=l+((t.innerHeight||0)-20<o.documentElement.clientHeight?o.documentElement.clientHeight:t.innerHeight||o.body.clientHeight||0);else{if(n===B||ke(n))return t.getBoundingClientRect();s=l=0,i?(b=t.getBBox(),_=b.width,O=b.height):(t.viewBox&&(b=t.viewBox.baseVal)&&(s=b.x||0,l=b.y||0,_=b.width,O=b.height),_||(A=vt(t),b=A.boxSizing==="border-box",_=(parseFloat(A.width)||t.clientWidth||0)+(b?0:parseFloat(A.borderLeftWidth)+parseFloat(A.borderRightWidth)),O=(parseFloat(A.height)||t.clientHeight||0)+(b?0:parseFloat(A.borderTopWidth)+parseFloat(A.borderBottomWidth)))),u=_,m=O}return t===n?{left:s,top:l,width:u-s,height:m-l}:(d=Ge(n,!0).multiply(Ge(t)),g=d.apply({x:s,y:l}),w=d.apply({x:u,y:l}),x=d.apply({x:u,y:m}),e=d.apply({x:s,y:m}),s=Math.min(g.x,w.x,x.x,e.x),l=Math.min(g.y,w.y,x.y,e.y),{left:s,top:l,width:Math.max(g.x,w.x,x.x,e.x)-s,height:Math.max(g.y,w.y,x.y,e.y)-l})},Ot=function(t,n,i,o,s,u){var l={},m,d,g;if(n)if(s!==1&&n instanceof Array){if(l.end=m=[],g=n.length,pt(n[0]))for(d=0;d<g;d++)m[d]=Ri(n[d],s);else for(d=0;d<g;d++)m[d]=n[d]*s;i+=1.1,o-=1.1}else Ye(n)?l.end=function(w){var x=n.call(t,w),e,b;if(s!==1)if(pt(x)){e={};for(b in x)e[b]=x[b]*s;x=e}else x*=s;return x}:l.end=n;return(i||i===0)&&(l.max=i),(o||o===0)&&(l.min=o),u&&(l.velocity=0),l},dn=function f(t){var n;return!t||!t.getAttribute||t===Ce?!1:(n=t.getAttribute("data-clickable"))==="true"||n!=="false"&&(nn.test(t.nodeName+"")||t.getAttribute("contentEditable")==="true")?!0:f(t.parentNode)},bt=function(t,n){for(var i=t.length,o;i--;)o=t[i],o.ondragstart=o.onselectstart=n?null:Pt,D.set(o,{lazy:!0,userSelect:n?"text":"none"})},un=function f(t){if(vt(t).position==="fixed")return!0;if(t=t.parentNode,t&&t.nodeType===1)return f(t)},Di,Ut,fn=function(t,n){t=D.utils.toArray(t)[0],n=n||{};var i=document.createElement("div"),o=i.style,s=t.firstChild,u=0,l=0,m=t.scrollTop,d=t.scrollLeft,g=t.scrollWidth,w=t.scrollHeight,x=0,e=0,b=0,_,O,A,Pe,R,G;Di&&n.force3D!==!1?(R="translate3d(",G="px,0px)"):gt&&(R="translate(",G="px)"),this.scrollTop=function(S,F){if(!arguments.length)return-this.top();this.top(-S,F)},this.scrollLeft=function(S,F){if(!arguments.length)return-this.left();this.left(-S,F)},this.left=function(S,F){if(!arguments.length)return-(t.scrollLeft+l);var N=t.scrollLeft-d,T=l;if((N>2||N<-2)&&!F){d=t.scrollLeft,D.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-d),n.onKill&&n.onKill();return}S=-S,S<0?(l=S-.5|0,S=0):S>e?(l=S-e|0,S=e):l=0,(l||T)&&(this._skip||(o[gt]=R+-l+"px,"+-u+G),l+x>=0&&(o.paddingRight=l+x+"px")),t.scrollLeft=S|0,d=t.scrollLeft},this.top=function(S,F){if(!arguments.length)return-(t.scrollTop+u);var N=t.scrollTop-m,T=u;if((N>2||N<-2)&&!F){m=t.scrollTop,D.killTweensOf(this,{top:1,scrollTop:1}),this.top(-m),n.onKill&&n.onKill();return}S=-S,S<0?(u=S-.5|0,S=0):S>b?(u=S-b|0,S=b):u=0,(u||T)&&(this._skip||(o[gt]=R+-l+"px,"+-u+G)),t.scrollTop=S|0,m=t.scrollTop},this.maxScrollTop=function(){return b},this.maxScrollLeft=function(){return e},this.disable=function(){for(s=i.firstChild;s;)Pe=s.nextSibling,t.appendChild(s),s=Pe;t===i.parentNode&&t.removeChild(i)},this.enable=function(){if(s=t.firstChild,s!==i){for(;s;)Pe=s.nextSibling,i.appendChild(s),s=Pe;t.appendChild(i),this.calibrate()}},this.calibrate=function(S){var F=t.clientWidth===_,N,T,ne;m=t.scrollTop,d=t.scrollLeft,!(F&&t.clientHeight===O&&i.offsetHeight===A&&g===t.scrollWidth&&w===t.scrollHeight&&!S)&&((u||l)&&(T=this.left(),ne=this.top(),this.left(-t.scrollLeft),this.top(-t.scrollTop)),N=vt(t),(!F||S)&&(o.display="block",o.width="auto",o.paddingRight="0px",x=Math.max(0,t.scrollWidth-t.clientWidth),x&&(x+=parseFloat(N.paddingLeft)+(Ut?parseFloat(N.paddingRight):0))),o.display="inline-block",o.position="relative",o.overflow="visible",o.verticalAlign="top",o.boxSizing="content-box",o.width="100%",o.paddingRight=x+"px",Ut&&(o.paddingBottom=N.paddingBottom),_=t.clientWidth,O=t.clientHeight,g=t.scrollWidth,w=t.scrollHeight,e=t.scrollWidth-_,b=t.scrollHeight-O,A=i.offsetHeight,o.display="block",(T||ne)&&(this.left(T),this.top(ne)))},this.content=i,this.element=t,this._skip=!1,this.enable()},zt=function(t){if(Pi()&&document.body){var n=window&&window.navigator;B=window,oe=document,we=oe.documentElement,Ce=oe.body,At=wt("div"),St=!!window.PointerEvent,Te=wt("div"),Te.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",ut=Te.style.cursor==="grab"?"grab":"move",dt=n&&n.userAgent.toLowerCase().indexOf("android")!==-1,Gt="ontouchstart"in we&&"orientation"in B||n&&(n.MaxTouchPoints>0||n.msMaxTouchPoints>0),Ut=function(){var i=wt("div"),o=wt("div"),s=o.style,u=Ce,l;return s.display="inline-block",s.position="relative",i.style.cssText="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",i.appendChild(o),u.appendChild(i),l=o.offsetHeight+18>i.scrollHeight,u.removeChild(i),l}(),ht=function(i){for(var o=i.split(","),s=("onpointerdown"in At?"pointerdown,pointermove,pointerup,pointercancel":"onmspointerdown"in At?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":i).split(","),u={},l=4;--l>-1;)u[o[l]]=s[l],u[s[l]]=o[l];try{we.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){Ei=1}}))}catch{}return u}("touchstart,touchmove,touchend,touchcancel"),Z(oe,"touchcancel",Pt),Z(B,"touchmove",Pt),Ce&&Ce.addEventListener("touchstart",Pt),Z(oe,"contextmenu",function(){for(var i in Ze)Ze[i].isPressed&&Ze[i].endDrag()}),D=jt=Li()}D?(xe=D.plugins.inertia,Si=D.core.context||function(){},ct=D.utils.checkPrefix,gt=ct(gt),Vt=ct(Vt),Be=D.utils.toArray,Wt=D.core.getStyleSaver,Di=!!ct("perspective")):t&&console.warn("Please gsap.registerPlugin(Draggable)")},pn=function(){function f(n){this._listeners={},this.target=n||this}var t=f.prototype;return t.addEventListener=function(i,o){var s=this._listeners[i]||(this._listeners[i]=[]);~s.indexOf(o)||s.push(o)},t.removeEventListener=function(i,o){var s=this._listeners[i],u=s&&s.indexOf(o);u>=0&&s.splice(u,1)},t.dispatchEvent=function(i){var o=this,s;return(this._listeners[i]||[]).forEach(function(u){return u.call(o,{type:i,target:o.target})===!1&&(s=!1)}),s},f}(),tt=function(f){Ji(t,f);function t(n,i){var o;o=f.call(this)||this,jt||zt(1),n=Be(n)[0],o.styles=Wt&&Wt(n,"transform,left,top"),xe||(xe=D.plugins.inertia),o.vars=i=Ri(i||{}),o.target=n,o.x=o.y=o.rotation=0,o.dragResistance=parseFloat(i.dragResistance)||0,o.edgeResistance=isNaN(i.edgeResistance)?1:parseFloat(i.edgeResistance)||0,o.lockAxis=i.lockAxis,o.autoScroll=i.autoScroll||0,o.lockedAxis=null,o.allowEventDefault=!!i.allowEventDefault,D.getProperty(n,"x");var s=(i.type||"x,y").toLowerCase(),u=~s.indexOf("x")||~s.indexOf("y"),l=s.indexOf("rotation")!==-1,m=l?"rotation":u?"x":"left",d=u?"y":"top",g=!!(~s.indexOf("x")||~s.indexOf("left")||s==="scroll"),w=!!(~s.indexOf("y")||~s.indexOf("top")||s==="scroll"),x=i.minimumMovement||2,e=si(o),b=Be(i.trigger||i.handle||n),_={},O=0,A=!1,Pe=i.autoScrollMarginTop||40,R=i.autoScrollMarginRight||40,G=i.autoScrollMarginBottom||40,S=i.autoScrollMarginLeft||40,F=i.clickableTest||dn,N=0,T=n._gsap||D.core.getCache(n),ne=un(n),fe=function(r,c){return parseFloat(T.get(n,r,c))},M=n.ownerDocument||oe,ae,P,be,Ee,J,Q,Ae,qt,Jt,z,H,K,W,mt,se,it,q,Dt,_e,Me,Fe,nt,ee,I,ei,le,pe,Ct,_t,ti,re,ii,xt,ni=function(r){return de(r),r.stopImmediatePropagation&&r.stopImmediatePropagation(),!1},Se=function y(r){if(e.autoScroll&&e.isDragging&&(A||q)){var c=n,a=e.autoScroll*15,p,h,v,L,k,X,C,Y;for(A=!1,Re.scrollTop=B.pageYOffset!=null?B.pageYOffset:M.documentElement.scrollTop!=null?M.documentElement.scrollTop:M.body.scrollTop,Re.scrollLeft=B.pageXOffset!=null?B.pageXOffset:M.documentElement.scrollLeft!=null?M.documentElement.scrollLeft:M.body.scrollLeft,L=e.pointerX-Re.scrollLeft,k=e.pointerY-Re.scrollTop;c&&!h;)h=et(c.parentNode),p=h?Re:c.parentNode,v=h?{bottom:Math.max(we.clientHeight,B.innerHeight||0),right:Math.max(we.clientWidth,B.innerWidth||0),left:0,top:0}:p.getBoundingClientRect(),X=C=0,w&&(Y=p._gsMaxScrollY-p.scrollTop,Y<0?C=Y:k>v.bottom-G&&Y?(A=!0,C=Math.min(Y,a*(1-Math.max(0,v.bottom-k)/G)|0)):k<v.top+Pe&&p.scrollTop&&(A=!0,C=-Math.min(p.scrollTop,a*(1-Math.max(0,k-v.top)/Pe)|0)),C&&(p.scrollTop+=C)),g&&(Y=p._gsMaxScrollX-p.scrollLeft,Y<0?X=Y:L>v.right-R&&Y?(A=!0,X=Math.min(Y,a*(1-Math.max(0,v.right-L)/R)|0)):L<v.left+S&&p.scrollLeft&&(A=!0,X=-Math.min(p.scrollLeft,a*(1-Math.max(0,L-v.left)/S)|0)),X&&(p.scrollLeft+=X)),h&&(X||C)&&(B.scrollTo(p.scrollLeft,p.scrollTop),at(e.pointerX+X,e.pointerY+C)),c=p}if(q){var $=e.x,ie=e.y;l?(e.deltaX=$-parseFloat(T.rotation),e.rotation=$,T.rotation=$+"deg",T.renderTransform(1,T)):P?(w&&(e.deltaY=ie-P.top(),P.top(ie)),g&&(e.deltaX=$-P.left(),P.left($))):u?(w&&(e.deltaY=ie-parseFloat(T.y),T.y=ie+"px"),g&&(e.deltaX=$-parseFloat(T.x),T.x=$+"px"),T.renderTransform(1,T)):(w&&(e.deltaY=ie-parseFloat(n.style.top||0),n.style.top=ie+"px"),g&&(e.deltaX=$-parseFloat(n.style.left||0),n.style.left=$+"px")),qt&&!r&&!Ct&&(Ct=!0,j(e,"drag","onDrag")===!1&&(g&&(e.x-=e.deltaX),w&&(e.y-=e.deltaY),y(!0)),Ct=!1)}q=!1},He=function(r,c){var a=e.x,p=e.y,h,v;n._gsap||(T=D.core.getCache(n)),T.uncache&&D.getProperty(n,"x"),u?(e.x=parseFloat(T.x),e.y=parseFloat(T.y)):l?e.x=e.rotation=parseFloat(T.rotation):P?(e.y=P.top(),e.x=P.left()):(e.y=parseFloat(n.style.top||(v=vt(n))&&v.top)||0,e.x=parseFloat(n.style.left||(v||{}).left)||0),(_e||Me||Fe)&&!c&&(e.isDragging||e.isThrowing)&&(Fe&&(Qe.x=e.x,Qe.y=e.y,h=Fe(Qe),h.x!==e.x&&(e.x=h.x,q=!0),h.y!==e.y&&(e.y=h.y,q=!0)),_e&&(h=_e(e.x),h!==e.x&&(e.x=h,l&&(e.rotation=h),q=!0)),Me&&(h=Me(e.y),h!==e.y&&(e.y=h),q=!0)),q&&Se(!0),r||(e.deltaX=e.x-a,e.deltaY=e.y-p,j(e,"throwupdate","onThrowUpdate"))},Mt=function(r,c,a,p){return c==null&&(c=-$e),a==null&&(a=$e),Ye(r)?function(h){var v=e.isPressed?1-e.edgeResistance:1;return r.call(e,(h>a?a+(h-a)*v:h<c?c+(h-c)*v:h)*p)*p}:st(r)?function(h){for(var v=r.length,L=0,k=$e,X,C;--v>-1;)X=r[v],C=X-h,C<0&&(C=-C),C<k&&X>=c&&X<=a&&(L=v,k=C);return r[L]}:isNaN(r)?function(h){return h}:function(){return r*p}},Ci=function(r,c,a,p,h,v,L){return v=v&&v<$e?v*v:$e,Ye(r)?function(k){var X=e.isPressed?1-e.edgeResistance:1,C=k.x,Y=k.y,$,ie,Le;return k.x=C=C>a?a+(C-a)*X:C<c?c+(C-c)*X:C,k.y=Y=Y>h?h+(Y-h)*X:Y<p?p+(Y-p)*X:Y,$=r.call(e,k),$!==k&&(k.x=$.x,k.y=$.y),L!==1&&(k.x*=L,k.y*=L),v<$e&&(ie=k.x-C,Le=k.y-Y,ie*ie+Le*Le>v&&(k.x=C,k.y=Y)),k}:st(r)?function(k){for(var X=r.length,C=0,Y=$e,$,ie,Le,ce;--X>-1;)Le=r[X],$=Le.x-k.x,ie=Le.y-k.y,ce=$*$+ie*ie,ce<Y&&(C=X,Y=ce);return Y<=v?r[C]:k}:function(k){return k}},It=function(){var r,c,a,p;Ae=!1,P?(P.calibrate(),e.minX=H=-P.maxScrollLeft(),e.minY=W=-P.maxScrollTop(),e.maxX=z=e.maxY=K=0,Ae=!0):i.bounds&&(r=mi(i.bounds,n.parentNode),l?(e.minX=H=r.left,e.maxX=z=r.left+r.width,e.minY=W=e.maxY=K=0):!ke(i.bounds.maxX)||!ke(i.bounds.maxY)?(r=i.bounds,e.minX=H=r.minX,e.minY=W=r.minY,e.maxX=z=r.maxX,e.maxY=K=r.maxY):(c=mi(n,n.parentNode),e.minX=H=Math.round(fe(m,"px")+r.left-c.left),e.minY=W=Math.round(fe(d,"px")+r.top-c.top),e.maxX=z=Math.round(H+(r.width-c.width)),e.maxY=K=Math.round(W+(r.height-c.height))),H>z&&(e.minX=z,e.maxX=z=H,H=e.minX),W>K&&(e.minY=K,e.maxY=K=W,W=e.minY),l&&(e.minRotation=H,e.maxRotation=z),Ae=!0),i.liveSnap&&(a=i.liveSnap===!0?i.snap||{}:i.liveSnap,p=st(a)||Ye(a),l?(_e=Mt(p?a:a.rotation,H,z,1),Me=null):a.points?Fe=Ci(p?a:a.points,H,z,W,K,a.radius,P?-1:1):(g&&(_e=Mt(p?a:a.x||a.left||a.scrollLeft,H,z,P?-1:1)),w&&(Me=Mt(p?a:a.y||a.top||a.scrollTop,W,K,P?-1:1))))},_i=function(){e.isThrowing=!1,j(e,"throwcomplete","onThrowComplete")},Mi=function(){e.isThrowing=!1},Nt=function(r,c){var a,p,h,v;r&&xe?(r===!0&&(a=i.snap||i.liveSnap||{},p=st(a)||Ye(a),r={resistance:(i.throwResistance||i.resistance||1e3)/(l?10:1)},l?r.rotation=Ot(e,p?a:a.rotation,z,H,1,c):(g&&(r[m]=Ot(e,p?a:a.points||a.x||a.left,z,H,P?-1:1,c||e.lockedAxis==="x")),w&&(r[d]=Ot(e,p?a:a.points||a.y||a.top,K,W,P?-1:1,c||e.lockedAxis==="y")),(a.points||st(a)&&pt(a[0]))&&(r.linkedProps=m+","+d,r.radius=a.radius))),e.isThrowing=!0,v=isNaN(i.overshootTolerance)?i.edgeResistance===1?0:1-e.edgeResistance+.2:i.overshootTolerance,r.duration||(r.duration={max:Math.max(i.minDuration||0,"maxDuration"in i?i.maxDuration:2),min:isNaN(i.minDuration)?v===0||pt(r)&&r.resistance>1e3?0:.5:i.minDuration,overshoot:v}),e.tween=h=D.to(P||n,{inertia:r,data:"_draggable",inherit:!1,onComplete:_i,onInterrupt:Mi,onUpdate:i.fastMode?j:He,onUpdateParams:i.fastMode?[e,"onthrowupdate","onThrowUpdate"]:a&&a.radius?[!1,!0]:[]}),i.fastMode||(P&&(P._skip=!0),h.render(1e9,!0,!0),He(!0,!0),e.endX=e.x,e.endY=e.y,l&&(e.endRotation=e.x),h.play(0),He(!0,!0),P&&(P._skip=!1))):Ae&&e.applyBounds()},ri=function(r){var c=I,a;I=Ge(n.parentNode,!0),r&&e.isPressed&&!I.equals(c||new Ue)&&(a=c.inverse().apply({x:be,y:Ee}),I.apply(a,a),be=a.x,Ee=a.y),I.equals(en)&&(I=null)},kt=function(){var r=1-e.edgeResistance,c=ne?Je(M):0,a=ne?qe(M):0,p,h,v;u&&(T.x=fe(m,"px")+"px",T.y=fe(d,"px")+"px",T.renderTransform()),ri(!1),ue.x=e.pointerX-c,ue.y=e.pointerY-a,I&&I.apply(ue,ue),be=ue.x,Ee=ue.y,q&&(at(e.pointerX,e.pointerY),Se(!0)),ii=Ge(n),P?(It(),Q=P.top(),J=P.left()):(rt()?(He(!0,!0),It()):e.applyBounds(),l?(p=n.ownerSVGElement?[T.xOrigin-n.getBBox().x,T.yOrigin-n.getBBox().y]:(vt(n)[Vt]||"0 0").split(" "),it=e.rotationOrigin=Ge(n).apply({x:parseFloat(p[0])||0,y:parseFloat(p[1])||0}),He(!0,!0),h=e.pointerX-it.x-c,v=it.y-e.pointerY+a,J=e.x,Q=e.y=Math.atan2(v,h)*li):(Q=fe(d,"px"),J=fe(m,"px"))),Ae&&r&&(J>z?J=z+(J-z)/r:J<H&&(J=H-(H-J)/r),l||(Q>K?Q=K+(Q-K)/r:Q<W&&(Q=W-(W-Q)/r))),e.startX=J=Ne(J),e.startY=Q=Ne(Q)},rt=function(){return e.tween&&e.tween.isActive()},Ii=function(){Te.parentNode&&!rt()&&!e.isDragging&&Te.parentNode.removeChild(Te)},ot=function(r,c){var a;if(!ae||e.isPressed||!r||(r.type==="mousedown"||r.type==="pointerdown")&&!c&&Xe()-N<30&&ht[e.pointerEvent.type]){re&&r&&ae&&de(r);return}if(ei=rt(),xt=!1,e.pointerEvent=r,ht[r.type]?(ee=~r.type.indexOf("touch")?r.currentTarget||r.target:M,Z(ee,"touchend",ge),Z(ee,"touchmove",Oe),Z(ee,"touchcancel",ge),Z(M,"touchstart",pi)):(ee=null,Z(M,"mousemove",Oe)),pe=null,(!St||!ee)&&(Z(M,"mouseup",ge),r&&r.target&&Z(r.target,"mouseup",ge)),nt=F.call(e,r.target)&&i.dragClickables===!1&&!c,nt){Z(r.target,"change",ge),j(e,"pressInit","onPressInit"),j(e,"press","onPress"),bt(b,!0),re=!1;return}if(le=!ee||g===w||e.vars.allowNativeTouchScrolling===!1||e.vars.allowContextMenu&&r&&(r.ctrlKey||r.which>2)?!1:g?"y":"x",re=!le&&!e.allowEventDefault,re&&(de(r),Z(B,"touchforcechange",de)),r.changedTouches?(r=mt=r.changedTouches[0],se=r.identifier):r.pointerId?se=r.pointerId:mt=se=null,Rt++,on(Se),Ee=e.pointerY=r.pageY,be=e.pointerX=r.pageX,j(e,"pressInit","onPressInit"),(le||e.autoScroll)&&Ft(n.parentNode),n.parentNode&&e.autoScroll&&!P&&!l&&n.parentNode._gsMaxScrollX&&!Te.parentNode&&!n.getBBox&&(Te.style.width=n.parentNode.scrollWidth+"px",n.parentNode.appendChild(Te)),kt(),e.tween&&e.tween.kill(),e.isThrowing=!1,D.killTweensOf(P||n,_,!0),P&&D.killTweensOf(n,{scrollTo:1},!0),e.tween=e.lockedAxis=null,(i.zIndexBoost||!l&&!P&&i.zIndexBoost!==!1)&&(n.style.zIndex=t.zIndex++),e.isPressed=!0,qt=!!(i.onDrag||e._listeners.drag),Jt=!!(i.onMove||e._listeners.move),i.cursor!==!1||i.activeCursor)for(a=b.length;--a>-1;)D.set(b[a],{cursor:i.activeCursor||i.cursor||(ut==="grab"?"grabbing":ut)});j(e,"press","onPress")},Oe=function(r){var c=r,a,p,h,v,L,k;if(!ae||Zt||!e.isPressed||!r){re&&r&&ae&&de(r);return}if(e.pointerEvent=r,a=r.changedTouches,a){if(r=a[0],r!==mt&&r.identifier!==se){for(v=a.length;--v>-1&&(r=a[v]).identifier!==se&&r.target!==n;);if(v<0)return}}else if(r.pointerId&&se&&r.pointerId!==se)return;if(ee&&le&&!pe&&(ue.x=r.pageX-(ne?Je(M):0),ue.y=r.pageY-(ne?qe(M):0),I&&I.apply(ue,ue),p=ue.x,h=ue.y,L=Math.abs(p-be),k=Math.abs(h-Ee),(L!==k&&(L>x||k>x)||dt&&le===pe)&&(pe=L>k&&g?"x":"y",le&&pe!==le&&Z(B,"touchforcechange",de),e.vars.lockAxisOnTouchScroll!==!1&&g&&w&&(e.lockedAxis=pe==="x"?"y":"x",Ye(e.vars.onLockAxis)&&e.vars.onLockAxis.call(e,c)),dt&&le===pe))){ge(c);return}!e.allowEventDefault&&(!le||pe&&le!==pe)&&c.cancelable!==!1?(de(c),re=!0):re&&(re=!1),e.autoScroll&&(A=!0),at(r.pageX,r.pageY,Jt)},at=function(r,c,a){var p=1-e.dragResistance,h=1-e.edgeResistance,v=e.pointerX,L=e.pointerY,k=Q,X=e.x,C=e.y,Y=e.endX,$=e.endY,ie=e.endRotation,Le=q,ce,Ie,te,V,Xt,he;e.pointerX=r,e.pointerY=c,ne&&(r-=Je(M),c-=qe(M)),l?(V=Math.atan2(it.y-c,r-it.x)*li,Xt=e.y-V,Xt>180?(Q-=360,e.y=V):Xt<-180&&(Q+=360,e.y=V),e.x!==J||Math.max(Math.abs(be-r),Math.abs(Ee-c))>x?(e.y=V,te=J+(Q-V)*p):te=J):(I&&(he=r*I.a+c*I.c+I.e,c=r*I.b+c*I.d+I.f,r=he),Ie=c-Ee,ce=r-be,Ie<x&&Ie>-x&&(Ie=0),ce<x&&ce>-x&&(ce=0),(e.lockAxis||e.lockedAxis)&&(ce||Ie)&&(he=e.lockedAxis,he||(e.lockedAxis=he=g&&Math.abs(ce)>Math.abs(Ie)?"y":w?"x":null,he&&Ye(e.vars.onLockAxis)&&e.vars.onLockAxis.call(e,e.pointerEvent)),he==="y"?Ie=0:he==="x"&&(ce=0)),te=Ne(J+ce*p),V=Ne(Q+Ie*p)),(_e||Me||Fe)&&(e.x!==te||e.y!==V&&!l)&&(Fe&&(Qe.x=te,Qe.y=V,he=Fe(Qe),te=Ne(he.x),V=Ne(he.y)),_e&&(te=Ne(_e(te))),Me&&(V=Ne(Me(V)))),Ae&&(te>z?te=z+Math.round((te-z)*h):te<H&&(te=H+Math.round((te-H)*h)),l||(V>K?V=Math.round(K+(V-K)*h):V<W&&(V=Math.round(W+(V-W)*h)))),(e.x!==te||e.y!==V&&!l)&&(l?(e.endRotation=e.x=e.endX=te,q=!0):(w&&(e.y=e.endY=V,q=!0),g&&(e.x=e.endX=te,q=!0)),!a||j(e,"move","onMove")!==!1?!e.isDragging&&e.isPressed&&(e.isDragging=xt=!0,j(e,"dragstart","onDragStart")):(e.pointerX=v,e.pointerY=L,Q=k,e.x=X,e.y=C,e.endX=Y,e.endY=$,e.endRotation=ie,q=Le))},ge=function y(r,c){if(!ae||!e.isPressed||r&&se!=null&&!c&&(r.pointerId&&r.pointerId!==se&&r.target!==n||r.changedTouches&&!sn(r.changedTouches,se))){re&&r&&ae&&de(r);return}e.isPressed=!1;var a=r,p=e.isDragging,h=e.vars.allowContextMenu&&r&&(r.ctrlKey||r.which>2),v=D.delayedCall(.001,Ii),L,k,X,C,Y;if(ee?(U(ee,"touchend",y),U(ee,"touchmove",Oe),U(ee,"touchcancel",y),U(M,"touchstart",pi)):U(M,"mousemove",Oe),U(B,"touchforcechange",de),(!St||!ee)&&(U(M,"mouseup",y),r&&r.target&&U(r.target,"mouseup",y)),q=!1,p&&(O=ci=Xe(),e.isDragging=!1),fi(Se),nt&&!h){r&&(U(r.target,"change",y),e.pointerEvent=a),bt(b,!1),j(e,"release","onRelease"),j(e,"click","onClick"),nt=!1;return}for(k=b.length;--k>-1;)Ht(b[k],"cursor",i.cursor||(i.cursor!==!1?ut:null));if(Rt--,r){if(L=r.changedTouches,L&&(r=L[0],r!==mt&&r.identifier!==se)){for(k=L.length;--k>-1&&(r=L[k]).identifier!==se&&r.target!==n;);if(k<0&&!c)return}e.pointerEvent=a,e.pointerX=r.pageX,e.pointerY=r.pageY}return h&&a?(de(a),re=!0,j(e,"release","onRelease")):a&&!p?(re=!1,ei&&(i.snap||i.bounds)&&Nt(i.inertia||i.throwProps),j(e,"release","onRelease"),(!dt||a.type!=="touchmove")&&a.type.indexOf("cancel")===-1&&(j(e,"click","onClick"),Xe()-N<300&&j(e,"doubleclick","onDoubleClick"),C=a.target||n,N=Xe(),Y=function(){N!==_t&&e.enabled()&&!e.isPressed&&!a.defaultPrevented&&(C.click?C.click():M.createEvent&&(X=M.createEvent("MouseEvents"),X.initMouseEvent("click",!0,!0,B,1,e.pointerEvent.screenX,e.pointerEvent.screenY,e.pointerX,e.pointerY,!1,!1,!1,!1,0,null),C.dispatchEvent(X)))},!dt&&!a.defaultPrevented&&D.delayedCall(.05,Y))):(Nt(i.inertia||i.throwProps),!e.allowEventDefault&&a&&(i.dragClickables!==!1||!F.call(e,a.target))&&p&&(!le||pe&&le===pe)&&a.cancelable!==!1?(re=!0,de(a)):re=!1,j(e,"release","onRelease")),rt()&&v.duration(e.tween.duration()),p&&j(e,"dragend","onDragEnd"),!0},yt=function(r){if(r&&e.isDragging&&!P){var c=r.target||n.parentNode,a=c.scrollLeft-c._gsScrollX,p=c.scrollTop-c._gsScrollY;(a||p)&&(I?(be-=a*I.a+p*I.c,Ee-=p*I.d+a*I.b):(be-=a,Ee-=p),c._gsScrollX+=a,c._gsScrollY+=p,at(e.pointerX,e.pointerY))}},oi=function(r){var c=Xe(),a=c-N<100,p=c-O<50,h=a&&_t===N,v=e.pointerEvent&&e.pointerEvent.defaultPrevented,L=a&&ti===N,k=r.isTrusted||r.isTrusted==null&&a&&h;if((h||p&&e.vars.suppressClickOnDrag!==!1)&&r.stopImmediatePropagation&&r.stopImmediatePropagation(),a&&!(e.pointerEvent&&e.pointerEvent.defaultPrevented)&&(!h||k&&!L)){k&&h&&(ti=N),_t=N;return}(e.isPressed||p||a)&&(!k||!r.detail||!a||v)&&de(r),!a&&!p&&!xt&&(r&&r.target&&(e.pointerEvent=r),j(e,"click","onClick"))},ai=function(r){return I?{x:r.x*I.a+r.y*I.c+I.e,y:r.x*I.b+r.y*I.d+I.f}:{x:r.x,y:r.y}};return Dt=t.get(n),Dt&&Dt.kill(),o.startDrag=function(y,r){var c,a,p,h;ot(y||e.pointerEvent,!0),r&&!e.hitTest(y||e.pointerEvent)&&(c=Ke(y||e.pointerEvent),a=Ke(n),p=ai({x:c.left+c.width/2,y:c.top+c.height/2}),h=ai({x:a.left+a.width/2,y:a.top+a.height/2}),be-=p.x-h.x,Ee-=p.y-h.y),e.isDragging||(e.isDragging=xt=!0,j(e,"dragstart","onDragStart"))},o.drag=Oe,o.endDrag=function(y){return ge(y||e.pointerEvent,!0)},o.timeSinceDrag=function(){return e.isDragging?0:(Xe()-O)/1e3},o.timeSinceClick=function(){return(Xe()-N)/1e3},o.hitTest=function(y,r){return t.hitTest(e.target,y,r)},o.getDirection=function(y,r){var c=y==="velocity"&&xe?y:pt(y)&&!l?"element":"start",a,p,h,v,L,k;return c==="element"&&(L=Ke(e.target),k=Ke(y)),a=c==="start"?e.x-J:c==="velocity"?xe.getVelocity(n,m):L.left+L.width/2-(k.left+k.width/2),l?a<0?"counter-clockwise":"clockwise":(r=r||2,p=c==="start"?e.y-Q:c==="velocity"?xe.getVelocity(n,d):L.top+L.height/2-(k.top+k.height/2),h=Math.abs(a/p),v=h<1/r?"":a<0?"left":"right",h<r&&(v!==""&&(v+="-"),v+=p<0?"up":"down"),v)},o.applyBounds=function(y,r){var c,a,p,h,v,L;if(y&&i.bounds!==y)return i.bounds=y,e.update(!0,r);if(He(!0),It(),Ae&&!rt()){if(c=e.x,a=e.y,c>z?c=z:c<H&&(c=H),a>K?a=K:a<W&&(a=W),(e.x!==c||e.y!==a)&&(p=!0,e.x=e.endX=c,l?e.endRotation=c:e.y=e.endY=a,q=!0,Se(!0),e.autoScroll&&!e.isDragging))for(Ft(n.parentNode),h=n,Re.scrollTop=B.pageYOffset!=null?B.pageYOffset:M.documentElement.scrollTop!=null?M.documentElement.scrollTop:M.body.scrollTop,Re.scrollLeft=B.pageXOffset!=null?B.pageXOffset:M.documentElement.scrollLeft!=null?M.documentElement.scrollLeft:M.body.scrollLeft;h&&!L;)L=et(h.parentNode),v=L?Re:h.parentNode,w&&v.scrollTop>v._gsMaxScrollY&&(v.scrollTop=v._gsMaxScrollY),g&&v.scrollLeft>v._gsMaxScrollX&&(v.scrollLeft=v._gsMaxScrollX),h=v;e.isThrowing&&(p||e.endX>z||e.endX<H||e.endY>K||e.endY<W)&&Nt(i.inertia||i.throwProps,p)}return e},o.update=function(y,r,c){if(r&&e.isPressed){var a=Ge(n),p=ii.apply({x:e.x-J,y:e.y-Q}),h=Ge(n.parentNode,!0);h.apply({x:a.e-p.x,y:a.f-p.y},p),e.x-=p.x-h.e,e.y-=p.y-h.f,Se(!0),kt()}var v=e.x,L=e.y;return ri(!r),y?e.applyBounds():(q&&c&&Se(!0),He(!0)),r&&(at(e.pointerX,e.pointerY),q&&Se(!0)),e.isPressed&&!r&&(g&&Math.abs(v-e.x)>.01||w&&Math.abs(L-e.y)>.01&&!l)&&kt(),e.autoScroll&&(Ft(n.parentNode,e.isDragging),A=e.isDragging,Se(!0),hi(n,yt),gi(n,yt)),e},o.enable=function(y){var r={lazy:!0},c,a,p;if(i.cursor!==!1&&(r.cursor=i.cursor||ut),D.utils.checkPrefix("touchCallout")&&(r.touchCallout="none"),y!=="soft"){for(di(b,g===w?"none":i.allowNativeTouchScrolling&&n.scrollHeight===n.clientHeight==(n.scrollWidth===n.clientHeight)||i.allowEventDefault?"manipulation":g?"pan-y":"pan-x"),a=b.length;--a>-1;)p=b[a],St||Z(p,"mousedown",ot),Z(p,"touchstart",ot),Z(p,"click",oi,!0),D.set(p,r),p.getBBox&&p.ownerSVGElement&&g!==w&&D.set(p.ownerSVGElement,{touchAction:i.allowNativeTouchScrolling||i.allowEventDefault?"manipulation":g?"pan-y":"pan-x"}),i.allowContextMenu||Z(p,"contextmenu",ni);bt(b,!1)}return gi(n,yt),ae=!0,xe&&y!=="soft"&&xe.track(P||n,u?"x,y":l?"rotation":"top,left"),n._gsDragID=c=n._gsDragID||"d"+tn++,Ze[c]=e,P&&(P.enable(),P.element._gsDragID=c),(i.bounds||l)&&kt(),i.bounds&&e.applyBounds(),e},o.disable=function(y){for(var r=e.isDragging,c=b.length,a;--c>-1;)Ht(b[c],"cursor",null);if(y!=="soft"){for(di(b,null),c=b.length;--c>-1;)a=b[c],Ht(a,"touchCallout",null),U(a,"mousedown",ot),U(a,"touchstart",ot),U(a,"click",oi,!0),U(a,"contextmenu",ni);bt(b,!0),ee&&(U(ee,"touchcancel",ge),U(ee,"touchend",ge),U(ee,"touchmove",Oe)),U(M,"mouseup",ge),U(M,"mousemove",Oe)}return hi(n,yt),ae=!1,xe&&y!=="soft"&&(xe.untrack(P||n,u?"x,y":l?"rotation":"top,left"),e.tween&&e.tween.kill()),P&&P.disable(),fi(Se),e.isDragging=e.isPressed=nt=!1,r&&j(e,"dragend","onDragEnd"),e},o.enabled=function(y,r){return arguments.length?y?e.enable(r):e.disable(r):ae},o.kill=function(){return e.isThrowing=!1,e.tween&&e.tween.kill(),e.disable(),D.set(b,{clearProps:"userSelect"}),delete Ze[n._gsDragID],e},o.revert=function(){this.kill(),this.styles&&this.styles.revert()},~s.indexOf("scroll")&&(P=o.scrollProxy=new fn(n,rn({onKill:function(){e.isPressed&&ge(null)}},i)),n.style.overflowY=w&&!Gt?"auto":"hidden",n.style.overflowX=g&&!Gt?"auto":"hidden",n=P.content),l?_.rotation=1:(g&&(_[m]=1),w&&(_[d]=1)),T.force3D="force3D"in i?i.force3D:!0,Si(si(o)),o.enable(),o}return t.register=function(i){D=i,zt()},t.create=function(i,o){return jt||zt(!0),Be(i).map(function(s){return new t(s,o)})},t.get=function(i){return Ze[(Be(i)[0]||{})._gsDragID]},t.timeSinceDrag=function(){return(Xe()-ci)/1e3},t.hitTest=function(i,o,s){if(i===o)return!1;var u=Ke(i),l=Ke(o),m=u.top,d=u.left,g=u.right,w=u.bottom,x=u.width,e=u.height,b=l.left>g||l.right<d||l.top>w||l.bottom<m,_,O,A;return b||!s?!b:(A=(s+"").indexOf("%")!==-1,s=parseFloat(s)||0,_={left:Math.max(d,l.left),top:Math.max(m,l.top)},_.width=Math.min(g,l.right)-_.left,_.height=Math.min(w,l.bottom)-_.top,_.width<0||_.height<0?!1:A?(s*=.01,O=_.width*_.height,O>=x*e*s||O>=l.width*l.height*s):_.width>s&&_.height>s)},t}(pn);an(tt.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1});tt.zIndex=1e3;tt.version="3.13.0";Li()&&D.registerPlugin(tt);me.registerPlugin(tt);const gn=({imageSrc:f,rotate:t=30,peelBackHoverPct:n=30,peelBackActivePct:i=40,peelEasing:o="power3.out",peelHoverEasing:s="power2.out",width:u=200,shadowIntensity:l=.6,lightingIntensity:m=.1,initialPosition:d="center",peelDirection:g=0,className:w=""})=>{const x=ve.useRef(null),e=ve.useRef(null),b=ve.useRef(null),_=ve.useRef(null),O=ve.useRef(null),A=10;ve.useEffect(()=>{const R=e.current;if(!R)return;let G=0,S=0;d!=="center"&&(typeof d=="object"&&d.x!==void 0&&d.y!==void 0&&(G=d.x,S=d.y),me.set(R,{x:G,y:S}))},[d]),ve.useEffect(()=>{const R=e.current,G=R.parentNode;O.current=tt.create(R,{type:"x,y",bounds:G,inertia:!0,onDrag(){const F=me.utils.clamp(-24,24,this.deltaX*.4);me.to(R,{rotation:F,duration:.15,ease:"power1.out"})},onDragEnd(){me.to(R,{rotation:0,duration:.8,ease:"power2.out"})}})[0];const S=()=>{if(O.current){O.current.update();const F=me.getProperty(R,"x"),N=me.getProperty(R,"y"),T=G.getBoundingClientRect(),ne=R.getBoundingClientRect(),fe=T.width-ne.width,M=T.height-ne.height,ae=Math.max(0,Math.min(F,fe)),P=Math.max(0,Math.min(N,M));(ae!==F||P!==N)&&me.to(R,{x:ae,y:P,duration:.3,ease:"power2.out"})}};return window.addEventListener("resize",S),window.addEventListener("orientationchange",S),()=>{window.removeEventListener("resize",S),window.removeEventListener("orientationchange",S),O.current&&O.current.kill()}},[]),ve.useEffect(()=>{const R=S=>{var fe;const F=(fe=x.current)==null?void 0:fe.getBoundingClientRect();if(!F)return;const N=S.clientX-F.left,T=S.clientY-F.top;me.set(b.current,{attr:{x:N,y:T}}),Math.abs(g%360)!==180?me.set(_.current,{attr:{x:N,y:F.height-T}}):me.set(_.current,{attr:{x:-1e3,y:-1e3}})},G=x.current;if(G)return G.addEventListener("mousemove",R),()=>G.removeEventListener("mousemove",R)},[g]),ve.useEffect(()=>{const R=x.current;if(!R)return;const G=()=>{R.classList.add("touch-active")},S=()=>{R.classList.remove("touch-active")};return R.addEventListener("touchstart",G),R.addEventListener("touchend",S),R.addEventListener("touchcancel",S),()=>{R.removeEventListener("touchstart",G),R.removeEventListener("touchend",S),R.removeEventListener("touchcancel",S)}},[]);const Pe=ve.useMemo(()=>({"--sticker-rotate":`${t}deg`,"--sticker-p":`${A}px`,"--sticker-peelback-hover":`${n}%`,"--sticker-peelback-active":`${i}%`,"--sticker-peel-easing":o,"--sticker-peel-hover-easing":s,"--sticker-width":`${u}px`,"--sticker-shadow-opacity":l,"--sticker-lighting-constant":m,"--peel-direction":`${g}deg`}),[t,n,i,o,s,u,l,m,g]);return E.jsxs("div",{className:`draggable ${w}`,ref:e,style:Pe,children:[E.jsx("svg",{width:"0",height:"0",children:E.jsxs("defs",{children:[E.jsxs("filter",{id:"pointLight",children:[E.jsx("feGaussianBlur",{stdDeviation:"1",result:"blur"}),E.jsx("feSpecularLighting",{result:"spec",in:"blur",specularExponent:"100",specularConstant:m,lightingColor:"white",children:E.jsx("fePointLight",{ref:b,x:"100",y:"100",z:"300"})}),E.jsx("feComposite",{in:"spec",in2:"SourceGraphic",result:"lit"}),E.jsx("feComposite",{in:"lit",in2:"SourceAlpha",operator:"in"})]}),E.jsxs("filter",{id:"pointLightFlipped",children:[E.jsx("feGaussianBlur",{stdDeviation:"10",result:"blur"}),E.jsx("feSpecularLighting",{result:"spec",in:"blur",specularExponent:"100",specularConstant:m*7,lightingColor:"white",children:E.jsx("fePointLight",{ref:_,x:"100",y:"100",z:"300"})}),E.jsx("feComposite",{in:"spec",in2:"SourceGraphic",result:"lit"}),E.jsx("feComposite",{in:"lit",in2:"SourceAlpha",operator:"in"})]}),E.jsx("filter",{id:"dropShadow",children:E.jsx("feDropShadow",{dx:"2",dy:"4",stdDeviation:3*l,floodColor:"black",floodOpacity:l})}),E.jsxs("filter",{id:"expandAndFill",children:[E.jsx("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shape"}),E.jsx("feFlood",{floodColor:"rgb(179,179,179)",result:"flood"}),E.jsx("feComposite",{operator:"in",in:"flood",in2:"shape"})]})]})}),E.jsxs("div",{className:"sticker-container",ref:x,children:[E.jsx("div",{className:"sticker-main",children:E.jsx("div",{className:"sticker-lighting",children:E.jsx("img",{src:f,alt:"",className:"sticker-image",draggable:"false",onContextMenu:R=>R.preventDefault()})})}),E.jsx("div",{className:"flap",children:E.jsx("div",{className:"flap-lighting",children:E.jsx("img",{src:f,alt:"",className:"flap-image",draggable:"false",onContextMenu:R=>R.preventDefault()})})})]})]})},hn=`import { useRef, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import './StickerPeel.css';

gsap.registerPlugin(Draggable);

const StickerPeel = ({
  imageSrc,
  rotate = 30,
  peelBackHoverPct = 30,
  peelBackActivePct = 40,
  peelEasing = 'power3.out',
  peelHoverEasing = 'power2.out',
  width = 200,
  shadowIntensity = 0.6,
  lightingIntensity = 0.1,
  initialPosition = 'center',
  peelDirection = 0,
  className = ''
}) => {
  const containerRef = useRef(null);
  const dragTargetRef = useRef(null);
  const pointLightRef = useRef(null);
  const pointLightFlippedRef = useRef(null);
  const draggableInstanceRef = useRef(null);

  const defaultPadding = 10;

  useEffect(() => {
    const target = dragTargetRef.current;
    if (!target) return;

    let startX = 0,
      startY = 0;

    if (initialPosition === 'center') {
      return;
    }

    if (typeof initialPosition === 'object' && initialPosition.x !== undefined && initialPosition.y !== undefined) {
      startX = initialPosition.x;
      startY = initialPosition.y;
    }

    gsap.set(target, { x: startX, y: startY });
  }, [initialPosition]);

  useEffect(() => {
    const target = dragTargetRef.current;
    const boundsEl = target.parentNode;

    draggableInstanceRef.current = Draggable.create(target, {
      type: 'x,y',
      bounds: boundsEl,
      inertia: true,
      onDrag() {
        const rot = gsap.utils.clamp(-24, 24, this.deltaX * 0.4);
        gsap.to(target, { rotation: rot, duration: 0.15, ease: 'power1.out' });
      },
      onDragEnd() {
        const rotationEase = 'power2.out';
        const duration = 0.8;
        gsap.to(target, { rotation: 0, duration, ease: rotationEase });
      }
    })[0];

    const handleResize = () => {
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.update();

        const currentX = gsap.getProperty(target, 'x');
        const currentY = gsap.getProperty(target, 'y');

        const boundsRect = boundsEl.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        const maxX = boundsRect.width - targetRect.width;
        const maxY = boundsRect.height - targetRect.height;

        const newX = Math.max(0, Math.min(currentX, maxX));
        const newY = Math.max(0, Math.min(currentY, maxY));

        if (newX !== currentX || newY !== currentY) {
          gsap.to(target, {
            x: newX,
            y: newY,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    const updateLight = e => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.set(pointLightRef.current, { attr: { x, y } });

      const normalizedAngle = Math.abs(peelDirection % 360);
      if (normalizedAngle !== 180) {
        gsap.set(pointLightFlippedRef.current, { attr: { x, y: rect.height - y } });
      } else {
        gsap.set(pointLightFlippedRef.current, { attr: { x: -1000, y: -1000 } });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', updateLight);
      return () => container.removeEventListener('mousemove', updateLight);
    }
  }, [peelDirection]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = () => {
      container.classList.add('touch-active');
    };

    const handleTouchEnd = () => {
      container.classList.remove('touch-active');
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []);

  const cssVars = useMemo(
    () => ({
      '--sticker-rotate': \`\${rotate}deg\`,
      '--sticker-p': \`\${defaultPadding}px\`,
      '--sticker-peelback-hover': \`\${peelBackHoverPct}%\`,
      '--sticker-peelback-active': \`\${peelBackActivePct}%\`,
      '--sticker-peel-easing': peelEasing,
      '--sticker-peel-hover-easing': peelHoverEasing,
      '--sticker-width': \`\${width}px\`,
      '--sticker-shadow-opacity': shadowIntensity,
      '--sticker-lighting-constant': lightingIntensity,
      '--peel-direction': \`\${peelDirection}deg\`
    }),
    [
      rotate,
      peelBackHoverPct,
      peelBackActivePct,
      peelEasing,
      peelHoverEasing,
      width,
      shadowIntensity,
      lightingIntensity,
      peelDirection
    ]
  );

  return (
    <div className={\`draggable \${className}\`} ref={dragTargetRef} style={cssVars}>
      <svg width="0" height="0">
        <defs>
          <filter id="pointLight">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity}
              lightingColor="white"
            >
              <fePointLight ref={pointLightRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id="pointLightFlipped">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity * 7}
              lightingColor="white"
            >
              <fePointLight ref={pointLightFlippedRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id="dropShadow">
            <feDropShadow
              dx="2"
              dy="4"
              stdDeviation={3 * shadowIntensity}
              floodColor="black"
              floodOpacity={shadowIntensity}
            />
          </filter>

          <filter id="expandAndFill">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shape" />
            <feFlood floodColor="rgb(179,179,179)" result="flood" />
            <feComposite operator="in" in="flood" in2="shape" />
          </filter>
        </defs>
      </svg>

      <div className="sticker-container" ref={containerRef}>
        <div className="sticker-main">
          <div className="sticker-lighting">
            <img
              src={imageSrc}
              alt=""
              className="sticker-image"
              draggable="false"
              onContextMenu={e => e.preventDefault()}
            />
          </div>
        </div>

        <div className="flap">
          <div className="flap-lighting">
            <img
              src={imageSrc}
              alt=""
              className="flap-image"
              draggable="false"
              onContextMenu={e => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickerPeel;
`,vn=`:root {
  --sticker-rotate: 30deg;
  --sticker-p: 10px;
  --sticker-peelback-hover: 30%;
  --sticker-peelback-active: 40%;
  --sticker-peel-easing: power3.out;
  --sticker-peel-hover-easing: power2.out;
  --sticker-start: calc(-1 * var(--sticker-p));
  --sticker-end: calc(100% + var(--sticker-p));
  --sticker-shadow-opacity: 0.6;
  --sticker-lighting-constant: 0.1;
  --peel-direction: 0deg;
}

.sticker-container {
  position: relative;
  transform: rotate(var(--peel-direction));
  transform-origin: center;
}

.sticker-container * {
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}

.sticker-main {
  clip-path: polygon(
    var(--sticker-start) var(--sticker-start),
    var(--sticker-end) var(--sticker-start),
    var(--sticker-end) var(--sticker-end),
    var(--sticker-start) var(--sticker-end)
  );
  transition: clip-path 0.6s ease-out;
  filter: url(#dropShadow);
}

.sticker-main > * {
  transform: rotate(calc(-1 * var(--peel-direction)));
}

.sticker-lighting {
  filter: url(#pointLight);
}

.sticker-container:hover .sticker-main,
.sticker-container.touch-active .sticker-main {
  clip-path: polygon(
    var(--sticker-start) var(--sticker-peelback-hover),
    var(--sticker-end) var(--sticker-peelback-hover),
    var(--sticker-end) var(--sticker-end),
    var(--sticker-start) var(--sticker-end)
  );
}

.sticker-container:active .sticker-main {
  clip-path: polygon(
    var(--sticker-start) var(--sticker-peelback-active),
    var(--sticker-end) var(--sticker-peelback-active),
    var(--sticker-end) var(--sticker-end),
    var(--sticker-start) var(--sticker-end)
  );
}

.sticker-image {
  transform: rotate(var(--sticker-rotate));
}

.flap {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: calc(-100% - var(--sticker-p) - var(--sticker-p));
  clip-path: polygon(
    var(--sticker-start) var(--sticker-start),
    var(--sticker-end) var(--sticker-start),
    var(--sticker-end) var(--sticker-start),
    var(--sticker-start) var(--sticker-start)
  );
  transform: scaleY(-1);
  transition: all 0.6s ease-out;
}

.flap > * {
  transform: rotate(calc(-1 * var(--peel-direction)));
}

.sticker-container:hover .flap,
.sticker-container.touch-active .flap {
  clip-path: polygon(
    var(--sticker-start) var(--sticker-start),
    var(--sticker-end) var(--sticker-start),
    var(--sticker-end) var(--sticker-peelback-hover),
    var(--sticker-start) var(--sticker-peelback-hover)
  );
  top: calc(-100% + 2 * var(--sticker-peelback-hover) - 1px);
}

.sticker-container:active .flap {
  clip-path: polygon(
    var(--sticker-start) var(--sticker-start),
    var(--sticker-end) var(--sticker-start),
    var(--sticker-end) var(--sticker-peelback-active),
    var(--sticker-start) var(--sticker-peelback-active)
  );
  top: calc(-100% + 2 * var(--sticker-peelback-active) - 1px);
}

.flap-lighting {
  filter: url(#pointLightFlipped);
}

.flap-image {
  transform: rotate(var(--sticker-rotate));
  filter: url(#expandAndFill);
}

.draggable {
  position: absolute;
  cursor: grab;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.draggable:active {
  cursor: grabbing;
}

/* Mobile-specific optimizations */
@media (hover: none) and (pointer: coarse) {
  .draggable {
    cursor: default;
  }

  .sticker-container {
    touch-action: none;
  }
}

.sticker-image,
.flap-image {
  width: var(--sticker-width, 200px);
}

.sticker-main,
.flap {
  will-change: clip-path, transform;
}

.sticker-ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  pointer-events: none;
  z-index: 10;
}
`,mn=`import { useRef, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const StickerPeel = ({
  imageSrc,
  rotate = 30,
  peelBackHoverPct = 30,
  peelBackActivePct = 40,
  peelEasing = 'power3.out',
  peelHoverEasing = 'power2.out',
  width = 200,
  shadowIntensity = 0.6,
  lightingIntensity = 0.1,
  initialPosition = 'center',
  peelDirection = 0,
  className = ''
}) => {
  const containerRef = useRef(null);
  const dragTargetRef = useRef(null);
  const pointLightRef = useRef(null);
  const pointLightFlippedRef = useRef(null);
  const draggableInstanceRef = useRef(null);

  const defaultPadding = 10;

  useEffect(() => {
    const target = dragTargetRef.current;
    if (!target) return;

    let startX = 0,
      startY = 0;

    if (initialPosition === 'center') {
      return;
    }

    if (typeof initialPosition === 'object' && initialPosition.x !== undefined && initialPosition.y !== undefined) {
      startX = initialPosition.x;
      startY = initialPosition.y;
    }

    gsap.set(target, { x: startX, y: startY });
  }, [initialPosition]);

  useEffect(() => {
    const target = dragTargetRef.current;
    const boundsEl = target.parentNode;

    draggableInstanceRef.current = Draggable.create(target, {
      type: 'x,y',
      bounds: boundsEl,
      inertia: true,
      onDrag() {
        const rot = gsap.utils.clamp(-24, 24, this.deltaX * 0.4);
        gsap.to(target, { rotation: rot, duration: 0.15, ease: 'power1.out' });
      },
      onDragEnd() {
        const rotationEase = 'power2.out';
        const duration = 0.8;
        gsap.to(target, { rotation: 0, duration, ease: rotationEase });
      }
    })[0];

    const handleResize = () => {
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.update();

        const currentX = gsap.getProperty(target, 'x');
        const currentY = gsap.getProperty(target, 'y');

        const boundsRect = boundsEl.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        const maxX = boundsRect.width - targetRect.width;
        const maxY = boundsRect.height - targetRect.height;

        const newX = Math.max(0, Math.min(currentX, maxX));
        const newY = Math.max(0, Math.min(currentY, maxY));

        if (newX !== currentX || newY !== currentY) {
          gsap.to(target, {
            x: newX,
            y: newY,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    const updateLight = e => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.set(pointLightRef.current, { attr: { x, y } });

      const normalizedAngle = Math.abs(peelDirection % 360);
      if (normalizedAngle !== 180) {
        gsap.set(pointLightFlippedRef.current, { attr: { x, y: rect.height - y } });
      } else {
        gsap.set(pointLightFlippedRef.current, { attr: { x: -1000, y: -1000 } });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', updateLight);
      return () => container.removeEventListener('mousemove', updateLight);
    }
  }, [peelDirection]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = () => {
      container.classList.add('touch-active');
    };

    const handleTouchEnd = () => {
      container.classList.remove('touch-active');
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []);

  const cssVars = useMemo(
    () => ({
      '--sticker-rotate': \`\${rotate}deg\`,
      '--sticker-p': \`\${defaultPadding}px\`,
      '--sticker-peelback-hover': \`\${peelBackHoverPct}%\`,
      '--sticker-peelback-active': \`\${peelBackActivePct}%\`,
      '--sticker-peel-easing': peelEasing,
      '--sticker-peel-hover-easing': peelHoverEasing,
      '--sticker-width': \`\${width}px\`,
      '--sticker-shadow-opacity': shadowIntensity,
      '--sticker-lighting-constant': lightingIntensity,
      '--peel-direction': \`\${peelDirection}deg\`,
      '--sticker-start': \`calc(-1 * \${defaultPadding}px)\`,
      '--sticker-end': \`calc(100% + \${defaultPadding}px)\`
    }),
    [
      rotate,
      peelBackHoverPct,
      peelBackActivePct,
      peelEasing,
      peelHoverEasing,
      width,
      shadowIntensity,
      lightingIntensity,
      peelDirection,
      defaultPadding
    ]
  );

  const stickerMainStyle = {
    clipPath: \`polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-end), var(--sticker-start) var(--sticker-end))\`,
    transition: 'clip-path 0.6s ease-out',
    filter: 'url(#dropShadow)',
    willChange: 'clip-path, transform'
  };

  const flapStyle = {
    clipPath: \`polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-start) var(--sticker-start))\`,
    top: \`calc(-100% - var(--sticker-p) - var(--sticker-p))\`,
    transform: 'scaleY(-1)',
    transition: 'all 0.6s ease-out',
    willChange: 'clip-path, transform'
  };

  const imageStyle = {
    transform: \`rotate(calc(\${rotate}deg - \${peelDirection}deg))\`,
    width: \`\${width}px\`
  };

  const shadowImageStyle = {
    ...imageStyle,
    filter: 'url(#expandAndFill)'
  };

  return (
    <div
      className={\`absolute cursor-grab active:cursor-grabbing transform-gpu \${className}\`}
      ref={dragTargetRef}
      style={cssVars}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: \`
          .sticker-container:hover .sticker-main,
          .sticker-container.touch-active .sticker-main {
            clip-path: polygon(var(--sticker-start) var(--sticker-peelback-hover), var(--sticker-end) var(--sticker-peelback-hover), var(--sticker-end) var(--sticker-end), var(--sticker-start) var(--sticker-end)) !important;
          }
          .sticker-container:hover .sticker-flap,
          .sticker-container.touch-active .sticker-flap {
            clip-path: polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-peelback-hover), var(--sticker-start) var(--sticker-peelback-hover)) !important;
            top: calc(-100% + 2 * var(--sticker-peelback-hover) - 1px) !important;
          }
          .sticker-container:active .sticker-main {
            clip-path: polygon(var(--sticker-start) var(--sticker-peelback-active), var(--sticker-end) var(--sticker-peelback-active), var(--sticker-end) var(--sticker-end), var(--sticker-start) var(--sticker-end)) !important;
          }
          .sticker-container:active .sticker-flap {
            clip-path: polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-peelback-active), var(--sticker-start) var(--sticker-peelback-active)) !important;
            top: calc(-100% + 2 * var(--sticker-peelback-active) - 1px) !important;
          }
        \`
        }}
      />

      <svg width="0" height="0">
        <defs>
          <filter id="pointLight">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity}
              lightingColor="white"
            >
              <fePointLight ref={pointLightRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id="pointLightFlipped">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity * 7}
              lightingColor="white"
            >
              <fePointLight ref={pointLightFlippedRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id="dropShadow">
            <feDropShadow
              dx="2"
              dy="4"
              stdDeviation={3 * shadowIntensity}
              floodColor="black"
              floodOpacity={shadowIntensity}
            />
          </filter>

          <filter id="expandAndFill">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shape" />
            <feFlood floodColor="rgb(179,179,179)" result="flood" />
            <feComposite operator="in" in="flood" in2="shape" />
          </filter>
        </defs>
      </svg>

      <div
        className="sticker-container relative select-none touch-none sm:touch-auto"
        ref={containerRef}
        style={{
          WebkitUserSelect: 'none',
          userSelect: 'none',
          WebkitTouchCallout: 'none',
          WebkitTapHighlightColor: 'transparent',
          transform: \`rotate(\${peelDirection}deg)\`,
          transformOrigin: 'center'
        }}
      >
        <div className="sticker-main" style={stickerMainStyle}>
          <div style={{ filter: 'url(#pointLight)' }}>
            <img
              src={imageSrc}
              alt=""
              className="block"
              style={imageStyle}
              draggable="false"
              onContextMenu={e => e.preventDefault()}
            />
          </div>
        </div>

        <div className="absolute top-4 left-2 w-full h-full opacity-40" style={{ filter: 'brightness(0) blur(8px)' }}>
          <div className="sticker-flap" style={flapStyle}>
            <img
              src={imageSrc}
              alt=""
              className="block"
              style={shadowImageStyle}
              draggable="false"
              onContextMenu={e => e.preventDefault()}
            />
          </div>
        </div>

        <div className="sticker-flap absolute w-full h-full left-0" style={flapStyle}>
          <div style={{ filter: 'url(#pointLightFlipped)' }}>
            <img
              src={imageSrc}
              alt=""
              className="block"
              style={shadowImageStyle}
              draggable="false"
              onContextMenu={e => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickerPeel;
`,xn=`import { useRef, useEffect, useMemo, CSSProperties } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import './StickerPeel.css';

gsap.registerPlugin(Draggable);

interface StickerPeelProps {
  imageSrc: string;
  rotate?: number;
  peelBackHoverPct?: number;
  peelBackActivePct?: number;
  peelEasing?: string;
  peelHoverEasing?: string;
  width?: number;
  shadowIntensity?: number;
  lightingIntensity?: number;
  initialPosition?: 'center' | 'random' | { x: number; y: number };
  peelDirection?: number;
  className?: string;
}

interface CSSVars extends CSSProperties {
  '--sticker-rotate'?: string;
  '--sticker-p'?: string;
  '--sticker-peelback-hover'?: string;
  '--sticker-peelback-active'?: string;
  '--sticker-peel-easing'?: string;
  '--sticker-peel-hover-easing'?: string;
  '--sticker-width'?: string;
  '--sticker-shadow-opacity'?: number;
  '--sticker-lighting-constant'?: number;
  '--peel-direction'?: string;
}

const StickerPeel: React.FC<StickerPeelProps> = ({
  imageSrc,
  rotate = 30,
  peelBackHoverPct = 30,
  peelBackActivePct = 40,
  peelEasing = 'power3.out',
  peelHoverEasing = 'power2.out',
  width = 200,
  shadowIntensity = 0.6,
  lightingIntensity = 0.1,
  initialPosition = 'center',
  peelDirection = 0,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragTargetRef = useRef<HTMLDivElement>(null);
  const pointLightRef = useRef<SVGFEPointLightElement>(null);
  const pointLightFlippedRef = useRef<SVGFEPointLightElement>(null);
  const draggableInstanceRef = useRef<Draggable | null>(null);

  const defaultPadding = 10;

  useEffect(() => {
    const target = dragTargetRef.current;
    if (!target) return;

    let startX = 0,
      startY = 0;

    if (initialPosition === 'center') {
      return;
    }

    if (typeof initialPosition === 'object' && initialPosition.x !== undefined && initialPosition.y !== undefined) {
      startX = initialPosition.x;
      startY = initialPosition.y;
    }

    gsap.set(target, { x: startX, y: startY });
  }, [initialPosition]);

  useEffect(() => {
    const target = dragTargetRef.current;
    if (!target) return;

    const boundsEl = target.parentNode as HTMLElement;

    const draggable = Draggable.create(target, {
      type: 'x,y',
      bounds: boundsEl,
      inertia: true,
      onDrag(this: Draggable) {
        const rot = gsap.utils.clamp(-24, 24, this.deltaX * 0.4);
        gsap.to(target, { rotation: rot, duration: 0.15, ease: 'power1.out' });
      },
      onDragEnd() {
        const rotationEase = 'power2.out';
        const duration = 0.8;
        gsap.to(target, { rotation: 0, duration, ease: rotationEase });
      }
    });

    draggableInstanceRef.current = draggable[0];

    const handleResize = () => {
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.update();

        const currentX = gsap.getProperty(target, 'x') as number;
        const currentY = gsap.getProperty(target, 'y') as number;

        const boundsRect = boundsEl.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        const maxX = boundsRect.width - targetRect.width;
        const maxY = boundsRect.height - targetRect.height;

        const newX = Math.max(0, Math.min(currentX, maxX));
        const newY = Math.max(0, Math.min(currentY, maxY));

        if (newX !== currentX || newY !== currentY) {
          gsap.to(target, {
            x: newX,
            y: newY,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    const updateLight = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;

      if (pointLightRef.current) {
        gsap.set(pointLightRef.current, { attr: { x, y } });
      }

      const normalizedAngle = Math.abs(peelDirection % 360);
      if (pointLightFlippedRef.current) {
        if (normalizedAngle !== 180) {
          gsap.set(pointLightFlippedRef.current, {
            attr: { x, y: rect.height - y }
          });
        } else {
          gsap.set(pointLightFlippedRef.current, {
            attr: { x: -1000, y: -1000 }
          });
        }
      }
    };

    const container = containerRef.current;
    const eventType = 'mousemove';

    if (container) {
      container.addEventListener(eventType, updateLight);
      return () => container.removeEventListener(eventType, updateLight);
    }
  }, [peelDirection]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = () => {
      container.classList.add('touch-active');
    };

    const handleTouchEnd = () => {
      container.classList.remove('touch-active');
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []);

  const cssVars: CSSVars = useMemo(
    () => ({
      '--sticker-rotate': \`\${rotate}deg\`,
      '--sticker-p': \`\${defaultPadding}px\`,
      '--sticker-peelback-hover': \`\${peelBackHoverPct}%\`,
      '--sticker-peelback-active': \`\${peelBackActivePct}%\`,
      '--sticker-peel-easing': peelEasing,
      '--sticker-peel-hover-easing': peelHoverEasing,
      '--sticker-width': \`\${width}px\`,
      '--sticker-shadow-opacity': shadowIntensity,
      '--sticker-lighting-constant': lightingIntensity,
      '--peel-direction': \`\${peelDirection}deg\`
    }),
    [
      rotate,
      peelBackHoverPct,
      peelBackActivePct,
      peelEasing,
      peelHoverEasing,
      width,
      shadowIntensity,
      lightingIntensity,
      peelDirection
    ]
  );

  return (
    <div className={\`draggable \${className}\`} ref={dragTargetRef} style={cssVars}>
      <svg width="0" height="0">
        <defs>
          <filter id="pointLight">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity}
              lightingColor="white"
            >
              <fePointLight ref={pointLightRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id="pointLightFlipped">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity * 7}
              lightingColor="white"
            >
              <fePointLight ref={pointLightFlippedRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id="dropShadow">
            <feDropShadow
              dx="2"
              dy="4"
              stdDeviation={3 * shadowIntensity}
              floodColor="black"
              floodOpacity={shadowIntensity}
            />
          </filter>

          <filter id="expandAndFill">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shape" />
            <feFlood floodColor="rgb(179,179,179)" result="flood" />
            <feComposite operator="in" in="flood" in2="shape" />
          </filter>
        </defs>
      </svg>

      <div className="sticker-container" ref={containerRef}>
        <div className="sticker-main">
          <div className="sticker-lighting">
            <img
              src={imageSrc}
              alt=""
              className="sticker-image"
              draggable="false"
              onContextMenu={e => e.preventDefault()}
            />
          </div>
        </div>

        <div className="flap">
          <div className="flap-lighting">
            <img
              src={imageSrc}
              alt=""
              className="flap-image"
              draggable="false"
              onContextMenu={e => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickerPeel;
`,kn=`import { useRef, useEffect, useMemo, CSSProperties } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

interface StickerPeelProps {
  imageSrc: string;
  rotate?: number;
  peelBackHoverPct?: number;
  peelBackActivePct?: number;
  peelEasing?: string;
  peelHoverEasing?: string;
  width?: number;
  shadowIntensity?: number;
  lightingIntensity?: number;
  initialPosition?: 'center' | 'random' | { x: number; y: number };
  peelDirection?: number;
  className?: string;
}

interface CSSVars extends CSSProperties {
  '--sticker-rotate'?: string;
  '--sticker-p'?: string;
  '--sticker-peelback-hover'?: string;
  '--sticker-peelback-active'?: string;
  '--sticker-peel-easing'?: string;
  '--sticker-peel-hover-easing'?: string;
  '--sticker-width'?: string;
  '--sticker-shadow-opacity'?: number;
  '--sticker-lighting-constant'?: number;
  '--peel-direction'?: string;
  '--sticker-start'?: string;
  '--sticker-end'?: string;
}

const StickerPeel: React.FC<StickerPeelProps> = ({
  imageSrc,
  rotate = 30,
  peelBackHoverPct = 30,
  peelBackActivePct = 40,
  peelEasing = 'power3.out',
  peelHoverEasing = 'power2.out',
  width = 200,
  shadowIntensity = 0.6,
  lightingIntensity = 0.1,
  initialPosition = 'center',
  peelDirection = 0,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragTargetRef = useRef<HTMLDivElement>(null);
  const pointLightRef = useRef<SVGFEPointLightElement>(null);
  const pointLightFlippedRef = useRef<SVGFEPointLightElement>(null);
  const draggableInstanceRef = useRef<Draggable | null>(null);

  const defaultPadding = 12;

  useEffect(() => {
    const target = dragTargetRef.current;
    if (!target) return;

    let startX = 0,
      startY = 0;

    if (initialPosition === 'center') {
      return;
    }

    if (typeof initialPosition === 'object' && initialPosition.x !== undefined && initialPosition.y !== undefined) {
      startX = initialPosition.x;
      startY = initialPosition.y;
    }

    gsap.set(target, { x: startX, y: startY });
  }, [initialPosition]);

  useEffect(() => {
    const target = dragTargetRef.current;
    if (!target) return;

    const boundsEl = target.parentNode as HTMLElement;

    const draggable = Draggable.create(target, {
      type: 'x,y',
      bounds: boundsEl,
      inertia: true,
      onDrag(this: Draggable) {
        const rot = gsap.utils.clamp(-24, 24, this.deltaX * 0.4);
        gsap.to(target, { rotation: rot, duration: 0.15, ease: 'power1.out' });
      },
      onDragEnd() {
        const rotationEase = 'power2.out';
        const duration = 0.8;
        gsap.to(target, { rotation: 0, duration, ease: rotationEase });
      }
    });

    draggableInstanceRef.current = draggable[0];

    const handleResize = () => {
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.update();

        const currentX = gsap.getProperty(target, 'x') as number;
        const currentY = gsap.getProperty(target, 'y') as number;

        const boundsRect = boundsEl.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        const maxX = boundsRect.width - targetRect.width;
        const maxY = boundsRect.height - targetRect.height;

        const newX = Math.max(0, Math.min(currentX, maxX));
        const newY = Math.max(0, Math.min(currentY, maxY));

        if (newX !== currentX || newY !== currentY) {
          gsap.to(target, {
            x: newX,
            y: newY,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    const updateLight = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;

      if (pointLightRef.current) {
        gsap.set(pointLightRef.current, { attr: { x, y } });
      }

      const normalizedAngle = Math.abs(peelDirection % 360);
      if (pointLightFlippedRef.current) {
        if (normalizedAngle !== 180) {
          gsap.set(pointLightFlippedRef.current, {
            attr: { x, y: rect.height - y }
          });
        } else {
          gsap.set(pointLightFlippedRef.current, {
            attr: { x: -1000, y: -1000 }
          });
        }
      }
    };

    const container = containerRef.current;
    const eventType = 'mousemove';

    if (container) {
      container.addEventListener(eventType, updateLight);
      return () => container.removeEventListener(eventType, updateLight);
    }
  }, [peelDirection]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = () => {
      container.classList.add('touch-active');
    };

    const handleTouchEnd = () => {
      container.classList.remove('touch-active');
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []);

  const cssVars: CSSVars = useMemo(
    () => ({
      '--sticker-rotate': \`\${rotate}deg\`,
      '--sticker-p': \`\${defaultPadding}px\`,
      '--sticker-peelback-hover': \`\${peelBackHoverPct}%\`,
      '--sticker-peelback-active': \`\${peelBackActivePct}%\`,
      '--sticker-peel-easing': peelEasing,
      '--sticker-peel-hover-easing': peelHoverEasing,
      '--sticker-width': \`\${width}px\`,
      '--sticker-shadow-opacity': shadowIntensity,
      '--sticker-lighting-constant': lightingIntensity,
      '--peel-direction': \`\${peelDirection}deg\`,
      '--sticker-start': \`calc(-1 * \${defaultPadding}px)\`,
      '--sticker-end': \`calc(100% + \${defaultPadding}px)\`
    }),
    [
      rotate,
      peelBackHoverPct,
      peelBackActivePct,
      peelEasing,
      peelHoverEasing,
      width,
      shadowIntensity,
      lightingIntensity,
      peelDirection,
      defaultPadding
    ]
  );

  const stickerMainStyle: CSSProperties = {
    clipPath: \`polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-end), var(--sticker-start) var(--sticker-end))\`,
    transition: 'clip-path 0.6s ease-out',
    filter: 'url(#dropShadow)',
    willChange: 'clip-path, transform'
  };

  const flapStyle: CSSProperties = {
    clipPath: \`polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-start) var(--sticker-start))\`,
    top: \`calc(-100% - var(--sticker-p) - var(--sticker-p))\`,
    transform: 'scaleY(-1)',
    transition: 'all 0.6s ease-out',
    willChange: 'clip-path, transform'
  };

  const imageStyle: CSSProperties = {
    transform: \`rotate(calc(\${rotate}deg - \${peelDirection}deg))\`,
    width: \`\${width}px\`
  };

  const shadowImageStyle: CSSProperties = {
    ...imageStyle,
    filter: 'url(#expandAndFill)'
  };

  return (
    <div
      className={\`absolute cursor-grab active:cursor-grabbing transform-gpu \${className}\`}
      ref={dragTargetRef}
      style={cssVars}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: \`
          .sticker-container:hover .sticker-main,
          .sticker-container.touch-active .sticker-main {
            clip-path: polygon(var(--sticker-start) var(--sticker-peelback-hover), var(--sticker-end) var(--sticker-peelback-hover), var(--sticker-end) var(--sticker-end), var(--sticker-start) var(--sticker-end)) !important;
          }
          .sticker-container:hover .sticker-flap,
          .sticker-container.touch-active .sticker-flap {
            clip-path: polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-peelback-hover), var(--sticker-start) var(--sticker-peelback-hover)) !important;
            top: calc(-100% + 2 * var(--sticker-peelback-hover) - 1px) !important;
          }
          .sticker-container:active .sticker-main {
            clip-path: polygon(var(--sticker-start) var(--sticker-peelback-active), var(--sticker-end) var(--sticker-peelback-active), var(--sticker-end) var(--sticker-end), var(--sticker-start) var(--sticker-end)) !important;
          }
          .sticker-container:active .sticker-flap {
            clip-path: polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-peelback-active), var(--sticker-start) var(--sticker-peelback-active)) !important;
            top: calc(-100% + 2 * var(--sticker-peelback-active) - 1px) !important;
          }
        \`
        }}
      />

      <svg width="0" height="0">
        <defs>
          <filter id="pointLight">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity}
              lightingColor="white"
            >
              <fePointLight ref={pointLightRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id="pointLightFlipped">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity * 7}
              lightingColor="white"
            >
              <fePointLight ref={pointLightFlippedRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id="dropShadow">
            <feDropShadow
              dx="2"
              dy="4"
              stdDeviation={3 * shadowIntensity}
              floodColor="black"
              floodOpacity={shadowIntensity}
            />
          </filter>

          <filter id="expandAndFill">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shape" />
            <feFlood floodColor="rgb(179,179,179)" result="flood" />
            <feComposite operator="in" in="flood" in2="shape" />
          </filter>
        </defs>
      </svg>

      <div
        className="sticker-container relative select-none touch-none sm:touch-auto"
        ref={containerRef}
        style={{
          WebkitUserSelect: 'none',
          userSelect: 'none',
          WebkitTouchCallout: 'none',
          WebkitTapHighlightColor: 'transparent',
          transform: \`rotate(\${peelDirection}deg)\`,
          transformOrigin: 'center'
        }}
      >
        <div className="sticker-main" style={stickerMainStyle}>
          <div style={{ filter: 'url(#pointLight)' }}>
            <img
              src={imageSrc}
              alt=""
              className="block"
              style={imageStyle}
              draggable="false"
              onContextMenu={e => e.preventDefault()}
            />
          </div>
        </div>

        <div className="absolute top-4 left-2 w-full h-full opacity-40" style={{ filter: 'brightness(0) blur(8px)' }}>
          <div className="sticker-flap" style={flapStyle}>
            <img
              src={imageSrc}
              alt=""
              className="block"
              style={shadowImageStyle}
              draggable="false"
              onContextMenu={e => e.preventDefault()}
            />
          </div>
        </div>

        <div className="sticker-flap absolute w-full h-full left-0" style={flapStyle}>
          <div style={{ filter: 'url(#pointLightFlipped)' }}>
            <img
              src={imageSrc}
              alt=""
              className="block"
              style={shadowImageStyle}
              draggable="false"
              onContextMenu={e => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickerPeel;
`,yn={installation:"npm install gsap",usage:`import StickerPeel from './StickerPeel'
import logo from './assets/sticker.png'
  
<StickerPeel
  imageSrc={logo}
  width={200}
  rotate={30}
  peelBackHoverPct={20}
  peelBackActivePct={40}
  shadowIntensity={0.6}
  lightingIntensity={0.1}
  initialPosition={{ x: -100, y: 100 }}
/>`,code:hn,css:vn,tailwind:mn,tsCode:xn,tsTailwind:kn},xi={rotate:0,width:200,peelBackHoverPct:30,peelBackActivePct:40,lightingIntensity:.1,shadowIntensity:.5,peelDirection:0},Dn=()=>{const{props:f,updateProp:t,resetProps:n,hasChanges:i}=Yi(xi),{rotate:o,width:s,peelBackHoverPct:u,peelBackActivePct:l,lightingIntensity:m,shadowIntensity:d,peelDirection:g}=f,w=ve.useMemo(()=>[{name:"imageSrc",type:"string",default:"required",description:"The source URL for the sticker image"},{name:"rotate",type:"number",default:"30",description:"The rotation angle in degrees when dragging"},{name:"peelBackHoverPct",type:"number",default:"30",description:"Percentage of peel effect on hover (0-100)"},{name:"peelBackActivePct",type:"number",default:"40",description:"Percentage of peel effect when active/clicked (0-100)"},{name:"peelDirection",type:"number",default:"0",description:"Direction of the peel effect in degrees (0-360)"},{name:"peelEasing",type:"string",default:"power3.out",description:"GSAP easing function for peel animations"},{name:"peelHoverEasing",type:"string",default:"power2.out",description:"GSAP easing function for hover transitions"},{name:"width",type:"number",default:"200",description:"Width of the sticker in pixels"},{name:"shadowIntensity",type:"number",default:"0.6",description:"Intensity of the shadow effect (0-1)"},{name:"lightingIntensity",type:"number",default:"0.1",description:"Intensity of the lighting effect (0-1)"},{name:"initialPosition",type:"string",default:"center",description:"Initial position of the sticker ('center', 'top-left', 'top-right', 'bottom-left', 'bottom-right')"},{name:"className",type:"string",default:"",description:"Custom class name for additional styling"}],[]);return E.jsx(Bi,{props:f,defaultProps:xi,resetProps:n,hasChanges:i,children:E.jsxs(Ai,{children:[E.jsxs(Fi,{children:[E.jsxs(Ni,{position:"relative",className:"demo-container",h:400,overflow:"hidden",bg:"linear-gradient(to bottom, #060010, #0D0716, #0D0716 , #060010)",children:[E.jsx(gn,{imageSrc:Gi,rotate:o,width:s,peelBackHoverPct:u,peelBackActivePct:l,lightingIntensity:m,shadowIntensity:d,peelDirection:g,className:"sticker-peel-demo"}),E.jsx(Xi,{position:"absolute",zIndex:0,left:"50%",top:"1em",transform:"translateX(-50%)",fontSize:"clamp(1.5rem, 4vw, 3rem)",fontWeight:900,color:"#271E37",children:"Try dragging it!"})]}),E.jsxs($i,{children:[E.jsx(ze,{title:"Peel Direction",min:0,max:360,step:1,value:g,valueUnit:"°",width:200,onChange:x=>t("peelDirection",x)}),E.jsx(ze,{title:"Rotate",min:0,max:60,step:1,value:o,valueUnit:"°",width:200,onChange:x=>t("rotate",x)}),E.jsx(ze,{title:"Width",min:100,max:300,step:10,value:s,valueUnit:"px",width:200,onChange:x=>t("width",x)}),E.jsx(ze,{title:"Peel Hover %",min:0,max:50,step:1,value:u,valueUnit:"%",width:200,onChange:x=>t("peelBackHoverPct",x)}),E.jsx(ze,{title:"Peel Active %",min:0,max:70,step:1,value:l,valueUnit:"%",width:200,onChange:x=>t("peelBackActivePct",x)}),E.jsx(ze,{title:"Lighting Intensity",min:0,max:.5,step:.01,value:m,valueUnit:"",width:200,onChange:x=>t("lightingIntensity",x)}),E.jsx(ze,{title:"Shadow Intensity",min:0,max:1,step:.01,value:d,valueUnit:"",width:200,onChange:x=>t("shadowIntensity",x)})]}),E.jsx(Hi,{data:w}),E.jsx(ji,{dependencyList:["gsap"]})]}),E.jsx(Oi,{children:E.jsx(zi,{codeObject:yn,componentName:"StickerPeel"})})]})})};export{Dn as default};
