function problem3(number) {
  var answer;
  numArr = makeNumArr(number);
  return answer;
}

const makeNumArr = (num) =>
  Array.from(Array(num).keys())
    .map((v) => v + 1)
    .map((v) => v);

module.exports = problem3;
