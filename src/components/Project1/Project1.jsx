import React, {Component} from 'react';
import styled, {css} from "styled-components";

const underline = `border-bottom: solid 2px #0034ff; padding-bottom: 5px`;

const Wrapper = styled.div`
  background: white;
  height: 25vh;
  padding: 30px 50px 30px 0;
  border-right: 1px solid white;
  border-top: 1px solid #a4a4a4;
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

class Project1 extends Component {

  render() {
    return (
      <Wrapper>
        <Title href="https://safeparkingla.herokuapp.com/" target="_blank" rel="noopener noreferrer">SafeParking LA</Title>
        <Tech>TECHNOLOGIES: React, Node, MongoDB, Javascript, HTML5, CSS3, Bootstrap, Mongoose</Tech>
        <Text>
        3-day hackathon challenge for a Los Angeles based nonprofit
          <br />providing safe parking options for people 
          <br />experiencing homelessness in their vehicles.
        </Text>
      </Wrapper>
    )
  }
}

export default Project1;
