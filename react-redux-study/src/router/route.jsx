import React from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NoFound from "../pages/NoFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../components/MainLayout";

function RouteItem() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path='/' exact strict render={() => <Home />}></Route>
          <Route path='/login' exact strict render={() => <Login />}></Route>
          <Route
            path='/Register'
            exact
            strict
            render={() => <Register />}
          ></Route>
          <Route
            path='/contact'
            exact
            strict
            render={() => <Contact />}
          ></Route>
          <Route component={NoFound}></Route>
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default RouteItem;
