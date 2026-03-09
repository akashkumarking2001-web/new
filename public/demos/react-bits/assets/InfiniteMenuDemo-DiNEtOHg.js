var _n=Object.defineProperty;var hn=n=>{throw TypeError(n)};var Fn=(n,t,e)=>t in n?_n(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var R=(n,t,e)=>Fn(n,typeof t!="symbol"?t+"":t,e),en=(n,t,e)=>t.has(n)||hn("Cannot "+e);var C=(n,t,e)=>(en(n,t,"read from private field"),e?e.call(n):t.get(n)),L=(n,t,e)=>t.has(n)?hn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),H=(n,t,e,i)=>(en(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e),S=(n,t,e)=>(en(n,t,"access private method"),e);import{r as V,j as P,B as mn,k as wn}from"./index-CKqfvLoB.js";import{u as Dn,C as Cn,T as Ln,P as Vn,a as zn,b as Un,c as Nn}from"./PropTable-BzD4cJVp.js";import{D as Bn}from"./Dependencies-DmSBXzNX.js";import{P as Gn}from"./PreviewSlider-25yjOF_X.js";import"./rotate-ccw-BMSfA2a1.js";import"./CodeHighlighter-ChUXWT8y.js";import"./slider-P7kYMDWb.js";var qn=1e-6,y=typeof Float32Array<"u"?Float32Array:Array;function Wn(){var n=new y(9);return y!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[5]=0,n[6]=0,n[7]=0),n[0]=1,n[4]=1,n[8]=1,n}function _(){var n=new y(16);return y!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function On(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n}function un(n,t){var e=t[0],i=t[1],a=t[2],s=t[3],r=t[4],o=t[5],c=t[6],h=t[7],l=t[8],m=t[9],u=t[10],d=t[11],g=t[12],v=t[13],f=t[14],E=t[15],M=e*o-i*r,p=e*c-a*r,x=e*h-s*r,A=i*c-a*o,b=i*h-s*o,G=a*h-s*c,q=l*v-m*g,W=l*f-u*g,O=l*E-d*g,k=m*f-u*v,Y=m*E-d*v,j=u*E-d*f,T=M*j-p*Y+x*k+A*O-b*W+G*q;return T?(T=1/T,n[0]=(o*j-c*Y+h*k)*T,n[1]=(a*Y-i*j-s*k)*T,n[2]=(v*G-f*b+E*A)*T,n[3]=(u*b-m*G-d*A)*T,n[4]=(c*O-r*j-h*W)*T,n[5]=(e*j-a*O+s*W)*T,n[6]=(f*x-g*G-E*p)*T,n[7]=(l*G-u*x+d*p)*T,n[8]=(r*Y-o*O+h*q)*T,n[9]=(i*O-e*Y-s*q)*T,n[10]=(g*b-v*x+E*M)*T,n[11]=(m*x-l*b-d*M)*T,n[12]=(o*W-r*k-c*q)*T,n[13]=(e*k-i*W+a*q)*T,n[14]=(v*p-g*A-f*M)*T,n[15]=(l*A-m*p+u*M)*T,n):null}function J(n,t,e){var i=t[0],a=t[1],s=t[2],r=t[3],o=t[4],c=t[5],h=t[6],l=t[7],m=t[8],u=t[9],d=t[10],g=t[11],v=t[12],f=t[13],E=t[14],M=t[15],p=e[0],x=e[1],A=e[2],b=e[3];return n[0]=p*i+x*o+A*m+b*v,n[1]=p*a+x*c+A*u+b*f,n[2]=p*s+x*h+A*d+b*E,n[3]=p*r+x*l+A*g+b*M,p=e[4],x=e[5],A=e[6],b=e[7],n[4]=p*i+x*o+A*m+b*v,n[5]=p*a+x*c+A*u+b*f,n[6]=p*s+x*h+A*d+b*E,n[7]=p*r+x*l+A*g+b*M,p=e[8],x=e[9],A=e[10],b=e[11],n[8]=p*i+x*o+A*m+b*v,n[9]=p*a+x*c+A*u+b*f,n[10]=p*s+x*h+A*d+b*E,n[11]=p*r+x*l+A*g+b*M,p=e[12],x=e[13],A=e[14],b=e[15],n[12]=p*i+x*o+A*m+b*v,n[13]=p*a+x*c+A*u+b*f,n[14]=p*s+x*h+A*d+b*E,n[15]=p*r+x*l+A*g+b*M,n}function dn(n,t){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function kn(n,t){return n[0]=t[0],n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=t[1],n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=t[2],n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n}function Yn(n,t,e,i,a){var s=1/Math.tan(t/2);if(n[0]=s/e,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,a!=null&&a!==1/0){var r=1/(i-a);n[10]=(a+i)*r,n[14]=2*a*i*r}else n[10]=-1,n[14]=-2*i;return n}var jn=Yn;function gn(n,t,e,i){var a=t[0],s=t[1],r=t[2],o=i[0],c=i[1],h=i[2],l=a-e[0],m=s-e[1],u=r-e[2],d=l*l+m*m+u*u;d>0&&(d=1/Math.sqrt(d),l*=d,m*=d,u*=d);var g=c*u-h*m,v=h*l-o*u,f=o*m-c*l;return d=g*g+v*v+f*f,d>0&&(d=1/Math.sqrt(d),g*=d,v*=d,f*=d),n[0]=g,n[1]=v,n[2]=f,n[3]=0,n[4]=m*f-u*v,n[5]=u*g-l*f,n[6]=l*v-m*g,n[7]=0,n[8]=l,n[9]=m,n[10]=u,n[11]=0,n[12]=a,n[13]=s,n[14]=r,n[15]=1,n}function F(){var n=new y(3);return y!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function Hn(n){var t=n[0],e=n[1],i=n[2];return Math.sqrt(t*t+e*e+i*i)}function D(n,t,e){var i=new y(3);return i[0]=n,i[1]=t,i[2]=e,i}function Xn(n,t,e){return n[0]=t[0]*e,n[1]=t[1]*e,n[2]=t[2]*e,n}function Qn(n,t){var e=t[0]-n[0],i=t[1]-n[1],a=t[2]-n[2];return e*e+i*i+a*a}function $n(n,t){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n}function z(n,t){var e=t[0],i=t[1],a=t[2],s=e*e+i*i+a*a;return s>0&&(s=1/Math.sqrt(s)),n[0]=t[0]*s,n[1]=t[1]*s,n[2]=t[2]*s,n}function ln(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function nn(n,t,e){var i=t[0],a=t[1],s=t[2],r=e[0],o=e[1],c=e[2];return n[0]=a*c-s*o,n[1]=s*r-i*c,n[2]=i*o-a*r,n}function an(n,t,e){var i=e[0],a=e[1],s=e[2],r=e[3],o=t[0],c=t[1],h=t[2],l=a*h-s*c,m=s*o-i*h,u=i*c-a*o;return l=l+l,m=m+m,u=u+u,n[0]=o+r*l+a*u-s*m,n[1]=c+r*m+s*l-i*u,n[2]=h+r*u+i*m-a*l,n}var Kn=Hn;(function(){var n=F();return function(t,e,i,a,s,r){var o,c;for(e||(e=3),i||(i=0),a?c=Math.min(a*e+i,t.length):c=t.length,o=i;o<c;o+=e)n[0]=t[o],n[1]=t[o+1],n[2]=t[o+2],s(n,n,r),t[o]=n[0],t[o+1]=n[1],t[o+2]=n[2];return t}})();function Zn(){var n=new y(4);return y!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0,n[3]=0),n}function Jn(n,t){var e=t[0],i=t[1],a=t[2],s=t[3],r=e*e+i*i+a*a+s*s;return r>0&&(r=1/Math.sqrt(r)),n[0]=e*r,n[1]=i*r,n[2]=a*r,n[3]=s*r,n}(function(){var n=Zn();return function(t,e,i,a,s,r){var o,c;for(e||(e=4),i||(i=0),a?c=Math.min(a*e+i,t.length):c=t.length,o=i;o<c;o+=e)n[0]=t[o],n[1]=t[o+1],n[2]=t[o+2],n[3]=t[o+3],s(n,n,r),t[o]=n[0],t[o+1]=n[1],t[o+2]=n[2],t[o+3]=n[3];return t}})();function w(){var n=new y(4);return y!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n[3]=1,n}function An(n,t,e){e=e*.5;var i=Math.sin(e);return n[0]=i*t[0],n[1]=i*t[1],n[2]=i*t[2],n[3]=Math.cos(e),n}function vn(n,t,e){var i=t[0],a=t[1],s=t[2],r=t[3],o=e[0],c=e[1],h=e[2],l=e[3];return n[0]=i*l+r*o+a*h-s*c,n[1]=a*l+r*c+s*o-i*h,n[2]=s*l+r*h+i*c-a*o,n[3]=r*l-i*o-a*c-s*h,n}function U(n,t,e,i){var a=t[0],s=t[1],r=t[2],o=t[3],c=e[0],h=e[1],l=e[2],m=e[3],u,d,g,v,f;return d=a*c+s*h+r*l+o*m,d<0&&(d=-d,c=-c,h=-h,l=-l,m=-m),1-d>qn?(u=Math.acos(d),g=Math.sin(u),v=Math.sin((1-i)*u)/g,f=Math.sin(i*u)/g):(v=1-i,f=i),n[0]=v*a+f*c,n[1]=v*s+f*h,n[2]=v*r+f*l,n[3]=v*o+f*m,n}function nt(n,t){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=t[3],n}function tt(n,t){var e=t[0]+t[4]+t[8],i;if(e>0)i=Math.sqrt(e+1),n[3]=.5*i,i=.5/i,n[0]=(t[5]-t[7])*i,n[1]=(t[6]-t[2])*i,n[2]=(t[1]-t[3])*i;else{var a=0;t[4]>t[0]&&(a=1),t[8]>t[a*3+a]&&(a=2);var s=(a+1)%3,r=(a+2)%3;i=Math.sqrt(t[a*3+a]-t[s*3+s]-t[r*3+r]+1),n[a]=.5*i,i=.5/i,n[3]=(t[s*3+r]-t[r*3+s])*i,n[s]=(t[s*3+a]+t[a*3+s])*i,n[r]=(t[r*3+a]+t[a*3+r])*i}return n}var tn=Jn;(function(){var n=F(),t=D(1,0,0),e=D(0,1,0);return function(i,a,s){var r=ln(a,s);return r<-.999999?(nn(n,t,a),Kn(n)<1e-6&&nn(n,e,a),z(n,n),An(i,n,Math.PI),i):r>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(nn(n,a,s),i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=1+r,tn(i,i))}})();(function(){var n=w(),t=w();return function(e,i,a,s,r,o){return U(n,i,r,o),U(t,a,s,o),U(e,n,t,2*o*(1-o)),e}})();(function(){var n=Wn();return function(t,e,i,a){return n[0]=i[0],n[3]=i[1],n[6]=i[2],n[1]=a[0],n[4]=a[1],n[7]=a[2],n[2]=-e[0],n[5]=-e[1],n[8]=-e[2],tn(t,tt(t,n))}})();function N(){var n=new y(2);return y!=Float32Array&&(n[0]=0,n[1]=0),n}function et(n){var t=new y(2);return t[0]=n[0],t[1]=n[1],t}function it(n,t){var e=new y(2);return e[0]=n,e[1]=t,e}function fn(n,t){return n[0]=t[0],n[1]=t[1],n}function sn(n,t,e){return n[0]=t,n[1]=e,n}function at(n,t,e){return n[0]=t[0]+e[0],n[1]=t[1]+e[1],n}function st(n,t,e){return n[0]=t[0]-e[0],n[1]=t[1]-e[1],n}function rt(n,t,e){return n[0]=t[0]*e,n[1]=t[1]*e,n}function ot(n){var t=n[0],e=n[1];return t*t+e*e}var ct=st,lt=ot;(function(){var n=N();return function(t,e,i,a,s,r){var o,c;for(e||(e=2),i||(i=0),a?c=Math.min(a*e+i,t.length):c=t.length,o=i;o<c;o+=e)n[0]=t[o],n[1]=t[o+1],s(n,n,r),t[o]=n[0],t[o+1]=n[1];return t}})();const ht=`#version 300 es

uniform mat4 uWorldMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform vec3 uCameraPosition;
uniform vec4 uRotationAxisVelocity;

in vec3 aModelPosition;
in vec3 aModelNormal;
in vec2 aModelUvs;
in mat4 aInstanceMatrix;

out vec2 vUvs;
out float vAlpha;
flat out int vInstanceId;

#define PI 3.141593

void main() {
    vec4 worldPosition = uWorldMatrix * aInstanceMatrix * vec4(aModelPosition, 1.);

    vec3 centerPos = (uWorldMatrix * aInstanceMatrix * vec4(0., 0., 0., 1.)).xyz;
    float radius = length(centerPos.xyz);

    if (gl_VertexID > 0) {
        vec3 rotationAxis = uRotationAxisVelocity.xyz;
        float rotationVelocity = min(.15, uRotationAxisVelocity.w * 15.);
        vec3 stretchDir = normalize(cross(centerPos, rotationAxis));
        vec3 relativeVertexPos = normalize(worldPosition.xyz - centerPos);
        float strength = dot(stretchDir, relativeVertexPos);
        float invAbsStrength = min(0., abs(strength) - 1.);
        strength = rotationVelocity * sign(strength) * abs(invAbsStrength * invAbsStrength * invAbsStrength + 1.);
        worldPosition.xyz += stretchDir * strength;
    }

    worldPosition.xyz = radius * normalize(worldPosition.xyz);

    gl_Position = uProjectionMatrix * uViewMatrix * worldPosition;

    vAlpha = smoothstep(0.5, 1., normalize(worldPosition.xyz).z) * .9 + .1;
    vUvs = aModelUvs;
    vInstanceId = gl_InstanceID;
}
`,mt=`#version 300 es
precision highp float;

uniform sampler2D uTex;
uniform int uItemCount;
uniform int uAtlasSize;

out vec4 outColor;

in vec2 vUvs;
in float vAlpha;
flat in int vInstanceId;

void main() {
    int itemIndex = vInstanceId % uItemCount;
    int cellsPerRow = uAtlasSize;
    int cellX = itemIndex % cellsPerRow;
    int cellY = itemIndex / cellsPerRow;
    vec2 cellSize = vec2(1.0) / vec2(float(cellsPerRow));
    vec2 cellOffset = vec2(float(cellX), float(cellY)) * cellSize;

    ivec2 texSize = textureSize(uTex, 0);
    float imageAspect = float(texSize.x) / float(texSize.y);
    float containerAspect = 1.0;
    
    float scale = max(imageAspect / containerAspect, 
                     containerAspect / imageAspect);
    
    vec2 st = vec2(vUvs.x, 1.0 - vUvs.y);
    st = (st - 0.5) * scale + 0.5;
    
    st = clamp(st, 0.0, 1.0);
    
    st = st * cellSize + cellOffset;
    
    outColor = texture(uTex, st);
    outColor.a *= vAlpha;
}
`;class X{constructor(t,e,i){this.a=t,this.b=e,this.c=i}}class ut{constructor(t,e,i){this.position=D(t,e,i),this.normal=F(),this.uv=N()}}class bn{constructor(){this.vertices=[],this.faces=[]}addVertex(...t){for(let e=0;e<t.length;e+=3)this.vertices.push(new ut(t[e],t[e+1],t[e+2]));return this}addFace(...t){for(let e=0;e<t.length;e+=3)this.faces.push(new X(t[e],t[e+1],t[e+2]));return this}get lastVertex(){return this.vertices[this.vertices.length-1]}subdivide(t=1){const e={};let i=this.faces;for(let a=0;a<t;++a){const s=new Array(i.length*4);i.forEach((r,o)=>{const c=this.getMidPoint(r.a,r.b,e),h=this.getMidPoint(r.b,r.c,e),l=this.getMidPoint(r.c,r.a,e),m=o*4;s[m+0]=new X(r.a,c,l),s[m+1]=new X(r.b,h,c),s[m+2]=new X(r.c,l,h),s[m+3]=new X(c,h,l)}),i=s}return this.faces=i,this}spherize(t=1){return this.vertices.forEach(e=>{z(e.normal,e.position),Xn(e.position,e.normal,t)}),this}get data(){return{vertices:this.vertexData,indices:this.indexData,normals:this.normalData,uvs:this.uvData}}get vertexData(){return new Float32Array(this.vertices.flatMap(t=>Array.from(t.position)))}get normalData(){return new Float32Array(this.vertices.flatMap(t=>Array.from(t.normal)))}get uvData(){return new Float32Array(this.vertices.flatMap(t=>Array.from(t.uv)))}get indexData(){return new Uint16Array(this.faces.flatMap(t=>[t.a,t.b,t.c]))}getMidPoint(t,e,i){const a=t<e?`k_${e}_${t}`:`k_${t}_${e}`;if(Object.prototype.hasOwnProperty.call(i,a))return i[a];const s=this.vertices[t].position,r=this.vertices[e].position,o=this.vertices.length;return i[a]=o,this.addVertex((s[0]+r[0])*.5,(s[1]+r[1])*.5,(s[2]+r[2])*.5),o}}class dt extends bn{constructor(){super();const t=Math.sqrt(5)*.5+.5;this.addVertex(-1,t,0,1,t,0,-1,-t,0,1,-t,0,0,-1,t,0,1,t,0,-1,-t,0,1,-t,t,0,-1,t,0,1,-t,0,-1,-t,0,1).addFace(0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1)}}class gt extends bn{constructor(t=4,e=1){super(),t=Math.max(4,t);const i=2*Math.PI/t;this.addVertex(0,0,0),this.lastVertex.uv[0]=.5,this.lastVertex.uv[1]=.5;for(let a=0;a<t;++a){const s=Math.cos(i*a),r=Math.sin(i*a);this.addVertex(e*s,e*r,0),this.lastVertex.uv[0]=s*.5+.5,this.lastVertex.uv[1]=r*.5+.5,a>0&&this.addFace(0,a,a+1)}this.addFace(0,t,1)}}function vt(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),n.getShaderParameter(i,n.COMPILE_STATUS)?i:(console.error(n.getShaderInfoLog(i)),n.deleteShader(i),null)}function ft(n,t,e,i){const a=n.createProgram();if([n.VERTEX_SHADER,n.FRAGMENT_SHADER].forEach((r,o)=>{const c=vt(n,r,t[o]);c&&n.attachShader(a,c)}),i)for(const r in i)n.bindAttribLocation(a,i[r],r);return n.linkProgram(a),n.getProgramParameter(a,n.LINK_STATUS)?a:(console.error(n.getProgramInfoLog(a)),n.deleteProgram(a),null)}function pt(n,t,e){const i=n.createVertexArray();n.bindVertexArray(i);for(const[a,s,r]of t)s!==-1&&(n.bindBuffer(n.ARRAY_BUFFER,a),n.enableVertexAttribArray(s),n.vertexAttribPointer(s,r,n.FLOAT,!1,0,0));if(e){const a=n.createBuffer();n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,a),n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Uint16Array(e),n.STATIC_DRAW)}return n.bindVertexArray(null),i}function xt(n){const t=Math.min(2,window.devicePixelRatio),e=Math.round(n.clientWidth*t),i=Math.round(n.clientHeight*t),a=n.width!==e||n.height!==i;return a&&(n.width=e,n.height=i),a}function pn(n,t,e){const i=n.createBuffer();return n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,t,e),n.bindBuffer(n.ARRAY_BUFFER,null),i}function At(n,t,e,i,a){const s=n.createTexture();return n.bindTexture(n.TEXTURE_2D,s),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,i),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,a),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,t),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,e),s}var Q,rn;class bt{constructor(t,e){L(this,Q);R(this,"isPointerDown",!1);R(this,"orientation",w());R(this,"pointerRotation",w());R(this,"rotationVelocity",0);R(this,"rotationAxis",D(1,0,0));R(this,"snapDirection",D(0,0,-1));R(this,"snapTargetDirection");R(this,"EPSILON",.1);R(this,"IDENTITY_QUAT",w());this.canvas=t,this.updateCallback=e||(()=>null),this.pointerPos=N(),this.previousPointerPos=N(),this._rotationVelocity=0,this._combinedQuat=w(),t.addEventListener("pointerdown",i=>{sn(this.pointerPos,i.clientX,i.clientY),fn(this.previousPointerPos,this.pointerPos),this.isPointerDown=!0}),t.addEventListener("pointerup",()=>{this.isPointerDown=!1}),t.addEventListener("pointerleave",()=>{this.isPointerDown=!1}),t.addEventListener("pointermove",i=>{this.isPointerDown&&sn(this.pointerPos,i.clientX,i.clientY)}),t.style.touchAction="none"}update(t,e=16){const i=t/e+1e-5;let a=i,s=w();if(this.isPointerDown){const u=.3*i,d=5/i,g=ct(N(),this.pointerPos,this.previousPointerPos);if(rt(g,g,u),lt(g)>this.EPSILON){at(g,this.previousPointerPos,g);const v=S(this,Q,rn).call(this,g),f=S(this,Q,rn).call(this,this.previousPointerPos),E=z(F(),v),M=z(F(),f);fn(this.previousPointerPos,g),a*=d,this.quatFromVectors(E,M,this.pointerRotation,a)}else U(this.pointerRotation,this.pointerRotation,this.IDENTITY_QUAT,u)}else{const u=.1*i;if(U(this.pointerRotation,this.pointerRotation,this.IDENTITY_QUAT,u),this.snapTargetDirection){const g=this.snapTargetDirection,v=this.snapDirection,f=Qn(g,v),E=Math.max(.1,1-f*10);a*=.2*E,this.quatFromVectors(g,v,s,a)}}const r=vn(w(),s,this.pointerRotation);this.orientation=vn(w(),r,this.orientation),tn(this.orientation,this.orientation);const o=.8*i;U(this._combinedQuat,this._combinedQuat,r,o),tn(this._combinedQuat,this._combinedQuat);const c=Math.acos(this._combinedQuat[3])*2,h=Math.sin(c/2);let l=0;h>1e-6&&(l=c/(2*Math.PI),this.rotationAxis[0]=this._combinedQuat[0]/h,this.rotationAxis[1]=this._combinedQuat[1]/h,this.rotationAxis[2]=this._combinedQuat[2]/h);const m=.5*i;this._rotationVelocity+=(l-this._rotationVelocity)*m,this.rotationVelocity=this._rotationVelocity/i,this.updateCallback(t)}quatFromVectors(t,e,i,a=1){const s=nn(F(),t,e);z(s,s);const r=Math.max(-1,Math.min(1,ln(t,e))),o=Math.acos(r)*a;return An(i,s,o),{q:i,axis:s,angle:o}}}Q=new WeakSet,rn=function(t){const i=this.canvas.clientWidth,a=this.canvas.clientHeight,s=Math.max(i,a)-1,r=(2*t[0]-i-1)/s,o=(2*t[1]-a-1)/s;let c=0;const h=r*r+o*o,l=2*2;return h<=l/2?c=Math.sqrt(l-h):c=l/Math.sqrt(h),D(-r,o,c)};var $,B,K,Z,I,In,Pn,Tn,Rn,En,on,cn,Sn,yn,Mn;class It{constructor(t,e,i,a,s=null,r=1){L(this,I);R(this,"TARGET_FRAME_DURATION",1e3/60);R(this,"SPHERE_RADIUS",2);L(this,$,0);L(this,B,0);L(this,K,0);L(this,Z,0);R(this,"camera",{matrix:_(),near:.1,far:40,fov:Math.PI/4,aspect:1,position:D(0,0,3),up:D(0,1,0),matrices:{view:_(),projection:_(),inversProjection:_()}});R(this,"nearestVertexIndex",null);R(this,"smoothRotationVelocity",0);R(this,"scaleFactor",1);R(this,"movementActive",!1);this.canvas=t,this.items=e||[],this.onActiveItemChange=i||(()=>{}),this.onMovementChange=a||(()=>{}),this.scaleFactor=r,this.camera.position[2]=3*r,S(this,I,In).call(this,s)}resize(){this.viewportSize=sn(this.viewportSize||N(),this.canvas.clientWidth,this.canvas.clientHeight);const t=this.gl;xt(t.canvas)&&t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),S(this,I,cn).call(this,t)}run(t=0){H(this,B,Math.min(32,t-C(this,$))),H(this,$,t),H(this,K,C(this,B)/this.TARGET_FRAME_DURATION),H(this,Z,C(this,Z)+C(this,K)),S(this,I,Rn).call(this,C(this,B)),S(this,I,En).call(this),requestAnimationFrame(e=>this.run(e))}}$=new WeakMap,B=new WeakMap,K=new WeakMap,Z=new WeakMap,I=new WeakSet,In=function(t){this.gl=this.canvas.getContext("webgl2",{antialias:!0,alpha:!1});const e=this.gl;if(!e)throw new Error("No WebGL 2 context!");this.viewportSize=it(this.canvas.clientWidth,this.canvas.clientHeight),this.drawBufferSize=et(this.viewportSize),this.discProgram=ft(e,[ht,mt],null,{aModelPosition:0,aModelNormal:1,aModelUvs:2,aInstanceMatrix:3}),this.discLocations={aModelPosition:e.getAttribLocation(this.discProgram,"aModelPosition"),aModelUvs:e.getAttribLocation(this.discProgram,"aModelUvs"),aInstanceMatrix:e.getAttribLocation(this.discProgram,"aInstanceMatrix"),uWorldMatrix:e.getUniformLocation(this.discProgram,"uWorldMatrix"),uViewMatrix:e.getUniformLocation(this.discProgram,"uViewMatrix"),uProjectionMatrix:e.getUniformLocation(this.discProgram,"uProjectionMatrix"),uCameraPosition:e.getUniformLocation(this.discProgram,"uCameraPosition"),uScaleFactor:e.getUniformLocation(this.discProgram,"uScaleFactor"),uRotationAxisVelocity:e.getUniformLocation(this.discProgram,"uRotationAxisVelocity"),uTex:e.getUniformLocation(this.discProgram,"uTex"),uFrames:e.getUniformLocation(this.discProgram,"uFrames"),uItemCount:e.getUniformLocation(this.discProgram,"uItemCount"),uAtlasSize:e.getUniformLocation(this.discProgram,"uAtlasSize")},this.discGeo=new gt(56,1),this.discBuffers=this.discGeo.data,this.discVAO=pt(e,[[pn(e,this.discBuffers.vertices,e.STATIC_DRAW),this.discLocations.aModelPosition,3],[pn(e,this.discBuffers.uvs,e.STATIC_DRAW),this.discLocations.aModelUvs,2]],this.discBuffers.indices),this.icoGeo=new dt,this.icoGeo.subdivide(1).spherize(this.SPHERE_RADIUS),this.instancePositions=this.icoGeo.vertices.map(i=>i.position),this.DISC_INSTANCE_COUNT=this.icoGeo.vertices.length,S(this,I,Tn).call(this,this.DISC_INSTANCE_COUNT),this.worldMatrix=_(),S(this,I,Pn).call(this),this.control=new bt(this.canvas,i=>S(this,I,Sn).call(this,i)),S(this,I,on).call(this),S(this,I,cn).call(this,e),this.resize(),t&&t(this)},Pn=function(){const t=this.gl;this.tex=At(t,t.LINEAR,t.LINEAR,t.CLAMP_TO_EDGE,t.CLAMP_TO_EDGE);const e=Math.max(1,this.items.length);this.atlasSize=Math.ceil(Math.sqrt(e));const i=document.createElement("canvas"),a=i.getContext("2d"),s=512;i.width=this.atlasSize*s,i.height=this.atlasSize*s,Promise.all(this.items.map(r=>new Promise(o=>{const c=new Image;c.crossOrigin="anonymous",c.onload=()=>o(c),c.src=r.image}))).then(r=>{r.forEach((o,c)=>{const h=c%this.atlasSize*s,l=Math.floor(c/this.atlasSize)*s;a.drawImage(o,h,l,s,s)}),t.bindTexture(t.TEXTURE_2D,this.tex),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i),t.generateMipmap(t.TEXTURE_2D)})},Tn=function(t){const e=this.gl;this.discInstances={matricesArray:new Float32Array(t*16),matrices:[],buffer:e.createBuffer()};for(let s=0;s<t;++s){const r=new Float32Array(this.discInstances.matricesArray.buffer,s*16*4,16);r.set(_()),this.discInstances.matrices.push(r)}e.bindVertexArray(this.discVAO),e.bindBuffer(e.ARRAY_BUFFER,this.discInstances.buffer),e.bufferData(e.ARRAY_BUFFER,this.discInstances.matricesArray.byteLength,e.DYNAMIC_DRAW);const i=4,a=16*4;for(let s=0;s<i;++s){const r=this.discLocations.aInstanceMatrix+s;e.enableVertexAttribArray(r),e.vertexAttribPointer(r,4,e.FLOAT,!1,a,s*4*4),e.vertexAttribDivisor(r,1)}e.bindBuffer(e.ARRAY_BUFFER,null),e.bindVertexArray(null)},Rn=function(t){const e=this.gl;this.control.update(t,this.TARGET_FRAME_DURATION);let i=this.instancePositions.map(r=>an(F(),r,this.control.orientation));const a=.25,s=.6;i.forEach((r,o)=>{const h=(Math.abs(r[2])/this.SPHERE_RADIUS*s+(1-s))*a,l=_();J(l,l,dn(_(),$n(F(),r))),J(l,l,gn(_(),[0,0,0],r,[0,1,0])),J(l,l,kn(_(),[h,h,h])),J(l,l,dn(_(),[0,0,-this.SPHERE_RADIUS])),On(this.discInstances.matrices[o],l)}),e.bindBuffer(e.ARRAY_BUFFER,this.discInstances.buffer),e.bufferSubData(e.ARRAY_BUFFER,0,this.discInstances.matricesArray),e.bindBuffer(e.ARRAY_BUFFER,null),this.smoothRotationVelocity=this.control.rotationVelocity},En=function(){const t=this.gl;t.useProgram(this.discProgram),t.enable(t.CULL_FACE),t.enable(t.DEPTH_TEST),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.uniformMatrix4fv(this.discLocations.uWorldMatrix,!1,this.worldMatrix),t.uniformMatrix4fv(this.discLocations.uViewMatrix,!1,this.camera.matrices.view),t.uniformMatrix4fv(this.discLocations.uProjectionMatrix,!1,this.camera.matrices.projection),t.uniform3f(this.discLocations.uCameraPosition,this.camera.position[0],this.camera.position[1],this.camera.position[2]),t.uniform4f(this.discLocations.uRotationAxisVelocity,this.control.rotationAxis[0],this.control.rotationAxis[1],this.control.rotationAxis[2],this.smoothRotationVelocity*1.1),t.uniform1i(this.discLocations.uItemCount,this.items.length),t.uniform1i(this.discLocations.uAtlasSize,this.atlasSize),t.uniform1f(this.discLocations.uFrames,C(this,Z)),t.uniform1f(this.discLocations.uScaleFactor,this.scaleFactor),t.uniform1i(this.discLocations.uTex,0),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.tex),t.bindVertexArray(this.discVAO),t.drawElementsInstanced(t.TRIANGLES,this.discBuffers.indices.length,t.UNSIGNED_SHORT,0,this.DISC_INSTANCE_COUNT)},on=function(){gn(this.camera.matrix,this.camera.position,[0,0,0],this.camera.up),un(this.camera.matrices.view,this.camera.matrix)},cn=function(t){this.camera.aspect=t.canvas.clientWidth/t.canvas.clientHeight;const e=this.SPHERE_RADIUS*.35,i=this.camera.position[2];this.camera.aspect>1?this.camera.fov=2*Math.atan(e/i):this.camera.fov=2*Math.atan(e/this.camera.aspect/i),jn(this.camera.matrices.projection,this.camera.fov,this.camera.aspect,this.camera.near,this.camera.far),un(this.camera.matrices.inversProjection,this.camera.matrices.projection)},Sn=function(t){const e=t/this.TARGET_FRAME_DURATION+1e-4;let i=5/e,a=3*this.scaleFactor;const s=this.control.isPointerDown||Math.abs(this.smoothRotationVelocity)>.01;if(s!==this.movementActive&&(this.movementActive=s,this.onMovementChange(s)),this.control.isPointerDown)a+=this.control.rotationVelocity*80+2.5,i=7/e;else{const r=S(this,I,yn).call(this),o=r%Math.max(1,this.items.length);this.onActiveItemChange(o);const c=z(F(),S(this,I,Mn).call(this,r));this.control.snapTargetDirection=c}this.camera.position[2]+=(a-this.camera.position[2])/i,S(this,I,on).call(this)},yn=function(){const t=this.control.snapDirection,e=nt(w(),this.control.orientation),i=an(F(),t,e);let a=-1,s;for(let r=0;r<this.instancePositions.length;++r){const o=ln(i,this.instancePositions[r]);o>a&&(a=o,s=r)}return s},Mn=function(t){const e=this.instancePositions[t];return an(F(),e,this.control.orientation)};const Pt=[{image:"https://picsum.photos/900/900?grayscale",link:"https://google.com/",title:"",description:""}];function Tt({items:n=[],scale:t=1}){const e=V.useRef(null),[i,a]=V.useState(null),[s,r]=V.useState(!1);V.useEffect(()=>{const c=e.current;let h;const l=u=>{const d=u%n.length;a(n[d])};c&&(h=new It(c,n.length?n:Pt,l,r,u=>u.run(),t));const m=()=>{h&&h.resize()};return window.addEventListener("resize",m),m(),()=>{window.removeEventListener("resize",m)}},[n,t]);const o=()=>{i!=null&&i.link&&(i.link.startsWith("http")?window.open(i.link,"_blank"):console.log("Internal route:",i.link))};return P.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[P.jsx("canvas",{id:"infinite-grid-menu-canvas",ref:e}),i&&P.jsxs(P.Fragment,{children:[P.jsx("h2",{className:`face-title ${s?"inactive":"active"}`,children:i.title}),P.jsxs("p",{className:`face-description ${s?"inactive":"active"}`,children:[" ",i.description]}),P.jsx("div",{onClick:o,className:`action-button ${s?"inactive":"active"}`,children:P.jsx("p",{className:"action-button-icon",children:"↗"})})]})]})}const Rt=`import { useEffect, useRef, useState } from 'react';
import { mat4, quat, vec2, vec3 } from 'gl-matrix';
import './InfiniteMenu.css';

const discVertShaderSource = \`#version 300 es

uniform mat4 uWorldMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform vec3 uCameraPosition;
uniform vec4 uRotationAxisVelocity;

in vec3 aModelPosition;
in vec3 aModelNormal;
in vec2 aModelUvs;
in mat4 aInstanceMatrix;

out vec2 vUvs;
out float vAlpha;
flat out int vInstanceId;

#define PI 3.141593

void main() {
    vec4 worldPosition = uWorldMatrix * aInstanceMatrix * vec4(aModelPosition, 1.);

    vec3 centerPos = (uWorldMatrix * aInstanceMatrix * vec4(0., 0., 0., 1.)).xyz;
    float radius = length(centerPos.xyz);

    if (gl_VertexID > 0) {
        vec3 rotationAxis = uRotationAxisVelocity.xyz;
        float rotationVelocity = min(.15, uRotationAxisVelocity.w * 15.);
        vec3 stretchDir = normalize(cross(centerPos, rotationAxis));
        vec3 relativeVertexPos = normalize(worldPosition.xyz - centerPos);
        float strength = dot(stretchDir, relativeVertexPos);
        float invAbsStrength = min(0., abs(strength) - 1.);
        strength = rotationVelocity * sign(strength) * abs(invAbsStrength * invAbsStrength * invAbsStrength + 1.);
        worldPosition.xyz += stretchDir * strength;
    }

    worldPosition.xyz = radius * normalize(worldPosition.xyz);

    gl_Position = uProjectionMatrix * uViewMatrix * worldPosition;

    vAlpha = smoothstep(0.5, 1., normalize(worldPosition.xyz).z) * .9 + .1;
    vUvs = aModelUvs;
    vInstanceId = gl_InstanceID;
}
\`;

const discFragShaderSource = \`#version 300 es
precision highp float;

uniform sampler2D uTex;
uniform int uItemCount;
uniform int uAtlasSize;

out vec4 outColor;

in vec2 vUvs;
in float vAlpha;
flat in int vInstanceId;

void main() {
    int itemIndex = vInstanceId % uItemCount;
    int cellsPerRow = uAtlasSize;
    int cellX = itemIndex % cellsPerRow;
    int cellY = itemIndex / cellsPerRow;
    vec2 cellSize = vec2(1.0) / vec2(float(cellsPerRow));
    vec2 cellOffset = vec2(float(cellX), float(cellY)) * cellSize;

    ivec2 texSize = textureSize(uTex, 0);
    float imageAspect = float(texSize.x) / float(texSize.y);
    float containerAspect = 1.0;
    
    float scale = max(imageAspect / containerAspect, 
                     containerAspect / imageAspect);
    
    vec2 st = vec2(vUvs.x, 1.0 - vUvs.y);
    st = (st - 0.5) * scale + 0.5;
    
    st = clamp(st, 0.0, 1.0);
    
    st = st * cellSize + cellOffset;
    
    outColor = texture(uTex, st);
    outColor.a *= vAlpha;
}
\`;

class Face {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

class Vertex {
  constructor(x, y, z) {
    this.position = vec3.fromValues(x, y, z);
    this.normal = vec3.create();
    this.uv = vec2.create();
  }
}

class Geometry {
  constructor() {
    this.vertices = [];
    this.faces = [];
  }

  addVertex(...args) {
    for (let i = 0; i < args.length; i += 3) {
      this.vertices.push(new Vertex(args[i], args[i + 1], args[i + 2]));
    }
    return this;
  }

  addFace(...args) {
    for (let i = 0; i < args.length; i += 3) {
      this.faces.push(new Face(args[i], args[i + 1], args[i + 2]));
    }
    return this;
  }

  get lastVertex() {
    return this.vertices[this.vertices.length - 1];
  }

  subdivide(divisions = 1) {
    const midPointCache = {};
    let f = this.faces;

    for (let div = 0; div < divisions; ++div) {
      const newFaces = new Array(f.length * 4);

      f.forEach((face, ndx) => {
        const mAB = this.getMidPoint(face.a, face.b, midPointCache);
        const mBC = this.getMidPoint(face.b, face.c, midPointCache);
        const mCA = this.getMidPoint(face.c, face.a, midPointCache);

        const i = ndx * 4;
        newFaces[i + 0] = new Face(face.a, mAB, mCA);
        newFaces[i + 1] = new Face(face.b, mBC, mAB);
        newFaces[i + 2] = new Face(face.c, mCA, mBC);
        newFaces[i + 3] = new Face(mAB, mBC, mCA);
      });

      f = newFaces;
    }

    this.faces = f;
    return this;
  }

  spherize(radius = 1) {
    this.vertices.forEach(vertex => {
      vec3.normalize(vertex.normal, vertex.position);
      vec3.scale(vertex.position, vertex.normal, radius);
    });
    return this;
  }

  get data() {
    return {
      vertices: this.vertexData,
      indices: this.indexData,
      normals: this.normalData,
      uvs: this.uvData
    };
  }

  get vertexData() {
    return new Float32Array(this.vertices.flatMap(v => Array.from(v.position)));
  }

  get normalData() {
    return new Float32Array(this.vertices.flatMap(v => Array.from(v.normal)));
  }

  get uvData() {
    return new Float32Array(this.vertices.flatMap(v => Array.from(v.uv)));
  }

  get indexData() {
    return new Uint16Array(this.faces.flatMap(f => [f.a, f.b, f.c]));
  }

  getMidPoint(ndxA, ndxB, cache) {
    const cacheKey = ndxA < ndxB ? \`k_\${ndxB}_\${ndxA}\` : \`k_\${ndxA}_\${ndxB}\`;
    if (Object.prototype.hasOwnProperty.call(cache, cacheKey)) {
      return cache[cacheKey];
    }
    const a = this.vertices[ndxA].position;
    const b = this.vertices[ndxB].position;
    const ndx = this.vertices.length;
    cache[cacheKey] = ndx;
    this.addVertex((a[0] + b[0]) * 0.5, (a[1] + b[1]) * 0.5, (a[2] + b[2]) * 0.5);
    return ndx;
  }
}

class IcosahedronGeometry extends Geometry {
  constructor() {
    super();
    const t = Math.sqrt(5) * 0.5 + 0.5;
    this.addVertex(
      -1,
      t,
      0,
      1,
      t,
      0,
      -1,
      -t,
      0,
      1,
      -t,
      0,
      0,
      -1,
      t,
      0,
      1,
      t,
      0,
      -1,
      -t,
      0,
      1,
      -t,
      t,
      0,
      -1,
      t,
      0,
      1,
      -t,
      0,
      -1,
      -t,
      0,
      1
    ).addFace(
      0,
      11,
      5,
      0,
      5,
      1,
      0,
      1,
      7,
      0,
      7,
      10,
      0,
      10,
      11,
      1,
      5,
      9,
      5,
      11,
      4,
      11,
      10,
      2,
      10,
      7,
      6,
      7,
      1,
      8,
      3,
      9,
      4,
      3,
      4,
      2,
      3,
      2,
      6,
      3,
      6,
      8,
      3,
      8,
      9,
      4,
      9,
      5,
      2,
      4,
      11,
      6,
      2,
      10,
      8,
      6,
      7,
      9,
      8,
      1
    );
  }
}

class DiscGeometry extends Geometry {
  constructor(steps = 4, radius = 1) {
    super();
    steps = Math.max(4, steps);

    const alpha = (2 * Math.PI) / steps;

    this.addVertex(0, 0, 0);
    this.lastVertex.uv[0] = 0.5;
    this.lastVertex.uv[1] = 0.5;

    for (let i = 0; i < steps; ++i) {
      const x = Math.cos(alpha * i);
      const y = Math.sin(alpha * i);
      this.addVertex(radius * x, radius * y, 0);
      this.lastVertex.uv[0] = x * 0.5 + 0.5;
      this.lastVertex.uv[1] = y * 0.5 + 0.5;

      if (i > 0) {
        this.addFace(0, i, i + 1);
      }
    }
    this.addFace(0, steps, 1);
  }
}

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

  if (success) {
    return shader;
  }

  console.error(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
  return null;
}

function createProgram(gl, shaderSources, transformFeedbackVaryings, attribLocations) {
  const program = gl.createProgram();

  [gl.VERTEX_SHADER, gl.FRAGMENT_SHADER].forEach((type, ndx) => {
    const shader = createShader(gl, type, shaderSources[ndx]);
    if (shader) gl.attachShader(program, shader);
  });

  if (transformFeedbackVaryings) {
    gl.transformFeedbackVaryings(program, transformFeedbackVaryings, gl.SEPARATE_ATTRIBS);
  }

  if (attribLocations) {
    for (const attrib in attribLocations) {
      gl.bindAttribLocation(program, attribLocations[attrib], attrib);
    }
  }

  gl.linkProgram(program);
  const success = gl.getProgramParameter(program, gl.LINK_STATUS);

  if (success) {
    return program;
  }

  console.error(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
  return null;
}

function makeVertexArray(gl, bufLocNumElmPairs, indices) {
  const va = gl.createVertexArray();
  gl.bindVertexArray(va);

  for (const [buffer, loc, numElem] of bufLocNumElmPairs) {
    if (loc === -1) continue;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, numElem, gl.FLOAT, false, 0, 0);
  }

  if (indices) {
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
  }

  gl.bindVertexArray(null);
  return va;
}

function resizeCanvasToDisplaySize(canvas) {
  const dpr = Math.min(2, window.devicePixelRatio);
  const displayWidth = Math.round(canvas.clientWidth * dpr);
  const displayHeight = Math.round(canvas.clientHeight * dpr);
  const needResize = canvas.width !== displayWidth || canvas.height !== displayHeight;
  if (needResize) {
    canvas.width = displayWidth;
    canvas.height = displayHeight;
  }
  return needResize;
}

function makeBuffer(gl, sizeOrData, usage) {
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, sizeOrData, usage);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  return buf;
}

function createAndSetupTexture(gl, minFilter, magFilter, wrapS, wrapT) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
  return texture;
}

class ArcballControl {
  isPointerDown = false;
  orientation = quat.create();
  pointerRotation = quat.create();
  rotationVelocity = 0;
  rotationAxis = vec3.fromValues(1, 0, 0);
  snapDirection = vec3.fromValues(0, 0, -1);
  snapTargetDirection;
  EPSILON = 0.1;
  IDENTITY_QUAT = quat.create();

  constructor(canvas, updateCallback) {
    this.canvas = canvas;
    this.updateCallback = updateCallback || (() => null);

    this.pointerPos = vec2.create();
    this.previousPointerPos = vec2.create();
    this._rotationVelocity = 0;
    this._combinedQuat = quat.create();

    canvas.addEventListener('pointerdown', e => {
      vec2.set(this.pointerPos, e.clientX, e.clientY);
      vec2.copy(this.previousPointerPos, this.pointerPos);
      this.isPointerDown = true;
    });
    canvas.addEventListener('pointerup', () => {
      this.isPointerDown = false;
    });
    canvas.addEventListener('pointerleave', () => {
      this.isPointerDown = false;
    });
    canvas.addEventListener('pointermove', e => {
      if (this.isPointerDown) {
        vec2.set(this.pointerPos, e.clientX, e.clientY);
      }
    });

    canvas.style.touchAction = 'none';
  }

  update(deltaTime, targetFrameDuration = 16) {
    const timeScale = deltaTime / targetFrameDuration + 0.00001;
    let angleFactor = timeScale;
    let snapRotation = quat.create();

    if (this.isPointerDown) {
      const INTENSITY = 0.3 * timeScale;
      const ANGLE_AMPLIFICATION = 5 / timeScale;

      const midPointerPos = vec2.sub(vec2.create(), this.pointerPos, this.previousPointerPos);
      vec2.scale(midPointerPos, midPointerPos, INTENSITY);

      if (vec2.sqrLen(midPointerPos) > this.EPSILON) {
        vec2.add(midPointerPos, this.previousPointerPos, midPointerPos);

        const p = this.#project(midPointerPos);
        const q = this.#project(this.previousPointerPos);
        const a = vec3.normalize(vec3.create(), p);
        const b = vec3.normalize(vec3.create(), q);

        vec2.copy(this.previousPointerPos, midPointerPos);

        angleFactor *= ANGLE_AMPLIFICATION;

        this.quatFromVectors(a, b, this.pointerRotation, angleFactor);
      } else {
        quat.slerp(this.pointerRotation, this.pointerRotation, this.IDENTITY_QUAT, INTENSITY);
      }
    } else {
      const INTENSITY = 0.1 * timeScale;
      quat.slerp(this.pointerRotation, this.pointerRotation, this.IDENTITY_QUAT, INTENSITY);

      if (this.snapTargetDirection) {
        const SNAPPING_INTENSITY = 0.2;
        const a = this.snapTargetDirection;
        const b = this.snapDirection;
        const sqrDist = vec3.squaredDistance(a, b);
        const distanceFactor = Math.max(0.1, 1 - sqrDist * 10);
        angleFactor *= SNAPPING_INTENSITY * distanceFactor;
        this.quatFromVectors(a, b, snapRotation, angleFactor);
      }
    }

    const combinedQuat = quat.multiply(quat.create(), snapRotation, this.pointerRotation);
    this.orientation = quat.multiply(quat.create(), combinedQuat, this.orientation);
    quat.normalize(this.orientation, this.orientation);

    const RA_INTENSITY = 0.8 * timeScale;
    quat.slerp(this._combinedQuat, this._combinedQuat, combinedQuat, RA_INTENSITY);
    quat.normalize(this._combinedQuat, this._combinedQuat);

    const rad = Math.acos(this._combinedQuat[3]) * 2.0;
    const s = Math.sin(rad / 2.0);
    let rv = 0;
    if (s > 0.000001) {
      rv = rad / (2 * Math.PI);
      this.rotationAxis[0] = this._combinedQuat[0] / s;
      this.rotationAxis[1] = this._combinedQuat[1] / s;
      this.rotationAxis[2] = this._combinedQuat[2] / s;
    }

    const RV_INTENSITY = 0.5 * timeScale;
    this._rotationVelocity += (rv - this._rotationVelocity) * RV_INTENSITY;
    this.rotationVelocity = this._rotationVelocity / timeScale;

    this.updateCallback(deltaTime);
  }

  quatFromVectors(a, b, out, angleFactor = 1) {
    const axis = vec3.cross(vec3.create(), a, b);
    vec3.normalize(axis, axis);
    const d = Math.max(-1, Math.min(1, vec3.dot(a, b)));
    const angle = Math.acos(d) * angleFactor;
    quat.setAxisAngle(out, axis, angle);
    return { q: out, axis, angle };
  }

  #project(pos) {
    const r = 2;
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    const s = Math.max(w, h) - 1;

    const x = (2 * pos[0] - w - 1) / s;
    const y = (2 * pos[1] - h - 1) / s;
    let z = 0;
    const xySq = x * x + y * y;
    const rSq = r * r;

    if (xySq <= rSq / 2.0) {
      z = Math.sqrt(rSq - xySq);
    } else {
      z = rSq / Math.sqrt(xySq);
    }
    return vec3.fromValues(-x, y, z);
  }
}

class InfiniteGridMenu {
  TARGET_FRAME_DURATION = 1000 / 60;
  SPHERE_RADIUS = 2;

  #time = 0;
  #deltaTime = 0;
  #deltaFrames = 0;
  #frames = 0;

  camera = {
    matrix: mat4.create(),
    near: 0.1,
    far: 40,
    fov: Math.PI / 4,
    aspect: 1,
    position: vec3.fromValues(0, 0, 3),
    up: vec3.fromValues(0, 1, 0),
    matrices: {
      view: mat4.create(),
      projection: mat4.create(),
      inversProjection: mat4.create()
    }
  };

  nearestVertexIndex = null;
  smoothRotationVelocity = 0;
  scaleFactor = 1.0;
  movementActive = false;

  constructor(canvas, items, onActiveItemChange, onMovementChange, onInit = null, scale = 1.0) {
    this.canvas = canvas;
    this.items = items || [];
    this.onActiveItemChange = onActiveItemChange || (() => {});
    this.onMovementChange = onMovementChange || (() => {});
    this.scaleFactor = scale;
    this.camera.position[2] = 3 * scale;
    this.#init(onInit);
  }

  resize() {
    this.viewportSize = vec2.set(this.viewportSize || vec2.create(), this.canvas.clientWidth, this.canvas.clientHeight);

    const gl = this.gl;
    const needsResize = resizeCanvasToDisplaySize(gl.canvas);
    if (needsResize) {
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    }

    this.#updateProjectionMatrix(gl);
  }

  run(time = 0) {
    this.#deltaTime = Math.min(32, time - this.#time);
    this.#time = time;
    this.#deltaFrames = this.#deltaTime / this.TARGET_FRAME_DURATION;
    this.#frames += this.#deltaFrames;

    this.#animate(this.#deltaTime);
    this.#render();

    requestAnimationFrame(t => this.run(t));
  }

  #init(onInit) {
    this.gl = this.canvas.getContext('webgl2', { antialias: true, alpha: false });
    const gl = this.gl;
    if (!gl) {
      throw new Error('No WebGL 2 context!');
    }

    this.viewportSize = vec2.fromValues(this.canvas.clientWidth, this.canvas.clientHeight);
    this.drawBufferSize = vec2.clone(this.viewportSize);

    this.discProgram = createProgram(gl, [discVertShaderSource, discFragShaderSource], null, {
      aModelPosition: 0,
      aModelNormal: 1,
      aModelUvs: 2,
      aInstanceMatrix: 3
    });

    this.discLocations = {
      aModelPosition: gl.getAttribLocation(this.discProgram, 'aModelPosition'),
      aModelUvs: gl.getAttribLocation(this.discProgram, 'aModelUvs'),
      aInstanceMatrix: gl.getAttribLocation(this.discProgram, 'aInstanceMatrix'),
      uWorldMatrix: gl.getUniformLocation(this.discProgram, 'uWorldMatrix'),
      uViewMatrix: gl.getUniformLocation(this.discProgram, 'uViewMatrix'),
      uProjectionMatrix: gl.getUniformLocation(this.discProgram, 'uProjectionMatrix'),
      uCameraPosition: gl.getUniformLocation(this.discProgram, 'uCameraPosition'),
      uScaleFactor: gl.getUniformLocation(this.discProgram, 'uScaleFactor'),
      uRotationAxisVelocity: gl.getUniformLocation(this.discProgram, 'uRotationAxisVelocity'),
      uTex: gl.getUniformLocation(this.discProgram, 'uTex'),
      uFrames: gl.getUniformLocation(this.discProgram, 'uFrames'),
      uItemCount: gl.getUniformLocation(this.discProgram, 'uItemCount'),
      uAtlasSize: gl.getUniformLocation(this.discProgram, 'uAtlasSize')
    };

    this.discGeo = new DiscGeometry(56, 1);
    this.discBuffers = this.discGeo.data;
    this.discVAO = makeVertexArray(
      gl,
      [
        [makeBuffer(gl, this.discBuffers.vertices, gl.STATIC_DRAW), this.discLocations.aModelPosition, 3],
        [makeBuffer(gl, this.discBuffers.uvs, gl.STATIC_DRAW), this.discLocations.aModelUvs, 2]
      ],
      this.discBuffers.indices
    );

    this.icoGeo = new IcosahedronGeometry();
    this.icoGeo.subdivide(1).spherize(this.SPHERE_RADIUS);
    this.instancePositions = this.icoGeo.vertices.map(v => v.position);
    this.DISC_INSTANCE_COUNT = this.icoGeo.vertices.length;
    this.#initDiscInstances(this.DISC_INSTANCE_COUNT);

    this.worldMatrix = mat4.create();
    this.#initTexture();

    this.control = new ArcballControl(this.canvas, deltaTime => this.#onControlUpdate(deltaTime));

    this.#updateCameraMatrix();
    this.#updateProjectionMatrix(gl);
    this.resize();

    if (onInit) onInit(this);
  }

  #initTexture() {
    const gl = this.gl;
    this.tex = createAndSetupTexture(gl, gl.LINEAR, gl.LINEAR, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE);

    const itemCount = Math.max(1, this.items.length);
    this.atlasSize = Math.ceil(Math.sqrt(itemCount));
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const cellSize = 512;

    canvas.width = this.atlasSize * cellSize;
    canvas.height = this.atlasSize * cellSize;

    Promise.all(
      this.items.map(
        item =>
          new Promise(resolve => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => resolve(img);
            img.src = item.image;
          })
      )
    ).then(images => {
      images.forEach((img, i) => {
        const x = (i % this.atlasSize) * cellSize;
        const y = Math.floor(i / this.atlasSize) * cellSize;
        ctx.drawImage(img, x, y, cellSize, cellSize);
      });

      gl.bindTexture(gl.TEXTURE_2D, this.tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
      gl.generateMipmap(gl.TEXTURE_2D);
    });
  }

  #initDiscInstances(count) {
    const gl = this.gl;
    this.discInstances = {
      matricesArray: new Float32Array(count * 16),
      matrices: [],
      buffer: gl.createBuffer()
    };
    for (let i = 0; i < count; ++i) {
      const instanceMatrixArray = new Float32Array(this.discInstances.matricesArray.buffer, i * 16 * 4, 16);
      instanceMatrixArray.set(mat4.create());
      this.discInstances.matrices.push(instanceMatrixArray);
    }
    gl.bindVertexArray(this.discVAO);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.discInstances.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.discInstances.matricesArray.byteLength, gl.DYNAMIC_DRAW);
    const mat4AttribSlotCount = 4;
    const bytesPerMatrix = 16 * 4;
    for (let j = 0; j < mat4AttribSlotCount; ++j) {
      const loc = this.discLocations.aInstanceMatrix + j;
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 4, gl.FLOAT, false, bytesPerMatrix, j * 4 * 4);
      gl.vertexAttribDivisor(loc, 1);
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindVertexArray(null);
  }

  #animate(deltaTime) {
    const gl = this.gl;
    this.control.update(deltaTime, this.TARGET_FRAME_DURATION);

    let positions = this.instancePositions.map(p => vec3.transformQuat(vec3.create(), p, this.control.orientation));
    const scale = 0.25;
    const SCALE_INTENSITY = 0.6;
    positions.forEach((p, ndx) => {
      const s = (Math.abs(p[2]) / this.SPHERE_RADIUS) * SCALE_INTENSITY + (1 - SCALE_INTENSITY);
      const finalScale = s * scale;
      const matrix = mat4.create();
      mat4.multiply(matrix, matrix, mat4.fromTranslation(mat4.create(), vec3.negate(vec3.create(), p)));
      mat4.multiply(matrix, matrix, mat4.targetTo(mat4.create(), [0, 0, 0], p, [0, 1, 0]));
      mat4.multiply(matrix, matrix, mat4.fromScaling(mat4.create(), [finalScale, finalScale, finalScale]));
      mat4.multiply(matrix, matrix, mat4.fromTranslation(mat4.create(), [0, 0, -this.SPHERE_RADIUS]));

      mat4.copy(this.discInstances.matrices[ndx], matrix);
    });

    gl.bindBuffer(gl.ARRAY_BUFFER, this.discInstances.buffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.discInstances.matricesArray);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    this.smoothRotationVelocity = this.control.rotationVelocity;
  }

  #render() {
    const gl = this.gl;
    gl.useProgram(this.discProgram);

    gl.enable(gl.CULL_FACE);
    gl.enable(gl.DEPTH_TEST);

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.uniformMatrix4fv(this.discLocations.uWorldMatrix, false, this.worldMatrix);
    gl.uniformMatrix4fv(this.discLocations.uViewMatrix, false, this.camera.matrices.view);
    gl.uniformMatrix4fv(this.discLocations.uProjectionMatrix, false, this.camera.matrices.projection);
    gl.uniform3f(
      this.discLocations.uCameraPosition,
      this.camera.position[0],
      this.camera.position[1],
      this.camera.position[2]
    );
    gl.uniform4f(
      this.discLocations.uRotationAxisVelocity,
      this.control.rotationAxis[0],
      this.control.rotationAxis[1],
      this.control.rotationAxis[2],
      this.smoothRotationVelocity * 1.1
    );

    gl.uniform1i(this.discLocations.uItemCount, this.items.length);
    gl.uniform1i(this.discLocations.uAtlasSize, this.atlasSize);

    gl.uniform1f(this.discLocations.uFrames, this.#frames);
    gl.uniform1f(this.discLocations.uScaleFactor, this.scaleFactor);
    gl.uniform1i(this.discLocations.uTex, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.tex);

    gl.bindVertexArray(this.discVAO);
    gl.drawElementsInstanced(
      gl.TRIANGLES,
      this.discBuffers.indices.length,
      gl.UNSIGNED_SHORT,
      0,
      this.DISC_INSTANCE_COUNT
    );
  }

  #updateCameraMatrix() {
    mat4.targetTo(this.camera.matrix, this.camera.position, [0, 0, 0], this.camera.up);
    mat4.invert(this.camera.matrices.view, this.camera.matrix);
  }

  #updateProjectionMatrix(gl) {
    this.camera.aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const height = this.SPHERE_RADIUS * 0.35;
    const distance = this.camera.position[2];
    if (this.camera.aspect > 1) {
      this.camera.fov = 2 * Math.atan(height / distance);
    } else {
      this.camera.fov = 2 * Math.atan(height / this.camera.aspect / distance);
    }
    mat4.perspective(
      this.camera.matrices.projection,
      this.camera.fov,
      this.camera.aspect,
      this.camera.near,
      this.camera.far
    );
    mat4.invert(this.camera.matrices.inversProjection, this.camera.matrices.projection);
  }

  #onControlUpdate(deltaTime) {
    const timeScale = deltaTime / this.TARGET_FRAME_DURATION + 0.0001;
    let damping = 5 / timeScale;
    let cameraTargetZ = 3 * this.scaleFactor;

    const isMoving = this.control.isPointerDown || Math.abs(this.smoothRotationVelocity) > 0.01;

    if (isMoving !== this.movementActive) {
      this.movementActive = isMoving;
      this.onMovementChange(isMoving);
    }

    if (!this.control.isPointerDown) {
      const nearestVertexIndex = this.#findNearestVertexIndex();
      const itemIndex = nearestVertexIndex % Math.max(1, this.items.length);
      this.onActiveItemChange(itemIndex);
      const snapDirection = vec3.normalize(vec3.create(), this.#getVertexWorldPosition(nearestVertexIndex));
      this.control.snapTargetDirection = snapDirection;
    } else {
      cameraTargetZ += this.control.rotationVelocity * 80 + 2.5;
      damping = 7 / timeScale;
    }

    this.camera.position[2] += (cameraTargetZ - this.camera.position[2]) / damping;
    this.#updateCameraMatrix();
  }

  #findNearestVertexIndex() {
    const n = this.control.snapDirection;
    const inversOrientation = quat.conjugate(quat.create(), this.control.orientation);
    const nt = vec3.transformQuat(vec3.create(), n, inversOrientation);

    let maxD = -1;
    let nearestVertexIndex;
    for (let i = 0; i < this.instancePositions.length; ++i) {
      const d = vec3.dot(nt, this.instancePositions[i]);
      if (d > maxD) {
        maxD = d;
        nearestVertexIndex = i;
      }
    }
    return nearestVertexIndex;
  }

  #getVertexWorldPosition(index) {
    const nearestVertexPos = this.instancePositions[index];
    return vec3.transformQuat(vec3.create(), nearestVertexPos, this.control.orientation);
  }
}

const defaultItems = [
  {
    image: 'https://picsum.photos/900/900?grayscale',
    link: 'https://google.com/',
    title: '',
    description: ''
  }
];

export default function InfiniteMenu({ items = [], scale = 1.0 }) {
  const canvasRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    let sketch;

    const handleActiveItem = index => {
      const itemIndex = index % items.length;
      setActiveItem(items[itemIndex]);
    };

    if (canvas) {
      sketch = new InfiniteGridMenu(
        canvas,
        items.length ? items : defaultItems,
        handleActiveItem,
        setIsMoving,
        sk => sk.run(),
        scale
      );
    }

    const handleResize = () => {
      if (sketch) {
        sketch.resize();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [items, scale]);

  const handleButtonClick = () => {
    if (!activeItem?.link) return;
    if (activeItem.link.startsWith('http')) {
      window.open(activeItem.link, '_blank');
    } else {
      console.log('Internal route:', activeItem.link);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <canvas id="infinite-grid-menu-canvas" ref={canvasRef} />

      {activeItem && (
        <>
          <h2 className={\`face-title \${isMoving ? 'inactive' : 'active'}\`}>{activeItem.title}</h2>

          <p className={\`face-description \${isMoving ? 'inactive' : 'active'}\`}> {activeItem.description}</p>

          <div onClick={handleButtonClick} className={\`action-button \${isMoving ? 'inactive' : 'active'}\`}>
            <p className="action-button-icon">&#x2197;</p>
          </div>
        </>
      )}
    </div>
  );
}
`,Et=`/* Note: this CSS is only an example, you can overlay whatever you want using the activeItem logic */

#infinite-grid-menu-canvas {
  cursor: grab;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  outline: none;
}

#infinite-grid-menu-canvas:active {
  cursor: grabbing;
}

.action-button {
  position: absolute;
  left: 50%;
  z-index: 10;
  width: 60px;
  height: 60px;
  display: grid;
  place-items: center;
  background: #5227ff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  border: 5px solid #000;
}

.face-title {
  user-select: none;
  position: absolute;
  font-weight: 900;
  font-size: 3rem;
  left: 1.6em;
  top: 50%;
}

.action-button-icon {
  user-select: none;
  position: relative;
  color: #fff;
  top: 2px;
  font-size: 26px;
}

.face-title {
  position: absolute;
  top: 50%;
  transform: translate(20%, -50%);
}

.face-title.active {
  opacity: 1;
  transform: translate(20%, -50%);
  pointer-events: auto;
  transition: 0.5s ease;
}

.face-title.inactive {
  pointer-events: none;
  opacity: 0;
  transition: 0.1s ease;
}

.face-description {
  user-select: none;
  position: absolute;
  max-width: 10ch;
  top: 50%;
  font-size: 1.2rem;
  right: 1%;
  transform: translate(0, -50%);
}

.face-description.active {
  opacity: 1;
  transform: translate(-90%, -50%);
  pointer-events: auto;
  transition: 0.5s ease;
}

.face-description.inactive {
  pointer-events: none;
  transform: translate(-60%, -50%);
  opacity: 0;
  transition: 0.1s ease;
}

.action-button {
  position: absolute;
  left: 50%;
}

.action-button.active {
  bottom: 3.8em;
  transform: translateX(-50%) scale(1);
  opacity: 1;
  pointer-events: auto;
  transition: 0.5s ease;
}

.action-button.inactive {
  bottom: -80px;
  transform: translateX(-50%) scale(0);
  opacity: 0;
  pointer-events: none;
  transition: 0.1s ease;
}

@media (max-width: 1500px) {
  .face-title,
  .face-description {
    display: none;
  }
}
`,St=`import { useEffect, useRef, useState } from 'react';
import { mat4, quat, vec2, vec3 } from 'gl-matrix';

const discVertShaderSource = \`#version 300 es

uniform mat4 uWorldMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform vec3 uCameraPosition;
uniform vec4 uRotationAxisVelocity;

in vec3 aModelPosition;
in vec3 aModelNormal;
in vec2 aModelUvs;
in mat4 aInstanceMatrix;

out vec2 vUvs;
out float vAlpha;
flat out int vInstanceId;

#define PI 3.141593

void main() {
    vec4 worldPosition = uWorldMatrix * aInstanceMatrix * vec4(aModelPosition, 1.);

    vec3 centerPos = (uWorldMatrix * aInstanceMatrix * vec4(0., 0., 0., 1.)).xyz;
    float radius = length(centerPos.xyz);

    if (gl_VertexID > 0) {
        vec3 rotationAxis = uRotationAxisVelocity.xyz;
        float rotationVelocity = min(.15, uRotationAxisVelocity.w * 15.);
        vec3 stretchDir = normalize(cross(centerPos, rotationAxis));
        vec3 relativeVertexPos = normalize(worldPosition.xyz - centerPos);
        float strength = dot(stretchDir, relativeVertexPos);
        float invAbsStrength = min(0., abs(strength) - 1.);
        strength = rotationVelocity * sign(strength) * abs(invAbsStrength * invAbsStrength * invAbsStrength + 1.);
        worldPosition.xyz += stretchDir * strength;
    }

    worldPosition.xyz = radius * normalize(worldPosition.xyz);

    gl_Position = uProjectionMatrix * uViewMatrix * worldPosition;

    vAlpha = smoothstep(0.5, 1., normalize(worldPosition.xyz).z) * .9 + .1;
    vUvs = aModelUvs;
    vInstanceId = gl_InstanceID;
}
\`;

const discFragShaderSource = \`#version 300 es
precision highp float;

uniform sampler2D uTex;
uniform int uItemCount;
uniform int uAtlasSize;

out vec4 outColor;

in vec2 vUvs;
in float vAlpha;
flat in int vInstanceId;

void main() {
    int itemIndex = vInstanceId % uItemCount;
    int cellsPerRow = uAtlasSize;
    int cellX = itemIndex % cellsPerRow;
    int cellY = itemIndex / cellsPerRow;
    vec2 cellSize = vec2(1.0) / vec2(float(cellsPerRow));
    vec2 cellOffset = vec2(float(cellX), float(cellY)) * cellSize;

    ivec2 texSize = textureSize(uTex, 0);
    float imageAspect = float(texSize.x) / float(texSize.y);
    float containerAspect = 1.0;
    
    float scale = max(imageAspect / containerAspect, 
                     containerAspect / imageAspect);
    
    vec2 st = vec2(vUvs.x, 1.0 - vUvs.y);
    st = (st - 0.5) * scale + 0.5;
    
    st = clamp(st, 0.0, 1.0);
    
    st = st * cellSize + cellOffset;
    
    outColor = texture(uTex, st);
    outColor.a *= vAlpha;
}
\`;

class Face {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

class Vertex {
  constructor(x, y, z) {
    this.position = vec3.fromValues(x, y, z);
    this.normal = vec3.create();
    this.uv = vec2.create();
  }
}

class Geometry {
  constructor() {
    this.vertices = [];
    this.faces = [];
  }

  addVertex(...args) {
    for (let i = 0; i < args.length; i += 3) {
      this.vertices.push(new Vertex(args[i], args[i + 1], args[i + 2]));
    }
    return this;
  }

  addFace(...args) {
    for (let i = 0; i < args.length; i += 3) {
      this.faces.push(new Face(args[i], args[i + 1], args[i + 2]));
    }
    return this;
  }

  get lastVertex() {
    return this.vertices[this.vertices.length - 1];
  }

  subdivide(divisions = 1) {
    const midPointCache = {};
    let f = this.faces;

    for (let div = 0; div < divisions; ++div) {
      const newFaces = new Array(f.length * 4);

      f.forEach((face, ndx) => {
        const mAB = this.getMidPoint(face.a, face.b, midPointCache);
        const mBC = this.getMidPoint(face.b, face.c, midPointCache);
        const mCA = this.getMidPoint(face.c, face.a, midPointCache);

        const i = ndx * 4;
        newFaces[i + 0] = new Face(face.a, mAB, mCA);
        newFaces[i + 1] = new Face(face.b, mBC, mAB);
        newFaces[i + 2] = new Face(face.c, mCA, mBC);
        newFaces[i + 3] = new Face(mAB, mBC, mCA);
      });

      f = newFaces;
    }

    this.faces = f;
    return this;
  }

  spherize(radius = 1) {
    this.vertices.forEach(vertex => {
      vec3.normalize(vertex.normal, vertex.position);
      vec3.scale(vertex.position, vertex.normal, radius);
    });
    return this;
  }

  get data() {
    return {
      vertices: this.vertexData,
      indices: this.indexData,
      normals: this.normalData,
      uvs: this.uvData
    };
  }

  get vertexData() {
    return new Float32Array(this.vertices.flatMap(v => Array.from(v.position)));
  }

  get normalData() {
    return new Float32Array(this.vertices.flatMap(v => Array.from(v.normal)));
  }

  get uvData() {
    return new Float32Array(this.vertices.flatMap(v => Array.from(v.uv)));
  }

  get indexData() {
    return new Uint16Array(this.faces.flatMap(f => [f.a, f.b, f.c]));
  }

  getMidPoint(ndxA, ndxB, cache) {
    const cacheKey = ndxA < ndxB ? \`k_\${ndxB}_\${ndxA}\` : \`k_\${ndxA}_\${ndxB}\`;
    if (Object.prototype.hasOwnProperty.call(cache, cacheKey)) {
      return cache[cacheKey];
    }
    const a = this.vertices[ndxA].position;
    const b = this.vertices[ndxB].position;
    const ndx = this.vertices.length;
    cache[cacheKey] = ndx;
    this.addVertex((a[0] + b[0]) * 0.5, (a[1] + b[1]) * 0.5, (a[2] + b[2]) * 0.5);
    return ndx;
  }
}

class IcosahedronGeometry extends Geometry {
  constructor() {
    super();
    const t = Math.sqrt(5) * 0.5 + 0.5;
    this.addVertex(
      -1,
      t,
      0,
      1,
      t,
      0,
      -1,
      -t,
      0,
      1,
      -t,
      0,
      0,
      -1,
      t,
      0,
      1,
      t,
      0,
      -1,
      -t,
      0,
      1,
      -t,
      t,
      0,
      -1,
      t,
      0,
      1,
      -t,
      0,
      -1,
      -t,
      0,
      1
    ).addFace(
      0,
      11,
      5,
      0,
      5,
      1,
      0,
      1,
      7,
      0,
      7,
      10,
      0,
      10,
      11,
      1,
      5,
      9,
      5,
      11,
      4,
      11,
      10,
      2,
      10,
      7,
      6,
      7,
      1,
      8,
      3,
      9,
      4,
      3,
      4,
      2,
      3,
      2,
      6,
      3,
      6,
      8,
      3,
      8,
      9,
      4,
      9,
      5,
      2,
      4,
      11,
      6,
      2,
      10,
      8,
      6,
      7,
      9,
      8,
      1
    );
  }
}

class DiscGeometry extends Geometry {
  constructor(steps = 4, radius = 1) {
    super();
    steps = Math.max(4, steps);

    const alpha = (2 * Math.PI) / steps;

    this.addVertex(0, 0, 0);
    this.lastVertex.uv[0] = 0.5;
    this.lastVertex.uv[1] = 0.5;

    for (let i = 0; i < steps; ++i) {
      const x = Math.cos(alpha * i);
      const y = Math.sin(alpha * i);
      this.addVertex(radius * x, radius * y, 0);
      this.lastVertex.uv[0] = x * 0.5 + 0.5;
      this.lastVertex.uv[1] = y * 0.5 + 0.5;

      if (i > 0) {
        this.addFace(0, i, i + 1);
      }
    }
    this.addFace(0, steps, 1);
  }
}

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

  if (success) {
    return shader;
  }

  console.error(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
  return null;
}

function createProgram(gl, shaderSources, transformFeedbackVaryings, attribLocations) {
  const program = gl.createProgram();

  [gl.VERTEX_SHADER, gl.FRAGMENT_SHADER].forEach((type, ndx) => {
    const shader = createShader(gl, type, shaderSources[ndx]);
    if (shader) gl.attachShader(program, shader);
  });

  if (transformFeedbackVaryings) {
    gl.transformFeedbackVaryings(program, transformFeedbackVaryings, gl.SEPARATE_ATTRIBS);
  }

  if (attribLocations) {
    for (const attrib in attribLocations) {
      gl.bindAttribLocation(program, attribLocations[attrib], attrib);
    }
  }

  gl.linkProgram(program);
  const success = gl.getProgramParameter(program, gl.LINK_STATUS);

  if (success) {
    return program;
  }

  console.error(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
  return null;
}

function makeVertexArray(gl, bufLocNumElmPairs, indices) {
  const va = gl.createVertexArray();
  gl.bindVertexArray(va);

  for (const [buffer, loc, numElem] of bufLocNumElmPairs) {
    if (loc === -1) continue;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, numElem, gl.FLOAT, false, 0, 0);
  }

  if (indices) {
    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
  }

  gl.bindVertexArray(null);
  return va;
}

function resizeCanvasToDisplaySize(canvas) {
  const dpr = Math.min(2, window.devicePixelRatio);
  const displayWidth = Math.round(canvas.clientWidth * dpr);
  const displayHeight = Math.round(canvas.clientHeight * dpr);
  const needResize = canvas.width !== displayWidth || canvas.height !== displayHeight;
  if (needResize) {
    canvas.width = displayWidth;
    canvas.height = displayHeight;
  }
  return needResize;
}

function makeBuffer(gl, sizeOrData, usage) {
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, sizeOrData, usage);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  return buf;
}

function createAndSetupTexture(gl, minFilter, magFilter, wrapS, wrapT) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
  return texture;
}

class ArcballControl {
  isPointerDown = false;
  orientation = quat.create();
  pointerRotation = quat.create();
  rotationVelocity = 0;
  rotationAxis = vec3.fromValues(1, 0, 0);
  snapDirection = vec3.fromValues(0, 0, -1);
  snapTargetDirection;
  EPSILON = 0.1;
  IDENTITY_QUAT = quat.create();

  constructor(canvas, updateCallback) {
    this.canvas = canvas;
    this.updateCallback = updateCallback || (() => null);

    this.pointerPos = vec2.create();
    this.previousPointerPos = vec2.create();
    this._rotationVelocity = 0;
    this._combinedQuat = quat.create();

    canvas.addEventListener('pointerdown', e => {
      vec2.set(this.pointerPos, e.clientX, e.clientY);
      vec2.copy(this.previousPointerPos, this.pointerPos);
      this.isPointerDown = true;
    });
    canvas.addEventListener('pointerup', () => {
      this.isPointerDown = false;
    });
    canvas.addEventListener('pointerleave', () => {
      this.isPointerDown = false;
    });
    canvas.addEventListener('pointermove', e => {
      if (this.isPointerDown) {
        vec2.set(this.pointerPos, e.clientX, e.clientY);
      }
    });

    canvas.style.touchAction = 'none';
  }

  update(deltaTime, targetFrameDuration = 16) {
    const timeScale = deltaTime / targetFrameDuration + 0.00001;
    let angleFactor = timeScale;
    let snapRotation = quat.create();

    if (this.isPointerDown) {
      const INTENSITY = 0.3 * timeScale;
      const ANGLE_AMPLIFICATION = 5 / timeScale;

      const midPointerPos = vec2.sub(vec2.create(), this.pointerPos, this.previousPointerPos);
      vec2.scale(midPointerPos, midPointerPos, INTENSITY);

      if (vec2.sqrLen(midPointerPos) > this.EPSILON) {
        vec2.add(midPointerPos, this.previousPointerPos, midPointerPos);

        const p = this.#project(midPointerPos);
        const q = this.#project(this.previousPointerPos);
        const a = vec3.normalize(vec3.create(), p);
        const b = vec3.normalize(vec3.create(), q);

        vec2.copy(this.previousPointerPos, midPointerPos);

        angleFactor *= ANGLE_AMPLIFICATION;

        this.quatFromVectors(a, b, this.pointerRotation, angleFactor);
      } else {
        quat.slerp(this.pointerRotation, this.pointerRotation, this.IDENTITY_QUAT, INTENSITY);
      }
    } else {
      const INTENSITY = 0.1 * timeScale;
      quat.slerp(this.pointerRotation, this.pointerRotation, this.IDENTITY_QUAT, INTENSITY);

      if (this.snapTargetDirection) {
        const SNAPPING_INTENSITY = 0.2;
        const a = this.snapTargetDirection;
        const b = this.snapDirection;
        const sqrDist = vec3.squaredDistance(a, b);
        const distanceFactor = Math.max(0.1, 1 - sqrDist * 10);
        angleFactor *= SNAPPING_INTENSITY * distanceFactor;
        this.quatFromVectors(a, b, snapRotation, angleFactor);
      }
    }

    const combinedQuat = quat.multiply(quat.create(), snapRotation, this.pointerRotation);
    this.orientation = quat.multiply(quat.create(), combinedQuat, this.orientation);
    quat.normalize(this.orientation, this.orientation);

    const RA_INTENSITY = 0.8 * timeScale;
    quat.slerp(this._combinedQuat, this._combinedQuat, combinedQuat, RA_INTENSITY);
    quat.normalize(this._combinedQuat, this._combinedQuat);

    const rad = Math.acos(this._combinedQuat[3]) * 2.0;
    const s = Math.sin(rad / 2.0);
    let rv = 0;
    if (s > 0.000001) {
      rv = rad / (2 * Math.PI);
      this.rotationAxis[0] = this._combinedQuat[0] / s;
      this.rotationAxis[1] = this._combinedQuat[1] / s;
      this.rotationAxis[2] = this._combinedQuat[2] / s;
    }

    const RV_INTENSITY = 0.5 * timeScale;
    this._rotationVelocity += (rv - this._rotationVelocity) * RV_INTENSITY;
    this.rotationVelocity = this._rotationVelocity / timeScale;

    this.updateCallback(deltaTime);
  }

  quatFromVectors(a, b, out, angleFactor = 1) {
    const axis = vec3.cross(vec3.create(), a, b);
    vec3.normalize(axis, axis);
    const d = Math.max(-1, Math.min(1, vec3.dot(a, b)));
    const angle = Math.acos(d) * angleFactor;
    quat.setAxisAngle(out, axis, angle);
    return { q: out, axis, angle };
  }

  #project(pos) {
    const r = 2;
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    const s = Math.max(w, h) - 1;

    const x = (2 * pos[0] - w - 1) / s;
    const y = (2 * pos[1] - h - 1) / s;
    let z = 0;
    const xySq = x * x + y * y;
    const rSq = r * r;

    if (xySq <= rSq / 2.0) {
      z = Math.sqrt(rSq - xySq);
    } else {
      z = rSq / Math.sqrt(xySq);
    }
    return vec3.fromValues(-x, y, z);
  }
}

class InfiniteGridMenu {
  TARGET_FRAME_DURATION = 1000 / 60;
  SPHERE_RADIUS = 2;

  #time = 0;
  #deltaTime = 0;
  #deltaFrames = 0;
  #frames = 0;

  camera = {
    matrix: mat4.create(),
    near: 0.1,
    far: 40,
    fov: Math.PI / 4,
    aspect: 1,
    position: vec3.fromValues(0, 0, 3),
    up: vec3.fromValues(0, 1, 0),
    matrices: {
      view: mat4.create(),
      projection: mat4.create(),
      inversProjection: mat4.create()
    }
  };

  nearestVertexIndex = null;
  smoothRotationVelocity = 0;
  scaleFactor = 1.0;
  movementActive = false;

  constructor(canvas, items, onActiveItemChange, onMovementChange, onInit = null, scale = 1.0) {
    this.canvas = canvas;
    this.items = items || [];
    this.onActiveItemChange = onActiveItemChange || (() => {});
    this.onMovementChange = onMovementChange || (() => {});
    this.scaleFactor = scale;
    this.camera.position[2] = 3 * scale;
    this.#init(onInit);
  }

  resize() {
    this.viewportSize = vec2.set(this.viewportSize || vec2.create(), this.canvas.clientWidth, this.canvas.clientHeight);

    const gl = this.gl;
    const needsResize = resizeCanvasToDisplaySize(gl.canvas);
    if (needsResize) {
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    }

    this.#updateProjectionMatrix(gl);
  }

  run(time = 0) {
    this.#deltaTime = Math.min(32, time - this.#time);
    this.#time = time;
    this.#deltaFrames = this.#deltaTime / this.TARGET_FRAME_DURATION;
    this.#frames += this.#deltaFrames;

    this.#animate(this.#deltaTime);
    this.#render();

    requestAnimationFrame(t => this.run(t));
  }

  #init(onInit) {
    this.gl = this.canvas.getContext('webgl2', { antialias: true, alpha: false });
    const gl = this.gl;
    if (!gl) {
      throw new Error('No WebGL 2 context!');
    }

    this.viewportSize = vec2.fromValues(this.canvas.clientWidth, this.canvas.clientHeight);
    this.drawBufferSize = vec2.clone(this.viewportSize);

    this.discProgram = createProgram(gl, [discVertShaderSource, discFragShaderSource], null, {
      aModelPosition: 0,
      aModelNormal: 1,
      aModelUvs: 2,
      aInstanceMatrix: 3
    });

    this.discLocations = {
      aModelPosition: gl.getAttribLocation(this.discProgram, 'aModelPosition'),
      aModelUvs: gl.getAttribLocation(this.discProgram, 'aModelUvs'),
      aInstanceMatrix: gl.getAttribLocation(this.discProgram, 'aInstanceMatrix'),
      uWorldMatrix: gl.getUniformLocation(this.discProgram, 'uWorldMatrix'),
      uViewMatrix: gl.getUniformLocation(this.discProgram, 'uViewMatrix'),
      uProjectionMatrix: gl.getUniformLocation(this.discProgram, 'uProjectionMatrix'),
      uCameraPosition: gl.getUniformLocation(this.discProgram, 'uCameraPosition'),
      uScaleFactor: gl.getUniformLocation(this.discProgram, 'uScaleFactor'),
      uRotationAxisVelocity: gl.getUniformLocation(this.discProgram, 'uRotationAxisVelocity'),
      uTex: gl.getUniformLocation(this.discProgram, 'uTex'),
      uFrames: gl.getUniformLocation(this.discProgram, 'uFrames'),
      uItemCount: gl.getUniformLocation(this.discProgram, 'uItemCount'),
      uAtlasSize: gl.getUniformLocation(this.discProgram, 'uAtlasSize')
    };

    this.discGeo = new DiscGeometry(56, 1);
    this.discBuffers = this.discGeo.data;
    this.discVAO = makeVertexArray(
      gl,
      [
        [makeBuffer(gl, this.discBuffers.vertices, gl.STATIC_DRAW), this.discLocations.aModelPosition, 3],
        [makeBuffer(gl, this.discBuffers.uvs, gl.STATIC_DRAW), this.discLocations.aModelUvs, 2]
      ],
      this.discBuffers.indices
    );

    this.icoGeo = new IcosahedronGeometry();
    this.icoGeo.subdivide(1).spherize(this.SPHERE_RADIUS);
    this.instancePositions = this.icoGeo.vertices.map(v => v.position);
    this.DISC_INSTANCE_COUNT = this.icoGeo.vertices.length;
    this.#initDiscInstances(this.DISC_INSTANCE_COUNT);

    this.worldMatrix = mat4.create();
    this.#initTexture();

    this.control = new ArcballControl(this.canvas, deltaTime => this.#onControlUpdate(deltaTime));

    this.#updateCameraMatrix();
    this.#updateProjectionMatrix(gl);
    this.resize();

    if (onInit) onInit(this);
  }

  #initTexture() {
    const gl = this.gl;
    this.tex = createAndSetupTexture(gl, gl.LINEAR, gl.LINEAR, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE);

    const itemCount = Math.max(1, this.items.length);
    this.atlasSize = Math.ceil(Math.sqrt(itemCount));
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const cellSize = 512;

    canvas.width = this.atlasSize * cellSize;
    canvas.height = this.atlasSize * cellSize;

    Promise.all(
      this.items.map(
        item =>
          new Promise(resolve => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => resolve(img);
            img.src = item.image;
          })
      )
    ).then(images => {
      images.forEach((img, i) => {
        const x = (i % this.atlasSize) * cellSize;
        const y = Math.floor(i / this.atlasSize) * cellSize;
        ctx.drawImage(img, x, y, cellSize, cellSize);
      });

      gl.bindTexture(gl.TEXTURE_2D, this.tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
      gl.generateMipmap(gl.TEXTURE_2D);
    });
  }

  #initDiscInstances(count) {
    const gl = this.gl;
    this.discInstances = {
      matricesArray: new Float32Array(count * 16),
      matrices: [],
      buffer: gl.createBuffer()
    };
    for (let i = 0; i < count; ++i) {
      const instanceMatrixArray = new Float32Array(this.discInstances.matricesArray.buffer, i * 16 * 4, 16);
      instanceMatrixArray.set(mat4.create());
      this.discInstances.matrices.push(instanceMatrixArray);
    }
    gl.bindVertexArray(this.discVAO);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.discInstances.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.discInstances.matricesArray.byteLength, gl.DYNAMIC_DRAW);
    const mat4AttribSlotCount = 4;
    const bytesPerMatrix = 16 * 4;
    for (let j = 0; j < mat4AttribSlotCount; ++j) {
      const loc = this.discLocations.aInstanceMatrix + j;
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 4, gl.FLOAT, false, bytesPerMatrix, j * 4 * 4);
      gl.vertexAttribDivisor(loc, 1);
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindVertexArray(null);
  }

  #animate(deltaTime) {
    const gl = this.gl;
    this.control.update(deltaTime, this.TARGET_FRAME_DURATION);

    let positions = this.instancePositions.map(p => vec3.transformQuat(vec3.create(), p, this.control.orientation));
    const scale = 0.25;
    const SCALE_INTENSITY = 0.6;
    positions.forEach((p, ndx) => {
      const s = (Math.abs(p[2]) / this.SPHERE_RADIUS) * SCALE_INTENSITY + (1 - SCALE_INTENSITY);
      const finalScale = s * scale;
      const matrix = mat4.create();
      mat4.multiply(matrix, matrix, mat4.fromTranslation(mat4.create(), vec3.negate(vec3.create(), p)));
      mat4.multiply(matrix, matrix, mat4.targetTo(mat4.create(), [0, 0, 0], p, [0, 1, 0]));
      mat4.multiply(matrix, matrix, mat4.fromScaling(mat4.create(), [finalScale, finalScale, finalScale]));
      mat4.multiply(matrix, matrix, mat4.fromTranslation(mat4.create(), [0, 0, -this.SPHERE_RADIUS]));

      mat4.copy(this.discInstances.matrices[ndx], matrix);
    });

    gl.bindBuffer(gl.ARRAY_BUFFER, this.discInstances.buffer);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.discInstances.matricesArray);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    this.smoothRotationVelocity = this.control.rotationVelocity;
  }

  #render() {
    const gl = this.gl;
    gl.useProgram(this.discProgram);

    gl.enable(gl.CULL_FACE);
    gl.enable(gl.DEPTH_TEST);

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.uniformMatrix4fv(this.discLocations.uWorldMatrix, false, this.worldMatrix);
    gl.uniformMatrix4fv(this.discLocations.uViewMatrix, false, this.camera.matrices.view);
    gl.uniformMatrix4fv(this.discLocations.uProjectionMatrix, false, this.camera.matrices.projection);
    gl.uniform3f(
      this.discLocations.uCameraPosition,
      this.camera.position[0],
      this.camera.position[1],
      this.camera.position[2]
    );
    gl.uniform4f(
      this.discLocations.uRotationAxisVelocity,
      this.control.rotationAxis[0],
      this.control.rotationAxis[1],
      this.control.rotationAxis[2],
      this.smoothRotationVelocity * 1.1
    );

    gl.uniform1i(this.discLocations.uItemCount, this.items.length);
    gl.uniform1i(this.discLocations.uAtlasSize, this.atlasSize);

    gl.uniform1f(this.discLocations.uFrames, this.#frames);
    gl.uniform1f(this.discLocations.uScaleFactor, this.scaleFactor);
    gl.uniform1i(this.discLocations.uTex, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.tex);

    gl.bindVertexArray(this.discVAO);
    gl.drawElementsInstanced(
      gl.TRIANGLES,
      this.discBuffers.indices.length,
      gl.UNSIGNED_SHORT,
      0,
      this.DISC_INSTANCE_COUNT
    );
  }

  #updateCameraMatrix() {
    mat4.targetTo(this.camera.matrix, this.camera.position, [0, 0, 0], this.camera.up);
    mat4.invert(this.camera.matrices.view, this.camera.matrix);
  }

  #updateProjectionMatrix(gl) {
    this.camera.aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const height = this.SPHERE_RADIUS * 0.35;
    const distance = this.camera.position[2];
    if (this.camera.aspect > 1) {
      this.camera.fov = 2 * Math.atan(height / distance);
    } else {
      this.camera.fov = 2 * Math.atan(height / this.camera.aspect / distance);
    }
    mat4.perspective(
      this.camera.matrices.projection,
      this.camera.fov,
      this.camera.aspect,
      this.camera.near,
      this.camera.far
    );
    mat4.invert(this.camera.matrices.inversProjection, this.camera.matrices.projection);
  }

  #onControlUpdate(deltaTime) {
    const timeScale = deltaTime / this.TARGET_FRAME_DURATION + 0.0001;
    let damping = 5 / timeScale;
    let cameraTargetZ = 3 * this.scaleFactor;

    const isMoving = this.control.isPointerDown || Math.abs(this.smoothRotationVelocity) > 0.01;

    if (isMoving !== this.movementActive) {
      this.movementActive = isMoving;
      this.onMovementChange(isMoving);
    }

    if (!this.control.isPointerDown) {
      const nearestVertexIndex = this.#findNearestVertexIndex();
      const itemIndex = nearestVertexIndex % Math.max(1, this.items.length);
      this.onActiveItemChange(itemIndex);
      const snapDirection = vec3.normalize(vec3.create(), this.#getVertexWorldPosition(nearestVertexIndex));
      this.control.snapTargetDirection = snapDirection;
    } else {
      cameraTargetZ += this.control.rotationVelocity * 80 + 2.5;
      damping = 7 / timeScale;
    }

    this.camera.position[2] += (cameraTargetZ - this.camera.position[2]) / damping;
    this.#updateCameraMatrix();
  }

  #findNearestVertexIndex() {
    const n = this.control.snapDirection;
    const inversOrientation = quat.conjugate(quat.create(), this.control.orientation);
    const nt = vec3.transformQuat(vec3.create(), n, inversOrientation);

    let maxD = -1;
    let nearestVertexIndex;
    for (let i = 0; i < this.instancePositions.length; ++i) {
      const d = vec3.dot(nt, this.instancePositions[i]);
      if (d > maxD) {
        maxD = d;
        nearestVertexIndex = i;
      }
    }
    return nearestVertexIndex;
  }

  #getVertexWorldPosition(index) {
    const nearestVertexPos = this.instancePositions[index];
    return vec3.transformQuat(vec3.create(), nearestVertexPos, this.control.orientation);
  }
}

const defaultItems = [
  {
    image: 'https://picsum.photos/900/900?grayscale',
    link: 'https://google.com/',
    title: '',
    description: ''
  }
];

export default function InfiniteMenu({ items = [], scale = 1.0 }) {
  const canvasRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    let sketch;

    const handleActiveItem = index => {
      const itemIndex = index % items.length;
      setActiveItem(items[itemIndex]);
    };

    if (canvas) {
      sketch = new InfiniteGridMenu(
        canvas,
        items.length ? items : defaultItems,
        handleActiveItem,
        setIsMoving,
        sk => sk.run(),
        scale
      );
    }

    const handleResize = () => {
      if (sketch) {
        sketch.resize();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [items, scale]);

  const handleButtonClick = () => {
    if (!activeItem?.link) return;
    if (activeItem.link.startsWith('http')) {
      window.open(activeItem.link, '_blank');
    } else {
      console.log('Internal route:', activeItem.link);
    }
  };

  return (
    <div className="relative w-full h-full">
      <canvas
        id="infinite-grid-menu-canvas"
        ref={canvasRef}
        className="cursor-grab w-full h-full overflow-hidden relative outline-none active:cursor-grabbing"
      />

      {activeItem && (
        <>
          <h2
            className={\`
          select-none
          absolute
          font-black
          [font-size:4rem]
          left-[1.6em]
          top-1/2
          transform
          translate-x-[20%]
          -translate-y-1/2
          transition-all
          ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
          \${
            isMoving
              ? 'opacity-0 pointer-events-none duration-[100ms]'
              : 'opacity-100 pointer-events-auto duration-[500ms]'
          }
        \`}
          >
            {activeItem.title}
          </h2>

          <p
            className={\`
          select-none
          absolute
          max-w-[10ch]
          text-[1.5rem]
          top-1/2
          right-[1%]
          transition-all
          ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
          \${
            isMoving
              ? 'opacity-0 pointer-events-none duration-[100ms] translate-x-[-60%] -translate-y-1/2'
              : 'opacity-100 pointer-events-auto duration-[500ms] translate-x-[-90%] -translate-y-1/2'
          }
        \`}
          >
            {activeItem.description}
          </p>

          <div
            onClick={handleButtonClick}
            className={\`
          absolute
          left-1/2
          z-10
          w-[60px]
          h-[60px]
          grid
          place-items-center
          bg-[#00ffff]
          border-[5px]
          border-black
          rounded-full
          cursor-pointer
          transition-all
          ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
          \${
            isMoving
              ? 'bottom-[-80px] opacity-0 pointer-events-none duration-[100ms] scale-0 -translate-x-1/2'
              : 'bottom-[3.8em] opacity-100 pointer-events-auto duration-[500ms] scale-100 -translate-x-1/2'
          }
        \`}
          >
            <p className="select-none relative text-[#060010] top-[2px] text-[26px]">&#x2197;</p>
          </div>
        </>
      )}
    </div>
  );
}
`,yt=`import { FC, useRef, useState, useEffect, MutableRefObject } from 'react';
import { mat4, quat, vec2, vec3 } from 'gl-matrix';
import './InfiniteMenu.css';

const discVertShaderSource = \`#version 300 es

uniform mat4 uWorldMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform vec3 uCameraPosition;
uniform vec4 uRotationAxisVelocity;

in vec3 aModelPosition;
in vec3 aModelNormal;
in vec2 aModelUvs;
in mat4 aInstanceMatrix;

out vec2 vUvs;
out float vAlpha;
flat out int vInstanceId;

#define PI 3.141593

void main() {
    vec4 worldPosition = uWorldMatrix * aInstanceMatrix * vec4(aModelPosition, 1.);

    vec3 centerPos = (uWorldMatrix * aInstanceMatrix * vec4(0., 0., 0., 1.)).xyz;
    float radius = length(centerPos.xyz);

    if (gl_VertexID > 0) {
        vec3 rotationAxis = uRotationAxisVelocity.xyz;
        float rotationVelocity = min(.15, uRotationAxisVelocity.w * 15.);
        vec3 stretchDir = normalize(cross(centerPos, rotationAxis));
        vec3 relativeVertexPos = normalize(worldPosition.xyz - centerPos);
        float strength = dot(stretchDir, relativeVertexPos);
        float invAbsStrength = min(0., abs(strength) - 1.);
        strength = rotationVelocity * sign(strength) * abs(invAbsStrength * invAbsStrength * invAbsStrength + 1.);
        worldPosition.xyz += stretchDir * strength;
    }

    worldPosition.xyz = radius * normalize(worldPosition.xyz);

    gl_Position = uProjectionMatrix * uViewMatrix * worldPosition;

    vAlpha = smoothstep(0.5, 1., normalize(worldPosition.xyz).z) * .9 + .1;
    vUvs = aModelUvs;
    vInstanceId = gl_InstanceID;
}
\`;

const discFragShaderSource = \`#version 300 es
precision highp float;

uniform sampler2D uTex;
uniform int uItemCount;
uniform int uAtlasSize;

out vec4 outColor;

in vec2 vUvs;
in float vAlpha;
flat in int vInstanceId;

void main() {
    int itemIndex = vInstanceId % uItemCount;
    int cellsPerRow = uAtlasSize;
    int cellX = itemIndex % cellsPerRow;
    int cellY = itemIndex / cellsPerRow;
    vec2 cellSize = vec2(1.0) / vec2(float(cellsPerRow));
    vec2 cellOffset = vec2(float(cellX), float(cellY)) * cellSize;

    ivec2 texSize = textureSize(uTex, 0);
    float imageAspect = float(texSize.x) / float(texSize.y);
    float containerAspect = 1.0;
    
    float scale = max(imageAspect / containerAspect, 
                     containerAspect / imageAspect);
    
    vec2 st = vec2(vUvs.x, 1.0 - vUvs.y);
    st = (st - 0.5) * scale + 0.5;
    
    st = clamp(st, 0.0, 1.0);
    
    st = st * cellSize + cellOffset;
    
    outColor = texture(uTex, st);
    outColor.a *= vAlpha;
}
\`;

class Face {
  public a: number;
  public b: number;
  public c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

class Vertex {
  public position: vec3;
  public normal: vec3;
  public uv: vec2;

  constructor(x: number, y: number, z: number) {
    this.position = vec3.fromValues(x, y, z);
    this.normal = vec3.create();
    this.uv = vec2.create();
  }
}

class Geometry {
  public vertices: Vertex[];
  public faces: Face[];

  constructor() {
    this.vertices = [];
    this.faces = [];
  }

  public addVertex(...args: number[]): this {
    for (let i = 0; i < args.length; i += 3) {
      this.vertices.push(new Vertex(args[i], args[i + 1], args[i + 2]));
    }
    return this;
  }

  public addFace(...args: number[]): this {
    for (let i = 0; i < args.length; i += 3) {
      this.faces.push(new Face(args[i], args[i + 1], args[i + 2]));
    }
    return this;
  }

  public get lastVertex(): Vertex {
    return this.vertices[this.vertices.length - 1];
  }

  public subdivide(divisions = 1): this {
    const midPointCache: Record<string, number> = {};
    let f = this.faces;

    for (let div = 0; div < divisions; ++div) {
      const newFaces = new Array<Face>(f.length * 4);

      f.forEach((face, ndx) => {
        const mAB = this.getMidPoint(face.a, face.b, midPointCache);
        const mBC = this.getMidPoint(face.b, face.c, midPointCache);
        const mCA = this.getMidPoint(face.c, face.a, midPointCache);

        const i = ndx * 4;
        newFaces[i + 0] = new Face(face.a, mAB, mCA);
        newFaces[i + 1] = new Face(face.b, mBC, mAB);
        newFaces[i + 2] = new Face(face.c, mCA, mBC);
        newFaces[i + 3] = new Face(mAB, mBC, mCA);
      });

      f = newFaces;
    }

    this.faces = f;
    return this;
  }

  public spherize(radius = 1): this {
    this.vertices.forEach(vertex => {
      vec3.normalize(vertex.normal, vertex.position);
      vec3.scale(vertex.position, vertex.normal, radius);
    });
    return this;
  }

  public get data(): {
    vertices: Float32Array;
    indices: Uint16Array;
    normals: Float32Array;
    uvs: Float32Array;
  } {
    return {
      vertices: this.vertexData,
      indices: this.indexData,
      normals: this.normalData,
      uvs: this.uvData
    };
  }

  public get vertexData(): Float32Array {
    return new Float32Array(this.vertices.flatMap(v => Array.from(v.position)));
  }

  public get normalData(): Float32Array {
    return new Float32Array(this.vertices.flatMap(v => Array.from(v.normal)));
  }

  public get uvData(): Float32Array {
    return new Float32Array(this.vertices.flatMap(v => Array.from(v.uv)));
  }

  public get indexData(): Uint16Array {
    return new Uint16Array(this.faces.flatMap(f => [f.a, f.b, f.c]));
  }

  public getMidPoint(ndxA: number, ndxB: number, cache: Record<string, number>): number {
    const cacheKey = ndxA < ndxB ? \`k_\${ndxB}_\${ndxA}\` : \`k_\${ndxA}_\${ndxB}\`;
    if (Object.prototype.hasOwnProperty.call(cache, cacheKey)) {
      return cache[cacheKey];
    }
    const a = this.vertices[ndxA].position;
    const b = this.vertices[ndxB].position;
    const ndx = this.vertices.length;
    cache[cacheKey] = ndx;
    this.addVertex((a[0] + b[0]) * 0.5, (a[1] + b[1]) * 0.5, (a[2] + b[2]) * 0.5);
    return ndx;
  }
}

class IcosahedronGeometry extends Geometry {
  constructor() {
    super();
    const t = Math.sqrt(5) * 0.5 + 0.5;
    this.addVertex(
      -1,
      t,
      0,
      1,
      t,
      0,
      -1,
      -t,
      0,
      1,
      -t,
      0,
      0,
      -1,
      t,
      0,
      1,
      t,
      0,
      -1,
      -t,
      0,
      1,
      -t,
      t,
      0,
      -1,
      t,
      0,
      1,
      -t,
      0,
      -1,
      -t,
      0,
      1
    ).addFace(
      0,
      11,
      5,
      0,
      5,
      1,
      0,
      1,
      7,
      0,
      7,
      10,
      0,
      10,
      11,
      1,
      5,
      9,
      5,
      11,
      4,
      11,
      10,
      2,
      10,
      7,
      6,
      7,
      1,
      8,
      3,
      9,
      4,
      3,
      4,
      2,
      3,
      2,
      6,
      3,
      6,
      8,
      3,
      8,
      9,
      4,
      9,
      5,
      2,
      4,
      11,
      6,
      2,
      10,
      8,
      6,
      7,
      9,
      8,
      1
    );
  }
}

class DiscGeometry extends Geometry {
  constructor(steps = 4, radius = 1) {
    super();
    const safeSteps = Math.max(4, steps);
    const alpha = (2 * Math.PI) / safeSteps;

    this.addVertex(0, 0, 0);
    this.lastVertex.uv[0] = 0.5;
    this.lastVertex.uv[1] = 0.5;

    for (let i = 0; i < safeSteps; ++i) {
      const x = Math.cos(alpha * i);
      const y = Math.sin(alpha * i);
      this.addVertex(radius * x, radius * y, 0);
      this.lastVertex.uv[0] = x * 0.5 + 0.5;
      this.lastVertex.uv[1] = y * 0.5 + 0.5;

      if (i > 0) {
        this.addFace(0, i, i + 1);
      }
    }
    this.addFace(0, safeSteps, 1);
  }
}

function createShader(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

  if (success) {
    return shader;
  }

  console.error(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
  return null;
}

function createProgram(
  gl: WebGL2RenderingContext,
  shaderSources: [string, string],
  transformFeedbackVaryings?: string[] | null,
  attribLocations?: Record<string, number>
): WebGLProgram | null {
  const program = gl.createProgram();
  if (!program) return null;

  [gl.VERTEX_SHADER, gl.FRAGMENT_SHADER].forEach((type, ndx) => {
    const shader = createShader(gl, type, shaderSources[ndx]);
    if (shader) {
      gl.attachShader(program, shader);
    }
  });

  if (transformFeedbackVaryings) {
    gl.transformFeedbackVaryings(program, transformFeedbackVaryings, gl.SEPARATE_ATTRIBS);
  }

  if (attribLocations) {
    for (const attrib in attribLocations) {
      if (Object.prototype.hasOwnProperty.call(attribLocations, attrib)) {
        gl.bindAttribLocation(program, attribLocations[attrib], attrib);
      }
    }
  }

  gl.linkProgram(program);
  const success = gl.getProgramParameter(program, gl.LINK_STATUS);

  if (success) {
    return program;
  }

  console.error(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
  return null;
}

function makeVertexArray(
  gl: WebGL2RenderingContext,
  bufLocNumElmPairs: Array<[WebGLBuffer, number, number]>,
  indices?: Uint16Array
): WebGLVertexArrayObject | null {
  const va = gl.createVertexArray();
  if (!va) return null;

  gl.bindVertexArray(va);

  for (const [buffer, loc, numElem] of bufLocNumElmPairs) {
    if (loc === -1) continue;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, numElem, gl.FLOAT, false, 0, 0);
  }

  if (indices) {
    const indexBuffer = gl.createBuffer();
    if (indexBuffer) {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
    }
  }

  gl.bindVertexArray(null);
  return va;
}

function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement): boolean {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const displayWidth = Math.round(canvas.clientWidth * dpr);
  const displayHeight = Math.round(canvas.clientHeight * dpr);
  const needResize = canvas.width !== displayWidth || canvas.height !== displayHeight;
  if (needResize) {
    canvas.width = displayWidth;
    canvas.height = displayHeight;
  }
  return needResize;
}

function makeBuffer(gl: WebGL2RenderingContext, sizeOrData: number | ArrayBufferView, usage: number): WebGLBuffer {
  const buf = gl.createBuffer();
  if (!buf) {
    throw new Error('Failed to create WebGL buffer.');
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);

  if (typeof sizeOrData === 'number') {
    gl.bufferData(gl.ARRAY_BUFFER, sizeOrData, usage);
  } else {
    gl.bufferData(gl.ARRAY_BUFFER, sizeOrData, usage);
  }

  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  return buf;
}

function createAndSetupTexture(
  gl: WebGL2RenderingContext,
  minFilter: number,
  magFilter: number,
  wrapS: number,
  wrapT: number
): WebGLTexture {
  const texture = gl.createTexture();
  if (!texture) {
    throw new Error('Failed to create WebGL texture.');
  }
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
  return texture;
}

type UpdateCallback = (deltaTime: number) => void;

class ArcballControl {
  private canvas: HTMLCanvasElement;
  private updateCallback: UpdateCallback;

  public isPointerDown = false;
  public orientation = quat.create();
  public pointerRotation = quat.create();
  public rotationVelocity = 0;
  public rotationAxis = vec3.fromValues(1, 0, 0);

  public snapDirection = vec3.fromValues(0, 0, -1);
  public snapTargetDirection: vec3 | null = null;

  private pointerPos = vec2.create();
  private previousPointerPos = vec2.create();
  private _rotationVelocity = 0;
  private _combinedQuat = quat.create();

  private readonly EPSILON = 0.1;
  private readonly IDENTITY_QUAT = quat.create();

  constructor(canvas: HTMLCanvasElement, updateCallback?: UpdateCallback) {
    this.canvas = canvas;
    this.updateCallback = updateCallback || (() => undefined);

    canvas.addEventListener('pointerdown', (e: PointerEvent) => {
      vec2.set(this.pointerPos, e.clientX, e.clientY);
      vec2.copy(this.previousPointerPos, this.pointerPos);
      this.isPointerDown = true;
    });
    canvas.addEventListener('pointerup', () => {
      this.isPointerDown = false;
    });
    canvas.addEventListener('pointerleave', () => {
      this.isPointerDown = false;
    });
    canvas.addEventListener('pointermove', (e: PointerEvent) => {
      if (this.isPointerDown) {
        vec2.set(this.pointerPos, e.clientX, e.clientY);
      }
    });

    canvas.style.touchAction = 'none';
  }

  public update(deltaTime: number, targetFrameDuration = 16): void {
    const timeScale = deltaTime / targetFrameDuration + 0.00001;
    let angleFactor = timeScale;
    const snapRotation = quat.create();

    if (this.isPointerDown) {
      const INTENSITY = 0.3 * timeScale;
      const ANGLE_AMPLIFICATION = 5 / timeScale;

      const midPointerPos = vec2.sub(vec2.create(), this.pointerPos, this.previousPointerPos);
      vec2.scale(midPointerPos, midPointerPos, INTENSITY);

      if (vec2.sqrLen(midPointerPos) > this.EPSILON) {
        vec2.add(midPointerPos, this.previousPointerPos, midPointerPos);

        const p = this.project(midPointerPos);
        const q = this.project(this.previousPointerPos);
        const a = vec3.normalize(vec3.create(), p);
        const b = vec3.normalize(vec3.create(), q);

        vec2.copy(this.previousPointerPos, midPointerPos);

        angleFactor *= ANGLE_AMPLIFICATION;

        this.quatFromVectors(a, b, this.pointerRotation, angleFactor);
      } else {
        quat.slerp(this.pointerRotation, this.pointerRotation, this.IDENTITY_QUAT, INTENSITY);
      }
    } else {
      const INTENSITY = 0.1 * timeScale;
      quat.slerp(this.pointerRotation, this.pointerRotation, this.IDENTITY_QUAT, INTENSITY);

      if (this.snapTargetDirection) {
        const SNAPPING_INTENSITY = 0.2;
        const a = this.snapTargetDirection;
        const b = this.snapDirection;
        const sqrDist = vec3.squaredDistance(a, b);
        const distanceFactor = Math.max(0.1, 1 - sqrDist * 10);
        angleFactor *= SNAPPING_INTENSITY * distanceFactor;
        this.quatFromVectors(a, b, snapRotation, angleFactor);
      }
    }

    const combinedQuat = quat.multiply(quat.create(), snapRotation, this.pointerRotation);
    this.orientation = quat.multiply(quat.create(), combinedQuat, this.orientation);
    quat.normalize(this.orientation, this.orientation);

    const RA_INTENSITY = 0.8 * timeScale;
    quat.slerp(this._combinedQuat, this._combinedQuat, combinedQuat, RA_INTENSITY);
    quat.normalize(this._combinedQuat, this._combinedQuat);

    const rad = Math.acos(this._combinedQuat[3]) * 2.0;
    const s = Math.sin(rad / 2.0);
    let rv = 0;
    if (s > 0.000001) {
      rv = rad / (2 * Math.PI);
      this.rotationAxis[0] = this._combinedQuat[0] / s;
      this.rotationAxis[1] = this._combinedQuat[1] / s;
      this.rotationAxis[2] = this._combinedQuat[2] / s;
    }

    const RV_INTENSITY = 0.5 * timeScale;
    this._rotationVelocity += (rv - this._rotationVelocity) * RV_INTENSITY;
    this.rotationVelocity = this._rotationVelocity / timeScale;

    this.updateCallback(deltaTime);
  }

  private quatFromVectors(a: vec3, b: vec3, out: quat, angleFactor = 1): { q: quat; axis: vec3; angle: number } {
    const axis = vec3.cross(vec3.create(), a, b);
    vec3.normalize(axis, axis);
    const d = Math.max(-1, Math.min(1, vec3.dot(a, b)));
    const angle = Math.acos(d) * angleFactor;
    quat.setAxisAngle(out, axis, angle);
    return { q: out, axis, angle };
  }

  private project(pos: vec2): vec3 {
    const r = 2;
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    const s = Math.max(w, h) - 1;

    const x = (2 * pos[0] - w - 1) / s;
    const y = (2 * pos[1] - h - 1) / s;
    let z = 0;
    const xySq = x * x + y * y;
    const rSq = r * r;

    if (xySq <= rSq / 2.0) {
      z = Math.sqrt(rSq - xySq);
    } else {
      z = rSq / Math.sqrt(xySq);
    }
    return vec3.fromValues(-x, y, z);
  }
}

interface MenuItem {
  image: string;
  link: string;
  title: string;
  description: string;
}

type ActiveItemCallback = (index: number) => void;
type MovementChangeCallback = (isMoving: boolean) => void;
type InitCallback = (instance: InfiniteGridMenu) => void;

interface Camera {
  matrix: mat4;
  near: number;
  far: number;
  fov: number;
  aspect: number;
  position: vec3;
  up: vec3;
  matrices: {
    view: mat4;
    projection: mat4;
    inversProjection: mat4;
  };
}

class InfiniteGridMenu {
  private gl: WebGL2RenderingContext | null = null;
  private discProgram: WebGLProgram | null = null;
  private discVAO: WebGLVertexArrayObject | null = null;
  private discBuffers!: {
    vertices: Float32Array;
    indices: Uint16Array;
    normals: Float32Array;
    uvs: Float32Array;
  };
  private icoGeo!: IcosahedronGeometry;
  private discGeo!: DiscGeometry;
  private worldMatrix = mat4.create();
  private tex: WebGLTexture | null = null;
  private control!: ArcballControl;

  private discLocations!: {
    aModelPosition: number;
    aModelUvs: number;
    aInstanceMatrix: number;
    uWorldMatrix: WebGLUniformLocation | null;
    uViewMatrix: WebGLUniformLocation | null;
    uProjectionMatrix: WebGLUniformLocation | null;
    uCameraPosition: WebGLUniformLocation | null;
    uScaleFactor: WebGLUniformLocation | null;
    uRotationAxisVelocity: WebGLUniformLocation | null;
    uTex: WebGLUniformLocation | null;
    uFrames: WebGLUniformLocation | null;
    uItemCount: WebGLUniformLocation | null;
    uAtlasSize: WebGLUniformLocation | null;
  };

  private viewportSize = vec2.create();
  private drawBufferSize = vec2.create();

  private discInstances!: {
    matricesArray: Float32Array;
    matrices: Float32Array[];
    buffer: WebGLBuffer | null;
  };

  private instancePositions: vec3[] = [];
  private DISC_INSTANCE_COUNT = 0;
  private atlasSize = 1;

  private _time = 0;
  private _deltaTime = 0;
  private _deltaFrames = 0;
  private _frames = 0;

  private movementActive = false;

  private TARGET_FRAME_DURATION = 1000 / 60;
  private SPHERE_RADIUS = 2;

  public camera: Camera = {
    matrix: mat4.create(),
    near: 0.1,
    far: 40,
    fov: Math.PI / 4,
    aspect: 1,
    position: vec3.fromValues(0, 0, 3),
    up: vec3.fromValues(0, 1, 0),
    matrices: {
      view: mat4.create(),
      projection: mat4.create(),
      inversProjection: mat4.create()
    }
  };

  public smoothRotationVelocity = 0;
  public scaleFactor = 1.0;

  constructor(
    private canvas: HTMLCanvasElement,
    private items: MenuItem[],
    private onActiveItemChange: ActiveItemCallback,
    private onMovementChange: MovementChangeCallback,
    onInit?: InitCallback,
    scale: number = 1.0
  ) {
    this.scaleFactor = scale;
    this.camera.position[2] = 3 * scale;
    this.init(onInit);
  }

  public resize(): void {
    const needsResize = resizeCanvasToDisplaySize(this.canvas);
    if (!this.gl) return;
    if (needsResize) {
      this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
    }
    this.updateProjectionMatrix();
  }

  public run(time = 0): void {
    this._deltaTime = Math.min(32, time - this._time);
    this._time = time;
    this._deltaFrames = this._deltaTime / this.TARGET_FRAME_DURATION;
    this._frames += this._deltaFrames;

    this.animate(this._deltaTime);
    this.render();

    requestAnimationFrame(t => this.run(t));
  }

  private init(onInit?: InitCallback): void {
    const gl = this.canvas.getContext('webgl2', {
      antialias: true,
      alpha: false
    });
    if (!gl) {
      throw new Error('No WebGL 2 context!');
    }
    this.gl = gl;

    vec2.set(this.viewportSize, this.canvas.clientWidth, this.canvas.clientHeight);
    vec2.clone(this.drawBufferSize);

    this.discProgram = createProgram(gl, [discVertShaderSource, discFragShaderSource], null, {
      aModelPosition: 0,
      aModelNormal: 1,
      aModelUvs: 2,
      aInstanceMatrix: 3
    });

    this.discLocations = {
      aModelPosition: gl.getAttribLocation(this.discProgram!, 'aModelPosition'),
      aModelUvs: gl.getAttribLocation(this.discProgram!, 'aModelUvs'),
      aInstanceMatrix: gl.getAttribLocation(this.discProgram!, 'aInstanceMatrix'),
      uWorldMatrix: gl.getUniformLocation(this.discProgram!, 'uWorldMatrix'),
      uViewMatrix: gl.getUniformLocation(this.discProgram!, 'uViewMatrix'),
      uProjectionMatrix: gl.getUniformLocation(this.discProgram!, 'uProjectionMatrix'),
      uCameraPosition: gl.getUniformLocation(this.discProgram!, 'uCameraPosition'),
      uScaleFactor: gl.getUniformLocation(this.discProgram!, 'uScaleFactor'),
      uRotationAxisVelocity: gl.getUniformLocation(this.discProgram!, 'uRotationAxisVelocity'),
      uTex: gl.getUniformLocation(this.discProgram!, 'uTex'),
      uFrames: gl.getUniformLocation(this.discProgram!, 'uFrames'),
      uItemCount: gl.getUniformLocation(this.discProgram!, 'uItemCount'),
      uAtlasSize: gl.getUniformLocation(this.discProgram!, 'uAtlasSize')
    };

    this.discGeo = new DiscGeometry(56, 1);
    this.discBuffers = this.discGeo.data;
    this.discVAO = makeVertexArray(
      gl,
      [
        [makeBuffer(gl, this.discBuffers.vertices, gl.STATIC_DRAW), this.discLocations.aModelPosition, 3],
        [makeBuffer(gl, this.discBuffers.uvs, gl.STATIC_DRAW), this.discLocations.aModelUvs, 2]
      ],
      this.discBuffers.indices
    );

    this.icoGeo = new IcosahedronGeometry();
    this.icoGeo.subdivide(1).spherize(this.SPHERE_RADIUS);
    this.instancePositions = this.icoGeo.vertices.map(v => v.position);
    this.DISC_INSTANCE_COUNT = this.icoGeo.vertices.length;
    this.initDiscInstances(this.DISC_INSTANCE_COUNT);
    this.initTexture();

    this.control = new ArcballControl(this.canvas, deltaTime => this.onControlUpdate(deltaTime));

    this.updateCameraMatrix();
    this.updateProjectionMatrix();

    this.resize();

    if (onInit) {
      onInit(this);
    }
  }

  private initTexture(): void {
    if (!this.gl) return;
    const gl = this.gl;
    this.tex = createAndSetupTexture(gl, gl.LINEAR, gl.LINEAR, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE);

    const itemCount = Math.max(1, this.items.length);
    this.atlasSize = Math.ceil(Math.sqrt(itemCount));
    const cellSize = 512;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    canvas.width = this.atlasSize * cellSize;
    canvas.height = this.atlasSize * cellSize;

    Promise.all(
      this.items.map(
        item =>
          new Promise<HTMLImageElement>(resolve => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => resolve(img);
            img.src = item.image;
          })
      )
    ).then(images => {
      images.forEach((img, i) => {
        const x = (i % this.atlasSize) * cellSize;
        const y = Math.floor(i / this.atlasSize) * cellSize;
        ctx.drawImage(img, x, y, cellSize, cellSize);
      });

      gl.bindTexture(gl.TEXTURE_2D, this.tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
      gl.generateMipmap(gl.TEXTURE_2D);
    });
  }

  private initDiscInstances(count: number): void {
    if (!this.gl || !this.discVAO) return;
    const gl = this.gl;

    const matricesArray = new Float32Array(count * 16);
    const matrices: Float32Array[] = [];
    for (let i = 0; i < count; ++i) {
      const instanceMatrixArray = new Float32Array(matricesArray.buffer, i * 16 * 4, 16);
      mat4.identity(instanceMatrixArray as unknown as mat4);
      matrices.push(instanceMatrixArray);
    }

    this.discInstances = {
      matricesArray,
      matrices,
      buffer: gl.createBuffer()
    };

    gl.bindVertexArray(this.discVAO);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.discInstances.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.discInstances.matricesArray.byteLength, gl.DYNAMIC_DRAW);

    const mat4AttribSlotCount = 4;
    const bytesPerMatrix = 16 * 4;
    for (let j = 0; j < mat4AttribSlotCount; ++j) {
      const loc = this.discLocations.aInstanceMatrix + j;
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 4, gl.FLOAT, false, bytesPerMatrix, j * 4 * 4);
      gl.vertexAttribDivisor(loc, 1);
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindVertexArray(null);
  }

  private animate(deltaTime: number): void {
    if (!this.gl) return;
    this.control.update(deltaTime, this.TARGET_FRAME_DURATION);

    const positions = this.instancePositions.map(p => vec3.transformQuat(vec3.create(), p, this.control.orientation));
    const scale = 0.25;
    const SCALE_INTENSITY = 0.6;

    positions.forEach((p, ndx) => {
      const s = (Math.abs(p[2]) / this.SPHERE_RADIUS) * SCALE_INTENSITY + (1 - SCALE_INTENSITY);
      const finalScale = s * scale;
      const matrix = mat4.create();

      mat4.multiply(matrix, matrix, mat4.fromTranslation(mat4.create(), vec3.negate(vec3.create(), p)));
      mat4.multiply(matrix, matrix, mat4.targetTo(mat4.create(), [0, 0, 0], p, [0, 1, 0]));
      mat4.multiply(matrix, matrix, mat4.fromScaling(mat4.create(), [finalScale, finalScale, finalScale]));
      mat4.multiply(matrix, matrix, mat4.fromTranslation(mat4.create(), [0, 0, -this.SPHERE_RADIUS]));

      mat4.copy(this.discInstances.matrices[ndx], matrix);
    });

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.discInstances.buffer);
    this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, this.discInstances.matricesArray);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);

    this.smoothRotationVelocity = this.control.rotationVelocity;
  }

  private render(): void {
    if (!this.gl || !this.discProgram) return;
    const gl = this.gl;

    gl.useProgram(this.discProgram);
    gl.enable(gl.CULL_FACE);
    gl.enable(gl.DEPTH_TEST);

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.uniformMatrix4fv(this.discLocations.uWorldMatrix, false, this.worldMatrix);
    gl.uniformMatrix4fv(this.discLocations.uViewMatrix, false, this.camera.matrices.view);
    gl.uniformMatrix4fv(this.discLocations.uProjectionMatrix, false, this.camera.matrices.projection);
    gl.uniform3f(
      this.discLocations.uCameraPosition,
      this.camera.position[0],
      this.camera.position[1],
      this.camera.position[2]
    );
    gl.uniform4f(
      this.discLocations.uRotationAxisVelocity,
      this.control.rotationAxis[0],
      this.control.rotationAxis[1],
      this.control.rotationAxis[2],
      this.smoothRotationVelocity * 1.1
    );

    gl.uniform1i(this.discLocations.uItemCount, this.items.length);
    gl.uniform1i(this.discLocations.uAtlasSize, this.atlasSize);

    gl.uniform1f(this.discLocations.uFrames, this._frames);
    gl.uniform1f(this.discLocations.uScaleFactor, this.scaleFactor);

    gl.uniform1i(this.discLocations.uTex, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.tex);

    gl.bindVertexArray(this.discVAO);
    gl.drawElementsInstanced(
      gl.TRIANGLES,
      this.discBuffers.indices.length,
      gl.UNSIGNED_SHORT,
      0,
      this.DISC_INSTANCE_COUNT
    );
    gl.bindVertexArray(null);
  }

  private updateCameraMatrix(): void {
    mat4.targetTo(this.camera.matrix, this.camera.position, [0, 0, 0], this.camera.up);
    mat4.invert(this.camera.matrices.view, this.camera.matrix);
  }

  private updateProjectionMatrix(): void {
    if (!this.gl) return;
    const canvasEl = this.gl.canvas as HTMLCanvasElement;
    this.camera.aspect = canvasEl.clientWidth / canvasEl.clientHeight;
    const height = this.SPHERE_RADIUS * 0.35;
    const distance = this.camera.position[2];
    if (this.camera.aspect > 1) {
      this.camera.fov = 2 * Math.atan(height / distance);
    } else {
      this.camera.fov = 2 * Math.atan(height / this.camera.aspect / distance);
    }
    mat4.perspective(
      this.camera.matrices.projection,
      this.camera.fov,
      this.camera.aspect,
      this.camera.near,
      this.camera.far
    );
    mat4.invert(this.camera.matrices.inversProjection, this.camera.matrices.projection);
  }

  private onControlUpdate(deltaTime: number): void {
    const timeScale = deltaTime / this.TARGET_FRAME_DURATION + 0.0001;
    let damping = 5 / timeScale;
    let cameraTargetZ = 3 * this.scaleFactor;

    const isMoving = this.control.isPointerDown || Math.abs(this.smoothRotationVelocity) > 0.01;

    if (isMoving !== this.movementActive) {
      this.movementActive = isMoving;
      this.onMovementChange(isMoving);
    }

    if (!this.control.isPointerDown) {
      const nearestVertexIndex = this.findNearestVertexIndex();
      const itemIndex = nearestVertexIndex % Math.max(1, this.items.length);
      this.onActiveItemChange(itemIndex);
      const snapDirection = vec3.normalize(vec3.create(), this.getVertexWorldPosition(nearestVertexIndex));
      this.control.snapTargetDirection = snapDirection;
    } else {
      cameraTargetZ += this.control.rotationVelocity * 80 + 2.5;
      damping = 7 / timeScale;
    }

    this.camera.position[2] += (cameraTargetZ - this.camera.position[2]) / damping;
    this.updateCameraMatrix();
  }

  private findNearestVertexIndex(): number {
    const n = this.control.snapDirection;
    const inversOrientation = quat.conjugate(quat.create(), this.control.orientation);
    const nt = vec3.transformQuat(vec3.create(), n, inversOrientation);

    let maxD = -1;
    let nearestVertexIndex = 0;
    for (let i = 0; i < this.instancePositions.length; ++i) {
      const d = vec3.dot(nt, this.instancePositions[i]);
      if (d > maxD) {
        maxD = d;
        nearestVertexIndex = i;
      }
    }
    return nearestVertexIndex;
  }

  private getVertexWorldPosition(index: number): vec3 {
    const nearestVertexPos = this.instancePositions[index];
    return vec3.transformQuat(vec3.create(), nearestVertexPos, this.control.orientation);
  }
}

const defaultItems: MenuItem[] = [
  {
    image: 'https://picsum.photos/900/900?grayscale',
    link: 'https://google.com/',
    title: '',
    description: ''
  }
];

interface InfiniteMenuProps {
  items?: MenuItem[];
  scale?: number;
}

const InfiniteMenu: FC<InfiniteMenuProps> = ({ items = [], scale = 1.0 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null) as MutableRefObject<HTMLCanvasElement | null>;
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const [isMoving, setIsMoving] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    let sketch: InfiniteGridMenu | null = null;

    const handleActiveItem = (index: number) => {
      if (!items.length) return;
      const itemIndex = index % items.length;
      setActiveItem(items[itemIndex]);
    };

    if (canvas) {
      sketch = new InfiniteGridMenu(
        canvas,
        items.length ? items : defaultItems,
        handleActiveItem,
        setIsMoving,
        sk => sk.run(),
        scale
      );
    }

    const handleResize = () => {
      if (sketch) {
        sketch.resize();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [items, scale]);

  const handleButtonClick = () => {
    if (!activeItem?.link) return;
    if (activeItem.link.startsWith('http')) {
      window.open(activeItem.link, '_blank');
    } else {
      console.log('Internal route:', activeItem.link);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <canvas id="infinite-grid-menu-canvas" ref={canvasRef} />

      {activeItem && (
        <>
          <h2 className={\`face-title \${isMoving ? 'inactive' : 'active'}\`}>{activeItem.title}</h2>

          <p className={\`face-description \${isMoving ? 'inactive' : 'active'}\`}>{activeItem.description}</p>

          <div onClick={handleButtonClick} className={\`action-button \${isMoving ? 'inactive' : 'active'}\`}>
            <p className="action-button-icon">&#x2197;</p>
          </div>
        </>
      )}
    </div>
  );
};

export default InfiniteMenu;
`,Mt=`import { FC, useRef, useState, useEffect, MutableRefObject } from 'react';
import { mat4, quat, vec2, vec3 } from 'gl-matrix';

const discVertShaderSource = \`#version 300 es

uniform mat4 uWorldMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform vec3 uCameraPosition;
uniform vec4 uRotationAxisVelocity;

in vec3 aModelPosition;
in vec3 aModelNormal;
in vec2 aModelUvs;
in mat4 aInstanceMatrix;

out vec2 vUvs;
out float vAlpha;
flat out int vInstanceId;

#define PI 3.141593

void main() {
    vec4 worldPosition = uWorldMatrix * aInstanceMatrix * vec4(aModelPosition, 1.);

    vec3 centerPos = (uWorldMatrix * aInstanceMatrix * vec4(0., 0., 0., 1.)).xyz;
    float radius = length(centerPos.xyz);

    if (gl_VertexID > 0) {
        vec3 rotationAxis = uRotationAxisVelocity.xyz;
        float rotationVelocity = min(.15, uRotationAxisVelocity.w * 15.);
        vec3 stretchDir = normalize(cross(centerPos, rotationAxis));
        vec3 relativeVertexPos = normalize(worldPosition.xyz - centerPos);
        float strength = dot(stretchDir, relativeVertexPos);
        float invAbsStrength = min(0., abs(strength) - 1.);
        strength = rotationVelocity * sign(strength) * abs(invAbsStrength * invAbsStrength * invAbsStrength + 1.);
        worldPosition.xyz += stretchDir * strength;
    }

    worldPosition.xyz = radius * normalize(worldPosition.xyz);

    gl_Position = uProjectionMatrix * uViewMatrix * worldPosition;

    vAlpha = smoothstep(0.5, 1., normalize(worldPosition.xyz).z) * .9 + .1;
    vUvs = aModelUvs;
    vInstanceId = gl_InstanceID;
}
\`;

const discFragShaderSource = \`#version 300 es
precision highp float;

uniform sampler2D uTex;
uniform int uItemCount;
uniform int uAtlasSize;

out vec4 outColor;

in vec2 vUvs;
in float vAlpha;
flat in int vInstanceId;

void main() {
    int itemIndex = vInstanceId % uItemCount;
    int cellsPerRow = uAtlasSize;
    int cellX = itemIndex % cellsPerRow;
    int cellY = itemIndex / cellsPerRow;
    vec2 cellSize = vec2(1.0) / vec2(float(cellsPerRow));
    vec2 cellOffset = vec2(float(cellX), float(cellY)) * cellSize;

    ivec2 texSize = textureSize(uTex, 0);
    float imageAspect = float(texSize.x) / float(texSize.y);
    float containerAspect = 1.0;
    
    float scale = max(imageAspect / containerAspect, 
                     containerAspect / imageAspect);
    
    vec2 st = vec2(vUvs.x, 1.0 - vUvs.y);
    st = (st - 0.5) * scale + 0.5;
    
    st = clamp(st, 0.0, 1.0);
    st = st * cellSize + cellOffset;
    
    outColor = texture(uTex, st);
    outColor.a *= vAlpha;
}
\`;

class Face {
  public a: number;
  public b: number;
  public c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

class Vertex {
  public position: vec3;
  public normal: vec3;
  public uv: vec2;

  constructor(x: number, y: number, z: number) {
    this.position = vec3.fromValues(x, y, z);
    this.normal = vec3.create();
    this.uv = vec2.create();
  }
}

class Geometry {
  public vertices: Vertex[];
  public faces: Face[];

  constructor() {
    this.vertices = [];
    this.faces = [];
  }

  public addVertex(...args: number[]): this {
    for (let i = 0; i < args.length; i += 3) {
      this.vertices.push(new Vertex(args[i], args[i + 1], args[i + 2]));
    }
    return this;
  }

  public addFace(...args: number[]): this {
    for (let i = 0; i < args.length; i += 3) {
      this.faces.push(new Face(args[i], args[i + 1], args[i + 2]));
    }
    return this;
  }

  public get lastVertex(): Vertex {
    return this.vertices[this.vertices.length - 1];
  }

  public subdivide(divisions = 1): this {
    const midPointCache: Record<string, number> = {};
    let f = this.faces;

    for (let div = 0; div < divisions; ++div) {
      const newFaces = new Array<Face>(f.length * 4);

      f.forEach((face, ndx) => {
        const mAB = this.getMidPoint(face.a, face.b, midPointCache);
        const mBC = this.getMidPoint(face.b, face.c, midPointCache);
        const mCA = this.getMidPoint(face.c, face.a, midPointCache);

        const i = ndx * 4;
        newFaces[i + 0] = new Face(face.a, mAB, mCA);
        newFaces[i + 1] = new Face(face.b, mBC, mAB);
        newFaces[i + 2] = new Face(face.c, mCA, mBC);
        newFaces[i + 3] = new Face(mAB, mBC, mCA);
      });

      f = newFaces;
    }

    this.faces = f;
    return this;
  }

  public spherize(radius = 1): this {
    this.vertices.forEach(vertex => {
      vec3.normalize(vertex.normal, vertex.position);
      vec3.scale(vertex.position, vertex.normal, radius);
    });
    return this;
  }

  public get data(): {
    vertices: Float32Array;
    indices: Uint16Array;
    normals: Float32Array;
    uvs: Float32Array;
  } {
    return {
      vertices: this.vertexData,
      indices: this.indexData,
      normals: this.normalData,
      uvs: this.uvData
    };
  }

  public get vertexData(): Float32Array {
    return new Float32Array(this.vertices.flatMap(v => Array.from(v.position)));
  }

  public get normalData(): Float32Array {
    return new Float32Array(this.vertices.flatMap(v => Array.from(v.normal)));
  }

  public get uvData(): Float32Array {
    return new Float32Array(this.vertices.flatMap(v => Array.from(v.uv)));
  }

  public get indexData(): Uint16Array {
    return new Uint16Array(this.faces.flatMap(f => [f.a, f.b, f.c]));
  }

  public getMidPoint(ndxA: number, ndxB: number, cache: Record<string, number>): number {
    const cacheKey = ndxA < ndxB ? \`k_\${ndxB}_\${ndxA}\` : \`k_\${ndxA}_\${ndxB}\`;
    if (Object.prototype.hasOwnProperty.call(cache, cacheKey)) {
      return cache[cacheKey];
    }
    const a = this.vertices[ndxA].position;
    const b = this.vertices[ndxB].position;
    const ndx = this.vertices.length;
    cache[cacheKey] = ndx;
    this.addVertex((a[0] + b[0]) * 0.5, (a[1] + b[1]) * 0.5, (a[2] + b[2]) * 0.5);
    return ndx;
  }
}

class IcosahedronGeometry extends Geometry {
  constructor() {
    super();
    const t = Math.sqrt(5) * 0.5 + 0.5;
    this.addVertex(
      -1,
      t,
      0,
      1,
      t,
      0,
      -1,
      -t,
      0,
      1,
      -t,
      0,
      0,
      -1,
      t,
      0,
      1,
      t,
      0,
      -1,
      -t,
      0,
      1,
      -t,
      t,
      0,
      -1,
      t,
      0,
      1,
      -t,
      0,
      -1,
      -t,
      0,
      1
    ).addFace(
      0,
      11,
      5,
      0,
      5,
      1,
      0,
      1,
      7,
      0,
      7,
      10,
      0,
      10,
      11,
      1,
      5,
      9,
      5,
      11,
      4,
      11,
      10,
      2,
      10,
      7,
      6,
      7,
      1,
      8,
      3,
      9,
      4,
      3,
      4,
      2,
      3,
      2,
      6,
      3,
      6,
      8,
      3,
      8,
      9,
      4,
      9,
      5,
      2,
      4,
      11,
      6,
      2,
      10,
      8,
      6,
      7,
      9,
      8,
      1
    );
  }
}

class DiscGeometry extends Geometry {
  constructor(steps = 4, radius = 1) {
    super();
    const safeSteps = Math.max(4, steps);
    const alpha = (2 * Math.PI) / safeSteps;

    this.addVertex(0, 0, 0);
    this.lastVertex.uv[0] = 0.5;
    this.lastVertex.uv[1] = 0.5;

    for (let i = 0; i < safeSteps; ++i) {
      const x = Math.cos(alpha * i);
      const y = Math.sin(alpha * i);
      this.addVertex(radius * x, radius * y, 0);
      this.lastVertex.uv[0] = x * 0.5 + 0.5;
      this.lastVertex.uv[1] = y * 0.5 + 0.5;

      if (i > 0) {
        this.addFace(0, i, i + 1);
      }
    }
    this.addFace(0, safeSteps, 1);
  }
}

function createShader(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

  if (success) {
    return shader;
  }

  console.error(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
  return null;
}

function createProgram(
  gl: WebGL2RenderingContext,
  shaderSources: [string, string],
  transformFeedbackVaryings?: string[] | null,
  attribLocations?: Record<string, number>
): WebGLProgram | null {
  const program = gl.createProgram();
  if (!program) return null;

  [gl.VERTEX_SHADER, gl.FRAGMENT_SHADER].forEach((type, ndx) => {
    const shader = createShader(gl, type, shaderSources[ndx]);
    if (shader) {
      gl.attachShader(program, shader);
    }
  });

  if (transformFeedbackVaryings) {
    gl.transformFeedbackVaryings(program, transformFeedbackVaryings, gl.SEPARATE_ATTRIBS);
  }

  if (attribLocations) {
    for (const attrib in attribLocations) {
      if (Object.prototype.hasOwnProperty.call(attribLocations, attrib)) {
        gl.bindAttribLocation(program, attribLocations[attrib], attrib);
      }
    }
  }

  gl.linkProgram(program);
  const success = gl.getProgramParameter(program, gl.LINK_STATUS);

  if (success) {
    return program;
  }

  console.error(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
  return null;
}

function makeVertexArray(
  gl: WebGL2RenderingContext,
  bufLocNumElmPairs: Array<[WebGLBuffer, number, number]>,
  indices?: Uint16Array
): WebGLVertexArrayObject | null {
  const va = gl.createVertexArray();
  if (!va) return null;

  gl.bindVertexArray(va);

  for (const [buffer, loc, numElem] of bufLocNumElmPairs) {
    if (loc === -1) continue;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, numElem, gl.FLOAT, false, 0, 0);
  }

  if (indices) {
    const indexBuffer = gl.createBuffer();
    if (indexBuffer) {
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
    }
  }

  gl.bindVertexArray(null);
  return va;
}

function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement): boolean {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const displayWidth = Math.round(canvas.clientWidth * dpr);
  const displayHeight = Math.round(canvas.clientHeight * dpr);
  const needResize = canvas.width !== displayWidth || canvas.height !== displayHeight;
  if (needResize) {
    canvas.width = displayWidth;
    canvas.height = displayHeight;
  }
  return needResize;
}

function makeBuffer(gl: WebGL2RenderingContext, sizeOrData: number | ArrayBufferView, usage: number): WebGLBuffer {
  const buf = gl.createBuffer();
  if (!buf) {
    throw new Error('Failed to create WebGL buffer.');
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);

  if (typeof sizeOrData === 'number') {
    gl.bufferData(gl.ARRAY_BUFFER, sizeOrData, usage);
  } else {
    gl.bufferData(gl.ARRAY_BUFFER, sizeOrData, usage);
  }

  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  return buf;
}

function createAndSetupTexture(
  gl: WebGL2RenderingContext,
  minFilter: number,
  magFilter: number,
  wrapS: number,
  wrapT: number
): WebGLTexture {
  const texture = gl.createTexture();
  if (!texture) {
    throw new Error('Failed to create WebGL texture.');
  }
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);
  return texture;
}

type UpdateCallback = (deltaTime: number) => void;

class ArcballControl {
  private canvas: HTMLCanvasElement;
  private updateCallback: UpdateCallback;

  public isPointerDown = false;
  public orientation = quat.create();
  public pointerRotation = quat.create();
  public rotationVelocity = 0;
  public rotationAxis = vec3.fromValues(1, 0, 0);

  public snapDirection = vec3.fromValues(0, 0, -1);
  public snapTargetDirection: vec3 | null = null;

  private pointerPos = vec2.create();
  private previousPointerPos = vec2.create();
  private _rotationVelocity = 0;
  private _combinedQuat = quat.create();

  private readonly EPSILON = 0.1;
  private readonly IDENTITY_QUAT = quat.create();

  constructor(canvas: HTMLCanvasElement, updateCallback?: UpdateCallback) {
    this.canvas = canvas;
    this.updateCallback = updateCallback || (() => undefined);

    canvas.addEventListener('pointerdown', (e: PointerEvent) => {
      vec2.set(this.pointerPos, e.clientX, e.clientY);
      vec2.copy(this.previousPointerPos, this.pointerPos);
      this.isPointerDown = true;
    });
    canvas.addEventListener('pointerup', () => {
      this.isPointerDown = false;
    });
    canvas.addEventListener('pointerleave', () => {
      this.isPointerDown = false;
    });
    canvas.addEventListener('pointermove', (e: PointerEvent) => {
      if (this.isPointerDown) {
        vec2.set(this.pointerPos, e.clientX, e.clientY);
      }
    });
    canvas.style.touchAction = 'none';
  }

  public update(deltaTime: number, targetFrameDuration = 16): void {
    const timeScale = deltaTime / targetFrameDuration + 0.00001;
    let angleFactor = timeScale;
    const snapRotation = quat.create();

    if (this.isPointerDown) {
      const INTENSITY = 0.3 * timeScale;
      const ANGLE_AMPLIFICATION = 5 / timeScale;
      const midPointerPos = vec2.sub(vec2.create(), this.pointerPos, this.previousPointerPos);
      vec2.scale(midPointerPos, midPointerPos, INTENSITY);

      if (vec2.sqrLen(midPointerPos) > this.EPSILON) {
        vec2.add(midPointerPos, this.previousPointerPos, midPointerPos);

        const p = this.project(midPointerPos);
        const q = this.project(this.previousPointerPos);
        const a = vec3.normalize(vec3.create(), p);
        const b = vec3.normalize(vec3.create(), q);

        vec2.copy(this.previousPointerPos, midPointerPos);

        angleFactor *= ANGLE_AMPLIFICATION;

        this.quatFromVectors(a, b, this.pointerRotation, angleFactor);
      } else {
        quat.slerp(this.pointerRotation, this.pointerRotation, this.IDENTITY_QUAT, INTENSITY);
      }
    } else {
      const INTENSITY = 0.1 * timeScale;
      quat.slerp(this.pointerRotation, this.pointerRotation, this.IDENTITY_QUAT, INTENSITY);

      if (this.snapTargetDirection) {
        const SNAPPING_INTENSITY = 0.2;
        const a = this.snapTargetDirection;
        const b = this.snapDirection;
        const sqrDist = vec3.squaredDistance(a, b);
        const distanceFactor = Math.max(0.1, 1 - sqrDist * 10);
        angleFactor *= SNAPPING_INTENSITY * distanceFactor;
        this.quatFromVectors(a, b, snapRotation, angleFactor);
      }
    }

    const combinedQuat = quat.multiply(quat.create(), snapRotation, this.pointerRotation);
    this.orientation = quat.multiply(quat.create(), combinedQuat, this.orientation);
    quat.normalize(this.orientation, this.orientation);

    const RA_INTENSITY = 0.8 * timeScale;
    quat.slerp(this._combinedQuat, this._combinedQuat, combinedQuat, RA_INTENSITY);
    quat.normalize(this._combinedQuat, this._combinedQuat);

    const rad = Math.acos(this._combinedQuat[3]) * 2.0;
    const s = Math.sin(rad / 2.0);
    let rv = 0;
    if (s > 0.000001) {
      rv = rad / (2 * Math.PI);
      this.rotationAxis[0] = this._combinedQuat[0] / s;
      this.rotationAxis[1] = this._combinedQuat[1] / s;
      this.rotationAxis[2] = this._combinedQuat[2] / s;
    }

    const RV_INTENSITY = 0.5 * timeScale;
    this._rotationVelocity += (rv - this._rotationVelocity) * RV_INTENSITY;
    this.rotationVelocity = this._rotationVelocity / timeScale;

    this.updateCallback(deltaTime);
  }

  private quatFromVectors(a: vec3, b: vec3, out: quat, angleFactor = 1): { q: quat; axis: vec3; angle: number } {
    const axis = vec3.cross(vec3.create(), a, b);
    vec3.normalize(axis, axis);
    const d = Math.max(-1, Math.min(1, vec3.dot(a, b)));
    const angle = Math.acos(d) * angleFactor;
    quat.setAxisAngle(out, axis, angle);
    return { q: out, axis, angle };
  }

  private project(pos: vec2): vec3 {
    const r = 2;
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    const s = Math.max(w, h) - 1;

    const x = (2 * pos[0] - w - 1) / s;
    const y = (2 * pos[1] - h - 1) / s;
    let z = 0;
    const xySq = x * x + y * y;
    const rSq = r * r;

    if (xySq <= rSq / 2.0) {
      z = Math.sqrt(rSq - xySq);
    } else {
      z = rSq / Math.sqrt(xySq);
    }
    return vec3.fromValues(-x, y, z);
  }
}

interface MenuItem {
  image: string;
  link: string;
  title: string;
  description: string;
}

type ActiveItemCallback = (index: number) => void;
type MovementChangeCallback = (isMoving: boolean) => void;
type InitCallback = (instance: InfiniteGridMenu) => void;

interface Camera {
  matrix: mat4;
  near: number;
  far: number;
  fov: number;
  aspect: number;
  position: vec3;
  up: vec3;
  matrices: {
    view: mat4;
    projection: mat4;
    inversProjection: mat4;
  };
}

class InfiniteGridMenu {
  private gl: WebGL2RenderingContext | null = null;
  private discProgram: WebGLProgram | null = null;
  private discVAO: WebGLVertexArrayObject | null = null;
  private discBuffers!: {
    vertices: Float32Array;
    indices: Uint16Array;
    normals: Float32Array;
    uvs: Float32Array;
  };
  private icoGeo!: IcosahedronGeometry;
  private discGeo!: DiscGeometry;
  private worldMatrix = mat4.create();
  private tex: WebGLTexture | null = null;
  private control!: ArcballControl;

  private discLocations!: {
    aModelPosition: number;
    aModelUvs: number;
    aInstanceMatrix: number;
    uWorldMatrix: WebGLUniformLocation | null;
    uViewMatrix: WebGLUniformLocation | null;
    uProjectionMatrix: WebGLUniformLocation | null;
    uCameraPosition: WebGLUniformLocation | null;
    uScaleFactor: WebGLUniformLocation | null;
    uRotationAxisVelocity: WebGLUniformLocation | null;
    uTex: WebGLUniformLocation | null;
    uFrames: WebGLUniformLocation | null;
    uItemCount: WebGLUniformLocation | null;
    uAtlasSize: WebGLUniformLocation | null;
  };

  private viewportSize = vec2.create();
  private drawBufferSize = vec2.create();

  private discInstances!: {
    matricesArray: Float32Array;
    matrices: Float32Array[];
    buffer: WebGLBuffer | null;
  };

  private instancePositions: vec3[] = [];
  private DISC_INSTANCE_COUNT = 0;
  private atlasSize = 1;

  private _time = 0;
  private _deltaTime = 0;
  private _deltaFrames = 0;
  private _frames = 0;

  private movementActive = false;

  private TARGET_FRAME_DURATION = 1000 / 60;
  private SPHERE_RADIUS = 2;

  public camera: Camera = {
    matrix: mat4.create(),
    near: 0.1,
    far: 40,
    fov: Math.PI / 4,
    aspect: 1,
    position: vec3.fromValues(0, 0, 3),
    up: vec3.fromValues(0, 1, 0),
    matrices: {
      view: mat4.create(),
      projection: mat4.create(),
      inversProjection: mat4.create()
    }
  };

  public smoothRotationVelocity = 0;
  public scaleFactor = 1.0;

  constructor(
    private canvas: HTMLCanvasElement,
    private items: MenuItem[],
    private onActiveItemChange: ActiveItemCallback,
    private onMovementChange: MovementChangeCallback,
    onInit?: InitCallback,
    scale: number = 1.0
  ) {
    this.scaleFactor = scale;
    this.camera.position[2] = 3 * scale;
    this.init(onInit);
  }

  public resize(): void {
    const needsResize = resizeCanvasToDisplaySize(this.canvas);
    if (!this.gl) return;
    if (needsResize) {
      this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
    }
    this.updateProjectionMatrix();
  }

  public run(time = 0): void {
    this._deltaTime = Math.min(32, time - this._time);
    this._time = time;
    this._deltaFrames = this._deltaTime / this.TARGET_FRAME_DURATION;
    this._frames += this._deltaFrames;

    this.animate(this._deltaTime);
    this.render();

    requestAnimationFrame(t => this.run(t));
  }

  private init(onInit?: InitCallback): void {
    const gl = this.canvas.getContext('webgl2', {
      antialias: true,
      alpha: false
    });
    if (!gl) {
      throw new Error('No WebGL 2 context!');
    }
    this.gl = gl;

    vec2.set(this.viewportSize, this.canvas.clientWidth, this.canvas.clientHeight);
    vec2.clone(this.drawBufferSize);

    this.discProgram = createProgram(gl, [discVertShaderSource, discFragShaderSource], null, {
      aModelPosition: 0,
      aModelNormal: 1,
      aModelUvs: 2,
      aInstanceMatrix: 3
    });

    this.discLocations = {
      aModelPosition: gl.getAttribLocation(this.discProgram!, 'aModelPosition'),
      aModelUvs: gl.getAttribLocation(this.discProgram!, 'aModelUvs'),
      aInstanceMatrix: gl.getAttribLocation(this.discProgram!, 'aInstanceMatrix'),
      uWorldMatrix: gl.getUniformLocation(this.discProgram!, 'uWorldMatrix'),
      uViewMatrix: gl.getUniformLocation(this.discProgram!, 'uViewMatrix'),
      uProjectionMatrix: gl.getUniformLocation(this.discProgram!, 'uProjectionMatrix'),
      uCameraPosition: gl.getUniformLocation(this.discProgram!, 'uCameraPosition'),
      uScaleFactor: gl.getUniformLocation(this.discProgram!, 'uScaleFactor'),
      uRotationAxisVelocity: gl.getUniformLocation(this.discProgram!, 'uRotationAxisVelocity'),
      uTex: gl.getUniformLocation(this.discProgram!, 'uTex'),
      uFrames: gl.getUniformLocation(this.discProgram!, 'uFrames'),
      uItemCount: gl.getUniformLocation(this.discProgram!, 'uItemCount'),
      uAtlasSize: gl.getUniformLocation(this.discProgram!, 'uAtlasSize')
    };

    this.discGeo = new DiscGeometry(56, 1);
    this.discBuffers = this.discGeo.data;
    this.discVAO = makeVertexArray(
      gl,
      [
        [makeBuffer(gl, this.discBuffers.vertices, gl.STATIC_DRAW), this.discLocations.aModelPosition, 3],
        [makeBuffer(gl, this.discBuffers.uvs, gl.STATIC_DRAW), this.discLocations.aModelUvs, 2]
      ],
      this.discBuffers.indices
    );

    this.icoGeo = new IcosahedronGeometry();
    this.icoGeo.subdivide(1).spherize(this.SPHERE_RADIUS);
    this.instancePositions = this.icoGeo.vertices.map(v => v.position);
    this.DISC_INSTANCE_COUNT = this.icoGeo.vertices.length;
    this.initDiscInstances(this.DISC_INSTANCE_COUNT);
    this.initTexture();
    this.control = new ArcballControl(this.canvas, deltaTime => this.onControlUpdate(deltaTime));

    this.updateCameraMatrix();
    this.updateProjectionMatrix();

    this.resize();

    if (onInit) {
      onInit(this);
    }
  }

  private initTexture(): void {
    if (!this.gl) return;
    const gl = this.gl;
    this.tex = createAndSetupTexture(gl, gl.LINEAR, gl.LINEAR, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE);

    const itemCount = Math.max(1, this.items.length);
    this.atlasSize = Math.ceil(Math.sqrt(itemCount));
    const cellSize = 512;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    canvas.width = this.atlasSize * cellSize;
    canvas.height = this.atlasSize * cellSize;

    Promise.all(
      this.items.map(
        item =>
          new Promise<HTMLImageElement>(resolve => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => resolve(img);
            img.src = item.image;
          })
      )
    ).then(images => {
      images.forEach((img, i) => {
        const x = (i % this.atlasSize) * cellSize;
        const y = Math.floor(i / this.atlasSize) * cellSize;
        ctx.drawImage(img, x, y, cellSize, cellSize);
      });

      gl.bindTexture(gl.TEXTURE_2D, this.tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
      gl.generateMipmap(gl.TEXTURE_2D);
    });
  }

  private initDiscInstances(count: number): void {
    if (!this.gl || !this.discVAO) return;
    const gl = this.gl;

    const matricesArray = new Float32Array(count * 16);
    const matrices: Float32Array[] = [];
    for (let i = 0; i < count; ++i) {
      const instanceMatrixArray = new Float32Array(matricesArray.buffer, i * 16 * 4, 16);
      mat4.identity(instanceMatrixArray as unknown as mat4);
      matrices.push(instanceMatrixArray);
    }

    this.discInstances = {
      matricesArray,
      matrices,
      buffer: gl.createBuffer()
    };

    gl.bindVertexArray(this.discVAO);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.discInstances.buffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.discInstances.matricesArray.byteLength, gl.DYNAMIC_DRAW);

    const mat4AttribSlotCount = 4;
    const bytesPerMatrix = 16 * 4;
    for (let j = 0; j < mat4AttribSlotCount; ++j) {
      const loc = this.discLocations.aInstanceMatrix + j;
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, 4, gl.FLOAT, false, bytesPerMatrix, j * 4 * 4);
      gl.vertexAttribDivisor(loc, 1);
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindVertexArray(null);
  }

  private animate(deltaTime: number): void {
    if (!this.gl) return;
    this.control.update(deltaTime, this.TARGET_FRAME_DURATION);

    const positions = this.instancePositions.map(p => vec3.transformQuat(vec3.create(), p, this.control.orientation));
    const scale = 0.25;
    const SCALE_INTENSITY = 0.6;

    positions.forEach((p, ndx) => {
      const s = (Math.abs(p[2]) / this.SPHERE_RADIUS) * SCALE_INTENSITY + (1 - SCALE_INTENSITY);
      const finalScale = s * scale;
      const matrix = mat4.create();

      mat4.multiply(matrix, matrix, mat4.fromTranslation(mat4.create(), vec3.negate(vec3.create(), p)));
      mat4.multiply(matrix, matrix, mat4.targetTo(mat4.create(), [0, 0, 0], p, [0, 1, 0]));
      mat4.multiply(matrix, matrix, mat4.fromScaling(mat4.create(), [finalScale, finalScale, finalScale]));
      mat4.multiply(matrix, matrix, mat4.fromTranslation(mat4.create(), [0, 0, -this.SPHERE_RADIUS]));

      mat4.copy(this.discInstances.matrices[ndx], matrix);
    });

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.discInstances.buffer);
    this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, this.discInstances.matricesArray);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);

    this.smoothRotationVelocity = this.control.rotationVelocity;
  }

  private render(): void {
    if (!this.gl || !this.discProgram) return;
    const gl = this.gl;

    gl.useProgram(this.discProgram);
    gl.enable(gl.CULL_FACE);
    gl.enable(gl.DEPTH_TEST);

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.uniformMatrix4fv(this.discLocations.uWorldMatrix, false, this.worldMatrix);
    gl.uniformMatrix4fv(this.discLocations.uViewMatrix, false, this.camera.matrices.view);
    gl.uniformMatrix4fv(this.discLocations.uProjectionMatrix, false, this.camera.matrices.projection);
    gl.uniform3f(
      this.discLocations.uCameraPosition,
      this.camera.position[0],
      this.camera.position[1],
      this.camera.position[2]
    );
    gl.uniform4f(
      this.discLocations.uRotationAxisVelocity,
      this.control.rotationAxis[0],
      this.control.rotationAxis[1],
      this.control.rotationAxis[2],
      this.smoothRotationVelocity * 1.1
    );

    gl.uniform1i(this.discLocations.uItemCount, this.items.length);
    gl.uniform1i(this.discLocations.uAtlasSize, this.atlasSize);

    gl.uniform1f(this.discLocations.uFrames, this._frames);
    gl.uniform1f(this.discLocations.uScaleFactor, this.scaleFactor);

    gl.uniform1i(this.discLocations.uTex, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this.tex);

    gl.bindVertexArray(this.discVAO);
    gl.drawElementsInstanced(
      gl.TRIANGLES,
      this.discBuffers.indices.length,
      gl.UNSIGNED_SHORT,
      0,
      this.DISC_INSTANCE_COUNT
    );
    gl.bindVertexArray(null);
  }

  private updateCameraMatrix(): void {
    mat4.targetTo(this.camera.matrix, this.camera.position, [0, 0, 0], this.camera.up);
    mat4.invert(this.camera.matrices.view, this.camera.matrix);
  }

  private updateProjectionMatrix(): void {
    if (!this.gl) return;
    const canvasEl = this.gl.canvas as HTMLCanvasElement;
    this.camera.aspect = canvasEl.clientWidth / canvasEl.clientHeight;
    const height = this.SPHERE_RADIUS * 0.35;
    const distance = this.camera.position[2];
    if (this.camera.aspect > 1) {
      this.camera.fov = 2 * Math.atan(height / distance);
    } else {
      this.camera.fov = 2 * Math.atan(height / this.camera.aspect / distance);
    }
    mat4.perspective(
      this.camera.matrices.projection,
      this.camera.fov,
      this.camera.aspect,
      this.camera.near,
      this.camera.far
    );
    mat4.invert(this.camera.matrices.inversProjection, this.camera.matrices.projection);
  }

  private onControlUpdate(deltaTime: number): void {
    const timeScale = deltaTime / this.TARGET_FRAME_DURATION + 0.0001;
    let damping = 5 / timeScale;
    let cameraTargetZ = 3 * this.scaleFactor;

    const isMoving = this.control.isPointerDown || Math.abs(this.smoothRotationVelocity) > 0.01;

    if (isMoving !== this.movementActive) {
      this.movementActive = isMoving;
      this.onMovementChange(isMoving);
    }

    if (!this.control.isPointerDown) {
      const nearestVertexIndex = this.findNearestVertexIndex();
      const itemIndex = nearestVertexIndex % Math.max(1, this.items.length);
      this.onActiveItemChange(itemIndex);
      const snapDirection = vec3.normalize(vec3.create(), this.getVertexWorldPosition(nearestVertexIndex));
      this.control.snapTargetDirection = snapDirection;
    } else {
      cameraTargetZ += this.control.rotationVelocity * 80 + 2.5;
      damping = 7 / timeScale;
    }

    this.camera.position[2] += (cameraTargetZ - this.camera.position[2]) / damping;
    this.updateCameraMatrix();
  }

  private findNearestVertexIndex(): number {
    const n = this.control.snapDirection;
    const inversOrientation = quat.conjugate(quat.create(), this.control.orientation);
    const nt = vec3.transformQuat(vec3.create(), n, inversOrientation);

    let maxD = -1;
    let nearestVertexIndex = 0;
    for (let i = 0; i < this.instancePositions.length; ++i) {
      const d = vec3.dot(nt, this.instancePositions[i]);
      if (d > maxD) {
        maxD = d;
        nearestVertexIndex = i;
      }
    }
    return nearestVertexIndex;
  }

  private getVertexWorldPosition(index: number): vec3 {
    const nearestVertexPos = this.instancePositions[index];
    return vec3.transformQuat(vec3.create(), nearestVertexPos, this.control.orientation);
  }
}

const defaultItems: MenuItem[] = [
  {
    image: 'https://picsum.photos/900/900?grayscale',
    link: 'https://google.com/',
    title: '',
    description: ''
  }
];

interface InfiniteMenuProps {
  items?: MenuItem[];
  scale?: number;
}

const InfiniteMenu: FC<InfiniteMenuProps> = ({ items = [], scale = 1.0 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null) as MutableRefObject<HTMLCanvasElement | null>;
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const [isMoving, setIsMoving] = useState<boolean>(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    let sketch: InfiniteGridMenu | null = null;

    const handleActiveItem = (index: number) => {
      if (!items.length) return;
      const itemIndex = index % items.length;
      setActiveItem(items[itemIndex]);
    };

    if (canvas) {
      sketch = new InfiniteGridMenu(
        canvas,
        items.length ? items : defaultItems,
        handleActiveItem,
        setIsMoving,
        sk => sk.run(),
        scale
      );
    }

    const handleResize = () => {
      if (sketch) {
        sketch.resize();
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [items, scale]);

  const handleButtonClick = () => {
    if (!activeItem?.link) return;
    if (activeItem.link.startsWith('http')) {
      window.open(activeItem.link, '_blank');
    } else {
      console.log('Internal route:', activeItem.link);
    }
  };

  return (
    <div className="relative w-full h-full">
      <canvas
        id="infinite-grid-menu-canvas"
        ref={canvasRef}
        className="cursor-grab w-full h-full overflow-hidden relative outline-none active:cursor-grabbing"
      />

      {activeItem && (
        <>
          <h2
            className={\`
          select-none
          absolute
          font-black
          [font-size:4rem]
          left-[1.6em]
          top-1/2
          transform
          translate-x-[20%]
          -translate-y-1/2
          transition-all
          ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
          \${
            isMoving
              ? 'opacity-0 pointer-events-none duration-[100ms]'
              : 'opacity-100 pointer-events-auto duration-[500ms]'
          }
        \`}
          >
            {activeItem.title}
          </h2>

          <p
            className={\`
          select-none
          absolute
          max-w-[10ch]
          text-[1.5rem]
          top-1/2
          right-[1%]
          transition-all
          ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
          \${
            isMoving
              ? 'opacity-0 pointer-events-none duration-[100ms] translate-x-[-60%] -translate-y-1/2'
              : 'opacity-100 pointer-events-auto duration-[500ms] translate-x-[-90%] -translate-y-1/2'
          }
        \`}
          >
            {activeItem.description}
          </p>

          <div
            onClick={handleButtonClick}
            className={\`
          absolute
          left-1/2
          z-10
          w-[60px]
          h-[60px]
          grid
          place-items-center
          bg-[#00ffff]
          border-[5px]
          border-black
          rounded-full
          cursor-pointer
          transition-all
          ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
          \${
            isMoving
              ? 'bottom-[-80px] opacity-0 pointer-events-none duration-[100ms] scale-0 -translate-x-1/2'
              : 'bottom-[3.8em] opacity-100 pointer-events-auto duration-[500ms] scale-100 -translate-x-1/2'
          }
        \`}
          >
            <p className="select-none relative text-[#060010] top-[2px] text-[26px]">&#x2197;</p>
          </div>
        </>
      )}
    </div>
  );
};

export default InfiniteMenu;
`,_t={dependencies:"gl-matrix",usage:`import InfiniteMenu from './InfiniteMenu'

const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
];

<div style={{ height: '600px', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div>`,code:Rt,css:Et,tailwind:St,tsCode:yt,tsTailwind:Mt},xn={scale:1},Nt=()=>{const[n,t]=V.useState(!0),{props:e,updateProp:i,resetProps:a,hasChanges:s}=Dn(xn),{scale:r}=e,o=V.useMemo(()=>[{name:"items",type:"object[]",default:"[{...}]",description:"List of items containing an image, link, title, and description - or just add what you need."},{name:"scale",type:"number",default:"1.0",description:"Controls camera zoom"}],[]),c=[{image:"https://picsum.photos/300/300?grayscale",link:"https://google.com/",title:"Item 1",description:"This is pretty cool, right?"},{image:"https://picsum.photos/400/400?grayscale",link:"https://google.com/",title:"Item 2",description:"This is pretty cool, right?"},{image:"https://picsum.photos/500/500?grayscale",link:"https://google.com/",title:"Item 3",description:"This is pretty cool, right?"},{image:"https://picsum.photos/600/600?grayscale",link:"https://google.com/",title:"Item 4",description:"This is pretty cool, right?"}];return V.useEffect(()=>{setTimeout(()=>{t(!1)},1e3)},[]),P.jsx(Cn,{props:e,defaultProps:xn,resetProps:a,hasChanges:s,children:P.jsxs(Ln,{children:[P.jsxs(Vn,{children:[P.jsxs(mn,{position:"relative",className:"demo-container",h:600,overflow:"hidden",p:0,children:[n&&P.jsx(wn,{size:"lg",position:"absolute"}),P.jsx(mn,{h:600,overflow:"hidden",w:"100%",p:0,opacity:n?0:1,transform:n?"scale(5)":"scale(1)",transition:"1s ease",children:P.jsx(Tt,{items:c,scale:r})})]}),P.jsx(Gn,{title:"Scale",min:.1,max:3,step:.1,value:r,onChange:h=>i("scale",h)}),P.jsx(zn,{data:o}),P.jsx(Bn,{dependencyList:["gl-matrix"]})]}),P.jsx(Un,{children:P.jsx(Nn,{codeObject:_t,componentName:"InfiniteMenu"})})]})})};export{Nt as default};
