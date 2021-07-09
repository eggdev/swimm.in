module.exports = (api) => {
  api.cache(true);
  return {
    babelrcRoots: ['.', 'packages/*', 'test'],
    presets: ['@babel/preset-env', '@babel/preset-react'],
  };
};
