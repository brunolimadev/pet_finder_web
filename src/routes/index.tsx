import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Route from './Route';

import Home from '../pages/Home';
import PetDetails from '../pages/PetDetails';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/pets/:id" exact component={PetDetails} />
  </Switch>
);

export default Routes;
