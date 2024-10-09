import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  selectedProduct: null,
  reviews: [],
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    fetchProductDetailsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductDetailsSuccess: (state, action) => {
      state.selectedProduct = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchProductDetailsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addReview: (state, action) => {
      state.reviews.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProduct,
  fetchProductDetailsStart,
  fetchProductDetailsSuccess,
  fetchProductDetailsFailure,
  addReview,
} = productSlice.actions;

export default productSlice.reducer;
