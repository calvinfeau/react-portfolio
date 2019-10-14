import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";


let link = {
    color: "#1a1a1a",
    textDecoration: "none",
    zIndex: "2",
    fontFamily: "Euclid Flex Trial",
};

let title = {
    fontSize: "3vmax",
};

let navLink = {
    fontSize: "2vmax",
};

const Wrapper = styled.div`
height: 15%;
width: 70%;
display: flex;
justify-content: space-between;
align-items: center;

@media only screen and (max-width: 800px) {
    // how to display the navbar on tablets and mobile
  }
`;



class Navbar extends Component {
    render() {
        return (
            <Wrapper>
                <Link style={{...link, ...navLink}} to="/projects">Projects</Link>
                <Link style={{...link, ...title}} to="/">Calvin Feau</Link>
                <Link style={{...link, ...navLink}}to="/about">About</Link>
            </Wrapper>
        )
    }
}

export default Navbar;