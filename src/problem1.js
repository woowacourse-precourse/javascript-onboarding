function getMaxNumber(numbers) {
  let addition = 0;
  let multiplication = 1;
  
  for (let i = 0; i <numbers.length; i++) {
    addition += numbers[i];
    multiplication *= numbers[i];
  }
  
  const maxNumber = Math.max(addition, multiplication);
  return maxNumber;
}

function divideNumber(number) {
  let numbers = [];

  if (number >= 100) {
    numbers.push(parseInt(number / 100));
  }

  if (number >= 10) {
    numbers.push(parseInt(number % 100 / 10));
  }

  numbers.push(number % 10);

  return numbers;
}

function getMaxNumberPerPage(pages) {
  let leftNumbers = divideNumber(pages[0]);
  let rightNumbers = divideNumber(pages[1]);

  let leftMaxNumber = getMaxNumber(leftNumbers);
  let rightMaxNumber = getMaxNumber(rightNumbers);

  const maxNumber = Math.max(leftMaxNumber, rightMaxNumber);

  return maxNumber;
}


function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }

  const maxNumberOfPobi = getMaxNumberPerPage(pobi);
  const maxNumberOfCrong = getMaxNumberPerPage(crong);

  if (maxNumberOfPobi === maxNumberOfCrong) {
    return 0
  }

  const winner = maxNumberOfPobi > maxNumberOfCrong ? 1 : 2;
  var answer = winner;
  return answer;
}

module.exports = problem1;
