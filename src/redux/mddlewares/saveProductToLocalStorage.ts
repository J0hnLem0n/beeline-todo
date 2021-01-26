// TODO: fixed any
import {
  addProduct,
  deleteProduct,
  setProductStatus,
} from "../../pages/Products/components/ProductList/redux/productListReducer";
import { LocalStorages } from "../types";

export const saveProductToLocalStorage = (store: any) => (next: any) => (
  action: any
) => {
  const result = next(action);
  const saveActions = [
    addProduct.type,
    deleteProduct.type,
    setProductStatus.type,
  ];
  if (saveActions.includes(action.type)) {
    localStorage.setItem(
      LocalStorages.products,
      JSON.stringify(store.getState().products.list)
    );
  }
  return result;
};
