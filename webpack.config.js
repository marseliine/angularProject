module.exports = {
  devServer: {
    devMiddleware: {
      index: false, // specify to enable root proxying
    },
    proxy: {
      context: () => true,
      target: 'http://172.23.113.31:6543/airports',
    },
  },
};
