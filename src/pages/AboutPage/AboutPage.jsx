import React, {Component} from 'react';
import styled from "styled-components";

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
  @media only screen and (max-width: 1100px) {
    width: 100%;
    margin-bottom: 10%;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  :hover {color: #0034ff}
  `;

const A = styled.a`
  color: black;
  text-decoration: underline;
  :hover {color: #0034ff}
`;

const I = styled.i`font-size: 2vmax;`;

const LineJump = styled.div`
  height: 30px;
`;

class AboutPage extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Text>
            {/* I have a background in e-commerce management.  */}
            I have experience in understanding clients’ needs and delivering appropriate solutions. 
            <br />I am also enthusiastic about guiding other people’s ideas to life by providing my skills and logic mindset.
            <LineJump />
            {/* I welcome new challenges and always look for new technical knowledge to add on my skills set.  */}
            I am currently considering all openings for a full stack software engineering role, or focused on back-end or front-end.
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
        </Wrapper>
      </>
    )
  }
}

export default AboutPage;
