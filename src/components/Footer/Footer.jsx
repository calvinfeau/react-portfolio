import React, {Component} from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40px;
    bottom: 0px;
    color: white;
    font-size: 0.75vmax;
    font-family: "GT America Trial";
    position: fixed;
    @media only screen and (max-width: 1400px) {display: none;}
`;

class Footer extends Component {
    render() {
        return (
            <Wrapper>&copy; Copyright 2019 Calvin Feau</Wrapper>
        )
    }
}

export default Footer;