import { configureStore } from "@reduxjs/toolkit";
import IsLoading from "./slices/IsLoading.slice";
import Products from './slices/Products.slice'

export default configureStore({
  reducer: {
    products : Products, 
    IsLoading
  }
})
