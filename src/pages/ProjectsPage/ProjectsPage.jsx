import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import './ProjectsPage.css';
import Project1 from "../../components/Project1/Project1";
import Project2 from "../../components/Project2/Project2";
import Project3 from "../../components/Project3/Project3";
import Project4 from "../../components/Project4/Project4";
import Project5 from "../../components/Project5/Project5";


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


const backBtnStyle = {
  position: "fixed",
  top: "85%",
  left: "85%",
  color: "white",
  backgroundColor: "#38429B",
  padding: "3px",
  fontFamily: "Euclid Flex Trial",
  textDecoration: "none",
  zIndex: "3"
}


class ProjectsPage extends Component {

  render() {
    return (
      <>
        <Link style={backBtnStyle} to="/">Back</Link>
        <Frame />
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
      </>
    )
  }
}

export default ProjectsPage;
