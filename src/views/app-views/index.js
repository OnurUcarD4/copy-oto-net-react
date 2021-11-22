import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Spin } from "antd";
import AracimiNasilSatarim from "./sat";

export const AppViews = () => {
  return (
    <Suspense
      fallback={
        <div className="justify-center flex mt-24">
          <Spin size="large" tip="Yükleniyor..."></Spin>
        </div>
      }
    >
      <Switch>
        <Route path={`/startup`} component={lazy(() => import(`./Start-up`))} />
        <Route path={`/home`} component={lazy(() => import(`./Homepage`))} />
        <Route
          path={`/aracimi-nasil-satarim`}
          component={lazy(() => import(`./sat`))}
        />
        <Route path={`/al`} component={lazy(() => import(`./al`))} />
        <Route
          path={`/Hakkimizda`}
          component={lazy(() => import(`./Hakkimizda`))}
        />
        <Route
          path={`/nasil-calisir`}
          component={lazy(() => import(`./nasil-calisir`))}
        />
        <Route path={`/takas`} component={lazy(() => import(`./takas`))} />
        <Redirect from={`/`} to={`/startup`} />
      </Switch>
    </Suspense>
  );
};
export default AppViews;
