const html = ({ menu }: { menu: string }) => `
  <!DOCTYPE html>
  <html>
    <head>
    <link rel="stylesheet" type="text/css" href="./public/css/bulmaswatch.min.css">
    </head>
    <body style="margin:0">
      <div class="header">
        <div id="menu">${menu}</div>      
      </div>
    </body>
    <script src="./public/js/header.js" defer></script>
  </html>
`;

export default html;
