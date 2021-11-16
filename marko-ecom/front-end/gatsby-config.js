/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: `Обувь Оптом`,
    description: `Обувь оптом от производителя компании Марко`,
    titleTemplate: `%s | Обувь Оптом`,
    url: `https://marko-opt.ru`,
    image:`/mainimg.png`,
    twitterUsername: '@GenrichSarbaj'
  },

  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MRZX2GB",
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://marko-opt.herokuapp.com`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`category`],
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "C1YZiuDw5ar6awWLIrA3C3G0edYHymahKnGbiYKKTdA",
        spaceId: "xyy8gzypyva1",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
