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

        <link rel="stylesheet"
            href='https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css'>
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet"
          href="https://code.getmdl.io/1.3.0/material.indigo-pink.min.css">
       </head>
      <body>
        <div id="app">${content}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(state)};
        </script>
        <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
        <script id='bundle' src="http://localhost:8080/bundle.js" lang='${language}'></script>
      </body>
      </html>
  `;
}
