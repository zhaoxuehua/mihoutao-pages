window.onload = function() {
	zTime();
	setInterval(zTime, 1000);
}

function zTime() {
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var date = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();
	var week = now.getDay();
	function two(n){
		return	n<= 9 ? '0' + n : n;
	}
	switch(week) {
		case 0:
			week = '日';
			break;
		case 1:
			week = '一';
			break;
		case 2:
			week = '二';
			break;
		case 3:
			week = '三';
			break;
		case 4:
			week = '四';
			break;
		case 5:
			week = '五';
			break;
		case 6:
			week = '六';
			break;
	}
	document.getElementById('top').innerHTML = two(hour) + '时' + two(min) + '分' + two(sec) + '秒';
	document.getElementById('und').innerHTML = year + '年' + two(month) + '月' + two(date) + '日  星期' + week;
}