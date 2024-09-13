function write_header() {
    var htmlText = '';
    htmlText += '<div class="header">';
    htmlText += '  <h1>';
    htmlText += '    <a href="/index.html">Celestopia</a>';
    htmlText += '  </h1>';
    htmlText += '  <p>A personal webpage (test)</p>';
    htmlText += ' </div>';
    document.write(htmlText);
}
write_header();