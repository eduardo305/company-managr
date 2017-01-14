import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h4>Managr</h4>
          <Link to="/">Home</Link>
        </div>
      </header>
    );
  }

}

export default Header;
