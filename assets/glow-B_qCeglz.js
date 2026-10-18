import{R as i}from"./layers-1onDMVgd.js";import{cm as o,bZ as c,cn as e,co as l,cq as n,M as u}from"./index-D1Ls8Xez.js";const h=`
  varying vec2 vQ;
  void main() {
    vQ = position.xy;
    // a sprite: the quad lies in the camera's image plane, at the object's position, scaled by its radius
    vec3 c = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
    float r = length((modelMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
    vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
    vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
    gl_Position = projectionMatrix * viewMatrix * vec4(c + (right * vQ.x + up * vQ.y) * r, 1.0);
  }
`,p=`
  uniform float uKind;      // 0 the Sun's glare, 1 a halo
  uniform float uDisc;      // the Sun's disc radius as a fraction of the quad's half-size
  uniform float uOpacity;
  uniform vec3 uTint;       // display-space colour of the light (the atmosphere's extinction near the horizon)
  varying vec2 vQ;
  ${n}
  void main() {
    float r = length(vQ);
    float fw = max(fwidth(r), 1e-5);
    if (r >= 1.0) discard;
    vec3 c;
    float p;
    if (uKind < 0.5) {
      float outer = 0.28 * exp(-(r - uDisc) / (0.6 * uDisc));
      p = mix(0.05, outer, smoothstep(uDisc - 0.5 * fw, uDisc + 0.5 * fw, r)) * (1.0 - smoothstep(0.8, 1.0, r));
      float t = clamp((r - uDisc) / (1.0 - uDisc), 0.0, 1.0);             // a little warmer further out
      c = vec3(1.0, (244.0 - 24.0 * t) / 255.0, (222.0 - 60.0 * t) / 255.0);
    } else {
      p = 0.55 * exp(-3.2 * r * r) * (1.0 - smoothstep(0.75, 1.0, r));
      c = vec3(1.0);
    }
    p *= uOpacity;
    if (p < 1e-4) discard;
    gl_FragColor = najmOutput(c * uTint * p, p * p);
  }
`;class d{mesh;mat;constructor(t,r,a,s=.29){this.mat=new o({vertexShader:h,fragmentShader:p,transparent:!0,depthTest:!1,depthWrite:!1,blending:l,blendSrc:e,blendDst:e,blendSrcAlpha:e,blendDstAlpha:e,uniforms:{uKind:{value:a==="glare"?0:1},uDisc:{value:s},uOpacity:{value:1},uTint:{value:new c(1,1,1)},...r.uniforms}}),this.mesh=new u(t,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=a==="glare"?i.glare:i.halos}set opacity(t){this.mat.uniforms.uOpacity.value=t}dispose(){this.mat.dispose()}}export{d as G,p as a};
