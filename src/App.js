import React, { useState } from "react";
import {
  Typography,
  Toolbar,
  Box,
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <IconButton onClick={toggleOpen}>
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6">
            {" STEMM UI"}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={open}>
        <Toolbar>
          <IconButton onClick={toggleOpen}>
            <ChevronLeftIcon />
          </IconButton>
          <List>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <WbSunnyIcon />
              </ListItemIcon>
              <ListItemText primary="Solar PV" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <BatteryChargingFullIcon />
              </ListItemIcon>
              <ListItemText primary="Batteries" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="Financials 1" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LocalAtmIcon />
              </ListItemIcon>
              <ListItemText primary="Financials 2" />
            </ListItem>
          </List>
        </Toolbar>
      </Drawer>
    </Box>
  );
}

export default App;
