import React, {Component} from 'react';
import styled, {css} from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 50px;
bottom: 0px;
left: 250px;
color: white;
font-size: 0.75vmax;
font-family: "GT America Trial";
position: fixed;
`;

class Footer extends Component {
    render() {
        return (
            <Wrapper>&copy; Copyright 2019 Calvin Feau</Wrapper>
        )
    }
}


{/* <span>Website designed by&nbsp;<A href="https://www.pechecreme.com/" target="_blank">Peche-Creme</A></span> */}


export default Footer;