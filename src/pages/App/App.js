import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../HomePage/HomePage";
import Navbar from '../../components/Navbar/Navbar';
import styled, {css} from "styled-components";

const Frame = styled.div`
position: fixed;
top: 0;
left: 0;
background: white;
border: 50px solid black;
height: calc(100vh - 100px);
width: calc(100vw - 100px);
z-index: -1;
`;

const largeFrame = {
margin: "50px",
height: "calc(100vh - 100px)",
width: "calc(100vw - 100px)",
};

const smallFrame = {
  margin: "20px",
  height: "calc(100vh - 40px)",
  width: "calc(100vw - 40px)",
};

const projectFrame = {
  height: "calc(400vh - 100px)",
  width: "calc(100vw - 100px)",
};

let link = {
  color: "#1a1a1a",
  textDecoration: "none",
  fontFamily: "Euclid Flex Trial",
};

let largeText = {
  fontSize: "3vmax",
};

let mediumText = {
  fontSize: "1vmax",
  letterSpacing: "2px",
  fontFamily: "GT America Trial",
  // fontWeight: "900"
};

let normalText = {
  fontSize: "0.75vmax",
  fontFamily: "GT America Trial",
  color: "black",
}


const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: transparent;
${css`${largeFrame}`};
@media only screen and (max-width: 800px) {
  ${css`${smallFrame}`}
}`;

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
                  <Navbar link={link} largeText={largeText} mediumText={mediumText} />
                  <HomePage largeFrame={largeFrame} smallFrame={smallFrame} /> 
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
                <Navbar projects link={link} largeText={largeText} mediumText={mediumText} />
                <ProjectsPage projectFrame={projectFrame} largeFrame={largeFrame} smallFrame={smallFrame} link={link} normalText={normalText} largeText={largeText} mediumText={mediumText}/> 
              </Wrapper>
            </>)}
          />
          <Route 
            exact path="/about"
            render={() => ( 
            <>
              <Frame />
              <Wrapper>
                <Navbar link={link} largeText={largeText} mediumText={mediumText} />
                <AboutPage largeFrame={largeFrame} smallFrame={smallFrame} link={link} normalText={normalText} largeText={largeText} mediumText={mediumText}/>
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
