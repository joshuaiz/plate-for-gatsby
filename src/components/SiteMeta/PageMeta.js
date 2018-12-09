import React from 'react'
import Helmet from 'react-helmet'

const PageMeta = ({ page, site, isPage }) => {
    // Strip returned html tags from excerpts
    const excerpt = page.excerpt.replace(/<(?:.|\n)*?>/gm, '')

    return (
        <Helmet>
            {/* General tags */}
            <title>{site.title - page.title}</title>
            <meta name="description" content={page.excerpt} />
            <meta name="image" content={page.image} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={site.url} />
            {isPage ? <meta property="og:type" content="article" /> : null}
            <meta property="og:title" content={page.title} />
            <meta property="og:description" content={excerpt} />
            <meta
                property="og:image"
                content={
                    page.featured_media
                        ? page.featured_media.source_url
                        : site.facebookImage
                }
            />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={site.twitterUser} />
            <meta name="twitter:title" content={page.title} />
            <meta name="twitter:description" content={excerpt} />
            <meta
                name="twitter:image"
                content={
                    page.featured_media
                        ? page.featured_media.source_url
                        : site.twitterImage
                }
            />
        </Helmet>
    )
}

export default PageMeta
