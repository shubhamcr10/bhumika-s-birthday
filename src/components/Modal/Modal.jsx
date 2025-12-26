import { motion } from "framer-motion";

export default function Modal({ item, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white text-black p-6 rounded-xl max-w-md"
        initial={{ scale: 0.7 }}
        animate={{ scale: 1 }}
        onClick={e => e.stopPropagation()}
      >
        {item.type === "note" && <p>{item.text}</p>}
        {item.type === "photo" && (
          <img src={item.image} className="rounded-lg" />
        )}
      </motion.div>
    </motion.div>
  );
}
