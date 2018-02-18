import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import {countPages} from './../../utils/utils';


class Nav extends Component {
    
    constructor(props) {
        super(props);
    }

    renderPages(pagesCount, page) {
        var indents = [];
        for (let i = 1; i <= pagesCount; i++) {
            indents.push(
                <li class={page === i ? "page-item active" : "page-item"}>
                    <Link to={this.props.link + i} className="page-link">{i}</Link>
                </li>
                
            )
            console.log("page " + page + "props.page" + this.props.page + " " + i);
        }
        return indents;
    }

    render() {
        var page = parseInt(this.props.page);
        var previousPage = page - 1;
        var nextPage = page + 1;
        return (
            <div>
                <nav aria-label="...">
                    <ul class="pagination justify-content-center">
                        <li class={previousPage === 0 ? "page-item disabled" : "page-item"}>
                            <Link to={this.props.page !== 1 ? this.props.link + previousPage : this.props.link + this.props.page} className="page-link">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </Link>
                        </li>
                        {this.renderPages(countPages(this.props.products.length), page)}
                        <li class={nextPage === countPages(this.props.products.length)+1 ? "page-item disabled" : "page-item"}>
                        <Link to={this.props.page !== countPages(this.props.products) ? this.props.link + nextPage : this.props.link + this.props.page} className="page-link">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                        </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;