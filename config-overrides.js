const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@assets': 'src/assets',
    '@pages': 'src/pages',
    '@components': 'src/components',
    '@context': 'src/context',
  })(config);

  return config;
};
