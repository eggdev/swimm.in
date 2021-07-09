import React from 'react';

import Container from './Container';

export default {
  title: 'Components/Container',
  component: Container,
};

const Template = (args) => <Container {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Container',
};
