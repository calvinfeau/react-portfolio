import React, {Component} from 'react';
import styled from "styled-components";
import Project1 from "../../components/Project1/Project1";
import Project2 from "../../components/Project2/Project2";
import Project3 from "../../components/Project3/Project3";
import Project4 from "../../components/Project4/Project4";

const Wrapper = styled.div`
width: calc(100vw - 80px - 400px);
margin: auto;
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto auto;
border-bottom: 1px solid #a4a4a4;
border-top: 1px solid #a4a4a4;

@media only screen and (max-width: 1100px) {
  width: calc(100vw - 40px - 250px);
  display: flex;
  flex-direction: column;
}
@media only screen and (max-width: 500px) {
  width: calc(100vw - 20px - 100px);
}
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