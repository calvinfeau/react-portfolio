import React from 'react';
import styled, {keyframes} from "styled-components";
import {fadeInUp} from "react-animations";
import Project from "../components/Project";

const projects = [
  {
    title: "SafeParking LA",
    description: "3-day hackathon challenge for a LA based nonprofit providing safe parking options for people experiencing homelessness in their vehicles.",
    tech: "React, Node, MongoDB, Javascript, HTML5, CSS3, Bootstrap, Mongoose",
    url: "https://safeparkingla.herokuapp.com/"
  },
  {
    title: "Groceries Helper",
    description: "MERN app with two main features: current food stocks tracker and a groceries planner",
    tech: "React, Node, MongoDB, Javascript, HTML5, CSS3, Bootstrap, Jwt, Mongoose",
    url: "https://groceries-helper.herokuapp.com/"
  },
  {
    title: "Datebase",
    description: "Web platform where users can store their dating contacts and track their dating activity all in one convenient place.",
    tech: "Python, Django, PostgreSQL, AWS, HTML5, CSS3, Materialize, Javascript",
    url: "https://datebase-app.herokuapp.com/"
  },
  {
    title: "Travel Track",
    description: "Full stack application offering a trip tracking and a trip organizational service.",
    tech: "Javascript, Node, MongoDB, HTML5, CSS3, Mongoose, OAuth",
    url: "https://travel-track.herokuapp.com/"
  }
];

const Wrapper = styled.div`
  width: calc(100% - 80px - 200px);
  height: calc(100% - 80px - 20%);
  vertical-align: middle;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  column-gap: 10%;
  ::-webkit-scrollbar { width: 0 !important }
  overflow: auto;

  @media only screen and (max-width: 1100px) {
    width: calc(100% - 40px - 100px);
    display: flex;
    flex-direction: column;
    height: calc(100% - 40px - 20%);
  }

  @media only screen and (min-height: 1000px) and (orientation: portrait) {
    margin: 0 auto;
    height: calc(100% - 40px - 10%);
  }

  @media only screen and (max-width: 500px) {
    width: calc(100% - 20px - 50px);
    height: calc(100% - 20px - 20%);
  }
`;

const FadeInUp = styled(Wrapper)`
  animation: 0.75s ${keyframes`${fadeInUp}`} -0.5s 1 ease-out;
`;

const ProjectsPage = () => {

  return (
    <FadeInUp>
      {projects.map((project, idx) => 
        <Project key={idx} title={project.title} description={project.description} tech={project.tech} url={project.url} />
      )}

    </FadeInUp>
  )
}

export default ProjectsPage;