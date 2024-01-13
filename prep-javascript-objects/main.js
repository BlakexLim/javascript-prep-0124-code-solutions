const person = {
  firstName: 'Blake',
  lastName: 'Lim',
  hobby: 'building legos',
};
console.log(person);
const fullName = person['firstName'] + ' ' + person.lastName;
console.log('This person\'s name is: ' + fullName);

person.job = 'Waiter';
console.log('The person\'s current job is: ', person.job);

person['previousJob'] = 'Astronaut';
console.log('This person\'s last job was: ', person['previousJob']);

console.log(person);
