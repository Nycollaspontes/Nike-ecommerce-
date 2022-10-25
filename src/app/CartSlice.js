import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartState: false,
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (action, state) => {
      state.cartState = action.payload.CartState;
    },
    setCloseCart: (action, state) => {
      state.cartState = action.payload.CartState;
    },
  },
});

export const { setCloseCart, setOpenCart } = CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;

export default CartSlice.reducer;
