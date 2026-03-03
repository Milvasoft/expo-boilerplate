module.exports = {
  extends: ["expo"],
  ignorePatterns: ["/dist/*", "/node_modules/*", "/ios/*", "/android/*"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-console": ["warn", { allow: ["warn", "error"] }],
  },
};
