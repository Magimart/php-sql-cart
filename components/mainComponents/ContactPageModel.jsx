import { motion } from "framer-motion";  //____testing
import React, {useCallback, useEffect} from 'react';
import { toast } from 'react-toastify';


//________________________________________________leftwidget
export const ContactPageModel = () => {





    return (
      <>
         <motion.section
            // exit={{ opacity: 0 }}
              className="relative text-gray-700 body-font"
         >
          <div className=" flex items-center justify-center 
                              relative 
                              bg-gray-500 py- h-full
                              sm:px-6 lg:px-8a
                              "
          >
            <motion.div className="container bg-black space-y-1a bg-white
                              bg-opacity-40 
                              px-4a mx-4a my-8
                              relative -top-4
                  "
                initial={{ 
                  height: "1%", 
                  opacity: 0, 
                  // x: 60, scale: -0.6 }} no sale on small screens
                  x: -1000,
                    scale: 0.6
                  }}
               animate={{
                  height: "100%", 
                  width: "100%", 
                    opacity: 1,
                    // x: -447,small
                    x: 0,
                    // y:0,
                    scale: 0.9,
                    boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.3)",
                    transition: {
                      duration: 1,
                         scale: 5, 
                        // type: "tween", stiffness: -10 } gd
                        type: "spring", stiffness: 10 }
  
                  }
                }
                exit={{ opacity: 0, scale: -0.5, transition: { duration: 0.6 } }}                 
            >
              <div
                  className="flex flex-col w-full mb-12 text-center"
              >
                <h1 className="mb-4 text-2xl my-6 font-medium text-gray-900 sm:text-3xl title-font">
                  Welcome to Magima Connect 
                </h1>
                <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                  Well, i am so happy to have you here today and can't wait to read from 🤗🙏🏽
                </p>
             </div>
             <div className="mx-auto lg:w-1/2 md:w-2/3">
                <div className="flex flex-wrap -m-2">
                  <div className="w-1/2 p-2">
                    <input
                      className="w-full px-4 py-2 text-base bg-gray-100 border border-gray-400 rounded focus:outline-none focus:border-red-500"
                      placeholder="Name"
                      type="text"
                    />
                  </div>
                  <div className="w-1/2 p-2">
                    <input
                      className="w-full px-4 py-2 text-base bg-gray-100 border border-gray-400 rounded focus:outline-none focus:border-red-500"
                      placeholder="Email"
                      type="email"
                    />
                  </div>
                  <div className="w-full p-2">
                    <textarea required="" 
                      className="block min-h-[100px] max-h-[300px] w-full h-32 px-4 py-2
                      text-base bg-gray-100 border 
                      border-gray-400 rounded 
                      appearance-none
                        focus:outline-none focus:border-red-500"
                      placeholder="Message"
                    />
                  </div>
  
                  <div className="w-full p-2">
                    <button className="flex px-8 py-2 mx-auto text-lg text-white bg-red-500 border-0 rounded focus:outline-none hover:bg-red-600"
                       onClick={()=> alert("something went wrong, use email below to send us mail")}
                    >
                      Send
                    </button>
                  </div>
                  <div className="w-full p-2 pt-8 mt-8 text-center border-t border-gray-200">
                      <a className="text-red-500">
                        develope2210@gmail.com
                      </a>
                      <p className="my-5 leading-normal">
                            Schulze-Delitzsch-Str. 2
                            <br />
                            06526 Sangerhausen  
                      </p>
                  </div>
                </div>
              </div>
            </motion.div>
         </div>
      </motion.section>
  
          </>
    );
  };
  
  


  export const OopsError = ( ) => {
    return (
      <div className="bg-red-300 h-20 w-20 z-99">
                 <p>oops something went wrong</p>
                 {alert()}
      </div>
    )
  }



