function problem3(number) {
  let answer;

  return answer;
}

const countThreeSixNine = (number) => {
  let numArr = number.toString().split("");
  let count = 0;
  numArr.forEach((n) => {
    if (n % 3 == 0) count++;
  });
  return count;
};

module.exports = problem3;
