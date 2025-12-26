import { motion } from "framer-motion";

export default function Table({ children }) {
  return (
    <motion.div
      className="absolute bottom-0 w-full h-[35%] bg-[#2a2a2a]"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="relative h-full flex items-center justify-center">
        {children}
      </div>
    </motion.div>
  );
}
