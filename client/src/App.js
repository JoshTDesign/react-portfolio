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
<<<<<<< HEAD
import Footer from "./components/Footer.js"
import Contact from "./components/Contact.js"
=======
import CircleDetail from "./components/CircleDetail.js"
import PawPairDetail from "./components/PawPairDetail.js"
import WorkFooter from "./components/WorkFooter.js"
import ProjectFooter from "./components/ProjectFooter.js"
import ContactMe from "./components/ContactMe.js"
>>>>>>> ed885c2e39e96a4c12215cc306fa15e495111275

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/work">
              <Head />
              <Work />
<<<<<<< HEAD
              <Footer />
=======
              <ContactMe />
            </Route>
            <Route exact path="/projects">
              <Head />
              <Projects />
              <ContactMe />
>>>>>>> ed885c2e39e96a4c12215cc306fa15e495111275
            </Route>
            <Route exact path="/about">
              <Head />
              <About />
<<<<<<< HEAD
              <Footer />
=======
              <ContactMe />
>>>>>>> ed885c2e39e96a4c12215cc306fa15e495111275
            </Route>

            <Route exact path="/resume">
              <Head />
              <Resume />
<<<<<<< HEAD
              <Footer />
=======
              <ContactMe />
>>>>>>> ed885c2e39e96a4c12215cc306fa15e495111275
            </Route>
            <Route exact path="/work/:id">
              <Head />
              <WorkDetail />
<<<<<<< HEAD
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
=======
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
              <About />
              <ContactMe />
            </Route>
            <Route exact path="*">
              <Head />
              <About />
              <ContactMe />
>>>>>>> ed885c2e39e96a4c12215cc306fa15e495111275
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}


export default App;
