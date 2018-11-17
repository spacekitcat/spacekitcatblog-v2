import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import LandingPage from './stories/pages/landing-page';
import NotFoundPage from './stories/pages/not-found-page';
import SpaceThoughtsPage from './stories/pages/space-thoughts-page';

const Index = () => <LandingPage />;
const SpaceThoughts = () => <SpaceThoughtsPage />;
const NoMatch = ({ location }) => <NotFoundPage />;

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/spaaace" exact component={SpaceThoughts} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default App;
