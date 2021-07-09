import React from 'react';
import MuiContainer from '@material-ui/core/Container';

/**
 *  Container Component
 * @param {bool} disableGutters If true, the left and right padding is removed.
 * @param {bool} fixed Set the max-width to match the min-width of the current breakpoint. This is useful if you'd prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport. It's fluid by default.
 * @param {string} maxWidth Determine the max-width of the container. The container width grows with the size of the screen. Set to false to disable maxWidth.
 */
const Container = (props) => <MuiContainer {...props} />;

export default Container;
