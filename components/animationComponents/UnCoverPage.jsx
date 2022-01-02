import { motion } from "framer-motion";  //____testing


export const UnCoverPage = () => {

    const slideUP = {
        initial: {
          height: "50vh",
        },
        animate: {
          height: 0,
          top: 0,
        //   position: 'absolute', //------------test
          transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
            zIndex: 99
          },
        },
      };

      const slideDown = {
        initial: {
          height: "-50vh",
        },
        animate: {
          height: 0.00001,
          bottom: 0,
          zIndex: 100,
        //   position: 'absolute', //------------test
          transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
          },
        },
      };

    const defaultPageTitle = {
        pageTitile:'magima',
        description: 'welcome to ma home'
    }

    return (
        <>
                <motion.div exit={{ opacity: 0 }} className="unCoverProject   fixed bg-black w-screen h-screen
                                     
                                    "
                 initial="initial"
                 animate="animate"
                 variants={slideUP}     
               >
                 <div className=" grid w-screen h-screen justify-center
                                 text-xl text-white
                 ">
                     <motion.section>
                        <title>{defaultPageTitle.pageTitile}</title>
                     </motion.section>
                 </div>
               </motion.div>

               {/* <motion.div className="-z-10 unCoverProject fixed bg-black w-screen h-screen" */}
               <motion.div className=" unCoverProject fixed bg-black w-screen h-screen"

                 initial="initial"
                 animate="animate"
                 variants={slideDown}     
               >
                 <div className=" grid w-screen h-screen justify-center
                                 text-xl text-white
                 ">
                     <motion.section>
                        <title>{defaultPageTitle.pageTitile}</title>
                     </motion.section>
                 </div>
               </motion.div>
        </>
    )
}

