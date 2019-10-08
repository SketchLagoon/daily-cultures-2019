import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home/Home"
import Products from "./components/Products/Products"
import Science from "./components/Science/Science"
import Trial from "./components/Trial/Trial"

function App() {


  return (

    <BrowserRouter>
      <Route path={"/products"} component={Products}/>
      <Route path={"/science"} component={Science}/>
      <Route path={"/trial"} component={Trial}/>
      <Route exact path={"/"} component={Home}/>
    </BrowserRouter>

  );
}

export default App;
