module.exports = {
  siteMetadata: {
    title: `Gatsby + DevCMS Starter Blog`,
    description: `A starter blog demonstrating what Gatsby & DevCMS can do.`,
    author: `Mladen Ilic`
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `@devcms/gatsby-source`,
      options: {
        base_api_url: `http://localhost:9000`,
      },
    },
  ],
};
