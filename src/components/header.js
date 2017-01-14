import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h4>Managr</h4>
          <div className="menu-wrapper">
            <Link to="/">Home</Link>
            <Link to="/clients/location">Clients Location</Link>
          </div>
        </div>
      </header>
    );
  }

}

export default Header;
