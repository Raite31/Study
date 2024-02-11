import React, { Component } from 'react';

// ====================== part 1
var obj = {
	name: 'lee',
};
// 复制了一把钥匙
var obj2 = obj;
// 修改的都是同一个仓库的内容，因此叫浅拷贝
obj2.name = 'kang';
console.log(obj, obj2);

// ====================== part 2
var myobj = {
	name: 'lee',
	arr: [1, 2, 3],
};
// 只有一层的情况下，成功“深拷贝”，但不是真正意义上的深拷贝
var myobj2 = { ...myobj };
myobj2.name = 'kang';
myobj2.arr.push(4);
console.log(myobj, myobj2);

// ====================== part 3
var jsonobj = {
	name: 'lee',
	arr: [1, 2, 3],
};
// 算深拷贝，但致命缺点：这个对象不能有undefined和function，否则会有不可预知的错误
var jsonobj2 = JSON.parse(JSON.stringify(jsonobj));
jsonobj2.name = 'kang';
jsonobj2.arr.push(4);
console.log(jsonobj, jsonobj2);

// ====================== part 3
// 递归深复制，性能不好

// 最终方案：immutable，只修改发生变化的地方

export default class App extends Component {
	render() {
		return <div>app</div>;
	}
}
