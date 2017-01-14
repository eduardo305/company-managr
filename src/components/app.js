import React, { Component } from 'react';

import Header from './header';
import CardGallery from '../containers/card-gallery';

export default class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        { this.props.children }
      </div>
    );
  }
}
