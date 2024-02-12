interface Ifunc {
	getName: () => string;
	getAge: () => number;
}

// 实现接口
class A implements Ifunc {
	a1() {}
	a2() {}
	getName() {
		return 'AAA';
	}
	getAge() {
		return 10;
	}
}
class B implements Ifunc {
	b1() {}
	b2() {}
	getName() {
		return 'BBB';
	}
	getAge() {
		return 10;
	}
}
// class C implements Ifunc {
// 	a1() {}
// 	a2() {}
// }

function init(obj: Ifunc) {
	obj.getName();
}

var objA = new A();
var objB = new B();
// var objC = new C();

init(objA);
init(objB);

export default {};
