import React from "react";
import { useHistory } from "react-router-dom";
import {
  Toolbar,
  Box,
  Container,
  Typography,
  Paper,
  Button,
} from "@mui/material";

export function Dashboard() {
  let history = useHistory();
  return (
    <Box>
      <Toolbar />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 2, mb: 2 }} elevation={5}>
          <Typography variant="h5">Dashboard</Typography>
          <Button
            size="large"
            variant="outlined"
            onClick={() => history.push("/solar")}
            sx={{ my: 2 }}
            fullWidth
            color="success"
          >
            Begin
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
