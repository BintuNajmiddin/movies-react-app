import React from "react";
import { 
  BrowserRouter as Router, Switch, Route } from "react-router-dom";
  import 'swiper/swiper.min.css';
import Home from "./pages/Home";
import ViewMovie from "./pages/ViewMovie";


const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movie/:id">
            <ViewMovie />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
