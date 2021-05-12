import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardP from "./pages/DashboardP";
import SearchP from "./pages/SearchP";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <DashboardP />
        </Route>
        <Route exact path="/search">
          <SearchP />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
