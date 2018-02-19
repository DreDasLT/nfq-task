import React, {Component} from 'react';

import Navbar from './../layout/navbar/navbar';
import {Link} from 'react-router-dom'
import {pagesData} from './../../utils/utils';

class Home extends Component {
    render() {

        let pages = pagesData.map(page => {
            return (
                <div>
                    <Link to={page.path} className="btn btn-warning btn-md btn-block mt-5">{page.name}</Link>
                </div>
            );
        });

        return (
            <div>
                <Navbar path={this.props.location.pathname}/>
                <img
                    className="d-none d-lg-block"
                    src="https://cdn4.iconfinder.com/data/icons/hand-sign/100/Hand_10-512.png"
                    alt="Mygtukas nurodantis kur spausti">
                </img>
                <div className="container d-lg-none">
                    <div style={{marginTop:"300px"}}>
                        {pages}
                    </div>    
                </div>
            </div>
        );
    }
}

export default Home;