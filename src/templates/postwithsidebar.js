import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import PostMeta from '../components/SiteMeta/PostMeta'
import PostContent from '../components/Post/PostContent/PostContent'
import PostComments from '../components/Post/PostComments/PostComments'
import SidebarLayout from '../components/Layout/SidebarLayout'
import '../components/Post/Post.scss'

const PostTemplate = ({ data }) => {

    const post = data.wordpressPost
    const site = data.site.siteMetadata

    // check if we have comments attached to post
    const comments = (data.allWordpressWpComments 
        ? data.allWordpressWpComments.edges 
        : null)

    // console.log('Post with sidebar', data)

    // Yeah this isn't pretty, but it works
    const categories = `${post.categories
        .map(cat => `category-${cat.slug}`)
        .join(' ')}`

    return (
        <SidebarLayout>
            <PostMeta isPost post={post} site={site} />
            <Helmet
                title={`Plate Gatsby - ${post.title}`} 
                meta={[
                    { name: 'description', content: `${post.description}` },
                    { name: 'keywords', content: `${post.tags ? post.tags : 'wordpress-post blog-post'}` }
                ]}
                bodyAttributes={{
                    class: `single-post postid-${post.wordpress_id} post-${post.slug} ${categories}`
                }}
            />
            <PostContent post={post} />
            <PostComments comments={comments} />
        </SidebarLayout>
    )
}

PostTemplate.propTypes = {
    data: PropTypes.object.isRequired
}

export default PostTemplate

export const postWithSidebarQuery = graphql`
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
