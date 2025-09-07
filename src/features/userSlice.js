import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      name: "Dmitro",
      surname: "Sarychev",
      email: "dev",
      password: "1",
      products: [],
      cart:[],
    },
  ],
};

const loadFromLocaleStorage = () => {
  try {
    const serializedState = localStorage.getItem("users");
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch {
    return initialState;
  }
};

const userSlice = createSlice({
  name: "users",
  initialState: loadFromLocaleStorage(),
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(
        (user) => Number(user.id) !== Number(action.payload)
      );
    },
    addUsersProduct: (state, action) => {
      state.users
        .find((user) => user.id === Number(action.payload.id))
        .products.push(action.payload.productId);
    },
    deleteUsersProduct: (state,action) => {
       const { id: userId, productId } = action.payload;
       const userIndex = state.users.findIndex(
         (user) => user.id === Number(userId)
       );
       const indexIten = state.users[userIndex].products.findIndex(
         (item) => item === String(productId)
       );
       state.users[userIndex].cart.splice(indexIten, 1);
    },
    addToCart: (state, action) => {
      state.users
        .find((user) => user.id === Number(action.payload.id))
        .cart.push(action.payload.productId);
    },
    removeFromCart: (state, action) => {
       const { id: userId, productId } = action.payload;
       const userIndex = state.users.findIndex(
         (user) => user.id === Number(userId)
       );
       const indexIten = state.users[userIndex].cart.findIndex(
         (item) => item === String(productId)
       );
       state.users[userIndex].cart.splice(indexIten, 1);
    },
  },
});

export const {
  addUser,
  deleteUser,
  addUsersProduct,
  deleteUsersProduct,
  addToCart,
  removeFromCart,
} = userSlice.actions;

export default userSlice.reducer;
