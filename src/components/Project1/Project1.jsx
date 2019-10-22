import React, {Component} from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 5% 5% 5% 0;
  border-top: 1px solid #a4a4a4;
  border-bottom: 1px solid #a4a4a4;
  border-right: 1px solid #a4a4a4;
  @media only screen and (max-width: 1100px) {
    padding: 5% 0;
    border-right: none;
  }
`;

const Title = styled.a`
  font-size: 2vmax;
  color: black;
  text-decoration: underline;
  :hover {color: #0034ff}
  @media only screen and (max-width: 500px) {font-size: 20px;}
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

class Project1 extends Component {
  render() {
    return (
      <Wrapper>
        <Title href="https://safeparkingla.herokuapp.com/" target="_blank" rel="noopener noreferrer">SafeParking LA</Title>
        <Tech>TECHNOLOGIES: React, Node, MongoDB, Javascript, HTML5, CSS3, Bootstrap, Mongoose</Tech>
        <Text>3-day hackathon challenge for a LA based nonprofit providing safe parking options for people experiencing homelessness in their vehicles.</Text>
      </Wrapper>
    )
  }
}

export default Project1;