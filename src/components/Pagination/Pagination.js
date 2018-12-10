import React from 'react'
import Link from 'gatsby-link'
import PaginationList from './PaginationList'
import './Pagination.scss'

// Inspired from this post:
// https://swas.io/blog/paginated-blog-post-with-gatsby-pagination/

// A sweet helper function to create pagination object
/* eslint-disable implicit-arrow-linebreak */
const createPaginationObjects = (length, page, increment = 2) =>
    Array.from({ length }, (_, i) => ({
        link: `/post/${i + increment}/`,
        index: i + increment,
        current: page === i + increment
    }))

const NavLink = ({ test, url, text }) => {
    if (!test) {
        return <Link to={url}>{text}</Link>
    }
    return <span>{text}</span>
}

const Pagination = ({ pageContext }) => {
    const {
        index,
        first,
        last,
        pageCount,
        page,
        pages,
        pathPrefix
    } = pageContext

    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString()

    // console.log('Pagination page count:', pageCount)

    // Create the navigation link
    let navItems = [
        {
            link: `/posts/`,
            index: 1,
            current: page === 1
        }
    ]
    if (pageCount <= 5) {
        navItems = [
            ...navItems,
            ...Array.from({ length: pageCount - 1 }, (_, i) => ({
                link: `/posts/${i + 2}/`,
                index: i + 2,
                current: page === i + 2
            }))
        ]
    } else {
        // We have a situation where we have to show the first
        // item, three items around the current one
        // and also the last item
        /* eslint-disable no-lonely-if */
        if (page <= 3) {
            // If the current one is closer to the start
            navItems = [
                ...navItems,
                ...createPaginationObjects(3, page),
                {
                    separator: true,
                    index: 'starter-separator'
                },
                {
                    link: `/posts/${pages}/`,
                    index: pages,
                    current: false
                }
            ]
        } else if (page > pages - 3) {
            // If the current one is closer to the last one
            navItems = [
                ...navItems,
                {
                    separator: true,
                    index: 'finisher-separator'
                },
                ...createPaginationObjects(4, page, pages - 3)
            ]
        } else {
            navItems = [
                ...navItems,
                {
                    separator: true,
                    index: 'starter-separator'
                },
                ...createPaginationObjects(3, page, page - 1),
                {
                    separator: true,
                    index: 'finisher-separator'
                },
                {
                    link: `/posts/${pages}/`,
                    index: pages,
                    current: false
                }
            ]
        }
        /* eslint-enable */
    }

    return (
        <nav className="pagination">
            <div className="previous-next">
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
            </div>
            <PaginationList navItems={navItems} />
        </nav>
    )
}

export default Pagination
