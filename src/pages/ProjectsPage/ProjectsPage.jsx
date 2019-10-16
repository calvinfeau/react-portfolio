import React, {Component} from 'react';
import styled, {css} from "styled-components";
import Project1 from "../../components/Project1/Project1";
import Project2 from "../../components/Project2/Project2";
import Project3 from "../../components/Project3/Project3";
import Project4 from "../../components/Project4/Project4";


const Wrapper = styled.div`
width: calc(100vw - 100px - 400px);
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto auto;
background-color: #a4a4a4;
grid-gap: 1px 1px;
border-bottom: 1px solid #a4a4a4;

`;


class ProjectsPage extends Component {

  render() {
    return (
      <Wrapper>
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
      </Wrapper>
    )
  }
}

export default ProjectsPage;
