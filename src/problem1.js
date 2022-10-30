function problem1(pobi, crong) {

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
