import React from "react";
// import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
// import authSelectors from "../redux/auth/authSelectors";

const PrivateRoute = ({ component: Component, isAdmin, ...routeProps }) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAdmin ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default PrivateRoute;
