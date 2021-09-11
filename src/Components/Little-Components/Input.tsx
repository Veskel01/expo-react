import React from "react";

import TextField, { TextFieldProps } from "@mui/material/TextField";

type Props = {
  maxLength: number;
  label: string;
} & TextFieldProps;

const Input = ({ maxLength, label, ...props }: Props) => {
  return (
    <TextField
      type="text"
      label={label}
      inputProps={{
        maxLength,
      }}
      {...props}
    />
  );
};

export default React.forwardRef((props: React.ComponentProps<typeof Input>, ref) => (
  <Input {...props} inputRef={ref} />
));
