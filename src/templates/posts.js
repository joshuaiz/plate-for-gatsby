import React from 'react'
import Helmet from 'react-helmet'
import SiteMeta from '../components/SiteMeta/SiteMeta'
import Layout from '../components/Layout/DefaultLayout'
import PostListWithExcerpt from '../components/Post/PostList/PostListWithExcerpt';
import Pagination from '../components/Pagination/Pagination'



// grab the pageContext prop given by createPage in gatsby-node.js
const PostsPage = ({ pageContext }) => {
    const { group } = pageContext

    // 'group' is the array of posts from pageContext
    // console.log('Posts template', group)

    return (
        <Layout>
            <SiteMeta />
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
