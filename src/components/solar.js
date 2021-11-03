import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as api from "../services/api";

export function Solar() {
  let history = useHistory();
  const [loading, setLoading] = useState(false);

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");

  const [advInput1, setAdvInput1] = useState("");
  const [advInput2, setAdvInput2] = useState("");
  const [advInput3, setAdvInput3] = useState("");
  const [advInput4, setAdvInput4] = useState("");
  const [advInput5, setAdvInput5] = useState("");
  const [advInput6, setAdvInput6] = useState("");

  const handleSubmit = () => {
    const values = {
      One: input1,
      Two: input2,
      Three: input3,
      Four: input4,
      Five: input5,
      Six: input6,
    };

    const advValues = {
      One: advInput1,
      Two: advInput2,
      Three: advInput3,
      Four: advInput4,
      Five: advInput5,
      Six: advInput6,
    };

    alert(
      "About to submit these values: " +
        JSON.stringify(values) +
        JSON.stringify(advValues)
    );

    submitValuesToAPI(values, advValues);
  };

  async function submitValuesToAPI(values, advValues) {
    setLoading(true);
    try {
      const resp = await api.submitValues(values, advValues);
      alert("success!");
      console.log(resp);
      history.push("/dashboard");
    } catch (e) {
      alert("failed: " + e);
      console.log(e);
    }
  }

  const isValid = (value) => {
    return value.length > 3 || value.length === 0;
  };

  return (
    <Box component="main">
      <Toolbar />
      <Container sx={{ mt: 4, mb: 4 }}>
        <form onSubmit={handleSubmit}>
          <Paper sx={{ p: 2, mb: 2 }} elevation={5}>
            <Typography variant="h5">Solar Inputs</Typography>
            <TextField
              id="1"
              className="input"
              label="Input 1"
              variant="filled"
              placeholder="Enter the input"
              helperText="Must be 4 or more characters"
              error={!isValid(input1)}
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              sx={{ m: 1 }}
            />
            <TextField
              id="2"
              label="Input 2"
              variant="filled"
              placeholder="Enter the input"
              helperText="Must be 4 or more characters"
              error={!isValid(input2)}
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              sx={{ m: 1 }}
            />
            <TextField
              id="3"
              label="Input 3"
              variant="filled"
              placeholder="Enter the input"
              helperText="Must be 4 or more characters"
              error={!isValid(input3)}
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
              sx={{ m: 1 }}
            />
            <TextField
              id="4"
              label="Input 4"
              variant="filled"
              placeholder="Enter the input"
              helperText="Must be 4 or more characters"
              error={!isValid(input4)}
              value={input4}
              onChange={(e) => setInput4(e.target.value)}
              sx={{ m: 1 }}
            />
            <TextField
              id="5"
              label="Input 5"
              variant="filled"
              placeholder="Enter the input"
              helperText="Must be 4 or more characters"
              error={!isValid(input5)}
              value={input5}
              onChange={(e) => setInput5(e.target.value)}
              sx={{ m: 1 }}
            />
            <TextField
              id="6"
              label="Input 6"
              variant="filled"
              placeholder="Enter the input"
              helperText="Must be 4 or more characters"
              error={!isValid(input6)}
              value={input6}
              onChange={(e) => setInput6(e.target.value)}
              sx={{ m: 1 }}
            />
          </Paper>
          <Accordion elevation={5}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} id="section1">
              <Typography variant="h5">Advanced</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                id="1"
                className="input"
                label="Avanced Input 1"
                variant="filled"
                placeholder="Enter the input"
                helperText="Must be 4 or more characters"
                error={!isValid(advInput1)}
                value={advInput1}
                onChange={(e) => setAdvInput1(e.target.value)}
                sx={{ m: 1 }}
              />
              <TextField
                id="2"
                label="Avanced Input 2"
                variant="filled"
                placeholder="Enter the input"
                helperText="Must be 4 or more characters"
                error={!isValid(advInput2)}
                value={advInput2}
                onChange={(e) => setAdvInput2(e.target.value)}
                sx={{ m: 1 }}
              />
              <TextField
                id="3"
                label="Avanced Input 3"
                variant="filled"
                placeholder="Enter the input"
                helperText="Must be 4 or more characters"
                error={!isValid(advInput3)}
                value={advInput3}
                onChange={(e) => setAdvInput3(e.target.value)}
                sx={{ m: 1 }}
              />
              <TextField
                id="4"
                label="Avanced Input 4"
                variant="filled"
                placeholder="Enter the input"
                helperText="Must be 4 or more characters"
                error={!isValid(advInput4)}
                value={advInput4}
                onChange={(e) => setAdvInput4(e.target.value)}
                sx={{ m: 1 }}
              />
              <TextField
                id="5"
                label="Avanced Input 5"
                variant="filled"
                placeholder="Enter the input"
                helperText="Must be 4 or more characters"
                error={!isValid(advInput5)}
                value={advInput5}
                onChange={(e) => setAdvInput5(e.target.value)}
                sx={{ m: 1 }}
              />
              <TextField
                id="6"
                label="Avanced Input 6"
                variant="filled"
                placeholder="Enter the input"
                helperText="Must be 4 or more characters"
                error={!isValid(advInput6)}
                value={advInput6}
                onChange={(e) => setAdvInput6(e.target.value)}
                sx={{ m: 1 }}
              />
            </AccordionDetails>
          </Accordion>
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{ my: 2 }}
            fullWidth
          >
            {"Submit"}
          </Button>
        </form>
      </Container>
    </Box>
  );
}
