import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import home from './pages/home/home';
import orders from './pages/orders/orders';
import products from './pages/products/products';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path ="/" component={home} />
          <Route path="/orders" component={orders} />
          <Route path="/products" component={products} />
        </div>
      </Router>
    );
  }
}

export default App;
