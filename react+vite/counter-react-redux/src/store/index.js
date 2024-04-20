import { createStore } from "redux";

const Initial_Value = {
  counter: 0,
};
const counterReducer = (store = Initial_Value, action) => {
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return { ...store, counter: store.counter + action.payload.num };
  } else if (action.type === "SUBTRACT") {
    return { ...store, counter: store.counter - action.payload.num };
  }
  return store;
};
const counterStore = createStore(counterReducer);
export default counterStore;
