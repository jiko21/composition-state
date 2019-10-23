module.exports = {
  'transpileDependencies': [
    'vuetify',
  ],
  'publicPath': process.env.NODE_ENV === 'production' ?
    '/composition-state/' : '/',
  'assetsDir': '',
  'outputDir': 'dist',
};
