import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from '../components/maps';
import { Marker } from 'react-google-maps';
import { fetchClients } from '../actions/index';

class ClientsLocation extends Component {

  componentWillMount() {
    this.props.fetchClients();
  }

  getAllCoordinates() {
    return this.props.clients.map( client => {
      if ( client.location.position ) {
          return {
            position: {
              lat: client.location.position.lat,
              lng: client.location.position.lng
            },
            defaultAnimation: 2
          };
      }
    });
  }

  render() {
    const markers = this.getAllCoordinates();

    return (
      <Map
        containerElement={
          <div style={{ height: `85vh` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        markers={ markers }
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    clients: state.clients.all
  };
}

export default connect(mapStateToProps, { fetchClients: fetchClients })(ClientsLocation);
