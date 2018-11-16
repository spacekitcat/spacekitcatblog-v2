import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LandingPage from './stories/pages/landing-page';
import NotFoundPage from './stories/pages/not-found-page';

const Index = () => <LandingPage />;

const NoMatch = ({ location }) => <NotFoundPage />;

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default App;
