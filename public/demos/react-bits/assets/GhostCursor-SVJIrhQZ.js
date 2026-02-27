import{r as o,j as He}from"./index-CKqfvLoB.js";import{M as Ce,O as Se,r as ke,F as Me,a as P,q as re,V as m,w as X,H as K,x as Ne,n as We,C as U,m as R,y as Ge,z as je,W as Ie,S as qe,P as Xe,b as Te}from"./three.module-DbwSNGae.js";const ye={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class N{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ke=new Se(-1,1,1,-1,0,1);class Ye extends ke{constructor(){super(),this.setAttribute("position",new Me([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Me([0,2,0,0,2,0],2))}}const $e=new Ye;class Re{constructor(e){this._mesh=new Ce($e,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ke)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ae extends N{constructor(e,s){super(),this.textureID=s!==void 0?s:"tDiffuse",e instanceof P?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=re.clone(e.uniforms),this.material=new P({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Re(this.material)}render(e,s,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class we extends N{constructor(e,s){super(),this.scene=e,this.camera=s,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,s,i){const r=e.getContext(),t=e.state;t.buffers.color.setMask(!1),t.buffers.depth.setMask(!1),t.buffers.color.setLocked(!0),t.buffers.depth.setLocked(!0);let a,c;this.inverse?(a=0,c=1):(a=1,c=0),t.buffers.stencil.setTest(!0),t.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),t.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),t.buffers.stencil.setClear(c),t.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),t.buffers.color.setLocked(!1),t.buffers.depth.setLocked(!1),t.buffers.color.setMask(!0),t.buffers.depth.setMask(!0),t.buffers.stencil.setLocked(!1),t.buffers.stencil.setFunc(r.EQUAL,1,4294967295),t.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),t.buffers.stencil.setLocked(!0)}}class Je extends N{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ze{constructor(e,s){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),s===void 0){const i=e.getSize(new m);this._width=i.width,this._height=i.height,s=new X(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:K}),s.texture.name="EffectComposer.rt1"}else this._width=s.width,this._height=s.height;this.renderTarget1=s,this.renderTarget2=s.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ae(ye),this.copyPass.material.blending=Ne,this.clock=new We}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,s){this.passes.splice(s,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const s=this.passes.indexOf(e);s!==-1&&this.passes.splice(s,1)}isLastEnabledPass(e){for(let s=e+1;s<this.passes.length;s++)if(this.passes[s].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const s=this.renderer.getRenderTarget();let i=!1;for(let r=0,t=this.passes.length;r<t;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const c=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(c.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(c.EQUAL,1,4294967295)}this.swapBuffers()}we!==void 0&&(a instanceof we?i=!0:a instanceof Je&&(i=!1))}}this.renderer.setRenderTarget(s)}reset(e){if(e===void 0){const s=this.renderer.getSize(new m);this._pixelRatio=this.renderer.getPixelRatio(),this._width=s.width,this._height=s.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,s){this._width=e,this._height=s;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let t=0;t<this.passes.length;t++)this.passes[t].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class et extends N{constructor(e,s,i=null,r=null,t=null){super(),this.scene=e,this.camera=s,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=t,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new U}render(e,s,i){const r=e.autoClear;e.autoClear=!1;let t,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(t=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(t),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const tt={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new U(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class A extends N{constructor(e,s,i,r){super(),this.strength=s!==void 0?s:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new m(e.x,e.y):new m(256,256),this.clearColor=new U(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let t=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new X(t,a,{type:K}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const F=new X(t,a,{type:K});F.texture.name="UnrealBloomPass.h"+d,F.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(F);const z=new X(t,a,{type:K});z.texture.name="UnrealBloomPass.v"+d,z.texture.generateMipmaps=!1,this.renderTargetsVertical.push(z),t=Math.round(t/2),a=Math.round(a/2)}const c=tt;this.highPassUniforms=re.clone(c.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new P({uniforms:this.highPassUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader}),this.separableBlurMaterials=[];const n=[3,5,7,9,11];t=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(n[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new m(1/t,1/a),t=Math.round(t/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=s,this.compositeMaterial.uniforms.bloomRadius.value=.1;const _=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=_,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const g=ye;this.copyUniforms=re.clone(g.uniforms),this.blendMaterial=new P({uniforms:this.copyUniforms,vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,blending:Ge,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new U,this.oldClearAlpha=1,this.basic=new je,this.fsQuad=new Re(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,s){let i=Math.round(e/2),r=Math.round(s/2);this.renderTargetBright.setSize(i,r);for(let t=0;t<this.nMips;t++)this.renderTargetsHorizontal[t].setSize(i,r),this.renderTargetsVertical[t].setSize(i,r),this.separableBlurMaterials[t].uniforms.invSize.value=new m(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,s,i,r,t){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),t&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let c=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this.fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=c.texture,this.separableBlurMaterials[n].uniforms.direction.value=A.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[n]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=A.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[n]),e.clear(),this.fsQuad.render(e),c=this.renderTargetsVertical[n];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,t&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const s=[];for(let i=0;i<e;i++)s.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new P({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new m(.5,.5)},direction:{value:new m(.5,.5)},gaussianCoefficients:{value:s}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new P({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}A.BlurDirectionX=new m(1,0);A.BlurDirectionY=new m(0,1);const rt=({className:M,style:e,trailLength:s=50,inertia:i=.5,grainIntensity:r=.05,bloomStrength:t=.1,bloomRadius:a=1,bloomThreshold:c=.025,brightness:n=1,color:_="#B19EEF",mixBlendMode:g="screen",edgeIntensity:d=0,maxDevicePixelRatio:F=.5,targetPixels:z,fadeDelayMs:Pe,fadeDurationMs:_e,zIndex:oe=10})=>{const ne=o.useRef(null),le=o.useRef(null),ue=o.useRef(null),T=o.useRef(null),Ee=o.useRef(null),L=o.useRef(null),V=o.useRef([]),O=o.useRef(0),E=o.useRef(null),ce=o.useRef(null),W=o.useRef(new m(.5,.5)),G=o.useRef(new m(0,0)),j=o.useRef(1),Y=o.useRef(typeof performance<"u"?performance.now():Date.now()),Q=o.useRef(!1),I=o.useRef(!1),B=o.useMemo(()=>typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0),[]),$=z??(B?9e5:13e5),J=Pe??(B?500:1e3),fe=_e??(B?1e3:1500),Be=`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,De=`
    uniform float iTime;
    uniform vec3  iResolution;
    uniform vec2  iMouse;
    uniform vec2  iPrevMouse[MAX_TRAIL_LENGTH];
    uniform float iOpacity;
    uniform float iScale;
    uniform vec3  iBaseColor;
    uniform float iBrightness;
    uniform float iEdgeIntensity;
    varying vec2  vUv;

    float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7))) * 43758.5453123); }
    float noise(vec2 p){
      vec2 i = floor(p), f = fract(p);
      f *= f * (3. - 2. * f);
      return mix(mix(hash(i + vec2(0.,0.)), hash(i + vec2(1.,0.)), f.x),
                 mix(hash(i + vec2(0.,1.)), hash(i + vec2(1.,1.)), f.x), f.y);
    }
    float fbm(vec2 p){
      float v = 0.0;
      float a = 0.5;
      mat2 m = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
      for(int i=0;i<5;i++){
        v += a * noise(p);
        p = m * p * 2.0;
        a *= 0.5;
      }
      return v;
    }
    vec3 tint1(vec3 base){ return mix(base, vec3(1.0), 0.15); }
    vec3 tint2(vec3 base){ return mix(base, vec3(0.8, 0.9, 1.0), 0.25); }

    vec4 blob(vec2 p, vec2 mousePos, float intensity, float activity) {
      vec2 q = vec2(fbm(p * iScale + iTime * 0.1), fbm(p * iScale + vec2(5.2,1.3) + iTime * 0.1));
      vec2 r = vec2(fbm(p * iScale + q * 1.5 + iTime * 0.15), fbm(p * iScale + q * 1.5 + vec2(8.3,2.8) + iTime * 0.15));

      float smoke = fbm(p * iScale + r * 0.8);
      float radius = 0.5 + 0.3 * (1.0 / iScale);
      float distFactor = 1.0 - smoothstep(0.0, radius * activity, length(p - mousePos));
      float alpha = pow(smoke, 2.5) * distFactor;

      vec3 c1 = tint1(iBaseColor);
      vec3 c2 = tint2(iBaseColor);
      vec3 color = mix(c1, c2, sin(iTime * 0.5) * 0.5 + 0.5);

      return vec4(color * alpha * intensity, alpha * intensity);
    }

    void main() {
      vec2 uv = (gl_FragCoord.xy / iResolution.xy * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);
      vec2 mouse = (iMouse * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);

      vec3 colorAcc = vec3(0.0);
      float alphaAcc = 0.0;

      vec4 b = blob(uv, mouse, 1.0, iOpacity);
      colorAcc += b.rgb;
      alphaAcc += b.a;

      for (int i = 0; i < MAX_TRAIL_LENGTH; i++) {
        vec2 pm = (iPrevMouse[i] * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);
        float t = 1.0 - float(i) / float(MAX_TRAIL_LENGTH);
        t = pow(t, 2.0);
        if (t > 0.01) {
          vec4 bt = blob(uv, pm, t * 0.8, iOpacity);
          colorAcc += bt.rgb;
          alphaAcc += bt.a;
        }
      }

      colorAcc *= iBrightness;

      vec2 uv01 = gl_FragCoord.xy / iResolution.xy;
      float edgeDist = min(min(uv01.x, 1.0 - uv01.x), min(uv01.y, 1.0 - uv01.y));
      float distFromEdge = clamp(edgeDist * 2.0, 0.0, 1.0);
      float k = clamp(iEdgeIntensity, 0.0, 1.0);
      float edgeMask = mix(1.0 - k, 1.0, distFromEdge);

      float outAlpha = clamp(alphaAcc * iOpacity * edgeMask, 0.0, 1.0);
      gl_FragColor = vec4(colorAcc, outAlpha);
    }
  `,Ue=o.useMemo(()=>({uniforms:{tDiffuse:{value:null},iTime:{value:0},intensity:{value:r}},vertexShader:`
        varying vec2 vUv;
        void main(){
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float iTime;
        uniform float intensity;
        varying vec2 vUv;

        float hash1(float n){ return fract(sin(n)*43758.5453); }

        void main(){
          vec4 color = texture2D(tDiffuse, vUv);
          float n = hash1(vUv.x*1000.0 + vUv.y*2000.0 + iTime) * 2.0 - 1.0;
          color.rgb += n * intensity * color.rgb;
          gl_FragColor = color;
        }
      `}),[r]),Ae=o.useMemo(()=>new ae({uniforms:{tDiffuse:{value:null}},vertexShader:`
          varying vec2 vUv;
          void main(){
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform sampler2D tDiffuse;
          varying vec2 vUv;
          void main(){
            vec4 c = texture2D(tDiffuse, vUv);
            float a = max(c.a, 1e-5);
            vec3 straight = c.rgb / a;
            gl_FragColor = vec4(clamp(straight, 0.0, 1.0), c.a);
          }
        `}),[]);function Fe(l){const u=l.getBoundingClientRect(),w=600,f=Math.min(Math.max(1,u.width),Math.max(1,u.height));return Math.max(.5,Math.min(2,f/w))}o.useEffect(()=>{const l=ne.current,u=l==null?void 0:l.parentElement;if(!l||!u)return;const w=u.style.position;(!w||w==="static")&&(u.style.position="relative");const f=new Ie({antialias:!B,alpha:!0,depth:!1,stencil:!1,powerPreference:B?"low-power":"high-performance",premultipliedAlpha:!1,preserveDrawingBuffer:!1});f.setClearColor(0,0),le.current=f,f.domElement.style.pointerEvents="none",g?f.domElement.style.mixBlendMode=String(g):f.domElement.style.removeProperty("mix-blend-mode"),l.appendChild(f.domElement);const Z=new qe,Le=new Se(-1,1,1,-1,0,1),he=new Xe(2,2),me=Math.max(1,Math.floor(s));V.current=Array.from({length:me},()=>new m(.5,.5)),O.current=0;const ee=new U(_),H=new P({defines:{MAX_TRAIL_LENGTH:me},uniforms:{iTime:{value:0},iResolution:{value:new R(1,1,1)},iMouse:{value:new m(.5,.5)},iPrevMouse:{value:V.current.map(v=>v.clone())},iOpacity:{value:1},iScale:{value:1},iBaseColor:{value:new R(ee.r,ee.g,ee.b)},iBrightness:{value:n},iEdgeIntensity:{value:d}},vertexShader:Be,fragmentShader:De,transparent:!0,depthTest:!1,depthWrite:!1});T.current=H;const Ve=new Ce(he,H);Z.add(Ve);const x=new Ze(f);ue.current=x;const Oe=new et(Z,Le);x.addPass(Oe);const te=new A(new m(1,1),t,a,c);Ee.current=te,x.addPass(te);const de=new ae(Ue);L.current=de,x.addPass(de),x.addPass(Ae);const ve=()=>{var D;const v=l.getBoundingClientRect(),p=Math.max(1,Math.floor(v.width)),h=Math.max(1,Math.floor(v.height)),C=Math.min(typeof window<"u"&&window.devicePixelRatio||1,F),S=p*h*C*C,ie=S<=$?1:Math.max(.5,Math.min(1,Math.sqrt($/Math.max(1,S)))),y=C*ie;f.setPixelRatio(y),f.setSize(p,h,!1),(D=x.setPixelRatio)==null||D.call(x,y),x.setSize(p,h);const k=Math.max(1,Math.floor(p*y)),b=Math.max(1,Math.floor(h*y));H.uniforms.iResolution.value.set(k,b,1),H.uniforms.iScale.value=Fe(l),te.setSize(k,b)};ve();const se=new ResizeObserver(ve);ce.current=se,se.observe(u),se.observe(l);const Qe=typeof performance<"u"?performance.now():Date.now(),pe=()=>{var y,k;const v=performance.now(),p=(v-Qe)/1e3,h=T.current,C=ue.current;if(Q.current)G.current.set(W.current.x-h.uniforms.iMouse.value.x,W.current.y-h.uniforms.iMouse.value.y),h.uniforms.iMouse.value.copy(W.current),j.current=1;else{G.current.multiplyScalar(i),G.current.lengthSq()>1e-6&&h.uniforms.iMouse.value.add(G.current);const b=v-Y.current;if(b>J){const D=Math.min(1,(b-J)/fe);j.current=Math.max(0,1-D)}}const S=V.current.length;O.current=(O.current+1)%S,V.current[O.current].copy(h.uniforms.iMouse.value);const ie=h.uniforms.iPrevMouse.value;for(let b=0;b<S;b++){const D=(O.current-b+S)%S;ie[b].copy(V.current[D])}if(h.uniforms.iOpacity.value=j.current,h.uniforms.iTime.value=p,(k=(y=L.current)==null?void 0:y.uniforms)!=null&&k.iTime&&(L.current.uniforms.iTime.value=p),C.render(),!Q.current&&j.current<=.001){I.current=!1,E.current=null;return}E.current=requestAnimationFrame(pe)},q=()=>{I.current||(I.current=!0,E.current=requestAnimationFrame(pe))},ge=v=>{const p=u.getBoundingClientRect(),h=Te.clamp((v.clientX-p.left)/Math.max(1,p.width),0,1),C=Te.clamp(1-(v.clientY-p.top)/Math.max(1,p.height),0,1);W.current.set(h,C),Q.current=!0,Y.current=performance.now(),q()},xe=()=>{Q.current=!0,q()},be=()=>{Q.current=!1,Y.current=performance.now(),q()};return u.addEventListener("pointermove",ge,{passive:!0}),u.addEventListener("pointerenter",xe,{passive:!0}),u.addEventListener("pointerleave",be,{passive:!0}),q(),()=>{var v;E.current&&cancelAnimationFrame(E.current),I.current=!1,E.current=null,u.removeEventListener("pointermove",ge),u.removeEventListener("pointerenter",xe),u.removeEventListener("pointerleave",be),(v=ce.current)==null||v.disconnect(),Z.clear(),he.dispose(),H.dispose(),x.dispose(),f.dispose(),f.domElement&&f.domElement.parentElement&&f.domElement.parentElement.removeChild(f.domElement),(!w||w==="static")&&(u.style.position=w)}},[s,i,r,t,a,c,$,J,fe,B,_,n,g,d]),o.useEffect(()=>{if(T.current){const l=new U(_);T.current.uniforms.iBaseColor.value.set(l.r,l.g,l.b)}},[_]),o.useEffect(()=>{T.current&&(T.current.uniforms.iBrightness.value=n)},[n]),o.useEffect(()=>{T.current&&(T.current.uniforms.iEdgeIntensity.value=d)},[d]),o.useEffect(()=>{var l,u;(u=(l=L.current)==null?void 0:l.uniforms)!=null&&u.intensity&&(L.current.uniforms.intensity.value=r)},[r]),o.useEffect(()=>{var u;const l=(u=le.current)==null?void 0:u.domElement;l&&(g?l.style.mixBlendMode=String(g):l.style.removeProperty("mix-blend-mode"))},[g]);const ze=o.useMemo(()=>({zIndex:oe,...e}),[oe,e]);return He.jsx("div",{ref:ne,className:`ghost-cursor ${M??""}`,style:ze})};export{rt as default};
