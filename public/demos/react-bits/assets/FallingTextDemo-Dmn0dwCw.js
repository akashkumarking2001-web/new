import{bH as Se,c9 as re,r as j,j as U,F as we,a as Ce}from"./index-CKqfvLoB.js";import{u as Me,C as Re,T as Pe,P as Be,a as Te,b as Ee,c as Ae}from"./PropTable-BzD4cJVp.js";import{u as Ie}from"./useForceRerender-0lK0qxlp.js";import{P as ge}from"./PreviewSlider-25yjOF_X.js";import{D as Le}from"./Dependencies-DmSBXzNX.js";import{C as be}from"./Customize-BaUKAf5J.js";import{P as Fe}from"./PreviewSelect-CM4Sns8B.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";import"./field-DGUMYGrq.js";var ve={exports:{}};/*!
 * matter-js 0.20.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(function(X,J){(function(b,d){X.exports=d()})(re,function(){return function(E){var b={};function d(e){if(b[e])return b[e].exports;var f=b[e]={i:e,l:!1,exports:{}};return E[e].call(f.exports,f,f.exports,d),f.l=!0,f.exports}return d.m=E,d.c=b,d.d=function(e,f,s){d.o(e,f)||Object.defineProperty(e,f,{enumerable:!0,get:s})},d.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,f){if(f&1&&(e=d(e)),f&8||f&4&&typeof e=="object"&&e&&e.__esModule)return e;var s=Object.create(null);if(d.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),f&2&&typeof e!="string")for(var o in e)d.d(s,o,(function(g){return e[g]}).bind(null,o));return s},d.n=function(e){var f=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(f,"a",f),f},d.o=function(e,f){return Object.prototype.hasOwnProperty.call(e,f)},d.p="",d(d.s=20)}([function(E,b){var d={};E.exports=d,function(){d._baseDelta=1e3/60,d._nextId=0,d._seed=0,d._nowStartTime=+new Date,d._warnedOnce={},d._decomp=null,d.extend=function(f,s){var o,g;typeof s=="boolean"?(o=2,g=s):(o=1,g=!0);for(var t=o;t<arguments.length;t++){var c=arguments[t];if(c)for(var a in c)g&&c[a]&&c[a].constructor===Object&&(!f[a]||f[a].constructor===Object)?(f[a]=f[a]||{},d.extend(f[a],g,c[a])):f[a]=c[a]}return f},d.clone=function(f,s){return d.extend({},s,f)},d.keys=function(f){if(Object.keys)return Object.keys(f);var s=[];for(var o in f)s.push(o);return s},d.values=function(f){var s=[];if(Object.keys){for(var o=Object.keys(f),g=0;g<o.length;g++)s.push(f[o[g]]);return s}for(var t in f)s.push(f[t]);return s},d.get=function(f,s,o,g){s=s.split(".").slice(o,g);for(var t=0;t<s.length;t+=1)f=f[s[t]];return f},d.set=function(f,s,o,g,t){var c=s.split(".").slice(g,t);return d.get(f,s,0,-1)[c[c.length-1]]=o,o},d.shuffle=function(f){for(var s=f.length-1;s>0;s--){var o=Math.floor(d.random()*(s+1)),g=f[s];f[s]=f[o],f[o]=g}return f},d.choose=function(f){return f[Math.floor(d.random()*f.length)]},d.isElement=function(f){return typeof HTMLElement<"u"?f instanceof HTMLElement:!!(f&&f.nodeType&&f.nodeName)},d.isArray=function(f){return Object.prototype.toString.call(f)==="[object Array]"},d.isFunction=function(f){return typeof f=="function"},d.isPlainObject=function(f){return typeof f=="object"&&f.constructor===Object},d.isString=function(f){return toString.call(f)==="[object String]"},d.clamp=function(f,s,o){return f<s?s:f>o?o:f},d.sign=function(f){return f<0?-1:1},d.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-d._nowStartTime},d.random=function(f,s){return f=typeof f<"u"?f:0,s=typeof s<"u"?s:1,f+e()*(s-f)};var e=function(){return d._seed=(d._seed*9301+49297)%233280,d._seed/233280};d.colorToNumber=function(f){return f=f.replace("#",""),f.length==3&&(f=f.charAt(0)+f.charAt(0)+f.charAt(1)+f.charAt(1)+f.charAt(2)+f.charAt(2)),parseInt(f,16)},d.logLevel=1,d.log=function(){console&&d.logLevel>0&&d.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},d.info=function(){console&&d.logLevel>0&&d.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},d.warn=function(){console&&d.logLevel>0&&d.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},d.warnOnce=function(){var f=Array.prototype.slice.call(arguments).join(" ");d._warnedOnce[f]||(d.warn(f),d._warnedOnce[f]=!0)},d.deprecated=function(f,s,o){f[s]=d.chain(function(){d.warnOnce("🔅 deprecated 🔅",o)},f[s])},d.nextId=function(){return d._nextId++},d.indexOf=function(f,s){if(f.indexOf)return f.indexOf(s);for(var o=0;o<f.length;o++)if(f[o]===s)return o;return-1},d.map=function(f,s){if(f.map)return f.map(s);for(var o=[],g=0;g<f.length;g+=1)o.push(s(f[g]));return o},d.topologicalSort=function(f){var s=[],o=[],g=[];for(var t in f)!o[t]&&!g[t]&&d._topologicalSort(t,o,g,f,s);return s},d._topologicalSort=function(f,s,o,g,t){var c=g[f]||[];o[f]=!0;for(var a=0;a<c.length;a+=1){var n=c[a];o[n]||s[n]||d._topologicalSort(n,s,o,g,t)}o[f]=!1,s[f]=!0,t.push(f)},d.chain=function(){for(var f=[],s=0;s<arguments.length;s+=1){var o=arguments[s];o._chained?f.push.apply(f,o._chained):f.push(o)}var g=function(){for(var t,c=new Array(arguments.length),a=0,n=arguments.length;a<n;a++)c[a]=arguments[a];for(a=0;a<f.length;a+=1){var r=f[a].apply(t,c);typeof r<"u"&&(t=r)}return t};return g._chained=f,g},d.chainPathBefore=function(f,s,o){return d.set(f,s,d.chain(o,d.get(f,s)))},d.chainPathAfter=function(f,s,o){return d.set(f,s,d.chain(d.get(f,s),o))},d.setDecomp=function(f){d._decomp=f},d.getDecomp=function(){var f=d._decomp;try{!f&&typeof window<"u"&&(f=window.decomp),!f&&typeof re<"u"&&(f=re.decomp)}catch{f=null}return f}}()},function(E,b){var d={};E.exports=d,function(){d.create=function(e){var f={min:{x:0,y:0},max:{x:0,y:0}};return e&&d.update(f,e),f},d.update=function(e,f,s){e.min.x=1/0,e.max.x=-1/0,e.min.y=1/0,e.max.y=-1/0;for(var o=0;o<f.length;o++){var g=f[o];g.x>e.max.x&&(e.max.x=g.x),g.x<e.min.x&&(e.min.x=g.x),g.y>e.max.y&&(e.max.y=g.y),g.y<e.min.y&&(e.min.y=g.y)}s&&(s.x>0?e.max.x+=s.x:e.min.x+=s.x,s.y>0?e.max.y+=s.y:e.min.y+=s.y)},d.contains=function(e,f){return f.x>=e.min.x&&f.x<=e.max.x&&f.y>=e.min.y&&f.y<=e.max.y},d.overlaps=function(e,f){return e.min.x<=f.max.x&&e.max.x>=f.min.x&&e.max.y>=f.min.y&&e.min.y<=f.max.y},d.translate=function(e,f){e.min.x+=f.x,e.max.x+=f.x,e.min.y+=f.y,e.max.y+=f.y},d.shift=function(e,f){var s=e.max.x-e.min.x,o=e.max.y-e.min.y;e.min.x=f.x,e.max.x=f.x+s,e.min.y=f.y,e.max.y=f.y+o}}()},function(E,b){var d={};E.exports=d,function(){d.create=function(e,f){return{x:e||0,y:f||0}},d.clone=function(e){return{x:e.x,y:e.y}},d.magnitude=function(e){return Math.sqrt(e.x*e.x+e.y*e.y)},d.magnitudeSquared=function(e){return e.x*e.x+e.y*e.y},d.rotate=function(e,f,s){var o=Math.cos(f),g=Math.sin(f);s||(s={});var t=e.x*o-e.y*g;return s.y=e.x*g+e.y*o,s.x=t,s},d.rotateAbout=function(e,f,s,o){var g=Math.cos(f),t=Math.sin(f);o||(o={});var c=s.x+((e.x-s.x)*g-(e.y-s.y)*t);return o.y=s.y+((e.x-s.x)*t+(e.y-s.y)*g),o.x=c,o},d.normalise=function(e){var f=d.magnitude(e);return f===0?{x:0,y:0}:{x:e.x/f,y:e.y/f}},d.dot=function(e,f){return e.x*f.x+e.y*f.y},d.cross=function(e,f){return e.x*f.y-e.y*f.x},d.cross3=function(e,f,s){return(f.x-e.x)*(s.y-e.y)-(f.y-e.y)*(s.x-e.x)},d.add=function(e,f,s){return s||(s={}),s.x=e.x+f.x,s.y=e.y+f.y,s},d.sub=function(e,f,s){return s||(s={}),s.x=e.x-f.x,s.y=e.y-f.y,s},d.mult=function(e,f){return{x:e.x*f,y:e.y*f}},d.div=function(e,f){return{x:e.x/f,y:e.y/f}},d.perp=function(e,f){return f=f===!0?-1:1,{x:f*-e.y,y:f*e.x}},d.neg=function(e){return{x:-e.x,y:-e.y}},d.angle=function(e,f){return Math.atan2(f.y-e.y,f.x-e.x)},d._temp=[d.create(),d.create(),d.create(),d.create(),d.create(),d.create()]}()},function(E,b,d){var e={};E.exports=e;var f=d(2),s=d(0);(function(){e.create=function(o,g){for(var t=[],c=0;c<o.length;c++){var a=o[c],n={x:a.x,y:a.y,index:c,body:g,isInternal:!1};t.push(n)}return t},e.fromPath=function(o,g){var t=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,c=[];return o.replace(t,function(a,n,r){c.push({x:parseFloat(n),y:parseFloat(r)})}),e.create(c,g)},e.centre=function(o){for(var g=e.area(o,!0),t={x:0,y:0},c,a,n,r=0;r<o.length;r++)n=(r+1)%o.length,c=f.cross(o[r],o[n]),a=f.mult(f.add(o[r],o[n]),c),t=f.add(t,a);return f.div(t,6*g)},e.mean=function(o){for(var g={x:0,y:0},t=0;t<o.length;t++)g.x+=o[t].x,g.y+=o[t].y;return f.div(g,o.length)},e.area=function(o,g){for(var t=0,c=o.length-1,a=0;a<o.length;a++)t+=(o[c].x-o[a].x)*(o[c].y+o[a].y),c=a;return g?t/2:Math.abs(t)/2},e.inertia=function(o,g){for(var t=0,c=0,a=o,n,r,i=0;i<a.length;i++)r=(i+1)%a.length,n=Math.abs(f.cross(a[r],a[i])),t+=n*(f.dot(a[r],a[r])+f.dot(a[r],a[i])+f.dot(a[i],a[i])),c+=n;return g/6*(t/c)},e.translate=function(o,g,t){t=typeof t<"u"?t:1;var c=o.length,a=g.x*t,n=g.y*t,r;for(r=0;r<c;r++)o[r].x+=a,o[r].y+=n;return o},e.rotate=function(o,g,t){if(g!==0){var c=Math.cos(g),a=Math.sin(g),n=t.x,r=t.y,i=o.length,l,h,y,w;for(w=0;w<i;w++)l=o[w],h=l.x-n,y=l.y-r,l.x=n+(h*c-y*a),l.y=r+(h*a+y*c);return o}},e.contains=function(o,g){for(var t=g.x,c=g.y,a=o.length,n=o[a-1],r,i=0;i<a;i++){if(r=o[i],(t-n.x)*(r.y-n.y)+(c-n.y)*(n.x-r.x)>0)return!1;n=r}return!0},e.scale=function(o,g,t,c){if(g===1&&t===1)return o;c=c||e.centre(o);for(var a,n,r=0;r<o.length;r++)a=o[r],n=f.sub(a,c),o[r].x=c.x+n.x*g,o[r].y=c.y+n.y*t;return o},e.chamfer=function(o,g,t,c,a){typeof g=="number"?g=[g]:g=g||[8],t=typeof t<"u"?t:-1,c=c||2,a=a||14;for(var n=[],r=0;r<o.length;r++){var i=o[r-1>=0?r-1:o.length-1],l=o[r],h=o[(r+1)%o.length],y=g[r<g.length?r:g.length-1];if(y===0){n.push(l);continue}var w=f.normalise({x:l.y-i.y,y:i.x-l.x}),R=f.normalise({x:h.y-l.y,y:l.x-h.x}),u=Math.sqrt(2*Math.pow(y,2)),p=f.mult(s.clone(w),y),m=f.normalise(f.mult(f.add(w,R),.5)),v=f.sub(l,f.mult(m,u)),S=t;t===-1&&(S=Math.pow(y,.32)*1.75),S=s.clamp(S,c,a),S%2===1&&(S+=1);for(var x=Math.acos(f.dot(w,R)),C=x/S,M=0;M<S;M++)n.push(f.add(f.rotate(p,C*M),v))}return n},e.clockwiseSort=function(o){var g=e.mean(o);return o.sort(function(t,c){return f.angle(g,t)-f.angle(g,c)}),o},e.isConvex=function(o){var g=0,t=o.length,c,a,n,r;if(t<3)return null;for(c=0;c<t;c++)if(a=(c+1)%t,n=(c+2)%t,r=(o[a].x-o[c].x)*(o[n].y-o[a].y),r-=(o[a].y-o[c].y)*(o[n].x-o[a].x),r<0?g|=1:r>0&&(g|=2),g===3)return!1;return g!==0?!0:null},e.hull=function(o){var g=[],t=[],c,a;for(o=o.slice(0),o.sort(function(n,r){var i=n.x-r.x;return i!==0?i:n.y-r.y}),a=0;a<o.length;a+=1){for(c=o[a];t.length>=2&&f.cross3(t[t.length-2],t[t.length-1],c)<=0;)t.pop();t.push(c)}for(a=o.length-1;a>=0;a-=1){for(c=o[a];g.length>=2&&f.cross3(g[g.length-2],g[g.length-1],c)<=0;)g.pop();g.push(c)}return g.pop(),t.pop(),g.concat(t)}})()},function(E,b,d){var e={};E.exports=e;var f=d(3),s=d(2),o=d(7),g=d(0),t=d(1),c=d(11);(function(){e._timeCorrection=!0,e._inertiaScale=4,e._nextCollidingGroupId=1,e._nextNonCollidingGroupId=-1,e._nextCategory=1,e._baseDelta=1e3/60,e.create=function(n){var r={id:g.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:f.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},i=g.extend(r,n);return a(i,n),i},e.nextGroup=function(n){return n?e._nextNonCollidingGroupId--:e._nextCollidingGroupId++},e.nextCategory=function(){return e._nextCategory=e._nextCategory<<1,e._nextCategory};var a=function(n,r){r=r||{},e.set(n,{bounds:n.bounds||t.create(n.vertices),positionPrev:n.positionPrev||s.clone(n.position),anglePrev:n.anglePrev||n.angle,vertices:n.vertices,parts:n.parts||[n],isStatic:n.isStatic,isSleeping:n.isSleeping,parent:n.parent||n}),f.rotate(n.vertices,n.angle,n.position),c.rotate(n.axes,n.angle),t.update(n.bounds,n.vertices,n.velocity),e.set(n,{axes:r.axes||n.axes,area:r.area||n.area,mass:r.mass||n.mass,inertia:r.inertia||n.inertia});var i=n.isStatic?"#14151f":g.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),l=n.isStatic?"#555":"#ccc",h=n.isStatic&&n.render.fillStyle===null?1:0;n.render.fillStyle=n.render.fillStyle||i,n.render.strokeStyle=n.render.strokeStyle||l,n.render.lineWidth=n.render.lineWidth||h,n.render.sprite.xOffset+=-(n.bounds.min.x-n.position.x)/(n.bounds.max.x-n.bounds.min.x),n.render.sprite.yOffset+=-(n.bounds.min.y-n.position.y)/(n.bounds.max.y-n.bounds.min.y)};e.set=function(n,r,i){var l;typeof r=="string"&&(l=r,r={},r[l]=i);for(l in r)if(Object.prototype.hasOwnProperty.call(r,l))switch(i=r[l],l){case"isStatic":e.setStatic(n,i);break;case"isSleeping":o.set(n,i);break;case"mass":e.setMass(n,i);break;case"density":e.setDensity(n,i);break;case"inertia":e.setInertia(n,i);break;case"vertices":e.setVertices(n,i);break;case"position":e.setPosition(n,i);break;case"angle":e.setAngle(n,i);break;case"velocity":e.setVelocity(n,i);break;case"angularVelocity":e.setAngularVelocity(n,i);break;case"speed":e.setSpeed(n,i);break;case"angularSpeed":e.setAngularSpeed(n,i);break;case"parts":e.setParts(n,i);break;case"centre":e.setCentre(n,i);break;default:n[l]=i}},e.setStatic=function(n,r){for(var i=0;i<n.parts.length;i++){var l=n.parts[i];r?(l.isStatic||(l._original={restitution:l.restitution,friction:l.friction,mass:l.mass,inertia:l.inertia,density:l.density,inverseMass:l.inverseMass,inverseInertia:l.inverseInertia}),l.restitution=0,l.friction=1,l.mass=l.inertia=l.density=1/0,l.inverseMass=l.inverseInertia=0,l.positionPrev.x=l.position.x,l.positionPrev.y=l.position.y,l.anglePrev=l.angle,l.angularVelocity=0,l.speed=0,l.angularSpeed=0,l.motion=0):l._original&&(l.restitution=l._original.restitution,l.friction=l._original.friction,l.mass=l._original.mass,l.inertia=l._original.inertia,l.density=l._original.density,l.inverseMass=l._original.inverseMass,l.inverseInertia=l._original.inverseInertia,l._original=null),l.isStatic=r}},e.setMass=function(n,r){var i=n.inertia/(n.mass/6);n.inertia=i*(r/6),n.inverseInertia=1/n.inertia,n.mass=r,n.inverseMass=1/n.mass,n.density=n.mass/n.area},e.setDensity=function(n,r){e.setMass(n,r*n.area),n.density=r},e.setInertia=function(n,r){n.inertia=r,n.inverseInertia=1/n.inertia},e.setVertices=function(n,r){r[0].body===n?n.vertices=r:n.vertices=f.create(r,n),n.axes=c.fromVertices(n.vertices),n.area=f.area(n.vertices),e.setMass(n,n.density*n.area);var i=f.centre(n.vertices);f.translate(n.vertices,i,-1),e.setInertia(n,e._inertiaScale*f.inertia(n.vertices,n.mass)),f.translate(n.vertices,n.position),t.update(n.bounds,n.vertices,n.velocity)},e.setParts=function(n,r,i){var l;for(r=r.slice(0),n.parts.length=0,n.parts.push(n),n.parent=n,l=0;l<r.length;l++){var h=r[l];h!==n&&(h.parent=n,n.parts.push(h))}if(n.parts.length!==1){if(i=typeof i<"u"?i:!0,i){var y=[];for(l=0;l<r.length;l++)y=y.concat(r[l].vertices);f.clockwiseSort(y);var w=f.hull(y),R=f.centre(w);e.setVertices(n,w),f.translate(n.vertices,R)}var u=e._totalProperties(n);n.area=u.area,n.parent=n,n.position.x=u.centre.x,n.position.y=u.centre.y,n.positionPrev.x=u.centre.x,n.positionPrev.y=u.centre.y,e.setMass(n,u.mass),e.setInertia(n,u.inertia),e.setPosition(n,u.centre)}},e.setCentre=function(n,r,i){i?(n.positionPrev.x+=r.x,n.positionPrev.y+=r.y,n.position.x+=r.x,n.position.y+=r.y):(n.positionPrev.x=r.x-(n.position.x-n.positionPrev.x),n.positionPrev.y=r.y-(n.position.y-n.positionPrev.y),n.position.x=r.x,n.position.y=r.y)},e.setPosition=function(n,r,i){var l=s.sub(r,n.position);i?(n.positionPrev.x=n.position.x,n.positionPrev.y=n.position.y,n.velocity.x=l.x,n.velocity.y=l.y,n.speed=s.magnitude(l)):(n.positionPrev.x+=l.x,n.positionPrev.y+=l.y);for(var h=0;h<n.parts.length;h++){var y=n.parts[h];y.position.x+=l.x,y.position.y+=l.y,f.translate(y.vertices,l),t.update(y.bounds,y.vertices,n.velocity)}},e.setAngle=function(n,r,i){var l=r-n.angle;i?(n.anglePrev=n.angle,n.angularVelocity=l,n.angularSpeed=Math.abs(l)):n.anglePrev+=l;for(var h=0;h<n.parts.length;h++){var y=n.parts[h];y.angle+=l,f.rotate(y.vertices,l,n.position),c.rotate(y.axes,l),t.update(y.bounds,y.vertices,n.velocity),h>0&&s.rotateAbout(y.position,l,n.position,y.position)}},e.setVelocity=function(n,r){var i=n.deltaTime/e._baseDelta;n.positionPrev.x=n.position.x-r.x*i,n.positionPrev.y=n.position.y-r.y*i,n.velocity.x=(n.position.x-n.positionPrev.x)/i,n.velocity.y=(n.position.y-n.positionPrev.y)/i,n.speed=s.magnitude(n.velocity)},e.getVelocity=function(n){var r=e._baseDelta/n.deltaTime;return{x:(n.position.x-n.positionPrev.x)*r,y:(n.position.y-n.positionPrev.y)*r}},e.getSpeed=function(n){return s.magnitude(e.getVelocity(n))},e.setSpeed=function(n,r){e.setVelocity(n,s.mult(s.normalise(e.getVelocity(n)),r))},e.setAngularVelocity=function(n,r){var i=n.deltaTime/e._baseDelta;n.anglePrev=n.angle-r*i,n.angularVelocity=(n.angle-n.anglePrev)/i,n.angularSpeed=Math.abs(n.angularVelocity)},e.getAngularVelocity=function(n){return(n.angle-n.anglePrev)*e._baseDelta/n.deltaTime},e.getAngularSpeed=function(n){return Math.abs(e.getAngularVelocity(n))},e.setAngularSpeed=function(n,r){e.setAngularVelocity(n,g.sign(e.getAngularVelocity(n))*r)},e.translate=function(n,r,i){e.setPosition(n,s.add(n.position,r),i)},e.rotate=function(n,r,i,l){if(!i)e.setAngle(n,n.angle+r,l);else{var h=Math.cos(r),y=Math.sin(r),w=n.position.x-i.x,R=n.position.y-i.y;e.setPosition(n,{x:i.x+(w*h-R*y),y:i.y+(w*y+R*h)},l),e.setAngle(n,n.angle+r,l)}},e.scale=function(n,r,i,l){var h=0,y=0;l=l||n.position;for(var w=0;w<n.parts.length;w++){var R=n.parts[w];f.scale(R.vertices,r,i,l),R.axes=c.fromVertices(R.vertices),R.area=f.area(R.vertices),e.setMass(R,n.density*R.area),f.translate(R.vertices,{x:-R.position.x,y:-R.position.y}),e.setInertia(R,e._inertiaScale*f.inertia(R.vertices,R.mass)),f.translate(R.vertices,{x:R.position.x,y:R.position.y}),w>0&&(h+=R.area,y+=R.inertia),R.position.x=l.x+(R.position.x-l.x)*r,R.position.y=l.y+(R.position.y-l.y)*i,t.update(R.bounds,R.vertices,n.velocity)}n.parts.length>1&&(n.area=h,n.isStatic||(e.setMass(n,n.density*h),e.setInertia(n,y))),n.circleRadius&&(r===i?n.circleRadius*=r:n.circleRadius=null)},e.update=function(n,r){r=(typeof r<"u"?r:1e3/60)*n.timeScale;var i=r*r,l=e._timeCorrection?r/(n.deltaTime||r):1,h=1-n.frictionAir*(r/g._baseDelta),y=(n.position.x-n.positionPrev.x)*l,w=(n.position.y-n.positionPrev.y)*l;n.velocity.x=y*h+n.force.x/n.mass*i,n.velocity.y=w*h+n.force.y/n.mass*i,n.positionPrev.x=n.position.x,n.positionPrev.y=n.position.y,n.position.x+=n.velocity.x,n.position.y+=n.velocity.y,n.deltaTime=r,n.angularVelocity=(n.angle-n.anglePrev)*h*l+n.torque/n.inertia*i,n.anglePrev=n.angle,n.angle+=n.angularVelocity;for(var R=0;R<n.parts.length;R++){var u=n.parts[R];f.translate(u.vertices,n.velocity),R>0&&(u.position.x+=n.velocity.x,u.position.y+=n.velocity.y),n.angularVelocity!==0&&(f.rotate(u.vertices,n.angularVelocity,n.position),c.rotate(u.axes,n.angularVelocity),R>0&&s.rotateAbout(u.position,n.angularVelocity,n.position,u.position)),t.update(u.bounds,u.vertices,n.velocity)}},e.updateVelocities=function(n){var r=e._baseDelta/n.deltaTime,i=n.velocity;i.x=(n.position.x-n.positionPrev.x)*r,i.y=(n.position.y-n.positionPrev.y)*r,n.speed=Math.sqrt(i.x*i.x+i.y*i.y),n.angularVelocity=(n.angle-n.anglePrev)*r,n.angularSpeed=Math.abs(n.angularVelocity)},e.applyForce=function(n,r,i){var l={x:r.x-n.position.x,y:r.y-n.position.y};n.force.x+=i.x,n.force.y+=i.y,n.torque+=l.x*i.y-l.y*i.x},e._totalProperties=function(n){for(var r={mass:0,area:0,inertia:0,centre:{x:0,y:0}},i=n.parts.length===1?0:1;i<n.parts.length;i++){var l=n.parts[i],h=l.mass!==1/0?l.mass:1;r.mass+=h,r.area+=l.area,r.inertia+=l.inertia,r.centre=s.add(r.centre,s.mult(l.position,h))}return r.centre=s.div(r.centre,r.mass),r}})()},function(E,b,d){var e={};E.exports=e;var f=d(0);(function(){e.on=function(s,o,g){for(var t=o.split(" "),c,a=0;a<t.length;a++)c=t[a],s.events=s.events||{},s.events[c]=s.events[c]||[],s.events[c].push(g);return g},e.off=function(s,o,g){if(!o){s.events={};return}typeof o=="function"&&(g=o,o=f.keys(s.events).join(" "));for(var t=o.split(" "),c=0;c<t.length;c++){var a=s.events[t[c]],n=[];if(g&&a)for(var r=0;r<a.length;r++)a[r]!==g&&n.push(a[r]);s.events[t[c]]=n}},e.trigger=function(s,o,g){var t,c,a,n,r=s.events;if(r&&f.keys(r).length>0){g||(g={}),t=o.split(" ");for(var i=0;i<t.length;i++)if(c=t[i],a=r[c],a){n=f.clone(g,!1),n.name=c,n.source=s;for(var l=0;l<a.length;l++)a[l].apply(s,[n])}}}})()},function(E,b,d){var e={};E.exports=e;var f=d(5),s=d(0),o=d(1),g=d(4);(function(){e.create=function(t){return s.extend({id:s.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},t)},e.setModified=function(t,c,a,n){if(t.isModified=c,c&&t.cache&&(t.cache.allBodies=null,t.cache.allConstraints=null,t.cache.allComposites=null),a&&t.parent&&e.setModified(t.parent,c,a,n),n)for(var r=0;r<t.composites.length;r++){var i=t.composites[r];e.setModified(i,c,a,n)}},e.add=function(t,c){var a=[].concat(c);f.trigger(t,"beforeAdd",{object:c});for(var n=0;n<a.length;n++){var r=a[n];switch(r.type){case"body":if(r.parent!==r){s.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}e.addBody(t,r);break;case"constraint":e.addConstraint(t,r);break;case"composite":e.addComposite(t,r);break;case"mouseConstraint":e.addConstraint(t,r.constraint);break}}return f.trigger(t,"afterAdd",{object:c}),t},e.remove=function(t,c,a){var n=[].concat(c);f.trigger(t,"beforeRemove",{object:c});for(var r=0;r<n.length;r++){var i=n[r];switch(i.type){case"body":e.removeBody(t,i,a);break;case"constraint":e.removeConstraint(t,i,a);break;case"composite":e.removeComposite(t,i,a);break;case"mouseConstraint":e.removeConstraint(t,i.constraint);break}}return f.trigger(t,"afterRemove",{object:c}),t},e.addComposite=function(t,c){return t.composites.push(c),c.parent=t,e.setModified(t,!0,!0,!1),t},e.removeComposite=function(t,c,a){var n=s.indexOf(t.composites,c);if(n!==-1){var r=e.allBodies(c);e.removeCompositeAt(t,n);for(var i=0;i<r.length;i++)r[i].sleepCounter=0}if(a)for(var i=0;i<t.composites.length;i++)e.removeComposite(t.composites[i],c,!0);return t},e.removeCompositeAt=function(t,c){return t.composites.splice(c,1),e.setModified(t,!0,!0,!1),t},e.addBody=function(t,c){return t.bodies.push(c),e.setModified(t,!0,!0,!1),t},e.removeBody=function(t,c,a){var n=s.indexOf(t.bodies,c);if(n!==-1&&(e.removeBodyAt(t,n),c.sleepCounter=0),a)for(var r=0;r<t.composites.length;r++)e.removeBody(t.composites[r],c,!0);return t},e.removeBodyAt=function(t,c){return t.bodies.splice(c,1),e.setModified(t,!0,!0,!1),t},e.addConstraint=function(t,c){return t.constraints.push(c),e.setModified(t,!0,!0,!1),t},e.removeConstraint=function(t,c,a){var n=s.indexOf(t.constraints,c);if(n!==-1&&e.removeConstraintAt(t,n),a)for(var r=0;r<t.composites.length;r++)e.removeConstraint(t.composites[r],c,!0);return t},e.removeConstraintAt=function(t,c){return t.constraints.splice(c,1),e.setModified(t,!0,!0,!1),t},e.clear=function(t,c,a){if(a)for(var n=0;n<t.composites.length;n++)e.clear(t.composites[n],c,!0);return c?t.bodies=t.bodies.filter(function(r){return r.isStatic}):t.bodies.length=0,t.constraints.length=0,t.composites.length=0,e.setModified(t,!0,!0,!1),t},e.allBodies=function(t){if(t.cache&&t.cache.allBodies)return t.cache.allBodies;for(var c=[].concat(t.bodies),a=0;a<t.composites.length;a++)c=c.concat(e.allBodies(t.composites[a]));return t.cache&&(t.cache.allBodies=c),c},e.allConstraints=function(t){if(t.cache&&t.cache.allConstraints)return t.cache.allConstraints;for(var c=[].concat(t.constraints),a=0;a<t.composites.length;a++)c=c.concat(e.allConstraints(t.composites[a]));return t.cache&&(t.cache.allConstraints=c),c},e.allComposites=function(t){if(t.cache&&t.cache.allComposites)return t.cache.allComposites;for(var c=[].concat(t.composites),a=0;a<t.composites.length;a++)c=c.concat(e.allComposites(t.composites[a]));return t.cache&&(t.cache.allComposites=c),c},e.get=function(t,c,a){var n,r;switch(a){case"body":n=e.allBodies(t);break;case"constraint":n=e.allConstraints(t);break;case"composite":n=e.allComposites(t).concat(t);break}return n?(r=n.filter(function(i){return i.id.toString()===c.toString()}),r.length===0?null:r[0]):null},e.move=function(t,c,a){return e.remove(t,c),e.add(a,c),t},e.rebase=function(t){for(var c=e.allBodies(t).concat(e.allConstraints(t)).concat(e.allComposites(t)),a=0;a<c.length;a++)c[a].id=s.nextId();return t},e.translate=function(t,c,a){for(var n=a?e.allBodies(t):t.bodies,r=0;r<n.length;r++)g.translate(n[r],c);return t},e.rotate=function(t,c,a,n){for(var r=Math.cos(c),i=Math.sin(c),l=n?e.allBodies(t):t.bodies,h=0;h<l.length;h++){var y=l[h],w=y.position.x-a.x,R=y.position.y-a.y;g.setPosition(y,{x:a.x+(w*r-R*i),y:a.y+(w*i+R*r)}),g.rotate(y,c)}return t},e.scale=function(t,c,a,n,r){for(var i=r?e.allBodies(t):t.bodies,l=0;l<i.length;l++){var h=i[l],y=h.position.x-n.x,w=h.position.y-n.y;g.setPosition(h,{x:n.x+y*c,y:n.y+w*a}),g.scale(h,c,a)}return t},e.bounds=function(t){for(var c=e.allBodies(t),a=[],n=0;n<c.length;n+=1){var r=c[n];a.push(r.bounds.min,r.bounds.max)}return o.create(a)}})()},function(E,b,d){var e={};E.exports=e;var f=d(4),s=d(5),o=d(0);(function(){e._motionWakeThreshold=.18,e._motionSleepThreshold=.08,e._minBias=.9,e.update=function(g,t){for(var c=t/o._baseDelta,a=e._motionSleepThreshold,n=0;n<g.length;n++){var r=g[n],i=f.getSpeed(r),l=f.getAngularSpeed(r),h=i*i+l*l;if(r.force.x!==0||r.force.y!==0){e.set(r,!1);continue}var y=Math.min(r.motion,h),w=Math.max(r.motion,h);r.motion=e._minBias*y+(1-e._minBias)*w,r.sleepThreshold>0&&r.motion<a?(r.sleepCounter+=1,r.sleepCounter>=r.sleepThreshold/c&&e.set(r,!0)):r.sleepCounter>0&&(r.sleepCounter-=1)}},e.afterCollisions=function(g){for(var t=e._motionSleepThreshold,c=0;c<g.length;c++){var a=g[c];if(a.isActive){var n=a.collision,r=n.bodyA.parent,i=n.bodyB.parent;if(!(r.isSleeping&&i.isSleeping||r.isStatic||i.isStatic)&&(r.isSleeping||i.isSleeping)){var l=r.isSleeping&&!r.isStatic?r:i,h=l===r?i:r;!l.isStatic&&h.motion>t&&e.set(l,!1)}}}},e.set=function(g,t){var c=g.isSleeping;t?(g.isSleeping=!0,g.sleepCounter=g.sleepThreshold,g.positionImpulse.x=0,g.positionImpulse.y=0,g.positionPrev.x=g.position.x,g.positionPrev.y=g.position.y,g.anglePrev=g.angle,g.speed=0,g.angularSpeed=0,g.motion=0,c||s.trigger(g,"sleepStart")):(g.isSleeping=!1,g.sleepCounter=0,c&&s.trigger(g,"sleepEnd"))}})()},function(E,b,d){var e={};E.exports=e;var f=d(3),s=d(9);(function(){var o=[],g={overlap:0,axis:null},t={overlap:0,axis:null};e.create=function(c,a){return{pair:null,collided:!1,bodyA:c,bodyB:a,parentA:c.parent,parentB:a.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},e.collides=function(c,a,n){if(e._overlapAxes(g,c.vertices,a.vertices,c.axes),g.overlap<=0||(e._overlapAxes(t,a.vertices,c.vertices,a.axes),t.overlap<=0))return null;var r=n&&n.table[s.id(c,a)],i;r?i=r.collision:(i=e.create(c,a),i.collided=!0,i.bodyA=c.id<a.id?c:a,i.bodyB=c.id<a.id?a:c,i.parentA=i.bodyA.parent,i.parentB=i.bodyB.parent),c=i.bodyA,a=i.bodyB;var l;g.overlap<t.overlap?l=g:l=t;var h=i.normal,y=i.tangent,w=i.penetration,R=i.supports,u=l.overlap,p=l.axis,m=p.x,v=p.y,S=a.position.x-c.position.x,x=a.position.y-c.position.y;m*S+v*x>=0&&(m=-m,v=-v),h.x=m,h.y=v,y.x=-v,y.y=m,w.x=m*u,w.y=v*u,i.depth=u;var C=e._findSupports(c,a,h,1),M=0;if(f.contains(c.vertices,C[0])&&(R[M++]=C[0]),f.contains(c.vertices,C[1])&&(R[M++]=C[1]),M<2){var P=e._findSupports(a,c,h,-1);f.contains(a.vertices,P[0])&&(R[M++]=P[0]),M<2&&f.contains(a.vertices,P[1])&&(R[M++]=P[1])}return M===0&&(R[M++]=C[0]),i.supportCount=M,i},e._overlapAxes=function(c,a,n,r){var i=a.length,l=n.length,h=a[0].x,y=a[0].y,w=n[0].x,R=n[0].y,u=r.length,p=Number.MAX_VALUE,m=0,v,S,x,C,M,P;for(M=0;M<u;M++){var T=r[M],B=T.x,I=T.y,A=h*B+y*I,L=w*B+R*I,D=A,W=L;for(P=1;P<i;P+=1)C=a[P].x*B+a[P].y*I,C>D?D=C:C<A&&(A=C);for(P=1;P<l;P+=1)C=n[P].x*B+n[P].y*I,C>W?W=C:C<L&&(L=C);if(S=D-L,x=W-A,v=S<x?S:x,v<p&&(p=v,m=M,v<=0))break}c.axis=r[m],c.overlap=p},e._findSupports=function(c,a,n,r){var i=a.vertices,l=i.length,h=c.position.x,y=c.position.y,w=n.x*r,R=n.y*r,u=i[0],p=u,m=w*(h-p.x)+R*(y-p.y),v,S,x;for(x=1;x<l;x+=1)p=i[x],S=w*(h-p.x)+R*(y-p.y),S<m&&(m=S,u=p);return v=i[(l+u.index-1)%l],m=w*(h-v.x)+R*(y-v.y),p=i[(u.index+1)%l],w*(h-p.x)+R*(y-p.y)<m?(o[0]=u,o[1]=p,o):(o[0]=u,o[1]=v,o)}})()},function(E,b,d){var e={};E.exports=e;var f=d(16);(function(){e.create=function(s,o){var g=s.bodyA,t=s.bodyB,c={id:e.id(g,t),bodyA:g,bodyB:t,collision:s,contacts:[f.create(),f.create()],contactCount:0,separation:0,isActive:!0,isSensor:g.isSensor||t.isSensor,timeCreated:o,timeUpdated:o,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return e.update(c,s,o),c},e.update=function(s,o,g){var t=o.supports,c=o.supportCount,a=s.contacts,n=o.parentA,r=o.parentB;s.isActive=!0,s.timeUpdated=g,s.collision=o,s.separation=o.depth,s.inverseMass=n.inverseMass+r.inverseMass,s.friction=n.friction<r.friction?n.friction:r.friction,s.frictionStatic=n.frictionStatic>r.frictionStatic?n.frictionStatic:r.frictionStatic,s.restitution=n.restitution>r.restitution?n.restitution:r.restitution,s.slop=n.slop>r.slop?n.slop:r.slop,s.contactCount=c,o.pair=s;var i=t[0],l=a[0],h=t[1],y=a[1];(y.vertex===i||l.vertex===h)&&(a[1]=l,a[0]=l=y,y=a[1]),l.vertex=i,y.vertex=h},e.setActive=function(s,o,g){o?(s.isActive=!0,s.timeUpdated=g):(s.isActive=!1,s.contactCount=0)},e.id=function(s,o){return s.id<o.id?s.id.toString(36)+":"+o.id.toString(36):o.id.toString(36)+":"+s.id.toString(36)}})()},function(E,b,d){var e={};E.exports=e;var f=d(3),s=d(2),o=d(7),g=d(1),t=d(11),c=d(0);(function(){e._warming=.4,e._torqueDampen=1,e._minLength=1e-6,e.create=function(a){var n=a;n.bodyA&&!n.pointA&&(n.pointA={x:0,y:0}),n.bodyB&&!n.pointB&&(n.pointB={x:0,y:0});var r=n.bodyA?s.add(n.bodyA.position,n.pointA):n.pointA,i=n.bodyB?s.add(n.bodyB.position,n.pointB):n.pointB,l=s.magnitude(s.sub(r,i));n.length=typeof n.length<"u"?n.length:l,n.id=n.id||c.nextId(),n.label=n.label||"Constraint",n.type="constraint",n.stiffness=n.stiffness||(n.length>0?1:.7),n.damping=n.damping||0,n.angularStiffness=n.angularStiffness||0,n.angleA=n.bodyA?n.bodyA.angle:n.angleA,n.angleB=n.bodyB?n.bodyB.angle:n.angleB,n.plugin={};var h={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return n.length===0&&n.stiffness>.1?(h.type="pin",h.anchors=!1):n.stiffness<.9&&(h.type="spring"),n.render=c.extend(h,n.render),n},e.preSolveAll=function(a){for(var n=0;n<a.length;n+=1){var r=a[n],i=r.constraintImpulse;r.isStatic||i.x===0&&i.y===0&&i.angle===0||(r.position.x+=i.x,r.position.y+=i.y,r.angle+=i.angle)}},e.solveAll=function(a,n){for(var r=c.clamp(n/c._baseDelta,0,1),i=0;i<a.length;i+=1){var l=a[i],h=!l.bodyA||l.bodyA&&l.bodyA.isStatic,y=!l.bodyB||l.bodyB&&l.bodyB.isStatic;(h||y)&&e.solve(a[i],r)}for(i=0;i<a.length;i+=1)l=a[i],h=!l.bodyA||l.bodyA&&l.bodyA.isStatic,y=!l.bodyB||l.bodyB&&l.bodyB.isStatic,!h&&!y&&e.solve(a[i],r)},e.solve=function(a,n){var r=a.bodyA,i=a.bodyB,l=a.pointA,h=a.pointB;if(!(!r&&!i)){r&&!r.isStatic&&(s.rotate(l,r.angle-a.angleA,l),a.angleA=r.angle),i&&!i.isStatic&&(s.rotate(h,i.angle-a.angleB,h),a.angleB=i.angle);var y=l,w=h;if(r&&(y=s.add(r.position,l)),i&&(w=s.add(i.position,h)),!(!y||!w)){var R=s.sub(y,w),u=s.magnitude(R);u<e._minLength&&(u=e._minLength);var p=(u-a.length)/u,m=a.stiffness>=1||a.length===0,v=m?a.stiffness*n:a.stiffness*n*n,S=a.damping*n,x=s.mult(R,p*v),C=(r?r.inverseMass:0)+(i?i.inverseMass:0),M=(r?r.inverseInertia:0)+(i?i.inverseInertia:0),P=C+M,T,B,I,A,L;if(S>0){var D=s.create();I=s.div(R,u),L=s.sub(i&&s.sub(i.position,i.positionPrev)||D,r&&s.sub(r.position,r.positionPrev)||D),A=s.dot(I,L)}r&&!r.isStatic&&(B=r.inverseMass/C,r.constraintImpulse.x-=x.x*B,r.constraintImpulse.y-=x.y*B,r.position.x-=x.x*B,r.position.y-=x.y*B,S>0&&(r.positionPrev.x-=S*I.x*A*B,r.positionPrev.y-=S*I.y*A*B),T=s.cross(l,x)/P*e._torqueDampen*r.inverseInertia*(1-a.angularStiffness),r.constraintImpulse.angle-=T,r.angle-=T),i&&!i.isStatic&&(B=i.inverseMass/C,i.constraintImpulse.x+=x.x*B,i.constraintImpulse.y+=x.y*B,i.position.x+=x.x*B,i.position.y+=x.y*B,S>0&&(i.positionPrev.x+=S*I.x*A*B,i.positionPrev.y+=S*I.y*A*B),T=s.cross(h,x)/P*e._torqueDampen*i.inverseInertia*(1-a.angularStiffness),i.constraintImpulse.angle+=T,i.angle+=T)}}},e.postSolveAll=function(a){for(var n=0;n<a.length;n++){var r=a[n],i=r.constraintImpulse;if(!(r.isStatic||i.x===0&&i.y===0&&i.angle===0)){o.set(r,!1);for(var l=0;l<r.parts.length;l++){var h=r.parts[l];f.translate(h.vertices,i),l>0&&(h.position.x+=i.x,h.position.y+=i.y),i.angle!==0&&(f.rotate(h.vertices,i.angle,r.position),t.rotate(h.axes,i.angle),l>0&&s.rotateAbout(h.position,i.angle,r.position,h.position)),g.update(h.bounds,h.vertices,r.velocity)}i.angle*=e._warming,i.x*=e._warming,i.y*=e._warming}}},e.pointAWorld=function(a){return{x:(a.bodyA?a.bodyA.position.x:0)+(a.pointA?a.pointA.x:0),y:(a.bodyA?a.bodyA.position.y:0)+(a.pointA?a.pointA.y:0)}},e.pointBWorld=function(a){return{x:(a.bodyB?a.bodyB.position.x:0)+(a.pointB?a.pointB.x:0),y:(a.bodyB?a.bodyB.position.y:0)+(a.pointB?a.pointB.y:0)}},e.currentLength=function(a){var n=(a.bodyA?a.bodyA.position.x:0)+(a.pointA?a.pointA.x:0),r=(a.bodyA?a.bodyA.position.y:0)+(a.pointA?a.pointA.y:0),i=(a.bodyB?a.bodyB.position.x:0)+(a.pointB?a.pointB.x:0),l=(a.bodyB?a.bodyB.position.y:0)+(a.pointB?a.pointB.y:0),h=n-i,y=r-l;return Math.sqrt(h*h+y*y)}})()},function(E,b,d){var e={};E.exports=e;var f=d(2),s=d(0);(function(){e.fromVertices=function(o){for(var g={},t=0;t<o.length;t++){var c=(t+1)%o.length,a=f.normalise({x:o[c].y-o[t].y,y:o[t].x-o[c].x}),n=a.y===0?1/0:a.x/a.y;n=n.toFixed(3).toString(),g[n]=a}return s.values(g)},e.rotate=function(o,g){if(g!==0)for(var t=Math.cos(g),c=Math.sin(g),a=0;a<o.length;a++){var n=o[a],r;r=n.x*t-n.y*c,n.y=n.x*c+n.y*t,n.x=r}}})()},function(E,b,d){var e={};E.exports=e;var f=d(3),s=d(0),o=d(4),g=d(1),t=d(2);(function(){e.rectangle=function(c,a,n,r,i){i=i||{};var l={label:"Rectangle Body",position:{x:c,y:a},vertices:f.fromPath("L 0 0 L "+n+" 0 L "+n+" "+r+" L 0 "+r)};if(i.chamfer){var h=i.chamfer;l.vertices=f.chamfer(l.vertices,h.radius,h.quality,h.qualityMin,h.qualityMax),delete i.chamfer}return o.create(s.extend({},l,i))},e.trapezoid=function(c,a,n,r,i,l){l=l||{},i>=1&&s.warn("Bodies.trapezoid: slope parameter must be < 1."),i*=.5;var h=(1-i*2)*n,y=n*i,w=y+h,R=w+y,u;i<.5?u="L 0 0 L "+y+" "+-r+" L "+w+" "+-r+" L "+R+" 0":u="L 0 0 L "+w+" "+-r+" L "+R+" 0";var p={label:"Trapezoid Body",position:{x:c,y:a},vertices:f.fromPath(u)};if(l.chamfer){var m=l.chamfer;p.vertices=f.chamfer(p.vertices,m.radius,m.quality,m.qualityMin,m.qualityMax),delete l.chamfer}return o.create(s.extend({},p,l))},e.circle=function(c,a,n,r,i){r=r||{};var l={label:"Circle Body",circleRadius:n};i=i||25;var h=Math.ceil(Math.max(10,Math.min(i,n)));return h%2===1&&(h+=1),e.polygon(c,a,h,n,s.extend({},l,r))},e.polygon=function(c,a,n,r,i){if(i=i||{},n<3)return e.circle(c,a,r,i);for(var l=2*Math.PI/n,h="",y=l*.5,w=0;w<n;w+=1){var R=y+w*l,u=Math.cos(R)*r,p=Math.sin(R)*r;h+="L "+u.toFixed(3)+" "+p.toFixed(3)+" "}var m={label:"Polygon Body",position:{x:c,y:a},vertices:f.fromPath(h)};if(i.chamfer){var v=i.chamfer;m.vertices=f.chamfer(m.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete i.chamfer}return o.create(s.extend({},m,i))},e.fromVertices=function(c,a,n,r,i,l,h,y){var w=s.getDecomp(),R,u,p,m,v,S,x,C,M,P,T;for(R=!!(w&&w.quickDecomp),r=r||{},p=[],i=typeof i<"u"?i:!1,l=typeof l<"u"?l:.01,h=typeof h<"u"?h:10,y=typeof y<"u"?y:.01,s.isArray(n[0])||(n=[n]),P=0;P<n.length;P+=1)if(S=n[P],m=f.isConvex(S),v=!m,v&&!R&&s.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),m||!R)m?S=f.clockwiseSort(S):S=f.hull(S),p.push({position:{x:c,y:a},vertices:S});else{var B=S.map(function(F){return[F.x,F.y]});w.makeCCW(B),l!==!1&&w.removeCollinearPoints(B,l),y!==!1&&w.removeDuplicatePoints&&w.removeDuplicatePoints(B,y);var I=w.quickDecomp(B);for(x=0;x<I.length;x++){var A=I[x],L=A.map(function(F){return{x:F[0],y:F[1]}});h>0&&f.area(L)<h||p.push({position:f.centre(L),vertices:L})}}for(x=0;x<p.length;x++)p[x]=o.create(s.extend(p[x],r));if(i){var D=5;for(x=0;x<p.length;x++){var W=p[x];for(C=x+1;C<p.length;C++){var O=p[C];if(g.overlaps(W.bounds,O.bounds)){var V=W.vertices,k=O.vertices;for(M=0;M<W.vertices.length;M++)for(T=0;T<O.vertices.length;T++){var H=t.magnitudeSquared(t.sub(V[(M+1)%V.length],k[T])),$=t.magnitudeSquared(t.sub(V[M],k[(T+1)%k.length]));H<D&&$<D&&(V[M].isInternal=!0,k[T].isInternal=!0)}}}}}return p.length>1?(u=o.create(s.extend({parts:p.slice(0)},r)),o.setPosition(u,{x:c,y:a}),u):p[0]}})()},function(E,b,d){var e={};E.exports=e;var f=d(0),s=d(8);(function(){e.create=function(o){var g={bodies:[],collisions:[],pairs:null};return f.extend(g,o)},e.setBodies=function(o,g){o.bodies=g.slice(0)},e.clear=function(o){o.bodies=[],o.collisions=[]},e.collisions=function(o){var g=o.pairs,t=o.bodies,c=t.length,a=e.canCollide,n=s.collides,r=o.collisions,i=0,l,h;for(t.sort(e._compareBoundsX),l=0;l<c;l++){var y=t[l],w=y.bounds,R=y.bounds.max.x,u=y.bounds.max.y,p=y.bounds.min.y,m=y.isStatic||y.isSleeping,v=y.parts.length,S=v===1;for(h=l+1;h<c;h++){var x=t[h],C=x.bounds;if(C.min.x>R)break;if(!(u<C.min.y||p>C.max.y)&&!(m&&(x.isStatic||x.isSleeping))&&a(y.collisionFilter,x.collisionFilter)){var M=x.parts.length;if(S&&M===1){var P=n(y,x,g);P&&(r[i++]=P)}else for(var T=v>1?1:0,B=M>1?1:0,I=T;I<v;I++)for(var A=y.parts[I],w=A.bounds,L=B;L<M;L++){var D=x.parts[L],C=D.bounds;if(!(w.min.x>C.max.x||w.max.x<C.min.x||w.max.y<C.min.y||w.min.y>C.max.y)){var P=n(A,D,g);P&&(r[i++]=P)}}}}}return r.length!==i&&(r.length=i),r},e.canCollide=function(o,g){return o.group===g.group&&o.group!==0?o.group>0:(o.mask&g.category)!==0&&(g.mask&o.category)!==0},e._compareBoundsX=function(o,g){return o.bounds.min.x-g.bounds.min.x}})()},function(E,b,d){var e={};E.exports=e;var f=d(0);(function(){e.create=function(s){var o={};return s||f.log("Mouse.create: element was undefined, defaulting to document.body","warn"),o.element=s||document.body,o.absolute={x:0,y:0},o.position={x:0,y:0},o.mousedownPosition={x:0,y:0},o.mouseupPosition={x:0,y:0},o.offset={x:0,y:0},o.scale={x:1,y:1},o.wheelDelta=0,o.button=-1,o.pixelRatio=parseInt(o.element.getAttribute("data-pixel-ratio"),10)||1,o.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},o.mousemove=function(g){var t=e._getRelativeMousePosition(g,o.element,o.pixelRatio),c=g.changedTouches;c&&(o.button=0,g.preventDefault()),o.absolute.x=t.x,o.absolute.y=t.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y,o.sourceEvents.mousemove=g},o.mousedown=function(g){var t=e._getRelativeMousePosition(g,o.element,o.pixelRatio),c=g.changedTouches;c?(o.button=0,g.preventDefault()):o.button=g.button,o.absolute.x=t.x,o.absolute.y=t.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y,o.mousedownPosition.x=o.position.x,o.mousedownPosition.y=o.position.y,o.sourceEvents.mousedown=g},o.mouseup=function(g){var t=e._getRelativeMousePosition(g,o.element,o.pixelRatio),c=g.changedTouches;c&&g.preventDefault(),o.button=-1,o.absolute.x=t.x,o.absolute.y=t.y,o.position.x=o.absolute.x*o.scale.x+o.offset.x,o.position.y=o.absolute.y*o.scale.y+o.offset.y,o.mouseupPosition.x=o.position.x,o.mouseupPosition.y=o.position.y,o.sourceEvents.mouseup=g},o.mousewheel=function(g){o.wheelDelta=Math.max(-1,Math.min(1,g.wheelDelta||-g.detail)),g.preventDefault(),o.sourceEvents.mousewheel=g},e.setElement(o,o.element),o},e.setElement=function(s,o){s.element=o,o.addEventListener("mousemove",s.mousemove,{passive:!0}),o.addEventListener("mousedown",s.mousedown,{passive:!0}),o.addEventListener("mouseup",s.mouseup,{passive:!0}),o.addEventListener("wheel",s.mousewheel,{passive:!1}),o.addEventListener("touchmove",s.mousemove,{passive:!1}),o.addEventListener("touchstart",s.mousedown,{passive:!1}),o.addEventListener("touchend",s.mouseup,{passive:!1})},e.clearSourceEvents=function(s){s.sourceEvents.mousemove=null,s.sourceEvents.mousedown=null,s.sourceEvents.mouseup=null,s.sourceEvents.mousewheel=null,s.wheelDelta=0},e.setOffset=function(s,o){s.offset.x=o.x,s.offset.y=o.y,s.position.x=s.absolute.x*s.scale.x+s.offset.x,s.position.y=s.absolute.y*s.scale.y+s.offset.y},e.setScale=function(s,o){s.scale.x=o.x,s.scale.y=o.y,s.position.x=s.absolute.x*s.scale.x+s.offset.x,s.position.y=s.absolute.y*s.scale.y+s.offset.y},e._getRelativeMousePosition=function(s,o,g){var t=o.getBoundingClientRect(),c=document.documentElement||document.body.parentNode||document.body,a=window.pageXOffset!==void 0?window.pageXOffset:c.scrollLeft,n=window.pageYOffset!==void 0?window.pageYOffset:c.scrollTop,r=s.changedTouches,i,l;return r?(i=r[0].pageX-t.left-a,l=r[0].pageY-t.top-n):(i=s.pageX-t.left-a,l=s.pageY-t.top-n),{x:i/(o.clientWidth/(o.width||o.clientWidth)*g),y:l/(o.clientHeight/(o.height||o.clientHeight)*g)}}})()},function(E,b,d){var e={};E.exports=e;var f=d(0);(function(){e._registry={},e.register=function(s){if(e.isPlugin(s)||f.warn("Plugin.register:",e.toString(s),"does not implement all required fields."),s.name in e._registry){var o=e._registry[s.name],g=e.versionParse(s.version).number,t=e.versionParse(o.version).number;g>t?(f.warn("Plugin.register:",e.toString(o),"was upgraded to",e.toString(s)),e._registry[s.name]=s):g<t?f.warn("Plugin.register:",e.toString(o),"can not be downgraded to",e.toString(s)):s!==o&&f.warn("Plugin.register:",e.toString(s),"is already registered to different plugin object")}else e._registry[s.name]=s;return s},e.resolve=function(s){return e._registry[e.dependencyParse(s).name]},e.toString=function(s){return typeof s=="string"?s:(s.name||"anonymous")+"@"+(s.version||s.range||"0.0.0")},e.isPlugin=function(s){return s&&s.name&&s.version&&s.install},e.isUsed=function(s,o){return s.used.indexOf(o)>-1},e.isFor=function(s,o){var g=s.for&&e.dependencyParse(s.for);return!s.for||o.name===g.name&&e.versionSatisfies(o.version,g.range)},e.use=function(s,o){if(s.uses=(s.uses||[]).concat(o||[]),s.uses.length===0){f.warn("Plugin.use:",e.toString(s),"does not specify any dependencies to install.");return}for(var g=e.dependencies(s),t=f.topologicalSort(g),c=[],a=0;a<t.length;a+=1)if(t[a]!==s.name){var n=e.resolve(t[a]);if(!n){c.push("❌ "+t[a]);continue}e.isUsed(s,n.name)||(e.isFor(n,s)||(f.warn("Plugin.use:",e.toString(n),"is for",n.for,"but installed on",e.toString(s)+"."),n._warned=!0),n.install?n.install(s):(f.warn("Plugin.use:",e.toString(n),"does not specify an install function."),n._warned=!0),n._warned?(c.push("🔶 "+e.toString(n)),delete n._warned):c.push("✅ "+e.toString(n)),s.used.push(n.name))}c.length>0&&f.info(c.join("  "))},e.dependencies=function(s,o){var g=e.dependencyParse(s),t=g.name;if(o=o||{},!(t in o)){s=e.resolve(s)||s,o[t]=f.map(s.uses||[],function(a){e.isPlugin(a)&&e.register(a);var n=e.dependencyParse(a),r=e.resolve(a);return r&&!e.versionSatisfies(r.version,n.range)?(f.warn("Plugin.dependencies:",e.toString(r),"does not satisfy",e.toString(n),"used by",e.toString(g)+"."),r._warned=!0,s._warned=!0):r||(f.warn("Plugin.dependencies:",e.toString(a),"used by",e.toString(g),"could not be resolved."),s._warned=!0),n.name});for(var c=0;c<o[t].length;c+=1)e.dependencies(o[t][c],o);return o}},e.dependencyParse=function(s){if(f.isString(s)){var o=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return o.test(s)||f.warn("Plugin.dependencyParse:",s,"is not a valid dependency string."),{name:s.split("@")[0],range:s.split("@")[1]||"*"}}return{name:s.name,range:s.range||s.version}},e.versionParse=function(s){var o=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;o.test(s)||f.warn("Plugin.versionParse:",s,"is not a valid version or range.");var g=o.exec(s),t=Number(g[4]),c=Number(g[5]),a=Number(g[6]);return{isRange:!!(g[1]||g[2]),version:g[3],range:s,operator:g[1]||g[2]||"",major:t,minor:c,patch:a,parts:[t,c,a],prerelease:g[7],number:t*1e8+c*1e4+a}},e.versionSatisfies=function(s,o){o=o||"*";var g=e.versionParse(o),t=e.versionParse(s);if(g.isRange){if(g.operator==="*"||s==="*")return!0;if(g.operator===">")return t.number>g.number;if(g.operator===">=")return t.number>=g.number;if(g.operator==="~")return t.major===g.major&&t.minor===g.minor&&t.patch>=g.patch;if(g.operator==="^")return g.major>0?t.major===g.major&&t.number>=g.number:g.minor>0?t.minor===g.minor&&t.patch>=g.patch:t.patch===g.patch}return s===o||s==="*"}})()},function(E,b){var d={};E.exports=d,function(){d.create=function(e){return{vertex:e,normalImpulse:0,tangentImpulse:0}}}()},function(E,b,d){var e={};E.exports=e;var f=d(7),s=d(18),o=d(13),g=d(19),t=d(5),c=d(6),a=d(10),n=d(0),r=d(4);(function(){e._deltaMax=1e3/60,e.create=function(i){i=i||{};var l={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},h=n.extend(l,i);return h.world=i.world||c.create({label:"World"}),h.pairs=i.pairs||g.create(),h.detector=i.detector||o.create(),h.detector.pairs=h.pairs,h.grid={buckets:[]},h.world.gravity=h.gravity,h.broadphase=h.grid,h.metrics={},h},e.update=function(i,l){var h=n.now(),y=i.world,w=i.detector,R=i.pairs,u=i.timing,p=u.timestamp,m;l>e._deltaMax&&n.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",e._deltaMax.toFixed(3),"ms."),l=typeof l<"u"?l:n._baseDelta,l*=u.timeScale,u.timestamp+=l,u.lastDelta=l;var v={timestamp:u.timestamp,delta:l};t.trigger(i,"beforeUpdate",v);var S=c.allBodies(y),x=c.allConstraints(y);for(y.isModified&&(o.setBodies(w,S),c.setModified(y,!1,!1,!0)),i.enableSleeping&&f.update(S,l),e._bodiesApplyGravity(S,i.gravity),l>0&&e._bodiesUpdate(S,l),t.trigger(i,"beforeSolve",v),a.preSolveAll(S),m=0;m<i.constraintIterations;m++)a.solveAll(x,l);a.postSolveAll(S);var C=o.collisions(w);g.update(R,C,p),i.enableSleeping&&f.afterCollisions(R.list),R.collisionStart.length>0&&t.trigger(i,"collisionStart",{pairs:R.collisionStart,timestamp:u.timestamp,delta:l});var M=n.clamp(20/i.positionIterations,0,1);for(s.preSolvePosition(R.list),m=0;m<i.positionIterations;m++)s.solvePosition(R.list,l,M);for(s.postSolvePosition(S),a.preSolveAll(S),m=0;m<i.constraintIterations;m++)a.solveAll(x,l);for(a.postSolveAll(S),s.preSolveVelocity(R.list),m=0;m<i.velocityIterations;m++)s.solveVelocity(R.list,l);return e._bodiesUpdateVelocities(S),R.collisionActive.length>0&&t.trigger(i,"collisionActive",{pairs:R.collisionActive,timestamp:u.timestamp,delta:l}),R.collisionEnd.length>0&&t.trigger(i,"collisionEnd",{pairs:R.collisionEnd,timestamp:u.timestamp,delta:l}),e._bodiesClearForces(S),t.trigger(i,"afterUpdate",v),i.timing.lastElapsed=n.now()-h,i},e.merge=function(i,l){if(n.extend(i,l),l.world){i.world=l.world,e.clear(i);for(var h=c.allBodies(i.world),y=0;y<h.length;y++){var w=h[y];f.set(w,!1),w.id=n.nextId()}}},e.clear=function(i){g.clear(i.pairs),o.clear(i.detector)},e._bodiesClearForces=function(i){for(var l=i.length,h=0;h<l;h++){var y=i[h];y.force.x=0,y.force.y=0,y.torque=0}},e._bodiesApplyGravity=function(i,l){var h=typeof l.scale<"u"?l.scale:.001,y=i.length;if(!(l.x===0&&l.y===0||h===0))for(var w=0;w<y;w++){var R=i[w];R.isStatic||R.isSleeping||(R.force.y+=R.mass*l.y*h,R.force.x+=R.mass*l.x*h)}},e._bodiesUpdate=function(i,l){for(var h=i.length,y=0;y<h;y++){var w=i[y];w.isStatic||w.isSleeping||r.update(w,l)}},e._bodiesUpdateVelocities=function(i){for(var l=i.length,h=0;h<l;h++)r.updateVelocities(i[h])}})()},function(E,b,d){var e={};E.exports=e;var f=d(3),s=d(0),o=d(1);(function(){e._restingThresh=2,e._restingThreshTangent=Math.sqrt(6),e._positionDampen=.9,e._positionWarming=.8,e._frictionNormalMultiplier=5,e._frictionMaxStatic=Number.MAX_VALUE,e.preSolvePosition=function(g){var t,c,a,n=g.length;for(t=0;t<n;t++)c=g[t],c.isActive&&(a=c.contactCount,c.collision.parentA.totalContacts+=a,c.collision.parentB.totalContacts+=a)},e.solvePosition=function(g,t,c){var a,n,r,i,l,h,y,w,R=e._positionDampen*(c||1),u=s.clamp(t/s._baseDelta,0,1),p=g.length;for(a=0;a<p;a++)n=g[a],!(!n.isActive||n.isSensor)&&(r=n.collision,i=r.parentA,l=r.parentB,h=r.normal,n.separation=r.depth+h.x*(l.positionImpulse.x-i.positionImpulse.x)+h.y*(l.positionImpulse.y-i.positionImpulse.y));for(a=0;a<p;a++)n=g[a],!(!n.isActive||n.isSensor)&&(r=n.collision,i=r.parentA,l=r.parentB,h=r.normal,w=n.separation-n.slop*u,(i.isStatic||l.isStatic)&&(w*=2),i.isStatic||i.isSleeping||(y=R/i.totalContacts,i.positionImpulse.x+=h.x*w*y,i.positionImpulse.y+=h.y*w*y),l.isStatic||l.isSleeping||(y=R/l.totalContacts,l.positionImpulse.x-=h.x*w*y,l.positionImpulse.y-=h.y*w*y))},e.postSolvePosition=function(g){for(var t=e._positionWarming,c=g.length,a=f.translate,n=o.update,r=0;r<c;r++){var i=g[r],l=i.positionImpulse,h=l.x,y=l.y,w=i.velocity;if(i.totalContacts=0,h!==0||y!==0){for(var R=0;R<i.parts.length;R++){var u=i.parts[R];a(u.vertices,l),n(u.bounds,u.vertices,w),u.position.x+=h,u.position.y+=y}i.positionPrev.x+=h,i.positionPrev.y+=y,h*w.x+y*w.y<0?(l.x=0,l.y=0):(l.x*=t,l.y*=t)}}},e.preSolveVelocity=function(g){var t=g.length,c,a;for(c=0;c<t;c++){var n=g[c];if(!(!n.isActive||n.isSensor)){var r=n.contacts,i=n.contactCount,l=n.collision,h=l.parentA,y=l.parentB,w=l.normal,R=l.tangent;for(a=0;a<i;a++){var u=r[a],p=u.vertex,m=u.normalImpulse,v=u.tangentImpulse;if(m!==0||v!==0){var S=w.x*m+R.x*v,x=w.y*m+R.y*v;h.isStatic||h.isSleeping||(h.positionPrev.x+=S*h.inverseMass,h.positionPrev.y+=x*h.inverseMass,h.anglePrev+=h.inverseInertia*((p.x-h.position.x)*x-(p.y-h.position.y)*S)),y.isStatic||y.isSleeping||(y.positionPrev.x-=S*y.inverseMass,y.positionPrev.y-=x*y.inverseMass,y.anglePrev-=y.inverseInertia*((p.x-y.position.x)*x-(p.y-y.position.y)*S))}}}}},e.solveVelocity=function(g,t){var c=t/s._baseDelta,a=c*c,n=a*c,r=-e._restingThresh*c,i=e._restingThreshTangent,l=e._frictionNormalMultiplier*c,h=e._frictionMaxStatic,y=g.length,w,R,u,p;for(u=0;u<y;u++){var m=g[u];if(!(!m.isActive||m.isSensor)){var v=m.collision,S=v.parentA,x=v.parentB,C=v.normal.x,M=v.normal.y,P=v.tangent.x,T=v.tangent.y,B=m.inverseMass,I=m.friction*m.frictionStatic*l,A=m.contacts,L=m.contactCount,D=1/L,W=S.position.x-S.positionPrev.x,O=S.position.y-S.positionPrev.y,V=S.angle-S.anglePrev,k=x.position.x-x.positionPrev.x,H=x.position.y-x.positionPrev.y,$=x.angle-x.anglePrev;for(p=0;p<L;p++){var F=A[p],N=F.vertex,z=N.x-S.position.x,Y=N.y-S.position.y,Q=N.x-x.position.x,Z=N.y-x.position.y,G=W-Y*V,he=O+z*V,pe=k-Z*$,me=H+Q*$,oe=G-pe,ae=he-me,te=C*oe+M*ae,K=P*oe+T*ae,se=m.separation+te,ie=Math.min(se,1);ie=se<0?0:ie;var le=ie*I;K<-le||K>le?(R=K>0?K:-K,w=m.friction*(K>0?1:-1)*n,w<-R?w=-R:w>R&&(w=R)):(w=K,R=h);var fe=z*M-Y*C,ce=Q*M-Z*C,ue=D/(B+S.inverseInertia*fe*fe+x.inverseInertia*ce*ce),q=(1+m.restitution)*te*ue;if(w*=ue,te<r)F.normalImpulse=0;else{var xe=F.normalImpulse;F.normalImpulse+=q,F.normalImpulse>0&&(F.normalImpulse=0),q=F.normalImpulse-xe}if(K<-i||K>i)F.tangentImpulse=0;else{var ye=F.tangentImpulse;F.tangentImpulse+=w,F.tangentImpulse<-R&&(F.tangentImpulse=-R),F.tangentImpulse>R&&(F.tangentImpulse=R),w=F.tangentImpulse-ye}var _=C*q+P*w,ee=M*q+T*w;S.isStatic||S.isSleeping||(S.positionPrev.x+=_*S.inverseMass,S.positionPrev.y+=ee*S.inverseMass,S.anglePrev+=(z*ee-Y*_)*S.inverseInertia),x.isStatic||x.isSleeping||(x.positionPrev.x-=_*x.inverseMass,x.positionPrev.y-=ee*x.inverseMass,x.anglePrev-=(Q*ee-Z*_)*x.inverseInertia)}}}}})()},function(E,b,d){var e={};E.exports=e;var f=d(9),s=d(0);(function(){e.create=function(o){return s.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},o)},e.update=function(o,g,t){var c=f.update,a=f.create,n=f.setActive,r=o.table,i=o.list,l=i.length,h=l,y=o.collisionStart,w=o.collisionEnd,R=o.collisionActive,u=g.length,p=0,m=0,v=0,S,x,C;for(C=0;C<u;C++)S=g[C],x=S.pair,x?(x.isActive&&(R[v++]=x),c(x,S,t)):(x=a(S,t),r[x.id]=x,y[p++]=x,i[h++]=x);for(h=0,l=i.length,C=0;C<l;C++)x=i[C],x.timeUpdated>=t?i[h++]=x:(n(x,!1,t),x.collision.bodyA.sleepCounter>0&&x.collision.bodyB.sleepCounter>0?i[h++]=x:(w[m++]=x,delete r[x.id]));i.length!==h&&(i.length=h),y.length!==p&&(y.length=p),w.length!==m&&(w.length=m),R.length!==v&&(R.length=v)},e.clear=function(o){return o.table={},o.list.length=0,o.collisionStart.length=0,o.collisionActive.length=0,o.collisionEnd.length=0,o}})()},function(E,b,d){var e=E.exports=d(21);e.Axes=d(11),e.Bodies=d(12),e.Body=d(4),e.Bounds=d(1),e.Collision=d(8),e.Common=d(0),e.Composite=d(6),e.Composites=d(22),e.Constraint=d(10),e.Contact=d(16),e.Detector=d(13),e.Engine=d(17),e.Events=d(5),e.Grid=d(23),e.Mouse=d(14),e.MouseConstraint=d(24),e.Pair=d(9),e.Pairs=d(19),e.Plugin=d(15),e.Query=d(25),e.Render=d(26),e.Resolver=d(18),e.Runner=d(27),e.SAT=d(28),e.Sleeping=d(7),e.Svg=d(29),e.Vector=d(2),e.Vertices=d(3),e.World=d(30),e.Engine.run=e.Runner.run,e.Common.deprecated(e.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(E,b,d){var e={};E.exports=e;var f=d(15),s=d(0);(function(){e.name="matter-js",e.version="0.20.0",e.uses=[],e.used=[],e.use=function(){f.use(e,Array.prototype.slice.call(arguments))},e.before=function(o,g){return o=o.replace(/^Matter./,""),s.chainPathBefore(e,o,g)},e.after=function(o,g){return o=o.replace(/^Matter./,""),s.chainPathAfter(e,o,g)}})()},function(E,b,d){var e={};E.exports=e;var f=d(6),s=d(10),o=d(0),g=d(4),t=d(12),c=o.deprecated;(function(){e.stack=function(a,n,r,i,l,h,y){for(var w=f.create({label:"Stack"}),R=a,u=n,p,m=0,v=0;v<i;v++){for(var S=0,x=0;x<r;x++){var C=y(R,u,x,v,p,m);if(C){var M=C.bounds.max.y-C.bounds.min.y,P=C.bounds.max.x-C.bounds.min.x;M>S&&(S=M),g.translate(C,{x:P*.5,y:M*.5}),R=C.bounds.max.x+l,f.addBody(w,C),p=C,m+=1}else R+=l}u+=S+h,R=a}return w},e.chain=function(a,n,r,i,l,h){for(var y=a.bodies,w=1;w<y.length;w++){var R=y[w-1],u=y[w],p=R.bounds.max.y-R.bounds.min.y,m=R.bounds.max.x-R.bounds.min.x,v=u.bounds.max.y-u.bounds.min.y,S=u.bounds.max.x-u.bounds.min.x,x={bodyA:R,pointA:{x:m*n,y:p*r},bodyB:u,pointB:{x:S*i,y:v*l}},C=o.extend(x,h);f.addConstraint(a,s.create(C))}return a.label+=" Chain",a},e.mesh=function(a,n,r,i,l){var h=a.bodies,y,w,R,u,p;for(y=0;y<r;y++){for(w=1;w<n;w++)R=h[w-1+y*n],u=h[w+y*n],f.addConstraint(a,s.create(o.extend({bodyA:R,bodyB:u},l)));if(y>0)for(w=0;w<n;w++)R=h[w+(y-1)*n],u=h[w+y*n],f.addConstraint(a,s.create(o.extend({bodyA:R,bodyB:u},l))),i&&w>0&&(p=h[w-1+(y-1)*n],f.addConstraint(a,s.create(o.extend({bodyA:p,bodyB:u},l)))),i&&w<n-1&&(p=h[w+1+(y-1)*n],f.addConstraint(a,s.create(o.extend({bodyA:p,bodyB:u},l))))}return a.label+=" Mesh",a},e.pyramid=function(a,n,r,i,l,h,y){return e.stack(a,n,r,i,l,h,function(w,R,u,p,m,v){var S=Math.min(i,Math.ceil(r/2)),x=m?m.bounds.max.x-m.bounds.min.x:0;if(!(p>S)){p=S-p;var C=p,M=r-1-p;if(!(u<C||u>M)){v===1&&g.translate(m,{x:(u+(r%2===1?1:-1))*x,y:0});var P=m?u*x:0;return y(a+P+u*l,R,u,p,m,v)}}})},e.newtonsCradle=function(a,n,r,i,l){for(var h=f.create({label:"Newtons Cradle"}),y=0;y<r;y++){var w=1.9,R=t.circle(a+y*(i*w),n+l,i,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),u=s.create({pointA:{x:a+y*(i*w),y:n},bodyB:R});f.addBody(h,R),f.addConstraint(h,u)}return h},c(e,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),e.car=function(a,n,r,i,l){var h=g.nextGroup(!0),y=20,w=-r*.5+y,R=r*.5-y,u=0,p=f.create({label:"Car"}),m=t.rectangle(a,n,r,i,{collisionFilter:{group:h},chamfer:{radius:i*.5},density:2e-4}),v=t.circle(a+w,n+u,l,{collisionFilter:{group:h},friction:.8}),S=t.circle(a+R,n+u,l,{collisionFilter:{group:h},friction:.8}),x=s.create({bodyB:m,pointB:{x:w,y:u},bodyA:v,stiffness:1,length:0}),C=s.create({bodyB:m,pointB:{x:R,y:u},bodyA:S,stiffness:1,length:0});return f.addBody(p,m),f.addBody(p,v),f.addBody(p,S),f.addConstraint(p,x),f.addConstraint(p,C),p},c(e,"car","Composites.car ➤ moved to car example"),e.softBody=function(a,n,r,i,l,h,y,w,R,u){R=o.extend({inertia:1/0},R),u=o.extend({stiffness:.2,render:{type:"line",anchors:!1}},u);var p=e.stack(a,n,r,i,l,h,function(m,v){return t.circle(m,v,w,R)});return e.mesh(p,r,i,y,u),p.label="Soft Body",p},c(e,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()},function(E,b,d){var e={};E.exports=e;var f=d(9),s=d(0),o=s.deprecated;(function(){e.create=function(g){var t={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return s.extend(t,g)},e.update=function(g,t,c,a){var n,r,i,l=c.world,h=g.buckets,y,w,R=!1;for(n=0;n<t.length;n++){var u=t[n];if(!(u.isSleeping&&!a)&&!(l.bounds&&(u.bounds.max.x<l.bounds.min.x||u.bounds.min.x>l.bounds.max.x||u.bounds.max.y<l.bounds.min.y||u.bounds.min.y>l.bounds.max.y))){var p=e._getRegion(g,u);if(!u.region||p.id!==u.region.id||a){(!u.region||a)&&(u.region=p);var m=e._regionUnion(p,u.region);for(r=m.startCol;r<=m.endCol;r++)for(i=m.startRow;i<=m.endRow;i++){w=e._getBucketId(r,i),y=h[w];var v=r>=p.startCol&&r<=p.endCol&&i>=p.startRow&&i<=p.endRow,S=r>=u.region.startCol&&r<=u.region.endCol&&i>=u.region.startRow&&i<=u.region.endRow;!v&&S&&S&&y&&e._bucketRemoveBody(g,y,u),(u.region===p||v&&!S||a)&&(y||(y=e._createBucket(h,w)),e._bucketAddBody(g,y,u))}u.region=p,R=!0}}}R&&(g.pairsList=e._createActivePairsList(g))},o(e,"update","Grid.update ➤ replaced by Matter.Detector"),e.clear=function(g){g.buckets={},g.pairs={},g.pairsList=[]},o(e,"clear","Grid.clear ➤ replaced by Matter.Detector"),e._regionUnion=function(g,t){var c=Math.min(g.startCol,t.startCol),a=Math.max(g.endCol,t.endCol),n=Math.min(g.startRow,t.startRow),r=Math.max(g.endRow,t.endRow);return e._createRegion(c,a,n,r)},e._getRegion=function(g,t){var c=t.bounds,a=Math.floor(c.min.x/g.bucketWidth),n=Math.floor(c.max.x/g.bucketWidth),r=Math.floor(c.min.y/g.bucketHeight),i=Math.floor(c.max.y/g.bucketHeight);return e._createRegion(a,n,r,i)},e._createRegion=function(g,t,c,a){return{id:g+","+t+","+c+","+a,startCol:g,endCol:t,startRow:c,endRow:a}},e._getBucketId=function(g,t){return"C"+g+"R"+t},e._createBucket=function(g,t){var c=g[t]=[];return c},e._bucketAddBody=function(g,t,c){var a=g.pairs,n=f.id,r=t.length,i;for(i=0;i<r;i++){var l=t[i];if(!(c.id===l.id||c.isStatic&&l.isStatic)){var h=n(c,l),y=a[h];y?y[2]+=1:a[h]=[c,l,1]}}t.push(c)},e._bucketRemoveBody=function(g,t,c){var a=g.pairs,n=f.id,r;t.splice(s.indexOf(t,c),1);var i=t.length;for(r=0;r<i;r++){var l=a[n(c,t[r])];l&&(l[2]-=1)}},e._createActivePairsList=function(g){var t,c=g.pairs,a=s.keys(c),n=a.length,r=[],i;for(i=0;i<n;i++)t=c[a[i]],t[2]>0?r.push(t):delete c[a[i]];return r}})()},function(E,b,d){var e={};E.exports=e;var f=d(3),s=d(7),o=d(14),g=d(5),t=d(13),c=d(10),a=d(6),n=d(0),r=d(1);(function(){e.create=function(i,l){var h=(i?i.mouse:null)||(l?l.mouse:null);h||(i&&i.render&&i.render.canvas?h=o.create(i.render.canvas):l&&l.element?h=o.create(l.element):(h=o.create(),n.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var y=c.create({label:"Mouse Constraint",pointA:h.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),w={type:"mouseConstraint",mouse:h,element:null,body:null,constraint:y,collisionFilter:{category:1,mask:4294967295,group:0}},R=n.extend(w,l);return g.on(i,"beforeUpdate",function(){var u=a.allBodies(i.world);e.update(R,u),e._triggerEvents(R)}),R},e.update=function(i,l){var h=i.mouse,y=i.constraint,w=i.body;if(h.button===0){if(y.bodyB)s.set(y.bodyB,!1),y.pointA=h.position;else for(var R=0;R<l.length;R++)if(w=l[R],r.contains(w.bounds,h.position)&&t.canCollide(w.collisionFilter,i.collisionFilter))for(var u=w.parts.length>1?1:0;u<w.parts.length;u++){var p=w.parts[u];if(f.contains(p.vertices,h.position)){y.pointA=h.position,y.bodyB=i.body=w,y.pointB={x:h.position.x-w.position.x,y:h.position.y-w.position.y},y.angleB=w.angle,s.set(w,!1),g.trigger(i,"startdrag",{mouse:h,body:w});break}}}else y.bodyB=i.body=null,y.pointB=null,w&&g.trigger(i,"enddrag",{mouse:h,body:w})},e._triggerEvents=function(i){var l=i.mouse,h=l.sourceEvents;h.mousemove&&g.trigger(i,"mousemove",{mouse:l}),h.mousedown&&g.trigger(i,"mousedown",{mouse:l}),h.mouseup&&g.trigger(i,"mouseup",{mouse:l}),o.clearSourceEvents(l)}})()},function(E,b,d){var e={};E.exports=e;var f=d(2),s=d(8),o=d(1),g=d(12),t=d(3);(function(){e.collides=function(c,a){for(var n=[],r=a.length,i=c.bounds,l=s.collides,h=o.overlaps,y=0;y<r;y++){var w=a[y],R=w.parts.length,u=R===1?0:1;if(h(w.bounds,i))for(var p=u;p<R;p++){var m=w.parts[p];if(h(m.bounds,i)){var v=l(m,c);if(v){n.push(v);break}}}}return n},e.ray=function(c,a,n,r){r=r||1e-100;for(var i=f.angle(a,n),l=f.magnitude(f.sub(a,n)),h=(n.x+a.x)*.5,y=(n.y+a.y)*.5,w=g.rectangle(h,y,l,r,{angle:i}),R=e.collides(w,c),u=0;u<R.length;u+=1){var p=R[u];p.body=p.bodyB=p.bodyA}return R},e.region=function(c,a,n){for(var r=[],i=0;i<c.length;i++){var l=c[i],h=o.overlaps(l.bounds,a);(h&&!n||!h&&n)&&r.push(l)}return r},e.point=function(c,a){for(var n=[],r=0;r<c.length;r++){var i=c[r];if(o.contains(i.bounds,a))for(var l=i.parts.length===1?0:1;l<i.parts.length;l++){var h=i.parts[l];if(o.contains(h.bounds,a)&&t.contains(h.vertices,a)){n.push(i);break}}}return n}})()},function(E,b,d){var e={};E.exports=e;var f=d(4),s=d(0),o=d(6),g=d(1),t=d(5),c=d(2),a=d(14);(function(){var n,r;typeof window<"u"&&(n=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(u){window.setTimeout(function(){u(s.now())},1e3/60)},r=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),e._goodFps=30,e._goodDelta=1e3/60,e.create=function(u){var p={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!u.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},m=s.extend(p,u);return m.canvas&&(m.canvas.width=m.options.width||m.canvas.width,m.canvas.height=m.options.height||m.canvas.height),m.mouse=u.mouse,m.engine=u.engine,m.canvas=m.canvas||h(m.options.width,m.options.height),m.context=m.canvas.getContext("2d"),m.textures={},m.bounds=m.bounds||{min:{x:0,y:0},max:{x:m.canvas.width,y:m.canvas.height}},m.controller=e,m.options.showBroadphase=!1,m.options.pixelRatio!==1&&e.setPixelRatio(m,m.options.pixelRatio),s.isElement(m.element)&&m.element.appendChild(m.canvas),m},e.run=function(u){(function p(m){u.frameRequestId=n(p),i(u,m),e.world(u,m),u.context.setTransform(u.options.pixelRatio,0,0,u.options.pixelRatio,0,0),(u.options.showStats||u.options.showDebug)&&e.stats(u,u.context,m),(u.options.showPerformance||u.options.showDebug)&&e.performance(u,u.context,m),u.context.setTransform(1,0,0,1,0,0)})()},e.stop=function(u){r(u.frameRequestId)},e.setPixelRatio=function(u,p){var m=u.options,v=u.canvas;p==="auto"&&(p=y(v)),m.pixelRatio=p,v.setAttribute("data-pixel-ratio",p),v.width=m.width*p,v.height=m.height*p,v.style.width=m.width+"px",v.style.height=m.height+"px"},e.setSize=function(u,p,m){u.options.width=p,u.options.height=m,u.bounds.max.x=u.bounds.min.x+p,u.bounds.max.y=u.bounds.min.y+m,u.options.pixelRatio!==1?e.setPixelRatio(u,u.options.pixelRatio):(u.canvas.width=p,u.canvas.height=m)},e.lookAt=function(u,p,m,v){v=typeof v<"u"?v:!0,p=s.isArray(p)?p:[p],m=m||{x:0,y:0};for(var S={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},x=0;x<p.length;x+=1){var C=p[x],M=C.bounds?C.bounds.min:C.min||C.position||C,P=C.bounds?C.bounds.max:C.max||C.position||C;M&&P&&(M.x<S.min.x&&(S.min.x=M.x),P.x>S.max.x&&(S.max.x=P.x),M.y<S.min.y&&(S.min.y=M.y),P.y>S.max.y&&(S.max.y=P.y))}var T=S.max.x-S.min.x+2*m.x,B=S.max.y-S.min.y+2*m.y,I=u.canvas.height,A=u.canvas.width,L=A/I,D=T/B,W=1,O=1;D>L?O=D/L:W=L/D,u.options.hasBounds=!0,u.bounds.min.x=S.min.x,u.bounds.max.x=S.min.x+T*W,u.bounds.min.y=S.min.y,u.bounds.max.y=S.min.y+B*O,v&&(u.bounds.min.x+=T*.5-T*W*.5,u.bounds.max.x+=T*.5-T*W*.5,u.bounds.min.y+=B*.5-B*O*.5,u.bounds.max.y+=B*.5-B*O*.5),u.bounds.min.x-=m.x,u.bounds.max.x-=m.x,u.bounds.min.y-=m.y,u.bounds.max.y-=m.y,u.mouse&&(a.setScale(u.mouse,{x:(u.bounds.max.x-u.bounds.min.x)/u.canvas.width,y:(u.bounds.max.y-u.bounds.min.y)/u.canvas.height}),a.setOffset(u.mouse,u.bounds.min))},e.startViewTransform=function(u){var p=u.bounds.max.x-u.bounds.min.x,m=u.bounds.max.y-u.bounds.min.y,v=p/u.options.width,S=m/u.options.height;u.context.setTransform(u.options.pixelRatio/v,0,0,u.options.pixelRatio/S,0,0),u.context.translate(-u.bounds.min.x,-u.bounds.min.y)},e.endViewTransform=function(u){u.context.setTransform(u.options.pixelRatio,0,0,u.options.pixelRatio,0,0)},e.world=function(u,p){var m=s.now(),v=u.engine,S=v.world,x=u.canvas,C=u.context,M=u.options,P=u.timing,T=o.allBodies(S),B=o.allConstraints(S),I=M.wireframes?M.wireframeBackground:M.background,A=[],L=[],D,W={timestamp:v.timing.timestamp};if(t.trigger(u,"beforeRender",W),u.currentBackground!==I&&R(u,I),C.globalCompositeOperation="source-in",C.fillStyle="transparent",C.fillRect(0,0,x.width,x.height),C.globalCompositeOperation="source-over",M.hasBounds){for(D=0;D<T.length;D++){var O=T[D];g.overlaps(O.bounds,u.bounds)&&A.push(O)}for(D=0;D<B.length;D++){var V=B[D],k=V.bodyA,H=V.bodyB,$=V.pointA,F=V.pointB;k&&($=c.add(k.position,V.pointA)),H&&(F=c.add(H.position,V.pointB)),!(!$||!F)&&(g.contains(u.bounds,$)||g.contains(u.bounds,F))&&L.push(V)}e.startViewTransform(u),u.mouse&&(a.setScale(u.mouse,{x:(u.bounds.max.x-u.bounds.min.x)/u.options.width,y:(u.bounds.max.y-u.bounds.min.y)/u.options.height}),a.setOffset(u.mouse,u.bounds.min))}else L=B,A=T,u.options.pixelRatio!==1&&u.context.setTransform(u.options.pixelRatio,0,0,u.options.pixelRatio,0,0);!M.wireframes||v.enableSleeping&&M.showSleeping?e.bodies(u,A,C):(M.showConvexHulls&&e.bodyConvexHulls(u,A,C),e.bodyWireframes(u,A,C)),M.showBounds&&e.bodyBounds(u,A,C),(M.showAxes||M.showAngleIndicator)&&e.bodyAxes(u,A,C),M.showPositions&&e.bodyPositions(u,A,C),M.showVelocity&&e.bodyVelocity(u,A,C),M.showIds&&e.bodyIds(u,A,C),M.showSeparations&&e.separations(u,v.pairs.list,C),M.showCollisions&&e.collisions(u,v.pairs.list,C),M.showVertexNumbers&&e.vertexNumbers(u,A,C),M.showMousePosition&&e.mousePosition(u,u.mouse,C),e.constraints(L,C),M.hasBounds&&e.endViewTransform(u),t.trigger(u,"afterRender",W),P.lastElapsed=s.now()-m},e.stats=function(u,p,m){for(var v=u.engine,S=v.world,x=o.allBodies(S),C=0,M=55,P=44,T=0,B=0,I=0;I<x.length;I+=1)C+=x[I].parts.length;var A={Part:C,Body:x.length,Cons:o.allConstraints(S).length,Comp:o.allComposites(S).length,Pair:v.pairs.list.length};p.fillStyle="#0e0f19",p.fillRect(T,B,M*5.5,P),p.font="12px Arial",p.textBaseline="top",p.textAlign="right";for(var L in A){var D=A[L];p.fillStyle="#aaa",p.fillText(L,T+M,B+8),p.fillStyle="#eee",p.fillText(D,T+M,B+26),T+=M}},e.performance=function(u,p){var m=u.engine,v=u.timing,S=v.deltaHistory,x=v.elapsedHistory,C=v.timestampElapsedHistory,M=v.engineDeltaHistory,P=v.engineUpdatesHistory,T=v.engineElapsedHistory,B=m.timing.lastUpdatesPerFrame,I=m.timing.lastDelta,A=l(S),L=l(x),D=l(M),W=l(P),O=l(T),V=l(C),k=V/A||0,H=Math.round(A/I),$=1e3/A||0,F=4,N=12,z=60,Y=34,Q=10,Z=69;p.fillStyle="#0e0f19",p.fillRect(0,50,N*5+z*6+22,Y),e.status(p,Q,Z,z,F,S.length,Math.round($)+" fps",$/e._goodFps,function(G){return S[G]/A-1}),e.status(p,Q+N+z,Z,z,F,M.length,I.toFixed(2)+" dt",e._goodDelta/I,function(G){return M[G]/D-1}),e.status(p,Q+(N+z)*2,Z,z,F,P.length,B+" upf",Math.pow(s.clamp(W/H||1,0,1),4),function(G){return P[G]/W-1}),e.status(p,Q+(N+z)*3,Z,z,F,T.length,O.toFixed(2)+" ut",1-B*O/e._goodFps,function(G){return T[G]/O-1}),e.status(p,Q+(N+z)*4,Z,z,F,x.length,L.toFixed(2)+" rt",1-L/e._goodFps,function(G){return x[G]/L-1}),e.status(p,Q+(N+z)*5,Z,z,F,C.length,k.toFixed(2)+" x",k*k*k,function(G){return(C[G]/S[G]/k||0)-1})},e.status=function(u,p,m,v,S,x,C,M,P){u.strokeStyle="#888",u.fillStyle="#444",u.lineWidth=1,u.fillRect(p,m+7,v,1),u.beginPath(),u.moveTo(p,m+7-S*s.clamp(.4*P(0),-2,2));for(var T=0;T<v;T+=1)u.lineTo(p+T,m+7-(T<x?S*s.clamp(.4*P(T),-2,2):0));u.stroke(),u.fillStyle="hsl("+s.clamp(25+95*M,0,120)+",100%,60%)",u.fillRect(p,m-7,4,4),u.font="12px Arial",u.textBaseline="middle",u.textAlign="right",u.fillStyle="#eee",u.fillText(C,p+v,m-5)},e.constraints=function(u,p){for(var m=p,v=0;v<u.length;v++){var S=u[v];if(!(!S.render.visible||!S.pointA||!S.pointB)){var x=S.bodyA,C=S.bodyB,M,P;if(x?M=c.add(x.position,S.pointA):M=S.pointA,S.render.type==="pin")m.beginPath(),m.arc(M.x,M.y,3,0,2*Math.PI),m.closePath();else{if(C?P=c.add(C.position,S.pointB):P=S.pointB,m.beginPath(),m.moveTo(M.x,M.y),S.render.type==="spring")for(var T=c.sub(P,M),B=c.perp(c.normalise(T)),I=Math.ceil(s.clamp(S.length/5,12,20)),A,L=1;L<I;L+=1)A=L%2===0?1:-1,m.lineTo(M.x+T.x*(L/I)+B.x*A*4,M.y+T.y*(L/I)+B.y*A*4);m.lineTo(P.x,P.y)}S.render.lineWidth&&(m.lineWidth=S.render.lineWidth,m.strokeStyle=S.render.strokeStyle,m.stroke()),S.render.anchors&&(m.fillStyle=S.render.strokeStyle,m.beginPath(),m.arc(M.x,M.y,3,0,2*Math.PI),m.arc(P.x,P.y,3,0,2*Math.PI),m.closePath(),m.fill())}}},e.bodies=function(u,p,m){var v=m;u.engine;var S=u.options,x=S.showInternalEdges||!S.wireframes,C,M,P,T;for(P=0;P<p.length;P++)if(C=p[P],!!C.render.visible){for(T=C.parts.length>1?1:0;T<C.parts.length;T++)if(M=C.parts[T],!!M.render.visible){if(S.showSleeping&&C.isSleeping?v.globalAlpha=.5*M.render.opacity:M.render.opacity!==1&&(v.globalAlpha=M.render.opacity),M.render.sprite&&M.render.sprite.texture&&!S.wireframes){var B=M.render.sprite,I=w(u,B.texture);v.translate(M.position.x,M.position.y),v.rotate(M.angle),v.drawImage(I,I.width*-B.xOffset*B.xScale,I.height*-B.yOffset*B.yScale,I.width*B.xScale,I.height*B.yScale),v.rotate(-M.angle),v.translate(-M.position.x,-M.position.y)}else{if(M.circleRadius)v.beginPath(),v.arc(M.position.x,M.position.y,M.circleRadius,0,2*Math.PI);else{v.beginPath(),v.moveTo(M.vertices[0].x,M.vertices[0].y);for(var A=1;A<M.vertices.length;A++)!M.vertices[A-1].isInternal||x?v.lineTo(M.vertices[A].x,M.vertices[A].y):v.moveTo(M.vertices[A].x,M.vertices[A].y),M.vertices[A].isInternal&&!x&&v.moveTo(M.vertices[(A+1)%M.vertices.length].x,M.vertices[(A+1)%M.vertices.length].y);v.lineTo(M.vertices[0].x,M.vertices[0].y),v.closePath()}S.wireframes?(v.lineWidth=1,v.strokeStyle=u.options.wireframeStrokeStyle,v.stroke()):(v.fillStyle=M.render.fillStyle,M.render.lineWidth&&(v.lineWidth=M.render.lineWidth,v.strokeStyle=M.render.strokeStyle,v.stroke()),v.fill())}v.globalAlpha=1}}},e.bodyWireframes=function(u,p,m){var v=m,S=u.options.showInternalEdges,x,C,M,P,T;for(v.beginPath(),M=0;M<p.length;M++)if(x=p[M],!!x.render.visible)for(T=x.parts.length>1?1:0;T<x.parts.length;T++){for(C=x.parts[T],v.moveTo(C.vertices[0].x,C.vertices[0].y),P=1;P<C.vertices.length;P++)!C.vertices[P-1].isInternal||S?v.lineTo(C.vertices[P].x,C.vertices[P].y):v.moveTo(C.vertices[P].x,C.vertices[P].y),C.vertices[P].isInternal&&!S&&v.moveTo(C.vertices[(P+1)%C.vertices.length].x,C.vertices[(P+1)%C.vertices.length].y);v.lineTo(C.vertices[0].x,C.vertices[0].y)}v.lineWidth=1,v.strokeStyle=u.options.wireframeStrokeStyle,v.stroke()},e.bodyConvexHulls=function(u,p,m){var v=m,S,x,C;for(v.beginPath(),x=0;x<p.length;x++)if(S=p[x],!(!S.render.visible||S.parts.length===1)){for(v.moveTo(S.vertices[0].x,S.vertices[0].y),C=1;C<S.vertices.length;C++)v.lineTo(S.vertices[C].x,S.vertices[C].y);v.lineTo(S.vertices[0].x,S.vertices[0].y)}v.lineWidth=1,v.strokeStyle="rgba(255,255,255,0.2)",v.stroke()},e.vertexNumbers=function(u,p,m){var v=m,S,x,C;for(S=0;S<p.length;S++){var M=p[S].parts;for(C=M.length>1?1:0;C<M.length;C++){var P=M[C];for(x=0;x<P.vertices.length;x++)v.fillStyle="rgba(255,255,255,0.2)",v.fillText(S+"_"+x,P.position.x+(P.vertices[x].x-P.position.x)*.8,P.position.y+(P.vertices[x].y-P.position.y)*.8)}}},e.mousePosition=function(u,p,m){var v=m;v.fillStyle="rgba(255,255,255,0.8)",v.fillText(p.position.x+"  "+p.position.y,p.position.x+5,p.position.y-5)},e.bodyBounds=function(u,p,m){var v=m;u.engine;var S=u.options;v.beginPath();for(var x=0;x<p.length;x++){var C=p[x];if(C.render.visible)for(var M=p[x].parts,P=M.length>1?1:0;P<M.length;P++){var T=M[P];v.rect(T.bounds.min.x,T.bounds.min.y,T.bounds.max.x-T.bounds.min.x,T.bounds.max.y-T.bounds.min.y)}}S.wireframes?v.strokeStyle="rgba(255,255,255,0.08)":v.strokeStyle="rgba(0,0,0,0.1)",v.lineWidth=1,v.stroke()},e.bodyAxes=function(u,p,m){var v=m;u.engine;var S=u.options,x,C,M,P;for(v.beginPath(),C=0;C<p.length;C++){var T=p[C],B=T.parts;if(T.render.visible)if(S.showAxes)for(M=B.length>1?1:0;M<B.length;M++)for(x=B[M],P=0;P<x.axes.length;P++){var I=x.axes[P];v.moveTo(x.position.x,x.position.y),v.lineTo(x.position.x+I.x*20,x.position.y+I.y*20)}else for(M=B.length>1?1:0;M<B.length;M++)for(x=B[M],P=0;P<x.axes.length;P++)v.moveTo(x.position.x,x.position.y),v.lineTo((x.vertices[0].x+x.vertices[x.vertices.length-1].x)/2,(x.vertices[0].y+x.vertices[x.vertices.length-1].y)/2)}S.wireframes?(v.strokeStyle="indianred",v.lineWidth=1):(v.strokeStyle="rgba(255, 255, 255, 0.4)",v.globalCompositeOperation="overlay",v.lineWidth=2),v.stroke(),v.globalCompositeOperation="source-over"},e.bodyPositions=function(u,p,m){var v=m;u.engine;var S=u.options,x,C,M,P;for(v.beginPath(),M=0;M<p.length;M++)if(x=p[M],!!x.render.visible)for(P=0;P<x.parts.length;P++)C=x.parts[P],v.arc(C.position.x,C.position.y,3,0,2*Math.PI,!1),v.closePath();for(S.wireframes?v.fillStyle="indianred":v.fillStyle="rgba(0,0,0,0.5)",v.fill(),v.beginPath(),M=0;M<p.length;M++)x=p[M],x.render.visible&&(v.arc(x.positionPrev.x,x.positionPrev.y,2,0,2*Math.PI,!1),v.closePath());v.fillStyle="rgba(255,165,0,0.8)",v.fill()},e.bodyVelocity=function(u,p,m){var v=m;v.beginPath();for(var S=0;S<p.length;S++){var x=p[S];if(x.render.visible){var C=f.getVelocity(x);v.moveTo(x.position.x,x.position.y),v.lineTo(x.position.x+C.x,x.position.y+C.y)}}v.lineWidth=3,v.strokeStyle="cornflowerblue",v.stroke()},e.bodyIds=function(u,p,m){var v=m,S,x;for(S=0;S<p.length;S++)if(p[S].render.visible){var C=p[S].parts;for(x=C.length>1?1:0;x<C.length;x++){var M=C[x];v.font="12px Arial",v.fillStyle="rgba(255,255,255,0.5)",v.fillText(M.id,M.position.x+10,M.position.y-10)}}},e.collisions=function(u,p,m){var v=m,S=u.options,x,C,M,P;for(v.beginPath(),M=0;M<p.length;M++)if(x=p[M],!!x.isActive)for(C=x.collision,P=0;P<x.contactCount;P++){var T=x.contacts[P],B=T.vertex;v.rect(B.x-1.5,B.y-1.5,3.5,3.5)}for(S.wireframes?v.fillStyle="rgba(255,255,255,0.7)":v.fillStyle="orange",v.fill(),v.beginPath(),M=0;M<p.length;M++)if(x=p[M],!!x.isActive&&(C=x.collision,x.contactCount>0)){var I=x.contacts[0].vertex.x,A=x.contacts[0].vertex.y;x.contactCount===2&&(I=(x.contacts[0].vertex.x+x.contacts[1].vertex.x)/2,A=(x.contacts[0].vertex.y+x.contacts[1].vertex.y)/2),C.bodyB===C.supports[0].body||C.bodyA.isStatic===!0?v.moveTo(I-C.normal.x*8,A-C.normal.y*8):v.moveTo(I+C.normal.x*8,A+C.normal.y*8),v.lineTo(I,A)}S.wireframes?v.strokeStyle="rgba(255,165,0,0.7)":v.strokeStyle="orange",v.lineWidth=1,v.stroke()},e.separations=function(u,p,m){var v=m,S=u.options,x,C,M,P,T;for(v.beginPath(),T=0;T<p.length;T++)if(x=p[T],!!x.isActive){C=x.collision,M=C.bodyA,P=C.bodyB;var B=1;!P.isStatic&&!M.isStatic&&(B=.5),P.isStatic&&(B=0),v.moveTo(P.position.x,P.position.y),v.lineTo(P.position.x-C.penetration.x*B,P.position.y-C.penetration.y*B),B=1,!P.isStatic&&!M.isStatic&&(B=.5),M.isStatic&&(B=0),v.moveTo(M.position.x,M.position.y),v.lineTo(M.position.x+C.penetration.x*B,M.position.y+C.penetration.y*B)}S.wireframes?v.strokeStyle="rgba(255,165,0,0.5)":v.strokeStyle="orange",v.stroke()},e.inspector=function(u,p){u.engine;var m=u.selected,v=u.render,S=v.options,x;if(S.hasBounds){var C=v.bounds.max.x-v.bounds.min.x,M=v.bounds.max.y-v.bounds.min.y,P=C/v.options.width,T=M/v.options.height;p.scale(1/P,1/T),p.translate(-v.bounds.min.x,-v.bounds.min.y)}for(var B=0;B<m.length;B++){var I=m[B].data;switch(p.translate(.5,.5),p.lineWidth=1,p.strokeStyle="rgba(255,165,0,0.9)",p.setLineDash([1,2]),I.type){case"body":x=I.bounds,p.beginPath(),p.rect(Math.floor(x.min.x-3),Math.floor(x.min.y-3),Math.floor(x.max.x-x.min.x+6),Math.floor(x.max.y-x.min.y+6)),p.closePath(),p.stroke();break;case"constraint":var A=I.pointA;I.bodyA&&(A=I.pointB),p.beginPath(),p.arc(A.x,A.y,10,0,2*Math.PI),p.closePath(),p.stroke();break}p.setLineDash([]),p.translate(-.5,-.5)}u.selectStart!==null&&(p.translate(.5,.5),p.lineWidth=1,p.strokeStyle="rgba(255,165,0,0.6)",p.fillStyle="rgba(255,165,0,0.1)",x=u.selectBounds,p.beginPath(),p.rect(Math.floor(x.min.x),Math.floor(x.min.y),Math.floor(x.max.x-x.min.x),Math.floor(x.max.y-x.min.y)),p.closePath(),p.stroke(),p.fill(),p.translate(-.5,-.5)),S.hasBounds&&p.setTransform(1,0,0,1,0,0)};var i=function(u,p){var m=u.engine,v=u.timing,S=v.historySize,x=m.timing.timestamp;v.delta=p-v.lastTime||e._goodDelta,v.lastTime=p,v.timestampElapsed=x-v.lastTimestamp||0,v.lastTimestamp=x,v.deltaHistory.unshift(v.delta),v.deltaHistory.length=Math.min(v.deltaHistory.length,S),v.engineDeltaHistory.unshift(m.timing.lastDelta),v.engineDeltaHistory.length=Math.min(v.engineDeltaHistory.length,S),v.timestampElapsedHistory.unshift(v.timestampElapsed),v.timestampElapsedHistory.length=Math.min(v.timestampElapsedHistory.length,S),v.engineUpdatesHistory.unshift(m.timing.lastUpdatesPerFrame),v.engineUpdatesHistory.length=Math.min(v.engineUpdatesHistory.length,S),v.engineElapsedHistory.unshift(m.timing.lastElapsed),v.engineElapsedHistory.length=Math.min(v.engineElapsedHistory.length,S),v.elapsedHistory.unshift(v.lastElapsed),v.elapsedHistory.length=Math.min(v.elapsedHistory.length,S)},l=function(u){for(var p=0,m=0;m<u.length;m+=1)p+=u[m];return p/u.length||0},h=function(u,p){var m=document.createElement("canvas");return m.width=u,m.height=p,m.oncontextmenu=function(){return!1},m.onselectstart=function(){return!1},m},y=function(u){var p=u.getContext("2d"),m=window.devicePixelRatio||1,v=p.webkitBackingStorePixelRatio||p.mozBackingStorePixelRatio||p.msBackingStorePixelRatio||p.oBackingStorePixelRatio||p.backingStorePixelRatio||1;return m/v},w=function(u,p){var m=u.textures[p];return m||(m=u.textures[p]=new Image,m.src=p,m)},R=function(u,p){var m=p;/(jpg|gif|png)$/.test(p)&&(m="url("+p+")"),u.canvas.style.background=m,u.canvas.style.backgroundSize="contain",u.currentBackground=p}})()},function(E,b,d){var e={};E.exports=e;var f=d(5),s=d(17),o=d(0);(function(){e._maxFrameDelta=1e3/15,e._frameDeltaFallback=1e3/60,e._timeBufferMargin=1.5,e._elapsedNextEstimate=1,e._smoothingLowerBound=.1,e._smoothingUpperBound=.9,e.create=function(t){var c={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},a=o.extend(c,t);return a.fps=0,a},e.run=function(t,c){return t.timeBuffer=e._frameDeltaFallback,function a(n){t.frameRequestId=e._onNextFrame(t,a),n&&t.enabled&&e.tick(t,c,n)}(),t},e.tick=function(t,c,a){var n=o.now(),r=t.delta,i=0,l=a-t.timeLastTick;if((!l||!t.timeLastTick||l>Math.max(e._maxFrameDelta,t.maxFrameTime))&&(l=t.frameDelta||e._frameDeltaFallback),t.frameDeltaSmoothing){t.frameDeltaHistory.push(l),t.frameDeltaHistory=t.frameDeltaHistory.slice(-t.frameDeltaHistorySize);var h=t.frameDeltaHistory.slice(0).sort(),y=t.frameDeltaHistory.slice(h.length*e._smoothingLowerBound,h.length*e._smoothingUpperBound),w=g(y);l=w||l}t.frameDeltaSnapping&&(l=1e3/Math.round(1e3/l)),t.frameDelta=l,t.timeLastTick=a,t.timeBuffer+=t.frameDelta,t.timeBuffer=o.clamp(t.timeBuffer,0,t.frameDelta+r*e._timeBufferMargin),t.lastUpdatesDeferred=0;var R=t.maxUpdates||Math.ceil(t.maxFrameTime/r),u={timestamp:c.timing.timestamp};f.trigger(t,"beforeTick",u),f.trigger(t,"tick",u);for(var p=o.now();r>0&&t.timeBuffer>=r*e._timeBufferMargin;){f.trigger(t,"beforeUpdate",u),s.update(c,r),f.trigger(t,"afterUpdate",u),t.timeBuffer-=r,i+=1;var m=o.now()-n,v=o.now()-p,S=m+e._elapsedNextEstimate*v/i;if(i>=R||S>t.maxFrameTime){t.lastUpdatesDeferred=Math.round(Math.max(0,t.timeBuffer/r-e._timeBufferMargin));break}}c.timing.lastUpdatesPerFrame=i,f.trigger(t,"afterTick",u),t.frameDeltaHistory.length>=100&&(t.lastUpdatesDeferred&&Math.round(t.frameDelta/r)>R?o.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):t.lastUpdatesDeferred&&o.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof t.isFixed<"u"&&o.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(t.deltaMin||t.deltaMax)&&o.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),t.fps!==0&&o.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},e.stop=function(t){e._cancelNextFrame(t)},e._onNextFrame=function(t,c){if(typeof window<"u"&&window.requestAnimationFrame)t.frameRequestId=window.requestAnimationFrame(c);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return t.frameRequestId},e._cancelNextFrame=function(t){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(t.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var g=function(t){for(var c=0,a=t.length,n=0;n<a;n+=1)c+=t[n];return c/a||0}})()},function(E,b,d){var e={};E.exports=e;var f=d(8),s=d(0),o=s.deprecated;(function(){e.collides=function(g,t){return f.collides(g,t)},o(e,"collides","SAT.collides ➤ replaced by Collision.collides")})()},function(E,b,d){var e={};E.exports=e,d(1);var f=d(0);(function(){e.pathToVertices=function(s,o){typeof window<"u"&&!("SVGPathSeg"in window)&&f.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var g,t,c,a,n,r,i,l,h,y,w=[],R,u,p=0,m=0,v=0;o=o||15;var S=function(C,M,P){var T=P%2===1&&P>1;if(!h||C!=h.x||M!=h.y){h&&T?(R=h.x,u=h.y):(R=0,u=0);var B={x:R+C,y:u+M};(T||!h)&&(h=B),w.push(B),m=R+C,v=u+M}},x=function(C){var M=C.pathSegTypeAsLetter.toUpperCase();if(M!=="Z"){switch(M){case"M":case"L":case"T":case"C":case"S":case"Q":m=C.x,v=C.y;break;case"H":m=C.x;break;case"V":v=C.y;break}S(m,v,C.pathSegType)}};for(e._svgPathToAbsolute(s),c=s.getTotalLength(),r=[],g=0;g<s.pathSegList.numberOfItems;g+=1)r.push(s.pathSegList.getItem(g));for(i=r.concat();p<c;){if(y=s.getPathSegAtLength(p),n=r[y],n!=l){for(;i.length&&i[0]!=n;)x(i.shift());l=n}switch(n.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":a=s.getPointAtLength(p),S(a.x,a.y,0);break}p+=o}for(g=0,t=i.length;g<t;++g)x(i[g]);return w},e._svgPathToAbsolute=function(s){for(var o,g,t,c,a,n,r=s.pathSegList,i=0,l=0,h=r.numberOfItems,y=0;y<h;++y){var w=r.getItem(y),R=w.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(R))"x"in w&&(i=w.x),"y"in w&&(l=w.y);else switch("x1"in w&&(t=i+w.x1),"x2"in w&&(a=i+w.x2),"y1"in w&&(c=l+w.y1),"y2"in w&&(n=l+w.y2),"x"in w&&(i+=w.x),"y"in w&&(l+=w.y),R){case"m":r.replaceItem(s.createSVGPathSegMovetoAbs(i,l),y);break;case"l":r.replaceItem(s.createSVGPathSegLinetoAbs(i,l),y);break;case"h":r.replaceItem(s.createSVGPathSegLinetoHorizontalAbs(i),y);break;case"v":r.replaceItem(s.createSVGPathSegLinetoVerticalAbs(l),y);break;case"c":r.replaceItem(s.createSVGPathSegCurvetoCubicAbs(i,l,t,c,a,n),y);break;case"s":r.replaceItem(s.createSVGPathSegCurvetoCubicSmoothAbs(i,l,a,n),y);break;case"q":r.replaceItem(s.createSVGPathSegCurvetoQuadraticAbs(i,l,t,c),y);break;case"t":r.replaceItem(s.createSVGPathSegCurvetoQuadraticSmoothAbs(i,l),y);break;case"a":r.replaceItem(s.createSVGPathSegArcAbs(i,l,w.r1,w.r2,w.angle,w.largeArcFlag,w.sweepFlag),y);break;case"z":case"Z":i=o,l=g;break}(R=="M"||R=="m")&&(o=i,g=l)}}})()},function(E,b,d){var e={};E.exports=e;var f=d(6);d(0),function(){e.create=f.create,e.add=f.add,e.remove=f.remove,e.clear=f.clear,e.addComposite=f.addComposite,e.addBody=f.addBody,e.addConstraint=f.addConstraint}()}])})})(ve);var De=ve.exports;const ne=Se(De),ke=({className:X="",text:J="",highlightWords:E=[],highlightClass:b="highlighted",trigger:d="auto",backgroundColor:e="transparent",wireframes:f=!1,gravity:s=1,mouseConstraintStiffness:o=.2,fontSize:g="1rem"})=>{const t=j.useRef(null),c=j.useRef(null),a=j.useRef(null),[n,r]=j.useState(!1);j.useEffect(()=>{if(!c.current)return;const h=J.split(" ").map(y=>`<span class="word ${E.some(R=>y.startsWith(R))?b:""}">${y}</span>`).join(" ");c.current.innerHTML=h},[J,E,b]),j.useEffect(()=>{if(d==="auto"){r(!0);return}if(d==="scroll"&&t.current){const l=new IntersectionObserver(([h])=>{h.isIntersecting&&(r(!0),l.disconnect())},{threshold:.1});return l.observe(t.current),()=>l.disconnect()}},[d]),j.useEffect(()=>{if(!n)return;const{Engine:l,Render:h,World:y,Bodies:w,Runner:R,Mouse:u,MouseConstraint:p}=ne,m=t.current.getBoundingClientRect(),v=m.width,S=m.height;if(v<=0||S<=0)return;const x=l.create();x.world.gravity.y=s;const C=h.create({element:a.current,engine:x,options:{width:v,height:S,background:e,wireframes:f}}),M={isStatic:!0,render:{fillStyle:"transparent"}},P=w.rectangle(v/2,S+25,v,50,M),T=w.rectangle(-25,S/2,50,S,M),B=w.rectangle(v+25,S/2,50,S,M),I=w.rectangle(v/2,-25,v,50,M),L=[...c.current.querySelectorAll(".word")].map(k=>{const H=k.getBoundingClientRect(),$=H.left-m.left+H.width/2,F=H.top-m.top+H.height/2,N=w.rectangle($,F,H.width,H.height,{render:{fillStyle:"transparent"},restitution:.8,frictionAir:.01,friction:.2});return ne.Body.setVelocity(N,{x:(Math.random()-.5)*5,y:0}),ne.Body.setAngularVelocity(N,(Math.random()-.5)*.05),{elem:k,body:N}});L.forEach(({elem:k,body:H})=>{k.style.position="absolute",k.style.left=`${H.position.x-H.bounds.max.x+H.bounds.min.x/2}px`,k.style.top=`${H.position.y-H.bounds.max.y+H.bounds.min.y/2}px`,k.style.transform="none"});const D=u.create(t.current),W=p.create(x,{mouse:D,constraint:{stiffness:o,render:{visible:!1}}});C.mouse=D,y.add(x.world,[P,T,B,I,W,...L.map(k=>k.body)]);const O=R.create();R.run(O,x),h.run(C);const V=()=>{L.forEach(({body:k,elem:H})=>{const{x:$,y:F}=k.position;H.style.left=`${$}px`,H.style.top=`${F}px`,H.style.transform=`translate(-50%, -50%) rotate(${k.angle}rad)`}),ne.Engine.update(x),requestAnimationFrame(V)};return V(),()=>{h.stop(C),R.stop(O),C.canvas&&a.current&&a.current.removeChild(C.canvas),y.clear(x.world),l.clear(x)}},[n,s,f,e,o]);const i=()=>{!n&&(d==="click"||d==="hover")&&r(!0)};return U.jsxs("div",{ref:t,className:`falling-text-container ${X}`,onClick:d==="click"?i:void 0,onMouseEnter:d==="hover"?i:void 0,style:{position:"relative",overflow:"hidden"},children:[U.jsx("div",{ref:c,className:"falling-text-target",style:{fontSize:g,lineHeight:1.4}}),U.jsx("div",{ref:a,className:"falling-text-canvas"})]})},He=`import { useRef, useState, useEffect } from 'react';
import Matter from 'matter-js';
import './FallingText.css';

const FallingText = ({
  className = '',
  text = '',
  highlightWords = [],
  highlightClass = 'highlighted',
  trigger = 'auto',
  backgroundColor = 'transparent',
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  fontSize = '1rem'
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const canvasContainerRef = useRef(null);

  const [effectStarted, setEffectStarted] = useState(false);

  useEffect(() => {
    if (!textRef.current) return;
    const words = text.split(' ');
    const newHTML = words
      .map(word => {
        const isHighlighted = highlightWords.some(hw => word.startsWith(hw));
        return \`<span class="word \${isHighlighted ? highlightClass : ''}">\${word}</span>\`;
      })
      .join(' ');
    textRef.current.innerHTML = newHTML;
  }, [text, highlightWords, highlightClass]);

  useEffect(() => {
    if (trigger === 'auto') {
      setEffectStarted(true);
      return;
    }
    if (trigger === 'scroll' && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  useEffect(() => {
    if (!effectStarted) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;

    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;

    if (width <= 0 || height <= 0) {
      return;
    }

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasContainerRef.current,
      engine,
      options: {
        width,
        height,
        background: backgroundColor,
        wireframes
      }
    });

    const boundaryOptions = {
      isStatic: true,
      render: { fillStyle: 'transparent' }
    };
    const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
    const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);

    const wordSpans = textRef.current.querySelectorAll('.word');
    const wordBodies = [...wordSpans].map(elem => {
      const rect = elem.getBoundingClientRect();

      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        render: { fillStyle: 'transparent' },
        restitution: 0.8,
        frictionAir: 0.01,
        friction: 0.2
      });

      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 5,
        y: 0
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);
      return { elem, body };
    });

    wordBodies.forEach(({ elem, body }) => {
      elem.style.position = 'absolute';
      elem.style.left = \`\${body.position.x - body.bounds.max.x + body.bounds.min.x / 2}px\`;
      elem.style.top = \`\${body.position.y - body.bounds.max.y + body.bounds.min.y / 2}px\`;
      elem.style.transform = 'none';
    });

    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false }
      }
    });
    render.mouse = mouse;

    World.add(engine.world, [floor, leftWall, rightWall, ceiling, mouseConstraint, ...wordBodies.map(wb => wb.body)]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    const updateLoop = () => {
      wordBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position;
        elem.style.left = \`\${x}px\`;
        elem.style.top = \`\${y}px\`;
        elem.style.transform = \`translate(-50%, -50%) rotate(\${body.angle}rad)\`;
      });
      Matter.Engine.update(engine);
      requestAnimationFrame(updateLoop);
    };
    updateLoop();

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && canvasContainerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        canvasContainerRef.current.removeChild(render.canvas);
      }
      World.clear(engine.world);
      Engine.clear(engine);
    };
  }, [effectStarted, gravity, wireframes, backgroundColor, mouseConstraintStiffness]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === 'click' || trigger === 'hover')) {
      setEffectStarted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className={\`falling-text-container \${className}\`}
      onClick={trigger === 'click' ? handleTrigger : undefined}
      onMouseEnter={trigger === 'hover' ? handleTrigger : undefined}
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        ref={textRef}
        className="falling-text-target"
        style={{
          fontSize: fontSize,
          lineHeight: 1.4
        }}
      />
      <div ref={canvasContainerRef} className="falling-text-canvas" />
    </div>
  );
};

export default FallingText;
`,We=`.falling-text-container {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-align: center;
  padding-top: 2em;
}

.falling-text-target {
  display: inline-block;
}

.word {
  display: inline-block;
  margin: 0 2px;
  user-select: none;
}

.highlighted {
  color: cyan;
  font-weight: bold;
}

.falling-text-canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
`,Oe=`import { useRef, useState, useEffect } from 'react';
import Matter from 'matter-js';

const FallingText = ({
  text = '',
  highlightWords = [],
  trigger = 'auto',
  backgroundColor = 'transparent',
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  fontSize = '1rem'
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const canvasContainerRef = useRef(null);

  const [effectStarted, setEffectStarted] = useState(false);

  useEffect(() => {
    if (!textRef.current) return;
    const words = text.split(' ');

    const newHTML = words
      .map(word => {
        const isHighlighted = highlightWords.some(hw => word.startsWith(hw));
        return \`<span
          class="inline-block mx-[2px] select-none \${isHighlighted ? 'text-cyan-500 font-bold' : ''}"
        >
          \${word}
        </span>\`;
      })
      .join(' ');

    textRef.current.innerHTML = newHTML;
  }, [text, highlightWords]);

  useEffect(() => {
    if (trigger === 'auto') {
      setEffectStarted(true);
      return;
    }
    if (trigger === 'scroll' && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  useEffect(() => {
    if (!effectStarted) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;

    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;

    if (width <= 0 || height <= 0) return;

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasContainerRef.current,
      engine,
      options: {
        width,
        height,
        background: backgroundColor,
        wireframes
      }
    });

    const boundaryOptions = {
      isStatic: true,
      render: { fillStyle: 'transparent' }
    };
    const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
    const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);

    const wordSpans = textRef.current.querySelectorAll('span');
    const wordBodies = [...wordSpans].map(elem => {
      const rect = elem.getBoundingClientRect();

      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        render: { fillStyle: 'transparent' },
        restitution: 0.8,
        frictionAir: 0.01,
        friction: 0.2
      });
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 5,
        y: 0
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);

      return { elem, body };
    });

    wordBodies.forEach(({ elem, body }) => {
      elem.style.position = 'absolute';
      elem.style.left = \`\${body.position.x - body.bounds.max.x + body.bounds.min.x / 2}px\`;
      elem.style.top = \`\${body.position.y - body.bounds.max.y + body.bounds.min.y / 2}px\`;
      elem.style.transform = 'none';
    });

    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false }
      }
    });
    render.mouse = mouse;

    World.add(engine.world, [floor, leftWall, rightWall, ceiling, mouseConstraint, ...wordBodies.map(wb => wb.body)]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    const updateLoop = () => {
      wordBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position;
        elem.style.left = \`\${x}px\`;
        elem.style.top = \`\${y}px\`;
        elem.style.transform = \`translate(-50%, -50%) rotate(\${body.angle}rad)\`;
      });
      Matter.Engine.update(engine);
      requestAnimationFrame(updateLoop);
    };
    updateLoop();

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && canvasContainerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        canvasContainerRef.current.removeChild(render.canvas);
      }
      World.clear(engine.world);
      Engine.clear(engine);
    };
  }, [effectStarted, gravity, wireframes, backgroundColor, mouseConstraintStiffness]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === 'click' || trigger === 'hover')) {
      setEffectStarted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative z-[1] w-full h-full cursor-pointer text-center pt-8 overflow-hidden"
      onClick={trigger === 'click' ? handleTrigger : undefined}
      onMouseEnter={trigger === 'hover' ? handleTrigger : undefined}
    >
      <div
        ref={textRef}
        className="inline-block"
        style={{
          fontSize,
          lineHeight: 1.4
        }}
      />

      <div className="absolute top-0 left-0 z-0" ref={canvasContainerRef} />
    </div>
  );
};

export default FallingText;
`,Ve=`import { useRef, useState, useEffect } from 'react';
import Matter from 'matter-js';
import './FallingText.css';

interface FallingTextProps {
  text?: string;
  highlightWords?: string[];
  highlightClass?: string;
  trigger?: 'auto' | 'scroll' | 'click' | 'hover';
  backgroundColor?: string;
  wireframes?: boolean;
  gravity?: number;
  mouseConstraintStiffness?: number;
  fontSize?: string;
}

const FallingText: React.FC<FallingTextProps> = ({
  text = '',
  highlightWords = [],
  highlightClass = 'highlighted',
  trigger = 'auto',
  backgroundColor = 'transparent',
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  fontSize = '1rem'
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);

  const [effectStarted, setEffectStarted] = useState(false);

  useEffect(() => {
    if (!textRef.current) return;
    const words = text.split(' ');
    const newHTML = words
      .map(word => {
        const isHighlighted = highlightWords.some(hw => word.startsWith(hw));
        return \`<span class="word \${isHighlighted ? highlightClass : ''}">\${word}</span>\`;
      })
      .join(' ');
    textRef.current.innerHTML = newHTML;
  }, [text, highlightWords, highlightClass]);

  useEffect(() => {
    if (trigger === 'auto') {
      setEffectStarted(true);
      return;
    }
    if (trigger === 'scroll' && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  useEffect(() => {
    if (!effectStarted) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;

    if (!containerRef.current || !canvasContainerRef.current || !textRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;

    if (width <= 0 || height <= 0) {
      return;
    }

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasContainerRef.current,
      engine,
      options: {
        width,
        height,
        background: backgroundColor,
        wireframes
      }
    });

    const boundaryOptions = {
      isStatic: true,
      render: { fillStyle: 'transparent' }
    };
    const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
    const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);

    const wordSpans = textRef.current.querySelectorAll<HTMLSpanElement>('.word');
    const wordBodies = Array.from(wordSpans).map(elem => {
      const rect = elem.getBoundingClientRect();

      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        render: { fillStyle: 'transparent' },
        restitution: 0.8,
        frictionAir: 0.01,
        friction: 0.2
      });

      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 5,
        y: 0
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);
      return { elem, body };
    });

    wordBodies.forEach(({ elem, body }) => {
      elem.style.position = 'absolute';
      elem.style.left = \`\${body.position.x - body.bounds.max.x + body.bounds.min.x / 2}px\`;
      elem.style.top = \`\${body.position.y - body.bounds.max.y + body.bounds.min.y / 2}px\`;
      elem.style.transform = 'none';
    });

    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false }
      }
    });
    render.mouse = mouse;

    World.add(engine.world, [floor, leftWall, rightWall, ceiling, mouseConstraint, ...wordBodies.map(wb => wb.body)]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    const updateLoop = () => {
      wordBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position;
        elem.style.left = \`\${x}px\`;
        elem.style.top = \`\${y}px\`;
        elem.style.transform = \`translate(-50%, -50%) rotate(\${body.angle}rad)\`;
      });
      Matter.Engine.update(engine);
      requestAnimationFrame(updateLoop);
    };
    updateLoop();

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && canvasContainerRef.current) {
        canvasContainerRef.current.removeChild(render.canvas);
      }
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [effectStarted, gravity, wireframes, backgroundColor, mouseConstraintStiffness]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === 'click' || trigger === 'hover')) {
      setEffectStarted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className="falling-text-container"
      onClick={trigger === 'click' ? handleTrigger : undefined}
      onMouseEnter={trigger === 'hover' ? handleTrigger : undefined}
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        ref={textRef}
        className="falling-text-target"
        style={{
          fontSize: fontSize,
          lineHeight: 1.4
        }}
      />
      <div ref={canvasContainerRef} className="falling-text-canvas" />
    </div>
  );
};

export default FallingText;
`,Ue=`import { useRef, useState, useEffect } from 'react';
import Matter from 'matter-js';

interface FallingTextProps {
  text?: string;
  highlightWords?: string[];
  trigger?: 'auto' | 'scroll' | 'click' | 'hover';
  backgroundColor?: string;
  wireframes?: boolean;
  gravity?: number;
  mouseConstraintStiffness?: number;
  fontSize?: string;
}

const FallingText: React.FC<FallingTextProps> = ({
  text = '',
  highlightWords = [],
  trigger = 'auto',
  backgroundColor = 'transparent',
  wireframes = false,
  gravity = 1,
  mouseConstraintStiffness = 0.2,
  fontSize = '1rem'
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);

  const [effectStarted, setEffectStarted] = useState(false);

  useEffect(() => {
    if (!textRef.current) return;
    const words = text.split(' ');

    const newHTML = words
      .map(word => {
        const isHighlighted = highlightWords.some(hw => word.startsWith(hw));
        return \`<span
          class="inline-block mx-[2px] select-none \${isHighlighted ? 'text-cyan-500 font-bold' : ''}"
        >
          \${word}
        </span>\`;
      })
      .join(' ');

    textRef.current.innerHTML = newHTML;
  }, [text, highlightWords]);

  useEffect(() => {
    if (trigger === 'auto') {
      setEffectStarted(true);
      return;
    }
    if (trigger === 'scroll' && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  useEffect(() => {
    if (!effectStarted) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;

    if (!containerRef.current || !canvasContainerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;

    if (width <= 0 || height <= 0) return;

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasContainerRef.current,
      engine,
      options: {
        width,
        height,
        background: backgroundColor,
        wireframes
      }
    });

    const boundaryOptions = {
      isStatic: true,
      render: { fillStyle: 'transparent' }
    };
    const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
    const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);

    if (!textRef.current) return;
    const wordSpans = textRef.current.querySelectorAll('span');
    const wordBodies = [...wordSpans].map(elem => {
      const rect = elem.getBoundingClientRect();

      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        render: { fillStyle: 'transparent' },
        restitution: 0.8,
        frictionAir: 0.01,
        friction: 0.2
      });
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 5,
        y: 0
      });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);

      return { elem, body };
    });

    wordBodies.forEach(({ elem, body }) => {
      elem.style.position = 'absolute';
      elem.style.left = \`\${body.position.x - body.bounds.max.x + body.bounds.min.x / 2}px\`;
      elem.style.top = \`\${body.position.y - body.bounds.max.y + body.bounds.min.y / 2}px\`;
      elem.style.transform = 'none';
    });

    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false }
      }
    });
    render.mouse = mouse;

    World.add(engine.world, [floor, leftWall, rightWall, ceiling, mouseConstraint, ...wordBodies.map(wb => wb.body)]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    const updateLoop = () => {
      wordBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position;
        elem.style.left = \`\${x}px\`;
        elem.style.top = \`\${y}px\`;
        elem.style.transform = \`translate(-50%, -50%) rotate(\${body.angle}rad)\`;
      });
      Matter.Engine.update(engine);
      requestAnimationFrame(updateLoop);
    };
    updateLoop();

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && canvasContainerRef.current) {
        canvasContainerRef.current.removeChild(render.canvas);
      }
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [effectStarted, gravity, wireframes, backgroundColor, mouseConstraintStiffness]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === 'click' || trigger === 'hover')) {
      setEffectStarted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative z-[1] w-full h-full cursor-pointer text-center pt-8 overflow-hidden"
      onClick={trigger === 'click' ? handleTrigger : undefined}
      onMouseEnter={trigger === 'hover' ? handleTrigger : undefined}
    >
      <div
        ref={textRef}
        className="inline-block"
        style={{
          fontSize,
          lineHeight: 1.4
        }}
      />

      <div className="absolute top-0 left-0 z-0" ref={canvasContainerRef} />
    </div>
  );
};

export default FallingText;
`,ze={dependencies:"matter-js",usage:`import FallingText from './FallingText';
  
<FallingText
  text={\`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.\`}
  highlightWords={["React", "Bits", "animated", "components", "simplify"]}
  highlightClass="highlighted"
  trigger="hover"
  backgroundColor="transparent"
  wireframes={false}
  gravity={0.56}
  fontSize="2rem"
  mouseConstraintStiffness={0.9}
/>`,code:He,css:We,tailwind:Oe,tsCode:Ve,tsTailwind:Ue},de={gravity:.56,mouseConstraintStiffness:.9,trigger:"hover"},_e=()=>{const{props:X,updateProp:J,resetProps:E,hasChanges:b}=Me(de),{gravity:d,mouseConstraintStiffness:e,trigger:f}=X,[s,o]=Ie(),g=j.useMemo(()=>[{name:"text",type:"string",default:"",description:"The text content to display and eventually animate."},{name:"highlightWords",type:"string[]",default:"[]",description:"List of words or substrings to apply a highlight style."},{name:"highlightClass",type:"string",default:'"highlighted"',description:"CSS class name for highlighted words."},{name:"trigger",type:"'click' | 'hover' | 'auto' | 'scroll'",default:'"click"',description:"Defines how the falling effect is activated."},{name:"backgroundColor",type:"string",default:'"transparent"',description:"Canvas background color for the physics world."},{name:"wireframes",type:"boolean",default:"false",description:"Whether to render the physics bodies in wireframe mode."},{name:"gravity",type:"number",default:"1",description:"Vertical gravity factor for the physics engine."},{name:"mouseConstraintStiffness",type:"number",default:"0.2",description:"Stiffness for the mouse drag constraint."},{name:"fontSize",type:"string",default:'"1rem"',description:"Font size applied to the text before it falls."},{name:"wordSpacing",type:"string",default:'"2px"',description:"Horizontal spacing between each word."}],[]),t=[{value:"hover",label:"Hover"},{value:"click",label:"Click"},{value:"auto",label:"Auto"},{value:"scroll",label:"Scroll"}];return U.jsx(Re,{props:X,defaultProps:de,resetProps:E,hasChanges:b,children:U.jsxs(Pe,{children:[U.jsxs(Be,{children:[U.jsxs(we,{position:"relative",className:"demo-container",h:400,overflow:"hidden",justifyContent:"center",alignItems:"center",p:0,children:[U.jsx(ke,{text:"React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.",highlightWords:["React","Bits","animated","components","simplify"],highlightClass:"highlighted",trigger:f,gravity:d,fontSize:"2rem",mouseConstraintStiffness:e},s),U.jsx(Ce,{color:"#271E37",fontSize:"4rem",fontWeight:900,position:"absolute",zIndex:0,userSelect:"none",children:f==="hover"?"Hover Me":f==="click"?"Click Me":"Auto Start"})]}),U.jsxs(be,{children:[U.jsx(Fe,{title:"Trigger",options:t,value:f,name:"trigger",width:150,onChange:c=>{J("trigger",c),o()}}),U.jsx(ge,{title:"Gravity",min:.1,max:2,step:.01,value:d,onChange:c=>{J("gravity",c),o()}}),U.jsx(ge,{title:"Mouse Constraint Stiffness",min:.1,max:2,step:.1,value:e,onChange:c=>{J("mouseConstraintStiffness",c),o()}})]}),U.jsx(Te,{data:g}),U.jsx(Le,{dependencyList:["matter-js"]})]}),U.jsx(Ee,{children:U.jsx(Ae,{codeObject:ze,componentName:"FallingText"})})]})})};export{_e as default};
