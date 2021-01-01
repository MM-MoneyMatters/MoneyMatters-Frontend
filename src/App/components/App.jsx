import React from "react";
import "../styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "../../Dashboard/components/Dashboard";
import { Layout } from "./Layout";

export const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Layout>
            <Dashboard />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
};
