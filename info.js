
function initial() {
  /** set the page's title **/
  document.title = "測試網站";
  /** set the page's icon **/
  var link = document.querySelector("link[rel*='icon']")
			|| document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = './images/icon.jpg';
  document.getElementsByTagName('head')[0].appendChild(link);
}

function getHeaderContent() {
	var content = '';
	content += '<nav class="navbar navbar-dark shadow-bottom navbar-expand-md">';
	content += '<div>';
	content += '<ul class="navbar-nav">';
	content += '<li><a href="#" class="nav-link" onClick=jumpTo("Home.html")>首頁</a></li>';
	content += '<li><a href="#" class="nav-link" onClick=jumpTo("Resume.html")>履歷表</a></li>';
	content += '<li><a href="#" class="nav-link" onClick=jumpTo("Autobiography.html")>自傳</a></li>';
	content += '<li><a href="#" class="nav-link" onClick=jumpTo("YummyList.html")>口袋美食</a></li>';	
	content += '</ul>';
	content += '</div>';
	content += '</nav>';
	return content;
}

function getFooterContent() {
	var content = '';
	content += '<div class="footer-title">聯絡資訊</div>';
	content += '</div>';
//	content += '<div class="footer-content">信箱：';
//	content += '<span class="footer-keyword"></span>';
//	content += '</div>';
	return content;
}

function jumpTo(url) {
	document.location.href = url;
}

function getCookie(cookieName) {
	var name = cookieName + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') {
			c = c.substring(1);
		}
		if(c.indexOf(name) == 0) {
			return c.substring(name.length,c.length);
		}
	}
	return "";
}
