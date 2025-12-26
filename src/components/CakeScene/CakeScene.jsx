import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cakeItems } from "./cakeData";
import Modal from "../Modal/Modal";

export default function CakeScene() {
  const [activeItem, setActiveItem] = useState(null);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowItems(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      className="h-screen relative flex items-end justify-center bg-[#0b0b0b]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Table shadow */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Cake reveal */}
      <motion.img
        src="cake.png"
        className="w-[320px] relative z-10"
        initial={{ y: 240, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      {/* Interactive icons appear later */}
      {showItems &&
        cakeItems.map(item => (
          <motion.div
            key={item.id}
            className="absolute text-4xl cursor-pointer"
            style={item.position}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.2 }}
            onClick={() => setActiveItem(item)}
          >
            {item.icon}
          </motion.div>
        ))}

      {activeItem && (
        <Modal item={activeItem} onClose={() => setActiveItem(null)} />
      )}
    </motion.div>
  );
}
