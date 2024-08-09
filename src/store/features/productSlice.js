import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  product: null,
  cart: [],
  favourite: [],
  loading: false,
  error: "",
  saleProducts: [], // Для хранения товаров со скидкой
  saleStatus: 'idle',
  saleError: null,
};

// Асинхронный thunk для получения данных о товарах со скидкой
export const fetchDiscountedProducts = createAsyncThunk(
  'products/fetchDiscountedProducts',
  async () => {
    const response = await fetch('https://exam-server-5c4e.onrender.com/products/all');
    const data = await response.json();
    return data.slice(0, 4); // Берем первые 4 товара
  }
);

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      // Асинхронные действия для товаров со скидкой
      .addCase(fetchDiscountedProducts.pending, (state) => {
        state.saleStatus = 'loading';
      })
      .addCase(fetchDiscountedProducts.fulfilled, (state, action) => {
        state.saleStatus = 'succeeded';
        state.saleProducts = action.payload;
      })
      .addCase(fetchDiscountedProducts.rejected, (state, action) => {
        state.saleStatus = 'failed';
        state.saleError = action.error.message;
      });
  },
});

export default productSlice.reducer;
