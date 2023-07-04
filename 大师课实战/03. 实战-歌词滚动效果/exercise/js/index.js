/**
 * 解析歌词字符串
 * 得到一个歌词对象的数组
 * 每个歌词对象：{time: 开始时间, words: 歌词内容}
 */
function parseLrc() {
	var lines = lrc.split('\n'); // 直接就变成数组了
	var result = []; // 歌词数组
	for (var i = 0; i < lines.length; i++) {
		var str = lines[i];
		var parts = str.split(']');
		var timeStr = parts[0].substring(1);
		var obj = {
			time: parseTime(timeStr),
			words: parts[1],
		};
		result.push(obj);
	}
	return result;
}

/**
 * 将一个时间字符串解析为数字（秒）
 * @param {} timeStr 时间字符串
 * @returns
 */
function parseTime(timeStr) {
	var parts = timeStr.split(':');
	return +parts[0] * 60 + +parts[1];
}

var lrcData = parseLrc();

// 获取需要的dom
var doms = {
	audio: document.querySelector('audio'),
	ul: document.querySelector('.container ul'),
	container: document.querySelector('.container'),
};

/**
 * 计算出，在当前播放器放到第几秒的情况下
 * lrcData数组中，应该高亮现实的歌词下标
 * 若没有任何一句需要显示（就是一开始的时候），则应该返回-1
 */
function findIndex() {
	// 播放器当前时间
	var curTime = doms.audio.currentTime;
	for (var i = 0; i < lrcData.length; i++) {
		if (curTime < lrcData[i].time) {
			return i - 1;
		}
	}
	// 找遍了都没找到（说明播放到最后一句）
	return lrcData.length - 1;
}

// 界面
function createLrcElements() {
	var frag = document.createDocumentFragment(); // 文档片段
	for (var i = 0; i < lrcData.length; i++) {
		var li = document.createElement('li');
		li.textContent = lrcData[i].words;
		frag.appendChild(li); // 改动了dom树
	}
	doms.ul.appendChild(frag);
}

createLrcElements();

// 容器高度
var containerHeight = doms.container.clientHeight;
// 每个li的高度
var liHeight = doms.ul.children[0].clientHeight;
// 最大偏移量
var maxOffset = doms.ul.clientHeight - containerHeight;

/**
 * 设置ul元素的偏移量
 */
function setOffset() {
	var index = findIndex();
	var offset = liHeight * index + liHeight / 2 - containerHeight / 2;
	if (offset < 0) offset = 0;
	if (offset > maxOffset) offset = maxOffset;
	doms.ul.style.transform = `translateY(-${offset}px)`;
	// 去掉之前的active样式
	var li = doms.ul.querySelector('.active');
	if (li) li.classList.remove('active');
	// 添加样式
	var li = doms.ul.children[index];
	if (li) li.classList.add('active');

	console.log(offset);
}

// 时间变化就会触发
// doms.audio.addEventListener('timeupdate', function () {
// 	setOffset();
// });
doms.audio.addEventListener('timeupdate', setOffset); //setoffset不能加()，自行查阅理解
