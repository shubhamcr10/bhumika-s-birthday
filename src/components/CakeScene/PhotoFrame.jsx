import { motion } from "framer-motion";

export default function PhotoFrame({ src, x, delay }) {
  return (
    <motion.div
      className="w-[110px] h-[150px] bg-white p-2 shadow-2xl"
      style={{ transform: `translateX(${x}px)` }}
      initial={{ y: -200, opacity: 0, rotate: -8 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
    >
      <img src={src} className="w-full h-full object-cover" />
    </motion.div>
  );
}
