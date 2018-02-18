import React, { Component } from 'react';
import Navbar from './../layout/navbar/navbar';


class Orders extends Component {
    render() {
        return (
            <div>
                <Navbar path={this.props.location.pathname}/>
                Orders
            </div>
        );
    }
}

export default Orders;