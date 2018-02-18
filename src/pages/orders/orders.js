import React, {Component} from 'react';
import Navbar from './../layout/navbar/navbar';

class Orders extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        }
    }

    handleChange(event) {
        this.setState({searchText: event.target.value});
    };

    render() {
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
                </div>
            </div>
        );
    }
}

export default Orders;