import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "../reducers/contador";
import somadorReducer from "../reducers/somador";

const store = configureStore({
  reducer: { contadorReducer, somadorReducer },
});

export default store;
