import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  // получение данных о категориях с апи
  "categories/fetchCategories",
  async () => {
    const res = await fetch(
      `https://exam-server-5c4e.onrender.com/categories/all`
    );

    const data = await res.json();

    return data;
  }
);

export const fetchProducts = createAsyncThunk(
  // получение данных о товарах с апи
  "products/fetchProducts",
  async () => {
    const res = await fetch(
      `https://exam-server-5c4e.onrender.com/products/all`
    );

    const data = await res.json();

    return data;
  }
);

const initialState = {
  products: [],
  categories: [],
  filteredProducts: [],
  product: null,
  cart: [],
  favourite: [],
  loading: false,
  error: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortBy: (state, { payload }) => {
      let data =
        state.filteredProducts.length > 0
          ? state.filteredProducts
          : state.products;

      if (payload.value === "low-to-high") {
        state.filteredProducts = data.sort((a, b) => a.price - b.price);
      } else if (payload.value === "high-to-low") {
        state.filteredProducts = data.sort((a, b) => b.price - a.price);
      } else if (payload.value === "discount") {
        state.filteredProducts = data.filter(
          (product) => product.discont_price !== null
        );
      } else {
        state.filteredProducts = data.sort((a, b) => a.id - b.id);
      }
    },
    filterByPrice: (state, { payload }) => {
      const { minPrice, maxPrice, discount } = payload;

      state.filteredProducts = state.products.filter(
        (item) =>
          item.price >= minPrice &&
          item.price <= maxPrice &&
          (!discount || item.discont_price !== null)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { sortBy, filterByPrice } = productSlice.actions;

export default productSlice.reducer;
