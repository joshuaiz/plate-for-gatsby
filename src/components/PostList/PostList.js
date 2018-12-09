import React from 'react'
import { Link } from 'gatsby'

const PostList = ({ posts }) => (
    <ul className="posts-list">
        {posts.map(({ node }) => (
            <li key={node.id}>
                <Link to={`/post/${node.slug}`}>{node.title}</Link>
            </li>
        ))}
    </ul>
)

export default PostList
