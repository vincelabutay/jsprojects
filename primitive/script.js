'use strict';

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('friends:', friend);
console.log('Me', me);
