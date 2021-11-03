import React from "react";
import {
  Typography,
  Toolbar,
  Box,
  TextField,
  Container,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function Battery() {
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
