import React from "react";
import { Toolbar, Box, Container, Typography, Paper } from "@mui/material";

export function Dashboard() {
  return (
    <Box>
      <Toolbar />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Paper sx={{ p: 2, mb: 2 }} elevation={5}>
          <Typography variant="h5">Dashboard</Typography>
        </Paper>
      </Container>
    </Box>
  );
}
