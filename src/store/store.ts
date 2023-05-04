import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer/authReducer";
import languageReducer from "./languageReducer/languageReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  language: languageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
