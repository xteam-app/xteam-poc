import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from '../../src';

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    // default: 'dark',
    values: [
      { name: 'light', value: '#eeeeee' },
      { name: 'dark', value: '#1f2937' }
      // { name: "light", value: "#eeeeee" },
      // { name: "dark", value: "#333333" },
      // { name: "white", value: "#ffffff" },
      // { name: "gray", value: "#cccccc" },
      // { name: "black", value: "#000000" }
    ]
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  viewport: {
    defaultViewport: 'iphone12',
    viewports: INITIAL_VIEWPORTS
  },
  options: {
    storySort: {
      methods: 'alphabetical',
      order: [
        'Intro',
        'Elements',
        // ['View', 'Text', 'Button'],
        'Components',
        'Layouts',
        'Screens',
        'Experiments',
        '*',
        'Example'
      ]
    }
  }
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  )
];
