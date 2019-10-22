import React, {Component} from 'react';
import styled from "styled-components";
import Project1 from "../../components/Project1/Project1";
import Project2 from "../../components/Project2/Project2";
import Project3 from "../../components/Project3/Project3";
import Project4 from "../../components/Project4/Project4";

const Wrapper = styled.div`
width: calc(100% - 80px - 400px);
height: calc(100% - 80px - 20%);
margin: 0 auto 5%;
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto auto;
::-webkit-scrollbar { width: 0 !important }
overflow: auto;
@media only screen and (max-width: 1100px) {
  width: calc(100% - 40px - 250px);
  display: flex;
  flex-direction: column;
  // justify-content: center;
  height: calc(100% - 40px - 20%);
}
@media only screen and (min-height: 1000px) and (orientation: portrait) {
  margin: 0 auto 15%;
  height: calc(100% - 40px - 30%);
}
@media only screen and (max-width: 500px) {
  width: calc(100% - 20px - 100px);
  height: calc(100% - 20px - 20%);
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