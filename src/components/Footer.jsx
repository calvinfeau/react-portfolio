import React from 'react';
import styled, {css} from "styled-components";

const Wrapper = styled.div`
    ${props => props.theme && css`${props.theme}`}
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40px;
    bottom: 0px;
    color: var(--color-2); 
    font-size: 0.75vmax;
    font-family: "GT America Trial";
    position: fixed;
    :hover {
        color: var(--color-3);
    }

    @media only screen and (max-width: 1100px) {
        height: 20px;
    }

    @media only screen and (max-width: 500px) {
        height: 10px;
    }
`;

const Footer = (props) => 
    <Wrapper theme={props.theme}>&copy; 2021 Calvin Feau</Wrapper>

export default Footer;