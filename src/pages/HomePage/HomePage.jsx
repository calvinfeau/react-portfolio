import React, {Component} from 'react';
import styled, {css} from "styled-components";


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

// const HomeWrapper = styled.div`
//     // height: calc(100vh - 100px);
//     // width: calc(100vw - 100px);
//     // margin: 50px;
//     // display: flex;
//     // flex-direction: column;
//     // align-items: center;
//     // background-color: white;
//     // --border-size: 50px;
//     // border: var(--border-size) solid #1a1a1a;

//     // @media only screen and (max-width: 425px), (max-height: 425px) {
//     //     margin: 20px;
//     //     height: calc(100vh - 40px);
//     //     width: calc(100vw - 40px);
//     // }
// `;

// const Title = styled.div`
//   height: 20%;
//   width: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-family: "Euclid Flex Trial";
//   font-size: 3vmax;
// `;

// const Main = styled.div`
//   height: 60%;
//   width: 50%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   font-family: "GT America Trial";
//   font-size: 2vmax;

//   @media only screen and (max-width: 425px) and (orientation: portrait) {
//     font-size: 1.2vmax;
//   }

//   @media only screen and (max-width: 850px) and (orientation: landscape) {
//     font-size: 1vmax;
//   }
// `;

// const Links = styled.div`
//   width: 70%;
//   height: 20%;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   font-family: "Euclid Flex Trial";
//   font-size: 2.5vmax;
// `;

// HOW TO USE css + props
// ${props => css`${props.largeFrame}`};
// ${css`${props => props.smallFrame}`}

const Wrapper = styled.div`
width: calc(100vw - 100px - 400px);
top: 150px;
font-size: 4.5vmax;
text-align: center;
@media only screen and (max-width: 800px) {
}
`;

class HomePage extends Component {
  render() {
      return (
        <Wrapper>
          I'm a full stack software engineer,
          <br />
          and passionate problem solver
          <br />
          who enjoys getting lost in the 
          <br />flow of web development.
        </Wrapper>
      )
  }
}


export default HomePage;