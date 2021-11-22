import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import AppLayout from "layout/app-layout";

export const Views = () => {
  return (
    <Switch>
      <Route path="/">
        <AppLayout />
      </Route>
    </Switch>
  );
};

export default withRouter(Views);
