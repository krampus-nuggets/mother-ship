import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";
import UploadFile from "./containers/UploadFile";

export default () => 
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/SignUp" component={ SignUp } />
        <Route exact path="/Login" component={ Login } />
        <Route exact path="/Dashboard" component={ Dashboard } />
        <Route exact path="/UploadFile" component={ UploadFile } />
    </Switch>
