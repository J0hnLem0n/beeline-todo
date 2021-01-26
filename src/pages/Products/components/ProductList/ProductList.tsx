import { Checkbox } from "../../../../components/Base/Chexbox";
import { Button } from "../../../../components/Base/Button";
import { Select } from "../../../../components/Base/Select";
import styles from "./ProductList.module.scss";
import { Paper } from "@material-ui/core";
import { Modal } from "../../../../components/Modal/Modal";
import { useCallback, useMemo, useState } from "react";
import { AddProduct } from "./components/AddProduct";
import { useDispatch, useSelector } from "react-redux";
import { InitialState } from "../../../../redux/types";
import { Product, Statuses } from "../../types";
import { SortFields } from "./types";
import { setProductStatus, deleteProduct } from "./redux/productListReducer";

const menuItems = [
  { label: "По дате", value: SortFields.dateCreate },
  { label: "По приоритету", value: SortFields.priority },
];

// TODO: отрефакторить(кастомные хуки + создание view компонент)
export const ProductList = () => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sortField, setSortField] = useState(SortFields.dateCreate);
  const handleCloseModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);
  const initialProductList = useSelector(
    (state: InitialState) => state.products.list
  );
  const handleClickAddButton = useCallback(() => setModalIsOpen(true), []);
  const handleChangeSort = useCallback((e) => {
    setSortField(e.target.value);
  }, []);
  const handleChangeBuyProduct = (productId: number) => {
    dispatch(setProductStatus({ id: productId, status: Statuses.bought }));
  };
  const handleDeleteProduct = (productId: number) => {
    dispatch(deleteProduct(productId));
  };

  //TODO: вынести в хуки
  const productList: Product[] = useMemo<Product[]>(() => {
    const divideList = (list: Product[]) => {
      const res = list.reduce(
        (acc, listItem) => {
          listItem.status === Statuses.bought
            ? acc.bought.push(listItem)
            : acc.new.push(listItem);
          return acc;
        },
        { bought: [] as Product[], new: [] as Product[] }
      );
      return [...res.new, ...res.bought];
    };
    switch (sortField) {
      case SortFields.dateCreate:
        const sortList = initialProductList
          .slice()
          .sort((a, b) => b.createDate - a.createDate);
        return divideList(sortList);
      case SortFields.priority:
        const sortListPriority = initialProductList
          .slice()
          .sort((a, b) => a.priority - b.priority);
        return divideList(sortListPriority);
      default:
        return initialProductList;
    }
  }, [initialProductList, sortField]);
  return (
    <div className={styles.container}>
      <Modal open={modalIsOpen} onClose={handleCloseModal}>
        <AddProduct onClose={handleCloseModal} />
      </Modal>
      <Paper>
        <div className={styles.list}>
          {/*TODO: useMemo, React.memo*/}
          {productList.map((product, index) => (
            <div className={styles.listGroup} key={product.id}>
              <Checkbox
                onChange={() => handleChangeBuyProduct(product.id)}
                label={product.name}
                checked={product.status === Statuses.bought}
              />
              <Button onClick={() => handleDeleteProduct(product.id)}>x</Button>
            </div>
          ))}
          <Select
            onChange={handleChangeSort}
            value={sortField}
            menuItems={menuItems}
            label={"Сортировать"}
          />
          <Button onClick={handleClickAddButton}>Добавить</Button>
        </div>
      </Paper>
    </div>
  );
};
