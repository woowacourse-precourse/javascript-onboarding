function problem3(number) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    if (includesNumbers(i, [3, 6, 9])) {
      answer++;
    }
  }
  return answer;
}

function includesNumbers(number, compareNumbers) {
  for (let compareNumber of compareNumbers) {
    if (String(number).includes(compareNumber)) {
      return true;
    }
  }
  return false;
}

console.log(problem3(13));

module.exports = problem3;
