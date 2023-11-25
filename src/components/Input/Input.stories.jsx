import Input from './Input';

export default {
  title: 'form/control/Input',
  component: Input,
  tags: ['autodocs'],
};

export const Large = () => (
  <Input type='text' placeholder='Firstname' size='lg' />
);
export const Medium = () => (
  <Input type='text' placeholder='Firstname' size='md' />
);
export const Small = () => (
  <Input type='text' placeholder='Firstname' size='sm' />
);

Large.storyName = 'Large input';
