import React from "react";
import { Typography } from "@mui/material";
import { TypographyProps } from "@mui/material";

interface PTypographyProps extends TypographyProps {
  children: React.ReactNode;
  fontSize?: number;
  fontWeight?: number;
}

const PTypography: React.FC<PTypographyProps> = (props) => {
  const { children, fontSize, fontWeight, ...rest } = props;

  return (
    <Typography {...rest} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </Typography>
  );
};

export default PTypography;
