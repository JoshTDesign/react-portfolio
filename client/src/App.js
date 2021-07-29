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
import About from "./components/About.js"
import Writing from "./components/Writing.js"
import Resume from "./components/Resume.js"
import Head from "./components/Head.js"
import WorkDetail from "./components/WorkDetail.js"
import Footer from "./components/Footer.js"
import Contact from "./components/Contact.js"

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
            <Route exact path="/about">
              <Head />
              <About />
              <Footer />
            </Route>
            <Route exact path="/resume">
              <Head />
              <Resume />
              <Footer />
            </Route>
            <Route exact path="/work/:id">
              <Head />
              <WorkDetail />
              <Footer />
            </Route>
            <Route exact path="/contact">
              <Head />
              <Contact />
              <Footer />
            </Route>
            <Route exact path="/">
              <Head />
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
