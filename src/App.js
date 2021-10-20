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
  TextField,
  Container,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  // MenuList,
  // MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import BatteryChargingFullIcon from "@mui/icons-material/BatteryChargingFull";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SettingsIcon from "@mui/icons-material/Settings";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import "./App.css";

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
        {/* <MenuList>
          <MenuItem>
            <DashboardIcon />
            Dashboard
          </MenuItem>
          <MenuItem>Goodbye</MenuItem>
        </MenuList> */}
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

function Dashboard() {
  return (
    <Box>
      <Toolbar />

      <h3>{"Dashboard"}</h3>
    </Box>
  );
}

function Solar() {
  return (
    <Box component="main">
      <Toolbar />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 2, mb: 2 }}>
          <Typography variant="h5">Solar Inputs</Typography>
          <TextField id="1" label="Outlined" variant="outlined" sx={{ m: 1 }} />
          <TextField id="2" label="Outlined" variant="outlined" sx={{ m: 1 }} />
          <TextField id="3" label="Outlined" variant="outlined" sx={{ m: 1 }} />
          <TextField id="4" label="Outlined" variant="outlined" sx={{ m: 1 }} />
          <TextField id="5" label="Outlined" variant="outlined" sx={{ m: 1 }} />
          <TextField id="6" label="Outlined" variant="outlined" sx={{ m: 1 }} />
          <TextField id="1" label="Outlined" variant="outlined" sx={{ m: 1 }} />
          <TextField id="2" label="Outlined" variant="outlined" sx={{ m: 1 }} />
          <TextField id="3" label="Outlined" variant="outlined" sx={{ m: 1 }} />
          <TextField id="4" label="Outlined" variant="outlined" sx={{ m: 1 }} />
          <TextField id="5" label="Outlined" variant="outlined" sx={{ m: 1 }} />
          <TextField id="6" label="Outlined" variant="outlined" sx={{ m: 1 }} />
        </Paper>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="section1">
            <Typography variant="h5">Advanced</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              id="1"
              label="Outlined"
              variant="outlined"
              sx={{ m: 1 }}
            />
            <TextField
              id="2"
              label="Outlined"
              variant="outlined"
              sx={{ m: 1 }}
            />
            <TextField
              id="3"
              label="Outlined"
              variant="outlined"
              sx={{ m: 1 }}
            />
            <TextField
              id="4"
              label="Outlined"
              variant="outlined"
              sx={{ m: 1 }}
            />
            <TextField
              id="5"
              label="Outlined"
              variant="outlined"
              sx={{ m: 1 }}
            />
            <TextField
              id="6"
              label="Outlined"
              variant="outlined"
              sx={{ m: 1 }}
            />
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
}

function Battery() {
  return (
    <Box component="main">
      <Toolbar />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 2, mb: 2 }}>
          <Typography variant="h5">Battery Inputs</Typography>
          <TextField id="1" label="Outlined" variant="outlined" sx={{ m: 1 }} />
          <TextField id="2" label="Outlined" variant="outlined" sx={{ m: 1 }} />
          <TextField id="3" label="Outlined" variant="outlined" sx={{ m: 1 }} />
        </Paper>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="section1">
            <Typography variant="h5">Advanced</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              id="1"
              label="Outlined"
              variant="outlined"
              sx={{ m: 1 }}
            />
            <TextField
              id="2"
              label="Outlined"
              variant="outlined"
              sx={{ m: 1 }}
            />
            <TextField
              id="3"
              label="Outlined"
              variant="outlined"
              sx={{ m: 1 }}
            />
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
}

export default App;
