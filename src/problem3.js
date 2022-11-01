function problem3(number) {
  const answer = countTotalThreeSixNine(number);
  return answer;
}
const countThreeSixNine = (number) => {
  const numArr = number.toString().split("");
  return numArr.reduce(
    (count, num) => (isThreeSixNine(num) ? (count += 1) : count),
    0
  );
};
const countTotalThreeSixNine = (number) => {
  let totalCount = 0;
  for (let i = 1; i <= number; i++) {
    totalCount += countThreeSixNine(i);
  }
  return totalCount;
};
const isThreeSixNine = (num) => {
  return num % 3 == 0 && num != 0;
};

module.exports = problem3;
