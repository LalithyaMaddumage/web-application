import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddEmployee from "../views/addEmployee";

export const RouterComponents = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={AddEmployee} />
        </Switch>
      </Router>
    </div>
  );
};
