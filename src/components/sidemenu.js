import React from "react";
import { useHistory } from "react-router-dom";
import {
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

export function SideMenu({ open, toggleOpen }) {
  let history = useHistory();
  return (
    <Drawer open={open} anchor="left" variant="persistent" sx={{ width: 540 }}>
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
  );
}
