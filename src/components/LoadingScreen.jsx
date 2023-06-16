import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.5,
      duration: 0.5,
      ease: "backOut",
    },
  },
};

const bgVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

const LoadingScreen = () => {
  return (
    <div className='loading-root w-full h-screen overflow-hidden relative'>
      <motion.div
        variants={bgVariants}
        initial="hidden"
        animate="visible"
        className='loading-bg  z-10'
      />
      <motion.h1
        variants={textVariants}
        initial='hidden'
        animate='visible'
        className='flex justify-center items-center w-full h-screen bg-white/50 text-gray-800 text-6xl font-bold'
      >
        Home Design
      </motion.h1>
    </div>
  )
}

export default LoadingScreen;
