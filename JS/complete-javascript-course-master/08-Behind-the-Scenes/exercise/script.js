'use strict';

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'John',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage: ', jessica);
// ocnsole.log('After marriage: ', marriedJessica);

// 浅拷贝： 只能拷贝第一级（若对象内还有对象，就拷贝不了二级的那个）
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);

const jessica3 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy3 = Object.assign({}, jessica3);
jessicaCopy3.lastName = 'Davis';

jessicaCopy3.family.push('Mary');
jessicaCopy3.family.push('John');

console.log('Before marriage: ', jessica3);
console.log('After marriage: ', jessicaCopy3);

// 深拷贝 需要用到外部库
