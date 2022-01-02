import cloudinary from 'cloudinary'
import Product from "../../models/product";
import APIFeatures from '../../utils/helpers/apiFeatures';
import catchAsyncErrors from '../../middlewares/catchAsyncErrors';
import ErrorHandler from '../../utils/helpers/errorHandlers';
// import sendEmail from '../utils/sendEmail'


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})



//_____________to get only current user products /api/products/current-user-products
const currentUserProducts = async(req, res ) => { 

    try{

            const myProducts = await Product.find({user: req.user._id})
            .populate({
              path: 'title',
              select: 'title'
            })
            .populate({
                path: 'price',
                select: 'price'
              })
            .populate({
                path: 'category',
                select: 'painting sculpture wall hanging water colours'
              }) 
            .populate({
                path: 'countInStock',
                select: 'countInStock'
              })
            .populate({
              path: 'user',
              select: 'fName sName country address'
            })
            .populate({
                path: 'description',
                select: 'description'
              })
              .populate({
                path: 'dimenssion',
                select: 'width height'
              })
              .populate({
                path: 'medium',
                select: 'mixed medium on canvas oils on canvas ink on paper'
              })
              .populate({
                path: 'imagesOfProduct',
                select: 'public_id url'
              })

        
            res.status(200).json({
                success: true,
                myProducts 
            });
  
          }catch(error){
              console.error(error.message)
        }
  };

  //_____________to get all current user products =>api/products/all-user-associated-products
const allUsersWithAssociatedProducts = async(req, res ) => { 

    try{

           let {allUserItems} = req.body
            const allUserProducts = await Product.find({allUserItems})
            .populate({
              path: 'title',
              select: 'title'
            })
            .populate({
              path: 'user',
              select: 'fName sName country address'
            })
            
        
            res.status(200).json({
                success: true,
                allUserProducts 
            });
  
          }catch(error){
              console.error(error.message)
        }
  };

// get all paintings   =>   /api/products
const allProducts = async (req, res) => {

    try{

        //_______________removing fields and adding pagination___________
                           //{{DOMAIN}}/api/products?countryOfArtist=Sudan
        //  const resPerPage = 8;
        //  const allProductCount = await Product.countDocuments();  
         


        // const apiFeatures = new APIFeatures(Product.find(), req.query)
        //  .search()
        //  .filter()

        // let allStoredProducts = await apiFeatures.query //_________!!
        // let filteredProductCount = allStoredProducts.length;

        // console.log(allStoredProducts)
        // console.log(apiFeatures)

             
        // apiFeatures.pagination(resPerPage);
        // // allStoredProducts = await apiFeatures.query.clone();
        // allStoredProducts = await apiFeatures.query;

        // console.log("all products")
        // console.log(allStoredProducts)

        // res.status(200).json({
        // success: true,
        // allProductCount,
        // resPerPage,
        // filteredProductCount,
        // allStoredProducts
        // });


        // const products = await  Product.find({}).exec();
        const products = await  Product.find({}).exec();
             res.status(200).json({message: true, products})

        }catch(error){
        console.log(error)
        }

    }


// Create a painting  =>   /api/products/product

const addNewProduct = async(req, res)=> { 


    try{
  
       
            const productImages = req.body.imagesOfProduct;
            let imageLinks = [ ];
             
            for(let i=0; i < productImages.length; i++){
    
                const result = await cloudinary.v2.uploader.upload(productImages[i], {
                    folder: 'portfolioApp/painting',
                    // width: '150',
                    // crop: 'scale'
                });
                
                imageLinks.push({
                    public_id: result.public_id,
                    url: result.secure_url                               
                }); 
            }
    
                                                     //    // ___?
            req.body.imagesOfProduct = imageLinks;
            req.body.user = req.user._id;            //_____!!

            const product = await Product.create(req.body)
                    
                res.status(200).json({message: "success",  product})
    
        }catch(error){
    
              console.error(error.message)
                 res.status(400).json({
                                   message: "product was not created",
                                    error: error.message
                });
        }
    

          

}


// Get painting details   =>   /api/products/product/:id || /api/products/product/617a4562f2265da6ea3b28af
const getProductDetails = async (req, res, next) => {

         try{ 
            const productDetails = await Product.findById(req.query.id);
        
            if (!productDetails) {
                return next(new ErrorHandler('product not found with associated id', 404))
            }
        
            res.status(200).json({
                 success: true,
                 productDetails
            })

         }catch(error){
             console.log(error)
         }
};

// Update painting details   =>    /api/products/product/:id
const updateProduct = catchAsyncErrors(async (req, res) => {


    let product = await Product.findById(req.query.id);

    if (!product) {
        return next(new ErrorHandler('product not found with this ID', 404))
    }

    // if (req.body.images) {

    //     // remove pictures associated with this product___
    //     for (let i = 0; i < product.images.length; i++) {
    //         await cloudinary.v2.uploader.destroy(product.images[i].public_id)
    //     }

    //     let imagesLinks = []
    //     const images = req.body.images;

    //     for (let i = 0; i < images.length; i++) {

    //         const result = await cloudinary.v2.uploader.upload(images[i], {
    //             folder: 'portfolioApp/painting',
    //         });

    //         imagesLinks.push({
    //             public_id: result.public_id,
    //             url: result.secure_url
    //         })

    //     }

    //     req.body.images = imagesLinks;

    // }
     
    //---!!/pass id followed by the info that u r updating, third param is to aviod some warnings
   
    product = await Product.findByIdAndUpdate(req.query.id, req.body, { 
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product
    })

})


// delete product    =>   /api/products/product/:id || /api/products/product/617a4562f2265da6ea3b28af
const deleteProduct = catchAsyncErrors(async (req, res, next) => {

    // const product = await product.findByIdAndDelete(req.query.id); waks
    const product = await Product.findById(req.query.id);


    if (!product) {
        return next(new ErrorHandler('product not found with associated id', 404))
    }

    product.remove()
    res.status(200).json({
        success: true,
        message: "product successfully deleted"
    })
});


export { 
     allUsersWithAssociatedProducts,
    currentUserProducts,
    allProducts,
    addNewProduct,
    getProductDetails,
    updateProduct,
    deleteProduct
}









