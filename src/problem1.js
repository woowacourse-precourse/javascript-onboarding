// Brute Force Search
/*
  As each page can contain 0 values, sum or multipled values could be different,
  which means we'd better comapre all possible values one by one.
  As there are only few test cases (4), it'll be better to use brute force. 
*/
const answer = (arr) => {
  const sumLeft = arr[0]
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
  const sumRight = arr[1]
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
  const multipleLeft = arr[0]
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc * cur);
  const multipleRight = arr[1]
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc * cur);
  return [sumLeft, sumRight, multipleLeft, multipleRight].sort(
    (a, b) => a - b
  )[3];
};

function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1) {
    return -1;
  } else {
    if (answer(pobi) > answer(crong)) {
      return 1;
    } else if (answer(pobi) < answer(crong)) {
      return 2;
    } else if (answer(pobi) === answer(crong)) {
      return 0;
    }
  }
}

module.exports = problem1;
