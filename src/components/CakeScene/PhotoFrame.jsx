import { motion } from "framer-motion";

export default function PhotoFrame({ src, style, delay }) {
  return (
    <motion.div
      className="absolute bottom-[20%] w-[120px] h-[160px] bg-white p-2 shadow-xl"
      style={style}
      initial={{ y: -300, opacity: 0, rotate: -10 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
    >
      <img src={src} className="w-full h-full object-cover" />
    </motion.div>
  );
}
