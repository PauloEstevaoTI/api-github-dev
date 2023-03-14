import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/MainPage';
import RepositoriesPage from './pages/RepositoriesPage';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/:login/repositories">
          <RepositoriesPage />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}
