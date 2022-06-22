import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { moviesApi } from "../service/services";
 export const store= configureStore({
     reducer:{
         [moviesApi.reducerPath]:moviesApi.reducer
     }
 })
 setupListeners(store.dispatch)
