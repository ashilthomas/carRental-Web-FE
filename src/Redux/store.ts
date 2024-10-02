import { configureStore } from '@reduxjs/toolkit';
import globalSlice from "../Redux/globelSlice" // Import the auth reducer
import vehicleReducer from './vechicleSlice';

// Create the store
const store = configureStore({
  reducer: {
    global: globalSlice,  
    vehicles: vehicleReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
