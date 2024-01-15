const age = 25

function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }

}

console.log(isAdult(age));

const student1Score = 80;

function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else return false;
}

console.log(didStudentPass(student1Score));

const student2Score = 102

function gradeCalculator (score) {
  if (score < 60) {
    return 'F';
  }
  else if (score < 70) {
    return 'D';
  }
  else if (score < 80) {
    return 'C';
  }
  else if (score < 90) {
    return 'B';
  }
  else if (score < 100) {
    return 'A';
  } else return 'A++';
}

console.log(gradeCalculator(student2Score));

let season = 'winter';

function seasonMessenger (season) {
  if (season === 'summer') {
    return 'it\'s a hot day';
  }
  else if (season === 'spring') {
    return 'the flowers are blooming';
  }
  else if (season === 'autumn') {
    return 'the leaves are changing colors';
  }
  else if (season === 'winter') {
    return "it's cold today";
  } else return 'please enter a valid season';
}

console.log(seasonMessenger(season));

const dayOfTheWeek = 'Saturday'

function dayDetector (dayOfTheWeek) {
  if (dayOfTheWeek === 'Saturday' || dayOfTheWeek === 'Sunday') {
    return 'have a good weekend!';
  } else return "it's a weekday!";
}

console.log(dayDetector(dayOfTheWeek));
