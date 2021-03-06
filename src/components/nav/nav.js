import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import {countPages} from './../../utils/utils';


class Nav extends Component {

    renderPages(pagesCount, page) {
        var indents = [];
        for (let i = 1; i <= pagesCount; i++) {
            indents.push(
                <li className={page === i ? "page-item active" : "page-item"}>
                    <Link to={this.props.link + i} className="page-link">{i}</Link>
                </li>
                
            )
        }
        return indents;
    }

    renderNav(page) {
        var previousPage = page - 1;
        var nextPage = page + 1;
        return (
            <nav aria-label="...">
                    <ul className="pagination justify-content-center">
                        <li className={previousPage === 0 ? "page-item disabled" : "page-item"}>
                            <Link to={page !== 1 ? this.props.link + previousPage : this.props.link + page} className="page-link">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </Link>
                        </li>
                        {this.renderPages(countPages(this.props.data.length, this.props.itemsPerPage), page)}
                        <li className={nextPage === countPages(this.props.data.length, this.props.itemsPerPage)+1 ? "page-item disabled" : "page-item"}>
                        <Link to={page !== countPages(this.props.data, this.props.itemsPerPage) ? this.props.link + nextPage : this.props.link + page} className="page-link">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                        </Link>
                        </li>
                    </ul>
                </nav>
        );
    }

    render() {
        var page = parseInt(this.props.page, 10);
        if(countPages(this.props.data.length, this.props.itemsPerPage) !== 0) {
            return (
                <div>
                    {this.renderNav(page)}
                </div>
            );
        } else {
            return (
                <div>
                </div>
            );
        }
    }
}

export default Nav;