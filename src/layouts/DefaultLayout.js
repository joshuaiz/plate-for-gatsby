import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
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
        </div>
    </Fragment>
)

export default DefaultLayout
