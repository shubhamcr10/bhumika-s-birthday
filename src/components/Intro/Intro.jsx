import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { introLines } from "./introData";

export default function Intro({ onFinish }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < introLines.length) {
      const t = setTimeout(() => setIndex(index + 1), 1200);
      return () => clearTimeout(t);
    } else {
      setTimeout(onFinish, 1500);
    }
  }, [index]);

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="text-3xl text-center space-y-4">
        {introLines.slice(0, index).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
