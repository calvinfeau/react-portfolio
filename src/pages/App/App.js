import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import styled from "styled-components";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../HomePage/HomePage";
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";

const Frame = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  border: 40px solid #0034ff;
  height: calc(100% - 80px);
  width: calc(100% - 80px);
  z-index: -1;
  @media only screen and (max-width: 1100px) {
    border: 20px solid #0034ff;
    height: calc(100% - 40px);
    width: calc(100% - 40px);
  }
  @media only screen and (max-width: 500px) {
    border: 10px solid #0034ff;
    height: calc(100% - 20px);
    width: calc(100% - 20px);
  }
`;

const Wrapper = styled.div`
position: fixed;
margin: 40px;
height: calc(100% - 80px);
width: calc(100% - 80px);
display: flex;
flex-direction: column;
align-items: center;
background: transparent;
font-family: "GT America Trial";

@media only screen and (max-width: 1100px) {
  margin: 20px;
  height: calc(100% - 40px);
  width: calc(100% - 40px);
}
@media only screen and (max-width: 500px) {
  margin: 10px;
  height: calc(100% - 20px);
  width: calc(100% - 20px);
}
`;

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route
            exact path="/" 
            render={() => ( 
              <>
                <Frame />
                <Wrapper>
                  <Navbar />
                  <HomePage /> 
                  <Footer />
                </Wrapper>
              </>
            )}
          />
          <Route
            exact path="/projects"
            render={() => ( 
            <>
              <Frame />
              <Wrapper>
                <Navbar work="true" />
                <ProjectsPage /> 
                <Footer />
              </Wrapper>
            </>)}
          />
          <Route 
            exact path="/about"
            render={() => ( 
            <>
              <Frame />
              <Wrapper>
                <Navbar about="true"/>
                <AboutPage />
                <Footer />
              </Wrapper>
            </>
            )}
          />
        </Switch>
      </>
    )
  }
}

export default App;