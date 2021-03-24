import React from "react";

import SignIn from "./components/Login/SignIn";
import SignUp from "./components/Login/SignUp";
import Dashboard from "./components/Dashboard";

import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import 'alertifyjs/build/css/alertify.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

/*Animation Library Initialization */
AOS.init({
  once: true
});

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" children={<SignIn />} />
        <Route path="/sign-up" children={<SignUp />} />            
        <Route path="*" children={<Dashboard/>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
