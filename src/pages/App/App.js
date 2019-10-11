import React, {Component} from 'react';
import { Route, Switch, Link } from "react-router-dom";
import './App.css';
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import AboutPage from "../AboutPage/AboutPage";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px;
`;

const HomeWrapper = styled.div`
  height: calc(100vh - 100px);
  width: calc(100vw - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  height: 25%;
  display: flex;
  text-align: center;
  align-items: center;
  text-align: center;
  font-family: "Euclid Flex Trial";
`;

const Text = styled.div`
  height: 50%;
  width: 50%;
  display: flex;
  text-align: center;
  align-items: center;
`;

const Buttons = styled.div`
  width: 50%;
  height: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AboutBtn = styled.div`
  text-decoration: none;
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
            <HomeWrapper>
            <Title>CALVIN FEAU</Title>
            <Text>I'm a full stack software engineer, and a passionate problem solver who enjoys getting lost in the flow of web development.</Text>
            <Buttons>
              <ProjectsBtn><Link to="/projects">Projects</Link></ProjectsBtn>
              <AboutBtn><Link to="/about">About</Link></AboutBtn>
            </Buttons>
            </HomeWrapper>
          )}
        />
        <Switch>
          <Route
            exact path="/projects"
            render={() => ( <ProjectsPage /> )}
          />
          <Route 
            exact path="/about"
            render={() => ( <AboutPage /> )}
          />
        </Switch>
      </Wrapper>
    )
  }
}

export default App;
