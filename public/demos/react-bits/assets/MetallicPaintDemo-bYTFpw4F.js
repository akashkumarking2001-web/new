import{r as m,j as a,B as Z,F as sn}from"./index-CKqfvLoB.js";import{u as cn,C as ln,T as un,P as fn,a as mn,b as gn,c as hn}from"./PropTable-BzD4cJVp.js";import{C as dn}from"./Customize-BaUKAf5J.js";import{P as p}from"./PreviewSlider-25yjOF_X.js";import{P as W}from"./PreviewColorPicker-CzrUogGC.js";import{P as pn}from"./PreviewSwitch-B0BSuWrO.js";import{l as vn}from"./react-bits-logo-small-black-B4yUq05Y.js";import{u as xn}from"./useForceRerender-0lK0qxlp.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";import"./switch-CqqRi5Az.js";const _n=`#version 300 es
precision highp float;
in vec2 a_position;
out vec2 vP;
void main(){vP=a_position*.5+.5;gl_Position=vec4(a_position,0.,1.);}`,Rn=`#version 300 es
precision highp float;
in vec2 vP;
out vec4 oC;
uniform sampler2D u_tex;
uniform float u_time,u_ratio,u_imgRatio,u_seed,u_scale,u_refract,u_blur,u_liquid;
uniform float u_bright,u_contrast,u_angle,u_fresnel,u_sharp,u_wave,u_noise,u_chroma;
uniform float u_distort,u_contour;
uniform vec3 u_lightColor,u_darkColor,u_tint;

vec3 sC,sM;

vec3 pW(vec3 v){
  vec3 i=floor(v),f=fract(v),s=sign(fract(v*.5)-.5),h=fract(sM*i+i.yzx),c=f*(f-1.);
  return s*c*((h*16.-4.)*c-1.);
}

vec3 aF(vec3 b,vec3 c){return pW(b+c.zxy-pW(b.zxy+c.yzx)+pW(b.yzx+c.xyz));}
vec3 lM(vec3 s,vec3 p){return(p+aF(s,p))*.5;}

vec2 fA(){
  vec2 c=vP-.5;
  c.x*=u_ratio>u_imgRatio?u_ratio/u_imgRatio:1.;
  c.y*=u_ratio>u_imgRatio?1.:u_imgRatio/u_ratio;
  return vec2(c.x+.5,.5-c.y);
}

vec2 rot(vec2 p,float r){float c=cos(r),s=sin(r);return vec2(p.x*c+p.y*s,p.y*c-p.x*s);}

float bM(vec2 c,float t){
  vec2 l=smoothstep(vec2(0.),vec2(t),c),u=smoothstep(vec2(0.),vec2(t),1.-c);
  return l.x*l.y*u.x*u.y;
}

float mG(float hi,float lo,float t,float sh,float cv){
  sh*=(2.-u_sharp);
  float ci=smoothstep(.15,.85,cv),r=lo;
  float e1=.08/u_scale;
  r=mix(r,hi,smoothstep(0.,sh*1.5,t));
  r=mix(r,lo,smoothstep(e1-sh,e1+sh,t));
  float e2=e1+.05/u_scale*(1.-ci*.35);
  r=mix(r,hi,smoothstep(e2-sh,e2+sh,t));
  float e3=e2+.025/u_scale*(1.-ci*.45);
  r=mix(r,lo,smoothstep(e3-sh,e3+sh,t));
  float e4=e1+.1/u_scale;
  r=mix(r,hi,smoothstep(e4-sh,e4+sh,t));
  float rm=1.-e4,gT=clamp((t-e4)/rm,0.,1.);
  r=mix(r,mix(hi,lo,smoothstep(0.,1.,gT)),smoothstep(e4-sh*.5,e4+sh*.5,t));
  return r;
}

void main(){
  sC=fract(vec3(.7548,.5698,.4154)*(u_seed+17.31))+.5;
  sM=fract(sC.zxy-sC.yzx*1.618);
  vec2 sc=vec2(vP.x*u_ratio,1.-vP.y);
  float angleRad=u_angle*3.14159/180.;
  sc=rot(sc-.5,angleRad)+.5;
  sc=clamp(sc,0.,1.);
  float sl=sc.x-sc.y,an=u_time*.001;
  vec2 iC=fA();
  vec4 texSample=texture(u_tex,iC);
  float dp=texSample.r;
  float shapeMask=texSample.a;
  vec3 hi=u_lightColor*u_bright;
  vec3 lo=u_darkColor*(2.-u_bright);
  lo.b+=smoothstep(.6,1.4,sc.x+sc.y)*.08;
  vec2 fC=sc-.5;
  float rd=length(fC+vec2(0.,sl*.15));
  vec2 ag=rot(fC,(.22-sl*.18)*3.14159);
  float cv=1.-pow(rd*1.65,1.15);
  cv*=pow(sc.y,.35);
  float vs=shapeMask;
  vs*=bM(iC,.01);
  float fr=pow(1.-cv,u_fresnel)*.3;
  vs=min(vs+fr*vs,1.);
  float mT=an*.0625;
  vec3 wO=vec3(-1.05,1.35,1.55);
  vec3 wA=aF(vec3(31.,73.,56.),mT+wO)*.22*u_wave;
  vec3 wB=aF(vec3(24.,64.,42.),mT-wO.yzx)*.22*u_wave;
  vec2 nC=sc*45.*u_noise;
  nC+=aF(sC.zxy,an*.17*sC.yzx-sc.yxy*.35).xy*18.*u_wave;
  vec3 tC=vec3(.00041,.00053,.00076)*mT+wB*nC.x+wA*nC.y;
  tC=lM(sC,tC);
  tC=lM(sC+1.618,tC);
  float tb=sin(tC.x*3.14159)*.5+.5;
  tb=tb*2.-1.;
  float noiseVal=pW(vec3(sc*8.+an,an*.5)).x;
  float edgeFactor=smoothstep(0.,.5,dp)*smoothstep(1.,.5,dp);
  float lD=dp+(1.-dp)*u_liquid*tb;
  lD+=noiseVal*u_distort*.15*edgeFactor;
  float rB=clamp(1.-cv,0.,1.);
  float fl=ag.x+sl;
  fl+=noiseVal*sl*u_distort*edgeFactor;
  fl*=mix(1.,1.-dp*.5,u_contour);
  fl-=dp*u_contour*.8;
  float eI=smoothstep(0.,1.,lD)*smoothstep(1.,0.,lD);
  fl-=tb*sl*1.8*eI;
  float cA=cv*clamp(pow(sc.y,.12),.25,1.);
  fl*=.12+(1.05-lD)*cA;
  fl*=smoothstep(1.,.65,lD);
  float vA1=smoothstep(.08,.18,sc.y)*smoothstep(.38,.18,sc.y);
  float vA2=smoothstep(.08,.18,1.-sc.y)*smoothstep(.38,.18,1.-sc.y);
  fl+=vA1*.16+vA2*.025;
  fl*=.45+pow(sc.y,2.)*.55;
  fl*=u_scale;
  fl-=an;
  float rO=rB+cv*tb*.025;
  float vM1=smoothstep(-.12,.18,sc.y)*smoothstep(.48,.08,sc.y);
  float cM1=smoothstep(.35,.55,cv)*smoothstep(.95,.35,cv);
  rO+=vM1*cM1*4.5;
  rO-=sl;
  float bO=rB*1.25;
  float vM2=smoothstep(-.02,.35,sc.y)*smoothstep(.75,.08,sc.y);
  float cM2=smoothstep(.35,.55,cv)*smoothstep(.75,.35,cv);
  bO+=vM2*cM2*.9;
  bO-=lD*.18;
  rO*=u_refract*u_chroma;
  bO*=u_refract*u_chroma;
  float sf=u_blur;
  float rP=fract(fl+rO);
  float rC=mG(hi.r,lo.r,rP,sf+.018+u_refract*cv*.025,cv);
  float gP=fract(fl);
  float gC=mG(hi.g,lo.g,gP,sf+.008/max(.01,1.-sl),cv);
  float bP=fract(fl-bO);
  float bC=mG(hi.b,lo.b,bP,sf+.008,cv);
  vec3 col=vec3(rC,gC,bC);
  col=(col-.5)*u_contrast+.5;
  col=clamp(col,0.,1.);
  col=mix(col,1.-min(vec3(1.),(1.-col)/max(u_tint,vec3(.001))),length(u_tint-1.)*.5);
  col=clamp(col,0.,1.);
  oC=vec4(col*vs,vs);
}`;function bn(x){let o=x.naturalWidth||x.width,u=x.naturalHeight||x.height;if(o>1e3||u>1e3||o<500||u<500){const r=o>u?o>1e3?1e3/o:o<500?500/o:1:u>1e3?1e3/u:u<500?500/u:1;o=Math.round(o*r),u=Math.round(u*r)}const w=document.createElement("canvas");w.width=o,w.height=u;const E=w.getContext("2d");E.drawImage(x,0,0,o,u);const A=E.getImageData(0,0,o,u).data,R=o*u,M=new Float32Array(R),d=new Uint8Array(R),S=new Uint8Array(R);for(let r=0;r<R;r++){const l=r*4,f=A[l],c=A[l+1],P=A[l+2],y=A[l+3],i=f>250&&c>250&&P>250&&y===255||y<5;M[r]=i?0:y/255,d[r]=M[r]>.1?1:0}for(let r=0;r<u;r++)for(let l=0;l<o;l++){const f=r*o+l;d[f]&&(l===0||l===o-1||r===0||r===u-1||!d[f-1]||!d[f+1]||!d[f-o]||!d[f+o])&&(S[f]=1)}const v=new Float32Array(R),F=200,L=.01,I=1.85;for(let r=0;r<F;r++)for(let l=1;l<u-1;l++)for(let f=1;f<o-1;f++){const c=l*o+f;if(!d[c]||S[c])continue;const P=(d[c+1]?v[c+1]:0)+(d[c-1]?v[c-1]:0)+(d[c+o]?v[c+o]:0)+(d[c-o]?v[c-o]:0),y=(L+P)/4;v[c]=I*y+(1-I)*v[c]}let b=0;for(let r=0;r<R;r++)v[r]>b&&(b=v[r]);b===0&&(b=1);const T=E.createImageData(o,u);for(let r=0;r<R;r++){const l=r*4,f=v[r]/b,c=Math.round(255*(1-f*f));T.data[l]=T.data[l+1]=T.data[l+2]=c,T.data[l+3]=Math.round(M[r]*255)}return T}function q(x){const s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(x);return s?[parseInt(s[1],16)/255,parseInt(s[2],16)/255,parseInt(s[3],16)/255]:[1,1,1]}function yn({imageSrc:x,seed:s=42,scale:N=4,refraction:o=.01,blur:u=.015,liquid:w=.75,speed:E=.3,brightness:X=2,contrast:A=.5,angle:R=0,fresnel:M=1,lightColor:d="#ffffff",darkColor:S="#000000",patternSharpness:v=1,waveAmplitude:F=1,noiseScale:L=.5,chromaticSpread:I=2,mouseAnimation:b=!1,distortion:T=1,contour:r=.2,tintColor:l="#feb3ff"}){const f=m.useRef(null),c=m.useRef(null),P=m.useRef(null),y=m.useRef({}),i=m.useRef(null),z=m.useRef(0),e=m.useRef(0),U=m.useRef(null),en=m.useRef(null),j=m.useRef(E),tn=m.useRef({x:.5,y:.5,targetX:.5,targetY:.5}),Y=m.useRef(b),[O,rn]=m.useState(!1),[H,K]=m.useState(!1);m.useEffect(()=>{j.current=E},[E]),m.useEffect(()=>{Y.current=b},[b]);const $=m.useCallback(()=>{const t=f.current;if(!t)return!1;const n=t.getContext("webgl2",{antialias:!0,alpha:!0});if(!n)return!1;const h=(G,V)=>{const B=n.createShader(V);return n.shaderSource(B,G),n.compileShader(B),n.getShaderParameter(B,n.COMPILE_STATUS)?B:(console.error(n.getShaderInfoLog(B)),null)},g=h(_n,n.VERTEX_SHADER),C=h(Rn,n.FRAGMENT_SHADER);if(!g||!C)return!1;const _=n.createProgram();if(n.attachShader(_,g),n.attachShader(_,C),n.linkProgram(_),!n.getProgramParameter(_,n.LINK_STATUS))return console.error(n.getProgramInfoLog(_)),!1;const D={},k=n.getProgramParameter(_,n.ACTIVE_UNIFORMS);for(let G=0;G<k;G++){const V=n.getActiveUniform(_,G);V&&(D[V.name]=n.getUniformLocation(_,V.name))}const an=new Float32Array([-1,-1,1,-1,-1,1,1,1]),on=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,on),n.bufferData(n.ARRAY_BUFFER,an,n.STATIC_DRAW),n.useProgram(_);const Q=n.getAttribLocation(_,"a_position");return n.enableVertexAttribArray(Q),n.vertexAttribPointer(Q,2,n.FLOAT,!1,0,0),c.current=n,P.current=_,y.current=D,!0},[]),J=m.useCallback(t=>{const n=c.current,h=y.current;if(!n||!t)return;i.current&&n.deleteTexture(i.current);const g=n.createTexture();n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,g),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,t.width,t.height,0,n.RGBA,n.UNSIGNED_BYTE,t.data),n.uniform1i(h.u_tex,0);const C=t.width/t.height;n.uniform1f(h.u_imgRatio,C),n.uniform1f(h.u_ratio,1),i.current=g,en.current=t},[]);return m.useEffect(()=>{if(!$())return;const t=f.current,n=c.current,h=1e3*devicePixelRatio;return t.width=h,t.height=h,n.viewport(0,0,h,h),rn(!0),()=>{U.current&&cancelAnimationFrame(U.current),i.current&&c.current&&c.current.deleteTexture(i.current)}},[$]),m.useEffect(()=>{if(!O||!x)return;K(!1);const t=new Image;t.crossOrigin="anonymous",t.onload=()=>{const n=bn(t);J(n),K(!0)},t.src=x},[O,x,J]),m.useEffect(()=>{const t=c.current,n=y.current;if(!t||!O)return;t.uniform1f(n.u_seed,s),t.uniform1f(n.u_scale,N),t.uniform1f(n.u_refract,o),t.uniform1f(n.u_blur,u),t.uniform1f(n.u_liquid,w),t.uniform1f(n.u_bright,X),t.uniform1f(n.u_contrast,A),t.uniform1f(n.u_angle,R),t.uniform1f(n.u_fresnel,M);const h=q(d),g=q(S),C=q(l);t.uniform3f(n.u_lightColor,h[0],h[1],h[2]),t.uniform3f(n.u_darkColor,g[0],g[1],g[2]),t.uniform1f(n.u_sharp,v),t.uniform1f(n.u_wave,F),t.uniform1f(n.u_noise,L),t.uniform1f(n.u_chroma,I),t.uniform1f(n.u_distort,T),t.uniform1f(n.u_contour,r),t.uniform3f(n.u_tint,C[0],C[1],C[2])},[O,s,N,o,u,w,X,A,R,M,d,S,v,F,L,I,T,r,l]),m.useEffect(()=>{if(!O||!H)return;const t=c.current,n=y.current,h=f.current,g=tn.current,C=D=>{const k=h.getBoundingClientRect();g.targetX=(D.clientX-k.left)/k.width,g.targetY=(D.clientY-k.top)/k.height};h.addEventListener("mousemove",C);const _=D=>{const k=D-e.current;e.current=D,Y.current?(g.x+=(g.targetX-g.x)*.08,g.y+=(g.targetY-g.y)*.08,z.current=g.x*3e3+g.y*1500):z.current+=k*j.current,t.uniform1f(n.u_time,z.current),t.drawArrays(t.TRIANGLE_STRIP,0,4),U.current=requestAnimationFrame(_)};return e.current=performance.now(),U.current=requestAnimationFrame(_),()=>{U.current&&cancelAnimationFrame(U.current),h.removeEventListener("mousemove",C)}},[O,H]),a.jsx("canvas",{ref:f,className:"paint-container"})}const Tn=`'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import './MetallicPaint.css';

const vertexShader = \`#version 300 es
precision highp float;
in vec2 a_position;
out vec2 vP;
void main(){vP=a_position*.5+.5;gl_Position=vec4(a_position,0.,1.);}\`;

const fragmentShader = \`#version 300 es
precision highp float;
in vec2 vP;
out vec4 oC;
uniform sampler2D u_tex;
uniform float u_time,u_ratio,u_imgRatio,u_seed,u_scale,u_refract,u_blur,u_liquid;
uniform float u_bright,u_contrast,u_angle,u_fresnel,u_sharp,u_wave,u_noise,u_chroma;
uniform float u_distort,u_contour;
uniform vec3 u_lightColor,u_darkColor,u_tint;

vec3 sC,sM;

vec3 pW(vec3 v){
  vec3 i=floor(v),f=fract(v),s=sign(fract(v*.5)-.5),h=fract(sM*i+i.yzx),c=f*(f-1.);
  return s*c*((h*16.-4.)*c-1.);
}

vec3 aF(vec3 b,vec3 c){return pW(b+c.zxy-pW(b.zxy+c.yzx)+pW(b.yzx+c.xyz));}
vec3 lM(vec3 s,vec3 p){return(p+aF(s,p))*.5;}

vec2 fA(){
  vec2 c=vP-.5;
  c.x*=u_ratio>u_imgRatio?u_ratio/u_imgRatio:1.;
  c.y*=u_ratio>u_imgRatio?1.:u_imgRatio/u_ratio;
  return vec2(c.x+.5,.5-c.y);
}

vec2 rot(vec2 p,float r){float c=cos(r),s=sin(r);return vec2(p.x*c+p.y*s,p.y*c-p.x*s);}

float bM(vec2 c,float t){
  vec2 l=smoothstep(vec2(0.),vec2(t),c),u=smoothstep(vec2(0.),vec2(t),1.-c);
  return l.x*l.y*u.x*u.y;
}

float mG(float hi,float lo,float t,float sh,float cv){
  sh*=(2.-u_sharp);
  float ci=smoothstep(.15,.85,cv),r=lo;
  float e1=.08/u_scale;
  r=mix(r,hi,smoothstep(0.,sh*1.5,t));
  r=mix(r,lo,smoothstep(e1-sh,e1+sh,t));
  float e2=e1+.05/u_scale*(1.-ci*.35);
  r=mix(r,hi,smoothstep(e2-sh,e2+sh,t));
  float e3=e2+.025/u_scale*(1.-ci*.45);
  r=mix(r,lo,smoothstep(e3-sh,e3+sh,t));
  float e4=e1+.1/u_scale;
  r=mix(r,hi,smoothstep(e4-sh,e4+sh,t));
  float rm=1.-e4,gT=clamp((t-e4)/rm,0.,1.);
  r=mix(r,mix(hi,lo,smoothstep(0.,1.,gT)),smoothstep(e4-sh*.5,e4+sh*.5,t));
  return r;
}

void main(){
  sC=fract(vec3(.7548,.5698,.4154)*(u_seed+17.31))+.5;
  sM=fract(sC.zxy-sC.yzx*1.618);
  vec2 sc=vec2(vP.x*u_ratio,1.-vP.y);
  float angleRad=u_angle*3.14159/180.;
  sc=rot(sc-.5,angleRad)+.5;
  sc=clamp(sc,0.,1.);
  float sl=sc.x-sc.y,an=u_time*.001;
  vec2 iC=fA();
  vec4 texSample=texture(u_tex,iC);
  float dp=texSample.r;
  float shapeMask=texSample.a;
  vec3 hi=u_lightColor*u_bright;
  vec3 lo=u_darkColor*(2.-u_bright);
  lo.b+=smoothstep(.6,1.4,sc.x+sc.y)*.08;
  vec2 fC=sc-.5;
  float rd=length(fC+vec2(0.,sl*.15));
  vec2 ag=rot(fC,(.22-sl*.18)*3.14159);
  float cv=1.-pow(rd*1.65,1.15);
  cv*=pow(sc.y,.35);
  float vs=shapeMask;
  vs*=bM(iC,.01);
  float fr=pow(1.-cv,u_fresnel)*.3;
  vs=min(vs+fr*vs,1.);
  float mT=an*.0625;
  vec3 wO=vec3(-1.05,1.35,1.55);
  vec3 wA=aF(vec3(31.,73.,56.),mT+wO)*.22*u_wave;
  vec3 wB=aF(vec3(24.,64.,42.),mT-wO.yzx)*.22*u_wave;
  vec2 nC=sc*45.*u_noise;
  nC+=aF(sC.zxy,an*.17*sC.yzx-sc.yxy*.35).xy*18.*u_wave;
  vec3 tC=vec3(.00041,.00053,.00076)*mT+wB*nC.x+wA*nC.y;
  tC=lM(sC,tC);
  tC=lM(sC+1.618,tC);
  float tb=sin(tC.x*3.14159)*.5+.5;
  tb=tb*2.-1.;
  float noiseVal=pW(vec3(sc*8.+an,an*.5)).x;
  float edgeFactor=smoothstep(0.,.5,dp)*smoothstep(1.,.5,dp);
  float lD=dp+(1.-dp)*u_liquid*tb;
  lD+=noiseVal*u_distort*.15*edgeFactor;
  float rB=clamp(1.-cv,0.,1.);
  float fl=ag.x+sl;
  fl+=noiseVal*sl*u_distort*edgeFactor;
  fl*=mix(1.,1.-dp*.5,u_contour);
  fl-=dp*u_contour*.8;
  float eI=smoothstep(0.,1.,lD)*smoothstep(1.,0.,lD);
  fl-=tb*sl*1.8*eI;
  float cA=cv*clamp(pow(sc.y,.12),.25,1.);
  fl*=.12+(1.05-lD)*cA;
  fl*=smoothstep(1.,.65,lD);
  float vA1=smoothstep(.08,.18,sc.y)*smoothstep(.38,.18,sc.y);
  float vA2=smoothstep(.08,.18,1.-sc.y)*smoothstep(.38,.18,1.-sc.y);
  fl+=vA1*.16+vA2*.025;
  fl*=.45+pow(sc.y,2.)*.55;
  fl*=u_scale;
  fl-=an;
  float rO=rB+cv*tb*.025;
  float vM1=smoothstep(-.12,.18,sc.y)*smoothstep(.48,.08,sc.y);
  float cM1=smoothstep(.35,.55,cv)*smoothstep(.95,.35,cv);
  rO+=vM1*cM1*4.5;
  rO-=sl;
  float bO=rB*1.25;
  float vM2=smoothstep(-.02,.35,sc.y)*smoothstep(.75,.08,sc.y);
  float cM2=smoothstep(.35,.55,cv)*smoothstep(.75,.35,cv);
  bO+=vM2*cM2*.9;
  bO-=lD*.18;
  rO*=u_refract*u_chroma;
  bO*=u_refract*u_chroma;
  float sf=u_blur;
  float rP=fract(fl+rO);
  float rC=mG(hi.r,lo.r,rP,sf+.018+u_refract*cv*.025,cv);
  float gP=fract(fl);
  float gC=mG(hi.g,lo.g,gP,sf+.008/max(.01,1.-sl),cv);
  float bP=fract(fl-bO);
  float bC=mG(hi.b,lo.b,bP,sf+.008,cv);
  vec3 col=vec3(rC,gC,bC);
  col=(col-.5)*u_contrast+.5;
  col=clamp(col,0.,1.);
  col=mix(col,1.-min(vec3(1.),(1.-col)/max(u_tint,vec3(.001))),length(u_tint-1.)*.5);
  col=clamp(col,0.,1.);
  oC=vec4(col*vs,vs);
}\`;

function processImage(img) {
  const MAX_SIZE = 1000;
  const MIN_SIZE = 500;
  let width = img.naturalWidth || img.width;
  let height = img.naturalHeight || img.height;

  if (width > MAX_SIZE || height > MAX_SIZE || width < MIN_SIZE || height < MIN_SIZE) {
    const scale =
      width > height
        ? width > MAX_SIZE
          ? MAX_SIZE / width
          : width < MIN_SIZE
            ? MIN_SIZE / width
            : 1
        : height > MAX_SIZE
          ? MAX_SIZE / height
          : height < MIN_SIZE
            ? MIN_SIZE / height
            : 1;
    width = Math.round(width * scale);
    height = Math.round(height * scale);
  }

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, width, height);

  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const size = width * height;
  const alphaValues = new Float32Array(size);
  const shapeMask = new Uint8Array(size);
  const boundaryMask = new Uint8Array(size);

  for (let i = 0; i < size; i++) {
    const idx = i * 4;
    const r = data[idx],
      g = data[idx + 1],
      b = data[idx + 2],
      a = data[idx + 3];
    const isBackground = (r > 250 && g > 250 && b > 250 && a === 255) || a < 5;
    alphaValues[i] = isBackground ? 0 : a / 255;
    shapeMask[i] = alphaValues[i] > 0.1 ? 1 : 0;
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (!shapeMask[idx]) continue;
      if (
        x === 0 ||
        x === width - 1 ||
        y === 0 ||
        y === height - 1 ||
        !shapeMask[idx - 1] ||
        !shapeMask[idx + 1] ||
        !shapeMask[idx - width] ||
        !shapeMask[idx + width]
      ) {
        boundaryMask[idx] = 1;
      }
    }
  }

  const u = new Float32Array(size);
  const ITERATIONS = 200;
  const C = 0.01;
  const omega = 1.85;

  for (let iter = 0; iter < ITERATIONS; iter++) {
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        if (!shapeMask[idx] || boundaryMask[idx]) continue;
        const sum =
          (shapeMask[idx + 1] ? u[idx + 1] : 0) +
          (shapeMask[idx - 1] ? u[idx - 1] : 0) +
          (shapeMask[idx + width] ? u[idx + width] : 0) +
          (shapeMask[idx - width] ? u[idx - width] : 0);
        const newVal = (C + sum) / 4;
        u[idx] = omega * newVal + (1 - omega) * u[idx];
      }
    }
  }

  let maxVal = 0;
  for (let i = 0; i < size; i++) if (u[i] > maxVal) maxVal = u[i];
  if (maxVal === 0) maxVal = 1;

  const outData = ctx.createImageData(width, height);
  for (let i = 0; i < size; i++) {
    const px = i * 4;
    const depth = u[i] / maxVal;
    const gray = Math.round(255 * (1 - depth * depth));
    outData.data[px] = outData.data[px + 1] = outData.data[px + 2] = gray;
    outData.data[px + 3] = Math.round(alphaValues[i] * 255);
  }

  return outData;
}

function hexToRgb(hex) {
  const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255]
    : [1, 1, 1];
}

export default function MetallicPaint({
  imageSrc,
  seed = 42,
  scale = 4,
  refraction = 0.01,
  blur = 0.015,
  liquid = 0.75,
  speed = 0.3,
  brightness = 2,
  contrast = 0.5,
  angle = 0,
  fresnel = 1,
  lightColor = '#ffffff',
  darkColor = '#000000',
  patternSharpness = 1,
  waveAmplitude = 1,
  noiseScale = 0.5,
  chromaticSpread = 2,
  mouseAnimation = false,
  distortion = 1,
  contour = 0.2,
  tintColor = '#feb3ff'
}) {
  const canvasRef = useRef(null);
  const glRef = useRef(null);
  const programRef = useRef(null);
  const uniformsRef = useRef({});
  const textureRef = useRef(null);
  const animTimeRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rafRef = useRef(null);
  const imgDataRef = useRef(null);
  const speedRef = useRef(speed);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const mouseAnimRef = useRef(mouseAnimation);

  const [ready, setReady] = useState(false);
  const [textureReady, setTextureReady] = useState(false);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);
  useEffect(() => {
    mouseAnimRef.current = mouseAnimation;
  }, [mouseAnimation]);

  const initGL = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return false;

    const gl = canvas.getContext('webgl2', { antialias: true, alpha: true });
    if (!gl) return false;

    const compile = (src, type) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(s));
        return null;
      }
      return s;
    };

    const vs = compile(vertexShader, gl.VERTEX_SHADER);
    const fs = compile(fragmentShader, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return false;

    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog));
      return false;
    }

    const uniforms = {};
    const count = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < count; i++) {
      const info = gl.getActiveUniform(prog, i);
      if (info) uniforms[info.name] = gl.getUniformLocation(prog, info.name);
    }

    const verts = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

    gl.useProgram(prog);
    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    glRef.current = gl;
    programRef.current = prog;
    uniformsRef.current = uniforms;

    return true;
  }, []);

  const uploadTexture = useCallback(imgData => {
    const gl = glRef.current;
    const uniforms = uniformsRef.current;
    if (!gl || !imgData) return;

    if (textureRef.current) gl.deleteTexture(textureRef.current);

    const tex = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, imgData.width, imgData.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, imgData.data);
    gl.uniform1i(uniforms.u_tex, 0);

    const ratio = imgData.width / imgData.height;
    gl.uniform1f(uniforms.u_imgRatio, ratio);
    gl.uniform1f(uniforms.u_ratio, 1);

    textureRef.current = tex;
    imgDataRef.current = imgData;
  }, []);

  useEffect(() => {
    if (!initGL()) return;

    const canvas = canvasRef.current;
    const gl = glRef.current;
    const side = 1000 * devicePixelRatio;
    canvas.width = side;
    canvas.height = side;
    gl.viewport(0, 0, side, side);

    setReady(true);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (textureRef.current && glRef.current) {
        glRef.current.deleteTexture(textureRef.current);
      }
    };
  }, [initGL]);

  useEffect(() => {
    if (!ready || !imageSrc) return;

    setTextureReady(false);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const imgData = processImage(img);
      uploadTexture(imgData);
      setTextureReady(true);
    };
    img.src = imageSrc;
  }, [ready, imageSrc, uploadTexture]);

  useEffect(() => {
    const gl = glRef.current;
    const u = uniformsRef.current;
    if (!gl || !ready) return;

    gl.uniform1f(u.u_seed, seed);
    gl.uniform1f(u.u_scale, scale);
    gl.uniform1f(u.u_refract, refraction);
    gl.uniform1f(u.u_blur, blur);
    gl.uniform1f(u.u_liquid, liquid);
    gl.uniform1f(u.u_bright, brightness);
    gl.uniform1f(u.u_contrast, contrast);
    gl.uniform1f(u.u_angle, angle);
    gl.uniform1f(u.u_fresnel, fresnel);

    const light = hexToRgb(lightColor);
    const dark = hexToRgb(darkColor);
    const tint = hexToRgb(tintColor);
    gl.uniform3f(u.u_lightColor, light[0], light[1], light[2]);
    gl.uniform3f(u.u_darkColor, dark[0], dark[1], dark[2]);
    gl.uniform1f(u.u_sharp, patternSharpness);
    gl.uniform1f(u.u_wave, waveAmplitude);
    gl.uniform1f(u.u_noise, noiseScale);
    gl.uniform1f(u.u_chroma, chromaticSpread);
    gl.uniform1f(u.u_distort, distortion);
    gl.uniform1f(u.u_contour, contour);
    gl.uniform3f(u.u_tint, tint[0], tint[1], tint[2]);
  }, [
    ready,
    seed,
    scale,
    refraction,
    blur,
    liquid,
    brightness,
    contrast,
    angle,
    fresnel,
    lightColor,
    darkColor,
    patternSharpness,
    waveAmplitude,
    noiseScale,
    chromaticSpread,
    distortion,
    contour,
    tintColor
  ]);

  useEffect(() => {
    if (!ready || !textureReady) return;

    const gl = glRef.current;
    const u = uniformsRef.current;
    const canvas = canvasRef.current;
    const mouse = mouseRef.current;

    const handleMouseMove = e => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = (e.clientX - rect.left) / rect.width;
      mouse.targetY = (e.clientY - rect.top) / rect.height;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const render = time => {
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (mouseAnimRef.current) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
        animTimeRef.current = mouse.x * 3000 + mouse.y * 1500;
      } else {
        animTimeRef.current += delta * speedRef.current;
      }

      gl.uniform1f(u.u_time, animTimeRef.current);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    };

    lastTimeRef.current = performance.now();
    rafRef.current = requestAnimationFrame(render);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ready, textureReady]);

  return <canvas ref={canvasRef} className="paint-container" />;
}
`,Cn=`.paint-container {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: contain;
}
`,En=`'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const vertexShader = \`#version 300 es
precision highp float;
in vec2 a_position;
out vec2 vP;
void main(){vP=a_position*.5+.5;gl_Position=vec4(a_position,0.,1.);}\`;

const fragmentShader = \`#version 300 es
precision highp float;
in vec2 vP;
out vec4 oC;
uniform sampler2D u_tex;
uniform float u_time,u_ratio,u_imgRatio,u_seed,u_scale,u_refract,u_blur,u_liquid;
uniform float u_bright,u_contrast,u_angle,u_fresnel,u_sharp,u_wave,u_noise,u_chroma;
uniform float u_distort,u_contour;
uniform vec3 u_lightColor,u_darkColor,u_tint;

vec3 sC,sM;

vec3 pW(vec3 v){
  vec3 i=floor(v),f=fract(v),s=sign(fract(v*.5)-.5),h=fract(sM*i+i.yzx),c=f*(f-1.);
  return s*c*((h*16.-4.)*c-1.);
}

vec3 aF(vec3 b,vec3 c){return pW(b+c.zxy-pW(b.zxy+c.yzx)+pW(b.yzx+c.xyz));}
vec3 lM(vec3 s,vec3 p){return(p+aF(s,p))*.5;}

vec2 fA(){
  vec2 c=vP-.5;
  c.x*=u_ratio>u_imgRatio?u_ratio/u_imgRatio:1.;
  c.y*=u_ratio>u_imgRatio?1.:u_imgRatio/u_ratio;
  return vec2(c.x+.5,.5-c.y);
}

vec2 rot(vec2 p,float r){float c=cos(r),s=sin(r);return vec2(p.x*c+p.y*s,p.y*c-p.x*s);}

float bM(vec2 c,float t){
  vec2 l=smoothstep(vec2(0.),vec2(t),c),u=smoothstep(vec2(0.),vec2(t),1.-c);
  return l.x*l.y*u.x*u.y;
}

float mG(float hi,float lo,float t,float sh,float cv){
  sh*=(2.-u_sharp);
  float ci=smoothstep(.15,.85,cv),r=lo;
  float e1=.08/u_scale;
  r=mix(r,hi,smoothstep(0.,sh*1.5,t));
  r=mix(r,lo,smoothstep(e1-sh,e1+sh,t));
  float e2=e1+.05/u_scale*(1.-ci*.35);
  r=mix(r,hi,smoothstep(e2-sh,e2+sh,t));
  float e3=e2+.025/u_scale*(1.-ci*.45);
  r=mix(r,lo,smoothstep(e3-sh,e3+sh,t));
  float e4=e1+.1/u_scale;
  r=mix(r,hi,smoothstep(e4-sh,e4+sh,t));
  float rm=1.-e4,gT=clamp((t-e4)/rm,0.,1.);
  r=mix(r,mix(hi,lo,smoothstep(0.,1.,gT)),smoothstep(e4-sh*.5,e4+sh*.5,t));
  return r;
}

void main(){
  sC=fract(vec3(.7548,.5698,.4154)*(u_seed+17.31))+.5;
  sM=fract(sC.zxy-sC.yzx*1.618);
  vec2 sc=vec2(vP.x*u_ratio,1.-vP.y);
  float angleRad=u_angle*3.14159/180.;
  sc=rot(sc-.5,angleRad)+.5;
  sc=clamp(sc,0.,1.);
  float sl=sc.x-sc.y,an=u_time*.001;
  vec2 iC=fA();
  vec4 texSample=texture(u_tex,iC);
  float dp=texSample.r;
  float shapeMask=texSample.a;
  vec3 hi=u_lightColor*u_bright;
  vec3 lo=u_darkColor*(2.-u_bright);
  lo.b+=smoothstep(.6,1.4,sc.x+sc.y)*.08;
  vec2 fC=sc-.5;
  float rd=length(fC+vec2(0.,sl*.15));
  vec2 ag=rot(fC,(.22-sl*.18)*3.14159);
  float cv=1.-pow(rd*1.65,1.15);
  cv*=pow(sc.y,.35);
  float vs=shapeMask;
  vs*=bM(iC,.01);
  float fr=pow(1.-cv,u_fresnel)*.3;
  vs=min(vs+fr*vs,1.);
  float mT=an*.0625;
  vec3 wO=vec3(-1.05,1.35,1.55);
  vec3 wA=aF(vec3(31.,73.,56.),mT+wO)*.22*u_wave;
  vec3 wB=aF(vec3(24.,64.,42.),mT-wO.yzx)*.22*u_wave;
  vec2 nC=sc*45.*u_noise;
  nC+=aF(sC.zxy,an*.17*sC.yzx-sc.yxy*.35).xy*18.*u_wave;
  vec3 tC=vec3(.00041,.00053,.00076)*mT+wB*nC.x+wA*nC.y;
  tC=lM(sC,tC);
  tC=lM(sC+1.618,tC);
  float tb=sin(tC.x*3.14159)*.5+.5;
  tb=tb*2.-1.;
  float noiseVal=pW(vec3(sc*8.+an,an*.5)).x;
  float edgeFactor=smoothstep(0.,.5,dp)*smoothstep(1.,.5,dp);
  float lD=dp+(1.-dp)*u_liquid*tb;
  lD+=noiseVal*u_distort*.15*edgeFactor;
  float rB=clamp(1.-cv,0.,1.);
  float fl=ag.x+sl;
  fl+=noiseVal*sl*u_distort*edgeFactor;
  fl*=mix(1.,1.-dp*.5,u_contour);
  fl-=dp*u_contour*.8;
  float eI=smoothstep(0.,1.,lD)*smoothstep(1.,0.,lD);
  fl-=tb*sl*1.8*eI;
  float cA=cv*clamp(pow(sc.y,.12),.25,1.);
  fl*=.12+(1.05-lD)*cA;
  fl*=smoothstep(1.,.65,lD);
  float vA1=smoothstep(.08,.18,sc.y)*smoothstep(.38,.18,sc.y);
  float vA2=smoothstep(.08,.18,1.-sc.y)*smoothstep(.38,.18,1.-sc.y);
  fl+=vA1*.16+vA2*.025;
  fl*=.45+pow(sc.y,2.)*.55;
  fl*=u_scale;
  fl-=an;
  float rO=rB+cv*tb*.025;
  float vM1=smoothstep(-.12,.18,sc.y)*smoothstep(.48,.08,sc.y);
  float cM1=smoothstep(.35,.55,cv)*smoothstep(.95,.35,cv);
  rO+=vM1*cM1*4.5;
  rO-=sl;
  float bO=rB*1.25;
  float vM2=smoothstep(-.02,.35,sc.y)*smoothstep(.75,.08,sc.y);
  float cM2=smoothstep(.35,.55,cv)*smoothstep(.75,.35,cv);
  bO+=vM2*cM2*.9;
  bO-=lD*.18;
  rO*=u_refract*u_chroma;
  bO*=u_refract*u_chroma;
  float sf=u_blur;
  float rP=fract(fl+rO);
  float rC=mG(hi.r,lo.r,rP,sf+.018+u_refract*cv*.025,cv);
  float gP=fract(fl);
  float gC=mG(hi.g,lo.g,gP,sf+.008/max(.01,1.-sl),cv);
  float bP=fract(fl-bO);
  float bC=mG(hi.b,lo.b,bP,sf+.008,cv);
  vec3 col=vec3(rC,gC,bC);
  col=(col-.5)*u_contrast+.5;
  col=clamp(col,0.,1.);
  col=mix(col,1.-min(vec3(1.),(1.-col)/max(u_tint,vec3(.001))),length(u_tint-1.)*.5);
  col=clamp(col,0.,1.);
  oC=vec4(col*vs,vs);
}\`;

function processImage(img) {
  const MAX_SIZE = 1000;
  const MIN_SIZE = 500;
  let width = img.naturalWidth || img.width;
  let height = img.naturalHeight || img.height;

  if (width > MAX_SIZE || height > MAX_SIZE || width < MIN_SIZE || height < MIN_SIZE) {
    const scale =
      width > height
        ? width > MAX_SIZE
          ? MAX_SIZE / width
          : width < MIN_SIZE
            ? MIN_SIZE / width
            : 1
        : height > MAX_SIZE
          ? MAX_SIZE / height
          : height < MIN_SIZE
            ? MIN_SIZE / height
            : 1;
    width = Math.round(width * scale);
    height = Math.round(height * scale);
  }

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, width, height);

  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const size = width * height;
  const alphaValues = new Float32Array(size);
  const shapeMask = new Uint8Array(size);
  const boundaryMask = new Uint8Array(size);

  for (let i = 0; i < size; i++) {
    const idx = i * 4;
    const r = data[idx],
      g = data[idx + 1],
      b = data[idx + 2],
      a = data[idx + 3];
    const isBackground = (r > 250 && g > 250 && b > 250 && a === 255) || a < 5;
    alphaValues[i] = isBackground ? 0 : a / 255;
    shapeMask[i] = alphaValues[i] > 0.1 ? 1 : 0;
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (!shapeMask[idx]) continue;
      if (
        x === 0 ||
        x === width - 1 ||
        y === 0 ||
        y === height - 1 ||
        !shapeMask[idx - 1] ||
        !shapeMask[idx + 1] ||
        !shapeMask[idx - width] ||
        !shapeMask[idx + width]
      ) {
        boundaryMask[idx] = 1;
      }
    }
  }

  const u = new Float32Array(size);
  const ITERATIONS = 200;
  const C = 0.01;
  const omega = 1.85;

  for (let iter = 0; iter < ITERATIONS; iter++) {
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        if (!shapeMask[idx] || boundaryMask[idx]) continue;
        const sum =
          (shapeMask[idx + 1] ? u[idx + 1] : 0) +
          (shapeMask[idx - 1] ? u[idx - 1] : 0) +
          (shapeMask[idx + width] ? u[idx + width] : 0) +
          (shapeMask[idx - width] ? u[idx - width] : 0);
        const newVal = (C + sum) / 4;
        u[idx] = omega * newVal + (1 - omega) * u[idx];
      }
    }
  }

  let maxVal = 0;
  for (let i = 0; i < size; i++) if (u[i] > maxVal) maxVal = u[i];
  if (maxVal === 0) maxVal = 1;

  const outData = ctx.createImageData(width, height);
  for (let i = 0; i < size; i++) {
    const px = i * 4;
    const depth = u[i] / maxVal;
    const gray = Math.round(255 * (1 - depth * depth));
    outData.data[px] = outData.data[px + 1] = outData.data[px + 2] = gray;
    outData.data[px + 3] = Math.round(alphaValues[i] * 255);
  }

  return outData;
}

function hexToRgb(hex) {
  const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255]
    : [1, 1, 1];
}

export default function MetallicPaint({
  imageSrc,
  seed = 42,
  scale = 4,
  refraction = 0.01,
  blur = 0.015,
  liquid = 0.75,
  speed = 0.3,
  brightness = 2,
  contrast = 0.5,
  angle = 0,
  fresnel = 1,
  lightColor = '#ffffff',
  darkColor = '#000000',
  patternSharpness = 1,
  waveAmplitude = 1,
  noiseScale = 0.5,
  chromaticSpread = 2,
  mouseAnimation = false,
  distortion = 1,
  contour = 0.2,
  tintColor = '#feb3ff'
}) {
  const canvasRef = useRef(null);
  const glRef = useRef(null);
  const programRef = useRef(null);
  const uniformsRef = useRef({});
  const textureRef = useRef(null);
  const animTimeRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rafRef = useRef(null);
  const imgDataRef = useRef(null);
  const speedRef = useRef(speed);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const mouseAnimRef = useRef(mouseAnimation);

  const [ready, setReady] = useState(false);
  const [textureReady, setTextureReady] = useState(false);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);
  useEffect(() => {
    mouseAnimRef.current = mouseAnimation;
  }, [mouseAnimation]);

  const initGL = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return false;

    const gl = canvas.getContext('webgl2', { antialias: true, alpha: true });
    if (!gl) return false;

    const compile = (src, type) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(s));
        return null;
      }
      return s;
    };

    const vs = compile(vertexShader, gl.VERTEX_SHADER);
    const fs = compile(fragmentShader, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return false;

    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog));
      return false;
    }

    const uniforms = {};
    const count = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < count; i++) {
      const info = gl.getActiveUniform(prog, i);
      if (info) uniforms[info.name] = gl.getUniformLocation(prog, info.name);
    }

    const verts = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

    gl.useProgram(prog);
    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    glRef.current = gl;
    programRef.current = prog;
    uniformsRef.current = uniforms;

    return true;
  }, []);

  const uploadTexture = useCallback(imgData => {
    const gl = glRef.current;
    const uniforms = uniformsRef.current;
    if (!gl || !imgData) return;

    if (textureRef.current) gl.deleteTexture(textureRef.current);

    const tex = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, imgData.width, imgData.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, imgData.data);
    gl.uniform1i(uniforms.u_tex, 0);

    const ratio = imgData.width / imgData.height;
    gl.uniform1f(uniforms.u_imgRatio, ratio);
    gl.uniform1f(uniforms.u_ratio, 1);

    textureRef.current = tex;
    imgDataRef.current = imgData;
  }, []);

  useEffect(() => {
    if (!initGL()) return;

    const canvas = canvasRef.current;
    const gl = glRef.current;
    const side = 1000 * devicePixelRatio;
    canvas.width = side;
    canvas.height = side;
    gl.viewport(0, 0, side, side);

    setReady(true);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (textureRef.current && glRef.current) {
        glRef.current.deleteTexture(textureRef.current);
      }
    };
  }, [initGL]);

  useEffect(() => {
    if (!ready || !imageSrc) return;

    setTextureReady(false);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const imgData = processImage(img);
      uploadTexture(imgData);
      setTextureReady(true);
    };
    img.src = imageSrc;
  }, [ready, imageSrc, uploadTexture]);

  useEffect(() => {
    const gl = glRef.current;
    const u = uniformsRef.current;
    if (!gl || !ready) return;

    gl.uniform1f(u.u_seed, seed);
    gl.uniform1f(u.u_scale, scale);
    gl.uniform1f(u.u_refract, refraction);
    gl.uniform1f(u.u_blur, blur);
    gl.uniform1f(u.u_liquid, liquid);
    gl.uniform1f(u.u_bright, brightness);
    gl.uniform1f(u.u_contrast, contrast);
    gl.uniform1f(u.u_angle, angle);
    gl.uniform1f(u.u_fresnel, fresnel);

    const light = hexToRgb(lightColor);
    const dark = hexToRgb(darkColor);
    const tint = hexToRgb(tintColor);
    gl.uniform3f(u.u_lightColor, light[0], light[1], light[2]);
    gl.uniform3f(u.u_darkColor, dark[0], dark[1], dark[2]);
    gl.uniform1f(u.u_sharp, patternSharpness);
    gl.uniform1f(u.u_wave, waveAmplitude);
    gl.uniform1f(u.u_noise, noiseScale);
    gl.uniform1f(u.u_chroma, chromaticSpread);
    gl.uniform1f(u.u_distort, distortion);
    gl.uniform1f(u.u_contour, contour);
    gl.uniform3f(u.u_tint, tint[0], tint[1], tint[2]);
  }, [
    ready,
    seed,
    scale,
    refraction,
    blur,
    liquid,
    brightness,
    contrast,
    angle,
    fresnel,
    lightColor,
    darkColor,
    patternSharpness,
    waveAmplitude,
    noiseScale,
    chromaticSpread,
    distortion,
    contour,
    tintColor
  ]);

  useEffect(() => {
    if (!ready || !textureReady) return;

    const gl = glRef.current;
    const u = uniformsRef.current;
    const canvas = canvasRef.current;
    const mouse = mouseRef.current;

    const handleMouseMove = e => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = (e.clientX - rect.left) / rect.width;
      mouse.targetY = (e.clientY - rect.top) / rect.height;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const render = time => {
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (mouseAnimRef.current) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
        animTimeRef.current = mouse.x * 3000 + mouse.y * 1500;
      } else {
        animTimeRef.current += delta * speedRef.current;
      }

      gl.uniform1f(u.u_time, animTimeRef.current);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    };

    lastTimeRef.current = performance.now();
    rafRef.current = requestAnimationFrame(render);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ready, textureReady]);

  return <canvas ref={canvasRef} className="block h-full w-full object-contain" />;
}
`,An=`'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import './MetallicPaint.css';

const vertexShader = \`#version 300 es
precision highp float;
in vec2 a_position;
out vec2 vP;
void main(){vP=a_position*.5+.5;gl_Position=vec4(a_position,0.,1.);}\`;

const fragmentShader = \`#version 300 es
precision highp float;
in vec2 vP;
out vec4 oC;
uniform sampler2D u_tex;
uniform float u_time,u_ratio,u_imgRatio,u_seed,u_scale,u_refract,u_blur,u_liquid;
uniform float u_bright,u_contrast,u_angle,u_fresnel,u_sharp,u_wave,u_noise,u_chroma;
uniform float u_distort,u_contour;
uniform vec3 u_lightColor,u_darkColor,u_tint;

vec3 sC,sM;

vec3 pW(vec3 v){
  vec3 i=floor(v),f=fract(v),s=sign(fract(v*.5)-.5),h=fract(sM*i+i.yzx),c=f*(f-1.);
  return s*c*((h*16.-4.)*c-1.);
}

vec3 aF(vec3 b,vec3 c){return pW(b+c.zxy-pW(b.zxy+c.yzx)+pW(b.yzx+c.xyz));}
vec3 lM(vec3 s,vec3 p){return(p+aF(s,p))*.5;}

vec2 fA(){
  vec2 c=vP-.5;
  c.x*=u_ratio>u_imgRatio?u_ratio/u_imgRatio:1.;
  c.y*=u_ratio>u_imgRatio?1.:u_imgRatio/u_ratio;
  return vec2(c.x+.5,.5-c.y);
}

vec2 rot(vec2 p,float r){float c=cos(r),s=sin(r);return vec2(p.x*c+p.y*s,p.y*c-p.x*s);}

float bM(vec2 c,float t){
  vec2 l=smoothstep(vec2(0.),vec2(t),c),u=smoothstep(vec2(0.),vec2(t),1.-c);
  return l.x*l.y*u.x*u.y;
}

float mG(float hi,float lo,float t,float sh,float cv){
  sh*=(2.-u_sharp);
  float ci=smoothstep(.15,.85,cv),r=lo;
  float e1=.08/u_scale;
  r=mix(r,hi,smoothstep(0.,sh*1.5,t));
  r=mix(r,lo,smoothstep(e1-sh,e1+sh,t));
  float e2=e1+.05/u_scale*(1.-ci*.35);
  r=mix(r,hi,smoothstep(e2-sh,e2+sh,t));
  float e3=e2+.025/u_scale*(1.-ci*.45);
  r=mix(r,lo,smoothstep(e3-sh,e3+sh,t));
  float e4=e1+.1/u_scale;
  r=mix(r,hi,smoothstep(e4-sh,e4+sh,t));
  float rm=1.-e4,gT=clamp((t-e4)/rm,0.,1.);
  r=mix(r,mix(hi,lo,smoothstep(0.,1.,gT)),smoothstep(e4-sh*.5,e4+sh*.5,t));
  return r;
}

void main(){
  sC=fract(vec3(.7548,.5698,.4154)*(u_seed+17.31))+.5;
  sM=fract(sC.zxy-sC.yzx*1.618);
  vec2 sc=vec2(vP.x*u_ratio,1.-vP.y);
  float angleRad=u_angle*3.14159/180.;
  sc=rot(sc-.5,angleRad)+.5;
  sc=clamp(sc,0.,1.);
  float sl=sc.x-sc.y,an=u_time*.001;
  vec2 iC=fA();
  vec4 texSample=texture(u_tex,iC);
  float dp=texSample.r;
  float shapeMask=texSample.a;
  vec3 hi=u_lightColor*u_bright;
  vec3 lo=u_darkColor*(2.-u_bright);
  lo.b+=smoothstep(.6,1.4,sc.x+sc.y)*.08;
  vec2 fC=sc-.5;
  float rd=length(fC+vec2(0.,sl*.15));
  vec2 ag=rot(fC,(.22-sl*.18)*3.14159);
  float cv=1.-pow(rd*1.65,1.15);
  cv*=pow(sc.y,.35);
  float vs=shapeMask;
  vs*=bM(iC,.01);
  float fr=pow(1.-cv,u_fresnel)*.3;
  vs=min(vs+fr*vs,1.);
  float mT=an*.0625;
  vec3 wO=vec3(-1.05,1.35,1.55);
  vec3 wA=aF(vec3(31.,73.,56.),mT+wO)*.22*u_wave;
  vec3 wB=aF(vec3(24.,64.,42.),mT-wO.yzx)*.22*u_wave;
  vec2 nC=sc*45.*u_noise;
  nC+=aF(sC.zxy,an*.17*sC.yzx-sc.yxy*.35).xy*18.*u_wave;
  vec3 tC=vec3(.00041,.00053,.00076)*mT+wB*nC.x+wA*nC.y;
  tC=lM(sC,tC);
  tC=lM(sC+1.618,tC);
  float tb=sin(tC.x*3.14159)*.5+.5;
  tb=tb*2.-1.;
  float noiseVal=pW(vec3(sc*8.+an,an*.5)).x;
  float edgeFactor=smoothstep(0.,.5,dp)*smoothstep(1.,.5,dp);
  float lD=dp+(1.-dp)*u_liquid*tb;
  lD+=noiseVal*u_distort*.15*edgeFactor;
  float rB=clamp(1.-cv,0.,1.);
  float fl=ag.x+sl;
  fl+=noiseVal*sl*u_distort*edgeFactor;
  fl*=mix(1.,1.-dp*.5,u_contour);
  fl-=dp*u_contour*.8;
  float eI=smoothstep(0.,1.,lD)*smoothstep(1.,0.,lD);
  fl-=tb*sl*1.8*eI;
  float cA=cv*clamp(pow(sc.y,.12),.25,1.);
  fl*=.12+(1.05-lD)*cA;
  fl*=smoothstep(1.,.65,lD);
  float vA1=smoothstep(.08,.18,sc.y)*smoothstep(.38,.18,sc.y);
  float vA2=smoothstep(.08,.18,1.-sc.y)*smoothstep(.38,.18,1.-sc.y);
  fl+=vA1*.16+vA2*.025;
  fl*=.45+pow(sc.y,2.)*.55;
  fl*=u_scale;
  fl-=an;
  float rO=rB+cv*tb*.025;
  float vM1=smoothstep(-.12,.18,sc.y)*smoothstep(.48,.08,sc.y);
  float cM1=smoothstep(.35,.55,cv)*smoothstep(.95,.35,cv);
  rO+=vM1*cM1*4.5;
  rO-=sl;
  float bO=rB*1.25;
  float vM2=smoothstep(-.02,.35,sc.y)*smoothstep(.75,.08,sc.y);
  float cM2=smoothstep(.35,.55,cv)*smoothstep(.75,.35,cv);
  bO+=vM2*cM2*.9;
  bO-=lD*.18;
  rO*=u_refract*u_chroma;
  bO*=u_refract*u_chroma;
  float sf=u_blur;
  float rP=fract(fl+rO);
  float rC=mG(hi.r,lo.r,rP,sf+.018+u_refract*cv*.025,cv);
  float gP=fract(fl);
  float gC=mG(hi.g,lo.g,gP,sf+.008/max(.01,1.-sl),cv);
  float bP=fract(fl-bO);
  float bC=mG(hi.b,lo.b,bP,sf+.008,cv);
  vec3 col=vec3(rC,gC,bC);
  col=(col-.5)*u_contrast+.5;
  col=clamp(col,0.,1.);
  col=mix(col,1.-min(vec3(1.),(1.-col)/max(u_tint,vec3(.001))),length(u_tint-1.)*.5);
  col=clamp(col,0.,1.);
  oC=vec4(col*vs,vs);
}\`;

interface MetallicPaintProps {
  imageSrc: string;
  seed?: number;
  scale?: number;
  refraction?: number;
  blur?: number;
  liquid?: number;
  speed?: number;
  brightness?: number;
  contrast?: number;
  angle?: number;
  fresnel?: number;
  lightColor?: string;
  darkColor?: string;
  patternSharpness?: number;
  waveAmplitude?: number;
  noiseScale?: number;
  chromaticSpread?: number;
  mouseAnimation?: boolean;
  distortion?: number;
  contour?: number;
  tintColor?: string;
}

function processImage(img: HTMLImageElement): ImageData {
  const MAX_SIZE = 1000;
  const MIN_SIZE = 500;
  let width = img.naturalWidth || img.width;
  let height = img.naturalHeight || img.height;

  if (width > MAX_SIZE || height > MAX_SIZE || width < MIN_SIZE || height < MIN_SIZE) {
    const scale =
      width > height
        ? width > MAX_SIZE
          ? MAX_SIZE / width
          : width < MIN_SIZE
            ? MIN_SIZE / width
            : 1
        : height > MAX_SIZE
          ? MAX_SIZE / height
          : height < MIN_SIZE
            ? MIN_SIZE / height
            : 1;
    width = Math.round(width * scale);
    height = Math.round(height * scale);
  }

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(img, 0, 0, width, height);

  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const size = width * height;
  const alphaValues = new Float32Array(size);
  const shapeMask = new Uint8Array(size);
  const boundaryMask = new Uint8Array(size);

  for (let i = 0; i < size; i++) {
    const idx = i * 4;
    const r = data[idx],
      g = data[idx + 1],
      b = data[idx + 2],
      a = data[idx + 3];
    const isBackground = (r > 250 && g > 250 && b > 250 && a === 255) || a < 5;
    alphaValues[i] = isBackground ? 0 : a / 255;
    shapeMask[i] = alphaValues[i] > 0.1 ? 1 : 0;
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (!shapeMask[idx]) continue;
      if (
        x === 0 ||
        x === width - 1 ||
        y === 0 ||
        y === height - 1 ||
        !shapeMask[idx - 1] ||
        !shapeMask[idx + 1] ||
        !shapeMask[idx - width] ||
        !shapeMask[idx + width]
      ) {
        boundaryMask[idx] = 1;
      }
    }
  }

  const u = new Float32Array(size);
  const ITERATIONS = 200;
  const C = 0.01;
  const omega = 1.85;

  for (let iter = 0; iter < ITERATIONS; iter++) {
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        if (!shapeMask[idx] || boundaryMask[idx]) continue;
        const sum =
          (shapeMask[idx + 1] ? u[idx + 1] : 0) +
          (shapeMask[idx - 1] ? u[idx - 1] : 0) +
          (shapeMask[idx + width] ? u[idx + width] : 0) +
          (shapeMask[idx - width] ? u[idx - width] : 0);
        const newVal = (C + sum) / 4;
        u[idx] = omega * newVal + (1 - omega) * u[idx];
      }
    }
  }

  let maxVal = 0;
  for (let i = 0; i < size; i++) if (u[i] > maxVal) maxVal = u[i];
  if (maxVal === 0) maxVal = 1;

  const outData = ctx.createImageData(width, height);
  for (let i = 0; i < size; i++) {
    const px = i * 4;
    const depth = u[i] / maxVal;
    const gray = Math.round(255 * (1 - depth * depth));
    outData.data[px] = outData.data[px + 1] = outData.data[px + 2] = gray;
    outData.data[px + 3] = Math.round(alphaValues[i] * 255);
  }

  return outData;
}

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255]
    : [1, 1, 1];
}

export default function MetallicPaint({
  imageSrc,
  seed = 42,
  scale = 4,
  refraction = 0.01,
  blur = 0.015,
  liquid = 0.75,
  speed = 0.3,
  brightness = 2,
  contrast = 0.5,
  angle = 0,
  fresnel = 1,
  lightColor = '#ffffff',
  darkColor = '#000000',
  patternSharpness = 1,
  waveAmplitude = 1,
  noiseScale = 0.5,
  chromaticSpread = 2,
  mouseAnimation = false,
  distortion = 1,
  contour = 0.2,
  tintColor = '#feb3ff'
}: MetallicPaintProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGL2RenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const uniformsRef = useRef<Record<string, WebGLUniformLocation | null>>({});
  const textureRef = useRef<WebGLTexture | null>(null);
  const animTimeRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const imgDataRef = useRef<ImageData | null>(null);
  const speedRef = useRef(speed);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const mouseAnimRef = useRef(mouseAnimation);

  const [ready, setReady] = useState(false);
  const [textureReady, setTextureReady] = useState(false);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);
  useEffect(() => {
    mouseAnimRef.current = mouseAnimation;
  }, [mouseAnimation]);

  const initGL = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return false;

    const gl = canvas.getContext('webgl2', { antialias: true, alpha: true });
    if (!gl) return false;

    const compile = (src: string, type: number): WebGLShader | null => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(s));
        return null;
      }
      return s;
    };

    const vs = compile(vertexShader, gl.VERTEX_SHADER);
    const fs = compile(fragmentShader, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return false;

    const prog = gl.createProgram();
    if (!prog) return false;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog));
      return false;
    }

    const uniforms: Record<string, WebGLUniformLocation | null> = {};
    const count = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < count; i++) {
      const info = gl.getActiveUniform(prog, i);
      if (info) uniforms[info.name] = gl.getUniformLocation(prog, info.name);
    }

    const verts = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

    gl.useProgram(prog);
    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    glRef.current = gl;
    programRef.current = prog;
    uniformsRef.current = uniforms;

    return true;
  }, []);

  const uploadTexture = useCallback((imgData: ImageData) => {
    const gl = glRef.current;
    const uniforms = uniformsRef.current;
    if (!gl || !imgData) return;

    if (textureRef.current) gl.deleteTexture(textureRef.current);

    const tex = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, imgData.width, imgData.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, imgData.data);
    gl.uniform1i(uniforms.u_tex, 0);

    const ratio = imgData.width / imgData.height;
    gl.uniform1f(uniforms.u_imgRatio, ratio);
    gl.uniform1f(uniforms.u_ratio, 1);

    textureRef.current = tex;
    imgDataRef.current = imgData;
  }, []);

  useEffect(() => {
    if (!initGL()) return;

    const canvas = canvasRef.current;
    const gl = glRef.current;
    if (!canvas || !gl) return;

    const side = 1000 * devicePixelRatio;
    canvas.width = side;
    canvas.height = side;
    gl.viewport(0, 0, side, side);

    setReady(true);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (textureRef.current && glRef.current) {
        glRef.current.deleteTexture(textureRef.current);
      }
    };
  }, [initGL]);

  useEffect(() => {
    if (!ready || !imageSrc) return;

    setTextureReady(false);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const imgData = processImage(img);
      uploadTexture(imgData);
      setTextureReady(true);
    };
    img.src = imageSrc;
  }, [ready, imageSrc, uploadTexture]);

  useEffect(() => {
    const gl = glRef.current;
    const u = uniformsRef.current;
    if (!gl || !ready) return;

    gl.uniform1f(u.u_seed, seed);
    gl.uniform1f(u.u_scale, scale);
    gl.uniform1f(u.u_refract, refraction);
    gl.uniform1f(u.u_blur, blur);
    gl.uniform1f(u.u_liquid, liquid);
    gl.uniform1f(u.u_bright, brightness);
    gl.uniform1f(u.u_contrast, contrast);
    gl.uniform1f(u.u_angle, angle);
    gl.uniform1f(u.u_fresnel, fresnel);

    const light = hexToRgb(lightColor);
    const dark = hexToRgb(darkColor);
    const tint = hexToRgb(tintColor);
    gl.uniform3f(u.u_lightColor, light[0], light[1], light[2]);
    gl.uniform3f(u.u_darkColor, dark[0], dark[1], dark[2]);
    gl.uniform1f(u.u_sharp, patternSharpness);
    gl.uniform1f(u.u_wave, waveAmplitude);
    gl.uniform1f(u.u_noise, noiseScale);
    gl.uniform1f(u.u_chroma, chromaticSpread);
    gl.uniform1f(u.u_distort, distortion);
    gl.uniform1f(u.u_contour, contour);
    gl.uniform3f(u.u_tint, tint[0], tint[1], tint[2]);
  }, [
    ready,
    seed,
    scale,
    refraction,
    blur,
    liquid,
    brightness,
    contrast,
    angle,
    fresnel,
    lightColor,
    darkColor,
    patternSharpness,
    waveAmplitude,
    noiseScale,
    chromaticSpread,
    distortion,
    contour,
    tintColor
  ]);

  useEffect(() => {
    if (!ready || !textureReady) return;

    const gl = glRef.current;
    const u = uniformsRef.current;
    const canvas = canvasRef.current;
    const mouse = mouseRef.current;
    if (!gl || !canvas) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = (e.clientX - rect.left) / rect.width;
      mouse.targetY = (e.clientY - rect.top) / rect.height;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const render = (time: number) => {
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (mouseAnimRef.current) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
        animTimeRef.current = mouse.x * 3000 + mouse.y * 1500;
      } else {
        animTimeRef.current += delta * speedRef.current;
      }

      gl.uniform1f(u.u_time, animTimeRef.current);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    };

    lastTimeRef.current = performance.now();
    rafRef.current = requestAnimationFrame(render);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ready, textureReady]);

  return <canvas ref={canvasRef} className="paint-container" />;
}
`,wn=`'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const vertexShader = \`#version 300 es
precision highp float;
in vec2 a_position;
out vec2 vP;
void main(){vP=a_position*.5+.5;gl_Position=vec4(a_position,0.,1.);}\`;

const fragmentShader = \`#version 300 es
precision highp float;
in vec2 vP;
out vec4 oC;
uniform sampler2D u_tex;
uniform float u_time,u_ratio,u_imgRatio,u_seed,u_scale,u_refract,u_blur,u_liquid;
uniform float u_bright,u_contrast,u_angle,u_fresnel,u_sharp,u_wave,u_noise,u_chroma;
uniform float u_distort,u_contour;
uniform vec3 u_lightColor,u_darkColor,u_tint;

vec3 sC,sM;

vec3 pW(vec3 v){
  vec3 i=floor(v),f=fract(v),s=sign(fract(v*.5)-.5),h=fract(sM*i+i.yzx),c=f*(f-1.);
  return s*c*((h*16.-4.)*c-1.);
}

vec3 aF(vec3 b,vec3 c){return pW(b+c.zxy-pW(b.zxy+c.yzx)+pW(b.yzx+c.xyz));}
vec3 lM(vec3 s,vec3 p){return(p+aF(s,p))*.5;}

vec2 fA(){
  vec2 c=vP-.5;
  c.x*=u_ratio>u_imgRatio?u_ratio/u_imgRatio:1.;
  c.y*=u_ratio>u_imgRatio?1.:u_imgRatio/u_ratio;
  return vec2(c.x+.5,.5-c.y);
}

vec2 rot(vec2 p,float r){float c=cos(r),s=sin(r);return vec2(p.x*c+p.y*s,p.y*c-p.x*s);}

float bM(vec2 c,float t){
  vec2 l=smoothstep(vec2(0.),vec2(t),c),u=smoothstep(vec2(0.),vec2(t),1.-c);
  return l.x*l.y*u.x*u.y;
}

float mG(float hi,float lo,float t,float sh,float cv){
  sh*=(2.-u_sharp);
  float ci=smoothstep(.15,.85,cv),r=lo;
  float e1=.08/u_scale;
  r=mix(r,hi,smoothstep(0.,sh*1.5,t));
  r=mix(r,lo,smoothstep(e1-sh,e1+sh,t));
  float e2=e1+.05/u_scale*(1.-ci*.35);
  r=mix(r,hi,smoothstep(e2-sh,e2+sh,t));
  float e3=e2+.025/u_scale*(1.-ci*.45);
  r=mix(r,lo,smoothstep(e3-sh,e3+sh,t));
  float e4=e1+.1/u_scale;
  r=mix(r,hi,smoothstep(e4-sh,e4+sh,t));
  float rm=1.-e4,gT=clamp((t-e4)/rm,0.,1.);
  r=mix(r,mix(hi,lo,smoothstep(0.,1.,gT)),smoothstep(e4-sh*.5,e4+sh*.5,t));
  return r;
}

void main(){
  sC=fract(vec3(.7548,.5698,.4154)*(u_seed+17.31))+.5;
  sM=fract(sC.zxy-sC.yzx*1.618);
  vec2 sc=vec2(vP.x*u_ratio,1.-vP.y);
  float angleRad=u_angle*3.14159/180.;
  sc=rot(sc-.5,angleRad)+.5;
  sc=clamp(sc,0.,1.);
  float sl=sc.x-sc.y,an=u_time*.001;
  vec2 iC=fA();
  vec4 texSample=texture(u_tex,iC);
  float dp=texSample.r;
  float shapeMask=texSample.a;
  vec3 hi=u_lightColor*u_bright;
  vec3 lo=u_darkColor*(2.-u_bright);
  lo.b+=smoothstep(.6,1.4,sc.x+sc.y)*.08;
  vec2 fC=sc-.5;
  float rd=length(fC+vec2(0.,sl*.15));
  vec2 ag=rot(fC,(.22-sl*.18)*3.14159);
  float cv=1.-pow(rd*1.65,1.15);
  cv*=pow(sc.y,.35);
  float vs=shapeMask;
  vs*=bM(iC,.01);
  float fr=pow(1.-cv,u_fresnel)*.3;
  vs=min(vs+fr*vs,1.);
  float mT=an*.0625;
  vec3 wO=vec3(-1.05,1.35,1.55);
  vec3 wA=aF(vec3(31.,73.,56.),mT+wO)*.22*u_wave;
  vec3 wB=aF(vec3(24.,64.,42.),mT-wO.yzx)*.22*u_wave;
  vec2 nC=sc*45.*u_noise;
  nC+=aF(sC.zxy,an*.17*sC.yzx-sc.yxy*.35).xy*18.*u_wave;
  vec3 tC=vec3(.00041,.00053,.00076)*mT+wB*nC.x+wA*nC.y;
  tC=lM(sC,tC);
  tC=lM(sC+1.618,tC);
  float tb=sin(tC.x*3.14159)*.5+.5;
  tb=tb*2.-1.;
  float noiseVal=pW(vec3(sc*8.+an,an*.5)).x;
  float edgeFactor=smoothstep(0.,.5,dp)*smoothstep(1.,.5,dp);
  float lD=dp+(1.-dp)*u_liquid*tb;
  lD+=noiseVal*u_distort*.15*edgeFactor;
  float rB=clamp(1.-cv,0.,1.);
  float fl=ag.x+sl;
  fl+=noiseVal*sl*u_distort*edgeFactor;
  fl*=mix(1.,1.-dp*.5,u_contour);
  fl-=dp*u_contour*.8;
  float eI=smoothstep(0.,1.,lD)*smoothstep(1.,0.,lD);
  fl-=tb*sl*1.8*eI;
  float cA=cv*clamp(pow(sc.y,.12),.25,1.);
  fl*=.12+(1.05-lD)*cA;
  fl*=smoothstep(1.,.65,lD);
  float vA1=smoothstep(.08,.18,sc.y)*smoothstep(.38,.18,sc.y);
  float vA2=smoothstep(.08,.18,1.-sc.y)*smoothstep(.38,.18,1.-sc.y);
  fl+=vA1*.16+vA2*.025;
  fl*=.45+pow(sc.y,2.)*.55;
  fl*=u_scale;
  fl-=an;
  float rO=rB+cv*tb*.025;
  float vM1=smoothstep(-.12,.18,sc.y)*smoothstep(.48,.08,sc.y);
  float cM1=smoothstep(.35,.55,cv)*smoothstep(.95,.35,cv);
  rO+=vM1*cM1*4.5;
  rO-=sl;
  float bO=rB*1.25;
  float vM2=smoothstep(-.02,.35,sc.y)*smoothstep(.75,.08,sc.y);
  float cM2=smoothstep(.35,.55,cv)*smoothstep(.75,.35,cv);
  bO+=vM2*cM2*.9;
  bO-=lD*.18;
  rO*=u_refract*u_chroma;
  bO*=u_refract*u_chroma;
  float sf=u_blur;
  float rP=fract(fl+rO);
  float rC=mG(hi.r,lo.r,rP,sf+.018+u_refract*cv*.025,cv);
  float gP=fract(fl);
  float gC=mG(hi.g,lo.g,gP,sf+.008/max(.01,1.-sl),cv);
  float bP=fract(fl-bO);
  float bC=mG(hi.b,lo.b,bP,sf+.008,cv);
  vec3 col=vec3(rC,gC,bC);
  col=(col-.5)*u_contrast+.5;
  col=clamp(col,0.,1.);
  col=mix(col,1.-min(vec3(1.),(1.-col)/max(u_tint,vec3(.001))),length(u_tint-1.)*.5);
  col=clamp(col,0.,1.);
  oC=vec4(col*vs,vs);
}\`;

interface MetallicPaintProps {
  imageSrc: string;
  seed?: number;
  scale?: number;
  refraction?: number;
  blur?: number;
  liquid?: number;
  speed?: number;
  brightness?: number;
  contrast?: number;
  angle?: number;
  fresnel?: number;
  lightColor?: string;
  darkColor?: string;
  patternSharpness?: number;
  waveAmplitude?: number;
  noiseScale?: number;
  chromaticSpread?: number;
  mouseAnimation?: boolean;
  distortion?: number;
  contour?: number;
  tintColor?: string;
}

function processImage(img: HTMLImageElement): ImageData {
  const MAX_SIZE = 1000;
  const MIN_SIZE = 500;
  let width = img.naturalWidth || img.width;
  let height = img.naturalHeight || img.height;

  if (width > MAX_SIZE || height > MAX_SIZE || width < MIN_SIZE || height < MIN_SIZE) {
    const scale =
      width > height
        ? width > MAX_SIZE
          ? MAX_SIZE / width
          : width < MIN_SIZE
            ? MIN_SIZE / width
            : 1
        : height > MAX_SIZE
          ? MAX_SIZE / height
          : height < MIN_SIZE
            ? MIN_SIZE / height
            : 1;
    width = Math.round(width * scale);
    height = Math.round(height * scale);
  }

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(img, 0, 0, width, height);

  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const size = width * height;
  const alphaValues = new Float32Array(size);
  const shapeMask = new Uint8Array(size);
  const boundaryMask = new Uint8Array(size);

  for (let i = 0; i < size; i++) {
    const idx = i * 4;
    const r = data[idx],
      g = data[idx + 1],
      b = data[idx + 2],
      a = data[idx + 3];
    const isBackground = (r > 250 && g > 250 && b > 250 && a === 255) || a < 5;
    alphaValues[i] = isBackground ? 0 : a / 255;
    shapeMask[i] = alphaValues[i] > 0.1 ? 1 : 0;
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      if (!shapeMask[idx]) continue;
      if (
        x === 0 ||
        x === width - 1 ||
        y === 0 ||
        y === height - 1 ||
        !shapeMask[idx - 1] ||
        !shapeMask[idx + 1] ||
        !shapeMask[idx - width] ||
        !shapeMask[idx + width]
      ) {
        boundaryMask[idx] = 1;
      }
    }
  }

  const u = new Float32Array(size);
  const ITERATIONS = 200;
  const C = 0.01;
  const omega = 1.85;

  for (let iter = 0; iter < ITERATIONS; iter++) {
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        if (!shapeMask[idx] || boundaryMask[idx]) continue;
        const sum =
          (shapeMask[idx + 1] ? u[idx + 1] : 0) +
          (shapeMask[idx - 1] ? u[idx - 1] : 0) +
          (shapeMask[idx + width] ? u[idx + width] : 0) +
          (shapeMask[idx - width] ? u[idx - width] : 0);
        const newVal = (C + sum) / 4;
        u[idx] = omega * newVal + (1 - omega) * u[idx];
      }
    }
  }

  let maxVal = 0;
  for (let i = 0; i < size; i++) if (u[i] > maxVal) maxVal = u[i];
  if (maxVal === 0) maxVal = 1;

  const outData = ctx.createImageData(width, height);
  for (let i = 0; i < size; i++) {
    const px = i * 4;
    const depth = u[i] / maxVal;
    const gray = Math.round(255 * (1 - depth * depth));
    outData.data[px] = outData.data[px + 1] = outData.data[px + 2] = gray;
    outData.data[px + 3] = Math.round(alphaValues[i] * 255);
  }

  return outData;
}

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
  return result
    ? [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255]
    : [1, 1, 1];
}

export default function MetallicPaint({
  imageSrc,
  seed = 42,
  scale = 4,
  refraction = 0.01,
  blur = 0.015,
  liquid = 0.75,
  speed = 0.3,
  brightness = 2,
  contrast = 0.5,
  angle = 0,
  fresnel = 1,
  lightColor = '#ffffff',
  darkColor = '#000000',
  patternSharpness = 1,
  waveAmplitude = 1,
  noiseScale = 0.5,
  chromaticSpread = 2,
  mouseAnimation = false,
  distortion = 1,
  contour = 0.2,
  tintColor = '#feb3ff'
}: MetallicPaintProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGL2RenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const uniformsRef = useRef<Record<string, WebGLUniformLocation | null>>({});
  const textureRef = useRef<WebGLTexture | null>(null);
  const animTimeRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const imgDataRef = useRef<ImageData | null>(null);
  const speedRef = useRef(speed);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const mouseAnimRef = useRef(mouseAnimation);

  const [ready, setReady] = useState(false);
  const [textureReady, setTextureReady] = useState(false);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);
  useEffect(() => {
    mouseAnimRef.current = mouseAnimation;
  }, [mouseAnimation]);

  const initGL = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return false;

    const gl = canvas.getContext('webgl2', { antialias: true, alpha: true });
    if (!gl) return false;

    const compile = (src: string, type: number): WebGLShader | null => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(s));
        return null;
      }
      return s;
    };

    const vs = compile(vertexShader, gl.VERTEX_SHADER);
    const fs = compile(fragmentShader, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return false;

    const prog = gl.createProgram();
    if (!prog) return false;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog));
      return false;
    }

    const uniforms: Record<string, WebGLUniformLocation | null> = {};
    const count = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < count; i++) {
      const info = gl.getActiveUniform(prog, i);
      if (info) uniforms[info.name] = gl.getUniformLocation(prog, info.name);
    }

    const verts = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

    gl.useProgram(prog);
    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    glRef.current = gl;
    programRef.current = prog;
    uniformsRef.current = uniforms;

    return true;
  }, []);

  const uploadTexture = useCallback((imgData: ImageData) => {
    const gl = glRef.current;
    const uniforms = uniformsRef.current;
    if (!gl || !imgData) return;

    if (textureRef.current) gl.deleteTexture(textureRef.current);

    const tex = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, imgData.width, imgData.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, imgData.data);
    gl.uniform1i(uniforms.u_tex, 0);

    const ratio = imgData.width / imgData.height;
    gl.uniform1f(uniforms.u_imgRatio, ratio);
    gl.uniform1f(uniforms.u_ratio, 1);

    textureRef.current = tex;
    imgDataRef.current = imgData;
  }, []);

  useEffect(() => {
    if (!initGL()) return;

    const canvas = canvasRef.current;
    const gl = glRef.current;
    if (!canvas || !gl) return;

    const side = 1000 * devicePixelRatio;
    canvas.width = side;
    canvas.height = side;
    gl.viewport(0, 0, side, side);

    setReady(true);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (textureRef.current && glRef.current) {
        glRef.current.deleteTexture(textureRef.current);
      }
    };
  }, [initGL]);

  useEffect(() => {
    if (!ready || !imageSrc) return;

    setTextureReady(false);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const imgData = processImage(img);
      uploadTexture(imgData);
      setTextureReady(true);
    };
    img.src = imageSrc;
  }, [ready, imageSrc, uploadTexture]);

  useEffect(() => {
    const gl = glRef.current;
    const u = uniformsRef.current;
    if (!gl || !ready) return;

    gl.uniform1f(u.u_seed, seed);
    gl.uniform1f(u.u_scale, scale);
    gl.uniform1f(u.u_refract, refraction);
    gl.uniform1f(u.u_blur, blur);
    gl.uniform1f(u.u_liquid, liquid);
    gl.uniform1f(u.u_bright, brightness);
    gl.uniform1f(u.u_contrast, contrast);
    gl.uniform1f(u.u_angle, angle);
    gl.uniform1f(u.u_fresnel, fresnel);

    const light = hexToRgb(lightColor);
    const dark = hexToRgb(darkColor);
    const tint = hexToRgb(tintColor);
    gl.uniform3f(u.u_lightColor, light[0], light[1], light[2]);
    gl.uniform3f(u.u_darkColor, dark[0], dark[1], dark[2]);
    gl.uniform1f(u.u_sharp, patternSharpness);
    gl.uniform1f(u.u_wave, waveAmplitude);
    gl.uniform1f(u.u_noise, noiseScale);
    gl.uniform1f(u.u_chroma, chromaticSpread);
    gl.uniform1f(u.u_distort, distortion);
    gl.uniform1f(u.u_contour, contour);
    gl.uniform3f(u.u_tint, tint[0], tint[1], tint[2]);
  }, [
    ready,
    seed,
    scale,
    refraction,
    blur,
    liquid,
    brightness,
    contrast,
    angle,
    fresnel,
    lightColor,
    darkColor,
    patternSharpness,
    waveAmplitude,
    noiseScale,
    chromaticSpread,
    distortion,
    contour,
    tintColor
  ]);

  useEffect(() => {
    if (!ready || !textureReady) return;

    const gl = glRef.current;
    const u = uniformsRef.current;
    const canvas = canvasRef.current;
    const mouse = mouseRef.current;
    if (!gl || !canvas) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = (e.clientX - rect.left) / rect.width;
      mouse.targetY = (e.clientY - rect.top) / rect.height;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const render = (time: number) => {
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (mouseAnimRef.current) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
        animTimeRef.current = mouse.x * 3000 + mouse.y * 1500;
      } else {
        animTimeRef.current += delta * speedRef.current;
      }

      gl.uniform1f(u.u_time, animTimeRef.current);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    };

    lastTimeRef.current = performance.now();
    rafRef.current = requestAnimationFrame(render);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ready, textureReady]);

  return <canvas ref={canvasRef} className="block h-full w-full object-contain" />;
}
`,Mn={usage:`// Effect inspired by Paper's Liquid Metal effect
  
import MetallicPaint from "./MetallicPaint";

// Replace with your own SVG path
// NOTE: Your SVG should have padding around the shape to prevent cutoff
// It should have a black fill color to allow the metallic effect to show through
import logo from './logo.svg';

export default function Component() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <MetallicPaint
        imageSrc={logo}
        // Pattern
        seed={42}
        scale={4}
        patternSharpness={1}
        noiseScale={0.5}
        // Animation
        speed={0.3}
        liquid={0.75}
        mouseAnimation={false}
        // Visual
        brightness={2}
        contrast={0.5}
        refraction={0.01}
        blur={0.015}
        chromaticSpread={2}
        fresnel={1}
        angle={0}
        waveAmplitude={1}
        distortion={1}
        contour={0.2}
        // Colors
        lightColor="#ffffff"
        darkColor="#000000"
        tintColor="#feb3ff"
      />
    </div>
  );
}`,code:Tn,css:Cn,tailwind:En,tsCode:An,tsTailwind:wn},nn={seed:42,scale:4,refraction:.01,blur:.015,liquid:.75,speed:.3,brightness:2,contrast:.5,angle:0,fresnel:1,lightColor:"#ffffff",darkColor:"#000000",patternSharpness:1,waveAmplitude:1,noiseScale:.5,chromaticSpread:2,mouseAnimation:!1,distortion:1,contour:.2,tintColor:"#feb3ff"},Gn=()=>{const{props:x,updateProp:s,resetProps:N,hasChanges:o}=cn(nn),{seed:u,scale:w,refraction:E,blur:X,liquid:A,speed:R,brightness:M,contrast:d,angle:S,fresnel:v,lightColor:F,darkColor:L,patternSharpness:I,waveAmplitude:b,noiseScale:T,chromaticSpread:r,mouseAnimation:l,distortion:f,contour:c,tintColor:P}=x,[y,i]=xn(),z=m.useMemo(()=>[{name:"imageSrc",type:"string",default:"none (required)",description:"URL or path to the image used for the metallic paint effect. The image is processed internally."},{name:"seed",type:"number",default:"42",description:"Random seed for pattern generation. Different values create different pattern variations."},{name:"scale",type:"number",default:"2",description:"Scale of the metallic pattern. Higher values create more repetitions."},{name:"refraction",type:"number",default:"0.015",description:"Amount of chromatic aberration (color separation). Creates the rainbow edge effect."},{name:"blur",type:"number",default:"0.005",description:"Blur amount for the pattern transitions. Higher values create softer gradients."},{name:"liquid",type:"number",default:"0.07",description:"Amount of liquid/wavy animation applied to the pattern."},{name:"speed",type:"number",default:"0.3",description:"Animation speed multiplier. Set to 0 to disable animation."},{name:"brightness",type:"number",default:"1",description:"Overall brightness of the metallic effect. Values above 1 increase brightness."},{name:"contrast",type:"number",default:"1",description:"Color contrast of the effect. Higher values create more distinct light/dark areas."},{name:"angle",type:"number",default:"0",description:"Rotation angle of the pattern in degrees."},{name:"fresnel",type:"number",default:"1",description:"Fresnel effect intensity. Controls edge highlighting based on viewing angle."},{name:"lightColor",type:"string",default:"#ffffff",description:"Hex color for the bright/highlight areas of the metallic effect."},{name:"darkColor",type:"string",default:"#111111",description:"Hex color for the dark/shadow areas of the metallic effect."},{name:"patternSharpness",type:"number",default:"1",description:"Controls the sharpness of metallic band transitions. Higher = sharper edges."},{name:"waveAmplitude",type:"number",default:"1",description:"Intensity of the wave distortion effect."},{name:"noiseScale",type:"number",default:"1",description:"Scale of the noise pattern. Higher = more detailed noise."},{name:"chromaticSpread",type:"number",default:"1",description:"Multiplier for chromatic aberration spread between RGB channels."},{name:"mouseAnimation",type:"boolean",default:"false",description:"When true, mouse position controls wave animation instead of auto-loop."},{name:"distortion",type:"number",default:"0",description:"Amount of noise-based distortion applied to the pattern flow (0-1)."},{name:"contour",type:"number",default:"0",description:"Intensity of edge contour effect that warps the pattern along shape boundaries (0-1)."},{name:"tintColor",type:"string",default:"#ffffff",description:"Hex color for color burn tint effect. White = no tint."}],[]);return a.jsx(ln,{props:x,defaultProps:nn,resetProps:N,hasChanges:o,children:a.jsxs(un,{children:[a.jsxs(fn,{children:[a.jsx(Z,{position:"relative",className:"demo-container",h:400,overflow:"hidden",children:a.jsx(yn,{imageSrc:vn,seed:u,scale:w,refraction:E,blur:X,liquid:A,speed:R,brightness:M,contrast:d,angle:S,fresnel:v,lightColor:F,darkColor:L,patternSharpness:I,waveAmplitude:b,noiseScale:T,chromaticSpread:r,mouseAnimation:l,distortion:f,contour:c,tintColor:P},y)}),a.jsx(dn,{children:a.jsxs(sn,{wrap:"wrap",gap:4,children:[a.jsxs(Z,{flex:"1",minW:{base:"100%",md:"200px",lg:"180px"},children:[a.jsx(W,{title:"Tint Color",color:P,setColor:e=>{s("tintColor",e),i()}}),a.jsx(W,{title:"Dark Color",color:L,setColor:e=>{s("darkColor",e),i()}}),a.jsx(W,{title:"Light Color",color:F,setColor:e=>{s("lightColor",e),i()}}),a.jsx(p,{title:"Seed",min:0,max:200,step:.01,value:u,onChange:e=>{s("seed",e),i()}}),a.jsx(p,{title:"Scale",min:.5,max:5,step:.1,value:w,onChange:e=>{s("scale",e),i()}}),a.jsx(p,{title:"Refraction",min:0,max:.1,step:.001,value:E,onChange:e=>{s("refraction",e),i()}}),a.jsx(p,{title:"Blur",min:0,max:.1,step:.001,value:X,onChange:e=>{s("blur",e),i()}})]}),a.jsxs(Z,{flex:"1",minW:{base:"100%",md:"200px",lg:"180px"},children:[a.jsx(p,{title:"Speed",min:0,max:1,step:.01,value:R,onChange:e=>{s("speed",e),i()}}),a.jsx(p,{title:"Brightness",min:.5,max:2,step:.05,value:M,onChange:e=>{s("brightness",e),i()}}),a.jsx(p,{title:"Contrast",min:.5,max:2,step:.05,value:d,onChange:e=>{s("contrast",e),i()}}),a.jsx(p,{title:"Angle",min:-180,max:180,step:1,value:S,onChange:e=>{s("angle",e),i()}}),a.jsx(p,{title:"Fresnel",min:0,max:3,step:.1,value:v,onChange:e=>{s("fresnel",e),i()}}),a.jsx(p,{title:"Pattern Sharpness",min:.1,max:2,step:.1,value:I,onChange:e=>{s("patternSharpness",e),i()}}),a.jsx(p,{title:"Wave Amplitude",min:0,max:3,step:.1,value:b,onChange:e=>{s("waveAmplitude",e),i()}})]}),a.jsxs(Z,{flex:"1",minW:{base:"100%",md:"200px",lg:"180px"},children:[a.jsx(p,{title:"Liquid",min:0,max:1,step:.01,value:A,onChange:e=>{s("liquid",e),i()}}),a.jsx(p,{title:"Noise Scale",min:.1,max:3,step:.1,value:T,onChange:e=>{s("noiseScale",e),i()}}),a.jsx(p,{title:"Chromatic Spread",min:0,max:3,step:.1,value:r,onChange:e=>{s("chromaticSpread",e),i()}}),a.jsx(p,{title:"Distortion",min:0,max:1,step:.05,value:f,onChange:e=>{s("distortion",e),i()}}),a.jsx(p,{title:"Contour",min:0,max:1,step:.05,value:c,onChange:e=>{s("contour",e),i()}}),a.jsx(pn,{title:"Mouse Animation",isChecked:l,onChange:e=>{s("mouseAnimation",e),i()}})]})]})}),a.jsx(mn,{data:z})]}),a.jsx(gn,{children:a.jsx(hn,{codeObject:Mn,componentName:"MetallicPaint"})})]})})};export{Gn as default};
