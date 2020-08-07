import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './modules/Home';
import News from './modules/News';
const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={ history }>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/news" exact component={News} />
      </Switch>
    </Router>
  );
}

export default App;

