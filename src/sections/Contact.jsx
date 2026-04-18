import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const PlanetCanvas = lazy(() => import("../components/PlanetCanvas.jsx"));

const stars = Array.from({ length: 230 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 71) % 100}%`,
  size: `${1 + ((index * 13) % 3)}px`,
  duration: 2.2 + ((index * 17) % 50) / 10,
  delay: ((index * 19) % 40) / 10,
  opacity: 0.22 + ((index * 11) % 62) / 100,
}));

const shootingStars = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  top: `${5 + ((index * 11) % 78)}%`,
  left: `${-18 + ((index * 17) % 42)}%`,
  width: `${90 + ((index * 29) % 130)}px`,
  duration: 3.4 + index * 0.35,
  delay: index * 1.2,
}));

const asteroids = Array.from({ length: 13 }, (_, index) => ({
  id: index,
  top: `${9 + ((index * 17) % 72)}%`,
  left: `${-20 - ((index * 9) % 20)}%`,
  size: `${10 + ((index * 7) % 18)}px`,
  duration: 9 + ((index * 13) % 12),
  delay: index * 1.9,
  rotate: `${(index * 43) % 360}deg`,
}));

const canUseWebGL = () => {
  try {
    const canvas = document.createElement("canvas");

    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
};

const AnimatedSpaceBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.95)]"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity * 0.25, star.opacity, star.opacity * 0.42],
            scale: [1, 1.9, 1],
            y: [0, -12, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {shootingStars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute h-[1px] rounded-full bg-gradient-to-r from-transparent via-cyan-200 to-transparent opacity-80"
          style={{
            top: star.top,
            left: star.left,
            width: star.width,
            rotate: "-22deg",
          }}
          animate={{
            x: ["0vw", "120vw"],
            y: [0, 360],
            opacity: [0, 0.9, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {asteroids.map((asteroid) => (
        <motion.span
          key={asteroid.id}
          className="absolute rounded-[45%_55%_50%_40%] border border-white/10 bg-gradient-to-br from-stone-200 via-stone-500 to-stone-950 shadow-[0_0_24px_rgba(148,163,184,0.38)]"
          style={{
            top: asteroid.top,
            left: asteroid.left,
            width: asteroid.size,
            height: asteroid.size,
            rotate: asteroid.rotate,
          }}
          animate={{
            x: ["0vw", "130vw"],
            y: [0, 120, -35, 180],
            rotate: ["0deg", "260deg", "540deg"],
            opacity: [0, 0.72, 0.72, 0],
          }}
          transition={{
            duration: asteroid.duration,
            delay: asteroid.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span className="absolute left-[22%] top-[24%] h-[22%] w-[22%] rounded-full bg-black/35" />
          <span className="absolute bottom-[18%] right-[24%] h-[16%] w-[16%] rounded-full bg-black/30" />
        </motion.span>
      ))}
    </div>
  );
};

const PlanetLoading = () => {
  return (
    <div className="flex h-[420px] w-full items-center justify-center sm:h-[560px]">
      <div className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs font-semibold text-white/70 backdrop-blur-md">
        Loading planet
      </div>
    </div>
  );
};

const Contact = () => {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showPlanet, setShowPlanet] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !canUseWebGL()) {
      setShowPlanet(false);
      return;
    }

    let timeoutId;
    let idleId;

    const loadPlanet = () => setShowPlanet(true);

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(loadPlanet, { timeout: 1000 });
    } else {
      timeoutId = window.setTimeout(loadPlanet, 700);
    }

    return () => {
      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }

      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setErrorMsg("");

    emailjs
      .send(
        "service_vxpddg6",
        "template_mxz41fq",
        {
          from_name: form.from_name,
          from_email: form.from_email,
          message: form.message,
        },
        "lI1nclELho7Gbi_kS"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);

          setForm({
            from_name: "",
            from_email: "",
            message: "",
          });

          window.setTimeout(() => setSuccess(false), 4000);
        },
        () => {
          setLoading(false);
          setErrorMsg("Something went wrong. Please try again or email me directly.");

          window.setTimeout(() => setErrorMsg(""), 4000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden bg-[#030412] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(145,94,255,0.28),transparent_34%),radial-gradient(circle_at_82%_20%,rgba(34,211,238,0.18),transparent_30%),linear-gradient(180deg,#030412_0%,#050816_100%)]" />

      <div className="absolute inset-0 opacity-[0.075] [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:72px_72px]" />

      <AnimatedSpaceBackground />

      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-purple-500/20 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-400/12 blur-[130px]" />

      <div className="relative z-10 grid min-h-screen w-full grid-cols-1 items-center gap-10 px-6 py-24 sm:px-10 md:px-14 lg:grid-cols-[0.92fr_1.08fr] lg:px-20 xl:px-28 2xl:px-36">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="w-full rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-300/80">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl xl:text-6xl">
            Let&apos;s build something.
          </h2>

          <p className="mt-4 text-base leading-7 text-white/60">
            Send a message and I&apos;ll get back to you as soon as possible.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
            <div>
              <label className="field-label" htmlFor="from_name">
                Your Name
              </label>

              <input
                id="from_name"
                type="text"
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                required
                placeholder="What's your name?"
                className="field-input field-input-focus"
              />
            </div>

            <div>
              <label className="field-label" htmlFor="from_email">
                Your Email
              </label>

              <input
                id="from_email"
                type="email"
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
                required
                placeholder="What's your email?"
                className="field-input field-input-focus"
              />
            </div>

            <div>
              <label className="field-label" htmlFor="message">
                Your Message
              </label>

              <textarea
                id="message"
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Tell me about the project, role or opportunity."
                className="field-input field-input-focus resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#050816] shadow-xl shadow-white/10 transition hover:-translate-y-0.5 hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                Message sent successfully.
              </p>
            )}

            {errorMsg && (
              <p className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                {errorMsg}
              </p>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative min-h-[420px] w-full overflow-visible sm:min-h-[560px]"
        >
          {showPlanet ? (
            <Suspense fallback={<PlanetLoading />}>
              <PlanetCanvas />
            </Suspense>
          ) : (
            <PlanetLoading />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;