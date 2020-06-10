import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbars from "./component/Navbar";
import "./App.css";
import Index from "./component/Index";
import About from "./component/About";
import Team from "./component/Team";
import News from "./component/News";
import Contest from "./component/Contests";
import Contact from "./component/Contact";
import Pricing from "./component/Pricing";
import RoadMap from "./component/Map";
import Pay from "./component/Pay";
import Find from "./component/Find";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    const initizeAnalytics = () => {
      ReactGA.initialize("UA-163865245-2");
      ReactGA.pageview("/");
    };
    initizeAnalytics();
  }, []);

  return (
    <BrowserRouter>
      <Navbars />
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/news" component={News} />
      <Route path="/contest" component={Contest} />
      <Route path="/pay" component={Pay} />
      <Route path="/find" component={Find} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/roadmap" component={RoadMap} />
      <Route path="/contact" component={Contact} />
    </BrowserRouter>
  );
}

export default App;
