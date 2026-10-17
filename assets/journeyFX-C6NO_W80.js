import{G as T,as as O,gX as C,cR as R,a7 as V,bG as P,bb as q,bZ as j,M as b,e as M,cE as f,bY as N,cj as E,cN as w,cQ as L,gY as _,gZ as I,cl as z,cJ as D,cm as X,cn as G,cp as S}from"./index-DxCBhnAT.js";const A=48,F=192,m=(h,t=0,r=1)=>Number.isFinite(h)?Math.min(r,Math.max(t,h)):t;function U(h){let t=(Number.isFinite(h)?h:1)>>>0;const r=()=>(t=Math.imul(t,1664525)+1013904223>>>0,(t>>>8)/16777216),s=new Float32Array(A*4);for(let n=0;n<s.length;n++)s[n]=r();return s}function H(h,t){const r=h.m,s=-(r[0]*t[2]+r[3]*t[5]+r[6]*t[8]),n=-(r[1]*t[2]+r[4]*t[5]+r[7]*t[8]);return[m(s,-1,1),m(n,-1,1)]}function J(h,t,r,s,n){if(r!==32349&&r!==30438||h.sunAltitude()>-8)return null;const o=O.indexOf(r);if(o<0||C(V[o],R(s,n))<=0)return null;const e=h.starsEnu[o*3],a=h.starsEnu[o*3+1],l=h.starsEnu[o*3+2];if(!Number.isFinite(l)||l<=Math.sin(1*Math.PI/180))return null;const u=P(t,e,a,l);return u&&u.x>=0&&u.y>=0&&u.x<=t.width&&u.y<=t.height?u:null}function Y(h){const t=h?T.get(h):null;if(!t)return new Float64Array;const r=[];for(const s of t.lines)for(let n=0;n+5<s.length;n+=3){const o=[s[n],s[n+1],s[n+2]],e=[s[n+3],s[n+4],s[n+5]],a=Math.acos(m(o[0]*e[0]+o[1]*e[1]+o[2]*e[2],-1,1));if(a<1e-5||a>Math.PI-.01)continue;const l=Math.min(12,Math.max(1,Math.ceil(a/(3*Math.PI/180)))),u=i=>{const p=Math.sin((1-i)*a)/Math.sin(a),x=Math.sin(i*a)/Math.sin(a);return o.map((c,d)=>c*p+e[d]*x)};for(let i=0;i<l;i++){if(r.length>=F*6)return new Float64Array(r);r.push(...u(i/l),...u((i+1)/l))}}return new Float64Array(r)}const k=h=>h.starPositionsJ2000===q,B=`
  varying vec2 vUv;
  void main(){vUv=uv;gl_Position=vec4(position.xy,0.0,1.0);}
`,$=`
  uniform vec2 uViewport;uniform vec2 uCentre;uniform float uFocal;
  uniform vec3 uHorizon;uniform vec2 uParallax;uniform float uLandscape;uniform float uStrength;uniform float uTime;
  varying vec2 vUv;
  ${S}
  void main(){
    vec2 px=vUv*uViewport;
    vec2 ray=vec2((px.x-uCentre.x)/uFocal,(px.y-(uViewport.y-uCentre.y))/uFocal);
    float up=dot(uHorizon,vec3(ray,1.0))/sqrt(1.0+dot(ray,ray));
    // Illustrative foreground only, attached to the actual projected ENU horizon.
    float x=vUv.x+uParallax.x*0.009;
    float ridge=0.010*sin(x*11.0+0.8)+0.005*sin(x*23.0);
    float under=1.0-smoothstep(ridge-0.006,ridge+0.006,up);
    float depth=clamp(-up*3.0,0.0,1.0);
    vec3 earth=mix(vec3(0.10,0.075,0.045),vec3(0.018,0.021,0.029),depth);
    float nearRidge=1.0-smoothstep(-0.040,-0.025,up+0.008*sin(x*17.0+uParallax.x*0.6));
    earth=mix(earth,vec3(0.019,0.017,0.019),nearRidge*0.60);
    if(uLandscape<1.5){
      float bank=0.48+0.15*sin(depth*2.0+0.4)+uParallax.x*0.014*depth;
      float width=0.018+depth*0.22;
      float water=1.0-smoothstep(width,width+0.012,abs(x-bank));
      float ripple=0.5+0.5*sin(depth*170.0-uTime*0.7+uParallax.y*0.3);
      earth=mix(earth,vec3(0.020,0.040,0.058)+vec3(0.025,0.019,0.009)*ripple,water);
    }
    float alpha=under*0.72*uStrength;
    if(alpha<0.0001)discard;
    gl_FragColor=najmOutput(earth*alpha,alpha);
  }
`,Q=`
  attribute vec4 aSeed;uniform float uTime;uniform float uPx;uniform vec2 uParallax;
  varying float vAlpha;
  void main(){
    float depth=0.3+0.7*aSeed.z;
    vec2 p=vec2(fract(aSeed.x+uTime*0.0018*depth),fract(aSeed.y+uTime*0.0031*depth)*0.48);
    p+=uParallax*vec2(0.007,0.004)*depth;
    gl_Position=vec4(p*2.0-1.0,0.0,1.0);
    gl_PointSize=(1.0+2.5*aSeed.w)*uPx;
    vAlpha=0.06+0.10*aSeed.z;
  }
`,Z=`
  uniform float uStrength;varying float vAlpha;
  ${S}
  void main(){vec2 q=(gl_PointCoord-.5)*2.0;float a=exp(-dot(q,q)*3.5)*vAlpha*uStrength;
    gl_FragColor=najmOutput(vec3(0.72,0.57,0.34)*a,a);}
`,K=`
  uniform vec2 uAnchor;uniform vec2 uScale;varying vec2 vUv;
  void main(){vUv=uv;gl_Position=vec4(uAnchor+position.xy*uScale,0.0,1.0);}
`,W=`
  uniform float uStrength;varying vec2 vUv;
  ${S}
  void main(){vec2 q=(vUv-.5)*2.0;float r=dot(q,q);
    float wing=exp(-r*7.5)*0.10;
    float flare=exp(-abs(q.x)*75.0-abs(q.y)*5.0)+exp(-abs(q.y)*75.0-abs(q.x)*5.0);
    float a=(wing+flare*0.035)*uStrength*(1.0-smoothstep(.75,1.0,sqrt(r)));
    gl_FragColor=najmOutput(vec3(0.85,0.79,0.63)*a,a);}
`,tt=`
  attribute float aSide;varying float vSide;
  void main(){vSide=aSide;gl_Position=vec4(position.xy,0.0,1.0);}
`,et=`
  uniform float uStrength;varying float vSide;
  ${S}
  void main(){float edge=1.0-smoothstep(1.0-max(fwidth(vSide),0.001),1.0,abs(vSide));
    float a=0.42*uStrength*edge;gl_FragColor=najmOutput(vec3(0.89,0.72,0.38)*a,a);}
`;class it{group=new j;spec={journey:"egypt"};state={playing:!1,visible:!1,inSky:!1,reducedMotion:!0};elapsed=0;reference=null;parallax=[0,0];traceSource=new Float64Array;traceEnu=new Float64Array;tracePosition=new Float32Array(F*6*3);traceSide=new Float32Array(F*6);ground;particles;halo;trace;disposed=!1;constructor(t,r){this.group.name="Najm journey visual FX",this.group.visible=!1,t.add(this.group);const s=(e,a,l)=>new z({vertexShader:e,fragmentShader:a,uniforms:{...l,...r.uniforms},transparent:!0,depthTest:!1,depthWrite:!1,blending:G,blendSrc:X,blendDst:D});this.ground=new b(new M(2,2),s(B,$,{uViewport:{value:new f(1,1)},uCentre:{value:new f},uFocal:{value:1},uHorizon:{value:new N},uParallax:{value:new f},uLandscape:{value:1},uStrength:{value:0},uTime:{value:0}})),this.ground.renderOrder=12.5;const n=new E;n.setAttribute("position",new w(new Float32Array(A*3),3)),n.setAttribute("aSeed",new w(U(1),4)),this.particles=new L(n,s(Q,Z,{uTime:{value:0},uPx:{value:1},uParallax:{value:new f},uStrength:{value:0}})),this.particles.renderOrder=21,this.halo=new b(new M(2,2),s(K,W,{uAnchor:{value:new f},uScale:{value:new f},uStrength:{value:0}})),this.halo.renderOrder=21;const o=new E;o.setAttribute("position",new w(this.tracePosition,3).setUsage(_)),o.setAttribute("aSide",new w(this.traceSide,1).setUsage(_)),o.setDrawRange(0,0),this.trace=new b(o,s(tt,et,{uStrength:{value:0}})),this.trace.renderOrder=3.5;for(const e of[this.ground,this.particles,this.halo,this.trace])e.frustumCulled=!1,this.group.add(e)}configure(t){if(this.disposed)return;this.spec={...t,strength:m(t.strength??.75)},this.elapsed=0,this.reference=null,this.parallax=[0,0];const r=this.particles.geometry.getAttribute("aSeed");r.set(U(t.seed??1)),r.needsUpdate=!0,this.traceSource=Y(t.constellationId),this.traceEnu=new Float64Array(this.traceSource.length)}controls(t){this.disposed||(this.state={...t,traceProgress:m(t.traceProgress??0)})}update(t,r){const s=typeof document<"u"&&(document.hidden||document.visibilityState==="hidden"),n=!this.disposed&&r&&this.state.visible&&this.state.inSky&&!s&&!t.s.cameraOn;if(this.group.visible=n,!n)return;this.reference||(this.reference=Array.from(t.view.m)),this.state.reducedMotion?this.parallax=[0,0]:this.state.playing&&(this.elapsed+=m(t.dt,0,.05),this.parallax=H(t.view,this.reference));const o=this.spec.strength??.75,e=t.view,a=this.ground.material.uniforms;a.uViewport.value.set(e.width,e.height),a.uCentre.value.set(e.cx,e.cy),a.uFocal.value=e.f,a.uHorizon.value.set(e.m[6],e.m[7],-e.m[8]),a.uParallax.value.set(...this.parallax),a.uLandscape.value=this.spec.landscape==="dunes"?2:1,a.uStrength.value=o,a.uTime.value=this.state.reducedMotion?0:this.elapsed,this.ground.visible=!!this.spec.landscape&&this.spec.landscape!=="none";const l=this.particles.material.uniforms;l.uTime.value=this.state.reducedMotion?0:this.elapsed,l.uParallax.value.set(...this.parallax),l.uPx.value=t.pixelRatio,l.uStrength.value=o*(this.spec.journey==="quran"?.4:1),this.particles.geometry.setDrawRange(0,this.state.reducedMotion?12:A);const u=J(t.model,e,this.spec.starHip,t.s.magLimit,t.display);if(this.halo.visible=!!u,u){const i=this.halo.material.uniforms;i.uAnchor.value.set(u.x/e.width*2-1,1-u.y/e.height*2);const p=45;i.uScale.value.set(p/e.width*2,p/e.height*2),i.uStrength.value=o}this.updateTrace(t,o)}updateTrace(t,r){this.trace.geometry.setDrawRange(0,0),this.trace.visible=!1;const s=this.state.traceProgress??0;if(!s||!this.traceSource.length||!k(t.model))return;I(t.model.E,this.traceSource,this.traceEnu,!0);const n=this.traceEnu.length/6,o=n*s,e=t.view;let a=0;for(let l=0;l<Math.ceil(o);l++){const u=l*6,i=P(e,this.traceEnu[u],this.traceEnu[u+1],this.traceEnu[u+2]),p=P(e,this.traceEnu[u+3],this.traceEnu[u+4],this.traceEnu[u+5]);if(!i||!p||this.traceEnu[u+2]<=0||this.traceEnu[u+5]<=0)continue;const x=Math.min(1,o-l),c=i.x+(p.x-i.x)*x,d=i.y+(p.y-i.y)*x,y=Math.hypot(c-i.x,d-i.y);if(y<.05||y>Math.max(e.width,e.height)*.65||Math.max(i.x,c)<0||Math.min(i.x,c)>e.width||Math.max(i.y,d)<0||Math.min(i.y,d)>e.height)continue;const v=-(d-i.y)/y*.65,g=(c-i.x)/y*.65;a=this.traceVertex(a,i.x+v,i.y+g,1,e.width,e.height),a=this.traceVertex(a,c+v,d+g,1,e.width,e.height),a=this.traceVertex(a,i.x-v,i.y-g,-1,e.width,e.height),a=this.traceVertex(a,i.x-v,i.y-g,-1,e.width,e.height),a=this.traceVertex(a,c+v,d+g,1,e.width,e.height),a=this.traceVertex(a,c-v,d-g,-1,e.width,e.height)}this.trace.material.uniforms.uStrength.value=r,this.trace.geometry.getAttribute("position").needsUpdate=!0,this.trace.geometry.getAttribute("aSide").needsUpdate=!0,this.trace.geometry.setDrawRange(0,a/3),this.trace.visible=a>0}traceVertex(t,r,s,n,o,e){return this.traceSide[t/3]=n,this.tracePosition[t++]=r/o*2-1,this.tracePosition[t++]=1-s/e*2,this.tracePosition[t++]=0,t}hide(){this.group.visible=!1}dispose(){if(!this.disposed){this.disposed=!0,this.group.removeFromParent();for(const t of[this.ground,this.particles,this.halo,this.trace])t.geometry.dispose(),t.material.dispose();this.traceSource=new Float64Array,this.traceEnu=new Float64Array,this.reference=null}}}export{$ as JOURNEY_FX_GROUND_FS,W as JOURNEY_FX_HALO_FS,Z as JOURNEY_FX_PARTICLE_FS,et as JOURNEY_FX_TRACE_FS,it as JourneyFX};
