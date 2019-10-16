import React, {Component} from 'react';
import styled, {css} from "styled-components";

const underline = `border-bottom: solid 2px #0034ff; padding-bottom: 5px`;

const Wrapper = styled.div`
  background: white;
  height: 25vh;
  padding: 30px 50px 30px 0;

  @media only screen and (max-width: 800px) {
  }
`;

const Title = styled.a`
font-size: 48px;
color: black;
text-decoration: none;
padding-bottom: 10px;
${css`:hover {${underline}}`}
`;


const Tech = styled.div`
margin-top: 20px;
color: #a4a4a4;
font-size: 14px;
`;

const Text = styled.div`
margin-top: 30px;
font-size: 18px;
  
  @media only screen and (max-width: 800px) {
  }
`;

class Project3 extends Component {

  render() {
    return (
      <Wrapper>
        <Title href="https://datebase-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">Datebase</Title>
        <Tech>TECHNOLOGIES: Python, Django, PostgreSQL, AWS, HTML5, CSS3, Materialize, Javascript</Tech>
        <Text>
        Web platform designed to help singles tackle the messy world of dating.
        <br />Users can store their dating contacts 
        <br />and track their dating activity all in one convenient place.
        </Text>
      </Wrapper>
    )
  }
}

export default Project3;
