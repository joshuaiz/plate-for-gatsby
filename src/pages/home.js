/** 
 * Static Home Page template 
 * 
 * If you have a WP static front page,
 * change /pages/index.js to index_old.js
 * and rename this file to index.js.
 * 
 * Be sure to update the ID of your home page 
 * below.
 * 
*/

import React from 'react'
import Parser from 'html-react-parser'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layouts/DefaultLayout'

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
            <article className="type-page hentry">
                <header className="article-header">
                    <h1 className="page-title">{Parser(currentPage.title)}</h1>
                    <div className="byline post-date">{currentPage.date}</div>
                </header>
                <section className="entry-content">
                    {Parser(currentPage.content)}
                </section>
                <footer className="article-footer">{null}</footer>
            </article>
        </Layout>
    )
}

export default PageTemplate

// !! IMPORTANT: update the `Int = ` value below to the 
// postId of your home page.
export const homeQuery = graphql`
    query staticFrontPage($frontpage_id: Int = 238) {
        wordpressPage(wordpress_id: { eq: $frontpage_id }) {
            id
            wordpress_id
            title
            content
            slug
        }
        site {
            id
            siteMetadata {
                title
            }
        }
    }
`
