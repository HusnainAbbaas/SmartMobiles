import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  productReducer,
  productDetailsReducer,
} from "./reducers/productReducer";

//   newProductReducer,
//   newReviewReducer,
//   productDetailsReducer,

//   productReviewsReducer,
//   productsReducer,
//   reviewReducer,

// import {
//   allUsersReducer,
//   forgotPasswordReducer,
//   profileReducer,
//   userDetailsReducer,
//   userReducer,
// } from "./reducers/userReducer";

// import { cartReducer } from "./reducers/cartReducer";

// import {
//   allOrdersReducer,
//   myOrdersReducer,
//   newOrderReducer,
//   orderDetailsReducer,
//   orderReducer,
// } from "./reducers/orderReducer";

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
});
//  products: productReducer,
// productDetails: productDetailsReducer,
// user: userReducer,
// profile: profileReducer,
// forgotPassword: forgotPasswordReducer,
// cart: cartReducer,
// newOrder: newOrderReducer,
// myOrders: myOrdersReducer,
// orderDetails: orderDetailsReducer,
// newReview: newReviewReducer,
// newProduct: newProductReducer,
// product: productReducer,
// allOrders: allOrdersReducer,
// order: orderReducer,
// allUsers: allUsersReducer,
// userDetails: userDetailsReducer,
// productReviews: productReviewsReducer,
// review: reviewReducer,

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
