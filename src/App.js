import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Albums from "./pages/Albums";
import Artists from "./pages/Artists";
import Songs from "./pages/Songs";
import Artist from "./pages/Artist";
import Footer from "./components/Footer";
import injectContext from "./store/appContext";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/artists">
          <Artists />
        </Route>
        <Route exact path="/albums">
          <Albums />
        </Route>
        <Route exact path="/songs">
          <Songs />
        </Route>
        <Route exact path="/artist/:artist">
          <Artist />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default injectContext(App);
