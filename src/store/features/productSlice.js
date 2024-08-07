import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  product: null,
  cart: [],
  favourite: [],
  loading: false,
  error: "",
};

export const productSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {

   }
})

export default productSlice.reducer