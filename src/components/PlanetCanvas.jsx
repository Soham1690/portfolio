import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";

const Planet = ({ isMobile }) => {
  const { scene } = useGLTF("/planet/scene.gltf");

  return (
    <primitive
      object={scene}
      scale={isMobile ? 5 : 7}
      position={isMobile ? [0, -0.5, 0] : [0, -0.8, 0]}
    />
  );
};

const PlanetCanvas = () => {
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
      style={{ width: "100%", height: "100%" }}
      camera={{
        position: isMobile ? [0, 0, 18] : [0, 0, 14],
        fov: isMobile ? 75 : 65,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense
        fallback={
          <Html center>
            <div className="text-white text-sm">Loading...</div>
          </Html>
        }
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 5, 2]} intensity={1.2} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.2}
        />

        <Planet isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default PlanetCanvas;

useGLTF.preload("/planet/scene.gltf");
