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


/*function Users(amount) {
  this.amount = amount;
  this.email = function email() {
    let amount = this.amount;
    for (let i = 0; i < amount; i++) 
    return "user${i}@gmail.com";
  };
  this.age = function age() {
    let minAge = 12;
    let maxAge = 50;
    for (let i = minAge; i < maxAge; i++) {
      return (this.age = Math.floor(Math.random()*maxAge));
    }
  };
  this.isMale = function isMale() {
    return (this.isMale = Math.random());
  };
}

let users1 = new Users(20);
console.log(users1.email());
console.log(users1.age());
console.log(users1.isMale()); */
