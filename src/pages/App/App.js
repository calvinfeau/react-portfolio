import React from 'react';
import {Route, Switch} from "react-router-dom";
import styled, {css} from "styled-components";
import ProjectsPage from "../ProjectsPage";
import AboutPage from "../AboutPage";
import HomePage from "../HomePage";
import Navbar from '../../components/Navbar';
import Footer from "../../components/Footer";

// for changing themes
// const theme1 = `--color-1: #092CBE; --color-2: white; --color-3: black;`;
// const theme2 = `--color-1: white; --color-2: #092CBE; --color-3: white;`;
const theme = `--color-1: white; --color-2: #191919; --color-3: #c4c5fe;`;

// for Frame styled div
// ${props => props.theme1 && css`${theme1}`}
// ${props => props.theme2 && css`${theme2}`}

const Frame = styled.div`
  ${props => props.theme && css`${theme}`}
  position: fixed;
  top: 0;
  left: 0;
  background: var(--color-2);
  border: 40px solid var(--color-1);
  height: calc(100% - 80px);
  width: calc(100% - 80px);
  z-index: -1;

  @media only screen and (max-width: 1100px) {
    border: 20px solid var(--color-1);
    height: calc(100% - 40px);
    width: calc(100% - 40px);
  }

  @media only screen and (max-width: 500px) {
    border: 10px solid var(--color-1);
    height: calc(100% - 20px);
    width: calc(100% - 20px);
  }
`;

const Wrapper = styled.div`
  cursor: url('/cf_cursor.svg'), auto;
  position: fixed;
  margin: 40px;
  height: calc(100% - 80px);
  width: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  font-family: "GT America Light";

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

const App = () => 
  <>
    <Switch>
      <Route
        exact path="/" 
        render={() => ( 
          <>
            <Frame theme2="true"/>
            <Wrapper>
              <Navbar theme={theme}/>
              <HomePage /> 
              <Footer theme={theme}/>
            </Wrapper>
          </>
        )}
      />
      <Route
        exact path="/projects"
        render={() => ( 
        <>
          <Frame theme1="true"/>
          <Wrapper>
            <Navbar work="true" theme={theme}/>
            <ProjectsPage /> 
            <Footer theme={theme}/>
          </Wrapper>
        </>)}
      />
      <Route 
        exact path="/about"
        render={() => ( 
        <>
          <Frame theme1="true"/>
          <Wrapper>
            <Navbar about="true" theme={theme}/>
            <AboutPage />
            <Footer theme={theme}/>
          </Wrapper>
        </>
        )}
      />
    </Switch>
  </>

export default App;