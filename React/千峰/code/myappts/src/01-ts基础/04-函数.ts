// function test1(a: string, b: string, c?: number) {
// 显式说明这个函数返回值是string类型，上面只是隐式地推断出返回值是string类型
// 这里的c是可传可不传，要传就得传number的意思
function test1(a: string, b: string, c?: number): string {
	console.log(a.substring(0, 1) + b.substring(0, 1));

	return a.substring(0, 1) + b.substring(0, 1);
}

// 在调用时，只需要把鼠标放在函数名上，就能看到该函数的参数类型;
test1('aaa', 'bbb');

var myname: string = test1('aaa', 'bbb');
console.log(myname);

interface IFunc {
	(a: string, b: string, c?: number): string;
}

var myfunc2: IFunc = function test1(a: string, b: string, c?: number): string {
	console.log(a.substring(0, 1) + b.substring(0, 1));

	return a.substring(0, 1) + b.substring(0, 1);
};

interface Iobj {
	name: string;
	age: number;
	getName: (name: string) => string;
}

var obj: Iobj = {
	name: 'lee',
	age: 100,
	getName: (name: string) => {
		return name;
	},
};

obj.getName('123');

export default {};
