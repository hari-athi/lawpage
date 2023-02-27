import React from "react";
import {motion} from "framer-motion"

const Animatedtext =()=> {
  const text = "Effective Legal Solutions"
  const words = text.split(",");

  const container = {
    hidden: { opacity: 0 },
    visible: (i=1)=>({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x:0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ fontSize: "3rem"}}
      variants={container}
      initial="hidden"
      animate="visible"
      className="header-animated"
    >
      {words.map((word, index) => (
        <>
        <motion.span
          variants={child}
          style={{ margin: "4rem",color: "rgb(197, 94, 5)",display: "flex", flexWrap:"wrap"  }}
          key={index}
        >
          {word}
        </motion.span>
        
        </>
      ))}
    </motion.div>
  );
};

export default Animatedtext;