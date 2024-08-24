// src/features/customers/customersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customers: [],
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.customers.push(action.payload);
    },
    updateCustomer: (state, action) => {
      const index = state.customers.findIndex(customer => customer.id === action.payload.id);
      if (index !== -1) {
        state.customers[index] = action.payload;
      }
    },
    deleteCustomer: (state, action) => {
      state.customers = state.customers.filter(customer => customer.id !== action.payload);
    },
  },
});

export const { addCustomer, updateCustomer, deleteCustomer } = customersSlice.actions;

export default customersSlice.reducer;
