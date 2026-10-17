import{dn as Hr,dp as At,f as Vr,cs as lt,cq as Ye,dq as lr,cG as Kt,bY as Oe,dr as kr,ds as Nn,dt as ti,du as Ht,dv as nt,dw as Xt,dx as pn,dy as yt,co as Mt,cK as _t,dz as $t,dA as hn,dB as zr,dC as Wr,cE as ut,d as on,dD as Xr,dE as Sn,dF as xt,dG as fn,dH as Yn,dI as Zt,dJ as Qt,dK as cr,dL as qr,dM as Ft,dN as un,dO as Yr,dP as Kr,dQ as Wt,dR as $r,dS as fr,dT as Zr,dU as Qr,dV as Jr,dW as jr,cJ as On,dX as ea,dY as ta,dZ as na,d_ as ia,d$ as ra,e0 as aa,cm as ur,e1 as oa,e2 as sa,e3 as la,e4 as ca,e5 as En,e6 as Bt,e7 as tn,e8 as fa,e9 as Yt,ea as ua,eb as da,ec as pa,ed as ha,ee as dr,ef as ma,eg as _a,eh as va,ei as ga,cv as Fe,ej as Sa,ek as Ea,el as Ma,cl as Rt,cj as pr,cN as sn,M as Tt,em as hr,en as It,eo as Et,ep as dn,eq as mr,er as _r,es as vr,e as gr,et as xa,eu as Ta,ev as Aa,ew as Ra,ex as Sr,ey as wt,ez as Ca,eA as ba,eB as Pa,eC as Er,eD as La,eE as Mr,eF as xr,eG as Mn,eH as xn,eI as Tn,eJ as An,eK as qe,eL as ni,eM as ii,eN as ri,eO as ai,eP as oi,eQ as si,eR as li,eS as ci,eT as fi,eU as ui,eV as di,eW as pi,eX as hi,eY as mi,eZ as _i,e_ as vi,e$ as gi,f0 as Si,f1 as Ei,f2 as Mi,f3 as xi,f4 as Ti,f5 as Ai,f6 as Ri,f7 as Ci,f8 as bi,f9 as Pi,fa as Li,fb as Fn,fc as Bn,fd as Gn,fe as Hn,ff as Vn,fg as kn,fh as zn,fi as Ua,fj as Ui,fk as Da,fl as ln,cn as Tr,fm as Di,fn as wi,fo as Ii,fp as Wn,fq as Xn,fr as wa,fs as Ar,cD as Ia,ft as mn,fu as ya,fv as Na,fw as Rr,fx as Cr,fy as yi,fz as br,fA as Ni,fB as Pr,fC as Jt,fD as Vt,fE as Oa,fF as Fa,fG as Ba,fH as Ga,fI as Ha,fJ as Oi,fK as ft,fL as Va,fM as ka,fN as za,fO as Wa,fP as Xa,fQ as qa,fR as Ya,fS as Ka,fT as $a,fU as Za,fV as Qa,fW as Ja,fX as ja,fY as eo,fZ as to,f_ as no,f$ as io,g0 as ro,g1 as ao,g2 as Rn,cM as oo,N as so,g3 as Cn,cp as lo,g4 as co,g5 as fo,cr as uo,ct as po}from"./index-Dc5_0ZaZ.js";import{v as ho,e as mo,a as _o}from"./phase-BqDDXW_6.js";function Lr(){let e=null,n=!1,t=null,i=null;function s(o,h){t(o,h),i=e.requestAnimationFrame(s)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(s),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(o){t=o},setContext:function(o){e=o}}}function vo(e){const n=new WeakMap;function t(f,A){const g=f.array,L=f.usage,S=g.byteLength,E=e.createBuffer();e.bindBuffer(A,E),e.bufferData(A,g,L),f.onUploadCallback();let M;if(g instanceof Float32Array)M=e.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)M=e.HALF_FLOAT;else if(g instanceof Uint16Array)f.isFloat16BufferAttribute?M=e.HALF_FLOAT:M=e.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=e.SHORT;else if(g instanceof Uint32Array)M=e.UNSIGNED_INT;else if(g instanceof Int32Array)M=e.INT;else if(g instanceof Int8Array)M=e.BYTE;else if(g instanceof Uint8Array)M=e.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:E,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:S}}function i(f,A,g){const L=A.array,S=A.updateRanges;if(e.bindBuffer(g,f),S.length===0)e.bufferSubData(g,0,L);else{S.sort((M,O)=>M.start-O.start);let E=0;for(let M=1;M<S.length;M++){const O=S[E],U=S[M];U.start<=O.start+O.count+1?O.count=Math.max(O.count,U.start+U.count-O.start):(++E,S[E]=U)}S.length=E+1;for(let M=0,O=S.length;M<O;M++){const U=S[M];e.bufferSubData(g,U.start*L.BYTES_PER_ELEMENT,L,U.start,U.count)}A.clearUpdateRanges()}A.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const A=n.get(f);A&&(e.deleteBuffer(A.buffer),n.delete(f))}function h(f,A){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const L=n.get(f);(!L||L.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const g=n.get(f);if(g===void 0)n.set(f,t(f,A));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(g.buffer,f,A),g.version=f.version}}return{get:s,remove:o,update:h}}var go=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,So=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Eo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mo=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xo=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,To=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ao=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ro=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Co=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bo=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Po=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lo=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uo=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Do=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wo=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Io=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,No=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Oo=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fo=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Go=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ho=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vo=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ko=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zo=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wo=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xo=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qo=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yo=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ko="gl_FragColor = linearToOutputTexel( gl_FragColor );",$o=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zo=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Qo=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jo=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jo=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,es=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ts=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ns=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,is=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rs=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,as=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,os=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ss=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ls=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cs=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fs=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,us=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ds=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ps=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hs=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ms=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_s=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vs=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gs=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ss=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Es=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ms=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xs=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ts=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,As=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rs=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cs=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bs=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ps=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ls=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Us=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ds=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ws=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Is=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ys=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ns=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Os=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fs=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bs=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gs=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hs=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vs=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ks=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zs=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ws=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xs=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qs=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ys=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ks=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$s=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zs=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qs=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Js=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,js=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,el=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tl=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nl=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,il=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rl=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,al=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ol=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ll=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fl=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ul=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dl=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ml=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_l=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gl=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,El=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ml=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Al=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rl=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cl=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ll=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ul=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wl=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Il=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yl=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nl=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ol=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fl=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bl=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gl=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hl=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vl=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kl=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zl=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wl=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xl=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ql=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yl=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kl=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$l=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zl=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:go,alphahash_pars_fragment:So,alphamap_fragment:Eo,alphamap_pars_fragment:Mo,alphatest_fragment:xo,alphatest_pars_fragment:To,aomap_fragment:Ao,aomap_pars_fragment:Ro,batching_pars_vertex:Co,batching_vertex:bo,begin_vertex:Po,beginnormal_vertex:Lo,bsdfs:Uo,iridescence_fragment:Do,bumpmap_pars_fragment:wo,clipping_planes_fragment:Io,clipping_planes_pars_fragment:yo,clipping_planes_pars_vertex:No,clipping_planes_vertex:Oo,color_fragment:Fo,color_pars_fragment:Bo,color_pars_vertex:Go,color_vertex:Ho,common:Vo,cube_uv_reflection_fragment:ko,defaultnormal_vertex:zo,displacementmap_pars_vertex:Wo,displacementmap_vertex:Xo,emissivemap_fragment:qo,emissivemap_pars_fragment:Yo,colorspace_fragment:Ko,colorspace_pars_fragment:$o,envmap_fragment:Zo,envmap_common_pars_fragment:Qo,envmap_pars_fragment:Jo,envmap_pars_vertex:jo,envmap_physical_pars_fragment:fs,envmap_vertex:es,fog_vertex:ts,fog_pars_vertex:ns,fog_fragment:is,fog_pars_fragment:rs,gradientmap_pars_fragment:as,lightmap_pars_fragment:os,lights_lambert_fragment:ss,lights_lambert_pars_fragment:ls,lights_pars_begin:cs,lights_toon_fragment:us,lights_toon_pars_fragment:ds,lights_phong_fragment:ps,lights_phong_pars_fragment:hs,lights_physical_fragment:ms,lights_physical_pars_fragment:_s,lights_fragment_begin:vs,lights_fragment_maps:gs,lights_fragment_end:Ss,logdepthbuf_fragment:Es,logdepthbuf_pars_fragment:Ms,logdepthbuf_pars_vertex:xs,logdepthbuf_vertex:Ts,map_fragment:As,map_pars_fragment:Rs,map_particle_fragment:Cs,map_particle_pars_fragment:bs,metalnessmap_fragment:Ps,metalnessmap_pars_fragment:Ls,morphinstance_vertex:Us,morphcolor_vertex:Ds,morphnormal_vertex:ws,morphtarget_pars_vertex:Is,morphtarget_vertex:ys,normal_fragment_begin:Ns,normal_fragment_maps:Os,normal_pars_fragment:Fs,normal_pars_vertex:Bs,normal_vertex:Gs,normalmap_pars_fragment:Hs,clearcoat_normal_fragment_begin:Vs,clearcoat_normal_fragment_maps:ks,clearcoat_pars_fragment:zs,iridescence_pars_fragment:Ws,opaque_fragment:Xs,packing:qs,premultiplied_alpha_fragment:Ys,project_vertex:Ks,dithering_fragment:$s,dithering_pars_fragment:Zs,roughnessmap_fragment:Qs,roughnessmap_pars_fragment:Js,shadowmap_pars_fragment:js,shadowmap_pars_vertex:el,shadowmap_vertex:tl,shadowmask_pars_fragment:nl,skinbase_vertex:il,skinning_pars_vertex:rl,skinning_vertex:al,skinnormal_vertex:ol,specularmap_fragment:sl,specularmap_pars_fragment:ll,tonemapping_fragment:cl,tonemapping_pars_fragment:fl,transmission_fragment:ul,transmission_pars_fragment:dl,uv_pars_fragment:pl,uv_pars_vertex:hl,uv_vertex:ml,worldpos_vertex:_l,background_vert:vl,background_frag:gl,backgroundCube_vert:Sl,backgroundCube_frag:El,cube_vert:Ml,cube_frag:xl,depth_vert:Tl,depth_frag:Al,distanceRGBA_vert:Rl,distanceRGBA_frag:Cl,equirect_vert:bl,equirect_frag:Pl,linedashed_vert:Ll,linedashed_frag:Ul,meshbasic_vert:Dl,meshbasic_frag:wl,meshlambert_vert:Il,meshlambert_frag:yl,meshmatcap_vert:Nl,meshmatcap_frag:Ol,meshnormal_vert:Fl,meshnormal_frag:Bl,meshphong_vert:Gl,meshphong_frag:Hl,meshphysical_vert:Vl,meshphysical_frag:kl,meshtoon_vert:zl,meshtoon_frag:Wl,points_vert:Xl,points_frag:ql,shadow_vert:Yl,shadow_frag:Kl,sprite_vert:$l,sprite_frag:Zl},ie={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},gt={basic:{uniforms:ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:ft([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:ft([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:ft([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:ft([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:ft([ie.points,ie.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:ft([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:ft([ie.common,ie.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:ft([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:ft([ie.sprite,ie.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:ft([ie.common,ie.displacementmap,{referencePosition:{value:new Oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:ft([ie.lights,ie.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};gt.physical={uniforms:ft([gt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const nn={r:0,b:0,g:0},Pt=new br,Ql=new Kt;function Jl(e,n,t,i,s,o,h){const f=new Ye(0);let A=o===!0?0:1,g,L,S=null,E=0,M=null;function O(R){let _=R.isScene===!0?R.background:null;return _&&_.isTexture&&(_=(R.backgroundBlurriness>0?t:n).get(_)),_}function U(R){let _=!1;const N=O(R);N===null?r(f,A):N&&N.isColor&&(r(N,1),_=!0);const b=e.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,h):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,h),(e.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function c(R,_){const N=O(_);N&&(N.isCubeTexture||N.mapping===mn)?(L===void 0&&(L=new Tt(new Cr(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:yi(gt.backgroundCube.uniforms),vertexShader:gt.backgroundCube.vertexShader,fragmentShader:gt.backgroundCube.fragmentShader,side:_t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),L.geometry.deleteAttribute("normal"),L.geometry.deleteAttribute("uv"),L.onBeforeRender=function(b,y,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(L.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(L)),Pt.copy(_.backgroundRotation),Pt.x*=-1,Pt.y*=-1,Pt.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Pt.y*=-1,Pt.z*=-1),L.material.uniforms.envMap.value=N,L.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,L.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,L.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,L.material.uniforms.backgroundRotation.value.setFromMatrix4(Ql.makeRotationFromEuler(Pt)),L.material.toneMapped=nt.getTransfer(N.colorSpace)!==qe,(S!==N||E!==N.version||M!==e.toneMapping)&&(L.material.needsUpdate=!0,S=N,E=N.version,M=e.toneMapping),L.layers.enableAll(),R.unshift(L,L.geometry,L.material,0,0,null)):N&&N.isTexture&&(g===void 0&&(g=new Tt(new gr(2,2),new Rt({name:"BackgroundMaterial",uniforms:yi(gt.background.uniforms),vertexShader:gt.background.vertexShader,fragmentShader:gt.background.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=N,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=nt.getTransfer(N.colorSpace)!==qe,N.matrixAutoUpdate===!0&&N.updateMatrix(),g.material.uniforms.uvTransform.value.copy(N.matrix),(S!==N||E!==N.version||M!==e.toneMapping)&&(g.material.needsUpdate=!0,S=N,E=N.version,M=e.toneMapping),g.layers.enableAll(),R.unshift(g,g.geometry,g.material,0,0,null))}function r(R,_){R.getRGB(nn,Rr(e)),i.buffers.color.setClear(nn.r,nn.g,nn.b,_,h)}function D(){L!==void 0&&(L.geometry.dispose(),L.material.dispose(),L=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,_=1){f.set(R),A=_,r(f,A)},getClearAlpha:function(){return A},setClearAlpha:function(R){A=R,r(f,A)},render:U,addToRenderList:c,dispose:D}}function jl(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=E(null);let o=s,h=!1;function f(u,C,B,X,q){let $=!1;const W=S(X,B,C);o!==W&&(o=W,g(o.object)),$=M(u,X,B,q),$&&O(u,X,B,q),q!==null&&n.update(q,e.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,_(u,C,B,X),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(q).buffer))}function A(){return e.createVertexArray()}function g(u){return e.bindVertexArray(u)}function L(u){return e.deleteVertexArray(u)}function S(u,C,B){const X=B.wireframe===!0;let q=i[u.id];q===void 0&&(q={},i[u.id]=q);let $=q[C.id];$===void 0&&($={},q[C.id]=$);let W=$[X];return W===void 0&&(W=E(A()),$[X]=W),W}function E(u){const C=[],B=[],X=[];for(let q=0;q<t;q++)C[q]=0,B[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:X,object:u,attributes:{},index:null}}function M(u,C,B,X){const q=o.attributes,$=C.attributes;let W=0;const ne=B.getAttributes();for(const H in ne)if(ne[H].location>=0){const xe=q[H];let De=$[H];if(De===void 0&&(H==="instanceMatrix"&&u.instanceMatrix&&(De=u.instanceMatrix),H==="instanceColor"&&u.instanceColor&&(De=u.instanceColor)),xe===void 0||xe.attribute!==De||De&&xe.data!==De.data)return!0;W++}return o.attributesNum!==W||o.index!==X}function O(u,C,B,X){const q={},$=C.attributes;let W=0;const ne=B.getAttributes();for(const H in ne)if(ne[H].location>=0){let xe=$[H];xe===void 0&&(H==="instanceMatrix"&&u.instanceMatrix&&(xe=u.instanceMatrix),H==="instanceColor"&&u.instanceColor&&(xe=u.instanceColor));const De={};De.attribute=xe,xe&&xe.data&&(De.data=xe.data),q[H]=De,W++}o.attributes=q,o.attributesNum=W,o.index=X}function U(){const u=o.newAttributes;for(let C=0,B=u.length;C<B;C++)u[C]=0}function c(u){r(u,0)}function r(u,C){const B=o.newAttributes,X=o.enabledAttributes,q=o.attributeDivisors;B[u]=1,X[u]===0&&(e.enableVertexAttribArray(u),X[u]=1),q[u]!==C&&(e.vertexAttribDivisor(u,C),q[u]=C)}function D(){const u=o.newAttributes,C=o.enabledAttributes;for(let B=0,X=C.length;B<X;B++)C[B]!==u[B]&&(e.disableVertexAttribArray(B),C[B]=0)}function R(u,C,B,X,q,$,W){W===!0?e.vertexAttribIPointer(u,C,B,q,$):e.vertexAttribPointer(u,C,B,X,q,$)}function _(u,C,B,X){U();const q=X.attributes,$=B.getAttributes(),W=C.defaultAttributeValues;for(const ne in $){const H=$[ne];if(H.location>=0){let ve=q[ne];if(ve===void 0&&(ne==="instanceMatrix"&&u.instanceMatrix&&(ve=u.instanceMatrix),ne==="instanceColor"&&u.instanceColor&&(ve=u.instanceColor)),ve!==void 0){const xe=ve.normalized,De=ve.itemSize,Ge=n.get(ve);if(Ge===void 0)continue;const et=Ge.buffer,Je=Ge.type,ke=Ge.bytesPerElement,V=Je===e.INT||Je===e.UNSIGNED_INT||ve.gpuType===Sr;if(ve.isInterleavedBufferAttribute){const K=ve.data,ce=K.stride,be=ve.offset;if(K.isInstancedInterleavedBuffer){for(let Se=0;Se<H.locationSize;Se++)r(H.location+Se,K.meshPerAttribute);u.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Se=0;Se<H.locationSize;Se++)c(H.location+Se);e.bindBuffer(e.ARRAY_BUFFER,et);for(let Se=0;Se<H.locationSize;Se++)R(H.location+Se,De/H.locationSize,Je,xe,ce*ke,(be+De/H.locationSize*Se)*ke,V)}else{if(ve.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)r(H.location+K,ve.meshPerAttribute);u.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let K=0;K<H.locationSize;K++)c(H.location+K);e.bindBuffer(e.ARRAY_BUFFER,et);for(let K=0;K<H.locationSize;K++)R(H.location+K,De/H.locationSize,Je,xe,De*ke,De/H.locationSize*K*ke,V)}}else if(W!==void 0){const xe=W[ne];if(xe!==void 0)switch(xe.length){case 2:e.vertexAttrib2fv(H.location,xe);break;case 3:e.vertexAttrib3fv(H.location,xe);break;case 4:e.vertexAttrib4fv(H.location,xe);break;default:e.vertexAttrib1fv(H.location,xe)}}}}D()}function N(){z();for(const u in i){const C=i[u];for(const B in C){const X=C[B];for(const q in X)L(X[q].object),delete X[q];delete C[B]}delete i[u]}}function b(u){if(i[u.id]===void 0)return;const C=i[u.id];for(const B in C){const X=C[B];for(const q in X)L(X[q].object),delete X[q];delete C[B]}delete i[u.id]}function y(u){for(const C in i){const B=i[C];if(B[u.id]===void 0)continue;const X=B[u.id];for(const q in X)L(X[q].object),delete X[q];delete B[u.id]}}function z(){p(),h=!0,o!==s&&(o=s,g(o.object))}function p(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:z,resetDefaultState:p,dispose:N,releaseStatesOfGeometry:b,releaseStatesOfProgram:y,initAttributes:U,enableAttribute:c,disableUnusedAttributes:D}}function ec(e,n,t){let i;function s(g){i=g}function o(g,L){e.drawArrays(i,g,L),t.update(L,i,1)}function h(g,L,S){S!==0&&(e.drawArraysInstanced(i,g,L,S),t.update(L,i,S))}function f(g,L,S){if(S===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,g,0,L,0,S);let M=0;for(let O=0;O<S;O++)M+=L[O];t.update(M,i,1)}function A(g,L,S,E){if(S===0)return;const M=n.get("WEBGL_multi_draw");if(M===null)for(let O=0;O<g.length;O++)h(g[O],L[O],E[O]);else{M.multiDrawArraysInstancedWEBGL(i,g,0,L,0,E,0,S);let O=0;for(let U=0;U<S;U++)O+=L[U]*E[U];t.update(O,i,1)}}this.setMode=s,this.render=o,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=A}function tc(e,n,t,i){let s;function o(){if(s!==void 0)return s;if(n.has("EXT_texture_filter_anisotropic")===!0){const y=n.get("EXT_texture_filter_anisotropic");s=e.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function h(y){return!(y!==xt&&i.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(y){const z=y===pn&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(y!==yt&&i.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==wt&&!z)}function A(y){if(y==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=t.precision!==void 0?t.precision:"highp";const L=A(g);L!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",L,"instead."),g=L);const S=t.logarithmicDepthBuffer===!0,E=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),M=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),O=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),U=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),r=e.getParameter(e.MAX_VERTEX_ATTRIBS),D=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),R=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),N=O>0,b=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:A,textureFormatReadable:h,textureTypeReadable:f,precision:g,logarithmicDepthBuffer:S,reversedDepthBuffer:E,maxTextures:M,maxVertexTextures:O,maxTextureSize:U,maxCubemapSize:c,maxAttributes:r,maxVertexUniforms:D,maxVaryings:R,maxFragmentUniforms:_,vertexTextures:N,maxSamples:b}}function nc(e){const n=this;let t=null,i=0,s=!1,o=!1;const h=new ga,f=new Fe,A={value:null,needsUpdate:!1};this.uniform=A,this.numPlanes=0,this.numIntersection=0,this.init=function(S,E){const M=S.length!==0||E||i!==0||s;return s=E,i=S.length,M},this.beginShadows=function(){o=!0,L(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(S,E){t=L(S,E,0)},this.setState=function(S,E,M){const O=S.clippingPlanes,U=S.clipIntersection,c=S.clipShadows,r=e.get(S);if(!s||O===null||O.length===0||o&&!c)o?L(null):g();else{const D=o?0:i,R=D*4;let _=r.clippingState||null;A.value=_,_=L(O,E,R,M);for(let N=0;N!==R;++N)_[N]=t[N];r.clippingState=_,this.numIntersection=U?this.numPlanes:0,this.numPlanes+=D}};function g(){A.value!==t&&(A.value=t,A.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function L(S,E,M,O){const U=S!==null?S.length:0;let c=null;if(U!==0){if(c=A.value,O!==!0||c===null){const r=M+U*4,D=E.matrixWorldInverse;f.getNormalMatrix(D),(c===null||c.length<r)&&(c=new Float32Array(r));for(let R=0,_=M;R!==U;++R,_+=4)h.copy(S[R]).applyMatrix4(D,f),h.normal.toArray(c,_),c[_+3]=h.constant}A.value=c,A.needsUpdate=!0}return n.numPlanes=U,n.numIntersection=0,c}}function ic(e){let n=new WeakMap;function t(h,f){return f===Wn?h.mapping=Jt:f===Xn&&(h.mapping=Vt),h}function i(h){if(h&&h.isTexture){const f=h.mapping;if(f===Wn||f===Xn)if(n.has(h)){const A=n.get(h).texture;return t(A,h.mapping)}else{const A=h.image;if(A&&A.height>0){const g=new wa(A.height);return g.fromEquirectangularTexture(e,h),n.set(h,g),h.addEventListener("dispose",s),t(g.texture,h.mapping)}else return null}}return h}function s(h){const f=h.target;f.removeEventListener("dispose",s);const A=n.get(f);A!==void 0&&(n.delete(f),A.dispose())}function o(){n=new WeakMap}return{get:i,dispose:o}}const Gt=4,Fi=[.125,.215,.35,.446,.526,.582],Dt=20,bn=new Oa,Bi=new Ye;let Pn=null,Ln=0,Un=0,Dn=!1;const Ut=(1+Math.sqrt(5))/2,Ot=1/Ut,Gi=[new Oe(-Ut,Ot,0),new Oe(Ut,Ot,0),new Oe(-Ot,0,Ut),new Oe(Ot,0,Ut),new Oe(0,Ut,-Ot),new Oe(0,Ut,Ot),new Oe(-1,1,-1),new Oe(1,1,-1),new Oe(-1,1,1),new Oe(1,1,1)],rc=new Oe;class Hi{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,s=100,o={}){const{size:h=256,position:f=rc}=o;Pn=this._renderer.getRenderTarget(),Ln=this._renderer.getActiveCubeFace(),Un=this._renderer.getActiveMipmapLevel(),Dn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const A=this._allocateTargets();return A.depthBuffer=!0,this._sceneToCubeUV(n,i,s,A,f),t>0&&this._blur(A,0,0,t),this._applyPMREM(A),this._cleanup(A),A}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zi(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ki(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Pn,Ln,Un),this._renderer.xr.enabled=Dn,n.scissorTest=!1,rn(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===Jt||n.mapping===Vt?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Pn=this._renderer.getRenderTarget(),Ln=this._renderer.getActiveCubeFace(),Un=this._renderer.getActiveMipmapLevel(),Dn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:pn,format:xt,colorSpace:hn,depthBuffer:!1},s=Vi(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vi(n,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ac(o)),this._blurMaterial=oc(o,n,t)}return s}_compileMaterial(n){const t=new Tt(this._lodPlanes[0],n);this._renderer.compile(t,bn)}_sceneToCubeUV(n,t,i,s,o){const A=new on(90,1,t,i),g=[1,-1,1,1,1,1],L=[1,1,1,-1,-1,-1],S=this._renderer,E=S.autoClear,M=S.toneMapping;S.getClearColor(Bi),S.toneMapping=At,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(s),S.clearDepth(),S.setRenderTarget(null));const U=new Fa({name:"PMREM.Background",side:_t,depthWrite:!1,depthTest:!1}),c=new Tt(new Cr,U);let r=!1;const D=n.background;D?D.isColor&&(U.color.copy(D),n.background=null,r=!0):(U.color.copy(Bi),r=!0);for(let R=0;R<6;R++){const _=R%3;_===0?(A.up.set(0,g[R],0),A.position.set(o.x,o.y,o.z),A.lookAt(o.x+L[R],o.y,o.z)):_===1?(A.up.set(0,0,g[R]),A.position.set(o.x,o.y,o.z),A.lookAt(o.x,o.y+L[R],o.z)):(A.up.set(0,g[R],0),A.position.set(o.x,o.y,o.z),A.lookAt(o.x,o.y,o.z+L[R]));const N=this._cubeSize;rn(s,_*N,R>2?N:0,N,N),S.setRenderTarget(s),r&&S.render(c,A),S.render(n,A)}c.geometry.dispose(),c.material.dispose(),S.toneMapping=M,S.autoClear=E,n.background=D}_textureToCubeUV(n,t){const i=this._renderer,s=n.mapping===Jt||n.mapping===Vt;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zi()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ki());const o=s?this._cubemapMaterial:this._equirectMaterial,h=new Tt(this._lodPlanes[0],o),f=o.uniforms;f.envMap.value=n;const A=this._cubeSize;rn(t,0,0,3*A,2*A),i.setRenderTarget(t),i.render(h,bn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const h=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),f=Gi[(s-o-1)%Gi.length];this._blur(n,o-1,o,h,f)}t.autoClear=i}_blur(n,t,i,s,o){const h=this._pingPongRenderTarget;this._halfBlur(n,h,t,i,s,"latitudinal",o),this._halfBlur(h,n,i,i,s,"longitudinal",o)}_halfBlur(n,t,i,s,o,h,f){const A=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const L=3,S=new Tt(this._lodPlanes[s],g),E=g.uniforms,M=this._sizeLods[i]-1,O=isFinite(o)?Math.PI/(2*M):2*Math.PI/(2*Dt-1),U=o/O,c=isFinite(o)?1+Math.floor(L*U):Dt;c>Dt&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${Dt}`);const r=[];let D=0;for(let y=0;y<Dt;++y){const z=y/U,p=Math.exp(-z*z/2);r.push(p),y===0?D+=p:y<c&&(D+=2*p)}for(let y=0;y<r.length;y++)r[y]=r[y]/D;E.envMap.value=n.texture,E.samples.value=c,E.weights.value=r,E.latitudinal.value=h==="latitudinal",f&&(E.poleAxis.value=f);const{_lodMax:R}=this;E.dTheta.value=O,E.mipInt.value=R-i;const _=this._sizeLods[s],N=3*_*(s>R-Gt?s-R+Gt:0),b=4*(this._cubeSize-_);rn(t,N,b,3*_,2*_),A.setRenderTarget(t),A.render(S,bn)}}function ac(e){const n=[],t=[],i=[];let s=e;const o=e-Gt+1+Fi.length;for(let h=0;h<o;h++){const f=Math.pow(2,s);t.push(f);let A=1/f;h>e-Gt?A=Fi[h-e+Gt-1]:h===0&&(A=0),i.push(A);const g=1/(f-2),L=-g,S=1+g,E=[L,L,S,L,S,S,L,L,S,S,L,S],M=6,O=6,U=3,c=2,r=1,D=new Float32Array(U*O*M),R=new Float32Array(c*O*M),_=new Float32Array(r*O*M);for(let b=0;b<M;b++){const y=b%3*2/3-1,z=b>2?0:-1,p=[y,z,0,y+2/3,z,0,y+2/3,z+1,0,y,z,0,y+2/3,z+1,0,y,z+1,0];D.set(p,U*O*b),R.set(E,c*O*b);const u=[b,b,b,b,b,b];_.set(u,r*O*b)}const N=new pr;N.setAttribute("position",new sn(D,U)),N.setAttribute("uv",new sn(R,c)),N.setAttribute("faceIndex",new sn(_,r)),n.push(N),s>Gt&&s--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function Vi(e,n,t){const i=new Ht(e,n,t);return i.texture.mapping=mn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rn(e,n,t,i,s){e.viewport.set(n,t,i,s),e.scissor.set(n,t,i,s)}function oc(e,n,t){const i=new Float32Array(Dt),s=new Oe(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:Dt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:It,depthTest:!1,depthWrite:!1})}function ki(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:It,depthTest:!1,depthWrite:!1})}function zi(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:It,depthTest:!1,depthWrite:!1})}function Kn(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sc(e){let n=new WeakMap,t=null;function i(f){if(f&&f.isTexture){const A=f.mapping,g=A===Wn||A===Xn,L=A===Jt||A===Vt;if(g||L){let S=n.get(f);const E=S!==void 0?S.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==E)return t===null&&(t=new Hi(e)),S=g?t.fromEquirectangular(f,S):t.fromCubemap(f,S),S.texture.pmremVersion=f.pmremVersion,n.set(f,S),S.texture;if(S!==void 0)return S.texture;{const M=f.image;return g&&M&&M.height>0||L&&M&&s(M)?(t===null&&(t=new Hi(e)),S=g?t.fromEquirectangular(f):t.fromCubemap(f),S.texture.pmremVersion=f.pmremVersion,n.set(f,S),f.addEventListener("dispose",o),S.texture):null}}}return f}function s(f){let A=0;const g=6;for(let L=0;L<g;L++)f[L]!==void 0&&A++;return A===g}function o(f){const A=f.target;A.removeEventListener("dispose",o);const g=n.get(A);g!==void 0&&(n.delete(A),g.dispose())}function h(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:h}}function lc(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return n[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Nn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function cc(e,n,t,i){const s={},o=new WeakMap;function h(S){const E=S.target;E.index!==null&&n.remove(E.index);for(const O in E.attributes)n.remove(E.attributes[O]);E.removeEventListener("dispose",h),delete s[E.id];const M=o.get(E);M&&(n.remove(M),o.delete(E)),i.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function f(S,E){return s[E.id]===!0||(E.addEventListener("dispose",h),s[E.id]=!0,t.memory.geometries++),E}function A(S){const E=S.attributes;for(const M in E)n.update(E[M],e.ARRAY_BUFFER)}function g(S){const E=[],M=S.index,O=S.attributes.position;let U=0;if(M!==null){const D=M.array;U=M.version;for(let R=0,_=D.length;R<_;R+=3){const N=D[R+0],b=D[R+1],y=D[R+2];E.push(N,b,b,y,y,N)}}else if(O!==void 0){const D=O.array;U=O.version;for(let R=0,_=D.length/3-1;R<_;R+=3){const N=R+0,b=R+1,y=R+2;E.push(N,b,b,y,y,N)}}else return;const c=new(Ha(E)?Ba:Ga)(E,1);c.version=U;const r=o.get(S);r&&n.remove(r),o.set(S,c)}function L(S){const E=o.get(S);if(E){const M=S.index;M!==null&&E.version<M.version&&g(S)}else g(S);return o.get(S)}return{get:f,update:A,getWireframeAttribute:L}}function fc(e,n,t){let i;function s(E){i=E}let o,h;function f(E){o=E.type,h=E.bytesPerElement}function A(E,M){e.drawElements(i,M,o,E*h),t.update(M,i,1)}function g(E,M,O){O!==0&&(e.drawElementsInstanced(i,M,o,E*h,O),t.update(M,i,O))}function L(E,M,O){if(O===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,M,0,o,E,0,O);let c=0;for(let r=0;r<O;r++)c+=M[r];t.update(c,i,1)}function S(E,M,O,U){if(O===0)return;const c=n.get("WEBGL_multi_draw");if(c===null)for(let r=0;r<E.length;r++)g(E[r]/h,M[r],U[r]);else{c.multiDrawElementsInstancedWEBGL(i,M,0,o,E,0,U,0,O);let r=0;for(let D=0;D<O;D++)r+=M[D]*U[D];t.update(r,i,1)}}this.setMode=s,this.setIndex=f,this.render=A,this.renderInstances=g,this.renderMultiDraw=L,this.renderMultiDrawInstances=S}function uc(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,h,f){switch(t.calls++,h){case e.TRIANGLES:t.triangles+=f*(o/3);break;case e.LINES:t.lines+=f*(o/2);break;case e.LINE_STRIP:t.lines+=f*(o-1);break;case e.LINE_LOOP:t.lines+=f*o;break;case e.POINTS:t.points+=f*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:s,update:i}}function dc(e,n,t){const i=new WeakMap,s=new lt;function o(h,f,A){const g=h.morphTargetInfluences,L=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=L!==void 0?L.length:0;let E=i.get(f);if(E===void 0||E.count!==S){let p=function(){y.dispose(),i.delete(f),f.removeEventListener("dispose",p)};E!==void 0&&E.texture.dispose();const M=f.morphAttributes.position!==void 0,O=f.morphAttributes.normal!==void 0,U=f.morphAttributes.color!==void 0,c=f.morphAttributes.position||[],r=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let R=0;M===!0&&(R=1),O===!0&&(R=2),U===!0&&(R=3);let _=f.attributes.position.count*R,N=1;_>n.maxTextureSize&&(N=Math.ceil(_/n.maxTextureSize),_=n.maxTextureSize);const b=new Float32Array(_*N*4*S),y=new Ar(b,_,N,S);y.type=wt,y.needsUpdate=!0;const z=R*4;for(let u=0;u<S;u++){const C=c[u],B=r[u],X=D[u],q=_*N*4*u;for(let $=0;$<C.count;$++){const W=$*z;M===!0&&(s.fromBufferAttribute(C,$),b[q+W+0]=s.x,b[q+W+1]=s.y,b[q+W+2]=s.z,b[q+W+3]=0),O===!0&&(s.fromBufferAttribute(B,$),b[q+W+4]=s.x,b[q+W+5]=s.y,b[q+W+6]=s.z,b[q+W+7]=0),U===!0&&(s.fromBufferAttribute(X,$),b[q+W+8]=s.x,b[q+W+9]=s.y,b[q+W+10]=s.z,b[q+W+11]=X.itemSize===4?s.w:1)}}E={count:S,texture:y,size:new ut(_,N)},i.set(f,E),f.addEventListener("dispose",p)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)A.getUniforms().setValue(e,"morphTexture",h.morphTexture,t);else{let M=0;for(let U=0;U<g.length;U++)M+=g[U];const O=f.morphTargetsRelative?1:1-M;A.getUniforms().setValue(e,"morphTargetBaseInfluence",O),A.getUniforms().setValue(e,"morphTargetInfluences",g)}A.getUniforms().setValue(e,"morphTargetsTexture",E.texture,t),A.getUniforms().setValue(e,"morphTargetsTextureSize",E.size)}return{update:o}}function pc(e,n,t,i){let s=new WeakMap;function o(A){const g=i.render.frame,L=A.geometry,S=n.get(A,L);if(s.get(S)!==g&&(n.update(S),s.set(S,g)),A.isInstancedMesh&&(A.hasEventListener("dispose",f)===!1&&A.addEventListener("dispose",f),s.get(A)!==g&&(t.update(A.instanceMatrix,e.ARRAY_BUFFER),A.instanceColor!==null&&t.update(A.instanceColor,e.ARRAY_BUFFER),s.set(A,g))),A.isSkinnedMesh){const E=A.skeleton;s.get(E)!==g&&(E.update(),s.set(E,g))}return S}function h(){s=new WeakMap}function f(A){const g=A.target;g.removeEventListener("dispose",f),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:o,dispose:h}}const Ur=new Ja,Wi=new cr(1,1),Dr=new Ar,wr=new Qa,Ir=new Za,Xi=[],qi=[],Yi=new Float32Array(16),Ki=new Float32Array(9),$i=new Float32Array(4);function kt(e,n,t){const i=e[0];if(i<=0||i>0)return e;const s=n*t;let o=Xi[s];if(o===void 0&&(o=new Float32Array(s),Xi[s]=o),n!==0){i.toArray(o,0);for(let h=1,f=0;h!==n;++h)f+=t,e[h].toArray(o,f)}return o}function it(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function rt(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function _n(e,n){let t=qi[n];t===void 0&&(t=new Int32Array(n),qi[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function hc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function mc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(it(t,n))return;e.uniform2fv(this.addr,n),rt(t,n)}}function _c(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(it(t,n))return;e.uniform3fv(this.addr,n),rt(t,n)}}function vc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(it(t,n))return;e.uniform4fv(this.addr,n),rt(t,n)}}function gc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(it(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),rt(t,n)}else{if(it(t,i))return;$i.set(i),e.uniformMatrix2fv(this.addr,!1,$i),rt(t,i)}}function Sc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(it(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),rt(t,n)}else{if(it(t,i))return;Ki.set(i),e.uniformMatrix3fv(this.addr,!1,Ki),rt(t,i)}}function Ec(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(it(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),rt(t,n)}else{if(it(t,i))return;Yi.set(i),e.uniformMatrix4fv(this.addr,!1,Yi),rt(t,i)}}function Mc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function xc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(it(t,n))return;e.uniform2iv(this.addr,n),rt(t,n)}}function Tc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(it(t,n))return;e.uniform3iv(this.addr,n),rt(t,n)}}function Ac(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(it(t,n))return;e.uniform4iv(this.addr,n),rt(t,n)}}function Rc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Cc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(it(t,n))return;e.uniform2uiv(this.addr,n),rt(t,n)}}function bc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(it(t,n))return;e.uniform3uiv(this.addr,n),rt(t,n)}}function Pc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(it(t,n))return;e.uniform4uiv(this.addr,n),rt(t,n)}}function Lc(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let o;this.type===e.SAMPLER_2D_SHADOW?(Wi.compareFunction=dr,o=Wi):o=Ur,t.setTexture2D(n||o,s)}function Uc(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(n||wr,s)}function Dc(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(n||Ir,s)}function wc(e,n,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(n||Dr,s)}function Ic(e){switch(e){case 5126:return hc;case 35664:return mc;case 35665:return _c;case 35666:return vc;case 35674:return gc;case 35675:return Sc;case 35676:return Ec;case 5124:case 35670:return Mc;case 35667:case 35671:return xc;case 35668:case 35672:return Tc;case 35669:case 35673:return Ac;case 5125:return Rc;case 36294:return Cc;case 36295:return bc;case 36296:return Pc;case 35678:case 36198:case 36298:case 36306:case 35682:return Lc;case 35679:case 36299:case 36307:return Uc;case 35680:case 36300:case 36308:case 36293:return Dc;case 36289:case 36303:case 36311:case 36292:return wc}}function yc(e,n){e.uniform1fv(this.addr,n)}function Nc(e,n){const t=kt(n,this.size,2);e.uniform2fv(this.addr,t)}function Oc(e,n){const t=kt(n,this.size,3);e.uniform3fv(this.addr,t)}function Fc(e,n){const t=kt(n,this.size,4);e.uniform4fv(this.addr,t)}function Bc(e,n){const t=kt(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Gc(e,n){const t=kt(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Hc(e,n){const t=kt(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Vc(e,n){e.uniform1iv(this.addr,n)}function kc(e,n){e.uniform2iv(this.addr,n)}function zc(e,n){e.uniform3iv(this.addr,n)}function Wc(e,n){e.uniform4iv(this.addr,n)}function Xc(e,n){e.uniform1uiv(this.addr,n)}function qc(e,n){e.uniform2uiv(this.addr,n)}function Yc(e,n){e.uniform3uiv(this.addr,n)}function Kc(e,n){e.uniform4uiv(this.addr,n)}function $c(e,n,t){const i=this.cache,s=n.length,o=_n(t,s);it(i,o)||(e.uniform1iv(this.addr,o),rt(i,o));for(let h=0;h!==s;++h)t.setTexture2D(n[h]||Ur,o[h])}function Zc(e,n,t){const i=this.cache,s=n.length,o=_n(t,s);it(i,o)||(e.uniform1iv(this.addr,o),rt(i,o));for(let h=0;h!==s;++h)t.setTexture3D(n[h]||wr,o[h])}function Qc(e,n,t){const i=this.cache,s=n.length,o=_n(t,s);it(i,o)||(e.uniform1iv(this.addr,o),rt(i,o));for(let h=0;h!==s;++h)t.setTextureCube(n[h]||Ir,o[h])}function Jc(e,n,t){const i=this.cache,s=n.length,o=_n(t,s);it(i,o)||(e.uniform1iv(this.addr,o),rt(i,o));for(let h=0;h!==s;++h)t.setTexture2DArray(n[h]||Dr,o[h])}function jc(e){switch(e){case 5126:return yc;case 35664:return Nc;case 35665:return Oc;case 35666:return Fc;case 35674:return Bc;case 35675:return Gc;case 35676:return Hc;case 5124:case 35670:return Vc;case 35667:case 35671:return kc;case 35668:case 35672:return zc;case 35669:case 35673:return Wc;case 5125:return Xc;case 36294:return qc;case 36295:return Yc;case 36296:return Kc;case 35678:case 36198:case 36298:case 36306:case 35682:return $c;case 35679:case 36299:case 36307:return Zc;case 35680:case 36300:case 36308:case 36293:return Qc;case 36289:case 36303:case 36311:case 36292:return Jc}}class ef{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ic(t.type)}}class tf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jc(t.type)}}class nf{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const s=this.seq;for(let o=0,h=s.length;o!==h;++o){const f=s[o];f.setValue(n,t[f.id],i)}}}const wn=/(\w+)(\])?(\[|\.)?/g;function Zi(e,n){e.seq.push(n),e.map[n.id]=n}function rf(e,n,t){const i=e.name,s=i.length;for(wn.lastIndex=0;;){const o=wn.exec(i),h=wn.lastIndex;let f=o[1];const A=o[2]==="]",g=o[3];if(A&&(f=f|0),g===void 0||g==="["&&h+2===s){Zi(t,g===void 0?new ef(f,e,n):new tf(f,e,n));break}else{let S=t.map[f];S===void 0&&(S=new nf(f),Zi(t,S)),t=S}}}class cn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=n.getActiveUniform(t,s),h=n.getUniformLocation(t,o.name);rf(o,h,this)}}setValue(n,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(n,i,s)}setOptional(n,t,i){const s=t[i];s!==void 0&&this.setValue(n,i,s)}static upload(n,t,i,s){for(let o=0,h=t.length;o!==h;++o){const f=t[o],A=i[f.id];A.needsUpdate!==!1&&f.setValue(n,A.value,s)}}static seqWithValue(n,t){const i=[];for(let s=0,o=n.length;s!==o;++s){const h=n[s];h.id in t&&i.push(h)}return i}}function Qi(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const af=37297;let of=0;function sf(e,n){const t=e.split(`
`),i=[],s=Math.max(n-6,0),o=Math.min(n+6,t.length);for(let h=s;h<o;h++){const f=h+1;i.push(`${f===n?">":" "} ${f}: ${t[h]}`)}return i.join(`
`)}const Ji=new Fe;function lf(e){nt._getMatrix(Ji,nt.workingColorSpace,e);const n=`mat3( ${Ji.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(e)){case Pr:return[n,"LinearTransferOETF"];case qe:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function ji(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),o=(e.getShaderInfoLog(n)||"").trim();if(i&&o==="")return"";const h=/ERROR: 0:(\d+)/.exec(o);if(h){const f=parseInt(h[1]);return t.toUpperCase()+`

`+o+`

`+sf(e.getShaderSource(n),f)}else return o}function cf(e,n){const t=lf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ff(e,n){let t;switch(n){case $a:t="Linear";break;case Ka:t="Reinhard";break;case Ya:t="Cineon";break;case qa:t="ACESFilmic";break;case Xa:t="AgX";break;case Wa:t="Neutral";break;case za:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const an=new Oe;function uf(){nt.getLuminanceCoefficients(an);const e=an.x.toFixed(4),n=an.y.toFixed(4),t=an.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function df(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qt).join(`
`)}function pf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function hf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=e.getActiveAttrib(n,s),h=o.name;let f=1;o.type===e.FLOAT_MAT2&&(f=2),o.type===e.FLOAT_MAT3&&(f=3),o.type===e.FLOAT_MAT4&&(f=4),t[h]={type:o.type,location:e.getAttribLocation(n,h),locationSize:f}}return t}function qt(e){return e!==""}function er(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function tr(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const mf=/^[ \t]*#include +<([\w\d./]+)>/gm;function qn(e){return e.replace(mf,vf)}const _f=new Map;function vf(e,n){let t=Ie[n];if(t===void 0){const i=_f.get(n);if(i!==void 0)t=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return qn(t)}const gf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nr(e){return e.replace(gf,Sf)}function Sf(e,n,t,i){let s="";for(let o=parseInt(n);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function ir(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function Ef(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===hr?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===ka?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Et&&(n="SHADOWMAP_TYPE_VSM"),n}function Mf(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Jt:case Vt:n="ENVMAP_TYPE_CUBE";break;case mn:n="ENVMAP_TYPE_CUBE_UV";break}return n}function xf(e){let n="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Vt&&(n="ENVMAP_MODE_REFRACTION"),n}function Tf(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case no:n="ENVMAP_BLENDING_MULTIPLY";break;case to:n="ENVMAP_BLENDING_MIX";break;case eo:n="ENVMAP_BLENDING_ADD";break}return n}function Af(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Rf(e,n,t,i){const s=e.getContext(),o=t.defines;let h=t.vertexShader,f=t.fragmentShader;const A=Ef(t),g=Mf(t),L=xf(t),S=Tf(t),E=Af(t),M=df(t),O=pf(o),U=s.createProgram();let c,r,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,O].filter(qt).join(`
`),c.length>0&&(c+=`
`),r=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,O].filter(qt).join(`
`),r.length>0&&(r+=`
`)):(c=[ir(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,O,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+L:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qt).join(`
`),r=[ir(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,O,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.envMap?"#define "+L:"",t.envMap?"#define "+S:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+A:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==At?"#define TONE_MAPPING":"",t.toneMapping!==At?Ie.tonemapping_pars_fragment:"",t.toneMapping!==At?ff("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,cf("linearToOutputTexel",t.outputColorSpace),uf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qt).join(`
`)),h=qn(h),h=er(h,t),h=tr(h,t),f=qn(f),f=er(f,t),f=tr(f,t),h=nr(h),f=nr(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,c=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,r=["#define varying in",t.glslVersion===Oi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+r);const R=D+c+h,_=D+r+f,N=Qi(s,s.VERTEX_SHADER,R),b=Qi(s,s.FRAGMENT_SHADER,_);s.attachShader(U,N),s.attachShader(U,b),t.index0AttributeName!==void 0?s.bindAttribLocation(U,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(U,0,"position"),s.linkProgram(U);function y(C){if(e.debug.checkShaderErrors){const B=s.getProgramInfoLog(U)||"",X=s.getShaderInfoLog(N)||"",q=s.getShaderInfoLog(b)||"",$=B.trim(),W=X.trim(),ne=q.trim();let H=!0,ve=!0;if(s.getProgramParameter(U,s.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,U,N,b);else{const xe=ji(s,N,"vertex"),De=ji(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(U,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+$+`
`+xe+`
`+De)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(W===""||ne==="")&&(ve=!1);ve&&(C.diagnostics={runnable:H,programLog:$,vertexShader:{log:W,prefix:c},fragmentShader:{log:ne,prefix:r}})}s.deleteShader(N),s.deleteShader(b),z=new cn(s,U),p=hf(s,U)}let z;this.getUniforms=function(){return z===void 0&&y(this),z};let p;this.getAttributes=function(){return p===void 0&&y(this),p};let u=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return u===!1&&(u=s.getProgramParameter(U,af)),u},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(U),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=of++,this.cacheKey=n,this.usedTimes=1,this.program=U,this.vertexShader=N,this.fragmentShader=b,this}let Cf=0;class bf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),h=this._getShaderCacheForMaterial(n);return h.has(s)===!1&&(h.add(s),s.usedTimes++),h.has(o)===!1&&(h.add(o),o.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Pf(n),t.set(n,i)),i}}class Pf{constructor(n){this.id=Cf++,this.code=n,this.usedTimes=0}}function Lf(e,n,t,i,s,o,h){const f=new Va,A=new bf,g=new Set,L=[],S=s.logarithmicDepthBuffer,E=s.vertexTextures;let M=s.precision;const O={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function U(p){return g.add(p),p===0?"uv":`uv${p}`}function c(p,u,C,B,X){const q=B.fog,$=X.geometry,W=p.isMeshStandardMaterial?B.environment:null,ne=(p.isMeshStandardMaterial?t:n).get(p.envMap||W),H=ne&&ne.mapping===mn?ne.image.height:null,ve=O[p.type];p.precision!==null&&(M=s.getMaxPrecision(p.precision),M!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",M,"instead."));const xe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,De=xe!==void 0?xe.length:0;let Ge=0;$.morphAttributes.position!==void 0&&(Ge=1),$.morphAttributes.normal!==void 0&&(Ge=2),$.morphAttributes.color!==void 0&&(Ge=3);let et,Je,ke,V;if(ve){const He=gt[ve];et=He.vertexShader,Je=He.fragmentShader}else et=p.vertexShader,Je=p.fragmentShader,A.update(p),ke=A.getVertexShaderID(p),V=A.getFragmentShaderID(p);const K=e.getRenderTarget(),ce=e.state.buffers.depth.getReversed(),be=X.isInstancedMesh===!0,Se=X.isBatchedMesh===!0,Ne=!!p.map,ot=!!p.matcap,m=!!ne,Ke=!!p.aoMap,Le=!!p.lightMap,Re=!!p.bumpMap,de=!!p.normalMap,$e=!!p.displacementMap,pe=!!p.emissiveMap,we=!!p.metalnessMap,at=!!p.roughnessMap,tt=p.anisotropy>0,d=p.clearcoat>0,a=p.dispersion>0,P=p.iridescence>0,G=p.sheen>0,Y=p.transmission>0,F=tt&&!!p.anisotropyMap,ge=d&&!!p.clearcoatMap,ee=d&&!!p.clearcoatNormalMap,he=d&&!!p.clearcoatRoughnessMap,me=P&&!!p.iridescenceMap,J=P&&!!p.iridescenceThicknessMap,oe=G&&!!p.sheenColorMap,Ae=G&&!!p.sheenRoughnessMap,_e=!!p.specularMap,re=!!p.specularColorMap,Ue=!!p.specularIntensityMap,v=Y&&!!p.transmissionMap,j=Y&&!!p.thicknessMap,te=!!p.gradientMap,le=!!p.alphaMap,Z=p.alphaTest>0,k=!!p.alphaHash,ue=!!p.extensions;let Pe=At;p.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Pe=e.toneMapping);const We={shaderID:ve,shaderType:p.type,shaderName:p.name,vertexShader:et,fragmentShader:Je,defines:p.defines,customVertexShaderID:ke,customFragmentShaderID:V,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:M,batching:Se,batchingColor:Se&&X._colorsTexture!==null,instancing:be,instancingColor:be&&X.instanceColor!==null,instancingMorph:be&&X.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:K===null?e.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:hn,alphaToCoverage:!!p.alphaToCoverage,map:Ne,matcap:ot,envMap:m,envMapMode:m&&ne.mapping,envMapCubeUVHeight:H,aoMap:Ke,lightMap:Le,bumpMap:Re,normalMap:de,displacementMap:E&&$e,emissiveMap:pe,normalMapObjectSpace:de&&p.normalMapType===Na,normalMapTangentSpace:de&&p.normalMapType===ya,metalnessMap:we,roughnessMap:at,anisotropy:tt,anisotropyMap:F,clearcoat:d,clearcoatMap:ge,clearcoatNormalMap:ee,clearcoatRoughnessMap:he,dispersion:a,iridescence:P,iridescenceMap:me,iridescenceThicknessMap:J,sheen:G,sheenColorMap:oe,sheenRoughnessMap:Ae,specularMap:_e,specularColorMap:re,specularIntensityMap:Ue,transmission:Y,transmissionMap:v,thicknessMap:j,gradientMap:te,opaque:p.transparent===!1&&p.blending===ln&&p.alphaToCoverage===!1,alphaMap:le,alphaTest:Z,alphaHash:k,combine:p.combine,mapUv:Ne&&U(p.map.channel),aoMapUv:Ke&&U(p.aoMap.channel),lightMapUv:Le&&U(p.lightMap.channel),bumpMapUv:Re&&U(p.bumpMap.channel),normalMapUv:de&&U(p.normalMap.channel),displacementMapUv:$e&&U(p.displacementMap.channel),emissiveMapUv:pe&&U(p.emissiveMap.channel),metalnessMapUv:we&&U(p.metalnessMap.channel),roughnessMapUv:at&&U(p.roughnessMap.channel),anisotropyMapUv:F&&U(p.anisotropyMap.channel),clearcoatMapUv:ge&&U(p.clearcoatMap.channel),clearcoatNormalMapUv:ee&&U(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&U(p.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&U(p.iridescenceMap.channel),iridescenceThicknessMapUv:J&&U(p.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&U(p.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&U(p.sheenRoughnessMap.channel),specularMapUv:_e&&U(p.specularMap.channel),specularColorMapUv:re&&U(p.specularColorMap.channel),specularIntensityMapUv:Ue&&U(p.specularIntensityMap.channel),transmissionMapUv:v&&U(p.transmissionMap.channel),thicknessMapUv:j&&U(p.thicknessMap.channel),alphaMapUv:le&&U(p.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(de||tt),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!$.attributes.uv&&(Ne||le),fog:!!q,useFog:p.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:p.flatShading===!0&&p.wireframe===!1,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:ce,skinning:X.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Ge,numDirLights:u.directional.length,numPointLights:u.point.length,numSpotLights:u.spot.length,numSpotLightMaps:u.spotLightMap.length,numRectAreaLights:u.rectArea.length,numHemiLights:u.hemi.length,numDirLightShadows:u.directionalShadowMap.length,numPointLightShadows:u.pointShadowMap.length,numSpotLightShadows:u.spotShadowMap.length,numSpotLightShadowsWithMaps:u.numSpotLightShadowsWithMaps,numLightProbes:u.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:p.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Ne&&p.map.isVideoTexture===!0&&nt.getTransfer(p.map.colorSpace)===qe,decodeVideoTextureEmissive:pe&&p.emissiveMap.isVideoTexture===!0&&nt.getTransfer(p.emissiveMap.colorSpace)===qe,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===Mt,flipSided:p.side===_t,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:ue&&p.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&p.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return We.vertexUv1s=g.has(1),We.vertexUv2s=g.has(2),We.vertexUv3s=g.has(3),g.clear(),We}function r(p){const u=[];if(p.shaderID?u.push(p.shaderID):(u.push(p.customVertexShaderID),u.push(p.customFragmentShaderID)),p.defines!==void 0)for(const C in p.defines)u.push(C),u.push(p.defines[C]);return p.isRawShaderMaterial===!1&&(D(u,p),R(u,p),u.push(e.outputColorSpace)),u.push(p.customProgramCacheKey),u.join()}function D(p,u){p.push(u.precision),p.push(u.outputColorSpace),p.push(u.envMapMode),p.push(u.envMapCubeUVHeight),p.push(u.mapUv),p.push(u.alphaMapUv),p.push(u.lightMapUv),p.push(u.aoMapUv),p.push(u.bumpMapUv),p.push(u.normalMapUv),p.push(u.displacementMapUv),p.push(u.emissiveMapUv),p.push(u.metalnessMapUv),p.push(u.roughnessMapUv),p.push(u.anisotropyMapUv),p.push(u.clearcoatMapUv),p.push(u.clearcoatNormalMapUv),p.push(u.clearcoatRoughnessMapUv),p.push(u.iridescenceMapUv),p.push(u.iridescenceThicknessMapUv),p.push(u.sheenColorMapUv),p.push(u.sheenRoughnessMapUv),p.push(u.specularMapUv),p.push(u.specularColorMapUv),p.push(u.specularIntensityMapUv),p.push(u.transmissionMapUv),p.push(u.thicknessMapUv),p.push(u.combine),p.push(u.fogExp2),p.push(u.sizeAttenuation),p.push(u.morphTargetsCount),p.push(u.morphAttributeCount),p.push(u.numDirLights),p.push(u.numPointLights),p.push(u.numSpotLights),p.push(u.numSpotLightMaps),p.push(u.numHemiLights),p.push(u.numRectAreaLights),p.push(u.numDirLightShadows),p.push(u.numPointLightShadows),p.push(u.numSpotLightShadows),p.push(u.numSpotLightShadowsWithMaps),p.push(u.numLightProbes),p.push(u.shadowMapType),p.push(u.toneMapping),p.push(u.numClippingPlanes),p.push(u.numClipIntersection),p.push(u.depthPacking)}function R(p,u){f.disableAll(),u.supportsVertexTextures&&f.enable(0),u.instancing&&f.enable(1),u.instancingColor&&f.enable(2),u.instancingMorph&&f.enable(3),u.matcap&&f.enable(4),u.envMap&&f.enable(5),u.normalMapObjectSpace&&f.enable(6),u.normalMapTangentSpace&&f.enable(7),u.clearcoat&&f.enable(8),u.iridescence&&f.enable(9),u.alphaTest&&f.enable(10),u.vertexColors&&f.enable(11),u.vertexAlphas&&f.enable(12),u.vertexUv1s&&f.enable(13),u.vertexUv2s&&f.enable(14),u.vertexUv3s&&f.enable(15),u.vertexTangents&&f.enable(16),u.anisotropy&&f.enable(17),u.alphaHash&&f.enable(18),u.batching&&f.enable(19),u.dispersion&&f.enable(20),u.batchingColor&&f.enable(21),u.gradientMap&&f.enable(22),p.push(f.mask),f.disableAll(),u.fog&&f.enable(0),u.useFog&&f.enable(1),u.flatShading&&f.enable(2),u.logarithmicDepthBuffer&&f.enable(3),u.reversedDepthBuffer&&f.enable(4),u.skinning&&f.enable(5),u.morphTargets&&f.enable(6),u.morphNormals&&f.enable(7),u.morphColors&&f.enable(8),u.premultipliedAlpha&&f.enable(9),u.shadowMapEnabled&&f.enable(10),u.doubleSided&&f.enable(11),u.flipSided&&f.enable(12),u.useDepthPacking&&f.enable(13),u.dithering&&f.enable(14),u.transmission&&f.enable(15),u.sheen&&f.enable(16),u.opaque&&f.enable(17),u.pointsUvs&&f.enable(18),u.decodeVideoTexture&&f.enable(19),u.decodeVideoTextureEmissive&&f.enable(20),u.alphaToCoverage&&f.enable(21),p.push(f.mask)}function _(p){const u=O[p.type];let C;if(u){const B=gt[u];C=Ia.clone(B.uniforms)}else C=p.uniforms;return C}function N(p,u){let C;for(let B=0,X=L.length;B<X;B++){const q=L[B];if(q.cacheKey===u){C=q,++C.usedTimes;break}}return C===void 0&&(C=new Rf(e,u,p,o),L.push(C)),C}function b(p){if(--p.usedTimes===0){const u=L.indexOf(p);L[u]=L[L.length-1],L.pop(),p.destroy()}}function y(p){A.remove(p)}function z(){A.dispose()}return{getParameters:c,getProgramCacheKey:r,getUniforms:_,acquireProgram:N,releaseProgram:b,releaseShaderCache:y,programs:L,dispose:z}}function Uf(){let e=new WeakMap;function n(h){return e.has(h)}function t(h){let f=e.get(h);return f===void 0&&(f={},e.set(h,f)),f}function i(h){e.delete(h)}function s(h,f,A){e.get(h)[f]=A}function o(){e=new WeakMap}return{has:n,get:t,remove:i,update:s,dispose:o}}function Df(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function rr(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function ar(){const e=[];let n=0;const t=[],i=[],s=[];function o(){n=0,t.length=0,i.length=0,s.length=0}function h(S,E,M,O,U,c){let r=e[n];return r===void 0?(r={id:S.id,object:S,geometry:E,material:M,groupOrder:O,renderOrder:S.renderOrder,z:U,group:c},e[n]=r):(r.id=S.id,r.object=S,r.geometry=E,r.material=M,r.groupOrder=O,r.renderOrder=S.renderOrder,r.z=U,r.group=c),n++,r}function f(S,E,M,O,U,c){const r=h(S,E,M,O,U,c);M.transmission>0?i.push(r):M.transparent===!0?s.push(r):t.push(r)}function A(S,E,M,O,U,c){const r=h(S,E,M,O,U,c);M.transmission>0?i.unshift(r):M.transparent===!0?s.unshift(r):t.unshift(r)}function g(S,E){t.length>1&&t.sort(S||Df),i.length>1&&i.sort(E||rr),s.length>1&&s.sort(E||rr)}function L(){for(let S=n,E=e.length;S<E;S++){const M=e[S];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:f,unshift:A,finish:L,sort:g}}function wf(){let e=new WeakMap;function n(i,s){const o=e.get(i);let h;return o===void 0?(h=new ar,e.set(i,[h])):s>=o.length?(h=new ar,o.push(h)):h=o[s],h}function t(){e=new WeakMap}return{get:n,dispose:t}}function If(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new Oe,color:new Ye};break;case"SpotLight":t={position:new Oe,direction:new Oe,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Oe,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Oe,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new Oe,halfWidth:new Oe,halfHeight:new Oe};break}return e[n.id]=t,t}}}function yf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Nf=0;function Of(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function Ff(e){const n=new If,t=yf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)i.probe.push(new Oe);const s=new Oe,o=new Kt,h=new Kt;function f(g){let L=0,S=0,E=0;for(let p=0;p<9;p++)i.probe[p].set(0,0,0);let M=0,O=0,U=0,c=0,r=0,D=0,R=0,_=0,N=0,b=0,y=0;g.sort(Of);for(let p=0,u=g.length;p<u;p++){const C=g[p],B=C.color,X=C.intensity,q=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)L+=B.r*X,S+=B.g*X,E+=B.b*X;else if(C.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(C.sh.coefficients[W],X);y++}else if(C.isDirectionalLight){const W=n.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ne=C.shadow,H=t.get(C);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.directionalShadow[M]=H,i.directionalShadowMap[M]=$,i.directionalShadowMatrix[M]=C.shadow.matrix,D++}i.directional[M]=W,M++}else if(C.isSpotLight){const W=n.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(B).multiplyScalar(X),W.distance=q,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,i.spot[U]=W;const ne=C.shadow;if(C.map&&(i.spotLightMap[N]=C.map,N++,ne.updateMatrices(C),C.castShadow&&b++),i.spotLightMatrix[U]=ne.matrix,C.castShadow){const H=t.get(C);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.spotShadow[U]=H,i.spotShadowMap[U]=$,_++}U++}else if(C.isRectAreaLight){const W=n.get(C);W.color.copy(B).multiplyScalar(X),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),i.rectArea[c]=W,c++}else if(C.isPointLight){const W=n.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const ne=C.shadow,H=t.get(C);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,H.shadowCameraNear=ne.camera.near,H.shadowCameraFar=ne.camera.far,i.pointShadow[O]=H,i.pointShadowMap[O]=$,i.pointShadowMatrix[O]=C.shadow.matrix,R++}i.point[O]=W,O++}else if(C.isHemisphereLight){const W=n.get(C);W.skyColor.copy(C.color).multiplyScalar(X),W.groundColor.copy(C.groundColor).multiplyScalar(X),i.hemi[r]=W,r++}}c>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=L,i.ambient[1]=S,i.ambient[2]=E;const z=i.hash;(z.directionalLength!==M||z.pointLength!==O||z.spotLength!==U||z.rectAreaLength!==c||z.hemiLength!==r||z.numDirectionalShadows!==D||z.numPointShadows!==R||z.numSpotShadows!==_||z.numSpotMaps!==N||z.numLightProbes!==y)&&(i.directional.length=M,i.spot.length=U,i.rectArea.length=c,i.point.length=O,i.hemi.length=r,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=_+N-b,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=y,z.directionalLength=M,z.pointLength=O,z.spotLength=U,z.rectAreaLength=c,z.hemiLength=r,z.numDirectionalShadows=D,z.numPointShadows=R,z.numSpotShadows=_,z.numSpotMaps=N,z.numLightProbes=y,i.version=Nf++)}function A(g,L){let S=0,E=0,M=0,O=0,U=0;const c=L.matrixWorldInverse;for(let r=0,D=g.length;r<D;r++){const R=g[r];if(R.isDirectionalLight){const _=i.directional[S];_.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(c),S++}else if(R.isSpotLight){const _=i.spot[M];_.position.setFromMatrixPosition(R.matrixWorld),_.position.applyMatrix4(c),_.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(c),M++}else if(R.isRectAreaLight){const _=i.rectArea[O];_.position.setFromMatrixPosition(R.matrixWorld),_.position.applyMatrix4(c),h.identity(),o.copy(R.matrixWorld),o.premultiply(c),h.extractRotation(o),_.halfWidth.set(R.width*.5,0,0),_.halfHeight.set(0,R.height*.5,0),_.halfWidth.applyMatrix4(h),_.halfHeight.applyMatrix4(h),O++}else if(R.isPointLight){const _=i.point[E];_.position.setFromMatrixPosition(R.matrixWorld),_.position.applyMatrix4(c),E++}else if(R.isHemisphereLight){const _=i.hemi[U];_.direction.setFromMatrixPosition(R.matrixWorld),_.direction.transformDirection(c),U++}}}return{setup:f,setupView:A,state:i}}function or(e){const n=new Ff(e),t=[],i=[];function s(L){g.camera=L,t.length=0,i.length=0}function o(L){t.push(L)}function h(L){i.push(L)}function f(){n.setup(t)}function A(L){n.setupView(t,L)}const g={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:s,state:g,setupLights:f,setupLightsView:A,pushLight:o,pushShadow:h}}function Bf(e){let n=new WeakMap;function t(s,o=0){const h=n.get(s);let f;return h===void 0?(f=new or(e),n.set(s,[f])):o>=h.length?(f=new or(e),h.push(f)):f=h[o],f}function i(){n=new WeakMap}return{get:t,dispose:i}}const Gf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Vf(e,n,t){let i=new lr;const s=new ut,o=new ut,h=new lt,f=new Sa({depthPacking:Ea}),A=new Ma,g={},L=t.maxTextureSize,S={[$t]:_t,[_t]:$t,[Mt]:Mt},E=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Gf,fragmentShader:Hf}),M=E.clone();M.defines.HORIZONTAL_PASS=1;const O=new pr;O.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const U=new Tt(O,E),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hr;let r=this.type;this.render=function(b,y,z){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||b.length===0)return;const p=e.getRenderTarget(),u=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),B=e.state;B.setBlending(It),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=r!==Et&&this.type===Et,q=r===Et&&this.type!==Et;for(let $=0,W=b.length;$<W;$++){const ne=b[$],H=ne.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ve=H.getFrameExtents();if(s.multiply(ve),o.copy(H.mapSize),(s.x>L||s.y>L)&&(s.x>L&&(o.x=Math.floor(L/ve.x),s.x=o.x*ve.x,H.mapSize.x=o.x),s.y>L&&(o.y=Math.floor(L/ve.y),s.y=o.y*ve.y,H.mapSize.y=o.y)),H.map===null||X===!0||q===!0){const De=this.type!==Et?{minFilter:Yt,magFilter:Yt}:{};H.map!==null&&H.map.dispose(),H.map=new Ht(s.x,s.y,De),H.map.texture.name=ne.name+".shadowMap",H.camera.updateProjectionMatrix()}e.setRenderTarget(H.map),e.clear();const xe=H.getViewportCount();for(let De=0;De<xe;De++){const Ge=H.getViewport(De);h.set(o.x*Ge.x,o.y*Ge.y,o.x*Ge.z,o.y*Ge.w),B.viewport(h),H.updateMatrices(ne,De),i=H.getFrustum(),_(y,z,H.camera,ne,this.type)}H.isPointLightShadow!==!0&&this.type===Et&&D(H,z),H.needsUpdate=!1}r=this.type,c.needsUpdate=!1,e.setRenderTarget(p,u,C)};function D(b,y){const z=n.update(U);E.defines.VSM_SAMPLES!==b.blurSamples&&(E.defines.VSM_SAMPLES=b.blurSamples,M.defines.VSM_SAMPLES=b.blurSamples,E.needsUpdate=!0,M.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ht(s.x,s.y)),E.uniforms.shadow_pass.value=b.map.texture,E.uniforms.resolution.value=b.mapSize,E.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(y,null,z,E,U,null),M.uniforms.shadow_pass.value=b.mapPass.texture,M.uniforms.resolution.value=b.mapSize,M.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(y,null,z,M,U,null)}function R(b,y,z,p){let u=null;const C=z.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)u=C;else if(u=z.isPointLight===!0?A:f,e.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const B=u.uuid,X=y.uuid;let q=g[B];q===void 0&&(q={},g[B]=q);let $=q[X];$===void 0&&($=u.clone(),q[X]=$,y.addEventListener("dispose",N)),u=$}if(u.visible=y.visible,u.wireframe=y.wireframe,p===Et?u.side=y.shadowSide!==null?y.shadowSide:y.side:u.side=y.shadowSide!==null?y.shadowSide:S[y.side],u.alphaMap=y.alphaMap,u.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,u.map=y.map,u.clipShadows=y.clipShadows,u.clippingPlanes=y.clippingPlanes,u.clipIntersection=y.clipIntersection,u.displacementMap=y.displacementMap,u.displacementScale=y.displacementScale,u.displacementBias=y.displacementBias,u.wireframeLinewidth=y.wireframeLinewidth,u.linewidth=y.linewidth,z.isPointLight===!0&&u.isMeshDistanceMaterial===!0){const B=e.properties.get(u);B.light=z}return u}function _(b,y,z,p,u){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&u===Et)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld);const X=n.update(b),q=b.material;if(Array.isArray(q)){const $=X.groups;for(let W=0,ne=$.length;W<ne;W++){const H=$[W],ve=q[H.materialIndex];if(ve&&ve.visible){const xe=R(b,ve,p,u);b.onBeforeShadow(e,b,y,z,X,xe,H),e.renderBufferDirect(z,null,X,xe,b,H),b.onAfterShadow(e,b,y,z,X,xe,H)}}}else if(q.visible){const $=R(b,q,p,u);b.onBeforeShadow(e,b,y,z,X,$,null),e.renderBufferDirect(z,null,X,$,b,null),b.onAfterShadow(e,b,y,z,X,$,null)}}const B=b.children;for(let X=0,q=B.length;X<q;X++)_(B[X],y,z,p,u)}function N(b){b.target.removeEventListener("dispose",N);for(const z in g){const p=g[z],u=b.target.uuid;u in p&&(p[u].dispose(),delete p[u])}}}const kf={[zn]:kn,[Vn]:Bn,[Hn]:Fn,[un]:Gn,[kn]:zn,[Bn]:Vn,[Fn]:Hn,[Gn]:un};function zf(e,n){function t(){let v=!1;const j=new lt;let te=null;const le=new lt(0,0,0,0);return{setMask:function(Z){te!==Z&&!v&&(e.colorMask(Z,Z,Z,Z),te=Z)},setLocked:function(Z){v=Z},setClear:function(Z,k,ue,Pe,We){We===!0&&(Z*=Pe,k*=Pe,ue*=Pe),j.set(Z,k,ue,Pe),le.equals(j)===!1&&(e.clearColor(Z,k,ue,Pe),le.copy(j))},reset:function(){v=!1,te=null,le.set(-1,0,0,0)}}}function i(){let v=!1,j=!1,te=null,le=null,Z=null;return{setReversed:function(k){if(j!==k){const ue=n.get("EXT_clip_control");k?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),j=k;const Pe=Z;Z=null,this.setClear(Pe)}},getReversed:function(){return j},setTest:function(k){k?K(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(k){te!==k&&!v&&(e.depthMask(k),te=k)},setFunc:function(k){if(j&&(k=kf[k]),le!==k){switch(k){case zn:e.depthFunc(e.NEVER);break;case kn:e.depthFunc(e.ALWAYS);break;case Vn:e.depthFunc(e.LESS);break;case un:e.depthFunc(e.LEQUAL);break;case Hn:e.depthFunc(e.EQUAL);break;case Gn:e.depthFunc(e.GEQUAL);break;case Bn:e.depthFunc(e.GREATER);break;case Fn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}le=k}},setLocked:function(k){v=k},setClear:function(k){Z!==k&&(j&&(k=1-k),e.clearDepth(k),Z=k)},reset:function(){v=!1,te=null,le=null,Z=null,j=!1}}}function s(){let v=!1,j=null,te=null,le=null,Z=null,k=null,ue=null,Pe=null,We=null;return{setTest:function(He){v||(He?K(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(He){j!==He&&!v&&(e.stencilMask(He),j=He)},setFunc:function(He,St,vt){(te!==He||le!==St||Z!==vt)&&(e.stencilFunc(He,St,vt),te=He,le=St,Z=vt)},setOp:function(He,St,vt){(k!==He||ue!==St||Pe!==vt)&&(e.stencilOp(He,St,vt),k=He,ue=St,Pe=vt)},setLocked:function(He){v=He},setClear:function(He){We!==He&&(e.clearStencil(He),We=He)},reset:function(){v=!1,j=null,te=null,le=null,Z=null,k=null,ue=null,Pe=null,We=null}}}const o=new t,h=new i,f=new s,A=new WeakMap,g=new WeakMap;let L={},S={},E=new WeakMap,M=[],O=null,U=!1,c=null,r=null,D=null,R=null,_=null,N=null,b=null,y=new Ye(0,0,0),z=0,p=!1,u=null,C=null,B=null,X=null,q=null;const $=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ne=0;const H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=ne>=1):H.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=ne>=2);let ve=null,xe={};const De=e.getParameter(e.SCISSOR_BOX),Ge=e.getParameter(e.VIEWPORT),et=new lt().fromArray(De),Je=new lt().fromArray(Ge);function ke(v,j,te,le){const Z=new Uint8Array(4),k=e.createTexture();e.bindTexture(v,k),e.texParameteri(v,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(v,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ue=0;ue<te;ue++)v===e.TEXTURE_3D||v===e.TEXTURE_2D_ARRAY?e.texImage3D(j,0,e.RGBA,1,1,le,0,e.RGBA,e.UNSIGNED_BYTE,Z):e.texImage2D(j+ue,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Z);return k}const V={};V[e.TEXTURE_2D]=ke(e.TEXTURE_2D,e.TEXTURE_2D,1),V[e.TEXTURE_CUBE_MAP]=ke(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[e.TEXTURE_2D_ARRAY]=ke(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),V[e.TEXTURE_3D]=ke(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),h.setClear(1),f.setClear(0),K(e.DEPTH_TEST),h.setFunc(un),Re(!1),de(Ui),K(e.CULL_FACE),Ke(It);function K(v){L[v]!==!0&&(e.enable(v),L[v]=!0)}function ce(v){L[v]!==!1&&(e.disable(v),L[v]=!1)}function be(v,j){return S[v]!==j?(e.bindFramebuffer(v,j),S[v]=j,v===e.DRAW_FRAMEBUFFER&&(S[e.FRAMEBUFFER]=j),v===e.FRAMEBUFFER&&(S[e.DRAW_FRAMEBUFFER]=j),!0):!1}function Se(v,j){let te=M,le=!1;if(v){te=E.get(j),te===void 0&&(te=[],E.set(j,te));const Z=v.textures;if(te.length!==Z.length||te[0]!==e.COLOR_ATTACHMENT0){for(let k=0,ue=Z.length;k<ue;k++)te[k]=e.COLOR_ATTACHMENT0+k;te.length=Z.length,le=!0}}else te[0]!==e.BACK&&(te[0]=e.BACK,le=!0);le&&e.drawBuffers(te)}function Ne(v){return O!==v?(e.useProgram(v),O=v,!0):!1}const ot={[Wt]:e.FUNC_ADD,[Kr]:e.FUNC_SUBTRACT,[Yr]:e.FUNC_REVERSE_SUBTRACT};ot[io]=e.MIN,ot[ro]=e.MAX;const m={[oa]:e.ZERO,[ur]:e.ONE,[aa]:e.SRC_COLOR,[ra]:e.SRC_ALPHA,[ia]:e.SRC_ALPHA_SATURATE,[na]:e.DST_COLOR,[ta]:e.DST_ALPHA,[ea]:e.ONE_MINUS_SRC_COLOR,[On]:e.ONE_MINUS_SRC_ALPHA,[jr]:e.ONE_MINUS_DST_COLOR,[Jr]:e.ONE_MINUS_DST_ALPHA,[Qr]:e.CONSTANT_COLOR,[Zr]:e.ONE_MINUS_CONSTANT_COLOR,[fr]:e.CONSTANT_ALPHA,[$r]:e.ONE_MINUS_CONSTANT_ALPHA};function Ke(v,j,te,le,Z,k,ue,Pe,We,He){if(v===It){U===!0&&(ce(e.BLEND),U=!1);return}if(U===!1&&(K(e.BLEND),U=!0),v!==Tr){if(v!==c||He!==p){if((r!==Wt||_!==Wt)&&(e.blendEquation(e.FUNC_ADD),r=Wt,_=Wt),He)switch(v){case ln:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ii:e.blendFunc(e.ONE,e.ONE);break;case wi:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Di:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case ln:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ii:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case wi:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Di:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}D=null,R=null,N=null,b=null,y.set(0,0,0),z=0,c=v,p=He}return}Z=Z||j,k=k||te,ue=ue||le,(j!==r||Z!==_)&&(e.blendEquationSeparate(ot[j],ot[Z]),r=j,_=Z),(te!==D||le!==R||k!==N||ue!==b)&&(e.blendFuncSeparate(m[te],m[le],m[k],m[ue]),D=te,R=le,N=k,b=ue),(Pe.equals(y)===!1||We!==z)&&(e.blendColor(Pe.r,Pe.g,Pe.b,We),y.copy(Pe),z=We),c=v,p=!1}function Le(v,j){v.side===Mt?ce(e.CULL_FACE):K(e.CULL_FACE);let te=v.side===_t;j&&(te=!te),Re(te),v.blending===ln&&v.transparent===!1?Ke(It):Ke(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),h.setFunc(v.depthFunc),h.setTest(v.depthTest),h.setMask(v.depthWrite),o.setMask(v.colorWrite);const le=v.stencilWrite;f.setTest(le),le&&(f.setMask(v.stencilWriteMask),f.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),f.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),pe(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?K(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function Re(v){u!==v&&(v?e.frontFace(e.CW):e.frontFace(e.CCW),u=v)}function de(v){v!==Ua?(K(e.CULL_FACE),v!==C&&(v===Ui?e.cullFace(e.BACK):v===Da?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ce(e.CULL_FACE),C=v}function $e(v){v!==B&&(W&&e.lineWidth(v),B=v)}function pe(v,j,te){v?(K(e.POLYGON_OFFSET_FILL),(X!==j||q!==te)&&(e.polygonOffset(j,te),X=j,q=te)):ce(e.POLYGON_OFFSET_FILL)}function we(v){v?K(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function at(v){v===void 0&&(v=e.TEXTURE0+$-1),ve!==v&&(e.activeTexture(v),ve=v)}function tt(v,j,te){te===void 0&&(ve===null?te=e.TEXTURE0+$-1:te=ve);let le=xe[te];le===void 0&&(le={type:void 0,texture:void 0},xe[te]=le),(le.type!==v||le.texture!==j)&&(ve!==te&&(e.activeTexture(te),ve=te),e.bindTexture(v,j||V[v]),le.type=v,le.texture=j)}function d(){const v=xe[ve];v!==void 0&&v.type!==void 0&&(e.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function a(){try{e.compressedTexImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function G(){try{e.texSubImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Y(){try{e.texSubImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function F(){try{e.compressedTexSubImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ge(){try{e.compressedTexSubImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ee(){try{e.texStorage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function he(){try{e.texStorage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function me(){try{e.texImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function J(){try{e.texImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function oe(v){et.equals(v)===!1&&(e.scissor(v.x,v.y,v.z,v.w),et.copy(v))}function Ae(v){Je.equals(v)===!1&&(e.viewport(v.x,v.y,v.z,v.w),Je.copy(v))}function _e(v,j){let te=g.get(j);te===void 0&&(te=new WeakMap,g.set(j,te));let le=te.get(v);le===void 0&&(le=e.getUniformBlockIndex(j,v.name),te.set(v,le))}function re(v,j){const le=g.get(j).get(v);A.get(j)!==le&&(e.uniformBlockBinding(j,le,v.__bindingPointIndex),A.set(j,le))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),h.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),L={},ve=null,xe={},S={},E=new WeakMap,M=[],O=null,U=!1,c=null,r=null,D=null,R=null,_=null,N=null,b=null,y=new Ye(0,0,0),z=0,p=!1,u=null,C=null,B=null,X=null,q=null,et.set(0,0,e.canvas.width,e.canvas.height),Je.set(0,0,e.canvas.width,e.canvas.height),o.reset(),h.reset(),f.reset()}return{buffers:{color:o,depth:h,stencil:f},enable:K,disable:ce,bindFramebuffer:be,drawBuffers:Se,useProgram:Ne,setBlending:Ke,setMaterial:Le,setFlipSided:Re,setCullFace:de,setLineWidth:$e,setPolygonOffset:pe,setScissorTest:we,activeTexture:at,bindTexture:tt,unbindTexture:d,compressedTexImage2D:a,compressedTexImage3D:P,texImage2D:me,texImage3D:J,updateUBOMapping:_e,uniformBlockBinding:re,texStorage2D:ee,texStorage3D:he,texSubImage2D:G,texSubImage3D:Y,compressedTexSubImage2D:F,compressedTexSubImage3D:ge,scissor:oe,viewport:Ae,reset:Ue}}function Wf(e,n,t,i,s,o,h){const f=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,A=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new ut,L=new WeakMap;let S;const E=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function O(d,a){return M?new OffscreenCanvas(d,a):ja("canvas")}function U(d,a,P){let G=1;const Y=tt(d);if((Y.width>P||Y.height>P)&&(G=P/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&d instanceof ImageBitmap||typeof VideoFrame<"u"&&d instanceof VideoFrame){const F=Math.floor(G*Y.width),ge=Math.floor(G*Y.height);S===void 0&&(S=O(F,ge));const ee=a?O(F,ge):S;return ee.width=F,ee.height=ge,ee.getContext("2d").drawImage(d,0,0,F,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+F+"x"+ge+")."),ee}else return"data"in d&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),d;return d}function c(d){return d.generateMipmaps}function r(d){e.generateMipmap(d)}function D(d){return d.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:d.isWebGL3DRenderTarget?e.TEXTURE_3D:d.isWebGLArrayRenderTarget||d.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function R(d,a,P,G,Y=!1){if(d!==null){if(e[d]!==void 0)return e[d];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+d+"'")}let F=a;if(a===e.RED&&(P===e.FLOAT&&(F=e.R32F),P===e.HALF_FLOAT&&(F=e.R16F),P===e.UNSIGNED_BYTE&&(F=e.R8)),a===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(F=e.R8UI),P===e.UNSIGNED_SHORT&&(F=e.R16UI),P===e.UNSIGNED_INT&&(F=e.R32UI),P===e.BYTE&&(F=e.R8I),P===e.SHORT&&(F=e.R16I),P===e.INT&&(F=e.R32I)),a===e.RG&&(P===e.FLOAT&&(F=e.RG32F),P===e.HALF_FLOAT&&(F=e.RG16F),P===e.UNSIGNED_BYTE&&(F=e.RG8)),a===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(F=e.RG8UI),P===e.UNSIGNED_SHORT&&(F=e.RG16UI),P===e.UNSIGNED_INT&&(F=e.RG32UI),P===e.BYTE&&(F=e.RG8I),P===e.SHORT&&(F=e.RG16I),P===e.INT&&(F=e.RG32I)),a===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(F=e.RGB8UI),P===e.UNSIGNED_SHORT&&(F=e.RGB16UI),P===e.UNSIGNED_INT&&(F=e.RGB32UI),P===e.BYTE&&(F=e.RGB8I),P===e.SHORT&&(F=e.RGB16I),P===e.INT&&(F=e.RGB32I)),a===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(F=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(F=e.RGBA16UI),P===e.UNSIGNED_INT&&(F=e.RGBA32UI),P===e.BYTE&&(F=e.RGBA8I),P===e.SHORT&&(F=e.RGBA16I),P===e.INT&&(F=e.RGBA32I)),a===e.RGB&&(P===e.UNSIGNED_INT_5_9_9_9_REV&&(F=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(F=e.R11F_G11F_B10F)),a===e.RGBA){const ge=Y?Pr:nt.getTransfer(G);P===e.FLOAT&&(F=e.RGBA32F),P===e.HALF_FLOAT&&(F=e.RGBA16F),P===e.UNSIGNED_BYTE&&(F=ge===qe?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT_4_4_4_4&&(F=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(F=e.RGB5_A1)}return(F===e.R16F||F===e.R32F||F===e.RG16F||F===e.RG32F||F===e.RGBA16F||F===e.RGBA32F)&&n.get("EXT_color_buffer_float"),F}function _(d,a){let P;return d?a===null||a===Qt||a===Zt?P=e.DEPTH24_STENCIL8:a===wt?P=e.DEPTH32F_STENCIL8:a===dn&&(P=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):a===null||a===Qt||a===Zt?P=e.DEPTH_COMPONENT24:a===wt?P=e.DEPTH_COMPONENT32F:a===dn&&(P=e.DEPTH_COMPONENT16),P}function N(d,a){return c(d)===!0||d.isFramebufferTexture&&d.minFilter!==Yt&&d.minFilter!==Bt?Math.log2(Math.max(a.width,a.height))+1:d.mipmaps!==void 0&&d.mipmaps.length>0?d.mipmaps.length:d.isCompressedTexture&&Array.isArray(d.image)?a.mipmaps.length:1}function b(d){const a=d.target;a.removeEventListener("dispose",b),z(a),a.isVideoTexture&&L.delete(a)}function y(d){const a=d.target;a.removeEventListener("dispose",y),u(a)}function z(d){const a=i.get(d);if(a.__webglInit===void 0)return;const P=d.source,G=E.get(P);if(G){const Y=G[a.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&p(d),Object.keys(G).length===0&&E.delete(P)}i.remove(d)}function p(d){const a=i.get(d);e.deleteTexture(a.__webglTexture);const P=d.source,G=E.get(P);delete G[a.__cacheKey],h.memory.textures--}function u(d){const a=i.get(d);if(d.depthTexture&&(d.depthTexture.dispose(),i.remove(d.depthTexture)),d.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(a.__webglFramebuffer[G]))for(let Y=0;Y<a.__webglFramebuffer[G].length;Y++)e.deleteFramebuffer(a.__webglFramebuffer[G][Y]);else e.deleteFramebuffer(a.__webglFramebuffer[G]);a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer[G])}else{if(Array.isArray(a.__webglFramebuffer))for(let G=0;G<a.__webglFramebuffer.length;G++)e.deleteFramebuffer(a.__webglFramebuffer[G]);else e.deleteFramebuffer(a.__webglFramebuffer);if(a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer),a.__webglMultisampledFramebuffer&&e.deleteFramebuffer(a.__webglMultisampledFramebuffer),a.__webglColorRenderbuffer)for(let G=0;G<a.__webglColorRenderbuffer.length;G++)a.__webglColorRenderbuffer[G]&&e.deleteRenderbuffer(a.__webglColorRenderbuffer[G]);a.__webglDepthRenderbuffer&&e.deleteRenderbuffer(a.__webglDepthRenderbuffer)}const P=d.textures;for(let G=0,Y=P.length;G<Y;G++){const F=i.get(P[G]);F.__webglTexture&&(e.deleteTexture(F.__webglTexture),h.memory.textures--),i.remove(P[G])}i.remove(d)}let C=0;function B(){C=0}function X(){const d=C;return d>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+d+" texture units while this GPU supports only "+s.maxTextures),C+=1,d}function q(d){const a=[];return a.push(d.wrapS),a.push(d.wrapT),a.push(d.wrapR||0),a.push(d.magFilter),a.push(d.minFilter),a.push(d.anisotropy),a.push(d.internalFormat),a.push(d.format),a.push(d.type),a.push(d.generateMipmaps),a.push(d.premultiplyAlpha),a.push(d.flipY),a.push(d.unpackAlignment),a.push(d.colorSpace),a.join()}function $(d,a){const P=i.get(d);if(d.isVideoTexture&&we(d),d.isRenderTargetTexture===!1&&d.isExternalTexture!==!0&&d.version>0&&P.__version!==d.version){const G=d.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(P,d,a);return}}else d.isExternalTexture&&(P.__webglTexture=d.sourceTexture?d.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+a)}function W(d,a){const P=i.get(d);if(d.isRenderTargetTexture===!1&&d.version>0&&P.__version!==d.version){V(P,d,a);return}t.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+a)}function ne(d,a){const P=i.get(d);if(d.isRenderTargetTexture===!1&&d.version>0&&P.__version!==d.version){V(P,d,a);return}t.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+a)}function H(d,a){const P=i.get(d);if(d.version>0&&P.__version!==d.version){K(P,d,a);return}t.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+a)}const ve={[ca]:e.REPEAT,[la]:e.CLAMP_TO_EDGE,[sa]:e.MIRRORED_REPEAT},xe={[Yt]:e.NEAREST,[fa]:e.NEAREST_MIPMAP_NEAREST,[tn]:e.NEAREST_MIPMAP_LINEAR,[Bt]:e.LINEAR,[En]:e.LINEAR_MIPMAP_NEAREST,[Xt]:e.LINEAR_MIPMAP_LINEAR},De={[va]:e.NEVER,[_a]:e.ALWAYS,[ma]:e.LESS,[dr]:e.LEQUAL,[ha]:e.EQUAL,[pa]:e.GEQUAL,[da]:e.GREATER,[ua]:e.NOTEQUAL};function Ge(d,a){if(a.type===wt&&n.has("OES_texture_float_linear")===!1&&(a.magFilter===Bt||a.magFilter===En||a.magFilter===tn||a.magFilter===Xt||a.minFilter===Bt||a.minFilter===En||a.minFilter===tn||a.minFilter===Xt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(d,e.TEXTURE_WRAP_S,ve[a.wrapS]),e.texParameteri(d,e.TEXTURE_WRAP_T,ve[a.wrapT]),(d===e.TEXTURE_3D||d===e.TEXTURE_2D_ARRAY)&&e.texParameteri(d,e.TEXTURE_WRAP_R,ve[a.wrapR]),e.texParameteri(d,e.TEXTURE_MAG_FILTER,xe[a.magFilter]),e.texParameteri(d,e.TEXTURE_MIN_FILTER,xe[a.minFilter]),a.compareFunction&&(e.texParameteri(d,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(d,e.TEXTURE_COMPARE_FUNC,De[a.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(a.magFilter===Yt||a.minFilter!==tn&&a.minFilter!==Xt||a.type===wt&&n.has("OES_texture_float_linear")===!1)return;if(a.anisotropy>1||i.get(a).__currentAnisotropy){const P=n.get("EXT_texture_filter_anisotropic");e.texParameterf(d,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,s.getMaxAnisotropy())),i.get(a).__currentAnisotropy=a.anisotropy}}}function et(d,a){let P=!1;d.__webglInit===void 0&&(d.__webglInit=!0,a.addEventListener("dispose",b));const G=a.source;let Y=E.get(G);Y===void 0&&(Y={},E.set(G,Y));const F=q(a);if(F!==d.__cacheKey){Y[F]===void 0&&(Y[F]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,P=!0),Y[F].usedTimes++;const ge=Y[d.__cacheKey];ge!==void 0&&(Y[d.__cacheKey].usedTimes--,ge.usedTimes===0&&p(a)),d.__cacheKey=F,d.__webglTexture=Y[F].texture}return P}function Je(d,a,P){return Math.floor(Math.floor(d/P)/a)}function ke(d,a,P,G){const F=d.updateRanges;if(F.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,a.width,a.height,P,G,a.data);else{F.sort((J,oe)=>J.start-oe.start);let ge=0;for(let J=1;J<F.length;J++){const oe=F[ge],Ae=F[J],_e=oe.start+oe.count,re=Je(Ae.start,a.width,4),Ue=Je(oe.start,a.width,4);Ae.start<=_e+1&&re===Ue&&Je(Ae.start+Ae.count-1,a.width,4)===re?oe.count=Math.max(oe.count,Ae.start+Ae.count-oe.start):(++ge,F[ge]=Ae)}F.length=ge+1;const ee=e.getParameter(e.UNPACK_ROW_LENGTH),he=e.getParameter(e.UNPACK_SKIP_PIXELS),me=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,a.width);for(let J=0,oe=F.length;J<oe;J++){const Ae=F[J],_e=Math.floor(Ae.start/4),re=Math.ceil(Ae.count/4),Ue=_e%a.width,v=Math.floor(_e/a.width),j=re,te=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ue),e.pixelStorei(e.UNPACK_SKIP_ROWS,v),t.texSubImage2D(e.TEXTURE_2D,0,Ue,v,j,te,P,G,a.data)}d.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ee),e.pixelStorei(e.UNPACK_SKIP_PIXELS,he),e.pixelStorei(e.UNPACK_SKIP_ROWS,me)}}function V(d,a,P){let G=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(G=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(G=e.TEXTURE_3D);const Y=et(d,a),F=a.source;t.bindTexture(G,d.__webglTexture,e.TEXTURE0+P);const ge=i.get(F);if(F.version!==ge.__version||Y===!0){t.activeTexture(e.TEXTURE0+P);const ee=nt.getPrimaries(nt.workingColorSpace),he=a.colorSpace===Ft?null:nt.getPrimaries(a.colorSpace),me=a.colorSpace===Ft||ee===he?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let J=U(a.image,!1,s.maxTextureSize);J=at(a,J);const oe=o.convert(a.format,a.colorSpace),Ae=o.convert(a.type);let _e=R(a.internalFormat,oe,Ae,a.colorSpace,a.isVideoTexture);Ge(G,a);let re;const Ue=a.mipmaps,v=a.isVideoTexture!==!0,j=ge.__version===void 0||Y===!0,te=F.dataReady,le=N(a,J);if(a.isDepthTexture)_e=_(a.format===fn,a.type),j&&(v?t.texStorage2D(e.TEXTURE_2D,1,_e,J.width,J.height):t.texImage2D(e.TEXTURE_2D,0,_e,J.width,J.height,0,oe,Ae,null));else if(a.isDataTexture)if(Ue.length>0){v&&j&&t.texStorage2D(e.TEXTURE_2D,le,_e,Ue[0].width,Ue[0].height);for(let Z=0,k=Ue.length;Z<k;Z++)re=Ue[Z],v?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,oe,Ae,re.data):t.texImage2D(e.TEXTURE_2D,Z,_e,re.width,re.height,0,oe,Ae,re.data);a.generateMipmaps=!1}else v?(j&&t.texStorage2D(e.TEXTURE_2D,le,_e,J.width,J.height),te&&ke(a,J,oe,Ae)):t.texImage2D(e.TEXTURE_2D,0,_e,J.width,J.height,0,oe,Ae,J.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){v&&j&&t.texStorage3D(e.TEXTURE_2D_ARRAY,le,_e,Ue[0].width,Ue[0].height,J.depth);for(let Z=0,k=Ue.length;Z<k;Z++)if(re=Ue[Z],a.format!==xt)if(oe!==null)if(v){if(te)if(a.layerUpdates.size>0){const ue=Ni(re.width,re.height,a.format,a.type);for(const Pe of a.layerUpdates){const We=re.data.subarray(Pe*ue/re.data.BYTES_PER_ELEMENT,(Pe+1)*ue/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,Pe,re.width,re.height,1,oe,We)}a.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,re.width,re.height,J.depth,oe,re.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,_e,re.width,re.height,J.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else v?te&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,re.width,re.height,J.depth,oe,Ae,re.data):t.texImage3D(e.TEXTURE_2D_ARRAY,Z,_e,re.width,re.height,J.depth,0,oe,Ae,re.data)}else{v&&j&&t.texStorage2D(e.TEXTURE_2D,le,_e,Ue[0].width,Ue[0].height);for(let Z=0,k=Ue.length;Z<k;Z++)re=Ue[Z],a.format!==xt?oe!==null?v?te&&t.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,oe,re.data):t.compressedTexImage2D(e.TEXTURE_2D,Z,_e,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):v?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,oe,Ae,re.data):t.texImage2D(e.TEXTURE_2D,Z,_e,re.width,re.height,0,oe,Ae,re.data)}else if(a.isDataArrayTexture)if(v){if(j&&t.texStorage3D(e.TEXTURE_2D_ARRAY,le,_e,J.width,J.height,J.depth),te)if(a.layerUpdates.size>0){const Z=Ni(J.width,J.height,a.format,a.type);for(const k of a.layerUpdates){const ue=J.data.subarray(k*Z/J.data.BYTES_PER_ELEMENT,(k+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,k,J.width,J.height,1,oe,Ae,ue)}a.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,oe,Ae,J.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,_e,J.width,J.height,J.depth,0,oe,Ae,J.data);else if(a.isData3DTexture)v?(j&&t.texStorage3D(e.TEXTURE_3D,le,_e,J.width,J.height,J.depth),te&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,oe,Ae,J.data)):t.texImage3D(e.TEXTURE_3D,0,_e,J.width,J.height,J.depth,0,oe,Ae,J.data);else if(a.isFramebufferTexture){if(j)if(v)t.texStorage2D(e.TEXTURE_2D,le,_e,J.width,J.height);else{let Z=J.width,k=J.height;for(let ue=0;ue<le;ue++)t.texImage2D(e.TEXTURE_2D,ue,_e,Z,k,0,oe,Ae,null),Z>>=1,k>>=1}}else if(Ue.length>0){if(v&&j){const Z=tt(Ue[0]);t.texStorage2D(e.TEXTURE_2D,le,_e,Z.width,Z.height)}for(let Z=0,k=Ue.length;Z<k;Z++)re=Ue[Z],v?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,oe,Ae,re):t.texImage2D(e.TEXTURE_2D,Z,_e,oe,Ae,re);a.generateMipmaps=!1}else if(v){if(j){const Z=tt(J);t.texStorage2D(e.TEXTURE_2D,le,_e,Z.width,Z.height)}te&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,oe,Ae,J)}else t.texImage2D(e.TEXTURE_2D,0,_e,oe,Ae,J);c(a)&&r(G),ge.__version=F.version,a.onUpdate&&a.onUpdate(a)}d.__version=a.version}function K(d,a,P){if(a.image.length!==6)return;const G=et(d,a),Y=a.source;t.bindTexture(e.TEXTURE_CUBE_MAP,d.__webglTexture,e.TEXTURE0+P);const F=i.get(Y);if(Y.version!==F.__version||G===!0){t.activeTexture(e.TEXTURE0+P);const ge=nt.getPrimaries(nt.workingColorSpace),ee=a.colorSpace===Ft?null:nt.getPrimaries(a.colorSpace),he=a.colorSpace===Ft||ge===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const me=a.isCompressedTexture||a.image[0].isCompressedTexture,J=a.image[0]&&a.image[0].isDataTexture,oe=[];for(let k=0;k<6;k++)!me&&!J?oe[k]=U(a.image[k],!0,s.maxCubemapSize):oe[k]=J?a.image[k].image:a.image[k],oe[k]=at(a,oe[k]);const Ae=oe[0],_e=o.convert(a.format,a.colorSpace),re=o.convert(a.type),Ue=R(a.internalFormat,_e,re,a.colorSpace),v=a.isVideoTexture!==!0,j=F.__version===void 0||G===!0,te=Y.dataReady;let le=N(a,Ae);Ge(e.TEXTURE_CUBE_MAP,a);let Z;if(me){v&&j&&t.texStorage2D(e.TEXTURE_CUBE_MAP,le,Ue,Ae.width,Ae.height);for(let k=0;k<6;k++){Z=oe[k].mipmaps;for(let ue=0;ue<Z.length;ue++){const Pe=Z[ue];a.format!==xt?_e!==null?v?te&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,ue,0,0,Pe.width,Pe.height,_e,Pe.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,ue,Ue,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):v?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,ue,0,0,Pe.width,Pe.height,_e,re,Pe.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,ue,Ue,Pe.width,Pe.height,0,_e,re,Pe.data)}}}else{if(Z=a.mipmaps,v&&j){Z.length>0&&le++;const k=tt(oe[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,le,Ue,k.width,k.height)}for(let k=0;k<6;k++)if(J){v?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,oe[k].width,oe[k].height,_e,re,oe[k].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Ue,oe[k].width,oe[k].height,0,_e,re,oe[k].data);for(let ue=0;ue<Z.length;ue++){const We=Z[ue].image[k].image;v?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,ue+1,0,0,We.width,We.height,_e,re,We.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,ue+1,Ue,We.width,We.height,0,_e,re,We.data)}}else{v?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,_e,re,oe[k]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Ue,_e,re,oe[k]);for(let ue=0;ue<Z.length;ue++){const Pe=Z[ue];v?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,ue+1,0,0,_e,re,Pe.image[k]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,ue+1,Ue,_e,re,Pe.image[k])}}}c(a)&&r(e.TEXTURE_CUBE_MAP),F.__version=Y.version,a.onUpdate&&a.onUpdate(a)}d.__version=a.version}function ce(d,a,P,G,Y,F){const ge=o.convert(P.format,P.colorSpace),ee=o.convert(P.type),he=R(P.internalFormat,ge,ee,P.colorSpace),me=i.get(a),J=i.get(P);if(J.__renderTarget=a,!me.__hasExternalTextures){const oe=Math.max(1,a.width>>F),Ae=Math.max(1,a.height>>F);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?t.texImage3D(Y,F,he,oe,Ae,a.depth,0,ge,ee,null):t.texImage2D(Y,F,he,oe,Ae,0,ge,ee,null)}t.bindFramebuffer(e.FRAMEBUFFER,d),pe(a)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,Y,J.__webglTexture,0,$e(a)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,G,Y,J.__webglTexture,F),t.bindFramebuffer(e.FRAMEBUFFER,null)}function be(d,a,P){if(e.bindRenderbuffer(e.RENDERBUFFER,d),a.depthBuffer){const G=a.depthTexture,Y=G&&G.isDepthTexture?G.type:null,F=_(a.stencilBuffer,Y),ge=a.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=$e(a);pe(a)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ee,F,a.width,a.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,F,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,F,a.width,a.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ge,e.RENDERBUFFER,d)}else{const G=a.textures;for(let Y=0;Y<G.length;Y++){const F=G[Y],ge=o.convert(F.format,F.colorSpace),ee=o.convert(F.type),he=R(F.internalFormat,ge,ee,F.colorSpace),me=$e(a);P&&pe(a)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,me,he,a.width,a.height):pe(a)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,me,he,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,he,a.width,a.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Se(d,a){if(a&&a.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,d),!(a.depthTexture&&a.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(a.depthTexture);G.__renderTarget=a,(!G.__webglTexture||a.depthTexture.image.width!==a.width||a.depthTexture.image.height!==a.height)&&(a.depthTexture.image.width=a.width,a.depthTexture.image.height=a.height,a.depthTexture.needsUpdate=!0),$(a.depthTexture,0);const Y=G.__webglTexture,F=$e(a);if(a.depthTexture.format===Yn)pe(a)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0);else if(a.depthTexture.format===fn)pe(a)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ne(d){const a=i.get(d),P=d.isWebGLCubeRenderTarget===!0;if(a.__boundDepthTexture!==d.depthTexture){const G=d.depthTexture;if(a.__depthDisposeCallback&&a.__depthDisposeCallback(),G){const Y=()=>{delete a.__boundDepthTexture,delete a.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),a.__depthDisposeCallback=Y}a.__boundDepthTexture=G}if(d.depthTexture&&!a.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");const G=d.texture.mipmaps;G&&G.length>0?Se(a.__webglFramebuffer[0],d):Se(a.__webglFramebuffer,d)}else if(P){a.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[G]),a.__webglDepthbuffer[G]===void 0)a.__webglDepthbuffer[G]=e.createRenderbuffer(),be(a.__webglDepthbuffer[G],d,!1);else{const Y=d.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=a.__webglDepthbuffer[G];e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,F)}}else{const G=d.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),a.__webglDepthbuffer===void 0)a.__webglDepthbuffer=e.createRenderbuffer(),be(a.__webglDepthbuffer,d,!1);else{const Y=d.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=a.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,F)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function ot(d,a,P){const G=i.get(d);a!==void 0&&ce(G.__webglFramebuffer,d,d.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&Ne(d)}function m(d){const a=d.texture,P=i.get(d),G=i.get(a);d.addEventListener("dispose",y);const Y=d.textures,F=d.isWebGLCubeRenderTarget===!0,ge=Y.length>1;if(ge||(G.__webglTexture===void 0&&(G.__webglTexture=e.createTexture()),G.__version=a.version,h.memory.textures++),F){P.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(a.mipmaps&&a.mipmaps.length>0){P.__webglFramebuffer[ee]=[];for(let he=0;he<a.mipmaps.length;he++)P.__webglFramebuffer[ee][he]=e.createFramebuffer()}else P.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(a.mipmaps&&a.mipmaps.length>0){P.__webglFramebuffer=[];for(let ee=0;ee<a.mipmaps.length;ee++)P.__webglFramebuffer[ee]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(ge)for(let ee=0,he=Y.length;ee<he;ee++){const me=i.get(Y[ee]);me.__webglTexture===void 0&&(me.__webglTexture=e.createTexture(),h.memory.textures++)}if(d.samples>0&&pe(d)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ee=0;ee<Y.length;ee++){const he=Y[ee];P.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[ee]);const me=o.convert(he.format,he.colorSpace),J=o.convert(he.type),oe=R(he.internalFormat,me,J,he.colorSpace,d.isXRRenderTarget===!0),Ae=$e(d);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae,oe,d.width,d.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,P.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),d.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),be(P.__webglDepthRenderbuffer,d,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(F){t.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture),Ge(e.TEXTURE_CUBE_MAP,a);for(let ee=0;ee<6;ee++)if(a.mipmaps&&a.mipmaps.length>0)for(let he=0;he<a.mipmaps.length;he++)ce(P.__webglFramebuffer[ee][he],d,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he);else ce(P.__webglFramebuffer[ee],d,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);c(a)&&r(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ee=0,he=Y.length;ee<he;ee++){const me=Y[ee],J=i.get(me);let oe=e.TEXTURE_2D;(d.isWebGL3DRenderTarget||d.isWebGLArrayRenderTarget)&&(oe=d.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(oe,J.__webglTexture),Ge(oe,me),ce(P.__webglFramebuffer,d,me,e.COLOR_ATTACHMENT0+ee,oe,0),c(me)&&r(oe)}t.unbindTexture()}else{let ee=e.TEXTURE_2D;if((d.isWebGL3DRenderTarget||d.isWebGLArrayRenderTarget)&&(ee=d.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ee,G.__webglTexture),Ge(ee,a),a.mipmaps&&a.mipmaps.length>0)for(let he=0;he<a.mipmaps.length;he++)ce(P.__webglFramebuffer[he],d,a,e.COLOR_ATTACHMENT0,ee,he);else ce(P.__webglFramebuffer,d,a,e.COLOR_ATTACHMENT0,ee,0);c(a)&&r(ee),t.unbindTexture()}d.depthBuffer&&Ne(d)}function Ke(d){const a=d.textures;for(let P=0,G=a.length;P<G;P++){const Y=a[P];if(c(Y)){const F=D(d),ge=i.get(Y).__webglTexture;t.bindTexture(F,ge),r(F),t.unbindTexture()}}}const Le=[],Re=[];function de(d){if(d.samples>0){if(pe(d)===!1){const a=d.textures,P=d.width,G=d.height;let Y=e.COLOR_BUFFER_BIT;const F=d.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ge=i.get(d),ee=a.length>1;if(ee)for(let me=0;me<a.length;me++)t.bindFramebuffer(e.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,ge.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const he=d.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let me=0;me<a.length;me++){if(d.resolveDepthBuffer&&(d.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),d.stencilBuffer&&d.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ge.__webglColorRenderbuffer[me]);const J=i.get(a[me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,J,0)}e.blitFramebuffer(0,0,P,G,0,0,P,G,Y,e.NEAREST),A===!0&&(Le.length=0,Re.length=0,Le.push(e.COLOR_ATTACHMENT0+me),d.depthBuffer&&d.resolveDepthBuffer===!1&&(Le.push(F),Re.push(F),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Re)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let me=0;me<a.length;me++){t.bindFramebuffer(e.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,ge.__webglColorRenderbuffer[me]);const J=i.get(a[me]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,ge.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,J,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(d.depthBuffer&&d.resolveDepthBuffer===!1&&A){const a=d.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[a])}}}function $e(d){return Math.min(s.maxSamples,d.samples)}function pe(d){const a=i.get(d);return d.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&a.__useRenderToTexture!==!1}function we(d){const a=h.render.frame;L.get(d)!==a&&(L.set(d,a),d.update())}function at(d,a){const P=d.colorSpace,G=d.format,Y=d.type;return d.isCompressedTexture===!0||d.isVideoTexture===!0||P!==hn&&P!==Ft&&(nt.getTransfer(P)===qe?(G!==xt||Y!==yt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),a}function tt(d){return typeof HTMLImageElement<"u"&&d instanceof HTMLImageElement?(g.width=d.naturalWidth||d.width,g.height=d.naturalHeight||d.height):typeof VideoFrame<"u"&&d instanceof VideoFrame?(g.width=d.displayWidth,g.height=d.displayHeight):(g.width=d.width,g.height=d.height),g}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=ne,this.setTextureCube=H,this.rebindTextures=ot,this.setupRenderTarget=m,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=pe}function Xf(e,n){function t(i,s=Ft){let o;const h=nt.getTransfer(s);if(i===yt)return e.UNSIGNED_BYTE;if(i===mr)return e.UNSIGNED_SHORT_4_4_4_4;if(i===_r)return e.UNSIGNED_SHORT_5_5_5_1;if(i===xa)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Ta)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Aa)return e.BYTE;if(i===Ra)return e.SHORT;if(i===dn)return e.UNSIGNED_SHORT;if(i===Sr)return e.INT;if(i===Qt)return e.UNSIGNED_INT;if(i===wt)return e.FLOAT;if(i===pn)return e.HALF_FLOAT;if(i===Ca)return e.ALPHA;if(i===ba)return e.RGB;if(i===xt)return e.RGBA;if(i===Yn)return e.DEPTH_COMPONENT;if(i===fn)return e.DEPTH_STENCIL;if(i===Pa)return e.RED;if(i===Er)return e.RED_INTEGER;if(i===La)return e.RG;if(i===Mr)return e.RG_INTEGER;if(i===xr)return e.RGBA_INTEGER;if(i===Mn||i===xn||i===Tn||i===An)if(h===qe)if(o=n.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Mn)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===An)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=n.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Mn)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xn)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tn)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===An)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ni||i===ii||i===ri||i===ai)if(o=n.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ni)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ii)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ri)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ai)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oi||i===si||i===li)if(o=n.get("WEBGL_compressed_texture_etc"),o!==null){if(i===oi||i===si)return h===qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===li)return h===qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ci||i===fi||i===ui||i===di||i===pi||i===hi||i===mi||i===_i||i===vi||i===gi||i===Si||i===Ei||i===Mi||i===xi)if(o=n.get("WEBGL_compressed_texture_astc"),o!==null){if(i===ci)return h===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fi)return h===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ui)return h===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===di)return h===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pi)return h===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hi)return h===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mi)return h===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_i)return h===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vi)return h===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gi)return h===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Si)return h===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ei)return h===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mi)return h===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xi)return h===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ti||i===Ai||i===Ri)if(o=n.get("EXT_texture_compression_bptc"),o!==null){if(i===Ti)return h===qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ai)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ri)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ci||i===bi||i===Pi||i===Li)if(o=n.get("EXT_texture_compression_rgtc"),o!==null){if(i===Ci)return o.COMPRESSED_RED_RGTC1_EXT;if(i===bi)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pi)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Li)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zt?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const qf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yf=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Kf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new vr(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Rt({vertexShader:qf,fragmentShader:Yf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new gr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $f extends Wr{constructor(n,t){super();const i=this;let s=null,o=1,h=null,f="local-floor",A=1,g=null,L=null,S=null,E=null,M=null,O=null;const U=typeof XRWebGLBinding<"u",c=new Kf,r={},D=t.getContextAttributes();let R=null,_=null;const N=[],b=[],y=new ut;let z=null;const p=new on;p.viewport=new lt;const u=new on;u.viewport=new lt;const C=[p,u],B=new Xr;let X=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=N[V];return K===void 0&&(K=new Sn,N[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=N[V];return K===void 0&&(K=new Sn,N[V]=K),K.getGripSpace()},this.getHand=function(V){let K=N[V];return K===void 0&&(K=new Sn,N[V]=K),K.getHandSpace()};function $(V){const K=b.indexOf(V.inputSource);if(K===-1)return;const ce=N[K];ce!==void 0&&(ce.update(V.inputSource,V.frame,g||h),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ne);for(let V=0;V<N.length;V++){const K=b[V];K!==null&&(b[V]=null,N[V].disconnect(K))}X=null,q=null,c.reset();for(const V in r)delete r[V];n.setRenderTarget(R),M=null,E=null,S=null,s=null,_=null,ke.stop(),i.isPresenting=!1,n.setPixelRatio(z),n.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){f=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(V){g=V},this.getBaseLayer=function(){return E!==null?E:M},this.getBinding=function(){return S===null&&U&&(S=new XRWebGLBinding(s,t)),S},this.getFrame=function(){return O},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(R=n.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ne),D.xrCompatible!==!0&&await t.makeXRCompatible(),z=n.getPixelRatio(),n.getSize(y),U&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,be=null,Se=null;D.depth&&(Se=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=D.stencil?fn:Yn,be=D.stencil?Zt:Qt);const Ne={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:o};S=this.getBinding(),E=S.createProjectionLayer(Ne),s.updateRenderState({layers:[E]}),n.setPixelRatio(1),n.setSize(E.textureWidth,E.textureHeight,!1),_=new Ht(E.textureWidth,E.textureHeight,{format:xt,type:yt,depthTexture:new cr(E.textureWidth,E.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:D.stencil,colorSpace:n.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}else{const ce={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:o};M=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:M}),n.setPixelRatio(1),n.setSize(M.framebufferWidth,M.framebufferHeight,!1),_=new Ht(M.framebufferWidth,M.framebufferHeight,{format:xt,type:yt,colorSpace:n.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(A),g=null,h=await s.requestReferenceSpace(f),ke.setContext(s),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function ne(V){for(let K=0;K<V.removed.length;K++){const ce=V.removed[K],be=b.indexOf(ce);be>=0&&(b[be]=null,N[be].disconnect(ce))}for(let K=0;K<V.added.length;K++){const ce=V.added[K];let be=b.indexOf(ce);if(be===-1){for(let Ne=0;Ne<N.length;Ne++)if(Ne>=b.length){b.push(ce),be=Ne;break}else if(b[Ne]===null){b[Ne]=ce,be=Ne;break}if(be===-1)break}const Se=N[be];Se&&Se.connect(ce)}}const H=new Oe,ve=new Oe;function xe(V,K,ce){H.setFromMatrixPosition(K.matrixWorld),ve.setFromMatrixPosition(ce.matrixWorld);const be=H.distanceTo(ve),Se=K.projectionMatrix.elements,Ne=ce.projectionMatrix.elements,ot=Se[14]/(Se[10]-1),m=Se[14]/(Se[10]+1),Ke=(Se[9]+1)/Se[5],Le=(Se[9]-1)/Se[5],Re=(Se[8]-1)/Se[0],de=(Ne[8]+1)/Ne[0],$e=ot*Re,pe=ot*de,we=be/(-Re+de),at=we*-Re;if(K.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(at),V.translateZ(we),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Se[10]===-1)V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const tt=ot+we,d=m+we,a=$e-at,P=pe+(be-at),G=Ke*m/d*tt,Y=Le*m/d*tt;V.projectionMatrix.makePerspective(a,P,G,Y,tt,d),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function De(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let K=V.near,ce=V.far;c.texture!==null&&(c.depthNear>0&&(K=c.depthNear),c.depthFar>0&&(ce=c.depthFar)),B.near=u.near=p.near=K,B.far=u.far=p.far=ce,(X!==B.near||q!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),X=B.near,q=B.far),B.layers.mask=V.layers.mask|6,p.layers.mask=B.layers.mask&3,u.layers.mask=B.layers.mask&5;const be=V.parent,Se=B.cameras;De(B,be);for(let Ne=0;Ne<Se.length;Ne++)De(Se[Ne],be);Se.length===2?xe(B,p,u):B.projectionMatrix.copy(p.projectionMatrix),Ge(V,B,be)};function Ge(V,K,ce){ce===null?V.matrix.copy(K.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply(K.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(K.projectionMatrix),V.projectionMatrixInverse.copy(K.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=qr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(E===null&&M===null))return A},this.setFoveation=function(V){A=V,E!==null&&(E.fixedFoveation=V),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=V)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(B)},this.getCameraTexture=function(V){return r[V]};let et=null;function Je(V,K){if(L=K.getViewerPose(g||h),O=K,L!==null){const ce=L.views;M!==null&&(n.setRenderTargetFramebuffer(_,M.framebuffer),n.setRenderTarget(_));let be=!1;ce.length!==B.cameras.length&&(B.cameras.length=0,be=!0);for(let m=0;m<ce.length;m++){const Ke=ce[m];let Le=null;if(M!==null)Le=M.getViewport(Ke);else{const de=S.getViewSubImage(E,Ke);Le=de.viewport,m===0&&(n.setRenderTargetTextures(_,de.colorTexture,de.depthStencilTexture),n.setRenderTarget(_))}let Re=C[m];Re===void 0&&(Re=new on,Re.layers.enable(m),Re.viewport=new lt,C[m]=Re),Re.matrix.fromArray(Ke.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ke.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Le.x,Le.y,Le.width,Le.height),m===0&&(B.matrix.copy(Re.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),be===!0&&B.cameras.push(Re)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&U){S=i.getBinding();const m=S.getDepthInformation(ce[0]);m&&m.isValid&&m.texture&&c.init(m,s.renderState)}if(Se&&Se.includes("camera-access")&&U){n.state.unbindTexture(),S=i.getBinding();for(let m=0;m<ce.length;m++){const Ke=ce[m].camera;if(Ke){let Le=r[Ke];Le||(Le=new vr,r[Ke]=Le);const Re=S.getCameraImage(Ke);Le.sourceTexture=Re}}}}for(let ce=0;ce<N.length;ce++){const be=b[ce],Se=N[ce];be!==null&&Se!==void 0&&Se.update(be,K,g||h)}et&&et(V,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),O=null}const ke=new Lr;ke.setAnimationLoop(Je),this.setAnimationLoop=function(V){et=V},this.dispose=function(){}}}const Lt=new br,Zf=new Kt;function Qf(e,n){function t(c,r){c.matrixAutoUpdate===!0&&c.updateMatrix(),r.value.copy(c.matrix)}function i(c,r){r.color.getRGB(c.fogColor.value,Rr(e)),r.isFog?(c.fogNear.value=r.near,c.fogFar.value=r.far):r.isFogExp2&&(c.fogDensity.value=r.density)}function s(c,r,D,R,_){r.isMeshBasicMaterial||r.isMeshLambertMaterial?o(c,r):r.isMeshToonMaterial?(o(c,r),S(c,r)):r.isMeshPhongMaterial?(o(c,r),L(c,r)):r.isMeshStandardMaterial?(o(c,r),E(c,r),r.isMeshPhysicalMaterial&&M(c,r,_)):r.isMeshMatcapMaterial?(o(c,r),O(c,r)):r.isMeshDepthMaterial?o(c,r):r.isMeshDistanceMaterial?(o(c,r),U(c,r)):r.isMeshNormalMaterial?o(c,r):r.isLineBasicMaterial?(h(c,r),r.isLineDashedMaterial&&f(c,r)):r.isPointsMaterial?A(c,r,D,R):r.isSpriteMaterial?g(c,r):r.isShadowMaterial?(c.color.value.copy(r.color),c.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}function o(c,r){c.opacity.value=r.opacity,r.color&&c.diffuse.value.copy(r.color),r.emissive&&c.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(c.map.value=r.map,t(r.map,c.mapTransform)),r.alphaMap&&(c.alphaMap.value=r.alphaMap,t(r.alphaMap,c.alphaMapTransform)),r.bumpMap&&(c.bumpMap.value=r.bumpMap,t(r.bumpMap,c.bumpMapTransform),c.bumpScale.value=r.bumpScale,r.side===_t&&(c.bumpScale.value*=-1)),r.normalMap&&(c.normalMap.value=r.normalMap,t(r.normalMap,c.normalMapTransform),c.normalScale.value.copy(r.normalScale),r.side===_t&&c.normalScale.value.negate()),r.displacementMap&&(c.displacementMap.value=r.displacementMap,t(r.displacementMap,c.displacementMapTransform),c.displacementScale.value=r.displacementScale,c.displacementBias.value=r.displacementBias),r.emissiveMap&&(c.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,c.emissiveMapTransform)),r.specularMap&&(c.specularMap.value=r.specularMap,t(r.specularMap,c.specularMapTransform)),r.alphaTest>0&&(c.alphaTest.value=r.alphaTest);const D=n.get(r),R=D.envMap,_=D.envMapRotation;R&&(c.envMap.value=R,Lt.copy(_),Lt.x*=-1,Lt.y*=-1,Lt.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Lt.y*=-1,Lt.z*=-1),c.envMapRotation.value.setFromMatrix4(Zf.makeRotationFromEuler(Lt)),c.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,c.reflectivity.value=r.reflectivity,c.ior.value=r.ior,c.refractionRatio.value=r.refractionRatio),r.lightMap&&(c.lightMap.value=r.lightMap,c.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,c.lightMapTransform)),r.aoMap&&(c.aoMap.value=r.aoMap,c.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,c.aoMapTransform))}function h(c,r){c.diffuse.value.copy(r.color),c.opacity.value=r.opacity,r.map&&(c.map.value=r.map,t(r.map,c.mapTransform))}function f(c,r){c.dashSize.value=r.dashSize,c.totalSize.value=r.dashSize+r.gapSize,c.scale.value=r.scale}function A(c,r,D,R){c.diffuse.value.copy(r.color),c.opacity.value=r.opacity,c.size.value=r.size*D,c.scale.value=R*.5,r.map&&(c.map.value=r.map,t(r.map,c.uvTransform)),r.alphaMap&&(c.alphaMap.value=r.alphaMap,t(r.alphaMap,c.alphaMapTransform)),r.alphaTest>0&&(c.alphaTest.value=r.alphaTest)}function g(c,r){c.diffuse.value.copy(r.color),c.opacity.value=r.opacity,c.rotation.value=r.rotation,r.map&&(c.map.value=r.map,t(r.map,c.mapTransform)),r.alphaMap&&(c.alphaMap.value=r.alphaMap,t(r.alphaMap,c.alphaMapTransform)),r.alphaTest>0&&(c.alphaTest.value=r.alphaTest)}function L(c,r){c.specular.value.copy(r.specular),c.shininess.value=Math.max(r.shininess,1e-4)}function S(c,r){r.gradientMap&&(c.gradientMap.value=r.gradientMap)}function E(c,r){c.metalness.value=r.metalness,r.metalnessMap&&(c.metalnessMap.value=r.metalnessMap,t(r.metalnessMap,c.metalnessMapTransform)),c.roughness.value=r.roughness,r.roughnessMap&&(c.roughnessMap.value=r.roughnessMap,t(r.roughnessMap,c.roughnessMapTransform)),r.envMap&&(c.envMapIntensity.value=r.envMapIntensity)}function M(c,r,D){c.ior.value=r.ior,r.sheen>0&&(c.sheenColor.value.copy(r.sheenColor).multiplyScalar(r.sheen),c.sheenRoughness.value=r.sheenRoughness,r.sheenColorMap&&(c.sheenColorMap.value=r.sheenColorMap,t(r.sheenColorMap,c.sheenColorMapTransform)),r.sheenRoughnessMap&&(c.sheenRoughnessMap.value=r.sheenRoughnessMap,t(r.sheenRoughnessMap,c.sheenRoughnessMapTransform))),r.clearcoat>0&&(c.clearcoat.value=r.clearcoat,c.clearcoatRoughness.value=r.clearcoatRoughness,r.clearcoatMap&&(c.clearcoatMap.value=r.clearcoatMap,t(r.clearcoatMap,c.clearcoatMapTransform)),r.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=r.clearcoatRoughnessMap,t(r.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),r.clearcoatNormalMap&&(c.clearcoatNormalMap.value=r.clearcoatNormalMap,t(r.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(r.clearcoatNormalScale),r.side===_t&&c.clearcoatNormalScale.value.negate())),r.dispersion>0&&(c.dispersion.value=r.dispersion),r.iridescence>0&&(c.iridescence.value=r.iridescence,c.iridescenceIOR.value=r.iridescenceIOR,c.iridescenceThicknessMinimum.value=r.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=r.iridescenceThicknessRange[1],r.iridescenceMap&&(c.iridescenceMap.value=r.iridescenceMap,t(r.iridescenceMap,c.iridescenceMapTransform)),r.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=r.iridescenceThicknessMap,t(r.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),r.transmission>0&&(c.transmission.value=r.transmission,c.transmissionSamplerMap.value=D.texture,c.transmissionSamplerSize.value.set(D.width,D.height),r.transmissionMap&&(c.transmissionMap.value=r.transmissionMap,t(r.transmissionMap,c.transmissionMapTransform)),c.thickness.value=r.thickness,r.thicknessMap&&(c.thicknessMap.value=r.thicknessMap,t(r.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=r.attenuationDistance,c.attenuationColor.value.copy(r.attenuationColor)),r.anisotropy>0&&(c.anisotropyVector.value.set(r.anisotropy*Math.cos(r.anisotropyRotation),r.anisotropy*Math.sin(r.anisotropyRotation)),r.anisotropyMap&&(c.anisotropyMap.value=r.anisotropyMap,t(r.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=r.specularIntensity,c.specularColor.value.copy(r.specularColor),r.specularColorMap&&(c.specularColorMap.value=r.specularColorMap,t(r.specularColorMap,c.specularColorMapTransform)),r.specularIntensityMap&&(c.specularIntensityMap.value=r.specularIntensityMap,t(r.specularIntensityMap,c.specularIntensityMapTransform))}function O(c,r){r.matcap&&(c.matcap.value=r.matcap)}function U(c,r){const D=n.get(r).light;c.referencePosition.value.setFromMatrixPosition(D.matrixWorld),c.nearDistance.value=D.shadow.camera.near,c.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Jf(e,n,t,i){let s={},o={},h=[];const f=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function A(D,R){const _=R.program;i.uniformBlockBinding(D,_)}function g(D,R){let _=s[D.id];_===void 0&&(O(D),_=L(D),s[D.id]=_,D.addEventListener("dispose",c));const N=R.program;i.updateUBOMapping(D,N);const b=n.render.frame;o[D.id]!==b&&(E(D),o[D.id]=b)}function L(D){const R=S();D.__bindingPointIndex=R;const _=e.createBuffer(),N=D.__size,b=D.usage;return e.bindBuffer(e.UNIFORM_BUFFER,_),e.bufferData(e.UNIFORM_BUFFER,N,b),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,R,_),_}function S(){for(let D=0;D<f;D++)if(h.indexOf(D)===-1)return h.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(D){const R=s[D.id],_=D.uniforms,N=D.__cache;e.bindBuffer(e.UNIFORM_BUFFER,R);for(let b=0,y=_.length;b<y;b++){const z=Array.isArray(_[b])?_[b]:[_[b]];for(let p=0,u=z.length;p<u;p++){const C=z[p];if(M(C,b,p,N)===!0){const B=C.__offset,X=Array.isArray(C.value)?C.value:[C.value];let q=0;for(let $=0;$<X.length;$++){const W=X[$],ne=U(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,B+q,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,q),q+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function M(D,R,_,N){const b=D.value,y=R+"_"+_;if(N[y]===void 0)return typeof b=="number"||typeof b=="boolean"?N[y]=b:N[y]=b.clone(),!0;{const z=N[y];if(typeof b=="number"||typeof b=="boolean"){if(z!==b)return N[y]=b,!0}else if(z.equals(b)===!1)return z.copy(b),!0}return!1}function O(D){const R=D.uniforms;let _=0;const N=16;for(let y=0,z=R.length;y<z;y++){const p=Array.isArray(R[y])?R[y]:[R[y]];for(let u=0,C=p.length;u<C;u++){const B=p[u],X=Array.isArray(B.value)?B.value:[B.value];for(let q=0,$=X.length;q<$;q++){const W=X[q],ne=U(W),H=_%N,ve=H%ne.boundary,xe=H+ve;_+=ve,xe!==0&&N-xe<ne.storage&&(_+=N-xe),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=ne.storage}}}const b=_%N;return b>0&&(_+=N-b),D.__size=_,D.__cache={},this}function U(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),R}function c(D){const R=D.target;R.removeEventListener("dispose",c);const _=h.indexOf(R.__bindingPointIndex);h.splice(_,1),e.deleteBuffer(s[R.id]),delete s[R.id],delete o[R.id]}function r(){for(const D in s)e.deleteBuffer(s[D]);h=[],s={},o={}}return{bind:A,update:g,dispose:r}}class uu{constructor(n={}){const{canvas:t=Hr(),context:i=null,depth:s=!0,stencil:o=!1,alpha:h=!1,antialias:f=!1,premultipliedAlpha:A=!0,preserveDrawingBuffer:g=!1,powerPreference:L="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:E=!1}=n;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=h;const O=new Uint32Array(4),U=new Int32Array(4);let c=null,r=null;const D=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=At,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let N=!1;this._outputColorSpace=Vr;let b=0,y=0,z=null,p=-1,u=null;const C=new lt,B=new lt;let X=null;const q=new Ye(0);let $=0,W=t.width,ne=t.height,H=1,ve=null,xe=null;const De=new lt(0,0,W,ne),Ge=new lt(0,0,W,ne);let et=!1;const Je=new lr;let ke=!1,V=!1;const K=new Kt,ce=new Oe,be=new lt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function ot(){return z===null?H:1}let m=i;function Ke(l,x){return t.getContext(l,x)}try{const l={alpha:!0,depth:s,stencil:o,antialias:f,premultipliedAlpha:A,preserveDrawingBuffer:g,powerPreference:L,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kr}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",Z,!1),m===null){const x="webgl2";if(m=Ke(x,l),m===null)throw Ke(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(l){throw console.error("THREE.WebGLRenderer: "+l.message),l}let Le,Re,de,$e,pe,we,at,tt,d,a,P,G,Y,F,ge,ee,he,me,J,oe,Ae,_e,re,Ue;function v(){Le=new lc(m),Le.init(),_e=new Xf(m,Le),Re=new tc(m,Le,n,_e),de=new zf(m,Le),Re.reversedDepthBuffer&&E&&de.buffers.depth.setReversed(!0),$e=new uc(m),pe=new Uf,we=new Wf(m,Le,de,pe,Re,_e,$e),at=new ic(_),tt=new sc(_),d=new vo(m),re=new jl(m,d),a=new cc(m,d,$e,re),P=new pc(m,a,d,$e),J=new dc(m,Re,we),ee=new nc(pe),G=new Lf(_,at,tt,Le,Re,re,ee),Y=new Qf(_,pe),F=new wf,ge=new Bf(Le),me=new Jl(_,at,tt,de,P,M,A),he=new Vf(_,P,Re),Ue=new Jf(m,$e,Re,de),oe=new ec(m,Le,$e),Ae=new fc(m,Le,$e),$e.programs=G.programs,_.capabilities=Re,_.extensions=Le,_.properties=pe,_.renderLists=F,_.shadowMap=he,_.state=de,_.info=$e}v();const j=new $f(_,m);this.xr=j,this.getContext=function(){return m},this.getContextAttributes=function(){return m.getContextAttributes()},this.forceContextLoss=function(){const l=Le.get("WEBGL_lose_context");l&&l.loseContext()},this.forceContextRestore=function(){const l=Le.get("WEBGL_lose_context");l&&l.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(l){l!==void 0&&(H=l,this.setSize(W,ne,!1))},this.getSize=function(l){return l.set(W,ne)},this.setSize=function(l,x,w=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=l,ne=x,t.width=Math.floor(l*H),t.height=Math.floor(x*H),w===!0&&(t.style.width=l+"px",t.style.height=x+"px"),this.setViewport(0,0,l,x)},this.getDrawingBufferSize=function(l){return l.set(W*H,ne*H).floor()},this.setDrawingBufferSize=function(l,x,w){W=l,ne=x,H=w,t.width=Math.floor(l*w),t.height=Math.floor(x*w),this.setViewport(0,0,l,x)},this.getCurrentViewport=function(l){return l.copy(C)},this.getViewport=function(l){return l.copy(De)},this.setViewport=function(l,x,w,I){l.isVector4?De.set(l.x,l.y,l.z,l.w):De.set(l,x,w,I),de.viewport(C.copy(De).multiplyScalar(H).round())},this.getScissor=function(l){return l.copy(Ge)},this.setScissor=function(l,x,w,I){l.isVector4?Ge.set(l.x,l.y,l.z,l.w):Ge.set(l,x,w,I),de.scissor(B.copy(Ge).multiplyScalar(H).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(l){de.setScissorTest(et=l)},this.setOpaqueSort=function(l){ve=l},this.setTransparentSort=function(l){xe=l},this.getClearColor=function(l){return l.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(l=!0,x=!0,w=!0){let I=0;if(l){let T=!1;if(z!==null){const Q=z.texture.format;T=Q===xr||Q===Mr||Q===Er}if(T){const Q=z.texture.type,ae=Q===yt||Q===Qt||Q===dn||Q===Zt||Q===mr||Q===_r,fe=me.getClearColor(),se=me.getClearAlpha(),Te=fe.r,Ce=fe.g,Ee=fe.b;ae?(O[0]=Te,O[1]=Ce,O[2]=Ee,O[3]=se,m.clearBufferuiv(m.COLOR,0,O)):(U[0]=Te,U[1]=Ce,U[2]=Ee,U[3]=se,m.clearBufferiv(m.COLOR,0,U))}else I|=m.COLOR_BUFFER_BIT}x&&(I|=m.DEPTH_BUFFER_BIT),w&&(I|=m.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),m.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),me.dispose(),F.dispose(),ge.dispose(),pe.dispose(),at.dispose(),tt.dispose(),P.dispose(),re.dispose(),Ue.dispose(),G.dispose(),j.dispose(),j.removeEventListener("sessionstart",vt),j.removeEventListener("sessionend",$n),Ct.stop()};function te(l){l.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const l=$e.autoReset,x=he.enabled,w=he.autoUpdate,I=he.needsUpdate,T=he.type;v(),$e.autoReset=l,he.enabled=x,he.autoUpdate=w,he.needsUpdate=I,he.type=T}function Z(l){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",l.statusMessage)}function k(l){const x=l.target;x.removeEventListener("dispose",k),ue(x)}function ue(l){Pe(l),pe.remove(l)}function Pe(l){const x=pe.get(l).programs;x!==void 0&&(x.forEach(function(w){G.releaseProgram(w)}),l.isShaderMaterial&&G.releaseShaderCache(l))}this.renderBufferDirect=function(l,x,w,I,T,Q){x===null&&(x=Se);const ae=T.isMesh&&T.matrixWorld.determinant()<0,fe=yr(l,x,w,I,T);de.setMaterial(I,ae);let se=w.index,Te=1;if(I.wireframe===!0){if(se=a.getWireframeAttribute(w),se===void 0)return;Te=2}const Ce=w.drawRange,Ee=w.attributes.position;let ye=Ce.start*Te,Ve=(Ce.start+Ce.count)*Te;Q!==null&&(ye=Math.max(ye,Q.start*Te),Ve=Math.min(Ve,(Q.start+Q.count)*Te)),se!==null?(ye=Math.max(ye,0),Ve=Math.min(Ve,se.count)):Ee!=null&&(ye=Math.max(ye,0),Ve=Math.min(Ve,Ee.count));const je=Ve-ye;if(je<0||je===1/0)return;re.setup(T,I,fe,w,se);let Xe,ze=oe;if(se!==null&&(Xe=d.get(se),ze=Ae,ze.setIndex(Xe)),T.isMesh)I.wireframe===!0?(de.setLineWidth(I.wireframeLinewidth*ot()),ze.setMode(m.LINES)):ze.setMode(m.TRIANGLES);else if(T.isLine){let Me=I.linewidth;Me===void 0&&(Me=1),de.setLineWidth(Me*ot()),T.isLineSegments?ze.setMode(m.LINES):T.isLineLoop?ze.setMode(m.LINE_LOOP):ze.setMode(m.LINE_STRIP)}else T.isPoints?ze.setMode(m.POINTS):T.isSprite&&ze.setMode(m.TRIANGLES);if(T.isBatchedMesh)if(T._multiDrawInstances!==null)Nn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ze.renderMultiDrawInstances(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount,T._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))ze.renderMultiDraw(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount);else{const Me=T._multiDrawStarts,Ze=T._multiDrawCounts,Be=T._multiDrawCount,dt=se?d.get(se).bytesPerElement:1,Nt=pe.get(I).currentProgram.getUniforms();for(let pt=0;pt<Be;pt++)Nt.setValue(m,"_gl_DrawID",pt),ze.render(Me[pt]/dt,Ze[pt])}else if(T.isInstancedMesh)ze.renderInstances(ye,je,T.count);else if(w.isInstancedBufferGeometry){const Me=w._maxInstanceCount!==void 0?w._maxInstanceCount:1/0,Ze=Math.min(w.instanceCount,Me);ze.renderInstances(ye,je,Ze)}else ze.render(ye,je)};function We(l,x,w){l.transparent===!0&&l.side===Mt&&l.forceSinglePass===!1?(l.side=_t,l.needsUpdate=!0,en(l,x,w),l.side=$t,l.needsUpdate=!0,en(l,x,w),l.side=Mt):en(l,x,w)}this.compile=function(l,x,w=null){w===null&&(w=l),r=ge.get(w),r.init(x),R.push(r),w.traverseVisible(function(T){T.isLight&&T.layers.test(x.layers)&&(r.pushLight(T),T.castShadow&&r.pushShadow(T))}),l!==w&&l.traverseVisible(function(T){T.isLight&&T.layers.test(x.layers)&&(r.pushLight(T),T.castShadow&&r.pushShadow(T))}),r.setupLights();const I=new Set;return l.traverse(function(T){if(!(T.isMesh||T.isPoints||T.isLine||T.isSprite))return;const Q=T.material;if(Q)if(Array.isArray(Q))for(let ae=0;ae<Q.length;ae++){const fe=Q[ae];We(fe,w,T),I.add(fe)}else We(Q,w,T),I.add(Q)}),r=R.pop(),I},this.compileAsync=function(l,x,w=null){const I=this.compile(l,x,w);return new Promise(T=>{function Q(){if(I.forEach(function(ae){pe.get(ae).currentProgram.isReady()&&I.delete(ae)}),I.size===0){T(l);return}setTimeout(Q,10)}Le.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let He=null;function St(l){He&&He(l)}function vt(){Ct.stop()}function $n(){Ct.start()}const Ct=new Lr;Ct.setAnimationLoop(St),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(l){He=l,j.setAnimationLoop(l),l===null?Ct.stop():Ct.start()},j.addEventListener("sessionstart",vt),j.addEventListener("sessionend",$n),this.render=function(l,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(l.matrixWorldAutoUpdate===!0&&l.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(x),x=j.getCamera()),l.isScene===!0&&l.onBeforeRender(_,l,x,z),r=ge.get(l,R.length),r.init(x),R.push(r),K.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),Je.setFromProjectionMatrix(K,ti,x.reversedDepth),V=this.localClippingEnabled,ke=ee.init(this.clippingPlanes,V),c=F.get(l,D.length),c.init(),D.push(c),j.enabled===!0&&j.isPresenting===!0){const Q=_.xr.getDepthSensingMesh();Q!==null&&vn(Q,x,-1/0,_.sortObjects)}vn(l,x,0,_.sortObjects),c.finish(),_.sortObjects===!0&&c.sort(ve,xe),Ne=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ne&&me.addToRenderList(c,l),this.info.render.frame++,ke===!0&&ee.beginShadows();const w=r.state.shadowsArray;he.render(w,l,x),ke===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const I=c.opaque,T=c.transmissive;if(r.setupLights(),x.isArrayCamera){const Q=x.cameras;if(T.length>0)for(let ae=0,fe=Q.length;ae<fe;ae++){const se=Q[ae];Qn(I,T,l,se)}Ne&&me.render(l);for(let ae=0,fe=Q.length;ae<fe;ae++){const se=Q[ae];Zn(c,l,se,se.viewport)}}else T.length>0&&Qn(I,T,l,x),Ne&&me.render(l),Zn(c,l,x);z!==null&&y===0&&(we.updateMultisampleRenderTarget(z),we.updateRenderTargetMipmap(z)),l.isScene===!0&&l.onAfterRender(_,l,x),re.resetDefaultState(),p=-1,u=null,R.pop(),R.length>0?(r=R[R.length-1],ke===!0&&ee.setGlobalState(_.clippingPlanes,r.state.camera)):r=null,D.pop(),D.length>0?c=D[D.length-1]:c=null};function vn(l,x,w,I){if(l.visible===!1)return;if(l.layers.test(x.layers)){if(l.isGroup)w=l.renderOrder;else if(l.isLOD)l.autoUpdate===!0&&l.update(x);else if(l.isLight)r.pushLight(l),l.castShadow&&r.pushShadow(l);else if(l.isSprite){if(!l.frustumCulled||Je.intersectsSprite(l)){I&&be.setFromMatrixPosition(l.matrixWorld).applyMatrix4(K);const ae=P.update(l),fe=l.material;fe.visible&&c.push(l,ae,fe,w,be.z,null)}}else if((l.isMesh||l.isLine||l.isPoints)&&(!l.frustumCulled||Je.intersectsObject(l))){const ae=P.update(l),fe=l.material;if(I&&(l.boundingSphere!==void 0?(l.boundingSphere===null&&l.computeBoundingSphere(),be.copy(l.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),be.copy(ae.boundingSphere.center)),be.applyMatrix4(l.matrixWorld).applyMatrix4(K)),Array.isArray(fe)){const se=ae.groups;for(let Te=0,Ce=se.length;Te<Ce;Te++){const Ee=se[Te],ye=fe[Ee.materialIndex];ye&&ye.visible&&c.push(l,ae,ye,w,be.z,Ee)}}else fe.visible&&c.push(l,ae,fe,w,be.z,null)}}const Q=l.children;for(let ae=0,fe=Q.length;ae<fe;ae++)vn(Q[ae],x,w,I)}function Zn(l,x,w,I){const T=l.opaque,Q=l.transmissive,ae=l.transparent;r.setupLightsView(w),ke===!0&&ee.setGlobalState(_.clippingPlanes,w),I&&de.viewport(C.copy(I)),T.length>0&&jt(T,x,w),Q.length>0&&jt(Q,x,w),ae.length>0&&jt(ae,x,w),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Qn(l,x,w,I){if((w.isScene===!0?w.overrideMaterial:null)!==null)return;r.state.transmissionRenderTarget[I.id]===void 0&&(r.state.transmissionRenderTarget[I.id]=new Ht(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?pn:yt,minFilter:Xt,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const Q=r.state.transmissionRenderTarget[I.id],ae=I.viewport||C;Q.setSize(ae.z*_.transmissionResolutionScale,ae.w*_.transmissionResolutionScale);const fe=_.getRenderTarget(),se=_.getActiveCubeFace(),Te=_.getActiveMipmapLevel();_.setRenderTarget(Q),_.getClearColor(q),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),Ne&&me.render(w);const Ce=_.toneMapping;_.toneMapping=At;const Ee=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),r.setupLightsView(I),ke===!0&&ee.setGlobalState(_.clippingPlanes,I),jt(l,w,I),we.updateMultisampleRenderTarget(Q),we.updateRenderTargetMipmap(Q),Le.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ve=0,je=x.length;Ve<je;Ve++){const Xe=x[Ve],ze=Xe.object,Me=Xe.geometry,Ze=Xe.material,Be=Xe.group;if(Ze.side===Mt&&ze.layers.test(I.layers)){const dt=Ze.side;Ze.side=_t,Ze.needsUpdate=!0,Jn(ze,w,I,Me,Ze,Be),Ze.side=dt,Ze.needsUpdate=!0,ye=!0}}ye===!0&&(we.updateMultisampleRenderTarget(Q),we.updateRenderTargetMipmap(Q))}_.setRenderTarget(fe,se,Te),_.setClearColor(q,$),Ee!==void 0&&(I.viewport=Ee),_.toneMapping=Ce}function jt(l,x,w){const I=x.isScene===!0?x.overrideMaterial:null;for(let T=0,Q=l.length;T<Q;T++){const ae=l[T],fe=ae.object,se=ae.geometry,Te=ae.group;let Ce=ae.material;Ce.allowOverride===!0&&I!==null&&(Ce=I),fe.layers.test(w.layers)&&Jn(fe,x,w,se,Ce,Te)}}function Jn(l,x,w,I,T,Q){l.onBeforeRender(_,x,w,I,T,Q),l.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,l.matrixWorld),l.normalMatrix.getNormalMatrix(l.modelViewMatrix),T.onBeforeRender(_,x,w,I,l,Q),T.transparent===!0&&T.side===Mt&&T.forceSinglePass===!1?(T.side=_t,T.needsUpdate=!0,_.renderBufferDirect(w,x,I,T,l,Q),T.side=$t,T.needsUpdate=!0,_.renderBufferDirect(w,x,I,T,l,Q),T.side=Mt):_.renderBufferDirect(w,x,I,T,l,Q),l.onAfterRender(_,x,w,I,T,Q)}function en(l,x,w){x.isScene!==!0&&(x=Se);const I=pe.get(l),T=r.state.lights,Q=r.state.shadowsArray,ae=T.state.version,fe=G.getParameters(l,T.state,Q,x,w),se=G.getProgramCacheKey(fe);let Te=I.programs;I.environment=l.isMeshStandardMaterial?x.environment:null,I.fog=x.fog,I.envMap=(l.isMeshStandardMaterial?tt:at).get(l.envMap||I.environment),I.envMapRotation=I.environment!==null&&l.envMap===null?x.environmentRotation:l.envMapRotation,Te===void 0&&(l.addEventListener("dispose",k),Te=new Map,I.programs=Te);let Ce=Te.get(se);if(Ce!==void 0){if(I.currentProgram===Ce&&I.lightsStateVersion===ae)return ei(l,fe),Ce}else fe.uniforms=G.getUniforms(l),l.onBeforeCompile(fe,_),Ce=G.acquireProgram(fe,se),Te.set(se,Ce),I.uniforms=fe.uniforms;const Ee=I.uniforms;return(!l.isShaderMaterial&&!l.isRawShaderMaterial||l.clipping===!0)&&(Ee.clippingPlanes=ee.uniform),ei(l,fe),I.needsLights=Or(l),I.lightsStateVersion=ae,I.needsLights&&(Ee.ambientLightColor.value=T.state.ambient,Ee.lightProbe.value=T.state.probe,Ee.directionalLights.value=T.state.directional,Ee.directionalLightShadows.value=T.state.directionalShadow,Ee.spotLights.value=T.state.spot,Ee.spotLightShadows.value=T.state.spotShadow,Ee.rectAreaLights.value=T.state.rectArea,Ee.ltc_1.value=T.state.rectAreaLTC1,Ee.ltc_2.value=T.state.rectAreaLTC2,Ee.pointLights.value=T.state.point,Ee.pointLightShadows.value=T.state.pointShadow,Ee.hemisphereLights.value=T.state.hemi,Ee.directionalShadowMap.value=T.state.directionalShadowMap,Ee.directionalShadowMatrix.value=T.state.directionalShadowMatrix,Ee.spotShadowMap.value=T.state.spotShadowMap,Ee.spotLightMatrix.value=T.state.spotLightMatrix,Ee.spotLightMap.value=T.state.spotLightMap,Ee.pointShadowMap.value=T.state.pointShadowMap,Ee.pointShadowMatrix.value=T.state.pointShadowMatrix),I.currentProgram=Ce,I.uniformsList=null,Ce}function jn(l){if(l.uniformsList===null){const x=l.currentProgram.getUniforms();l.uniformsList=cn.seqWithValue(x.seq,l.uniforms)}return l.uniformsList}function ei(l,x){const w=pe.get(l);w.outputColorSpace=x.outputColorSpace,w.batching=x.batching,w.batchingColor=x.batchingColor,w.instancing=x.instancing,w.instancingColor=x.instancingColor,w.instancingMorph=x.instancingMorph,w.skinning=x.skinning,w.morphTargets=x.morphTargets,w.morphNormals=x.morphNormals,w.morphColors=x.morphColors,w.morphTargetsCount=x.morphTargetsCount,w.numClippingPlanes=x.numClippingPlanes,w.numIntersection=x.numClipIntersection,w.vertexAlphas=x.vertexAlphas,w.vertexTangents=x.vertexTangents,w.toneMapping=x.toneMapping}function yr(l,x,w,I,T){x.isScene!==!0&&(x=Se),we.resetTextureUnits();const Q=x.fog,ae=I.isMeshStandardMaterial?x.environment:null,fe=z===null?_.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:hn,se=(I.isMeshStandardMaterial?tt:at).get(I.envMap||ae),Te=I.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,Ce=!!w.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Ee=!!w.morphAttributes.position,ye=!!w.morphAttributes.normal,Ve=!!w.morphAttributes.color;let je=At;I.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(je=_.toneMapping);const Xe=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,ze=Xe!==void 0?Xe.length:0,Me=pe.get(I),Ze=r.state.lights;if(ke===!0&&(V===!0||l!==u)){const st=l===u&&I.id===p;ee.setState(I,l,st)}let Be=!1;I.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ze.state.version||Me.outputColorSpace!==fe||T.isBatchedMesh&&Me.batching===!1||!T.isBatchedMesh&&Me.batching===!0||T.isBatchedMesh&&Me.batchingColor===!0&&T.colorTexture===null||T.isBatchedMesh&&Me.batchingColor===!1&&T.colorTexture!==null||T.isInstancedMesh&&Me.instancing===!1||!T.isInstancedMesh&&Me.instancing===!0||T.isSkinnedMesh&&Me.skinning===!1||!T.isSkinnedMesh&&Me.skinning===!0||T.isInstancedMesh&&Me.instancingColor===!0&&T.instanceColor===null||T.isInstancedMesh&&Me.instancingColor===!1&&T.instanceColor!==null||T.isInstancedMesh&&Me.instancingMorph===!0&&T.morphTexture===null||T.isInstancedMesh&&Me.instancingMorph===!1&&T.morphTexture!==null||Me.envMap!==se||I.fog===!0&&Me.fog!==Q||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ee.numPlanes||Me.numIntersection!==ee.numIntersection)||Me.vertexAlphas!==Te||Me.vertexTangents!==Ce||Me.morphTargets!==Ee||Me.morphNormals!==ye||Me.morphColors!==Ve||Me.toneMapping!==je||Me.morphTargetsCount!==ze)&&(Be=!0):(Be=!0,Me.__version=I.version);let dt=Me.currentProgram;Be===!0&&(dt=en(I,x,T));let Nt=!1,pt=!1,zt=!1;const Qe=dt.getUniforms(),ht=Me.uniforms;if(de.useProgram(dt.program)&&(Nt=!0,pt=!0,zt=!0),I.id!==p&&(p=I.id,pt=!0),Nt||u!==l){de.buffers.depth.getReversed()&&l.reversedDepth!==!0&&(l._reversedDepth=!0,l.updateProjectionMatrix()),Qe.setValue(m,"projectionMatrix",l.projectionMatrix),Qe.setValue(m,"viewMatrix",l.matrixWorldInverse);const ct=Qe.map.cameraPosition;ct!==void 0&&ct.setValue(m,ce.setFromMatrixPosition(l.matrixWorld)),Re.logarithmicDepthBuffer&&Qe.setValue(m,"logDepthBufFC",2/(Math.log(l.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Qe.setValue(m,"isOrthographic",l.isOrthographicCamera===!0),u!==l&&(u=l,pt=!0,zt=!0)}if(T.isSkinnedMesh){Qe.setOptional(m,T,"bindMatrix"),Qe.setOptional(m,T,"bindMatrixInverse");const st=T.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),Qe.setValue(m,"boneTexture",st.boneTexture,we))}T.isBatchedMesh&&(Qe.setOptional(m,T,"batchingTexture"),Qe.setValue(m,"batchingTexture",T._matricesTexture,we),Qe.setOptional(m,T,"batchingIdTexture"),Qe.setValue(m,"batchingIdTexture",T._indirectTexture,we),Qe.setOptional(m,T,"batchingColorTexture"),T._colorsTexture!==null&&Qe.setValue(m,"batchingColorTexture",T._colorsTexture,we));const mt=w.morphAttributes;if((mt.position!==void 0||mt.normal!==void 0||mt.color!==void 0)&&J.update(T,w,dt),(pt||Me.receiveShadow!==T.receiveShadow)&&(Me.receiveShadow=T.receiveShadow,Qe.setValue(m,"receiveShadow",T.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(ht.envMap.value=se,ht.flipEnvMap.value=se.isCubeTexture&&se.isRenderTargetTexture===!1?-1:1),I.isMeshStandardMaterial&&I.envMap===null&&x.environment!==null&&(ht.envMapIntensity.value=x.environmentIntensity),pt&&(Qe.setValue(m,"toneMappingExposure",_.toneMappingExposure),Me.needsLights&&Nr(ht,zt),Q&&I.fog===!0&&Y.refreshFogUniforms(ht,Q),Y.refreshMaterialUniforms(ht,I,H,ne,r.state.transmissionRenderTarget[l.id]),cn.upload(m,jn(Me),ht,we)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(cn.upload(m,jn(Me),ht,we),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Qe.setValue(m,"center",T.center),Qe.setValue(m,"modelViewMatrix",T.modelViewMatrix),Qe.setValue(m,"normalMatrix",T.normalMatrix),Qe.setValue(m,"modelMatrix",T.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const st=I.uniformsGroups;for(let ct=0,gn=st.length;ct<gn;ct++){const bt=st[ct];Ue.update(bt,dt),Ue.bind(bt,dt)}}return dt}function Nr(l,x){l.ambientLightColor.needsUpdate=x,l.lightProbe.needsUpdate=x,l.directionalLights.needsUpdate=x,l.directionalLightShadows.needsUpdate=x,l.pointLights.needsUpdate=x,l.pointLightShadows.needsUpdate=x,l.spotLights.needsUpdate=x,l.spotLightShadows.needsUpdate=x,l.rectAreaLights.needsUpdate=x,l.hemisphereLights.needsUpdate=x}function Or(l){return l.isMeshLambertMaterial||l.isMeshToonMaterial||l.isMeshPhongMaterial||l.isMeshStandardMaterial||l.isShadowMaterial||l.isShaderMaterial&&l.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(l,x,w){const I=pe.get(l);I.__autoAllocateDepthBuffer=l.resolveDepthBuffer===!1,I.__autoAllocateDepthBuffer===!1&&(I.__useRenderToTexture=!1),pe.get(l.texture).__webglTexture=x,pe.get(l.depthTexture).__webglTexture=I.__autoAllocateDepthBuffer?void 0:w,I.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(l,x){const w=pe.get(l);w.__webglFramebuffer=x,w.__useDefaultFramebuffer=x===void 0};const Fr=m.createFramebuffer();this.setRenderTarget=function(l,x=0,w=0){z=l,b=x,y=w;let I=!0,T=null,Q=!1,ae=!1;if(l){const se=pe.get(l);if(se.__useDefaultFramebuffer!==void 0)de.bindFramebuffer(m.FRAMEBUFFER,null),I=!1;else if(se.__webglFramebuffer===void 0)we.setupRenderTarget(l);else if(se.__hasExternalTextures)we.rebindTextures(l,pe.get(l.texture).__webglTexture,pe.get(l.depthTexture).__webglTexture);else if(l.depthBuffer){const Ee=l.depthTexture;if(se.__boundDepthTexture!==Ee){if(Ee!==null&&pe.has(Ee)&&(l.width!==Ee.image.width||l.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");we.setupDepthRenderbuffer(l)}}const Te=l.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ae=!0);const Ce=pe.get(l).__webglFramebuffer;l.isWebGLCubeRenderTarget?(Array.isArray(Ce[x])?T=Ce[x][w]:T=Ce[x],Q=!0):l.samples>0&&we.useMultisampledRTT(l)===!1?T=pe.get(l).__webglMultisampledFramebuffer:Array.isArray(Ce)?T=Ce[w]:T=Ce,C.copy(l.viewport),B.copy(l.scissor),X=l.scissorTest}else C.copy(De).multiplyScalar(H).floor(),B.copy(Ge).multiplyScalar(H).floor(),X=et;if(w!==0&&(T=Fr),de.bindFramebuffer(m.FRAMEBUFFER,T)&&I&&de.drawBuffers(l,T),de.viewport(C),de.scissor(B),de.setScissorTest(X),Q){const se=pe.get(l.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_CUBE_MAP_POSITIVE_X+x,se.__webglTexture,w)}else if(ae){const se=x;for(let Te=0;Te<l.textures.length;Te++){const Ce=pe.get(l.textures[Te]);m.framebufferTextureLayer(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0+Te,Ce.__webglTexture,w,se)}}else if(l!==null&&w!==0){const se=pe.get(l.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,se.__webglTexture,w)}p=-1},this.readRenderTargetPixels=function(l,x,w,I,T,Q,ae,fe=0){if(!(l&&l.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=pe.get(l).__webglFramebuffer;if(l.isWebGLCubeRenderTarget&&ae!==void 0&&(se=se[ae]),se){de.bindFramebuffer(m.FRAMEBUFFER,se);try{const Te=l.textures[fe],Ce=Te.format,Ee=Te.type;if(!Re.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=l.width-I&&w>=0&&w<=l.height-T&&(l.textures.length>1&&m.readBuffer(m.COLOR_ATTACHMENT0+fe),m.readPixels(x,w,I,T,_e.convert(Ce),_e.convert(Ee),Q))}finally{const Te=z!==null?pe.get(z).__webglFramebuffer:null;de.bindFramebuffer(m.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(l,x,w,I,T,Q,ae,fe=0){if(!(l&&l.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=pe.get(l).__webglFramebuffer;if(l.isWebGLCubeRenderTarget&&ae!==void 0&&(se=se[ae]),se)if(x>=0&&x<=l.width-I&&w>=0&&w<=l.height-T){de.bindFramebuffer(m.FRAMEBUFFER,se);const Te=l.textures[fe],Ce=Te.format,Ee=Te.type;if(!Re.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=m.createBuffer();m.bindBuffer(m.PIXEL_PACK_BUFFER,ye),m.bufferData(m.PIXEL_PACK_BUFFER,Q.byteLength,m.STREAM_READ),l.textures.length>1&&m.readBuffer(m.COLOR_ATTACHMENT0+fe),m.readPixels(x,w,I,T,_e.convert(Ce),_e.convert(Ee),0);const Ve=z!==null?pe.get(z).__webglFramebuffer:null;de.bindFramebuffer(m.FRAMEBUFFER,Ve);const je=m.fenceSync(m.SYNC_GPU_COMMANDS_COMPLETE,0);return m.flush(),await zr(m,je,4),m.bindBuffer(m.PIXEL_PACK_BUFFER,ye),m.getBufferSubData(m.PIXEL_PACK_BUFFER,0,Q),m.deleteBuffer(ye),m.deleteSync(je),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(l,x=null,w=0){const I=Math.pow(2,-w),T=Math.floor(l.image.width*I),Q=Math.floor(l.image.height*I),ae=x!==null?x.x:0,fe=x!==null?x.y:0;we.setTexture2D(l,0),m.copyTexSubImage2D(m.TEXTURE_2D,w,0,0,ae,fe,T,Q),de.unbindTexture()};const Br=m.createFramebuffer(),Gr=m.createFramebuffer();this.copyTextureToTexture=function(l,x,w=null,I=null,T=0,Q=null){Q===null&&(T!==0?(Nn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=T,T=0):Q=0);let ae,fe,se,Te,Ce,Ee,ye,Ve,je;const Xe=l.isCompressedTexture?l.mipmaps[Q]:l.image;if(w!==null)ae=w.max.x-w.min.x,fe=w.max.y-w.min.y,se=w.isBox3?w.max.z-w.min.z:1,Te=w.min.x,Ce=w.min.y,Ee=w.isBox3?w.min.z:0;else{const mt=Math.pow(2,-T);ae=Math.floor(Xe.width*mt),fe=Math.floor(Xe.height*mt),l.isDataArrayTexture?se=Xe.depth:l.isData3DTexture?se=Math.floor(Xe.depth*mt):se=1,Te=0,Ce=0,Ee=0}I!==null?(ye=I.x,Ve=I.y,je=I.z):(ye=0,Ve=0,je=0);const ze=_e.convert(x.format),Me=_e.convert(x.type);let Ze;x.isData3DTexture?(we.setTexture3D(x,0),Ze=m.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(we.setTexture2DArray(x,0),Ze=m.TEXTURE_2D_ARRAY):(we.setTexture2D(x,0),Ze=m.TEXTURE_2D),m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,x.flipY),m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),m.pixelStorei(m.UNPACK_ALIGNMENT,x.unpackAlignment);const Be=m.getParameter(m.UNPACK_ROW_LENGTH),dt=m.getParameter(m.UNPACK_IMAGE_HEIGHT),Nt=m.getParameter(m.UNPACK_SKIP_PIXELS),pt=m.getParameter(m.UNPACK_SKIP_ROWS),zt=m.getParameter(m.UNPACK_SKIP_IMAGES);m.pixelStorei(m.UNPACK_ROW_LENGTH,Xe.width),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,Xe.height),m.pixelStorei(m.UNPACK_SKIP_PIXELS,Te),m.pixelStorei(m.UNPACK_SKIP_ROWS,Ce),m.pixelStorei(m.UNPACK_SKIP_IMAGES,Ee);const Qe=l.isDataArrayTexture||l.isData3DTexture,ht=x.isDataArrayTexture||x.isData3DTexture;if(l.isDepthTexture){const mt=pe.get(l),st=pe.get(x),ct=pe.get(mt.__renderTarget),gn=pe.get(st.__renderTarget);de.bindFramebuffer(m.READ_FRAMEBUFFER,ct.__webglFramebuffer),de.bindFramebuffer(m.DRAW_FRAMEBUFFER,gn.__webglFramebuffer);for(let bt=0;bt<se;bt++)Qe&&(m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,pe.get(l).__webglTexture,T,Ee+bt),m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,pe.get(x).__webglTexture,Q,je+bt)),m.blitFramebuffer(Te,Ce,ae,fe,ye,Ve,ae,fe,m.DEPTH_BUFFER_BIT,m.NEAREST);de.bindFramebuffer(m.READ_FRAMEBUFFER,null),de.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else if(T!==0||l.isRenderTargetTexture||pe.has(l)){const mt=pe.get(l),st=pe.get(x);de.bindFramebuffer(m.READ_FRAMEBUFFER,Br),de.bindFramebuffer(m.DRAW_FRAMEBUFFER,Gr);for(let ct=0;ct<se;ct++)Qe?m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,mt.__webglTexture,T,Ee+ct):m.framebufferTexture2D(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,mt.__webglTexture,T),ht?m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,st.__webglTexture,Q,je+ct):m.framebufferTexture2D(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,st.__webglTexture,Q),T!==0?m.blitFramebuffer(Te,Ce,ae,fe,ye,Ve,ae,fe,m.COLOR_BUFFER_BIT,m.NEAREST):ht?m.copyTexSubImage3D(Ze,Q,ye,Ve,je+ct,Te,Ce,ae,fe):m.copyTexSubImage2D(Ze,Q,ye,Ve,Te,Ce,ae,fe);de.bindFramebuffer(m.READ_FRAMEBUFFER,null),de.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else ht?l.isDataTexture||l.isData3DTexture?m.texSubImage3D(Ze,Q,ye,Ve,je,ae,fe,se,ze,Me,Xe.data):x.isCompressedArrayTexture?m.compressedTexSubImage3D(Ze,Q,ye,Ve,je,ae,fe,se,ze,Xe.data):m.texSubImage3D(Ze,Q,ye,Ve,je,ae,fe,se,ze,Me,Xe):l.isDataTexture?m.texSubImage2D(m.TEXTURE_2D,Q,ye,Ve,ae,fe,ze,Me,Xe.data):l.isCompressedTexture?m.compressedTexSubImage2D(m.TEXTURE_2D,Q,ye,Ve,Xe.width,Xe.height,ze,Xe.data):m.texSubImage2D(m.TEXTURE_2D,Q,ye,Ve,ae,fe,ze,Me,Xe);m.pixelStorei(m.UNPACK_ROW_LENGTH,Be),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,dt),m.pixelStorei(m.UNPACK_SKIP_PIXELS,Nt),m.pixelStorei(m.UNPACK_SKIP_ROWS,pt),m.pixelStorei(m.UNPACK_SKIP_IMAGES,zt),Q===0&&x.generateMipmaps&&m.generateMipmap(Ze),de.unbindTexture()},this.initRenderTarget=function(l){pe.get(l).__webglFramebuffer===void 0&&we.setupRenderTarget(l)},this.initTexture=function(l){l.isCubeTexture?we.setTextureCube(l,0):l.isData3DTexture?we.setTexture3D(l,0):l.isDataArrayTexture||l.isCompressedArrayTexture?we.setTexture2DArray(l,0):we.setTexture2D(l,0),de.unbindTexture()},this.resetState=function(){b=0,y=0,z=null,de.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(n),t.unpackColorSpace=nt._getUnpackColorSpace()}}function du(e){const n=ao(e.az,e.alt),t=Rn(n,0),i=Rn(n,1),s=Rn(n,2),o=S=>{const E=[S[0],S[1],S[2]];return[Cn(E,t),Cn(E,i),Cn(E,s)]},[h,f,A]=oo(e.enu,e.frame,i,e.id==="saturn"?so:0),g=e.id==="sun"?[0,0,1]:tu(o(e.sunDir)),L=(1+g[2])/2;return{id:e.id,sun:g,pm:o(h),east:o(f),pole:o(A),lit:L,earthshine:e.id==="moon"?mo(L):0,gain:e.id==="venus"?ho(g[2]):1}}function pu(e){switch(e){case"moon":return 0;case"venus":return-.1;case"uranus":return-.12;case"jupiter":case"saturn":return .16;case"neptune":return .12;case"sun":return .05;default:return .1}}const jf={sun:609.12,moon:0,mercury:1407.6,venus:-5832.5,mars:24.6229,jupiter:9.925,saturn:10.656,uranus:-17.24,neptune:16.11},eu=600;function hu(e){const n=jf[e];return n===0?0:2*Math.PI/(n*3600)*eu}function tu(e){const n=Math.hypot(e[0],e[1],e[2])||1;return[e[0]/n,e[1]/n,e[2]/n]}const In=1.24,sr=2.27,yn=.3,nu=`
  uniform vec3 uAxisX;     // world: screen right, in the plane through the centre ⟂ the line of sight (unit)
  uniform vec3 uAxisY;     // world: screen up, in that plane (unit)
  uniform float uQuad;     // half-size of the quad in equatorial radii (1 + antialiasing margin; Saturn: the rings)
  varying vec2 vQ;         // position on that plane, in equatorial radii
  void main() {
    vQ = position.xy * uQuad;
    // the mesh sits at the body's centre and is scaled by its equatorial radius (so three.js culls and sorts it)
    vec3 c = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
    float r = length((modelMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
    vec3 wp = c + (uAxisX * vQ.x + uAxisY * vQ.y) * r;
    gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
  }
`,iu=.361,ru=`vec3(${_o().map(e=>e.toFixed(4)).join(", ")})`,au=`
  uniform sampler2D uMap;
  uniform float uHasMap;
  uniform vec3 uColor;        // flat colour while the map is loading / if it failed (linear)
  uniform sampler2D uNormalMap;
  uniform float uHasNormal;   // relief normals (Moon): tangent-space normal map, x = east, y = north
  uniform mat3 uM;            // plane frame (x right, y up, z towards the viewer) → body frame
  uniform vec3 uSunB;         // unit vector body → Sun, body frame
  uniform float uFlat;        // flattening (1 − polar/equatorial radius)
  uniform float uGraphic;     // 1: the map's latitudes are planetographic (Hubble OPAL maps)
  uniform float uSpin;        // the surface's turn about the pole (rad, + = prograde)
  uniform float uKind;        // 0 planet (Minnaert), 1 airless rock (Lunar-Lambert), 2 the Sun
  uniform vec3 uMinnaert;     // Minnaert k per channel
  uniform float uExposure;    // brightness of a fully lit surface relative to its map
  uniform float uSat;         // saturation of the map (Venus: near-white cloud tops)
  uniform float uHaze;        // Mars: strength of the thin limb haze
  uniform float uPhaseGain;   // Venus only: forward scattering brightens a crescent (phase.ts venusPhaseGain)
  uniform vec3 uExtinct;      // per-channel transmission of the atmosphere (× the dimming below the horizon)
  uniform vec3 uGround;       // below the horizon (browse mode): the ground's tint (display values; 0 above)
  uniform vec4 uStar;         // star image of a planet drawn smaller than it (planet size near "true"): x weight,
                              // y core radius, z intensity, w outer radius (equatorial radii)
  uniform vec3 uStarColor;    // its colour (display values)
  uniform int uSuper;         // samples per side on the silhouette's pixels (4); a uniform, so the loop stays a loop
                              // (a constant bound gets unrolled: 16 inlined copies of the lighting, a slow first compile)
#ifdef RINGS
  uniform sampler2D uRing;    // Saturn's rings: rgb colour, a = opacity seen at μ = ${yn}
  uniform float uRingExposure;
#endif
#ifdef EARTHSHINE
  uniform float uEarthshine;  // the Moon: its earthshine, × the map (phase.ts earthshineLevel)
  const vec3 EARTH_TINT = ${ru};    // earthlight's colour relative to sunlight (luminance 1)
#endif
  varying vec2 vQ;
  const float PI = 3.141592653589793;
  const float TAU = 6.283185307179586;
  const vec3 LUMA = vec3(0.2126, 0.7152, 0.0722);
  ${lo}
#ifdef EARTHSHINE
  ${co}
#endif

  vec3 shapeScale() { return vec3(1.0, 1.0 / (1.0 - uFlat), 1.0); }

  // The ray through plane point q against the spheroid X² + (Y/(1−f))² + Z² = 1. Returns the discriminant over 4a
  // (≥ 0: it hits; for a sphere 1 − |q|²); p is the nearest hit, or the limb point where the ray misses.
  float hitGlobe(vec2 q, out vec3 p, out float t) {
    vec3 S = shapeScale();
    vec3 O = uM * vec3(q, 0.0);
    vec3 D = -uM[2];
    vec3 so = O * S, sd = D * S;
    float a = dot(sd, sd), b = 2.0 * dot(so, sd), c = dot(so, so) - 1.0;
    float disc = b * b - 4.0 * a * c;
    t = (-b - sqrt(max(disc, 0.0))) / (2.0 * a);
    p = O + t * D;
    return disc / (4.0 * a);
  }

  // map coordinates (u = east longitude / 360° + 0.5, unwrapped; v = latitude) of a point of the body frame
  vec2 mapUv(vec3 p) {
    float lon = atan(-p.z, p.x) - uSpin;
    float latc = asin(clamp(p.y / max(length(p), 1e-6), -1.0, 1.0));
    float k = 1.0 - uFlat;
    float lat = uGraphic > 0.5 ? atan(tan(latc) / (k * k)) : latc;
    return vec2(lon / TAU + 0.5, 0.5 + lat / PI);
  }

  vec3 bodyLight(vec3 p, vec2 uv, vec2 dx, vec2 dy, float lightOk) {
    vec3 S = shapeScale();
    vec3 n = normalize(p * S * S);
    vec3 v = uM[2];
    float mu = max(dot(n, v), 0.0);
    vec2 st = vec2(fract(uv.x), uv.y);
    vec3 tex = uHasMap > 0.5 ? textureGrad(uMap, st, dx, dy).rgb : uColor;
    float lum = dot(tex, LUMA);
    if (uKind > 1.5) {
      // the Sun: emissive, limb darkening per channel (stronger in the blue: white centre, golden limb)
      vec3 limb = vec3(1.0) - vec3(0.56, 0.66, 0.78) * (1.0 - mu);
      float gran = 1.0;
      if (uHasMap > 0.5) {
        float coarse = dot(textureGrad(uMap, st, dx * 6.0, dy * 6.0).rgb, LUMA);
        gran = clamp(1.0 + 0.15 * (lum - coarse) / ${iu.toFixed(3)}, 0.98, 1.02);
      }
      return vec3(1.0, 0.93, 0.80) * limb * gran * uExposure;
    }
    float mu0g = dot(n, uSunB);                                   // the smooth globe's incidence
    vec3 albedo = mix(vec3(lum), tex, uSat);
    vec3 shade;
    if (uKind > 0.5) {
      // airless rock: Lunar-Lambert on the relief normal. Relief only bends the light near the terminator; it never
      // lights the night side (a peak may catch the Sun just past the terminator — about one degree)
      vec3 nr = n;
      if (uHasNormal > 0.5) {
        vec3 e = vec3(p.z, 0.0, -p.x);                            // ∂/∂(east longitude)
        vec3 east = dot(e, e) > 1e-10 ? normalize(e) : vec3(0.0, 0.0, -1.0);
        vec3 north = normalize(cross(n, east));
        vec3 tn = textureGrad(uNormalMap, st, dx, dy).xyz * 2.0 - 1.0;
        nr = normalize(east * tn.x + north * tn.y + n * max(tn.z, 0.2));
        // seen edge-on at the limb the relief is foreshortened to nothing: back to the smooth sphere there (else
        // tilted normals face away from both the viewer and the Sun and draw a dark rim around a full Moon)
        nr = normalize(mix(n, nr, smoothstep(0.02, 0.2, mu)));
      }
      float mu0 = max(dot(nr, uSunB), 0.0);
      float m = max(dot(nr, v), 0.0);
      float ls = 2.0 * mu0 / (mu0 + m + 1e-4);
      shade = vec3(min(mix(mu0, ls, 0.85), 1.5)) * smoothstep(-0.03, 0.0, mu0g);
    } else {
      float mu0 = max(mu0g, 0.0);
      float m = max(mu, 0.08);
      shade = pow(vec3(mu0), uMinnaert) * pow(vec3(m), uMinnaert - 1.0);
    }
    vec3 col = albedo * shade * uExposure * uPhaseGain * lightOk;
    // Mars: a thin bright haze at the limb, on the lit side only
    col += uHaze * vec3(1.0, 0.92, 0.86) * pow(1.0 - mu, 4.0) * smoothstep(0.0, 0.35, mu0g) * lightOk;
    return col;
  }

#ifdef RINGS
  // the rings at radius r (equatorial radii): colour (linear) and opacity at μ = ${yn} (0 off the rings)
  vec4 ringAt(float r, float lod) {
    float u = (r - ${In.toFixed(2)}) / ${(sr-In).toFixed(2)};
    vec4 c = textureLod(uRing, vec2(clamp(u, 0.0, 1.0), 0.5), lod);
    return c * step(0.0, u) * step(u, 1.0);
  }
  // normal optical depth from the map's opacity
  float ringTau(float aMap) { return -log(max(1.0 - aMap * 0.985, 1e-3)) * ${yn.toFixed(2)}; }
  // the rings' shadow on the globe: the sunlight left after crossing the ring plane on its way to point p
  float ringShadow(vec3 p) {
    if (abs(uSunB.y) < 1e-4 || uSunB.y * p.y >= 0.0) return 1.0;
    vec3 x = p - (p.y / uSunB.y) * uSunB;
    return exp(-ringTau(ringAt(length(x.xz), 1.0).a) / max(abs(uSunB.y), 0.02));
  }
#else
  float ringShadow(vec3 p) { return 1.0; }
#endif

  // the display value of the globe at point p (map coordinates uv): its sunlight, through the atmosphere, handed to
  // the shared output stage; the Moon adds its earthshine
  vec3 globeDisplay(vec3 p, vec2 uv, vec2 dx, vec2 dy) {
    vec3 sunlit = bodyLight(p, uv, dx, dy, ringShadow(p)) * uExtinct;
#ifdef EARTHSHINE
    // the Earth lights the Moon from the viewer's direction: Lunar-Lambert at zero phase (L + (1 − L)·μ, nearly flat
    // to the limb, as a full Moon), no shadows we could see, a little cooler than sunlight; added past the tone
    // curve's toe and faded into the sunlit part where that is brighter (pipeline.ts SKY_EARTHSHINE)
    vec2 st = vec2(fract(uv.x), uv.y);
    vec3 tex = uHasMap > 0.5 ? textureGrad(uMap, st, dx, dy).rgb : uColor;
    float mu = max(dot(normalize(p * shapeScale() * shapeScale()), uM[2]), 0.0);
    vec3 earthlit = mix(vec3(dot(tex, LUMA)), tex, uSat) * EARTH_TINT * (uEarthshine * (0.85 + 0.15 * mu)) * uExtinct;
    return najmEarthlitToDisplay(sunlit, earthlit);
#else
    return najmToDisplay(sunlit);
#endif
  }

  void main() {
    // ---- the globe (everything that needs screen-space derivatives runs for every fragment)
    vec3 p; float t;
    float g = hitGlobe(vQ, p, t);
    float gpx = g / max(length(vec2(dFdx(g), dFdy(g))), 1e-6);   // signed distance to the silhouette (device px)
    float cov = clamp(gpx + 0.5, 0.0, 1.0);
    vec2 uv = mapUv(p);
    // seamless mip selection at ±180°: of the two ways to unwrap the longitude take the smoother one (Tarini 2012).
    // Near the limb the surface is foreshortened and many texels fall into one pixel: the coarser mip level that
    // follows is right (a finer one makes the relief and the albedo sparkle along a thin crescent)
    vec2 uvA = vec2(fract(uv.x), uv.y), uvB = vec2(fract(uv.x + 0.5), uv.y);
    vec2 dxA = dFdx(uvA), dyA = dFdy(uvA), dxB = dFdx(uvB), dyB = dFdy(uvB);
    bool useB = dot(dxB, dxB) + dot(dyB, dyB) < dot(dxA, dxA) + dot(dyA, dyA);
    vec2 dx = useB ? dxB : dxA, dy = useB ? dyB : dyA;

    vec3 rgb = vec3(0.0);
    float alpha = cov;
    if (abs(gpx) < 1.5) {
      // the pixels on the silhouette: the light is integrated over the pixel (4 × 4 samples), so a crescent thinner
      // than a pixel (a 0.2 %-lit Moon) stays one continuous hairline instead of a row of beads
      vec2 qx = dFdx(vQ), qy = dFdy(vQ);
      float n = 0.0;
      float step1 = 1.0 / float(uSuper);
      int count = uSuper * uSuper;
      for (int k = 0; k < count; k++) {
        vec2 o = (vec2(float(k - (k / uSuper) * uSuper), float(k / uSuper)) + 0.5) * step1 - 0.5;
        vec2 qs = vQ + qx * o.x + qy * o.y;
        vec3 ps; float ts;
        if (hitGlobe(qs, ps, ts) >= 0.0) {
          rgb += globeDisplay(ps, mapUv(ps), dx, dy);
          n += 1.0;
        }
      }
      rgb /= float(count);
      alpha = n / float(count);
    } else if (cov > 0.0) {
      rgb = globeDisplay(p, uv, dx, dy);
    }

    // ---- a planet drawn smaller than its own star image (planet size near "true"): the star takes over
    if (uStar.x > 0.0) {
      float r = length(vQ);
      float d = r / max(uStar.y, 1e-6);
      float core = exp(-d * d * 1.6);
      float wing = 0.3 * exp(-d * 0.85) * (1.0 - smoothstep(0.8 * uStar.w, uStar.w, r));
      float I = (core + wing) * uStar.z;
      vec3 sc = mix(uStarColor, vec3(1.0), clamp(core * 0.65, 0.0, 1.0)) * I;
      rgb = mix(rgb, sc, uStar.x);
      alpha = mix(alpha, min(1.0, I), uStar.x);
    }

#ifdef RINGS
    // ---- Saturn's rings, in the plane Y = 0 of the body frame
    vec3 O = uM * vec3(vQ, 0.0);
    vec3 D = -uM[2];
    float mur = max(abs(D.y), 0.02);
    float tr = abs(D.y) > 1e-5 ? -O.y / D.y : 1e9;
    vec3 xr = O + tr * D;
    float rr = length(xr.xz);
    // mip level from the ring radius's screen-space change: the map's 1024 texels across 1.03 radii
    vec4 rc = ringAt(rr, log2(max(fwidth(rr) / ${(sr-In).toFixed(2)} * 1024.0, 1.0)));
    float tau = ringTau(rc.a);
    float ra = 1.0 - exp(-tau / mur);                              // opacity along this line of sight
    if (ra > 1e-4) {
      float mu0r = max(abs(uSunB.y), 0.02);
      // the lit face: Lommel–Seeliger reflection (1 at μ0 = μ); the unlit face: only light filtering through
      float light = uSunB.y * D.y < 0.0 ? 2.0 * mu0r / (mu0r + mur) : 0.3 * exp(-tau / mu0r);
      // the globe's shadow on the rings: does the way to the Sun cross the globe?
      vec3 S = shapeScale();
      vec3 so = xr * S, sd = uSunB * S;
      float qa = dot(sd, sd), qb = 2.0 * dot(so, sd), qc = dot(so, so) - 1.0;
      float qd = (qb * qb - 4.0 * qa * qc) / (4.0 * qa);
      float sh = (qd > 0.0 && -qb > 0.0) ? smoothstep(0.0, 0.004, qd) : 0.0;
      vec3 rdisp = najmToDisplay(rc.rgb * uRingExposure * light * (1.0 - 0.95 * sh) * uExtinct) * ra;
      if (tr < t) {                                                // the ray meets the rings first: rings over the globe
        rgb = rdisp + rgb * (1.0 - ra);
        alpha = ra + alpha * (1.0 - ra);
      } else {                                                     // the globe hides the rings behind it
        rgb = rgb + rdisp * (1.0 - alpha);
        alpha = alpha + ra * (1.0 - alpha);
      }
    }
#endif
    if (alpha < 1e-4) discard;
    // below the horizon: the ground's tint, in full on the night side (it melts into the ground veil around the
    // disc) and fading out on the lit side, (1 − L)³ (a planet keeps its colours)
    vec3 straight = rgb / alpha;
    float dark = 1.0 - clamp(dot(straight, LUMA), 0.0, 1.0);
    rgb = (straight + uGround * dark * dark * dark) * alpha;
    gl_FragColor = najmOutput(rgb, alpha);
  }
`,ou={sun:{color:"#fff0d2",kind:2,k:[1,1,1],exposure:1,sat:1,flat:0,graphic:!1,haze:0},moon:{color:"#8d8a85",kind:1,k:[1,1,1],exposure:1.45,sat:1,flat:0,graphic:!1,haze:0},mercury:{color:"#9a9188",kind:1,k:[1,1,1],exposure:1.2,sat:1,flat:0,graphic:!1,haze:0},venus:{color:"#ece4d0",kind:0,k:[.85,.85,.85],exposure:1.5,sat:.25,flat:0,graphic:!1,haze:0},mars:{color:"#c9915f",kind:0,k:[.9,.9,.9],exposure:1.35,sat:1,flat:.0059,graphic:!1,haze:.05},jupiter:{color:"#d9bf9b",kind:0,k:[1,.95,.85],exposure:1.4,sat:1,flat:.06487,graphic:!0,haze:0},saturn:{color:"#d8c38f",kind:0,k:[.9,.9,.9],exposure:1.2,sat:1,flat:.09796,graphic:!1,haze:0},uranus:{color:"#a6d4d9",kind:0,k:[.9,.9,.9],exposure:1.2,sat:1,flat:.0229,graphic:!1,haze:0},neptune:{color:"#5677c9",kind:0,k:[.9,.9,.9],exposure:1.2,sat:1,flat:.0171,graphic:!1,haze:0}},su=2,mu={sun:{sky:"tex/sun.jpg",hd:"tex/hd/sun.jpg"},moon:{sky:"tex/moon.jpg",normal:"tex/moon_normal.jpg",hd:"tex/hd/moon.jpg",hdOnZoom:!0,normalHd:"tex/hd/moon_normal.jpg"},mercury:{sky:"tex/mercury.jpg",hd:"tex/hd/mercury.jpg"},venus:{sky:"tex/venus.jpg",hd:"tex/hd/venus.jpg"},mars:{sky:"tex/mars.jpg",hd:"tex/hd/mars.jpg"},jupiter:{sky:"tex/jupiter.jpg",hd:"tex/hd/jupiter.jpg",hdOnZoom:!0},saturn:{sky:"tex/saturn.jpg",hd:"tex/hd/saturn.jpg"},uranus:{sky:"tex/uranus.jpg",hd:"tex/uranus.jpg"},neptune:{sky:"tex/neptune.jpg",hd:"tex/neptune.jpg"}};function lu(e){const n=parseInt(e.slice(1),16);return new Oe((n>>16&255)/255,(n>>8&255)/255,(n&255)/255)}function _u(e,n){const t=ou[e],i=e==="saturn",s=i?fo():null,o=new Rt({vertexShader:nu,fragmentShader:au,defines:i?{RINGS:""}:e==="moon"?{EARTHSHINE:""}:{},transparent:!0,depthTest:!1,depthWrite:!1,blending:Tr,blendSrc:ur,blendDst:On,blendSrcAlpha:fr,blendDstAlpha:On,uniforms:{uMap:{value:null},uHasMap:{value:0},uColor:{value:new Ye(t.color)},uNormalMap:{value:null},uHasNormal:{value:0},uAxisX:{value:new Oe(1,0,0)},uAxisY:{value:new Oe(0,1,0)},uQuad:{value:1.1},uM:{value:new Fe},uSunB:{value:new Oe(0,0,1)},uFlat:{value:t.flat},uGraphic:{value:t.graphic?1:0},uSpin:{value:0},uKind:{value:t.kind},uMinnaert:{value:new Oe(...t.k)},uExposure:{value:t.exposure},uSat:{value:t.sat},uHaze:{value:t.haze},uEarthshine:{value:0},uPhaseGain:{value:1},uExtinct:{value:new Oe(1,1,1)},uGround:{value:new Oe(0,0,0)},uStar:{value:new lt(0,1,0,1)},uStarColor:{value:lu(t.color)},uSuper:{value:4},...i?{uRing:{value:s},uRingExposure:{value:su}}:{},...n.pipe.uniforms}});o.blendAlpha=1;const h=o.uniforms;let f=!0;const A=new Set,g=M=>{M&&A.delete(M)&&po(M)},L=(M,O,U)=>{const c=uo(M,{srgb:O,cache:n.shared,onLoad:r=>{f&&U(r)}});n.shared||A.add(c)},S={map:0,mapShown:0,nrm:0,nrmShown:0},E=(M,O)=>{if(M){const U=++S.map;L(M,!0,c=>{if(U<S.mapShown){g(c);return}S.mapShown=U;const r=h.uMap.value;h.uMap.value=c,h.uHasMap.value=1,r&&r!==c&&g(r),n.onChange?.()})}if(O){const U=++S.nrm;L(O,!1,c=>{if(U<S.nrmShown){g(c);return}S.nrmShown=U;const r=h.uNormalMap.value;h.uNormalMap.value=c,h.uHasNormal.value=1,r&&r!==c&&g(r),n.onChange?.()})}};return E(n.map,n.normal),i&&L("tex/saturn_ring.png",!0,M=>{h.uRing.value=M,n.onChange?.()}),{mat:o,setMaps:E,dispose(){f=!1,o.dispose(),s?.dispose();for(const M of[...A])g(M)}}}function vu(e,n){const t=[-e[0],-e[1],-e[2]],i=n[0]*t[0]+n[1]*t[1]+n[2]*t[2];let s=[n[0]-i*t[0],n[1]-i*t[1],n[2]-i*t[2]];if(Math.hypot(s[0],s[1],s[2])<1e-9){const f=Math.abs(t[2])<.9?[0,0,1]:[0,1,0],A=f[0]*t[0]+f[1]*t[1]+f[2]*t[2];s=[f[0]-A*t[0],f[1]-A*t[1],f[2]-A*t[2]]}const o=Math.hypot(s[0],s[1],s[2]);return s=[s[0]/o,s[1]/o,s[2]/o],[[s[1]*t[2]-s[2]*t[1],s[2]*t[0]-s[0]*t[2],s[0]*t[1]-s[1]*t[0]],s,t]}function gu(e,n,t,i,s){const o=g=>[g[0]*n[0]+g[1]*n[1]+g[2]*n[2],g[0]*i[0]+g[1]*i[1]+g[2]*i[2],-(g[0]*t[0]+g[1]*t[1]+g[2]*t[2])],[h,f,A]=e.map(o);return s.set(h[0],f[0],A[0],h[1],f[1],A[1],h[2],f[2],A[2])}export{mu as B,sr as R,gt as S,ie as U,uu as W,du as a,vu as b,_u as c,pu as h,gu as p,hu as s};
