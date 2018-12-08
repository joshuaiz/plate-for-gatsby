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
            }
        }
    }
`
