import React, {Component} from 'react';
import styled from "styled-components";
import './Project2.css';

const Frame = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: calc(100vh - 100px);
width: calc(100vw - 100px);
margin: 50px;
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
