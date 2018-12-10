import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import PostMeta from '../components/SiteMeta/PostMeta'
import PostContent from '../components/Post/PostContent/PostContent'
import PostComments from '../components/Post/PostComments/PostComments'
import Layout from '../components/Layout/DefaultLayout'
import '../components/Post/Post.scss'

const PostTemplate = ({ data }) => {
    const post = data.wordpressPost
    const site = data.site.siteMetadata
    const comments = data.allWordpressWpComments.edges

    // Yeah this isn't pretty, but it works
    const categories = `${post.categories
        .map(cat => `category-${cat.slug}`)
        .join(' ')}`

    return (
        <Layout>
            <PostMeta isPost post={post} site={site} />
            <Helmet
                title={`Plate Gatsby - ${post.title}`} 
                meta={[
                    { name: 'description', content: `${post.excerpt}` },
                    { name: 'keywords', content: `${post.tags ? post.tags : 'wordpress-post'}` },
                ]}
                bodyAttributes={{
                    class: `single-post postid-${post.wordpress_id} post-${post.slug} ${categories}`
                }}
            />
            <PostContent post={post} />
            <PostComments comments={comments} />
        </Layout>
    )
}

PostTemplate.propTypes = {
    data: PropTypes.object.isRequired
}

export default PostTemplate

export const postQuery = graphql`
    query($id: String!, $postId: Int!) {
        wordpressPost(id: { eq: $id }) {
            id
            wordpress_id
            title
            slug
            date(formatString: "MMMM DD, YYYY")
            author {
                name
                link
            }
            categories {
                slug
                name
            }
            tags {
                name
                slug
            }
            featured_media {
                source_url
                alt_text
            }
            content
            excerpt
        }
        allWordpressWpComments(filter: {post: {eq: $postId}}) {
            edges {
                node {
                    id
                    wordpress_id
                    post
                    author
                    author_name
                    author_url
                    author_avatar_urls {
                        wordpress_96
                    }
                    date(formatString: "MMMM DD, YYYY")
                    content
                    status
                    type
                }
            }
        }
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`
