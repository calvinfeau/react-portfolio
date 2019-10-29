import React, {Component} from 'react';
import styled, {keyframes} from "styled-components";
import {fadeInUp} from "react-animations";


const Wrapper = styled.div`
  width: calc(100% - 80px - 400px);
  height: calc(100% - 80px - 20%);
  display: flex;
  justify-content: space-between;
  margin: 0 auto 5%;
  font-size: 2vmax;
  ::-webkit-scrollbar { width: 0 !important }
  overflow: auto;
  @media only screen and (max-width: 1100px) {
    width: calc(100% - 40px - 250px);
    height: calc(100% - 40px - 20%);
    flex-direction: column;
    justify-content: flex-start;
  }
  @media only screen and (min-height: 1000px) and (orientation: portrait) {
    margin: 0 auto 15%;
    height: calc(100% - 40px - 30%);
  }
  @media only screen and (max-width: 500px) {
    width: calc(100% - 20px - 100px);
    height: calc(100% - 20px - 20%);
    font-size: 2vmax;
  }
`;

const Text = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  orphans: 3;
  @media only screen and (max-width: 1100px) and (orientation: portrait) {
    width: 100%;
    margin-bottom: 15%;
  }
  @media only screen and (max-width: 1100px) and (orientation: landscape) {
    width: 100%;
    margin-bottom: 5%;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1100px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  :hover {color: #092CBE;}
  `;

const A = styled.a`
  cursor: url('/Cursor.png'), auto;
  color: black;
  text-decoration: underline;
  :hover {color: #092CBE;}
`;

const I = styled.i`font-size: 2vmax;`;

const LineJump = styled.div`
  height: 30px;
  @media only screen and (max-width: 1100px) {
    height: 10px;
    width: 20px;
  }
`;

const FadeInUp = styled(Wrapper)`
animation: 1s ${keyframes`${fadeInUp}`} -0.25s 1 ease-out;
`;

class AboutPage extends Component {
  render() {
    return (
      <>
        <FadeInUp>
          <Text>
            I have experience in understanding clients’ needs and delivering appropriate&nbsp;solutions. 
            <br />I am also enthusiastic about guiding other people’s ideas to life by providing my skills and logical&nbsp;mindset.
            <LineJump />
            I am currently considering all openings for a full stack software engineering role, or focused on back-end&nbsp;or&nbsp;front-end.
            <LineJump /> 
            <span>For work inquiries, please email <A href="mailto:calvin.feau@gmail.com" target="_top">calvin.feau@gmail.com</A></span>
          </Text>
          <Links>
            <Span><I className="material-icons">call_made</I>&nbsp;&nbsp;<A href="https://www.linkedin.com/in/calvin-feau/" target="_blank" rel="noopener noreferrer">LinkedIn</A></Span>
            <LineJump />
            <Span><I className="material-icons">call_made</I>&nbsp;&nbsp;<A href="https://github.com/calvinfeau" target="_blank" rel="noopener noreferrer">Github</A></Span>
            <LineJump />
            <Span><I className="material-icons">call_made</I>&nbsp;&nbsp;<A href={process.env.PUBLIC_URL+ "/Calvin_Feau_Resume.pdf"} download target="_blank" rel="noopener noreferrer">Resume</A></Span>
          </Links>
        </FadeInUp>
      </>
    )
  }
}

export default AboutPage;
