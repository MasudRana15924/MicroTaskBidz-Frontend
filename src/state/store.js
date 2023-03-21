import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { signUpSlice } from "./signupSlice";

const middlewares = [];

if (process.env.NODE_ENV !== "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const rootReducer = combineReducers({
   signup:signUpSlice
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
});

export default store;