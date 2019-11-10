import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import SignUp from "./containers/SignUp";

export default () => 
    <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/SignUp" exact component={ SignUp } />
    </Switch>