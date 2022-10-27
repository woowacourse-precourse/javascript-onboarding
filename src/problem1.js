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

function get_digits(num) {
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

function problem1(pobi, crong) {
  // execption
  if (exception_handler(pobi) || exception_handler(crong)) {
    return -1;
  }

  // for pobi
  let pobi_page_digits = [];
  pobi_page_digits.push(get_digits(pobi[0])); // left page digits
  pobi_page_digits.push(get_digits(pobi[1])); // right page digits

  // for crong
  let crong_page_digits = [];
  crong_page_digits.push(get_digits(crong[0])); // left page digits
  crong_page_digits.push(get_digits(crong[1])); // right page digits

  var answer;
  return answer;
}

module.exports = problem1;
