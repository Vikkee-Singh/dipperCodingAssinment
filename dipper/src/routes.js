import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Import miscellaneous routes and other requirements
import App from './components/app';
import NotFoundPage from './components/pages/not-found-page';
import RequireAuth from './components/auth/require_auth';

import Login from './components/auth/login';
import Logout from './components/auth/logout';
import Dashboard from './components/pages/dashboard';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="login" component={Login} />
    <Route path="logout" component={Logout} />
    <Route path="dashboard" component={RequireAuth(Dashboard)} />

    <Route path="*" component={NotFoundPage} />
  </Route>
);
