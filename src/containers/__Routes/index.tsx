import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from '../Main';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
