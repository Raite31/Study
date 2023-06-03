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

// =================================================================================Object.create函数
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

// ==========================================================================Coding Challenge 2
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

// ========================================================================更真实的继承
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   // 这样使用相当于Person是个常规函数，而在常规函数中，this keyword是 undefined
//   // call方法就能把this的指向修正
//   this.course = course;
// };

// // linking prototype
// // 学生继承自人类的底层逻辑
// Student.prototype = Object.create(Person.prototype); // 此时Student.prototype是空值

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log('mike.__proto__: ', mike.__proto__);
// console.log('mike.__proto__.__proto__: ', mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// ==================================================================Coding Challenge 3
// 1. 实现一个电动汽车类，叫做EV，他是Car类的子类，这个EV类他有品牌和当前速度
// 2. 给EV实现一个加速的方法和刹车的方法
// 3. 给EV实现一个加速的方法，能使汽车速度提升20的同时减少1%的费用，还要打印出来
// 测试数据：Tesla以120公里的速度行驶，收取23的费用，根据这个测试数据创建对象，包括accelerate、brake和chargeBattery方法

// 自己写的
// const Car = function (make, current_speed, chargeBattery, chargeTO, decrease) {
//   this.make = make;
//   this.current_speed = current_speed;
//   this.chargeBattery = chargeBattery;
//   this.chargeTO = chargeTO;
//   this.decrease = decrease;
// };

// const EV = function (make, current_speed, chargeBattery, chargeTO, decrease) {
//   Car.call(this, make, current_speed, chargeBattery, chargeTO, decrease);
//   function accelerate() {
//     current_speed = current_speed + 20;
//     decrease = decrease - decrease * 0.01;
//   }
// };

// const tesla = new EV('Tesla', 140, 80, 80, 22);

// 老师写的
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // 链接原型
// EV.prototype = Object.create(Car.prototype);
// // 新增原型方法
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// // 修改原型方法，因为原本原型就有这个方法，所以在这里是新增给自己的原型方法，原型链会先用这个
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

// ===========================================================================使用ES6实现继承
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   static hey() {
//     console.log('Hey there 👋');
//   }
// }

// class StudentCl extends PersonCl {
//   // 这里继承的时候不需要再像以前一样：父类.call(……)，ES6里这会自动完成
//   constructor(fullName, birthYear, course) {
//     // 在ES6继承中，需要第一时间用super
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012);
// const hary = new StudentCl('Hary Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();
// ===========================================================================使用Object.create实现复杂原型链
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// // 继承PersonProto
// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   //  StudentProto自己的变量
//   this.course = course;
// };
// //  StudentProto自己的变量
// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jay = Object.create(StudentProto); // 所以StudentProto是jay的父，PersonProto是jay的爷，jay将会继承StudentProto和PersonProto的所有属性
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// ===========================================================================其它class的例子，主要是说数据封装 隐私问题
// 面向对象编程（他有封装和数据隐私的意味）
// JS一般是假封装

// 真正私有的类字段和方法
// Public fields
// Private fields
// Public methods
// Private methods
// 还有相同的 static 版本的四种方法，所以合共八种

// class Account {
//   // Public fields
//   // 1. 不需要const、let等声明
//   // 2. 需要分号结尾
//   // 他是通过类构造的，他们不在原型上（很重要）
//   // 也可以通过this引用
//   locale = navigator.language;
//   _movements = [];

//   // Private fields
//   // 1. 用#开头
//   // 也是通过类构造的，不在原型上
//   #movements = []; // 此时控制台会报错
//   #pin; //相当于定义了一个空变量

//   constructor(owner, currnecy, pin) {
//     this.owner = owner;
//     this.currnecy = currnecy;
//     this.#pin = pin; // 对私有变量进行赋值
//     this._movements = []; //添加下划线的做法是行内规矩，说明他是一个“被保护”的变量
//     this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${this.owner}`);
//   }

//   // Public methods
//   // “被保护”的变量就得通过公共方法来访问
//   getMovements() {
//     // return this._movements;
//     return this.#movements; // 这样访问私有变量才不会报错
//   }

//   // 对象接口函数 API
//   deposit(val) {
//     // this._movements.push(val);
//     this.#movements.push(val); // 这样访问私有变量才不会报错
//     return this;
//   }
//   withdraw(val) {
//     // this.movements.push(-val);
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this.#approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//     return this;
//   }

//   static helper() {
//     // static变量不能用在所有实例上，只能用在类本身上
//     console.log();
//   }

//   // Private methods
//   #approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 111);
// console.log(acc1);

// // 这不是一个好方法，应该创建方法
// // acc1.movements.push(250);
// // acc1.movements.push(-140);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// // acc1._approveLoan(2000); //可以看到这是个内部方法 无法被使用，只能在类的内部使用
// // acc1.#approveLoan(2000); // 原本是使用下划线的，改成这个之后由于现代JS还未支持，所以直接报错
// console.log(acc1.getMovements());

// console.log(acc1);
// console.log(acc1.pin);

// // console.log(acc1.#movements); //直接报错

// Account.helper();

// // 链式
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// // 需要这些函数都设置了" return this;"才可链化
// console.log(acc1.getMovements());

// ===========================================================================Code Challenge 4
// 使用ES6重新创造challenge3
//  创建一个EV类，它是Car类的子类
//  EV类有个充电属性，是私有属性
//  实现私有的链接加速和充电电池方法，刹车方法也是如此

// 测试数据： 'Rivian' 以120km/h的速度行驶，并且是23的电

// 自己写的
// class Car {
//   make;
//   speed;
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
//   }
// }

// const EV = new Car('Tesla', 120, 23);

// EV.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed}km/h, with charge ${this.charge}`
//   );
// };

// console.log('EV: ', EV);
// EV.accelerate();
// EV.brake();
// EV.accelerate();

// 老师写的
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
//     return this;
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
//     return this;
//   }
// }

// class EVCl extends CarCl {
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.charge = charge;
//   }

//   // 新增原型方法
//   chargeBattery(chargeTo) {
//     this.charge = chargeTo;
//     return this;
//   }
//   // 修改原型方法，因为原本原型就有这个方法，所以在这里是新增给自己的原型方法，原型链会先用这个
//   accelerate() {
//     this.speed += 20;
//     this.#charge--;
//     console.log(
//       `${this.make} is going at ${this.speed}km/h, with a charge of ${this.charge}`
//     );
//     return this;
//   }
// }

// const rivian = new EVCl('Rivian', 120, 23);
// // console.log(rivian);
// // console.log(rivian.#charge); //行不通的
// rivian
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .brake()
//   .chargeBattery(50)
//   .accelerate();

