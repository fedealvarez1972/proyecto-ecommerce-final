import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/Products.slice";
import IsLoading from "./slices/IsLoading.slice";


export default configureStore({
  reducer: {
    products, IsLoading
  }
})
