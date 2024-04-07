import "./hero.scss"

import { motion } from "framer-motion";
import React from 'react'
const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity: 0,
        y: 10,
        transition:{
            duration:2,
            repeat:Infinity,
        },

    },
};
const slideVariants={
    initial:{
        x:0,
       
    },
    animate:{
        x:"-200%",
        
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
            
        },
    },
   

    
};
   



const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textcontainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>SANTHOSH SRINIVASAN</motion.h2>
            <motion.h1 variants={textVariants}> FULL-STACK DEVELOPER</motion.h1>
            <motion.div variants={textVariants} className="buttons">
                <motion.button variants={textVariants}> See The latest Work</motion.button>
                <motion.button variants={textVariants}>Contact Me</motion.button>
            </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            
        </motion.div>
        </div>
        <motion.div className="slidingtextcontainer" variants={slideVariants} initial="initial" animate="animate">
            UI/UX DESIGNER 

        </motion.div>
        <div className="imagecontainer">
            <img src="/hero4.png" alt="" />

        </div>
    </div>
  )
}

export default Hero