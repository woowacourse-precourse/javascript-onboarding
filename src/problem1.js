function problem1(pobi, crong) {
  var answer = solution(pobi, crong);
  return answer;
}

function solution(pobi, crong) {
  if (!checkValid(pobi) || !checkValid(crong)) {
    return -1;
  }
  let pobiNum = biggerNum(pobi);
  let crongNum = biggerNum(crong);
  console.log("FINAL RESULT: ", pobiNum, crongNum)
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
  const num1 = ones(array[0]);
  const num2 = tens(array[0]);
  const num3 = hundreds(array[0]);
  const num4 = ones(array[1]);
  const num5 = tens(array[1]);
  const num6 = hundreds(array[1]);
  firstNum = compareNum(num1+num2+num3, multiplication(array[0],num1,num2,num3));
  console.log("firstNum!", firstNum);
  console.log("add all ", num1+num2+num3);
  console.log("multi all",  multiplication(array[0],num1,num2,num3));
  secondNum = compareNum(num4+num5+num6, multiplication(array[1],num4,num5,num6));
  console.log("2222Num!", secondNum);
  console.log("add all ", num4+num5+num6);
  console.log("multi all",  multiplication(array[1],num4,num5,num6));
  result = compareNum(firstNum, secondNum);
  console.log("resstult!", result);
  return result;
}

function ones(num) {
  return num % 10;
}
function tens(num) {
  return Math.floor(num / 10 % 10);
}
function hundreds(num) {
  return Math.floor(num / 100);
}

function multiplication (num, x, y, z) {
  if (num < 10) {
    return x;
  } else if (num < 100) {
    return x * y;
  } else {
    return x * y * z;
  }
}

function compareNum(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}

module.exports = problem1;
