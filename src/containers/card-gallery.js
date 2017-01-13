import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchClients } from '../actions/index';

class CardGallery extends Component {

  componentWillMount() {
    this.props.fetchClients();
  }

  renderCards() {
    if ( !this.props.clients ) {
      return <div>loading...</div>
    }

    const cards = this.props.clients.map((person) => {
      return (
        <li
          key={ person._id }>

          <a>
            <div className='wrapper'>
                <img className="photo" src={ person.picture.large } />
                <div className='description'>
                  <span>{ person.name.first }</span>
                </div>
            </div>
          </a>
        </li>);
    });

    return cards;
  }

  render() {
    return (
      <ul className="gallery">{ this.renderCards() }</ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    clients: state.clients.all
  }
}

export default connect(mapStateToProps, { fetchClients })(CardGallery);
