import React,{useEffect, useState} from "react";
import { useRouter } from 'next/router'
import router from 'next/router';
import { motion } from "framer-motion";  //____testing
import Link from "next/link";
// import { ButtonLoader } from "../commons-components/Loader";
import {useSelector, useDispatch} from 'react-redux';
import { registerUser, clearErrors } from "../../redux/actions/userActions";
import { toast } from "react-toastify";


const RegisterUserModel = () => {

    const defaultImage = "images/user_profile/default-user-image.png"

    const dispatch = useDispatch();
    const router = useRouter();

    const [user, setUser] = useState( {
          fName: "",
          sName: "",
          address:"",
          country:"",
          email: "",
          password:""
        });

 
     const [avatar, setAvatar]  = useState('');
     const [avatarPreview, setAvatarPreview]  = useState(defaultImage);

    //  const { success, error, loading } = useSelector(state => state.auth)
    // const success = useSelector(state => state.auth)
     const { success, error, loading } = useSelector(state => state.newUser)


    useEffect(() => {
         if(success)  {
             router.push('/login')
        //  console.log(success)
        }
          if(error)toast.error(error)
         dispatch(clearErrors);

     }, [dispatch, error, success]);


     const {fName, sName, email, country, address, password} = user

  
    const handleFormSubmit = async (e) => {
            e.preventDefault();
        try { 
         
             const userData = { fName, sName, country, address, email, password, avatar}

               console.log(userData)
            dispatch(registerUser(userData))

        }catch(err) { 
            console.error(err.message);
       }
    
    };

    const handleChange = (e) => {

           if(e.target.name === "avatar") {
               const reader = new FileReader();

               reader.onload = ()=>{
                   if(reader.readyState === 2){

                       setAvatar(reader.result);
                       setAvatarPreview(reader.result);
                   }
            }

            //    reader.readAsDataURL(e.target.files[0])
               const urlData = reader.readAsDataURL(e.target.files[0])
            //    console.log(urlData)


           }else{
              setUser({ ...user, [e.target.name]: e.target.value })
         
           }
      };

    console.log(user)
    // console.log(avatarPreview)

    return (
        <>

      <motion.section
                  exit={{ opacity: 0 }}
                 className="relative text-gray-700 body-font"
                >
   
   <motion.div className=" flex  justify-center bg-gray-300a py-1
                        px-2 sm:px-6 lg:px-8 
                        relative -top-5
                        bg-gradient-to-b from-transparent via-transparent to-gray-600
                        bg-opacity-80
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
            >
          
      <div className="bg-grey-lighter   flex flex-col">
              <div className="container  mx-auto flex-1a flex flex-col items-center justify-center px-2">
                  <div className="bg-white px-6 py-8  shadow-md text-black w-full
                       max-w-xl  space-y-8 
                       bg-gradient-to-b from-transparent via-yellow-50 to-black p-5 rounded-lg
                     ">
                      <h1 className="mb-8 text-3xl text-center">Sign up</h1>
  
              <form   
                      onSubmit={handleFormSubmit} 
  
                      className="mt-4 space-y-6" action="http://localhost:3000/" method="POST">
                <div className="flex justify-items-center w-full">
                <div className="w-max mx-1">
                     <input 
                          type="text"
                          className="block border border-grey-light w-full p-2 rounded mb-1"
                          name="fName"
                          value={fName}
                          placeholder="First Name"
                          onChange={handleChange}
                      />
                </div>
                <div className="w-max mx-1">
                     <input 
                          type="text"
                          className="block border border-grey-light w-full p-2 rounded mb-1"
                          name="sName"
                          value={sName}
                          placeholder="Second Name"
                          onChange={handleChange}
                      />
                </div>
                </div>
                {/* address */}                
                <div className="mb-3 space-y-4 w-full text-base px-2">
                                                <label className="px-6 font-semibold text-gray-600 py-2 px-2">
                                                    Address: 
                                                </label>
                                                <textarea required="" 
                                                    type="text"
                                                    className="px-10 w-full min-h-[100px] max-h-[300px] h-28 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4"
                                                    placeholder="Let the world know about your where you are based" 
                                                    name="address"  
                                                    value={address}
                                                    onChange={handleChange} 
                                                 /> 	
                                    </div>                 
                {/* country */}
                <div>
                <label className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                                        <span className="text-right px-2">Country</span>
                                            <div className="w-full flex flex-col mb-3">
                                            
                                                <select className="block w-full h-max bg-ligher-grey text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " 
                                                        required="required" 
                                                        id="country"
                                                        name="country"  
                                                        value={country} 
                                                        onChange={handleChange}
                                                        >
                                                    {
                                                        [ "select your nationality", "Australia" , "Belgium", "Brazil", "Canada", "China ", "Denmark ", "Germany", 
                                                                "Hong Kong",  "Ireland ", "Italy ", "Japan ", "Luxembourg ", "Mexico ", "Netherlands", "Poland ", "Portugal", "Singapore",
                                                                "Uganda", "Tunisia", "United Kingdom ","Rassia", "Spain", "Tanzania","United States","Kenya",
                                                            ].map(country => (
                                                            <option key={country}
                                                            value={country}
                                                            > 
                                                                {country}
                                                            </option>

                                                        ))
                                                    }
                                                </select>

                                                <p className="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
                                            </div>
                                    </label>
                </div> 

                {/* email */}
  
                <div>
                   <input id="email-address" name="email" type="email" autoComplete="email" 
                         required className="appearance-none rounded-none relative block w-full px-3 py-2 border
                                   -gray-300 placeholder-gray-500 text-gray-900 rounded-t-md
                                   focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                       placeholder="email"
                       value={email}
                       onChange={handleChange}

                   />
                </div>
  
                <div>
                    <input id="password" name="password" type="password"
                           autoComplete="current-password" 
                           required className="appearance-none rounded-none relative block w-full px-3 py-2 border
                                        border-gray-300 opacity-40 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none 
                                        focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                          placeholder="password"
                          value={password}
                          onChange={handleChange}

                   />
                </div>
  

                <div className="flex justify-items-center w-full">
                <figure className="w-14 h-14 rounded-full border-2  mx-1 bg-gray-300 bg-opacity-30 ">
                   
                    <img src={avatarPreview}
                      className="h-full w-full rounded-full"
                    >
                    </img>
                </figure>
                <div className="w-max mx-1">
                    <input type="file" 
                    className="w-full text-gray-700 px-3 py-2 border rounded"
                    name="avatar"
                    accept="images/*"
                    onChange={handleChange}

                    />
                </div>
                </div>
                      <button
                          type="submit"
                          className="w-full text-center  rounded bg-yellow-500 p-3 text-gray-500 hover:bg-green-dark focus:outline-none my-1"
                      >Create Account
                      </button>
                      </form>

                    <div className="text-grey-dark  mx-1">
                      Already have an account? 
                      <a className=" no-underline border-b border-blue text-blue-400 mx-2" href="/signin/">
                          Log in
                      </a>
                  </div>
  
                      <div className="text-center text-sm text-blue-300 mt-1">
                          By signing up, you agree to the 
                          <a className="no-underline mx-1 border-b border-grey-dark text-white" href="#">
                              Terms of Service 
                          </a> and 
                          <a className="no-underline mx-1 border-b border-grey-dark text-yellow-500" href="#">
                              Privacy Policy
                          </a>
                      </div>
  
                  </div>
  
              </div>
          </div>
  </motion.div>
  
  
             
     
        {/* </motion.div> */}
      </motion.section>        </>
    )
}


export default RegisterUserModel;