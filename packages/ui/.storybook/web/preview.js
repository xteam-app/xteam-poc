import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
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
        ['View', 'Text', 'Button'],
        'Components',
        'Layouts',
        'Pages',
        'Experiments',
        '*',
        'Example'
      ]
    }
  }
};
