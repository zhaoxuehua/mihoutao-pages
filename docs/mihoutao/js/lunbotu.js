window.onload = function() {
		var obox = document.getElementById('box'); //拿到大盒子
		var oli = document.getElementsByTagName('li');
		var ol = document.getElementById('left');
		var or = document.getElementById('right');
		var oa = document.getElementsByTagName('a'); //拿到所有的a连接
		var k = 0; //作为a的下标循环
		var timer = setInterval(slider, 3000); //每隔1s循环一次
		function slider() {
			oa[k].style.display = 'none'; //先让所有的a都不显示
			k++; //下标加1
			k == 4 ? k = 0 : k; //下标如果为4那就变成0
			oa[k].style.display = 'block'; //然后显示图片
			diandian(); //圆点函数
		}
		//改变点点的背景颜色
		function diandian() {
			for(var j = 0; j < oli.length; j++) { //点点的长度
				if(k == j) { //如果点点的下标等于图片的下标
					oli[j].style.background = 'red'; //背景变成红色
				} else {
					oli[j].style.background = '#000'; //不是当前的背景是黑色
				}
			}
		}
		//轮播和鼠标选择点点思路都是，先不显示，只有下标相等了才把display设置为block
		//鼠标选择点点
		for(var i = 0; i < oli.length; i++) { //遍历4个小点点
			oli[i].onmouseover = function() { //鼠标移到小点点
				oa[k].style.display = 'none'; //其他图片隐藏
				for(var j = 0; j < oli.length; j++) {
					if(this == oli[j]) { //this指的是当前的活动对象，在这里的活动对象就是oli[i]
						k = j; //让图片的下标等于当前点点的下标
					}
				}
				oa[k].style.display = 'block';
				diandian(); //改变点点的背景图片
			}
		}
		obox.onmouseover = function() {
			timer = clearInterval(timer);
		}
		obox.onmouseout = function() {
			timer = setInterval(slider, 3000);
		}
		ol.onclick = function() {
			oa[k].style.display = 'none';
			k--;
			if(k < 0) {
				k = oa.length - 1;
			}
			oa[k].style.display = 'block';
			diandian();
		}
		or.onclick = function() {
			oa[k].style.display = 'none';
			k++;
			if(k > oa.length-1) {
				k = 0;
			}
			oa[k].style.display = 'block';
			diandian();
		}
	}