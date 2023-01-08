/*
let js = "amazing";
console.log(40 + 8);

console.log('Jonas');
console.log(23);

// 232313

// ============================================================ 数据类型
let firstName = 'lee';
console.log(firstName);
console.log(firstName + " 你好帅");
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof (javascriptIsFun))
console.log(typeof (true));
console.log(typeof (2321));
javascriptIsFun = "YES!";
console.log(javascriptIsFun);
console.log(typeof (javascriptIsFun))

let year;
console.log(year);
console.log(typeof (year));

console.log(null);
console.log(typeof (null));


// ================================================================ 变量
let age = 30;
age = 13;
// let和var很像，但是是不同的：let是块作用域的，var是函数范围

const birthYear = 2000;
// birthYear = 2001; // 会报错
// const job; //不合法的，const声明不能不赋值


// ================================================================= Math operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtamann';
console.log(firstName + ' ' + lastName);

// ================================================================== Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

// Comparison operatiors
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2000);


const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2000);


let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge)

*/

// ========================================================================= Coding Challenge 1
// 测试mark和tiechui的体重和BMI
// BIM = mass / height ** 2
// 步骤：
//     1. 存储两人的体重和高度
// 2. 各自计算BMI并比较
// 3. 创建markHigherBMI变量存储比较后的值

// 我写的
// let mark = [95, 1.88]
// let tiechui = [85, 1.76]
// function comput(weight, height) {
//     let BMI = weight / height ** 2
//     console.log("BMI", BMI)
//     return BMI
// }
// function duibi(bmi1, bmi2) {
//     let a = bmi1;
//     let b = bmi2;
//     if (a > b) {
//         return "mark的BMI大"
//     } else if (b > a) {
//         return "tiechui的BMI大"
//     }
// }
// let markBMI = comput(mark[0], mark[1])
// let tiechuiBMI = comput(tiechui[0], tiechui[1])
// let final = duibi(markBMI, tiechuiBMI)
// console.log(final);

// 大佬的写的
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// const firstName = 'lee'
// const job = 'program'
// const birthYear = 1991
// const year = 2037

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + ' !'
// console.log(jonas)

// ============================================================================================================= ESXI 模板文字
// const jonasNew = `I'm ${firstName}, a ${year - birthYear}years old ${job} !`;
// console.log(jonasNew)

// console.log(`Just a regular string……`)

// console.log('String with \n\
// multiple \n\
// lines')

// console.log(`String
// multiple
// lines`)

// const age = 13
// const isOleEnough = age >= 18
// if (isOleEnough) {
//     console.log("lee can start driving license 🚗")
// } else {
//     const yeareLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yeareLeft} years :)`)
// }

// const birthYear = 1991;
// let century
// if (birthYear <= 2000) {
//     century = 20
// } else {
//     century = 21
// }
// console.log(century)

// ================================================================================== Coding Challenge 2
// let mark = [95, 1.88]
// let tiechui = [85, 1.76]
// function comput(weight, height) {
//     let BMI = weight / height ** 2
//     console.log("BMI", BMI)
//     return BMI
// }
// function duibi(bmi1, bmi2) {
//     let a = bmi1;
//     let b = bmi2;
//     if (a > b) {
//         return "mark的BMI比tiechui大"
//     } else if (b > a) {
//         return "tiechui的BMI比mark大"
//     }
// }

// ============================================================类型转换
// JS只能转换三种类型：数字，字符串，布尔
// const inputYear = '1991'
// console.log(Number(inputYear), inputYear)
// console.log(inputYear + 18) // 这里可一看到字符串是不变的数据类型
// console.log(Number(inputYear) + 18)
// console.log(Number('lee'))
// console.log(typeof (NaN)) // 这个的数据类型是number，是非数字字符串转换为数字时产生的“数字”
// console.log(String(23), 23)

// // ======================================================== 强制类型转换
// console.log('I am ' + 23 + ' years old ')
// console.log('I am ' + '23' + ' years old ')

// console.log('23' - '10' - 3)
// console.log('23' / '2') // 乘除法运算符必须是数字类型才可以运转

// let n = '1' + 1
// n = n - 1
// console.log(n)

// // 5个假值：0，'', undefined, null, NaN
// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('lee'))
// console.log(Boolean({}))
// console.log(Boolean(''))

// const money = 10
// if (money) {
//     console.log("Don't spend it all")
// } else {
//     console.log("You should get a job")
// }

// let height = 0 //0值是一个数字，但是会报为false，this is not what i want to get
// if (height) {
//     console.log("YAY! height is defined")
// } else {
//     console.log("Height is UNDEFINED")
// }

// const age = 18
// if (age === 18) console.log("you just became an adult :D (strict)")

// if (age == 18) console.log('you just became an adult :D(loose)')

// const favourite = Number(prompt("What's your favourite Number?"))
// console.log(favourite)
// console.log(typeof (favourite))

// if (favourite === 23) {
//     console.log('cool! 23 is an amazing number !')
// } else if (favourite === 7) {
//     console.log('7 is also a cool number')
// } else {
//     console.log('Number is not 23 or 7')
// }

// if (favourite !== 23) console.log('Why not 23 ?')

// ============================================================================= 布尔运算
// const hasDriversLicense = true
// const hasGoodVision = true

// console.log(hasDriversLicense && hasGoodVision)
// console.log(hasDriversLicense || hasGoodVision)
// console.log(!hasDriversLicense)

// const shouldDrive = hasDriversLicense && hasGoodVision

// if (shouldDrive) {
//     console.log("Sarah is able to drive !")
// } else {
//     console.log("Someone else should drive ……")
// }

// const isTired = false
// console.log(hasDriversLicense && hasGoodVision && isTired)

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive !")
// } else {
//     console.log("Someone else should drive ……")
// }

// ================================================================= Coding Challenge3
/*
两体操队： 海豚和考拉
三度交手，算平均分，比较平均分，输出赢家，平均分可能会相同，因此可能会平手

加强版1：增加获胜的要求：&最低分是100
加强版2：最低分适用于平局，所以两队得分相同时平局，并且两队的分数都大于或等于 100，则两队一起获胜，否则没球队获胜
*/

// const haitun = [120, 108, 110]x`
// const kaola = [88, 91, 110]
// const averageHai = (haitun[0] + haitun[1] + haitun[2]) / 3
// const averageKaola = (kaola[0] + kaola[1] + kaola[2]) / 3
// if (averageHai > averageKaola && Math.min(...haitun) >= 100) {
//     console.log("haitun win the trophy 🏆")
// } else if (averageHai < averageKaola && Math.min(...kaola) >= 100) {
//     console.log("kaola win the trophy 🏆")
// } else if (averageHai === averageKaola && Math.min(...haitun) >= 100 && Math.min(...kaola) >= 100) {
//     console.log("both win the trophy 🏆")
// }

// ======================================================================================================= switch语句
// const day = 'Monday'
// switch (day) {
//     case 'Monday':
//         console.log('Plan course strutcture')
//         console.log('Go to coding meetup')
//         break
//     case 'Tuesday':
//         console.log('Prepare theory class')
//         break
//     case 'Wednesday':
//     case 'Thursday':
//         console.log('write code examples')
//         break
//     case 'Friday':
//         console.log('Record videos')
//         break
//     case Saturday:
//     case Sunday:
//         console.log('Go to sleep')
//         break
//     default:
//         console.log('Not a valid day !')
// }

// if (day === 'Monday') {

// } else if (day === 'Tuesday') {

// } else (day === 'Wednesday' || day === 'Thursday'){

// }else if (day === 'Friday') {

// } else if (day === 'Saturday' || day === 'Sunday') {

// } else {

// }

// const age = 23
// age >= 18 ? console.log('I like to drink wind 🥤') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? 'wine 🥤' : 'water 💧'
// console.log(drink)

// console.log(`I like to drink ${age >= 18 ? 'wine🥤' : 'water 💧'}`)

// ========================================================= Code Chanllenge 4
/*
lee想制作一个简单的小费计算器
每次吃饭时，在其他国家如果账单价值在50~300之间，小费通常是15%
如果不在50~300之间，小费通常是20%
不允许使用if else
输出初始账单，消费价值，总账单（初始账单+小费）
*/
// const bill = [275, 1040, 430]
// const tip = 50 <= bill[1] && bill[1] <= 300 ? bill[1] * 0.15 : bill[1] * 0.2
// const sum = bill[1] + tip
// console.log(`The bill was ${bill[1]}, the tip was ${tip}, and the totla value was ${sum} `)
