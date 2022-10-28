function problem3(number) {
  const answer = countTotalThreeSixNine(number);
  return answer;
}
const countThreeSixNine = (number) => {
  let numArr = number.toString().split("");
  let count = 0;
  numArr.forEach((n) => {
    if (n % 3 == 0 && n != 0) count++;
  });
  return count;
};
const countTotalThreeSixNine = (number) => {
  let totalCount = 0;
  for (let i = 1; i <= number; i++) {
    totalCount += countThreeSixNine(i);
  }
  return totalCount;
};

module.exports = problem3;
