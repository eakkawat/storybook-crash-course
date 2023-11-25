import Button from './Button.jsx';
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default {
  title: 'form/control/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
};
