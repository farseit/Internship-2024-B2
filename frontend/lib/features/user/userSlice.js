import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SignInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    SignInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    SignInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    RegisterStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    RegisterSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    RegisterFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    UpdateProfileStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    UpdateProfileSuccess: (state, action) => {
      state.currentUser = { ...state.currentUser, ...action.payload };
      state.loading = false;
      state.error = null;
    },
    UpdateProfileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  SignInStart,
  SignInFailure,
  SignInSuccess,
  RegisterStart,
  RegisterSuccess,
  RegisterFailure,
  UpdateProfileStart,
  UpdateProfileSuccess,
  UpdateProfileFailure,
} = userSlice.actions;

export default userSlice.reducer;
