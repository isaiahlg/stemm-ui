import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import { MainAppBar } from "./components/appBar";
import { SideMenu } from "./components/sideMenu";
import { Dashboard } from "./components/dashboard";
import { MainForm } from "./components/mainForm";
import { Settings } from "./components/settings";

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
        <MainForm />
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </Box>
  );
}
