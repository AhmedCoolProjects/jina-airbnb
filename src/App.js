import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CopyrightC from "./components/CopyrightC";
import FooterInfoC from "./components/FooterInfoC";
import ToolbarC from "./components/ToolbarC";
import DashboardP from "./pages/DashboardP";
import HostItemP from "./pages/HostItemP";
import SearchP from "./pages/SearchP";

function App() {
  return (
    <Router>
      <ToolbarC />
      <Switch>
        <Route exact path="/">
          <DashboardP />
        </Route>
        <Route exact path="/search">
          <SearchP />
        </Route>
        <Route exact path="/hostitem">
          <HostItemP />
        </Route>
      </Switch>
      <FooterInfoC />
      <CopyrightC />
    </Router>
  );
}

export default App;
