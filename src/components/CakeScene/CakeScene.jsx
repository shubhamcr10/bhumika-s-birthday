import { motion } from "framer-motion";
import { useState } from "react";
import { cakeItems } from "./cakeData";
import Modal from "../Modal/Modal";

export default function CakeScene() {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <motion.div
      className="h-screen relative flex items-end justify-center bg-[#0b0b0b]"
      initial={{ scale: 1.3, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.img
        src="cake.png"
        className="w-[320px]"
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      />

      {cakeItems.map(item => (
        <motion.div
          key={item.id}
          className="absolute text-4xl cursor-pointer"
          style={item.position}
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
