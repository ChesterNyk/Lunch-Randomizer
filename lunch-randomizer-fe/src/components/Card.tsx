import React, { ReactNode } from "react";
import MuiCard from "@mui/material/Card";
import MuiCardContent from "@mui/material/CardContent";

interface CardProps {
  noOutline?: boolean;
  children: ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <MuiCard
      variant={props.noOutline ? "outlined" : "elevation"}
      sx={{ mt: 2, mb: 2, width: '100%' }}
    >
      <MuiCardContent>{props.children}</MuiCardContent>
    </MuiCard>
  );
};

export default Card;
