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
  Divider,
  TextField,
  Container,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
          <ListItem button onClick={toggleOpen}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={toggleOpen}>
            <ListItemIcon>
              <WbSunnyIcon />
            </ListItemIcon>
            <ListItemText primary="Solar PV" />
          </ListItem>
          <ListItem button onClick={toggleOpen}>
            <ListItemIcon>
              <BatteryChargingFullIcon />
            </ListItemIcon>
            <ListItemText primary="Batteries" />
          </ListItem>
          <ListItem button onClick={toggleOpen}>
            <ListItemIcon>
              <LocalAtmIcon />
            </ListItemIcon>
            <ListItemText primary="Financials 1" />
          </ListItem>
          <ListItem button onClick={toggleOpen}>
            <ListItemIcon>
              <LocalAtmIcon />
            </ListItemIcon>
            <ListItemText primary="Financials 2" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={toggleOpen}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>
      <Box component="main">
        <Toolbar />
        <Container sx={{ mt: 4, mb: 4 }}>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h5">Inputs</Typography>
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
    </Box>
  );
}

export default App;
