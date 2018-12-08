import React from 'react'
import Parser from 'html-react-parser'

const PageContent = ({ currentPage }) => {
    const page = currentPage
    return (
        <article
            className={`type-page hentry page-${page.id} page-${
                page.wordpress_id
            }`}
        >
            <header className="article-header">
                <h1 className="page-title">{Parser(page.title)}</h1>
                <div className="byline post-date">{page.date}</div>
            </header>
            <section className="entry-content">{Parser(page.content)}</section>
            <footer className="article-footer">{null}</footer>
        </article>
    )
}

export default PageContent
