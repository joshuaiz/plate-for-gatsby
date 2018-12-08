/* eslint-disable */
module.exports = {
    siteMetadata: {
        title: 'Plate Gatsby',
        subtitle: 'Fetching data from joshuaiz.com'
    },
    plugins: [
        /*
         * Gatsby's data processing layer begins with source
         * plugins. Here the site sources its data from Wordpress.
         */
        {
            resolve: 'gatsby-source-wordpress',
            options: {
                /*
                 * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
                 * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
                 */
                baseUrl: 'plategb.local',
                // The protocol. This can be http or https.
                protocol: 'https',
                // Indicates whether the site is hosted on wordpress.com.
                // If false, then the assumption is made that the site is self hosted.
                // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
                // If your site is hosted on wordpress.org, then set this to false.
                hostingWPCOM: false,
                // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
                // This feature is untested for sites hosted on wordpress.com.
                // Defaults to true.
                useACF: true,
                // Include specific ACF Option Pages that have a set post ID
                // Regardless if an ID is set, the default options route will still be retrieved
                // Must be using V3 of ACF to REST to include these routes
                // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
                // routes with the ID option_page_1 and option_page_2
                // Dashes in IDs will be converted to underscores for use in GraphQL
                acfOptionPageIds: [],
                // auth: {
                //   // If auth.user and auth.pass are filled, then the source plugin will be allowed
                //   // to access endpoints that are protected with .htaccess.
                //   htaccess_user: "your-htaccess-username",
                //   htaccess_pass: "your-htaccess-password",
                //   htaccess_sendImmediately: false,

                //   // If hostingWPCOM is true then you will need to communicate with wordpress.com API
                //   // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
                //   // then add your clientId, clientSecret, username, and password here
                //   // Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
                //   wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
                //   wpcom_app_clientId: "54793",
                //   wpcom_user: "gatsbyjswpexample@gmail.com",
                //   wpcom_pass: process.env.WORDPRESS_PASSWORD,

                //   // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
                //   // plugin, you can specify user and password to obtain access token and use authenticated requests against wordpress REST API.
                //   jwt_user: process.env.JWT_USER,
                //   jwt_pass: process.env.JWT_PASSWORD,
                // },
                // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
                // It can help you debug specific API Endpoints problems.
                verboseOutput: true,
                // Set how many pages are retrieved per API request.
                perPage: 100,
                // Search and Replace Urls across WordPress content.
                // searchAndReplaceContentUrls: {
                //   sourceUrl: "https://source-url.com",
                //   replacementUrl: "https://replacement-url.com",
                // },
                // Set how many simultaneous requests are sent at once.
                concurrentRequests: 10,
                // Set WP REST API routes whitelists
                // and blacklists using glob patterns.
                // Defaults to whitelist the routes shown
                // in the example below.
                // See: https://github.com/isaacs/minimatch
                // Example:  `["/*/*/comments", "/yoast/**"]`
                // ` will either include or exclude routes ending in `comments` and
                // all routes that begin with `yoast` from fetch.
                // Whitelisted routes using glob patterns
                includedRoutes: [
                    '/*/*/categories',
                    '/*/*/posts',
                    '/*/*/pages',
                    '/*/*/media',
                    '/*/*/tags',
                    '/*/*/taxonomies',
                    '/*/*/users',
                    '/*/*/menus'
                ],
                // Blacklisted routes using glob patterns
                excludedRoutes: ['/*/*/posts/1456'],
                // use a custom normalizer which is applied after the built-in ones.
                normalizer: function({ entities }) {
                    return entities
                }
            }
        },
        `gatsby-plugin-sass`,
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
            }
        },
        // {
        //     resolve: `gatsby-plugin-google-fonts`,
        //     options: {
        //         fonts: [
        //             `merriweather\:300,300i,400,400i,700,700i`,
        //             `rubik\:400,500,700`, // you can also specify font weights and styles
        //             `rubik mono one`
        //         ]
        //     }
        // },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            // Class prefix for <pre> tags containing syntax highlighting;
                            // defaults to 'language-' (eg <pre class="language-js">).
                            // If your site loads Prism into the browser at runtime,
                            // (eg for use with libraries like react-live),
                            // you may use this to prevent Prism from re-processing syntax.
                            // This is an uncommon use-case though;
                            // If you're unsure, it's best to use the default value.
                            classPrefix: 'language-',
                            // This is used to allow setting a language for inline code
                            // (i.e. single backticks) by creating a separator.
                            // This separator is a string and will do no white-space
                            // stripping.
                            // A suggested value for English speakers is the non-ascii
                            // character '›'.
                            inlineCodeMarker: null,
                            // This lets you set up language aliases.  For example,
                            // setting this to '{ sh: "bash" }' will let you use
                            // the language "sh" which will highlight using the
                            // bash highlighter.
                            aliases: {},
                            // This toggles the display of line numbers globally alongside the code.
                            // To use it, add the following line in src/layouts/index.js
                            // right after importing the prism color scheme:
                            //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
                            // Defaults to false.
                            // If you wish to only show line numbers on certain code blocks,
                            // leave false and use the {numberLines: true} syntax below
                            showLineNumbers: false,
                            // If setting this to true, the parser won't handle and highlight inline
                            // code used in markdown i.e. single backtick code like `this`.
                            noInlineHighlight: false
                        }
                    }
                ]
            }
        }
    ]
}
