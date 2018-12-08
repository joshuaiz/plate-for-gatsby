import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layouts/DefaultLayout'
import PostListWithExcerpt from '../components/PostList/PostListWithExcerpt';
import Pagination from '../components/Pagination/Pagination'


// grab the pageContext prop given by createPage in gatsby-node.js
const PostsPage = ({ pageContext }) => {
    console.log('pageContext', pageContext)
    const { group } = pageContext

    // This is the array of pages from the main query
    // console.log(group)

    return (
        <Layout>
            <Helmet
                title="Plate Gatsby"
                meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' }
                ]}
                bodyAttributes={{
                    class: 'blogroll page-blog'
                }}
            />
            <PostListWithExcerpt posts={group} />
            <Pagination pageContext={pageContext} />
        </Layout>
    )
}
export default PostsPage
