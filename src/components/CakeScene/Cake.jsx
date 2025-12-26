import { motion } from "framer-motion";

export default function Cake() {
  return (
    <motion.img
      src="cake.png"
      className="w-[220px]"
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 1.4,
        duration: 0.9,
        ease: "easeOut"
      }}
    />
  );
}
