import { motion } from "framer-motion";
import Cake from "./Cake";
import PhotoFrame from "./PhotoFrame";

export default function Table() {
  return (
    <motion.div
      className="absolute bottom-0 w-full h-[42%]"
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1.1, ease: "easeOut" }}
    >
      {/* Table top */}
      <div className="absolute bottom-0 w-full h-[65%] bg-[#2b2b2b]" />

      {/* Table front */}
      <div className="absolute bottom-0 w-full h-[35%] bg-[#1e1e1e]" />

      {/* CONTENT LAYER — NO TRANSFORMS */}
      <div className="absolute inset-0 flex items-end justify-center pb-12 gap-10">
        <PhotoFrame src="img1.jpg" delay={0.4} />
        <Cake />
        <PhotoFrame src="img2.jpg" delay={0.6} />
      </div>
    </motion.div>
  );
}
