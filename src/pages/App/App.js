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
background-color: black;
height: 100vh;
width: 100vw;
z-index: -1;

`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
--frame: 50px;
margin: var(--frame);
height: calc(100vh - (var(--frame)*2));
width: calc(100vw - (var(--frame)*2));
background: white;

@media only screen and (max-width: 800px) {
  --frame: 20px;
}`;

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currPage: this.props
    }
  }


  render() {
    console.log(this.currPage)
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
              </>
            )}
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
