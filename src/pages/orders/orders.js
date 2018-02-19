import React, {Component} from 'react';
import Navbar from './../layout/navbar/navbar';

import Nav from './../../components/nav/nav';

import Order from './../../components/order/order';
import {ordersData, countPages} from './../../utils/utils';

class Orders extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        }

        let itemsPerPage;
        let page;
        let filteredOrders;
    }

    handleChange(event) {
        this.setState({searchText: event.target.value});
    };

    renderOrder(index, order) {
        return <Order index={index} name={order.name} book={order.book} price={order.price}/>;
    };

    renderOrders(orders, page) {
        let itemsFrom = page === 1
            ? 0
            : (page - 1) * this.itemsPerPage;
        return orders
            .slice(itemsFrom, itemsFrom + this.itemsPerPage)
            .map((order, index) => this.renderOrder(index + 1, order));
    };

    renderOrderTable(orders, page) {
        return (
                <table class="table table-light">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Vardas</th>
                            <th scope="col">Knyga</th>
                            <th scope="col">Suma</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderOrders(this.filteredOrders, this.page)}

                    </tbody>
                </table>
        );
    }

    render() {
        this.itemsPerPage = 20;
        this.page = typeof this.props.match.params.page === 'undefined'
            ? 1
            : this.props.match.params.page;

        this.filteredOrders = ordersData.filter((order) => {
            return order
                .name
                .toLowerCase()
                .indexOf(this.state.searchText.toLowerCase()) !== -1;
        });
        return (
            <div>
                <Navbar path={this.props.location.pathname}/>
                <div class="py-5">
                    <div className="container">
                        <div class="row justify-content-md-center">
                            <div class="mb-3 col-md-8">
                                <div class="input-group">
                                    <input
                                        type="text"
                                        class="form-control"
                                        aria-label="Užsakymų paieška"
                                        placeholder="Įveskite užsakovo vardą"
                                        value={this.state.searchText}
                                        onChange={this
                                        .handleChange
                                        .bind(this)}></input>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div class="row justify-content-md-center">
                            <div class="mb-3 col-md-8">

                                <Nav
                                    itemsPerPage={this.itemsPerPage}
                                    page={this.page}
                                    data={this.filteredOrders}
                                    link="/orders/"></Nav>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                    {countPages(this.filteredOrders, this.itemsPerPage) !== 0
                        ? this.renderOrderTable(this.filteredOrders, this.page)
                        : <div>
                            <div class="alert alert-danger" role="alert">
                                Užsakymų su tokiu užsakovo vardu nerasta.
                            </div>
                        </div>}
                    </div>    
                </div>
            </div>
        );
    }
}

export default Orders;