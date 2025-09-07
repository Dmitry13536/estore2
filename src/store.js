import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import productSlice from "./features/productSlice";

const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
  } catch (e) {
    console.log("error saving to local Storage ", e);
  }
};

const localeStorageMiddleware = (key) => (store) => (next) => (action) =>  {
  const result = next(action);
  saveState(key, store.getState()[key]);
  return result;
};

const addUserIdMiddleware = (store) => (next) => (action) => {
  // console.log("addUserIdMiddleware вызван! Действие:", action.type);
  if (action.type === "users/addUser") {
    const newUser = action.payload;
    const userId = new Date().getTime();
    const updateAction = {
      ...action,
      payload: { ...newUser, id: userId },
    };
    return next(updateAction);
  };
  return next(action);
};

const store = configureStore({
  reducer: {
    users: userSlice,
    products: productSlice,
    
  },
  
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(
      addUserIdMiddleware,
      localeStorageMiddleware('users'),
      localeStorageMiddleware('products')
    )
});

export default store;
