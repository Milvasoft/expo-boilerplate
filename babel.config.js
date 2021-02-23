module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {         
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
          ], 
          root: ['./'],
          alias: {
            '@components': './src/components',
            '@routers': './src/routers',
            '@screens': './src/screens',
            '@api': './src/api',
            '@reducers': './src/reducers',
            '@actions': './src/actions',
            '@helpers': './src/helpers',
            '@assets': './src/assets',
            '@constants': './src/assets/constants',
            '@icons': './src/assets/icons',
            '@providers': './src/providers',
          }
        },
      ],
    ],
  };
};
