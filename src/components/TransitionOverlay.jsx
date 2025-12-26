import { motion } from "framer-motion";

export default function TransitionOverlay({ show }) {
  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
  );
}
