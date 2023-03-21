import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { loginSlice } from "./loginSlice";
import { signUpSlice } from "./signupSlice";

const middlewares = [];

if (process.env.NODE_ENV !== "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const rootReducer = combineReducers({
   signup:signUpSlice,
   login:loginSlice
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
});

export default store;