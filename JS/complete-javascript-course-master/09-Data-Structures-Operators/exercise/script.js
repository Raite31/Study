'use strict';

// Data needed for first part of the section
/////////////////////////////////////////////////////////////////////////// 增强的对象文字
// 下面的对象是使用对象字面量语法编写的
// 现在使用ES6来写写

// 特性3：计算属性
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
const openingHours = {
  mon: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  wed: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0,
  //     close: 24,
  //   },
  // },
  // openingHours: openingHours,

  // 特性1：ES6 对象文字
  // openingHours,
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // 特性2：ES6 函数新写法
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // 函数旧写法
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    // console.log(
    //   `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    // );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
)
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {
//     // entries：创建一个可迭代对象
//     const [first, second] = row.toLowerCase().trim().split('_');
//     // trim：去除字符串的首尾空格
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✔'.repeat(i + 1)}`);
//     // padEnd：在字符串右侧填充空格
//   }
// });

// Working with Strings
// Part 3（Split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join('-');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };
// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');

// // 填充字符串
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCart = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };
// console.log(maskCreditCart(423312233231231231341213));
// console.log(maskCreditCart('24r2313133243143123112313'));

// // 重复
// const message2 = 'Bad weather... All Departues Delayed...';
// console.log(message2.repeat(3));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in the line ${'✈'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(12);

// Part 2（
// const airline = 'TAP Air Portugal';
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // 固定乘客姓名中的大写字母
// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passengerUpper =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerUpper);
// // 检查邮件
// const email = 'hello@joans.io';
// const loginEmail = ' Hello@Jonas.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();

// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceUS = '288.98$';
// const priceCN = priceUS.replace('$', '￥');
// console.log(priceCN);

// const announcement = 'All passengers come to barding door 23. Boarding door 23';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate')); // 这样写有All的效果

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Boeing'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW ARirbus family');
// }

// // Partice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera ');
// checkBaggage('Got some snacks and a gun for protection');

// Part 1
// 原理： 在字符串上调用方法时，JS将自动在幕后将字符串转换为字符串对象（boxing），然后对这个对象调用方法
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r')); // 第一个
// console.log(airline.lastIndexOf('r')); // 最后一个
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4)); // 从4开始提取
// // 不会改变字符串底层文字

// console.log(airline.slice(4, 7));
// // 提取字符串的长度总是结束-开始

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2)); // 从后面取值
// console.log(airline.slice(1, -1)); // 从1开始取值，到倒数第二个

// const checkMiddleSeat = function (seat) {
//   // B and Ee are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat! 😮');
//   } else {
//     console.log('You got lucky (～￣▽￣)～');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));

// console.log(typeof new String('jonas').slice(1));

// ///////////////////////////////////////// Coding Challenge #3
// /*
// Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

// GOOD LUCK 😀
// */
// // 包含了比赛期间所有发生的事的Map，左边是分钟数
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// /**
//  * 1. 创建一个称为事件的数组，将包含所有比赛中不同的游戏事件（没有重复项
//  * 2. 比赛结束后，第64分钟的黄牌被认为不公平，删除掉它
//  * 3. 将dis字符串打印到控制台，平均每九分钟发生一次事件
//  * 4. 遍历事件，分上下半场输出事件
//  */
// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);
// // 3.
// // 老师写法
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4.
// for (const x of gameEvents.keys()) {
//   if (x < 45) {
//     console.log(`[FIRST HALF] ${x}: ${gameEvents.get(x)}`);
//   } else {
//     console.log(`[SECOND HALF] ${x}: ${gameEvents.get(x)}`);
//   }
// }
// // 老师写法
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

////////////////////////////////////////////////////// 数据结构: Set and Map
// Set
// 集合里面需要可迭代的变量
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);
// console.log(new Set('Jonas'));
// console.log(ordersSet.size);
// // 集合没法像数组一样检索元素（它的存在意义就不是检索）
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);
// ordersSet.delete('Pizza'); // 数组是没法这么简单删除元素的
// console.log(ordersSet);
// // ordersSet.clear(); // 清空集合

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Cook', 'Manager', 'Waiter', 'Cook'];
// const staffUnique = [...new Set(staff)]; // 加了[]就变成数组
// console.log(staffUnique);
// console.log(new Set(['Waiter', 'Cook', 'Manager', 'Waiter', 'Cook']).size);
// console.log(new Set('jonasschmedtmann').size);

// Map
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(1);

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has('categories'));
// rest.delete(2); // 删除过程是很慢的，所以并不建议
// console.log(rest);
// console.log(rest.size);
// rest.clear();
// console.log(rest);

// 使用set方法
// rest.set([1, 2], 'Test');
// console.log(rest);
// console.log(rest.get([1, 2])); // 直接这样无法获取到，因为这里的数组和上key的数组在堆中不是同一个数组
// // 我们应该一开始先把数组放入一个变量中
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.get(arr));

// 使用新方法操作Map
// const question = new Map([
//   ['question', 'What is the best programming language in the world ?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // Convert object to Map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Map可迭代
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// // const answer = Number(prompt('Your answer: '));
// // console.log(answer);

// // console.log(question.get(question.get('correct') === answer));

// // 将Map转换为数组
// console.log([...question]);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());

////////////////////////////////////////////////////// Code Challenge 2
/**
 1. 遍历game.scored数组，将玩家连同目标号码打印出来
 2. 使用循环计算平均赔率
 3. 使用格式化方式打印三个赔率
    ++ Odd of victory Bayern Munich: 1.33
    ++ Odd of draw: 3.25
    ++ Odd of victory Borrussia Dortmund: 6.5
    不能写死球队名
  4. 奖金，创建名为scores的对象，包含玩家名字和进球数
 */
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// const man = Object.entries(game.scored);
// console.log(man);
// // 老师的
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// // 2.
// // 老师的
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) {
//   average += odd;
// }
// average /= odds.length;
// console.log(average);

// // 3.
// for (const [key, value] of Object.entries(game.odds)) {
//   // console.log(key, value);
//   console.log(`Odd of victory ${game[key] ? game[key] : 'draw'}: ${value}`);
// }
// // 老师的 啊确实这个符合题目多点，我的多了个victory
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}： ${odd}`);
// }

////////////////////////////////////////////////////////////////////// 循环对象
// for循环可迭代  不迭代地循环对象

// for循环获取属性名称
// const properties = Object.keys(openingHours);
// // console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}，`;
// }
// console.log(openStr);

// // for循环获取属性本身
// const values = Object.values(openingHours);
// console.log(values);
// // Entire object 把对象属性变成数组输出，并且能分出键和值
// const entries = Object.entries(openingHours);
// console.log(entries);
// // 使用for进行结构
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

///////////////////////////////////////////////////////////////// 对象和数组的更新特性：可选链接
//普通方法
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
// // 可选链接
// console.log(restaurant.openingHours.mon?.open);
// // 只有问号前面的都存在的时候，才会到open，否则直接undefined
// // 如果没有这个问号，那么直接报错，因为在不存在里面找open，是错误的
// console.log(restaurant.openingHours?.mon?.open);
// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }
// // 可选链接----Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method dose not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method dose not exist');
// // 可选链接----array
// const users = [{ name: 'lee', email: 'hello@lee.io' }];

// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty ');

///////////////////////////////////////////////////////////////////////////// for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   // entries()数组迭代器 返回带index的数组
//   console.log(`${item[0] + 1}:${item[1]}`);
// }
// console.log('\n');
// for (const [i, el] of menu.entries()) {
//   // entries()数组迭代器 返回带index的数组
//   console.log(`${i + 1}:${el}`);
// }

// console.log([...menu.entries()]);

///////////////////////////////////////////////////////////////////////////// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // 2.
// const [gk, ...fielPlayers] = players1;
// console.log(gk, fielPlayers);
// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// //4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// // 6.
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);
// // 7.
// tema1 < team2 && console.log('Team 1 is more likely to win');
// tema1 > team2 && console.log('Team 2 is more likely to win');

///////////////////////////////////////////////////////////////// 逻辑
// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0, // 0是虚假值，所以or逻辑在这里是工作得很好得，而??运算符会把0当作真值，就不会出现这种现实得逻辑错误
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // 空赋值运算符（null or undefined）
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // rest1.owner = rest1.owner && '<ANONYMOUS';
// // rest2.owner = rest2.owner && '<ANONYMOUS';
// rest1.owner &&= '<ANONYMOUS'; //为什么这里没反应的？？？
// rest2.owner &&= '<ANONYMOUS';

// console.log(rest1);
// console.log(rest2);

///////////////////////////////////////////////////////////////////////// 无效合并运算符
// 无效合并运算符 平替 或运算符
// restaurant.numGuests = 0;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // 无效的合并运算符，工作方式和or很像，但他会修复或出错
// // 无效值不是虚假值
// // 空值：是空的且未定义，而且不包括0或空字符串
// // 无效合并运算符：就像0和空字符串，不是虚假值
// const guestCorrent = restaurant.numGuests ?? 10;
// console.log(guestCorrent);

///////////////////////////////////////////////////////////////////////  && 和 ||
// console.log('-----  OR ------');
// // or返回第一个不为错的值
// // 他们可以使用和返回任何数据类型，称为短路
// console.log(3 || 'Jonas'); // 短路
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.numGuests = 23;
// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('-----  AND ------');
// // and返回第一个为错的值
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('hello' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'tomato', 'cheese');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

//////////////////////////////////////////////////////////////////
// // 1)Destructuring
// // SPREAD:右侧展开
// const arr = [1, 2, ...[3, 4]];
// // REST: 左侧展开
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// // console.log(pizza, risotto, otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays);

// // 2) Funcitons
// const add = function (...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   for (let i of numbers) {
//     sum += i;
//   }
//   // console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(2, 2, 3, 4, 5, 7, 4, 2, 34);

// const x = [23, 55, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'onlives', 'spinach');
// restaurant.orderPizza('mushrooms');

////////////////////////////////////////////////////////////////////////
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// // console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// // console.log(newArr);

// // console.log(...newArr);
// // console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// // console.log(newMenu);

// // 复制数组
// const mainMenuCopy = [...restaurant.mainMenu];
// // 加入两个数组
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(menu);

// //Iterables: arrays,strings,maps,sets. Not objects
// const str = 'Jonas';
// const letters = [...str, '', 'S.'];
// // console.log(letters);
// // console.log(...str);
// // console.log(`${...str} Schmedtmann`)

// // Real-world example
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt("Let's make pasta! Ingredient 2?"),
//   // prompt("Let's make pasta! Ingredient 3?"),
// ];
// // console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { fundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

///////////////////////////////////////////////////////////////////////// 解构对象
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
//
// restaurant.orderDelivery({
//   address: 'Via del sole, 21',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// // console.log(restaurantName, hours, tags);
// // 默认变量
// const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);
// // 变异变量
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// // console.log(a, b);
// // 嵌套对象
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//////////////////////////////////////////////////////////////////////
// 解构数组
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[0];
// const c = arr[0];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// 嵌套数组
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// 默认值数组
// const [p, q, r] = [8, 9];
// console.log(p, q, r);

// const [p = 10, q = 11, r = 12] = [8, 9];
// console.log(p, q, r);
