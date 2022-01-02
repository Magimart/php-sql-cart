import React, {useState} from "react";
import { motion } from "framer-motion";  
import { Parallax  } from "react-parallax";
// import { animateFromLeft } from "../utils/animations/animate";
// import { fromUpSlow } from "../utils/animations/animateUpDown";
import { useViewport } from "../../../utils/helpers/ViewPortWindow";
import { useInView } from "react-intersection-observer";


export const SectionTwo = ({enterFromLeftSmall, enterFromLeft, onScrollVelocity}) =>{

    const image2 ="https://res.cloudinary.com/magimaart/image/upload/v1639695367/backgroundCover/image-two_mocayu.jpg"
    const { width } = useViewport();
         const [ direction, setPage] = useState([0, 0]);
         const [ref, inView, entry] = useInView({
           threshold: 0.5,
           triggerOnce: false
         });



    return (
            <Parallax bgImage={image2} strength={5}
                 renderLayer={(percentage) => (
                    <React.Fragment>
                       
                        <div  className={`grid flex-row  grid-flow-col 
                                    h-screen w-screen
                                    col-span-full
                                    justify-center
                                `}               
                        >
                        <section className={`renderRightWrapper p-0 titleIntroWrapper
                                         relative
                                        w-full
                                        h-full                                      
                                        md:-left-7 md:right-auto
                                        bg-${onScrollVelocity <= 1550? (onScrollVelocity >= 1100 && onScrollVelocity <= 1550? `green-800`: `blue-800`  ): ('black')}
                                        opacity-${onScrollVelocity  <= 1780? ((onScrollVelocity >= 1100 && onScrollVelocity <= 1420? 90: 70  )): (90)}
                                        justify-center
                                        flex
                                       `}
                        >

                            
                            <div 
                                style={{
                                    position: "relative",
                                    background: `rgba(25, 25, 0, ${percentage * 1})`,   
                                    height: "100%",
                                    borderRadius: "2%",
                                    textAlign: "center",
                                    // padding:"20px",
                                     margin:"20px",
                                     //transform: "translate(16%, -46%)",
                                     width: width < 640? 500:1000
                                   ,
                                    opacity: percentage && onScrollVelocity >= 1780? (0) : (25)                             
                                }}
                            >


                                { 
                                percentage && percentage?(
                                <> 
    

                                <article className={`article h-full w-full relative
                                            text-gray-100 text-sm leading-6
                                                md:text-base
                                                lg:text-base
                                                xl:text-lg 
                                                tracking-normal font-normal 
                                                break-normal
                                                relative
                                                px-18 
                                                bg-gradient-to-r from-transparent via-yellow-900 to-transparent 
                                                bg-opacity-25
                                                top-28
                                            `}
                                >

                                    <motion.blockquote className={`
                                                           relative   text-center 
                                                            my-36 md:my-48 lg:my-52 
                                                            xl:pt-10 px-24 sm:px-44 md:px-40  
                                                             py-3 
                                                         `}
                                                ref={ref}
                                                variants={width > 640? (enterFromLeft): enterFromLeftSmall}
                                                width={width}
                                                animate={inView ? "visible" : "hidden"}
                                                transition={{ duration: 0.9, ease: "easeOut" }}
                                                style={{ marginLeft: "1px", width:"100%"
                                                }}                 
                                    >
                                        “I'm a SoftWare Designer, Artist based in Germany specializing in web, mobile development and?, an earnest hipster longing for knowledge with enthism to learn new things in the
                                        Tech World. I have gained  previously an out standing knowlege, offering IT support(web applications) to NGOs as and handful of companies in Uganda and Kenya.
                                        I graduated with Bachelors of Science in Computer Science at Sikkim manipul University(INDIA) and since then never did i live without seeking solution for problems. 
                                        I am currently still embracing the joy of freelancing and making of artS.”
                                    </motion.blockquote> 
                                </article>
                                </> 
                                ) : (
                                <div className="bg-red-600 text-white">
                                    <h1>'reload page please'</h1>
                                </div>
                                )}
                            </div>
                        </section>     
                        </div>
                    </React.Fragment>
                  )}
                >
            </Parallax>


    )
}






















