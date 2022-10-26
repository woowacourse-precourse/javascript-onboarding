const POBIWIN = 1;
const CRONGWIN = 2;
const DRAW = 0;
const ERR = -1;

// 각 자리 숫자를 모두 더해 반환해주는 함수
const calcSum = (num) => {
  const result = (num + "").split("").reduce((acc, cur) => {
    return (acc += parseInt(cur));
  }, 0);
  return result;
};

// 각 자리 숫자를 모두 곱해 반환해주는 함수
const calcMul = (num) => {
  const result = (num + "").split("").reduce((acc, cur) => {
    return (acc *= parseInt(cur));
  }, 1);
  return result;
};

function problem1(pobi, crong) {
  var answer;
  let scorePobi, scoreCrong;

  scorePobi = Math.max(
    calcSum(pobi[0]),
    calcSum(pobi[1]),
    calcMul(pobi[0]),
    calcMul(pobi[1])
  );

  scoreCrong = Math.max(
    calcSum(crong[0]),
    calcSum(crong[1]),
    calcMul(crong[0]),
    calcMul(crong[1])
  );

  answer =
    scorePobi >= scoreCrong
      ? scorePobi === scoreCrong
        ? DRAW
        : POBIWIN
      : CRONGWIN;
  return answer;
}

module.exports = problem1;
