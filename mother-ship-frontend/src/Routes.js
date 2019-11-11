import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";

export default () => 
    <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/SignUp" exact component={ SignUp } />
        <Route path="/Login" exact component={ Login } />
        <Route path="/Dashboard" exact component={ Dashboard } />
    </Switch>
