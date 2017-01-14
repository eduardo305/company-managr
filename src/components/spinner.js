import React, { Component } from 'react';

export default class Spinner extends Component {
  render() {
    return (
      <div className="spinner-wrapper">
        <img className="spinner" src="../../img/clock.gif" />
      </div>
    );
  }
}
