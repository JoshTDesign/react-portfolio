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
import WorkDetail from "./components/WorkDetail.js"
import CircleDetail from "./components/CircleDetail.js"
import PawPairDetail from "./components/PawPairDetail.js"
import WorkFooter from "./components/WorkFooter.js"
import ProjectFooter from "./components/ProjectFooter.js"
import ContactMe from "./components/ContactMe.js"

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/work">
              <Head />
              <Work />
              <ContactMe />
            </Route>
            <Route exact path="/projects">
              <Head />
              <Projects />
              <ContactMe />
            </Route>
            <Route exact path="/about">
              <Head />
              <About />
              <ContactMe />
            </Route>

            <Route exact path="/resume">
              <Head />
              <Resume />
              <ContactMe />
            </Route>
            <Route exact path="/work/:id">
              <Head />
              <WorkDetail />
              <WorkFooter />
              <ContactMe />
            </Route>
            <Route exact path="/projects/circle">
              <Head />
              <CircleDetail />
              <ProjectFooter />
              <ContactMe />
            </Route>
            <Route exact path="/projects/pawpair">
              <Head />
              <PawPairDetail />
              <ProjectFooter />
              <ContactMe />
            </Route>
            <Route exact path="/">
              <Head />
              <Home />
              <ContactMe />
            </Route>
            <Route exact path="*">
              <Head />
              <Home />
              <ContactMe />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}


export default App;
