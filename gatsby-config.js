module.exports = {
  siteMetadata: {
    title: `Karan Balani`,
    description: `Karan's Personal Portfolio Website.`,
    author: `@balanikaran`,
    twitterUsername: "karanbalani_",
    keywords:
      "karan, balani, karan balani, karanbalani, balanikaran, balani karan, accenture, finbox, krnblni, glau, glauniversity, fireauth, glaufireauth, year progress, yearprogress, yearprogressbot, karan balani accenture, karan balani finbox, karan balani instagram, karan balani twitter, karan balani developer, karan balani delhi, karan balani india, karan balani finbox, karan balani github, krnblni accenture, karan balani linkedin, krnblni instagram, krnblni linkedin, krnblni twitter, karan balani gla university, krnblni github, balani karan github, karanbalani_, karanbalanii",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`
        }
      }
    },
    
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Karan Balani`,
        short_name: `KB`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/web-kb.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-144186313-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        defer: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
