function makeArrayBySeparateOrder(n) {
  return (n + "").split("");
}

function calcClapCount(n) {
  let count = 0;
  const digits = makeArrayBySeparateOrder(n);
  digits.forEach((digit) => {
    if (digit % 3 === 0) count++;
  });

  return count;
}

function problem3(number) {
  var answer;

  return answer;
}

module.exports = problem3;
