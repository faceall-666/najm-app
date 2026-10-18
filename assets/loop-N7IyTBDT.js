const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./journeyFX-DfaWIgIS.js","./index-Be8EMxMg.js","./index-BEJRGjlI.css","./probeFrame-ktpDt1V1.js"])))=>i.map(i=>d[i]);
import{R as qs,bc as Pt,bZ as E,ck as Le,cl as xt,cm as Vt,cn as I,co as ie,cp as ns,cq as le,cr as Js,M as jt,cs as Ms,ct as St,cu as _s,cv as Ks,cw as Ys,cx as Qs,cy as Zs,cz as Te,cA as Ct,cB as ti,cC as ke,cD as Rs,cE as Es,cF as ei,cG as si,cH as zs,cI as ii,cJ as ne,ag as ni,cK as ai,cL as oi,cM as ri,g as li,cN as ci,Q as di,bb as $t,a8 as ui,as as hi,at as fi,L as pi,N as mi,cO as Kt,cP as as,cQ as gi,cR as vi,cS as yi,cT as xi,cU as os,cV as wi,cW as Si,cX as rs,cY as ls,cZ as Yt,c_ as bi,c$ as Ai,d0 as Mi,d1 as _i,d2 as Ri,d3 as Fe,d4 as ct,d5 as Pe,d6 as Ls,d7 as Ce,d8 as Ts,d9 as Fs,S as Ei,f as zi,b_ as Li,da as Ti,P as Fi,h as Pi,_ as Ps,i as cs,w as Ci,db as ki,c1 as Oi,dc as Di,dd as Ui,de as Gi,df as Bi,dg as Ii,dh as Ni,di as Hi,bE as Cs,ah as we,dj as Wi,F as Se,dk as $i,dl as Vi,c4 as ji,c5 as Xi,bJ as qi,dm as Ji,dn as Ki}from"./index-Be8EMxMg.js";import{S as ee,U as se,R as Yi,b as Qi,p as Zi,s as tn,B as en,c as sn,W as nn}from"./impostor-Dh4ZQjKr.js";import{A as an,a as on,s as rn,b as ln}from"./artShaded-Dd8fLczW.js";import{R as dt,a as be,b as C,c as cn,B as ae,r as dn}from"./layers-1onDMVgd.js";import{e as un,E as Ae,a as hn,M as fn}from"./milkyway-B6q1bpeW.js";import{b as pn,h as mn,s as gn,a as vn}from"./bodySizes-CAJR6XGy.js";import{G as ds}from"./glow-rC4qicJe.js";import{e as yn,v as xn,l as wn}from"./phase-BqDDXW_6.js";import{a as Sn}from"./starColor-D_0EdDqh.js";const bn=3,An=.46,Mn=1.15,_n=.5,V=10,us=new Js(.9,.93,.94),Rn=`
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
  ${le}
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
  ${le}
  void main() {
    float hide = dot(vec4(lessThan(abs(vec4(vFig) - uHideIdx), vec4(0.5))), uHideAmt);
    float v = texture2D(uAtlas, vUv).r * uOpacity * clamp(1.0 - hide, 0.0, 1.0);
    if (v < 0.002) discard;
    gl_FragColor = najmOutput(uTint * v, v);
  }
`;function Tn(a){const t=a.anchors.map(([u,h])=>{const p=[0,0,0];return Ks(u,h,p,0),new E(p[0],p[1],p[2])}),e=t.reduce((u,h)=>u.add(h),new E).normalize(),i=new E(0,0,1).cross(e);i.lengthSq()<1e-6&&i.set(1,0,0),i.normalize();const s=new E().crossVectors(e,i),n=t.map(u=>{const h=u.dot(e);return[u.dot(i)/h,u.dot(s)/h]}),o=new Ys().set(a.anchors[0][2],a.anchors[0][3],1,a.anchors[1][2],a.anchors[1][3],1,a.anchors[2][2],a.anchors[2][3],1).clone().invert().elements,l=(u,h)=>o[h*3+u],c=[0,1,2].map(u=>[0,1].map(h=>l(u,0)*n[0][h]+l(u,1)*n[1][h]+l(u,2)*n[2][h]));return{c:e,e1:i,e2:s,M:c}}function ks(a,t,e,i=new E){const s=t*a.M[0][0]+e*a.M[1][0]+a.M[2][0],n=t*a.M[0][1]+e*a.M[1][1]+a.M[2][1];return i.copy(a.c).addScaledVector(a.e1,s).addScaledVector(a.e2,n).normalize()}function hs(a,t){const e=[],i=[],s=[],n=new E;for(let r=0;r<=V;r++)for(let o=0;o<=V;o++)ks(t,o/V*a.w,r/V*a.h,n),e.push(n.x*be,n.y*be,n.z*be),i.push(o/V,r/V);for(let r=0;r<V;r++)for(let o=0;o<V;o++){const l=r*(V+1)+o;s.push(l,l+1,l+V+1,l+1,l+V+2,l+V+1)}return{pos:e,g:i,idx:s}}function Fn(a,t){const e=[];for(let s=0;s<=4;s++){const n=s/4;for(const[r,o]of[[n,0],[n,1],[0,n],[1,n]])e.push(ks(t,r*a.w,o*a.h))}const i=e.reduce((s,n)=>s.add(n),new E).normalize();return{center:i,radius:Math.max(...e.map(s=>s.angleTo(i)))}}function Pn(a){const t=Qs(`art/sheets/${a}`,ln),e=rn(a);let i=!e;const s=e?Ms(e,{srgb:!1,red:!0,cache:!1,onLoad:()=>{i=!0},onError:()=>{i=!0}}):null;return s&&(s.flipY=!1,s.anisotropy=8),{textures:[...t.textures,s??t.textures[0]],get ready(){return t.ready&&i},get shaded(){return!!s?.image},dispose(){t.dispose(),s&&_s(s)}}}const Cn=(a,t,e)=>Math.min(e,Math.max(t,a));class kn{journeyMode=null;setJourneyMode(t,e){return this.journeyMode&&this.journeyMode.owner!==t?!1:(this.journeyMode={owner:t,mode:e},!0)}releaseJourneyMode(t){this.journeyMode?.owner===t&&(this.journeyMode=null)}sky;items;lru=[];pipe;style=1;allFade=0;atlas=null;constructor(t,e){this.sky=t,this.pipe=e,this.items=qs.map((i,s)=>{const n=Tn(i),{center:r,radius:o}=Fn(i,n);return{def:i,index:s,frame:n,center:r,radius:o,mesh:null,mat:null,sheet:null,opacity:0}})}get resident(){return this.lru.map(t=>t.def.id)}get atlasResident(){return!!this.atlas}update(t){const{view:e,model:i,s,browse:n,dt:r,display:o}=t,l=i.starPositionsJ2000===Pt,c=l?this.journeyMode?.mode??(s.art?o.figures:"off"):"off";if(!l){for(const y of this.items)y.opacity=0;this.allFade=0}const u=An*(n?1:Mn)*Cn(o.figureIntensity,.3,1),h=o.figureStyle==="outline"?0:1;this.style+=(h-this.style)*Math.min(1,r*6);const p=e.m,w=new E(-p[2],-p[5],-p[8]),R=i.E,j=new E(R[0]*w.x+R[3]*w.y+R[6]*w.z,R[1]*w.x+R[4]*w.y+R[7]*w.z,R[2]*w.x+R[5]*w.y+R[8]*w.z),k=Math.atan(Math.hypot(e.width,e.height)/2/e.f);for(const y of this.items){const m=c!=="off"&&y.def.id===s.focusId&&j.angleTo(y.center)-y.radius<k;m&&(!t.deferConstellationWork||y.mesh)&&this.ensure(y);const b=m&&y.sheet?.ready&&(!t.deferConstellationWork||y.opacity>.004)?1:0;y.opacity+=(b-y.opacity)*Math.min(1,r*(b>y.opacity?3:5)),y.mesh&&y.mat&&(y.mesh.visible=y.opacity>.004,y.mat.uniforms.uOpacity.value=y.opacity*u,y.mat.uniforms.uStyle.value=y.sheet?.shaded?this.style:0)}const O=c==="all"?1:0;if(this.allFade+=(O-this.allFade)*Math.min(1,r*4),(O||this.allFade>.004)&&(this.atlas||!t.deferConstellationWork)){const y=this.ensureAtlas();y.mesh.visible=!t.deferConstellationWork||y.uploadedVersion===y.tex.version,y.mat.uniforms.uOpacity.value=this.allFade*u*_n;const m=y.mat.uniforms.uHideIdx.value,b=y.mat.uniforms.uHideAmt.value;m.set(-1,-1,-1,-1),b.set(0,0,0,0),this.lru.slice(-4).forEach((q,mt)=>{m.setComponent(mt,q.index),b.setComponent(mt,q.opacity)})}else this.atlas&&this.freeAtlas()}ensure(t){const e=this.lru.indexOf(t);if(t.mesh){e!==this.lru.length-1&&(this.lru.splice(e,1),this.lru.push(t));return}for(;this.lru.length>=bn;)this.evict(this.lru.find(w=>w.opacity<=.004)??this.lru[0]);const{pos:i,g:s,idx:n}=hs(t.def,t.frame),r=new Le;r.setAttribute("position",new xt(i,3)),r.setAttribute("uv",new xt(s,2)),r.setIndex(n);const o=Pn(t.def.file),[l,c,u]=o.textures,h=new Vt({vertexShader:Rn,fragmentShader:En,side:ns,transparent:!0,depthTest:!0,depthWrite:!1,blending:ie,blendSrc:I,blendDst:I,blendSrcAlpha:I,blendDstAlpha:I,uniforms:{uA:{value:l},uI:{value:c},uShaded:{value:u},uOpacity:{value:0},uStyle:{value:0},uTint:{value:us.clone()},...this.pipe.uniforms}}),p=new jt(r,h);p.renderOrder=dt.figures,p.frustumCulled=!1,p.visible=!1,this.sky.add(p),t.mesh=p,t.mat=h,t.sheet=o,this.lru.push(t)}evict(t){const e=this.lru.indexOf(t);e>=0&&this.lru.splice(e,1),t.mesh&&(this.sky.remove(t.mesh),t.mesh.geometry.dispose()),t.mat?.dispose(),t.sheet?.dispose(),t.mesh=null,t.mat=null,t.sheet=null,t.opacity=0}ensureAtlas(){if(this.atlas)return this.atlas;const[t,e]=on,i=[],s=[],n=[],r=[];for(const p of this.items){const w=an[p.def.id];if(!w)continue;const[R,j,k]=w,O=hs(p.def,p.frame),y=i.length/3;i.push(...O.pos);for(let m=0;m<O.g.length;m+=2)s.push((R+O.g[m]*k)/t,1-(j+O.g[m+1]*k)/e),n.push(p.index);for(const m of O.idx)r.push(y+m)}const o=new Le;o.setAttribute("position",new xt(i,3)),o.setAttribute("uv",new xt(s,2)),o.setAttribute("aFig",new xt(n,1)),o.setIndex(r);const l=Ms("art/atlas.webp",{srgb:!1,cache:!1,red:!0});l.anisotropy=8;const c=new Vt({vertexShader:zn,fragmentShader:Ln,side:ns,transparent:!0,depthTest:!0,depthWrite:!1,blending:ie,blendSrc:I,blendDst:I,blendSrcAlpha:I,blendDstAlpha:I,uniforms:{uAtlas:{value:l},uOpacity:{value:0},uHideIdx:{value:new St(-1,-1,-1,-1)},uHideAmt:{value:new St},uTint:{value:us.clone()},...this.pipe.uniforms}}),u=new jt(o,c);u.renderOrder=dt.figures,u.frustumCulled=!1,this.sky.add(u);const h={mesh:u,mat:c,tex:l,uploadedVersion:-1};return l.onUpdate=()=>{h.uploadedVersion=l.version},this.atlas=h,this.atlas}freeAtlas(){const t=this.atlas;t&&(this.sky.remove(t.mesh),t.mesh.geometry.dispose(),t.mat.dispose(),t.tex.onUpdate=null,_s(t.tex),this.atlas=null)}contextLost(){for(const t of[...this.lru])this.evict(t);this.freeAtlas(),this.allFade=0}dispose(){this.contextLost()}}const fs=new ke,Qt=new E;class kt extends Zs{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new xt(t,3)),this.setAttribute("uv",new xt(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const i=new Te(e,6,1);return this.setAttribute("instanceStart",new Ct(i,3,0)),this.setAttribute("instanceEnd",new Ct(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const i=new Te(e,6,1);return this.setAttribute("instanceColorStart",new Ct(i,3,0)),this.setAttribute("instanceColorEnd",new Ct(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new ti(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ke);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),fs.setFromBufferAttribute(e),this.boundingBox.union(fs))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let n=0,r=t.count;n<r;n++)Qt.fromBufferAttribute(t,n),s=Math.max(s,i.distanceToSquared(Qt)),Qt.fromBufferAttribute(e,n),s=Math.max(s,i.distanceToSquared(Qt));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}se.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ei(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ee.line={uniforms:Es.merge([se.common,se.fog,se.line]),vertexShader:`
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
		`};class Oe extends Vt{constructor(t){super({type:"LineMaterial",uniforms:Es.clone(ee.line.uniforms),vertexShader:ee.line.vertexShader,fragmentShader:ee.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Me=new St,ps=new E,ms=new E,L=new St,T=new St,st=new St,_e=new E,Re=new zs,F=new si,gs=new E,Zt=new ke,te=new Rs,it=new St;let nt,wt;function vs(a,t,e){return it.set(0,0,-t,1).applyMatrix4(a.projectionMatrix),it.multiplyScalar(1/it.w),it.x=wt/e.width,it.y=wt/e.height,it.applyMatrix4(a.projectionMatrixInverse),it.multiplyScalar(1/it.w),Math.abs(Math.max(it.x,it.y))}function On(a,t){const e=a.matrixWorld,i=a.geometry,s=i.attributes.instanceStart,n=i.attributes.instanceEnd,r=Math.min(i.instanceCount,s.count);for(let o=0,l=r;o<l;o++){F.start.fromBufferAttribute(s,o),F.end.fromBufferAttribute(n,o),F.applyMatrix4(e);const c=new E,u=new E;nt.distanceSqToSegment(F.start,F.end,u,c),u.distanceTo(c)<wt*.5&&t.push({point:u,pointOnLine:c,distance:nt.origin.distanceTo(u),object:a,face:null,faceIndex:o,uv:null,uv1:null})}}function Dn(a,t,e){const i=t.projectionMatrix,n=a.material.resolution,r=a.matrixWorld,o=a.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,u=Math.min(o.instanceCount,l.count),h=-t.near;nt.at(1,st),st.w=1,st.applyMatrix4(t.matrixWorldInverse),st.applyMatrix4(i),st.multiplyScalar(1/st.w),st.x*=n.x/2,st.y*=n.y/2,st.z=0,_e.copy(st),Re.multiplyMatrices(t.matrixWorldInverse,r);for(let p=0,w=u;p<w;p++){if(L.fromBufferAttribute(l,p),T.fromBufferAttribute(c,p),L.w=1,T.w=1,L.applyMatrix4(Re),T.applyMatrix4(Re),L.z>h&&T.z>h)continue;if(L.z>h){const m=L.z-T.z,b=(L.z-h)/m;L.lerp(T,b)}else if(T.z>h){const m=T.z-L.z,b=(T.z-h)/m;T.lerp(L,b)}L.applyMatrix4(i),T.applyMatrix4(i),L.multiplyScalar(1/L.w),T.multiplyScalar(1/T.w),L.x*=n.x/2,L.y*=n.y/2,T.x*=n.x/2,T.y*=n.y/2,F.start.copy(L),F.start.z=0,F.end.copy(T),F.end.z=0;const j=F.closestPointToPointParameter(_e,!0);F.at(j,gs);const k=ii.lerp(L.z,T.z,j),O=k>=-1&&k<=1,y=_e.distanceTo(gs)<wt*.5;if(O&&y){F.start.fromBufferAttribute(l,p),F.end.fromBufferAttribute(c,p),F.start.applyMatrix4(r),F.end.applyMatrix4(r);const m=new E,b=new E;nt.distanceSqToSegment(F.start,F.end,b,m),e.push({point:b,pointOnLine:m,distance:nt.origin.distanceTo(b),object:a,face:null,faceIndex:p,uv:null,uv1:null})}}}class oe extends jt{constructor(t=new kt,e=new Oe({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let r=0,o=0,l=e.count;r<l;r++,o+=2)ps.fromBufferAttribute(e,r),ms.fromBufferAttribute(i,r),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+ps.distanceTo(ms);const n=new Te(s,2,1);return t.setAttribute("instanceDistanceStart",new Ct(n,1,0)),t.setAttribute("instanceDistanceEnd",new Ct(n,1,1)),this}raycast(t,e){const i=this.material.worldUnits,s=t.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const n=t.params.Line2!==void 0&&t.params.Line2.threshold||0;nt=t.ray;const r=this.matrixWorld,o=this.geometry,l=this.material;wt=l.linewidth+n,o.boundingSphere===null&&o.computeBoundingSphere(),te.copy(o.boundingSphere).applyMatrix4(r);let c;if(i)c=wt*.5;else{const h=Math.max(s.near,te.distanceToPoint(nt.origin));c=vs(s,h,l.resolution)}if(te.radius+=c,nt.intersectsSphere(te)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Zt.copy(o.boundingBox).applyMatrix4(r);let u;if(i)u=wt*.5;else{const h=Math.max(s.near,Zt.distanceToPoint(nt.origin));u=vs(s,h,l.resolution)}Zt.expandByScalar(u),nt.intersectsBox(Zt)!==!1&&(i?On(this,e):Dn(this,s,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Me),this.material.uniforms.resolution.value.set(Me.z,Me.w))}}class Os extends kt{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setPositions(i),this}setColors(t){const e=t.length-3,i=new Float32Array(2*e);for(let s=0;s<e;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setColors(i),this}setFromPoints(t){const e=t.length-1,i=new Float32Array(6*e);for(let s=0;s<e;s++)i[6*s]=t[s].x,i[6*s+1]=t[s].y,i[6*s+2]=t[s].z||0,i[6*s+3]=t[s+1].x,i[6*s+4]=t[s+1].y,i[6*s+5]=t[s+1].z||0;return super.setPositions(i),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class Un extends oe{constructor(t=new Os,e=new Oe({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}const ys=.45*Math.PI/180;function re(a,t,e){const i=new Oe({color:a,linewidth:t,transparent:!0,opacity:e,depthTest:!1,depthWrite:!1});return i.worldUnits=!1,i}function Gn(a,t,e){const i=Math.min(1,Math.max(-1,a[0]*t[0]+a[1]*t[1]+a[2]*t[2])),s=Math.acos(i);if(s<e*2.4)return null;const n=Math.sin(s),r=o=>{const l=Math.sin((1-o)*s)/n,c=Math.sin(o*s)/n;return[a[0]*l+t[0]*c,a[1]*l+t[1]*c,a[2]*l+t[2]*c]};return[r(e/s),r(1-e/s)]}function xs(a,t){const e=[];for(const i of ni)if(!(a&&!a.has(i.id)))for(const s of i.lines)for(let n=0;n+5<s.length;n+=3){const r=Gn([s[n],s[n+1],s[n+2]],[s[n+3],s[n+4],s[n+5]],t);r&&e.push(r[0][0]*C,r[0][1]*C,r[0][2]*C,r[1][0]*C,r[1][1]*C,r[1][2]*C)}return new Float32Array(e)}class Bn{all;focus;matAll;matFocus;focusId=null;ratio=1;constructor(t,e){this.matAll=re(4155056,1,.3),this.matFocus=re(6200319,2.4,1),e.adoptLineMaterial(this.matAll),e.adoptLineMaterial(this.matFocus);const i=new kt;i.setPositions(xs(null,ys)),this.all=new oe(i,this.matAll),this.all.renderOrder=dt.lines,this.all.frustumCulled=!1,t.add(this.all),this.focus=new oe(new kt,this.matFocus),this.focus.renderOrder=dt.lines,this.focus.frustumCulled=!1,this.focus.visible=!1,t.add(this.focus)}resize(t,e,i){for(const s of[this.matAll,this.matFocus])s.resolution.set(t,e);this.ratio=i}update(t){const{s:e,browse:i}=t,s=e.lines&&t.display.lines&&t.model.starPositionsJ2000===Pt;this.all.visible=s,this.matAll.opacity=i?.3:.4,this.matAll.linewidth=ne(i?1:1.2,this.ratio),this.matFocus.linewidth=ne(i?2.4:2.7,this.ratio),(!s||!t.deferConstellationWork)&&this.setFocus(s?e.focusId:null)}setFocus(t){if(t===this.focusId)return;if(this.focusId=t,!t){this.focus.visible=!1;return}const e=new kt;e.setPositions(xs(new Set([t]),ys)),this.focus.geometry.dispose(),this.focus.geometry=e,this.focus.visible=!0}dispose(){for(const t of[this.all,this.focus])t.geometry.dispose();for(const t of[this.matAll,this.matFocus])t.dispose()}}function In(a){const t=(s,n,r)=>{const o=Math.min(1,Math.max(0,(r-s)/(n-s)));return o*o*(3-2*o)},e=t(.004,-.03,a),i=t(-.02,-.6,a);return[.085+(.038-.085)*i,.072+(.034-.072)*i,.064+(.034-.064)*i].map(s=>s*e)}const Nn=`
  varying vec3 vDir;
  void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,Hn=`
  uniform float uGround;
  varying vec3 vDir;
  ${le}
  void main() {
    // below the horizon (browse mode): a dark, warm ground tint, so pointing down reads as "under the ground";
    // what is drawn there (stars, lines, figures) stays visible at 70 % (groundTint() is the same in JS)
    float z = normalize(vDir).z;
    float below = smoothstep(0.004, -0.03, z) * uGround;
    float deep = smoothstep(-0.02, -0.6, z);
    vec3 tint = mix(vec3(0.085, 0.072, 0.064), vec3(0.038, 0.034, 0.034), deep);
    gl_FragColor = najmOutput(tint * below, ${(1-ae).toFixed(2)} * below);   // premultiplied
  }
`;class Wn{env;envMat;horizon;horizonMat;grid;gridMat;constructor(t,e){this.envMat=new Vt({vertexShader:Nn,fragmentShader:Hn,side:oi,transparent:!0,depthTest:!1,depthWrite:!1,blending:ie,blendSrc:I,blendDst:ai,uniforms:{uGround:{value:1},...e.uniforms}}),this.env=new jt(new ri(cn,64,32),this.envMat),this.env.renderOrder=dt.ground,this.env.frustumCulled=!1,t.add(this.env);const i=[];for(let l=0;l<=360;l+=1)i.push(Math.sin(l*Math.PI/180)*C,Math.cos(l*Math.PI/180)*C,0);const s=new Os;s.setPositions(i),this.horizonMat=re(14698061,1.5,.92),e.adoptLineMaterial(this.horizonMat),this.horizon=new Un(s,this.horizonMat),this.horizon.renderOrder=dt.horizon,this.horizon.frustumCulled=!1,t.add(this.horizon);const n=[],r=(l,c)=>{const u=Math.cos(c*Math.PI/180);return[Math.sin(l*Math.PI/180)*u*C,Math.cos(l*Math.PI/180)*u*C,Math.sin(c*Math.PI/180)*C]};for(let l=15;l<90;l+=15)for(let c=0;c<360;c+=3)n.push(...r(c,l),...r(c+3,l));for(let l=0;l<360;l+=15)for(let c=-84;c<84;c+=3)n.push(...r(l,c),...r(l,c+3));const o=new kt;o.setPositions(n),this.gridMat=re(8378623,1,.16),e.adoptLineMaterial(this.gridMat),this.grid=new oe(o,this.gridMat),this.grid.renderOrder=dt.grid,this.grid.frustumCulled=!1,this.grid.visible=!1,t.add(this.grid)}resize(t,e,i){for(const s of[this.horizonMat,this.gridMat])s.resolution.set(t,e);this.horizonMat.linewidth=ne(1.5,i),this.gridMat.linewidth=ne(1,i)}update(t){this.env.visible=t.ground,this.envMat.uniforms.uGround.value=1,this.horizon.visible=!0,this.grid.visible=t.s.grid}dispose(){this.env.geometry.dispose(),this.envMat.dispose();for(const t of[this.horizon,this.grid])t.geometry.dispose();for(const t of[this.horizonMat,this.gridMat])t.dispose()}}const $n=.18,Ee=a=>a*a*(3-2*a),Vn=a=>Math.min(1,Math.max(0,a));class jn{target=null;bodies=new Map;stars=new Map;set(t){this.target=t}get current(){return this.target}step(t){const e=Math.max(0,t)/$n,i=this.target;ws(this.bodies,i?.kind==="body"?i.id:null,e),ws(this.stars,i?.kind==="star"?i.index:null,e)}body(t){return Ee(this.bodies.get(t)??0)}star(t){return Ee(this.stars.get(t)??0)}starSlots(){const t=this.target,e=t?.kind==="star"?t.index:-1;let i=-1,s=0;for(const[n,r]of this.stars)n!==e&&r>s&&(i=n,s=r);return{a:e,amtA:e>=0?this.star(e):0,b:i,amtB:i>=0?Ee(s):0}}}function ws(a,t,e){t!==null&&!a.has(t)&&a.set(t,0);for(const[i,s]of a){const n=Vn(s+(i===t?e:-e));n>0||i===t?a.set(i,n):a.delete(i)}}function Xn(a,t,e){return a*(1+(t-1)*e)}const qn=.6,ze=.29,Jn=2;class Kn{scene;meshes=new Map;quad=new li(2,2);baseRadii={};sizeVersion=-1;sizeF=0;sizeScale=1;sizeBodies=null;star={};radii;constructor(t,e,i){this.scene=t,this.radii=e;const s=o=>{const l=en[o],c=sn(o,{pipe:i,map:l.sky,normal:l.normal,shared:!0}),u=new jt(this.quad,c.mat);u.frustumCulled=!1,u.renderOrder=dt.bodies,this.scene.add(u);const h={mesh:u,look:c};return this.meshes.set(o,h),h},n=(o,l,c)=>{o.halo=new ds(this.quad,i,"halo"),o.haloStrength=l,o.haloColor=c,this.scene.add(o.halo.mesh)},r=s("sun");r.glare=new ds(this.quad,i,"glare",ze),this.scene.add(r.glare.mesh),n(s("moon"),.5,[1,1,1]),s("mercury"),n(s("venus"),.35,[1,.965,.902]);for(const o of["mars","jupiter","saturn","uranus","neptune"])s(o)}updateRadii(t,e){const{view:i,model:s,s:n}=t,r=Math.min(1,Math.max(0,t.display.planetScale*(n.bodyScale??1)));(s.version!==this.sizeVersion||i.f!==this.sizeF||r!==this.sizeScale||s.bodies!==this.sizeBodies)&&(this.baseRadii=pn(s.bodies,i.f,r),this.sizeVersion=s.version,this.sizeF=i.f,this.sizeScale=r,this.sizeBodies=s.bodies);for(const o of s.bodies){const l=this.baseRadii[o.id]??10,c=e.body(o.id),u=c>0?mn(s.bodies,this.baseRadii,i.f,o.id):1,h=Xn(l,u,c),p=o.id==="sun"||o.id==="moon"?null:gn(o.mag,n.magLimit,t.browse,t.pixelRatio,t.display),w=p?vn(h,p.core):0;this.star[o.id]=p?{...p,w,disc:h}:void 0,this.radii[o.id]=p&&w>0?Math.max(h,p.core*w):h}}update(t){[...t.model.bodies].sort((i,s)=>i.distAu-s.distAu).forEach((i,s)=>this.place(i,60+s*12,t))}place(t,e,i){const s=this.meshes.get(t.id);if(!s)return;const{view:n,browse:r,ground:o}=i,l=this.star[t.id],c=l?.disc??this.radii[t.id]??10,u=e*c/n.f,h=t.enu,p=n.m,w=[p[1],p[4],p[7]],R=[-p[2],-p[5],-p[8]],j=(t.id==="saturn"?Yi:1)+Jn/(i.pixelRatio*Math.max(c,.001)),k=!!l&&l.w>0&&l.intensity>0,O=k?Math.max(j,l.core*3.2/Math.max(c,.001)):j,y=Math.atan(Math.hypot(n.width,n.height)/2/n.f),m=h[0]*R[0]+h[1]*R[1]+h[2]*R[2],b=Math.acos(Math.min(1,Math.max(-1,m))),q=G=>b<y+Math.atan(G/n.f)+.02,mt=q(O*c);if(s.mesh.visible=mt,s.glare&&(s.glare.mesh.visible=q(c/ze)),s.halo&&(s.halo.mesh.visible=q(c*3.5)),!mt&&!s.glare?.mesh.visible&&!s.halo?.mesh.visible)return;s.mesh.position.set(h[0]*e,h[1]*e,h[2]*e),s.mesh.scale.setScalar(u);const[bt,At,ut]=ci(h,t.frame,w,t.id==="saturn"?di:0),at=Qi(h,w),D=s.look.mat.uniforms;Zi(at,bt,At,ut,D.uM.value),D.uAxisX.value.set(at[0][0],at[0][1],at[0][2]),D.uAxisY.value.set(at[1][0],at[1][1],at[1][2]),D.uQuad.value=O;const A=t.sunDir;D.uSunB.value.set(A[0]*bt[0]+A[1]*bt[1]+A[2]*bt[2],A[0]*ut[0]+A[1]*ut[1]+A[2]*ut[2],-(A[0]*At[0]+A[1]*At[1]+A[2]*At[2])),D.uSpin.value=tn(t.id)*i.time;const Mt=t.alt<-.6,ht=Mt?ae:1,J=un(t.alt);D.uExtinct.value.set(J[0]*ht,J[1]*ht,J[2]*ht);const _t=o&&Mt?In(Math.sin(t.alt*Math.PI/180)):[0,0,0];D.uGround.value.set(_t[0],_t[1],_t[2]);const ce=r?1:qn;s.look.mat.blendAlpha=ce;const ot=-(A[0]*h[0]+A[1]*h[1]+A[2]*h[2]),Rt=t.id==="sun"?1:(1+ot)/2;D.uEarthshine.value=t.id==="moon"?yn(Rt):0,D.uPhaseGain.value=t.id==="venus"?xn(ot):1;const Ot=D.uStar.value;k?Ot.set(l.w,l.core/c,l.intensity*(ht*(J[0]+J[1]+J[2])/3),l.core*3.2/c):Ot.set(0,1,0,1);const Xt=G=>[0,1,2].map(gt=>G[gt]*Math.pow(J[gt]*ht,1/2.2));if(s.glare){s.glare.mesh.position.copy(s.mesh.position),s.glare.mesh.scale.setScalar(e*c/ze/n.f),s.glare.opacity=Mt?.35:1;const G=Xt([1,1,1]);s.glare.mat.uniforms.uTint.value.set(G[0],G[1],G[2])}if(s.halo){const G=A[0]+ot*h[0],gt=A[1]+ot*h[1],Dt=A[2]+ot*h[2],z=Math.hypot(G,gt,Dt),Et=z>1e-6?wn(ot)*u/z:0;s.halo.mesh.position.set(h[0]*e+G*Et,h[1]*e+gt*Et,h[2]*e+Dt*Et);const N=c*(1.4+2*Math.sqrt(Rt));s.halo.mesh.scale.setScalar(e*N/n.f),s.halo.opacity=(s.haloStrength??.3)*Rt*(Mt?ae:1);const zt=Xt(s.haloColor??[1,1,1]);s.halo.mat.uniforms.uTint.value.set(zt[0],zt[1],zt[2])}}dispose(){for(const t of this.meshes.values())this.scene.remove(t.mesh),t.look.dispose(),t.glare&&(this.scene.remove(t.glare.mesh),t.glare.dispose()),t.halo&&(this.scene.remove(t.halo.mesh),t.halo.dispose());this.quad.dispose()}}const Ss=[3,2.5,2],Yn=18,Qn=17,Zn=60,ta=10,bs=2e3;class ea{levels=[1];idx=0;samples=[];warm=bs;bad=0;good=0;sinceUp=1/0;upLocked=!1;log=[];clock=0;constructor(t=1){this.setDevice(t)}setDevice(t){const e=Math.max(1,Math.min(Ss[0],t)),i=[e,...Ss.filter(n=>n<e)];i.length===this.levels.length&&i.every((n,r)=>n===this.levels[r])||(this.levels=i,this.idx=0,this.upLocked=!1),this.restart()}restart(){this.samples=[],this.warm=bs,this.bad=0,this.good=0}get ratio(){return this.levels[this.idx]}frame(t){if(!(t>0)||t>=99)return this.ratio;if(this.clock+=t,this.warm>0)return this.warm-=t,this.ratio;if(this.samples.push(t),this.samples.length<Zn)return this.ratio;const e=this.samples.sort((s,n)=>s-n),i=e[Math.min(e.length-1,Math.floor(e.length*.95))];return this.samples=[],this.sinceUp++,i>Yn?(this.good=0,++this.bad>=2&&this.idx<this.levels.length-1&&(this.sinceUp<=3&&(this.upLocked=!0),this.step(1))):i<=Qn?(this.bad=0,++this.good>=ta&&this.idx>0&&!this.upLocked&&(this.sinceUp=0,this.step(-1))):(this.bad=0,this.good=0),this.ratio}step(t){this.idx+=t,this.log.push([Math.round(this.clock),this.ratio]),this.restart()}}class sa{previous=null;focal=0;quiet=.12;defer(t,e,i){if(!this.previous)return this.previous=Float64Array.from(t),this.focal=e,!1;let s=0;for(let o=0;o<9;o++)s+=this.previous[o]*t[o];const n=Math.acos(Math.max(-1,Math.min(1,(s-1)/2))),r=!(i>0&&i<.25)||n>15*Math.PI/180*i||Math.abs(Math.log(e/this.focal))>.4*i;return this.quiet=r?0:Math.min(.12,this.quiet+i),this.previous.set(t),this.focal=e,this.quiet<.12}}const g=a=>a.toFixed(6),ia=`
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
  const vec3 EXT_MAG = vec3(${g(Ae[0])}, ${g(Ae[1])}, ${g(Ae[2])});
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
    float gt = clamp((rel - ${g(Yt.on)}) / ${g(Yt.full-Yt.on)}, 0.0, 1.0);
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
    vGlareR = max(${g(Ri)} * uPx * sqrt(rel * le / ${g(Yt.ref)}), 0.5);
    vHover = hv * below * fade;

    // sprite size: where the light falls below half an 8-bit step (starExtent), room for the hover halo
    float pk = max(vLight.r, max(vLight.g, vLight.b));
    float rg = pk * ${g(Fe)} > ${g(ct)} ? ${g(Pe)} * sqrt(2.0 * log(pk * ${g(Fe)} / ${g(ct)})) : 0.0;
    float q = pk * ${g(Ls)} / ${g(ct)};
    float rm = q > 1.0 ? ${g(Ce)} * sqrt(pow(q, ${g(1/Ts)}) - 1.0) : 0.0;
    float gk = max(vAureole.r, max(vAureole.g, vAureole.b));
    float rh = gk > ${g(ct)} ? ${g(Fs)} * uPx * log(gk / ${g(ct)}) : 0.0;
    float gg = max(vGlare.r, max(vGlare.g, vGlare.b));
    float rgl = gg > ${g(ct)} ? vGlareR * sqrt(log(gg / ${g(ct)})) : 0.0;
    float extent = max(max(max(rg, rm), rh), rgl) + 1.0;
    extent = max(extent, vHover * 16.0 * uPx);
    // point sprites are capped at 511 px on iPhones: keep the sprite within 500 px
    extent = min(extent, 250.0);
    vExtent = extent;
    gl_Position = projectionMatrix * viewMatrix * vec4(w * ${C.toFixed(1)}, 1.0);
    if (fade <= 0.0 || (pk < ${g(ct)} && vHover <= 0.0)) {
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
  ${le}
  ${gi}
  void main() {
    vec2 p = (gl_PointCoord - 0.5) * 2.0 * vExtent;     // drawing-buffer px from the centre
    float r2 = dot(p, p);
    float shape = ${g(Fe)} * exp(-r2 * ${g(1/(2*Pe*Pe))})
                + ${g(Ls)} * pow(1.0 + r2 * ${g(1/(Ce*Ce))}, ${g(-Ts)});
    // the star under the reticle: a soft halo (CSS px scale)
    float glow = vHover * 0.11 * exp(-sqrt(r2) / (4.5 * uPx)) * (1.0 - smoothstep(0.7 * vExtent, vExtent, sqrt(r2)));
    float r = sqrt(r2);
    vec3 light = vLight * shape + vAureole * exp(-r / (${g(Fs)} * uPx)) + vec3(glow)
               + vGlare * exp(-r2 / (vGlareR * vGlareR));
    if (max(light.r, max(light.g, light.b)) < ${g(ct)}) discard;
    vec3 c = najmEmissiveToDisplay(light);
    float a = clamp(max(c.r, max(c.g, c.b)), 0.0, 1.0);
    gl_FragColor = najmOutput(c, a);
  }
`;class aa{geo;mat;positions=Pt;constructor(t,e){const i=new Float32Array($t*3),s=new Float32Array($t),n=new Float32Array($t*3),r=new Float32Array($t);for(let c=0;c<$t;c++){i[c*3]=Pt[c*3]*C,i[c*3+1]=Pt[c*3+1]*C,i[c*3+2]=Pt[c*3+2]*C,s[c]=ui[c];const u=Sn(hi(mi[c],pi[c],fi[c]));n[c*3]=u[0],n[c*3+1]=u[1],n[c*3+2]=u[2],r[c]=c*2654435761%1e3/1e3}const o=new Le;o.setAttribute("position",new Kt(i,3)),o.setAttribute("aMag",new Kt(s,1)),o.setAttribute("aColor",new Kt(n,3)),o.setAttribute("aSeed",new Kt(r,1)),this.geo=o,this.mat=new Vt({vertexShader:ia,fragmentShader:na,transparent:!0,depthTest:!0,depthWrite:!1,blending:ie,blendSrc:I,blendDst:I,blendSrcAlpha:I,blendDstAlpha:I,uniforms:{uLimit:{value:5.73},uPeak:{value:as},uPx:{value:1},uTime:{value:0},uTwinkle:{value:1},uBelowDim:{value:1},uHoverA:{value:-1},uHoverAmtA:{value:0},uHoverB:{value:-1},uHoverAmtB:{value:0},...e.uniforms}});const l=new vi(o,this.mat);l.renderOrder=dt.stars,l.frustumCulled=!1,t.add(l)}resize(t){this.mat.uniforms.uPx.value=t}setHover(t){const e=this.mat.uniforms;e.uHoverA.value=t.a,e.uHoverAmtA.value=t.amtA,e.uHoverB.value=t.b,e.uHoverAmtB.value=t.amtB}update(t){if(t.model.starPositionsJ2000!==this.positions){this.positions=t.model.starPositionsJ2000;const i=this.geo.getAttribute("position");for(let s=0;s<this.positions.length;s++)i.array[s]=this.positions[s]*C;i.needsUpdate=!0}const e=this.mat.uniforms;e.uLimit.value=yi(t.s.magLimit,t.display),e.uPeak.value=t.browse?as:xi,e.uTime.value=t.time,e.uTwinkle.value=t.s.twinkle&&t.browse?1:0,e.uBelowDim.value=t.ground?1:ae}dispose(){this.geo.dispose(),this.mat.dispose()}}class oa{renderer;canvas;scene=new Ei;camera=new zi(60,1,1,1e4);sky=new Li;milkyWay;figures;lines;stars;ground;bodies;lastFov=0;tmpM=new zs;size=null;active=!0;lost=!1;hover=new jn;displayPrefs={...Ti};pipe=new Fi;governor=new ea(1);constellationWork=new sa;ratio=1;liveFX=null;fxOwner=null;fxGeneration=0;fxState={playing:!1,visible:!1,inSky:!1,reducedMotion:!0};dead=!1;radii={};journey=null;constructor(t){this.canvas=t,this.renderer=new nn({canvas:t,antialias:!1,depth:!1,stencil:!1,alpha:!0,premultipliedAlpha:!0,powerPreference:"high-performance"}),this.renderer.outputColorSpace=Pi,this.renderer.autoClear=!0,t.addEventListener("webglcontextlost",this.onContextLost,!1),t.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.scene.add(this.sky),this.sky.matrixAutoUpdate=!1,this.milkyWay=new fn(this.sky,this.pipe),this.figures=new kn(this.sky,this.pipe),this.lines=new Bn(this.sky,this.pipe),this.stars=new aa(this.sky,this.pipe),this.ground=new Wn(this.scene,this.pipe),this.bodies=new Kn(this.scene,this.radii,this.pipe)}resize(t,e,i){!this.size||this.size.dpr!==i?this.governor.setDevice(i):this.governor.restart(),this.size={w:t,h:e,dpr:i},this.applyRatio(this.governor.ratio)}applyRatio(t){const e=this.size;e&&(this.ratio=t,this.renderer.setPixelRatio(t),this.renderer.setSize(e.w,e.h,!1),this.lines.resize(e.w,e.h,t),this.ground.resize(e.w,e.h,t),this.stars.resize(t))}get pixelRatio(){return this.ratio}get governorLog(){return this.governor.log}setActive(t){t&&!this.active&&this.governor.restart(),this.active=t,t||this.liveFX?.hide()}get isActive(){return this.active}setJourneyFX(t,e){if(this.dead)return;if(!e){this.clearJourneyFX(t);return}const i=++this.fxGeneration;if(this.fxOwner=t,this.fxState={playing:!1,visible:!1,inSky:!1,reducedMotion:!0},this.liveFX?.hide(),this.liveFX){this.liveFX.configure(e),this.liveFX.controls(this.fxState);return}const s={...e};Ps(async()=>{const{JourneyFX:n}=await import("./journeyFX-DfaWIgIS.js");return{JourneyFX:n}},__vite__mapDeps([0,1,2]),import.meta.url).then(({JourneyFX:n})=>{if(this.dead||this.fxOwner!==t||i!==this.fxGeneration)return;const r=new n(this.scene,this.pipe);this.liveFX=r,r.configure(s),r.controls(this.fxState)}).catch(()=>{})}updateJourneyFX(t,e){this.dead||this.fxOwner!==t||(this.fxState={...e},this.liveFX?.controls(this.fxState))}clearJourneyFX(t){this.fxOwner===t&&(this.fxGeneration++,this.fxOwner=null,this.liveFX?.dispose(),this.liveFX=null)}get contextLost(){return this.lost}setHover(t){this.hover.set(t)}setDisplay(t){this.displayPrefs={...t}}get display(){return this.displayPrefs}setSkyMatrix(t){this.sky.matrix.set(t[0],t[1],t[2],0,t[3],t[4],t[5],0,t[6],t[7],t[8],0,0,0,0,1),this.sky.matrixWorldNeedsUpdate=!0}onContextLost=t=>{t.preventDefault(),this.lost=!0,this.liveFX?.hide(),this.figures.contextLost(),dn(this.scene)};onContextRestored=()=>{this.lost=!1,this.size&&(this.governor.restart(),this.applyRatio(this.governor.ratio)),this.lastFov=0};get residentFigures(){return this.figures.resident}update(t,e,i,s,n){if(!this.active)return;const r=this.governor.frame(n*1e3);r!==this.ratio&&!this.lost&&this.applyRatio(r);const o=!i.cameraOn,l=this.displayPrefs,c=this.constellationWork.defer(t.m,t.f,n),u={view:t,model:e,s:i,browse:o,ground:o&&i.ground,time:s,dt:n,display:l,pixelRatio:this.ratio,deferConstellationWork:!this.journey&&c};this.journey?.frame(u),this.hover.step(n),this.stars.setHover(this.hover.starSlots()),this.bodies.updateRadii(u,this.hover),!this.lost&&(this.updateCamera(t),this.pipe.night=l.night,this.renderer.setClearColor(o?l.night?131072:66053:0,o?1:0),this.stars.update(u),this.milkyWay.update(u),this.ground.update(u),this.lines.update(u),this.figures.update(u),this.bodies.update(u),this.liveFX?.update(u,this.journey?.decorativeSkyVisible===!0))}updateCamera(t){const e=t.m;this.tmpM.set(e[0],e[1],e[2],0,e[3],e[4],e[5],0,e[6],e[7],e[8],0,0,0,0,1),this.camera.quaternion.setFromRotationMatrix(this.tmpM),this.camera.position.set(0,0,0);const i=2*Math.atan(t.height/2/t.f)*180/Math.PI;(Math.abs(i-this.lastFov)>1e-4||this.camera.aspect!==t.width/t.height)&&(this.camera.fov=i,this.camera.aspect=t.width/t.height,this.camera.updateProjectionMatrix(),this.lastFov=i),this.camera.updateMatrixWorld()}render(){if(!this.active||this.lost||this.renderer.getContext().isContextLost())return!1;if(this.journey){if(!this.journey.render())return!1}else this.renderer.render(this.scene,this.camera);return this.active&&!this.lost&&!this.renderer.getContext().isContextLost()}dispose(){this.dead=!0,this.fxGeneration++,this.fxOwner=null,this.liveFX?.dispose(),this.liveFX=null,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.figures.dispose(),this.bodies.dispose(),this.stars.dispose(),this.milkyWay.dispose(),this.ground.dispose(),this.lines.dispose(),this.pipe.dispose(),this.renderer.dispose()}}function ra(a,t){let e=!1,i=!1,s=!1;const n=l=>{e!==l&&(e=l,t(l))},r=()=>{i=!0,n(!1)},o=()=>{i=!1};return a.addEventListener("webglcontextlost",r),a.addEventListener("webglcontextrestored",o),t(!1),{drawn(l){s||n(!i&&l)},dispose(){s||(s=!0,a.removeEventListener("webglcontextlost",r),a.removeEventListener("webglcontextrestored",o),n(!1))}}}const la=()=>({az:NaN,alt:NaN,lang:"",t:0,dir:null,deg:null});function ca(a,t,e,i,s,n){if(!s||!n)return;const r=Math.round(t.az),o=Math.round(t.alt),l=s!==a.dir||n!==a.deg,c=r!==a.az||o!==a.alt||e!==a.lang;!l&&(!c||i-a.t<100&&e===a.lang)||(n.textContent=`${cs(r,e)}° · ${t.alt>=0?"↑":"↓"}${cs(Math.abs(o),e)}°`,s.textContent=Ci(t.az,e),Object.assign(a,{az:r,alt:o,lang:e,t:i,dir:s,deg:n}))}const da=70,ua=[],ha={key:null,cons:"",changed:!1},fa=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):null,pa=()=>!!fa?.matches,ma=a=>a?a[0]==="b"?{kind:"body",id:a.slice(2)}:a[0]==="s"?{kind:"star",index:Number(a.slice(2))}:null:null,As=(a,t)=>Math.acos(Math.max(-1,Math.min(1,a[0]*t[0]+a[1]*t[1]+a[2]*t[2])))*Cs;function _a(a){const{glRef:t,ovRef:e,rootRef:i,videoRef:s,streamRef:n,capRef:r,capLiveRef:o,capNameRef:l,capSubRef:c,capHintRef:u,ghostRef:h,ghostNameRef:p,ghostSubRef:w,dirRef:R,degRef:j,ringRef:k,pillArrowRef:O,live:y,model:m,tracker:b,compass:q,zoomRef:mt,viewRef:bt,aimRef:At,vpRef:ut,overlayRef:at,peekModeRef:D,openFwd:A,stats:Mt,compassToastDone:ht,hintsLeft:J,setSkyDate:_t,setHud:ce,setCompassToast:ot,setPeekMode:Rt,snapRef:Ot,probeExtra:Xt,skyRef:G,extrasRef:gt,journeyRef:Dt}=a,z=new oa(t.current),Et=ra(t.current,f=>a.onSkyReadiness?.(f));G.current=z;const N=new ki(e.current);at.current=N;let zt=null,de=0,qt=0,ue=NaN,De=0,Ue=0,Jt=0,Ge=-1,he=0,fe=!1,Ut=1,pe=!0;const me=()=>{const f=!y.current.detail&&!Dt?.current?.covered&&document.visibilityState!=="hidden";f!==pe&&(pe=f,z.setActive(f),Jt=0)};document.addEventListener("visibilitychange",me);let Be=null,Lt=[],Tt=!0,X=0,H=0,Ie,vt=0,Ne=null,He="";const Ds=la();let We="",$e=null;const S={key:"",lang:"",version:-1,ground:!1,name:"",sub:"",hint:!1,hintShown:!1,since:0,counted:!1};let Ve=null,je=null,ge=!1,Ft={key:"",minute:-1,lang:"",zone:null,guide:null};const Us=f=>{if(!f||Se(f))return null;const d=y.current,M=d.settings.lang,_=Math.floor(m.date.getTime()/6e4);if(f!==Ft.key||_!==Ft.minute||M!==Ft.lang||d.zone!==Ft.zone){const x=Xi(f,m,M,we[M],d.zone);Ft={key:f,minute:_,lang:M,zone:d.zone,guide:x?{toward:x.toward,rise:x.rise,never:x.never}:null}}return Ft.guide},Gs=performance.now();let Xe=null;Oi&&Ps(()=>import("./probeFrame-ktpDt1V1.js"),__vite__mapDeps([3,1,2]),import.meta.url).then(f=>{Xe=f.publishFrame});const Bs=()=>{Lt=[];let f=0;i.current?.querySelectorAll("[data-block]").forEach(M=>{const _=M.getBoundingClientRect();if(!_.width||!_.height)return;const x={id:M.dataset.block||M.classList[0]||M.tagName.toLowerCase(),x0:_.left,y0:_.top,x1:_.right,y1:_.bottom};if(M===r.current&&p.current?.textContent){const v=h.current.getBoundingClientRect();v.width&&(x.x0=Math.min(x.x0,v.left),x.y0=Math.min(x.y0,v.top),x.x1=Math.max(x.x1,v.right),x.y1=Math.max(x.y1,v.bottom))}Lt.push(x),M.classList.contains("topbar")&&(f=Math.max(f,_.top))});const d=ut.current?.safe??{t:0,b:0};(d.t>0||f>0)&&Lt.push({id:"status-bar",x0:0,y0:0,x1:X,y1:Math.max(d.t+2,f)}),d.b>0&&Lt.push({id:"home-indicator",x0:0,y0:H-d.b-2,x1:X,y1:H})},Is=(f,d,M)=>{const _=y.current,x=_.settings.lang,v=f.key??(f.cons?`c:${f.cons}`:""),W=M&&!f.key;if(!v||v===S.key&&x===S.lang&&m.version===S.version&&W===S.ground)return;const U=we[x],K=Se(v)?N.pointOf(v):null;if(Se(v)&&!K)return;const yt=K?K.name[x]:$i(v,x,U),Y=W?`${U.belowHorizon} · ${U.raisePhone}`:K?Vi(K,x,U):ji(v,m,x,U,_.zone),Q=v!==S.key;Q&&(S.since=d,S.counted=!1,S.hint=J.current>0),S.hintShown=S.hint&&!W;const Gt=l.current,ft=c.current,Z=u.current;if(Gt&&ft&&Z&&(yt!==S.name||Y!==S.sub||x!==S.lang||Q||W!==S.ground)){const $=h.current,tt=o.current;if(Q&&S.name&&$&&tt&&_.captionVisible&&!pa()&&typeof tt.animate=="function"){p.current.textContent=S.name,w.current.textContent=S.sub;const B=$.animate([{opacity:1},{opacity:0}],{duration:80,easing:"ease-out",fill:"forwards"});B.onfinish=()=>{p.current.textContent="",w.current.textContent=""},tt.animate([{opacity:0},{opacity:0,offset:.5},{opacity:1}],{duration:160,easing:"ease-in"})}Gt.textContent=yt,ft.textContent=Y,Z.textContent=S.hintShown?U.tapForDetails:"",Tt=!0}Object.assign(S,{key:v,lang:x,version:m.version,ground:W,name:yt,sub:Y})},Ns=(f,d)=>{const M=y.current,_=M.settings.lang,x=qi(f);ca(Ds,x,_,d,R.current,j.current);const v=b.source==="ios-compass",W=q.update(b.last?.accuracy??null,v,d),U=M.sensorState==="none"?"none":W;return k.current&&(U!==We||k.current!==$e)&&(k.current.className=`cring ${U}`,We=U,$e=k.current),{pose:x,level:W,hasCompass:v}},qe=f=>{de=requestAnimationFrame(qe);const d=y.current,M=ut.current,_=M?.appW??window.innerWidth,x=M?.appH??window.innerHeight;if(_!==X||x!==H){X=_,H=x;const P=window.devicePixelRatio||1;z.resize(X,H,P),N.resize(X,H,P),Tt=!0}const v=Dt?.current,W=new Date(Date.now()+d.offsetMin*6e4),U={lat:d.place.lat,lon:d.place.lon,height:d.place.height},K=v?v.time(f,W,U):null;if(K?(m.update(K.date,K.place??U,v?.starPositionsJ2000),ue=NaN,f-qt>250&&(qt=f,_t(K.date))):(f-qt>1e3||d.offsetMin!==ue||d.place!==Be)&&(m.update(W,U),qt=f,ue=d.offsetMin,Be=d.place,_t(W)),m.version!==Ge&&(z.setSkyMatrix(m.E),Ge=m.version),me(),!pe)return;const yt=b.frame(f);if(!yt)return;const Y=s.current,Q=mt.current,Gt=Di(d.cameraOn,Y,n.current);let ft;if(Gt){ft=Ui(X,H,Y.videoWidth,Y.videoHeight,d.settings.camFov,Q);const P=`scale(${Q})`;Y.style.transform!==P&&(Y.style.transform=P)}else ft=Ji(H,da)*Q;const Z=v?v.camera(f,{m:yt,f:ft,width:X,height:H},m):null;Z?fe=!0:fe&&(fe=!1,b.filter.reset());const $=Gt&&!Z,tt=Z?Z.m:yt;Z&&(ft=Z.f);const B={m:tt,f:ft,cx:X/2,cy:H/2,width:X,height:H};bt.current=B;const Hs=Jt?Math.min(.1,(f-Jt)/1e3):.016;if(Jt=f,he++,d.settings!==Ve){Ve=d.settings;const P=Gi(d.settings);Bi(je,P)||(je=P,z.setDisplay(P))}const ve=Ii(d.settings.stars,$,Q),Bt=Ni(ve,d.settings),Je=gt.current;N.setPoints(Je&&m.date.getUTCFullYear()>=1900?Je.points(m.date,m.obs,d.selected):ua),N.project(m,B,z.radii,Bt);const rt=v&&(v.view!=="sky"||v.timeLapsing)?ha:N.aim(m,B,f);(v?v.overlay!==Ut:Ut!==1)&&(Ut=v?v.overlay:1,e.current.style.opacity=Ut===1?"":String(Ut)),At.current=rt;const Ke=!!d.peek&&D.current==="card",It=Ke||d.calibrating?null:rt.key;It!==Ie&&(Ie=It,z.setHover(ma(It)));const Ye=Math.log2(Math.max(.5,Q)),Qe=v?.bodyScale??Hi(d.settings.planetSize);z.update(B,m,{cameraOn:$,milkyWay:d.settings.milkyWay,lines:d.settings.lines,art:d.settings.art,ground:d.settings.ground,grid:d.settings.grid,magLimit:ve,twinkle:d.settings.twinkle,focusId:rt.cons||null,bodyScale:Qe},(f-Gs)/1e3,Hs);const ye=z.render(),Ws=ye&&v?{sequence:he,date:new Date(m.date.getTime()),observer:{...m.obs},view:{m:Float64Array.from(B.m),f:B.f,width:B.width,height:B.height},viewKind:v.view}:void 0,Ze=Ot.current;Ze&&(Ot.current=null,Ze({gl:t.current,video:$?Y:null,zoom:Q,view:B,model:m,radii:z.radii,settings:d.settings,selected:d.selected,starLimit:Bt,labelMag:Math.min(4.5,2+1.1*Ye,Bt),now:f,points:N.currentPoints()}));const ts=Math.asin(Math.max(-1,Math.min(1,-tt[8])))*Cs;ge=!$&&(ge?ts<-1:ts<-3),Is(rt,f,ge),d.captionVisible!==Ne&&(Ne=d.captionVisible,Tt=!0),d.ui!==He&&(He=d.ui,Tt=!0),S.hintShown&&!S.counted&&d.captionVisible&&f-S.since>=1e3&&(S.counted=!0,J.current=Math.max(0,3-Ki("najm.tapHints"))),(Tt||f-Ue>400)&&(Bs(),Ue=f,Tt=!1);const $s=we[d.settings.lang],Vs=Wi($s),xe=N.draw(m,B,{lang:d.settings.lang,bodyLabels:v?.bodyLabels??d.settings.bodyLabels,starLabels:d.settings.starLabels,labelMag:Math.min(4.5,2+1.1*Ye,Bt),cameraOn:$,night:d.settings.night},{selected:d.selected,blocked:Lt,calibrating:d.calibrating,captionKey:v?.labelledByJourney??(d.captionVisible?rt.key:null),targeted:!!rt.key&&!d.calibrating&&!Ke,guide:!0,words:Vs,now:f,below:v?.timeLapsing?null:Us(d.selected),reticle:!Z,horizon:!v?.airless});v?.drawn(B,xe.selected,f,Ws),Et.drawn(ye&&z.isActive&&!z.contextLost),Xe?.({frame:he,w:X,h:H,L:d,ov:N,cap:S,capEl:r.current,aim:rt,hover:It,blocked:Lt,selected:xe.selected,safe:ut.current?.safe??null,starLimit:ve,drawnLimit:Bt,camLive:$,bodyScale:Qe,gl:z.display,extra:Xt()});const et=xe.selected;zt?.(f,It??(rt.cons?"c:"+rt.cons:null),et,m,d.settings.haptics,!v&&!d.detail&&!d.calibrating&&d.captionVisible&&document.visibilityState==="visible"&&ye);const es=[-tt[2],-tt[5],-tt[8]];if(d.peek&&et&&et.key===d.peek)if(D.current==="card"){const P=!A.current||As(es,A.current)>8;et.angle>20&&P?vt?f-vt>=800&&(vt=0,Rt("pill")):vt=f:vt=0}else{vt=0,(d.peek[0]==="c"?et.angle<=8:et.visible&&et.dist<=Math.max(28,et.r+6))&&(N.celebrate(d.peek,f),A.current=es,Rt("card"));const pt=O.current;if(pt){const Nt=`rotate(${et.arrow.toFixed(3)}rad)`;pt.style.transform!==Nt&&(pt.style.transform=Nt);const Ht=et.here?"hidden":"";pt.style.visibility!==Ht&&(pt.style.visibility=Ht)}}else vt=0;const lt=Mt.current;lt.frames++,f-lt.lastT>=1e3&&(lt.fps=lt.frames,lt.frames=0,lt.eventsPerSec=lt.events,lt.events=0,lt.lastT=f);const{pose:js,level:ss,hasCompass:Xs}=Ns(tt,f);if($||q.reset(),f-De>250){De=f;const P=m.bodyById.get("sun"),pt=!!($&&P&&P.alt>-1&&As(P.enu,js.fwd)<25),Nt=b.last?.accuracy??null,Ht=Nt==null?null:Math.round(Nt),is=Math.round(b.bias*10)/10;ce(Wt=>Wt.sunNear===pt&&Wt.acc===Ht&&Wt.bias===is&&Wt.level===ss?Wt:{sunNear:pt,acc:Ht,bias:is,level:ss}),!ht.current&&$&&Xs&&!b.manual&&q.badFor(f,8e3)&&(ht.current=!0,ot(!0),setTimeout(()=>ot(!1),4e3))}};return de=requestAnimationFrame(qe),()=>{zt=null,cancelAnimationFrame(de),Et.dispose(),document.removeEventListener("visibilitychange",me),G.current=null,z.dispose()}}export{_a as startSkyLoop};
