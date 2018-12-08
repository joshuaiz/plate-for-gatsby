import React from 'react'
import { Link } from 'gatsby'
import MainMenu from '../Menu/MainMenu'
import Logo from './Logo/Logo'
import './Header.scss'

const Header = () => (
    <header className="header">
        <div className="inner-header wrap">
            <Logo />
            <div className="site-title">
                <Link to="/">Plate</Link>
            </div>
            <MainMenu />
        </div>
    </header>
)

export default Header
