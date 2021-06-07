import React from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from "styled-components";

const underline =`
    border-bottom: solid 3px var(--color-3); 
    @media only screen and (max-width: 1100px) {border-bottom: solid 2px var(--color-1);}
    @media only screen and (max-width: 500px) {border-bottom: solid 1px var(--color-1);}
    `;

const Wrapper = styled.div`
    width: calc(100% - 80px - 200px);
    // margin: 3% 0 5%;
    margin-top: 3%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background-color: var(--color-2);

    ${props => (props.work || props.about) && css`
        padding-bottom: 3px;
        border-bottom: solid 3px var(--color-2); 

        @media only screen and (max-width: 1100px) {
            padding-bottom: 2px;
            border-bottom: solid 2px var(--color-2); 
        }
        @media only screen and (max-width: 500px) {
            padding-bottom: 1px;
            border-bottom: solid 1px var(--color-2); 
        }
    `}

    @media only screen and (max-width: 1100px) {
        width: calc(100% - 40px - 100px);
    }
    @media only screen and (max-width: 1100px) and (orientation: portrait) {
        margin: 5% 0 10%;
    }
    @media only screen and (max-width: 500px) {
        width: calc(100% - 20px - 50px);
    }
`;

const StyledLink = styled(Link)`
    ${props => props.theme && css`${props.theme}`}
    cursor: url('/cf_cursor.svg'), auto;
    color: var(--color-1);
    text-decoration: none;
    font-size: 1.5vmax;
    ${props => !props.calvin && css`
        padding-bottom: 3px;
        border-bottom: solid 3px var(--color-2); 
        @media only screen and (max-width: 1100px) {margin-bottom: 2px;}
        @media only screen and (max-width: 500px) {margin-bottom: 1px;}
    `}
    ${props => (props.work || props.about) && css`${underline}; color: var(--color-3);`}
    ${props => props.decor && css`:hover {${underline}}`}
    ${props => props.calvin && css`
        font-family: "Euclid Flex Trial";
        font-size: 2.5vmax;
        :hover {
            color: var(--color-3)
        }
    `}
    @media only screen and (max-width: 1100px) {padding-bottom: 2px;}
    @media only screen and (max-width: 500px) {padding-bottom: 1px;}
`;

const Navbar = (props) =>
    <Wrapper theme={props.theme}>
        <StyledLink theme={props.theme} work={props.work} decor="true" to="/projects">Projects</StyledLink>
        <StyledLink theme={props.theme} calvin="true" to="/">Calvin Feau</StyledLink>
        <StyledLink theme={props.theme} about={props.about} decor="true" to="/about">About</StyledLink>
    </Wrapper>

export default Navbar;