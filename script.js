const k1 = parseInt('5px');
const k2 = parseInt('12djd334');
const k3 = parseInt('12.45asdwe12');
const k4 = parseInt('qwqweeewq');

const k5 = parseFloat('5px')
const k6 = parseFloat('12djd334');
const k7 = parseFloat('12.45asdwe12');
const k8 = parseFloat('qwqweeewq');

console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));
console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));

console.log(Math.random() * 19 + 3);

const result = 5 + 5 + '5';
console.log(typeof result);

const email = 'email';
console.log(email.includes('@'));
console.log(email.length);

const first = 'My';
const second = 'name';
const third = 'is';
const fullName = `${first} ${second} ${third} Viktor`;
console.log(fullName);

const userName = 'User';
const payment = 500;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);