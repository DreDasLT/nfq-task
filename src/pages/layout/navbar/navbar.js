import React, {Component} from 'react';

import {Link} from 'react-router-dom'
import {pagesData} from './../../../utils/utils';

class Navbar extends Component {

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
        <Link to={pagesData[0].path} className="navbar-brand text-warning">NFQ-TASK</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class={this.props.path === pagesData[0].path ? "nav-item active" : "nav-item"}>
                <Link to={pagesData[0].path} className="nav-link">{pagesData[0].name}</Link>
              </li>

              <li class={this.props.path === pagesData[1].path ? "nav-item active" : "nav-item"}>
                <Link to={pagesData[1].path} className="nav-link">{pagesData[1].name}</Link>
              </li>

              <li class={this.props.path === pagesData[2].path ? "nav-item active" : "nav-item"}>
                <Link to={pagesData[2].path} className="nav-link">{pagesData[2].name}</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;