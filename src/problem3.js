function check369(num) {
  return [3, 6, 9].includes(num % 10);
}

function problem3(number) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    let targetNumber = i;

    while (targetNumber > 0) {
      if (check369(targetNumber)) answer++;
      targetNumber = Math.floor(targetNumber / 10);
    }
  }

  return answer;
}

module.exports = problem3;
