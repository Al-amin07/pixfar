import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import { combineReducers } from "redux";
import { productsApi } from "../api/productsApi"; // Your RTK Query API slice
import cartReducer from "../features/cart/cartSlice"; // Your cart reducer

// Configuration for persisting the cart reducer
const cartPersistConfig = {
  key: 'cart',
  storage, // Use localStorage to persist cart state
};

// Persist the cart reducer using redux-persist
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

// Combine reducers (productsApi and persistedCartReducer)
const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer, // RTK Query API reducer
  cart: persistedCartReducer, // Persisted cart reducer
});

// Configure the Redux store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist
    }).concat(productsApi.middleware), // Include RTK Query middleware
});

// Persistor to be used in your app
export const persistor = persistStore(store);

// TypeScript types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
