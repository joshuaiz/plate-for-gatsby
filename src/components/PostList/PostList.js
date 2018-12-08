import React from 'react'
import { Link } from 'gatsby'

const PostList = ({ posts }) => (
    <ul className="posts-list nostyle">
        {posts.map(({ node }) => (
            <li key={node.id}>
                <Link to={`/${node.slug}`}>{node.title}</Link>
            </li>
        ))}
    </ul>
)

export default PostList
