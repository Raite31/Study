'use strict';

// class PersonCl {
//   constructor(fullName, birthYear) {
//     // What is constructor
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // 方法将会被添加到.prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }
//   // 体现get和set在数据验证上的作用
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey there 👋');
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log('jessica: ', jessica);
// // 在这里可以看到jessica的prototype
// jessica.calcAge();
// console.log('jessica.age：', jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);
// // prototype：prototype表示该函数的原型，也表示一个类的成员的集合。 在通过new创建一个类的实例对象的时候，prototype对象的成员都成为实例化对象的成员。
// // __proto__：
// jessica.greet();

// const walter = new PersonCl('Walter White', 1965);

// PersonCl.hey();

// // set和get对于数据验证非常有用
// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//     // slice是浅删除的方法，pop是把删除的东西打印出来的方法
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// // account.latest(50); 这样写就成了函数了，🙅‍
// account.latest = 50;

// console.log(account.movements);

// Object.create函数=========================================================
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// // 验证create方法创建的对象的proto是 直接等于原型的proto 还是 继承的proto
// console.log(steven.__proto__);
// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// Coding Challenge 2========================================================
// 1. 用ES6创建Challenge1
// 2. 用一个名为'speedUS'的getter返回当前的时速（mi/h），原来的速度是km/h，换算是：英里 = 公里/1.6
// 3. 用一个名为'speedUS'的setter设置当前速度（把英里转换公里）
// 4. 创造一个新的car来满足以上功能

// 测试用例：
//  CAR 1： 'Ford' going at 120 km/h
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

// 更真实的继承==================================================
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  // 这样使用相当于Person是个常规函数，而在常规函数中，this keyword是 undefined
  // call方法就能把this的指向修正
  this.course = course;
};

// linking prototype
Student.prototype = Object.create(Person.prototype); // 此时Student.prototype是空值

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

console.dir(Student.prototype.constructor);

Student.prototype.constructor = Student;
