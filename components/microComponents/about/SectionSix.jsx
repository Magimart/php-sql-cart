import React from "react";
import { motion } from "framer-motion";  
import { Parallax, Background } from "react-parallax";
import { SocialComponents } from "../SocialMediaLinks";



 export const SectionSix = () =>{
    
         const image5 ="/images/image-four.jpg";

    return (

        <Parallax strength={500}
        bgImage={image5}

        >
      <Background className="custom-bg">
        <div
        />
      </Background>
      <div className="grid text-center h-80 w-screen bg-black bg-opacity-70">
              <br />
               <h1 className="text-gray-50 font-sans text-3xl"> I need a little extra time </h1>
               <br />
                 <h2 className="text-gray-50 font-sans text-xl"> to bring out the never unseen </h2>
               <br />

            <SocialComponents/>   
      </div>
    </Parallax>
 
 
    )
}






















