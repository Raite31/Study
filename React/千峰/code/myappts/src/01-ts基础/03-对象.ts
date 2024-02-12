// 接口
interface IObj {
	name: string;
	age: number;
	location?: string; // 可选属性
	[propName: string]: any; // 当有一大堆数据时，其他的都不关心
}

var obj1: IObj = {
	name: 'lee',
	age: 20,
	// location: '北京',
};

console.log(obj1.age);

// console.log(obj1.name.map());
export default {};
