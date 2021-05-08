import React from "react";
import './App.css';

import Home2 from "./pages/Home2";
import Rooms2 from "./pages/Rooms2";
import SingleRoom2 from "./pages/SingleRoom2";
import Error2 from "./pages/Error2";

import { Switch, Route } from "react-router-dom";

import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <>
    <Navbar2 />
   <Switch >
    <Route exact path="/" component={Home2} />
    <Route exact path="/Rooms2/" component={Rooms2} />
    <Route exact path="/Rooms2/:slug" component={SingleRoom2} />
    <Route  component={Error2} />
   </Switch >
    </>
  )
  }

export default App; 
