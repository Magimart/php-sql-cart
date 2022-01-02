import React from "react";
import UnCoverPageSlide from "../components/animationComponents/UnCoverPageSlider";
import BackgroundHome from "../components/layoutComponents/BackgroundHome";
import  HomeComponents  from "../components/mainComponents/HomeComponents";
import { dbConnect } from "../config";
import Info from "../models/info";
import { ViewportProvider } from "../utils/helpers/ViewPortWindow";



export default function HomePage ({ infos,  onFirstMount, allPathNames, currentLink}) {

  return (
         <>      
                    {onFirstMount && <UnCoverPageSlide/>}


                     <div id="HomeMwrappero"  
                          className=" grid  relative
                          bg-green-700 bg-opacity-75  m-0 p-0
                           h-screena w-screen
                          flex-wrap flex-colse
                           "
                      >
                     {onFirstMount && <BackgroundHome
                                onFirstMount={onFirstMount}
                    />}
                           <ViewportProvider>
                                   <HomeComponents
                                      onFirstMount={onFirstMount}
                                      currentLink={currentLink}
                                      allPathNames={allPathNames} 
                                      infos={infos}   
                                    />
                            </ViewportProvider>
                            
                       </div>      
          
        </>
  )
}

export async function getStaticProps(context) {
     dbConnect();

  try{
      const data = await Info.find({}).exec();
       const siteInfo = JSON.parse(JSON.stringify(data));

        //  console.log(siteInfo)
         return {
                  props: {
                        infos: siteInfo,
                  },
          };
  }catch(error){
           console.error(error.message);
  }

}