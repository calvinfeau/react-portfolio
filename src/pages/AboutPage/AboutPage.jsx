import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

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

const Footer = styled.div`
  height: 20%;
  width: calc(100vw - 100px - 20vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid black;
`;

const Main = styled.div`
  height: 60%;
  width: calc(100vw - 100px - 20vw);
  display: flex;
  justify-content: space-between;
  font-family: "GT America Trial";
  font-size: 1.3vmax;
  border-top: 1px solid black;

  @media only screen and (max-width: 425px) and (orientation: portrait) {
    font-size: 1.2vmax;
  }

  @media only screen and (max-width: 850px) and (orientation: landscape) {
    font-size: 1vmax;
  }
`;

const Text = styled.div`
  margin-top: 10vh;
  width: 80%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1100px) {
    width: 60%;
  }
`;

const Links = styled.div`
  margin-top: 10vh;
  width: 20%;
  display: flex;
  flex-direction: column;
`;


const A = styled.a`
  height: 36px;
  color: black;
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


class AboutPage extends Component {
  render() {
    return (
      <>
        <Main>
          <Text>
            I have a background in e-commerce management. I have experience in understanding clients’ needs and delivering appropriate solutions. I am also enthusiastic about guiding other people’s ideas to life by providing my skills and logic mindset.
            <br /><br />
            I welcome new challenges and always look for new technical knowledge to add on my skills set. I am currently considering all openings for a full stack software engineering role, or focused on backend or frontend.
            <br /><br />
            <span>For work inquiries, please email <A href="mailto:calvin.feau@gmail.com" target="_top">calvin.feau@gmail.com</A></span>
          </Text>
          <Links>
            <span><I className="material-icons">call_made</I>&nbsp;&nbsp;<A href="https://www.linkedin.com/in/calvin-feau/" target="_blank" rel="noopener noreferrer">LinkedIn</A></span>
            <br />
            <span><I className="material-icons">call_made</I>&nbsp;&nbsp;<A href="https://github.com/calvinfeau" target="_blank" rel="noopener noreferrer">Github</A></span>
            <br />
            <span><I className="material-icons">call_made</I>&nbsp;&nbsp;<A href="%PUBLIC_URL%/Calvin_Feau_Resume.pdf" download target="_blank" rel="noopener noreferrer">Resume</A></span>
          </Links>
        </Main>
        <Footer>
          {/* <span>Website designed by&nbsp;<A href="https://www.pechecreme.com/" target="_blank">Peche-Creme</A></span> */}
          <span style={this.props.normalText}>&copy; Copyright 2019 <Link style={this.props.normalText} to="/">Calvin Feau</Link></span>
        </Footer>
      </>
    )
  }
}

export default AboutPage;
