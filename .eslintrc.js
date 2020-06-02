module.exports = {
  root: true,
  extends: '@react-native-community', "react-hooks",
  
  'rules': {
    'no-unused-vars': ['error', { "args": "none" }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
    //'semi': ["error", "never"],
  }
};
