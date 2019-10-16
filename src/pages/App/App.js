import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../HomePage/HomePage";
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import styled, {css} from "styled-components";

const Frame = styled.div`
position: fixed;
top: 0;
left: 0;
background: white;
border: 50px solid #0034ff;
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

// const projectFrame = {
//   height: "calc(400vh - 100px)",
//   width: "calc(100vw - 100px)",
// };

// ${props => (props.projects ?  css`${props.projectFrame}` : css`${props.largeFrame}`)}

let normalText = {
  color: "#1a1a1a",
  textDecoration: "none",
  fontFamily: "GT America Trial",
  fontSize: "30px"
};

let largeText = {
  color: "#1a1a1a",
  textDecoration: "none",
  fontSize: "40px",
  fontFamily: "Euclid Flex Trial",
};


const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: transparent;
font-family: "GT America Trial";
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
                <AboutPage normalText={normalText} />
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
