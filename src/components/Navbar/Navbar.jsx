import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";

const Wrapper = styled.div`
height: 20%;
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
                <Link style={{...this.props.link, ...this.props.mediumText}} to="/projects">Projects</Link>
                <Link style={{...this.props.link, ...this.props.largeText}} to="/">Calvin Feau</Link>
                <Link style={{...this.props.link, ...this.props.mediumText}}to="/about">About</Link>
            </Wrapper>
        )
    }
}

export default Navbar;