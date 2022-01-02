import React, {useState} from "react";
import { motion } from "framer-motion";  
import { Parallax  } from "react-parallax";
// import { animateFromLeft } from "../utils/animations/animate";
// import { fromUpSlow } from "../utils/animations/animateUpDown";
import MyStack from "../MyStack";
import { Tabs, TabItem } from "../../tabs/Tabs";
import { MentorShipTabs } from "../../tabs/TabsMentorShip";
import { useInView } from "react-intersection-observer";
import { useViewport } from "../../../utils/helpers/ViewPortWindow";


export const SectionFour = ({enterFromLeft, enterFromLeftBig, onScrollVelocity}) =>{
    
  const image3 ="https://res.cloudinary.com/magimaart/image/upload/v1639695375/backgroundCover/image-three_bjzjgh.jpg";
  const inspiringKids ="https://res.cloudinary.com/magimaart/image/upload/v1639695366/backgroundCover/magima-working-with-children_uh15h1.jpg";
 
  const {width} = useViewport()
         const [ direction, setPage] = useState([0, 0]);
         const [ref, inView, entry] = useInView({
           threshold: 0.5,
           triggerOnce: false
         });

    return (
        <Parallax bgImage={image3} strength={-50}
        strength={200}
        renderLayer={(percentage) => (
          <div className="container w-full justify-center
                        relative
                        opacity-80
                        xs:left-16
                        left-10
                        md:left-96
                        lg:left-96
                        xl:left-96
                  "      
          >
            <div
              style={{
                     position: "relative",
                     background: `rgba(85, 85, 0, ${percentage * 1})`,
                     top: "-5%",
                     transform: "translate(-17%, 0%)",
                     width: percentage > .7? (700): (percentage * 0),
                     height: percentage > .7? (( percentage % 7) * 350 ): (percentage * 500)
              }}
            >              
                         <img className="relative
                               xl:w-50vw xl:h-50vh
                                mx-auto
                               " 
                             src={inspiringKids} alt="magima felix o" 
                         />
             </div>
          </div>
      )}
    
    >
      <div className="workExperienceWrapper relative justify-center 
                      md:w-4/6  :w-4/6
                      h-screen
                   ">
         <motion.div className="workExperienceContent
                         bg-gradient-to-r from-transparent via- to-transparent
                         bg-black
                         bg-opacity-75
                         z-10
                        "
                        ref={ref}
                        variants={enterFromLeftBig}
                       animate={inView ? "visible" : "hidden"}
                      //  transition={{ duration: 0.9, ease: "easeIn" }}
                      transition={{ 
                              type: "spring", stiffness: 100, damping: 100 ,
                              opacity: { duration: 0.4 }
                          }
                        }
                       style={{ marginLeft: "1px", width:"100%"
                       }}
         >
        <MentorShipTabs
                 defaultIndex="1" 
              
         >
            <TabItem label="as Developer" index="1">
            <article className="container article h-screen  w-full
                            text-white text-sm leading-6 mx
                              md:text-base
                             lg:text-base
                             xl:text-lg 
                             tracking-normal font-normal 
                             break-normal 
                             p-12
                             bg-gradient-to-r from-green-800 via-transparent to-green-900 
                          "
           >
              
          <p>
              I have really struggled to find a mentor in the world of both Software development and arts and therefore one 
              who finds a mentor who holds them by the hands to show them how things are done finds a good thing.
              Since i had this in mind irealize the need to share ideas with any body who fits that need.
           </p>
           <p>
              In internet cafe that was next to my office, i  showed a small group of children and young 
              mothers on how internet of things work.
              this was something i enjoyed doing tht i almost turned it acharity project to introduce peopele to the internet of things
           </p>

           </article>

           {/* end article */}
                      </TabItem>
          <TabItem label="Artist" index="2">
          <article className="container article h-screen  w-full
                            text-white text-sm leading-6 mx
                              md:text-base
                             lg:text-base
                             xl:text-lg 
                             tracking-normal font-normal 
                             break-normal 
                             p-12
                             bg-gradient-to-r from-green-800 via-transparent to-green-900 
                          "
           >
              
                <p>Show photography   Link﻿</p>

                of my biggest and most important hobbies. Over the past 10 years, I photographed more than 500 music shows in 3 countries.

                19-DPDP-86
                Illustration project with a religious overtone. One day I asked myself- "What would happen if the Biblical history took place in our times?".

                <p>Geek art collages   Link﻿</p>
                <p>   

                For me art is not a career but a life style, a passion that views things differently
                 as my mind boils with a lot of ideas about my material-surroundings. 
                 My future sees art as an anchor and cannot possibly imagine never being connected 
                 to a community or world of talent where anything is possible. 
                 During my previous workshops
                  I always captured into exploring  different disciplines, mixing and experimenting with colors, textures,
                   light and different mediums, an effect that always got me digging  deeper than was asked, 
                   just out of curiosity and pleasure.   As a gallerist promoting arts in my community, a place where no-matter your background, you still meet likeminded people to exchange ideas. Art to me is a synthesis of personal feelings, the subjects or colors that inspire me. The works capture the very critical views of social, political, cultural aspects.  In my work I deconstruct the human illusions, fairy tales, nursery myths and lullabies that have long been part of our childhood and adult way of life. Having being engaged in environmental awareness, civil rights movements, social works and the modern technology, my works reproduces the very familiar visual signs, re-arranged into a new conceptual mapping by using  lines, texture,
                 and color extracted from nature that relates to my cultural experiences.   
                 
                              </p>  
           </article>          
           </TabItem>
        </MentorShipTabs>
        </motion.div>
      </div>

    </Parallax>
    )
}


  



















