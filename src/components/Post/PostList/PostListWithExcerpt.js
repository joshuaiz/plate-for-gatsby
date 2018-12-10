import React from 'react'
import { Link } from 'gatsby'
import Parser from 'html-react-parser'

const PostListWithExcerpt = ({ posts }) => {
    const postUrl = 'post'

    return (
        <ul className="posts-list nostyle">
            {posts.map(({ node }) => (
                <li
                    key={node.id}
                    className={`post-list post-list-${
                        node.wordpress_id
                    } post-list-${node.slug}`}
                >
                    <Link to={`${postUrl}/${node.slug}`}>
                        <h2 className="post-title">{Parser(node.title)}</h2>
                    </Link>

                    <p className="post-date">{node.date}</p>

                    <div className="post-excerpt">{Parser(node.excerpt)}</div>
                </li>
            ))}
        </ul>
    )
}

export default PostListWithExcerpt
