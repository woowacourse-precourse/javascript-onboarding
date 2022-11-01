function problem1(pobi, crong) {
  if (checkError(pobi) || checkError(crong)) {
    return -1;
  }

  const pobiNum = getNum(pobi);
  const crongNum = getNum(crong);

  if (pobiNum > crongNum) {
    return 1;
  }

  if (pobiNum < crongNum) {
    return 2;
  }

  if (pobiNum === crongNum) {
    return 0;
  }
}

function checkError(arr) {
  //왼쪽 숫자가 홀수가 아니거나 오른쪽 숫자가 홀수가 아닌 경우
  if (arr[0] % 2 !== 1 || arr[1] % 2 !== 0) {
    return true;
  }

  //왼쪽 숫자가 오른쪽 숫자보다 큰 경우
  if (arr[0] - arr[1] >= 0) {
    return true;
  }

  //연속된 숫자가 아닌 경우
  if (arr[1] - arr[0] !== 1) {
    return true;
  }
}

function getNum(arr) {
  const leftNum = getMax(arr[0]);
  const rightNum = getMax(arr[1]);

  if (leftNum > rightNum) {
    return leftNum;
  }

  if (leftNum < rightNum) {
    return rightNum;
  }
} 

function getMax(num) {
  const sum = getAddResult(num);
  const mul = getMulResult(num);
  let max = 0;

  if (sum > mul) {
    max = sum;
  } 
  if (sum < mul) {
    max = mul;
  }
  if (sum === mul) {
    max = sum;
  }

  return max;
}

function getAddResult(num) {
  let result = 0;
  while(num !== 0) {
    result += num % 10;
    num = Math.floor(num / 10);
  }

  return result;
}

function getMulResult(num) {
  let result = 1;
  while(num !== 0) {
    result *= num % 10;
    num = Math.floor(num / 10);
  }

  return result;
}

module.exports = problem1;
