import { motion } from "framer-motion";

export default function Table({ children }) {
  return (
    <motion.div
      className="absolute bottom-0 w-full h-[40%]"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
    >
      {/* Table top */}
      <div className="absolute bottom-0 w-full h-[65%] bg-[#2b2b2b]" />

      {/* Table front (gives depth) */}
      <div className="absolute bottom-0 w-full h-[35%] bg-[#1e1e1e]" />

      {/* Items ON the table */}
      <div className="relative h-full w-full flex justify-center items-end pb-12">
        {children}
      </div>
    </motion.div>
  );
}
