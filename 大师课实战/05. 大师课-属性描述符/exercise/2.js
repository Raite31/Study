// var obj = {};

// var internalValue = undefined;
// Object.defineProperty(obj, 'a', {
// 	// 读取器 getter
// 	get: function () {
// 		return internalValue;
// 	},
// 	// 设置器 setter
// 	set: function (val) {
// 		internalValue = val;
// 	},
// });

// obj.a = 123;
// console.log(obj.a); // console.log(get())
// obj.a = 3 + 2; // 运行setter函数

// obj.a = obj.a + 2;
// console.log(obj.a);

///////////////////////////////////////////////////

var obj = {};

Object.defineProperty(obj, 'a', {
	// 读取器 getter
	get: function () {
		return 123;
	},
	// 设置器 setter
	set: function (val) {
        // 复制的话直接报错提醒
		throw new Error('兄弟，这个属性是不能赋值的，你再考虑考虑');
	},
});

console.log(obj.a);
obj.a = 'abx';
