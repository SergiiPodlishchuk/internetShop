import React, { Suspense } from "react";
import { Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import ModalOrder from "./components/Modal_form_order/Modalorder";

import routes from "./routes/routes";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div>Hi</div>}>
        <Switch>
          {routes.map((route) => {
            return route.private ? (
              <PrivateRoute key={route.path} {...route} />
            ) : (
              <PublicRoute
                key={route.path}
                {...route}
                restricted={route.restricted}
              />
            );
          })}
        </Switch>
      </Suspense>
      {/* <ModalOrder /> */}
    </div>
  );
}

export default App;
