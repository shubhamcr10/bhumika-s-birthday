import { motion } from "framer-motion";

export default function PhotoFrame({ src, delay }) {
  return (
    <motion.div
      style={{
        width: "120px",
        height: "160px",
        flex: "0 0 auto"
      }}
      className="bg-white p-2 shadow-2xl"
      initial={{ y: -120, opacity: 0, rotate: -6 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
    >
      <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <img
          src={src}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block"
          }}
        />
      </div>
    </motion.div>
  );
}
