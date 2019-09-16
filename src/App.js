import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Resume from './pages/resume';
import Projects from './pages/projects';
import Project from './pages/projects';
import NavBar from './navbar';
import Footer from './footer';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

library.add(fab, faEnvelope);

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/project/:name" component={Project} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
