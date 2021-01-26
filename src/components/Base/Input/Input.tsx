import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { FC } from "react";
export const Input: FC<TextFieldProps> = (props) => {
  return <TextField {...props} />;
};
