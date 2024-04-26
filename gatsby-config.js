module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://www.marinaruss.dev", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "Marina Russ | Developer Portfolio", // Used in manifest.json
          shortName: "Developer Portfolio", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        // blogSettings: {
        //   path: "/blog", // Defines the slug for the blog listing page
        //   usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        // },
      },
    },
  ],
};
