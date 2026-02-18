import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import PlanetCanvas from "../components/PlanetCanvas";
import StarsCanvas from "../components/StarsCanvas";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
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

          // Auto-hide success message
          setTimeout(() => {
            setSuccess(false);
          }, 4000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setErrorMsg("Something went wrong. Please try again.");

          setTimeout(() => {
            setErrorMsg("");
          }, 4000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen overflow-hidden"
    >
      <StarsCanvas />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 px-6 lg:px-16 py-20">

        {/* LEFT SIDE – FORM */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 bg-[#0f0a29] p-10 rounded-2xl shadow-xl max-w-md w-full"
        >
          <h2 className="text-4xl font-bold text-white mb-8">
            Contact.
          </h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div>
              <label className="text-white text-sm">Your Name</label>
              <input
                type="text"
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                required
                placeholder="What's your name?"
                className="w-full mt-2 p-3 rounded-lg bg-[#1d1836] text-white outline-none"
              />
            </div>

            <div>
              <label className="text-white text-sm">Your Email</label>
              <input
                type="email"
                name="from_email"
                value={form.from_email}
                onChange={handleChange}
                required
                placeholder="What's your email?"
                className="w-full mt-2 p-3 rounded-lg bg-[#1d1836] text-white outline-none"
              />
            </div>

            <div>
              <label className="text-white text-sm">Your Message</label>
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="What do you want to say?"
                className="w-full mt-2 p-3 rounded-lg bg-[#1d1836] text-white outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send"}
            </button>

            {/* SUCCESS MESSAGE */}
            {success && (
              <p className="text-green-400 text-sm mt-2">
                Message sent successfully 🚀
              </p>
            )}

            {/* ERROR MESSAGE */}
            {errorMsg && (
              <p className="text-red-400 text-sm mt-2">
                {errorMsg}
              </p>
            )}
          </form>
        </motion.div>

        {/* RIGHT SIDE – PLANET */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 w-full h-[600px] relative"
        >
          <PlanetCanvas />
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
