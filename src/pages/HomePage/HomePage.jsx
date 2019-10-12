import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

const HomeWrapper = styled.div`
    height: calc(100vh - 100px);
    width: calc(100vw - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 425px) or (max-height: 425px) {
    height: calc(100vh - 40px);
    width: calc(100vw - 40px);

    @keyframes animate {
        0% {
            border-bottom: 50px solid #38429B;
            border-top: 50px solid #D74134;
            border-left: 50px solid white;
            border-right: 50px solid white;
        }
        50% {
            bor
        }
    }
    }
`;

const Title = styled.div`
  height: 20%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Euclid Flex Trial";
  font-size: 3vmax;
`;

const Main = styled.div`
  height: 60%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "GT America Trial";
  font-size: 2vmax;

  @media only screen and (max-width: 425px) and (orientation: portrait) {
    font-size: 1.2vmax;
  }

  @media only screen and (max-width: 850px) and (orientation: landscape) {
    font-size: 1vmax;
  }
`;

const Text = styled.span`padding 1vmax;`;
const Text1 = styled(Text)`background-color: #D74134; color: white;`;
const Text2 = styled(Text)`background-color: #38429B; color: white;`;

const Links = styled.div`
  width: 70%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Euclid Flex Trial";
  font-size: 2.5vmax;
`;

class HomePage extends Component {
    render() {
        return (
            <HomeWrapper>
                <Title><span style={{color:"#38429B"}}>CALVIN</span>&nbsp;&nbsp;<span style={{color:"#D74134"}}>FEAU</span></Title>
                <Main>
                    <Text1>I'm a full stack software engineer,</Text1>
                    <Text>and a <span style={{color:"#D74134", fontWeight:"bold"}}>passionate</span> problem <span style={{color:"#38429B", fontWeight:"bold"}}>solver</span> </Text>
                    <Text2>who enjoys getting lost in the flow of web development.</Text2>
                </Main>
                <Links>
                    <Link style={{color:"#38429B"}} to="/projects">Projects</Link>
                    <Link style={{color:"#D74134"}}to="/about">About</Link>
                </Links>
            </HomeWrapper>
        )
    }
}


export default HomePage;