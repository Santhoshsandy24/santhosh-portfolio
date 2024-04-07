import React from 'react'
import { motion } from 'framer-motion';
const variants={
    open:{
        transition:{
            staggerChildren :0.1,
        },
    },
    closed:{
        transition:{
            staggerChildren:0.05,
            staggerChildren:-1,
        },
    },
};

const itemsvariant={
    open:{
        y:0,
        opacity:1,

    },
    closed:{
        y:50,
        opacity:0,
    },

};

const items =[
    "HomePage",
    "services",
    "Protfolio",
    
    
];
  
    



const links = () => {
  return (
    <motion.div className='links'variants={variants}>{items.map(item =>(<motion.a href={`#${item}`} key={item} variants={itemsvariant} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{item}</motion.a>))}</motion.div>
  )
}

export default links