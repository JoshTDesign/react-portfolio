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
              <Head2 />
              <Work />
              <Footer />
            </Route>
            <Route exact path="/projects">
              <Head2 />
              <Projects />
              <Footer />
            </Route>
            <Route exact path="/about">
              <Head2 />
              <About />
              {/* <Resume /> */}
              <Footer />
            </Route>

            <Route exact path="/resume">
              <Head2 />
              <Resume />
              <Footer />
            </Route>
            <Route exact path="/work/exc">
              <Head2 />
              <ExcDetail />
              <WorkFooter />
              <Footer />
            </Route>
            <Route exact path="/work/stepone">
              <Head2 />
              <StepOneDetail />
              <WorkFooter />
              <Footer />
            </Route>
            <Route exact path="/work/clubhal">
              <Head2 />
              <ClubHalDetail />
              <WorkFooter />
              <Footer />
            </Route>
            <Route exact path="/work/hollandamerica">
              <Head2 />
              <HollandAmericaDetail />
              <WorkFooter />
              <Footer />
            </Route>
            <Route exact path="/projects/circle">
              <Head2 />
              <CircleDetail />
              <Footer />
            </Route>
            <Route exact path="/projects/pawpair">
              <Head2 />
              <PawPairDetail />
              <Footer />
            </Route>
            <Route exact path="/projects/rally">
              <Head2 />
              <RallyDetail />
              <Footer />
            </Route>
            <Route exact path="/">
              <Head2 />
              <Home />
              <Footer />
            </Route>
            <Route exact path="*">
              <Head2 />
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
