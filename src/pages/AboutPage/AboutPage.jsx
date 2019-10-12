import React, {Component} from 'react';
import styled from "styled-components";
import './AboutPage.css';

const Wrapper = styled.div`
  height: calc(100vh - 100px);
  width: calc(100vw - 100px);
  background-color: #D74134;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 425px){
    height: calc(100vh - 40px);
    width: calc(100vw - 40px);
  }
`;

const Title = styled.div`
  height: 20%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Euclid Flex Trial";
  font-size: 3vmax;
  border-bottom: 1px solid white;

  // @media only screen and (max-width: 1100px) {
  //   font-size: 40px;
  // }

  // @media only screen and (max-width: 425px){
  //   font-size: 30px;
  // }
`;

const Footer = styled.div`
  height: 20%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Euclid Flex Trial";
  font-size: 1.5vmax;
  border-top: 1px solid white;

  // @media only screen and (max-width: 1100px) {
  //   font-size: 15px;
  // }

  // @media only screen and (max-width: 425px){
  //   font-size: 8px;
  // }

`;

const Main = styled.div`
  height: 60%;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "GT America Trial";
  font-size: 1.5vmax;

  // @media only screen and (max-width: 1100px) {
  //   font-size: 15px;
  // }

  // @media only screen and (max-width: 350px) {
  //   font-size: 8px;
  // }
`;

const Text = styled.div`
  height: 75%;
  width: 70%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1100px) {
    width: 60%;
  }
`;

const Links = styled.div`
  height: 75%;
  width: 20%;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1100px) {
    width: 30%;
  }
`;

const A = styled.a`
  color: white;
  text-decoration: underline solid white
`;

const I = styled.i`
  font-size: 36px;

  @media only screen and (max-width: 1100px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 425px) {
    font-size: 18px;
  }
`;


class AboutPage extends Component {
  render() {
    return (
      <Wrapper>
        <Title>
          About
        </Title>
        <Main>
          <Text>
            I have a background in e-commerce management. I have experience in understanding clients’ needs and delivering appropriate solutions. I am also enthusiastic about guiding other people’s ideas to life by providing my skills and logic mindset.
            <br /><br />
            I welcome new challenges and always look for new technical knowledge to add on my skills set. I am currently considering all openings for a full stack software engineering role, or focused on backend or frontend.
            <br /><br />
            <span>For work inquiries, please email <A href="mailto:calvin.feau@gmail.com" target="_top">calvin.feau@gmail.com</A></span>
            <br /><br />
            <span>To see my projects, click <A href="/projects">here</A></span>
          </Text>
          <Links>
            <span><I className="material-icons">call_made</I>&nbsp;&nbsp;<A href="https://www.linkedin.com/in/calvin-feau/" target="_blank">LinkedIn</A></span>
            <br />
            <span><I className="material-icons">call_made</I>&nbsp;&nbsp;<A href="https://github.com/calvinfeau" target="_blank">Github</A></span>
            <br />
            <span>
              <I className="material-icons">call_made</I>&nbsp;&nbsp;<A href="#resume">Resume</A>
              &nbsp;&nbsp;<A href="css/images/CalvinFeau_Resume.pdf" download target="_blank"><I className="material-icons">picture_as_pdf</I></A>
              &nbsp;&nbsp;<A href="css/images/CalvinFeau_Resume.docx" download><I className="material-icons">description</I></A>
            </span>
          </Links>
        </Main>
        <Footer>
          Website designed by&nbsp;<A href="https://www.pechecreme.com/" target="_blank">Peche-Creme</A>&nbsp;& built by&nbsp;<A href="/">Calvin Feau</A>.
        </Footer>
      </Wrapper>
    )
  }
}

export default AboutPage;
