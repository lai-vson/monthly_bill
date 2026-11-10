/**
 * Serves index.html as an Apps Script web app.
 * All bill reading happens in the browser; nothing is sent to this script.
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Bill Split')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
