module.exports = {
  extends: [
    "react-app",
    "react-app/jest"
  ],
  rules: {
    'import/no-anonymous-default-export': 'off',
    'array-callback-return': 0,
    'react-hooks/exhaustive-deps': 0
  }
}
