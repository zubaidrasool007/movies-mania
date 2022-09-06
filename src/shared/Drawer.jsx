import React from "react";
import { Drawer as MUIDrawer } from "@mui/material";

export const Drawer = ({ title, open, closeDrawer, children, ...props }) => {
  return (
    <MUIDrawer
      anchor="left"
      sx={{
        width: 240,
        background: "none",
        ".MuiPaper-root": {
          mt: "64px",
        },
        ".MuiBackdrop-root": {
          top: "64px",
        },
        "&.MuiDrawer-root": {
          left: "unset",
        },
      }}
      open={open}
      onClose={() => closeDrawer(false)}
      {...props}
    >
      {children}
    </MUIDrawer>
  );
};
