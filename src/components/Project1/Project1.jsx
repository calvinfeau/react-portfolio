import React, {Component} from 'react';
import styled from "styled-components";
import './Project1.css';
import image1 from '../Project1/safeparkingla_form_1.png';

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  align-items: center;
  height: calc(100vh - 100px);
  width: calc(100vw - 100px);
  margin: 50px;
  color: #38429B;

  @media only screen and (max-width: 425px), (max-height: 425px){
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
  align-items: center;
`;

const Text = styled.div`
  height: 70%;
  width: 40%;
  font-family: "GT America Trial";
`;

const Image = styled.img`
  height: auto;
  max-width: 50%;
`;

const backBtnStyle = {
  position: "relative",
  fontFamily: "Euclid Flex Trial",
  color: "#38429B",
  textDecoration: "none",
  zIndex: "3"
}

class Project1 extends Component {

  render() {
    return (
      <Frame>
        <Title>SafeParking LA</Title>
        <Main>
          <Image src={image1}></Image>
          <Text>
            Worked with a team of 4 UX/UI designers and another developer. 
            <br /><br />
            Led the development process and built the entire backend
            <br /><br />
            Used Zeplin to accurately follow designers guidelines and Github for version control during development
            <br /><br />
            Won the judges price of the contest
            <br /><br />
            <a style={backBtnStyle} href="https://safeparkingla.herokuapp.com/" target="_blank">View Project</a>
          </Text>
        </Main>
      </Frame>
    )
  }
}

export default Project1;
