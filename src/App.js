import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Orders from './pages/orders/orders';
import Products from './pages/products/products';
import Home from './pages/home/home';
import Page404 from './pages/404/404';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Switch>
            <Route path="/orders/:page" component={Orders}/>
            <Route path="/products/:page" component={Products}/>
            <Route exact path="/" component={Home}/>
            <Route component={Page404} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
