#   🔘 ⚛️ Plate for Gatsby
This project is a port of our [Plate](https://github.com/joshuaiz/plate) WordPress starter theme to [Gatsby](https://gatsbyjs.org). It's a fully functioning Gatsby + WordPress starter to grab data from an existing WordPress install. 

Intrigued? Start now or [read more](#what-is-this).

🚀 **Quick Start:**

1. Start a new project:<br/>
`gatsby new your-project https://github.com/joshuaiz/plate-for-gatsby`

2. `cd your-project`

3. In `gatsby-config.js` under `gatsby-source-wordpress` change `baseUrl` to the url of your WordPress install. This must be a working site. Local dev sites are ok but they must be running.

4. To expose your WordPress menus to the REST API, install and activate the [WP API Menus](https://wordpress.org/plugins/wp-api-menus/) plugin on your WordPress site.

5. In your project directory, run: `gatsby develop`

6. Sweetness 🚀🚀🚀🚀🚀🚀🚀🚀

🔑 If you want to get your hands dirty right away, skip steps 2 & 3 above and just run `gatsby develop` from your project directory. It will grab the WordPress data from the demo site. You can play around with the code to your heart's content.

####  🐙 Dive deeper:
- [Using Gatsby with WordPress](https://www.gatsbyjs.com/guides/wordpress/)
- [WordPress Source Plugin Tutorial](https://www.gatsbyjs.org/docs/wordpress-source-plugin-tutorial/)
- [Sourcing from WordPress](https://www.gatsbyjs.org/docs/sourcing-from-wordpress/)

## 👉 What is this?

**Plate for Gatsby** is a super-cool, minimal-set-up custom Gatsby starter to link a current WordPress install to a Gatsby-created site. 

#### GatsbyJS + WordPress = 💯

Use WordPress as your content source with a Gatsby front end and be up-and-running in seconds.

### Features
- includes main GraphQL queries for pages, posts, post comments, and menus *already set up*. Just add your source url to the project and your posts, pages and menus are there automagically. We love automagically.

- pre-built, ready-to-use components: header, page templates, post templates, footer, menus, comments.

- modular scss/sass with global and class-based styles. Want to use CSS Modules? Gatsby has [CSS Module support built-in](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/) and it works with scss out-of-the-box.

More than just a theme, **Plate for Gatsby** includes the main GraphQL queries for posts, pages, menus built-in and ready-to-go. well as your main components: page, post, header, main, sidebar, footer  along with mapped, modular scss so you can start customizing your components and templates right away. 

It's bare-bones but with some smart defaults so you aren't starting from absolutely nothing. The component/HTML structure is mirrored by the default CSS/SCSS classes in an intelligent way to help speed up development and keep everything organized.

At [studio.bio](https://studio.bio/) we really love working with React and once we tried Gatsby we were hooked. By keeping our clients' WordPress back end while moving to React/Gatsby for the front end, it's the best of both worlds combining the ease-of-use of WordPress with the performance of JavaScript.

To aid in these types of projects, we needed a ready-to-go starter theme so it made perfect sense to adapt our existing Plate WordPress starter theme for use with Gatsby.

## Use Cases
- for existing mostly static WordPress sites with a lot of content that could benefit from serverless performance. 
- you have clients whose teams are comfortable entering their content in WordPress but need a more performant site.
- to create a site that uses a subset another site's WordPress data.
- those wanting to try out the latest and greatest.

### Sounds...erm...*cool*...I think?

If you're not familiar with Gatsby, React, GraphQL but are curious, see the <a href="#background">Background</a> section below.

## Requirements
In order for Plate to work with Gatsby and to help other developers, we had to set some initial ground rules for the Gatsby version of Plate:

1. **Use as few dependencies as possible.** Nothing is worse than wanting to dive in to a project and having to spend hours loading all the required modules. Ain't nobody got time for that!
2. **Maintain the same HTML structure as the traditional WordPress Plate theme wherever possible.** This includes the markup and classes (classNames) which we've tried to mirror from Plate.
3. Keep the modular scss structure of Plate along with media queries.
4. Maintain the spirit of Plate by providing useful and informative comments throughout.

With these requirements, along with the original Plate theme, we hope that Plate for Gatsby can be a great springboard for advanced developers as well as a learning tool for not-so-experienced ones.

To do this, Plate needs your help! Contribute to the project, give feedback or do some testing. The more input, the better this will be.

<span id="background"></span>
## Background
[Gatsby](https://gatsbyjs.org) is a site builder using [React](https://reactjs.org) plus [GraphQL](https://graphql.org) and is perfect for quickly building static (or not-so-static) websites. 

With WordPress, this type of site is called *headless* because the front end (the site that is visited on the web) is completely decoupled from the back end (where you enter and save your content).

Thus using this setup, the site content is entered using the WordPress admin we know and love, yet with Gatsby, the built front end takes advantage of all the latest features of the modern JavaScript web: serverless, optimized, compressed pages that load instantly. What's more, site edits (both content and design) are updated __in real time__. 

## Why did we choose Gatsby? 
While there are many other examples of headless WordPress React starters and progressive web app frameworks out there (many of which we experimented with and are really good), we decided to port our WordPress theme to Gatsby for the following reasons:

- easy set up
- fun to work with
- great documentation
- rapid adoption by the React/JavaScript community
- thriving ecosystem
- ready-to-go [WordPress source plugin](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/)

## What Plate for Gatsby doesn't include
- **Search.** As a search index has to be custom-built for each site and not all sites will need it, we've left search out. To include search in your Gatsby project, see the [Adding Search docs](https://www.gatsbyjs.org/docs/adding-search/).
- **Menus more than one level deep.** You'll have to build your own drop-down menus if you have a nested navigation.
- **Unique permalink structures.** If your WordPress install has permalinks like `/%category%/%postname%/` you'll have to set up that kind of routing yourself, but it can be done!
- **Forms.** Gatsby doesn't support forms out-of-the-box but [Netlify can](https://codebushi.com/form-handling-gatsby-netlify/).

## Other stuffs
This is an alpha release and as such use with caution on any production sites. While Gatsby is on v2 it still is maturing and thus things are likely to break or change.

## Next Steps for Plate for Gatsby
- Add documentation/wiki
- Test deployments on other services than Netlify
- For 2.0: move all queries to GraphQL/WPGraphQL. While Gatsby uses GraphQL, it is still querying from the WP REST API which is somewhat limited.

## 🧡 Thank You
Thanks to:
- the entire GatsbyJS team, especially @KyleAMathews, @pieh, @ahmadawais.
- @jasonbahl and the WPGraphQL team
- All the OSS peoples making the world a better place

