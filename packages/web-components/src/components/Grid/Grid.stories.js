import React from 'react';

import Grid from './Grid';

export default {
  title: 'Components/Grid',
  component: Grid,
};

const Template = (args) => <Grid {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Grid',
};
