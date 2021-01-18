
function getNavbar() {
	var content = '';
	content += '<nav class="navbar navbar-expand-md navbar-dark navbar-theme">';
	/**網站名稱or圖示**/
//	content += '<a class="navbar-brand" href="#">測試網站</a>';
	content += '<img src="images/wIcon.ico" />';
	/**漢堡選單**/
	content += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsContent" aria-controls="navbarsContent" aria-expanded="false" aria-label="Toggle navigation">';
    content += '<span class="navbar-toggler-icon"></span>';
	content += '</button>';
	/**選單內容**/
	content += '<div class="collapse navbar-collapse" id="navbarsContent">';
    content += '<ul class="navbar-nav mr-auto">';
    content += '<li class="nav-item">';
    content += '<a class="nav-link" href="#" onClick=jumpTo("Home.html")>首頁 <span class="sr-only">(current)</span></a>';
    content += '</li>';
    content += '<li class="nav-item">';
    content += '<a class="nav-link" href="#" onClick=jumpTo("Resume.html")>履歷表</a>';
    content += '</li>';
    content += '<li class="nav-item">';
    content += '<a class="nav-link" href="#" onClick=jumpTo("Autobiography.html")>自傳</a>';
    content += '</li>';
    content += '<li class="nav-item dropdown">';
    content += '<a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">口袋美食</a>';
    content += '<div class="dropdown-menu" aria-labelledby="dropdown04">';
    content += '<a class="dropdown-item" href="#" onClick=jumpTo("MealList.html")>主&emsp;餐</a>';
    content += '<a class="dropdown-item" href="#" onClick=jumpTo("SneakList.html")>零&emsp;嘴</a>';
    content += '<a class="dropdown-item" href="#" onClick=jumpTo("DessertList.html")>甜&emsp;點</a>';
    content += '</div>';
    content += '</li>';
    content += '</ul>';
	content += '</div>';
	/************/
	content += '</nav>';
	return content;
}
