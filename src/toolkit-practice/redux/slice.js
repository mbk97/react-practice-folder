import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value !== 0) {
        state.value -= 1;
      } else {
        alert("Oga, This cannot be less than 0");
      }
    },
    incrementByAmount: (state, { payload }) => {
      state.value += payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
