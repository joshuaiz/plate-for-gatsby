module.exports = `
    {
        allWordpressPage {
            edges {
                node {
                    id
                    wordpress_id
                    slug
                    status
                    title
                    status
                    template
                    excerpt
                    content
                    date(formatString: "MMMM DD, YYYY")
                    featured_media {
                        source_url
                        alt_text
                    }
                }
            }
        }
        
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

        allWordpressWpComments {
            edges {
                node {
                    id
                    wordpress_id
                    post
                    author
                    author_name
                    author_url
                    author_avatar_urls {
                        wordpress_96
                    }
                    date(formatString: "MMMM DD, YYYY")
                    content
                    status
                    type
                }
            }
        }

        site {
            siteMetadata {
                title
            }
        }
    }
`
