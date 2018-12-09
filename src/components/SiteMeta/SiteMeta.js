import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Twitter from './Twitter'
import Facebook from './Facebook'

const SEO = ({
    title = null,
    subtitle = null,
    description = null,
    author = null,
    url = null,
    image = null,
    facebookImage = null,
    twitterImage = null,
    twitterUser = null
}) => (
    <StaticQuery
        query={graphql`
            query SEOQuery {
                site {
                    siteMetadata {
                        title
                        subtitle
                        description
                        author
                        url
                        repo
                        image
                        facebookImage
                        twitterImage
                        twitterUser
                    }
                }
            }
        `}
        render={data => {
            const site = data.site.siteMetadata
            const seo = {
                title: site.title,
                description: site.description,
                image: site.image,
                url: site.url,
                facebookImage: site.facebookImage,
                twitterImage: site.twitterImage,
                twitterUser: site.twitterUser
            }

            return (
                <>
                    <Helmet title={seo.title}>
                        <meta name="description" content={seo.description} />
                        <meta name="image" content={seo.image} />
                    </Helmet>
                    <Facebook
                        pageUrl={seo.url}
                        // type={article ? 'article' : null}
                        title={seo.title}
                        description={seo.description}
                        image={seo.facebookImage}
                        // appID={facebookAppID}
                    />
                    <Twitter
                        username={twitterUser}
                        title={seo.title}
                        description={seo.description}
                        image={seo.twitterImage}
                    />
                </>
            )
        }}
    />
)

export default SEO
