import React from "react";
import { useHistory } from "react-router-dom";
import {
  Typography,
  Toolbar,
  Box,
  Container,
  Grid,
  Paper,
  Button,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export function Financials1() {
  let history = useHistory();
  return (
    <Box>
      <Toolbar />
      <Container sx={{ mt: 4 }}>
        <Paper sx={{ p: 2, mb: 2 }} elevation={5}>
          <Typography variant="h5">Financial Inputs 1</Typography>
        </Paper>
        <Grid container>
          <Grid item xs={5} md={3}>
            <Button
              size="large"
              variant="outlined"
              onClick={() => history.push("/battery")}
              sx={{ my: 2 }}
              fullWidth
            >
              <ChevronLeftIcon />
              {" Previous"}
            </Button>
          </Grid>
          <Grid item xs={2} md={6} />
          <Grid item xs={5} md={3}>
            <Button
              size="large"
              variant="outlined"
              onClick={() => history.push("/financials-2")}
              sx={{ my: 2 }}
              fullWidth
            >
              {"Next "}
              <ChevronRightIcon />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
