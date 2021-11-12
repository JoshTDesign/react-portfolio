import React, { Component } from "react";
import 'normalize.css';
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home.js"
import Work from "./components/Work.js"
import Projects from "./components/Projects.js"
import About from "./components/About.js"
import Writing from "./components/Writing.js"
import Resume from "./components/Resume.js"
import Head from "./components/Head.js"
import Head2 from "./components/Head2.js"
import WorkDetail from "./components/WorkDetail.js"
import CircleDetail from "./components/CircleDetail.js"
import PawPairDetail from "./components/PawPairDetail.js"
import RallyDetail from "./components/RallyDetail.js"
import ExcDetail from "./components/ExcDetail.js"
import StepOneDetail from "./components/StepOneDetail.js"
import ClubHalDetail from "./components/ClubHalDetail.js"
import HollandAmericaDetail from "./components/HollandAmericaDetail.js"
import WorkFooter from "./components/WorkFooter.js"
import Test from "./components/Test.js"
import Test2 from "./components/Test2.js"
import ProjectFooter from "./components/ProjectFooter.js"
import ContactMe from "./components/ContactMe.js"
import Footer from "./components/Footer.js"


function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/work">
              <Head />
              <Work />
              <Footer />
            </Route>
            <Route exact path="/projects">
              <Head />
              <Projects />
              <Footer />
            </Route>
            <Route exact path="/about">
              <Head />
              <About />
              {/* <Resume /> */}
              <Footer />
            </Route>

            <Route exact path="/resume">
              <Head />
              <Resume />
              <Footer />
            </Route>
            <Route exact path="/work/exc">
              <Head />
              <ExcDetail />
              <WorkFooter />
              <Footer />
            </Route>
            <Route exact path="/work/stepone">
              <Head />
              <StepOneDetail />
              <WorkFooter />
              <Footer />
            </Route>
            <Route exact path="/work/clubhal">
              <Head />
              <ClubHalDetail />
              <WorkFooter />
              <Footer />
            </Route>
            <Route exact path="/work/hollandamerica">
              <Head />
              <HollandAmericaDetail />
              <WorkFooter />
              <Footer />
            </Route>
            <Route exact path="/projects/circle">
              <Head />
              <CircleDetail />
              <Footer />
            </Route>
            <Route exact path="/projects/pawpair">
              <Head />
              <PawPairDetail />
              <Footer />
            </Route>
            <Route exact path="/projects/rally">
              <Head />
              <RallyDetail />
              <Footer />
            </Route>
            <Route exact path="/test2">
              <Test2 />
            </Route>
            <Route exact path="/">
              <Head2 />
              <Home />
              <Footer />
            </Route>
            <Route exact path="*">
              <Head />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}


export default App;
