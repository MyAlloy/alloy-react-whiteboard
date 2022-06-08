import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from 'pages/Home';

export default function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
