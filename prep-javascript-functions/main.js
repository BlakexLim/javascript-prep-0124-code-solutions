function sayHello(nickname) {
  var greeting = 'Hello, ' + nickname + '!';
  console.log(greeting);
}
sayHello('Blake');
sayHello('Dan');
sayHello('Bryan');
sayHello('Sal');

function getFullName(firstName, lastName) {
  var fullName = firstName + ' ' + lastName;
  return fullName;

  var greeting = 'Hello ' + fullName + '!';
    return greeting;
}

var blake = getFullName('Blake', 'Lim');
console.log(blake);


function addTwoNumbers (num1, num2) {
  return num1 + num2
}
let twoAddedNumbers = addTwoNumbers (7, 11);
console.log("addTwoNumbers exercise: " + twoAddedNumbers);


function convertHoursToMinutes (hours) {
  return hours * 60
}
let hour = convertHoursToMinutes(4);
console.log("convertHoursToMinutes exercise:", hour);


function getGreeting(name) {
  return "Hello " + name
}
let greeting = getGreeting('world');
console.log(greeting);

function addAndMultiplyBy5 (num1, num2) {
  return (num1 + num2) * 5
}
let product = addAndMultiplyBy5(5, 2);
console.log(product);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5
}
let result = multiplyAndDivideBy5(5, 10);
console.log(result);

function subtractTwoNumbers(num1, num2) {
  return (num1 - num2)
}
let subtract = subtractTwoNumbers(20, 15);
console.log(subtract);

function getCircleCircumference(radius) {
  return (2 * 3.14159) * radius
}
let circle = getCircleCircumference(3);
console.log(circle);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName
}
let fullName = getFullName('Blake', 'Lim');
console.log(fullName);

function cube(number) {
  return number * number * number
}
let cubes = cube(3);
console.log(cubes);
