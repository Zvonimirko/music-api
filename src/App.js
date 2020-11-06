import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Nav from "./components/nav/Nav";

import Albums from "./pages/albums/Albums";
import Artist from "./pages/artist/Artist.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";
function App() {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Albums} />
        <Route exact path="/artist/:id" component={Artist} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
