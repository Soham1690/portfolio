import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";

const Computer = ({ isMobile }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.needsUpdate = true;
      }
    });
  }, [scene]);

  return (
    <mesh>
      <hemisphereLight intensity={0.6} groundColor="black" />
      <directionalLight position={[5, 10, 5]} intensity={1.5} />
      <pointLight intensity={1} />

      <primitive
        object={scene}
        scale={isMobile ? 0.65 : 1}
        position={isMobile ? [0, -7, 0] : [0, -5, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{
        position: isMobile ? [0, 8, 16] : [0, 10, 14],
        fov: isMobile ? 34 : 28,
      }}
    >
      <Suspense
        fallback={
          <Html center>
            <div className="text-white text-sm">Loading...</div>
          </Html>
        }
      >
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          target={[0, -3, 0]}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Computer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

useGLTF.preload("/desktop_pc/scene.gltf");
