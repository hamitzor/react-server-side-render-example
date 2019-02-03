module.exports = {
  presets: [
    [
      "@babel/env",
      {
        "useBuiltIns": "entry",
        "targets": {
          "browsers": "> 1%, not op_mini all",
          "node": 10
        }
      }
    ],
    "@babel/react"
  ],
  plugins: [
    "@babel/proposal-class-properties"
  ]
}