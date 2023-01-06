import {
  Float,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PivotControls,
  Text,
  TransformControls,
} from "@react-three/drei";
import React, { useRef } from "react";

const Experience = () => {
  const sphere = useRef();
  const cube = useRef();

  return (
    <>
      <OrbitControls makeDefault maxPolarAngle={Math.PI / 2 - 0.1} />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <PivotControls anchor={[0, 0, 0]} depthTest={false} lineWidth={3}>
        <mesh ref={cube} position-x={2} scale={1.5}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
          <Html
            wrapperClass="label"
            center
            distanceFactor={8}
            position={[0, 0, 0.51]}
            occlude={[sphere, cube]}>
            Hello world
          </Html>
        </mesh>
      </PivotControls>

      <mesh ref={sphere} position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={720}
          blur={[1000, 1000]}
          mixBlur={1}
          color="greenyellow"
        />
      </mesh>

      <Float></Float>
      <Text
        position={[0, 2, -1]}
        fontSize={1}
        font="./bangers-v20-latin-regular.woff"
        color="salmon">
        I love R3F
      </Text>

      <TransformControls object={sphere} mode="translate" />
    </>
  );
};

export default Experience;
