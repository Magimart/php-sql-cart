import React from "react";
import { motion } from "framer-motion";




const showPage = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        // when: "afterChildren",
        duration: 1.5,
        ease: [0.63, 0, 0.17, 2],
      },
    },
  };
   
  const introTextContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
  };
  
  const introText = {
    initial: {
      y: 40,
    },
    animate: {
      y: 80,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };


const UnCoverPageSlide = () => {
    // prevent user from seeing footer by scrolling down
    React.useState(() => {
      typeof windows !== "undefined" && window.scrollTo(0, 0);
    }, []);
  
    return (
      <motion.div
        className="relative z-50 flex items-center justify-center w-full bg-black"
        initial="initial"
        animate="animate"
        variants={showPage}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }
      >
        <motion.svg variants={introTextContainer} className="absolute mt-16 z-50 flex">
          <pattern
            id="pattern"
            patternUnits="userSpaceOnUse"
            width={750}
            height={800}
            className="text-white"
          >
            <rect className="w-full h-full fill-current" />
            <motion.rect
              variants={introText}
              className="w-full h-full text-gray-600 fill-current"
            />
          </pattern>
          <text
               className="text-4xl font-bold"
               textAnchor="middle"
               x="50%"
               y="50%"
               style={{ fill: "url(#pattern)" }}
          >
            Magima 
          </text>
        </motion.svg>
      </motion.div>
    );
  };

export default UnCoverPageSlide;



