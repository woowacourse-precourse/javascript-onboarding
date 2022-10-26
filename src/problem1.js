// 각 자릿수들의 합을 구하는 기능
const sumDigit = (num) => {
  return parseInt(num / 100) + parseInt((num % 100) / 10) + parseInt(num % 10);
};

// 각 자릿수들의 곱을 구하는 기능
const multiplyDigit = (num) => {
  if (parseInt(num / 100) == 0) {
    if (parseInt((num % 100) / 10) == 0) {
      return parseInt(num % 10);
    } else {
      return parseInt((num % 100) / 10) * parseInt(num % 10);
    }
  } else {
    if (parseInt((num % 100) / 10) == 0) {
      return parseInt(num / 100) * parseInt(num % 10);
    } else {
      return (
        parseInt(num / 100) * parseInt((num % 100) / 10) * parseInt(num % 10)
      );
    }
  }
};

// 곱과 합들 중 가장 큰 수를 본인의 점수로 구하는 기능
const maxScore = (leftPage, rightPage) => {
  return Math.max(
    sumDigit(leftPage),
    sumDigit(rightPage),
    multiplyDigit(leftPage),
    multiplyDigit(rightPage)
  );
};

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
