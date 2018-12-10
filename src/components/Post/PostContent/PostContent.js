import React from 'react'
import Parser from 'html-react-parser'
import PostHeader from '../PostHeader/PostHeader'

const PostContent = ({ post }) => (
    <article
        className={`type-post hentry post-${post.id} post-${post.wordpress_id}`}
    >
        <PostHeader post={post} />
        <section className="entry-content">
            {post.featured_media && (
                <div className="post-image">
                    <img
                        src={post.featured_media.source_url}
                        alt={
                            post.featured_media.alt_text
                                ? post.featured_media.alt_text
                                : null
                        }
                    />
                </div>
            )}
            <div className="post-content">{Parser(post.content)}</div>
        </section>
    </article>
)

export default PostContent
