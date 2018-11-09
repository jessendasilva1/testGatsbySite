module.exports = {
    siteMetadata: {
        title: "Title from siteMetadata",
    },
    plugins: [
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography.js`,
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "GatsbyJS",
          short_name: "GatsbyJS",
          start_url: "/",
          background_color: "#6b37bf",
          theme_color: "#6b37bf",
          display: "minimal-ui",
          icon: "src/images/icon.jpg", // This path is relative to the root of the site.
        },
      },
      `gatsby-plugin-netlify-cms`,
      `gatsby-plugin-emotion`,
      `gatsby-transformer-remark`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
    ],
  }