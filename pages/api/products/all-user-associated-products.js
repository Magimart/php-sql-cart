import nc from 'next-connect'
import { dbConnect } from "../../../config";
import { allUsersWithAssociatedProducts } from '../../../controllers/productController/productControllers';
// import { isAuthenticatedUser } from "../../../middlewares/authUser";
import onError from '../../../middlewares/errors'


const handler = nc({ onError });

dbConnect();

handler.get(allUsersWithAssociatedProducts)
    

export default handler;