import { configureStore } from '@reduxjs/toolkit';
import userSlicer from './userSlice';
import addProductSlicer from './addProductSlice';
import authReducer from './authSlice'; // this is the reducer, renamed for clarity

const store = configureStore({
  reducer: {
    users: userSlicer,
    products: addProductSlicer,
    auth: authReducer, // this connects your auth slice to Redux
  },
});

export default store;
