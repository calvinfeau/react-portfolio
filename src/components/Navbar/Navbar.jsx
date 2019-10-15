import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from "styled-components";


const Wrapper = styled.div`
padding: 30px 0;
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
position: sticky;
top: 50px;
background-color: white;

@media only screen and (max-width: 800px) {
    // how to display the navbar on tablets and mobile
  }
`;

class Navbar extends Component {
    render() {
        return (
            <Wrapper projects={this.props.projects}>
                <Link style={{...this.props.link, ...this.props.mediumText, ...{borderBottom: "6px solid #38429B", paddingBottom:"5px"}}} to="/projects">PROJECTS</Link>
                <Link style={{...this.props.link, ...this.props.largeText}} to="/">Calvin Feau</Link>
                <Link style={{...this.props.link, ...this.props.mediumText}}to="/about">ABOUT</Link>
            </Wrapper>
        )
    }
}

export default Navbar;