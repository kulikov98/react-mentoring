import React from "react";
import "../src/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "dark",
  },
};

export const decorators = [
  (Story) => (
    <div style={{ maxWidth: "1200px" }}>
      <Story />
    </div>
  ),
];
