import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from "styled-components";

const underline = `
    border-bottom: solid 5px #0034ff; 
    padding-bottom: 5px;
    @media only screen and (max-width: 1100px) {
        border-bottom: solid 4px #0034ff; 
        padding-bottom: 4px;
    }
    @media only screen and (max-width: 500px) {
        border-bottom: solid 3px #0034ff; 
        padding-bottom: 3px;
    }
`;

const Wrapper = styled.div`
    width: calc(100vw - 80px - 400px);
    height: 46px;
    margin-top: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: white;
    @media only screen and (max-width: 1100px) {
        width: calc(100vw - 40px - 250px);
    }
    @media only screen and (max-width: 500px) {
        width: calc(100vw - 20px - 100px);
    }
`;

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 36px;
    ${props => (props.work || props.about) && css`${underline}`}
    ${props => props.decor && css`:hover {${underline}}`}
    @media only screen and (max-width: 1100px) {
        font-size: 28px;
    }
    @media only screen and (max-width: 500px) {
        font-size: 18px;
    }
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