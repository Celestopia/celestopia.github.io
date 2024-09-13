function write_topnav() {
    var htmlText = '';
    htmlText += '<div class="topnav">';
    htmlText += '  <a href="/index.html">About</a>';
    htmlText += '  <a href="/blog.html">Blog</a>';
    htmlText += '  <a href="/project.html">Project</a>';
    htmlText += '  <a href="/fun.html">Fun</a>';
    htmlText += '  <a href="/test.html">Others</a>';
    htmlText += '</div>';
    htmlText += '<div class="topnav", style="position:static">';
    htmlText += '  <!--占位用-->';
    htmlText += '</div>';
    document.write(htmlText);
}
write_topnav();