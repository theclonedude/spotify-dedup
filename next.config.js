const withSourceMaps = require('@zeit/next-source-maps');

const repoNameURIPrefix = process.env.NODE_ENV === 'production' ? '' : '';

const AvailableLanguages = [
  'de',
  'en',
  'es',
  'fr',
  'it',
  'nl',
  'pt',
  'sv',
];

const config = {
  assetPrefix: repoNameURIPrefix,
  env: {
    linkPrefix: repoNameURIPrefix,
  },
  webpack(config, options) {
    return config;
  },
  i18n: {
    locales: AvailableLanguages,
    defaultLocale: 'en'
  }
};

module.exports = withSourceMaps(config);
