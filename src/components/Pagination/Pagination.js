import React from 'react'
import Link from 'gatsby-link'

const NavLink = ({ test, url, text }) => {
    if (!test) {
        return <Link to={url}>{text}</Link>
    }
    return <span>{text}</span>
}

const Pagination = ({ pageContext }) => {
    const { index, first, last, pageCount, pathPrefix } = pageContext

    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString()

    console.log('Pagination page count:', pageCount)

    return (
        <nav className="pagination">
            <div className="previous-link">
                <NavLink
                    test={first}
                    url={`${pathPrefix}/${previousUrl}`}
                    text="&larr; Previous Page"
                />
            </div>
            <div className="next-link">
                <NavLink
                    test={last}
                    url={`${pathPrefix}/${nextUrl}`}
                    text="Next Page &rarr;"
                />
            </div>
        </nav>
    )
}

export default Pagination
