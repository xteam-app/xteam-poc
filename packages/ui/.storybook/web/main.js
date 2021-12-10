module.exports = {
  // refs: {
  //   'design-system': {
  //     title: "Storybook Design System",
  //     // url: "https://5ccbc373887ca40020446347-yldsqjoxzb.chromatic.com",
  //     // expanded: false // optional, true by default
  //     url: 'http://localhost:7007',
  //   }
  // },
  'stories': [
    '../../src/**/*.stories.mdx',
    '../../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web'
  ],
  'framework': '@storybook/react',
  features: {
    storyStoreV7: true
  }
};
