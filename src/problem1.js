function exception_handler(pages) {
  const [left, right] = pages;

  // The difference of these pages must be 1
  const exception1 = right - left !== 1;
  // Left page should be an even number, and right page should be an odd number.
  const exception2 = left % 2 !== 1 || right % 2 !== 0;
  // Each pages are between 2 and 399.
  const exception3 = !(1 < left && left < 400 && 1 < right && right < 400);

  if (exception1 || exception2 || exception3) {
    return true;
  }

  return false;
}

function problem1(pobi, crong) {
  // The page number is [1:400]
  // left page(index 0) is an odd number.
  // right page(index 1) is an even number

  // execption
  if (exception_handler(pobi) || exception_handler(crong)) {
    return -1;
  }
  var answer;
  return answer;
}

module.exports = problem1;
