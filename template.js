export default ({content, state}) => {
  return `
      <!DOCTYPE html>
      <html lang="he">
      <head>
        <meta charset="utf-8" />
        <title>תל אביב-יפו TLV OpenData</title>
        <link rel='icon' type='image/x-icon' href='../favicon.ico' />
        <link rel='shortcut icon' href='../favicon.ico' />
       </head>
      <body>
        <div id="app">${content}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(state)};
        </script>
        <script src="http://localhost:8080/bundle.js"></script>
      </body>
      </html>
  `;
}
