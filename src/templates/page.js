import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import PageMeta from '../components/SiteMeta/PageMeta'
import Layout from '../components/Layout/DefaultLayout'
import PageContent from '../components/Page/PageContent/PageContent'

const PageTemplate = ({ data, location }) => {

    const page = data.wordpressPage
    const site = data.site.siteMetadata

    return (
        <Layout location={location}>
            <PageMeta isPage page={page} site={site} />
            <Helmet
                title={`${site.title} - ${page.title}`}
                meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' }
                ]}
                bodyAttributes={{
                    class: `page pageid-${page.wordpress_id} page-${page.slug}`
                }}
            />
            <PageContent page={page} />
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
            excerpt
            slug
            date(formatString: "MMMM DD, YYYY")
            featured_media {
                source_url
                alt_text
            }
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
