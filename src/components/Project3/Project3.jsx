import React, {Component} from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  background: white;
  padding: 40px 50px 40px 0;
  border-right: 1px solid #a4a4a4;
  @media only screen and (max-width: 1100px) {
    padding: 25px 0;  
    border-bottom: 1px solid #a4a4a4;
    border-right: none;
  }
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

class Project3 extends Component {
  render() {
    return (
      <Wrapper>
        <Title href="https://datebase-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Datebase</Title>
        <Tech>TECHNOLOGIES: Python, Django, PostgreSQL, AWS, HTML5, CSS3, Materialize, Javascript</Tech>
        <Text>Web platform where users can store their dating contacts and track their dating activity all in one convenient place.</Text>
      </Wrapper>
    )
  }
}

export default Project3;