import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import { Api } from "../api/api";

export default configureStore({
  reducer: {
    users: userReducer,
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});
