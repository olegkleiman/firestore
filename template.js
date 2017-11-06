export default ({content, state, language}) => {
  return `
      <!DOCTYPE html>
      <html dir="rtl" lang="he">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <title>תל אביב-יפו TLV OpenData</title>
        <link rel='icon' type='image/x-icon' href='../favicon.ico' />
        <link rel='shortcut icon' href='../favicon.ico' />
        <link href='styles.css' rel='stylesheet' />

        <link href='material.rtl.css' rel='stylesheet' />
       </head>
      <body>
        <div id="app">${content}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(state)};
        </script>
        <script id='bundle' src="http://localhost:8080/bundle.js" lang='${language}'></script>
      </body>
      </html>
  `;
}
