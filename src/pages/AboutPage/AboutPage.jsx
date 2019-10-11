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
`;

const Title = styled.div`
  height: 20%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Euclid Flex Trial";
  border-bottom: 1px solid white;
`;

const Footer = styled.div`
  height: 20%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid white;
`;

const Main = styled.div`
  height: 60%;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  height: 75%;
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const Links = styled.div`
  height: 75%;
  width: 20%;
  display: flex;
  flex-direction: column;
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
            For work inquiries, please email <a href="mailto:calvin.feau@gmail.com" target="_top">calvin.feau@gmail.com</a>
          </Text>
          <Links>
            <span><i className="material-icons">call_made</i>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/calvin-feau/" target="_blank">LinkedIn</a></span>
            <br />
            <span>
              <i className="material-icons">call_made</i>&nbsp;&nbsp;<a href="#resume">Resume</a>
              &nbsp;&nbsp;<a href="css/images/CalvinFeau_Resume.pdf" download target="_blank"><i class="material-icons">picture_as_pdf</i></a>
              &nbsp;&nbsp;<a href="css/images/CalvinFeau_Resume.docx" download><i class="material-icons">description</i></a>
            </span>
            <br />
            <span><i className="material-icons">call_made</i>&nbsp;&nbsp;<a href="https://github.com/calvinfeau" target="_blank">Github</a></span>
          </Links>
        </Main>
        <Footer>
          Website designed by&nbsp;<a href="https://www.pechecreme.com/" target="_blank">Peche-Creme</a>&nbsp;& built by Calvin Feau.
        </Footer>
      </Wrapper>
    )
  }
}

export default AboutPage;
