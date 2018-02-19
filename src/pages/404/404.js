import React, {Component} from 'react';
import Navbar from './../layout/navbar/navbar';

class Page404 extends Component {
    render() {
        return (
            <div>
                <Navbar path={this.props.location.pathname}/>
                <div className="container">
                    <div className="mt-5 col-md-12">
                        <div className="alert alert-danger" role="alert">
                            Toks puslapis nerastas. Naudokitės navigacija viršuje.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page404;