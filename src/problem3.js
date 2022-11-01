function problem3(number) {
  let totalNumber = 0;
  for (let i = 1; i <= number; i++) {
    let temporaryNumber = checkData(i);
    totalNumber += temporaryNumber;
  }
  return totalNumber;
}

function checkData(number) {
  //   console.log(number);
  let count = 0;
  do {
    let testNumber = number % 10;
    if (testNumber === 3 || testNumber === 6 || testNumber === 9) {
      count++;
    }
    number = Math.floor(number / 10);
  } while (number > 0);
  //   console.log(count);
  return count;
}

module.exports = problem3;
