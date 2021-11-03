import React, { useState } from "react";

import {
  Typography,
  Toolbar,
  Box,
  TextField,
  Container,
  Grid,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function Solar(props) {
  return (
    <Box component="main">
      <Toolbar />
      <Container sx={{ mt: 4 }}>
        <Paper sx={{ p: 3, mb: 2 }} elevation={5}>
          <Typography sx={{ mb: 2 }} variant="h5">
            Solar Inputs
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <TextField
                id="1"
                className="input"
                label="Input 1"
                variant="filled"
                placeholder="Enter the input"
                helperText="Must be 4 or more characters"
                error={!props.isValid(props.input1)}
                value={props.input1}
                onChange={(e) => props.setInput1(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TextField
                id="2"
                label="Input 2"
                variant="filled"
                placeholder="Enter the input"
                helperText="Must be 4 or more characters"
                error={!props.isValid(props.input2)}
                value={props.input2}
                onChange={(e) => props.setInput2(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TextField
                id="3"
                label="Input 3"
                variant="filled"
                placeholder="Enter the input"
                helperText="Must be 4 or more characters"
                error={!props.isValid(props.input3)}
                value={props.input3}
                onChange={(e) => props.setInput3(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TextField
                id="4"
                label="Input 4"
                variant="filled"
                placeholder="Enter the input"
                helperText="Must be 4 or more characters"
                error={!props.isValid(props.input4)}
                value={props.input4}
                onChange={(e) => props.setInput4(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TextField
                id="5"
                label="Input 5"
                variant="filled"
                placeholder="Enter the input"
                helperText="Must be 4 or more characters"
                error={!props.isValid(props.input5)}
                value={props.input5}
                onChange={(e) => props.setInput5(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <TextField
                id="6"
                label="Input 6"
                variant="filled"
                placeholder="Enter the input"
                helperText="Must be 4 or more characters"
                error={!props.isValid(props.input6)}
                value={props.input6}
                onChange={(e) => props.setInput6(e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
        </Paper>
        <Accordion elevation={5}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} id="section1">
            <Typography variant="h5">Advanced</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={4}>
                <TextField
                  id="1"
                  className="input"
                  label="Avanced Input 1"
                  variant="filled"
                  placeholder="Enter the input"
                  helperText="Must be 4 or more characters"
                  error={!props.isValid(props.advInput1)}
                  value={props.advInput1}
                  onChange={(e) => props.setAdvInput1(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <TextField
                  id="2"
                  label="Avanced Input 2"
                  variant="filled"
                  placeholder="Enter the input"
                  helperText="Must be 4 or more characters"
                  error={!props.isValid(props.advInput2)}
                  value={props.advInput2}
                  onChange={(e) => props.setAdvInput2(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <TextField
                  id="3"
                  label="Avanced Input 3"
                  variant="filled"
                  placeholder="Enter the input"
                  helperText="Must be 4 or more characters"
                  error={!props.isValid(props.advInput3)}
                  value={props.advInput3}
                  onChange={(e) => props.setAdvInput3(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <TextField
                  id="4"
                  label="Avanced Input 4"
                  variant="filled"
                  placeholder="Enter the input"
                  helperText="Must be 4 or more characters"
                  error={!props.isValid(props.advInput4)}
                  value={props.advInput4}
                  onChange={(e) => props.setAdvInput4(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <TextField
                  id="5"
                  label="Avanced Input 5"
                  variant="filled"
                  placeholder="Enter the input"
                  helperText="Must be 4 or more characters"
                  error={!props.isValid(props.advInput5)}
                  value={props.advInput5}
                  onChange={(e) => props.setAdvInput5(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <TextField
                  id="6"
                  label="Avanced Input 6"
                  variant="filled"
                  placeholder="Enter the input"
                  helperText="Must be 4 or more characters"
                  error={!props.isValid(props.advInput6)}
                  value={props.advInput6}
                  onChange={(e) => props.setAdvInput6(e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Box>
  );
}
