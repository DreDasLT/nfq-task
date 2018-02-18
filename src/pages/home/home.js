import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

import Navbar from './../layout/navbar/navbar';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar path={this.props.location.pathname}/>
                Home
            </div>
        );
    }
}

export default Home;