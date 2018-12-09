import React from 'react'
import Helmet from 'react-helmet'

const PostMeta = ({ post, site, isPost }) => {
    // Strip returned html tags from excerpts
    const excerpt = post.excerpt.replace(/<(?:.|\n)*?>/gm, '')

    return (
        <Helmet>
            {/* General tags */}
            <title>{site.title - post.title}</title>
            <meta name="description" content={post.excerpt} />
            <meta name="image" content={post.image} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={site.url} />
            {isPost ? <meta property="og:type" content="article" /> : null}
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={excerpt} />
            <meta
                property="og:image"
                content={
                    post.featured_media
                        ? post.featured_media.source_url
                        : site.facebookImage
                }
            />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={site.twitterUser} />
            <meta name="twitter:title" content={post.title} />
            <meta name="twitter:description" content={excerpt} />
            <meta
                name="twitter:image"
                content={
                    post.featured_media
                        ? post.featured_media.source_url
                        : site.twitterImage
                }
            />
        </Helmet>
    )
}

export default PostMeta
