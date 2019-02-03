import express from 'express'
import React from 'react'
import App from './Components/App'
import ReactDOMServer from 'react-dom/server'
import { JssProvider, SheetsRegistry } from 'react-jss'
import compression from 'compression'


function handleRender(req, res) {

  const sheetsRegistry = new SheetsRegistry()
  const html = ReactDOMServer.renderToString(
    <JssProvider registry={sheetsRegistry}>
      <App />
    </JssProvider>
  )
  const css = sheetsRegistry.toString()
  res.send(renderFullPage(html, css))
}


function renderFullPage(html, css) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style id="jss-server-side" rel="stylesheet">${css}</style>
    <title>Blog - React</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script src="/bundle.js"></script>
  </body>
  </html>
  `
}

const app = express()
app.use(express.static('dist/public'))
app.use(compression())

app.use(handleRender)

const port = 3002
app.listen(port, () => { console.log(`express now running at http://localhost:${port}`) })