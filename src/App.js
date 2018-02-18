import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import Home from './pages/home/home';
import Orders from './pages/orders/orders';
import Products from './pages/products/products';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:page" component={Products} />
          <Redirect from="*" to="/products"/>
        </div>
      </Router>
    );
  }
}

export default App;
