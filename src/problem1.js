// Brute Force Search
/*
  As each page can contain 0 values, sum or multipled values could be different,
  which means we'd better comapre all possible values one by one.
  As there are only few test cases (4), it'll be better to use brute force. 
*/

// Function of calculating 4 different values
const answer = (arr) => {
  // Calculating sum of left page digits
  const sumLeft = arr[0]
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
  // Calculating sum of right page digits
  const sumRight = arr[1]
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
  // Calculating multipled values of left page digits
  const multipleLeft = arr[0]
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc * cur);
  // Calculating multipled values of right page digits
  const multipleRight = arr[1]
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc * cur);
  // Sort all 4 values in ascending orders and get the highest one only.
  return [sumLeft, sumRight, multipleLeft, multipleRight].sort(
    (a, b) => a - b
  )[3];
};

function problem1(pobi, crong) {
  // Check if there are any exceptions in page numbers
  // It can't be possible that difference between left and right page digits more than 1
  if (pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1) {
    return -1;
  } else {
    // Compare the differences
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
