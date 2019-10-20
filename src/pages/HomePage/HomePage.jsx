import React, {Component} from 'react';
import styled from "styled-components";

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

const Wrapper = styled.div`
width: calc(100% - 80px - 400px);
margin: auto;
font-size: 4.5vmax;
text-align: center;
@media only screen and (max-width: 1100px) {width: calc(100% - 40px - 250px);}
@media only screen and (max-width: 500px) {
  width: calc(100% - 20px - 100px);
  font-size: 3.5vmax;
}
`;

class HomePage extends Component {
  render() {
      return (
        <Wrapper>I'm a full stack software engineer, and passionate problem solver who enjoys getting lost in the flow of web development.</Wrapper>
      )
  }
}

export default HomePage;