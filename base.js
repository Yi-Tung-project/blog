
function initial() {
  /** set the page's title **/
  document.title = "測試網站";
  /** set the page's icon **/
  var link = document.querySelector("link[rel*='icon']")
			|| document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = './images/bIcon.ico';
  document.getElementsByTagName('head')[0].appendChild(link);
}

