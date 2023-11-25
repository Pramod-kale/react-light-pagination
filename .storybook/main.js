// const path = require("path");

// module.exports = {
//     stories: ["../src/**/*.stories.tsx"],
//     // Add any Storybook addons you want here: https://storybook.js.org/addons/
//     addons: [],
//     webpackFinal: async (config) => {
//         config.module.rules.push({
//             test: /\.scss$/,
//             use: ["style-loader", "css-loader", "sass-loader"],
//             include: path.resolve(__dirname, "../")
//         });

//         config.module.rules.push({
//             test: /\.(ts|tsx)$/,
//             loader: require.resolve("babel-loader"),
//             options: {
//                 presets: [["react-app", { flow: false, typescript: true }]]
//             }
//         });
//         config.resolve.extensions.push(".ts", ".tsx");

//         return config;
//     }
// };
const path = require('path');

module.exports = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
    ],
    webpackFinal: async (config) => {
        // Add SCSS loader
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        });

        return config;
    },
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
};

// /** @type { import('@storybook/react-webpack5').StorybookConfig } */
// const config = {
//     stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
//     addons: [
//         "@storybook/addon-links",
//         "@storybook/addon-essentials",
//         "@storybook/addon-onboarding",
//         "@storybook/addon-interactions",
//     ],
//     framework: {
//         name: "@storybook/react-webpack5",
//         options: {},
//     },
//     docs: {
//         autodocs: "tag",
//     },
// };
// export default config;
