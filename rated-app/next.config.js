module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

// module.exports = {
//   future: {
//     webpack5: true,
//   },
//   webpack: function (config, options) {
//     config.experiments = {};
//     return config;
//   },
// };
