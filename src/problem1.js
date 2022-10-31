const POBIWIN = 1;
const CRONGWIN = 2;
const DRAW = 0;
const ERR = -1;

// 각 자리 숫자를 쪼개서 숫자 배열을 반환하는 함수
const splitNumberToArray = (number) => {
  return String(num)
    .split("")
    .map((char) => Number(char));
};

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

// 테스트 값의 예외사항 체크
const checkExcep = (arr) => {
  let left = arr[0];
  let right = arr[1];

  // 왼쪽 페이지 < 오른쪽 페이지 (두 값의 차이가 1인지)
  if (right - left === 1) {
    if (left % 2 !== 1) return false; // 왼쪽 페이지가 홀수값이 아니라면
  } else return false; // 두 페이지 값의 차이가 1이 아니라면

  // 페이지의 값이 범위 내에 있는지 검사
  if (right >= 2 && right <= 400 && left >= 1 && left <= 399) return true;
  return false; // 범위 밖이라면
};

function problem1(pobi, crong) {
  var answer;
  let scorePobi, scoreCrong;

  // pobi와 crong의 페이지 값이 올바른지 검사
  if (!checkExcep(pobi) || !checkExcep(crong)) return ERR;

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
