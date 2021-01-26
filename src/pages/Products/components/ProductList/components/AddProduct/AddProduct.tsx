import { Input } from "../../../../../../components/Base/Input";
import { Select } from "../../../../../../components/Base/Select";
import { Button } from "../../../../../../components/Base/Button";
import { addProduct } from "../../redux/productListReducer";
import { useDispatch } from "react-redux";
import styles from "./AddProduct.module.scss";
import { FC, useCallback } from "react";
import { Statuses, Product } from "../../../../types";
import { useForm, Controller } from "react-hook-form";

const menuItems = [
  { label: "Высокий", value: "1" },
  { label: "Средний", value: "2" },
  { label: "Низкий", value: "3" },
];

type AddProductProp = {
  onClose: () => void;
};

export const AddProduct: FC<AddProductProp> = ({ onClose }) => {
  const { control, handleSubmit, register } = useForm();
  // TODO: add types
  const onSubmit = (data: any) => {
    dispatch(
      addProduct({
        ...data,
        id: Date.now(),
        createDate: Date.now(),
        status: Statuses.new,
      })
    );
    onClose();
  };
  const dispatch = useDispatch();
  // TODO: вынести форму в отдельный компонент
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <div>
          <Controller
            name="name"
            control={control}
            defaultValue={""}
            render={({ onChange, value }) => (
              <Input
                onChange={onChange}
                value={value}
                label={"Название товара"}
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="count"
            control={control}
            defaultValue={""}
            render={({ onChange, value }) => (
              <Input onChange={onChange} value={value} label={"Количество"} />
            )}
          />
        </div>
        <div>
          <Controller
            name="priority"
            label={"Приоритет"}
            control={control}
            defaultValue={""}
            render={({ onChange, value }) => (
              <Select
                onChange={onChange}
                value={value}
                menuItems={menuItems}
                label={"Приоритет"}
              />
            )}
          />
        </div>
        <Button type={"submit"}>Сохранить</Button>
      </div>
    </form>
  );
};
