import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import './style.scss'

const SidebarLayout = ({ children, data }) => {
    // check if we have posts
    const posts =
        data.allWordpressPost && data.allWordpressPost.edges
            ? data.allWordpressPost.edges
            : null

    return (
        <Fragment>
            <div className="container aside with-sidebar">
                <Header />
                <div className="flex-wrap">
                    <div className="content">
                        <div className="inner-content wrap">
                            <main className="main">{children}</main>
                        </div>
                    </div>
                    {/*
                     * We are loading recent posts into the sidebar but
                     * this is just an example.
                     */}
                    <Sidebar posts={posts} />
                </div>
                <Footer />
            </div>
        </Fragment>
    )
}

export default props => (
    <StaticQuery
        query={graphql`
            query {
                # change the limit or remove to get all posts
                allWordpressPost(limit: 10) {
                    edges {
                        node {
                            id
                            wordpress_id
                            title
                            slug
                        }
                    }
                }
            }
        `}
        render={data => <SidebarLayout data={data} {...props} />}
    />
)
