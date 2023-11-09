import * as React from "react";
import { motion } from "framer-motion";
import "./button.css";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const Animation = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div>
      <motion.button onClick={() => setIsVisible(true)}>
        {" "}
        Показать
      </motion.button>
      {isVisible && (
        <motion.ul
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {[0, 1, 2, 3].map((index) => (
            <motion.li key={index} className="item" variants={item} />
          ))}
        </motion.ul>
      )}
    </div>
  );
};
