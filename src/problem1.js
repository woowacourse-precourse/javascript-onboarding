function checkAvailablePages(pages) {
  let isAvailable = true;
  if (pages[0] <= 1 || pages[0] >= 399) {
    isAvailable = false;
  }
  if (pages[0] + 1 != pages[1]) {
    isAvailable = false;
  }
  return isAvailable;
}

function calculateNumber(pageNumber) {
  let plusNum, multiplyNum;
  let digit1 = parseInt(pageNumber % 10);
  let digit2 = parseInt((pageNumber % 100) / 10);
  let digit3 = parseInt((pageNumber % 1000) / 100);

  if (pageNumber.toString().length == 1) {
    plusNum = digit1;
    multiplyNum = digit1;
  } else if (pageNumber.toString().length == 2) {
    plusNum = digit1 + digit2;
    multiplyNum = digit1 * digit2;
  } else {
    plusNum = digit1 + digit2 + digit3;
    multiplyNum = digit1 * digit2 * digit3;
  }

  return plusNum >= multiplyNum ? plusNum : multiplyNum;
}

function compareTwoNumbers(pages) {
  if (calculateNumber(pages[0]) >= calculateNumber(pages[1])) {
    return calculateNumber(pages[0]);
  }
  return calculateNumber(pages[1]);
}

function problem1(pobi, crong) {
  if (!(checkAvailablePages(pobi) && checkAvailablePages(crong))) return -1;

  if (compareTwoNumbers(pobi) > compareTwoNumbers(crong)) return 1;
  else if (compareTwoNumbers(pobi) < compareTwoNumbers(crong)) return 2;
  else if (compareTwoNumbers(pobi) == compareTwoNumbers(crong)) return 0;
  else return -1;
}

module.exports = problem1;
