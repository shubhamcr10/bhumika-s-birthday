import { motion } from "framer-motion";

export default function PhotoFrame({ src, delay }) {
  return (
    <motion.div
      className="
        w-[120px] 
        h-[160px] 
        bg-white 
        p-2 
        shadow-2xl
        flex 
        items-center 
        justify-center
      "
      initial={{ y: -200, opacity: 0, rotate: -8 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
    >
      {/* ACTUAL IMAGE FRAME */}
      <div className="w-full h-full overflow-hidden">
        <img
          src={src}
          alt=""
          className="
            w-full 
            h-full 
            object-cover 
            rounded-sm
          "
        />
      </div>
    </motion.div>
  );
}
