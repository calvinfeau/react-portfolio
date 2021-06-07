import React from 'react';
import styled, {keyframes} from "styled-components";
import {fadeInUp} from "react-animations";

const Wrapper = styled.div`
  width: calc(100% - 80px - 200px);
  height: calc(100% - 80px - 20%);
  color: white;
  display: flex;
  justify-content: space-between;
  margin: auto;
  font-size: 36px;
  ::-webkit-scrollbar { width: 0 !important }
  overflow: auto;

  @media only screen and (max-width: 1100px) {
    width: calc(100% - 40px - 100px);
    height: calc(100% - 40px - 20%);
    flex-direction: column;
    justify-content: flex-start;
  }

  @media only screen and (min-height: 1000px) and (orientation: portrait) {
    margin: 0 auto 15%;
    height: calc(100% - 40px - 30%);
  }

  @media only screen and (max-width: 500px) {
    width: calc(100% - 20px - 50px);
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
  justify-content: flex-start;
  color: white;

  @media only screen and (max-width: 1100px) {
    flex-direction: row;
  }
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  :hover {color: #c4c5fe;}
`;

const A = styled.a`
  cursor: url('/cf_cursor.svg'), auto;
  color: white;
  padding-bottom: 2px;
  border-bottom: solid 3px white; 

  text-decoration: none;
  :hover {
    color: #c4c5fe;
    border-bottom: solid 3px #c4c5fe; 
  }
`;

const I = styled.i`
  font-size: 36px;
`;

const LineJump = styled.div`
  height: 30px;

  @media only screen and (max-width: 1100px) {
    height: 10px;
    width: 20px;
  }
`;

const FadeInUp = styled(Wrapper)`
  animation: 1s ${keyframes`${fadeInUp}`} -0.7s 1 ease-out;
`;

const AboutPage = () => 
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

export default AboutPage;