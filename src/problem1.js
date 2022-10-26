function exceptionChecker(array) {
  if(!Array.isArray(array)) return false;
  if(array.length !== 2) return false;
  if(array[0]%2 !== 1 || array[1]%2 !== 0) return false;
  if(array[1]-array[0] !== 1) return false;
  if(array[0] < 1 || array[1] > 400) return false;

  array.forEach((index) => {
    if(!Number.isInteger(index)) return false;
  });

  return true;
}

function problem1(pobi, crong) {
  var answer;
  if(!exceptionChecker(pobi) || !exceptionChecker(crong)) return -1;

  return answer;
}

module.exports = problem1;
