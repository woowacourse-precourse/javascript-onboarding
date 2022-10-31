function problem1(pobi, crong) {
  var answer;
  let pobiLeft = pobi[0];
  let pobiRight = pobi[1];
  let crongLeft = crong[0];
  let crongRight = crong[1];

  let pobiMaxSum = largerNumber(digitSum(pobiLeft), digitSum(pobiRight));
  let pobiMaxMultiply = largerNumber(digitMultiply(pobiLeft), digitMultiply(pobiRight));
  let pobiMax = largerNumber(pobiMaxSum, pobiMaxMultiply); // max score for pobi
  let crongMaxSum = largerNumber(digitSum(crong[0]), digitSum(crong[1]));
  let crongMaxMultiply = largerNumber(digitMultiply(crong[0]), digitMultiply(crong[1]));
  let crongMax = largerNumber(crongMaxSum, crongMaxMultiply); // max score for crong

  if (pobiRight - pobiLeft !== 1 || crongRight - crongLeft !== 1) {
      answer = -1; // wrong page number: return -1
  } else if (pobiMax > crongMax) {
      answer = 1; // pobi wins: return 1
  } else if (pobiMax < crongMax) {
      answer = 2; // crong wins: return 2
  } else if (pobiMax === crongMax) {
      answer = 0; // draw: return 0
  }
  return answer;
}

module.exports = problem1;

// function that returns the sum of digits
function digitSum(number) {
  let sum = 0;
  while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
  }
  return sum;
}

// function that returns multiplied digits
function digitMultiply(number) {
  let multiply = 1;
  while (number > 0) {
      multiply *= number % 10;
      number = Math.floor(number / 10);
  }
  return multiply;
}

// function that compares two numbers and returns the larger one
function largerNumber(number1, number2) {
  if (number1 > number2) {
      return number1;
  } else {
      return number2;
  }
}