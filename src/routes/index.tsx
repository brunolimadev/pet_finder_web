import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

// import Route from './Route';

import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';
import PetDetails from '../pages/PetDetails';
import MyPets from '../pages/MyPets';
import AddPet from '../pages/AddPet';
import UpdatePet from '../pages/UpdatePet';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={LogIn} />
    <Route path="/register" exact component={Register} />
    <Route path="/pet/:id" exact component={PetDetails} />
    <Route path="/home" exact component={Home} isPrivate />
    <Route path="/pets/add" exact component={AddPet} isPrivate />
    <Route path="/pets/update/:id" exact component={UpdatePet} isPrivate />
    <Route path="/pets/my" exact component={MyPets} isPrivate />
  </Switch>
);

export default Routes;
