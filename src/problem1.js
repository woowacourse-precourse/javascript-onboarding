function exception_handler(pages) {
  const [left, right] = pages;

  // The difference of these pages must be 1
  const exception1 = right - left !== 1;
  // Left page should be an even number, and right page should be an odd number.
  const exception2 = left % 2 !== 1 || right % 2 !== 0;
  // Each pages are between 2 and 399.
  const exception3 = !(1 < left && left < 400 && 1 < right && right < 400);

  return exception1 || exception2 || exception3;
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
  let page_digits = [];
  page_digits.push(get_digits_helper(person[0])); // left page digits
  page_digits.push(get_digits_helper(person[1])); // right page digits
  return page_digits;
}

function get_score(digits) {
  let sum = 0;
  let mul = 1;
  for (let digit of digits) {
    sum += digit;
    mul *= digit;
  }
  return Math.max(sum, mul);
}

function problem1(pobi, crong) {
  // execption
  if (exception_handler(pobi) || exception_handler(crong)) {
    return -1;
  }

  // for pobi
  let pobi_page_digits = get_digits(pobi);
  const [pobi_left, pobi_right] = pobi_page_digits;
  const pobi_score = Math.max(get_score(pobi_left), get_score(pobi_right));

  // for crong
  let crong_page_digits = get_digits(crong);
  const [crong_left, crong_right] = crong_page_digits;
  const crong_score = Math.max(get_score(crong_left), get_score(crong_right));

  if (pobi_score > crong_score) {
    return 1;
  } else if (pobi_score < crong_score) {
    return 2;
  } else if (pobi_score === crong_score) {
    return 0;
  }
}

module.exports = problem1;
