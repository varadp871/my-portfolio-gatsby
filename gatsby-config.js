/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Portfolio_VP`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss",
    'gatsby-plugin-apollo',
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Montserrat`,
            file: `https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap`,
          },
        ],
      }
    }
  ]
};