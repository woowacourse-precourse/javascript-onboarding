function problem1(pobi, crong) {
  var answer;
}

const isException = (arr) => {
  if (arr.includes(1) || arr.includes(400)) return true;
  else if (arr[1] - arr[0] !== 1) return true;
  else return false;
};

module.exports = problem1;

// 기능 구현
// 1. 예외사항 사전 처리
// 2. 문자열 변환을 통해 좌 우 페이지의 최대값 찾기
// 4. 위의 과정을 통해 포비와 크롱의 최대값 찾기
// 5. 비교 후  return값 도출

// 예외 사항
// 1. 좌우 페이지의 차이가 1 이상인 경우
// 2. [1,2] [399,400] 페이지가 나오는 경우
