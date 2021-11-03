import React from "react";
import { Typography, Toolbar, AppBar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export function MainAppBar({ toggleOpen }) {
  return (
    <AppBar position="absolute" sx={{ marginLeft: 5 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={toggleOpen}
          sx={{ marginRight: "36px" }}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" noWrap color="inherit">
          {"STEMM UI"}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
