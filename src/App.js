import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import NavigationBar from "./components/NavigationBar";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
