import React, {Component} from 'react';
import styled, {css} from "styled-components";

const underline = `border-bottom: solid 2px #0034ff; padding-bottom: 5px`;

const Wrapper = styled.div`
  background: white;
  height: 25vh;
  padding: 30px 0 30px 50px;

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
margin-top: 20px;
font-size: 18px;
  
  @media only screen and (max-width: 800px) {
  }
`;

class Project4 extends Component {

  render() {
    return (
      <Wrapper>
        <Title href="https://travel-track.herokuapp.com/" target="_blank" rel="noopener noreferrer">Travel Track</Title>
        <Tech>Javascript, Node, MongoDB, HTML5, CSS3, EJS, Mongoose</Tech>
        <Text>
        Full stack application offering a trip tracking service 
        <br />and a trip organizational service.

        </Text>
      </Wrapper>
    )
  }
}

export default Project4;
