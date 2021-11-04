import React from "react";
import { 
  BrowserRouter as Router, Switch, Route } from "react-router-dom";
  import 'swiper/swiper.min.css';
  import 'swiper/swiper-bundle.min.css';
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ViewMovie from "./pages/ViewMovie";
import Search from "./pages/Search";
import NotFound from "./pages/NotFoundPage";
import Header from "./components/Header";
import SkrollToTop from "./components/SkrollToTop";


const App = () => {
  return (
    <div className="wrapper">
      <Router>
        <SkrollToTop/>
        <Header />
        <Switch>
          <Route exact path="/"> <Home /> </Route>

          <Route path="/catalog/:genreid"> <Catalog /> </Route>

          <Route path="/catalog"> <Catalog /> </Route>

          <Route path="/search"> <Search /> </Route>

          <Route path="/movie/:id"> <ViewMovie /></Route>

          <Route path="*"> <NotFound /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
