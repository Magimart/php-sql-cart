import { combineReducers } from 'redux';

 import { registerUserReducer, userReducer, allUsersReducer, isCurrentUserReducer } from './userReducer';
 import { publishReducer, allInfosReducer } from './appInfoReducer';
 import { cartReducer,  } from './cartReducer';
 import { checkoutReducer, orderSummaryReducer } from './checkoutReducer';
 import { allProductReducer, productDetailsReducer, newProductReducer, currentUserProductsReducer } from './productReducer';
 import { myOrderReducer, orderDetailsReducer } from './orderReducer';




const reducer = combineReducers({ 
        allProducts: allProductReducer,
         productDetails: productDetailsReducer,
         newProduct: newProductReducer,
         currentUserProducts: currentUserProductsReducer,
         newUser: registerUserReducer,
          isCurrentUser: isCurrentUserReducer, 
           user: userReducer,
           allUsers: allUsersReducer,
//         cart: cartReducer,
//         checkout: checkoutReducer, 
//         orderSummary: orderSummaryReducer, 
//         currentUserOrders: myOrderReducer,
//         orderDetails: orderDetailsReducer,    
//        allInfos: allInfosReducer,
//        newInfo: publishReducer,
});

export default reducer;



