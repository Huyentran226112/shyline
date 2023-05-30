import React from 'react';
import { Link } from 'react-router-dom';

function Pagination(props) {
    const { pageData, setPage } = props;
    let pageNumbers = [];
    for (let i = 1; i <= pageData.last_page; i++) {
        pageNumbers.push(i);
    }
    if (pageData.total == 0) {
        return <></>
    }
    return (
        <ul className="page-navigation">
            {pageData.current_page > 1 &&
                <li className="first">
                    <Link onClick={() => setPage(pageData.current_page - 1)}>
                        <i className="fa fa-arrow-circle-o-left" aria-hidden="true" />
                    </Link>
                </li>
            }
            {
                pageNumbers.map((pageNumber, key) => {
                    const activeClass = pageData.current_page === pageNumber ? 'current-page' : '';
                    return (
                        <li key={key} className={activeClass}>
                            <Link onClick={() => setPage(pageNumber)}>
                                {pageNumber}
                            </Link>
                        </li>
                    )
                })
            }

            {pageData.current_page < pageData.last_page &&
                <li className="last">
                    <Link onClick={() => setPage(pageData.current_page + 1)} >
                        <i className="fa fa-arrow-circle-o-right" aria-hidden="true" />
                    </Link>
                </li>
            }
        </ul>
    );
}

export default Pagination;
