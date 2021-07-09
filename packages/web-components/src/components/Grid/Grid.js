import React from 'react';
import PropTypes from 'prop-types';

/**
 *  Grid Component
 * @param alignContent Defines the align-content style property. It's applied for all screen sizes.
 * @param alignItems Defines the align-items style property. It's applied for all screen sizes.
 * @param container If true, the component will have the flex container behavior. You should be wrapping items with a container.
 * @param direction Defines the flex-direction style property. It is applied for all screen sizes.
 * @param item If true, the component will have the flex item behavior. You should be wrapping items with a container.
 * @param justify Defines the justify-content style property. It is applied for all screen sizes.
 * @param lg Defines the number of grids the component is going to use. It's applied for the lg breakpoint and wider screens if not overridden.
 * @param md Defines the number of grids the component is going to use. It's applied for the md breakpoint and wider screens if not overridden.
 * @param sm Defines the number of grids the component is going to use. It's applied for the sm breakpoint and wider screens if not overridden.
 * @param spacing Defines the space between the type item component. It can only be used on a type container component.
 * @param wrap Defines the flex-wrap style property. It's applied for all screen sizes.
 * @param xl Defines the number of grids the component is going to use. It's applied for the xl breakpoint and wider screens.
 * @param xs Defines the number of grids the component is going to use. It's applied for all the screen sizes with the lowest priority.
 * @param zeroMinWidth If true, it sets min-width: 0 on the item. Refer to the limitations section of the documentation to better understand the use case.
 */
const Grid = (props) => <>Grid</>;

Grid.propTypes = {
  alignContent: PropTypes.oneOf([
    'stretch',
    'center',
    'flex-start',
    'flex-end',
    'space-between',
    'space-around',
  ]),
  alignItems: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'stretch',
    'baseline',
  ]),
  container: PropTypes.bool,
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),
  item: PropTypes.bool,
  justify: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
  lg: PropTypes.oneOf([
    false,
    'auto',
    true,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),
  md: PropTypes.oneOf([
    false,
    'auto',
    true,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),
  sm: PropTypes.oneOf([
    false,
    'auto',
    true,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),
  spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  xl: PropTypes.oneOf([
    false,
    'auto',
    true,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),
  xs: PropTypes.oneOf([
    false,
    'auto',
    true,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ]),
  zeroMinWidth: PropTypes.bool,
};

export default Grid;
