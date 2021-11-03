import React, { useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
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
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import "./App.css";
import { Dashboard } from "./components/dashboard.js";
import { Solar } from "./components/solar.js";
import { Battery } from "./components/battery.js";

function App() {
  let history = useHistory();
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <Box>
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
      <Drawer
        open={open}
        anchor="left"
        variant="persistent"
        sx={{ width: 540 }}
      >
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <IconButton onClick={toggleOpen}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => {
              history.push("/dashboard");
              toggleOpen();
            }}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              history.push("/solar");
              toggleOpen();
            }}
          >
            <ListItemIcon>
              <WbSunnyIcon />
            </ListItemIcon>
            <ListItemText primary="Solar PV" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              history.push("/battery");
              toggleOpen();
            }}
          >
            <ListItemIcon>
              <BatteryChargingFullIcon />
            </ListItemIcon>
            <ListItemText primary="Batteries" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              history.push("/financials-1");
              toggleOpen();
            }}
          >
            <ListItemIcon>
              <LocalAtmIcon />
            </ListItemIcon>
            <ListItemText primary="Financials 1" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              toggleOpen();
              history.push("/financials-2");
            }}
          >
            <ListItemIcon>
              <LocalAtmIcon />
            </ListItemIcon>
            <ListItemText primary="Financials 2" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={() => history.push("/financials-1")}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/solar">
          <Solar />
        </Route>
        <Route path="/battery">
          <Battery />
        </Route>
      </Switch>
    </Box>
  );
}

export default App;
