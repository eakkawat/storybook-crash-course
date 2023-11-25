import Button from './Button.jsx';
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button variant='primary'>Submit</Button>;
export const Secondary = () => <Button variant='secondary'>Submit</Button>;
export const Success = () => <Button variant='success'>Submit</Button>;
export const Danger = () => <Button variant='danger'>Submit</Button>;
