import React from "react";
import { useGLTF } from "@react-three/drei";

const Planet = () => {
  const planet = useGLTF("/planet/scene.gltf");

  return (
    <primitive
    object={scene}
    scale={2.0}          
    position={[0, 100, 0]}
    />
    );
};

export default Planet;