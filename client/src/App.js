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

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/work">
              <Head />
              <Work />
            </Route>
            <Route exact path="/projects">
              <Head />
              <Projects />
            </Route>
            <Route exact path="/about">
              <Head />
              <About />
            </Route>
            <Route exact path="/resume">
              <Head />
              <Resume />
            </Route>
            <Route exact path="/work/:id">
              <Head />
              <WorkDetail />
            </Route>
            <Route exact path="/">
              <Head />
              <Home />
            </Route>
            <Route exact path="*">
              <Head />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}


export default App;
