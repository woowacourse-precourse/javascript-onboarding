function checkThreeNumber(number) {
  return number % 10 === 3 || number % 10 === 6 || number % 10 === 9
    ? true
    : false;
}

function clapCount(number) {
  let clapCount = 0;
  while (number > 2) {
    if (checkThreeNumber(number)) {
      clapCount++;
    }
    number = parseInt(number / 10);
  }
  return clapCount;
}

function problem3(number) {
  let count = 0;
  for (let countNumber = 2; countNumber <= number; countNumber++) {
    count += clapCount(countNumber);
  }
  return count;
}

module.exports = problem3;
