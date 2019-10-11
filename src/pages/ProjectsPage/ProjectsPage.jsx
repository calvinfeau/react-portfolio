import React, {Component} from 'react';
import './ProjectsPage.css';
import Project1 from "../../components/Project1/Project1";
import Project2 from "../../components/Project2/Project2";
import Project3 from "../../components/Project3/Project3";
import Project4 from "../../components/Project4/Project4";
import Project5 from "../../components/Project5/Project5";


class ProjectsPage extends Component {

  render() {
    return (
      <>
        <Project1 />
        <br></br>
        <Project2 />
        <br></br>
        <Project3 />
        <br></br>
        <Project4 />
        <br></br>
        <Project5 />
      </>
    )
  }
}

export default ProjectsPage;
