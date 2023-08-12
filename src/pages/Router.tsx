import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// import Home from "src/pages/Home";
import SignUp from "src/pages/SignUp";

import Header from "src/components/Header";
import Home from "src/pages/Home";
import SignIn from "src/pages/SignIn";
import Settings from "src/pages/Settings";
import Search from "src/pages/Search";
import SingleFilm from "src/pages/SingleFilm";

export enum RoutesList {
  Home = "/",
  SignUp = "/sign-up",
  SignIn = "/sign-in",
  Settings = "/settings",
  Search = "/posts/:search",
  SingleFilm = '/film/:id',
  Default = "*",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.Home} element={<Header />}>
          <Route path={RoutesList.Home} element={<Home />} />
          <Route path={RoutesList.SignUp} element={ <SignUp />} />
          <Route path={RoutesList.SignIn} element={ <SignIn />} />
          <Route path={RoutesList.SingleFilm} element={<SingleFilm />} />
          <Route path={RoutesList.Settings} element={ <Settings />} />
          <Route path={RoutesList.Search}
                 element={<Search/>}/>
          <Route path={RoutesList.Search}
                 element={<Search/>}/>

          <Route
            path={RoutesList.Default}
            element={<Navigate to={RoutesList.Home} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;