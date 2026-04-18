import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

const ComputersCanvas = lazy(() => import("../components/Computer.jsx"));

const getDeviceProfile = () => {
  if (typeof window === "undefined") {
    return {
      isMobile: true,
      prefersReducedMotion: true,
      canUseWebGL: false,
    };
  }

  let canUseWebGL = false;

  try {
    const canvas = document.createElement("canvas");
    canUseWebGL = Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    canUseWebGL = false;
  }

  return {
    isMobile: window.matchMedia("(max-width: 900px)").matches,
    prefersReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    canUseWebGL,
  };
};

const HeroCanvasFallback = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="relative h-[18rem] w-[min(86vw,38rem)] overflow-hidden rounded-[2rem] border border-white/10 bg-black/25 p-5 shadow-2xl shadow-purple-950/30 backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(145,94,255,0.28),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.16),transparent_38%)]" />

        <div className="relative z-10 mb-5 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <span className="ml-auto rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
            portfolio.jsx
          </span>
        </div>

        <div className="relative z-10 space-y-3 font-mono text-sm leading-6 text-white/75">
          <p>
            <span className="text-cyan-300">const</span>{" "}
            <span className="text-purple-300">developer</span> = &#123;
          </p>
          <p className="pl-5">
            name: <span className="text-emerald-300">"Soham Sanyal"</span>,
          </p>
          <p className="pl-5">
            role: <span className="text-emerald-300">"Full Stack Developer"</span>,
          </p>
          <p>&#125;;</p>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [deviceProfile, setDeviceProfile] = useState(() => getDeviceProfile());
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const updateDeviceProfile = () => {
      setDeviceProfile(getDeviceProfile());
    };

    updateDeviceProfile();
    window.addEventListener("resize", updateDeviceProfile);

    return () => window.removeEventListener("resize", updateDeviceProfile);
  }, []);

  useEffect(() => {
    const { isMobile, prefersReducedMotion, canUseWebGL } = deviceProfile;

    if (isMobile || prefersReducedMotion || !canUseWebGL) {
      setShowCanvas(false);
      return;
    }

    let timeoutId;
    let idleId;

    const loadCanvas = () => setShowCanvas(true);

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(loadCanvas, { timeout: 700 });
    } else {
      timeoutId = window.setTimeout(loadCanvas, 450);
    }

    return () => {
      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }

      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [deviceProfile]);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#02030d] bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,0.22), rgba(0,0,0,0.06)), url('/my-bg.png.png')",
      }}
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_16%_20%,rgba(145,94,255,0.16),transparent_28%),radial-gradient(circle_at_82%_32%,rgba(34,211,238,0.12),transparent_32%)]" />

      <div className="absolute left-0 right-0 top-[4.8rem] z-30 mx-auto flex max-w-7xl flex-row items-start gap-5 px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scaleY: 0.4 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-2 flex origin-top flex-col items-center justify-center"
        >
          <div className="h-5 w-5 rounded-full bg-[#915EFF] shadow-[0_0_30px_rgba(145,94,255,0.9)]" />
          <div className="violet-gradient h-36 w-1 sm:h-64 lg:h-72" />
        </motion.div>

        <div className="max-w-[48rem]">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I&apos;m Soham
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.42,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-2 text-2xl font-semibold text-[#915EFF] sm:text-3xl"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.46,
              delay: 0.16,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`${styles.heroSubText} mt-4 max-w-[42rem] text-white-100`}
          >
            A Developer Dedicated to Crafting{" "}
            <br className="hidden sm:block" />
            Modern & Scalable Web Solutions
          </motion.p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 h-[54svh] min-h-[430px] max-h-[620px] overflow-visible sm:h-[56svh] sm:min-h-[470px] lg:h-[58svh] lg:min-h-[500px]">
        <div className="absolute inset-x-0 bottom-0 h-full translate-y-[6%]">
          {showCanvas ? (
            <Suspense fallback={<HeroCanvasFallback />}>
              <ComputersCanvas />
            </Suspense>
          ) : (
            <HeroCanvasFallback />
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-black/45 to-transparent" />

      <div className="absolute bottom-6 z-40 flex w-full items-center justify-center">
        <a href="#about" aria-label="Scroll to about section">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;