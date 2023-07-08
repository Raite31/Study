var obj = {
	a: 1,
	b: 2,
};

// 得到属性描述符
var desc = Object.getOwnPropertyDescriptor(obj, 'a');

// 设置属性描述符
Object.defineProperty(obj, 'a', {
	value: 10,
	writable: false, // 不可重写
	enumerable: false, // 不可遍历
	configurable: false, // 不可修改描述符本身
});

// console.log(obj.a);

for (var key in obj) {
	// console.log(key);
}

var keys = Object.keys(obj);
console.log(keys);

