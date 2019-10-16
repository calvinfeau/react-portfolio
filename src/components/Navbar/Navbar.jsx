import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from "styled-components";

const underline = `border-bottom: solid 5px #0034ff; padding-bottom: 5px`;

const Wrapper = styled.div`
width: calc(100vw - 100px - 400px);
height: 50px;
margin: 50px 0 10vh;
display: flex;
justify-content: space-between;
align-items: flex-start;
position: sticky;
top: 50px;
background-color: white;

@media only screen and (max-width: 800px) {
    // how to display the navbar on tablets and mobile
  }
`;

const StyledLink = styled(Link)`
color: black;
text-decoration: none;
font-size: 36px;
${props => (props.work || props.about) && css`${underline}`}
${props => props.decor && css`:hover {${underline}}`}
`;

class Navbar extends Component {
    render() {
        return (
            <Wrapper>
                <StyledLink work={this.props.work} decor="true" to="/projects">Work</StyledLink>
                <StyledLink to="/">Calvin Feau</StyledLink>
                <StyledLink about={this.props.about} decor="true" to="/about">About</StyledLink>
            </Wrapper>
        )
    }
}

export default Navbar;