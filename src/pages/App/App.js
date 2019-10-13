import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../HomePage/HomePage";


class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route
            exact path="/" 
            render={() => ( <HomePage /> )}
          />
          <Route
            exact path="/projects"
            render={() => ( <ProjectsPage /> )}
          />
          <Route 
            exact path="/about"
            render={() => ( <AboutPage /> )}
          />
        </Switch>
      </>
    )
  }
}

export default App;
