//기능 구현 목록
// - 페이지 번호를 더하는 함수 생성
// - 페이지 번호를 곱하는 함수 생성
// - 포비와 크롱의 최댓값을 구하는 함수 생성
// - 최댓값을 비교해 승자를 판별하는 함수 생성
// - 예외사항을 처리하는 Error 함수 생성

function problem1(pobi, crong) {
  var answer;

  function getAddResult(pageNum) {
    pageNum = String(pageNum);
    let result = 0;
    for (let i = 0; i < pageNum.length; i++) {
      result += Number(pageNum[i]);
    }
    return result;
  }

  function getMultiplyResult(pageNum) {
    pageNum = String(pageNum);
    let result = 1;
    for (let i = 0; i < pageNum.length; i++) {
      result = result * Number(pageNum[i]);
    }
    return result;
  }

  return answer;
}

module.exports = problem1;
