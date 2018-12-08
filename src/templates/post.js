import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import PostContent from '../components/PostContent/PostContent'
import Layout from '../layouts/DefaultLayout'
import './post.scss'

const PostTemplate = ({ data }) => {
    const post = data.wordpressPost

    console.log('Post', post)

    // Yeah this isn't pretty, but it works
    const categories = `${post.categories
        .map(cat => `category-${cat.slug}`)
        .join(' ')}`

    return (
        <Layout>
            <Helmet
                title={`Plate Gatsby - ${post.title}`} 
                meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' }
                ]}
                bodyAttributes={{
                    class: `single-post postid-${post.wordpress_id} post-${post.slug} ${categories}`
                }}
            />
            <PostContent post={post} />
        </Layout>
    )
}

PostTemplate.propTypes = {
    data: PropTypes.object.isRequired
}

export default PostTemplate

export const pageQuery = graphql`
    query($id: String!) {
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
            featured_media {
                source_url
                alt_text
            }
            content
        }
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`
