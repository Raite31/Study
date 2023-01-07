'use strict';

class PersonCl {
  constructor(fullName, birthYear) {
    // What is constructor
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  // 体现get和set在数据验证上的作用
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log('jessica: ', jessica);
// 在这里可以看到jessica的prototype
jessica.calcAge();
console.log('jessica.age：', jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);
// prototype：prototype表示该函数的原型，也表示一个类的成员的集合。 在通过new创建一个类的实例对象的时候，prototype对象的成员都成为实例化对象的成员。
// __proto__：
jessica.greet();

const walter = new PersonCl('Walter', 1965);

// set和get对于数据验证非常有用
const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
    // slice是浅删除的方法，pop是把删除的东西打印出来的方法
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

// account.latest(50); 这样写就成了函数了，🙅‍
account.latest = 50;

console.log(account.movements);
