import React from 'react'
import Parser from 'html-react-parser'
import './PostComments.scss'

const PostComments = ({ comments }) => {
    if (!comments || comments.length === 0 || comments === undefined) {
        return null
    }
    return (
        <div className="post-comments">
            <h3>Comments</h3>
            <ul className="comments-list nostyle">
                {comments.length > 1 ? (
                    comments.map(comment => (
                        <li className="post-comment" key={comment.node.id}>
                            <div className="author-avatar">
                                <img
                                    src={
                                        comment.node.author_avatar_urls
                                            .wordpress_96
                                    }
                                    alt="Comment author avatar"
                                />
                            </div>
                            <div className="comment-wrap">
                                <div className="comment-meta">
                                    <div className="comment-author-date">
                                        <span className="author-name">
                                            {comment.node.author_name}
                                        </span>
                                        <span className="comment-date">
                                            {comment.node.date}
                                        </span>
                                    </div>
                                </div>
                                <div className="comment-content">
                                    {Parser(comment.node.content)}
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <li className="post-comment" key={comments.node.id}>
                        <div className="author-avatar">
                            <img
                                src={
                                    comments.node.author_avatar_urls
                                        .wordpress_96
                                }
                                alt="Comment author avatar"
                            />
                        </div>
                        <div className="comment-wrap">
                            <div className="comment-meta">
                                <div className="comment-author-date">
                                    <span className="author-name">
                                        {comments.node.author_name}
                                    </span>
                                    <span className="comment-date">
                                        {comments.node.date}
                                    </span>
                                </div>
                            </div>
                            <div className="comment-content">
                                {Parser(comments.node.content)}
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default PostComments
