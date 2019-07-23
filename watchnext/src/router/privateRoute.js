import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props =>
  localStorage.getItem("token") ? (
    <Route {...props} />
  ) : (
    <Redirect to="/login" />
  );

export default PrivateRoute;
