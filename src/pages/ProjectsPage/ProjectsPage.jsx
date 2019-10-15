import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from "styled-components";
import Project1 from "../../components/Project1/Project1";
import Project2 from "../../components/Project2/Project2";
import Project3 from "../../components/Project3/Project3";
import Project4 from "../../components/Project4/Project4";
import Project5 from "../../components/Project5/Project5";

// const backBtnStyle = {
//   position: "fixed",
//   top: "85%",
//   left: "85%",
//   color: "white",
//   backgroundColor: "#38429B",
//   padding: "3px",
//   fontFamily: "Euclid Flex Trial",
//   textDecoration: "none",
//   zIndex: "3"
// }

const Wrapper = styled.div`
${props => css`${props.projectFrame}`}

`;

class ProjectsPage extends Component {

  render() {
    return (
      <Wrapper projectFrame={this.props.projectFrame}>
        {/* <Link style={backBtnStyle} to="/">Back</Link> */}
        <Project1 largeFrame={this.props.largeFrame} smallFrame={this.props.smallFrame} link={this.props.link} normalText={this.props.normalText} largeText={this.props.largeText} mediumText={this.props.mediumText}/>
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
      </Wrapper>
    )
  }
}

export default ProjectsPage;
