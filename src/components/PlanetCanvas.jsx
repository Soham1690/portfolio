import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Planet = ({ isMobile }) => {
  const { scene } = useGLTF("/planet/scene.gltf");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = false;
        child.receiveShadow = false;
        child.frustumCulled = false;

        if (child.material) {
          child.material.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  return (
    <primitive
      object={scene}
      scale={isMobile ? 5 : 7}
      position={isMobile ? [0, -0.5, 0] : [0, -0.8, 0]}
    />
  );
};

const PlanetLoading = () => (
  <Html center>
    <div className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-semibold text-white/70 backdrop-blur-md">
      Loading planet
    </div>
  </Html>
);

const PlanetCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasContextError, setHasContextError] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const updateMobileState = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateMobileState();
    mediaQuery.addEventListener("change", updateMobileState);

    return () => {
      mediaQuery.removeEventListener("change", updateMobileState);
    };
  }, []);

  if (hasContextError) {
    return (
      <div className="flex h-[420px] w-full items-center justify-center text-sm text-white/60 sm:h-[560px]">
        3D planet unavailable on this device.
      </div>
    );
  }

  return (
    <div className="relative h-[420px] w-full overflow-visible bg-transparent sm:h-[560px]">
      <Canvas
        className="absolute inset-0 h-full w-full bg-transparent"
        frameloop="always"
        dpr={[1, 1.35]}
        camera={{
          position: isMobile ? [0, 0, 18] : [0, 0, 14],
          fov: isMobile ? 75 : 65,
        }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor("#000000", 0);

          gl.domElement.addEventListener("webglcontextlost", () => {
            setHasContextError(true);
          });
        }}
      >
        <Suspense fallback={<PlanetLoading />}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 5, 2]} intensity={1.2} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.2}
          />

          <Planet isMobile={isMobile} />

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default PlanetCanvas;

useGLTF.preload("/planet/scene.gltf");