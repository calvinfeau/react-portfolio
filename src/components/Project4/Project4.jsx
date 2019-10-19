import React, {Component} from 'react';
import styled, {css} from "styled-components";

const underline = `border-bottom: solid 2px #0034ff; padding-bottom: 5px`;

const Wrapper = styled.div`
  background: white;
  padding: 40px 0 40px 50px;

  @media only screen and (max-width: 1100px) {
    padding: 25px 0;  
  }
  @media only screen and (max-width: 500px) {
    padding: 15px 0;
  }
`;

const Title = styled.a`
  font-size: 45px;
  color: black;
  text-decoration: none;
  ${css`:hover {${underline}}`}
  @media only screen and (max-width: 1100px) {
    font-size: 30px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const Tech = styled.div`
  margin-top: 20px;
  color: #a4a4a4;
  font-size: 16px;
  @media only screen and (max-width: 1100px) {
    margin-top: 15px;
    font-size: 12px;
  }
  @media only screen and (max-width: 500px) {
    margin-top: 10px;
    font-size: 9px;
  }
`;

const Text = styled.div`
  margin-top: 20px;
  font-size: 22px;
  @media only screen and (max-width: 1100px) {
    margin-top: 15px;
    font-size: 16px;
  }
  @media only screen and (max-width: 500px) {
    margin-top: 10px;
    font-size: 11px;
  }
`;

class Project4 extends Component {
  render() {
    return (
      <Wrapper>
        <Title href="https://travel-track.herokuapp.com/" target="_blank" rel="noopener noreferrer">Travel Track</Title>
        <Tech>TECHNOLOGIES: Javascript, Node, MongoDB, HTML5, CSS3, EJS, Mongoose</Tech>
        <Text>Full stack application offering a trip tracking and a trip organizational service.</Text>
      </Wrapper>
    )
  }
}

export default Project4;