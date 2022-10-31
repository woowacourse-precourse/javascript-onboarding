function problem1(pobi, crong) {
  var answer;
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }
  for (let i = 0; i < 2; i++) {
    if (400 < pobi[i] || pobi[i] < 1) {
      return -1;
    }
    if (400 < crong[i] || crong[i] < 1) {
      return -1;
    }
  }
  pobiMax = solve(pobi[0], pobi[1]);
  crongMax = solve(crong[0], crong[1]);
  if (pobiMax === crongMax) {
    answer = 0;
  } else if (pobiMax > crongMax) {
    answer = 1;
  } else if (pobiMax < crongMax) {
    answer = 2;
  } else {
    answer = -1;
  }
  return answer;
}

function solve(left, right) {
  addLeft = add(left);
  addRight = add(right);
  multiplyLeft = multiply(left);
  multiplyRight = multiply(right);
  return Math.max(addLeft, addRight, multiplyLeft, multiplyRight);
}

function add(num) {
  result =
    (num % 10) +
    ((num % 100) - (num % 10)) / 10 +
    ((num % 1000) - (num % 100)) / 100;
  return result;
}

function multiply(num) {
  str = num.toString();
  numLength = str.length;
  if ((numLength = 2)) {
    result = (num % 10) * (((num % 100) - (num % 10)) / 10);
    return result;
  } else {
    result =
      (num % 10) *
      (((num % 100) - (num % 10)) / 10) *
      (((num % 1000) - (num % 100)) / 100);
    return result;
  }
}
module.exports = problem1;
