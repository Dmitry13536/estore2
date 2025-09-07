import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    // {
    //   amount: "32323",
    //   body: "Sasi baak",
    //   cost: "1122",
    //   id: "11754216822900",
    //   title: "Rak chickibrak",
    //   ownerId:'1'
    // },
  ],
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("products");
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch {
    return initialState;
  }
};

const productSlice = createSlice({
  name: "products",
  initialState: loadFromLocalStorage(),
  reducers: {
    addNewGood: (state, action) => {
      state.products.push(action.payload);
      console.log(state.products);
    },
    deleteGood: (state, action) => {
      state.products = state.products.filter(
        (good) => good.id !== action.payload
      );
    },
    deleteUsersProducts: (state, action) => {
      state.products = state.products.filter((start) => {
        return !action.payload.some((del) => del === start.id);
      });
    },
    changeGood: (state, action) => {
      return state.products.map((good) => {
        if (good.id === action.payload.id) {
          return { ...good, ...action.payload.newThing };
        }
        return good;
      });
    },
  },
});

export const { addNewGood, deleteGood, changeGood, deleteUsersProducts } =
  productSlice.actions;
export default productSlice.reducer;
