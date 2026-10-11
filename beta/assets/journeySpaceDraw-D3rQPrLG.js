import{a as I,c7 as n,cW as A,b2 as D,k as M,aW as N,bt as u,bV as x,bQ as c,cX as _,bU as j,bo as V,O as R,bY as y,c2 as b,b_ as d,b$ as w,c0 as T,c1 as F,cY as k,c4 as O,c5 as K,cZ as C,c_ as E,cj as U,M as P,b as G,c$ as H,d0 as L,d1 as W,c8 as q,bZ as $,d2 as Y}from"./index-DSoIG2w0.js";import{S as B,b as Q}from"./Player-DAtG1sew.js";const Z=i=>{const t=Math.min(1,Math.max(0,i));return t*t*t*(t*(6*t-15)+10)};class it{constructor(t,e,a,s){this.minDistance=a,this.maxDistance=s,this.width=t.width,this.height=t.height,this.camera=new I(Math.min(70,Math.max(35,t.fovDeg)),t.width/t.height,.001,1e5),this.direction=(e.direction?.clone()??new n(...t.forward).negate()).normalize(),this.up=new n(...t.up).normalize(),Math.abs(this.up.dot(this.direction))>.98&&this.up.set(0,0,1),Math.abs(this.up.dot(this.direction))>.98&&this.up.set(0,1,0),this.right=new n().crossVectors(this.up,this.direction).normalize(),this.up.crossVectors(this.direction,this.right).normalize(),this.shot={focus:e.focus.clone(),distance:e.distance},this.apply()}camera;up;direction;right;shot;movement=null;yaw=0;pitch=0;width;height;fit(t){const e=Math.tan(this.camera.fov*Math.PI/360)*Math.min(1,this.camera.aspect);return Math.max(this.minDistance,t/Math.max(.05,e*.78)+t)}move(t,e=1800){this.cancel(),this.direction.copy(this.camera.position).sub(this.shot.focus).normalize(),this.up.copy(this.camera.up),this.yaw=this.pitch=0,this.right.crossVectors(this.up,this.direction).normalize();const a=new A().setFromUnitVectors(this.direction,t.direction?.clone().normalize()??this.direction);return new Promise(s=>{this.movement={from:{...this.shot,focus:this.shot.focus.clone()},to:{focus:t.focus.clone(),distance:Math.min(this.maxDistance,Math.max(this.minDistance,t.distance))},fromDirection:this.direction.clone(),fromUp:this.up.clone(),rotation:a,t0:null,ms:Math.max(0,e),done:s}})}track(t){this.movement?this.movement.to.focus.copy(t):(this.shot.focus.copy(t),this.apply())}bounds(t,e=this.maxDistance){this.minDistance=t,this.maxDistance=e}drag(t,e){this.cancel();const a=Math.PI/Math.max(this.width,1);this.yaw-=t*a,this.pitch=Math.min(1.25,Math.max(-1.25,this.pitch+e*a)),this.apply()}pinch(t){this.cancel(),!(!Number.isFinite(t)||t<=0)&&(this.shot.distance=Math.min(this.maxDistance,Math.max(this.minDistance,this.shot.distance/t)),this.apply())}resize(t,e){this.width=Math.max(1,t),this.height=Math.max(1,e),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}update(t){const e=this.movement;if(e){e.t0??=t;const a=e.ms===0?1:Z((t-e.t0)/e.ms);this.shot.focus.copy(e.from.focus).lerp(e.to.focus,a),this.shot.distance=Math.exp(Math.log(e.from.distance)+(Math.log(e.to.distance)-Math.log(e.from.distance))*a);const s=new A().slerp(e.rotation,a);this.direction.copy(e.fromDirection).applyQuaternion(s),this.up.copy(e.fromUp).applyQuaternion(s),this.right.crossVectors(this.up,this.direction).normalize(),a>=1&&(this.movement=null,e.done(!0))}this.apply()}avoid(t){const e=this.camera.position.clone().sub(this.shot.focus).normalize();for(const a of t){const s=a.centre.clone().sub(this.shot.focus),r=s.dot(e),o=(a.radius*1.015)**2-s.lengthSq()+r*r;if(o<0)continue;const h=r-Math.sqrt(o),l=r+Math.sqrt(o);this.shot.distance>=h&&this.shot.distance<=l&&(this.shot.distance=l+a.radius*.015)}this.apply()}apply(){const t=this.direction.clone().applyAxisAngle(this.up,this.yaw),e=this.right.clone().applyAxisAngle(this.up,this.yaw);t.applyAxisAngle(e,this.pitch),this.camera.position.copy(this.shot.focus).addScaledVector(t,this.shot.distance),this.camera.up.crossVectors(t,e).normalize(),this.camera.lookAt(this.shot.focus),this.camera.updateMatrixWorld()}anchor(t,e,a,s){const r=e.clone().project(this.camera),o=e.distanceTo(this.camera.position),h=this.height/(2*Math.tan(this.camera.fov*Math.PI/360))*a/Math.sqrt(Math.max(o*o-a*a,1e-9));return{id:t,x:(r.x+1)*this.width/2,y:(1-r.y)*this.height/2,r:h,visible:s>.5&&r.z>-1&&r.z<1&&Math.abs(r.x)<=1.15&&Math.abs(r.y)<=1.15}}cancel(){this.movement&&(this.movement.done(!1),this.movement=null)}dispose(){this.cancel()}}const at=6378.137,st=1737.4,rt=5.2,m=i=>[i.x,i.y,i.z],z=(i,t)=>[i[0]-t[0],i[1]-t[1],i[2]-t[2]],p=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],f=(i,t)=>[i[0]*t[0]+i[1]*t[1]+i[2]*t[2],i[3]*t[0]+i[4]*t[1]+i[5]*t[2],i[6]*t[0]+i[7]*t[1]+i[8]*t[2]];function X(i){const t=(e,a)=>u(m(V(i,new R(e,a,0))));return{prime:t(0,0),east:t(0,90),pole:t(90,0)}}function ot(i,t){const e=Math.cos(t.lat*c),a=e*Math.cos(t.lon*c),s=e*Math.sin(t.lon*c),r=Math.sin(t.lat*c);return u([a*i.prime[0]+s*i.east[0]+r*i.pole[0],a*i.prime[1]+s*i.east[1]+r*i.pole[1],a*i.prime[2]+s*i.east[2]+r*i.pole[2]])}function nt(i,t){if(i===M.Earth)return X(t);const e=_(i,t),a=u(m(e.north)),s=[-Math.sin(e.ra*15*c),Math.cos(e.ra*15*c),0],r=j(a,s),o=e.spin*c,h=u([Math.cos(o)*s[0]+Math.sin(o)*r[0],Math.cos(o)*s[1]+Math.sin(o)*r[1],Math.cos(o)*s[2]+Math.sin(o)*r[2]]);return{prime:h,pole:a,east:j(a,h)}}function ht(i){if(!Number.isFinite(i.getTime()))throw new Error("space scene: invalid date");const t=m(D(M.Earth,i)),e=m(D(M.Mars,i)),a=m(N(i)),s=u(p(t,-1)),r=u(z(p(t,-1),a)),o=u(p(a,-1)),h=(1+x(r,o))/2;return{date:i,earth:t,mars:e,moon:a,sunEarth:s,sunMoon:r,earthMoon:o,sunMars:u(p(e,-1)),moonLit:h}}function ut(i,t,e){const a=u(t);let s=1/0,r=-1;return e.forEach((o,h)=>{if(!(o.radius>0))return;const l=z(i,o.centre),v=x(l,a),S=v*v-x(l,l)+o.radius*o.radius;if(S<0)return;const g=-v-Math.sqrt(S);g>0&&g<s&&(s=g,r=h)}),{index:r,distance:s}}const J=`
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
  ${T}
  ${F}
  ${E}
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
      vec3 earthlit = albedo * els * uEarthshine * vec3(${Y().map(i=>i.toFixed(5)).join(", ")});
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
`;class ct{material;mesh;centres=Array.from({length:3},()=>new n);radii=[0,0,0];status=["unavailable","unavailable","unavailable"];textures=[];dead=!1;constructor(t){this.material=new y({vertexShader:"varying vec2 vNdc; void main(){ vNdc=position.xy; gl_Position=vec4(position.xy,0.0,1.0); }",fragmentShader:J,transparent:!0,depthTest:!1,depthWrite:!1,blending:w,blendSrc:d,blendDst:b,blendSrcAlpha:d,blendDstAlpha:b,uniforms:{...t.uniforms,uInvProjection:{value:new C},uCamera:{value:new C},uOrigin:{value:new n},uCentres:{value:this.centres},uRadii:{value:this.radii},uLights:{value:Array.from({length:3},()=>new n(1,0,0))},uColours:{value:[new n(.04,.18,.28),new n(.35,.35,.35),new n(.5,.18,.07)]},uAxes:{value:Array.from({length:3},()=>new U)},uKinds:{value:[0,1,2]},uHasMaps:{value:[0,0,0]},uMap0:{value:null},uMap1:{value:null},uMap2:{value:null},uEarthDirection:{value:new n},uEarthshine:{value:0},uMarker:{value:new n},uShowMarker:{value:0},uFade:{value:0}}}),this.mesh=new P(new G(2,2),this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=3}map(t,e){if(typeof document>"u")return;this.status[t]="loading";const a=H(e,{cache:!1,onLoad:()=>{this.dead||(this.status[t]="ready",this.material.uniforms.uHasMaps.value[t]=1)},onError:()=>{this.dead||(this.status[t]="failed")}});a.wrapS=L,this.material.uniforms[`uMap${t}`].value=a,this.textures.push(a)}axes(t,e,a){const s=f(a,e.prime),r=f(a,e.pole),o=f(a,e.east);this.material.uniforms.uAxes.value[t].set(...s,...r,-o[0],-o[1],-o[2])}light(t,e,a){this.material.uniforms.uLights.value[t].set(...f(a,e))}update(t,e){t.updateMatrixWorld(),this.material.uniforms.uInvProjection.value.copy(t.projectionMatrixInverse),this.material.uniforms.uCamera.value.copy(t.matrixWorld),this.material.uniforms.uOrigin.value.copy(t.position),this.material.uniforms.uFade.value=e}dispose(){if(!this.dead){this.dead=!0;for(const t of this.textures)W(t);this.mesh.geometry.dispose(),this.material.dispose()}}}class lt{group=new q;material;constructor(t,e,a){this.material=new y({vertexShader:Q,fragmentShader:B,transparent:!0,depthTest:!1,depthWrite:!1,blending:w,blendSrc:d,blendDst:d,uniforms:{...a.uniforms,uTail:{value:1},uHead:{value:1},uGain:{value:0},uViewport:{value:new $(1,1)}}});const s=new P(t,this.material);s.frustumCulled=!1,this.group.matrixAutoUpdate=!1,this.group.matrix.set(e[0],e[1],e[2],0,e[3],e[4],e[5],0,e[6],e[7],e[8],0,0,0,0,1),this.group.add(s)}update(t,e){this.group.matrix.setPosition(t.position),this.group.matrixWorldNeedsUpdate=!0,this.material.uniforms.uGain.value=e*.8}resize(t,e,a){this.material.uniforms.uViewport.value.set(t*a,e*a)}dispose(){this.material.dispose()}}class mt{constructor(t,e=new n(.06,.12,.2)){this.colour=e,this.material=new y({vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`${T}
${F}
uniform vec3 uColour; uniform float uFade; void main(){ gl_FragColor=najmOutput(najmEmissiveToDisplay(uColour)*uFade,uFade); }`,transparent:!0,depthTest:!1,depthWrite:!1,blending:w,blendSrc:d,blendDst:b,uniforms:{...t.uniforms,uColour:{value:e},uFade:{value:0}}}),this.object=new k(new O,this.material),this.object.frustumCulled=!1,this.object.renderOrder=1}object;material;capacity=0;set(t){t.length>this.capacity&&(this.capacity=2**Math.ceil(Math.log2(Math.max(2,t.length))),this.object.geometry.dispose(),this.object.geometry=new O,this.object.geometry.setAttribute("position",new K(new Float32Array(this.capacity*3),3)));const e=this.object.geometry.getAttribute("position");e&&(t.forEach((a,s)=>e.setXYZ(s,...a)),e.needsUpdate=!0),this.object.geometry.setDrawRange(0,t.length)}fade(t){this.material.uniforms.uFade.value=t}dispose(){this.object.geometry.dispose(),this.material.dispose()}}export{at as E,st as M,ct as S,lt as a,mt as b,it as c,rt as d,X as e,nt as f,ot as g,ut as n,ht as s,f as t,m as v};
