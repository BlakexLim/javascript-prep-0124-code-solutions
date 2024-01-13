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
