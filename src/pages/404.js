import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout/DefaultLayout'
import PageList from '../components/Page/PageList/PageList'
import PostList from '../components/Post/PostList/PostList'

const NotFoundPage = ({ data }) => {
    const pages = data.allWordpressPage.edges
    const posts = data.allWordpressPost.edges
    
    return (
        <Layout>
            <Helmet
                title="Plate Gatsby - 404 Not Found"
                meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' }
                ]}
                bodyAttributes={{
                    class: 'error404 page-404'
                }}
            />
            <h1>404 - Not Found</h1>
            <p>Sorry, we couldn&apos;t find what you are looking for.</p>

            <h3>Perhaps you were looking for a Page?</h3>
            <PageList pages={pages} />
            
            <h3>...or a Post?</h3>
            <PostList posts={posts} />
        </Layout>
    )
}

export default NotFoundPage

export const pagesQuery = graphql`
    query {
        allWordpressPage {
            edges {
                node {
                    id
                    wordpress_id
                    slug
                    title
                }
            }
        }
        allWordpressPost {
            edges {
                node {
                    id
                    wordpress_id
                    slug
                    status
                    template
                    format
                    title
                    date(formatString: "MMMM DD, YYYY")
                    excerpt
                    content
                }
            }
        }
    }
`
