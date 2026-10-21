"use strict";

var js = require("@eslint/js");
var globals = require("globals");

module.exports = [
  {
    ignores: ["node_modules/**", "try.js"],
  },
  js.configs.recommended,
  {
    files: ["game.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        module: "readonly",
        self: "readonly",
      },
    },
  },
  {
    files: ["main.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: Object.assign({ Game: "readonly" }, globals.browser),
    },
  },
  {
    files: ["scripts/**/*.js", "test/**/*.js", "eslint.config.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: globals.node,
    },
  },
];
