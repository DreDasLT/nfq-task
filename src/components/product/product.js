import React, {Component} from 'react';

class Product extends Component {

    render() {
        return (
            <div className="col-md-4">
                <div className="card mb-4">
                    <img
                        className="card-img-top"
                        src={this.props.img}
                        alt=""
                        style={{
                        "max-height": "150px"
                    }}></img>
                    <div
                        className="mt-4 col-md-12"
                        style={{
                        "max-height": "270px"
                    }}>

                        <div
                            className="col-md-12"
                            style={{
                            height: "150px",
                            "max-height": "150px",
                            "text-overflow": "ellipsis",
                            "overflow": "hidden",
                            padding:0
                        }}>

                            <div className="d-flex justify-content-between align-items-center">
                            <h4> {this.props.title}</h4>
                            <p> {this.props.genre}</p>
                        </div>
                            <p className="card-text">{this.props.description}</p>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <h4> <span className="badge badge-secondary">{this.props.author}</span></h4>
                            <h2> <span className="badge badge-success">{this.props.price}€</span></h2>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Product;