import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import './MainMenu.scss'

const MainMenu = ({ data, location }) => {
    const menu = data.allWordpressWpApiMenusMenusItems.edges[0].node.items

    // get current page so we can add 'current-menu-item' class
    const currentUrl = location ? location.pathname.replace(/\//g, '') : null

    return (
        <nav className="primary-nav">
            <ul className="main-menu">
                {menu.map(item => (
                    <li
                        key={`${item.object_slug}-${item.object_id}`}
                        className={`menu-item menu-item-${item.object_slug} ${
                            currentUrl && currentUrl === item.object_slug
                                ? 'current-menu-item'
                                : null
                        }`}
                    >
                        <Link to={item.object_slug}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

// Use StaticQuery to grab the menu(s) here where we need them
// See here: https://www.gatsbyjs.org/docs/static-query/
export default props => (
    <StaticQuery
        query={graphql`
            query menuQuery {
                allWordpressWpApiMenusMenusItems {
                    edges {
                        node {
                            id
                            name
                            items {
                                title
                                url
                                object_slug
                                object_id
                            }
                        }
                    }
                }
            }
        `}
        render={data => <MainMenu data={data} {...props} />}
    />
)
