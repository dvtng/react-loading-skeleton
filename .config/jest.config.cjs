const path = require("path");

module.exports = {
    testEnvironment: "jsdom",

    rootDir: path.resolve(__dirname, ".."),
    testMatch: ["**/__tests__/**/*.test.ts?(x)"],

    transform: {
        "^.+\\.(t|j)sx?$": ["@swc/jest"],
    },
};
