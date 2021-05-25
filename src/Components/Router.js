import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// 'Routes/Home' 폴더에 index.js를 찾는다.
import Home from 'Routes/Home';
import TV from 'Routes/TV';
import Search from 'Routes/Search';
import Detail from 'Routes/Detail';
import Header from 'Components/Header';

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/tv" component={TV}></Route>
      <Route path="/search" component={Search}></Route>
      <Route path="/movie/:id" component={Detail}></Route>
      <Route path="/tv/:id" component={Detail}></Route>
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
