
var useCookie = false;

function getBottomNavbar() {
	if(useCookie) {
		var tmp = new BottomNavbar_method();
		var activePage = useCookie?tmp.getCookie('activePage'):null;
	}
	
	var content = '';
	content += '<div class="bottom-navbar">';
	content += '<a id="CVItem" href="#" onClick=onClickEvent("Home")'+(useCookie && activePage=='Home'?' class="active"':'')+'>簡歷</a>';
	content += '<a id="AutobiographyItem" href="#" onClick=onClickEvent("Autobiography") '+(useCookie && activePage=='Autobiography'?' class="active"':'')+'>自傳</a>';
	content += '<a id="ResumeItem" href="#" onClick=onClickEvent("Resume")'+(useCookie && activePage=='Resume'?' class="active"':'')+'>履歷表</a>';
	content += '</div>';
	return content;
}

function onClickEvent(x) {
	var tmp = new BottomNavbar_method();
	if(useCookie) {
		tmp.setCookie('activePage',x);
	}
	tmp.jumpTo(x+'.html');
}

class BottomNavbar_method {
	constructor() {
		
	}
	
	setCookie(cookieName,val) {
		document.cookie = cookieName+'='+val;
	}
	
	getCookie(cookieName) {
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
	
	jumpTo(url) {
		document.location.href = url;
	}
}