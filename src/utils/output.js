export function renderToDOM(content, node = 'root') {
  document.getElementById(node).innerHTML = content
}

export function renderToString(content) {
  var html = `
    <html>
      <head>
        <title>JavaScript Tutorial</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="./build/client.bundle.js"></script>
      </body>
    </html>
  `

  return html
}
