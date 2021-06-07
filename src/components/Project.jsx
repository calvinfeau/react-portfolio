import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 5% 5% 5% 0;
  border-top: 1px solid #3b3b3b;
  font-family: "GT America Light";

  @media only screen and (max-width: 1100px) {
    padding: 5% 0;
    border-right: none;
  }
`;

const Title = styled.a`
  cursor: url('/cf_cursor.svg'), auto;
  font-size: 2.5vmax;
  color: white;
  text-decoration: none;
  :hover {
    color: #c4c5fe
    text-decoration: none;
  }

  @media only screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const Tech = styled.div`
  margin-top: 20px;
  color: #9d9d9d;
  font-size: 16px;

  @media only screen and (max-width: 1100px) {
    margin-top: 15px;
    font-size: 12px;
  }
  @media only screen and (max-width: 500px) {
    margin-top: 10px;
    font-size: 9px;
  }
`;

const Text = styled.div`
  margin-top: 20px;
  font-size: 22px;
  color: white;

  @media only screen and (max-width: 1100px) {
    margin-top: 15px;
    font-size: 16px;
  }
  @media only screen and (max-width: 500px) {
    margin-top: 10px;
    font-size: 11px;
  }
`;

const Project = (props) => {
  
  return (
    <Wrapper>
      <Title href={`${props.url}`} target="_blank" rel="noopener noreferrer">{props.title}</Title>
      <Text>{props.description}</Text>
      <Tech>TECHNOLOGIES: {props.tech}&nbsp;{props.techEnd}</Tech>
    </Wrapper>
  )
}

export default Project;