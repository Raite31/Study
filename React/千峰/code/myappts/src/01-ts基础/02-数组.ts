// var list: string[] = ['1', '2', '3', 4];
var list: string[] = ['1', '2', '3'];
list.push('add');

// for (var i in list) {
// 	list[i].subscribe(0, 1);
// }

var list2: number[] = [1, 2, 3];
list2.push(4);

// 注意这两种的区别;
var list3: (number | string)[] = [1, 2, 3, 'dwa', 'dw'];
var list4: number[] | string[] = [1, 2, 3];

// ==================== 泛型写法
var mylist1: Array<number> = [1, 2, 3];
var mylist2: Array<string> = ['1', '2', '3'];
var mylist3: Array<number | string> = [1, '2', 3];

export default {};
