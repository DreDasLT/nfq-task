import React, {Component} from 'react';

import {Link} from 'react-router-dom'
import {pagesData} from './../../../utils/utils';

class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <Link to={"/"} className="navbar-brand text-warning">NFQ-TASK</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className={this.props.path === pagesData[0].path ? "nav-item active" : "nav-item"}>
                <Link to={pagesData[0].path} className="nav-link">{pagesData[0].name}</Link>
              </li>

              <li className={this.props.path === pagesData[1].path ? "nav-item active" : "nav-item"}>
                <Link to={pagesData[1].path} className="nav-link">{pagesData[1].name}</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;