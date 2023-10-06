import type { Preview } from "@storybook/react";
import '@/styles/globals.scss'
import '@/styles/post.scss'
import '@/styles/styles.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
