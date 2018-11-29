import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import Create from './Create';
import SetView from './SetView';

const App = () => (
    <>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" exact component={Create} />
        <Route path="/login" exact component={Login} />
        <Route path="/set/:id/:title" exact component={SetView} />
      </Switch>
    </>
)

export default (App);