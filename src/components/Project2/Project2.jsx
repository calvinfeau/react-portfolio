import React, {Component} from 'react';
import styled from "styled-components";
import './Project2.css';

const Frame = styled.div`

background-color: red;
`;

class Project2 extends Component {
  render() {
    return (
      <Frame>
        Project 2
      </Frame>
    )
  }
}

export default Project2;
