import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Orders from './pages/orders/orders';
import Products from './pages/products/products';


class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <div>
          <Route exact path="/orders" component={Orders} />
          <Route path="/orders/:page" component={Orders} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:page" component={Products} />
          <Route exact path="/" component={Products} />
        </div>
        </Switch> 
        </Router>
    );
  }
}

export default App;
