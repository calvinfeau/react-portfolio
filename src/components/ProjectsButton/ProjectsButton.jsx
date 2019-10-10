import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './ProjectsButton.css';

class ProjectsButton extends Component {
  render() {
    return (
      <>
      <Link to='/projects'>
        Projects
      </Link>
      </>
    )
  }
}

export default ProjectsButton;
