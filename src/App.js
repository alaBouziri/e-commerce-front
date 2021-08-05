import React from "react";
import { Navbar } from "./components";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Routes />
      </Switch>
    </Router>
  );
}

export default App;
