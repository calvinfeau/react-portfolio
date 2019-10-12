import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../HomePage/HomePage";
import styled from "styled-components";

// const Wrapper = styled.div`
//   padding: 50px;

//   @media only screen and (max-width: 425px) or (max-height: 425px) {
//     padding: 20px;
//   }
// `;

class App extends Component {
  render() {
    return (
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
    )
  }
}

export default App;
