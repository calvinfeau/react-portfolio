import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from "styled-components";

// const AboutWrapper = styled.div`
//   height: calc(100vh - 100px);
//   width: calc(100vw - 100px);
//   margin: 50px;
//   background-color: #1a1a1a;
//   color: white;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media only screen and (max-width: 425px), (max-height: 425px){
//     margin: 20px;
//     height: calc(100vh - 40px);
//     width: calc(100vw - 40px);
//   }
// `;

// const Title = styled.div`
//   height: 20%;
//   width: 70%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-family: "Euclid Flex Trial";
//   font-size: 3vmax;
//   border-bottom: 1px solid white;
// `;


const Wrapper = styled.div`
  // HEIGHT IS TOTAL - TOP - FRAME - NAVBAR
  // height: calc(100vh - 100px); 
  width: calc(100vw - 100px - 400px);
  display: flex;
  justify-content: space-between;
  font-size: 36px;

  @media only screen and (max-width: 425px) and (orientation: portrait) {
  }
  @media only screen and (max-width: 850px) and (orientation: landscape) {
  }
`;

const Text = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  ${props => css`${props.normalText}`}

  @media only screen and (max-width: 800px) {
    // how to display the navbar on tablets and mobile
  }
`;

const Links = styled.div`
  // width: 20%;
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  display: flex;
  align-items: center;`;

const A = styled.a`
  ${props => css`${props.normalText}`}
  text-decoration: underline solid black;
`;

const I = styled.i`
  font-size: 36px;

  @media only screen and (max-width: 1100px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 18px;
  }
`;

const LineJump = styled.div`height: 30px`;

class AboutPage extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Text normalText={this.props.normalText}>
            I have a background in e-commerce management. I have experience in understanding clients’ needs and delivering appropriate solutions. I am also enthusiastic about guiding other people’s ideas to life by providing my skills and logic mindset.
            <LineJump />
            I welcome new challenges and always look for new technical knowledge to add on my skills set. I am currently considering all openings for a full stack software engineering role, or focused on back-end or front-end.
            <LineJump /> 
            <span>For work inquiries, please email <A normalText={this.props.normalText} href="mailto:calvin.feau@gmail.com" target="_top">calvin.feau@gmail.com</A></span>
          </Text>
          <Links>
            <Span><I className="material-icons">call_made</I>&nbsp;&nbsp;<A normalText={this.props.normalText} href="https://www.linkedin.com/in/calvin-feau/" target="_blank" rel="noopener noreferrer">LinkedIn</A></Span>
            <LineJump />
            <Span><I className="material-icons">call_made</I>&nbsp;&nbsp;<A normalText={this.props.normalText} href="https://github.com/calvinfeau" target="_blank" rel="noopener noreferrer">Github</A></Span>
            <LineJump />
            <Span><I className="material-icons">call_made</I>&nbsp;&nbsp;<A normalText={this.props.normalText} href="%PUBLIC_URL%/Calvin_Feau_Resume.pdf" download target="_blank" rel="noopener noreferrer">Resume</A></Span>
          </Links>
        </Wrapper>
      </>
    )
  }
}

export default AboutPage;
