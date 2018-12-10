import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './style.scss'

const DefaultLayout = ({ children, location }) => (
    <Fragment>
        <div className="container">
            <Header location={location} />
            <div className="content">
                <div className="inner-content wrap">
                    <main className="main">{children}</main>
                </div>
            </div>
            <Footer />
        </div>
    </Fragment>
)

export default DefaultLayout
