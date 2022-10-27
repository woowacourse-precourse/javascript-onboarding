const checkIsError = (pobi, crong) => {
  // 왼쪽 페이지는 홀수 이어야한다.
  if (!pobi[0] % 2 || !crong[0] % 2) return 1;
  if (pobi[1] % 2 || crong[1] % 2) return 1;

  // 오른쪽 페이지는 왼쪽 페이지보다 1 큰수 이어야한다.
  if (pobi[0] + 1 !== pobi[1] || crong[0] + 1 !== crong[1]) return 1;

  // 왼쪽 페이지는 1~399 이어야한다.
  if (pobi[0] < 1 || pobi[0] > 399 || crong[0] < 1 || crong[0] > 399) return 1;

  // 오른쪽 페이지는 2~400 이어야한다.
  if (pobi[1] < 2 || pobi[1] > 400 || crong[1] < 2 || crong[1] > 400) return 1;

  return 0;
};

const addDigits = (num) => {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};

const multiplyDigits = (num) => {
  let multiply = 1;
  while (num > 0) {
    multiply *= num % 10;
    num = Math.floor(num / 10);
  }
  console.log(multiply);
  return multiply;
};

// 포비 win 1, 크롱 win 2, 무승부 0, 에러 -1
function problem1(pobi, crong) {
  let answer;

  // 포비와 크롱의 입력값에 오류가 있는지 확인
  if (checkIsError(pobi, crong)) return -1;

  const left_pobi = pobi[0];
  const right_pobi = pobi[1];

  const left_crong = crong[0];
  const right_crong = crong[1];

  let sum_pobi = 0,
    sum_crong = 0;
  let multiply_pobi = 0,
    multiply_crong = 0;

  let max_pobi = 0,
    max_crong = 0;

  sum_pobi =
    left_pobi % 10 === 9 ? addDigits(left_pobi) : addDigits(right_pobi);
  sum_crong =
    left_crong % 10 === 9 ? addDigits(left_crong) : addDigits(right_crong);

  multiply_pobi = Math.max(
    multiplyDigits(left_pobi),
    multiplyDigits(right_pobi)
  );
  multiply_crong = Math.max(
    multiplyDigits(left_crong),
    multiplyDigits(right_crong)
  );

  max_pobi = Math.max(sum_pobi, multiply_pobi);
  max_crong = Math.max(sum_crong, multiply_crong);

  answer = max_pobi > max_crong ? 1 : max_pobi < max_crong ? 2 : 0;
  return answer;
}

module.exports = problem1;
