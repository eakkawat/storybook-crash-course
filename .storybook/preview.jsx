import Center from '../src/components/Center/Center';

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [(story) => <Center>{story()}</Center>],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
