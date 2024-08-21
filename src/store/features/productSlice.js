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
      // Сортировка
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
      // Фильтрация
      const { minPrice, maxPrice, discount } = payload;
      state.filteredProducts = state.products.filter(
        (item) =>
          item.price >= minPrice &&
          item.price <= maxPrice &&
          (!discount || item.discont_price !== null)
      );
    },
    addProductToCart: (state, { payload }) => {
      // Добавление товара в корзину
      let foundProduct = state.cart.find((item) => item.id === payload.id);
      if (!foundProduct) {
        state.cart.push({ ...payload, count: 1 });
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    incrementProduct: (state, { payload }) => {
      // Увеличение к-ва товара
      state.cart = state.cart.map((item) => {
        if (item.id === payload) {
          item.count += 1;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decrementProduct: (state, { payload }) => {
      // Уменьшение к-ва товара
      state.cart = state.cart
        .map((item) => {
          if (item.id === payload) {
            item.count -= 1;
            if (item.count === 0) {
              return null;
            }
          }
          return item;
        })
        .filter((item) => item);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeProductFromCart: (state, { payload }) => {
      // Убрать товар с корзины
      state.cart = state.cart.filter((item) => item.id !== payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    getProductFromLocalStorage: (state) => {
      let cartStorage = JSON.parse(localStorage.getItem("cart"));

      if (cartStorage) {
        state.cart = [...cartStorage];
      } else {
        localStorage.setItem("cart", JSON.stringify([]));
      }
    }
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

export const {
  sortBy,
  filterByPrice,
  addProductToCart,
  incrementProduct,
  decrementProduct,
  removeProductFromCart,
  getProductFromLocalStorage
} = productSlice.actions;

export default productSlice.reducer;
