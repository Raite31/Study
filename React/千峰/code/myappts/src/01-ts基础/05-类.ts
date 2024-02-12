class Bus {
	public name = 'lee'; // 公有属性
	private _list: any = []; // 私有变量 子类无法引用
	protected age = 100; // 仅当前类和子类可引用

	subscribe(cb: any) {
		this._list.push(cb);
	}

	dispatch() {
		this._list.forEach((cb: any) => {
			cb && cb();
		});
	}
}

class Child extends Bus {
	aaa() {
		console.log(this.name, this.age);
	}
}

var obj = new Bus();
obj.subscribe(() => {});

// obj._list = [];

// console.log(obj._list);

export default {};
