'use strict';

//////////////////////////////////////////////////////// Coding Challenge 2
// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   header.addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();

/////////////////////////////////////////////////////////////  闭包（Closure）
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// // 这里执行了函数内的操作，why？？！！ 这就是闭包的效果
// booker();
// booker();
// booker();

// console.dir(booker); //得到这个函数本身，可以看到闭包的来源地及其变量

// // Example 1
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f(); // 访问f的时候g已经不在了，a也应该不在了才对，但是f中还是能调用a
// console.dir(f);

// // 重新分配f function
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000; // 用于证明闭包比原型链快
// boardPassengers(180, 3);

/////////////////////////////////////////////////////////// 立即调用的函数表达式
// 调用一次就立刻消失
// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();

// console.log(isPrivate)(() => console.log('This will never run again'))();

// {
//   const isPrivate = 23;
// }
// console.log(isPrivate);

/////////////////////////////////////////////// Coding Challenge 1
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function () {
//     const ans = Number(
//       window.prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     // console.log(ans);
//     if (typeof ans === 'number' && ans < this.options.length) {
//       this.answers[ans]++;
//     }
//     // 高阶写法：因为只有一句操作，所以直接用短路
//     // typeof ans === 'number' && ans < this.options.length && this.answers[ans]++;
//     // console.log(this.answers);
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults: function (type = 'array') {
//     // 默认array类型
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]

///////////////////////////////////////////////////////////////////////// 设置 this keyword
// 这里每个航空公司都是各自使用了this keyword，然后下面借助各种函数使得不同的book对象使用this keyword指向不同的航空公司
// const lufthansa = {
//   //一个航空公司
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// // lufthansa.book(239, 'Lee');
// // lufthansa.book(635, 'Lxx');
// // console.log(lufthansa);

// const eurowings = {
//   // 两个航空公司
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book; // 复制品
// // book(23, 'Lee Williams'); // 这样是不行的，这样会找不到源

// // // 使用call这个方法，调用book指向eurowings函数
// // book.call(eurowings, 23, 'Lee Williams');
// // console.log(eurowings);

// // book.call(lufthansa, 23, 'Lxx Williams');

// // // 现在可以创建更多的公司，调用book函数
// const swiss = {
//   // 三个航空公司
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };
// // book.call(swiss, 593, 'Lxx williams');
// // console.log(swiss);

// // Apply method
// // const flightData = [593, 'George Cooper'];
// // book.apply(swiss, flightData);
// // console.log(swiss);

// // book.call(swiss, ...flightData);

// // Bind method
// // will return a new function
// // const bookEW = book.bind(eurowings);
// // const bookLH = book.bind(lufthansa);
// // const bookLX = book.bind(swiss);

// // bookEW(23, 'Lee Williams');

// // const bookEW23 = book.bind(eurowings, 23, 'Jonas');
// // bookEW23('lee Schmedtmann');
// // bookEW23('Martha Cooper');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// // 因为这里是document调用，所以这里的this指向的是document这个元素
// // 由于bind会返回一个新函数，因此在这里使用bind方法，里面指定lufthansa，那么lufthansa.buyPlane()里面的this就会指向lufthansa而不是document

// // Partial Application
// const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23); // bind method的第一个参数是this keyword，第二个参数是第一个参数的参数
// console.log(addVAT);
// addVAT = value => value + value * 0.23;
// console.log(addVAT(100));
// console.log(addVAT(23));

// // Challenge 使用非bind方法，继承一个函数
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);

// console.log(addVAT2(100));
// console.log(addVAT2(23));

////////////////////////////////////////////////////////////////////////// 一等函数和高阶函数
// 一等函数的意思就是函数也是值，只是一个概念
// 高阶函数：接收另一个函数的函数，或返回函数的函数（是因为有一等函数这个概念所以有高阶函数）
// 函数被简单地视为值
// 因为JS中的函数只是JS中另一种类型的对象，而对象是值所以函数也是值
// 所以函数也可以存储在变量或对象属性中，作为参数传递给其他函数，以及作为返回值返回
// 函数也像对象一样，有方法,so creazy!!
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase(); // 把所有/都替换为空
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // 高阶函数---接收函数作参数
// const transformer = function (str, fn) {
//   console.log(`Original string ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

// JS uses callbacks all the time
// const high5 = function () {
//   console.log('(@^0^@)/');
// };
// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// 高阶函数---返回函数   （有闭包的知识点）
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}!`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Jonas'); // greeterHey的本质是function(name)
greeterHey('Steven');

greet('Hello')('Jonas');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');

////////////////////////////////////////////////////////////////////////// 参数如何传递给函数
// 按值传递
// 按引用传递 => JS是没有的
// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 23434534,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999'; // 只是该改变了个副本
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 23434534) {
//     alert('Check in ');
//   } else {
//     alert('Wrong passport');
//   }
// };
// // checkIn(flight, jonas);
// // console.log(flight); // 经过函数后，登记号没变化，因为他是原始数据类型
// // console.log(jonas); // 经过函数后，姓名发生变化，因为他是引用数据类型

// // Is the same as doing in function
// // const flightNum = flight // 只是简单复制
// // const passenger = jonas // 指向同一对象

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000); // trunc取整数
// };
// newPassport(jonas);
// checkIn(flight, jonas);

// console.log(jonas);

////////////////////////////////////////////////////////////////////////////// 默认参数
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //   ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;
//   //   ES6直接写在里面;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000); // 跳过中间的参数
