import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";
import saleReducer from '../features/saleSlice';


export const store = configureStore({
  reducer: {
    products: productSlice,
  },

  reducer: {
    sale: saleReducer,
  },
});



