import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../HomePage/HomePage";
import Navbar from '../../components/Navbar/Navbar';
import styled from "styled-components";

const Frame = styled.div`
position: fixed;
top: 0;
left: 0;
--border-size: 50px;
border: var(--border-size) solid #38429B;
z-index: 2;
background-color: transparent;
height: calc(100vh - 100px);
width: calc(100vw - 100px);

@media only screen and (max-width: 800px) {
  --border-size: 20px;
  height: calc(100vh - 40px);
  width: calc(100vw - 40px);
}
`;

const Nav = styled(Navbar)`
  margin-top: calc(100vh - var(--border-size))
  height: 20%;
  width: 70%;
`;

class App extends Component {
  render() {
    return (
      <>
      <Nav />
      <Frame />
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
