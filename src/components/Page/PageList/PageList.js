import React from 'react'
import { Link } from 'gatsby'

const PageList = ({ pages }) => (
    <ul className="pages-list nostyle">
        {pages.map(({ node }) => (
            <li key={node.id}>
                <Link to={`/${node.slug}`}>{node.title}</Link>
            </li>
        ))}
    </ul>
)

export default PageList
