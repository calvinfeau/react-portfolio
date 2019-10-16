import React, {Component} from 'react';
import styled, {css} from "styled-components";

const underline = `border-bottom: solid 2px #0034ff; padding-bottom: 5px`;

const Wrapper = styled.div`
  background: white;
  height: 25vh;
  padding: 30px 0 30px 50px;
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

class Project2 extends Component {

  render() {
    return (
      <Wrapper>
        <Title href="https://groceries-helper.herokuapp.com/" target="_blank" rel="noopener noreferrer">Groceries Helper</Title>
        <Tech>TECHNOLOGIES:React, Node, MongoDB, Javascript, HTML5, CSS3, Bootstrap, Jwt, Mongoose</Tech>
        <Text>
        Full-stack MERN app 
        <br />that assist the user 
        <br />to track what are his/her current food stocks.
        </Text>
      </Wrapper>
    )
  }
}

export default Project2;
