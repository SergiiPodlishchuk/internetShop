import React from "react";
// import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// import authSelectors from "../redux/auth/authSelectors";

const PublicRoute = ({
  component: Component,
  isAdmin,
  restricted,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAdmin && restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default PublicRoute;
