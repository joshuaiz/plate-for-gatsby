import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import MainMenu from '../Menu/MainMenu'
import Logo from './Logo/Logo'
import './Header.scss'

const Header = ({ data }) => {
    const title = data.site.siteMetadata.title

    return (
        <header className="header">
            <div className="inner-header wrap">
                <Logo />
                <div className="site-title">
                    <Link to="/">{title}</Link>
                </div>
                <MainMenu />
            </div>
        </header>
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
        render={data => <Header data={data} {...props} />}
    />
)
