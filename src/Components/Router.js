import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// 'Routes/Home' 폴더에 index.js를 찾는다.
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';
import Header from 'Components/Header';

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/tv" component={TV}></Route>
      <Route path="/search" component={Search}></Route>
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
