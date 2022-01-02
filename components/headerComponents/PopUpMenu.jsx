
import React,{useState, useEffect } from "react";
import { motion } from "framer-motion";  
import { NavItems } from "./NavItems";
// import { handleToggle, onToggle } from "../../utils/helpers/helper";
import Link from 'next/link'
import { SocialComponents } from "../microComponents/SocialMediaLinks";
import { signOut, useSession} from 'next-auth/client';
import { useDispatch, useSelector } from 'react-redux';
import { isCurrentUser } from '../../redux/actions/userActions';
import { SignOut } from "./SignOut";
import SignInLink from "./SignInLink";
// import { handleCloseOpen } from "../../utils/helpers/helper";


 const PopUpMenu = ({allPathNames} ) =>{
       

    const session = useSession();

    const [liveUser, setLiveUser]  = useState([])

      const dispatch= useDispatch();
      const {user, loading} = useSelector(state => state.isCurrentUser)
      
    useEffect(() => {
      if (!user) {
        dispatch(isCurrentUser())
      }
        // setLiveUser(user);

    // }, [dispatch, user])
  }, [dispatch, user])


        const [tongleOnClick, setToggleOnClick] = React.useState(false);
      
       const handleCloseOpen = () =>{
         return (
          setToggleOnClick(!tongleOnClick)
         )           
       };

  
      //  console.log("here is the current logged in  user -------------------------------xx")
      //  console.log(liveUser);


    return (
  

  // <div className={`popupWraper fixed bg-black}  
   <div className={`popupWraper ${tongleOnClick?"fixed bg-black":""}  
                       justify-center w-full h-full 
                       text-black   left-0 m-0 items-center top-0 opacity-90
                     `}
    > 
      {/* ----entire screen blur--//____________menueButton */}
            <div onClick={handleCloseOpen}
                    className=" w-8 h-8  
                                 z-10 absolute right-0 mx-4 mt-1 block 
                                bg-white  font-bold text-3xl
                                opacity-9                                                      
                          " 
            >
                  <div className=" w-8 h-8 mx-1 p-1
                                          bg-gradient-to-r from-transparent red-300 via-yellow-600 to-black
                                          hover:from-transparent via-green-200 hover:to-gray-500 text-white text-xs 
                                          ring ring-green-600 
                                          ring-offset-2 ring-offset-green-100                                           
                                      "
                  >
                    {
                     tongleOnClick  && tongleOnClick? (
                               <h3 className="absolute  bg-yellow-400 w-full h-full  mx-1 top-0 left-0 text-2xl text-white ">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                     <path d="M17.016 15.609l-3.609-3.609 3.609-3.609-1.406-1.406-3.609 3.609-3.609-3.609-1.406 1.406 3.609 3.609-3.609 3.609 1.406 1.406 3.609-3.609 3.609 3.609zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z"/>
                                  </svg>
                              </h3>
                            ) :
                            (
                               <svg viewBox="20 0 90 110" width="40" height="40"
                                        className="my- absolute"
                                >
                                     <rect width="30" height="10"></rect>
                                     <rect y="30" width="50" height="10"></rect>
                                     <rect y="60" width="70" margin="1" height="10"></rect>
                                </svg>
                            )
                    }
                    </div>
            </div>
          {
            tongleOnClick && (           
            
            <motion.section 
            exit={{ opacity: 0, scale: -0.5, transition: { duration: 0.6 } }}                
            className="popUpmen relative flex 
               justify-center  w-screen h-screen
               
               "

            >
              <motion.div 
                    initial={{ 
                                height: "1%", 
                                opacity: 0, 
                                // x: 60, scale: -0.6 }} no sale on small screens
                                x: 600,
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
                          duration: .2,
                            type: "spring", stiffness: 10
                           }
                      }
                    }
              >

               <section className="openCloseMenuWrapper grid 
                                    fixed 
                                    justify-center left-0 m-0
                                    h-full top-0 w-full  bg-opacity-90 
                                    bg-black rounded-lg p-3
                                    bg-gradient-to-r from-gray-800  via-black  to-gray-900
                                    "
              >

                      <div className="bg-black p-2 bg-opacity-80 flex justify-end
                                      rounded-md mt-3  h-24
                                      bg-gradient-to-r transparent  via-black to-black
                                      
                                      "
                      >
                          <div className=" mx- bg-gray-800 w- ">
                                <div className="bg-whiten h-7 w-  flex">
                                    <span className="text-white  bg-black px-"> 
                                      {/* {liveUser && liveUser.fName}  */}
                                      {user && user.fName}            
           
                                    </span>
                                    <span className="bg-whiten h-7 w-7 rounded-full">
                                      {/* <img src={liveUser && liveUser.avatar.url} /> */}
                                      <img src={user && user.avatar.url} />

                                    </span>
                                </div>
                                <div className="bg-blacka flex justify-center "

                                   onClick={() => handleCloseOpen()}
                                
                                > 
                                 {/* { session && liveUser?  <SignOut/>: <SignInLink/>} */}
                                 { session && user?  <SignOut/>: <SignInLink/>}


                                </div>
                          </div>                                                 
                      </div>

                          <div className="container w-screen  bg-black px-6 py-3 bg-opacity-90 
                                  bg-gradient-to-r from-black via-black to-grey-500 
                                  my-16 rounded-lg
                          ">

                              <div className="h-64 grid grid-rows-3 
                                             grid-flow-col gap-2
                                             xxs:grid-rows-1 xxs:block
                                             xs:grid-rows-1 xs:block
                                             sm:grid-rows-1 sm:block

                              ">

                                       {allPathNames && allPathNames.map((link) => {

                                        return (
                                                <React.Fragment key={link.pageName}>
                                                  <Link   href={link.pathName} 
                                                  >
                                                      <ul className="bg-black text-white relative
                                                                        mx-1 text-center 
                                                                        h-8 sm-h-10 md:h-11 lg:h-12 xl:h-14 
                                                                        bg-gradient-to-r from-gray-600 via-black to-blue-500 
                                                                        hover:from-pink-500 hover:to-yellow-500
                                                                        my-4 rounded-md
                                                      "
                                                      onClick={handleCloseOpen}
                                                      key={link.pageName}
                                                      >
                                                                          

                                                          <li className="liststyle-none 
                                                          text-xs md:text-xl lg:text-xl xl:text-xl xxl:text:2xl
                                                            px-4 my-2
                                                          bg-black text-center flex justify-center
                                                          h-5 sm-h-8 md:h-8 lg:h-9 xl:h-10  
                                                           "
                                                          >
                                                            {link.pageName}
                                                            </li>
                                                
                                                        </ul>
                                                  </Link>
                                                    </React.Fragment>
                                                  );
                                        }
                                        )}
                                    <div className="bg-yellow-400 rounded-full  mx-3 p-2a py-2  text-center ">
                                            <h2 className="text-3xla text-lg">
                                              My Online Shop 
                                            </h2>
                                              <span className="text-yellow-400 rounded-md text-md 
                                                  bg-black text-base 
                                                  text-shadow-2xla mx-3a px-2 mt-4a
                                                  "
                                                  onClick={() => handleCloseOpen()}
                                                  >
                                                   <a href={`/shop`} className="cartItem__name "
                                                   > 
                                                       coming soon <span className="text-lg text-green-300">visit NOW</span>
                                                    </a>
                                              </span>
                                    </div>

                                  <div className="bg-gray-700 text-xl mt-4 text-center mx-1 ">
                                    <SocialComponents
                                      tongleOnClick={tongleOnClick}
                                    />
                                  </div>
                              </div>
                          </div>      
                      {/* </div> */}
                  </section>
                </motion.div>
        {/* </motion.section> */}

           </motion.section>


          )}  
      </div>

  // </React.Fragment>
  
    );
  }
  
export default PopUpMenu;



 
