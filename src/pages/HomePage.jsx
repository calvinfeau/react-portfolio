import React from 'react';
import styled from "styled-components";

// import {TransitionGroup} from 'react-transition-group';
// import {fadeIn} from "react-animations";

// *-----------*
// ANIMATED BORDER
// const Border = styled.div`
//   position: absolute;
//   z-index: -1;
//   height: 50px;
//   width: 50px;
//   animation: bordermove 8s infinite 1s;

//   @keyframes bordermove {
//     0% {
//       left: 0;
//       top: 0;
//       background-color: #38429B;
//     }
//     25% {
//       top: 0;
//       left: calc(100vw - 50px);
//       background-color: #38429B;
//     }
//     50% {
//       left: calc(100vw - 50px);
//       top: calc(100vh - 50px);
//       background-color: #D74134;
//     }
//     75% {
//       left: 0;
//       top: calc(100vh - 50px);
//       background-color: #D74134;
//     }
//     100% {
//       top: 0;
//       left: 0;
//       background-color: #38429B;
//     }
//   }

//   @media only screen and (max-width: 425px), (max-height: 425px) {
//     height: 20px;
//     width: 20px;

//     @keyframes bordermove {
//         0% {
//           left: 0;
//           top: 0;
//           background-color: #38429B;
//         }
//         25% {
//           top: 0;
//           left: calc(100vw - 20px);
//           background-color: #38429B;
//         }
//         50% {
//           left: calc(100vw - 20px);
//           top: calc(100vh - 20px);
//           background-color: #D74134;
//         }
//         75% {
//           left: 0;
//           top: calc(100vh - 20px);
//           background-color: #D74134;
//         }
//         100% {
//           top: 0;
//           left: 0;
//           background-color: #38429B;
//         }
//       }
// }
// `;

// *-----------*

// ANIMATION 1 

// const Anim = styled.span`
// position: absolute;
// animation-timing-function: linear;
// animation-iteration-count: 1;
// animation-delay: 0.5s;

// font-smoothing: antialiased !important;
// -webkit-backface-visibility: hidden;
// -webkit-transform: translateZ(0) scale(1.0, 1.0);
// transform: translateZ(0);

// @keyframes animate {
//   0% {transform: translateX(0);} 
//   100% {transform: translateX(-200%);}
// }
// `;

// const Anim1 = styled(Anim)`
// left: 100%;
// animation-name: animate;
// animation-duration: 12s;
// `;

// const Anim2 = styled(Anim)`
// left: 100%;
// animation-name: animate;
// animation-duration: 12s;
// animation-delay: 6.5s;
// `;
// var text1 = 'Interactive';
// var text2 = 'Developer';

// *-----------*

const Wrapper = styled.div`
  width: calc(100% - 200px);
  height: calc(100% - 80px - 10%);
  margin: 0 auto 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    width: calc(100% - 40px - 100px);
    height: calc(100% - 40px - 20%);
    font-size: 4vmax;
  }

  // IPAD PORTRAIT
  @media only screen and (min-height: 1000px) and (orientation: portrait) {
    margin: 0 auto 15%;
    height: calc(100% - 40px - 30%);
    font-size: 5vmin;
  }

  @media only screen and (max-width: 500px) {
    width: calc(100% - 20px - 50px);
    height: calc(100% - 20px - 20%);
    font-size: 3.5vmax;
  }
`;

// const Anim = styled(TransitionGroup)`
// font-family: "Euclid Flex Trial";
// font-size: 7vmax;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// height: 75%;

// @media only screen and (max-width: 1100px) {
//   font-size: 5vmax;
// }
// `;

// const Span1 = styled.div`
// opacity: 0;
// animation: animate 0.5s 1s linear 1 forwards;
// `;

// const Span2 = styled.div`
// color: #092CBE;
// -webkit-text-stroke: 2px white;
// opacity: 0;
// animation: animate 0.5s 2s linear 1 forwards;
// `;

const Text = styled.div`
  // font-family: "GT America Trial";
  font-size: 7vmax;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  opacity: 0;
  animation: 1.5s fadeIn 0.2s linear 1 forwards;
  line-height: 1;
  text-align: center;
  color: #c4c5fe;

  @keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }

  @media only screen and (min-width: 1800px) {
    font-size: 5vmax;
  }

  @media only screen and (max-width: 1100px) {
    font-size: 5vmax;
  }
`;


const HomePage = () => 
  <Wrapper>
    <Text>
      I’m a French front-end developer based in Portland, Oregon.
    </Text>
  </Wrapper>

export default HomePage;