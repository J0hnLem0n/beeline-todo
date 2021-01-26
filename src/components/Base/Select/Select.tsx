import UiSelect from "@material-ui/core/Select";
import UiMenuItem from "@material-ui/core/MenuItem";
import UiInputLabel from "@material-ui/core/InputLabel";
import UiFormControl from "@material-ui/core/FormControl";
import { FC } from "react";
import { SelectBase, Item } from "./types";

export const Select: FC<SelectBase> = ({ menuItems, label, ...overProps }) => {
  return (
    <UiFormControl fullWidth>
      <UiInputLabel id="demo-simple-select-helper-label">{label}</UiInputLabel>
      <UiSelect {...overProps}>
        {menuItems &&
          menuItems.map((item: Item) => {
            return (
              <UiMenuItem key={item.value} value={item.value}>
                {item.label}
              </UiMenuItem>
            );
          })}
      </UiSelect>
    </UiFormControl>
  );
};
