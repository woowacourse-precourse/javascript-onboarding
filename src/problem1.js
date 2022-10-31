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

function eachPageScore(page) {
  let plus = 0;
  let multiply = 1;
  while (page > 0) {
    digit = page % 10;
    plus += digit;
    multiply *= digit;
    page = Math.floor(page / 10);
  }
  score = Math.max(plus, multiply);
  return score;
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

  //pobi의 가장 큰 수
  const pLeft = eachPageScore(pobi[0]);
  const pRight = eachPageScore(pobi[1]);
  const pScore = Math.max(pLeft, pRight);
  //crong의 가장 큰 수
  const cLeft = eachPageScore(crong[0]);
  const cRight = eachPageScore(crong[1]);
  const cScore = Math.max(cLeft, cRight);

  return answer;
}

module.exports = problem1;
