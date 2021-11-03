import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import { MainAppBar } from "./components/appbar.js";
import { SideMenu } from "./components/sidemenu.js";
import { Dashboard } from "./components/dashboard.js";
import { Solar } from "./components/solar.js";
import { Battery } from "./components/battery.js";

export default function App() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <MainAppBar toggleOpen={toggleOpen} />
      <SideMenu open={open} toggleOpen={toggleOpen} />
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
