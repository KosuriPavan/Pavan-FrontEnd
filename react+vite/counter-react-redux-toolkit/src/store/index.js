import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += action.payload.num;
    },
    subtract: (state, action) => {
      state.counterVal -= action.payload.num;
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
export const counterActions = counterSlice.actions;
export default counterStore;

// const Initial_Value = {
//   counter: 0,
// };
// const counterReducer = (store = Initial_Value, action) => {
//   if (action.type === "INCREMENT") {
//     return { ...store, counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     return { ...store, counter: store.counter - 1 };
//   } else if (action.type === "ADD") {
//     return { ...store, counter: store.counter + action.payload.num };
//   } else if (action.type === "SUBTRACT") {
//     return { ...store, counter: store.counter - action.payload.num };
//   }
//   return store;
// };
