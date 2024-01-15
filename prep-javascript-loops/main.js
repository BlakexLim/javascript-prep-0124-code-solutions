
function whileLoop1 () {
  let newArray = []
  let i = 0
  while (i < 10) {
    newArray.push(i);
    i++;

  }

  return newArray;
}

console.log(whileLoop1(0));

function whileLoop2 () {
  let newArray2 = []
  let i = 0
  while (i < 19) {
    newArray2.push(i);
    i+=2;
  }

  return newArray2;
}

console.log(whileLoop2(0));

function forLoop1 () {
  let newArray = []

  for (let i = 0; i < 10; i++) {
    newArray.push(i);
  }

  return newArray;
}

console.log(forLoop1(0));

function forLoop2 () {
  for (let i = 100; i <= 100 && i >= 0; i--) {
console.log('Time till explosion ' + i + '!')
  }
}

forLoop2();

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1 () {
let propArray = [];
  for (const x in object) {
  propArray.push(`${x}`);
  }
  return propArray;
}

console.log(forInLoop1());

function forInLoop2 () {
  let propArray = [];
    for (const x in object) {
      propArray.push(`${object[x]}`)
    };
  return propArray;
}

console.log(forInLoop2());
