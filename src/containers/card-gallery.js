import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchClients } from '../actions/index';
import Card from './card';
import Spinner from '../components/spinner';

class CardGallery extends Component {

  componentWillMount() {
    this.props.fetchClients();
  }

  renderCards() {
    if ( !this.props.clients) {
      return <Spinner />
    }

    const cards = this.props.clients.map((person) => {
      return (
        <li
          key={ person._id }>

          <Card person={ person }/>
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
    clients: state.clients.all,
    pending: state.pending
  }
}

export default connect(mapStateToProps, { fetchClients })(CardGallery);
