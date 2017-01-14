import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Card extends Component {

  render() {
    const { person } = this.props;

    return (
      <Link to={ `clients/${ person._id }`}>
        <div className='wrapper'>
            <img className="photo" src={ person.picture.large } />
            <div className='description'>
              <span>{ person.name.first }</span>
            </div>
        </div>
      </Link>
    );
  }
}
