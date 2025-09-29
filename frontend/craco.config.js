module.exports = {
  // CRACO configuration for React app
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Custom webpack configuration can go here
      return webpackConfig;
    },
  },
  devServer: {
    port: 3000,
    open: true,
  },
  style: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};