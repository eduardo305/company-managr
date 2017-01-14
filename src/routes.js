import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import CardGallery from './containers/card-gallery';
import ClientDetail from './containers/client-detail';
import ClientsLocation from './containers/clients-location';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ CardGallery } />
    <Route path="clients/location" component={ ClientsLocation } />
    <Route path="clients/:id" component={ ClientDetail } />
  </Route>
);
