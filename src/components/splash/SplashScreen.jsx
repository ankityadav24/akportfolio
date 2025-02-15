import { motion } from "framer-motion";
import React, { useEffect } from "react";
import "../splash/splashscreen.css";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    setTimeout(() => {
      onFinish(); 
    }, 2000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      // animate={{ opacity: 0, scale: 1.5 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="splashContainer"
    >
      <div className="pentagon">
        <svg viewBox="0 0 100 100">
          <polygon points="50,5 95,35 80,90 20,90 5,35" />
        </svg>
        <h1 className="letter">A</h1>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
