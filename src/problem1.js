function problem1(pobi, crong) {

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
