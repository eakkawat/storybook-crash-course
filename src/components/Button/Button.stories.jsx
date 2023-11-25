import Button from './Button';

export default {
  title: 'form/control/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'success', 'danger'],
      control: { type: 'select' },
      description: 'Type of button and different background-color',
    },
    children: {
      control: { type: 'text' },
    },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Text',
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
