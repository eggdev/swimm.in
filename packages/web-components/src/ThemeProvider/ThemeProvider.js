import React from 'react';
import PropTypes from 'prop-types';
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/styles';

const ThemeProvider = ({children, theme}) => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
  </StylesProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
};

export default ThemeProvider;
