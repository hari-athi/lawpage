import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/card.css";

const Card = (props) => {
  const [Open, IsOpen] = useState(false);

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 1.5, type: "spring" } }}
      onClick={() => IsOpen(!Open)}
      className="card"
      style={{ borderRadius: "1rem" }}
    >
      <motion.h4 layout="position">{props.heading}</motion.h4>
      {Open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="expand"
        >
          <img src={props.image} alt="img"></img>
          <p>{props.content}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Card;
