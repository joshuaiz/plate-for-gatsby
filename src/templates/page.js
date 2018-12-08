import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layouts/DefaultLayout'
import PageContent from '../components/PageContent/PageContent'

const PageTemplate = ({ data }) => {
    const currentPage = data.wordpressPage
    const site = data.site.siteMetadata

    return (
        <Layout>
            <Helmet
                title={`${site.title} - ${currentPage.title}`}
                meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' }
                ]}
                bodyAttributes={{
                    class: `page pageid-${currentPage.wordpress_id} page-${currentPage.slug}`
                }}
            />
            <PageContent currentPage={currentPage} />
        </Layout>
    )
}

export default PageTemplate

export const pageQuery = graphql`
    query($id: String!) {
        wordpressPage(id: { eq: $id }) {
            id 
            wordpress_id
            title
            content
            slug
            date(formatString: "MMMM DD, YYYY")
        }
        site {
            id
            siteMetadata {
                title
                subtitle
            }
        }
    }
`
