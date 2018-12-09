import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import './style.scss'

const DefaultLayout = ({ children }) => (
    <Fragment>
        <div className="container">
            <Header />
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
