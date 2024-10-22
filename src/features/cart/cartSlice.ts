import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Rating {
  rate: number;
  count: number;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
  category: string;
  rating: Rating;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
  category: string;
  rating: Rating;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems += 1;
      state.totalPrice += action.payload.price;
    },
    removeQuantity: (state, action: PayloadAction<CartItem>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        const item = state.items[index];

        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalItems -= 1;
          state.totalPrice -= item.price;
        } else {
          // If quantity reaches zero, remove the item from the cart
          state.totalItems -= 1;
          state.totalPrice -= item.price;
          state.items.splice(index, 1);
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        const item = state.items[index];
        state.totalItems -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, removeQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
