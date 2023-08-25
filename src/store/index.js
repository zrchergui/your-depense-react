import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { loggerMiddleware } from "./middlewares/logger-middlewares";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whiteList: ["EXPENSE"],
};
const rootReducers = combineReducers({
  EXPENSE: expenseSlice.reducer,
});

const persistedReducers = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(loggerMiddleware.middleware),
});
const persistor = persistStore(store);
export { store, persistor };
