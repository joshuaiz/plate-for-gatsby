import React from 'react'
import PostList from '../Post/PostList/PostList'
import './Sidebar.scss'

const Sidebar = ({ posts }) => (
    <aside className="sidebar">
        <h3>Recent Posts</h3>
        <PostList posts={posts} />
    </aside>
)

export default Sidebar
