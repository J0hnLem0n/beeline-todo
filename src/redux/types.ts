import { ProductListProp } from "../pages/Products/components/ProductList/redux/productListReducer";

export enum LocalStorages {
  products = "products",
}
export interface InitialState {
  products: ProductListProp;
}
