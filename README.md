# gatsby-source-conpass

[![npm version](https://badge.fury.io/js/gatsby-source-conpass.svg)](https://badge.fury.io/js/gatsby-source-conpass)

Source plugin for pulling data into Gatsby from [connpass](https://connpass.com) using the [conpass API](https://connpass.com/about/api/).

## Install

`npm install --save gatsby-source-conpass`

## How to use

```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-conpass`,
      options: {
        // Relative Category (optional)
        // Example: 'public'
        // {
        //   category: 'public/gatsby',
        //   relative_category: 'gatsby',
        // }
        params: {
          series_id: 7278,
          order: 2,
          count: 100,
        },
        paganate: true,
      }
    }
  ]
}
```

## How to query

```graphql
{
  allEsaPost {
    edges {
      node {
        number
        name
        body_md
        body_html
        category
        relative_category
        tags
      }
    }
  }
}
```
