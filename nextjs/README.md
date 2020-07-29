# Intro
A simple SSR React app using next.js

# Setup

## Development

- Run `yarn next`.

## Production

- Run `yarn next build`, then `yarn next start`.

## Generate static pages

- Run `yarn next build`, then `yarn next export`.
- Generated static pages are stored in `./out` folder.

# Technical details

## Server-side rendering (SSR) vs Client-side Rendering (CSR)

- Pages in next.js are server-side rendered. When a client requests a page, next.js rendered the page on the server, and return the HTML markup to the client. For pages that SEO are important, SSR pages are generally believed to be better than CSR application.

- Next.js also supports other ways of rendering web pages (e.g. static pages that can be served from CDN, AMP pages, and even CSR). 

## Code spliting

- Out of the box, next.js has route-based code-splitting. Each pages in the application are code-splitted into separate bundles.

- Code splitting at component level can be done using `next/dynamic`. 

## Styling

### Out of the box
- next.js supports importing of css files and css-prepocessors (e.g. sass, less).

- next.js also comes with a css-in-js feature (`style jsx`) 

### Extra configurations required
- css-in-js solutions like styled-components require webpack plugins to extract styles on server side.

## Redux

- Use `next-redux-wrapper` to create redux store, and to connect the next.js application to redux.




