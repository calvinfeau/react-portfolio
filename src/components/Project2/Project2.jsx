import React, {Component} from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  background: white;
  padding: 40px 0 40px 50px;
  border-bottom: 1px solid #a4a4a4;
  @media only screen and (max-width: 1100px) {padding: 25px 0;}
  @media only screen and (max-width: 500px) {padding: 15px 0;}
`;

const Title = styled.a`
  font-size: 2vmax;
  color: black;
  text-decoration: underline;
  :hover {color: #0034ff}
  @media only screen and (max-width: 1100px) {font-size: 30px;}
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

class Project2 extends Component {
  render() {
    return (
      <Wrapper>
        <Title href="https://groceries-helper.herokuapp.com/" target="_blank" rel="noopener noreferrer">Groceries Helper</Title>
        <Tech>TECHNOLOGIES: React, Node, MongoDB, Javascript, HTML5, CSS3, Bootstrap, Jwt, Mongoose</Tech>
        <Text>MERN app with two main features: current food stocks tracker and a groceries planner</Text>
      </Wrapper>
    )
  }
}

export default Project2;