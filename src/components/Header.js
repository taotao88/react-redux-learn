import React from 'react';  
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component { 
  render() {
    return (
      <nav className="header">
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/charts">Charts</Link>
      </nav>
    )
  }
};


