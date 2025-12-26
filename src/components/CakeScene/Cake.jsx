import { motion } from "framer-motion";

export default function Cake() {
  return (
    <motion.img
      src="cake.png"
      className="w-[260px] relative z-10"
      initial={{ y: -400, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 1.6,
        duration: 0.9,
        ease: "easeOut"
      }}
    />
  );
}
