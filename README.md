#   🔘 ⚛️ Plate for Gatsby
This project is a port of our [Plate](https://github.com/joshuaiz/plate) WordPress starter theme to [Gatsby](https://gatsbyjs.org).

**To install:**

1. Start a new project:<br/>
`gatsby new your-project https://github.com/joshuaiz/plate-for-gatsby`

2. `cd your-project`

3. In `gatsby-config.js` under `gatsby-source-wordpress` change `baseUrl` to the url of your WordPress install.

4. In your project directory, run: `gatsby develop`

5. Sweetness 🚀🚀🚀🚀🚀🚀🚀🚀


## 👉 What is this?

**Plate for Gatsby** is a super-cool, minimal-set-up custom Gatsby starter to link a current WordPress install to a Gatsby-created site. 

#### GatsbyJS + WordPress = 💯

Use WordPress as your content source with a Gatsby front end and be up-and-running in seconds.

### Features
- includes main GraphQL queries for pages, posts, menus *already set up*. Just add your source url to the project and your posts, pages and menus are there automagically.
<br />

- pre-built, ready-to-use components: header, page templates, post templates, footer, menus, archives.
<br />

- modular scss/sass with global and class-based styles. Want to use CSS Modules? Gatsby has [CSS Module support built-in](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/) and it works with scss out-of-the-box.

More than just a theme, **Plate for Gatsby** includes the main GraphQL queries for posts, pages, menus built-in and ready-to-go. well as your main components: page, post, header, main, sidebar, footer  along with mapped, modular scss so you can start customizing your components and templates right away. 

As with our traditional PHP/SCSS/js Plate theme, Plate for Gatsby has all of the components and HTML structure you need to get your headless WordPress project up and running fast. 

It's bare-bones but with some smart defaults so you aren't starting from nothing. The component/HTML structure is mirrored by the default CSS/SCSS classes in an intelligent way to help speed up development and keep everything organized.

At [studio.bio](https://studio.bio/) we really love working with React and once we tried Gatsby we were hooked. By keeping our clients' WordPress back end while moving to React/Gatsby for the front end, it's the best of both worlds combining the ease-of-use of WordPress with the performance of JavaScript.

To aid in these types of projects, we needed a ready-to-go starter theme so it made perfect sense to adapt our existing Plate WordPress starter theme for use with Gatsby.

## Use Cases
- for existing mostly static WordPress sites with a lot of content that could benefit from serverless performance. 
- you have clients whose teams are comfortable entering their content in WordPress but need a more performant site.
- to create a site that uses a subset another site's WordPress data.

### Sounds...erm...*cool*...I think?

If you're not familiar with Gatsby, React, GraphQL but are curious, see the <a href="#background">Background</a> section below.

## Requirements
In order for Plate to work with Gatsby and to help other developers, we had to set some initial ground rules for the Gatsby version of Plate:

1. Use as few dependencies as possible
2. Maintain the same HTML structure as the traditional WordPress Plate theme wherever possible; this includes the markup and classes (classNames)
3. Keep the modular scss structure of Plate along with media queries
4. Maintain the spirit of Plate by providing useful and informative comments throughout.

With these requirements, along with the original Plate theme, we hope that Plate for Gatsby can be a great springboard for advanced developers as well as a learning tool for not-so-experienced ones.

To do this, Plate needs your help! Contribute to the project, give feedback or do some testing. The more input, the better this will be.

<span id="background"></span>
## Background
[Gatsby](https://gatsbyjs.org) is a site builder using [React](https://reactjs.org) plus [GraphQL](https://graphql.org) and is perfect for quickly building static (or not-so-static) websites. 

With WordPress, this type of site is called *headless* because the front end (the site that is visited on the web) is completely decoupled from the back end (where you enter and save your content).

Thus using this setup, the site content is entered using the WordPress admin we know and love, yet with Gatsby, the built front end takes advantage of all the latest features of the modern JavaScript web: serverless, optimized, compressed pages that load instantly. What's more, site edits (both content and design) are updated __in real time__. 

## Why did we choose Gatsby? 
While there are many other examples of headless WordPress React starters and progressive web app frameworks out there (many of which we experimented wit and are really good), we decided to port our WordPress theme to Gatsby for the following reasons:

- easy set up
- fun to work with
- great documentation
- rapid adoption by the React/JavaScript community
- thriving ecosystem
- ready-to-go [WordPress source plugin](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/)

## What Plate for Gatsby doesn't include
- search. As a search index has to be custom-built for each site and not all sites will need it, I've left search out. To include search in your Gatsby project, see the [Adding Search docs](https://www.gatsbyjs.org/docs/adding-search/).

