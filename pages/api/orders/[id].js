import nc from 'next-connect'
import { dbConnect } from "../../../config";
import { getOrderDetails } from '../../../controllers/ordersControllers/orderControllers'
import { isAuthenticatedUser } from "../../../middlewares/authUser";
import onError from '../../../middlewares/errors'

const handler = nc({ onError });

dbConnect();

handler
    .use(isAuthenticatedUser)
    .get(getOrderDetails)

export default handler;