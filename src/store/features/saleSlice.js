import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Асинхронный thunk для получения данных о товарах со скидкой
export const fetchDiscountedProducts = createAsyncThunk(
  'sale/fetchDiscountedProducts',
  async () => {
    const response = await fetch('http://localhost:3333/discounted-products');
    const data = await response.json();
    return data.slice(0, 4); // Берем первые 4 товара
  }
);

const saleSlice = createSlice({
  name: 'sale',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiscountedProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDiscountedProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchDiscountedProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default saleSlice.reducer;
