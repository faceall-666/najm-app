const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./journeyFX-C6NO_W80.js","./index-DxCBhnAT.js","./index-BEJRGjlI.css","./probeFrame-De_qr6eQ.js"])))=>i.map(i=>d[i]);
import{Q as qs,bb as Pe,bY as E,cj as Lt,ck as xe,cl as Ve,cm as I,cn as it,co as ns,cp as lt,cq as Js,M as je,cr as Ms,cs as Se,ct as _s,cu as Ks,cv as Ys,cw as Qs,cx as Zs,cy as Tt,cz as Ce,cA as ei,cB as kt,cC as Rs,cD as Es,cE as ti,cF as si,cG as zs,cH as ii,cI as nt,af as ni,cJ as ai,cK as oi,cL as ri,e as li,cM as ci,N as di,ba as $e,a7 as ui,ar as hi,as as fi,K as pi,L as mi,cN as Ke,cO as as,cP as gi,cQ as vi,cR as yi,cS as xi,cT as os,cU as wi,cV as Si,cW as rs,cX as ls,cY as Ye,cZ as bi,c_ as Ai,c$ as Mi,d0 as _i,d1 as Ri,d2 as Ft,d3 as ce,d4 as Pt,d5 as Ls,d6 as Ct,d7 as Ts,d8 as Fs,S as Ei,d as zi,bZ as Li,d9 as Ti,P as Fi,f as Pi,_ as Ps,h as cs,v as Ci,da as ki,c0 as Oi,db as Di,dc as Ui,dd as Gi,de as Bi,df as Ii,dg as Ni,dh as Hi,bD as Cs,ag as wt,di as Wi,D as St,dj as $i,dk as Vi,c3 as ji,c4 as Xi,bI as qi,dl as Ji,dm as Ki}from"./index-DxCBhnAT.js";import{S as tt,U as st,R as Yi,b as Qi,p as Zi,s as en,B as tn,c as sn,W as nn}from"./impostor-pIJ2_59H.js";import{A as an,a as on,s as rn,b as ln}from"./artShaded-Dd8fLczW.js";import{R as de,a as bt,b as C,c as cn,B as at,r as dn}from"./layers-1onDMVgd.js";import{e as un,E as At,a as hn,M as fn}from"./milkyway-6todqIrA.js";import{b as pn,h as mn,s as gn,a as vn}from"./bodySizes-uV0DOfM-.js";import{G as ds}from"./glow-DiCAc2GK.js";import{e as yn,v as xn,l as wn}from"./phase-BqDDXW_6.js";import{a as Sn}from"./starColor-D_0EdDqh.js";const bn=3,An=.46,Mn=1.15,_n=.5,V=10,us=new Js(.9,.93,.94),Rn=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,En=`
  uniform sampler2D uA;       // contour + fill
  uniform sampler2D uI;       // inner lines (Outline)
  uniform sampler2D uShaded;  // smooth original figure, in the identical registered frame
  uniform float uOpacity;     // fade × intensity × FIG_PEAK
  uniform float uStyle;       // 0 Outline … 1 Shaded (eased)
  uniform vec3 uTint;
  varying vec2 vUv;
  ${lt}
  void main() {
    float a = texture2D(uA, vUv).r;
    float outline = min(a + texture2D(uI, vUv).r, 1.0);
    float shaded = texture2D(uShaded, vUv).r;
    // Broad painted light and shadow replace the fine engraved mesh. No hatch-LOD fade or extra contour.
    float v = mix(outline, shaded, uStyle) * uOpacity;
    if (v < 0.002) discard;
    gl_FragColor = najmOutput(uTint * v, v);
  }
`,zn=`
  attribute float aFig;
  varying vec2 vUv;
  varying float vFig;
  void main() { vUv = uv; vFig = aFig; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,Ln=`
  uniform sampler2D uAtlas;   // every figure's outline picture
  uniform float uOpacity;
  uniform vec4 uHideIdx;      // figures drawn from their own sheet right now (index, or -1) …
  uniform vec4 uHideAmt;      // … and how much (their sheet's fade)
  uniform vec3 uTint;
  varying vec2 vUv;
  varying float vFig;
  ${lt}
  void main() {
    float hide = dot(vec4(lessThan(abs(vec4(vFig) - uHideIdx), vec4(0.5))), uHideAmt);
    float v = texture2D(uAtlas, vUv).r * uOpacity * clamp(1.0 - hide, 0.0, 1.0);
    if (v < 0.002) discard;
    gl_FragColor = najmOutput(uTint * v, v);
  }
`;function Tn(a){const e=a.anchors.map(([u,h])=>{const p=[0,0,0];return Ks(u,h,p,0),new E(p[0],p[1],p[2])}),t=e.reduce((u,h)=>u.add(h),new E).normalize(),i=new E(0,0,1).cross(t);i.lengthSq()<1e-6&&i.set(1,0,0),i.normalize();const s=new E().crossVectors(t,i),n=e.map(u=>{const h=u.dot(t);return[u.dot(i)/h,u.dot(s)/h]}),o=new Ys().set(a.anchors[0][2],a.anchors[0][3],1,a.anchors[1][2],a.anchors[1][3],1,a.anchors[2][2],a.anchors[2][3],1).clone().invert().elements,l=(u,h)=>o[h*3+u],c=[0,1,2].map(u=>[0,1].map(h=>l(u,0)*n[0][h]+l(u,1)*n[1][h]+l(u,2)*n[2][h]));return{c:t,e1:i,e2:s,M:c}}function ks(a,e,t,i=new E){const s=e*a.M[0][0]+t*a.M[1][0]+a.M[2][0],n=e*a.M[0][1]+t*a.M[1][1]+a.M[2][1];return i.copy(a.c).addScaledVector(a.e1,s).addScaledVector(a.e2,n).normalize()}function hs(a,e){const t=[],i=[],s=[],n=new E;for(let r=0;r<=V;r++)for(let o=0;o<=V;o++)ks(e,o/V*a.w,r/V*a.h,n),t.push(n.x*bt,n.y*bt,n.z*bt),i.push(o/V,r/V);for(let r=0;r<V;r++)for(let o=0;o<V;o++){const l=r*(V+1)+o;s.push(l,l+1,l+V+1,l+1,l+V+2,l+V+1)}return{pos:t,g:i,idx:s}}function Fn(a,e){const t=[];for(let s=0;s<=4;s++){const n=s/4;for(const[r,o]of[[n,0],[n,1],[0,n],[1,n]])t.push(ks(e,r*a.w,o*a.h))}const i=t.reduce((s,n)=>s.add(n),new E).normalize();return{center:i,radius:Math.max(...t.map(s=>s.angleTo(i)))}}function Pn(a){const e=Qs(`art/sheets/${a}`,ln),t=rn(a);let i=!t;const s=t?Ms(t,{srgb:!1,red:!0,cache:!1,onLoad:()=>{i=!0},onError:()=>{i=!0}}):null;return s&&(s.flipY=!1,s.anisotropy=8),{textures:[...e.textures,s??e.textures[0]],get ready(){return e.ready&&i},get shaded(){return!!s?.image},dispose(){e.dispose(),s&&_s(s)}}}const Cn=(a,e,t)=>Math.min(t,Math.max(e,a));class kn{journeyMode=null;setJourneyMode(e,t){return this.journeyMode&&this.journeyMode.owner!==e?!1:(this.journeyMode={owner:e,mode:t},!0)}releaseJourneyMode(e){this.journeyMode?.owner===e&&(this.journeyMode=null)}sky;items;lru=[];pipe;style=1;allFade=0;atlas=null;constructor(e,t){this.sky=e,this.pipe=t,this.items=qs.map((i,s)=>{const n=Tn(i),{center:r,radius:o}=Fn(i,n);return{def:i,index:s,frame:n,center:r,radius:o,mesh:null,mat:null,sheet:null,opacity:0}})}get resident(){return this.lru.map(e=>e.def.id)}get atlasResident(){return!!this.atlas}update(e){const{view:t,model:i,s,browse:n,dt:r,display:o}=e,l=i.starPositionsJ2000===Pe,c=l?this.journeyMode?.mode??(s.art?o.figures:"off"):"off";if(!l){for(const y of this.items)y.opacity=0;this.allFade=0}const u=An*(n?1:Mn)*Cn(o.figureIntensity,.3,1),h=o.figureStyle==="outline"?0:1;this.style+=(h-this.style)*Math.min(1,r*6);const p=t.m,w=new E(-p[2],-p[5],-p[8]),R=i.E,j=new E(R[0]*w.x+R[3]*w.y+R[6]*w.z,R[1]*w.x+R[4]*w.y+R[7]*w.z,R[2]*w.x+R[5]*w.y+R[8]*w.z),k=Math.atan(Math.hypot(t.width,t.height)/2/t.f);for(const y of this.items){const m=c!=="off"&&y.def.id===s.focusId&&j.angleTo(y.center)-y.radius<k;m&&(!e.deferConstellationWork||y.mesh)&&this.ensure(y);const b=m&&y.sheet?.ready&&(!e.deferConstellationWork||y.opacity>.004)?1:0;y.opacity+=(b-y.opacity)*Math.min(1,r*(b>y.opacity?3:5)),y.mesh&&y.mat&&(y.mesh.visible=y.opacity>.004,y.mat.uniforms.uOpacity.value=y.opacity*u,y.mat.uniforms.uStyle.value=y.sheet?.shaded?this.style:0)}const O=c==="all"?1:0;if(this.allFade+=(O-this.allFade)*Math.min(1,r*4),(O||this.allFade>.004)&&(this.atlas||!e.deferConstellationWork)){const y=this.ensureAtlas();y.mesh.visible=!e.deferConstellationWork||y.uploadedVersion===y.tex.version,y.mat.uniforms.uOpacity.value=this.allFade*u*_n;const m=y.mat.uniforms.uHideIdx.value,b=y.mat.uniforms.uHideAmt.value;m.set(-1,-1,-1,-1),b.set(0,0,0,0),this.lru.slice(-4).forEach((q,me)=>{m.setComponent(me,q.index),b.setComponent(me,q.opacity)})}else this.atlas&&this.freeAtlas()}ensure(e){const t=this.lru.indexOf(e);if(e.mesh){t!==this.lru.length-1&&(this.lru.splice(t,1),this.lru.push(e));return}for(;this.lru.length>=bn;)this.evict(this.lru.find(w=>w.opacity<=.004)??this.lru[0]);const{pos:i,g:s,idx:n}=hs(e.def,e.frame),r=new Lt;r.setAttribute("position",new xe(i,3)),r.setAttribute("uv",new xe(s,2)),r.setIndex(n);const o=Pn(e.def.file),[l,c,u]=o.textures,h=new Ve({vertexShader:Rn,fragmentShader:En,side:ns,transparent:!0,depthTest:!0,depthWrite:!1,blending:it,blendSrc:I,blendDst:I,blendSrcAlpha:I,blendDstAlpha:I,uniforms:{uA:{value:l},uI:{value:c},uShaded:{value:u},uOpacity:{value:0},uStyle:{value:0},uTint:{value:us.clone()},...this.pipe.uniforms}}),p=new je(r,h);p.renderOrder=de.figures,p.frustumCulled=!1,p.visible=!1,this.sky.add(p),e.mesh=p,e.mat=h,e.sheet=o,this.lru.push(e)}evict(e){const t=this.lru.indexOf(e);t>=0&&this.lru.splice(t,1),e.mesh&&(this.sky.remove(e.mesh),e.mesh.geometry.dispose()),e.mat?.dispose(),e.sheet?.dispose(),e.mesh=null,e.mat=null,e.sheet=null,e.opacity=0}ensureAtlas(){if(this.atlas)return this.atlas;const[e,t]=on,i=[],s=[],n=[],r=[];for(const p of this.items){const w=an[p.def.id];if(!w)continue;const[R,j,k]=w,O=hs(p.def,p.frame),y=i.length/3;i.push(...O.pos);for(let m=0;m<O.g.length;m+=2)s.push((R+O.g[m]*k)/e,1-(j+O.g[m+1]*k)/t),n.push(p.index);for(const m of O.idx)r.push(y+m)}const o=new Lt;o.setAttribute("position",new xe(i,3)),o.setAttribute("uv",new xe(s,2)),o.setAttribute("aFig",new xe(n,1)),o.setIndex(r);const l=Ms("art/atlas.webp",{srgb:!1,cache:!1,red:!0});l.anisotropy=8;const c=new Ve({vertexShader:zn,fragmentShader:Ln,side:ns,transparent:!0,depthTest:!0,depthWrite:!1,blending:it,blendSrc:I,blendDst:I,blendSrcAlpha:I,blendDstAlpha:I,uniforms:{uAtlas:{value:l},uOpacity:{value:0},uHideIdx:{value:new Se(-1,-1,-1,-1)},uHideAmt:{value:new Se},uTint:{value:us.clone()},...this.pipe.uniforms}}),u=new je(o,c);u.renderOrder=de.figures,u.frustumCulled=!1,this.sky.add(u);const h={mesh:u,mat:c,tex:l,uploadedVersion:-1};return l.onUpdate=()=>{h.uploadedVersion=l.version},this.atlas=h,this.atlas}freeAtlas(){const e=this.atlas;e&&(this.sky.remove(e.mesh),e.mesh.geometry.dispose(),e.mat.dispose(),e.tex.onUpdate=null,_s(e.tex),this.atlas=null)}contextLost(){for(const e of[...this.lru])this.evict(e);this.freeAtlas(),this.allFade=0}dispose(){this.contextLost()}}const fs=new kt,Qe=new E;class ke extends Zs{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new xe(e,3)),this.setAttribute("uv",new xe(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Tt(t,6,1);return this.setAttribute("instanceStart",new Ce(i,3,0)),this.setAttribute("instanceEnd",new Ce(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Tt(t,6,1);return this.setAttribute("instanceColorStart",new Ce(i,3,0)),this.setAttribute("instanceColorEnd",new Ce(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new ei(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kt);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),fs.setFromBufferAttribute(t),this.boundingBox.union(fs))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let n=0,r=e.count;n<r;n++)Qe.fromBufferAttribute(e,n),s=Math.max(s,i.distanceToSquared(Qe)),Qe.fromBufferAttribute(t,n),s=Math.max(s,i.distanceToSquared(Qe));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}st.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ti(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};tt.line={uniforms:Es.merge([st.common,st.fog,st.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Ot extends Ve{constructor(e){super({type:"LineMaterial",uniforms:Es.clone(tt.line.uniforms),vertexShader:tt.line.vertexShader,fragmentShader:tt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Mt=new Se,ps=new E,ms=new E,L=new Se,T=new Se,se=new Se,_t=new E,Rt=new zs,F=new si,gs=new E,Ze=new kt,et=new Rs,ie=new Se;let ne,we;function vs(a,e,t){return ie.set(0,0,-e,1).applyMatrix4(a.projectionMatrix),ie.multiplyScalar(1/ie.w),ie.x=we/t.width,ie.y=we/t.height,ie.applyMatrix4(a.projectionMatrixInverse),ie.multiplyScalar(1/ie.w),Math.abs(Math.max(ie.x,ie.y))}function On(a,e){const t=a.matrixWorld,i=a.geometry,s=i.attributes.instanceStart,n=i.attributes.instanceEnd,r=Math.min(i.instanceCount,s.count);for(let o=0,l=r;o<l;o++){F.start.fromBufferAttribute(s,o),F.end.fromBufferAttribute(n,o),F.applyMatrix4(t);const c=new E,u=new E;ne.distanceSqToSegment(F.start,F.end,u,c),u.distanceTo(c)<we*.5&&e.push({point:u,pointOnLine:c,distance:ne.origin.distanceTo(u),object:a,face:null,faceIndex:o,uv:null,uv1:null})}}function Dn(a,e,t){const i=e.projectionMatrix,n=a.material.resolution,r=a.matrixWorld,o=a.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,u=Math.min(o.instanceCount,l.count),h=-e.near;ne.at(1,se),se.w=1,se.applyMatrix4(e.matrixWorldInverse),se.applyMatrix4(i),se.multiplyScalar(1/se.w),se.x*=n.x/2,se.y*=n.y/2,se.z=0,_t.copy(se),Rt.multiplyMatrices(e.matrixWorldInverse,r);for(let p=0,w=u;p<w;p++){if(L.fromBufferAttribute(l,p),T.fromBufferAttribute(c,p),L.w=1,T.w=1,L.applyMatrix4(Rt),T.applyMatrix4(Rt),L.z>h&&T.z>h)continue;if(L.z>h){const m=L.z-T.z,b=(L.z-h)/m;L.lerp(T,b)}else if(T.z>h){const m=T.z-L.z,b=(T.z-h)/m;T.lerp(L,b)}L.applyMatrix4(i),T.applyMatrix4(i),L.multiplyScalar(1/L.w),T.multiplyScalar(1/T.w),L.x*=n.x/2,L.y*=n.y/2,T.x*=n.x/2,T.y*=n.y/2,F.start.copy(L),F.start.z=0,F.end.copy(T),F.end.z=0;const j=F.closestPointToPointParameter(_t,!0);F.at(j,gs);const k=ii.lerp(L.z,T.z,j),O=k>=-1&&k<=1,y=_t.distanceTo(gs)<we*.5;if(O&&y){F.start.fromBufferAttribute(l,p),F.end.fromBufferAttribute(c,p),F.start.applyMatrix4(r),F.end.applyMatrix4(r);const m=new E,b=new E;ne.distanceSqToSegment(F.start,F.end,b,m),t.push({point:b,pointOnLine:m,distance:ne.origin.distanceTo(b),object:a,face:null,faceIndex:p,uv:null,uv1:null})}}}class ot extends je{constructor(e=new ke,t=new Ot({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let r=0,o=0,l=t.count;r<l;r++,o+=2)ps.fromBufferAttribute(t,r),ms.fromBufferAttribute(i,r),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+ps.distanceTo(ms);const n=new Tt(s,2,1);return e.setAttribute("instanceDistanceStart",new Ce(n,1,0)),e.setAttribute("instanceDistanceEnd",new Ce(n,1,1)),this}raycast(e,t){const i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const n=e.params.Line2!==void 0&&e.params.Line2.threshold||0;ne=e.ray;const r=this.matrixWorld,o=this.geometry,l=this.material;we=l.linewidth+n,o.boundingSphere===null&&o.computeBoundingSphere(),et.copy(o.boundingSphere).applyMatrix4(r);let c;if(i)c=we*.5;else{const h=Math.max(s.near,et.distanceToPoint(ne.origin));c=vs(s,h,l.resolution)}if(et.radius+=c,ne.intersectsSphere(et)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Ze.copy(o.boundingBox).applyMatrix4(r);let u;if(i)u=we*.5;else{const h=Math.max(s.near,Ze.distanceToPoint(ne.origin));u=vs(s,h,l.resolution)}Ze.expandByScalar(u),ne.intersectsBox(Ze)!==!1&&(i?On(this,t):Dn(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Mt),this.material.uniforms.resolution.value.set(Mt.z,Mt.w))}}class Os extends ke{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,i=new Float32Array(2*t);for(let s=0;s<t;s+=3)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];return super.setPositions(i),this}setColors(e){const t=e.length-3,i=new Float32Array(2*t);for(let s=0;s<t;s+=3)i[2*s]=e[s],i[2*s+1]=e[s+1],i[2*s+2]=e[s+2],i[2*s+3]=e[s+3],i[2*s+4]=e[s+4],i[2*s+5]=e[s+5];return super.setColors(i),this}setFromPoints(e){const t=e.length-1,i=new Float32Array(6*t);for(let s=0;s<t;s++)i[6*s]=e[s].x,i[6*s+1]=e[s].y,i[6*s+2]=e[s].z||0,i[6*s+3]=e[s+1].x,i[6*s+4]=e[s+1].y,i[6*s+5]=e[s+1].z||0;return super.setPositions(i),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class Un extends ot{constructor(e=new Os,t=new Ot({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const ys=.45*Math.PI/180;function rt(a,e,t){const i=new Ot({color:a,linewidth:e,transparent:!0,opacity:t,depthTest:!1,depthWrite:!1});return i.worldUnits=!1,i}function Gn(a,e,t){const i=Math.min(1,Math.max(-1,a[0]*e[0]+a[1]*e[1]+a[2]*e[2])),s=Math.acos(i);if(s<t*2.4)return null;const n=Math.sin(s),r=o=>{const l=Math.sin((1-o)*s)/n,c=Math.sin(o*s)/n;return[a[0]*l+e[0]*c,a[1]*l+e[1]*c,a[2]*l+e[2]*c]};return[r(t/s),r(1-t/s)]}function xs(a,e){const t=[];for(const i of ni)if(!(a&&!a.has(i.id)))for(const s of i.lines)for(let n=0;n+5<s.length;n+=3){const r=Gn([s[n],s[n+1],s[n+2]],[s[n+3],s[n+4],s[n+5]],e);r&&t.push(r[0][0]*C,r[0][1]*C,r[0][2]*C,r[1][0]*C,r[1][1]*C,r[1][2]*C)}return new Float32Array(t)}class Bn{all;focus;matAll;matFocus;focusId=null;ratio=1;constructor(e,t){this.matAll=rt(4155056,1,.3),this.matFocus=rt(6200319,2.4,1),t.adoptLineMaterial(this.matAll),t.adoptLineMaterial(this.matFocus);const i=new ke;i.setPositions(xs(null,ys)),this.all=new ot(i,this.matAll),this.all.renderOrder=de.lines,this.all.frustumCulled=!1,e.add(this.all),this.focus=new ot(new ke,this.matFocus),this.focus.renderOrder=de.lines,this.focus.frustumCulled=!1,this.focus.visible=!1,e.add(this.focus)}resize(e,t,i){for(const s of[this.matAll,this.matFocus])s.resolution.set(e,t);this.ratio=i}update(e){const{s:t,browse:i}=e,s=t.lines&&e.display.lines&&e.model.starPositionsJ2000===Pe;this.all.visible=s,this.matAll.opacity=i?.3:.4,this.matAll.linewidth=nt(i?1:1.2,this.ratio),this.matFocus.linewidth=nt(i?2.4:2.7,this.ratio),(!s||!e.deferConstellationWork)&&this.setFocus(s?t.focusId:null)}setFocus(e){if(e===this.focusId)return;if(this.focusId=e,!e){this.focus.visible=!1;return}const t=new ke;t.setPositions(xs(new Set([e]),ys)),this.focus.geometry.dispose(),this.focus.geometry=t,this.focus.visible=!0}dispose(){for(const e of[this.all,this.focus])e.geometry.dispose();for(const e of[this.matAll,this.matFocus])e.dispose()}}function In(a){const e=(s,n,r)=>{const o=Math.min(1,Math.max(0,(r-s)/(n-s)));return o*o*(3-2*o)},t=e(.004,-.03,a),i=e(-.02,-.6,a);return[.085+(.038-.085)*i,.072+(.034-.072)*i,.064+(.034-.064)*i].map(s=>s*t)}const Nn=`
  varying vec3 vDir;
  void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,Hn=`
  uniform float uGround;
  varying vec3 vDir;
  ${lt}
  void main() {
    // below the horizon (browse mode): a dark, warm ground tint, so pointing down reads as "under the ground";
    // what is drawn there (stars, lines, figures) stays visible at 70 % (groundTint() is the same in JS)
    float z = normalize(vDir).z;
    float below = smoothstep(0.004, -0.03, z) * uGround;
    float deep = smoothstep(-0.02, -0.6, z);
    vec3 tint = mix(vec3(0.085, 0.072, 0.064), vec3(0.038, 0.034, 0.034), deep);
    gl_FragColor = najmOutput(tint * below, ${(1-at).toFixed(2)} * below);   // premultiplied
  }
`;class Wn{env;envMat;horizon;horizonMat;grid;gridMat;constructor(e,t){this.envMat=new Ve({vertexShader:Nn,fragmentShader:Hn,side:oi,transparent:!0,depthTest:!1,depthWrite:!1,blending:it,blendSrc:I,blendDst:ai,uniforms:{uGround:{value:1},...t.uniforms}}),this.env=new je(new ri(cn,64,32),this.envMat),this.env.renderOrder=de.ground,this.env.frustumCulled=!1,e.add(this.env);const i=[];for(let l=0;l<=360;l+=1)i.push(Math.sin(l*Math.PI/180)*C,Math.cos(l*Math.PI/180)*C,0);const s=new Os;s.setPositions(i),this.horizonMat=rt(14698061,1.5,.92),t.adoptLineMaterial(this.horizonMat),this.horizon=new Un(s,this.horizonMat),this.horizon.renderOrder=de.horizon,this.horizon.frustumCulled=!1,e.add(this.horizon);const n=[],r=(l,c)=>{const u=Math.cos(c*Math.PI/180);return[Math.sin(l*Math.PI/180)*u*C,Math.cos(l*Math.PI/180)*u*C,Math.sin(c*Math.PI/180)*C]};for(let l=15;l<90;l+=15)for(let c=0;c<360;c+=3)n.push(...r(c,l),...r(c+3,l));for(let l=0;l<360;l+=15)for(let c=-84;c<84;c+=3)n.push(...r(l,c),...r(l,c+3));const o=new ke;o.setPositions(n),this.gridMat=rt(8378623,1,.16),t.adoptLineMaterial(this.gridMat),this.grid=new ot(o,this.gridMat),this.grid.renderOrder=de.grid,this.grid.frustumCulled=!1,this.grid.visible=!1,e.add(this.grid)}resize(e,t,i){for(const s of[this.horizonMat,this.gridMat])s.resolution.set(e,t);this.horizonMat.linewidth=nt(1.5,i),this.gridMat.linewidth=nt(1,i)}update(e){this.env.visible=e.ground,this.envMat.uniforms.uGround.value=1,this.horizon.visible=!0,this.grid.visible=e.s.grid}dispose(){this.env.geometry.dispose(),this.envMat.dispose();for(const e of[this.horizon,this.grid])e.geometry.dispose();for(const e of[this.horizonMat,this.gridMat])e.dispose()}}const $n=.18,Et=a=>a*a*(3-2*a),Vn=a=>Math.min(1,Math.max(0,a));class jn{target=null;bodies=new Map;stars=new Map;set(e){this.target=e}get current(){return this.target}step(e){const t=Math.max(0,e)/$n,i=this.target;ws(this.bodies,i?.kind==="body"?i.id:null,t),ws(this.stars,i?.kind==="star"?i.index:null,t)}body(e){return Et(this.bodies.get(e)??0)}star(e){return Et(this.stars.get(e)??0)}starSlots(){const e=this.target,t=e?.kind==="star"?e.index:-1;let i=-1,s=0;for(const[n,r]of this.stars)n!==t&&r>s&&(i=n,s=r);return{a:t,amtA:t>=0?this.star(t):0,b:i,amtB:i>=0?Et(s):0}}}function ws(a,e,t){e!==null&&!a.has(e)&&a.set(e,0);for(const[i,s]of a){const n=Vn(s+(i===e?t:-t));n>0||i===e?a.set(i,n):a.delete(i)}}function Xn(a,e,t){return a*(1+(e-1)*t)}const qn=.6,zt=.29,Jn=2;class Kn{scene;meshes=new Map;quad=new li(2,2);baseRadii={};sizeVersion=-1;sizeF=0;sizeScale=1;sizeBodies=null;star={};radii;constructor(e,t,i){this.scene=e,this.radii=t;const s=o=>{const l=tn[o],c=sn(o,{pipe:i,map:l.sky,normal:l.normal,shared:!0}),u=new je(this.quad,c.mat);u.frustumCulled=!1,u.renderOrder=de.bodies,this.scene.add(u);const h={mesh:u,look:c};return this.meshes.set(o,h),h},n=(o,l,c)=>{o.halo=new ds(this.quad,i,"halo"),o.haloStrength=l,o.haloColor=c,this.scene.add(o.halo.mesh)},r=s("sun");r.glare=new ds(this.quad,i,"glare",zt),this.scene.add(r.glare.mesh),n(s("moon"),.5,[1,1,1]),s("mercury"),n(s("venus"),.35,[1,.965,.902]);for(const o of["mars","jupiter","saturn","uranus","neptune"])s(o)}updateRadii(e,t){const{view:i,model:s,s:n}=e,r=Math.min(1,Math.max(0,e.display.planetScale*(n.bodyScale??1)));(s.version!==this.sizeVersion||i.f!==this.sizeF||r!==this.sizeScale||s.bodies!==this.sizeBodies)&&(this.baseRadii=pn(s.bodies,i.f,r),this.sizeVersion=s.version,this.sizeF=i.f,this.sizeScale=r,this.sizeBodies=s.bodies);for(const o of s.bodies){const l=this.baseRadii[o.id]??10,c=t.body(o.id),u=c>0?mn(s.bodies,this.baseRadii,i.f,o.id):1,h=Xn(l,u,c),p=o.id==="sun"||o.id==="moon"?null:gn(o.mag,n.magLimit,e.browse,e.pixelRatio,e.display),w=p?vn(h,p.core):0;this.star[o.id]=p?{...p,w,disc:h}:void 0,this.radii[o.id]=p&&w>0?Math.max(h,p.core*w):h}}update(e){[...e.model.bodies].sort((i,s)=>i.distAu-s.distAu).forEach((i,s)=>this.place(i,60+s*12,e))}place(e,t,i){const s=this.meshes.get(e.id);if(!s)return;const{view:n,browse:r,ground:o}=i,l=this.star[e.id],c=l?.disc??this.radii[e.id]??10,u=t*c/n.f,h=e.enu,p=n.m,w=[p[1],p[4],p[7]],R=[-p[2],-p[5],-p[8]],j=(e.id==="saturn"?Yi:1)+Jn/(i.pixelRatio*Math.max(c,.001)),k=!!l&&l.w>0&&l.intensity>0,O=k?Math.max(j,l.core*3.2/Math.max(c,.001)):j,y=Math.atan(Math.hypot(n.width,n.height)/2/n.f),m=h[0]*R[0]+h[1]*R[1]+h[2]*R[2],b=Math.acos(Math.min(1,Math.max(-1,m))),q=G=>b<y+Math.atan(G/n.f)+.02,me=q(O*c);if(s.mesh.visible=me,s.glare&&(s.glare.mesh.visible=q(c/zt)),s.halo&&(s.halo.mesh.visible=q(c*3.5)),!me&&!s.glare?.mesh.visible&&!s.halo?.mesh.visible)return;s.mesh.position.set(h[0]*t,h[1]*t,h[2]*t),s.mesh.scale.setScalar(u);const[be,Ae,ue]=ci(h,e.frame,w,e.id==="saturn"?di:0),ae=Qi(h,w),D=s.look.mat.uniforms;Zi(ae,be,Ae,ue,D.uM.value),D.uAxisX.value.set(ae[0][0],ae[0][1],ae[0][2]),D.uAxisY.value.set(ae[1][0],ae[1][1],ae[1][2]),D.uQuad.value=O;const A=e.sunDir;D.uSunB.value.set(A[0]*be[0]+A[1]*be[1]+A[2]*be[2],A[0]*ue[0]+A[1]*ue[1]+A[2]*ue[2],-(A[0]*Ae[0]+A[1]*Ae[1]+A[2]*Ae[2])),D.uSpin.value=en(e.id)*i.time;const Me=e.alt<-.6,he=Me?at:1,J=un(e.alt);D.uExtinct.value.set(J[0]*he,J[1]*he,J[2]*he);const _e=o&&Me?In(Math.sin(e.alt*Math.PI/180)):[0,0,0];D.uGround.value.set(_e[0],_e[1],_e[2]);const ct=r?1:qn;s.look.mat.blendAlpha=ct;const oe=-(A[0]*h[0]+A[1]*h[1]+A[2]*h[2]),Re=e.id==="sun"?1:(1+oe)/2;D.uEarthshine.value=e.id==="moon"?yn(Re):0,D.uPhaseGain.value=e.id==="venus"?xn(oe):1;const Oe=D.uStar.value;k?Oe.set(l.w,l.core/c,l.intensity*(he*(J[0]+J[1]+J[2])/3),l.core*3.2/c):Oe.set(0,1,0,1);const Xe=G=>[0,1,2].map(ge=>G[ge]*Math.pow(J[ge]*he,1/2.2));if(s.glare){s.glare.mesh.position.copy(s.mesh.position),s.glare.mesh.scale.setScalar(t*c/zt/n.f),s.glare.opacity=Me?.35:1;const G=Xe([1,1,1]);s.glare.mat.uniforms.uTint.value.set(G[0],G[1],G[2])}if(s.halo){const G=A[0]+oe*h[0],ge=A[1]+oe*h[1],De=A[2]+oe*h[2],z=Math.hypot(G,ge,De),Ee=z>1e-6?wn(oe)*u/z:0;s.halo.mesh.position.set(h[0]*t+G*Ee,h[1]*t+ge*Ee,h[2]*t+De*Ee);const N=c*(1.4+2*Math.sqrt(Re));s.halo.mesh.scale.setScalar(t*N/n.f),s.halo.opacity=(s.haloStrength??.3)*Re*(Me?at:1);const ze=Xe(s.haloColor??[1,1,1]);s.halo.mat.uniforms.uTint.value.set(ze[0],ze[1],ze[2])}}dispose(){for(const e of this.meshes.values())this.scene.remove(e.mesh),e.look.dispose(),e.glare&&(this.scene.remove(e.glare.mesh),e.glare.dispose()),e.halo&&(this.scene.remove(e.halo.mesh),e.halo.dispose());this.quad.dispose()}}const Ss=[3,2.5,2],Yn=18,Qn=17,Zn=60,ea=10,bs=2e3;class ta{levels=[1];idx=0;samples=[];warm=bs;bad=0;good=0;sinceUp=1/0;upLocked=!1;log=[];clock=0;constructor(e=1){this.setDevice(e)}setDevice(e){const t=Math.max(1,Math.min(Ss[0],e)),i=[t,...Ss.filter(n=>n<t)];i.length===this.levels.length&&i.every((n,r)=>n===this.levels[r])||(this.levels=i,this.idx=0,this.upLocked=!1),this.restart()}restart(){this.samples=[],this.warm=bs,this.bad=0,this.good=0}get ratio(){return this.levels[this.idx]}frame(e){if(!(e>0)||e>=99)return this.ratio;if(this.clock+=e,this.warm>0)return this.warm-=e,this.ratio;if(this.samples.push(e),this.samples.length<Zn)return this.ratio;const t=this.samples.sort((s,n)=>s-n),i=t[Math.min(t.length-1,Math.floor(t.length*.95))];return this.samples=[],this.sinceUp++,i>Yn?(this.good=0,++this.bad>=2&&this.idx<this.levels.length-1&&(this.sinceUp<=3&&(this.upLocked=!0),this.step(1))):i<=Qn?(this.bad=0,++this.good>=ea&&this.idx>0&&!this.upLocked&&(this.sinceUp=0,this.step(-1))):(this.bad=0,this.good=0),this.ratio}step(e){this.idx+=e,this.log.push([Math.round(this.clock),this.ratio]),this.restart()}}class sa{previous=null;focal=0;quiet=.12;defer(e,t,i){if(!this.previous)return this.previous=Float64Array.from(e),this.focal=t,!1;let s=0;for(let o=0;o<9;o++)s+=this.previous[o]*e[o];const n=Math.acos(Math.max(-1,Math.min(1,(s-1)/2))),r=!(i>0&&i<.25)||n>15*Math.PI/180*i||Math.abs(Math.log(t/this.focal))>.4*i;return this.quiet=r?0:Math.min(.12,this.quiet+i),this.previous.set(e),this.focal=t,this.quiet<.12}}const g=a=>a.toFixed(6),ia=`
  attribute float aMag;
  attribute vec3 aColor;      // linear sRGB, luminance 1 (starColor.ts)
  attribute float aSeed;
  uniform float uLimit;       // the drawn limit (drawnStarLimit)
  uniform float uPeak;        // peak of a STAR_REF_MAG star (linear)
  uniform float uTime;
  uniform float uTwinkle;
  uniform float uBelowDim;
  uniform float uHoverA;
  uniform float uHoverAmtA;
  uniform float uHoverB;
  uniform float uHoverAmtB;
  uniform float uPx;          // drawing-buffer px per CSS px (the glare and the hover halo are sized in CSS px)
  varying vec3 vLight;        // peak light, linear, coloured, after the atmosphere
  varying vec3 vAureole;      // WP-11's glare (the aureole) at the centre (linear, coloured): the stars below the 25
  varying vec3 vGlare;        // the glare halo's light at the centre (linear, coloured): the 25 brightest
  varying float vGlareR;      // the glare halo's radius (Gaussian e-folding), drawing-buffer px
  varying float vHover;
  varying float vExtent;      // sprite half-size, drawing-buffer px
  const vec3 EXT_MAG = vec3(${g(At[0])}, ${g(At[1])}, ${g(At[2])});
  float airmass(float altDeg) {   // Kasten & Young 1989 (atmosphere.ts)
    float h = max(altDeg, 0.0);
    return 1.0 / (sin(radians(h)) + 0.50572 * pow(h + 6.07995, -1.6364));
  }
  void main() {
    vec3 w = normalize(mat3(modelMatrix) * position);
    // standard atmospheric refraction (Saemundsson), so stars match the refracted planets near the horizon
    float alt = asin(clamp(w.z, -1.0, 1.0));
    if (alt > -0.035) {
      float h = max(degrees(alt), -1.9);
      float R = 1.02 / tan(radians(h + 10.3 / (h + 5.11))) / 60.0;
      float alt2 = alt + radians(R);
      float hl = length(w.xy);
      if (hl > 1e-6) { w.xy *= cos(alt2) / hl; w.z = sin(alt2); }
    }
    // which stars: down to the limit, a short fade (half at the limit)
    float dm = aMag - uLimit;
    float fade = 1.0 - smoothstep(${g(-os)}, ${g(os)}, dm);

    // hover (what the reticle is on): eased 0..1, for up to two stars (one growing, one shrinking back)
    float idx = float(gl_VertexID);
    float hv = (abs(idx - uHoverA) < 0.5 ? uHoverAmtA : 0.0) + (abs(idx - uHoverB) < 0.5 ? uHoverAmtB : 0.0);

    float altDeg = degrees(asin(clamp(w.z, -1.0, 1.0)));
    float X = airmass(altDeg);
    // twinkle: only near the horizon, ∝ X^1.75 (browse mode)
    float tw = 1.0;
    if (uTwinkle > 0.0) {
      float amp = min(${g(wi)}, ${g(Si)} * pow(X, 1.75));
      tw = 1.0 + amp * (0.62 * sin(uTime * (7.0 + aSeed * 9.0) + aSeed * 61.0) + 0.38 * sin(uTime * (13.0 + aSeed * 11.0) + aSeed * 17.0));
    }
    // extinction per channel, relative to the zenith: hue physical, brightness compressed (atmosphere.ts)
    vec3 ext = vec3(1.0);
    if (altDeg > -3.0) {
      vec3 t = pow(vec3(10.0), -0.4 * EXT_MAG * max(X - 1.0, 0.0));
      float top = max(t.r, max(t.g, t.b));
      ext = t / top * pow(top, ${g(hn)});
      float k = clamp((-0.6 - altDeg) / 2.4, 0.0, 1.0);
      ext = mix(ext, vec3(1.0), k * k * (3.0 - 2.0 * k));
    }
    float below = w.z < 0.0 ? uBelowDim : 1.0;
    float peak = uPeak * pow(10.0, ${g(-.4*rs)} * (aMag - ${g(ls)})) * fade * tw * below;
    float rel = pow(10.0, ${g(-.4*rs)} * (aMag - ${g(ls)})) * fade * below;   // steady, vs a REF_MAG star
    // the glare's gate (starLight.ts starGlareGate): the 25 brightest by their steady light before the atmosphere
    float gt = clamp((rel - ${g(Ye.on)}) / ${g(Ye.full-Ye.on)}, 0.0, 1.0);
    gt = gt * gt * (3.0 - 2.0 * gt);
    // the aureole (WP-11's glare, unchanged below the gate)
    float glare = min(${g(bi)}, ${g(Ai)} * max(peak - ${g(Mi)}, 0.0)) * (1.0 - gt);
    vLight = aColor * ext * peak;
    vAureole = aColor * ext * glare;
    // the glare: its radius by the steady light after the atmosphere, its brightness fixed (it twinkles with the
    // star), its colour the star's after the atmosphere
    vec3 ce = aColor * ext;
    float le = max(dot(ce, vec3(0.2126, 0.7152, 0.0722)), 1e-4);
    vGlare = ce / le * (${g(_i)} * gt * tw);
    vGlareR = max(${g(Ri)} * uPx * sqrt(rel * le / ${g(Ye.ref)}), 0.5);
    vHover = hv * below * fade;

    // sprite size: where the light falls below half an 8-bit step (starExtent), room for the hover halo
    float pk = max(vLight.r, max(vLight.g, vLight.b));
    float rg = pk * ${g(Ft)} > ${g(ce)} ? ${g(Pt)} * sqrt(2.0 * log(pk * ${g(Ft)} / ${g(ce)})) : 0.0;
    float q = pk * ${g(Ls)} / ${g(ce)};
    float rm = q > 1.0 ? ${g(Ct)} * sqrt(pow(q, ${g(1/Ts)}) - 1.0) : 0.0;
    float gk = max(vAureole.r, max(vAureole.g, vAureole.b));
    float rh = gk > ${g(ce)} ? ${g(Fs)} * uPx * log(gk / ${g(ce)}) : 0.0;
    float gg = max(vGlare.r, max(vGlare.g, vGlare.b));
    float rgl = gg > ${g(ce)} ? vGlareR * sqrt(log(gg / ${g(ce)})) : 0.0;
    float extent = max(max(max(rg, rm), rh), rgl) + 1.0;
    extent = max(extent, vHover * 16.0 * uPx);
    // point sprites are capped at 511 px on iPhones: keep the sprite within 500 px
    extent = min(extent, 250.0);
    vExtent = extent;
    gl_Position = projectionMatrix * viewMatrix * vec4(w * ${C.toFixed(1)}, 1.0);
    if (fade <= 0.0 || (pk < ${g(ce)} && vHover <= 0.0)) {
      gl_Position = vec4(2.0, 2.0, 2.0, 1.0);    // not drawn: outside the clip volume
      gl_PointSize = 0.0;
    } else {
      gl_PointSize = 2.0 * extent;
    }
  }
`,na=`
  uniform float uPx;
  varying vec3 vLight;
  varying vec3 vAureole;
  varying vec3 vGlare;
  varying float vGlareR;
  varying float vHover;
  varying float vExtent;
  ${lt}
  ${gi}
  void main() {
    vec2 p = (gl_PointCoord - 0.5) * 2.0 * vExtent;     // drawing-buffer px from the centre
    float r2 = dot(p, p);
    float shape = ${g(Ft)} * exp(-r2 * ${g(1/(2*Pt*Pt))})
                + ${g(Ls)} * pow(1.0 + r2 * ${g(1/(Ct*Ct))}, ${g(-Ts)});
    // the star under the reticle: a soft halo (CSS px scale)
    float glow = vHover * 0.11 * exp(-sqrt(r2) / (4.5 * uPx)) * (1.0 - smoothstep(0.7 * vExtent, vExtent, sqrt(r2)));
    float r = sqrt(r2);
    vec3 light = vLight * shape + vAureole * exp(-r / (${g(Fs)} * uPx)) + vec3(glow)
               + vGlare * exp(-r2 / (vGlareR * vGlareR));
    if (max(light.r, max(light.g, light.b)) < ${g(ce)}) discard;
    vec3 c = najmEmissiveToDisplay(light);
    float a = clamp(max(c.r, max(c.g, c.b)), 0.0, 1.0);
    gl_FragColor = najmOutput(c, a);
  }
`;class aa{geo;mat;positions=Pe;constructor(e,t){const i=new Float32Array($e*3),s=new Float32Array($e),n=new Float32Array($e*3),r=new Float32Array($e);for(let c=0;c<$e;c++){i[c*3]=Pe[c*3]*C,i[c*3+1]=Pe[c*3+1]*C,i[c*3+2]=Pe[c*3+2]*C,s[c]=ui[c];const u=Sn(hi(mi[c],pi[c],fi[c]));n[c*3]=u[0],n[c*3+1]=u[1],n[c*3+2]=u[2],r[c]=c*2654435761%1e3/1e3}const o=new Lt;o.setAttribute("position",new Ke(i,3)),o.setAttribute("aMag",new Ke(s,1)),o.setAttribute("aColor",new Ke(n,3)),o.setAttribute("aSeed",new Ke(r,1)),this.geo=o,this.mat=new Ve({vertexShader:ia,fragmentShader:na,transparent:!0,depthTest:!0,depthWrite:!1,blending:it,blendSrc:I,blendDst:I,blendSrcAlpha:I,blendDstAlpha:I,uniforms:{uLimit:{value:5.73},uPeak:{value:as},uPx:{value:1},uTime:{value:0},uTwinkle:{value:1},uBelowDim:{value:1},uHoverA:{value:-1},uHoverAmtA:{value:0},uHoverB:{value:-1},uHoverAmtB:{value:0},...t.uniforms}});const l=new vi(o,this.mat);l.renderOrder=de.stars,l.frustumCulled=!1,e.add(l)}resize(e){this.mat.uniforms.uPx.value=e}setHover(e){const t=this.mat.uniforms;t.uHoverA.value=e.a,t.uHoverAmtA.value=e.amtA,t.uHoverB.value=e.b,t.uHoverAmtB.value=e.amtB}update(e){if(e.model.starPositionsJ2000!==this.positions){this.positions=e.model.starPositionsJ2000;const i=this.geo.getAttribute("position");for(let s=0;s<this.positions.length;s++)i.array[s]=this.positions[s]*C;i.needsUpdate=!0}const t=this.mat.uniforms;t.uLimit.value=yi(e.s.magLimit,e.display),t.uPeak.value=e.browse?as:xi,t.uTime.value=e.time,t.uTwinkle.value=e.s.twinkle&&e.browse?1:0,t.uBelowDim.value=e.ground?1:at}dispose(){this.geo.dispose(),this.mat.dispose()}}class oa{renderer;canvas;scene=new Ei;camera=new zi(60,1,1,1e4);sky=new Li;milkyWay;figures;lines;stars;ground;bodies;lastFov=0;tmpM=new zs;size=null;active=!0;lost=!1;hover=new jn;displayPrefs={...Ti};pipe=new Fi;governor=new ta(1);constellationWork=new sa;ratio=1;liveFX=null;fxOwner=null;fxGeneration=0;fxState={playing:!1,visible:!1,inSky:!1,reducedMotion:!0};dead=!1;radii={};journey=null;constructor(e){this.canvas=e,this.renderer=new nn({canvas:e,antialias:!1,depth:!1,stencil:!1,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Pi,this.renderer.autoClear=!0,e.addEventListener("webglcontextlost",this.onContextLost,!1),e.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.scene.add(this.sky),this.sky.matrixAutoUpdate=!1,this.milkyWay=new fn(this.sky,this.pipe),this.figures=new kn(this.sky,this.pipe),this.lines=new Bn(this.sky,this.pipe),this.stars=new aa(this.sky,this.pipe),this.ground=new Wn(this.scene,this.pipe),this.bodies=new Kn(this.scene,this.radii,this.pipe)}resize(e,t,i){!this.size||this.size.dpr!==i?this.governor.setDevice(i):this.governor.restart(),this.size={w:e,h:t,dpr:i},this.applyRatio(this.governor.ratio)}applyRatio(e){const t=this.size;t&&(this.ratio=e,this.renderer.setPixelRatio(e),this.renderer.setSize(t.w,t.h,!1),this.lines.resize(t.w,t.h,e),this.ground.resize(t.w,t.h,e),this.stars.resize(e))}get pixelRatio(){return this.ratio}get governorLog(){return this.governor.log}setActive(e){e&&!this.active&&this.governor.restart(),this.active=e,e||this.liveFX?.hide()}get isActive(){return this.active}setJourneyFX(e,t){if(this.dead)return;if(!t){this.clearJourneyFX(e);return}const i=++this.fxGeneration;if(this.fxOwner=e,this.fxState={playing:!1,visible:!1,inSky:!1,reducedMotion:!0},this.liveFX?.hide(),this.liveFX){this.liveFX.configure(t),this.liveFX.controls(this.fxState);return}const s={...t};Ps(async()=>{const{JourneyFX:n}=await import("./journeyFX-C6NO_W80.js");return{JourneyFX:n}},__vite__mapDeps([0,1,2]),import.meta.url).then(({JourneyFX:n})=>{if(this.dead||this.fxOwner!==e||i!==this.fxGeneration)return;const r=new n(this.scene,this.pipe);this.liveFX=r,r.configure(s),r.controls(this.fxState)}).catch(()=>{})}updateJourneyFX(e,t){this.dead||this.fxOwner!==e||(this.fxState={...t},this.liveFX?.controls(this.fxState))}clearJourneyFX(e){this.fxOwner===e&&(this.fxGeneration++,this.fxOwner=null,this.liveFX?.dispose(),this.liveFX=null)}get contextLost(){return this.lost}setHover(e){this.hover.set(e)}setDisplay(e){this.displayPrefs={...e}}get display(){return this.displayPrefs}setSkyMatrix(e){this.sky.matrix.set(e[0],e[1],e[2],0,e[3],e[4],e[5],0,e[6],e[7],e[8],0,0,0,0,1),this.sky.matrixWorldNeedsUpdate=!0}onContextLost=e=>{e.preventDefault(),this.lost=!0,this.liveFX?.hide(),this.figures.contextLost(),dn(this.scene)};onContextRestored=()=>{this.lost=!1,this.size&&(this.governor.restart(),this.applyRatio(this.governor.ratio)),this.lastFov=0};get residentFigures(){return this.figures.resident}update(e,t,i,s,n){if(!this.active)return;const r=this.governor.frame(n*1e3);r!==this.ratio&&!this.lost&&this.applyRatio(r);const o=!i.cameraOn,l=this.displayPrefs,c=this.constellationWork.defer(e.m,e.f,n),u={view:e,model:t,s:i,browse:o,ground:o&&i.ground,time:s,dt:n,display:l,pixelRatio:this.ratio,deferConstellationWork:!this.journey&&c};this.journey?.frame(u),this.hover.step(n),this.stars.setHover(this.hover.starSlots()),this.bodies.updateRadii(u,this.hover),!this.lost&&(this.updateCamera(e),this.pipe.night=l.night,this.renderer.setClearColor(o?l.night?131072:66053:0,o?1:0),this.stars.update(u),this.milkyWay.update(u),this.ground.update(u),this.lines.update(u),this.figures.update(u),this.bodies.update(u),this.liveFX?.update(u,this.journey?.decorativeSkyVisible===!0))}updateCamera(e){const t=e.m;this.tmpM.set(t[0],t[1],t[2],0,t[3],t[4],t[5],0,t[6],t[7],t[8],0,0,0,0,1),this.camera.quaternion.setFromRotationMatrix(this.tmpM),this.camera.position.set(0,0,0);const i=2*Math.atan(e.height/2/e.f)*180/Math.PI;(Math.abs(i-this.lastFov)>1e-4||this.camera.aspect!==e.width/e.height)&&(this.camera.fov=i,this.camera.aspect=e.width/e.height,this.camera.updateProjectionMatrix(),this.lastFov=i),this.camera.updateMatrixWorld()}render(){if(!this.active||this.lost||this.renderer.getContext().isContextLost())return!1;if(this.journey){if(!this.journey.render())return!1}else this.renderer.render(this.scene,this.camera);return this.active&&!this.lost&&!this.renderer.getContext().isContextLost()}dispose(){this.dead=!0,this.fxGeneration++,this.fxOwner=null,this.liveFX?.dispose(),this.liveFX=null,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.figures.dispose(),this.bodies.dispose(),this.stars.dispose(),this.milkyWay.dispose(),this.ground.dispose(),this.lines.dispose(),this.pipe.dispose(),this.renderer.dispose()}}function ra(a,e){let t=!1,i=!1,s=!1;const n=l=>{t!==l&&(t=l,e(l))},r=()=>{i=!0,n(!1)},o=()=>{i=!1};return a.addEventListener("webglcontextlost",r),a.addEventListener("webglcontextrestored",o),e(!1),{drawn(l){s||n(!i&&l)},dispose(){s||(s=!0,a.removeEventListener("webglcontextlost",r),a.removeEventListener("webglcontextrestored",o),n(!1))}}}const la=()=>({az:NaN,alt:NaN,lang:"",t:0,dir:null,deg:null});function ca(a,e,t,i,s,n){if(!s||!n)return;const r=Math.round(e.az),o=Math.round(e.alt),l=s!==a.dir||n!==a.deg,c=r!==a.az||o!==a.alt||t!==a.lang;!l&&(!c||i-a.t<100&&t===a.lang)||(n.textContent=`${cs(r,t)}° · ${e.alt>=0?"↑":"↓"}${cs(Math.abs(o),t)}°`,s.textContent=Ci(e.az,t),Object.assign(a,{az:r,alt:o,lang:t,t:i,dir:s,deg:n}))}const da=70,ua=[],ha={key:null,cons:"",changed:!1},fa=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):null,pa=()=>!!fa?.matches,ma=a=>a?a[0]==="b"?{kind:"body",id:a.slice(2)}:a[0]==="s"?{kind:"star",index:Number(a.slice(2))}:null:null,As=(a,e)=>Math.acos(Math.max(-1,Math.min(1,a[0]*e[0]+a[1]*e[1]+a[2]*e[2])))*Cs;function _a(a){const{glRef:e,ovRef:t,rootRef:i,videoRef:s,streamRef:n,capRef:r,capLiveRef:o,capNameRef:l,capSubRef:c,capHintRef:u,ghostRef:h,ghostNameRef:p,ghostSubRef:w,dirRef:R,degRef:j,ringRef:k,pillArrowRef:O,live:y,model:m,tracker:b,compass:q,zoomRef:me,viewRef:be,aimRef:Ae,vpRef:ue,overlayRef:ae,peekModeRef:D,openFwd:A,stats:Me,compassToastDone:he,hintsLeft:J,setSkyDate:_e,setHud:ct,setCompassToast:oe,setPeekMode:Re,snapRef:Oe,probeExtra:Xe,skyRef:G,extrasRef:ge,journeyRef:De}=a,z=new oa(e.current),Ee=ra(e.current,f=>a.onSkyReadiness?.(f));G.current=z;const N=new ki(t.current);ae.current=N;let ze=null,dt=0,qe=0,ut=NaN,Dt=0,Ut=0,Je=0,Gt=-1,ht=0,ft=!1,Ue=1,pt=!0;const mt=()=>{const f=!y.current.detail&&!De?.current?.covered&&document.visibilityState!=="hidden";f!==pt&&(pt=f,z.setActive(f),Je=0)};document.addEventListener("visibilitychange",mt);let Bt=null,Le=[],Te=!0,X=0,H=0,It,ve=0,Nt=null,Ht="";const Ds=la();let Wt="",$t=null;const S={key:"",lang:"",version:-1,ground:!1,name:"",sub:"",hint:!1,hintShown:!1,since:0,counted:!1};let Vt=null,jt=null,gt=!1,Fe={key:"",minute:-1,lang:"",zone:null,guide:null};const Us=f=>{if(!f||St(f))return null;const d=y.current,M=d.settings.lang,_=Math.floor(m.date.getTime()/6e4);if(f!==Fe.key||_!==Fe.minute||M!==Fe.lang||d.zone!==Fe.zone){const x=Xi(f,m,M,wt[M],d.zone);Fe={key:f,minute:_,lang:M,zone:d.zone,guide:x?{toward:x.toward,rise:x.rise,never:x.never}:null}}return Fe.guide},Gs=performance.now();let Xt=null;Oi&&Ps(()=>import("./probeFrame-De_qr6eQ.js"),__vite__mapDeps([3,1,2]),import.meta.url).then(f=>{Xt=f.publishFrame});const Bs=()=>{Le=[];let f=0;i.current?.querySelectorAll("[data-block]").forEach(M=>{const _=M.getBoundingClientRect();if(!_.width||!_.height)return;const x={id:M.dataset.block||M.classList[0]||M.tagName.toLowerCase(),x0:_.left,y0:_.top,x1:_.right,y1:_.bottom};if(M===r.current&&p.current?.textContent){const v=h.current.getBoundingClientRect();v.width&&(x.x0=Math.min(x.x0,v.left),x.y0=Math.min(x.y0,v.top),x.x1=Math.max(x.x1,v.right),x.y1=Math.max(x.y1,v.bottom))}Le.push(x),M.classList.contains("topbar")&&(f=Math.max(f,_.top))});const d=ue.current?.safe??{t:0,b:0};(d.t>0||f>0)&&Le.push({id:"status-bar",x0:0,y0:0,x1:X,y1:Math.max(d.t+2,f)}),d.b>0&&Le.push({id:"home-indicator",x0:0,y0:H-d.b-2,x1:X,y1:H})},Is=(f,d,M)=>{const _=y.current,x=_.settings.lang,v=f.key??(f.cons?`c:${f.cons}`:""),W=M&&!f.key;if(!v||v===S.key&&x===S.lang&&m.version===S.version&&W===S.ground)return;const U=wt[x],K=St(v)?N.pointOf(v):null;if(St(v)&&!K)return;const ye=K?K.name[x]:$i(v,x,U),Y=W?`${U.belowHorizon} · ${U.raisePhone}`:K?Vi(K,x,U):ji(v,m,x,U,_.zone),Q=v!==S.key;Q&&(S.since=d,S.counted=!1,S.hint=J.current>0),S.hintShown=S.hint&&!W;const Ge=l.current,fe=c.current,Z=u.current;if(Ge&&fe&&Z&&(ye!==S.name||Y!==S.sub||x!==S.lang||Q||W!==S.ground)){const $=h.current,ee=o.current;if(Q&&S.name&&$&&ee&&_.captionVisible&&!pa()&&typeof ee.animate=="function"){p.current.textContent=S.name,w.current.textContent=S.sub;const B=$.animate([{opacity:1},{opacity:0}],{duration:80,easing:"ease-out",fill:"forwards"});B.onfinish=()=>{p.current.textContent="",w.current.textContent=""},ee.animate([{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:160,easing:"ease-in"})}Ge.textContent=ye,fe.textContent=Y,Z.textContent=S.hintShown?U.tapForDetails:"",Te=!0}Object.assign(S,{key:v,lang:x,version:m.version,ground:W,name:ye,sub:Y})},Ns=(f,d)=>{const M=y.current,_=M.settings.lang,x=qi(f);ca(Ds,x,_,d,R.current,j.current);const v=b.source==="ios-compass",W=q.update(b.last?.accuracy??null,v,d),U=M.sensorState==="none"?"none":W;return k.current&&(U!==Wt||k.current!==$t)&&(k.current.className=`cring ${U}`,Wt=U,$t=k.current),{pose:x,level:W,hasCompass:v}},qt=f=>{dt=requestAnimationFrame(qt);const d=y.current,M=ue.current,_=M?.appW??window.innerWidth,x=M?.appH??window.innerHeight;if(_!==X||x!==H){X=_,H=x;const P=window.devicePixelRatio||1;z.resize(X,H,P),N.resize(X,H,P),Te=!0}const v=De?.current,W=new Date(Date.now()+d.offsetMin*6e4),U={lat:d.place.lat,lon:d.place.lon,height:d.place.height},K=v?v.time(f,W,U):null;if(K?(m.update(K.date,K.place??U,v?.starPositionsJ2000),ut=NaN,f-qe>250&&(qe=f,_e(K.date))):(f-qe>1e3||d.offsetMin!==ut||d.place!==Bt)&&(m.update(W,U),qe=f,ut=d.offsetMin,Bt=d.place,_e(W)),m.version!==Gt&&(z.setSkyMatrix(m.E),Gt=m.version),mt(),!pt)return;const ye=b.frame(f);if(!ye)return;const Y=s.current,Q=me.current,Ge=Di(d.cameraOn,Y,n.current);let fe;if(Ge){fe=Ui(X,H,Y.videoWidth,Y.videoHeight,d.settings.camFov,Q);const P=`scale(${Q})`;Y.style.transform!==P&&(Y.style.transform=P)}else fe=Ji(H,da)*Q;const Z=v?v.camera(f,{m:ye,f:fe,width:X,height:H},m):null;Z?ft=!0:ft&&(ft=!1,b.filter.reset());const $=Ge&&!Z,ee=Z?Z.m:ye;Z&&(fe=Z.f);const B={m:ee,f:fe,cx:X/2,cy:H/2,width:X,height:H};be.current=B;const Hs=Je?Math.min(.1,(f-Je)/1e3):.016;if(Je=f,ht++,d.settings!==Vt){Vt=d.settings;const P=Gi(d.settings);Bi(jt,P)||(jt=P,z.setDisplay(P))}const vt=Ii(d.settings.stars,$,Q),Be=Ni(vt,d.settings),Jt=ge.current;N.setPoints(Jt&&m.date.getUTCFullYear()>=1900?Jt.points(m.date,m.obs,d.selected):ua),N.project(m,B,z.radii,Be);const re=v&&(v.view!=="sky"||v.timeLapsing)?ha:N.aim(m,B,f);(v?v.overlay!==Ue:Ue!==1)&&(Ue=v?v.overlay:1,t.current.style.opacity=Ue===1?"":String(Ue)),Ae.current=re;const Kt=!!d.peek&&D.current==="card",Ie=Kt||d.calibrating?null:re.key;Ie!==It&&(It=Ie,z.setHover(ma(Ie)));const Yt=Math.log2(Math.max(.5,Q)),Qt=v?.bodyScale??Hi(d.settings.planetSize);z.update(B,m,{cameraOn:$,milkyWay:d.settings.milkyWay,lines:d.settings.lines,art:d.settings.art,ground:d.settings.ground,grid:d.settings.grid,magLimit:vt,twinkle:d.settings.twinkle,focusId:re.cons||null,bodyScale:Qt},(f-Gs)/1e3,Hs);const yt=z.render(),Ws=yt&&v?{sequence:ht,date:new Date(m.date.getTime()),observer:{...m.obs},view:{m:Float64Array.from(B.m),f:B.f,width:B.width,height:B.height},viewKind:v.view}:void 0,Zt=Oe.current;Zt&&(Oe.current=null,Zt({gl:e.current,video:$?Y:null,zoom:Q,view:B,model:m,radii:z.radii,settings:d.settings,selected:d.selected,starLimit:Be,labelMag:Math.min(4.5,2+1.1*Yt,Be),now:f,points:N.currentPoints()}));const es=Math.asin(Math.max(-1,Math.min(1,-ee[8])))*Cs;gt=!$&&(gt?es<-1:es<-3),Is(re,f,gt),d.captionVisible!==Nt&&(Nt=d.captionVisible,Te=!0),d.ui!==Ht&&(Ht=d.ui,Te=!0),S.hintShown&&!S.counted&&d.captionVisible&&f-S.since>=1e3&&(S.counted=!0,J.current=Math.max(0,3-Ki("najm.tapHints"))),(Te||f-Ut>400)&&(Bs(),Ut=f,Te=!1);const $s=wt[d.settings.lang],Vs=Wi($s),xt=N.draw(m,B,{lang:d.settings.lang,bodyLabels:v?.bodyLabels??d.settings.bodyLabels,starLabels:d.settings.starLabels,labelMag:Math.min(4.5,2+1.1*Yt,Be),cameraOn:$,night:d.settings.night},{selected:d.selected,blocked:Le,calibrating:d.calibrating,captionKey:v?.labelledByJourney??(d.captionVisible?re.key:null),targeted:!!re.key&&!d.calibrating&&!Kt,guide:!0,words:Vs,now:f,below:v?.timeLapsing?null:Us(d.selected),reticle:!Z,horizon:!v?.airless});v?.drawn(B,xt.selected,f,Ws),Ee.drawn(yt&&z.isActive&&!z.contextLost),Xt?.({frame:ht,w:X,h:H,L:d,ov:N,cap:S,capEl:r.current,aim:re,hover:Ie,blocked:Le,selected:xt.selected,safe:ue.current?.safe??null,starLimit:vt,drawnLimit:Be,camLive:$,bodyScale:Qt,gl:z.display,extra:Xe()});const te=xt.selected;ze?.(f,Ie??(re.cons?"c:"+re.cons:null),te,m,d.settings.haptics,!v&&!d.detail&&!d.calibrating&&d.captionVisible&&document.visibilityState==="visible"&&yt);const ts=[-ee[2],-ee[5],-ee[8]];if(d.peek&&te&&te.key===d.peek)if(D.current==="card"){const P=!A.current||As(ts,A.current)>8;te.angle>20&&P?ve?f-ve>=800&&(ve=0,Re("pill")):ve=f:ve=0}else{ve=0,(d.peek[0]==="c"?te.angle<=8:te.visible&&te.dist<=Math.max(28,te.r+6))&&(N.celebrate(d.peek,f),A.current=ts,Re("card"));const pe=O.current;if(pe){const Ne=`rotate(${te.arrow.toFixed(3)}rad)`;pe.style.transform!==Ne&&(pe.style.transform=Ne);const He=te.here?"hidden":"";pe.style.visibility!==He&&(pe.style.visibility=He)}}else ve=0;const le=Me.current;le.frames++,f-le.lastT>=1e3&&(le.fps=le.frames,le.frames=0,le.eventsPerSec=le.events,le.events=0,le.lastT=f);const{pose:js,level:ss,hasCompass:Xs}=Ns(ee,f);if($||q.reset(),f-Dt>250){Dt=f;const P=m.bodyById.get("sun"),pe=!!($&&P&&P.alt>-1&&As(P.enu,js.fwd)<25),Ne=b.last?.accuracy??null,He=Ne==null?null:Math.round(Ne),is=Math.round(b.bias*10)/10;ct(We=>We.sunNear===pe&&We.acc===He&&We.bias===is&&We.level===ss?We:{sunNear:pe,acc:He,bias:is,level:ss}),!he.current&&$&&Xs&&!b.manual&&q.badFor(f,8e3)&&(he.current=!0,oe(!0),setTimeout(()=>oe(!1),4e3))}};return dt=requestAnimationFrame(qt),()=>{ze=null,cancelAnimationFrame(dt),Ee.dispose(),document.removeEventListener("visibilitychange",mt),G.current=null,z.dispose()}}export{_a as startSkyLoop};
