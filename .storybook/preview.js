/** @type { import('@storybook/react').Preview } */
const theme = require('../theme/chakra-ui-theme')

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const parameters = {
  chakra: {
    theme,
  },
}
