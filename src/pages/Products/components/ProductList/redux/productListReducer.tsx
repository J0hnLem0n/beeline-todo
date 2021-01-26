import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, Statuses } from "../../../types";
import { LocalStorages } from "../../../../../redux/types";

export interface ProductListProp {
  list: Product[];
}
// TODO: добавить asc, desc в требованиях нет (
// TODO: разобраться как возращать новое состояние именно в redux-toolkit, но такой подход из-за Proxy тоже в полне норм судя по доке
const initialState: ProductListProp = {
  list:
    localStorage.getItem(LocalStorages.products) === null
      ? []
      : // FIXME: логические операторы из за typescript поправить
        JSON.parse(localStorage.getItem(LocalStorages.products) || "") || [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.list.push(action.payload);
    },
    setProductStatus(
      state,
      action: PayloadAction<{ id: number; status: Statuses }>
    ) {
      const { id, status } = action.payload;
      const elIndex = state.list.findIndex((st) => st.id === id);
      if (elIndex !== -1) state.list[elIndex].status = status;
    },
    deleteProduct(state, action: PayloadAction<number>) {
      const elIndex = state.list.findIndex((st) => st.id === action.payload);
      state.list.splice(elIndex, 1);
    },
  },
});
export const {
  actions: { addProduct, setProductStatus, deleteProduct },
  reducer: productListReducer,
} = productSlice;
