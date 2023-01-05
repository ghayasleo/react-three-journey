import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const Experience = () => {
  const cubeRed = useRef();

  useFrame((state, delta) => {
    cubeRed.current.rotation.y += delta;
  });

  return (
    <>
      <mesh position-x={-2}>
        <sphereGeometry />
        <meshNormalMaterial color="orange" />
      </mesh>

      <mesh
        ref={cubeRed}
        rotation-y={Math.PI * 0.25}
        position-x={2}
        scale={1.5}>
        <boxGeometry />
        <meshNormalMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshNormalMaterial color="greenyellow" />
      </mesh>
    </>
  );
};

export default Experience;
