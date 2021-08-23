import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import Routes from '../listRoute';
import Theme from '../../theme';

const ListOfRoute = () => (
  <ThemeProvider theme={Theme}>
    <React.Suspense fallback={<h1>Loading</h1>}>
      <Router>
        <Switch>
          {Routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
        </Switch>
      </Router>
    </React.Suspense>
  </ThemeProvider>
  );

export default ListOfRoute;
