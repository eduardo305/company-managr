import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClient } from '../actions/index';
import Spinner from '../components/spinner';

class ClientDetail extends Component {

  componentDidMount() {
      this.props.fetchClient(this.props.params.id);
  }

  render() {
    if (this.props.pending) {
      return <Spinner />
    }

    const { client } = this.props;

    return (
      <div className="client-details-wrapper">
        <section className="client-hero">
          <img className="thumbnail-photo" src={ client.picture.large } />
          <div className="name">
            { `${client.name.first} ${client.name.last}` }
          </div>
        </section>
        <section className="client-address">
          <h4>Address</h4>
          <div>Street: { client.location.street } </div>
          <div>City: { client.location.city } </div>
          <div>State: { client.location.state } </div>
          <div>Postcode: { client.location.postcode } </div>
        </section>
        <section className="client-contact">
          <h4>Contact </h4>
          <div>Phone: { client.phone }</div>
          <div>Cell: { client.cell }</div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    client: state.activeClient.selected,
    pending: state.activeClient.pending
  }
}

export default connect(mapStateToProps, { fetchClient })(ClientDetail);
