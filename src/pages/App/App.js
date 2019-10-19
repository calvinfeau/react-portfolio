import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import styled, {css} from "styled-components";
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
  height: calc(100vh - 80px);
  width: calc(100vw - 80px);
  z-index: -1;
  @media only screen and (max-width: 1100px) {
    border: 20px solid #0034ff;
    height: calc(100vh - 40px);
    width: calc(100vw - 40px);
  }
  @media only screen and (max-width: 500px) {
    border: 10px solid #0034ff;
    height: calc(100vh - 20px);
    width: calc(100vw - 20px);
  }
`;

const desktopWrapper = {
  margin: "40px",
  height: "calc(100vh - 80px)",
  width: "calc(100vw - 80px)",
};

const tabletWrapper = {
  margin: "20px",
  height: "calc(100vh - 40px)",
  width: "calc(100vw - 40px)",
};

const mobileWrapper = {
  margin: "10px",
  height: "calc(100vh - 20px)",
  width: "calc(100vw - 20px)",
};

// RAPPEL
// ${props => (props.projects ?  css`${props.projectFrame}` : css`${props.largeFrame}`)}


const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: transparent;
font-family: "GT America Trial";
${css`${desktopWrapper}`};

@media only screen and (max-width: 1100px) {
  ${css`${tabletWrapper}`};
}
@media only screen and (max-width: 500px) {
  ${css`${mobileWrapper}`};
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
                </Wrapper>
                <Footer />
              </>
            )}
          />
          <Route
            exact path="/projects"
            render={() => ( 
            <>
              <Frame />
              <Wrapper projects="true">
                <Navbar work="true" />
                <ProjectsPage /> 
              </Wrapper>
              <Footer />
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
              </Wrapper>
              <Footer />
            </>
            )}
          />
        </Switch>
      </>
    )
  }
}

export default App;
