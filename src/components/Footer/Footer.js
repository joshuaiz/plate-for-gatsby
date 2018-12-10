import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './Footer.scss'

const Footer = ({ data }) => {
    const year = new Date().getFullYear()
    const siteTitle = data.site.siteMetadata.title
    return (
        <footer className="footer">
            <div className="inner-footer wrap">
                <p className="source-org copyright">
                    &copy; {year} {siteTitle}.
                </p>
            </div>
        </footer>
    )
}

export default props => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => <Footer data={data} {...props} />}
    />
)
