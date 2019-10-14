import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";


const Title = styled.div`
  width: 50%;
  font-family: "Euclid Flex Trial";
  font-size: 3vmax;
`;

const navLinks = {
  width: "25%",
  fontSize: "2.5vmax",
  color: "#1a1a1a"
}

class Navbar extends Component {
    render() {
        return (
            <div>
                <Title>Calvin Feau</Title>
                <Link style={navLinks} to="/projects">Projects</Link>
                <Link style={navLinks}to="/about">About</Link>
            </div>
        )
    }
}

export default Navbar;