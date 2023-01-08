"use strict";
// 启动严格模式，避免意外错误

// ======================================================== 验证严格模式有多严格
// let hasDriversLicense = false
// const passTest = true
// if (passTest) hasDriversLicense = true
// if (hasDriversLicense) console.log('I can drive :D')

// const interface = 'Audio'
// const private = 534

// ============================================================== 函数写法
// function logger() {
//     console.log('My name is lee')
// }
// logger()
// logger()

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} appls and ${oranges} oranges`
//     return juice
// }
// fruitProcessor(5, 10) // 只是运行了函数，但没有获取返回值

// const juice = fruitProcessor(5, 10) // 存储返回值
// console.log(juice) // 输出返回值

// console.log(fruitProcessor(5, 10)) // 直接输出返回值

// ================================================================== 函数的两种写法
// function calcAge1(birthYeah) {
//     return (2037 - birthYeah)

// }
// const age1 = calcAge1(1991)
// console.log(age1)

// const calcAge2 = function (birthYeah) {
//     return (2037 - birthYeah)
// }
// const age2 = calcAge2(1991)
// console.log(age2)

// ================================================================== 箭头函数
// 箭头函数没有this关键字
// const calcAge3 = (birthYeah) => 2037 - birthYeah;
// //  easier and faster
// //  不需要花括号 不需要return
// // birthYeah 是参数啊
// const age3 = calcAge3(1991);
// // 这里传参也是直接用就行的
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//   // 传多个参数的时候要括号
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1991, "Lee"));

// =============================================================== 函数嵌套
// function cutFruitPiexes(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPiexes(apples);
//   const orangePieces = cutFruitPiexes(oranges);
//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange .`;
//   return juice;
// }
// console.log(ruitProcessor(2, 3));

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };
// const yearsUntilRetirement = function (birthYeah, firstName) {
//   // 传多个参数的时候要括号
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired 🎉`);
//     return -1;
//   }
// };
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1970, "Mike"));

// ====================================================================================================== 函数回顾
// 函数声明、函数表达式、箭头函数

// =============================================================================================== Coding Challenge 1
/*
考拉和海豚两队，现有一个体操学科
每队三场比赛，计算三个分数的平均值
若它至少是对手平均分的两倍，则胜利，否则没球队获胜

使用箭头函数calcAverage计算平均值
创建函数checkWiner，以每个球队的平均分作参数，根据这两个分，输出胜者，以及胜利点数
*/
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const checkWinner = function (team1, team2) {
//     const DolphinsAverage = calcAverage(team1[0], team1[1], team1[2]);
//     const KoalasAverage = calcAverage(team2[0], team2[1], team2[2]);
//     if (DolphinsAverage > KoalasAverage * 2) {
//         console.log('DolphinsAverage wins!🏆');
//     } else if (KoalasAverage > DolphinsAverage * 2) {
//         console.log('KoalasAverage wins!🏆');
//     } else {
//         console.log('Draw!');
//     }
// }
// const DolphinsScorce = [999, 23, 71];
// const KoalasSource = [65, 54, 49];
// checkWinner(DolphinsScorce, KoalasSource)

// // ===================================================================================================== 数据结构（数组
// const friends = ['Michael', 'Steven', 'John', 'David'];
// console.log(friends);

// const years = new Array(1991, 1932, 232, 121);

// console.log(friends[0]);

// console.log(friends.length)

// console.log(friends[friends.length - 1])

// friends[2] = 'Jay'
// // const是原始值不能变，但数组不是原始值
// // 数组是引用类型，可以变
// // 原因是JS在内存中存储东西的方式
// console.log(friends)

// friends = ['Bob', 'Alice'] // ❌

// const firstName = 'lee'
// const lee = [firstName, 'jia', 201 - 19, 'student', friends]
// console.log(lee)
// console.log(lee.length)

// Exercise
// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
// }
// const years = [1990, 1976, 2002, 2010, 2019]
// console.log(calcAge(years)); // ❌
// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length - 1])
// console.log(age1, age2, age3)

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
// console.log(ages)

// Methods
// Add elements
// const friends = ['Michael', 'Steven', 'John', 'David'];
// console.log(friends)
// friends.push('Jay')
// console.log(friends)
// const newLength = friends.push('Lee')
// console.log(newLength) // push返回新数组长度

// friends.unshift('JIJI')
// console.log(friends)

// // Remove elements
// friends.pop()
// console.log(friends.pop()) // pop返回删去的元素
// console.log(friends)

// friends.shift()

// // Search
// console.log(friends.indexOf('Steven'))
// console.log(friends.indexOf('Lee'))

// console.log(friends.includes('Steven'))
// console.log(friends.includes('Lee'))

// if (friends.includes('Steven')) {
//     console.log('Steven is in the friends list')
// }

// ====================================================================================================== Coding Challenge 2
/*
小费计数器
金额在50~300间的 支付账单价值15%的小费
金额在此之外的，支付账单价值20%的小费
1. calcTip函数作为账单的输入，计算小费
2. bills数组记录三个账单，
3. tips数组，记录小费
4. total数组，记录总值
*/
// const bills = [439, 200, 10]
// const tips = []
// const total = []
// function calcTips(bills) {
//     for (const x of bills) {
//         if (x > 50 && x < 300) {
//             const tip = x * 0.15;
//             tips.push(Number(tip.toFixed(2)))
//             total.push(x + tip)
//         } else if (x < 50 || x > 300) {
//             const tip = x * 0.2;
//             tips.push(Number(tip.toFixed(2)))
//             total.push(x + tip)
//         } else {
//             return -1
//         }
//     }
//     return 0
// }
// calcTips(bills)
// console.log(tips)
// console.log(total)

//====================================================================================================== 老师写的，这个箭头函数很妙！！
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// ======================================================================================================= 数据结构（对象
// const leeArray = [
//     'Lee',
//     'student',
//     22,
//     ['Perter', 'Michael']
// ];
// // 无法为元素命名，只能用索引调用，这就无法知道数组里的这些元素是什么意思

// // 对象中，元素叫做属性
// const lee = {
//     firstName: 'Lee',
//     shenfen: 'student',
//     age: 22,
//     friends: ['Perter', 'Michael']
// }

// ========================================================== Coding Challenge 3
/*
    比较Mark和Join的体重
    依然使用BMI = 身高/体重**2
    创建两个分别代表两人的对象（全名、质量、身高、calcBMI方法
    然后看谁的BMI更高
*/
