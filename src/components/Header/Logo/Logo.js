import React from 'react'
import { Link } from 'gatsby'
import './Logo.scss'
import logo from './logo.svg'

const Logo = () => (
    <div className="logo">
        <Link to="/">
            <img src={logo} alt="Logo" />
        </Link>
    </div>
)

export default Logo
