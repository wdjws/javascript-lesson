// 基礎編

// Q1 変数
let nickname = 'ジュン';
let age = 28;
let greet = '私のニックネームは' + nickname + 'です。年齢は'+ age + '歳です。';
console.log(greet);

// Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let templateText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(templateText);

// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

// Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

// Q5 四則演算
let playerAgeTotal = playerList[0].age + playerList[1].age + playerList[2].age;
console.log(playerAgeTotal / playerList.length);

// Q6 関数
function sayHello() {
  console.log('Hello');
}
sayHello();

const sayWorld = function() {
  console.log('World');
}
sayWorld();

// Q7 メソッド
user.birthday = '2000-09-27';
user.sayHello = function() {
  console.log('Hello！');
}
user.sayHello();

// Q8 引数
let calc = {};
calc.add = function(x, y) {
  console.log(x + y);
}
calc.add(3, 4);

calc.subtract = function(x, y) {
  console.log(x - y);
}
calc.subtract(12, 2);

calc.multiply = function(x, y) {
  console.log(x * y);
}
calc.multiply(7, 7);

calc.divide = function(x, y) {
  console.log(x / y);
}
calc.divide(15, 3);

// Q9 返り値
let x = 5;
let y = 3;

function remainder(x, y) {
  let number = x % y;
  return number;
}

console.log(x + 'を' + y + 'で割った余りは' + remainder(x, y) + 'です。');

// Q10 スコープ
// fooという関数の中で、変数xが定義されているローカル変数のため、
// 関数fooの中でしか参照することができない、スコープの対象外であるため。


// 応用編

// Q1 標準組み込みオブジェクト
let random = Math.floor(Math.random() * 10);
console.log(random);

// Q2 コールバック関数
function delayGreet() {
  console.log('Hello World!');
}
setTimeout(delayGreet, 3000);

// Q3 if
let num = 0;
if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else {
  console.log('num is 0');
}

// Q4 for
let numbers = [];
for (let i = 0; i <= 99; i++) {
  numbers.push(i);
}
console.log(numbers);

// Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  let data = mixed[i];
  if (typeof data !== 'number') {
    console.log('not number');
    } else {
      console.log(data % 2 === 0 ? 'even' : 'odd');
    }
}