'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// 显示账单
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // 清空html
  // 就像.textContent = 0
  const movs = sort ? movements.slice().sort((a, b) => b - a) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
    // afterbegin是控制插入html的顺序，这里是逆序，因为流水账单是逆序的
  });
};
// displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);

// 计算
const calcPrintBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};
// calcPrintBalance(account1.movements);

// 计算总数
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

// 转换用户名字
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

// 更新UI
const updateUI = function (acc) {
  // 显示movements
  displayMovements(currentAccount.movements);
  // 显示balance
  calcPrintBalance(currentAccount);
  // 显示summary
  calcDisplaySummary(currentAccount);
};

// Event handler
// 登录
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // 禁止默认行为
  e.preventDefault();
  // console.log('LOGIN');
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount.username);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // 显示UI和欢迎消息
    // console.log('LOGIN');
    labelWelcome.textContent = `Welcome ${currentAccount.owner.split('')[0]}`;
    containerApp.style.opacity = 100;
    // 清除输入框
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // 清除光标

    updateUI(currentAccount);
  }
  // console.log('单位i达瓦：', currentAccount);
});

// 转账
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // console.log(amount, receiveAcc);
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiveAcc &&
    currentAccount.balance >= amount &&
    receiveAcc?.username !== currentAccount.username // 这里得问号起到了判断不为空的作用
  ) {
    // 转移钱钱
    currentAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

// 向银行贷款
// 银行只发放贷款，如果至少有一笔贷款，至少占所申请贷款金额的10%
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // 添加账单
    currentAccount.movements.push(amount);
    // 更新视图
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// 关闭账户
// 直接从账户数组中删掉用户即可
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  // console.log('delete');
  // 在close输入框里面输入的用户名和密码，比对和现在的用户名密码是否正确，正确的话就删去
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // console.log(index);
    // Delete account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// console.log(accounts);

let sorted = false; // 一个按钮 两种状态
btnSort.addEventListener('click', function (e) {
  // console.log('1111');
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// 方法只是我们用于调用对象的函数

// // SLICE 截取（浅拷贝（就是不影响原数组
// console.log('/////////////////////////////////////////////////////////slice');
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2)); // 向后冲
// console.log(arr.slice(1, -2)); // 向后冲

// console.log(arr.slice());
// console.log([...arr]);
// console.log('\n');

// // // SPLIT 截取（深拷贝
// console.log(arr.splice(2));
// console.log('//////////////////////////////////////////////////////// split');
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);
// console.log('\n');

// // // REVERSE 倒置（深拷贝
// console.log('////////////////////////////////////////////////////// reserve');
// arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.reverse());
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);
// console.log('\n');

// // // CONCAT 连接（浅拷贝
// console.log('////////////////////////////////////////////////////// concat');
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);
// console.log(arr);
// console.log('\n');

// // // JOIN 连接（浅拷贝
// console.log('//////////////////////////////////////////////////////// join');
// console.log(letters.join('-'));
// console.log('\n');

// // AT （浅拷贝
// // 也适用于字符串
// console.log('////////////////////////////////////////////////////////// AT');
// const arr3 = [23, 11, 64];
// console.log(arr3[0]);
// console.log(arr3.at(0));
// // 返回最后一个元素
// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1)[0]);
// console.log(arr3.at(-1));

// console.log('lee'.at(0));
// console.log('\n');
// console.log(arr3);

// FOREACH 遍历（浅拷贝
// foreach无法使用continue和break，一定会遍历整个数组
// console.log('//////////////////////////////////////////////////////// foreach');
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// // 获取索引和值
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposed ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('=====================================');
// // movements.forEach(function (movement) {
// // 获取索引和值，固定格式
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You deposed ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });

// 0: function(200)
// 1: function(450)
// 2: function(400)

// foreach还可以与map和set一起使用;
// MAP;
// console.log('=====================================');
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // SET
// console.log('=====================================');
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// console.log('\n');

// console.log('//////////////////////////////////////////// Coding Challenge 1');
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// July和Lee研究狗狗，问了五个主人他们狗的名字，存储在数组中。
// 研究每只狗是成年还是小狗（成年狗至少三岁
// 创建一个名为check dogs的函数，接受两个数组
// July发现最后两只狗是猫不是狗，因此使用浅拷贝删去猫
// 创建一个数组存储July和Lee的研究数据
// 输出每只狗是否成年

// function checkDogs(JuliaData, KateData) {
//   const JuliaDataCopy = JuliaData.slice();
//   JuliaDataCopy.splice(-2);
//   const dogs = JuliaDataCopy.concat(KateData);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy 🐶`);
//     }
//   });
// }
// // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// console.log(
//   '///////////////////////////////////////////////////////////// MAP'
// );
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;
// // const movementUSD = movements.map(function (mov) {
// //   return Math.trunc(mov * eurToUsd);
// // });
// const movementUSD = movements.map(mov => Math.trunc(mov * eurToUsd));
// console.log(movements);
// console.log(movementUSD);

// const movementUSDfor = [];
// for (const mov of movements) movementUSDfor.push(Math.trunc(mov * eurToUsd));
// console.log(movementUSDfor);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposed' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescriptions);
// console.log(movements);
// console.log('\n');

// console.log('///////////////////////////////////////////// Fillter');
// // 浅拷贝
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// // 等同于
// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// console.log('\n');

// console.log('///////////////////////////////////////// Reduce');
// console.log(movements);
// const balance = movements.reduce((acc, cur) => acc + cur, 100);
// // 这里的0是累加器的初始值
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // Maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);
// console.log(max);

// console.log(
//   '///////////////////////////////////////////////////////// Coding Challenge 2'
// );
// 继续研究狗
// 把狗的年龄转换为人类的年龄，然后计算平均值
// 1. 使用公式转换所有狗的年龄（如果狗小于等于两岁，则人类的年龄是狗的两倍；如果狗的年龄大于两岁，那么humanAge =16 + dogAge*4
// 2. 排除所有转换为人类后是18岁的狗
// 3. 计算所有成年犬的平均人类年龄

// 使用MAP FILTER REDUCE方法

// 测试数据
// data 1: [5,2,4,1,15,8,3]
// data 2: [16,6,10,5,6,1,4]

// const pingjunAge = function (data) {
//   let humanAge = [];
//   humanAge = data.map(function (dog) {
//     if (dog <= 2) {
//       return dog * 2;
//     } else if (dog > 2) {
//       return 16 + dog * 4;
//     }
//   });

//   let bigHuman = humanAge.filter(function (age) {
//     return age >= 18;
//   });
//   // console.log(bigHuman);
//   // console.log(bigHuman.length);

//   let averAge = bigHuman.reduce(function (age, cur) {
//     return age + cur;
//   });
//   averAge = averAge / bigHuman.length;
//   return averAge;
// };

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];
// console.log(pingjunAge(data1));
// console.log(pingjunAge(data2));

// // 把三种方法连在一起
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// 老师的
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );
//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);
// console.log('\n');

// console.log(
//   '///////////////////////////////////////////////////////// Coding Challenge 3'
// );
// // 使用链接和箭头函数重写挑战2
// const pingjunAge = data =>
//   data
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avg1 = pingjunAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = pingjunAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);
// console.log('\n');

// console.log('///////////////////////////////////////////////////////// FIND');
// // 遍历循环检索数组
// // 返回第一个符合条件的元素
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// console.log('/////////////////////////////// findIndex');
// // 返回索引
// console.log('\n');

// console.log('///////////////////////////// some everything');
// // some
// // 如果数组中有一个元素符合条件，则返回true
// console.log(movements);
// // 判断相等
// console.log(movements.includes(-130));

// // 判断条件
// console.log(movements.some(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// // everything
// // 如果数组中所有元素都符合条件，则返回true
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // 单独回调
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log('\n');

// console.log('///////////////////////////// flat, flat map');
// // flat
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// const overalBalance = accounts
//   .map(acc => acc.movements) // 获取accounts中的movements
//   .flat() // 展平
//   .reduce((acc, mov) => acc + mov, 0); // 计算
// console.log(overalBalance);

// // flat map
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements) // 获取并展开accounts中的movements
//   .reduce((acc, mov) => acc + mov, 0); // 计算
// console.log(overalBalance2);

// console.log('\n');

// console.log('////////////////////////////////// sort');
// // strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// // 数字
// console.log(movements);
// console.log(movements.sort());
// console.log(movements.sort((a, b) => a - b));
// console.log(movements.sort((a, b) => b - a));

// console.log('\n');

// console.log('//////////////////////////////////////// 编程方式创建和填充数组');
// // Array
// const arr = [1, 2, 3, 5, 6, 7, 8];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// const x = new Array(7);
// console.log(x);
// console.log(x.map(() => 5));

// // x.fill(1);
// x.fill(1, 3, 5); // 从索引 3 ~5 开始填充 1
// x.fill(1);
// console.log(x);

// arr.fill(23, 4, 6);
// console.log(arr);

// // Array.from
// // 把数组变成数组
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, index) => index + 1); // _表示不使用第一个参数，只是来占坑的，我要用后面的参数
// console.log(z);

// // Challenge
// // 使用 Array.from()生成一个数组 记录随机抛骰子100次

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//     // 这里是一个NodeList，它不是一个真正的数组
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });

// console.log('\n');

// console.log('///////////////////////////////////// SUMMARY Pratice');
// // 计算总共存入银行多少钱
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// console.log(bankDepositSum);

// // 计算银行有多少至少1000美元的存款
// // 法一
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 1000).length;
// console.log(numDeposits1000);

// // 法二
// console.log(
//   accounts
//     .flatMap(acc => acc.movements)
//     .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0)
// );

// // ++ 的补充
// let a = 10;
// console.log(a++); //
// console.log(a++); //
// console.log(a++); //
// console.log(++a); //

// // 创建一个新对象而不仅仅是一个数字或字符串
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(deposits, withdrawals);

// //用数组仅用reduce方法写出map和filter和reduce

// // 创建一个函数转换任何字符串到标题案例（首字母大写
// // this is a nice  title -> This Is a Nice Title
// const convertTitleCase = function (title) {
//   const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     );
//   return titleCase;
// };
// console.log(convertTitleCase('this is a nice  title'));
// console.log(convertTitleCase('this is a LONG  title but not too long'));

// console.log('///////////////////////////////////// Coding Challenge 4');
/**
 * Julia 和 Kate 研究狗
 * 他们学习狗吃太多（狗目前的食物部分大于推荐部分）还是太少（相反）
 * 狗吃的量 是推荐的多10%和少10%
 *
 * 1. 遍历包含狗对象的数组, 计算每只狗的推荐食物量（weight ** 0.75 * 28, 并将其存储在狗的食物量属性中
 * 2. 找到Davide的狗，输出它
 * 3. 创建吃太多的狗的狗主人数组（ownersEatTooMuch)和吃太少的（ownersEatTooLittle）
 * 4. 输出吃太多的狗的狗主人数组（"Sarah and John and Michael's dogs eat too little"）
 * 5. 输出是否有狗吃适量的食物（高于10% 或低于10% 都可）
 *
 */
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 45, curFood: 300, owners: ['Bob', 'Charlie'] },
//   { weight: 27, curFood: 400, owners: ['Bob', 'David'] },
//   { weight: 29, curFood: 350, owners: ['Charlie', 'Debra'] },
// ];
