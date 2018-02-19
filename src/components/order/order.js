import React, {Component} from 'react';

class Order extends Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.index}</th>
                <td>{this.props.name}</td>
                <td>{this.props.book}</td>
                <td><span class="badge badge-success">{this.props.price}€</span></td>
            </tr> 
        );
    }
}

export default Order;