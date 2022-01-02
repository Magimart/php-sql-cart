import { motion,  useViewportScroll, useTransform, useMotionValue } from "framer-motion";  
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useViewport } from "../../utils/helpers/ViewPortWindow";
import { SectionOne } from "../microComponents/about/SectionOne";
import { SectionTwo } from "../microComponents/about/SectionTwo";
import {MyBackGroundWrapper, WorkExpierenceHeader, ArtisticMindHeader, MembershipMentorshipHeader } from "../microComponents/about/SectionHeaders";
import { SectionThree } from "../microComponents/about/SectionThree";
import { SectionFour } from "../microComponents/about/SectionFour";
import { SectionFive } from "../microComponents/about/SectionFive";
import { SectionSix } from "../microComponents/about/SectionSix";
import { myStack } from '../../models/Portfolio';
import { useDispatch, useSelector } from "react-redux";
import {useRouter} from "next/router";



const AboutPageModel = ({bounceUpDownFromDown,currentPage, allPathNames,loading,
                          enterFromRight,
                          enterFromLeft, animateFromLeft, 
                          fromUpSlow, fromUp,enterFromLeftSmall,
                          animateFromRight,  animateFromTop,
                          enterFromLeftBig
                          }
                       ) =>  {


                        
        const [ direction, setPage] = useState([0, 0]);
        const [onScrollVelocity, setOnScrollVelocity] = useState(0);

        const { scrollY } = useViewportScroll();

        const y1 = useTransform(scrollY, [0, 300], [0, 200]);
        const y2 = useTransform(scrollY, [0, 300], [0, -100]);

        const exitRight = useTransform(scrollY, [200, -60], [600, 0]);

        const scale = useMotionValue(2.4)
        const x = useMotionValue(0)
        const xRange = [-10, 2]
        const opacityRange = [0, 1]
        const opacity = useTransform(x, xRange, opacityRange)

      const { width } = useViewport();


  useEffect(() => {
    scrollY.onChange(setOnScrollVelocity);

  }, []);


//   const avatar = "/images/avatar.jpg"
const image2 ="https://res.cloudinary.com/magimaart/image/upload/v1639695367/backgroundCover/image-two_mocayu.jpg"
const magimabio="https://res.cloudinary.com/magimaart/image/upload/v1639695372/backgroundCover/bio-magima_cuin57.jpg";


console.log("thats the velocict<<<<<<<<<------------------" )
   console.log(onScrollVelocity);


  return (
   <>
      <motion.section  className="z-0 absolute grid m-0 p-0 col-span-12 
          h-100vha h-auto 
          bg-gradient-to-t from-yellow-200 via-black to-transparent
          bg-opacity-40
                    "
        exit={{ opacity: 0, 
                scale: -0.3, 
                transition: {
                   duration: 0.9,
                   type: "tween", stiffness: 80
               } 
            }}
                 
      >
           {/* section ____________one___avatar_____________________  */}
      
               <SectionOne
                  onScrollVelocity={onScrollVelocity}
                  animateFromLeft={animateFromLeft} 
                  fromUpSlow={fromUpSlow}
                  direction={direction}
                  animateFromRight={animateFromRight} 
                  bounceUpDownFromDown={bounceUpDownFromDown}
               />

                     <MyBackGroundWrapper
                                     animateFromTop={animateFromTop}
                                     direction={direction}
                                     onScrollVelocity={onScrollVelocity}
                     />
           {/* section ____________two________________________  */}

               <SectionTwo
                      onScrollVelocity={onScrollVelocity}
                      enterFromLeft={enterFromLeft}
                      enterFromLeftSmall={enterFromLeftSmall}

               />

    {/* work expeirence_____________________ */}
          <WorkExpierenceHeader onScrollVelocity={onScrollVelocity}
              // inView={inView}
              enterFromRight={enterFromRight}
              animateFromLeft={animateFromLeft} 
              fromUpSlow={fromUpSlow}
              direction={direction}
              animateFromRight={animateFromRight}
          />
     {/* </motion.div>      */}


          <SectionThree
                               onScrollVelocity={onScrollVelocity}
                               animateFromLeft={animateFromLeft} 
                               fromUpSlow={fromUpSlow}
                               direction={direction}
                               animateFromRight={animateFromRight} 
                               enterFromLeftSmall={enterFromLeftSmall}
                               myStack={myStack}
                               animateFromTop={animateFromTop}
                               fromUpSlow={fromUpSlow}
                               enterFromLeft={enterFromLeft}
                               bounceUpDownFromDown={bounceUpDownFromDown}
          />

        <MembershipMentorshipHeader
              animateFromTop={animateFromTop}
              direction={direction}
              onScrollVelocity={onScrollVelocity}
        />
        <SectionFour
                  enterFromLeft={enterFromLeft}
                  enterFromLeftBig={enterFromLeftBig}
        />
        <ArtisticMindHeader   onScrollVelocity={onScrollVelocity}
              direction={direction}
              animateFromRight={animateFromRight}        
        />
        <SectionFive/>
        <SectionSix/>
   </motion.section> 
     </>
  );

}

export default AboutPageModel;
