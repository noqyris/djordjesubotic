import next from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...next,
  ...typescript,
  {
    ignores: [".next/**", "node_modules/**"],
  },
  {
    // React Three Fiber's render loop is deliberately imperative: useFrame()
    // mutates three.js objects every frame, and the scene is built once with
    // Math.random(). The React Compiler lint rules assume pure, memoizable
    // render and flag these idiomatic patterns as false positives.
    files: ["src/components/motion/AuroraScene.tsx", "src/components/motion/SceneBackground.tsx"],
    rules: {
      "react-hooks/immutability": "off",
      "react-hooks/purity": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default eslintConfig;
