import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layouts/DefaultLayout'

const IndexPage = () => (
    <Layout>
        <Helmet
            title="Plate for Gatsby"
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' }
            ]}
            bodyAttributes={{
                class: 'page-index'
            }}
        />
        <div className="entry-content">
            <h1>Plate for Gatsby</h1>
            <p>
                Welcome to your new Gatsby + WordPress site, now go build something
                great!
            </p>
            <p>This is the default index.js template.</p>
            <h3>Next steps:</h3>
            <ul className="next-steps">
                <li>
                    If you have a WordPress static home page, rename this file to{' '}
                    <code>index_old.js</code>, then rename <code>home.js</code> to{' '}
                    <code>index.js</code> to load your Home Page content. Be sure to
                    update the post ID of your home page in <code>home.js</code>.
                </li>
                <li>
                    Replace the <code>logo.png</code> file in{' '}
                    <code>/components/Header/Logo/logo.png</code> with your logo.
                </li>
                <li>
                    Check out the <a href="/">Plate for Gatsby docs</a>.
                </li>
            </ul>
        </div>
        
    </Layout>
)

export default IndexPage
