import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, ...props }) {
  return (
    <Route>
      {() => (isLoggedIn ? <Route {...props} /> : <Redirect to={"/signin"} />)}
    </Route>
  );
}

export default ProtectedRoute;
