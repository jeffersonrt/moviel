import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Search from './pages/Search';
import Favorites from './pages/Favorites';
import MovieDetail from './pages/MovieDetail';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Search} />
    <Route path="/favorites" exact component={Favorites} />
    <Route path="/movie/:id" component={MovieDetail} />
  </Switch>
)

export default Routes;
