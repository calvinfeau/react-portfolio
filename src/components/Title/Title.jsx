import React, {Component} from 'react';
import styled from "styled-components";
import {Transition} from 'react-transition-group';
import anime from "animejs";

const Normal = styled.div`
position: relative;
`;

const Outline = styled.div`
position: relative;
color: #092CBE;
-webkit-text-stroke: 2px white;
@media only screen and (max-width: 1100px) {
    -webkit-text-stroke: 1px white;
}
`;

const Letter = styled.span`
display: inline-block;
`;

class Char extends Component {
    constructor() {
        super();
        this.spanRef = React.createRef();
    }

    componentDidMount() {
        this.animeRef = anime({
            targets: this.spanRef.current,
            translateY: ['150%', '0%'],
            opacity: ['0', '1'],
            easing: "easeOutExpo",
            delay: 600 + this.props.offset*50
        })
    }

    render() {
        return (<><Letter ref={this.spanRef}>{this.props.char}</Letter></>)
    }
}

class Title extends Component {
    constructor() {
        super();
        this.state = {
            interactive: ['I', 'n', 't', 'e', 'r', 'a', 'c', 't', 'i', 'v', 'e'],
            developer: ['D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
        }
    }

    render() {
        return (
            <>
            <Normal>
                {this.state.interactive.map((char, idx) => (
                    <Transition 
                    key={idx}
                    timeout={500}
                    >
                    <Char char={char} offset={parseInt(idx)}/>
                    </Transition>
                ))}
            </Normal>
            <Outline>
                {this.state.developer.map((char, idx) => (
                    <Transition 
                    key={idx*10+1}
                    timeout={500}
                    >
                    <Char char={char} offset={parseInt(idx)+11}/>
                    </Transition>
                ))}
            </Outline>
            </>

        )
    }
}

export default Title;