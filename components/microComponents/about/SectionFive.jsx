import React from "react";
import { motion } from "framer-motion";  
import { Parallax  } from "react-parallax";
import { useViewport } from "../../../utils/helpers/ViewPortWindow";



 export const SectionFive = () =>{
    
  const image4 ="https://res.cloudinary.com/magimaart/image/upload/v1639695360/backgroundCover/image-four_b1nac2.jpg";
  
          const {width} = useViewport();
    return (

        <Parallax
        bgImage={image4}
         strength={200}
         renderLayer={(percentage) => (
          <div className=" text-white text-lg">
  
            <div
              style={{
                position: "absolute",
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left:width <= 640? `32%`:`44%`,
                top:width <= 640? `70%`:`28%`,
                transform: "translate(-30%,-30%)",
                 //width: percentage > .7? (450): (percentage * 650),
                 width: percentage > .7? (
                                          width <= 640? 380 :450
                                         ): (percentage * 650),
                  height: percentage * 700
                // height:width <= 640? 350:700,


              }}
            >        
  
                      <div className="nowIsYourTurnWrapper 
                           grid grid-cols-4 
                           bg-yellow-400
                           h-full w-full
                      " >

                          <div className="forlater col-span-1 w-20">
                           <div className="span-cols-full m-5">
                             <h1>
                                time line
                             </h1>                       

                           </div>
                          </div>
                          <div className={`yourTurnWrpper bg-black bg-opacity-50 
                                    col-span-3 rounded${width <= 640? `-l`:``}-3xl p-4 m-5`}
                                     >
                          <div className="span-cols-full block justify-center relative top-14 bg-gray-800 p-1 rounded-md">
                             <h1 className="text-gray-200 mx-2 my-1 py-1 ">
                               And Now it's your turn,<br></br>
                               <span className="text-indigo-400 
                               bg-black rounded-full  px-2 bg-opacity-90
                               ">
                                 Can Your Hire Me ?!
                               </span>
                             </h1>                       
                               <p className="text-yellow-200 text-xs py-10 mx-3 flex justify-center ">
                                 <span className="text-2xl  ">
                                 👺
                                   </span>  So write me before am taken haha <span className="text-2xl">🤭</span>
                               </p>

                             </div>
                          
                          </div>
                            
                      </div>
                </div>
  
          </div>
        )}
      >
        <div  className="grid flex-row grid-flow-col 
                               relative
                               h-screen w-screen
                               col-span-full
                               bg-yellow-6
                              "
         >
  
            <section  className="opacityWrapper flexa   grid-flow-col  
                             relative h-100vh
                             col-span-fulla
                             grid grid-rows-3 grid-cols-3 
                        "
              >
                   <div className=" p-0 m-0
                          xxs:col-span-fulla
                          xs:col-span-fulla
                          sm:col-span-fulla
                          md:col-span-6a
                          lg:col-span-6a
                          xl:col-span-6a
                          h-full
                          relative
                          w-1/3a
                         bg-indigo-600
                         bg-opacity-40
                         row-span-3 col-span-1
                         xxs:row-span-1 xxs:col-span-3
                         xs:row-span-1 xs:col-span-3
                         sm:row-span-1 sm:col-span-3
                       "
                   >
                     <div className="avatarWrapper text-white sans-serif
                             ">
                              {/* left--- */}

                              <div className="span-cols-full block justify-center bg-opacity-60 rounded-md m-4 
                                          bg-black 
                                          "
                              >
                             <h1 className="text-gray-200 mx-2 my-1 py-1 
                              m-2 p-4  text-3xl
                             ">
                               inside my <span className="font-bold xl:text-6xl xxl:text-6xl
                                                         focus:ring bg-clip-text  
                                                         text-transparent 
                                                         bg-gradient-to-r from-white via-green-300 to-red-500
                                                        "
                                          >
                                 StudioLab
                                 </span><br></br>
                               <span className="text-indigo-400 text-xl py-1 
                               bg-black rounded-full  px-2 bg-opacity-90
                               ">
                                 🔉 Coming<span className="text-red-400">Up</span>!
                               </span>
                             </h1>                       
                               <p className="text-yellow-200 text-xs md:text-base lg:text-base 
                               xl:text-lg xxl:text-lg mx-3 flex justify-center my-3 py-2 ">
                                 <span className="text-2xl mx-2">🎧
                                    </span> stay tuned !
                               </p>

                             </div>             
                      </div>
                   </div>

                    {/* middle */}
                    <div className=" p-0 m-0
                           xxs:col-span-fulla
                           xs:col-span-fulla
                           sm:col-span-fulla
                           h-full
                           w-1/3a
                         bg-yellow-900
                           relative
                          bg-opacity-40
                          row-span-3 col-span-1
                          xxs:row-span-1 xxs:col-span-3
                          xs:row-span-1 xs:col-span-3
                          sm:row-span-1 sm:col-span-3

                       "
                    >
                       <div className="introTextWrapper text-white sans-serif">
                              {/* data coming soon */}
                      </div>
                   </div>
                            {/* right side */}
                    <div className="col-span-4 p-0 m-0
                           xxs:col-span-fulla
                           xs:col-span-fulla
                           sm:col-span-fulla
                           h-full
                           w-1/3a
                         bg-black
                           relative
                          bg-opacity-60
                          row-span-3 col-span-1
                          xxs:row-span-1 xxs:col-span-3
                          xs:row-span-1 xs:col-span-3
                          sm:row-span-1 sm:col-span-3
                       "
                      >
                          <div className="introTextWrapper text-white sans-serif">                    
                              {/* data coming soon */} 

                          </div>
                    </div>
               </section>
      </div>
  
     {/* end section */}
      </Parallax>
  
 
 
    )
}






















