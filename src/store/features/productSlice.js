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

export const fetchProductsById = createAsyncThunk(
  // получение данных о 1 товаре с апи
  "products/fetchProductsById",
  async (productId) => {
    const res = await fetch(
      `https://exam-server-5c4e.onrender.com/products/${productId}`
    );

    const data = await res.json();

    return data[0];
  }
);

const initialState = {
  products: [],
  categories: [],
  filteredProducts: [],
  product: null,
  cart: [],
  favourite: [],
  filteredFavourite: [],
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
        state.filteredProducts = data.sort((a, b) => {
          const priceA =
            a.discont_price !== null && a.discont_price > 0
              ? a.discont_price
              : a.price;
          const priceB =
            b.discont_price !== null && b.discont_price > 0
              ? b.discont_price
              : b.price;
          return priceA - priceB;
        });
      } else if (payload.value === "high-to-low") {
        state.filteredProducts = data.sort((a, b) => {
          const priceA =
            a.discont_price !== null && a.discont_price > 0
              ? a.discont_price
              : a.price;
          const priceB =
            b.discont_price !== null && b.discont_price > 0
              ? b.discont_price
              : b.price;
          return priceB - priceA;
        });
      } else if (payload.value === "discount") {
        state.filteredProducts = data.filter(
          (product) => product.discont_price !== null
        );
      } else {
        state.filteredProducts = data.sort((a, b) => a.id - b.id);
      }
    },
    sortFavourite: (state, { payload }) => {
      // Сортировка избранных товаров
      let data =
        state.filteredFavourite.length > 0
          ? state.filteredFavourite
          : state.favourite;

      if (payload.value === "low-to-high") {
        state.filteredFavourite = data.sort((a, b) => {
          const priceA =
            a.discont_price !== null && a.discont_price > 0
              ? a.discont_price
              : a.price;
          const priceB =
            b.discont_price !== null && b.discont_price > 0
              ? b.discont_price
              : b.price;
          return priceA - priceB;
        });
      } else if (payload.value === "high-to-low") {
        state.filteredFavourite = data.sort((a, b) => {
          const priceA =
            a.discont_price !== null && a.discont_price > 0
              ? a.discont_price
              : a.price;
          const priceB =
            b.discont_price !== null && b.discont_price > 0
              ? b.discont_price
              : b.price;
          return priceB - priceA;
        });
      } else if (payload.value === "discount") {
        state.filteredFavourite = data.filter(
          (product) => product.discont_price !== null
        );
      } else {
        state.filteredFavourite = data.sort((a, b) => a.id - b.id);
      }
    },
    filterByPrice: (state, { payload }) => {
      // Фильтрация
      const { minPrice, maxPrice, discount } = payload;
      state.filteredProducts = state.products.filter((item) => {
        const priceToCheck =
          item.discont_price !== null && item.discont_price > 0
            ? item.discont_price
            : item.price;
        return (
          priceToCheck >= minPrice &&
          priceToCheck <= maxPrice &&
          (!discount || item.discont_price !== null)
        );
      });
    },
    filterFavourite: (state, { payload }) => {
      // Фильтрация избранных товаров
      const { minPrice, maxPrice, discount } = payload;
      state.filteredFavourite = state.favourite.filter((item) => {
        const priceToCheck =
          item.discont_price !== null && item.discont_price > 0
            ? item.discont_price
            : item.price;
        return (
          priceToCheck >= minPrice &&
          priceToCheck <= maxPrice &&
          (!discount || item.discont_price !== null)
        );
      });
    },
    addProductToCart: (state, { payload }) => {
      // Добавление товара в корзину
      let foundProduct = state.cart.find((item) => item.id === payload.id);
      if (!foundProduct) {
        state.cart.push({ ...payload, count: payload.count || 1 });
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
    getCartFromLocalStorage: (state) => {
      // Получить данные корзины с LocalStorae
      let cartStorage = JSON.parse(localStorage.getItem("cart"));
      if (cartStorage) {
        state.cart = [...cartStorage];
      } else {
        localStorage.setItem("cart", JSON.stringify([]));
      }
    },
    clearCart: (state) => {
      // Очистить корзину и LocalStorage корзины
      state.cart = [];
      localStorage.removeItem("cart");
    },
    setFavourite: (state, { payload }) => {
      // Добавление товара в избранное
      let foundFavourite = state.favourite.find(
        (item) => item.id === payload.id
      );
      if (!foundFavourite) {
        state.favourite.push(payload);
        localStorage.setItem("favourite", JSON.stringify(state.favourite));
      }
    },
    removeProductFromFavourite: (state, { payload }) => {
      // Удаление товара из избранного
      state.favourite = state.favourite.filter((item) => item.id !== payload);
      state.filteredFavourite = state.filteredFavourite.filter(
        (item) => item.id !== payload
      );
      localStorage.setItem("favourite", JSON.stringify(state.favourite));
    },
    getFavoriteFromLocalStorage: (state) => {
      // Получение списка избранных из localStorage
      let favoriteStorage = JSON.parse(localStorage.getItem("favourite"));
      if (favoriteStorage) {
        state.favourite = [...favoriteStorage];
      } else {
        localStorage.setItem("favourite", JSON.stringify([]));
      }
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
      })
      .addCase(fetchProductsById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  sortBy,
  filterByPrice,
  sortFavourite,
  filterFavourite,
  addProductToCart,
  incrementProduct,
  decrementProduct,
  removeProductFromCart,
  getCartFromLocalStorage,
  clearCart,
  setFavourite,
  removeProductFromFavourite,
  getFavoriteFromLocalStorage,
} = productSlice.actions;

export default productSlice.reducer;
