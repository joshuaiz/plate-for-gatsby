import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../components/Header/Header'
import PostList from '../components/PostList/PostList'
import './style.scss'

const SidebarLayout = ({ children, data }) => {
    const posts = data.allWordpressPost.edges

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
                    <aside className="sidebar">
                        {/*
                         * We are loading recent posts into the sidebar but
                         * this is just an example.
                         */}
                        <h3>Recent Posts</h3>
                        <PostList posts={posts} />
                    </aside>
                </div>
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
