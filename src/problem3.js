function makeArrayBySeparateOrder(n) {
  return (n + "").split("");
}

function calcClapCount(n) {
  let count = 0;
  const digits = makeArrayBySeparateOrder(n);
  digits.forEach((digit) => {
    if (digit == "3" || digit == "6" || digit == "9") count++;
  });

  return count;
}

function problem3(number) {
  var answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += calcClapCount(i);
  }
  return answer;
}

module.exports = problem3;
