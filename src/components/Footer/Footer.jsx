import React, {Component} from 'react';
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
    @media only screen and (max-width: 1400px) {display: none;}
`;

class Footer extends Component {
    render() {
        return (
            <Wrapper theme={this.props.theme}>&copy; 2021 Calvin Feau</Wrapper>
        )
    }
}

export default Footer;