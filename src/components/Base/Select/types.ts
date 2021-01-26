import { SelectProps } from "@material-ui/core/Select";

export type Item = {
  label: string;
  value: string;
};

export interface SelectBase extends SelectProps {
  menuItems: Item[];
  label: string;
}
