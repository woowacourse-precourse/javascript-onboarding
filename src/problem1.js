function problem1(pobi, crong) {
  var answer = solution(pobi, crong);
  return answer;
}

function solution(pobi, crong) {
  if (!checkValid(pobi) || !checkValid(crong)) {
    return -1;
  }
  pobiNum = biggerNum(pobi);
  crongNum = biggerNum(crong);
  if (pobiNum == crongNum) {
    return 0;
  } else if (pobiNum > crongNum) {
    return 1;
  } else if (pobiNum < crongNum) {
    return 1;
  } else {
    return -1;
  }

  
}

function checkValid(array) {
  return array[0]+1 == array[1];
}

function biggerNum(array) {
  num1 = ones(array[0]);
  num2 = tens(array[0]);
  num3 = hundreds(array[0]);
  num4 = ones(array[1]);
  num5 = tens(array[1]);
  num6 = hundreds(array[1]);
  firstNum = compareNum(num1+num2+num3, num1*num2*num3);
  secondNum = compareNum(num4+num5+num6, num4*num5*num6);
  result = compareNum(firstNum, secondNum);
}

function ones(num) {
  return num % 10;
}
function tens(num) {
  return num / 10 % 10;
}
function hundreds(num) {
  return num / 100;
}

function compareNum(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}

module.exports = problem1;
