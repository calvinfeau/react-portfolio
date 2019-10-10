import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import AboutButton from '../../components/AboutButton/AboutButton';
import ProjectsButton from '../../components/ProjectsButton/ProjectsButton';
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import AboutPage from "../AboutPage/AboutPage";


class App extends Component {
  render() {
    return (
      <>
      <Route
        exact path="/" 
        render={() => (
          <>
          Intro Page
          <AboutButton />
          <ProjectsButton />
          </>
        )}
      />
      <Switch>
        <Route
          exact path="/projects"
          render={() => (
            <>
            <ProjectsPage />
            </>
          )}
          />
          <Route 
            exact path="/about"
            render={() => (
              <>
              <AboutPage />
              </>
            )}
          />
      </Switch>
      </>
    )
  }
}

export default App;
