import React from 'react';

import {theme} from '../packages/react-components/src/theme';
import GlobalStyles from '../packages/react-components/src/GlobalStyles';
import ThemeProvider from '../packages/react-components/src/ThemeProvider';

const withThemeProvider = (Story, context) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Story {...context} />
  </ThemeProvider>
);

export const decorators = [withThemeProvider];

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {expanded: true},
  layout: 'centered',
  options: {
    storySort: {
      order: ['Atoms', 'Molecules', 'Organisms'],
    },
  },
};
