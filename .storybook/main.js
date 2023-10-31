/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@chakra-ui/storybook-addon",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  features: {
    emotionAlias: false,
  },
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.mjs$/,
  //     include: /node_modules/,
  //     type: 'javascript/auto',
  //   })

  //   return config
  // },
};
export default config;
