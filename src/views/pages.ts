const html = ({ header }: { header: string }) => `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body style="margin:0">
      <div id="header">${header}</div>
    </body>
    <script src="./public/js/header.js" defer></script>
  </html>
`;

export default html;
