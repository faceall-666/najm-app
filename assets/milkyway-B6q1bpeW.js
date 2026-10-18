import{d as x,R as y}from"./layers-1onDMVgd.js";import{cq as w,cQ as S,cs as p,e5 as d,cm as b,cn as m,co as _,cL as E,cw as W,M as D,cM as A}from"./index-Be8EMxMg.js";const c=[.1,.16,.26],O=.3;function T(e){const t=Math.max(e,0);return 1/(Math.sin(t*Math.PI/180)+.50572*Math.pow(t+6.07995,-1.6364))}function P(e){const t=Math.max(0,T(e)-1),a=c.map(s=>Math.pow(10,-.4*s*t)),o=Math.max(a[0],a[1],a[2]),h=Math.pow(o,O);let n=a.map(s=>s/o*h);if(e<-.6){const s=Math.min(1,(-.6-e)/2.4),l=s*s*(3-2*s);n=n.map(u=>u+(1-u)*l)}return n}const M=.014,f=.2,I=1.6,g=.015,R=.012,Y=.5,k=.62,$=15,v=(e,t,a)=>{const o=Math.min(1,Math.max(0,(a-e)/(t-e)));return o*o*(3-2*o)};function C(e,t,a){if(e)return 1;const o=v(-6,-18,t);if(!a)return o;const h=Math.abs(a.phaseAngleDeg),n=Math.pow(10,-.4*(.026*h+4e-9*h**4)),s=$*n*v(-3,20,a.altDeg);return o/(1+s)}const G=`
  varying vec3 vDir;
  varying float vUp;
  void main() {
    vDir = position;
    vUp = normalize(mat3(modelMatrix) * position).z;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,i=e=>e.toFixed(6),X=`
  uniform sampler2D uLum;        // asinh-encoded luminance (R8, mipmapped)
  uniform sampler2D uChroma;     // colour at constant brightness
  uniform mat3 uGal;
  uniform float uStrength;       // the share of a dark sky's light that shows (before the floor)
  varying vec3 vDir;
  varying float vUp;
  const float PI = 3.141592653589793;
  const vec3 EXT_MAG = vec3(${i(c[0])}, ${i(c[1])}, ${i(c[2])});
  ${w}
  ${S}
  void main() {
    vec3 g = uGal * normalize(vDir);
    float l = atan(g.y, g.x);
    float b = asin(clamp(g.z, -1.0, 1.0));
    // longitude 0 in the middle, increasing to the left; north at the top of the image (flipY: v = 1)
    float u1 = 0.5 - l / (2.0 * PI);
    float u2 = fract(u1 + 0.5) - 0.5;                            // the same place, continuous across 180°
    float u = fwidth(u1) <= fwidth(u2) + 1e-6 ? u1 : u2;        // Tarini: no seam, no wrong mip level at the seam
    vec2 uv = vec2(u, 0.5 + b / PI);
    float Y = ${i(M)} * sinh(texture2D(uLum, uv).r * ${i(Math.asinh(f/M))});
    Y = max(Y * uStrength - ${i(g)}, 0.0);
    Y = Y * Y / (Y + ${i(R)});
    vec3 c = texture2D(uChroma, uv).rgb;
    c /= max(dot(c, vec3(0.2126, 0.7152, 0.0722)), 1e-3);
    c = mix(vec3(1.0), c, ${i(Y)});                      // half its photographic colour (luminance stays 1)
    // the atmosphere: per-channel extinction (relative to the zenith) and the haze near the horizon
    float h = max(degrees(asin(clamp(vUp, -1.0, 1.0))), 0.0);
    float X = 1.0 / (sin(radians(h)) + 0.50572 * pow(h + 6.07995, -1.6364));
    vec3 ext = pow(vec3(10.0), -0.4 * EXT_MAG * (X - 1.0)) * smoothstep(-0.02, 0.2, vUp);
    vec3 d = najmEmissiveToDisplay(c * Y * ${i(I)} * ext);
    float a = max(d.r, max(d.g, d.b));
    gl_FragColor = najmOutput(d, a);
  }
`,r=[-.0548755604,-.8734370902,-.4838350155,.4941094279,-.44482963,.7469822445,-.867666149,-.1980763734,.4559837762];class U{mesh;mat;lum;chroma;constructor(t,a){this.lum=p("tex/milkyway_l.webp",{srgb:!1,red:!0}),this.lum.wrapS=d,this.lum.anisotropy=8,this.chroma=p("tex/milkyway_c.webp",{srgb:!1,mipmaps:!1}),this.chroma.wrapS=d,this.mat=new b({vertexShader:G,fragmentShader:X,side:E,transparent:!0,depthTest:!0,depthWrite:!1,blending:_,blendSrc:m,blendDst:m,blendSrcAlpha:m,blendDstAlpha:m,uniforms:{uLum:{value:this.lum},uChroma:{value:this.chroma},uGal:{value:new W().set(r[0],r[1],r[2],r[3],r[4],r[5],r[6],r[7],r[8])},uStrength:{value:1},...a.uniforms}}),this.mesh=new D(new A(x,96,48),this.mat),this.mesh.renderOrder=y.milkyWay,this.mesh.frustumCulled=!1,t.add(this.mesh)}update(t){const a=t.model.bodyById?.get("moon");let o=null;if(a){const n=a.sunDir,s=a.enu,l=-(n[0]*s[0]+n[1]*s[1]+n[2]*s[2]);o={altDeg:a.alt,phaseAngleDeg:Math.acos(Math.min(1,Math.max(-1,l)))*180/Math.PI}}const h=C(t.browse,t.model.sunAltitude(),o)*Math.min(1,Math.max(0,t.display.milkyWay))*(t.browse?1:k);this.mesh.visible=t.s.milkyWay&&h*f>g,this.mat.uniforms.uStrength.value=h}dispose(){this.mesh.geometry.dispose(),this.mat.dispose(),this.lum.dispose(),this.chroma.dispose()}}export{c as E,U as M,O as a,$ as b,P as e,C as m};
