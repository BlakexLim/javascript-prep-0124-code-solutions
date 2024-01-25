function sayHello(nickname) {
  const greeting = 'Hello, ' + nickname + '!';
  console.log(greeting);
}
sayHello('Blake');
sayHello('Dan');
sayHello('Bryan');
sayHello('Sal');

function getFullName(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;
  return fullName;

  const greeting = 'Hello ' + fullName + '!';
  return greeting;
}

const daradypo = getFullName('Blake', 'Lim');
console.log(daradypo);

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const twoAddedNumbers = addTwoNumbers(7, 11);
console.log('addTwoNumbers exercise: ' + twoAddedNumbers);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const hour = convertHoursToMinutes(4);
console.log('convertHoursToMinutes exercise:', hour);

function getGreeting(name) {
  return 'Hello ' + name;
}
const greeting = getGreeting('world');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const product = addAndMultiplyBy5(5, 2);
console.log(product);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const result = multiplyAndDivideBy5(5, 10);
console.log(result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const subtract = subtractTwoNumbers(20, 15);
console.log(subtract);

function getCircleCircumference(radius) {
  return 2 * 3.14159 * radius;
}
const circle = getCircleCircumference(3);
console.log(circle);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('Blake', 'Lim');
console.log(fullName);

function cube(number) {
  return number * number * number;
}
const cubes = cube(3);
console.log(cubes);
