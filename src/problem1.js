// 기능 목록
// 1. 예외 사항 validate 하기 (case1. pobi 또는 crong이 시작 면 또는 마지막 면이 나오도록 책을 펼치는 경우, case2. 각 배열의 값의 차이가 1 초과인 경우)
// 2. pobi의 가장 큰 수 구하기
// 3. crong의 가장 큰 수 구하기
// 4. 자릿수를 더하는 함수
// 5. 자릿수를 곱하는 함수
// 6. 승패 결과 처리하기

// 예외 사항을 체크하는 함수
function validate(user) {
  // case1. user가 1, 2, 399, 400의 값을 가지고 있을 때
  if (user.filter((el) => el <= 2 || el >= 399).length > 0) return false;
  // case2. 배열의 값의 차이가 1 초과일때 ex) [99, 102]
  if (user[1] - user[0] > 1) return false;
  return true;
}

// 가장 큰 수를 찾는 함수
function findMaxNum(user) {
  return (
    user
      // 배열안에 각 자리의 숫자를 담기
      .map((el) => String(el).split(""))
      .reduce((acc, cur) => {
        return Math.max(sum(acc), multiply(acc), sum(cur), multiply(cur));
      })
  );
}

// 자릿수를 더하는 함수
function sum(arr) {
  return arr.reduce((acc, cur) => Number(acc) + Number(cur));
}

// 자릿수를 곱하는 함수
function multiply(arr) {
  return arr.reduce((acc, cur) => Number(acc) * Number(cur));
}

function problem1(pobi, crong) {
  let answer;
  const pobiMax = findMaxNum(pobi);
  const crongMax = findMaxNum(crong);

  // 승패 결과 처리하기 (포비 1, 크롱 2, 무승부 0, 예외사항 -1)
  if (!validate(pobi) || !validate(crong)) answer = -1;
  else if (pobiMax - crongMax) answer = 1;
  else if (pobiMax < crongMax) answer = 2;
  else answer = 0;

  return answer;
}

module.exports = problem1;
