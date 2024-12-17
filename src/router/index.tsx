import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import * as path from "./path";

import PrivateRoute from "./routes/PrivateRoute";

import Login from "views/authentication/Login/Login";
import Register from "views/authentication/Register/Register";

const MLRating = lazy(() => import("views/MLRating/MLRating"));
const UserDetails = lazy(() => import("views/UserDetails/UserDetails"));
const Router = () => {
  return (
    <Routes>
      <Route path={path.LOGIN} element={<Login />} />
      <Route path={path.REGISTER} element={<Register />} />
      <Route path={path.PARENT_ROUTE} element={<MLRating />} />
      <Route element={<PrivateRoute />}>
        <Route path={path.USER_DETAILS} element={<UserDetails />} />
      </Route>
    </Routes>
  );
};

export default Router;
