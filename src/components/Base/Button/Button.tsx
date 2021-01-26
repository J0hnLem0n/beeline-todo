import UiButton, { ButtonProps } from "@material-ui/core/Button";
import { FC } from "react";

export const Button: FC<ButtonProps> = ({ children, ...overProps }) => {
  return <UiButton {...overProps}>{children}</UiButton>;
};
