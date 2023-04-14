import { configureStore } from "@reduxjs/toolkit";
import Products from "./slices/Products.slice"
import IsLoading from "./slices/IsLoading.slice";


export default configureStore({
  reducer: {
    products : Products, 
    IsLoading
  }
})
