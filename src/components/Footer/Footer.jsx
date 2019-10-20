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
    @media only screen and (max-width: 1100px) {height: 20px;}
    @media only screen and (max-width: 500px) {height: 10px;}
`;

class Footer extends Component {
    render() {
        return (
            <Wrapper>&copy; Copyright 2019 Calvin Feau</Wrapper>
        )
    }
}

export default Footer;