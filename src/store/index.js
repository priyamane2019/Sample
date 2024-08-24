// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import customersReducer from '../features/customers/customersSlice';

const store = configureStore({
  reducer: {
    customers: customersReducer,
  },
});

export default store;
