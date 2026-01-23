import {configureStore} from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import {combineReducers} from 'redux';
// import { ProductReducer } from './component/Reducers/ProductReducer';
import ProductReducer from './component/slice/productslice';
import ProductDetailReducer from './component/slice/ProductDetailslice';
import  cartReducer  from './component/slice/cartslice';
import  loginReducer  from './component/slice/loginslice';
import  registerReducer  from './component/slice/registerslice';
import updateProfileReducer from './component/slice/updateProfile';
import Shippingreducer from './component/slice/shippingslice';


const store = configureStore({
    reducer:{
        products: ProductReducer,
        productDetail: ProductDetailReducer,
        cart: cartReducer,
        login: loginReducer,
        register: registerReducer,
        updateProfile: updateProfileReducer,
        shipping: Shippingreducer,

    },
   
    devTools: process.env.NODE_ENV !== 'production',
});
export default store;