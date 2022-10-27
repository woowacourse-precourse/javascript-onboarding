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

function get_digits_helper(num) {
  let digits = []; // 1, 10, 100
  for (let i = 0; i < 3; ++i) {
    const temp = num % 10;
    digits.push(temp);
    num = (num - temp) / 10;
    if (num === 0) {
      break;
    }
  }
  return digits;
}

function get_digits(person) {
  let page_digits = [[], []];
  let [left, right] = page_digits;
  left = get_digits_helper(person[0]); // left page digits
  right = get_digits_helper(person[1]); // right page digits
  return page_digits;
}

function problem1(pobi, crong) {
  // execption
  if (exception_handler(pobi) || exception_handler(crong)) {
    return -1;
  }

  // for pobi
  let pobi_page_digits = get_digits(pobi);
  const [pobi_left, pobi_right] = pobi_page_digits;

  // for crong
  let crong_page_digits = get_digits(crong);
  const [crong_left, crong_right] = crong_page_digits;

  var answer;
  return answer;
}

module.exports = problem1;
