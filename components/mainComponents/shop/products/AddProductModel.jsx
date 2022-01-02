import { motion,  useViewportScroll, useTransform, useMotionValue } from "framer-motion";  
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from 'next/router'
import { newProduct, clearErrors } from "../../../../redux/actions/productActions";
import SmallIsLoading from "../../../layoutComponents/SmallIsLoading";



const AddNewProductModel = ({ animateFromRight, enterFromLeft, animateFromLeft }) =>  {


  const [countries, setCountries] = useState([])

  //__display__________________
  const [onScrollVelocity, setOnScrollVelocity] = useState(0);
  const [ref, inView, entry] = useInView({
                                          threshold: 0.5,
                                          triggerOnce: false
                                        });
        const { scrollY } = useViewportScroll();
        const y1 = useTransform(scrollY, [0, 300], [0, 200]);
        const y2 = useTransform(scrollY, [0, 300], [0, -100]);
        const exitRight = useTransform(scrollY, [200, -60], [600, 0]);
        const scale = useMotionValue(2.4)
        const x = useMotionValue(0)
        const xRange = [-10, 2]
        const opacityRange = [0, 1]
        const opacity = useTransform(x, xRange, opacityRange)
        const dispatch = useDispatch();
        const router = useRouter();

        const { loading, error, success } = useSelector(state => state.newProduct)
        console.log(success)

          useEffect(async() => {

                //   scrollY.onChange(setOnScrollVelocity);
            dispatch(clearErrors);
              if(success){
                  router.replace("/me/profile")
              }

    }, [dispatch, error, success])


  return (
   <>    
      <div  className="grid m-0 p-0 col-span-12 w-screen  h-100vh bg-yellow-400 bg-opacity-60               
                    "
    >
   
        <div className="flex flex-row  justify-center relative h-auto w-screen  bg-blue-400 bg-opacity-10">
          {/* anim frm right */}
            <motion.div className="w-full  relative flex justify-center  bg-white bg-opacity-30"
                variants={animateFromRight}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                      x: { type: "spring", stiffness: 100, damping: 30 },
                      opacity: { duration: 0.9 }
                }}
            >
                    <div className="w-screen block container bg-white bg-opacity-80 p-10 h-full   ">
                        <AddNewProductForm 
                         loading={loading}
                         />
                    </div>
          </motion.div>
       </div>

{/* recommended based on your interest */}


<div className="py-12 flex flex-col items-center justify-center bg-yellow-300 bg-opacity-40">
<div className="w-1/4 text-center">
    <h3 className="font-thin text-grey-darkest text-3xl py-6">
           We the pride because in us came you
    </h3>
    <button className="bg-blue-dark text-white text-xs font-semibold shadow py-4 w-full rounded-full">Get Started</button>
</div>
</div>


   
   </div> 
     </>
  );
}

export default AddNewProductModel;



// _________________________________safari section 


export const AddNewProductForm = ({loading }) => {

   
    const dispatch = useDispatch();


     const [product, setProduct] = useState({
                                        title: "",
                                        price: 0,
                                        countInStock: 0,
                                        description: "",
                                        category: "",
                                        medium:""                                
                                       }    
                                     ); 
      const [dimenssion, setDimenssion] = useState({
                                                width: "width",
                                                height:"height"                                            
                                           });                           
        const [imagesOfProduct, setImagesOfProduct] = useState([])
        const [imagesPreview, setImagesPreview] = useState([])                                                                      

        //__________________submit data

        const handledataSubmition =() => {

            submitHandler()
        }

    const submitHandler = async(e) => {
        //  e.preventDefault() 
     try {

        const formData = {
            title: product.title,
            price: Number(product.price),
            countInStock: Number(product.countInStock),
            description: product.description,
            dimenssion: {
                width: Number(dimenssion.width),
                height: Number(dimenssion.height),
           },
           category: product.category,  
           medium: product.medium,                    
           imagesOfProduct : imagesOfProduct
        }

        //        if (images.length === 0) return toast.error('Please upload images.')

         console.log(formData)

             dispatch(newProduct(formData))

            // const config = {
            //     header: {
            //         'Content-Type': 'application/json'
            //     }
            // }
    
            // const { data } = await axios.post(`/api/products`, formData, config)

            // console.log(data)

    
           
          } catch (error) {
             console.error(error.message)
         }
    }



   const handlerChange = async(e)=> {

       //________price__correct way
        if(e.target.name === "title"){
            setProduct({
                ...product, [e.target.name]: e.target.value,
            } );
          }
          if(e.target.name === "price"){
            setProduct({
                ...product, [e.target.name]: e.target.value,
            } );
          }
          if(e.target.name === "countInStock"){
            setProduct({
                ...product, [e.target.name]: e.target.value,
            } );
          }
          if(e.target.name === "width"){
            setDimenssion({
                ...dimenssion, [e.target.name]: e.target.value,
            } );
          }
          if(e.target.name === "height"){
            setDimenssion({
                ...dimenssion, [e.target.name]: e.target.value,
            } );
          }

         {e.target.name === "description"? (
            setProduct({
               ...product, [ e.target.name]: e.target.value
            })): false

          }

         // _______capacity
         if(e.target.name === "category"){
            setProduct({
                ...product, [e.target.name]: e.target.value,
            } );
          }

                   // _______capacity
         if(e.target.name === "medium"){
            setProduct({
                ...product, [e.target.name]: e.target.value,
            } );
          }
       
          if(e.target.name === "dimenssion"){
            setProduct({
                ...product, [e.target.name]: e.target.value,
            } );
          }
      

 
   }


    const onChange = async(e)=>{

     try {
        const files = Array.from(e.target.files)

        setImagesOfProduct([]);
        setImagesPreview([]);

        files.forEach(file => {

            const reader = new FileReader();

          

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesOfProduct(oldArray => [...oldArray, reader.result]);
                    setImagesPreview(oldArray => [...oldArray, reader.result]);
                }
            }

            reader.readAsDataURL(file)

            console.log("here is the reader <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
            console.log(reader);

        });
              
        } catch (error) {
            console.error(error.message)  
        }

    }


    useEffect(async() => {

       dispatch(clearErrors());
  
    }, []);


 return (
        <>

<>
         <motion.section
              className="relative text-gray-700 body-font"
         >
          <div className=" flex items-center justify-center 
                              relative 
                              bg-gray-500 py- h-full
                              sm:px-6 lg:px-8a
                              "
          >
            <motion.div className="checkOutWrapper bg-black space-y-1a bg-white
                              bg-opacity-10 
                              px mx-4a my-8
                              relative 
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

{/* start model */}

<section>
    <div className="grid grid-cols-3 gap-1 p-2 ">

            <div className="checkOutFormWrapper col-span-3 md:col-span-2 lg:col-span-2 xl:col-span-2 xxl:col-span-2 
                                    w-full bg-gray-60 bg-opacity-10 py-10 px-                                          
                            "
            >
                {/* left_________ */}

                <div className="lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 px-12">
                    <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
                        <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                            <div className="text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="text-sm font-medium ml-3">
                                <p>Add your Product</p>
                            </div>
                        </div>
                        <div className="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">.....</div>
                        <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                    </div>
                    <div className="rounded-md">
                        <form id="payment-form" method="POST" action=""
                            onSubmit={submitHandler} encType="multipart/form-data"
                            
                        >
                        <section className="p-3 mx-2">
                          {/* shipping ____info ________________________*/}
                            <div className="my-10">
                             <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Shipping & Billing Information</h2>
                            </div>
                                <fieldset className="bg-gray-400 bg-opacity-40 mb-3 bg-white shadow-lg rounded text-gray-600 "

                                >                                                                         
                                    <label className=" flex border-b border-gray-200 h-12 px-6 py-7 items-center">
                                        <span className="text-right px-2 ">title</span>
                                        <input className="focus:outline-none px-3 h-8 rounded-md w-full"
                                               type="text" 
                                               placeholder="title of the product"
                                               name="title"
                                               value={product.title} 
                                               onChange={handlerChange}      
                                       />
                                    </label>
                                    <label className="inline-flex w-2/4 px-6  border-gray-200  py-7">
                                        <span className="text-right px-2">price</span>
                                        <input className="  focus:outline-none px-3 px-3 h-8 rounded-md"
                                               type="number"
                                               min="0" 
                                               placeholder="price"
                                               name="price"
                                               value={product.price} 
                                               onChange={handlerChange} 
                                          />
                                    </label>


                                    {/* stock */}
                                    <label className="xl:w-1/4 xl:inline-flex px-6  py-7 items-center flex xl:border-none border-t border-gray-200 py-3">
                                        <span className="text-right px-2 xl:px-0 xl:text-none">quantity</span>
                                        <input className="focus:outline-none px-3 h-8"
                                               type="number"
                                               min="0" 
                                               required="number"
                                               placeholder="number of same product"
                                               name="countInStock"
                                               value={product.countInStock} 
                                               onChange={handlerChange} 
                                       />
                                    </label>
                                    {/* description */}

                                                    
                                    <div className="mb-3 space-y-4 w-full text-xs px-2">
                                                <label className="px-6 font-semibold text-gray-600 py-2 px-2">
                                                    Description: <abbr >*</abbr>
                                                </label>
                                                <textarea required="" 
                                                    type="text"
                                                    className="px-10 w-full min-h-[100px] max-h-[300px] h-28 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4"
                                                    placeholder="please let the world know the story behind your product" 
                                                    name="description"  
                                                    value={product.description}
                                                    onChange={handlerChange} 
                                                 /> 	
                                    </div>                       

                                  {/* dimmession */}

                                    <div className="flex justify-items-center w-full">
                                     <label className=" px-2 xl:w-1/4 xl:inline-flex py-4 my-5 items-center flex xl:border-none border-t border-gray-200 py-3">
                                        <span className="text-right px-2 xl:px-0 xl:text-none mx-3">size <span className="text-sm text-gray-600">in centimeter</span></span>
                                      </label>
                                        <div className="w-max mx-1"> 
                                            <input 
                                                type="number"
                                                min="0" 
                                                className="block border my-5 border-grey-light w-full p-2 rounded mb-1"
                                                name="width"
                                                value={dimenssion.width}
                                                placeholder="width"
                                                onChange={handlerChange}
                                            />
                                        </div>
                                        <label className="font-semibold text-lg py-4 my-5 mx-3 flex justify-center items-center">X</label>
                                        <div className="w-max mx-1">
                                            <input 
                                                type="number"
                                                min="0" 
                                                className="block px-6 border border-grey-light w-full p-2  my-5 rounded mb-1"
                                                name="height"
                                                value={dimenssion.height}
                                                placeholder="height"
                                                onChange={handlerChange}
                                            />
                                        </div>
                                    </div>                                    

                                  
                                   {/* select category__________ */}
                                    <label className="flex mx-1  border-t border-gray-200 h-12 py-10 items-center select relative">
                                        <span className="text-right px-4">category</span>
                                            <div className="w-full flex flex-col mb-3 px-6">                                            
                                                <select className="block px-2 w-full h-max bg-ligher-grey text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " 
                                                        required="required" 
                                                        id="category"
                                                        name="category"  
                                                        value={product.category} 
                                                        onChange={handlerChange}
                                                        placeholder="select category"

                                                >
                                                    {
                                                        [  'select category', 'painting','sculpture', 'wall hanging',
                                                            'water colours', 'photography', 'fabrics','ceramics'
                                                        ].map(category => (
                                                            <option key={category}
                                                            value={category}
                                                            > 
                                                                {category}
                                                            </option>

                                                        ))
                                                    }
                                                </select>

                                                <p className="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
                                            </div>
                                    </label>
                                         {/* select medium__________ */}
                                    <label className="flex mx-1  border-t border-gray-200 h-12 py-10 items-center select relative">
                                        <span className="text-right px-4">Mediums</span>
                                            <div className="w-full flex flex-col mb-3 px-6">                                            
                                                <select className="block px-2 w-full h-max bg-ligher-grey text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full " 
                                                        required="" 
                                                        id="medium"
                                                        name="medium"  
                                                        value={product.medium} 
                                                        onChange={handlerChange}
                                                        placeholder="select medium"

                                                >
                                                    {
                                                        [ 
                                                            'which materials is the product made of?',
                                                            'mixed medium',
                                                            'acrylics on canvas',
                                                            'oils on canvas',
                                                            'ink on paper',
                                                            'photography'
                                                        ].map(medium => (
                                                            <option key={medium}
                                                            value={medium}
                                                            > 
                                                                {medium}
                                                            </option>

                                                        ))
                                                    }
                                                </select>

                                                <p className="text-sm text-red-500 hidden mt-3" id="error">Please fill out this field.</p>
                                            </div>
                                    </label>
                                </fieldset>
                            </section>                    



                        </form>
                    </div>
                    <div className="rounded-md">
          {/*    images */}
         <section className="">   
             <div className="my-10">
                    <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                            Upload Image(s) of product
                    </h2>
              </div>
              <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700  max-width: 600px">
              <div className="mt-5 flex col-span-12 w-full">
				<div className="form flex col-span-12 w-full">
					<div className="flex- md:space-x-4 w-full text-xs">
                                <div className="md:space-y-2 block w-full " >
						            <div className="flex items-center py-5  bg-white bg-opacity-40 m-4  ">
								      {
                                         imagesPreview.map((img, i) => (
                                            <div className=" mx-2 
                                             rounded-md border 0bject-covera h-32 "
                                             key={Math.floor(Math.random() * 205)}
                                             >  
                                                                                            <img
                                              src={img}
                                                key={img}
                                                alt="Images Preview"
                                                className="mt-3 mr-2 flex"
                                                 width="max"
                                                 height="max"
                                            />                                

                                            </div>
                                          ))
                                        }
                                 
							     </div>
						       </div>

                               <div className="py-2 flex justify-center bg-gray-500 bg-opacity-10">
                                       <label className="cursor-pointer py-1">
                                          <span className="focus:outline-none text-black text-sm
                                              py-2 px-4 rounded-full bg-gray-500 bg-opacity-20 hover:bg-green-500 
                                              hover:shadow-lg">
                                              upload image
                                          </span>
                                         <input type="file" 
                                            className="hidden custom-file-input" 
                                            type="file"
                                            name="imagesOfSafaris"//__________changii
                                            // className="custom-file-input"
                                            // id="customFile"
                                            onChange={onChange}
                                            multiple                          
                                             />
                                       </label>
                                </div>
							  </div>
					    </div>
				  </div>  
                 </div>
           </section>
{/* remoeveveve */}
           <div className="submitBtnWrapper my-4 py-10 items-center flex justify-center">
                    
                    {/* submit button_____ */}
                    <button
                          type="submit"
                          className="focus:outline-none text-white text-sm
                          py-2 px-10 
                             rounded-full bg-gray-400 hover:bg-green-500 
                             hover:shadow-lg h-10
                          "
                             disabled={loading? true : false}
                             onClick={() => handledataSubmition()}
                         >
                            {loading ? <SmallIsLoading /> : 'add product'}
                     </button>
                 </div>
        
                        </div>
                        
                        </div>  
                    </div>

            {/* right________ */}
            <div className="summaryWrapper xxs:order-first xs:order-first sm:order-first  block col-span-3  md:col-span-1 lg:col-span-1 xl:col-span-1 xxl:col-span-1 w-full bg-yellow-400 bg-opacity-10 py-16 px-3">
                <div className="col-span-1 bg-white lg:block hiddenvv">
                    <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">add product images</h1>

                    <div className="px-8 border-b">
                        
                        <div className="flex justify-between py-4 text-gray-600">
                            <span>Shipping</span>
                            <span className="font-semibold text-pink-500">Free</span>
                        </div>
                    </div>
                    
                </div> 
                <div className="paybtnWrpper py-10 flex justify-center  ">
                      <button className="submit w-max transition ease-in duration-700 
                        px-16 py-3 rounded-full bg-green-800 bg-opacity-80 text-white
                         focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
                         >
                            continue with purchase
                       </button>
                    </div>
            </div>
    </div>
</section>


{/* end model */}
            </motion.div>
         </div>
      </motion.section>
  
          </>

 

       </>
  )

}  

