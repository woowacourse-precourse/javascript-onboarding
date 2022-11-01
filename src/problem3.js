function getClapCount(number) {
  let count = 0;

  while (number) {
    if (number % 10 === 3 || number % 10 === 6 || number % 10 === 9) {
      count++;
    }

    number = parseInt(number / 10);
  }

  return count;
}

function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    answer += getClapCount(i);
  }

  return answer;
}

module.exports = problem3;
