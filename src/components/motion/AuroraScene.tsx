"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/*  Brand hues (sRGB, matched to globals.css @theme)                   */
/* ------------------------------------------------------------------ */
const C1 = new THREE.Color("#7c5cff"); // violet
const C2 = new THREE.Color("#2dd4bf"); // teal
const C3 = new THREE.Color("#ff5ca8"); // pink
const C4 = new THREE.Color("#4f8bff"); // blue
const BG = new THREE.Color("#05060a"); // base

/* ------------------------------------------------------------------ */
/*  Fullscreen aurora — domain-warped fractal noise, GLSL              */
/*  A 2-unit plane drawn in clip space so it always fills the screen,  */
/*  independent of the camera the particles use.                       */
/* ------------------------------------------------------------------ */
const auroraVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = position.xy * 0.5 + 0.5;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const auroraFragment = /* glsl */ `
  precision highp float;
  varying vec2 vUv;

  uniform float uTime;
  uniform vec2  uResolution;
  uniform vec2  uPointer;
  uniform vec3  uC1;
  uniform vec3  uC2;
  uniform vec3  uC3;
  uniform vec3  uC4;
  uniform vec3  uBg;

  // --- Ashima 2D simplex noise (public domain) ---------------------
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                            + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
                            dot(x12.zw, x12.zw)), 0.0);
    m = m * m; m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x  = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 rot = mat2(0.80, -0.60, 0.60, 0.80);
    for (int i = 0; i < 5; i++) {
      v += a * snoise(p);
      p = rot * p * 2.0 + 12.0;
      a *= 0.5;
    }
    return v;
  }

  // soft gaussian falloff for a large, calm glow
  float glow(vec2 p, vec2 c, float r) {
    float d = length(p - c);
    return exp(-d * d / (r * r));
  }

  void main() {
    // aspect-correct, centered coords
    vec2 uv = vUv;
    vec2 p = (uv - 0.5);
    p.x *= uResolution.x / uResolution.y;

    float t = uTime * 0.05;

    // very gentle low-frequency warp so the glows breathe organically,
    // without any of the busy high-frequency marbling
    vec2 warp = vec2(
      fbm(p * 0.7 + vec2(0.0, t)),
      fbm(p * 0.7 + vec2(4.0, -t))
    ) * 0.16;
    vec2 wp = p + warp;

    // pointer adds a soft parallax to every glow
    vec2 ptr = uPointer * 0.16;

    // a handful of big, soft, slowly drifting colour fields on a dark base
    vec3 color = uBg;
    color += uC1 * glow(wp, vec2(-0.55 + 0.12 * sin(t * 0.7), 0.32 + 0.08 * cos(t * 0.5)) + ptr,        0.72) * 0.34;
    color += uC4 * glow(wp, vec2( 0.52 + 0.10 * cos(t * 0.5), 0.08 + 0.10 * sin(t * 0.6)) + ptr * 0.7,  0.78) * 0.30;
    color += uC2 * glow(wp, vec2(-0.18 + 0.12 * sin(t * 0.4), -0.46 + 0.07 * cos(t * 0.8)) + ptr * 1.2, 0.66) * 0.26;
    color += uC3 * glow(wp, vec2( 0.30 + 0.10 * cos(t * 0.6), -0.06 + 0.09 * sin(t * 0.5)) + ptr,        0.46) * 0.14;

    // vignette keeps edges dark so foreground text stays legible
    float vig = smoothstep(1.25, 0.30, length(uv - 0.5));
    color *= mix(0.55, 1.0, vig);

    // gentle top-down darkening for nav + hero contrast
    color *= mix(1.0, 0.72, uv.y);

    gl_FragColor = vec4(color, 1.0);
  }
`;

function AuroraPlane({ pointer }: { pointer: React.RefObject<THREE.Vector2> }) {
  const { size, viewport } = useThree();

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: auroraVertex,
      fragmentShader: auroraFragment,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uC1: { value: new THREE.Vector3(C1.r, C1.g, C1.b) },
        uC2: { value: new THREE.Vector3(C2.r, C2.g, C2.b) },
        uC3: { value: new THREE.Vector3(C3.r, C3.g, C3.b) },
        uC4: { value: new THREE.Vector3(C4.r, C4.g, C4.b) },
        uBg: { value: new THREE.Vector3(BG.r, BG.g, BG.b) },
      },
    });
  }, []);

  const smoothPointer = useRef(new THREE.Vector2(0, 0));

  useFrame((state, delta) => {
    const u = material.uniforms;
    u.uTime.value = state.clock.elapsedTime;
    u.uResolution.value.set(size.width * viewport.dpr, size.height * viewport.dpr);
    // ease the pointer so the field glides rather than snaps
    smoothPointer.current.lerp(pointer.current, Math.min(1, delta * 2.5));
    u.uPointer.value.copy(smoothPointer.current);
  });

  return (
    <mesh renderOrder={-10} frustumCulled={false} material={material}>
      <planeGeometry args={[2, 2]} />
    </mesh>
  );
}

/* ------------------------------------------------------------------ */
/*  Drifting particle field — adds 3D depth + pointer parallax         */
/* ------------------------------------------------------------------ */
const COUNT = 420;

const particleVertex = /* glsl */ `
  attribute float aScale;
  attribute vec3 aColor;
  varying vec3 vColor;
  uniform float uTime;
  uniform float uSize;

  void main() {
    vColor = aColor;
    vec3 pos = position;
    // very gentle vertical sway, phase-offset per particle
    pos.y += sin(uTime * 0.15 + position.x * 1.7) * 0.10;
    pos.x += cos(uTime * 0.12 + position.z * 1.3) * 0.07;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = uSize * aScale * (300.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

const particleFragment = /* glsl */ `
  precision highp float;
  varying vec3 vColor;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.0, d);
    gl_FragColor = vec4(vColor, a);
  }
`;

function Particles({ pointer }: { pointer: React.RefObject<THREE.Vector2> }) {
  const group = useRef<THREE.Group>(null);

  const { geometry, material } = useMemo(() => {
    const palette = [C1, C2, C3, C4];
    const positions = new Float32Array(COUNT * 3);
    const scales = new Float32Array(COUNT);
    const colors = new Float32Array(COUNT * 3);

    // deterministic-ish spread (no Math.random dependency on first paint feel)
    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 14;
      positions[i3 + 1] = (Math.random() - 0.5) * 9;
      positions[i3 + 2] = (Math.random() - 0.5) * 6 - 1.5;
      scales[i] = 0.4 + Math.random() * 1.2;
      const c = palette[(Math.random() * palette.length) | 0];
      // dim the particles so they read as faint, calm stardust
      const dim = 0.5;
      colors[i3] = c.r * dim;
      colors[i3 + 1] = c.g * dim;
      colors[i3 + 2] = c.b * dim;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    geo.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.ShaderMaterial({
      vertexShader: particleVertex,
      fragmentShader: particleFragment,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 0.12 },
      },
    });

    return { geometry: geo, material: mat };
  }, []);

  useFrame((state, delta) => {
    material.uniforms.uTime.value = state.clock.elapsedTime;
    const g = group.current;
    if (!g) return;
    // slow ambient rotation
    g.rotation.y = state.clock.elapsedTime * 0.015;
    g.rotation.x = Math.sin(state.clock.elapsedTime * 0.04) * 0.04;
    // gentle parallax toward the pointer
    const targetX = pointer.current.x * 0.4;
    const targetY = pointer.current.y * 0.25;
    g.position.x += (targetX - g.position.x) * Math.min(1, delta * 2);
    g.position.y += (targetY - g.position.y) * Math.min(1, delta * 2);
  });

  return (
    <group ref={group}>
      <points geometry={geometry} material={material} frustumCulled={false} />
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Scene root — tracks the pointer, drives both layers                */
/* ------------------------------------------------------------------ */
export default function AuroraScene() {
  const pointer = useRef(new THREE.Vector2(0, 0));

  useFrame((state) => {
    // state.pointer is normalised -1..1 with y up
    pointer.current.set(state.pointer.x, state.pointer.y);
  });

  return (
    <>
      <AuroraPlane pointer={pointer} />
      <Particles pointer={pointer} />
    </>
  );
}
