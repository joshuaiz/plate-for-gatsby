module.exports = `
    query {
        allWordpressPost {
            edges {
                node {
                    id
                    wordpress_id
                    slug
                    status
                    template
                    format
                    title
                    date(formatString: "MMMM DD, YYYY")
                    excerpt
                    content
                    featured_media {
                        source_url
                        alt_text
                    }
                    categories {
                        id
                        wordpress_id
                        count
                        description
                        link
                        name
                        slug
                        parent {
                            __typename
                            id
                        }
                        children {
                            id
                            __typename
                        }
                        wordpress_parent
                        _links {
                            self {
                                href
                            }
                        }
                    }
                }
            }
        }

        site {
            siteMetadata {
                title
                subtitle
                description
                author
                url
                image
                facebookImage
                twitterImage
                twitterUser
            }
        }
    }
`
