import nc from "next-connect";
import { dbConnect } from "../../config";
import { CreateStripeSession } from "../../controllers/paymentControllers/paymentControllers";
import onError from '../../middlewares/errors'
import { isAuthenticatedUser } from "../../middlewares/authUser";



const handler = nc({onError});

dbConnect()

  handler.use(isAuthenticatedUser).post(CreateStripeSession);// add auth middleware____________!!

  export default handler;
