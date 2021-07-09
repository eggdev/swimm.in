import React from 'react';

import Box from './Box';

export default {
  title: 'Components/Box',
  component: Box,
};

const Template = (args) => <Box {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Box',
};
