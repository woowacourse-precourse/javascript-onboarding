function check369(num) {
  return [3, 6, 9].includes(num);
}

function getRest(divider) {
  return function (num) {
    return num % divider;
  };
}

function divide(divider) {
  return function (num) {
    return Math.floor(num / divider);
  };
}

function problem3(number) {
  var answer = 0;
  const divider = 10;
  const getRestByDivide10 = getRest(divider);
  const divideBy10 = divide(10);

  for (let i = 1; i <= number; i++) {
    let targetNumber = i;

    while (targetNumber > 0) {
      if (check369(getRestByDivide10(targetNumber))) answer++;
      targetNumber = divideBy10(targetNumber);
    }
  }

  return answer;
}

module.exports = problem3;
