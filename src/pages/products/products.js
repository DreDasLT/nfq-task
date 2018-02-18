// Sudelioti i atskirus componentus
// Per paramus paduoti puslapi ir praeitame state naudota ieskojimo fragmenta
// pagination rodykles sutvarkyti, kad eitu i sekanti ir kad butu disablinta rodykle jeigu neber kur eit
// jei esi tame puslapyje tai skaicius turi but disablintas


import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Navbar from './../layout/navbar/navbar';
import Nav from './../../components/nav/nav';
import {productsData, countPages} from './../../utils/utils';

import Product from './../../components/product/product';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownSelected: "Pagal pavadinimą",
      searchText: ''
    }

    this.handleClick = this
      .handleClick
      .bind(this);


      let page;
      let filteredProducts;
  }

  handleClick = (value) => (e) => {
    this.setState({dropdownSelected: value, searchText: ''});
  };

  renderProduct(product) {
    return <Product
      title={product.title}
      img={product.img}
      description={product.description}
      price={product.price}
      author={product.author}
      genre={product.genre}/>;
  };

  renderProducts(products, page) {
    let itemsFrom = page === 1 ? 0 : (page-1)*6;
    return products.slice(itemsFrom, itemsFrom+6).map(product => this.renderProduct(product));
  };

  handleChange(event) {
    var value;
    if(this.state.dropdownSelected !== "Pagal pavadinimą") value = event.target.value > -1 ? event.target.value : 0;
    else value = event.target.value;
    this.setState({searchText: value });
  };


  render() {
    console.log(this.props.match.params.page);
    this.page = typeof this.props.match.params.page === 'undefined' ? 1 : this.props.match.params.page;

    this.filteredProducts = this.state.dropdownSelected === "Pagal pavadinimą"
      ? productsData.filter((product) => {
        return product
          .title
          .toLowerCase()
          .indexOf(this.state.searchText.toLowerCase()) !== -1;
      })
      : productsData.filter((product) => {
        return product
          .price === parseInt(this.state.searchText);
      });
    return (
      <div className="products">
        <div>
          <Navbar path={this.props.location.pathname}/>
          <div class="py-5">

            <div className="container">
              <div class="row justify-content-md-center">
                <div class="mb-3 col-md-8">
                  <div class="input-group">
                    <input
                      type={this.state.dropdownSelected === "Pagal pavadinimą"
                      ? "text"
                      : "number"}
                      class="form-control"
                      aria-label="Produktų paieška"
                      placeholder={this.state.dropdownSelected === "Pagal pavadinimą"
                      ? "Įveskite prekės pavadinimą"
                      : "Įveskite prekės kainą"}
                      value={this.state.searchText}
                      onChange={this
                      .handleChange
                      .bind(this)}></input>
                    <div class="input-group-append">
                      <button
                        class="btn btn-warning dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">{this.state.dropdownSelected}</button>
                      <div class="dropdown-menu bg-warning">
                        <a class="dropdown-item" onClick={this.handleClick("Pagal pavadinimą")}>Pagal pavadinimą</a>
                        <a class="dropdown-item" onClick={this.handleClick("Pagal kainą")}>Pagal kainą</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div class="row justify-content-md-center">
                <div class="mb-3 col-md-8">
                  
                  <Nav page={this.page} products={this.filteredProducts} link="/products/"> </Nav>
                </div>
              </div>
            </div>

            <div className="container">
              <div class="row">
                {this.renderProducts(this.filteredProducts, this.page)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
