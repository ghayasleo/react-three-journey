import React, { useRef } from "react";
import * as THREE from "three";
import { OrbitControls, useHelper } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useControls } from "leva";

const Experience = () => {
  // refs
  const cube = useRef();
  const sphere = useRef();
  const directionalLight = useRef();

  useHelper(directionalLight, THREE.DirectionalLightHelper);

  // debug
  const { Debug: enableDebug } = useControls("Debug panel", {
    Debug: true,
  });
  const { position } = useControls("Transform controls", {
    position: {
      value: { x: 2, y: 0 },
      step: 0.01,
      joystick: "invertY",
    },
  });

  return (
    <>
      {enableDebug && <Perf position="top-left" />}
      <OrbitControls makeDefault maxPolarAngle={Math.PI / 2 - 0.1} />
      <directionalLight
        ref={directionalLight}
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-mapSize={[4096, 4096]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      />
      <ambientLight intensity={0.5} />

      <mesh
        ref={cube}
        castShadow
        position={[position.x, position.y, 0]}
        scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <mesh ref={sphere} castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh
        position-y={-1}
        receiveShadow
        rotation-x={-Math.PI * 0.5}
        scale={10}>
        <planeGeometry />
        <meshStandardMaterial
          resolution={720}
          blur={[1000, 1000]}
          mixBlur={1}
          color="yellow"
        />
      </mesh>
    </>
  );
};

export default Experience;
