import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "sohamsanyal2@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <motion.button
      type="button"
      onClick={copyToClipboard}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-[13rem] cursor-pointer overflow-hidden rounded-full border border-white/10 bg-primary px-4 py-3 text-center text-sm font-semibold text-white shadow-xl shadow-black/20"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copied"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            <img src="/assets/copy-done.svg" className="w-5" alt="" />
            Email Copied
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <img src="/assets/copy.svg" className="w-5" alt="" />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;