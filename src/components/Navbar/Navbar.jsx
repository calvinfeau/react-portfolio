import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from "styled-components";

const underline = `
    border-bottom: solid 3px #0034ff; 
    @media only screen and (max-width: 1100px) {border-bottom: solid 2px #0034ff; }
    @media only screen and (max-width: 500px) {border-bottom: solid 1px #0034ff;}
`;

const Wrapper = styled.div`
    width: calc(100% - 80px - 400px);
    height: 46px;
    margin-top: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: white;
    @media only screen and (max-width: 1100px) {width: calc(100% - 40px - 250px);}
    @media only screen and (max-width: 500px) {width: calc(100% - 20px - 100px);}
`;

const StyledLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 1.5vmax;
    ${props => !props.calvin && css`
    padding-bottom: 3px;
    border-bottom: solid 3px white; 
    @media only screen and (max-width: 1100px) {margin-bottom: 2px;}
    @media only screen and (max-width: 500px) {margin-bottom: 1px;}`}
    ${props => props.space && css`margin-right: 4vmax`}
    ${props => (props.work || props.about) && css`
    ${underline};color: #0034ff;`}
    ${props => props.decor && css`:hover {${underline}}`}
    ${props => props.calvin && css`
    font-family: "Euclid Flex Trial";
    font-size: 2.5vmax;`}
    @media only screen and (max-width: 1100px) {padding-bottom: 2px;}
    @media only screen and (max-width: 500px) {padding-bottom: 1px;}
`;

const Div = styled.div`
    padding-bottom: 3px;
    border-bottom: solid 3px white; 
    @media only screen and (max-width: 1100px) {
        padding-bottom: 2px;
        border-bottom: solid 2px white; 
    }
    @media only screen and (max-width: 500px) {
        padding-bottom: 1px;
        border-bottom: solid 1px white; 
    }
`;

class Navbar extends Component {
    render() {
        return (
            <Wrapper>
                <StyledLink calvin="true" to="/">Calvin Feau</StyledLink>
                <Div>
                    <StyledLink space="true" work={this.props.work} decor="true" to="/projects">Work</StyledLink>
                    <StyledLink about={this.props.about} decor="true" to="/about">About</StyledLink>
                </Div>
            </Wrapper>
        )
    }
}

export default Navbar;