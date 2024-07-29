import React from "react";
import { ButtonProps } from "@mui/material";
import { CustomButton } from "./style";

export const PButton: React.FC<ButtonProps> = ({
  children,
  disableRipple = true,
  ...rest
}) => {
  return (
    <CustomButton disableRipple={disableRipple} {...rest}>
      {children}
    </CustomButton>
  );
};
