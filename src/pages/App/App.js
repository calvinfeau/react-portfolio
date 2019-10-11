import React, {Component} from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import AboutButton from '../../components/AboutButton/AboutButton';
import ProjectsButton from '../../components/ProjectsButton/ProjectsButton';
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import AboutPage from "../AboutPage/AboutPage";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 40px;
  `;

const Title = styled.div`
  text-align: center
  font-family: "Euclid Flex Trial";
  `;
const IntroText = styled.div`
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const AboutBtn = styled.div`
  
`;
const ProjectsBtn = styled.div`

`;

class App extends Component {
  render() {
    return (
      <Wrapper>
      <Route
        exact path="/" 
        render={() => (
          <>
          <Title>CALVIN FEAU</Title>
          <IntroText>I'm a full stack software engineer, and a passionate problem solver who enjoys getting lost in the flow of web development.</IntroText>
          <Buttons>
            <AboutBtn><Link to="/about">About</Link></AboutBtn>
            <ProjectsBtn><Link to="/projects">Projects</Link></ProjectsBtn>
          </Buttons>
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
      </Wrapper>
    )
  }
}

export default App;
