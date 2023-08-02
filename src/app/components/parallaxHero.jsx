"use client";
import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react";
import Navbar from './nav.js'
export default function Para() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start","end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const oneY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const twoY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const threeY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);


  return (
    <>
      <div className="relative z-50 sticky">
     <div className="absolute  h-20  z-10 inset-0 pt-6">
	  <Navbar />
    </div>
    <div className="absolute z-0 h-20 inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-40 blur backdrop-blur rounded-md shadow-md pt-6"></div>
     <div className="absolute z-0 h-20 inset-0 bg-black backdrop-blur  opacity-10 pt-6"></div>
    </div>
    
    <div 
    ref={ref}
    className="w-full h-screen overflow-hidden relative grid place-items-center">
      
            <motion.div className="absolute inset-0 z-0 bg-bottom bg-cover"  
	     style={{ backgroundImage: "url('1.svg')", y: backgroundY
	     }}>
	    </motion.div>

	    <motion.div className="absolute inset-0 z-10  bg-bottom bg-cover"  
	    style={{ backgroundImage: "url('2.svg')", y: oneY
 
	    }}>
	    </motion.div>

            <motion.div className="absolute inset-0 z-20 bg-bottom bg-cover"  
	    style={{ backgroundImage: "url('3.svg')", y: twoY

	    }}>
	    </motion.div>
	    <motion.h1 className="font-bold text-white text-8xl mt-48 mr-56 relative z-30" style={{y: textY}}>Programer<br/> with Artist'Soul </motion.h1>

            <motion.div className="absolute inset-0 z-40 bg-bottom bg-cover"  
	    style={{ backgroundImage: "url('4.svg')", y: threeY
 
	    }}>
	    </motion.div>

        </div>
    </>
  )
}
