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
            <aside className="sidebar">{null}</aside>
        </div>
    </Fragment>
)

export default DefaultLayout
