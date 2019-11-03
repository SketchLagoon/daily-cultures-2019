import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavDrawer from "./components/nav/NavDrawer";
import Footer from "./components/footer";

import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Science from "./components/Science/Science";
import Trial from "./components/Trial/Trial";

function App() {
  return (
    <BrowserRouter>
      <NavDrawer />
      <Route path={"/products"} component={Products} />
      <Route path={"/science"} component={Science} />
      <Route path={"/taster-pack"} component={Trial} />
      <Route exact path={"/home"} component={Home} />
      <Route exact path={"/"} component={Home} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
