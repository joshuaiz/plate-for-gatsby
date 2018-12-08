import React from 'react'
import Parser from 'html-react-parser'

const PostHeader = ({ post }) => (
    <header className="article-header">
        <h1 className="post-title">{Parser(post.title)}</h1>
        <div className="byline-wrap post-date">
            <span className="posted-on">
                <span className="screen-reader-text">Posted on</span>
                <time className="entry-date publish-date updated">
                    {post.date}
                </time>
            </span>
            {' by '}
            <span className="byline">
                <span className="author vcard">{post.author.name}</span>
            </span>
        </div>
    </header>
)

export default PostHeader
