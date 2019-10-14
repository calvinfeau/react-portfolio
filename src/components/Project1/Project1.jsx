import React, {Component} from 'react';
import styled from "styled-components";
import './Project1.css';
import image1 from '../Project1/safeparkingla_form_1.png';

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 100px);
  width: calc(100vw - 100px);
  margin: 50px;
  color: #38429B;

  @media only screen and (max-width: 800px) {
    margin: 20px;
    height: calc(100vh - 40px);
    width: calc(100vw - 40px);
  }
`;

const Title = styled.div`
  height: 20%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Euclid Flex Trial";
  font-size: 3vmax;
  border-bottom: 1px solid #38429B;
`;

const Main = styled.div`
  width: 70%;
  height: 60%;
  display: flex;
  justify-content: space-between;
  align-items: start;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const Text = styled.div`
  height: 50%;
  width: 40%;
  font-family: "GT America Trial";
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10%;


  @media only screen and (max-width: 800px) {
    height: 50%;
    width: 70%;
    font-size: 1.5vmax;
  }
`;

const Image = styled.img`
  max-height: auto;
  max-width: 50%;
  padding-top: 10%;


  @media only screen and (max-width: 800px) {
    max-width: 70%;
  }
`;

const backBtnStyle = {
  position: "relative",
  fontFamily: "Euclid Flex Trial",
  color: "#38429B",
  textDecoration: "none",
  zIndex: "3",
}

class Project1 extends Component {

  render() {
    return (
      <Frame>
        <Title>SafeParking LA</Title>
        <Main>
          <Image src={image1}></Image>
          <Text>
            <span>Worked with a team of 4 UX/UI designers and another developer.</span>
            <span>Led the development process and built the entire backend.</span>
            <span>Used Zeplin to accurately follow designers guidelines and Github for version control during development.</span>
            <span>Won the judges price of the contest.</span>
            <a style={backBtnStyle} href="https://safeparkingla.herokuapp.com/" target="_blank" rel="noopener noreferrer">View Project</a>
          </Text>
        </Main>
      </Frame>
    )
  }
}

export default Project1;
