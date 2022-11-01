function problem3(number) {
  var answer;

  const numArr = number.toString().split("");
  const tens = parseInt(numArr[0]);
  const units = parseInt(numArr[1]);

  const quotient = parseInt(number / 3);
  if (tens % 3 === 0) {
    answer = quotient + units + 1 - parseInt(units / 3);
  } else {
    answer = quotient;
  }
  return answer;
}

module.exports = problem3;
