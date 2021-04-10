"use strict"
// Заполнить массив из 10 элементов случайными целыми числами от 100 до 200

function getRandomArr() {
  let myArr = [];
  for (let i = 0; i < 10; i++) {
    myArr.push(Math.floor(Math.random() * 200));
  }
  return myArr;
}

console.log(getRandomArr());



// Создать функцию, которая принимает amout - количество создаваемых объектов,
// создает указанное кол-во объектов пользователей с полями email, age, isMale.
// Поле email заполняется последовательно в формате user${i}@gmail.com. i - счетчик цикла.
// Поле age заполняется рандомно от 12 до 50 лет. (Только целые числа).
// Поле isMale заполняется рандомно значениями true или false.


function User(firstName, lastName, email, age, isMale, isSubscribed = false) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.isMale = isMale;
  this.isSubscribed = isSubscribed;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomUsers(amount) {
  const usersArray = [];
  for (let i = 0; i < amount; i++) {
    usersArray.push(
      new User(
        `Name${i}`,
        `Name${i}`,
        ` user${i}@gmail.com`,
        getRandomIntInclusive(12, 50),
        Math.random() < 0.5,
        Math.random() < 0.5
      )
    );
  }
  return usersArray;
}

console.log(getRandomUsers(15));





