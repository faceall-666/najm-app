import{b4 as A,B as M,cc as _,bF as u,g3 as b,gw as l,gC as I,gy as j,by as P,O as R,bY as n,cl as y,cJ as x,cm as d,cn as w,cp as C,cP as T,gD as E,cj as D,cN as K,cG as O,g4 as G,cv as k,M as F,e as H,cr as L,e4 as V,ct as U,bZ as z,cE as W}from"./index-DxCBhnAT.js";import{a as $}from"./phase-BqDDXW_6.js";import{S as Y,d as q}from"./journey-R6jBkORi.js";const ee=6378.137,te=1737.4,ae=5.2,m=t=>[t.x,t.y,t.z],N=(t,e)=>[t[0]-e[0],t[1]-e[1],t[2]-e[2]],h=(t,e)=>[t[0]*e,t[1]*e,t[2]*e],p=(t,e)=>[t[0]*e[0]+t[1]*e[1]+t[2]*e[2],t[3]*e[0]+t[4]*e[1]+t[5]*e[2],t[6]*e[0]+t[7]*e[1]+t[8]*e[2]];function B(t){const e=(a,i)=>u(m(P(t,new R(a,i,0))));return{prime:e(0,0),east:e(0,90),pole:e(90,0)}}function ie(t,e){const a=Math.cos(e.lat*l),i=a*Math.cos(e.lon*l),r=a*Math.sin(e.lon*l),o=Math.sin(e.lat*l);return u([i*t.prime[0]+r*t.east[0]+o*t.pole[0],i*t.prime[1]+r*t.east[1]+o*t.pole[1],i*t.prime[2]+r*t.east[2]+o*t.pole[2]])}function re(t,e){if(t===M.Earth)return B(e);const a=I(t,e),i=u(m(a.north)),r=[-Math.sin(a.ra*15*l),Math.cos(a.ra*15*l),0],o=j(i,r),s=a.spin*l,c=u([Math.cos(s)*r[0]+Math.sin(s)*o[0],Math.cos(s)*r[1]+Math.sin(s)*o[1],Math.cos(s)*r[2]+Math.sin(s)*o[2]]);return{prime:c,pole:i,east:j(i,c)}}function se(t){if(!Number.isFinite(t.getTime()))throw new Error("space scene: invalid date");const e=m(A(M.Earth,t)),a=m(A(M.Mars,t)),i=m(_(t)),r=u(h(e,-1)),o=u(N(h(e,-1),i)),s=u(h(i,-1)),c=(1+b(o,s))/2;return{date:t,earth:e,mars:a,moon:i,sunEarth:r,sunMoon:o,earthMoon:s,sunMars:u(h(a,-1)),moonLit:c}}function oe(t,e,a){const i=u(e);let r=1/0,o=-1;return a.forEach((s,c)=>{if(!(s.radius>0))return;const f=N(t,s.centre),v=b(f,i),S=v*v-b(f,f)+s.radius*s.radius;if(S<0)return;const g=-v-Math.sqrt(S);g>0&&g<r&&(r=g,o=c)}),{index:o,distance:r}}const Z=`
  varying vec2 vNdc;
  uniform mat4 uInvProjection, uCamera;
  uniform vec3 uOrigin;
  uniform vec3 uCentres[3], uLights[3], uColours[3];
  uniform mat3 uAxes[3];
  uniform float uRadii[3], uKinds[3], uHasMaps[3];
  uniform sampler2D uMap0, uMap1, uMap2;
  uniform vec3 uEarthDirection, uMarker;
  uniform float uEarthshine, uShowMarker, uFade;
  const float PI = 3.141592653589793;
  ${C}
  ${T}
  ${G}
  vec2 uvAt(vec3 n) { return vec2(atan(-n.z, n.x) / (2.0 * PI) + 0.5, asin(clamp(n.y, -1.0, 1.0)) / PI + 0.5); }
  void main() {
    vec4 q = uInvProjection * vec4(vNdc, 1.0, 1.0);
    vec3 D = normalize(mat3(uCamera) * q.xyz);
    float nearT = 1e20, cov = 0.0;
    int hit = -1;
    for (int i = 0; i < 3; i++) {
      vec3 O = uOrigin - uCentres[i];
      float b = dot(O, D), d = sqrt(max(dot(O, O) - b * b, 0.0));
      float c = clamp((uRadii[i] - d) / max(fwidth(d), 1e-6) + 0.5, 0.0, 1.0);
      float t = -b - sqrt(max(uRadii[i] * uRadii[i] - d * d, 0.0));
      if (uRadii[i] > 0.0 && b < 0.0 && t > 0.0 && c > 0.0 && t < nearT) { nearT = t; hit = i; cov = c; }
    }
    if (hit < 0) discard;
    vec3 N = normalize(uOrigin + nearT * D - uCentres[hit]);
    vec3 bn = uAxes[hit] * N;
    vec2 uv = uvAt(bn), dx = dFdx(uv), dy = dFdy(uv);
    // Unwrapped longitude derivatives remain continuous at the ±180° seam.
    dx.x -= round(dx.x); dy.x -= round(dy.x);
    vec3 albedo = uColours[hit];
    if (uHasMaps[hit] > 0.5) {
      if (hit == 0) albedo = textureGrad(uMap0, vec2(fract(uv.x), uv.y), dx, dy).rgb;
      else if (hit == 1) albedo = textureGrad(uMap1, vec2(fract(uv.x), uv.y), dx, dy).rgb;
      else albedo = textureGrad(uMap2, vec2(fract(uv.x), uv.y), dx, dy).rgb;
    }
    float mu = max(dot(N, -D), 0.0), mu0 = max(dot(N, uLights[hit]), 0.0);
    vec3 rgb;
    if (uKinds[hit] > 2.5) {
      rgb = najmEmissiveToDisplay(vec3(0.85, 0.79, 0.68) * (vec3(1.0) - vec3(0.56, 0.66, 0.78) * (1.0 - mu)));
    } else if (uKinds[hit] > 0.5 && uKinds[hit] < 1.5) {
      float ls = 2.0 * mu0 / (mu0 + mu + 1e-4);
      vec3 sunlit = albedo * min(mix(mu0, ls, 0.85), 1.5) * 1.8;
      float em = max(dot(N, uEarthDirection), 0.0);
      float els = mix(em, 2.0 * em / (em + mu + 1e-4), 0.85);
      vec3 earthlit = albedo * els * uEarthshine * vec3(${$().map(t=>t.toFixed(5)).join(", ")});
      rgb = najmEarthlitToDisplay(sunlit, earthlit);
    } else {
      // Earth is Lambertian; Mars is a weakly limb-darkened Minnaert surface. No light on the night hemisphere.
      float shade = uKinds[hit] > 1.5 ? pow(mu0, 0.85) * pow(max(mu, 0.08), -0.15) : mu0;
      rgb = najmToDisplay(albedo * shade * 1.7);
    }
    if (hit == 0 && uShowMarker > 0.5) {
      float ang = acos(clamp(dot(N, uMarker), -1.0, 1.0));
      float fw = max(fwidth(ang), 0.001);
      float ring = 1.0 - smoothstep(0.004, 0.004 + fw, abs(ang - 0.025));
      float dotMark = 1.0 - smoothstep(0.009, 0.009 + fw, ang);
      rgb = mix(rgb, vec3(0.95, 0.68, 0.24), max(ring * 0.9, dotMark));
    }
    gl_FragColor = najmOutput(rgb * cov * uFade, cov * uFade);
  }
`;class ne{material;mesh;centres=Array.from({length:3},()=>new n);radii=[0,0,0];status=["unavailable","unavailable","unavailable"];textures=[];dead=!1;constructor(e){this.material=new y({vertexShader:"varying vec2 vNdc; void main(){ vNdc=position.xy; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:Z,transparent:!0,depthTest:!1,depthWrite:!1,blending:w,blendSrc:d,blendDst:x,blendSrcAlpha:d,blendDstAlpha:x,uniforms:{...e.uniforms,uInvProjection:{value:new O},uCamera:{value:new O},uOrigin:{value:new n},uCentres:{value:this.centres},uRadii:{value:this.radii},uLights:{value:Array.from({length:3},()=>new n(1,0,0))},uColours:{value:[new n(.04,.18,.28),new n(.35,.35,.35),new n(.5,.18,.07)]},uAxes:{value:Array.from({length:3},()=>new k)},uKinds:{value:[0,1,2]},uHasMaps:{value:[0,0,0]},uMap0:{value:null},uMap1:{value:null},uMap2:{value:null},uEarthDirection:{value:new n},uEarthshine:{value:0},uMarker:{value:new n},uShowMarker:{value:0},uFade:{value:0}}}),this.mesh=new F(new H(2,2),this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=3}map(e,a){if(typeof document>"u")return;this.status[e]="loading";const i=L(a,{cache:!1,onLoad:()=>{this.dead||(this.status[e]="ready",this.material.uniforms.uHasMaps.value[e]=1)},onError:()=>{this.dead||(this.status[e]="failed")}});i.wrapS=V,this.material.uniforms[`uMap${e}`].value=i,this.textures.push(i)}axes(e,a,i){const r=p(i,a.prime),o=p(i,a.pole),s=p(i,a.east);this.material.uniforms.uAxes.value[e].set(...r,...o,-s[0],-s[1],-s[2])}light(e,a,i){this.material.uniforms.uLights.value[e].set(...p(i,a))}update(e,a){e.updateMatrixWorld(),this.material.uniforms.uInvProjection.value.copy(e.projectionMatrixInverse),this.material.uniforms.uCamera.value.copy(e.matrixWorld),this.material.uniforms.uOrigin.value.copy(e.position),this.material.uniforms.uFade.value=a}dispose(){if(!this.dead){this.dead=!0;for(const e of this.textures)U(e);this.mesh.geometry.dispose(),this.material.dispose()}}}class ue{group=new z;material;constructor(e,a,i){this.material=new y({vertexShader:q,fragmentShader:Y,transparent:!0,depthTest:!1,depthWrite:!1,blending:w,blendSrc:d,blendDst:d,uniforms:{...i.uniforms,uTail:{value:1},uHead:{value:1},uGain:{value:0},uViewport:{value:new W(1,1)}}});const r=new F(e,this.material);r.frustumCulled=!1,this.group.matrixAutoUpdate=!1,this.group.matrix.set(a[0],a[1],a[2],0,a[3],a[4],a[5],0,a[6],a[7],a[8],0,0,0,0,1),this.group.add(r)}update(e,a){this.group.matrix.setPosition(e.position),this.group.matrixWorldNeedsUpdate=!0,this.material.uniforms.uGain.value=a*.8}resize(e,a,i){this.material.uniforms.uViewport.value.set(e*i,a*i)}dispose(){this.material.dispose()}}class le{constructor(e,a=new n(.06,.12,.2)){this.colour=a,this.material=new y({vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`${C}
${T}
uniform vec3 uColour; uniform float uFade; void main(){ gl_FragColor=najmOutput(najmEmissiveToDisplay(uColour)*uFade,uFade); }`,transparent:!0,depthTest:!1,depthWrite:!1,blending:w,blendSrc:d,blendDst:x,uniforms:{...e.uniforms,uColour:{value:a},uFade:{value:0}}}),this.object=new E(new D,this.material),this.object.frustumCulled=!1,this.object.renderOrder=1}colour;object;material;capacity=0;set(e){e.length>this.capacity&&(this.capacity=2**Math.ceil(Math.log2(Math.max(2,e.length))),this.object.geometry.dispose(),this.object.geometry=new D,this.object.geometry.setAttribute("position",new K(new Float32Array(this.capacity*3),3)));const a=this.object.geometry.getAttribute("position");a&&(e.forEach((i,r)=>a.setXYZ(r,...i)),a.needsUpdate=!0),this.object.geometry.setDrawRange(0,e.length)}fade(e){this.material.uniforms.uFade.value=e}dispose(){this.object.geometry.dispose(),this.material.dispose()}}export{ee as E,te as M,le as S,ne as a,ue as b,ae as c,re as d,B as e,ie as g,oe as n,se as s,p as t,m as v};
