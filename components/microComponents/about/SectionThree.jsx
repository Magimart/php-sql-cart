import React, {useState} from "react";
import { motion } from "framer-motion";  
import { Parallax  } from "react-parallax";
import MyStack from "../MyStack";
import { Tabs, TabItem } from "../../tabs/Tabs";
import { useViewport } from "../../../utils/helpers/ViewPortWindow";
import AsDeveloperArticle from "../../tabs/AsDeveloperArticle";
import AsArtist from "../../tabs/AsArtist";
 import { useInView } from "react-intersection-observer";



export const SectionThree = ({fromUpSlow, animateFromTop,
                        myStack,
                        enterFromRight,
                       enterFromLeft, onScrollVelocity,
                       enterFromLeftSmall,
                       animateFromRight, bounceUpDownFromDown
  }) =>{
       
         const image5 ="https://res.cloudinary.com/magimaart/image/upload/v1639695373/backgroundCover/image-five_e6ikkw.jpg";

         const {width} = useViewport()

         const [ direction, setPage] = useState([0, 0]);
         const [ref, inView, entry] = useInView({
           threshold: 0.5,
           triggerOnce: false
         });

    return (

      <Parallax  bgImage={image5} blur={{ min: -1, max: 3 }}
                  strength={-100}
      >
      <div className={`workExperienceWrapper  grid gap-2  
                      relative grid-cols-1 grid-rows-2
                      w-100wv h-auto
                        bg-black grid-flow-col
                        lg:grid-rows-1 lg:grid-cols-2 lg:mx-16a                    
                        xl:grid-rows-1 xl:grid-cols-2  xl:mx-16a 
                        xxl:grid-rows-1 xxl:grid-cols-2 xxl:mx-14a                         
                        md:mb-20 lg:mb-20 md:pb-20 lg:pb-32 
                        xl:mb-32 xl:pb-64 bg-opacity-60
                        bg-gradient-to-r from-transparent via-transparent to-transparent
                                                                                
                  `}                 
       >
            {/* top-${width <= 360? 64:96}                            */}

         {/* work expeirence_____________________ */}

          <section className="w-full h-full bg-blue-400a  relative  my-10a 
                                md:mb-48 md:pb-10
                                lg:mb-48 lg:pb-10
                                xl:mb-48 xl:pb-10
                                sm:top-32
                                top-56 lg:top-0 xl:top-0 xxl:top-0
                                
                              "
          >
             <motion.div className="w-full bg-gray-600"
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
<span className="text-red-400 text-xl">{inView}</span>
                  <Tabs defaultIndex="1" onTabClick={console.log}>
                      <TabItem className="bg-green-400" label="as Developer " index="1">
                        <AsDeveloperArticle
                         onScrollVelocity={onScrollVelocity}
                         enterFromLeftSmall={enterFromLeftSmall}
                         enterFromLeft={enterFromLeft}
                        />
                      
                      </TabItem>
                      {/* as artist work expierence */}
                      <TabItem className="bg-green-400" label="Artist" index="2">
                              <AsArtist/>
                      </TabItem>
                  </Tabs>
              </motion.div> 
         </section>

              {/*________________________________ my Stack section ___________________________________*/}
          <section className="myStack reletive
                             xl:cols-span-6 
                             xl:mx-2
                             mt-36a
                            "
           >

               
             <div className={`
                             myStackWrapper
                             w-full  h-auto  
                             px-2 
                              relative top-80  mt-64 
                               ${ onScrollVelocity >= 3100 ? (`
                               bg-black
                               bg-gradient-to-r from-transparent via-black to-green-900
                                `):(``)}
                                ${ onScrollVelocity >= 2400 && onScrollVelocity < 3100 ? (`
                                bg-black
                                bg-gradient-to-r from-transparent via-black to-green-900
                                 `):(``)}
                            `}
              >
                    <span>
                      {/* desktop */}
                        {onScrollVelocity > 2400 && onScrollVelocity <= 3100?(                    
                          <MyStackHeader
                          animateFromTop={animateFromTop}
                          inView={inView}  direction={direction}
                          onScrollVelocity={onScrollVelocity}
                          />
                        ):("")}
                        {/* mobile */}
                      {onScrollVelocity >= 3100?(                    
                          <MyStackHeader
                          animateFromTop={animateFromTop}
                          inView={inView}  direction={direction}
                          onScrollVelocity={onScrollVelocity}
                          />
                        ):("")}
                    </span>

                 <MyStack
                      myStack={ myStack }  
                      onScrollVelocity={onScrollVelocity}
                      inView={inView} 
                      enterFromRight={enterFromRight}
                      fromUpSlow={fromUpSlow}
                      direction={direction}
                      animateFromRight={animateFromRight}
                 />
             </div>
           </section>
        </div>
     </Parallax> 
 
 
    )
}


 export const MyStackHeader = ({animateFromTop,inView, direction, onScrollVelocity}) => {

    return (
                <motion.div className=" w-full flex
                      justify-center my-8  relative "
                  custom={direction}
                  variants={animateFromTop}
                  initial={{ 
                  opacity: 0, y: -500, scale: 1 }}
                  animate="center"
                  exit="exit"
                  transition={{
                  y: { type: "spring", stiffness: 600, damping: 300 },
                  opacity: { duration: 2.5 },
                  }} 
                  >
                  <h2 className="text-yellow-300 text-xl font-bold mt-16 mb-5 "> 
                  MyStack <span className="text-white px-1 font-thin">
                  knowHow 
                  </span>                             
                  </h2>
              </motion.div>

    )
  }
