import React, { useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Box, Button, Container } from "@mui/material";
import "./App.css";
import { MainAppBar } from "./components/appbar";
import { SideMenu } from "./components/sidemenu";
import { Dashboard } from "./components/dashboard";
import { Solar } from "./components/solar";
import { Battery } from "./components/battery";
import * as api from "./services/api";

export default function App() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
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

  const isValid = (value) => {
    return value.length > 3 || value.length === 0;
  };

  const isFormValid =
    isValid(input1) &&
    isValid(input2) &&
    isValid(input3) &&
    isValid(input4) &&
    isValid(input5) &&
    isValid(input6) &&
    isValid(advInput1) &&
    isValid(advInput2) &&
    isValid(advInput3) &&
    isValid(advInput4) &&
    isValid(advInput5) &&
    isValid(advInput6);

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

  return (
    <Box>
      <MainAppBar toggleOpen={toggleOpen} />
      <SideMenu open={open} toggleOpen={toggleOpen} />
      <form onSubmit={handleSubmit}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/solar">
            <Solar
              input1={input1}
              input2={input2}
              input3={input3}
              input4={input4}
              input5={input5}
              input6={input6}
              advInput1={advInput1}
              advInput2={advInput2}
              advInput3={advInput3}
              advInput4={advInput4}
              advInput5={advInput5}
              advInput6={advInput6}
              setInput1={setInput1}
              setInput2={setInput2}
              setInput3={setInput3}
              setInput4={setInput4}
              setInput5={setInput5}
              setInput6={setInput6}
              setAdvInput1={setAdvInput1}
              setAdvInput2={setAdvInput2}
              setAdvInput3={setAdvInput3}
              setAdvInput4={setAdvInput4}
              setAdvInput5={setAdvInput5}
              setAdvInput6={setAdvInput6}
              isValid={isValid}
            />
          </Route>
          <Route path="/battery">
            <Battery />
          </Route>
        </Switch>
        <Container>
          <Button
            type="submit"
            variant="contained"
            disabled={loading || !isFormValid}
            sx={{ my: 2 }}
            fullWidth
            size="large"
          >
            {"Submit"}
          </Button>
        </Container>
      </form>
    </Box>
  );
}
