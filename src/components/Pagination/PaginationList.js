import React from 'react'
import Link from 'gatsby-link'

const PaginationList = ({ navItems }) => (
    <div className="pagination-numbered">
        <p>Go to page:</p>
        <ul className="pagination-list nostyle">
            {navItems.map(item => (
                <li key={item.index}>
                    {item.separator ? (
                        <span className="pagination-ellipsis">&hellip;</span>
                    ) : (
                        <Link
                            to={item.link}
                            className={`pagination-link ${
                                item.current ? 'is-current' : ''
                            }`}
                            aria-label={`Goto page ${item.index}`}
                        >
                            {item.index}
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    </div>
)

export default PaginationList
