/**
 * If you are using a local unsigned TLS/SSL cert, the below
 * NODE_TLS thingy must be present for GraphQL to work.
 *
 */
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const queryAll = require(`./src/queries/queryAll.js`)
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        // Templates
        const pageTemplate = path.resolve('./src/templates/page.js')
        const postTemplate = path.resolve('./src/templates/post.js')

        resolve(
            graphql(queryAll).then(result => {
                if (result.errors) reject(result.errors)

                // Pages detail
                const pages = result.data.allWordpressPage.edges

                pages.forEach(edge => {
                    createPage({
                        path: `/${edge.node.slug}/`,
                        component: slash(pageTemplate),
                        context: {
                            id: edge.node.id
                        }
                    })
                })

                // Posts detail
                const posts = result.data.allWordpressPost.edges

                createPaginatedPages({
                    edges: posts,
                    createPage,
                    pageTemplate: 'src/templates/posts.js',
                    pageLength: 10,
                    pathPrefix: 'posts'
                })

                posts.forEach(edge => {
                    createPage({
                        path: `/post/${edge.node.slug}/`,
                        component: slash(postTemplate),
                        context: {
                            id: edge.node.id
                        }
                    })
                })
            })
        )
    })
}
