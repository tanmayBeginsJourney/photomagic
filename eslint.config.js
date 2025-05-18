import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier"; // Renamed to avoid conflict

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  { // Specific configuration for React
    files: ["**/*.{js,jsx}"], // Target JavaScript and JSX files
    ...pluginReactConfig, // Spread React recommended config
    settings: {
      react: {
        version: "detect" // Automatically detect the React version
      }
    },
    rules: {
      ...pluginReactConfig.rules, // Ensure all React rules are included
      "react/react-in-jsx-scope": "off", // Not needed with new JSX transform
      "react/prop-types": "off" // Optional: disable prop-types
    }
  },
  { // Configuration for React Hooks
    plugins: {
      "react-hooks": pluginReactHooks
    },
    rules: pluginReactHooks.configs.recommended.rules
  },
  { // Configuration for Prettier
    plugins: {
      prettier: pluginPrettier
    },
    rules: {
      ...configPrettier.rules, // Apply Prettier recommended rules (disables conflicting ESLint rules)
      "prettier/prettier": "warn" // Show Prettier issues as warnings
    }
  },
  { // Ignore build output
    ignores: ["dist/", "node_modules/"]
  }
];
