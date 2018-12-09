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
        {/* 
            Couldn't find a way to render emoji consistently and accessibly
            that worked across all browsers so disabling the eslint warning
            for now.

            I mean, you were going to erase this anyway...sheeeeesh!
        */}
        {/* eslint-disable jsx-a11y/accessible-emoji */}
        <div className="entry-content">
            <h1>Plate for Gatsby</h1>
            <p>
                Welcome to your new Gatsby + WordPress site, now go build something
                great!
            </p>
            <p>This is the default index.js template.</p>
            <h3>👉 Next steps:</h3>
            <ul className="next-steps nostyle">
                <li>
                    <p>
                        <strong>⚡️ Static Home Page:</strong><br />
                        If you have a WordPress static home page, rename this file to
                        <code>index_old.js</code>, then rename <code>home.js</code> to
                        <code>index.js</code> to load your Home Page content.
                    </p>
                    <p><strong>Important:</strong> Be sure to update the post ID of your 
                    home page in <code>home.js</code>.</p>
                </li>
                <li>
                    <strong>❤️ Add Your Logo:</strong><br />
                    Replace the <code>logo.svg</code> file in
                    <code>/components/Header/Logo/logo.svg</code> with your logo.
                </li>
                <li>
                    <strong>🏗 Build Your Site:</strong><br />
                    Run <code>gatsby build</code> to create a production-ready build of your site.
                </li>
                <li>
                    <strong>📡 Deploy To Netlify:</strong><br />
                    Push your site to GitHub, connect it to Netlify and then whenever changes are pushed to your GitHub repo, your site will update! Continuous deployment is the 💣. More about <a href="/">deployment.</a>
                </li>
                <li>
                    <strong>📖 Learn More:</strong><br />
                    Check out the <a href="/">Plate for Gatsby docs</a>.
                </li>
            </ul>

            <h3>🐞 Having trouble or found a bug?</h3>
            <p>Submit an issue on <a href="https://github.com/joshuaiz/plate-for-gatsby" target="_blank" rel="noopener noreferrer">GitHub.</a></p>
            <p>Contributions are welcome!</p>
        </div>
        
    </Layout>
)

export default IndexPage
