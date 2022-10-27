function problem3(targetNumber) {
  var answer = 0;
  for (let number = 1; number <= targetNumber; number++) {
    answer += includesNumbers(number, [3, 6, 9]);
  }
  return answer;
}

function includesNumbers(targetNumber, compareNumbers) {
  let count = 0;
  for (let number of String(targetNumber)) {
    if (compareNumbers.includes(Number(number))) {
      count++;
    }
  }
  return count;
}

console.log(problem3(33));

module.exports = problem3;
