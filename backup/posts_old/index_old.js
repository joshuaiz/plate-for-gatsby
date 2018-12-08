import React from 'react'
import { graphql, Link } from 'gatsby'
import Parser from 'html-react-parser'
import PropTypes from 'prop-types'
import Layout from '../../layouts/DefaultLayout'

const PostsTemplate = ({ data }) => {
    const postUrl = 'post/'

    return (
        <Layout>
            <h1 className="page-title">Posts</h1>

            <ul className="nostyle">
                {data.allWordpressPost.edges.map(({ node }) => (
                    <li
                        key={node.id}
                        className="post"
                        style={{ marginBottom: 50 }}
                    >
                        <Link to={postUrl + node.slug}>
                            <h2 className="post-title">{Parser(node.title)}</h2>
                        </Link>

                        <p className="post-date">{node.date}</p>

                        <div className="post-excerpt">
                            {Parser(node.excerpt)}
                        </div>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}

PostsTemplate.propTypes = {
    // data: PropTypes.object.isRequired
}

export default PostsTemplate

export const pageQuery = graphql`
    query postsQuery {
        allWordpressPost {
            edges {
                node {
                    id
                    title
                    excerpt
                    slug
                    categories {
                        id
                        name
                        slug
                    }
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
`
