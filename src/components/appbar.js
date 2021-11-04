import React from "react";
import {
  Typography,
  Toolbar,
  AppBar,
  IconButton,
  Grid,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export function MainAppBar({ toggleOpen }) {
  return (
    <AppBar position="absolute" sx={{ marginLeft: 5 }}>
      <Toolbar>
        <Grid container justifyContent="space-between">
          <Grid item xs={1}>
            <IconButton
              color="inherit"
              onClick={toggleOpen}
              sx={{ marginRight: "36px" }}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <Typography component="h1" variant="h6" noWrap color="inherit">
              {"STEMM UI"}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Avatar />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
