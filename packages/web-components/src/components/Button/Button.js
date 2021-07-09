import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@material-ui/core/Button';

/**
 *
 * @param {string} label
 * @param {string} variant
 * @param {string} color
 * @param {function} onClick
 */
const Button = ({label, ...rest}) => <MuiButton {...rest}>{label}</MuiButton>;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
