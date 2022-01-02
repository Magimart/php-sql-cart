import React  from "react"
import { motion } from "framer-motion";  
import { useViewport } from "../../../utils/helpers/ViewPortWindow";




export const MyBackGroundWrapper = ({animateFromTop, onScrollVelocity, direction}) => {


    return (

        
          <div className="divDivider grid relative w-full h-96 justify-center
             bg-black bg-opacity-44  items-center 
             top-28a
                         "
        >
            {/* destop-- */}
                    {onScrollVelocity >= 300 && onScrollVelocity < 800? (
                        <>
                                <motion.h2 className="w-full h-96 text-white font-semibold text-base 
                                        justify-center relative top-0 
                                        inline-flex  
                                        md:font-bold md:text-lg   
                                        lg:font-bold lg:top-0 lg:text-lg  
                                        xl:font-bold  xl:text-lg 
                                        my-44
                                        "
                                    custom={direction}
                                    variants={animateFromTop}
                                    initial={{ 
                                        opacity: 0, y: -300, scale: 1 }}                                            animate="center"
                                    exit="exit"
                                    transition={{
                                    y: { type: "spring", stiffness: 600, damping: 300, },
                                    opacity: { duration: 1 },
                                    }}                                         
                                >
                                  —   My Background
                                </motion.h2>  
                          </>
                    ):("")}
                    {/* {onScrollVelocity > 240? (
                        <>
                            <h2 className="w-full h-96 text-white font-semibold text-base 
                                    justify-center relative top-0 
                                    inline-flex  
                                    md:font-bold md:text-lg   
                                    lg:font-bold lg:top-0 lg:text-lg  
                                    xl:font-bold  xl:text-lg
                                    my-40
                                    
                               "
                               custom={direction}
                               variants={animateFromTop}
                               initial={{ 
                                   opacity: 0, y: -400, scale: 1 }}                                            animate="center"
                               exit="exit"
                               transition={{
                               y: { type: "spring", stiffness: 600, damping: 300, },
                               opacity: { duration: 1 },
                               }}                                                                
                            >
                                  —   My Background{onScrollVelocity}
                            </h2>  
                      </>
                    ):("")}                */}
                </div>
    )
}








export const WorkExpierenceHeader = ({onScrollVelocity,
                       direction, animateFromRight
                    }) =>{

    return (
        <>

           <div className="divDivider grid relative w-full h-96 justify-center
                        bg-black bg-opacity-44  items-center
                        top-28a top-10
                        sm:top-44 sm:mb-24
                        "
            >
                <div className="  grid absolute top-20  -bottom-16a w-full
                            h-96a justify-center bg-blacka"
                >

                    {onScrollVelocity >= 1533 ? ( 
                        <>
                           <motion.h2 className="relative -bottom-44a  text-white 
                                text-white font-semibold text-base  mx-20
                                md:font-bold md:text-lg md:   
                                lg:font-bold lg:top-0 lg:text-lg 
                                
                                xl:font-bold  xl:text-lg xl:top
                                "
                                custom={direction}
                                variants={animateFromRight}
                                initial={{ 
                                    opacity: 0, x: 1000, scale: 1.5 }}                                          
                                      animate="center"
                                exit="exit"
                                transition={{
                                x: { type: "spring", stiffness: 600, damping: 300 },
                                opacity: { duration: 0.5 },
                                }}
                            >
                                    —   work experience 
                                        <span className="absolute mx-3 my-4 flex 
                                          right-4 xl:-right-20
                                        ">
                                             And Skills — 
                                        </span>
                            </motion.h2>
                        </>
                    ) : ""}

                </div>
            </div>

        </>
    )
}



export const MembershipMentorshipHeader = ({direction,onScrollVelocity, enterFromRight, animateFromTop}) =>{

    return (
            <>
              {/*  —   Membership & Mentorship section________________| ||_____________ */}
               <div className="divDivider grid relative w-full h-96 h-screena justify-center
                                bg-black shadow-3xl bg-opacity-44  items-center mb-32a
                                text-white 
                                -top-64a  md:top-0   lg:top-0 xl:top-0 
                                top-20             
                        "
                >

                 {
                    onScrollVelocity && onScrollVelocity >= 3800?(
                           <motion.h2 
                                 className=" font-semibold text-base
                                            relative -top-10 mx-20a 
                                            md:font-bold md:text-lg md:top-0    
                                            lg:font-bold lg:top-0 lg:text-lg lg:top-0 
                                            xl:font-bold  xl:text-lg xl:top-0a
                                            bg-yellow-300a
                       "
                       custom={direction}
                       variants={animateFromTop}
                       initial={{ 
                           opacity: 0, y: -400, scale: 1 }}                                 
                       animate="center"
                       exit="exit"
                       transition={{
                       y: { type: "spring", stiffness: 600, damping: 300, },
                       opacity: { duration: 1 },
                       }} 
                       >
                         —   Membership & Mentorship
                       </motion.h2>
                           ):(``)

                     }
                   {/* desktop---- */}
                   {
                    onScrollVelocity >= 2980 && onScrollVelocity < 3800?(
                           <motion.h2
                            className=" font-semibold text-base
                                        relative  mx-20a 
                                        md:font-bold md:text-lg md:top-0    
                                        lg:font-bold lg:top-0 lg:text-lg lg:top-0 
                                        xl:font-bold  xl:text-lg xl:top-0a
                                        bg-yellow-300a

                       "
                       custom={direction}
                       variants={animateFromTop}
                       initial={{ 
                           opacity: 0, y: -400, scale: 1 }}                             
                       animate="center"
                       exit="exit"
                       transition={{
                       y: { type: "spring", stiffness: 600, damping: 300, },
                       opacity: { duration: 1 },
                       }} 
                       >
                         —   Membership & Mentorship 
                       </motion.h2>
                           ):(``)

                     }

               </div>   
            </>
    )
}




export const ArtisticMindHeader = ({onScrollVelocity,
    direction, animateFromRight}) =>{

         const {width} = useViewport();

    return (
           <>

            <div className="divDivider grid relative w-full h-96 justify-center bg-black bg-opacity-75 ">
                {/* desktop--- */}
                 <ArtisticWrapper
                     animateFromRight={animateFromRight}
                     direction={direction}
                     onScrollVelocity={onScrollVelocity}
                 />
            </div> 

          </>
    )
}

export const ArtisticWrapper = ({animateFromRight, onScrollVelocity, direction}) => {


    return (
                <motion.h2 className=" text-white font-semibold text-base 
                        relative top-64 mx-20
                        md:font-bold md:text-lg   
                        lg:font-bold lg:top-0 lg:text-lg  lg:top-44
                        xl:font-bold  xl:text-lg
                        opacity-0
                    "
                    custom={direction}
                    variants={animateFromRight}
                    initial={{ 
                        opacity: 0, x: 1000, scale: 1.5 }}                                          
                            animate="center"
                    exit="exit"
                    transition={{
                    x: { type: "spring", stiffness: 600, damping: 300 },
                    opacity: { duration: 0.5 },
                    }}

                    >
                        —   & Artistic Mind
                </motion.h2>
    )
}