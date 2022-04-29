const withTM = require('next-transpile-modules')([
  '@xteam-app/msp',
  '@xteam-app/core',
  '@xteam-app/ui'
]);

module.export = withTM({
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web'
    };
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions
    ];
    return config;
  }
});
