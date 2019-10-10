import React, {Component} from 'react';
import './AboutButton.css';
import { Link } from "react-router-dom";


class AboutButton extends Component {
  render() {
    return (
      <>
      <Link to='/about'>
        About
      </Link>
      </>
    )
  }
}

export default AboutButton;
