function checkException(arr) {
  const diff = arr[1] - arr[0] === 1 ? true : false;
  var range = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0 && arr[i] <= 400) {
      range = range && true;
    } else {
      range = range && false;
    }
  }
  return diff && range;
}

function problem1(pobi, crong) {
  var answer;
  //예외처리
  const checkP = checkException(pobi);
  const checkC = checkException(crong);
  if (!checkP || !checkC) {
    answer = -1;
    return answer;
  }
  return answer;
}

module.exports = problem1;
