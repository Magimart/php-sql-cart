import React, {useState} from "react";
import { motion } from "framer-motion";  
import { Parallax  } from "react-parallax";
import { GoDownArrow } from "../Arrows";
import { useViewport } from "../../../utils/helpers/ViewPortWindow";
import { useInView } from "react-intersection-observer";


export const SectionOne = ({bounceUpDownFromDown, animateFromLeft, animateFromRight, fromUpSlow, onScrollVelocity}) =>{

         const image1 ="https://res.cloudinary.com/magimaart/image/upload/v1639695360/backgroundCover/image-one_z8meyq.jpg";
         const avatar = "https://res.cloudinary.com/magimaart/image/upload/v1638964850/portfolioApp/avatar/nhk6i5qrhdkdmrgdzmso.jpg"

         const { width } = useViewport();
         const breakpoint = 640;
         const [ direction, setPage] = useState([0, 0]);
         const [ref, inView, entry] = useInView({
           threshold: 0.5,
           triggerOnce: false
         });

       return (
                <Parallax  blur={{ min: -1, max: 3 }}
                    bgImage={image1} strength={40}
                    renderLayer={(percentage) => (
                    <React.Fragment>

                        <div  className={`flex-row  grid-flow-col 
                                        absolute
                                        h-screen w-screen
                                        
                                        opacity-${percentage & percentage > 1.60? (50): (70)}
                                        bg-${percentage & onScrollVelocity > 370? (
                                            'black'
                                           ): ('blue-100')}
                                        grid                                                                                
                                `}               
                        >
                                         
                            <section className="renderLeftWrapper 
                                col-span-full p-0 m-0 avatarWrapper 
                                relative
                                -top-14
                                w-full
                                h-screen
                                 right:auto
                                md:top-4 lg:top-4 xl:top-4 
                                "
                            > 
                               <div className="bg-red-400 relative
                                               block
                                               justify-center                                    
                                               w-full 
                                               left-28a
                                                                                           
                                              " 
                               >

                               <div
                                    style={{
                                        position: "absolute",
                                        background: `rgb(2, 14, 30,  ${percentage * 1 })`,
                                        right: "4%",
                                        top: "0%",          
                                        padding:"35px 15px 15px 15px",
                                        marginTop: "0%",
                                        borderRadius: "0%",
                                        opacity: 1,
                                        transform: "translate(21%, 5%)",
                                        minWidth: "1%",
                                        minHeight: "1%",
                                        width: percentage * 838,
                                        height: percentage * 1010,
                                        borderTopLeftRadius: "5rem",
                                    }}
                                >

                                     <>
                                       {
                                        onScrollVelocity < 214?(
                                        <>
                                        <div 
                                         variants={fromUpSlow}
                                               className="relative justify-centerc
                                                           top-28 -left-10
                                                           md:top-4 lg:top-4 xl:top-4
                                                        "
                                                ref={ref}
                                                variants={bounceUpDownFromDown}
                                                width={width}
                                                initial={{ 
                                                    opacity: 0, 
                                                    scale: -3
                                                    //scale: 1.6  
                                                }} 
                                                animate={inView ? "visible" : "hidden"}
                                                transition={{ 
                                                    duration: 1, 
                                                    delay: "0.6",
                                                    ease: "easeIn", 
                                                    // scale:-0.6,
                                                    type: "tween", 
                                                    stiffness: 80, 
                                                    damping: 300
                                                    }}
                            
                                                style={{ width: "100%", 
                                                }}          
                                        >
                                            <img className="relative 
                                                        w-36 m-6 h-36 md:w-48 md:h-48  
                                                        xl:w-50vw xl:h-50vh
                                                        rounded-full mx-auto
                                                        md:mx-6
                                                         lg:m-6 xl:mx-1
                                                         border-l-8 border-black border-opacity-90
                                                                                        
                                                        " 
                                                src={avatar} alt="magima felix o" 
                                            />                                  
                                        </div>
                                        </>
                                        ):("")
                                    }
                                         </>
                                
                                </div>

                               </div>
                            </section> 
                        </div>
                </React.Fragment>
                )}
                >
                <div className="h-44 px-12 bg-green-00 bg-opacity-60
                                relative top-64 
                                md:top-60 lg:top-60 xl:top-60
                            "
                >
                <div className="flex min-h-xs justify-center mt-32 
                    "
                >
                <div className="w-1/2   "        
                >
                    <div className="flex-1 justify-center">
                        <div className="flex flex-col text-center
                         items-center justify-center
                                   my-1 md:my-12a
                        ">
                        {
                        onScrollVelocity < 360?(
                            <>
                            <motion.h1 className=" relative
                                    font-hairline text-xs leading-
                                    text-white text-center justify-center 
                                    md:text-2xl lg:text-3xl xl:text-5xl
                                    "
                                                custom={direction}
                                                variants={animateFromRight}
                                                initial={{ 
                                                    opacity: 0, x: 1000, 
                                                     scale: width <= breakpoint? 3:6
                                                    //scale: 4,
                                                }
                                                }   animate="center"
                                                exit={{ opacity: 0, scale: 0.5, transition: { duration: 1, delay:"1" } }}

                                                transition={{
                                                x: { type: "spring", stiffness: 80, damping: 200 },
                                                opacity: { duration: 0.5  }
                                                }}            
                                >
                                    Magima 
                                </motion.h1>

                            </>                    
                        ):("")
                        } 
                               

                        {onScrollVelocity >= 103?(
                                <div className=" text-center items-center justify-center
                                                    my-1 
                                                 "
                                >
                                        <motion.h2 className="
                                            font-hairline text-sm leading-
                                            text-white text-center 
                                            text-xs relative top-1 left-12
                                           top-8 sm:top-10 md:top-16 lg:top-24 xl:top-32 xxl:top-32

                                            md:left-64 lg:left-64 xl:left-64
                                            "
                                                        custom={direction}
                                                        variants={animateFromRight}
                                                        initial={{ 
                                                            opacity: 0, x: 1000, scale: 2
                                                         }}                                           
                                                         animate="center"
                                                        exit="exit"
                                                        transition={{
                                                        x: { type: "tween", stiffness: 80, damping: 300 },
                                                        opacity: { duration: 0.5 }
                                                        }}            
                                        >
                                            
                                            {onScrollVelocity < 360? "feLiX ÖbuRu" :" ÖbuRu feLiX "  }
                                        </motion.h2>

                              </div>
                        ):""}

                    </div>
                </div>
                </div>
                </div>
                </div>
                {/* _____________title_______________________ */}
                <div className="flex flex-row -bottom-96  mt-32  
                 justify-center relative h-screeny w-screen  bg-blue-400 bg-opacity-">

                <motion.div className={`w-full  relative flex 
                           justify-center  
                           bg-${onScrollVelocity > 110?"bg-yellow-300":""}`}
                        custom={direction}

                    variants={animateFromLeft}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 10, damping:200 },
                        opacity: { duration: 1.5 }
                    }}
                >

                    <div className="titleWrapper  md:p-8  md:text-left 
                                relative left-5                              
                                xs:left-12 md:left-32  lg:left-32 xl:left-96
                                -top-80 xs:-top-64 sm:-top-64 md:-top-80 lg:-top-64 xl:-top-64 my-20
                                "
                    >
                     <figcaption className={`font-medium relative
                                            bg-gradient-to-t from-transparent via-gray-00 to-blac
                                               -top-${onScrollVelocity >= 103? "16": "28"}
                                                md:py-4a 
                            `}
                            >
                            <div className={`hOneWrap sm:ml-36 lg:ml-44 xl:mt-8 mb-12
                                  ${width && width <= breakpoint? "block": "flex"}
                                  `}
                               >
                                
                                
                                <h1 className="titleOne text-white text-lg 
                                         md:text-2xl lg:text-3xl xl:text-3xl
                                         font:semibold
                                       py-3 mx-2
                                         "
                                >
                                    SoftWare Engineer 
                                
                                </h1>
                                <h2 className=" text-gray-200 text-xl 
                                    mx-16a  relative  xs:top-12 md:top-12 lg:top-12 xl:top-12 xxl:top-12
                                      left-28 xs:left-20 sm:left-1 md:-left-11 lg:left-1 xl:left-3
                                      font-thinbold
                                      xs:my-2 sm:my-12 md:my-2 lg:my-2 xl:my-2
                                 "
                                 >  <span className="text-red-400 text-sm">&</span> _ Artist 
                                </h2>

                                 <span className="
                                       absolute top-30  text-white 
                                       text-white font-semibold text-base  ml-44
                                       md:font-bold lg:font-bold xl:font-bold
                                       md:text-lg lg:text-lg xl:text-lg
                                     sm:top-32 md:top-36 lg:top-28 xl:top-24 
                                     sm:left-48 md:left-20 lg:left-80 xl:left-48  xxl:left-48 
                                 "> 
                                     
                                     {onScrollVelocity < 50?(
                                            <GoDownArrow
                                            onScrollVelocity={onScrollVelocity}
                                            animateFromLeft={animateFromLeft} 
                                            direction={direction}
                                            animateFromRight={animateFromRight} 
                                        />
                                      ) : ("")
                                     }
                                </span>
                            </div>
                            
                        </figcaption>
                    </div>
                </motion.div>



                </div>

                </Parallax>



    )
}





















