import React from "react";
import { Toolbar, Box, Container, Typography, Paper } from "@mui/material";

export function Financials1() {
  return (
    <Box>
      <Toolbar />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 2, mb: 2 }} elevation={5}>
          <Typography variant="h5">Financials 1</Typography>
        </Paper>
      </Container>
    </Box>
  );
}
