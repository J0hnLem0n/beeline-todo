import FormControlLabel from "@material-ui/core/FormControlLabel";
import UiCheckbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import { FC } from "react";

interface BaseCheckbox extends CheckboxProps {
  label: string;
}

export const Checkbox: FC<BaseCheckbox> = ({ label = "", ...overProps }) => {
  return (
    <FormControlLabel
      control={<UiCheckbox {...overProps} color="primary" />}
      label={label}
    />
  );
};
