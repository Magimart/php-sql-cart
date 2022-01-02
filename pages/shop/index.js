import React  from "react";
import { UnCoverPage } from "../../components/animationComponents/UnCoverPage";
import { ViewportProvider } from "../../utils/helpers/ViewPortWindow";
import ShopItemsModel from "../../components/mainComponents/shop/ShopItemsModel";
import { wrapper } from '../../redux/store'
import { getAllProducts } from "../../redux/actions/productActions";


// export default function  ShopPage () {
  const  ShopPage = () => {


  return (
   <>
     <UnCoverPage/>
     <ViewportProvider>
       <div  className="grid  m-0 p-0 col-span-12  h-100vha h- bg-yellow-400 bg-opacity-60               
                    "
        >
            <ShopItemsModel/>
       </div> 

   </ViewportProvider>
     </>
  );

}


// export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, query }) => {

//   console.log("fetching from shop screen_________________________-")

//      await store.dispatch(getAllProducts(req, query.page, query.location, query.artistName, query.category))
// })


export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req }) => {
  await store.dispatch(getAllProducts(req))
})




export default ShopPage;